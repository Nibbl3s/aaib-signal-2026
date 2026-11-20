# Signal Post 6 — The Real Cost of AI Fashion Product Descriptions

Can an online fashion webshop use AI to write thousands of product descriptions without creating a large technology bill? I tested a Fashion Product Description Assistant with a real API call to see what the numbers look like.

## The Use Case

My use case is an AI assistant for fashion e-commerce teams. Employees provide factual product information, such as the item name, colour, material and sizes, and the assistant turns it into a short webshop description. I tested my Prompt v2 with Gemini 3.1 Flash Lite. The prompt instructs the model to use only supplied facts and to flag contradictory or insufficient information instead of inventing details.

## The Numbers

My measured API call used **432 input tokens** and **71 output tokens**, or **503 tokens in total**. I used the course pricing reference dated 7 September 2026: Gemini 3.1 Flash Lite costs **$0.25 per million input tokens** and **$1.50 per million output tokens**. This gives an estimated cost of **$0.000108 for input** and **$0.0001065 for output**, or **$0.0002145 per description**. Prices can change, so the provider's current pricing should be checked before implementation.

For a hypothetical webshop generating 5,000 descriptions per month, the estimated token cost is about **$1.07 per month**. To explore growth, I assumed 10 descriptions per user per day and 30 days per month:

| Users | Calls per day | Monthly API cost |
|---:|---:|---:|
| 10 | 100 | $0.64 |
| 100 | 1,000 | $6.44 |
| 1,000 | 10,000 | $64.35 |
| 10,000 | 100,000 | $643.50 |

These are projections based on one measured call, not actual customer usage. Longer prompts, longer outputs, repeated generations and model upgrades could increase the bill.

## The Break Point

To test the business case, I assumed a subscription price of **$15 per user per month**. At 10 descriptions per day, the API cost is about **$0.064 per user per month**, around **0.43% of subscription revenue**. I define the warning zone as AI costs reaching 10% of revenue. Under these assumptions, that happens at roughly **233 calls per user per day**. API costs would exceed the $15 subscription revenue at roughly **2,331 calls per user per day**. These break points only include token costs; they exclude development, staff, maintenance, support and other business expenses.

## The Insight

The test suggests that the token cost of generating fashion product descriptions can be very low, even at substantial scale. However, low cost does not automatically mean reliable output. In one test, the generated description included the phrase “matching belt”, although the product information only specified a belt and did not confirm that it matched. My Week 2 tests did not establish a reliable numerical error rate, so I would not claim one. A human should review descriptions, especially before publication, and the team should track factual errors, regenerations and token usage. I would start with the low-cost model and only move to a more expensive tier if measured quality requires it.

**Question:** Would you trust AI-generated product descriptions on a webshop without a human checking the product facts first?
