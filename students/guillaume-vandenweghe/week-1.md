# What does AI cost in claims handling? The token bill is the smallest number

Insurers are testing AI to read and answer claim emails. In tokens it looks almost free. I priced a realistic case to see where the money actually goes.

## The numbers

Use case: a mid-sized Belgian insurer uses an AI model to read incoming Dutch claim emails and draft a first reply. All assumptions below are mine, not measured.

- Volume: 20,000 claim emails per month
- Tokens: an English-equivalent claim needs about 580 tokens in (email plus instructions) and 290 out. In my own tokenizer test (three business documents, o200k_base), Dutch used about 20.7% more tokens, so I use 700 in and 350 out.
- Price: Standard tier at $2.00 per 1M input tokens and $12.00 per 1M output tokens (course pricing reference, 7 September 2026)
- Exchange rate: $1 = €0.92

Token cost:
- Input: 20,000 × 700 = 14M tokens → 14 × $2.00 = $28
- Output: 20,000 × 350 = 7M tokens → 7 × $12.00 = $84
- Total: $112 → **€103 per month**

The Dutch premium: in English the same emails would cost 11.6M input and 5.8M output tokens = $92.80 → €85. So writing in Dutch costs about €18 more per month.

Error cost: I assume 12% of replies need a human claims handler to fix them, taking 15 minutes at €32 per hour = €8 per error. That is 2,400 errors × €8 = €19,200.

**Total: €103 + €19,200 = €19,303 per month (about €232,000 per year).**

## The insight

Tokens are 0.5% of the total bill. The Dutch language premium (€18) equals roughly two wrong answers. And every percentage point of error rate costs 200 errors × €8 = €1,600 per month, about 15 times the entire token bill.

The weakest numbers in this post are the 12% error rate and the €8 per error, and neither appears on any pricing page. I would measure both on a sample of real claims before spending a euro. In insurance a wrong answer can also mean a complaint or an ombudsman case, so €8 may be too low.

Cost literacy is not reading the vendor's price. It is finding the number the vendor did not give you.

## The question

How accurate must a claims-triage AI be before it beats a human handler on cost per correctly handled claim?

*AI note: I used Claude to help structure this post and check my calculations. The use case, the assumptions and the conclusions are mine.*
