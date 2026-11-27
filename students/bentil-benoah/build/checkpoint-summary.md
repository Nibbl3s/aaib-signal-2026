# Week 8 — Build Checkpoint 2: actual experiment results

Bentil Benoah Boakye · 4 ECTS · AI in ERP and Business Process Automation · Odoo

## Prediction and outcome

Prediction recorded at 19:01:38 UTC (20:01:38 Brussels) on 27 November 2026, before creating prompt version 2: prohibiting numbers and explanations would raise exact category-name matches from 2/10 to at least 8/10 in EACH of two runs. Inference started at 19:10:52 UTC (20:10:52 Brussels). Both runs met the threshold: **8/10 and 9/10**. Overall exact matching increased from 4/20 (20%) to 17/20 (85%), a **65 percentage-point improvement**.

| Measure | Run 1 | Run 2 |
|---|---:|---:|
| Week 7 local baseline | 2/10 (20%) | 2/10 (20%) |
| Week 8 revised prompt | 8/10 (80%) | 9/10 (90%) |
| Improvement vs Week 7 | +60 pp | +70 pp |
| Historical Week 2 cloud | 10/10 (100%) | 10/10 (100%) |
| Difference vs historical cloud | −20 pp | −10 pp |
| Wrong category (F1) | 2 | 1 |
| Unusable format (F4) | 0 | 0 |

## Settings and preservation

Same llama3.2:3b model digest as Week 7: `a80c4f17acd55265feec403c7aef86be0c25983ab279d83f3bcd3abbcb5b8b72`. Same recorded Ollama version: 0.40.16. Model: 3.2B, Q4_K_M. Model metadata lists context capacity 131072; actual effective context setting was not captured.

The ten original synthetic enquiries and expected labels were verified by hash and used in their original order, twice. Each call used a fresh /api/chat conversation with the revised system prompt and one enquiry as user message; stream=true, no explicit sampling options, seed, response schema, retries or output repair. Server defaults were used as in Week 7; their effective values were not captured. Original prompt.md remains unchanged; prompt-v2.txt contains the revision. Besides explicitly prohibiting numbers, explanations, prefixes and extra text, version 2 removes numbering from the category list. The experiment therefore tests this combined revision and cannot isolate which individual edit caused the improvement.

The user executed the prepared Python runner in the Mac's local Terminal after Codex's sandbox could not reach Ollama. Requests targeted only local Ollama. This is not a network-isolation audit. Codex subsequently read and checked all 20 saved records, model identity, original-file hashes and score calculations. No new inference was rerun during analysis.

## Every raw response and measurement

Responses are displayed as JSON strings; delimiting quotes below are not part of model output. Exact matching trims outer whitespace only. All 20 raw replies are valid category names, so wrong-category flags are unambiguous. Token columns are runtime-reported prompt_eval_count and eval_count, not billed usage. Full raw streaming chunks and server timings remain in results.jsonl.

| Run | Case | Expected | Raw reply | Exact | Wrong category | Unusable format | Input tokens | Output tokens | Request seconds | First token seconds |
|---|---|---|---|---|---|---|---:|---:|---:|---:|
| 1 | 1 | Order Status | `"Order Status"` | True | False | False | 131 | 3 | 4.708417 | 4.643851 |
| 1 | 2 | Invoice/Payment | `"Invoice/Payment"` | True | False | False | 131 | 4 | 0.304687 | 0.185648 |
| 1 | 3 | Return/Refund | `"Return/Refund"` | True | False | False | 132 | 5 | 0.707198 | 0.162275 |
| 1 | 4 | Product Issue | `"Product Issue"` | True | False | False | 129 | 3 | 0.217140 | 0.138728 |
| 1 | 5 | Other | `"Other"` | True | False | False | 128 | 2 | 0.156530 | 0.113685 |
| 1 | 6 | Order Status | `"Return/Refund"` | False | True | False | 132 | 5 | 0.321497 | 0.165054 |
| 1 | 7 | Invoice/Payment | `"Order Status"` | False | True | False | 129 | 3 | 0.205284 | 0.122355 |
| 1 | 8 | Return/Refund | `"Return/Refund"` | True | False | False | 135 | 5 | 0.322712 | 0.140324 |
| 1 | 9 | Product Issue | `"Product Issue"` | True | False | False | 130 | 3 | 0.224632 | 0.132150 |
| 1 | 10 | Other | `"Other"` | True | False | False | 126 | 2 | 0.152154 | 0.107063 |
| 2 | 1 | Order Status | `"Order Status"` | True | False | False | 131 | 3 | 0.251698 | 0.164181 |
| 2 | 2 | Invoice/Payment | `"Invoice/Payment"` | True | False | False | 131 | 4 | 0.280381 | 0.163992 |
| 2 | 3 | Return/Refund | `"Return/Refund"` | True | False | False | 132 | 5 | 0.326885 | 0.163694 |
| 2 | 4 | Product Issue | `"Product Issue"` | True | False | False | 129 | 3 | 0.206160 | 0.119517 |
| 2 | 5 | Other | `"Other"` | True | False | False | 128 | 2 | 0.159237 | 0.116229 |
| 2 | 6 | Order Status | `"Order Status"` | True | False | False | 132 | 3 | 0.243363 | 0.167174 |
| 2 | 7 | Invoice/Payment | `"Order Status"` | False | True | False | 129 | 3 | 0.195685 | 0.118830 |
| 2 | 8 | Return/Refund | `"Return/Refund"` | True | False | False | 135 | 5 | 0.295276 | 0.140199 |
| 2 | 9 | Product Issue | `"Product Issue"` | True | False | False | 130 | 3 | 0.195112 | 0.119390 |
| 2 | 10 | Other | `"Other"` | True | False | False | 126 | 2 | 0.144645 | 0.105379 |

| Run | Input tokens | Output tokens | Sum of request seconds |
|---|---:|---:|---:|
| 1 | 1303 | 35 | 7.320251 |
| 2 | 1303 | 33 | 2.298442 |

Total: **2,606 input tokens, 68 output tokens**. Runner wall time across the 20 calls: **10.065233 seconds**, including per-call overhead and output writing, excluding the preceding metadata/model checks. First request took 4.708417 seconds; loading/cache state affects timings, so this is not evidence of a general speed advantage. Historical Week 7 token totals recovered from raw chunks: run 1 1,123 input / 34 output; run 2 1,123 input / 30 output. Week 2 tokens, timing and actual cost are unknown. No monetary total is inferred from tokens; hardware and electricity were not measured.

## Failure analysis: course F1–F6

- **F1 Wrong:** case 6 in run 1, “Mijn bestelling is nog altijd niet aangekomen.” Expected Order Status, returned Return/Refund. Case 7 in both runs, “I think I paid twice for the same order.” Expected Invoice/Payment, returned Order Status. Three wrong responses in total.
- **F2 Fabricated:** no fabricated factual detail observed; replies contain category labels only.
- **F3 Missed:** no missing response or separate omission established in this single-label task. Misclassification of the payment intent is counted as F1 rather than double-counted as an omission.
- **F4 Format:** 0/20, down from 16/20 historically. Every response followed the required category-name format.
- **F5 Refused:** 0/20; no refusals observed.
- **F6 Inconsistent:** case 6 changed from Return/Refund in run 1 to Order Status in run 2. One of ten paired inputs was inconsistent, versus three of ten in Week 7. Raw responses for the other nine cases matched between runs. F6 overlaps F1 and is not an additional wrong-response count.

The prediction was supported on this test set. The main remaining problem is semantic correctness: a format validator would accept all three wrong replies. The repeated double-payment error is consistent across runs and remains unresolved. One Dutch example showed instability, but one case is insufficient to establish general Dutch-language performance.

## Limits and implications for the planned Odoo architecture

These are only ten synthetic, mostly clear enquiries, reused across prompt development, not an independent held-out evaluation. Two runs do not estimate robust reliability; no fixed seed or explicit effective sampling parameters were captured. The same model digest and recorded runtime version strengthen the local comparison, but do not control every runtime condition. The Week 2 cloud log is historical and uses a different model/interface/date; its recorded model name “ChatGPT GPT-5.6 Sol” is preserved, not independently verified.

No live Odoo integration, automatic routing, human review, deployment, load test or privacy audit was performed. The results support proposing exact-label validation plus semantic monitoring and human review, especially for payment and multilingual enquiries. Format validation alone would miss the observed errors. Additional Dutch, payment, ambiguous and mixed-intent cases belong in a separately versioned test set; keep these original baseline results intact. No confidence-based routing has been measured.

## Evidence and assistance disclosure

Preserved: original prompt.md and test-set.md; previous log content; Week 7 evidence and raw results under week-07-raw/; timestamped prediction.json; prompt-v2.txt; runner; unchanged metadata.json, results.jsonl and summary.json. The pre-execution summary remains as checkpoint-summary-before-execution.md, documenting earlier restrictions. The repository checkout at /Users/benbenoah/Documents/aaib-signal-2026 has not been modified; these files remain in the current workspace's students/bentil-benoah/ folder. Remote freshness was not verified.

Codex inspected prior evidence, recorded the prediction, prepared the revised prompt and runner, and analysed the saved actual responses and metrics. Bentil executed the runner using the Mac's local Terminal and Ollama. Codex updated this evidence and appended the results to the Build log. No results, token counts, costs or deployment observations were invented. Nothing was committed, pushed, published or submitted.
