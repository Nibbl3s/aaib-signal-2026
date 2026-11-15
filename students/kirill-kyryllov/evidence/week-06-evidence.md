# Week 6 — Evidence: Cost Projection for the Claim Risk Classifier

**Pricing source:** course AI Pricing Reference, snapshot 7 September 2026, accessed 15 November 2026 — `gemini-3.1-flash-lite` $0.25 input / $1.50 output per 1M tokens; course tiers Standard $2.00/$12.00, Premium $5.00/$30.00. Exchange rate $1 = €0.92 (course standard).

## 1. Real API call and per-call cost

- **Date:** 15 November 2026 · **Provider:** Google Gemini API (free tier) · **Model:** `gemini-3.1-flash-lite`
- **What was sent:** my Build prompt v1 (`build/prompt.md`, from "You are a fact-risk classifier…") with each of the 15 test-set claims, every claim run twice = **30 real calls**
- **Script:** [`build/run_build.py`](../build/run_build.py) (reads the key from an environment variable, never stores it)
- **Full raw API response with the `usageMetadata` object:** [`build/week-06-sample-response.json`](../build/week-06-sample-response.json)
- **All 30 calls (tokens, cost, reply):** [`build/week-06-results.csv`](../build/week-06-results.csv)

**First call (claim #1):** `promptTokenCount` 296 · `candidatesTokenCount` 34 · `thoughtsTokenCount` 0

**Averages over 30 calls:** 284.4 input tokens · 33.8 output tokens · 0 thinking tokens

**Per-call cost (average run):**

Input is **58%** of the unit cost — the reverse of the course example — because my instructions are long (~280 tokens sent with every call) and my answer is short (two lines).

## 2. Scale projection (my measured unit cost, 30-day months)

| Scale | Calls/day | Unit cost | Daily cost | Monthly cost | Annual cost |
|---|---|---|---|---|---|
| Prototype | 10 | $0.00012175 | $0.0012 | $0.037 (€0.03) | $0.44 (€0.40) |
| Pilot | 100 | $0.00012175 | $0.012 | $0.37 (€0.34) | $4.38 (€4.03) |
| Launch | 1,000 | $0.00012175 | $0.12 | $3.65 (€3.36) | $43.83 (€40.32) |
| Growth | 10,000 | $0.00012175 | $1.22 | $36.53 (€33.60) | $438.30 (€403.24) |
| Scale | 100,000 | $0.00012175 | $12.18 | $365.25 (€336.03) | $4,383.00 (€4,032.36) |

## 3. Tier comparison (same measured tokens: 284.4 in / 33.8 out)

| Tier | Price ($/1M in/out) | Cost per run | Monthly at 1,000/day | Monthly at 10,000/day | Monthly at 100,000/day |
|---|---|---|---|---|---|
| Flash-Lite (Budget) | $0.25 / $1.50 | $0.00012175 | €3.36 | €33.60 | €336.03 |
| Standard | $2.00 / $12.00 | $0.0009744 | €26.89 | €268.93 | €2,689.34 |
| Premium | $5.00 / $30.00 | $0.002436 | €67.23 | €672.34 | €6,723.36 |

## 4. Beat cost model and break point

**Use case:** a claim-risk check sold to Belgian accounting firms as an add-on, **€10 per consultant per month** (my assumption). Each consultant checks one AI-assisted report a day of ~15 claims → **15 calls/consultant/day = 450 calls/month**.

| Consultants | Calls/day | Monthly (Flash-Lite) | Monthly (Standard) | Monthly (Premium) | Revenue/month |
|---|---|---|---|---|---|
| 10 | 150 | €0.50 | €4.03 | €10.09 | €100 |
| 100 | 1,500 | €5.04 | €40.34 | €100.85 | €1,000 |
| 1,000 | 15,000 | €50.40 | €403.40 | €1,008.50 | €10,000 |
| 10,000 | 150,000 | €504.04 | €4,034 | €10,085 | €100,000 |

**Token break point** (cost per consultant = €10; formula: €10 ÷ (30 × cost per run in €)):

| Tier | Cost/consultant/month at 15 calls/day | Warning zone (10% of revenue) | Break point |
|---|---|---|---|
| Flash-Lite | €0.05 | ~298 calls/day | **~2,976 calls/day** |
| Standard | €0.40 | ~37 calls/day | **~372 calls/day** |
| Premium | €1.01 | ~15 calls/day ← **already reached** | **~149 calls/day** |

**Assumption it rests on:** 15 calls per consultant per day. A consultant would need to check ~25 reports a day before Standard breaks; tokens alone are not the binding variable.

**The binding variable — error leakage.** Per claim, the tool saves ~€2.60 (5 min of manual checking down to 1 min, at €39/hr — Week 4 estimates). Each tool miss costs either €3.25 (caught later: 5 min re-check at €39/hr) or ~€1,200 (reaches a client — Week 4 estimate). With error rate *r* and share *f* of misses reaching a client:

**Break point:** at my Week 2 error rate, the tool costs more than it saves once more than ~1.4% of its misses reach a client.

## 5. The Build costed from my own call

| | From my own calls |
|---|---|
| Input tokens per run | 284.4 (avg of 30 calls) |
| Output tokens per run | 33.8 |
| Cost per run (Flash-Lite) | $0.00012175 = €0.000112 |
| Realistic monthly volume, and why | **300 claims/month**: 20 AI-assisted client reports × ~15 claims each at a ~40-consultant firm (capstone scenario, same assumption as Week 4) |
| **Monthly token cost** | **€0.034** (€0.40/year); at Standard tier €0.27/month (€3.23/year) |

| | |
|---|---|
| Measured error rate | **13.3% on 15 inputs** (Week 2, prompt v1 on Gemini); re-measured today: **6.7% (1/15)** on `gemini-3.1-flash-lite`, same 15 inputs, 0 inconsistent across 2 runs |
| Who fixes an error here? | The consultant. Every miss so far went the same way: a risky or unclassifiable claim marked "Safe to trust", so the error only gets fixed if someone re-checks it |
| Cost per error | €3.25 if caught internally (5 min × €39/hr); ~€1,200 if it reaches a client |
| **Monthly error cost** | 300 × 13.3% = 40 misses × €3.25 = **€130/month** (internal-catch case) |
| **Error cost ÷ token cost** | €130 ÷ €0.034 ≈ **3,900×** |

## 6. Findings worth recording

- **My Week 4 guess was wrong by 7× on input:** I assumed 40 input / 60 output tokens; the real call is 284 / 34. The prompt, not the claim, is most of the bill.
- **Model change fixed one failure, not the other:** claim #10 (CapEx, Russian) is now correct on both runs; claim #11 ("AI") is still "Safe to trust" because prompt v1 has no "insufficient context" option. That is a prompt flaw, not a model flaw.
- **Reliability:** one HTTP 503 (server busy) during the run; the retry succeeded after 30 s. A production check would need retry logic.
- **The price reference already drifted:** my key lists `gemini-3.5-flash-lite` and `gemini-3.6-flash`, IDs the 7 September reference says do not exist. Prices should be re-checked before a real decision.
- **Data note:** on the free tier, Google may use inputs to improve its products. My test claims contain no client data; a real deployment at a firm could not use the free tier.