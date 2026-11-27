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
