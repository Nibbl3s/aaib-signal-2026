---
week: 7
title: "The Model Should Be Replaceable. The Workflow Should Not Break."
author: "Janis Krainis"
beat: "AI and Communication Automation in European Freight Forwarding"
skill: "Lock-in detection"
date: 2026-11-20
---

# The Model Should Be Replaceable. The Workflow Should Not Break.

A freight-forwarding team can adopt an AI model in a day and accidentally make it expensive to replace for years. The risk is not only the model price; it is where the operational rules, data and integrations live.

My use case is the email-triage workflow I am prototyping for freight-forwarding operations connected to my upcoming Drewes internship. It extracts origin, destination, weight and cargo type from transport requests. My ten synthetic test messages have been run twice: 17 of 20 outputs matched the expected result (85%), but only eight cases passed both runs. One conversational weight appeared as “about two tons” in one run and “2,000 kg” in the other. Another message described a Valencia supplier and a later Madrid transit hub; the model captured Madrid but omitted the supplier context.

I would not build a foundation model for this. The five-question framework points to **buying the model capability**: extraction is not the forwarding company's competitive moat (Q1 = no), and suitable off-the-shelf APIs exist (Q2 = yes, so the framework stops here). Connecting multiple AI capabilities is unnecessary for this single task, and there is no evidence of an internal engineering team that should maintain a model stack. However, I would put a provider-neutral adapter around the API and keep the schema, validation rules, exception queue and operational records under the company's control. Buy the model; own the workflow.

My prototype's lock-in score is **6/15** (0 = low, 3 = high; 5–8 is moderate):

| Dimension | Score | Evidence |
|---|---:|---|
| Data portability | 1 | Prompt, synthetic inputs and logs are in Markdown in my repository; the request still leaves the laptop, and provider retention is undocumented. |
| API stability | 2 | The Build log does not identify one model ID, API version or endpoint for all runs. |
| Pricing control | 2 | Week 6 contains a pricing reference, not a contract or price guarantee; the actual provider for every run is not recorded. |
| Feature dependency | 1 | The build uses a plain text prompt and four text fields, not proprietary fine-tuning, embeddings or workflow tools. |
| Migration cost | 0 | Prompt and test files are portable and there is no trained model or proprietary database to migrate; endpoint replacement should take under a month and cost below €20,000. |

The main gap is API/provider evidence, not the prompt itself. Week 6 mentions one initial Gemini Flash call, but the later cost projection uses a different course pricing reference. I therefore cannot claim to have audited one provider's terms for every run.

If the provider's price tripled tomorrow, I would preserve the prompt and tests, switch the endpoint through an adapter, and rerun the same ten messages twice on a local model. My planning estimate is 12–24 hours for adapter work, regression testing and review. That is not a measured migration, and the accuracy impact is still unknown because the local benchmark has not been run.

Over the next 90 days, I would record exact model metadata, test a local model on the same inputs, validate weights deterministically, and send ambiguous records to a person. In freight forwarding, the model should never become the system of record. Own the business rules that determine whether a shipment email is safe to process; rent the text-generation capability only while it earns its place.
