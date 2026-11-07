# Week 7 Evidence: Lock-In Detection & Local Model Lab

**Author:** Andreea Simion  
**Beat:** The Psychology of AI Adoption in the Workplace  
**Course:** AI Adoption & Implementation (AAIB 2026)  
**Date:** October 30, 2026  
**Skill:** Lock-in detection  

---

## 1. 5-Dimension Lock-In Scorecard (Build Audit)

This scorecard evaluates the lock-in risk of our primary enterprise build: the **Automated Employee AI Sentiment & Adoption Barrier Classifier** (deployed across Slack, Teams, and pulse survey channels).

| Dimension | Score (0–3) | Evidence & Architectural Reasoning |
| :--- | :--- | :--- |
| **1. Data Portability** | **0** | **Full Portability.** Prompt templates, system instructions, ground-truth classification rules, and test-set logs are stored locally in standard, open formats (`.md` and `.json`). Feedback data ingestion relies on standard REST endpoints without vendor-locked data schemas. |
| **2. API Stability** | **1** | **Mostly Stable.** Built on standard OpenAI-compatible REST API formats. While the primary cloud provider (Google AI Studio / Gemini API) does not contractually guarantee long-term deprecation windows, transitioning to an alternative provider requires only changing the API base URL and request payload wrapper. |
| **3. Pricing Control** | **1** | **Published Pricing.** API pricing operates on a pay-as-you-go model ($0.000046/call for Gemini Flash-Lite). While the vendor can modify pricing with 30 days' notice, token costs represent less than 0.01% of total operational expenditure, making price fluctuations financially negligible relative to human error remediation costs. |
| **4. Feature Dependency** | **1** | **Portable Core Logic.** The core classification logic rests entirely in prompt engineering and zero-shot/few-shot system context rather than proprietary vendor UI components, custom model fine-tuning, or closed vector database engines. |
| **5. Migration Cost** | **0** | **Low Cost.** Total migration cost to an alternative cloud model or local open-weights instance is estimated at under €200 in developer time (<4 engineering hours) with zero database re-indexing or format conversion overhead. |
| **TOTAL SCORE** | **3 / 15** | **LOW RISK (Architectural Independence)** |

*Interpretation:* A total score of 3/15 confirms that our AI adoption classifier operates with minimal vendor lock-in. The architecture maintains a clear, documented exit path and can be migrated off-grid or across cloud providers within 48 hours.

---

## 2. Architecture Recommendation & Costed Migration (Scenario 2: GhentAccounting)

### Scenario Summary
* **Company:** GhentAccounting (Small Belgian accounting firm, 24 employees, 300 SME clients).
* **Problem:** Processing 15,000 invoices/receipts per month; manually extracting fields (VAT, amounts, dates) consuming massive staff hours.
* **Constraints:** 0 internal software engineers, €2,000–€5,000/month budget, 2-month timeline requirement.

### 5-Question Decision Framework Application
1. *Is this capability their competitive advantage?* **No.** Invoice OCR and expense data extraction are standard commoditized accounting tasks. GhentAccounting’s true competitive moat is client relationships and advisory expertise.
2. *Is this a commoditized problem with good off-the-shelf solutions?* **Yes.** Standardized AI invoice processing platforms (e.g., Exact Online add-ons, Rossum, Klippa) exist with pre-built accounting software integrations.
3. *Do they need multiple AI capabilities that no single vendor provides well?* **No.** They require standard document OCR and field extraction.
4. *Will their needs change significantly in the next 12 months?* **No.** Invoice structures and regulatory VAT fields follow stable, standardized accounting rules.
5. *Do they have the engineering capacity to build or maintain?* **No.** 0 software engineers on staff.

**Architectural Recommendation:** **BUY** (License an off-the-shelf, pre-integrated AI invoice processing SaaS).

### Lock-In Risk Assessment for GhentAccounting
* **Total Score:** **6 / 15 (Moderate Risk)**
* **Justification:** While buying a closed SaaS solution introduces dependency on the vendor's extraction engine, this risk is professionally acceptable. Invoice parsing is a commoditized service offered by dozens of competing vendors. If the primary vendor triples prices or degrades performance, switching to an alternative off-the-shelf invoice platform requires minimal data re-mapping without building custom code.

### Migration Path & Costing (If Forced to Exit)
If GhentAccounting's chosen vendor alters pricing or terms, the 60-day migration plan is costed as follows:

| Migration Activity | Resource / Labor Required | Estimated Cost (€) |
| :--- | :--- | :--- |
| **Vendor Selection & Trial** | Accounting Lead (10 hours @ €50/hr) | €500 |
| **API Data Pipeline Re-connection** | External IT Consultant (16 hours @ €90/hr) | €1,440 |
| **Staff Retraining & Onboarding** | 3 Staff Members (4 hours each @ €35/hr) | €420 |
| **Parallel System Run (1 Month)** | Dual SaaS license overlap | €1,500 |
| **TOTAL MIGRATION COST** | **Timeline: 3 Weeks** | **€3,860** |

---

## 3. Second-Model Benchmark Matrix (Cloud Baseline vs. Local Open-Weights)

To test system portability and measure the performance penalty of escaping cloud vendor infrastructure, our complete 10-input test set (from `test-set.md`) was executed against a local open-weights model and benchmarked against our primary cloud API.

### Benchmark Setup
* **Model A (Cloud Baseline):** Google Gemini 3.1 Flash-Lite (via REST API)
* **Model B (Local Open-Weights):** Llama-3-8B-Instruct (executed locally via Ollama hardware acceleration)
* **Test Protocol:** 10 multi-category, multi-language inputs (EN, FR, NL) executed across dual runs (20 total model executions per model).

### Benchmark Results Table

| Metric / Evaluation Dimension | Model A (Cloud API: Gemini Flash-Lite) | Model B (Local Model: Llama-3-8B Ollama) |
| :--- | :--- | :--- |
| **Model Version & Host** | Gemini 3.1 Flash-Lite (Google Cloud API) | Llama-3-8B-Instruct (Local Laptop Execution) |
| **Success / Pass Rate** | **70%** (7/10 inputs passed dual-run consistency) | **60%** (6/10 inputs passed dual-run consistency) |
| **Per-Call Unit Cost** | $0.000046 / call (€0.000042) | **$0.00** (Zero marginal API token cost) |
| **Monthly Operating Cost (300 comments)** | €0.013 / month API tokens | **€0.00** (Excludes local hardware electricity) |
| **Primary Failure Modes** | **F6 Inconsistent** (Input 2, Input 10); **F2 Fabricated** (Input 4 context hallucination). | **F4 Format Drift** (JSON output wrapping in markdown block quotes); **F1 Wrong** on Dutch nuance (Input 9). |
| **Language Performance (FR / NL)** | 100% Pass on French (Input 3) & Dutch (Input 9). | Passed French (Input 3); failed Dutch (Input 9 - mistagged as Usability). |
| **Data Residency & Privacy** | Data transmitted to third-party cloud servers under vendor Terms of Service. | **100% On-Device Data Sovereignty.** Zero employee feedback text leaves the local machine. |

### Failure Profile Analysis
While both models achieved comparable overall accuracy (70% vs. 60%), their operational failure profiles differed significantly:
1. **Format Reliability:** Model A adhered strictly to structured JSON schemas. Model B occasionally wrapped JSON outputs in Markdown code blocks, triggering formatting parser failures (F4) unless handled by an explicit clean-up regex wrapper.
2. **Multilingual Reasoning:** Model B demonstrated degraded performance on non-English inputs, misclassifying the Dutch skepticism prompt (Input 9) as interface friction rather than a trust concern.
3. **Privacy vs. Precision Trade-off:** Running Model B locally completely eliminates data privacy and GDPR compliance risks regarding employee sentiment surveillance, but incurs a 10% accuracy penalty that increases downstream human review labor.

---

## 4. Real Vendor Terms of Service Audit

**Vendor Audited:** Google AI Studio / Gemini API Services  
**Document Reviewed:** Google APIs Terms of Service & Generative AI Additional Terms of Service

| Audit Dimension | Specific Term / Finding | Risk Rating |
| :--- | :--- | :--- |
| **Self-Service Data Export** | Standard API response formats allow self-service export of generated text payload logs. No lock-in fees for data retrieval. | 🟢 Low Risk |
| **Published Deprecation Policy** | Terms specify that Google will provide reasonable notice prior to deprecating APIs, but **no fixed minimum timeline (e.g., 6 months)** is contractually guaranteed. | 🟡 Moderate Risk |
| **Price Change Notice Period** | Changes to fees or usage limits are governed by general terms requiring **30 days' advance notice** via developer updates. | 🟡 Moderate Risk |
| **Promotional / Tier Expiry** | Developer and free-tier rate limits and pricing structures are subject to modification or termination at vendor discretion without prior notice. | 🔴 High Risk |
| **Conspicuous Omissions (What They Refuse to Commit To)** | **No Output Stability Guarantee:** Vendor explicitly disclaims deterministic consistency across model updates. Silent model weight updates can alter classification accuracy without warning. **No Price Cap:** No contractual limits exist on future API pricing escalations. | 🔴 High Risk |

---

## 5. 90-Day Architectural Exit Plan

### The Trigger Scenario
Our cloud API provider (Model A) announces an immediate 300% price increase and updates model weights, causing classification consistency on employee feedback to drop below 50%.

### The Core Deliverable Question
*If our primary provider triples pricing tomorrow, what would switching cost us in hours and performance?*
* **Estimated Switching Labor:** **4 Engineering Hours** (updating REST client endpoint configurations and JSON parser logic).
* **Performance Impact:** Immediate temporary **10% drop in classification pass rate** (from 70% to 60%) when shifting to an un-tuned local model, increasing human remediation labor by €66/month until fine-tuned.

### Phase-by-Phase Exit Roadmap
# Week 7 Evidence: Lock-In Detection & Local Model Lab

**Author:** Andreea Simion  
**Beat:** The Psychology of AI Adoption in the Workplace  
**Course:** AI Adoption & Implementation (AAIB 2026)  
**Date:** October 30, 2026  
**Skill:** Lock-in detection  

---

## 1. 5-Dimension Lock-In Scorecard (Build Audit)

This scorecard evaluates the lock-in risk of our primary enterprise build: the **Automated Employee AI Sentiment & Adoption Barrier Classifier** (deployed across Slack, Teams, and pulse survey channels).

| Dimension | Score (0–3) | Evidence & Architectural Reasoning |
| :--- | :--- | :--- |
| **1. Data Portability** | **0** | **Full Portability.** Prompt templates, system instructions, ground-truth classification rules, and test-set logs are stored locally in standard, open formats (`.md` and `.json`). Feedback data ingestion relies on standard REST endpoints without vendor-locked data schemas. |
| **2. API Stability** | **1** | **Mostly Stable.** Built on standard OpenAI-compatible REST API formats. While the primary cloud provider (Google AI Studio / Gemini API) does not contractually guarantee long-term deprecation windows, transitioning to an alternative provider requires only changing the API base URL and request payload wrapper. |
| **3. Pricing Control** | **1** | **Published Pricing.** API pricing operates on a pay-as-you-go model ($0.000046/call for Gemini Flash-Lite). While the vendor can modify pricing with 30 days' notice, token costs represent less than 0.01% of total operational expenditure, making price fluctuations financially negligible relative to human error remediation costs. |
| **4. Feature Dependency** | **1** | **Portable Core Logic.** The core classification logic rests entirely in prompt engineering and zero-shot/few-shot system context rather than proprietary vendor UI components, custom model fine-tuning, or closed vector database engines. |
| **5. Migration Cost** | **0** | **Low Cost.** Total migration cost to an alternative cloud model or local open-weights instance is estimated at under €200 in developer time (<4 engineering hours) with zero database re-indexing or format conversion overhead. |
| **TOTAL SCORE** | **3 / 15** | **LOW RISK (Architectural Independence)** |

*Interpretation:* A total score of 3/15 confirms that our AI adoption classifier operates with minimal vendor lock-in. The architecture maintains a clear, documented exit path and can be migrated off-grid or across cloud providers within 48 hours.

---

## 2. Architecture Recommendation & Costed Migration (Scenario 2: GhentAccounting)

### Scenario Summary
* **Company:** GhentAccounting (Small Belgian accounting firm, 24 employees, 300 SME clients).
* **Problem:** Processing 15,000 invoices/receipts per month; manually extracting fields (VAT, amounts, dates) consuming massive staff hours.
* **Constraints:** 0 internal software engineers, €2,000–€5,000/month budget, 2-month timeline requirement.

### 5-Question Decision Framework Application
1. *Is this capability their competitive advantage?* **No.** Invoice OCR and expense data extraction are standard commoditized accounting tasks. GhentAccounting’s true competitive moat is client relationships and advisory expertise.
2. *Is this a commoditized problem with good off-the-shelf solutions?* **Yes.** Standardized AI invoice processing platforms (e.g., Exact Online add-ons, Rossum, Klippa) exist with pre-built accounting software integrations.
3. *Do they need multiple AI capabilities that no single vendor provides well?* **No.** They require standard document OCR and field extraction.
4. *Will their needs change significantly in the next 12 months?* **No.** Invoice structures and regulatory VAT fields follow stable, standardized accounting rules.
5. *Do they have the engineering capacity to build or maintain?* **No.** 0 software engineers on staff.

**Architectural Recommendation:** **BUY** (License an off-the-shelf, pre-integrated AI invoice processing SaaS).

### Lock-In Risk Assessment for GhentAccounting
* **Total Score:** **6 / 15 (Moderate Risk)**
* **Justification:** While buying a closed SaaS solution introduces dependency on the vendor's extraction engine, this risk is professionally acceptable. Invoice parsing is a commoditized service offered by dozens of competing vendors. If the primary vendor triples prices or degrades performance, switching to an alternative off-the-shelf invoice platform requires minimal data re-mapping without building custom code.

### Migration Path & Costing (If Forced to Exit)
If GhentAccounting's chosen vendor alters pricing or terms, the 60-day migration plan is costed as follows:

| Migration Activity | Resource / Labor Required | Estimated Cost (€) |
| :--- | :--- | :--- |
| **Vendor Selection & Trial** | Accounting Lead (10 hours @ €50/hr) | €500 |
| **API Data Pipeline Re-connection** | External IT Consultant (16 hours @ €90/hr) | €1,440 |
| **Staff Retraining & Onboarding** | 3 Staff Members (4 hours each @ €35/hr) | €420 |
| **Parallel System Run (1 Month)** | Dual SaaS license overlap | €1,500 |
| **TOTAL MIGRATION COST** | **Timeline: 3 Weeks** | **€3,860** |

---

## 3. Second-Model Benchmark Matrix (Cloud Baseline vs. Local Open-Weights)

To test system portability and measure the performance penalty of escaping cloud vendor infrastructure, our complete 10-input test set (from `test-set.md`) was executed against a local open-weights model and benchmarked against our primary cloud API.

### Benchmark Setup
* **Model A (Cloud Baseline):** Google Gemini 3.1 Flash-Lite (via REST API)
* **Model B (Local Open-Weights):** Llama-3-8B-Instruct (executed locally via Ollama hardware acceleration)
* **Test Protocol:** 10 multi-category, multi-language inputs (EN, FR, NL) executed across dual runs (20 total model executions per model).

### Benchmark Results Table

| Metric / Evaluation Dimension | Model A (Cloud API: Gemini Flash-Lite) | Model B (Local Model: Llama-3-8B Ollama) |
| :--- | :--- | :--- |
| **Model Version & Host** | Gemini 3.1 Flash-Lite (Google Cloud API) | Llama-3-8B-Instruct (Local Laptop Execution) |
| **Success / Pass Rate** | **70%** (7/10 inputs passed dual-run consistency) | **60%** (6/10 inputs passed dual-run consistency) |
| **Per-Call Unit Cost** | $0.000046 / call (€0.000042) | **$0.00** (Zero marginal API token cost) |
| **Monthly Operating Cost (300 comments)** | €0.013 / month API tokens | **€0.00** (Excludes local hardware electricity) |
| **Primary Failure Modes** | **F6 Inconsistent** (Input 2, Input 10); **F2 Fabricated** (Input 4 context hallucination). | **F4 Format Drift** (JSON output wrapping in markdown block quotes); **F1 Wrong** on Dutch nuance (Input 9). |
| **Language Performance (FR / NL)** | 100% Pass on French (Input 3) & Dutch (Input 9). | Passed French (Input 3); failed Dutch (Input 9 - mistagged as Usability). |
| **Data Residency & Privacy** | Data transmitted to third-party cloud servers under vendor Terms of Service. | **100% On-Device Data Sovereignty.** Zero employee feedback text leaves the local machine. |

### Failure Profile Analysis
While both models achieved comparable overall accuracy (70% vs. 60%), their operational failure profiles differed significantly:
1. **Format Reliability:** Model A adhered strictly to structured JSON schemas. Model B occasionally wrapped JSON outputs in Markdown code blocks (````json ... ````), triggering formatting parser failures (F4) unless handled by an explicit clean-up regex wrapper.
2. **Multilingual Reasoning:** Model B demonstrated degraded performance on non-English inputs, misclassifying the Dutch skepticism prompt (Input 9) as interface friction rather than a trust concern.
3. **Privacy vs. Precision Trade-off:** Running Model B locally completely eliminates data privacy and GDPR compliance risks regarding employee sentiment surveillance, but incurs a 10% accuracy penalty that increases downstream human review labor.

---

## 4. Real Vendor Terms of Service Audit

**Vendor Audited:** Google AI Studio / Gemini API Services  
**Document Reviewed:** Google APIs Terms of Service & Generative AI Additional Terms of Service

| Audit Dimension | Specific Term / Finding | Risk Rating |
| :--- | :--- | :--- |
| **Self-Service Data Export** | Standard API response formats allow self-service export of generated text payload logs. No lock-in fees for data retrieval. | 🟢 Low Risk |
| **Published Deprecation Policy** | Terms specify that Google will provide reasonable notice prior to deprecating APIs, but **no fixed minimum timeline (e.g., 6 months)** is contractually guaranteed. | 🟡 Moderate Risk |
| **Price Change Notice Period** | Changes to fees or usage limits are governed by general terms requiring **30 days' advance notice** via developer updates. | 🟡 Moderate Risk |
| **Promotional / Tier Expiry** | Developer and free-tier rate limits and pricing structures are subject to modification or termination at vendor discretion without prior notice. | 🔴 High Risk |
| **Conspicuous Omissions (What They Refuse to Commit To)** | **No Output Stability Guarantee:** Vendor explicitly disclaims deterministic consistency across model updates. Silent model weight updates can alter classification accuracy without warning. **No Price Cap:** No contractual limits exist on future API pricing escalations. | 🔴 High Risk |

---

## 5. 90-Day Architectural Exit Plan

### The Trigger Scenario
Our cloud API provider (Model A) announces an immediate 300% price increase and updates model weights, causing classification consistency on employee feedback to drop below 50%.

### The Core Deliverable Question
*If our primary provider triples pricing tomorrow, what would switching cost us in hours and performance?*
* **Estimated Switching Labor:** **4 Engineering Hours** (updating REST client endpoint configurations and JSON parser logic).
* **Performance Impact:** Immediate temporary **10% drop in classification pass rate** (from 70% to 60%) when shifting to an un-tuned local model, increasing human remediation labor by €66/month until fine-tuned.

### Phase-by-Phase Exit Roadmap
[Day 1–7: Immediate Rerouting] ──▶ [Day 8–30: Local Fallback Deploy] ──▶ [Day 31–90: Off-Grid Optimization]

#### Phase 1: Days 1–7 (Immediate Endpoint Rerouting)
* **Action:** Activate our application's abstraction layer. Re-point standard OpenAI-compatible API base URLs from the primary vendor to a secondary cloud provider (e.g., Anthropic Claude 3.5 Haiku or OpenAI GPT-4o-mini).
* **Labor:** 2 hours of configuration updates.
* **Cost:** €0 downtime; identical variable token pricing.

#### Phase 2: Days 8–30 (Local Hybrid Deployment)
* **Action:** Deploy containerized instances of Ollama running `Llama-3-8B-Instruct` on internal enterprise servers. Route high-sensitivity or routine internal feedback comments to the local model to absorb 80% of query volume.
* **Labor:** 12 engineering hours (container setup, system daemon configuration, output cleaning regex wrappers).
* **Cost:** €0 additional token costs; leverages existing internal server infrastructure.

#### Phase 3: Days 31–90 (Off-Grid Fine-Tuning & Independence)
* **Action:** Utilize our accumulated, human-verified historical feedback log (300+ categorized employee comments) to fine-tune an open-weights model (e.g., Llama-3-8B or Mistral-7B).
* **Labor:** 20 hours of data preparation and fine-tuning execution.
* **Outcome:** Achieves 80%+ classification accuracy off-grid, permanently eliminating external cloud API dependencies, token price vulnerability, and employee data privacy risks.
