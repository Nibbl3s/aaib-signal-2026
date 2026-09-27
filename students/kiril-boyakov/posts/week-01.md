---
week: 1
title: "Freight Quotes: Cheap AI Tokens, Expensive Responsibility"
author: "Kiril Boyakov"
beat: "AI in European Freight Cost Estimation"
skill: "Cost literacy"
date: 2026-09-27
---

## The hook

My family works in logistics, so I have been curious about freight since childhood. AI could help prepare customer quotes, but a customer may trust the price they receive: cheap text generation does not remove the responsibility for getting that price right.

## The numbers

I modeled a hypothetical European freight forwarder receiving 100 quote requests per day. Using the course convention of 30 days per month, that means 3,000 requests. The AI reads shipment details and a relevant rate-sheet extract, then drafts a quote for a person to check before sending. It should use supplied rates rather than invent current freight prices.

I assume one AI call per request, with 1,000 input tokens for instructions, shipment details and rates, and 300 output tokens for the draft. These are planning estimates, not measurements from a working freight system.

For a pricing example, I use Claude Haiku 4.5 at standard API rates: $1 per million input tokens and $5 per million output tokens, checked on 27 September 2026.

- Input: 3,000 × 1,000 = 3 million tokens → $3.00/month.
- Output: 3,000 × 300 = 900,000 tokens → $4.50/month.
- Total tokens: $7.50/month, or €6.90 at the course rate of $1 = €0.92.

Now add human review. Assuming two minutes per quote and €25 per hour, checking costs 3,000 × 2 ÷ 60 × €25 = €2,500/month.

The combined estimate is therefore €2,506.90/month, approximately €0.84 per quote. This excludes setup, software integration, maintenance, retries and losses from errors that escape review. It also does not establish savings: I would need to measure the time and cost of preparing quotes manually.

## The insight

What surprised me is the gap between the token bill and the attention needed to use the output responsibly. In this scenario, review costs over 360 times more than the tokens. If checking takes four minutes instead of two, review alone becomes €5,000 per month. The review-time assumption matters much more than a small change in token pricing.

My separate tokenizer experiment also showed why language and formatting deserve testing. With o200k_base, the customer email increased from 149 English tokens to 173 Russian tokens, while the invoice increased from 147 to 195. The Russian contract used 188 tokens in mixed case but 461 in capitals. These results depend on the exact text and tokenizer; they cannot be applied directly to Claude’s bill.

I would still support Russian-speaking customers rather than require English solely to reduce token costs. Convenience and clear communication have business value. However, multilingual support and freight terminology need testing.

My conclusion is that delegating a task to AI means allocating enough attention to check it. A plausible quote is not evidence that every rate, surcharge or shipment detail is correct.

## The question

How much checking time can AI actually save without increasing the number of incorrect freight quotes sent to customers?

Sources: [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing); [Week 1 course instructions](https://advanced-ai-in-business.vercel.app/week/1); my measurements in [Tiktokenizer](https://tiktokenizer.vercel.app/).

AI assistance: I used ChatGPT to help structure and draft this post from my ideas, find provider pricing, check calculations, and guide file preparation and Git publishing. I performed the tokenizer measurements myself.
