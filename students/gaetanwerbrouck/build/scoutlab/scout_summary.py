"""Optional AI scouting summary for ScoutLab.

The model only ever sees numbers that are already in the ScoutLab table. It
writes a short plain-language summary, and every summary is checked against
those numbers (`check_answer`). Which model answers is a config choice
(`base_url` + `model`), so the provider can be swapped without touching the
rest of the app. Standard library only for the network call.
"""
from __future__ import annotations

import json
import math
import re
import unicodedata
import urllib.request
from dataclasses import dataclass, field

import pandas as pd

from scouting_core import POSITION_WEIGHTS, _get_metric_column

DEFAULT_BASE_URL = "http://localhost:11434/v1"  # Ollama. Any OpenAI-compatible endpoint works.
DEFAULT_MODEL = "llama3.2:3b"

# Words a summary must not contain, because nothing in the table supports them.
FORBIDDEN = re.compile(
    r"\b(injur\w*|contract\w*|wage\w*|salary|fees?|value\w*|bargain|undervalued|overvalued|guarantee\w*)\b"
    r"|will become|[€£$]", re.IGNORECASE)

INSTRUCTIONS = """You write short factual notes for football scouts.
Use ONLY the numbers given for each player. Do not add any other facts about the
player (no injuries, contracts, money, personality, tactics, or predictions).

For each player answer in exactly this format:
PLAYER: <name>
STRENGTH: <the metric label with the highest percentile, copied exactly>
WEAKNESS: <the metric label with the lowest percentile, copied exactly>
SUMMARY: <two sentences using only the numbers given, and one caveat about sample size or context>

Do not write anything else."""


@dataclass
class Facts:
    name: str
    team: str
    position: str
    age: float
    minutes: float
    metrics: list = field(default_factory=list)  # (label, raw value, percentile)

    def strongest(self):
        return max(self.metrics, key=lambda m: m[2])

    def weakest(self):
        return min(self.metrics, key=lambda m: m[2])

    def has_unique_extremes(self) -> bool:
        pcts = sorted(m[2] for m in self.metrics)
        return len(pcts) >= 3 and pcts[-1] > pcts[-2] and pcts[0] < pcts[1]


def _fmt(x: float) -> str:
    return f"{x:.2f}".rstrip("0").rstrip(".") if abs(x) < 100 else f"{x:.0f}"


def build_facts(players: pd.DataFrame, name: str) -> Facts:
    row = players.loc[players["Player"].eq(name)].iloc[0]
    metrics = []
    for metric, _weight, _hib in POSITION_WEIGHTS.get(row["Position_Group"], []):
        pct = row.get(f"Pct | {metric}")
        col = _get_metric_column(players, metric)
        if pct is None or pd.isna(pct) or col is None or pd.isna(row[col]):
            continue
        metrics.append((metric, float(row[col]), float(pct)))
    return Facts(name, str(row["Team"]), str(row["Position_Group"]),
                 float(row["Age"]), float(row["Minutes"]), metrics)


def facts_block(f: Facts, number: int | None = None) -> str:
    head = f"{number}. " if number else ""
    lines = [f"{head}{f.name} ({f.team}), {f.position}, age {_fmt(f.age)}, {_fmt(f.minutes)} league minutes"]
    for label, raw, pct in f.metrics:
        lines.append(f"   - {label}: {_fmt(raw)} (percentile among {f.position.lower()}s: {pct:.0f})")
    return "\n".join(lines)


def build_prompt(facts: list[Facts]) -> str:
    return INSTRUCTIONS + "\n\nPlayers:\n" + "\n".join(
        facts_block(f, i) for i, f in enumerate(facts, 1))


def ask_model(prompt: str, base_url: str = DEFAULT_BASE_URL, model: str = DEFAULT_MODEL,
              api_key: str = "ollama", temperature: float | None = 0.0, timeout: int = 600) -> str:
    """One call to any OpenAI-compatible chat endpoint. This is the only vendor-specific code."""
    body = {"model": model, "messages": [{"role": "user", "content": prompt}], "stream": False}
    if temperature is not None:
        body["temperature"] = temperature
    req = urllib.request.Request(
        base_url.rstrip("/") + "/chat/completions", data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.load(r)["choices"][0]["message"]["content"]


def _norm(s: str) -> str:
    return re.sub(r"[^a-z0-9%]+", " ", s.lower()).strip()


def split_players(answer: str) -> dict:
    """Return {normalised player name: block text} from a model answer."""
    blocks = {}
    for chunk in re.split(r"(?im)^\W*player\W*:", answer)[1:]:
        first, _, rest = chunk.partition("\n")
        blocks[_norm(first)] = rest
    return blocks


def _ascii(text: str) -> str:
    return unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode().lower()


def split_by_names(answer: str, facts: list) -> list:
    """Find each player's block by NAME, in order, whatever header style the model used
    ('PLAYER: x', '1. x', '**x**'). Returns one block of text (or None) per player."""
    lines = answer.splitlines()
    starts, i = [], 0
    for f in facts:
        want = _ascii(f.name)
        found = None
        for j in range(i, len(lines)):
            line = lines[j]
            low = _ascii(line)
            if want in low and len(line) < 90 and not re.match(r"\W*(strength|weakness|summary)", low):
                found = j
                break
        starts.append(found)
        if found is not None:
            i = found + 1
    blocks = []
    for k, st in enumerate(starts):
        if st is None:
            blocks.append(None)
            continue
        later = [x for x in starts[k + 1:] if x is not None]
        end = later[0] if later else len(lines)
        blocks.append("\n".join(lines[st + 1:end]))
    return blocks


def _field(block: str, key: str) -> str:
    m = re.search(rf"(?im)^\W*{key}\W*:\s*(.+)$", block)
    return m.group(1).strip() if m else ""


def _named_metrics(text: str, f: Facts) -> set:
    """Which metric labels does this text name? Longest labels first, so that
    'Goals per 90' is not counted inside 'Expected Goals per 90'. Extra numbers
    after the label are fine."""
    rest, found = " " + _norm(text) + " ", set()
    for label in sorted((m[0] for m in f.metrics), key=len, reverse=True):
        token = " " + _norm(label) + " "
        if token in rest:
            found.add(label)
            rest = rest.replace(token, " ")
    return found


def check_answer(block: str, f: Facts) -> dict:
    """Checks written down before any model is run. Returns {check: bool}."""
    strength, weakness = _named_metrics(_field(block, "STRENGTH"), f), _named_metrics(_field(block, "WEAKNESS"), f)
    summary = _field(block, "SUMMARY")
    # the summary may continue on following lines
    m = re.search(r"(?is)SUMMARY\W*:\s*(.+)$", block)
    if m:
        summary = m.group(1).strip()
    allowed = {90, 100}
    for _label, raw, pct in f.metrics:
        for d in (0, 1, 2):
            allowed.add(round(raw, d))
        allowed.add(round(pct))
    allowed |= {round(f.age), round(f.minutes), round(f.minutes, 1)}
    numbers = [float(x.replace(",", "")) for x in re.findall(r"\d[\d,]*\.?\d*", summary)]
    invented = [n for n in numbers if not any(math.isclose(n, a, abs_tol=0.006) for a in allowed)]
    return {
        "strength_correct": strength == {f.strongest()[0]},
        "weakness_correct": weakness == {f.weakest()[0]},
        "no_invented_numbers": not invented,
        "no_unsupported_claims": not FORBIDDEN.search(summary),
        "has_summary": len(summary.split()) >= 8,
    }


def summarise_one(players: pd.DataFrame, name: str, **model_kwargs) -> tuple[str, dict]:
    """Used by the app: one player in, (model text, check results) out."""
    f = build_facts(players, name)
    text = ask_model(build_prompt([f]), **model_kwargs)
    blocks = split_players(text)
    block = next(iter(blocks.values()), text)
    return text, check_answer(block, f)
