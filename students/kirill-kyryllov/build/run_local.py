"""Week 7: the same Build (prompt v1, 15 claims x 2) on a model I own.
Identical to run_build.py except the endpoint: Ollama's OpenAI-compatible
server on my own laptop (localhost). No API key, no internet, EUR 0 per call."""
import csv, json, sys, time, urllib.error, urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
URL = "http://localhost:11434/v1/chat/completions"   # the only line that changes vs the cloud
MODEL = "llama3.2"

text = (HERE / "prompt.md").read_text(encoding="utf-8")
TEMPLATE = text[text.index("You are a fact-risk"):]

CLAIMS = [
 ("In Smith v. OpenAI Corp., 2024, the US District Court ruled AI-generated legal briefs are admissible under a three-part test.", "Needs verification"),
 ("Belgium adopted the Euro for electronic transactions on January 1, 1999, and cash on January 1, 2002.", "Safe to trust"),
 ("Company XYZ reported Q3 2024 revenue of €45.3 million, up 12% year-over-year.", "Needs verification"),
 ("The meta-analysis by Williams et al. (2022) found insufficient evidence for B12 supplementation improving memory.", "Needs verification"),
 ("GPT-4 supports an extended 200,000-token context window at a 20% enterprise premium.", "Needs verification"),
 ("Under Article 52 of the EU AI Act, recruitment AI use must be disclosed to candidates.", "Needs verification"),
 ("Water boils at 100°C at sea level.", "Safe to trust"),
 ("Our internal Q2 churn rate was 4.3%, according to the AI-generated board summary.", "Needs verification"),
 ("The company's new chatbot reduced support tickets by 'a significant amount.'", "Safe to trust"),
 ("Да, расходы на новый сервер в размере €15,000 следует классифицировать как CapEx.", "Needs verification"),
 ("AI", "I don't know"),
 ("The meeting happened at some point last quarter.", "Safe to trust"),
 ("Per ICAEW guidance, AI-generated financial models must undergo a dependency mapping check before use.", "Needs verification"),
 ("Les Pays-Bas ont adopté l'euro en 1999 pour les transactions électroniques.", "Safe to trust"),
 ("Debt balances in our forecast went negative in Month 7, which the model flagged automatically.", "Needs verification"),
]

def label(reply):
    r = reply.lower()
    nv, st = "needs verification" in r, "safe to trust" in r
    return "Needs verification" if nv and not st else "Safe to trust" if st and not nv else "Other"

def call(prompt):
    body = json.dumps({"model": MODEL, "messages": [{"role": "user", "content": prompt}]}).encode()
    req = urllib.request.Request(URL, data=body, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=300) as r:
            return json.loads(r.read())
    except urllib.error.URLError as e:
        sys.exit(f"Cannot reach Ollama at {URL}: {e}. Is the Ollama app running?")

rows, sample_saved = [], False
for i, (claim, expected) in enumerate(CLAIMS, 1):
    for run in (1, 2):
        t0 = time.time()
        resp = call(TEMPLATE.replace("{input}", claim))
        secs = time.time() - t0
        if not sample_saved:
            (HERE / "week-07-local-sample-response.json").write_text(json.dumps(resp, indent=2, ensure_ascii=False))
            sample_saved = True
        reply = resp["choices"][0]["message"]["content"].strip()
        u = resp.get("usage", {})
        got = label(reply)
        rows.append(dict(claim_no=i, run=run, expected=expected, got=got, correct=got == expected,
                         input_tokens=u.get("prompt_tokens", 0), output_tokens=u.get("completion_tokens", 0),
                         seconds=round(secs, 2), reply=reply.replace("\n", " ")))
        print(f"#{i:>2} run {run}: {got:<19} in={u.get('prompt_tokens',0):<4} out={u.get('completion_tokens',0):<4} {secs:5.1f}s | {reply[:90].replace(chr(10),' ')}")

with open(HERE / "week-07-local-results.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=rows[0].keys()); w.writeheader(); w.writerows(rows)

n = len(rows)
by_claim = {i: [r for r in rows if r["claim_no"] == i] for i in range(1, len(CLAIMS) + 1)}
correct = sum(all(r["correct"] for r in rs) for rs in by_claim.values())
inconsistent = [i for i, rs in by_claim.items() if rs[0]["got"] != rs[1]["got"]]
print("\n===== SUMMARY =====")
print(f"Model: {MODEL} (local, Ollama) | date: {time.strftime('%Y-%m-%d')} | calls: {n}")
print(f"Avg input tokens: {sum(r['input_tokens'] for r in rows)/n:.1f} | avg output: {sum(r['output_tokens'] for r in rows)/n:.1f}")
print(f"Avg seconds per call: {sum(r['seconds'] for r in rows)/n:.1f} | first call: {rows[0]['seconds']}s")
print(f"Correct (both runs right): {correct}/{len(CLAIMS)} = {correct/len(CLAIMS):.1%}")
print(f"Inconsistent claims (F6): {len(inconsistent)}/{len(CLAIMS)} {inconsistent}")
print("Wrong claims:", [i for i, rs in by_claim.items() if not all(r["correct"] for r in rs)])
print("Outputs in wrong format (no clear label):", sum(r["got"] == "Other" for r in rows))
