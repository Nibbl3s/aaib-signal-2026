## Run 1 — Prompt v1 — 8 October 2026

**Brief:** Test whether Gemini can correctly classify customer service enquiries into AUTOMATE, HUMAN INTERVENTION, or INSUFFICIENT INFORMATION using SoloShop's predefined company policies. The first seven inputs will be evaluated for classification accuracy and consistency.

**Model used:** Google Gemini (Google AI Studio; exact model version to be recorded)

**Inputs tested:** 7 of 15 planned inputs. Inputs #1–4 were tested once; inputs #5–7 were tested twice.

| # | Input (short label) | Expected | Got (Run A) | Got (Run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Tracking request | AUTOMATE | AUTOMATE | Pending | ✓ A only | — |
| 2 | Repeated damaged deliveries | HUMAN INTERVENTION | HUMAN INTERVENTION | Pending | ✓ A only | — |
| 3 | Very vague message | INSUFFICIENT INFORMATION | INSUFFICIENT INFORMATION | Pending | ✓ A only | — |
| 4 | Spanish enquiry | AUTOMATE | AUTOMATE | Pending | ✓ A only | — |
| 5 | Size exchange | AUTOMATE | AUTOMATE | AUTOMATE | ✓ | — |
| 6 | Return policy | AUTOMATE | AUTOMATE | AUTOMATE | ✓ | — |
| 7 | Damaged zipper | HUMAN INTERVENTION | HUMAN INTERVENTION | HUMAN INTERVENTION | ✓ | — |

### Preliminary results

- **First-run accuracy:** 7/7 correct (100%).
- **Completed double-run tests:** 3/3 inputs correct and consistent (100%).
- **Total model responses recorded:** 10.
- **Remaining:** Run B for inputs #1–4 and both runs for inputs #8–15.

### Failures by type (observed so far)

| Failure code | Count | Notes |
|---|---|---|
| F1 Wrong | 0 | No incorrect classifications observed |
| F2 Fabricated | 0 | No fabricated output observed |
| F3 Missed | 0 | No missed escalation triggers observed |
| F4 Format | 0 | All responses used the expected category |
| F5 Refused | 0 | No refusals observed |
| F6 Inconsistent | 0 | No inconsistencies among the three inputs tested twice |

### What surprised me

The first seven customer enquiries were classified correctly, including a message in Spanish and a defective-product complaint. The initial results suggest that Gemini can follow the classification rules for these examples. However, the sample is still small, and only three inputs have been tested twice. More difficult cases may reveal failures that have not appeared yet.

### The failure that would have mattered most in real use, and why

No failures have been observed so far. However, the most concerning potential failure would be classifying a serious complaint or defective product as AUTOMATE instead of HUMAN INTERVENTION. This could prevent the entrepreneur from reviewing an important customer problem and lead to dissatisfaction or additional costs.

### Next steps

Complete the second run for inputs #1–4 and test inputs #8–15 twice. Record every output, including incorrect or inconsistent classifications, without changing the original expected answers.
