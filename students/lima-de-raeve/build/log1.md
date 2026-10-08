# Build Log — SoloShop Customer Enquiry Classifier

## Test Run 1 — Real Customer Messages

**Date:** 8 October 2026  
**Prompt:** v1  
**Platform:** Google AI Studio  
**Model:** Gemini (exact model version to be added)  
**Inputs:** 10  
**Runs per input:** 2  
**Total responses:** 20

### Results

| # | Expected | Gemini Run A | Gemini Run B | Result |
|---|---|---|---|---|
| 1 | AUTOMATE | HUMAN INTERVENTION | HUMAN INTERVENTION | Incorrect |
| 2 | HUMAN INTERVENTION | HUMAN INTERVENTION | HUMAN INTERVENTION | Correct |
| 3 | HUMAN INTERVENTION | HUMAN INTERVENTION | HUMAN INTERVENTION | Correct |
| 4 | AUTOMATE | AUTOMATE | AUTOMATE | Correct |
| 5 | AUTOMATE | AUTOMATE | AUTOMATE | Correct |
| 6 | AUTOMATE | AUTOMATE | AUTOMATE | Correct |
| 7 | HUMAN INTERVENTION | HUMAN INTERVENTION | HUMAN INTERVENTION | Correct |
| 8 | HUMAN INTERVENTION | INSUFFICIENT INFORMATION | INSUFFICIENT INFORMATION | Disagreement |
| 9 | INSUFFICIENT INFORMATION | HUMAN INTERVENTION | HUMAN INTERVENTION | Disagreement |
| 10 | AUTOMATE | AUTOMATE | AUTOMATE | Correct |

### Performance

**Accuracy against original expected labels:** 7/10 = 70%

**Response-level accuracy:** 14/20 = 70%

**Consistency:** 10/10 = 100%

**Observed disagreements:** 3 inputs (#1, #8 and #9).

**Output format:** All 20 responses followed the required single-label format.

### Failure classification

| Code | Count | Explanation |
|---|---|---|
| F1 — Wrong | 3 provisional | Outputs for #1, #8 and #9 differed from the expected labels |
| F2 — Fabricated | 0 | No invented information observed in the label-only outputs |
| F3 — Missed | 0 confirmed | No separately verified missed details |
| F4 — Format | 0 | All outputs followed the required format |
| F5 — Refused | 0 | No refusals |
| F6 — Inconsistent | 0 | Every input received the same answer in both runs |

**Important:** The three F1 cases are provisional. Inputs #8 and #9 reveal possible weaknesses in the original expected answers and classification policy, not necessarily model mistakes.

### Failure analysis

**Input 1 — Missing order through guest checkout**

- Expected: AUTOMATE
- Actual: HUMAN INTERVENTION (twice)
- Provisional failure: F1 Wrong

Gemini escalated a missing-delivery enquiry that I expected to be handled initially through automated troubleshooting. The message mentions that the customer cannot access the usual support process, which may have influenced the classification.

This could indicate overly cautious escalation, although a human may eventually be required if the automated instructions do not work.

**Input 8 — Spanish survey instructions**

- Original expected: HUMAN INTERVENTION
- Actual: INSUFFICIENT INFORMATION (twice)
- Provisional failure: F1 Wrong

The message describes how to answer survey questions rather than requesting customer support. My original expectation was human intervention because the message falls outside routine enquiries.

However, the current prompt does not explicitly state that unrelated messages must be escalated. Gemini's response is therefore defensible.

**Input 9 — Content creator collaboration**

- Original expected: INSUFFICIENT INFORMATION
- Actual: HUMAN INTERVENTION (twice)
- Provisional failure: F1 Wrong

Gemini escalated a collaboration proposal rather than classifying it as insufficient information.

The request is understandable and contains enough information to identify its purpose. This suggests that the original expected label may have been inappropriate.

A better policy would explicitly route partnership and collaboration requests to human review.

### What surprised me?

My original fictional test set produced 100% accuracy, but the new real-world examples produced only 70% accuracy against my expected labels.

The model remained completely consistent across repeated tests. However, consistency did not guarantee agreement with the expected classifications.

I also discovered that some errors may originate from my own test design rather than from Gemini. In particular, the current prompt does not clearly explain what should happen when a message is unrelated to customer service or concerns a business collaboration.

### Most costly potential failure

The most costly potential failure would be incorrectly classifying a serious customer complaint as AUTOMATE instead of HUMAN INTERVENTION.

For a solo entrepreneur, this could lead to unresolved disputes, additional expenses and reputational damage.

In the current test, the most notable potential error was the opposite: Gemini escalated a routine enquiry (#1). This would increase the entrepreneur's workload but is generally less dangerous than failing to escalate a serious complaint.

### Proposed improvement — Prompt v2

**Hypothesis:** Adding explicit rules for business enquiries, unrelated messages and cases where automated support is blocked will reduce disagreements on boundary cases.

**Predicted effect:** More reliable classification of messages outside the standard return, delivery and product-information categories.

**Possible trade-off:** Additional escalation rules may increase the number of messages routed to a human, reducing the time savings of automation.

**Status:** Proposed only. Prompt v1 has not yet been modified or retested.

### Next steps

1. Confirm the original source URLs for all ten messages.
2. Review the ambiguous expected labels without erasing the original expectations.
3. Complete the remaining five test inputs.
4. Create Prompt v2 and document its changes.
5. Retest the same inputs twice using Prompt v2.
6. Compare both versions using the same test set.
