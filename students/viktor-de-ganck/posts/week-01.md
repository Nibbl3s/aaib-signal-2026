---
week: 1
title: "My AI Research Desk Would Cost €4 a Month. That Is Not the Real Price."
author: "Viktor De Ganck"
beat: "AI as a retail investor's research desk"
skill: "Cost literacy"
date: 2026-10-06
---

Every day I check the same scattered sources before I look at a chart: the Financial Times, The Economist, a handful of analysts and institutions on X, and whatever the Fed or the ECB decided. None of them shows me the full picture in one place, and I barely use AI to connect them, although I suspect there is a lot of potential I have not found yet. So before building anything, I wanted to know: what would an AI research desk actually cost me?

## The numbers

The use case: every day, an AI reads about 50 news items and writes one structured briefing on what they mean for stocks, forex, crypto and bonds. Fifty is my estimate of what I scan on a normal day, not a measured number.

Assumptions: Standard-tier pricing from the course AI Pricing Reference (snapshot 7 September 2026), $2.00 per million input tokens and $12.00 per million output tokens, as charged for GPT-5.6 Terra. About 1.33 tokens per English word, 30 days a month, $1 = €0.92. My instructions to the AI add 500 tokens a day; the briefing itself is about 1,200 tokens.

**Scenario A, headlines only** (about 25 tokens each):

- Input: (50 × 25 + 500) × 30 = 52,500 tokens → 0.0525 × $2.00 = $0.11
- Output: 1,200 × 30 = 36,000 tokens → 0.036 × $12.00 = $0.43
- Total: $0.54, or **€0.49 a month**

**Scenario B, full articles** (about 1,000 words, so 1,333 tokens each):

- Input: (50 × 1,333 + 500) × 30 = 2,014,500 tokens → 2.01 × $2.00 = $4.03
- Output: the same $0.43
- Total: $4.46, or **€4.10 a month**

Even on the Premium tier ($5/$30), scenario B stays around €10 a month.

## The insight

Reading full articles costs eight times more than reading headlines, and it is still cheaper than a coffee. The token bill is not where the money is.

The first real cost is access. I do not pay for the FT or The Economist, because Artevelde gives me access. An AI can only read what someone pays for, so my data costs nothing only because my school covers it. When I graduate, a personal subscription will cost far more each month than the AI that reads it. Free sources are the alternative, but they still need exploring and checking.

The second real cost is a wrong answer. Headlines only is cheap, but a headline does not give the AI the full picture of the article. When it has to explain what a rate decision means for crypto or the dollar from twelve words, it fills the gap itself and can present invented context as fact. One trade based on that costs more than years of tokens.

So the cheapest setup is also the riskiest, just like the Budget chatbot in this week's EuroShop case. For my beat, the question is not what the tokens cost, but how much the AI needs to read before I can trust it.

## The question

How much of an article does an AI need to read before its market summary is safe to act on, and can a tool like Claude gather and structure current data reliably enough to find out?

*Written from my own notes, with Claude's help on wording and checking the calculations. The use case, assumptions and conclusions are my own.*
