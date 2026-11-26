# Week 8 Evidence: Design Defense — Northwind Logistics NV

**Author:** Andreea Simion  
**Beat:** The Psychology of AI Adoption in the Workplace  
**Course:** Advanced AI In Business (AAIB 2026)  
**Skill:** Design defense  
**Date:** November 2026  

---

## 1. Selected AI Use Case & Rationale (Activity 1)

- **Chosen Use Case:** Multilingual Customer Shipment Status & Exception Triage across Dutch (NL), French (FR), German (DE), and English (EN) for Northwind Logistics NV (340 employees, 450 clients, €58M revenue).
- **Why This Use Case:** High daily repetition across four operating languages, clear intent/exception patterns, error-tolerant when paired with human review before external messages go out, achievable within a **€50,000** budget and **3-month** Q4 timeline with **2 internal developers + 1 data analyst**, and measurable via response time and triage accuracy.
- **Rejected Alternatives:** Replacing or rewriting the 8-year-old legacy Custom TMS (out of scope, high cost/risk); autonomous pricing or contract negotiation (low error tolerance, high financial/regulatory risk); fine-tuning a bespoke model from scratch (excessive cost and timeline).

### Check Your Understanding (Activity 1)
- **Single Hardest Constraint:** The legacy Custom TMS has no public API (accessible only via SQL/database) paired with a €50,000 total budget and a 3-month go-live deadline.
- **Why Not Just Salesforce Einstein or Microsoft Copilot?** Native add-ons add per-seat licensing overhead, do not solve read-only SQL shipment lookups from the legacy TMS or custom EU/PII controls on their own, and deepen single-vendor ecosystem lock-in.
- **Selected Use Case & Rationale:** Multilingual shipment status & exception triage maximizes operational value and 3-month delivery feasibility while keeping humans in the loop and allowing manual continuity if the AI layer is down.

---

## 2. Five-Layer Design Decisions (Activity 2)

- **Layer 1 — Data Layer:** Pulls shipment status, routing/exception records, and client preferences from a read-only SQL extract/replica of the Custom TMS alongside REST/Graph APIs for Salesforce and Microsoft 365 (plus WhatsApp Business API events). Operational data is structured/semi-structured with moderate change rate; PII and commercial pricing/contract terms are redacted or kept within EU-hosted boundaries before external model calls.
- **Layer 2 — AI Model Layer:** Uses a **Connect** architecture with a lightweight, EU-compliant commercial LLM API (cost-efficient tier with strong NL/FR/DE/EN support) rather than building or fine-tuning a model. Keeps token spend minimal while maintaining a local open-weights fallback (e.g., Llama-3-8B via Ollama) for privacy or pricing shocks, accepting a minor accuracy trade-off backed by human review.
- **Layer 3 — Integration Layer:** Uses a lightweight Python/Node service (the simplest tool that fits 2 developers and a 3-month build) polling scheduled SQL extracts/read-replica views every 15 minutes alongside event hooks from Teams, Salesforce, and WhatsApp. If the AI or integration layer goes down, operations fall back to direct SQL/TMS views and standard manual templates with zero interruption to freight movement.
- **Layer 4 — Interface Layer:** Delivers draft triage summaries and suggested replies inside existing Microsoft Teams channels and Salesforce/WhatsApp agent queues rather than building a custom app. Coordinators and account managers serve as a mandatory human-in-the-loop checkpoint before external client replies are sent, preventing hallucinated updates or tone mismatches and keeping training to short role guides in NL/FR/DE/EN.
- **Layer 5 — Governance Layer:** Logs every prompt, retrieved shipment context, AI draft, and human edit/approval in an append-only audit trail alongside token, error, and override metrics. Classifies as **Limited-Risk** under the EU AI Act (transparent AI-assisted drafting with human oversight and no high-risk autonomous profiling) and enforces GDPR data minimization, EU processing safeguards, and human verification of critical exception details.

---

## 3. Cost Model & Scale Projection (Activity 3)

### Year 1 Cost Model (Budget Cap: €50,000)

| Cost Category | Details / Basis | Estimate (€) |
| :--- | :--- | :---: |
| AI API costs (Year 1) | ~1,500 calls/day × 250 business days × ~600 tokens/call on a lightweight commercial tier | ~€1,800 |
| Integration development | 2 internal devs + 1 data analyst 3-month allocation & lightweight tooling | €24,000 |
| Infrastructure | EU cloud worker, read-only SQL sync, logging & monitoring | €4,800 |
| Training & change management | NL/FR/DE/EN playbooks, short team sessions, rollout support | €3,500 |
| Contingency (15%) | 15% buffer on €34,100 subtotal | €5,115 |
| **Total Year 1 Estimate** | **~€10,785 headroom under €50,000 cap** *(before high-volume error-remediation labor)* | **€39,215** |

### Scale Projection (Including Error Costs)

| Volume Stage | Daily AI Calls | Monthly Token Cost | Monthly Total Cost (incl. Error Remediation Labor) |
| :--- | :---: | :---: | :---: |
| Month 1 (Launch) | ~500 | ~€25 | ~€2,400 |
| Month 6 (Growth) | ~1,500 | ~€75 | ~€6,200 |
| Month 12 (Scale — 3× Month 6) | ~4,500 | ~€225 | ~€17,500 |

- **Key Cost Takeaway:** In line with Week 1 and Week 6 findings, raw token fees stay tiny even at 3× growth, while human error-remediation labor drives total operating cost—making accuracy and human review guardrails the primary economic lever.

---

## 4. Architecture Sketch & Build Placement (Activity 3)

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ INTERFACE LAYER                                                         │
│ [Microsoft Teams]  [Salesforce / WhatsApp Queue]                        │
│        │                          │                                     │
│        ▼                          ▼                                     │
│ [Human Review Checkpoint: Coordinator approves/edits external replies]   │
└────────────────────────────────────┬────────────────────────────────────┘
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ AI MODEL LAYER                                                          │
│ [EU-Compliant Commercial LLM API — NL/FR/DE/EN] (L)                     │
│ + [Local Open-Weights Fallback: Llama-3-8B / Ollama]                    │
│ + [Your Build: Employee AI Sentiment & Barrier Classifier]              │
│ [Est. cost/call: ~€0.0048 incl. error-remediation buffer]               │
└────────────────────────────────────┬────────────────────────────────────┘
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ INTEGRATION LAYER                                                       │
│ [Lightweight Python/Node Worker: 15-min SQL Sync + Event Hooks]         │
│ [Fallback Path: Direct SQL/TMS view + manual templates if AI is down]   │
└──────────────────┬──────────────────────────────────┬───────────────────┘
                   ▼                                  ▼
┌─────────────────────────────────────┐ ┌─────────────────────────────────┐
│ DATA LAYER                          │ │ GOVERNANCE LAYER                │
│ [Custom TMS — SQL Read/Extract] (L) │ │ [Audit & Override Log]          │
│ [SAP S/4HANA — REST API]            │ │ [Cost & Error Dashboard]        │
│ [Salesforce — REST API]             │ │ [GDPR & EU AI Act Limited-Risk] │
│ [Microsoft 365 — Graph API]         │ │                                 │
│ [WhatsApp Business — API]           │ │                                 │
└─────────────────────────────────────┘ └─────────────────────────────────┘
