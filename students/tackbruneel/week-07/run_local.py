"""Week 7 lab: run the Build test set (prompt v1) on a local open-weights model via Ollama.
Same prompt, same 15 inputs, 2 runs each, fresh call per input (no shared history).
Raw responses are saved to runs/<model>/<Txx>-<run>.json. Usage: python3 run_local.py [model]"""
import json, re, sys, time, urllib.request, pathlib

MODEL = sys.argv[1] if len(sys.argv) > 1 else "llama3.2"
HERE = pathlib.Path(__file__).parent
BUILD = HERE.parent / "build"
prompt = re.search(r"## v1.*?```\n(.*?)```", (BUILD / "prompt.md").read_text(), re.S).group(1).strip()
inputs = dict(re.findall(r"### (T\d\d) .*?\n```\n(.*?)```", (BUILD / "test-set.md").read_text(), re.S))
out = HERE / "runs" / MODEL.replace(":", "_"); out.mkdir(parents=True, exist_ok=True)

for run in ("A", "B"):
    for tid, text in inputs.items():
        body = {"model": MODEL, "stream": False,
                "messages": [{"role": "user", "content": prompt + "\n\nInquiry:\n" + text.strip()}]}
        t0 = time.time()
        req = urllib.request.Request("http://localhost:11434/api/chat", json.dumps(body).encode(),
                                     {"Content-Type": "application/json"})
        res = json.load(urllib.request.urlopen(req, timeout=600))
        res["wall_seconds"] = round(time.time() - t0, 2)
        (out / f"{tid}-{run}.json").write_text(json.dumps(res, ensure_ascii=False, indent=2))
        print(run, tid, res["wall_seconds"], "s", res.get("prompt_eval_count"), "in", res.get("eval_count"), "out")
