---
week: 6
title: "Eight Cents a Month, or a Loss on Every User: What an AI News Terminal Really Costs"
author: "Viktor De Ganck"
beat: "AI as a retail investor's research desk"
skill: "Cost projection"
date: 2026-10-30
---
A retail investor will not pay Bloomberg prices, so an AI news terminal for retail investors has to live on a few euros a month. I measured what my own news classifier costs per call and projected it to 10,000 users. The token price looks harmless. The design decides whether it survives.

## The use case

Picture a composite terminal like the €4.99/month tools I audited last week. Each user follows their own sources: FT, ECB, Fed, VEB, X accounts. The AI labels every incoming item with my Build prompt: event type, asset class, fact or opinion. My volume assumption is 50 items per user per day (est.). Seven of my 15 test items came from just two sources on a single day.

## The numbers

On 30 October 2026 I sent my Build prompt with two test items to `gemini-3.1-flash-lite` through the Gemini API. The usage objects showed 247 + 20 and 194 + 16 tokens. Average per run: 220.5 input, 18 output.

Prices come from the course AI Pricing Reference (snapshot 7 September 2026, accessed 30 October 2026, $1 = €0.92). One headline costs (220.5 × $0.25 + 18 × $1.50) ÷ 1M = $0.000082, or €0.000076.

A full article adds about 1,500 input tokens (est.). That is where it changes:

| Per call | Headline | Full article |
|---|---|---|
| Budget, $0.25 / $1.50 | €0.000076 | €0.00042 |
| Standard, $2 / $12 | €0.00060 | €0.00336 |
| Premium, $5 / $30 | €0.00151 | €0.00841 |

At Standard tier with full articles, 50 items per user per day, every feed classified separately:

| Users | Calls/day | Monthly cost | Annual cost | Monthly revenue |
|---|---|---|---|---|
| 100 | 5,000 | €505 | €6,056 | €412 |
| 1,000 | 50,000 | €5,047 | €60,560 | €4,124 |
| 10,000 | 500,000 | €50,467 | €605,599 | €41,240 |

## The break point

Revenue per user is €4.12: €4.99 minus 21% VAT. The break point is €4.12 ÷ (30 × cost per call).

- Budget, headlines: 1,819 items per user per day. It never breaks.
- Standard, full articles: **41 items per user per day**. At my assumed 50 it loses money with 100 users and with 10,000.
- Premium, full articles: 16.

Growing the user base does not help, because cost and revenue grow together. What fixes it is architecture. News is shared: classify each unique item once and serve the label to everyone. At 2,000 unique items a day (est.), Standard with full articles costs €202 a month in total, or 2 cents per user at 10,000 users.

## The insight

The cheap model made the same mistake my Week 2 test caught on Claude. An FT opinion piece about rate-hike odds came back as "rate decision / fact". For my Build at a composite wealth manager, tokens cost €0.07 a month. My measured 40% error rate costs €1,003 a month in advisor time to catch, which is 15,000 times more.

In a self-serve terminal, nobody is paid to catch it. The investor absorbs the error, possibly as a trade. That cost appears nowhere in my table, which is exactly what makes it dangerous.

## The question

If one shared label is wrong, every user gets the same wrong label at the same moment. Does caching turn one error into 10,000?

*Measured: tokens from two Gemini API calls on 30 October 2026 and the 40% error rate from my Week 2 Build (15 items, run twice, on Claude Sonnet 5.5). (est.) figures are my assumptions; the terminal is a composite. Numbers calculated in Python; post drafted with Claude from my own data. Use case, assumptions and conclusions are mine.*
