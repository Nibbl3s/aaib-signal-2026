---
week: 6
title: "What an AI Peer Screen Costs at 10,000 Analysts, and What Breaks It"
author: "Tim Lampe"
beat: "AI in M&A Valuation"
skill: "Cost projection"
date: 2026-10-19
---

# What an AI Peer Screen Costs at 10,000 Analysts, and What Breaks It

## Hook

One AI peer screen costs under two cents. That sounds like a rounding error until a valuation platform has 10,000 analysts and a "screen my whole pipeline" button. In this beat the question is not what one call costs, but which number moves when users change how they use it.

## The Use Case

I modeled an AI peer screen inside a valuation platform for advisory boutiques, the same job as my Comp Screen prompt. An analyst enters a target company; the model checks 20 candidates and returns Comparable, Not comparable or Unclear with a one-line reason. I assume 6 screens per analyst per day on 22 working days (132 calls a month) and a seat price of €150 a month. That price is my assumption, because Valutico publishes none.

## The Numbers

Estimated tokens per call: about 2,850 in and 1,000 out (20 verdicts at 50 each). My own Build call (6 candidates, Gemini 3.8 Flash) used 258 tokens in and 121 visible out, plus 3,663 hidden reasoning tokens billed as output: more than 20 times the cost the visible tokens suggest. I therefore model a no-reasoning setting and show the risk below. Model: Standard tier, $2.00 input and $12.00 output per 1M tokens (AI Pricing Reference, snapshot 7 September 2026), at $1 = €0.92.

Unit cost: $0.0057 input + $0.0120 output = $0.0177 per call.

| Users | Screens/day | Monthly cost | Annual cost | Share of revenue |
|---|---|---|---|---|
| 100 | 600 | €215 | €2,579 | 1.4% |
| 1,000 | 6,000 | €2,149 | €25,794 | 1.4% |
| 10,000 | 60,000 | €21,495 | €257,939 | 1.4% |

At 10,000 users Budget costs €2,149 a month, Premium €53,737.

## The Break Point

At 6 screens a day, token cost is 1.4% of revenue at any user count. What moves it is screens per analyst. On Standard, cost reaches 10% of a €150 seat at 42 screens a day and exceeds it at 419 (Premium: 17 and 167).

A bulk mode that screens 200 candidates per call needs about 20,850 tokens in and 10,000 out: $0.16 a call. At the same 6 screens a day that is €19.64 per analyst, 13% of the seat price, already past the warning line, and the break arrives at about 46 screens a day.

The assumption it rests on is 20 candidates and one call per screen. Errors sit outside this table. In my Build test one of six verdicts (17%) differed from my answer key, on a single case, so it is my weakest number. At that rate a screen still saves about €30 against 40 minutes by hand (assuming 30 minutes of rework, €60/hour).

## The Insight

I expected the model to be the expensive part. It is not: 1.4% of revenue at 20 candidates, at any user count. The expensive decisions are product choices: how many candidates one call carries, and whether the model reasons in hidden tokens. At the 3,663 hidden tokens I measured, the 10,000-user bill rises from €21,495 to about €74,875 a month. A builder here should cap candidates per call, keep reasons to one line (output is two thirds of the bill), and use Budget for obvious non-comps.

## The Question

When a platform adds a "screen the whole pipeline" button, does anyone re-run the cost model before launch, or does finance find out from the invoice?

*AI disclosure: the cost model was calculated and the text drafted with Claude Sonnet 5.5 from my use case and assumptions; I checked the arithmetic and the price source. [Adjust to what is true for you.]*
