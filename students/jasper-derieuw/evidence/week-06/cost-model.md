---
week: 6
title: "Evidence - Cost Model: My Build Costed From My Own API Calls"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cost projection"
date: 2026-10-14
---

# Cost Model: My Build Costed From My Own API Calls

## 0. Inputs

| Field | Value | Source |
|---|---|---|
| Use case | Pre-screen one shipment invoice: extract supplier, origin, HS code and value, and flag the supplier against the EU sanctions list (my Build, prompt v1) | [prompt.md](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/prompt.md) |
| Model / tier | `claude-sonnet-5-5`, standard tier | Called via the Claude API, 14 Oct 2026 |
| Input price | $2.00 per 1M tokens | Anthropic API pricing for Claude Sonnet 5.5, checked 14 Oct 2026; same as the Sonnet tier in the course AI Pricing Reference (snapshot 7 Sep 2026) |
| Output price | $10.00 per 1M tokens | Same sources |
| Average input tokens per call | **371.9 (measured)** | `usage.input_tokens`, 24 calls (12 test invoices × 2 runs), 14 Oct 2026 |
| Average output tokens per call | **402.5 (measured)** | `usage.output_tokens`, same 24 calls; measured 0 thinking tokens in all 24 calls (`thinking_tokens`): the output is the answer and its explanation. *Corrected 25 Oct 2026: an earlier version said thinking tokens were included.* |
| Exchange rate | $1.00 = €0.92 | Course convention |
| Days per month | 30 | Course convention |
| Second provider | Gemini 3 Flash, same prompt and invoices (6 ECTS) | [two-providers.md](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-06/two-providers.md) |

## 1. Unit cost

| Part | Formula | Cost |
|---|---|---:|
| Input | 371.9 ÷ 1,000,000 × $2.00 | $0.000744 |
| Output | 402.5 ÷ 1,000,000 × $10.00 | $0.004025 |
| **Unit cost** | | **$0.004769 = €0.004387** |

Check: output is 84% of the cost, as expected when output is priced at 5× input.

## 2. Scale projection

| Scale | Calls/day | Daily | Monthly (×30) | Annual (×12) |
|---|---:|---:|---:|---:|
| Prototype | 10 | €0.04 | €1.32 | €15.79 |
| **My scenario** | **50** | **€0.22** | **€6.58** | **€78.97** |
| Beta | 100 | €0.44 | €13.16 | €157.94 |
| Launch | 1,000 | €4.39 | €131.62 | €1,579 |
| Growth | 10,000 | €43.87 | €1,316 | €15,794 |
| Scale | 100,000 | €438.73 | €13,162 | €157,944 |

**Realistic year-one row:** 50 calls a day, because my capstone importer screens 1,500 parties a month (Week 1 scenario): 1,500 ÷ 30 = 50.

**Hidden multipliers** at my scenario volume: conservative (unit cost flat) €79/yr; realistic (+50% from longer prompts and outputs) €118/yr; worst case (×2, e.g. a model upgrade) €158/yr.

## 3. Total annual cost (scenario: 18,000 checks a year)

| Cost | Annual | Formula / source |
|---|---:|---|
| Tokens | €79 | Section 2 |
| **Error remediation** | **€23,652** | 29.2% (my Week 2 measured rate, n = 24 runs) × 18,000 × €4.50 |
| Integration build (amortised over 3 years) | €7,667 | 365 h × €63/hr loaded developer rate = €23,000, the course default from Week 4 |
| Maintenance | €6,000 | Course default (Week 4); the worksheet's 15–20% of build would be €3,450–4,600 |
| Licences and monitoring | €0 (est.) | The EU consolidated sanctions list is free |
| Training | €360 (est.) | 2 analysts × 4 h × €45/hr |
| **Total** | **€37,758** | |

**Who pays for an error?** A paid compliance analyst, who redoes the check by hand: 6 min (est.) × €45/hr loaded (€51,547 × 1.4 ÷ 1,600 h) = **€4.50 per error**. The dangerous error, a sanctioned supplier cleared, is paid by the importer as a fine (€50,000–€500,000 in recent Belgian cases, Week 4); it is not in this table because the design routes risky invoices to a human.

**Re-measured in Week 6:** the same 12 invoices via the API with Sonnet 5.5 failed on 2 of 24 runs (8.3%), both on the unreadable invoice. At that rate error remediation drops to **€6,750** and the total to **€20,856**. Errors still cost **85×** the tokens (299× at the Week 2 rate).

## 4. Break point

**Framing:** the screening sold as a subscription to importers, at **€45.08 per analyst per month** ($49 × 0.92; Verifex Starter plan, 2,500 screenings a month; [Capterra listing](https://www.capterra.com/p/10042723/Verifex/), vendor-supplied, checked 14 Oct 2026). Modelled usage: **25 checks per analyst per day** (1,500 a month ÷ 2 analysts ÷ 30 days). The plan's 2,500 screenings a month allow about 83 a day; above that the customer pays more.

**A. The customer's analyst fixes errors (the vendor pays only the re-run):** cost per user per month = calls/day × 30 × €0.004387 × 1.292 (regeneration at the Week 2 error rate) = calls/day × **€0.1701**.

| Calls/user/day | Cost/user/month | Margin (€45.08) | Viable? |
|---:|---:|---:|---|
| 25 (estimate) | €4.25 | €40.83 | Yes |
| 50 (2×) | €8.50 | €36.58 | Yes |
| 125 (5×) | €21.26 | €23.82 | Yes |
| **265 (break point)** | €45.08 | €0 | – |

At the modelled 25 checks, tokens are already 9.4% of the price, just below the 10% warning zone.

**B. The vendor fixes the errors (a managed service):** each call also carries 29.2% × €4.50 = €1.31 of analyst time, so cost per user per month = calls/day × **€39.59**. **Break point: 1.1 checks per analyst per day**, or 4.0 at the Week 6 error rate (calls/day × €11.39). A managed service cannot be priced per user; it has to be priced per check, which is how most screening vendors in fact price (per screening or per monitored entity).

**The user count does not appear in any of these formulas.** At 25 checks a day, 100 users cost €329 a month in tokens against €4,508 revenue, and 10,000 users cost €32,905 against €450,800: 7.3% both times. Usage intensity and who pays for errors decide the economics, not growth.

## 5. Sanity checklist

- [x] Every price has a source and date
- [x] Input and output priced at their own rates
- [x] Dollars converted to euros before adding
- [x] Daily volume × 30 for monthly figures
- [x] Error cost included, with "who pays?" answered
- [x] Non-token costs included
- [x] Break point stated in calls/user/day, with its assumption
- [x] Every number can be recomputed from Section 0

## 6. Memo summary

At my scenario volume the token bill is €79 a year, measured from my own API calls (371.9 input and 402.5 output tokens per call, n = 24). Errors cost €23,652 a year at my Week 2 error rate and €6,750 at my Week 6 rate: 85 to 299 times the tokens. A €45 subscription (a real SME plan) breaks even at 265 checks per analyst per day if the customer fixes errors, but at 1.1 to 4.0 if the vendor does. The number that decides the investment is not the token price but the error rate, and who pays for each error.

---

*AI disclosure: the 24 API calls were run with my own key and prompt v1 on 14 October 2026. I used Claude to write the run script, find the published price, compute the arithmetic and structure this model; the scenario and the conclusions are mine.*
