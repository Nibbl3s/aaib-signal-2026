---
week: 6
title: "My Injury Tool Costs €0.0002 per Article. The Price Is Not What Breaks It"
author: "Osama Daoud"
beat: "AI in Sports Performance – Scouting, Player Tracking and Injury Prevention"
skill: "Cost projection"
date: 2026-11-05
---
This week I stopped estimating and measured: I sent my own injury prompt and a real article to Google's API and read the bill in the response. One article cost €0.0002. The real question is whether the token price is even the number that matters.

## The use case

My tool reads an injury news article and fills in a player card: player, body part, injury type and expected time out. The user is a data analyst at a club, agency or media company who follows injuries at rival clubs. From Week 4: about 150 articles a month per analyst, or 5 a day. I imagine selling it as a subscription at €20 per analyst per month.

## The numbers

**Measured call** (5 November 2026, Hoppscotch → Gemini API, `gemini-flash-lite-latest`, which answered as `gemini-3.5-flash-lite`). Input: my prompt plus the ESPN article on Kai Havertz (145 words). The answer was correct: hamstring, muscle, not mentioned.

- Input: 468 tokens
- Output: 23 tokens
- Price: $0.30 per 1M input, $2.50 per 1M output (Gemini 3.5 Flash-Lite, verified 24 July 2026)
- **Unit cost:** 468 × $0.30/1M + 23 × $2.50/1M = **$0.000198** (about €0.0002)

A surprise: in my case **input** is 71% of the cost, not output. My answer is four short lines, while the prompt and article are long. The course rule "output dominates" does not hold for extraction tasks.

**Projection** (5 calls per user per day, 30 days, $1 = €0.92)

| Users | Calls/day | Daily | Monthly | Annual | Revenue/month |
|---|---|---|---|---|---|
| 10 | 50 | $0.01 | $0.30 | $3.56 | €200 |
| 100 | 500 | $0.10 | $2.97 | $35.62 | €2,000 |
| 1,000 | 5,000 | $0.99 | $29.68 | $356 | €20,000 |
| 10,000 | 50,000 | $9.90 | $296.85 | $3,562 | €200,000 |

At every scale, tokens are 0.14% of revenue.

**Tiers:** the same call on a standard model (gpt-5.6-terra, $2/$12) costs $0.0012, and on a premium model (gpt-5.6-sol, $5/$30) $0.0030. 15 times more, still under half a cent.

**Errors:** in Week 2 my tool was right 23 of 24 times (95.8%). The analyst fixes each error: about 1.75 minutes at €48 an hour, or €1.40. At 150 articles a month that is about 6 errors, or €8.82 a month. The tokens for the same month cost €0.03. **Errors cost about 320 times more than tokens.**

## The break point

On tokens, the product almost cannot break. A €20 subscription only becomes unprofitable at about 3,500 articles per analyst per day on the budget model, 570 on standard and 230 on premium.

The real break point is on the customer's side. In Week 4 I valued the tool at about €75 a month of saved time per analyst. Every error costs that analyst €1.40 to fix. At a €20 price, the customer stops gaining once the error rate reaches about **19%**. So my measured 4.2% has room, but a silent model swap that makes the tool guess more often (like Mbappé's invented "ligament") would erase the value long before the bill moves. The other limit is price: above about €60 a month, the subscription costs more than the time it saves.

## The insight

The cheapest fix is not a cheaper model; it is architecture. Injury news for 56 clubs is the same 150 articles for every analyst. If each article is processed once and shared, 10,000 users still cost 150 calls a month: about three cents. A builder in my beat should watch the error rate, not the pricing page.

## The question

If Google quietly changes what `gemini-flash-lite-latest` points to, who on a club's staff would notice my error rate moving from 4% to 19%?

*Sources: my own API call (screenshots in my Canvas submission); [Gemini 3.5 Flash-Lite pricing](https://trevorfox.com/tools/calculators/llm-cost/google-gemini/gemini-3.5-flash-lite/) (verified 24 July 2026, same figures on [Maxim](https://www.getmaxim.ai/bifrost/llm-cost-calculator/provider/gemini/model/gemini-3.5-flash-lite)); course AI Pricing Reference (7 September 2026) for the standard and premium tiers.*

*AI disclosure: I used Claude to prepare the API request, run the calculations and polish the wording. The API call, the use case, the Week 2 error rate and the conclusions are my own.*
