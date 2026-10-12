---
week: 4
title: "My AI News Sorter Saves 31,680 Euro and Costs 31,359. Here Is the Number That Decides It."
author: "Viktor De Ganck"
beat: "AI as a retail investor's research desk"
skill: "Value quantification"
date: 2026-10-12
---
In Week 2 I tested an AI that sorts financial news. It was fully right on 9 of 15 items. This week I had to ask what a manager would ask next: is that worth paying for? The answer turns on one number, and I have measured it only once.

## The candidate

A private investor has no payroll to save, so I priced the same tool for a small advisory firm: a composite I call Scheldt Advisory Partners, 5 analysts in Ghent. The AI takes one news item and returns its event type, asset class and whether it is fact or opinion, plus a short summary. In the value chain it sits in data and analytics, a support activity that feeds the main activity, advice to clients. It passes my five filters: it happens daily, it is pattern-based, an analyst can check the output before it matters, reading is expensive (12 items a day at 7.5 minutes each is 5 × 1.5 × 220 × €48 = €79,200 a year of capacity), and I can verify it, because I did.

## The numbers

| Category | Annual value (€) | Formula |
|---|---|---|
| Time saved | 31,680 | 1.0 hr/day (est.) × 220 days × 5 analysts × €48 = 52,800, × 0.60 measured accuracy |
| Revenue increase | 0 | No measured link to client revenue |
| Cost reduction | 0 | 1,100 hours is 0.69 of one hire, so no hire is avoided |
| Risk mitigation | 0 | The tool adds error risk, so it appears below as a cost |
| **Gross benefit** | **31,680** | |
| AI cost, Year 1 | 26,079 | tokens 79 + implementation 12,000 + integration 5,000 + maintenance 3,000 + data licence 6,000 (est.) |
| Failure cost | 5,280 (est.) | 5,500 items × 40% wrong × 5% uncaught × 10% reach a client × €480 rework |
| **Net benefit, Year 1** | **321** | 31,680 − 26,079 − 5,280 |
| Net benefit, Year 2+ | 17,321 | 31,680 − 9,079 − 5,280 |
| **Payback** | **11.8 months** | 17,000 one-time ÷ (17,321 ÷ 12) |

Two things in this table surprised me. The AI itself is almost free: tokens cost about €79 a year (25 items a day × 360 days, at $2 per million tokens in and $12 out). The failures cost 67 times more than the tokens. And the freed hours are capacity, not cash: they become money only if analysts spend them on paid client work, so I did not count any revenue. I also kept the 87% from an earlier test on clean articles out of the base case: that was a different task, so it is an upside, not the measurement.

## The pressure test

Does the case survive if my estimates are 50% off? No. If the saving is 0.5 hours a day instead of 1.0, gross benefit drops to €15,840, Year 1 net to −€15,519, and payback stretches to about 138 months.

The accuracy is the bigger problem. The break-even accuracy for Year 1 is 59.5%, and I measured 60%. With only 15 items, the 95% interval runs from 36% to 80%. At 36% Year 1 net is −€15,519; at 80% it is +€13,521 with payback in 6.7 months. The same tool is a loss or a clear win depending on a number I cannot yet pin down, which makes the pilot the cheapest way to buy information. Many of the other inputs (hours saved, licence, failure rates) are still my own estimates too.

## The insight

The investment is not the tool. It is the measurement. My recommendation is a pilot: 2 analysts, 8 weeks, at least 100 items, about €960 of analyst time (2 × 10 hours × €48). The full €17,000 is released only if at least 80% of items are fully correct, no wrong label reaches a client and at least 0.7 hours a day are saved. If accuracy stays below 60% after one prompt change, it is a no-go.

The FOMO version of this story is "AI saves one hour a day". That sentence is worthless without an accuracy rate behind it. My worst failure in Week 2 was an opinion post full of percentages labelled as an official rate decision, and that kind of error is exactly what sits inside the €5,280.

## The question

If an AI saves you an hour a day but is right six times out of ten, who pays for the other four?

*Numbers, formulas and conclusions are mine; the post was structured and edited with Claude from my notes. Accuracy figures come from my own Build log (Run 1, 15 items, run twice).*
