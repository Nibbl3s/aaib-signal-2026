---
week: 6
title: "The API Bill Is Not the Cost of Trusting a Game-Production Classifier"
author: "Daniel Stefirta"
beat: "AI in Game Production"
skill: "Cost projection"
date: 2026-10-30
---

# The API Bill Is Not the Cost of Trusting a Game-Production Classifier

A game-production classifier can be almost free to call and expensive to trust. The financial question is not just how many tasks it labels, but who corrects its judgements.

My Strand Classifier labels short production tasks by layer and AI exposure, quoting supporting evidence. A producer could use it to screen a backlog before deciding where human sign-off belongs. I model ten tasks per paid user per day, each screened once, using 30-day months and 12-month years. These are planning assumptions, not observed studio usage.

## The numbers

Runable operated one API call and conducted the research for me on 30 October 2026. The existing prompt v1 and Claude Haiku 4.5 used **515 input and 35 output tokens**. This is one short task, not a production average.

Anthropic's model-specific prices, accessed that day, were **$1/million input tokens and $5/million output tokens**.[^1] The ECB snapshot showed **€1 = $1.1130 for 29 October**.[^2]

```text
Cost/call = [(515 × $1 + 35 × $5) / 1,000,000] / 1.1130
          = €0.000619946
Monthly calls = users × 10 × 30
```

| Paid users | Calls/month | Token cost/month | Token cost/year |
|---:|---:|---:|---:|
| 10 | 3,000 | €1.86 | €22.32 |
| 100 | 30,000 | €18.60 | €223.18 |
| 1,000 | 300,000 | €185.98 | €2,231.81 |
| 10,000 | 3,000,000 | €1,859.84 | €22,318.06 |

Annual figures use 360 modeled days. These are public-rate budgets, not invoices. Hosting, setup and maintenance remain unmeasured.

## The break point

At a hypothetical **€15/user/month subscription**, tokens consume **1.24% of revenue** at every scale above. Users cancel from the cost/revenue ratio. The token-only 10% warning arrives at **80.65 calls/user/day**; cost equals revenue at **806.52**. More subscribers alone do not break this model.

Human correction changes it. My retained evaluation recorded **16 disagreements across 30 scored runs covering 15 unique inputs**, or **53.33%**. Repeated passes and a judgement-based answer key mean this is not a validated production failure probability.

As a stress scenario, suppose each disagreement needs **two minutes at an assumed €50/hour**. Expected correction cost becomes `16/30 × 2/60 × €50 = €0.888889/call`. At 300 monthly calls per seat, corrections plus tokens cost **€266.85**, already above the €15 benchmark. Cost equals revenue at just **0.562 calls/user/day**. Correction time and labour rate are assumptions, not measurements.

If the supplier includes corrections, it pays that labour. If customers correct labels themselves, the studio pays through producer time. Repeating the same deterministic prompt is not a demonstrated fix, and reviewing otherwise correct outputs adds further work.

## The insight

The surprising gap is between token affordability and service affordability. A low API bill supports experimentation, not autonomous deployment or proven savings. Without observed review times and a human-only baseline, I cannot claim this tool saves money. Its defensible boundary is task screening with explicit human sign-off.

Who owns correction effort when an AI-exposure label becomes a production decision?

[^1]: [Anthropic: Haiku 4.5](https://platform.claude.com/docs/en/models/haiku-4-5/overview), accessed 30 October 2026.
[^2]: [ECB: USD reference rate](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html), accessed 30 October 2026.