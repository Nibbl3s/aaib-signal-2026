# Week 8 Lab: Cost-at-Scale One-Pager (Northwind shipment-status drafts)

**Gaetan Werbrouck | 27 November 2026 | Scenario, not measured data**

**Price source and date:** [course AI Pricing Reference](https://advanced-ai-in-business.vercel.app/resources/ai-pricing-reference.md), **snapshot 7 September 2026**: gpt-5.6-terra $2 / $12 per 1M input / output tokens, $1 = €0.92. I add 10% for EU processing ([OpenAI API pricing](https://developers.openai.com/api/docs/pricing), checked 27 November 2026): $2.20 / $13.20. The planned model, gpt-6.1-terra, is listed at [$1 / $5 before uplift](https://openai.com/index/introducing-gpt-6-1-terra/) (checked 27 November 2026). I budget with the higher price.

**Per question:** (2,175 input × $2.20 + 435 output × $13.20) ÷ 1,000,000 × 1.15 retries × 0.92 = **€0.0111** (€0.0051 at the gpt-6.1-terra price).

**Other assumptions:** 21 working days a month; up to 2 model calls per question (I price every question at the two-call token total); labour €40/hour; review 1 minute per question; correction 4 minutes; 0.5% of replies carry an error that escapes review, at €50 each; hosting €150/month; upkeep €480/month; WhatsApp: half the questions, first 1,000 replies a month free, then €0.05.

| Per month, base case: 15% need correction | Month 1 | Month 6 | Month 12 |
|---|---:|---:|---:|
| Questions a day | 80 | 200 | 600 |
| Questions a month | 1,680 | 4,200 | 12,600 |
| Model calls a month, maximum | 3,360 | 8,400 | 25,200 |
| **Tokens** (budget price) | €19 | €47 | €140 |
| *Tokens at gpt-6.1-terra price* | *€9* | *€21* | *€64* |
| WhatsApp | €0 | €55 | €265 |
| Hosting + upkeep | €630 | €630 | €630 |
| **Running cash and upkeep time** | **€649** | **€732** | **€1,035** |
| Error cost: corrections | €672 | €1,680 | €5,040 |
| Error cost: escaped errors | €420 | €1,050 | €3,150 |
| **Monthly total incl. errors** | **€1,741** | **€3,462** | **€9,225** |
| Cost per correct question, incl. errors | €1.04 | €0.83 | €0.74 |
| Operator review time | €1,120 | €2,800 | €8,400 |
| **Total incl. errors and review** | **€2,861** | **€6,262** | **€17,625** |
| **Total cost per correct question, incl. review** | **€1.71** | **€1.50** | **€1.41** |

"Correct question" means 99.5% of questions, since 0.5% are assumed to go out wrong. Rows are rounded. The one-off build is excluded; with it, year-1 cost per correct question is **€1.97**, against an assumed €4.00 for a manual reply (whose own error cost I have not counted).

| Sensitivity: total incl. errors (review excluded) | Month 1 | Month 6 | Month 12 |
|---|---:|---:|---:|
| 5% need correction | €1,293 | €2,342 | €5,865 |
| 15% need correction | €1,741 | €3,462 | €9,225 |
| 30% need correction | €2,413 | €5,142 | €14,265 |

**Stress test, one month at a constant daily volume**

| Questions a day | 100 | 1,000 | 10,000 |
|---|---:|---:|---:|
| Tokens (budget price) | €23 | €234 | €2,339 |
| WhatsApp | €3 | €475 | €5,200 |
| Corrections at 15% | €840 | €8,400 | €84,000 |
| Escaped errors | €525 | €5,250 | €52,500 |
| Review time | €1,400 (35 h) | €14,000 (350 h) | €140,000 (3,500 h) |

**What this says:** people cost far more than tokens. At month 12, corrections are about 36 times the token bill. Reviewing 600 questions a day takes about 10 hours a day. So the numbers to measure first are the correction rate, review minutes and escaped errors, none of which I have measured. A cheaper model that raised the correction rate by even one percentage point would cost about €336 a month at month-12 volume, more than the whole €140 token bill.
