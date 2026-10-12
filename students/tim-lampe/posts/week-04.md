---
week: 4
title: "AI in M&A Valuation: What a Peer Screen Is Worth in Euros"
author: Tim Lampe
beat: AI in M&A Valuation
skill: Value quantification
date: 2026-10-07
---

# AI in M&A Valuation: What a Peer Screen Is Worth in Euros

## Hook

In M&A valuation, choosing the peer group takes an analyst a few hours and can move the price by millions. That makes it an easy place to claim AI savings and a hard place to prove them. This post puts numbers on one case.

## The Candidate

The process is peer-group screening: deciding which listed companies are comparable to a target before multiples are applied. The setting is Brabant Corporate Finance, a composite 10-person Brussels boutique that runs four multiples valuations a month. In the value chain the process sits in the analysis step, after company and market data are collected and before multiples are applied and the client report is written. An error here passes into every later step. The AI candidate is a screening prompt that labels each candidate Comparable, Not comparable or Unclear against five criteria. An analyst reviews the output.

## The Numbers

All inputs are my estimates, not measurements. The rate of €48/h is the loaded data-analyst cost from the course.

| Category | Formula | € / month |
|---|---|---|
| Time saved | (8 h manual − 2 h review) × 4 valuations × €48 | 1,152 |
| Revenue increase | none claimed | 0 |
| Cost reduction | no headcount change | 0 |
| Risk mitigation | not quantified (see Insight) | 0 |
| **Gross benefit** | | **1,152** |

| Cost | Formula | € |
|---|---|---|
| Tokens | (16,500 in × $2.00 + 5,000 out × $12.00) / 1M = $0.093 per run; × 0.92 = €0.086; × 3 runs × 4 valuations | ≈ 1 / month |
| Maintenance | 2 h re-testing and updates × €48 | 96 / month |
| Implementation | 20 h build and testing × €48 | 960 one-off |

Net monthly benefit: 1,152 − 1 − 96 = **€1,055**.
Payback: 960 / 1,055 = **0.9 months**.

Not included: a paid data source. The model finds candidate data itself, so the 2 review hours must include checking it.

## The Pressure Test

Assume benefits are 50% lower and costs 50% higher. Time saved falls to 3 h per valuation (€576/month). Implementation rises to €1,440, maintenance to €144, tokens to €1.5.

- Net: 576 − 1.5 − 144 = €430.5 per month. Payback: 1,440 / 430.5 = **3.3 months**. The case holds.
- Harsher: volume also halves to 2 valuations a month. Benefit €288, net €142.5, payback **10.1 months**. The case holds, but only just.
- Break-even: with costs 50% higher, monthly costs are €145.5, so the screen must save at least 145.5 / 48 = **3 analyst-hours a month**. The base case saves 24.

## The Insight

The time saving is real but small: about €1,100 a month. The risk is not small. On a target with €4M EBITDA, a peer set that is off by 1.0x on the multiple moves enterprise value by €4M (my estimate). The net benefit per valuation is €264, which is 0.007% of that. If the AI adds even a 0.007% chance per valuation of an undetected 1.0x error, the whole benefit is gone. For this beat the takeaway is to price valuation AI by what it does to the error rate, not by the hours it saves. The case holds only with a human check on every peer set, and the same test applies to vendor claims like "half the time".

*AI disclosure: structure and arithmetic checked with Claude Sonnet 5.5; all inputs are my own estimates and unverified.*
