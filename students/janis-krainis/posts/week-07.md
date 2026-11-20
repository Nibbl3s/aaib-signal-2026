---
week: 7
title: "The Model Should Be Replaceable. The Workflow Should Not Break."
author: "Janis Krainis"
beat: "AI and Communication Automation in European Freight Forwarding"
skill: "Lock-in detection"
date: 2026-11-20
---

# The Model Should Be Replaceable. The Workflow Should Not Break.

A freight-forwarding team can adopt an AI model in a day and accidentally make it expensive to replace for years. The risk is not just the model price; it is where the operational rules, data and integrations end up living.

For my beat, I am looking at the email-triage workflow I am prototyping for freight-forwarding operations connected to my upcoming Drewes internship. The prototype reads a transport email and extracts four fields: origin, destination, weight and cargo type. Today, the test set contains ten synthetic messages, each run twice. Seventeen of the twenty outputs matched the expected result: an 85% output-level pass rate. Only eight of the ten cases passed in both runs. In one case, “about two tons” became “2,000 kg” in one run but stayed conversational in the other. In another, the model captured Madrid as the current transit hub but omitted the Valencia supplier context.

I would not build a new foundation model for this. The extraction capability is increasingly commoditized, so my first answer is **buy the model capability** through an API. But I would connect it through a provider-neutral adapter and keep the workflow, schema, validation rules and operational records under the forwarding team's control. The five-question test leads there: this is not the team's competitive moat; suitable model APIs exist; the business needs a reliable connection to the email inbox and transport system rather than a complete AI suite; provider choice may change; and the project does not yet have evidence of an engineering team that should maintain a model stack from scratch. Buy the commodity capability, own the integration and business logic.

My prototype's lock-in score is **6/15** (0 = low, 3 = high):

| Dimension | Score | Evidence |
|---|---:|---|
| Data portability | 1 | The prompt, synthetic inputs and outputs are stored in ordinary Markdown in my repository; the cloud request itself still leaves the laptop, and provider-side retention is not recorded. |
| API stability | 2 | The Build log does not record a model ID, API version or endpoint for every run, so I cannot prove a stable interface or deprecation window. |
| Pricing control | 2 | Week 6 uses a pricing reference rather than a contract or quote; a provider can change list prices. |
| Feature dependency | 1 | The system uses a plain text prompt and four text fields, not provider-specific fine-tuning, embeddings or workflow tools. |
| Migration cost | 0 | The prompt, test set and run log are portable files. The workflow has no trained model, embedding store or proprietary orchestration to migrate; switching should take less than a month and cost below €20,000. The performance impact is not yet measured. |

The highest risk is API and provider uncertainty: my own documentation is not good enough to reproduce the cloud baseline. The score is a provisional assessment of my prototype, not a claim that I have audited a specific signed vendor contract. Week 6 records one initial Gemini Flash call, but the later cost projection references a separate course pricing model, so I cannot attribute every test run to one provider.

If the provider's price tripled tomorrow, I would first preserve the current prompt and test set, route requests through a thin adapter, then run the same ten messages twice against a local model. The migration effort for this small prototype is an estimate, not a measured result: roughly 12–24 hours for endpoint replacement, regression testing and output validation. The impact on accuracy is still unknown. My next 90 days should therefore focus on recording exact model metadata, keeping a local model warm, and testing schema validation and human review before any operational deployment.

The lesson for freight forwarding is that the model should not become the system of record. Own the rules that decide whether a shipment email is safe to process; rent the text-generation capability only as long as it earns its place.
