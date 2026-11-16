---
week: 4
title: "My Classifier Costs Almost Nothing to Run. Using It Still Loses Money."
author: "Daniel Stefirta"
beat: "AI in Game Production"
skill: "Value quantification"
date: 2026-10-16
---

My Classifier’s scored test cost €0.0194 for 30 calls. That sounds like the beginning of an easy business case: almost free AI helping a producer organise game-development tasks. Once I priced the human work around those calls, the result became a first-year loss of €834.11.

### The candidate

The candidate is human-reviewed production-task assessment at Kojima Productions. Its public job postings contain tasks such as “Implementing character control” and “Adjusting various parameters.” My Classifier returns a production layer, an AI-exposure judgement and a supporting quote. It sits in production planning, not in generating or approving game content.

The postings establish that these tasks exist. They do not establish that Kojima needs this workflow, how often staff assess tasks, or what assessment costs. My numbers describe an illustrative evaluation scenario, not the studio’s internal operations.

### The numbers

I assume 100 task lines per month, or 1,200 annually. Manual assessment takes 3 minutes. Every AI output takes 30 seconds to review, and a failed assessment takes another 4 minutes to correct. Labour costs an assumed €50 per hour, loaded with employer costs and overhead rather than salary alone. Setup and annual maintenance each require 12 hours.

These assumptions need timing and workload evidence before a purchase decision. They are visible so a reader can replace them, rather than accept a saving built from hidden guesses.

My measured evidence is narrower: the Classifier matched my expected labels, with evidence validity checked, on 7 of 15 unique inputs, or 46.7%. Each input ran twice with identical outputs. That gives 14 successful calls out of 30, not 30 independent examples or validated production accuracy.

Applying that rate to the scenario gives 560 successful assessments and 640 failures annually.

| Benefit category | Formula | Annual value |
|---|---|---:|
| Time saved on successful outputs | 560 × (3 − 0.5) minutes ÷ 60 × €50 | €1,166.67 |
| Revenue increase | 0 evidenced additional sales | €0 credited |
| Direct cost reduction | €0 evidenced eliminated expenditure | €0 credited |
| Risk mitigation | No measured probability or impact reduction | €0 credited |
| **Gross benefit** | Sum of categories | **€1,166.67** |

Zero credited does not mean no benefit is possible. It means I have no evidence to price it. The time value is freed capacity, not money banked: staff would need to use it for other work or avoid additional paid hours.

Failures reverse part of that benefit. Reviewing and correcting a failed output takes 4.5 minutes, against 3 minutes manually. The incremental penalty is 640 × 1.5 minutes ÷ 60 × €50 = **€800**. This assumes every error is detected; unnoticed planning errors could cost more.

API usage is 1,200 × (€0.0194 ÷ 30) = **€0.78**. Setup is 12 × €50 = **€600**, and maintenance is another **€600**. Therefore:

**Net first-year value = €1,166.67 − €800 − €0.78 − €600 − €600 = −€834.11.**

The cross-check reaches the same answer. Manual assessment costs €3,000 annually. AI-assisted assessment costs €500 in review, €2,133.33 in corrections and €1,200.78 in API, setup and maintenance: €3,834.11 altogether.

### The pressure test

If volume is 50% lower, the first-year loss becomes €1,017.05 because setup and maintenance remain fixed. If correction takes 50% longer, 6 minutes instead of 4, the loss becomes €1,900.78. Neither scenario rescues the case.

Holding everything else constant, first-year break-even requires approximately 67.5% success. That threshold is a model output, not a promise that better prompting will achieve it. Even after removing setup, the current scenario loses €234.11 annually, so there is no positive payback.

### The insight

My verdict is **do not deploy the current Classifier as a cost-saving workflow**. Keep manual assessment and restrict the tool to evaluation until independently labelled tasks and timed reviews establish a positive case.

The lesson for game production is that cheap generation does not make an entire workflow cheap. My API bill is almost irrelevant beside correction and maintenance. The purchasing question is not “Can AI produce a label?” It is “Can a producer check and use that label for less effort than assessing the task directly?” At my measured rate and stated assumptions, the answer is no.

*Sources: [Kojima Productions’ Game Designer posting](https://www.kojimaproductions.jp/en/game-designer) and my [Classifier run log](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/daniel-stefirta/build/log.md).*

*AI disclosure: an AI assistant helped draft and check the arithmetic. No Kojima staff interviews or workflow timing studies were conducted.*
