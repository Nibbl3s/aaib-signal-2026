---
week: 8
title: "Design Defense — Why Workplace AI Needs an Architecture, Not Just a Model"
author: Andreea Simion
beat: The Psychology of AI Adoption in the Workplace
skill: "Design defense"
date: 2026-11-26

---
# Design Defense — Why Workplace AI Needs an Architecture, Not Just a Model

## 1. Hook

Companies often introduce AI into the workplace by purchasing a tool and expecting employees to adopt it immediately. But what happens when the new technology cannot communicate with existing systems, produces unreliable results or makes employees feel that their jobs are threatened? Without proper integration design, even the most advanced AI model can become an expensive tool that people do not trust or use. In workplace AI adoption, architecture is not just a technical decision; it directly influences employee experience, trust and organizational acceptance.

## 2. The Company

For this week's design challenge, I selected Northwind Logistics NV, a fictional mid-sized European logistics company headquartered in Antwerp, Belgium. It employs 340 people, serves 450 active clients and operates across Belgium, the Netherlands, Germany and France. Its existing technology includes SAP S/4HANA, Salesforce, Microsoft 365, Power BI, WhatsApp Business and an eight-year-old custom Transport Management System (TMS).

The company wants to introduce AI to improve customer shipment-status enquiries and delivery-exception management. However, it faces three major constraints: a total integration budget of €50,000, a three-month implementation deadline and a legacy TMS with no public API. The company also needs to protect sensitive customer and shipment information while supporting four languages.

## 3. The Architecture

I designed a five-layer architecture around a multilingual shipment-status and exception-triage assistant.

**Data Layer:** The system connects to SAP S/4HANA and Salesforce through their REST APIs, Microsoft 365 through Microsoft Graph and WhatsApp Business through its Business API. The legacy TMS requires read-only SQL access and scheduled data extraction because it has no public API. Only the information necessary to answer customer enquiries should be retrieved, with sensitive data protected through appropriate EU processing arrangements.

**AI Model Layer:** Instead of developing a custom model, I would connect to an existing multilingual commercial LLM through an API. It must support Dutch, French, German and English. A local open-weights model, such as Llama through Ollama, could be evaluated as an alternative for sensitive processing or provider outages. The model should summarize shipment information, classify exceptions and prepare response drafts, not independently make operational decisions.

**Integration Layer:** A lightweight Python or Node.js service would coordinate communication between the existing systems and the AI model. Scheduled 15-minute synchronization would retrieve relevant TMS information, while API connections would support the other systems. Keeping the integration layer independent from the AI provider would make future migration easier.

**Interface Layer:** Rather than building another application, I would use Microsoft Teams and existing Salesforce workflows. Employees would receive shipment summaries, exception classifications and suggested customer responses. A coordinator must review and approve every external message before it reaches a customer.

**Governance Layer:** The architecture would include audit logs, access controls, cost monitoring, quality measurements and GDPR safeguards. AI-generated recommendations, human corrections and approvals would be recorded. If the AI becomes unavailable, employees must still be able to use the original TMS and manual communication templates.

My own HR Sentiment & Adoption Barrier Classifier would remain a separate internal component. It could help HR identify recurring employee concerns about AI adoption, but its classifications would require human review rather than being treated as definitive assessments of employee attitudes.

## 4. The Defense

The first question a board might ask is: why not simply use Salesforce Einstein or Microsoft Copilot? Both are useful existing tools, but neither automatically solves the complete integration challenge involving the legacy TMS, multilingual shipment triage and custom fallback procedures. My proposed architecture reuses existing systems while adding only the integration capabilities that are missing.

The estimated Year 1 budget is €39,215, leaving €10,785 below the available €50,000. This is a preliminary planning estimate covering development, AI API costs, infrastructure, training and contingency.

For cost at scale, my initial projection estimates 500 daily AI calls in Month 1, 1,500 in Month 6 and 4,500 in Month 12. The projected Month 12 monthly cost is €17,500, including estimated human error-remediation costs. These figures need validation against actual provider prices, token consumption and correction rates.

Vendor lock-in is another concern. Using standard JSON formats, independent prompt management and a replaceable AI integration layer would make it easier to migrate if a provider increases prices or discontinues its service.

The biggest risk is incorrect shipment information being presented confidently to customers. Read-only data access, retrieval validation, human approval and audit logging reduce this risk. Most importantly, employees retain control over customer communication.

## 5. The Question

What would make me change this architecture? If testing showed that the multilingual model consistently produced unreliable shipment information or that human correction costs outweighed the efficiency gains, I would reconsider the model and potentially reduce the automation scope. The thing I am least certain about is whether a local fallback model could deliver sufficient accuracy across all four languages without introducing additional infrastructure and maintenance costs.
