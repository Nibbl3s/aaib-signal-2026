#!/usr/bin/env python3
"""Run the existing freight test set twice against a local Ollama model.

Run from the repository root:
    ollama pull qwen2.5:3b
    python3 students/janis-krainis/build/benchmark_local.py --model qwen2.5:3b

This runner accepts localhost Ollama endpoints only. It does not call a hosted API.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any

# Prompt v2 copied from build/prompt.md. Keep this text unchanged for comparability.
SYSTEM_PROMPT = """You are a precise operational data parser for a European freight forwarding team. Your sole job is to read incoming client transport inquiries and extract four exact fields into a strict structured format. You must prioritize data integrity over completeness: if a field is missing, you must explicitly state it rather than guessing.

Extract the following fields precisely as stated or implied in the text:
1. Origin:
   - Extract the physical pickup location, port, mill, factory, or dispatch hub.
   - If multiple legs are mentioned (e.g., transit hubs vs. final suppliers), capture the immediate origin point specified for the current movement.
   - If not mentioned, output exactly: Not specified. Do not invent a location.
2. Destination:
   - Extract the final delivery location, plant, warehouse, or hub.
   - If not mentioned, output exactly: Not specified.
3. Weight:
   - Extract the gross weight or mass. Always normalize units into standard metric kilograms (e.g., convert tons to kg).
   - If conversational quantities are used (e.g., about two tons), convert them mathematically (e.g., 2,000 kg).
   - If no weight is mentioned, output exactly: Not specified. Never fabricate a number.
4. Cargo Type:
   - Extract the specific description of the goods being transported. If not mentioned, output exactly: Not specified.

Output Format (Strictly Enforced):
- Origin: [Extracted value]
- Destination: [Extracted value]
- Weight: [Extracted value]
- Cargo Type: [Extracted value]

Operational Safeguards:
- Zero Hallucination Policy: Do not assume, infer, or extrapolate missing details.
- Literal Grounding: Rely exclusively on the provided text. If an input is ambiguous, reflect the ambiguity rather than smoothing it over.
"""

TESTS = [
    (1, "Hi team, please book a shipment of 1,200 kg of auto spare parts from Antwerp port to our warehouse in Vienna. Ready for pickup on Thursday.",
     {"Origin": "Antwerp port", "Destination": "Vienna warehouse", "Weight": "1,200 kg", "Cargo Type": "Auto spare parts"}),
    (2, "Need to move 450kg electronics from Rotterdam to Milan ASAP.",
     {"Origin": "Rotterdam", "Destination": "Milan", "Weight": "450 kg", "Cargo Type": "Electronics"}),
    (3, "Bonjour, merci d'organiser le transport de 3200 kg de textiles de Marseille vers Hambourg.",
     {"Origin": "Marseille", "Destination": "Hamburg", "Weight": "3,200 kg", "Cargo Type": "Textiles"}),
    (4, "Good morning, following our annual contract agreement, we have a new batch ready at the factory in Bilbao. It's medical diagnostics equipment packed in 4 crates, total gross weight 850 kilos, destined for the distribution center in Prague.",
     {"Origin": "Bilbao factory", "Destination": "Prague distribution center", "Weight": "850 kg", "Cargo Type": "Medical diagnostics equipment"}),
    (5, "Hi Drewes team, can you arrange a pallet of fresh pharmaceuticals from Frankfurt airport to Budapest? Let me know your next flight slot.",
     {"Origin": "Frankfurt airport", "Destination": "Budapest", "Weight": "Not specified", "Cargo Type": "Fresh pharmaceuticals"}),
    (6, "BOOKING REF: DE-PL-9921\nFROM: Warehouse Poznan\nTO: Logistics Hub Leipzig\nGOODS: Industrial steel valves\nQTY/WT: 12 pallets / 5,400kg",
     {"Origin": "Warehouse Poznan", "Destination": "Logistics Hub Leipzig", "Weight": "5,400 kg", "Cargo Type": "Industrial steel valves"}),
    (7, "Please quote and book a full load shipment. 24 metric tons of packaged paper rolls moving from Gothenburg mill to Lyon.",
     {"Origin": "Gothenburg mill", "Destination": "Lyon", "Weight": "24,000 kg", "Cargo Type": "Packaged paper rolls"}),
    (8, "Hey, remember that regular run we do? Same setup as last Tuesday, moving the chemical additives batch—about two tons—from the terminal in Rotterdam down to our plant in Antwerp.",
     {"Origin": "Rotterdam terminal", "Destination": "Antwerp plant", "Weight": "2,000 kg", "Cargo Type": "Chemical additives"}),
    (9, "We picked up goods from our supplier in Valencia, but they need to be rerouted. Current location is our transit hub in Madrid, and final delivery is moving to Bucharest. Weight is 1,500 kg of ceramic tiles.",
     {"Origin": "Madrid transit hub (Valencia supplier noted as origin point)", "Destination": "Bucharest", "Weight": "1,500 kg", "Cargo Type": "Ceramic tiles"}),
    (10, "Hi, we need to move some containerized machine parts over to our partner site next week. Will send specifications later.",
     {"Origin": "Not specified", "Destination": "Partner site", "Weight": "Not specified", "Cargo Type": "Machine parts"}),
]

FIELDS = ("Origin", "Destination", "Weight", "Cargo Type")


def normalize_text(value: str) -> str:
    value = value.casefold().strip()
    value = re.sub(r"\s+", " ", value)
    return value.rstrip(" .;,")


def parse_fields(raw: str) -> dict[str, str]:
    found: dict[str, str] = {}
    for field in FIELDS:
        match = re.search(
            rf"^\s*{re.escape(field)}\s*:\s*(.*?)\s*$",
            raw,
            flags=re.IGNORECASE | re.MULTILINE,
        )
        found[field] = match.group(1).strip().strip('"') if match else ""
    return found


def weight_kg(value: str) -> float | None:
    if normalize_text(value) == "not specified":
        return None
    match = re.search(r"(\d[\d, .]*)\s*(?:kg|kilograms?|kilos)\b", value, flags=re.I)
    if not match:
        return float("nan")
    number = re.sub(r"[ ,]", "", match.group(1))
    try:
        return float(number)
    except ValueError:
        return float("nan")


def field_matches(field: str, actual: str, expected: str) -> bool:
    if field != "Weight":
        return normalize_text(actual) == normalize_text(expected)
    if normalize_text(expected) == "not specified":
        return normalize_text(actual) == "not specified"
    actual_kg = weight_kg(actual)
    expected_kg = weight_kg(expected)
    return actual_kg is not None and expected_kg is not None and actual_kg == expected_kg


def call_ollama(url: str, model: str, prompt: str, seed: int, timeout: int) -> dict[str, Any]:
    body = {
        "model": model,
        "stream": False,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt},
        ],
        "options": {"temperature": 0.2, "seed": seed, "num_predict": 220},
    }
    request = urllib.request.Request(
        url,
        data=json.dumps(body).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    start = time.perf_counter()
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            data = json.loads(response.read().decode("utf-8"))
    except urllib.error.URLError as exc:
        raise RuntimeError(
            f"Cannot reach local Ollama at {url}. Start Ollama and pull {model}. Details: {exc}"
        ) from exc

    latency_ms = round((time.perf_counter() - start) * 1000, 1)
    if data.get("error"):
        raise RuntimeError(f"Ollama error: {data['error']}")
    output = data.get("message", {}).get("content", "")
    if not output:
        raise RuntimeError("Ollama returned no message.content.")

    return {
        "raw_output": output,
        "prompt_tokens": data.get("prompt_eval_count"),
        "completion_tokens": data.get("eval_count"),
        "latency_ms": latency_ms,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--model", default="qwen2.5:3b")
    parser.add_argument("--url", default="http://localhost:11434/api/chat")
    parser.add_argument("--timeout", type=int, default=180)
    parser.add_argument("--output-dir", default="students/janis-krainis/build")
    args = parser.parse_args()

    if not (args.url.startswith("http://localhost:") or args.url.startswith("http://127.0.0.1:")):
        raise SystemExit("Safety stop: use a localhost Ollama endpoint; remote endpoints are not accepted.")

    results: list[dict[str, Any]] = []
    for run_number, seed in ((1, 41), (2, 42)):
        print(f"\nRun {run_number}/2")
        for test_id, raw_email, expected in TESTS:
            result = call_ollama(
                args.url,
                args.model,
                f"Incoming freight email:\n{raw_email}",
                seed,
                args.timeout,
            )
            actual = parse_fields(result["raw_output"])
            failed_fields = [
                field for field in FIELDS
                if not field_matches(field, actual[field], expected[field])
            ]
            item = {
                "input_id": test_id,
                "run": run_number,
                "seed": seed,
                "expected": expected,
                "actual": actual,
                "raw_output": result["raw_output"],
                "failed_fields": failed_fields,
                "pass": not failed_fields,
                **{key: result[key] for key in ("prompt_tokens", "completion_tokens", "latency_ms")},
            }
            results.append(item)
            status = "PASS" if item["pass"] else "FAIL (" + ", ".join(failed_fields) + ")"
            print(f"  Input {test_id:02d}: {status}")

    summaries = []
    for run_number in (1, 2):
        rows = [item for item in results if item["run"] == run_number]
        passes = sum(item["pass"] for item in rows)
        summaries.append({
            "run": run_number,
            "passes": passes,
            "rate": passes / len(rows),
            "prompt_tokens": sum(item["prompt_tokens"] or 0 for item in rows),
            "completion_tokens": sum(item["completion_tokens"] or 0 for item in rows),
            "mean_latency_ms": round(sum(item["latency_ms"] for item in rows) / len(rows), 1),
        })

    stable_cases = sum(
        all(item["pass"] for item in results if item["input_id"] == test_id)
        for test_id, _, _ in TESTS
    )
    overall_passes = sum(item["pass"] for item in results)
    report = {
        "model": args.model,
        "endpoint": args.url,
        "runner": "Ollama local API",
        "run_summaries": summaries,
        "overall_passes": overall_passes,
        "overall_rate": overall_passes / len(results),
        "stable_cases": stable_cases,
        "stable_case_rate": stable_cases / len(TESTS),
        "api_cost_eur": 0,
        "cost_note": "€0 API charge only; electricity, hardware and operator time excluded.",
        "results": results,
    }

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    json_path = output_dir / "local-benchmark-results.json"
    markdown_path = output_dir / "local-benchmark-results.md"
    json_path.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")

    lines = [
        "# Actual local Ollama benchmark results",
        "",
        f"- Model: {args.model}",
        f"- Endpoint: {args.url}",
        "- API cost: €0 (electricity and hardware excluded)",
        "",
        "| Run | Passes | Rate | Prompt tokens | Completion tokens | Mean latency |",
        "|---:|---:|---:|---:|---:|---:|",
    ]
    for summary in summaries:
        lines.append(
            f"| {summary['run']} | {summary['passes']}/10 | {summary['rate']:.0%} | "
            f"{summary['prompt_tokens']} | {summary['completion_tokens']} | "
            f"{summary['mean_latency_ms']} ms |"
        )
    lines += [
        "",
        f"Overall: **{overall_passes}/20 outputs ({overall_passes / 20:.0%})**.",
        f"Cases passed in both runs: **{stable_cases}/10 ({stable_cases / 10:.0%})**.",
        "",
        "| Input | Run 1 | Run 2 | Failed fields |",
        "|---:|---|---|---|",
    ]
    for test_id, _, _ in TESTS:
        first, second = [item for item in results if item["input_id"] == test_id]
        failed = sorted(set(first["failed_fields"] + second["failed_fields"]))
        lines.append(
            f"| {test_id} | {'PASS' if first['pass'] else 'FAIL'} | "
            f"{'PASS' if second['pass'] else 'FAIL'} | {', '.join(failed) if failed else '—'} |"
        )
    lines += ["", "## Raw outputs", ""]
    for item in results:
        lines += [
            f"### Input {item['input_id']} — Run {item['run']} — {'PASS' if item['pass'] else 'FAIL'}",
            "",
            f"- Tokens: {item['prompt_tokens']} prompt / {item['completion_tokens']} completion",
            f"- Latency: {item['latency_ms']} ms",
            f"- Failed fields: {', '.join(item['failed_fields']) if item['failed_fields'] else 'none'}",
            "",
            "~~~text",
            item["raw_output"].strip(),
            "~~~",
            "",
        ]
    markdown_path.write_text("\n".join(lines), encoding="utf-8")

    print(f"\nSaved {json_path}")
    print(f"Saved {markdown_path}")
    print(f"Overall: {overall_passes}/20 outputs passed; {stable_cases}/10 cases passed both runs.")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except RuntimeError as error:
        print(f"ERROR: {error}", file=sys.stderr)
        raise SystemExit(1)
