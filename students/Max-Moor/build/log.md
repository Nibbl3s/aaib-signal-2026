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

AI use: Claude helped me draft and structure this file; the inputs, the runs and the figures are mine.
