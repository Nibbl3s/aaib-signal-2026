---
week: 6
title: "Evidence - Measured Across Two Providers: Claude Sonnet 5.5 vs Gemini 3 Flash (6 ECTS)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cost projection"
date: 2026-10-25
---

# Measured Across Two Providers

**Setup:** the same Build (prompt v1, unchanged), the same 12 test invoices, each run twice, on two providers through their APIs. Every raw response is saved with its usage data. Volume for the projections: **1,500 checks a month** (my capstone importer, Week 4), 18,000 a year. Analyst rate €45/hr = €0.75/min (Week 4).

## 1. The usage data, as the APIs returned it

**Claude** (`claude-sonnet-5-5`), invoice 1, run 1, 14 Oct 2026:

```json
"usage": {"input_tokens": 366, "output_tokens": 385,
          "output_tokens_details": {"thinking_tokens": 0},
          "service_tier": "standard"}
```

**Gemini** (`gemini-3-flash-preview`), invoice 1, run 1, 14 Oct 2026:

```json
"usageMetadata": {"promptTokenCount": 232, "candidatesTokenCount": 55,
                  "thoughtsTokenCount": 618, "totalTokenCount": 905}
```

| | Claude Sonnet 5.5 | Gemini 3 Flash |
|---|---|---|
| Calls | 24, all on 14 Oct 2026 | 24: 20 on 14 Oct, 4 on 25 Oct 2026 (the free tier allows 20 requests a day per model) |
| Average input tokens | 371.9 | 229.2 |
| Average output tokens | 402.5 | 673.3 |
| Of which thinking | **0%** (0 of 9,660) | **91%** (14,725 of 16,159) |
| Price per 1M tokens (in / out) | $2.00 / $10.00 (Anthropic pricing, checked 14 Oct 2026) | $0.50 / $3.00 (course AI Pricing Reference, snapshot 7 Sep 2026; paid-tier rate; my runs were on the free tier, so I actually paid €0) |
| **Cost per check** | (371.9 × 2 + 402.5 × 10) ÷ 1M × 0.92 = **€0.0044** | (229.2 × 0.5 + 673.3 × 3) ÷ 1M × 0.92 = **€0.0020** |

## 2. How each one failed

| | Claude Sonnet 5.5 | Gemini 3 Flash |
|---|---|---|
| Strictly correct | **22/24 (91.7%)** | **20/24 (83.3%)** |
| Failed on | Invoice 12 ×2: "needs review" for an unreadable invoice, a value my prompt v1 did not allow (my specification flaw) | Invoice 12 ×2: the same. **Invoice 8 ×2:** "high risk match" for a partial name ("Suifenhe Commercial Bank"), where "needs review" is right |
| Same flag on both runs | 12 of 12 | 12 of 12 |
| Answer format | Varied between a table and a list | Varied between bold text and a list |
| Sanctioned bank cleared | Never | Never |

## 3. Cost per month at 1,500 checks

| | Claude Sonnet 5.5 | Gemini 3 Flash |
|---|---:|---:|
| Tokens | 1,500 × €0.0044 = **€6.58** | 1,500 × €0.0020 = **€2.95** |
| Redo, unreadable invoice (6 min = €4.50) | 2/24 × 1,500 = 125 × €4.50 = €562.50 | 125 × €4.50 = €562.50 |
| False alarm review, partial match (15 min = €11.25, Week 1) | €0 | 2/24 × 1,500 = 125 × €11.25 = €1,406.25 |
| **Total a month** | **€569** | **€1,972** |
| **Total a year** | **€6,829** | **€23,660** |

The error shares are from my 12-invoice test mix (est. for real invoices). Who pays: a compliance analyst, either redoing a check or clearing a false alarm.

## 4. Tier comparison at my measured token counts

At Claude's token counts (371.9 in / 402.5 out), course tiers (AI Pricing Reference, 7 Sep 2026), 18,000 checks a year:

| Tier (course price, in / out) | Per check | Tokens a year |
|---|---:|---:|
| Budget ($0.20 / $1.20) | €0.0005 | €9 |
| Standard ($2.00 / $12.00) | €0.0051 | €92 |
| Premium ($5.00 / $30.00) | €0.0128 | €231 |

And what I measured, tokens plus errors, a year:

| Model | Tokens | Error rate (measured) | Errors × who pays | **Total** |
|---|---:|---:|---:|---:|
| Claude Sonnet 5.5 | €79 | 8.3% (n = 24) | €6,750 | **€6,829** |
| Gemini 3 Flash | €35 | 16.7% (n = 24) | €23,625 | **€23,660** |
| llama3.2 on my PC (Week 7) | €0 | 83.3% (n = 24) | 15,000 × €4.50 = €67,500 | **€67,500** |

The cheapest model is the most expensive system. Moving even from budget to premium pricing adds €222 a year; one extra point of error rate adds 180 errors, or €810.

## 5. How the failure profiles differ, and which I would choose

Both models failed my unreadable invoice the same way, because my prompt gave them no honest answer to choose; prompt v2 fixed that for Claude (24/24, Run 3). The difference is the partial name match: Gemini called it a high-risk match on both runs, Claude flagged it for review. That error is on the safe side, since no sanctioned bank was cleared, and it is consistent, so a rule could route it. But every one costs a 15-minute review: at my test mix that is about €16,800 a year more in analyst time, against €44 a year saved on tokens. The two also spend their output differently. Claude's output is all visible answer, which is why a fixed JSON answer cut its output by 79% in Run 3; Gemini's is 91% thinking, so a shorter answer format would barely lower its bill. **I would choose Claude Sonnet 5.5 for production**, and keep Gemini 3 Flash as the tested exit (Week 7), with one condition I now know from data: partial name matches go to a person, which my Week 8 design already does. Gemini's free tier is fine for a test like this but not for supplier data, because free-tier inputs may be used to improve Google's products (course AI Pricing Reference).

## 6. What it changed

- **A corrected figure:** my Week 7 lock-in scorecard and post 7 said Gemini scored 89.5% (17 of 19 runs). With all 24 runs it is 83.3%. Updated on 25 Oct 2026.
- **A corrected assumption:** my cost model said Claude's output included thinking tokens. It did not: 0 in 24 calls. The cost was explanation text, and that is what prompt v2 removed.
- **A condition on the exit plan:** switching to Gemini is only safe with partial matches routed to a person.

---

*AI disclosure: all 48 calls were made with my own API keys and prompt v1 (Claude on 14 October; Gemini on 14 and 25 October 2026). I used Claude to write the run script, read the usage data, compute the arithmetic and structure this comparison; the classification of each answer was checked by me, and the choice is mine.*
