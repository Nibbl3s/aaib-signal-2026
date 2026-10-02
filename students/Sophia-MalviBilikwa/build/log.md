# Build Log — AI Bias & Impact Assessment Tool

## Run Session
**Prompt Version:** v1
**Total Inputs Tested:** 10
**Runs per Input:** 2

### Summary Table
| Input ID | Run 1 Result | Run 2 Result | Consistent? (F6?) | Failure Code(s) | Notes / Observations |
|---|---|---|---|---|---|
| 1 | Pass (Correct) | Pass (Correct) | Yes | None | Handled standard vendor pitch accurately. |
| 2 | Pass (Moderate) | Pass (Moderate) | Yes | None | Caught subjective traits correctly. |
| 3 | Wrong Risk Level | High Risk | No | F1, F6 | Run 1 missed the indirect care burden; Run 2 caught it. Inconsistent! |
| 4 | Fabricated Justification| Pass (Correct) | No | F2, F6 | Run 1 invented a French legal statute that wasn't in the text. |
| 5 | Pass (Low/None) | Pass (Low/None) | Yes | None | Correctly identified administrative task. |
| 6 | Missed nuance | Missed nuance | Yes | F3 | Missed the masculine-coded phrasing ("ninja"). |
| 7 | Pass (High Risk) | Refused | No | F5, F6 | Run 2 refused due to "monitoring policy" safety trigger. |
| 8 | Pass (High Risk) | Pass (High Risk) | Yes | None | Flagged the vague pseudoscience. |
| 9 | Pass (Low/None) | Pass (Low/None) | Yes | None | Correctly identified logistical routing. |
| 10| Format Error | Pass (High Risk) | No | F4, F6 | Run 1 output markdown broken formatting. |
