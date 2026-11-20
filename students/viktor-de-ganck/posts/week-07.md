---
week: 7
title: "Switching Models Costs Me One Hour and €1. It Also Costs 53 Points of Accuracy."
author: "Viktor De Ganck"
beat: "AI as a retail investor's research desk"
skill: "Lock-in detection"
date: 2026-11-21
---
A pricing page shows you the part of lock-in that is easy to read. The part that traps you is the accuracy you only see when you try to leave. I tried to leave.

## The use case

Graslei Wealth is my composite Ghent wealth manager from Week 4: 8 advisors who read the FT, ECB, Fed, X and VEB every morning. My Build prompt labels each news item with an event type, the assets it affects, and fact or opinion. Only advisors see the output. I assume 40 items a day, or 880 calls a month, and an €8,000 integration (both est.). It runs on Claude Sonnet 5.5 through the Anthropic API.

## The decision

1. Competitive advantage? **No.** The prompt is plain text, so a competitor could copy it, and clients never see the output (my assumption).
2. Commoditized, with good off-the-shelf options? **No.** RavenPack, LSEG MarketPsych and Bloomberg's AI summaries sell news analytics, but none describes a fact-versus-opinion label, none confirms Dutch, and none publishes prices.
3. Several capabilities no vendor offers? **No.** One capability.
4. Needs change within 12 months? **No.**
5. Engineering capacity? **No.** Eight advisors, no engineers (assumption).

Question 5 sends Graslei to **Buy**. What it buys is an API and a thin integration, because Question 2 found no finished product.

## The lock-in scorecard

| Dimension | Score | Evidence (Anthropic terms, read 16 Nov 2026) |
|---|---|---|
| Data portability | 1 | No export documented. My prompt, test set and outputs are my own files |
| API stability | 1 | Retirement needs at least 60 days' notice. Sonnet 4.5 got 61 |
| Pricing control | 2 | Rates can change 30 days after posting (Commercial Terms H.1). No lock, no price history |
| Feature dependency | 1 | The same plain-text prompt ran unchanged on a second model |
| Migration cost | 1 | €8,000 integration estimate. No exit plan yet |
| **Total** | **6/15** | Moderate |

Pricing control is the weak spot: 30 days is half of the 60 that would score a 1.

## The migration path

I ran the same prompt on llama3.2 (3B), on my own laptop. Switching took under 1 hour of my work. A tripled price would add about €1 a month at 880 calls. Accuracy fell from 9 of 15 items fully right (60%) to 1 of 15 (7%).

The two failed differently. Claude missed boundary cases: asset lists on 4 items, event type on 3. Llama failed the basics: blank or off-list event labels in 6 of 30 answers, asset "none" in 11 of 30, opinion called fact in 8 of 12.

Next 90 days:
- **Week 1:** keep my own copy of the prompt, test set and graded results, plus a one-page switch runbook.
- **Month 1:** write prompt v2 and test it on new items, on both models. Keep Llama installed as a fallback.
- **Quarter 1:** re-tune for the fallback and re-run both models.

## The insight

In news triage, the price is not the trap. Leaving costs hours and euros. What it costs in accuracy, no pricing page tells you. Only my own graded test set did. The asset to protect is not the contract. It is the 15 items I can grade a new model against.

**My question:** if you switched models tomorrow, would you know within an hour what you lost?

*Measured: 15 items, run twice, same prompt and strict grading for both models. Claude's first run is rebuilt from my Week 4 results table. Vendor statements come from public pages read on 16 November 2026. Graslei Wealth and (est.) figures are my assumptions. Post drafted with Claude from my own run data; case, scores and verdict are mine.*
