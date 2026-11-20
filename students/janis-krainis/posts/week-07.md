---
week: 7
title: "The Model Should Be Replaceable. The Workflow Should Not Break."
author: "Janis Krainis"
beat: "AI and Communication Automation in European Freight Forwarding"
skill: "Lock-in detection"
date: 2026-11-20
---

# The Model Should Be Replaceable. The Workflow Should Not Break.

When I started building AI email triage for a European freight-forwarding desk, I treated the model as the main component. The prompt extracts origin, destination, weight and cargo type from incoming transport emails. But Week 7 changed how I look at the system: the model is replaceable; the workflow around it is where lock-in can quietly develop.

My current test set contains ten synthetic freight messages, each run twice. Across the twenty outputs, seventeen matched the expected result: 85% output-level success. The first run passed eight out of ten; the second passed nine. That headline hides two useful failures. In the Rotterdam–Antwerp example, one run returned “about two tons” while the other normalized the same quantity to “2,000 kg”. The amount was understandable, but the output contract was inconsistent. In the multi-leg Valencia–Madrid example, both runs captured Madrid as the current transit hub but lost the Valencia supplier context. One is a formatting and normalization problem; the other is a context-retention problem.

These failures matter more than whether a provider has the most impressive model name. If the model changes, the system still needs to return the same fields in the same units, preserve relevant route context, and avoid inventing missing information. My current prompt already tells the model to convert weights to kilograms and write “Not specified” when data is absent. The next step is to move those requirements out of prompt-only logic wherever possible: validate the output schema, normalize units with deterministic code, and send ambiguous records to a person instead of silently accepting them.

I would put a provider adapter between the workflow and the model. The adapter should accept a normal email and return a provider-neutral structure. The rest of the system should not care whether the extraction came from a hosted API or a local model. I would also keep original emails, normalized results, prompt versions, model identifiers, timestamps and review decisions in storage that the provider does not control. That makes a model change a configuration and evaluation task, not a rebuild of the whole operation.

There is also a measurement lesson. My existing build log records the outputs and failures, but it does not identify the exact model version and endpoint used for every run. That makes the baseline harder to reproduce and weakens any provider comparison. A proper benchmark must record the model, prompt version, settings, tokens, latency, cost and data path for each run. A low API bill is not proof that the architecture is cheap to leave.

For Drewes, my recommendation is therefore not “choose the best model and commit to it”. It is to buy or use model capability as a replaceable component, while owning the schema, validation rules, exception queue, audit log and connection to the operational systems. The practical goal is simple: if the provider raises its price, changes a model or becomes unsuitable, the forwarding team should be able to switch without redesigning how work moves through the desk.

**My Week 7 rule:** avoid making the model the system of record. Keep the workflow, data and business rules portable.
