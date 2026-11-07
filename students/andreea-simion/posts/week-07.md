---
week: 7
title: "Build, Buy, or Connect — The Architecture Decision Nobody's Making in Workplace AI"
author: Andreea Simion
beat: The Psychology of AI Adoption in the Workplace
skill: "Lock-in detection"
date: 2026-11-07
---

### 1. Hook
Most HR leaders and enterprise transformation teams deploying AI tools never ask: *"What happens to employee trust if we need to switch vendors next quarter?"* They optimize for rapid rollout, unintentionally creating technological traps and worsening workplace change fatigue. In human resources, vendor lock-in isn't just an IT budget problem—it's a psychological commitment that can destroy workforce trust when systems break or vanish.

---

### 2. The Use Case
Consider **OmniRetail**, a mid-sized European retail group with 2,500 employees. To combat post-pandemic turnover, HR deployed an automated **Employee AI Sentiment & Adoption Barrier Classifier**. The tool analyzes internal pulse surveys and Slack channels to identify psychological adoption barriers (such as job security anxiety, interface complexity, or change fatigue) and route at-risk teams to tailored support programs. OmniRetail chose a **Connect** architectural path: building custom prompt classification logic and wrapping standard cloud APIs (Google Gemini Flash) while storing user telemetry and feedback data locally in open JSON schemas.

---

### 3. The Decision
Applying the 5-question decision framework reveals why **Connect** is the optimal path for OmniRetail:
1. *Is sentiment classification their competitive moat?* **No**, but employee retention is critical.
2. *Is it a commoditized problem with off-the-shelf software?* **Partially**, but commercial HR SaaS tools operate as closed black boxes that obscure *why* employees resist technology.
3. *Do they need custom integration across diverse internal platforms?* **Yes**, integrating Slack, Teams, and pulse survey channels requires custom pipelines.
4. *Will sentiment analysis needs shift in 12 months?* **Yes**, as new AI tools roll out across departments.
5. *Do they have internal dev capacity?* **Yes**, a small internal IT team capable of maintaining REST API wrappers.

Building a proprietary foundation model from scratch would be absurd; buying a closed enterprise HR platform creates opaque data silos. Connecting an abstraction layer to lightweight cloud endpoints delivers customized classification while protecting operational agility.

---

### 4. The Lock-In Scorecard

| Dimension | Score (0–3) | Evidence & Reasoning |
| :--- | :--- | :--- |
| **1. Data Portability** | **0** | **Full Control.** Prompts, JSON output logs, and ground-truth sets reside locally in open formats (`.md`/`.json`). |
| **2. API Stability** | **1** | Uses standard OpenAI-compatible REST endpoints, though third-party API deprecation windows remain uncommitted. |
| **3. Pricing Control** | **1** | Pay-as-you-go token pricing ($0.000046/call); token operational spend is negligible relative to labor costs. |
| **4. Feature Dependency** | **1** | Core logic relies on prompt context rather than vendor-locked vector databases or closed UI components. |
| **5. Migration Cost** | **0** | Switching cloud providers requires only updating API base URLs and payload wrappers (<4 engineering hours). |
| **TOTAL SCORE** | **3 / 15** | **LOW RISK (Architectural Independence)** |

**Highest-Risk Dimension:** *API Stability (Score: 1).* While data and code remain fully portable, silent model weight updates from cloud vendors present a hidden risk: sudden changes in classification logic can alter how employee fear is tagged, creating inconsistent HR interventions.

---

### 5. The Migration Path
If the primary cloud API provider tripled prices or degraded sentiment classification accuracy tomorrow, OmniRetail's exit path is straightforward:
* **Immediate Cost:** ~4 engineering hours (€360) to update client API routing endpoints.
* **Performance Impact:** A temporary 10% drop in pass rate if forced onto an un-tuned local model (e.g., Llama-3-8B via Ollama).
* **Mitigation:** Maintaining an abstraction layer and running routine local benchmark sweeps ensures OmniRetail can fallback off-grid without data loss or prolonged system downtime.

---

### 6. The Insight
This architecture highlights a widespread blind spot in workplace AI adoption: enterprise HR departments are rushing into single-vendor SaaS lock-in without recognizing how platform instability fuels employee cynicism. When a vendor unilaterally alters its features, pricing, or data policies, organizations are forced into sudden migrations that break internal workflows. The leaders who build modular, connected architectures maintain control over their data—and ultimately preserve the psychological trust of their workforce.
