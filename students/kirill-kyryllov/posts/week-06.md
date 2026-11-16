---
week: 6
title: "My Fact-Checker Costs €0.40 a Year. Its Mistakes Cost 3,900 Times More"
author: "Kirill Kyryllov"
beat: "The Fake Analyst: When AI-Generated Business Reports Get It Wrong"
skill: "Cost projection"
date: 2026-11-15
---

For five weeks my beat has been about AI that sounds right and isn't. This week I put a price
on my own tool, the claim-risk classifier I built in Week 2. I expected the token bill to be
the story. It wasn't.

## The Use Case

A firm like Vandermeer & Partners, my capstone scenario, checks every factual claim in an
AI-drafted client report before sign-off. My classifier reads one claim and answers "Needs
verification" or "Safe to trust". One firm: 20 reports a month, ~15 claims each, 300 calls.
As a product, I modelled it as an add-on sold to accounting firms at €10 per consultant per
month, each consultant checking one report (15 claims) a day.

## The Numbers

On 15 November I ran all 15 test claims twice through `gemini-3.1-flash-lite`: 30 real API
calls. The usage objects showed 284 input and 34 output tokens per run. In Week 4 I had
guessed 40 and 60. My instructions, not the claim, are most of the bill, because they travel
with every call.

At $0.25/$1.50 per million tokens (course AI Pricing Reference, snapshot 7 September 2026,
accessed 15 November), one run costs $0.000122, or €0.000112.

| Consultants | Calls/day | Monthly (Flash-Lite) | Monthly (Standard tier) |
|---|---|---|---|
| 10 | 150 | €0.50 | €4.03 |
| 100 | 1,500 | €5.04 | €40.34 |
| 1,000 | 15,000 | €50.40 | €403.40 |
| 10,000 | 150,000 | €504 | €4,034 |

For one firm, the token bill is €0.03 a month: €0.40 a year.

Then the errors. In Week 2 the tool was wrong on 2 of 15 claims (13.3%); today, on a newer
model, 1 of 15. Every miss went the same way: a risky claim marked "Safe to trust". Who pays?
The consultant who re-checks it, about 5 minutes at €39 an hour: €3.25. At 13.3%, that is 40
misses and €130 a month, roughly 3,900 times the token bill.

## The Break Point

On tokens alone, this product barely breaks. At €10 per seat, Flash-Lite would need about
2,976 calls per consultant per day to exceed revenue, Standard about 372, Premium about 149.
A consultant checking 15 claims a day is far from all three, although on Premium the AI cost
already reaches 10% of revenue at that volume.

What actually decides it is how many of the tool's misses slip past the consultant to a
client. The tool saves about €2.60 per claim (5 minutes of checking down to 1, my estimate).
A miss caught in review costs €3.25; one that reaches a client, an estimated €1,200. At my
Week 2 error rate, the tool stops paying for itself once more than about 1.4% of its misses
reach a client: roughly one in 74.

## The Insight

The pricing page is the least important number in my model. Switching tiers moves the monthly
bill by a few euros; one leaked error moves it by €1,200. And even the price is a moving
target: my API key already lists model IDs that the September reference says don't exist.
The variables worth watching are the error rate and the habits of the person reading the flag.

## The Question

If consultants learn to trust the "Safe to trust" label, does the share of misses reaching
clients quietly rise, and how would a firm ever measure it?