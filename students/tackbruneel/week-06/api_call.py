"""Week 6 — first API calls, measured.

Run:  python3 students/tackbruneel/week-06/api_call.py
It asks for a Google AI Studio key (hidden input, never saved or printed),
then makes:
  1. GET  models list            -> api/models.txt   (which IDs this key can call)
  2. POST course lab prompt      -> api/lab-call.json
  3. POST my Build (prompt v1)   -> api/build-T03.json, build-T09.json, build-T12.json
     on three real test inputs: typical form, longest, shortest.
Every response is saved raw so the usageMetadata is visible.
"""
import getpass
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "api")
BUILD = os.path.join(HERE, "..", "build")
BASE = "https://generativelanguage.googleapis.com/v1beta"
WANTED = os.environ.get("MODEL", "gemini-3.1-flash-lite")
LAB_PROMPT = ("Write a one-sentence customer support response to a customer "
              "asking about our 30-day return policy.")
BUILD_INPUTS = ["T03", "T09", "T12"]


def call(method, path, key, body=None):
    # Key in the header first; some key types are only accepted as ?key=
    auths = [(BASE + path, {"x-goog-api-key": key}),
             (BASE + path + ("&" if "?" in path else "?") + "key=" + key, {})]
    for attempt in range(3):
        for url, headers in auths:
            req = urllib.request.Request(
                url, method=method,
                data=json.dumps(body).encode() if body else None,
                headers={**headers, "Content-Type": "application/json"})
            t0 = time.time()
            try:
                with urllib.request.urlopen(req, timeout=60) as r:
                    return json.load(r), round(time.time() - t0, 2)
            except urllib.error.HTTPError as e:
                code = e.code
                err = f"HTTP {code} on {path.split('?')[0]}: {e.read().decode()[:400]}"
                if code not in (400, 401, 403):
                    break
        if code not in (429, 500, 503) or attempt == 2:
            break
        wait = 15 * (attempt + 1)
        print(f"  Google busy (HTTP {code}), retrying in {wait}s ...")
        time.sleep(wait)
    raise RuntimeError(err)


def prompt_v1():
    text = open(os.path.join(BUILD, "prompt.md"), encoding="utf-8").read()
    return re.search(r"## v1.*?```\n(.*?)```", text, re.S).group(1).strip()


def test_input(tid):
    text = open(os.path.join(BUILD, "test-set.md"), encoding="utf-8").read()
    return re.search(rf"### {tid} .*?```\n(.*?)```", text, re.S).group(1).strip()


def save(name, payload):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)


def main():
    os.makedirs(OUT, exist_ok=True)
    key = getpass.getpass("Google AI Studio API key (hidden): ").strip().strip('"\'')
    # Shape check only; the key itself is never printed
    print(f"Key received: {len(key)} characters, starts with 'AIza': {key.startswith('AIza')}")
    if not key:
        sys.exit("Nothing was pasted. Run again and paste with Cmd+V before pressing Enter.")
    stamp = datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")

    try:
        models, _ = call("GET", "/models?pageSize=200", key)
    except RuntimeError as e:
        sys.exit(str(e))
    ids = [m["name"].removeprefix("models/") for m in models.get("models", [])
           if "generateContent" in m.get("supportedGenerationMethods", [])]
    with open(os.path.join(OUT, "models.txt"), "w") as f:
        f.write(f"# Models list, {stamp}\n" + "\n".join(ids) + "\n")
    # Preferred model first; if Google is overloaded on it, fall back to another Flash-Lite
    candidates = [m for m in [WANTED, "gemini-3.5-flash-lite", "gemini-flash-lite-latest"] if m in ids]
    if not candidates:
        sys.exit("No Flash-Lite model in the list; see api/models.txt and rerun with MODEL=<id>")
    print(f"{len(ids)} models listed; trying {', '.join(candidates)}")

    summary = []
    model = None
    runs = [("lab-call.json", None, LAB_PROMPT)]
    runs += [(f"build-{t}.json", prompt_v1(), test_input(t)) for t in BUILD_INPUTS]
    for name, system, user in runs:
        if os.path.exists(os.path.join(OUT, name)):  # a re-run only fetches what is missing
            prev = json.load(open(os.path.join(OUT, name), encoding="utf-8"))
            model = model or prev["model"]
            summary.append((name, prev["latency_s"], prev["response"].get("usageMetadata", {})))
            print(f"{name:18} already measured, skipped")
            continue
        body = {"contents": [{"role": "user", "parts": [{"text": user}]}]}
        if system:
            body["systemInstruction"] = {"parts": [{"text": system}]}
        for m in ([model] if model else candidates):
            try:
                resp, secs = call("POST", f"/models/{m}:generateContent", key, body)
                model = m
                break
            except RuntimeError as e:
                print(f"  {m} failed: {str(e)[:120]}")
        else:
            sys.exit("All candidate models failed; try again in a few minutes.")
        save(name, {"requested_at": stamp, "model": model, "latency_s": secs,
                    "request": body, "response": resp})
        u = resp.get("usageMetadata", {})
        summary.append((name, secs, u))
        print(f"{name:18} {secs:5}s  in={u.get('promptTokenCount')} "
              f"out={u.get('candidatesTokenCount')} thinking={u.get('thoughtsTokenCount', 0)} "
              f"total={u.get('totalTokenCount')}")
        time.sleep(7)  # free tier: stay under ~10 requests/minute

    save("summary.json", {"requested_at": stamp, "model": model,
                          "runs": [{"file": n, "latency_s": s, "usage": u} for n, s, u in summary]})
    print("Saved to", OUT)


if __name__ == "__main__":
    main()
