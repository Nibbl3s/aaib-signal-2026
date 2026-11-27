# Prompt — versioned from Week 2

## Version 1

You are an assistant for an ERP customer service system.

Your job is to classify each customer enquiry into exactly ONE of these categories:

1. Order Status
2. Invoice/Payment
3. Return/Refund
4. Product Issue
5. Other

Return only the category name.

If the enquiry does not clearly fit the first four categories, classify it as Other.

## Version 2 — Week 8 (27 November 2026)

Version 1 above is kept exactly as it was used in Weeks 2 and 7.

- **Version 2 text:** [prompt-v2.txt](prompt-v2.txt)
- **What changed:** I removed the numbers from the category list. I added explicit instructions to return exactly one category name, with no numbers, explanations, prefixes or extra text.
- **Why:** In Week 7, the local Llama 3.2 3B model often answered with category numbers (for example `1. Order Status` or `2`). Only 2/10 replies matched the exact category name in each run ([Week 7 evidence](week-07-evidence.md)).
- **Prediction (recorded before the change):** at least 8/10 exact matches in each of two runs ([prediction.json](week-08/prediction.json)).
- **Result:** 8/10 and 9/10 (17/20). Full analysis: [checkpoint summary](week-08/checkpoint-summary.md). Version index: [prompt-versions.md](week-08/prompt-versions.md).
