
---
week: 8
title: "Week 8 Evidence — Northwind Logistics Architecture and Design Defense"
author: Andreea Simion
beat: "The Psychology of AI Adoption in the Workplace"
skill: "Design defense"
date: 2026-11-26

---

# Week 8 Evidence — Northwind Logistics

## 1. Use Case and Justification

### Selected use case: Multilingual Customer Shipment Status and Exception Triage

Northwind Logistics NV is a fictional mid-sized freight-forwarding company headquartered in Antwerp, Belgium. It has 340 employees, €58 million in annual revenue and 450 active clients across Belgium, the Netherlands, Germany and France.

The proposed AI system helps shipment coordinators process incoming status requests and shipment exceptions in Dutch, French, German and English. It retrieves relevant shipment context, classifies the request, summarises the issue and drafts a suggested response for a human coordinator to review before anything is sent to a client.

### Why this use case?

- **High repetition:** Northwind serves 450 active clients and handles recurring shipment-status and exception enquiries.
- **Suitable for AI assistance:** Requests contain recognisable patterns and structured shipment information, making summarisation and triage useful AI tasks.
- **Human review is possible:** The system drafts and recommends; it does not autonomously send external messages or make pricing, contractual or operational decisions.
- **Feasible within constraints:** The proposal uses existing systems, a lightweight integration service and a commercial model API rather than replacing the legacy TMS or training a new model.
- **Measurable:** Performance can be assessed through triage accuracy, response time, human correction rates and coordinator feedback.

### Rejected alternatives

- Replacing or rewriting the eight-year-old Custom TMS: outside the project scope and incompatible with the three-month delivery timeline and €50,000 budget.
- Autonomous pricing or contract negotiation: too much financial and commercial risk for an AI system that can make mistakes.
- Building and fine-tuning a custom model: unnecessary cost and complexity for the available team.
- Relying only on Salesforce Einstein or Microsoft 365 Copilot: neither removes the need to connect to the legacy TMS and design the required data controls, human review and fallback process.

**Hardest constraint:** The Custom TMS has no public API. Its data is accessible through SQL, and the system cannot be replaced within the project's three-month timeline and €50,000 budget.

---

## 2. Five-Layer Architecture Decisions

### Layer 1 — Data

The system uses shipment status, routing and exception information from a read-only SQL extract or replica of the Custom TMS, alongside relevant client preferences and communication context from Salesforce and Microsoft 365. WhatsApp Business events provide incoming customer communication; sensitive personal, contract and pricing information must be minimised or masked, with EU data-processing and residency safeguards applied before any model request.

### Layer 2 — AI Model

The architecture uses a **Connect** approach: a lightweight commercial language-model API, with Gemini 3.1 Flash-Lite as the proposed cost-efficient option, rather than building or fine-tuning a model. The model must be evaluated on Dutch, French, German and English examples; a local open-weights model such as Llama 3 8B via Ollama is the proposed fallback, with human review retained because local-model accuracy may be lower.

### Layer 3 — Integration

A lightweight Python or Node.js middleware service connects the SQL extracts, Salesforce REST API, Microsoft Graph API and WhatsApp Business API, avoiding a large integration platform that the two internal developers cannot realistically build and maintain in three months. The TMS extract is scheduled approximately every 15 minutes; if the AI service or middleware fails, coordinators use the existing TMS screens, direct SQL views and standard manual response templates.

### Layer 4 — Interface

The system presents summaries, triage classifications and draft replies through existing Microsoft Teams channels and the relevant Salesforce or WhatsApp agent workflows, rather than requiring a new custom application. A coordinator or account manager must verify shipment facts, language and tone and approve every external response; short role-based training and guidance are provided in Dutch, French, German and English.

### Layer 5 — Governance

The system records the retrieved context, prompt, model output, human edits and final approval in an audit trail, with monitoring for cost, quality, error rates and usage. The design applies GDPR data minimisation and EU processing safeguards, and requires a documented EU AI Act classification assessment before deployment; the intended use is transparent, human-reviewed drafting rather than autonomous high-impact decision-making.

---

## 3. Architecture Sketch

The diagram below shows the five layers, the systems actually connected in the proposed first phase, the direction of data flow, human checkpoints, fallback and lock-in markers.

`(L)` identifies a component with potential vendor lock-in.

```text
┌───────────────────────────────────────────────────────────────┐
│                    4. INTERFACE LAYER                          │
│                                                               │
│  Microsoft Teams (L)     Salesforce agent workflow (L)        │
│  WhatsApp Business (L)   Draft triage summaries and replies   │
│              │                    │                            │
│              └──────────┬─────────┘                            │
│                         ▼                                      │
│             HUMAN REVIEW CHECKPOINT                            │
│       Coordinator checks facts, language and tone              │
│       Human approval required before external send              │
│                         │                                      │
└─────────────────────────┼─────────────────────────────────────┘
                          │ approved request / feedback
                          ▼
┌───────────────────────────────────────────────────────────────┐
│                     2. AI MODEL LAYER                          │
│                                                               │
│  Gemini 3.1 Flash-Lite API (L) — proposed commercial model     │
│  Languages: Dutch / French / German / English                  │
│                                                               │
│  Local fallback: Llama 3 8B via Ollama                         │
│  (self-hosted; accuracy must be tested before fallback use)    │
│                                                               │
│  Output: classification, summary and suggested reply           │
└─────────────────────────┬─────────────────────────────────────┘
                          │ model request / response
                          ▼
┌───────────────────────────────────────────────────────────────┐
│                   3. INTEGRATION LAYER                         │
│                                                               │
│  Lightweight Python / Node.js middleware                      │
│  - Scheduled SQL extraction (approximately every 15 minutes)  │
│  - Salesforce REST API (L)                                    │
│  - Microsoft Graph API (L)                                    │
│  - WhatsApp Business API (L)                                  │
│  - Data minimisation and masking before model requests        │
│                                                               │
│  FAILURE FALLBACK:                                             │
│  AI or middleware unavailable → existing TMS screens,          │
│  direct SQL views and manual response templates                │
└───────────────┬───────────────────────────┬───────────────────┘
                │                           │
                ▼                           ▼
┌──────────────────────────────┐  ┌─────────────────────────────┐
│       1. DATA LAYER          │  │       5. GOVERNANCE LAYER   │
│                              │  │                             │
│ Custom TMS — read-only SQL   │  │ Append-only audit trail     │
│ Salesforce — REST API (L)    │  │ Cost and token monitoring   │
│ Microsoft 365 — Graph (L)    │  │ Quality / error monitoring  │
│ WhatsApp — Business API (L)  │  │ Human approval records      │
│                              │  │ GDPR / EU safeguards        │
│ SAP S/4HANA — not connected  │  │ EU AI Act assessment        │
│ in this first-phase design   │  │                             │
│ Power BI — not a live input  │  │ Power BI can be used for    │
│ or dependency in this design │  │ internal reporting later    │
└──────────────────────────────┘  └─────────────────────────────┘


       SEPARATE INTERNAL BUILD COMPONENT
       ┌─────────────────────────────────────────────┐
       │ HR Sentiment & Adoption Barrier Classifier  │
       │                                             │
       │ Input: internal coordinator / employee      │
       │ feedback, kept separate from client data    │
       │                                             │
       │ Output: six adoption-barrier categories     │
       │                                             │
       │ Used for internal adoption learning and    │
       │ training priorities — not shipment triage  │
       └─────────────────────────────────────────────┘
```

### Data-flow explanation

1. Shipment and exception data is read from the Custom TMS through a scheduled, read-only SQL extract. Relevant client and communication context is retrieved through Salesforce, Microsoft Graph and WhatsApp Business integrations.
2. The middleware minimises and masks the data before sending the necessary context to the commercial model API.
3. The model returns a classification, shipment summary and suggested response.
4. The result appears in the existing coordinator workflow. A human checks the shipment facts, language and tone and approves any external message.
5. The prompt, relevant context, output, edits and approval are logged for audit and quality monitoring.
6. If the AI or middleware is unavailable, the team continues through existing TMS screens, SQL views and manual templates.

### Where my Build fits

My existing **HR Sentiment & Adoption Barrier Classifier** is shown as a separate internal component. It classifies employee and coordinator feedback into six categories: Job Security Fear, Trust/Accuracy Concern, Usability/Complexity, Change Fatigue, Enthusiastic/Receptive and Unclassified/Irrelevant.

It is not the model that processes customer shipment requests. Its purpose is to help Northwind understand employee and coordinator adoption barriers and identify where training, communication or workflow improvements may be needed. It must use appropriate internal feedback permissions and data protections.

**Build evidence:** The existing cloud baseline recorded a 70% pass rate and 30% error rate across 20 executions; the local Llama 3 8B test recorded a 60% pass rate. These results are a reason to retain human review, not evidence that the classifier is ready to make independent workplace decisions.

### Lock-in markers and exit paths

| Component | Lock-in risk | Exit or mitigation |
|---|---|---|
| Gemini commercial API | Model provider, pricing and API dependency | Keep prompts and routing logic portable; use a model abstraction and test a local alternative |
| Salesforce | CRM and workflow ecosystem dependency | Use documented REST interfaces and retain portable records |
| Microsoft 365 / Teams | Interface and identity ecosystem dependency | Keep core processing in middleware rather than embedding all logic in Teams |
| WhatsApp Business API | Channel and provider dependency | Keep the triage service channel-independent and retain manual contact procedures |
| Local Llama fallback | Hosting and model-maintenance burden | Keep it optional; test quality and operating requirements before relying on it |

**Scope note:** SAP S/4HANA and Power BI are existing Northwind systems, but they are not direct dependencies in this first-phase shipment-triage design. Power BI may later display governance metrics from the audit and monitoring layer. This avoids implying that integrations have been built or budgeted when they have not.

---

## 4. Cost Model

### Year 1 implementation budget

Northwind's total approved project ceiling is **€50,000**, including software, APIs, implementation and first-year operational costs.

| Cost category | Year 1 estimate | What it covers |
|---|---:|---|
| AI API costs | €1,800 | Planning allowance for commercial model usage |
| Integration development | €24,000 | Two developers, analyst allocation and lightweight integration work over three months |
| Infrastructure | €4,800 | EU cloud worker, read-only SQL synchronisation, logging and monitoring |
| Training and change management | €3,500 | Multilingual playbooks, short training sessions and rollout support |
| Subtotal | €34,100 | Before contingency |
| Contingency (15%) | €5,115 | Allowance for unknowns |
| **Total Year 1 estimate** | **€39,215** | |
| **Remaining budget headroom** | **€10,785** | Against the €50,000 ceiling |

The estimate is below the €50,000 cap, leaving €10,785 in headroom. It is a planning estimate, not a supplier quote or a fully validated implementation budget.

### Cost at scale

The existing team projection is:

| Period | Daily AI calls | Monthly token-cost estimate | Monthly total estimate, including error-remediation |
|---|---:|---:|---:|
| Month 1 — launch | 500 | €25 | €2,400 |
| Month 6 — growth | 1,500 | €75 | €6,200 |
| Month 12 — scale | 4,500 | €225 | €17,500 |

The monthly total estimates include human error-remediation costs, but the original notes do not provide a separate breakdown of reviewer hours, correction time, hosting, monitoring and other operating costs. Therefore, the difference between the monthly total and token estimate must not be presented as a verified labour figure.

### Cost interpretation

The projected token cost rises from €25 to €225 per month between Month 1 and Month 12, while the projected total monthly cost rises from €2,400 to €17,500. This suggests that human review and error-remediation may become a more significant cost driver than model tokens as usage grows.

The project must therefore measure:
- Number of AI-assisted requests.
- Percentage requiring correction.
- Average human correction time.
- Staff cost per hour.
- Cost per correctly handled request.
- Model token consumption by language and request type.

A useful calculation is:

`Monthly error-remediation cost = number of errors × average correction time in hours × hourly staff cost`

### Important cost-model limitations

The €1,800 annual API allowance and the monthly token estimates are inherited planning figures from the team's earlier work. They have not been reconciled here against a verified input/output token mix, actual provider billing or a confirmed exchange rate. They should be checked against the selected provider's current pricing and a representative test sample before being treated as final.

The €39,215 Year 1 implementation estimate and the Month 1/6/12 operating projections are different views of the costs. They should not simply be added together: the monthly projections are operating estimates, and the original notes do not specify precisely which Year 1 budget lines they overlap.

The separate HR Sentiment & Adoption Barrier Classifier is an existing Build prototype, not a new Northwind shipment-triage model. No additional production integration cost for that classifier has been established in the €39,215 estimate.

---

## 5. Defense Preparation Checklist

### Board question 1: Why not just use Salesforce Einstein or Microsoft 365 Copilot?

**Answer:** Northwind's hardest technical constraint is the eight-year-old Custom TMS, which has no public API and exposes data through SQL. The proposed middleware connects that legacy data to the existing communication workflows while keeping the model choice, human approval and fallback process under Northwind's control. Built-in AI may help inside individual applications, but it does not remove the need to solve the cross-system integration problem.

**Figure or named constraint:** €50,000 total budget, three-month delivery timeline and SQL-only access to the legacy TMS.

### Board question 2: What does this cost when usage grows three times?

**Answer:** The current projection increases from 1,500 calls per day in Month 6 to 4,500 calls per day in Month 12. The estimated monthly token cost rises from €75 to €225, while the estimated total monthly cost rises from €6,200 to €17,500, including estimated error-remediation. The team must monitor correction time and error rates because the total cost is not explained by token usage alone.

**Figure:** 4,500 calls per day and €17,500 estimated monthly total in Month 12.

### Board question 3: What happens if the AI provider changes its prices or shuts down?

**Answer:** The commercial model is accessed through a lightweight middleware layer rather than being embedded throughout the business workflow. Prompts, routing logic and test cases should remain in portable formats, allowing the provider connection to be changed; a local Llama 3 8B fallback is a possible alternative, but its lower measured performance means it must be tested and used with human review.

**Figure:** The existing local-model test recorded a 60% pass rate, compared with 70% for the cloud baseline. The fallback is therefore a continuity option, not an equivalent replacement.

### Board question 4: How can Northwind trust the system in Dutch, French, German and English?

**Answer:** The model must be tested using representative examples in all four languages, including local phrasing and shipment-specific terminology. Coordinators must check the meaning, shipment facts and tone before external messages are sent. The existing Build's Dutch classification miss on the local model is a reminder that multilingual capability should be measured rather than assumed.

**Figure:** Four required languages: NL, FR, DE and EN. The existing local-model test recorded a Dutch classification miss.

### Board question 5: What is the risk the team may be overlooking?

**Answer:** A human reviewer may approve an incorrect or fabricated shipment detail, particularly when requests are short or ambiguous. Another risk is that the integration or AI provider becomes unavailable and interrupts the workflow. Mandatory human approval, audit logs, quality monitoring and the manual TMS/SQL fallback reduce these risks; they do not eliminate them.

**Figure or named constraint:** The uptime requirement states that freight operations must continue manually if the AI layer fails. The existing cloud Build baseline also recorded a 30% error rate across 20 executions, demonstrating why AI output cannot be treated as automatically correct.

---

## Final Design Position

The proposed design connects a lightweight AI service to Northwind's existing shipment and communication systems without replacing the legacy TMS or building a new application. Its central design choices are to keep the integration layer small, preserve a human approval checkpoint, protect sensitive data, monitor total cost rather than token cost alone and maintain a manual fallback.

The architecture is intended to fit within the €50,000 first-year ceiling and three-month delivery constraint. The main uncertainties to resolve before implementation are the actual model/API cost, the human correction cost at higher volumes, multilingual accuracy and the detailed GDPR and EU AI Act assessment.

## Evidence and Assumptions to Verify Before Deployment

- [ ] Confirm the commercial model's current availability, EU processing terms and actual input/output token prices.
- [ ] Recalculate API costs from measured token usage in NL, FR, DE and EN.
- [ ] Break down the monthly error-remediation estimate into reviewer hours and staff cost.
- [ ] Confirm read-only SQL access, refresh frequency and permissions for the legacy TMS.
- [ ] Test the local fallback on the same multilingual test set as the commercial model.
- [ ] Confirm the data-retention, audit-log and access-control design with the relevant GDPR stakeholders.
- [ ] Complete and document the EU AI Act classification assessment before deployment.
- [ ] Confirm which team members own model monitoring, integration support and human-review procedures.

---

**Source basis:** Week 8 assignment brief and the team's existing Week 8 Northwind Logistics notes. Cost figures are retained from the team's planning estimates and are explicitly marked as provisional where their underlying breakdown is unavailable.
