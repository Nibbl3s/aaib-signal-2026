# Build log — every run, every failure (Week 2)

## Version 1 Test

Model used: ChatGPT GPT-5.6 Sol
Date: 2026-10-02

Failure types:
- F1 = Wrong
- F2 = Fabricated
- F3 = Missed
- F4 = Format
- F5 = Refused
- F6 = Inconsistent

| # | Expected | Run 1 | Run 2 | Result / Failure |
|---|---|---|---|---|
| 1 | Order Status | Order Status | Order Status | Correct |
| 2 | Invoice/Payment | Invoice/Payment | Invoice/Payment | Correct |
| 3 | Return/Refund | Return/Refund | Return/Refund | Correct |
| 4 | Product Issue | Product Issue | Product Issue | Correct |
| 5 | Other | Other | Other | Correct |
| 6 | Order Status | Order Status | Order Status | Correct |
| 7 | Invoice/Payment | Invoice/Payment | Invoice/Payment | Correct |
| 8 | Return/Refund | Return/Refund | Return/Refund | Correct |
| 9 | Product Issue | Product Issue | Product Issue | Correct |
| 10 | Other | Other | Other | Correct |

## Probe plan

| Probe | What I want to test | Why |
|---|---|---|
| Multilingual input | Test more Dutch enquiries | ERP systems in Belgium may receive different languages |
| Ambiguous input | Give an enquiry that could fit two categories | Check how the classifier handles uncertainty |
| Missing information | Give an enquiry without enough context | Check whether it guesses or chooses Other |

## Week 4 — Physical Deployment Probe Plan

- **Machine:** 3D printer
- **Artifact:** Phone stand to display my AI customer enquiry classifier.
- **Fablab session:** Not booked yet. I still need to arrange a session.

I want to test how someone would use my classifier in a customer service setting instead of only testing it in ChatGPT.

## Result

The first version scored 10/10 in both runs. I did not find any failures in this test set. However, most of my test inputs were quite clear, so the test may be too easy. My next step is to test more difficult and ambiguous enquiries to see where the tool starts making mistakes.

## Week 8 — Build Checkpoint 2 (27 November 2026; prepared, execution blocked)

Prediction recorded in [week-08/prediction.json](week-08/prediction.json) before creating [prompt-v2.txt](prompt-v2.txt): at least 8/10 exact category-name matches in each of two runs, versus Week 7 2/10 each. Original prompt and tests are preserved.

Codex prepared the revision, a 20-call reproducible runner, and the [checkpoint summary](week-08/checkpoint-summary.md). No Week 8 inference was executed: sandbox restrictions prevent Ollama connection and server startup. Results, prediction verdict, measured improvement, token usage and execution time for Week 8 are pending. See the summary for preserved Week 7 raw responses, recovered historical token counts, scoring and limitations. No Odoo deployment was performed.


### Week 8 execution retry — 2026-11-27T19:10:04.501916+00:00

Codex located and invoked the prepared run_experiment.py on the Mac using its installed Python. The initial local Ollama /api/tags request failed with PermissionError: [Errno 1] Operation not permitted. No inference requests were reached and no Week 8 results were generated. Direct Terminal computer control was also denied by the tool safety policy. This session does not permit sandbox execution escalation, so Codex could not request broader shell access. All existing evidence is preserved; the prediction remains untested.


## Week 8 — Build Checkpoint 2: completed local experiment (27 November 2026)

Prediction was recorded before prompt revision: at least 8/10 exact labels in each run. Bentil executed Codex's prepared runner in the Mac's local Terminal at 20:10:52 Brussels time, using llama3.2:3b with the same digest and recorded Ollama version (0.40.16) as Week 7. Same ten original synthetic enquiries, twice, fresh system/user chat context, streaming and server defaults; no retries or output repair. Original prompt and tests remain unchanged. Version 2 removes numbering and explicitly prohibits numbers and additional text.

Actual exact scores: **8/10 and 9/10**, versus Week 7 2/10 each: **+60 and +70 percentage points**. Overall **17/20 (85%)**, up **65 percentage points**. Historical Week 2 cloud recorded 10/10 each; the new runs remain 20 and 10 points below it. The prediction was supported on this set.

F1: Dutch order-status case 6 returned Return/Refund in run 1; double-payment case 7 returned Order Status in both runs. F4: zero invalid formats out of 20. F6: only case 6 differed across runs. No fabrication, separate omission or refusal observed (F2/F3/F5). Correct formatting does not imply correct routing.

Runtime-reported usage: **2,606 input tokens and 68 output tokens** across 20 calls. Runner wall time **10.065233 seconds**. No monetary cost or deployment performance is claimed. Small reused synthetic set, uncontrolled sampling defaults and a historical cloud comparator limit conclusions; no live Odoo integration was tested.

Full raw replies, individual tokens/timings, settings, limitations and disclosure: [week-08/checkpoint-summary.md](week-08/checkpoint-summary.md). Original streaming responses remain in [week-08/results.jsonl](week-08/results.jsonl); model/settings in [week-08/metadata.json](week-08/metadata.json); computed metrics in [week-08/summary.json](week-08/summary.json). Earlier blocker notes are historical; this entry records successful user execution. Codex prepared and analysed; Bentil ran the local experiment. No commit, push, publication or submission.


## Week 8 — design and financial addendum (27 November 2026)

After the measured experiment, Bentil supplied the Signal, BelSupply and revised Salesforce-only Northwind drafts. Codex checked their arithmetic and sources and prepared [BelSupply architecture](week-08/belsupply-architecture.md), [BelSupply costing](week-08/belsupply-costs.md), [Northwind individual catch-up](week-08/northwind-catch-up.md) and [Northwind costing](week-08/northwind-costs.md). These are unimplemented designs, not further test results. The [prompt index](week-08/prompt-versions.md) preserves version 1 unchanged.

The actual experiment remains 17/20 correct (85%) versus 4/20 (20%), +65 percentage points, 0 format failures; 2,606 input and 68 output tokens. No model calls were rerun. Local inference has no external token charge, but actual hardware/power costs were not measured. BelSupply bears proposed human review/correction costs: €0.125 review per query plus €0.25 per error, using an explicitly hypothetical 15% production error scenario. The experiment’s three wrong outputs have no measured monetary loss. These planning assumptions must not be represented as actual error costs or production accuracy.

Constant-launch first-year costs including 15% reserve: BelSupply €11,157.88; Northwind €47,020.63. A separately assumed growth schedule produces €14,272.46 and €56,364.38 respectively; Northwind exceeds its cap. See [independent calculations](week-08/financial-checks.json) and [source checks](week-08/source-checks.md). No physical fablab deployment observations are available; no deployment was invented.

Bentil missed class; Northwind is individual catch-up, with no claimed team presentation or peer critique. The current live Hub/rubric and Canvas fields remain unverified; the saved instruction summary supplies the checklist. The complete experiment evidence and raw files remain unchanged, and the log before this addendum is preserved in submission-week-08/build-log-before-financial-addendum.md. No commits, pushes, publication or submission.


## Week 7 — local model test (added to this log on 27 November 2026)

*Added afterwards: these Week 7 runs were documented in [week-07-evidence.md](week-07-evidence.md) and [Signal post 7](../posts/week-07.md) (committed 20 November 2026) but never entered in this log. Nothing below is new measurement.*

- **Model:** Llama 3.2 3B (`llama3.2:3b`) through local Ollama. Week 8 used the same model digest ([metadata.json](week-08/metadata.json)).
- **Prompt and tests:** Version 1 of [prompt.md](prompt.md) and the same ten inputs in [test-set.md](test-set.md), each run twice.
- **Exact category-name matches:** run 1 **2/10**, run 2 **2/10** (4/20, 20%), against 10/10 in both Week 2 cloud runs. That is an 80 percentage-point gap under strict exact matching, with different dates and interfaces.
- **Failures:** 16/20 replies did not match the exact label format (F4). Most were category numbers instead of names. Double-payment case 7 returned `1. Order Status` (run 1) and `2` (run 2). Three of ten inputs gave different replies across the two runs (F6), as counted in the [Week 8 checkpoint summary](week-08/checkpoint-summary.md). Exact matching did not show how many replies were semantically right.
- **Tokens (recovered from raw chunks, reported in the Week 8 summary):** run 1 1,123 input / 34 output; run 2 1,123 input / 30 output.
- **Raw per-case replies:** not in this repository. Only the two double-payment replies quoted above are documented.


## Correction note — 27 November 2026, after publication and Canvas submission

Earlier entries are kept unchanged above, as the course requires ("never delete a failure"). These notes correct statements in them:

1. The entries saying "No commit, push, publication or submission" (and "No commits, pushes, publication or submission") were true when written. Later on 27 November I uploaded the Week 8 files to this repository myself and submitted Week 8 on Canvas.
2. The Week 8 addendum says the earlier log is preserved in `submission-week-08/build-log-before-financial-addendum.md`, and the checkpoint summary referred to `week-07-raw/` and `checkpoint-summary-before-execution.md`. Those three were local working files and **were never uploaded**, so they are not in this repository. The earlier log content is still above, unchanged, and visible in git history. The pre-execution blocker notes are the "prepared, execution blocked" and "execution retry" entries above. I corrected the [checkpoint summary](week-08/checkpoint-summary.md) to match and removed a local computer path from it.
3. The addendum says the live Hub and rubric were not verified. After submission I read the live Week 8 page, the Week 8 rubric and the Build rubric. See [source checks](week-08/source-checks.md).
4. [prompt.md](prompt.md) now ends with a Version 2 history section. Version 1 is byte-for-byte unchanged: its first 388 bytes still give the SHA-256 recorded in [prediction.json](week-08/prediction.json).
5. No experiment was rerun and no measured result, token count or score was changed.
