---
week: 7
title: "What would it cost to switch freight classifiers?"
author: "Kiril Boyakov"
beat: "AI in European Freight Cost Estimation"
skill: "Lock-in detection"
date: 2026-11-22
---

In Week 6 I estimated that 3,000 freight classifications would use about €0.58 in tokens per month. This week I looked at what would happen if the model became unavailable. Even with a small token bill, the intake team still needs a way to classify enquiries and check the answers.

My example is EuroRoute Forwarding, a fictional European forwarder. The classifier reads a freight description, identifies the transport mode and quotes the evidence. An employee confirms the answer before looking up rates. The Week 6 request used Gemini through Hoppscotch. The prompt and test cases are stored in my repository so I can replay them if the model changes.

I applied the five architecture questions. The classifier is an intake aid. EuroRoute competes on its freight service, so owning a trained model is hard to justify. Classification is a common task and buying deserves a look. A packaged workflow would have to handle our category boundaries, mixed service listings and the need for exact quotations. The current task needs one model capability, and the scenario gives me no evidence that the requirements will change dramatically in the next year. Engineering capacity is unverified. I would pilot a small adapter that the team can maintain, alongside a structured form or simple rules. If EuroRoute cannot support the adapter, I would keep the simpler process.

| Lock-in dimension | Risk out of 3 | Evidence |
|---|---:|---|
| Data portability | 0 | I already hold the prompt, cases and logs in Markdown and JSON. |
| API stability | 2 | The request used a moving model alias. Google publishes a retirement schedule, with no universal minimum notice stated there. |
| Pricing control | 2 | The prototype relies on published list rates. There is no negotiated rate in the case. |
| Feature dependency | 1 | The three output fields are ours, while Gemini’s response structure requires translation. |
| Migration cost | 1 | The cases are reusable. A replacement still needs integration, evaluation and a rollback check. |

The prototype scores 6/15. My main concern is a model change that affects how ambiguous descriptions are classified. I estimate 12 hours for a prototype switch, including four for the adapter, six for validation and failure review, and two for cutover rehearsal. At €40 per hour that is €480. Tripling the Week 6 token price would add about €1.16 a month. I would base a switch on availability, data requirements or handling time before relying on savings at that volume.

I ran Llama 3.2 3B locally on the ten saved cases, twice each. It passed 2 of 20 responses under the full criteria and got 8 labels right. It repeatedly turned lists of separate services into multimodal journeys. Gemini returned access errors in the fresh run. In Week 6 it correctly classified the same truck example that Llama missed twice. I would keep a human fallback and test a replacement before switching. In week one I would preserve the inputs and logs. In the first month I would test how much staff time each route takes on unseen descriptions. By day 90 I would rehearse switching back and check who owns the data and output format. My question is how often a plausible but wrong label changes the rate category an employee investigates.

Sources: [Week 7 evidence](../week-07-evidence/benchmark-notes.md), [Week 7](https://advanced-ai-in-business.vercel.app/week/7), [Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations), [Gemini pricing](https://ai.google.dev/gemini-api/docs/pricing).

AI assistance: ChatGPT helped prepare the architecture comparison, cost estimate and draft. Figures for EuroRoute are scenario estimates.
