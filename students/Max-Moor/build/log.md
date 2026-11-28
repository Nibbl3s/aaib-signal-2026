# Build log — Quote intake extraction (O&D Impression 3D)

**Rule:** every run is logged, every failure is kept, nothing is deleted. Each input was run **twice** (Run A and Run B) on the same prompt version. Whether each run was in a separate conversation was not recorded. A difference between the two runs is an F6 failure.

**Setup:**
- Prompt version tested: v1 (see prompt.md)
- Model and interface used: Claude Sonnet 5.5 (Anthropic), in a claude.ai conversation
- Date of runs: 2026-10-05
- Test-set source: all 13 inputs are real (R) requests from the od3d.be website forms, anonymised.
- Scoring: against the expected answers in test-set.md, written before running. Fields marked * in the expected answers were decisions still to confirm; they are scored as written and flagged in the notes.

## Failure codes (course taxonomy)

| Code | Failure | Looks like |
|---|---|---|
| F1 | Wrong | Confidently gave the incorrect answer |
| F2 | Fabricated | Invented a detail not in the input |
| F3 | Missed | Failed to find something that was there |
| F4 | Format | Right content, unusable shape (not valid JSON, extra text, wrong keys) |
| F5 | Refused | Declined, hedged, or asked a question instead of answering |
| F6 | Inconsistent | Different answer on the same input across the two runs |

## Run log (raw outputs)

### Input 1
- **Run A output:** `{"process_requested":null,"material":null,"quantity":1,"largest_dimension_mm":null,"deadline":null,"missing_info":["material","dimensions","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":null,"quantity":1,"largest_dimension_mm":null,"deadline":null,"missing_info":["material","dimensions","file"],"out_of_scope":true}`
- **Result vs expected:** Run A: Pass · Run B: Fail
- **Failure code(s):** Run A: — · Run B: F1 · F6 (the two runs differ)
- **Note:** Run B marked the request out of scope (expected false, flagged * to confirm). Same input, different flag.

### Input 2
- **Run A output:** `{"process_requested":"FDM","material":"PETG, or PP","quantity":4,"largest_dimension_mm":554,"deadline":null,"missing_info":[],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PETG, or PP","quantity":4,"largest_dimension_mm":554,"deadline":null,"missing_info":[],"out_of_scope":false}`
- **Result vs expected:** Run A: Fail · Run B: Pass
- **Failure code(s):** Run A: F2 · Run B: — · F6 (the two runs differ)
- **Note:** Run A named FDM although the customer never named a process (implied by nozzle/layer terms). Run B left it null.

### Input 3
- **Run A output:** `{"process_requested":null,"material":null,"quantity":4,"largest_dimension_mm":null,"deadline":null,"missing_info":["material","dimensions","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":null,"quantity":4,"largest_dimension_mm":null,"deadline":null,"missing_info":["material","dimensions"],"out_of_scope":false}`
- **Result vs expected:** Run A: Fail · Run B: Fail
- **Failure code(s):** Run A: F3 · Run B: F3 · F6 (the two runs differ)
- **Note:** Quantity 4 in both runs. I first expected 2 (two boxes); after seeing the outputs I corrected the expected value to 4 (two boxes made of four pieces, and the prompt asks for the total number of pieces), see the corrections log in test-set.md. Run A flagged "file" and "dimensions" although four STL files are attached; Run B still flagged "dimensions" (rule 4 not applied).

### Input 4
- **Run A output:** `{"process_requested":null,"material":null,"quantity":5,"largest_dimension_mm":122,"deadline":null,"missing_info":["material","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":null,"quantity":5,"largest_dimension_mm":122,"deadline":null,"missing_info":["material","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched: quantity 4 + 1 = 5, largest side 12.2 cm = 122 mm.

### Input 5
- **Run A output:** `{"process_requested":"resin","material":"résine haute définition (SLA / DLP)","quantity":1,"largest_dimension_mm":300,"deadline":null,"missing_info":["file"],"out_of_scope":true}`
- **Run B output:** `{"process_requested":"resin","material":"résine haute définition (SLA / DLP)","quantity":1,"largest_dimension_mm":300,"deadline":null,"missing_info":["file"],"out_of_scope":true}`
- **Result vs expected:** Run A: Fail · Run B: Fail
- **Failure code(s):** Run A: F1 · Run B: F1
- **Note:** Both runs marked it out of scope. Confirmed: O&D offers 3D modelling and subcontracts the painting, so the expected value (false) stands. Consistent in both runs, so a second run would not have revealed it.

### Input 6
- **Run A output:** `{"process_requested":null,"material":null,"quantity":null,"largest_dimension_mm":610,"deadline":null,"missing_info":["material","quantity","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":null,"quantity":null,"largest_dimension_mm":610,"deadline":null,"missing_info":["material","quantity","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched, including 610 (inside diameter, larger than the 500 height).

### Input 7
- **Run A output:** `{"process_requested":null,"material":"ASA/ABS","quantity":1,"largest_dimension_mm":250,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"ASA/ABS","quantity":1,"largest_dimension_mm":250,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched.

### Input 8
- **Run A output:** `{"process_requested":null,"material":"ABS","quantity":4,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"ABS","quantity":4,"largest_dimension_mm":null,"deadline":null,"missing_info":[],"out_of_scope":false}`
- **Result vs expected:** Run A: Fail · Run B: Pass
- **Failure code(s):** Run A: F3 · Run B: — · F6 (the two runs differ)
- **Note:** Run A flagged "dimensions" although the message says the STL file is attached (rule 4 not applied). Run B correct.

### Input 9
- **Run A output:** `{"process_requested":null,"material":"plastique ou autre matière","quantity":6,"largest_dimension_mm":539,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"plastique ou autre matière","quantity":6,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Fail · Run B: Fail
- **Failure code(s):** Run A: F1, F1 · Run B: F1 · F6 (the two runs differ)
- **Note:** The trap input. Run A computed 539 mm (60 × 8 + 59 × 1) and ignored the contradiction with 360 tiles in total; Run B correctly returned null and flagged dimensions. Both kept "plastique ou autre matière" as a material instead of null + flag (expected null, [material, dimensions, file]).

### Input 10
- **Run A output:** `{"process_requested":"FDM","material":"PLA standard","quantity":50,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PLA standard","quantity":50,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Fail · Run B: Pass
- **Failure code(s):** Run A: F2 · Run B: — · F6 (the two runs differ)
- **Note:** Run A named FDM although not stated. Run B left it null. Quantity 35 + 12 + 3 = 50 was correct in both.

### Input 11
- **Run A output:** `{"process_requested":null,"material":"PETG","quantity":null,"largest_dimension_mm":null,"deadline":null,"missing_info":["quantity","file","dimensions"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PETG","quantity":null,"largest_dimension_mm":null,"deadline":null,"missing_info":["quantity","dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched (the order of missing_info differs, which the scoring ignores).

### Input 12
- **Run A output:** `{"process_requested":"FDM","material":"PETG noir","quantity":null,"largest_dimension_mm":450,"deadline":null,"missing_info":["quantity","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PETG noir","quantity":null,"largest_dimension_mm":450,"deadline":null,"missing_info":["quantity","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Fail · Run B: Fail
- **Failure code(s):** Run A: F2, F3 · Run B: F3 · F6 (the two runs differ)
- **Note:** Both runs left quantity null although "un logo mural" means 1 (missed). Run A also named FDM.

### Input 13
- **Run A output:** `{"process_requested":null,"material":"PETG (préféré), ou tout autre matériau offrant une bonne résistance aux UV, à l'humidité et aux chocs","quantity":null,"largest_dimension_mm":null,"deadline":null,"missing_info":["quantity","file","dimensions"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PETG (préféré), ou tout autre matériau offrant une bonne résistance aux UV, à l'humidité et aux chocs","quantity":1,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Fail · Run B: Pass
- **Failure code(s):** Run A: F3 · Run B: — · F6 (the two runs differ)
- **Note:** Run A left quantity null ("le prototype" means 1); Run B returned 1. Both avoided the trap (100.4 mm battery). Material was copied as a long sentence; accepted in meaning but verbose.

## Summary

- **Success rate (Run A):** 5 / 13 (38%)
- **Success rate (Run B):** 8 / 13 (62%)
- **Passed in both runs:** 4 / 13 (inputs 4, 6, 7, 11), which is the more reliable figure
- **Inputs where A and B differed (F6):** 8 (inputs 1, 2, 3, 8, 9, 10, 12, 13)
- **Failure counts (instances across both runs):** F1 ×6 · F2 ×3 · F3 ×6 · F4 ×0 · F5 ×0 · F6 ×8 inputs
- **Most dangerous failure:** the consistent, confident ones. Both runs marked input 5 out of scope, which would have turned away a legitimate request; both runs left quantity null on input 12; and Run A on input 9 returned 539 mm for a contradictory order without flagging it. Running twice would not have caught the consistent ones.
- **Predictions from test-set.md, right or wrong:**
  - Right: input 9 trap (Run A fell for it, Run B did not); inconsistency on the long inputs 2 and 13; input 5 marked out of scope.
  - Wrong: input 13 (no run reported 100.4 mm); the quantity sums on 4, 8 and 10 were all correct; no run broke the JSON format (F4 = 0) or refused (F5 = 0).
  - Not predicted: the model guessing FDM as a process (3 Run A cases); ignoring the "file attached" rule on inputs 3 and 8; leaving quantity null on "un logo" and "le prototype".
- **Inputs that were too easy:** 4, 6, 7 and 11 passed both runs identically; the prompt handles clear single-item requests well.
- **Caveat:** inputs come from one 3D printing service's real requests; other services may receive different requests. The out_of_scope result for input 1 still depends on a decision I had flagged (can O&D print a full-size car?). For input 5 the decision is confirmed, and the expected quantity of input 3 was corrected after seeing the outputs (see the corrections log in test-set.md).

## Predictions for v2 (written 2026-11-28, before any v2 run)

**Rule:** committed alone, before any run of v2. Scored with the same strict rule as v1 (every field and missing_info must match the expected answers in test-set.md). A prediction is not edited after a run.

| # | v1 result (A / B) | Predicted v2 (both runs) | Why |
|---|---|---|---|
| 1 | Pass / Fail (out of scope in B) | Pass | Rule 10 removes the doubt about the size of the object. Medium confidence: this one depends on the model, not on a rule I can check. |
| 2 | Fail / Pass (FDM in A) | Pass | Rule 1 forbids naming a process from nozzle and layer words. The material text "PETG, or PP" is accepted in meaning. |
| 3 | Fail / Fail (file, dimensions) | Pass | Rules 3 and 4 name the phrase "je joins". Expected: quantity 4, missing_info [material]. |
| 4 | Pass / Pass | Pass | No rule touches it. Stays the control input. |
| 5 | Fail / Fail (out of scope) | Pass | Rule 10 says modelling and painting are in scope. Risk: the material text "résine haute définition (SLA / DLP)". |
| 6 | Pass / Pass | Pass, but a regression risk | Rule 9 could turn "un fût" into quantity 1. I wrote the exception for capability questions, but I am not sure it holds. |
| 7 | Pass / Pass | Pass | No rule touches it. |
| 8 | Fail / Pass (dimensions in A) | Pass | Rule 4 says attached file means no "dimensions". |
| 9 | Fail / Fail | Fail in both runs | Not fixed on purpose: the contradiction and "plastique ou autre matière" stay. Likely F6 again (539 mm in one run). |
| 10 | Fail / Pass (FDM in A) | Pass | Rule 1. Quantity 35 + 12 + 3 = 50 was already right. |
| 11 | Pass / Pass | Pass, but a regression risk | Rule 9 could turn "Pièce de remplacement" into quantity 1. The "no article" exception should stop it. |
| 12 | Fail / Fail (quantity, FDM in A) | Pass | Rule 9 gives quantity 1 for "un logo mural"; rule 1 removes FDM. |
| 13 | Fail / Pass (quantity in A) | Pass in one run out of two | Rule 9 helps ("le prototype"), but the material is copied as a long sentence and the run-to-run variation remains. |

**Predicted totals:** about 10 / 13 in each run (v1: 5 and 8), passed in both runs about 8 / 13 (v1: 4). Inputs where A and B differ: 2 or 3 (v1: 8), mostly 9 and 13.

**What would prove me wrong:** a pass rate under 8 / 13 in either run, a new failure on inputs 4, 6, 7 or 11 (a regression caused by my rules), or input 9 passing.

## v2 run log (raw outputs)

**Setup:**
- Prompt version tested: v2 (see prompt.md), committed with the predictions before any run.
- Model and interface: Claude Sonnet 5.5 (Anthropic), in claude.ai, temporary (incognito) chats so that account memory was not used.
- Date of runs: 2026-11-28, between about 10:00 and 10:15 (Brussels time). Run A on inputs 1 to 13, then Run B on inputs 1 to 13.
- Each of the 26 outputs was produced in its own new conversation (v1 did not record this).
- Inputs: the same 13 real requests, in the original French or English text of test-set.md. Outputs are pasted as received (reformatted here to one line each; the content is unchanged). Scoring uses the same strict rule and the same expected answers as v1; nothing was corrected after seeing an output.

### Input 1
- **Run A output:** `{"process_requested":null,"material":null,"quantity":1,"largest_dimension_mm":null,"deadline":null,"missing_info":["material","dimensions","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":null,"quantity":1,"largest_dimension_mm":null,"deadline":null,"missing_info":["material","dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched. In v1, Run B had marked this out of scope; not in v2.

### Input 2
- **Run A output:** `{"process_requested":null,"material":"PETG, ou en PP si vous le proposez en grand format","quantity":4,"largest_dimension_mm":554,"deadline":null,"missing_info":[],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PETG, ou en PP si vous le proposez en grand format","quantity":4,"largest_dimension_mm":554,"deadline":null,"missing_info":[],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched. No process named (v1 Run A had guessed FDM). Material copied as written (PETG, or PP): accepted in meaning.

### Input 3
- **Run A output:** `{"process_requested":null,"material":null,"quantity":4,"largest_dimension_mm":null,"deadline":null,"missing_info":["material"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":null,"quantity":4,"largest_dimension_mm":null,"deadline":null,"missing_info":["material"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched: quantity 4, 3D files attached so only material is missing (v1 flagged file and dimensions).

### Input 4
- **Run A output:** `{"process_requested":null,"material":null,"quantity":5,"largest_dimension_mm":122,"deadline":null,"missing_info":["material","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":null,"quantity":5,"largest_dimension_mm":122,"deadline":null,"missing_info":["material","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched (control input, unchanged from v1).

### Input 5
- **Run A output:** `{"process_requested":"resin","material":"résine haute définition","quantity":1,"largest_dimension_mm":300,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":"resin","material":"résine haute définition","quantity":1,"largest_dimension_mm":300,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched. Not out of scope any more (v1: out of scope in both runs).

### Input 6
- **Run A output:** `{"process_requested":null,"material":null,"quantity":null,"largest_dimension_mm":610,"deadline":null,"missing_info":["material","quantity","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":null,"quantity":null,"largest_dimension_mm":610,"deadline":null,"missing_info":["material","quantity","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched, quantity stays null (rule 9 did not turn the capability question into 1).

### Input 7
- **Run A output:** `{"process_requested":null,"material":"ASA/ABS","quantity":1,"largest_dimension_mm":250,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"ASA/ABS","quantity":1,"largest_dimension_mm":250,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched (unchanged from v1).

### Input 8
- **Run A output:** `{"process_requested":null,"material":"ABS","quantity":4,"largest_dimension_mm":null,"deadline":null,"missing_info":[],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"ABS","quantity":4,"largest_dimension_mm":null,"deadline":null,"missing_info":[],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched: no dimensions flag with the STL attached (v1 Run A flagged it).

### Input 9
- **Run A output:** `{"process_requested":null,"material":"plastique ou autre matière","quantity":6,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"plastique ou autre matière","quantity":6,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Fail · Run B: Fail
- **Failure code(s):** Run A: F1 · Run B: F1
- **Note:** Both runs: dimensions correctly null (v1 Run A had computed 539), but material kept as "plastique ou autre matière" and not flagged in missing_info (expected null and [material, dimensions, file]). Not fixed on purpose; predicted.

### Input 10
- **Run A output:** `{"process_requested":null,"material":"PLA standard","quantity":50,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PLA standard","quantity":50,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched. No process named (v1 Run A had guessed FDM). Quantity 35 + 12 + 3 = 50.

### Input 11
- **Run A output:** `{"process_requested":null,"material":"PETG","quantity":null,"largest_dimension_mm":null,"deadline":null,"missing_info":["quantity","dimensions","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PETG","quantity":null,"largest_dimension_mm":null,"deadline":null,"missing_info":["quantity","dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched, quantity stays null (rule 9 did not turn "Pièce de remplacement" into 1).

### Input 12
- **Run A output:** `{"process_requested":null,"material":"PETG noir","quantity":1,"largest_dimension_mm":450,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PETG noir","quantity":1,"largest_dimension_mm":450,"deadline":null,"missing_info":["file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched: quantity 1 and no FDM (v1 failed in both runs on quantity).

### Input 13
- **Run A output:** `{"process_requested":null,"material":"PETG","quantity":1,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Run B output:** `{"process_requested":null,"material":"PETG","quantity":1,"largest_dimension_mm":null,"deadline":null,"missing_info":["dimensions","file"],"out_of_scope":false}`
- **Result vs expected:** Run A: Pass · Run B: Pass
- **Failure code(s):** Run A: — · Run B: —
- **Note:** Both runs matched: quantity 1, material "PETG", 100.4 mm battery not taken as the box size (v1 Run A left quantity null).

## v2 summary

- **Success rate (Run A):** 12 / 13 (92%) (v1: 5 / 13)
- **Success rate (Run B):** 12 / 13 (92%) (v1: 8 / 13)
- **Passed in both runs:** 12 / 13 (v1: 4 / 13)
- **Inputs where A and B differed (F6):** 0 (v1: 8)
- **Failure counts (instances across both runs):** F1 ×2 (input 9, both runs) · F2 ×0 · F3 ×0 · F4 ×0 · F5 ×0 · F6 ×0
- **Remaining failure:** input 9. The model keeps "plastique ou autre matière" as the material instead of null with "material" flagged. It is consistent, so a second run does not reveal it, and I had left it unfixed on purpose.
- **Predictions vs results:** I predicted about 10 / 13 per run, about 8 / 13 passed in both runs, and 2 or 3 inputs differing between runs. The result is better on all three (12, 12, 0). Right on 12 of 13 inputs, including the input 9 failure and the absence of regressions on inputs 4, 6, 7 and 11. Wrong on input 13, which I expected to pass in only one run out of two; it passed in both.
- **Caveats:**
  - The four fixes were written after reading the v1 failures on these same 13 inputs, so this measures that the fixes work on the inputs they target. It does not show that v2 holds on new requests. A fresh set of requests would be needed for that.
  - v1 did not record whether its runs were in separate conversations, so the drop in F6 (8 to 0) is not a strict like-for-like comparison.
  - Rule 10 ("when in doubt, use false") could not be tested: no input in the set is clearly out of scope.

## v1 vs v2 comparison (input by input)

Strict rule, same 13 inputs, same expected answers, same model. Each cell is Run A / Run B.

| # | v1 | v2 | Change | Which fix | Prediction |
|---|---|---|---|---|---|
| 1 | Pass / Fail | Pass / Pass | Repaired | 4 (scope) | Right |
| 2 | Fail / Pass | Pass / Pass | Repaired | 1 (no guessed process) | Right |
| 3 | Fail / Fail | Pass / Pass | Repaired | 2 (file attached) | Right |
| 4 | Pass / Pass | Pass / Pass | Unchanged | none (control) | Right |
| 5 | Fail / Fail | Pass / Pass | Repaired | 4 (scope) | Right |
| 6 | Pass / Pass | Pass / Pass | Unchanged, no regression | 3 (exception held) | Right |
| 7 | Pass / Pass | Pass / Pass | Unchanged | none | Right |
| 8 | Fail / Pass | Pass / Pass | Repaired | 2 (file attached) | Right |
| 9 | Fail / Fail | Fail / Fail | Still failing, different failure | none (left on purpose) | Right |
| 10 | Fail / Pass | Pass / Pass | Repaired | 1 (no guessed process) | Right |
| 11 | Pass / Pass | Pass / Pass | Unchanged, no regression | 3 (exception held) | Right |
| 12 | Fail / Fail | Pass / Pass | Repaired | 3 (quantity 1) and 1 | Right |
| 13 | Fail / Pass | Pass / Pass | Repaired | 3 (quantity 1) | Wrong (I expected one run out of two) |

**Repaired (8 inputs):** 1, 2, 3, 5, 8, 10, 12, 13. Each repair matches the failure the fix was written for.

**Broken by v2 (0 inputs):** none. The two regression risks I wrote down (rule 9 on inputs 6 and 11) did not happen.

**Unchanged and passing (4 inputs):** 4, 6, 7, 11.

**Still failing (1 input):** 9. The failure changed: v1 Run A computed 539 mm on a contradictory grid; v2 returns null in both runs. What remains is the material, "plastique ou autre matière", which v2 keeps instead of null and does not flag. This is a different failure from the one I planned for (the contradiction) and a different fix is needed: a rule that a vague material ("plastique", "ou autre matière") counts as no material.

**What the fixes do and do not show.** Fixes 1 to 4 each repaired the inputs they targeted. The fall in run-to-run differences (8 inputs to 0) is the largest change; my guess is that the explicit rules left the model less room to choose, but I did not test that. The fixes were written from these same 13 inputs, so I cannot say how v2 behaves on new requests.

**Next version (v3), not run:** treat a vague material as null and flag it (input 9), then test v3 on new real requests, not on these 13.

## Probe plan (physical deployment probe, 3 rows)

| Row | What to write | My entry |
|---|---|---|
| 1. Machine | Which fablab machine you will use (laser cutter, 3D printer, embroidery, electronics) | Laser cutter (stand); possibly a 3D printer for a base |
| 2. Artifact | What you will make and what deployment context it simulates | Counter stand with a QR code to the quote request form, simulating a customer typing a request on the spot |
| 3. Session | The fablab session or OPEN block you will attend, with date | 2D drawing training, then laser training; dates to be booked with the fablab guide; at least one visit this term |

## Change log

| Date | Prompt version | What changed | Why | Re-measured result |
|---|---|---|---|---|
| 2026-10-05 | v1 | First version, revised before the first run (process and deadline optional; dimensions not flagged when a 3D file is attached) | Real inputs showed customers rarely name a process or deadline | Run A 5/13, Run B 8/13, passed both 4/13 |
| 2026-11-28 | v2 | Four fixes: no process unless the customer wrote it; attached 3D file means no "file" or "dimensions" flag; "un logo" / "le prototype" = quantity 1 (not for capability questions or bare nouns); scope stated explicitly (3D modelling and painting offered, size alone is not out of scope) | v1 failures: guessed FDM (inputs 2, 10, 12), ignored attached file (3, 8), quantity null on single objects (12, 13), out_of_scope wrongly true (1, 5) | Run A 12/13, Run B 12/13, passed both 12/13, inputs differing between runs 0 (v1: 5/13, 8/13, passed both 4/13, 8 inputs differing). Remaining failure: input 9 (vague material kept) |

AI use: Claude helped me draft and structure this file; the inputs, the runs and the figures are mine.
