"""Run the original freight-classification cases twice in fresh requests."""

import argparse
import datetime
import getpass
import json
import time
import urllib.error
import urllib.request
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("provider", choices=("local", "cloud"))
    parser.add_argument("--model")
    parser.add_argument("--cpu", action="store_true", help="Force CPU inference for Ollama.")
    parser.add_argument("--llama-server", action="store_true", help="Use the local CPU llama.cpp fallback.")
    args = parser.parse_args()
    local = args.provider == "local"
    fallback = local and args.llama_server
    model = args.model or ("llama3.2:3b" if local else "gemini-3.5-flash-lite")
    if not model or any(c not in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_:" for c in model):
        parser.error("Enter a model name without a URL or path.")

    root = Path(__file__).resolve().parent
    fixture = json.loads((root / "benchmark-inputs.json").read_text())
    headers = {"Content-Type": "application/json"}
    if local:
        endpoint = ("http://127.0.0.1:18087/v1/chat/completions" if fallback
                    else "http://127.0.0.1:11434/api/chat")
        opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
    else:
        endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
        headers["x-goog-api-key"] = getpass.getpass("Gemini API key (hidden): ").strip()
        if not headers["x-goog-api-key"]:
            parser.error("No key entered. Copy the key from Google AI Studio and paste at the hidden prompt.")
        opener = urllib.request.build_opener()

    started = datetime.datetime.now(datetime.timezone.utc)
    path = root / f"{args.provider}-{started:%Y%m%dT%H%M%S%fZ}.jsonl"
    with path.open("x", encoding="utf-8") as log:
        for repetition in (1, 2):
            for case in fixture["cases"]:
                prompt = fixture["prompt"].replace("[Paste one source description here]", case["input"])
                if local:
                    body = {"model": model, "messages": [{"role": "user", "content": prompt}], "stream": True}
                    if fallback:
                        body.update(max_tokens=256, stream_options={"include_usage": True})
                    elif args.cpu:
                        body["options"] = {"num_gpu": 0}
                else:
                    body = {"contents": [{"parts": [{"text": prompt}]}]}
                request = urllib.request.Request(endpoint, json.dumps(body).encode(), headers)
                start = time.monotonic()
                row = {"case": case["id"], "repetition": repetition, "provider": args.provider,
                       "requested_model": model, "cpu_only": (args.cpu or fallback) if local else None, "runner": "llama.cpp" if fallback else "Ollama" if local else "Gemini API", "time_utc": datetime.datetime.now(datetime.timezone.utc).isoformat()}
                try:
                    with opener.open(request, timeout=120) as result:
                        row["status"] = result.status
                        if local:
                            chunks = []
                            for line in result:
                                if fallback:
                                    if not line.startswith(b"data: "):
                                        continue
                                    payload = line[6:].strip()
                                    if payload == b"[DONE]":
                                        break
                                    chunk = json.loads(payload)
                                    choices = chunk.get("choices") or []
                                    fragment = choices[0].get("delta", {}).get("content") if choices else ""
                                else:
                                    chunk = json.loads(line)
                                    fragment = chunk.get("message", {}).get("content", "")
                                if fragment and "first_token_seconds" not in row:
                                    row["first_token_seconds"] = round(time.monotonic() - start, 3)
                                chunks.append(chunk)
                            row["response"] = chunks
                        else:
                            row["response"] = json.load(result)
                except urllib.error.HTTPError as error:
                    row["status"] = error.code
                    row["error"] = error.read().decode(errors="replace")
                except (OSError, ValueError) as error:
                    row["error"] = str(error)
                row["seconds"] = round(time.monotonic() - start, 3)
                if not local:
                    line = json.dumps(row, ensure_ascii=False)
                    key = headers["x-goog-api-key"]
                    if key:
                        line = line.replace(key, "[REDACTED]")
                else:
                    line = json.dumps(row, ensure_ascii=False)
                log.write(line + "\n")
                log.flush()
                print(f"{case['id']} round {repetition}: {row.get('status', 'connection error')}", flush=True)
                if "status" not in row or row.get("status") in (401, 403, 404, 429) or (local and row.get("status") == 500):
                    raise SystemExit(f"Stopped after recording the error in {path}.")
    print(path)


if __name__ == "__main__":
    main()
