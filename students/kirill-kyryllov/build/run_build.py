"""Week 6: run the Claim Risk Classifier (prompt v1) through the Gemini API.
Runs all 15 test-set claims twice, records the usage object of every call,
and computes cost per run. Price: AI Pricing Reference, snapshot 7 Sep 2026.
The API key is read from the GEMINI_API_KEY environment variable, never stored."""
import csv, json, os, sys, time, urllib.error, urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
KEY = os.environ.get("GEMINI_API_KEY") or sys.exit("Set GEMINI_API_KEY first")
BASE = "https://generativelanguage.googleapis.com/v1beta"
PRICE_IN, PRICE_OUT, USD_EUR = 0.25, 1.50, 0.92  # gemini-3.1-flash-lite, $ per 1M tokens

def call(url, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, headers={
        "Content-Type": "application/json", "x-goog-api-key": KEY})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 503) and attempt < 3:
                print(f"  HTTP {e.code}, waiting 30 s and retrying..."); time.sleep(30); continue
            sys.exit(f"HTTP {e.code}: {e.read().decode()[:400]}")

models = [m["name"].split("/")[-1] for m in call(f"{BASE}/models?pageSize=1000").get("models", [])
          if "generateContent" in m.get("supportedGenerationMethods", [])]
print("Flash models on this key:", ", ".join(m for m in models if "flash" in m))
MODEL = (os.environ.get("MODEL")
         or next((m for m in models if m == "gemini-3.1-flash-lite"), None)
         or next((m for m in models if "flash-lite" in m), None)
         or sys.exit("No flash-lite model found; rerun with MODEL=<id> in front of python3"))
print("Using model:", MODEL)
if MODEL != "gemini-3.1-flash-lite":
    print("WARNING: prices in this script are for gemini-3.1-flash-lite; tell Claude which model ran.")

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

rows, sample_saved = [], False
for i, (claim, expected) in enumerate(CLAIMS, 1):
    for run in (1, 2):
        resp = call(f"{BASE}/models/{MODEL}:generateContent",
                    {"contents": [{"parts": [{"text": TEMPLATE.replace("{input}", claim)}]}]})
        if not sample_saved:
            (HERE / "week-06-sample-response.json").write_text(json.dumps(resp, indent=2, ensure_ascii=False))
            sample_saved = True
        parts = resp.get("candidates", [{}])[0].get("content", {}).get("parts", [])
        reply = "".join(p.get("text", "") for p in parts).strip()
        u = resp.get("usageMetadata", {})
        tin, tout, tthink = u.get("promptTokenCount", 0), u.get("candidatesTokenCount", 0), u.get("thoughtsTokenCount", 0)
        cost = tin / 1e6 * PRICE_IN + (tout + tthink) / 1e6 * PRICE_OUT
        got = label(reply)
        rows.append(dict(claim_no=i, run=run, expected=expected, got=got, correct=got == expected,
                         input_tokens=tin, output_tokens=tout, thinking_tokens=tthink,
                         cost_usd=round(cost, 8), reply=reply.replace("\n", " ")))
        print(f"#{i:>2} run {run}: {got:<19} in={tin:<4} out={tout:<4} think={tthink:<4} ${cost:.7f}")
        time.sleep(7)  # stay under the free-tier rate limit

with open(HERE / "week-06-results.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=rows[0].keys()); w.writeheader(); w.writerows(rows)

n = len(rows)
avg = lambda k: sum(r[k] for r in rows) / n
by_claim = {i: [r for r in rows if r["claim_no"] == i] for i in range(1, len(CLAIMS) + 1)}
correct_claims = sum(all(r["correct"] for r in rs) for rs in by_claim.values())
inconsistent = sum(rs[0]["got"] != rs[1]["got"] for rs in by_claim.values())
avg_cost = avg("cost_usd")
print("\n===== SUMMARY =====")
print(f"Model: {MODEL} | date: {time.strftime('%Y-%m-%d')} | calls: {n}")
print(f"Avg input tokens: {avg('input_tokens'):.1f} | avg output: {avg('output_tokens'):.1f} | avg thinking: {avg('thinking_tokens'):.1f}")
print(f"Avg cost per run: ${avg_cost:.8f} = EUR {avg_cost*USD_EUR:.8f}")
print(f"Correct (both runs right): {correct_claims}/{len(CLAIMS)} = {correct_claims/len(CLAIMS):.1%}")
print(f"Inconsistent claims (F6): {inconsistent}/{len(CLAIMS)}")
print("Wrong claims:", [i for i, rs in by_claim.items() if not all(r["correct"] for r in rs)])
