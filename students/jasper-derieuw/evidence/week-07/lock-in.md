---
week: 7
title: "Evidence - Lock-in Scorecard, Vendor Terms and 90-Day Exit Plan"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Lock-in detection"
date: 2026-10-14
---

# Lock-in: My Build Stack

**The stack scored:** my Build as it runs today: prompt v1 in a PowerShell script that calls Claude Sonnet 5.5 over the plain HTTP API. The same script can also call Gemini and a local llama3.2 model through one function (`Invoke-Model`), and saves every raw response to my own disk.

## 1. What the vendors actually commit to (read 14 Oct 2026)

| | Anthropic (my model provider) | Verifex (a screening vendor in my beat) |
|---|---|---|
| Data export | No export right in the terms; I own inputs and outputs, and Anthropic may not train on them ([Commercial Terms](https://www.anthropic.com/legal/commercial-terms) B, E.4, effective 17 Jun 2025) | "You retain all ownership rights" to submitted data and results; no export process described ([Terms](https://verifex.dev/terms), updated 7 Oct 2026, §9). The site mentions "evidence export" on paid plans, without formats |
| Deprecation | At least 60 days' notice before a model is retired, by email and in the docs; my model: "not sooner than 28 September 2027" ([Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)) | Not mentioned |
| Price changes | Published rates can change, effective 30 days after posting or on notice (H.1) | Not mentioned for subscription prices; "reasonable notice" only for rate-limit changes (§8) |
| Promotional rate | None on my plan (pay as you go) | Not stated |
| What they do not commit to | "AS IS", no uptime guarantee, outputs not warranted "accurate, complete or error-free" (L.2) | Termination "with or without notice"; "does not warrant that the Service will be uninterrupted ... or error-free" (§15) |

**Track record (Anthropic):** Claude Sonnet 4.5 was announced for retirement on 30 Sep 2026 and retires on 30 Nov 2026 (61 days); Claude Opus 4.1 was announced on 5 Jun 2026 and retired on 5 Aug 2026 (61 days). The minimum is kept, but only just. Pricing moved down: Claude Opus 5.5 is priced below Claude Opus 5 ($4 vs $5 per 1M input tokens).

## 2. Five-dimension scorecard (0 = free, 3 = trapped)

| Dimension | Score | Evidence |
|---|:-:|---|
| 1. Data portability | 0 | Everything I need (prompt, test set, every raw response with its usage data) is plain text and JSON on my own disk. No embeddings, no fine-tuning, nothing stored only at the vendor. |
| 2. API stability | 1 | Versioned API (`anthropic-version` header); at least 60 days' notice before retirement, kept twice in 2026 at 61 days. But a forced model change resets my measurements: the same prompt went from 29.2% wrong (Week 2) to 8.3% wrong (Week 6) with a different model. |
| 3. Pricing control | 2 | Unilateral list-price changes on 30 days' notice, no cap, no pass-through of falling costs; I am on pay-as-you-go with no contract. Impact is low at my volume (see the exit plan). |
| 4. Feature dependency | 1 | A small abstraction layer exists: one `Invoke-Model` function and one `Read-Answer` that normalises usage across three providers. No vendor-only features (no tools, caching or vector store). But my prompt needs frontier capability: 91.7% on Claude Sonnet 5.5, 89.5% on Gemini 3 Flash (19 of 24 runs so far), 16.7% on a local 3B model. |
| 5. Migration cost | 1 | Moving to another cloud model took one afternoon on my prototype; in a real deployment (integration, re-validation by compliance, documentation) about 1–2 weeks of contained cost (Section 3). |
| **Total** | **5 / 15** | **Moderate: partially locked.** Fix the highest-scoring dimension (pricing control) before adding dependencies. |

## 3. 90-day exit plan

**If Anthropic tripled its price tomorrow:** my tokens would go from €79 to €237 a year (18,000 checks). The switch below costs about €1,258, more than seven years of that increase, so a price rise alone would not make me leave.

**Exit cost (estimate):**

| Component | Estimate | Basis |
|---|---:|---|
| Developer time (switch provider, parse answers) | €504 | 8 h × €63/hr loaded developer rate |
| Prompt re-evaluation | €342 | Re-run the test set and classify: 4 h × €63 + analyst review 2 h × €45 |
| Data export and re-indexing | €0 | Nothing is stored only at the vendor |
| Parallel running, 1 month | €232 | Double tokens €6.58 + analyst comparing 150 checks × 2 min × €45/60 |
| Contract exit | €0 | No contract or minimum term |
| Retraining and documentation | €180 | 2 analysts × 2 h × €45 |
| **Total** | **€1,258** | About 1.5 developer days plus about 10 analyst hours |

**If we had to leave this vendor in 90 days, here is what we would do:**
1. Move to **Gemini 3 Flash** (Google), because it already runs the same prompt at 89.5% (19 of 24 runs measured) at a lower list price ($0.50/$3 per 1M tokens, course AI Pricing Reference).
2. The work is about **1.5 developer days plus 10 analyst hours, roughly €1,258** at loaded rates.
3. The piece with no clean equivalent is **my measured error profile**: Gemini over-flags partial name matches (input 8, both runs) where Claude does not. Our answer: re-measure on the full test set, and send partial matches to a human anyway, as the Week 4 pattern-routing design already does.
4. We would lose **nothing stored**, but we would lose our **measured baseline** and have to re-earn it.
5. **The trigger:** a retirement notice for Claude Sonnet 5.5 (at least 60 days), or the monthly re-test showing more than 10% wrong answers, or a change in answer format that breaks parsing.

**Timeline:** first week: re-run the test set on the new model; first month: run 10% of real checks in parallel and compare; first quarter: switch, and keep the old path working as a fallback.

**One trap avoided:** a model I own (local llama3.2) is not an exit for this task: at 16.7% it would trade lock-in for wrong answers.

---

*AI disclosure: I used Claude to read the vendors' terms and deprecation pages, compute the exit-cost arithmetic and structure this scorecard; the scores and the trigger conditions are mine.*
