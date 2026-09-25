---
week: 1
title: "The Cheapest Part of Making a Game Is the Part AI Can Already Do"
author: "Daniel Stefirta"
beat: "AI in Game Production"
skill: "Cost literacy"
date: 2026-09-25
---

## Hook

Death Stranding has a photoreal digital actor with a famous performer's face, hundreds of minutes of recorded voice, a traversal system nobody had ever coded before, and an enormous hand-built world. It's the perfect test case for the claim being sold to every studio right now: *AI can make your game.* So I built a tool to score it. This week I fed a Death Stranding-scale production into my own feasibility analyzer, across all five production layers — voice, digital actors, narrative, code, and world art. It came back at **33/100: human required.**

## The Numbers

What made that score interesting wasn't the total — it was the shape of it. Per layer, AI-pipeline cost vs. traditional cost:

- **Voice acting:** €130 vs. €136,800 for 720 voiced minutes — a 99.9% saving. Feasibility score: 48.
- **Narrative & dialogue:** €680 vs. €242,000 for 22,000 lines — 99.7% saving. Score: 48.
- **Digital actors:** €7,650 vs. €288,000 for 9 characters — 97.3% saving. Score: 35.
- **Code & gameplay systems:** €8.8M vs. €10.4M — a 15% saving. Score: **29**.
- **World & art assets:** €29,000 vs. €2.3M. Score: **19** — the lowest of all.

Total: €8.85M with AI against €13.3M traditional. A 33.7% saving that sounds like a business case until you notice where it comes from.

## The Insight

Read those two columns together and the pattern is brutal: **the layers where AI saves the most money are the layers that cost the least to begin with.** Voice and dialogue collapse by 99% — and they were a rounding error against an eight-figure budget. The layers that actually consume the budget, code and world-building, barely move: 15% and a feasibility score of 29 and 19, because a novel physics system and a coherent art direction are the two things a model averaging its training data is worst at.

AI didn't reduce the cost of making Death Stranding. It reduced the cost of the parts that were never the hard part. And every euro it "saved" came with a bill that has no pricing page: a voice director to catch uncanny takes, an animator fixing eyelines, a narrative lead writing the spine the AI fills in around, an engineer who can debug what they didn't write, an art director stopping generated assets from turning into sludge. My tool prints that line under every layer on purpose, because it's the number the vendor slide always omits.

## The Question

If AI can already handle the cheap 1% of a game's budget and barely touches the expensive 99%, then "AI will make games" isn't a cost argument at all — so what is actually being sold, and to whom?

---

*Assumptions: the Death Stranding-scale figures are my own model of an AAA production of that shape (9 hero characters, 22,000 dialogue lines, 720 voiced minutes, open world, photoreal), not internal numbers from Kojima Productions. Traditional-cost rates are industry-published ranges; the AI-pipeline rates are current vendor list prices. Currency converted at $1.00 = €0.92.*

*Tool built this week: the Strand Feasibility Analyzer — five-layer scoring, transparent rule-based math, saved analyses.*

*AI disclosure: token counts were produced with the `tiktoken` library (`cl100k_base`) rather than estimated, and the cost arithmetic was run in code to avoid errors. An AI coding tool was used for the mechanics of building the analyzer and publishing this post. The beat, the tool's design, the scoring assumptions and the analysis are my own.*
