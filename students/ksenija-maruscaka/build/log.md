# Build log — every run, every failure (Week 2)
# Test Run Log

| Input | Expected Answer | AI Run 1 | AI Run 2 | Pass/Fail | Failure Class | Explanation |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| "The jacket tore after one week of use." | Product Quality | Product Quality | Product Quality | Pass | - | Clear factual match. |
| "Arrived three days late, missed my event." | Shipping | Shipping | Shipping | Pass | - | Clear factual match. |
| "I like the color, it fits well." | Neutral/Other | Neutral/Other | Neutral/Other | Pass | - | Clear factual match. |
| "The box was crushed and the jacket was torn when I opened it." | Shipping | Shipping | Product Quality | Fail | F6 - Inconsistent | Ambiguous boundary case[cite: 1]. AI flipped its answer between runs. |
| "Bad." | Product Quality | I cannot determine the category. | I cannot determine the category. | Fail | F5 - Refused | Too short. AI refused to answer instead of defaulting to a category. |
| "Tastes like plastic." | Product Quality | Product Quality | Product Quality | Pass | - | AI successfully applied context to a non-clothing item. |
| "According to consumer law section 402, you must refund this." | Product Quality | *Generates a legal disclaimer about refunds* | *Generates a legal disclaimer about refunds* | Fail | F4 - Format | AI ignored the prompt constraints and hallucinated a conversational legal response. |
| "El producto es terrible, se rompió." | Product Quality | Product Quality | Product Quality | Pass | - | Successfully translated and categorized. |
| "I like turtles." | Neutral/Other | Neutral/Other | Neutral/Other | Pass | - | Successfully handled irrelevant information. |
| "Help me." | Neutral/Other | Shipping | Shipping | Fail | F1 - Wrong | AI confidently guessed an issue despite insufficient information. |
| "I ordered a blue shirt but received a red one." | Product Quality | Product Quality | Product Quality | Pass | - | Correctly identified fulfillment/quality issue. |
| "I love this brand!" | Neutral/Other | Neutral/Other | Neutral/Other | Pass | - | Clear factual match. |

## Failure Analysis + Results

*   **Total tests:** 12
*   **Successful tests:** 8
*   **Failed tests:** 4
*   **Success rate:** 66.67%
*   **Failures by category:**
    *   F1 (Wrong): 1
    *   F2 (Fabricated): 0
    *   F3 (Missed): 0
    *   F4 (Format): 1
    *   F5 (Refused): 1
    *   F6 (Inconsistent): 1

## 3-Row Probe Plan

| Probe | Weakness tested | Input | Expected result | What would change my conclusion |
| :--- | :--- | :--- | :--- | :--- |
| Injecting explicit formatting constraints | F4 - Format | "According to law you owe me money." | "Neutral/Other" or "Product Quality" | If the AI continues to generate conversational text despite aggressive negative prompting. |
| Forcing a default fallback | F5 - Refused & F1 - Wrong | "Bad." or "Help me." | "Neutral/Other" | If the AI refuses the fallback rule and continues to confidently guess missing context. |
| Conflict hierarchy rule | F6 - Inconsistent | "Box was late and item was broken." | "Product Quality" | If the AI fails to follow a priority list (e.g., "If shipping AND quality are mentioned, default to quality"). |
