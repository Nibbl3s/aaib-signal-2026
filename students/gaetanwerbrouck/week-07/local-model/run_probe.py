"""Week 7 probe: ScoutLab's AI scouting summary, tested on a model you choose.

Run it with ScoutLab's own Python (it needs pandas and scikit-learn):

  ..\\..\\build\\scoutlab\\.venv\\Scripts\\python.exe run_probe.py --model llama3.2:3b

Three ways to use it:
  1. Local or API model:   run_probe.py --model NAME [--base-url URL] [--api-key KEY]
  2. Export the prompt:    run_probe.py --export-prompt prompt.txt   (paste it into any chat)
  3. Score pasted answers: run_probe.py --score-files run1.txt run2.txt --label Claude

The ten players are fixed below. The expected strongest and weakest metric
for each player come from the ScoutLab table, so they were known before any
model was run.
"""
import argparse
import re
import sys
import time
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent.parent / "build" / "scoutlab"))

import pandas as pd  # noqa: E402
import scout_summary as ss  # noqa: E402
from scouting_core import prepare_players  # noqa: E402

DATA_URL = ("https://raw.githubusercontent.com/sahilwalawalkar/FootballScoutingAI/main/"
            "data/processed/premier_league_2023_24_scouting_final.csv")
PLAYERS = ["Harry Wilson", "Joao Pedro", "Marcus Rashford", "Edson Álvarez", "Andreas Pereira",
           "Lewis Cook", "Mads Roerslev", "Destiny Udogie", "Gabriel Osho", "Martin Dubravka"]
CHECKS = ["strength_correct", "weakness_correct", "no_invented_numbers", "no_unsupported_claims", "has_summary"]
PRICE_IN, PRICE_OUT, USD_EUR = 2.0, 12.0, 0.92  # lesson reference prices per million tokens (estimate)


def load_facts(csv):
    frame = pd.read_csv(csv or DATA_URL)
    players = prepare_players(frame)
    return [ss.build_facts(players, n) for n in PLAYERS]


def score_run(answer, facts):
    blocks = ss.split_by_names(answer, facts)
    n_header = len(re.findall(r"(?im)^\W*player\W*:", answer))
    results = []
    for f, block in zip(facts, blocks):
        if block is None:
            results.append({c: False for c in CHECKS} | {"missing": True, "exact_format": False})
        else:
            results.append(ss.check_answer(block, f) | {"missing": False, "exact_format": n_header >= len(facts)})
    return results


def passed(r):
    return all(r[c] for c in CHECKS)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--model")
    ap.add_argument("--base-url", default=ss.DEFAULT_BASE_URL)
    ap.add_argument("--api-key", default="ollama")
    ap.add_argument("--temperature", type=float, default=None,
                    help="omit for cloud models that restrict it; local default is 0")
    ap.add_argument("--runs", type=int, default=2)
    ap.add_argument("--csv", help="use a local copy of the ScoutLab dataset instead of the URL")
    ap.add_argument("--export-prompt")
    ap.add_argument("--score-files", nargs="+")
    ap.add_argument("--label", default=None)
    args = ap.parse_args()

    facts = load_facts(args.csv)
    prompt = ss.build_prompt(facts)
    if args.export_prompt:
        Path(args.export_prompt).write_text(prompt, encoding="utf-8")
        print(f"Prompt written to {args.export_prompt}. Paste it into a NEW chat, twice (two separate chats).")
        return

    answers, secs = [], []
    if args.score_files:
        answers = [Path(p).read_text(encoding="utf-8") for p in args.score_files]
        label = args.label or "pasted"
    else:
        if not args.model:
            ap.error("give --model, or use --score-files / --export-prompt")
        label = args.label or args.model
        temp = args.temperature
        if temp is None and "localhost" in args.base_url:
            temp = 0.0
        for i in range(args.runs):
            t = time.time()
            answers.append(ss.ask_model(prompt, args.base_url, args.model, args.api_key, temp))
            secs.append(time.time() - t)
            print(f"run {i + 1} done in {secs[-1]:.1f}s")

    runs = [score_run(a, facts) for a in answers]
    n = len(facts)
    total = n * len(runs)
    ok = sum(passed(r) for run in runs for r in run)
    fails = {c: sum(not r[c] for run in runs for r in run) for c in CHECKS}
    missing = sum(r["missing"] for run in runs for r in run)
    in_tok = len(prompt) / 4
    out_tok = sum(len(a) for a in answers) / len(answers) / 4
    cloud_eur = (in_tok * PRICE_IN + out_tok * PRICE_OUT) / 1e6 * USD_EUR

    out = [f"# ScoutLab AI summary probe: {label}", "",
           f"A player counts as a success only if all five checks pass. "
           f"**Success: {ok} of {total}** (" + ", ".join(
               f"run {i + 1}: {sum(passed(r) for r in run)} of {n}" for i, run in enumerate(runs)) + ").",
           (f"Seconds per run: {', '.join(f'{s:.1f}' for s in secs)}. " if secs else "")
           + f"Approx. tokens per run: {in_tok:.0f} in, {out_tok:.0f} out. "
           f"Cost per run if billed at the lesson reference prices: about EUR {cloud_eur:.3f} (estimate). "
           "A model on your own laptop costs EUR 0.", "",
           "## How it failed (count of failed checks across all runs)", ""]
    names = {"strength_correct": "Named the wrong strongest metric", "weakness_correct": "Named the wrong weakest metric",
             "no_invented_numbers": "Used a number that is not in the data (invented)",
             "no_unsupported_claims": "Made a claim the data cannot support (money, injury, contract...)",
             "has_summary": "Summary missing or too short"}
    out += [f"- {names[c]}: **{fails[c]}**" for c in CHECKS]
    exact = sum(r["exact_format"] for run in runs for r in run)
    out += [f"- Player block missing from the answer: **{missing}**",
            f"- Followed the exact `PLAYER:` output format (not counted as a failure): **{exact} of {total}**", "",
            "## Per player", "", "| Player | Expected strength | Expected weakness | "
            + " | ".join(f"Run {i + 1}" for i in range(len(runs))) + " |",
            "|---|---|---|" + "---|" * len(runs)]
    for i, f in enumerate(facts):
        cells = []
        for run in runs:
            r = run[i]
            cells.append("pass" if passed(r) else "FAIL: " + ", ".join(c for c in CHECKS if not r[c]))
        out.append(f"| {f.name} | {f.strongest()[0]} | {f.weakest()[0]} | " + " | ".join(cells) + " |")
    out += ["", "## Raw answers", ""]
    for i, a in enumerate(answers, 1):
        out += [f"### Run {i}", "```", a.strip(), "```", ""]
    dest = HERE / f"probe-results-{''.join(ch if ch.isalnum() else '-' for ch in label)}.md"
    dest.write_text("\n".join(out), encoding="utf-8")
    print(f"Success: {ok} of {total}. Written to {dest.name}")


if __name__ == "__main__":
    main()
