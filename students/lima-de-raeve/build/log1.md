## Run 1 — Prompt v1 — 8 October 2026

**Brief:** Test whether Gemini can accurately and consistently classify customer service enquiries into AUTOMATE, HUMAN INTERVENTION, or INSUFFICIENT INFORMATION, following SoloShop's predefined company policies.

**Model used:** Google Gemini (Google AI Studio — exact model version to be recorded)

**Inputs tested:** 10 of 15 planned inputs. Each input was tested twice.

| # | Input (short label) | Expected | Got (Run A) | Got (Run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Tracking request | AUTOMATE | AUTOMATE | AUTOMATE | ✓ | — |
| 2 | Repeated damaged deliveries | HUMAN INTERVENTION | HUMAN INTERVENTION | HUMAN INTERVENTION | ✓ | — |
| 3 | Very vague message | INSUFFICIENT INFORMATION | INSUFFICIENT INFORMATION | INSUFFICIENT INFORMATION | ✓ | — |
| 4 | Spanish enquiry | AUTOMATE | AUTOMATE | AUTOMATE | ✓ | — |
| 5 | Size exchange | AUTOMATE | AUTOMATE | AUTOMATE | ✓ | — |
| 6 | Return policy | AUTOMATE | AUTOMATE | AUTOMATE | ✓ | — |
| 7 | Damaged zipper | HUMAN INTERVENTION | HUMAN INTERVENTION | HUMAN INTERVENTION | ✓ | — |
| 8 | Exception request | HUMAN INTERVENTION | HUMAN INTERVENTION | HUMAN INTERVENTION | ✓ | — |
| 9 | Short product question | AUTOMATE | AUTOMATE | AUTOMATE | ✓ | — |
| 10 | Legal threat | HUMAN INTERVENTION | HUMAN INTERVENTION | HUMAN INTERVENTION | ✓ | — |

### Preliminary results

- **Classification accuracy:** 10/10 inputs correct (100%).
- **Consistency:** 10/10 inputs received identical classifications in both runs (100%).
- **Total responses evaluated:** 20.
- **Remaining:** Inputs #11–15, each to be tested twice.

### Failures by type

| Failure code | Count | Notes |
|---|---|---|
| F1 Wrong | 0 | No incorrect classifications |
| F2 Fabricated | 0 | No fabricated information observed |
| F3 Missed | 0 | No missed escalation triggers |
| F4 Format | 0 | All outputs followed the required format |
| F5 Refused | 0 | No refusals |
| F6 Inconsistent | 0 | Both runs produced identical classifications |

### What surprised me

Gemini correctly classified all ten customer enquiries, including messages in another language, vague questions, defective products and legal threats. I expected at least some difficulties with distinguishing routine requests from situations requiring human intervention. However, no classification errors or inconsistencies have appeared so far.

This result is promising, but the test set is relatively small and consists of fictional messages. It does not yet demonstrate how reliably the tool would perform with real customer enquiries.

### The failure that would have mattered most in real use, and why

Although no failures have occurred, the most dangerous potential error would be classifying a serious customer complaint as AUTOMATE when it actually requires HUMAN INTERVENTION. This could lead to unresolved complaints, customer dissatisfaction and additional costs for the entrepreneur.

### Next steps

Complete both runs for inputs #11–15. If the tool continues to achieve 100% accuracy, investigate its limitations using more challenging real-world enquiries while keeping the original test results unchanged.
