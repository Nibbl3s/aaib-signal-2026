# Build log — Quote intake extraction (O&D Impression 3D)

**Rule:** every run is logged, every failure is kept, nothing is deleted. Each input is run **twice** (Run A and Run B) on the same prompt version; a difference between the two runs is an F6 failure.

**Setup (fill in):**
- Prompt version tested: v1
- Model and interface used: ______
- Date of runs: ______
- Test-set source: all 13 inputs currently synthetic (S). Update this line if any are replaced by real (R) inputs. While any are synthetic, the success rate below is an **upper bound**.

## Failure codes (course taxonomy)

| Code | Failure | Looks like |
|---|---|---|
| F1 | Wrong | Confidently gave the incorrect answer |
| F2 | Fabricated | Invented a detail not in the input |
| F3 | Missed | Failed to find something that was there |
| F4 | Format | Right content, unusable shape (not valid JSON, extra text, wrong keys) |
| F5 | Refused | Declined, hedged, or asked a question instead of answering |
| F6 | Inconsistent | Different answer on the same input across the two runs |

## Run log (paste the real output; do not tidy it)

### Input 1
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 2
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 3
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 4
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 5
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 6
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 7
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 8
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 9
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 10
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 11
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 12
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

### Input 13
- **Run A output:**
- **Run B output:**
- **Result vs expected:** Pass / Fail
- **Failure code(s):**
- **Note:**

## Summary (fill in after all runs)

- **Success rate (Run A):** ___ / 13
- **Success rate (Run B):** ___ / 13
- **Inputs where A and B differed (F6):** ___
- **Failure counts:** F1 ___ · F2 ___ · F3 ___ · F4 ___ · F5 ___ · F6 ___
- **Most dangerous failure (the one that would have reached a customer):**
- **Predictions from test-set.md that were right / wrong:**
- **Inputs that were too easy:**
- **Caveat:** inputs are synthetic (upper bound), unless replaced.

## Probe plan (physical deployment probe, 3 rows)

Fill these in from the fablab session. The rows follow the brief: machine, artifact, session. If your log template has different wording, use the template's wording.

| Row | What to write | My entry |
|---|---|---|
| 1. Machine | Which fablab machine you will use (laser cutter, 3D printer, embroidery, electronics) | |
| 2. Artifact | What you will make and what deployment context it simulates (for example, a counter standee with the intake form) | |
| 3. Session | The fablab session or OPEN block you will attend, with date | |

## Change log

| Date | Prompt version | What changed | Why | Re-measured result |
|---|---|---|---|---|
| 2026-10-01 | v1 | First version | — | — |
