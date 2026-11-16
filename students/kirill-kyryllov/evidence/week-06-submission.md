https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/kirill-kyryllov/posts/week-06.md

WEEK 6 EVIDENCE: https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/kirill-kyryllov/evidence/week-06-evidence.md

1. API call + per-call cost
30 real calls on 15 Nov 2026 (gemini-3.1-flash-lite, Google Gemini API): my Build prompt v1 with all 15 test claims, each run twice.
Raw response with the usageMetadata object: https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/kirill-kyryllov/build/week-06-sample-response.json
All 30 calls: https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/kirill-kyryllov/build/week-06-results.csv
Average 284.4 input / 33.8 output tokens. Cost per run: $0.00012175 (EUR 0.000112) at $0.25/$1.50 per 1M (AI Pricing Reference, snapshot 7 Sep 2026, accessed 15 Nov 2026).

2. Beat cost model
Claim-risk check sold to accounting firms at EUR 10/consultant/month, 15 calls/consultant/day. Scale projection 10 to 100,000 calls/day and tier comparison (Flash-Lite / Standard / Premium) in the evidence file. Token break point: ~2,976 calls/day (Flash-Lite), ~372 (Standard), ~149 (Premium); Premium already hits the 10% warning zone at 15 calls/day. Binding variable is error leakage: at my Week 2 error rate the tool stops paying for itself once more than ~1.4% of its misses reach a client (assumption: EUR 2.60 saved per claim, EUR 3.25 internal re-check, EUR 1,200 client incident).

3. Build costed from my own call
300 claims/month (capstone scenario). Token cost EUR 0.034/month. Error rate 13.3% on 15 inputs (Week 2; re-measured today 6.7%, 0 inconsistent). 40 misses x EUR 3.25 consultant re-check = EUR 130/month, about 3,900x the token cost.