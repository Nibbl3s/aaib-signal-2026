---
week: 6
title: "The Token Bill Is €0.003 a Month. What an AI Quote Tool Really Costs O&D 3D"
author: "Max"
beat: "How can AI automation transform the workflow of a digital manufacturing company?"
skill: "Cost projection"
date: 2026-10-29
---

AI looks free on a pricing page. I made a real API call with my own quote-intake prompt, read the bill, and found that the token line is the least interesting number in the model.

## The use case
The od3d.be form receives about 12 quote requests a month (88 in 7.2 months). A tool would read each free-text message and return process, material, quantity, largest dimension and what is missing as JSON. A person checks every result before a quote goes out, and the price stays in a spreadsheet.

## The numbers
On 2026-10-29 I sent one of my 13 real customer messages to gemini-3.5-flash-lite. The `usage` object said **554 tokens in, 79 out**. At $0.25 and $1.50 per 1M tokens (AI Pricing Reference, snapshot 7 September 2026) one call costs **$0.00026**, and output is 46% of it.

The answer also named FDM, a process the customer never wrote. That failure costs nothing in tokens.

| Requests/day | Per month | Tokens/month | Tokens/year | People checking and fixing/month |
|---|---|---|---|---|
| 0.4 | 12 | $0.0031 | $0.037 | €18.40 |
| 4 | 120 | $0.031 | $0.370 | €184 |
| 40 | 1,200 | $0.308 | $3.70 | €1,840 |
| 400 | 12,000 | $3.08 | $37.01 | €18,400 |

At 400 requests a day, 12,000 a month, the tokens cost $3.08. The same month needs €18,400 of human time, because my Week 2 test failed on 13 of 26 runs on 13 real messages (50%), and I assume 1 minute to check every output and 2 minutes to fix a failure, at €46/h. The tokens are 1/3,243 of the cost of the failures alone.

Even a premium model changes little in the token bill: it adds €53.91 a month at that volume, and pays for itself if it avoids 35 failures out of 12,000 (0.29 percentage points).

## The break point
It is not volume. Doing a request by hand takes me about 5 minutes. I count half of that as real value (my Week 4 convention), so 2.5 minutes, minus 1 minute of checking. That leaves 1.5 minutes per request for fixing failures. At a 50% failure rate the tool stops paying per request if a fix takes more than 3 minutes. At a 2-minute fix it stops if failures pass 75%.

Volume matters through the build. For a 12-month payback on €920 of my time plus €230 of maintenance, I need 250 requests a month at 50% failures, or 114 at 20%. Today I have 12.

The weakest assumption is the fix time. It is an estimate, not a measurement.

## The insight
A pricing page makes the token price look like the decision. Each output token costs six times an input token, so my 79 output tokens are already 46% of the call, but the bill is €0.003 a month. What decides the economics is the failure rate and the minutes a person spends on each failure. A builder in digital manufacturing should time ten real fixes before opening a pricing page.

## The question
If minutes-to-fix decides everything, how do I time it honestly on ten real requests, when I am the one doing both the fixing and the timing?
