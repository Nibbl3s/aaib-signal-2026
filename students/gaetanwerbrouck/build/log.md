# Build log

**Tool:** Football profile fact extractor  
**Prompt version:** v1  
**Status:** Prepared, not yet tested

## Run log

Complete one row for each run. Run each test input twice. Paste the full model output or a faithful, complete record of it. Do not fill in results before running the prompt.

| Test ID | Run | Output | Failure code (if any) | Notes |
|---|---:|---|---|---|
| T01 | 1 | Not run | — | |
| T01 | 2 | Not run | — | |
| T02 | 1 | Not run | — | |
| T02 | 2 | Not run | — | |
| T03 | 1 | Not run | — | |
| T03 | 2 | Not run | — | |
| T04 | 1 | Not run | — | |
| T04 | 2 | Not run | — | |
| T05 | 1 | Not run | — | |
| T05 | 2 | Not run | — | |
| T06 | 1 | Not run | — | |
| T06 | 2 | Not run | — | |
| T07 | 1 | Not run | — | |
| T07 | 2 | Not run | — | |
| T08 | 1 | Not run | — | |
| T08 | 2 | Not run | — | |
| T09 | 1 | Not run | — | |
| T09 | 2 | Not run | — | |
| T10 | 1 | Not run | — | |
| T10 | 2 | Not run | — | |

## Failure codes

- **F1 Wrong:** an incorrect answer or value.
- **F2 Fabricated:** information was invented or inferred without support.
- **F3 Missed:** a relevant fact in the input was not extracted.
- **F4 Format:** the output did not follow the requested format.
- **F5 Refused:** the model refused a task it should have attempted.
- **F6 Inconsistent:** the two runs gave materially different answers.

## Summary (complete after testing)

- Inputs tested:
- Total runs:
- Correct runs:
- Failures by code:
- What the tool did well:
- What needs improvement:
- Decision: keep, revise, or stop testing:

## Three-row probe plan

| Probe | What I will test | Artifact / evidence | Fablab session |
|---|---|---|---|
| 1 | Whether the prompt extracts explicit fields without inventing missing values. | Test-set rows and logged outputs for normal and missing-data cases. | First available session |
| 2 | Whether the prompt handles Dutch, short, and ambiguous inputs consistently. | Two logged runs per case, compared with the expected answers. | First available session |
| 3 | Whether the structured output is useful in a scout workflow and saves time compared with manual extraction. | A small timing comparison and notes on corrections needed. | First available session |
