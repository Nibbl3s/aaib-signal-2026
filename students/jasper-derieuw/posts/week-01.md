---
week: 1
title: "AI Sanctions Screening Costs €166 a Year: The Number That Decides Everything Isn't on Any Pricing Page"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cost literacy"
date: 2026-09-25
---

Every EU company buying from China has to screen its counterparties against sanctions and denied party lists. It isn't optional, and getting it wrong is a criminal liability problem, not a rounding error. AI vendors now sell automated screening, and the token price looks almost free. I priced it out for a mid sized Belgian importer. The token bill is real, and it is also the least important number in the whole calculation.

## The numbers

Take a Belgian importer running around 150 shipments a month from China. Each shipment has parties to screen: supplier, manufacturer, beneficial owners, freight forwarder, consignee. Call it 8 per shipment, which gives 1,200 screens. Add a monthly re screen of roughly 300 standing counterparties against updated lists. That comes to 1,500 screening checks a month.

Each check feeds a model the counterparty record (name, aliases, romanisation variants, address, registration number, beneficial owners) plus retrieved candidate list matches and adverse media snippets. Call it 2,500 input tokens, and 500 output tokens for a structured risk assessment with reasoning.

```
Model: Claude Sonnet 5 · $2.00 per 1M input · $10.00 per 1M output
Input:  1,500 × 2,500 = 3.75M tokens → 3.75 × $2.00  = $7.50
Output: 1,500 ×   500 = 0.75M tokens → 0.75 × $10.00 = $7.50
Token cost: $15 / month → €13.80 / month → about €166 / year  ($1 = €0.92)
```

€166 a year. You could run this screening at ten times the volume and still not clear €1,700. But token cost isn't the decision. Assume a true hit base rate of **0.2%**, which is 3 genuinely concerning parties a month, and a model recall of **95%**, so it misses 1 in 20. That is about 1.8 missed hits a year. Cost of a single missed hit, meaning a sanctions or export control breach, I assume at **€250,000** all in: fine, legal, remediation, disruption.

Per year:

* Tokens: €166
* Missed hit cost: about €450,000
* False positive review: about €9,400

That €250,000 per miss is the weakest number in this post, and it is the one that decides everything. At €50,000 the case looks relaxed. At €1M it is an emergency. Before I trusted this I would calibrate it against real EU enforcement figures, not a guess.

## The insight

The token line is €166, around 0.03% of the total, and it is the only figure with a pricing page behind it. Everything that actually decides the investment lives off that page. And screening has a twist that inventory doesn't: the two errors aren't the same size. A false positive costs €13 of analyst time. A false negative costs a quarter of a million and possibly a director's criminal referral. Any vendor who quotes a single accuracy percentage is averaging those two together, hiding the only asymmetry that matters. The China angle sharpens it further: the misses cluster exactly where a naive string match fails, on transliteration variants (张伟 becomes Zhang Wei, or Chang Wei, or Cheung Wai). That is where a language aware model earns its keep, or quietly doesn't. Cost literacy here isn't reading the token price. It is knowing that the vendor priced the cheap error and stayed silent on the expensive one.

## What I want to learn next

> At what missed hit rate does language aware AI screening stop being cheaper than simply paying a second analyst to review every China transaction by hand?

*One figure I want before Week 2: the real all in cost of a single EU sanctions breach for an SME. If anyone has a number from an enforcement case, bring it to class, because it is the figure my whole calculation turns on.*
