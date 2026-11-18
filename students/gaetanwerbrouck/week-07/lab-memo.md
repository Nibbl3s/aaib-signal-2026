# Week 7 Lab: Second-Model Comparison Memo

**Student:** Gaetan Werbrouck
**Beat:** How Football Clubs Use Data to Find Undervalued Players
**Build:** ScoutLab, with its new optional AI scouting summary
**Due:** Friday 20 November 2026, 23:59 (Canvas, with Signal post 7 and Recorded Pitch 1)

---

## Part 1: My Build on a model I own

### What the model does in ScoutLab

ScoutLab by itself uses no language model. It ranks players with percentiles and cosine similarity. For this lab I added one small, optional feature (`scout_summary.py`, shown in the Player profile tab): a model turns one player's table numbers into a short scouting note. It sees only numbers that are already in ScoutLab, and every answer is checked automatically against them.

The test set is ten players from ScoutLab's own Premier League 2023/24 table: Harry Wilson, Joao Pedro, Marcus Rashford, Edson Álvarez, Andreas Pereira, Lewis Cook, Mads Roerslev, Destiny Udogie, Gabriel Osho and Martin Dubravka (three forwards, three midfielders, three defenders, one goalkeeper). The same prompt goes to both models and each model runs the set twice.

A player counts as a success only if all five checks pass. The expected answers come from the table, so they were fixed before either model ran:
1. It names the player's strongest metric (the highest percentile) correctly.
2. It names the weakest metric correctly.
3. It uses no number that is not in the table.
4. It makes no claim the table cannot support (money, injuries, contracts, predictions).
5. It actually writes a summary.

### The comparison

| | Model A: Cloud | Model B: Mine |
|---|---|---|
| Model | Claude Sonnet 5.5 (via the claude.ai chat) | `llama3.2:3b`, an open-weights model, run on my laptop through Ollama |
| Success rate, same test set | **19 of 20** (9 of 10 in run 1, 10 of 10 in run 2) | **4 of 20** (2 of 10 in each run; both runs identical because the temperature was 0) |
| Cost per run | About **€0.014** (the probe's estimate from token counts, at the lesson's reference prices of $2 and $12 per million tokens, $1 = €0.92). I ran it in the claude.ai chat, so my actual cost was €0. | **€0** (about 3 minutes per run on my laptop) |
| How it failed differently | One slip in 20 notes. In run 1 it named Blocks per 90 (87th percentile) as Gabriel Osho's strongest metric, while its own summary in the same answer put Interceptions per 90 higher (92nd). It never invented a number or made an unsupported claim, and it followed the exact output format all 20 times. | It never invented a number or made an unsupported claim, but it named the wrong strongest metric in 10 of 20 notes and the wrong weakest metric in 14 of 20. It ignored the exact output format every time. It also contradicted itself in prose, for example calling a 23rd-percentile stat "above the average for forwards", which my checker cannot catch. |
| Where the data went | The player statistics for ten Premier League players went to Anthropic's servers. This is public performance data, so the exposure was low. I used the claude.ai chat, so the consumer terms applied, not the Commercial Terms I read in Part 1B. Those govern API use, which is how a club would run this feature. | It never left my machine |

### How I ran it

- **Model B:** `run_probe.py --model <name>` (see `local-model\README.md`). It runs the ten players twice and writes a results file.
- **Model A:** `run_probe.py --export-prompt prompt.txt` writes the prompt. I pasted it into a new claude.ai chat and saved the answer, repeated that in a second new chat, then ran `run_probe.py --score-files claude1.txt claude2.txt --label Claude`. Both models are scored by the same checker.

### Honest limits

- Ten players and two runs is a small sample. It shows a pattern, not a guarantee.
- I changed the checker twice after seeing the local model's answers: first so a metric name followed by its numbers counts as naming that metric, then so a player's note is found by name instead of requiring a `PLAYER:` header (the first version scored the local model 0 of 20 because of this). Neither change makes a wrong answer count as right. I saved the raw answers and re-scored them, so both models are scored by the final checker.
- A model that restates numbers correctly is not a scout. The checks measure whether the note is faithful to the table, not whether the player is good.
- Tripling Claude's price on this workload moves about €0.01 to €0.03 per run. Price is not the lock-in risk here. The failure profile and the dataset are.
- The gap is large (19 of 20 against 4 of 20), but even the stronger model slipped once, and that slip contradicted its own text. The checker caught it automatically, which is why the check is part of the feature and not an optional extra.
- The two models also fail differently. Claude's one error was a contradiction. The local model's errors were systematic: it often took the wrong metric as the best or worst, and it ignored the output format.

---

## Part 1B: The real terms, and what is missing

Provider my Build runs on (Model A): **Anthropic (Claude API)**. Sources read on 18 November 2026: Anthropic Commercial Terms of Service (effective 17 June 2025), the Claude API model deprecations page, and the OpenAI SDK compatibility page.

| Dimension | Where I looked | What I found |
|---|---|---|
| Data portability | Commercial Terms sections B, C, E, I | Customer keeps its inputs and owns its outputs, and Anthropic may not train on Customer Content. **The terms do not mention a data export right, or return of data on termination.** Deletion is by destruction request, with exceptions for legal retention and automated backups. No retention period is stated in the terms (the DPA is incorporated by reference and I have not read it). |
| API stability | Model deprecations page; terms | The docs state at least 60 days' notice before retirement of a publicly released model. Recent examples: Claude Sonnet 4 notified 14 April 2026, retired 15 June; Claude Sonnet 4.5 notified 30 September 2026, retiring 30 November 2026. **The Commercial Terms themselves contain no deprecation commitment.** The promise lives in documentation that can change. |
| Pricing control | Terms section H.1 | Rates are the published list rates. Anthropic may update them effective the earlier of 30 days after posting or when the customer otherwise receives notice. No price lock unless separately agreed. |
| Feature dependency | OpenAI SDK compatibility page | ScoutLab's summary feature calls any OpenAI-compatible endpoint, so changing provider should mean changing two fields (tested with a local model, not yet with Claude's API). But Anthropic says its compatibility layer is primarily for testing and is "not considered a long-term or production-ready solution for most use cases", and several settings are ignored or rejected. So a production use of Claude would need Anthropic's native API, which is a small rewrite of one function (`ask_model`). |
| Migration cost | All of the above | For this Build: about an hour (change the endpoint and model, rerun the probe). It would be weeks for a system that stored fine-tunes, embeddings or logs at the provider. Mine does not. |

### Scorecard fields

| Field | Yours |
|---|---|
| Vendor | Anthropic (Claude API) |
| Data export: self-service, standard format? | Not stated in the terms. I have made one API call but did not check my Console for an export option. I found no content export right in the terms or docs I read. |
| Published deprecation policy? How long? | Yes, in docs, at least 60 days |
| Price change notice period? | 30 days after posting |
| Promotional rate? Expiry date? | None found on the pages I read. I did not check my Console billing page. |
| Something they conspicuously do not commit to | Three things: no uptime commitment (the terms disclaim uninterrupted use), no deprecation commitment inside the contract, and no export or return of data on termination. Anthropic may also terminate for convenience with 30 days' notice, and may suspend access without liability for resulting data loss. Liability is capped at fees paid in the previous 12 months. |

For an EEA customer the terms are governed by Irish law with arbitration in Dublin.

---

## Part 2: Scenario 2 worked: GhentAccounting

*Fictional Belgian accounting firm, 24 staff, 300 SME clients, 15,000 invoices and receipts a month, 0 engineers, Dutch/French/English documents, Exact Online with an API, €2,000 to €5,000 a month, 2 months to deliver.*

### The five questions

1. **Is this capability our competitive advantage?** No. Their value is advice and trust with 300 SME clients. Typing numbers out of PDFs is not what clients pay for. Next question.
2. **Is it a commoditised problem with good off-the-shelf solutions?** Yes. Invoice OCR, field extraction and expense categorisation in three languages is a mature product category with many vendors. **Consider Buy. Stop here.**

Questions 3 to 5 confirm rather than decide. Q3 (several capabilities no single vendor does well): no, it is one capability. Q4 (needs changing massively in 12 months): no, invoices are invoices. Q5 (engineering capacity to build or maintain): **no, zero engineers**, so Build and Connect are not even viable. Buy is the only path that fits the people they have.

### Lock-in scorecard

No vendor is named, so these scores rest on what a typical invoice-processing SaaS contract looks like. Each row says what would change the score once a real quote arrives.

| Dimension | Score | Evidence | What would change it |
|---|:--:|---|---|
| 1. Data portability | 1 | Source invoices stay with the firm and the accounting records live in Exact Online, which is the system of record. The vendor holds extracted fields and review history, likely exportable as CSV or via API. | Score 0 if self-service standard export is confirmed in writing. Score 2 if extraction history is only available through support tickets. |
| 2. API stability | 1 | Mostly consumed through a vendor UI and the Exact Online integration. A documented, versioned integration is common. | Ask for the deprecation policy. No published policy would be a 2. |
| 3. Pricing control | 2 | Per-document or tiered subscription pricing. At 15,000 documents a month, a tier jump or a 50% rise adds €1,000 to €2,500 a month to a €2,000 to €5,000 budget. | A 12 or 24 month fixed-price contract with a cap on increases moves it to 1 or 0. |
| 4. Feature dependency | 1 | Categorisation rules and PO matching will be configured inside the vendor tool, but they map to the firm's own chart of accounts, which is portable knowledge. | Falls to 2 if rules can only be built in a proprietary rule designer with no export. |
| 5. Migration cost | 1 | Estimate: one month of parallel running, re-mapping categories, retraining 3 staff, onboarding fee. Roughly €15,000 (estimate) and 1 to 2 months. | Documented migration plan and standard export would make it 0. |
| **Total** | **6/15** | **Moderate** | |

### Why moderate lock-in is acceptable here

Lock-in is a price you pay for speed. It is acceptable when the exit is survivable and the thing you are locked into is not your edge. GhentAccounting passes both tests, and it differs structurally from the other two companies.

- **The exit is bounded.** About €15,000 to leave against €24,000 to €60,000 a year in spend. That is roughly 3 to 7 months of subscription, not a rebuild.
- **The system of record is elsewhere.** The records that matter sit in Exact Online, which they control. OmniRetail's data, models and logs all sat inside Vendor X.
- **Nothing proprietary is being built on the vendor.** No fine-tuned model trained on their data, no prompt library, no embeddings. OmniRetail had three fine-tuned models, 12 million embeddings and a fraud model that could not be exported.
- **Many substitutes exist.** Competition in invoice OCR is what keeps price rises in check. FlandersBio has no substitute for its own biomarker pipeline, so it must own it.
- **Speed and staff matter more.** Two months and zero engineers make Build or Connect a worse risk than a moderate lock-in.
- **One thing to protect:** invoices contain SME client data, so they should demand an EU data-processing agreement before the first invoice is uploaded.

**Contrast in one line each:** FlandersBio must own the core because the core is the company. OmniRetail built six layers on one vendor with no abstraction. GhentAccounting rents a commodity, keeps its records at home, and can leave in a quarter.

---

## Part 3: My stack, scored, and my 90-day exit plan

### Scorecard: ScoutLab with the AI summary feature

| Dimension | Score | Evidence |
|---|:--:|---|
| 1. Data portability | 1 | ScoutLab reads and writes CSV (shortlist export, market-value template) and uses pandas, so my own outputs are fully portable. The default performance data is a third-party file (339 Premier League 2023/24 rows) whose licence is unclear, so I cannot redistribute it. |
| 2. API stability | 2 | The default dataset is fetched at runtime from one raw GitHub URL owned by someone else. There is no versioning promise and no deprecation policy. If the owner moves or deletes the file, the default dataset breaks (the CSV upload fallback survives). The model side is better: a 60-day retirement promise for Claude, and a local model that never changes unless I update it. |
| 3. Pricing control | 1 | ScoutLab's libraries (Streamlit, pandas, NumPy, Plotly) are free and open source. The only priced dependency is the optional Claude call. On its own it would score 2 (30 days' notice), but at about €0.01 a run, the stack-level exposure is minimal. |
| 4. Feature dependency | 0 | One function, `ask_model`, talks to any OpenAI-compatible endpoint. The prompt is plain text with a plain-text answer, and the checker is mine. The app talks to a local model through this one function (tested with Ollama). I ran Claude by pasting into the claude.ai chat, so I have not yet tested Claude through the same function. Swapping provider should be a two-field change, with the caveat in Part 1B about Anthropic's compatibility layer. |
| 5. Migration cost | 1 | Replacing the data source means adding a dated market-value file, checking name matching and season alignment: roughly 10 to 20 hours (estimate). Replacing the model is about an hour. It scores 1 rather than 0 because I have no second licensed data source or written exit plan yet. This memo is that plan. |
| **Total** | **5/15** | **Moderate risk** |

**The lock-in point I fear most:** the single raw-GitHub dataset URL. It is the one place where I depend on something with no terms, no versioning and no one obliged to tell me if it changes.

### The question: if my provider tripled the price tomorrow, what would switching cost me?

- **In money:** a probe run on Claude would go from about €0.01 to €0.03. Not a decision driver.
- **In hours:** about 1 hour (estimate): change the endpoint and model name in the app, rerun the ten-player probe twice, compare.
- **In performance:** Claude got **19 of 20**. The local model got **4 of 20**, mostly by naming the wrong weakest metric (14 of 20 notes) and the wrong strongest metric (10 of 20). So the real switching cost is **15 fewer correct notes out of 20**, and the checker catches these misreadings automatically, which is why it should stay in the feature.

This is the first time in the course that the performance figure is a number I measured on a second model rather than an estimate.

### 90-day exit plan

**First week**
- Keep the endpoint and model name as the only two settings that choose a provider (done in the app). Never hardcode a model name anywhere else.
- Save every probe result (model, date, success counts) in the repo.
- Take a dated snapshot of the dataset I use: keep a private local copy plus the URL, retrieval date and a checksum. Do not commit it to the repo, because the licence is unclear.
- Check whether any of my scripts or notes use `claude-sonnet-4-5`. That model retires on 30 November 2026.

**First month**
- Add a data-source adapter to ScoutLab so any CSV with mapped columns works the same way, with the source and date shown on screen.
- Write a one-page exit runbook: who to tell, which settings to change, which probe to rerun, and what score counts as acceptable.
- Put a monthly reminder in my calendar to read Anthropic's deprecations and pricing pages, and to rerun the probe on the local model so it stays warm.
- Find a second, properly licensed data source and read its terms for export, price-change notice and redistribution.

**First quarter**
- Rerun the comparison with a larger set (at least 30 players, including goalkeepers and players with tied percentiles).
- Decide whether the AI summary earns its place. A scout can read the percentile chart already, so the feature only stays if it saves real time.
- Set explicit triggers for switching: a price change above an agreed percentage, a deprecation notice shorter than 60 days, or the local model coming within an agreed gap of the cloud model on my probe.
- Re-score the stack and compare with today's 5/15.

---

*Sources: [Anthropic Commercial Terms of Service](https://www.anthropic.com/legal/commercial-terms), [Claude API model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), [Claude API OpenAI SDK compatibility](https://platform.claude.com/docs/en/api/openai-sdk).*
