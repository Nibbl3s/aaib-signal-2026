---
week: 8
title: "Costing Every Box: A Peer Screen Goes from a 0.9-Month to a 10-Month Payback"
author: "Tim Lampe"
beat: "AI in M&A Valuation"
skill: "Design defense"
date: 2026-11-17
---

# Costing Every Box: A Peer Screen Goes from a 0.9-Month to a 10-Month Payback

## Hook

In Week 4 I priced a peer-screening prompt at €1,152 saved a month and a payback of 0.9 months. This week I had to draw every box and put a cost on it, and the same idea now pays back in about 10 months and fails my pressure test. Nothing broke. I stopped leaving things out.

## The Company

Brabant Corporate Finance is the composite 10-person Brussels boutique from my Week 4 post. It runs four multiples valuations a month, and screening peers takes an analyst about 8 hours each (my estimate): €384 at €48 an hour, €18,432 a year. The stack is Microsoft 365 and a market-data subscription with Excel export. There are no developers. Budget: €15,000 for AI in year one, three months to go live, so it buys a contract developer's time.

## The Architecture

**Data.** The analyst pastes target and candidate descriptions from the data subscription into a SharePoint Excel sheet. The target is anonymised; the client name never leaves the firm.

**AI model.** Claude Sonnet 5.5 ($2 in, $10 out per million tokens) is the main model. On my 12 test cases it got 71 of 72 verdicts right (98.6%) in one chat run. Benchmarks, run twice: Groq `openai/gpt-oss-120b` 138 of 144 (95.8%), local Llama 3.2 3B 79.2%. One chat run is a small sample with no token counts, so the monthly re-test decides whether it stays; Groq is the spare, Llama an offline emergency tool.

**Integration.** One wrapper holds provider, URL, model ID and prompt in a config file, and every raw answer is saved with its tokens. Rules, not AI, decide the route: a candidate with no financials, a different currency or fewer than three usable peers goes straight to a person, and so does any "Not comparable" for a company in the target's sector.

**Interface.** Verdicts return to the Excel sheet. An analyst signs off every row before it enters the multiple; the model never writes into the valuation file.

**Governance.** A log of every call, a monthly 12-case re-test on two models, and a rule to switch at a retirement notice or above 10% wrong verdicts. If the API is down, analysts screen by hand, as today.

| Component | € |
|---|---:|
| One-off: integration build, 160 h × €48 | 7,680 |
| One-off: training and documentation, 28 h × €48 | 1,344 |
| One-off: contingency, 15% | 1,354 |
| Running, year 1: tokens, 4 valuations × 3 runs a month | 11 |
| Running, year 1: hosting and logging, €40 a month | 480 |
| Running, year 1: maintenance and re-test, 2 h a month | 1,152 |
| **Year-1 total (budget 15,000)** | **12,021** |

## The Defense

**Why not Microsoft 365 Copilot?** I have not tested it, which is my weakest point. I cannot pin its model, log tokens or re-run a fixed test set on it.

**What does it cost at scale?** Tokens are not the bill: about €1 a month, and about €10 at ten times the volume. Analyst time is.

**What if the provider changes its price?** I have not scored Anthropic's notice terms. My written question went to Groq, the spare, and was not answered, so I plan without any notice period. Tripling the token price adds about €22 a year; leaving costs about €519 in work (my Week 7 estimate, Google to Groq). I would stay.

**What risk am I not seeing?** Claude's one miss, Carl Zeiss SMT, is the same candidate Groq missed in both runs: Claude and Groq said "Not comparable" in all three runs where my key says Unclear. Zeiss SMT is private, so Claude's reason, no trading multiples, may be right and my key wrong. A person decides such cases. An undetected bad peer is the expensive error: the net benefit is about €254 per valuation, 0.006% of a €4M swing from a 1.0x multiple error (my Week 4 estimate). One such error erases it.

**What number decides the case?** Review time. Net benefit is €1,015 a month (€1,152 saved, €137 running cost), so payback is 10.2 months. To pay back inside 12 months, a review must take under 2.8 hours per valuation; I estimate 2. Halve the benefit and raise every cost by 50% and payback is 42 months. The case does not survive that.

## The Question

The 8 and 2 hours are my estimates, and the whole case turns on them: how long does an analyst really need to screen peers by hand, and to review a machine screen?

*AI disclosure: I ran the model calls myself; Claude helped research vendor terms, do the arithmetic and draft the text, and I checked the numbers. [Adjust to what is true for you.]*
