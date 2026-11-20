# Week 7 Lab Memo — Lock-in Detection and Architecture

**Student:** Janis Krainis  
**Track:** 4 ECTS  
**Beat:** AI and Communication Automation in European Freight Forwarding  
**Date:** 20 November 2026

> Evidence note: this memo separates facts in the course brief and my repository, public vendor documentation reviewed on 20 November 2026, and estimates or unanswered questions. I have not run the local model in this environment. The reproducible runner is included separately; local scores must be filled after running it.

## Part A — My freight-email Build: lock-in scorecard

The Build extracts origin, destination, weight and cargo type from freight emails. The test set contains ten synthetic messages run twice. The log records Run 1 = 8/10, Run 2 = 9/10, and 17/20 outputs overall. Eight cases passed both runs. Input 8 had inconsistent weight formatting; input 9 omitted Valencia supplier context in both runs.

**Scale:** 0 = low lock-in, 1 = moderate dependency, 2 = high dependency, 3 = extreme dependency. Maximum = 15. Course interpretation: 0–4 low, 5–8 moderate, 9–12 high, 13–15 critical.

| Dimension | Score | Evidence from my current stack | Action |
|---|---:|---|---|
| Data portability | **1/3** | Prompt v2, synthetic test inputs and run log are stored as ordinary Markdown in my own GitHub folder. Requests still go to a hosted API, and provider-side retention/deletion settings are not recorded. | Identify exact provider, project, tier, endpoint and region; verify retention and deletion before real shipment emails are used. |
| API stability | **2/3** | The prompt is provider-neutral text, but the Build log records no model ID/version, API version or endpoint for the complete 20-output benchmark. | Record model and endpoint on every run; check the actual vendor's deprecation policy. |
| Pricing control | **2/3** | Week 6 contains one initial Gemini Flash API test and a separate course pricing reference for a scale projection. There is no supplier contract or price guarantee in the project files. | Confirm actual provider, account tier and price; record the contractual price-change notice. |
| Feature dependency | **1/3** | The prototype uses a normal text prompt and four text fields. It does not rely on proprietary fine-tuning, embeddings, vector stores or a vendor workflow builder. | Keep the output schema provider-neutral; avoid proprietary tools unless they deliver measured value. |
| Migration cost | **0/3** | The prompt, test set and run log are portable files. The workflow has no trained model, embedding store or proprietary orchestration to migrate. Switching the endpoint and rerunning the regression tests should be below one month and below €20,000; the impact on accuracy is not yet measured. | Add a thin adapter and complete the local benchmark before describing the exit as tested. |
| **Total** | **6/15** | **Moderate lock-in risk** | The provider identity/terms and second-model quality are the two gaps to close. |

### Real terms-of-service check: known and unknown

The repository does **not** identify the exact model ID and endpoint for all runs. Week 6 mentions one initial Google Gemini Flash API call, but its scale projection later cites a separate course pricing reference labelled gpt-5.6-terra / equivalent. I cannot truthfully claim that Gemini terms govern every test.

**Conditional finding if the initial call used the Gemini Developer API:**
- Google's Gemini API Additional Terms are effective 23 March 2026. For paid Gemini API services, prompts and responses are not used to improve Google's products; Google logs them for a limited period for safety, security and legal/regulatory purposes, and they may be stored transiently or cached in countries where Google or its agents maintain facilities.
- The same terms say paid-service prices may change, normally effective 30 days after the change is posted.
- For developers in the EEA, Switzerland or UK, Google says the paid-services data-use terms also apply to AI Studio and unpaid Gemini API quota. Separately, Gemini API clients made available to users in those regions must use paid services.
- Google's deprecation documentation lists model retirement schedules and says shutdown dates are communicated in advance. The reviewed documents do not set one guaranteed minimum notice period for every model.

**Unresolved:** the actual account tier, endpoint, exact Gemini model version, processing region, and whether all benchmark calls used Gemini. The correct finding is “not recorded”, not a guessed vendor setting.

**Local-model candidate:** Qwen2.5 3B through Ollama. The official Ollama model page lists a 1.9 GB Q4_K_M build and a Qwen Research License (not Apache 2.0). Ollama's local API uses localhost:11434; Ollama's local-runner documentation says local inference does not send conversation data to Ollama. This is a coursework comparison candidate, not a commercial deployment recommendation without a licence review.

## Part B — Scenario 2: GhentAccounting (Buy)

### Walk through the five-question decision framework

**Scenario facts from the Week 7 brief:** 24 employees, 300 SME clients, 15,000 invoices/receipts per month, three staff currently extracting invoice data and categorising expenses, matching purchase orders and flagging anomalies; Dutch/French/English required; existing Exact Online; zero engineers; €2,000–€5,000/month budget; two-month deadline.

| Question | Answer for GhentAccounting | Decision |
|---|---|---|
| 1. Is invoice OCR/classification the firm's competitive advantage? | No. Its value is accounting judgement, client service and exception handling—not training an OCR model. | Do not Build. |
| 2. Is this a commoditised capability with good off-the-shelf products? | Yes. Invoice OCR, extraction, document collection and accounting-software hand-off are established product categories. | **Buy. Stop at the first clear yes, as the course framework instructs.** |
| 3. Do they need several AI capabilities no single vendor provides well? | The scenario does not establish that. It asks for a single invoice-processing workflow. | Does not overturn Buy. |
| 4. Will needs change significantly in the next 12 months? | The scenario does not say that they will. | No evidence for Connect. |
| 5. Do they have engineering capacity? | No. There are zero engineers. | Build/Connect would create a maintenance dependency they cannot support. |

**Recommendation:** Buy a complete invoice-capture product with a supported Exact Online hand-off and human exception workflow. OkiOki is a candidate for a proof of concept, not a pre-approved choice.

Public OkiOki documentation describes OCR and data recognition, lists Exact Online among supported accounting packages, and says UBL files can be delivered through multiple routes. Its accountant integration article describes an Exact Online route and lists API integration options; confirm the exact setup, prerequisites and division configuration directly with OkiOki. OkiOki also documents downloadable archives by month, quarter or year. Its public entrepreneur plans are limited to 25, 70 and 200 documents/month, while accountant pricing is quote-based. Those SME prices cannot be extrapolated to 15,000 documents/month.

**Proof-of-concept gates:** obtain a written accountant-tier quote at the required volume; test representative Dutch, French and English invoices; test scanned PDFs, e-invoices/UBL, credit notes, VAT edge cases, duplicates and purchase-order matching; verify the exact Exact Online transfer method; confirm bulk exports include originals and required metadata; and agree an exception-review SLA. Public documentation reviewed does not establish guaranteed accuracy for GhentAccounting's language mix or document volume.

### GhentAccounting 0–3 scorecard

| Dimension | Score | Public evidence and risk |
|---|---:|---|
| Data portability | **1/3** | OkiOki documents bulk archive downloads by month, quarter or year, and its integration material describes UBL plus the original PDF. The reviewed documentation does not prove that every workflow setting, review history or permission record is included. |
| API stability | **2/3** | Exact Online is listed as supported and OkiOki documents integration routes, but the reviewed public material does not state a minimum deprecation window or uptime SLA. |
| Pricing control | **2/3** | Accountant pricing is quote-based. Public SME tiers have low document limits and per-document overage pricing; there is no public accountant price for this firm's 15,000-document requirement. |
| Feature dependency | **1/3** | PDF/UBL export reduces dependence on proprietary invoice records, but automatic collection, matching and exception workflow may still rely on OkiOki's product behaviour. |
| Migration cost | **2/3** | Exporting PDF/UBL should reduce the cost of moving historical documents, but the firm would still need to remap 300 client files, recreate rules and permissions, reconnect Exact and run a parallel close. |
| **Total** | **8/15** | **Moderate risk** — acceptable only with an export test, volume-based contract and an exit rehearsal. |

### Why moderate lock-in is acceptable here

GhentAccounting is buying a commodity workflow to solve a near-term staffing bottleneck. It has no engineers, only two months, and does not derive its competitive advantage from OCR. Paying for a product is rational even when the vendor owns part of the workflow, provided the firm can export underlying invoices and structured records. This differs from FlandersBio, whose genomic algorithms and biomarker database are its core IP and whose health data must remain tightly controlled, and from OmniRetail, which embedded customer data, models, embeddings, prompts and analytics in one proprietary platform. GhentAccounting should own accounting judgement and source records, not an OCR engine.

### Costed exit path (planning estimate, not a vendor quote)

| Exit work | Hours |
|---|---:|
| Export and reconcile PDF/UBL archive; validate counts and checksums | 8–12 |
| Map UBL fields and recreate Exact Online hand-off | 8–12 |
| Recreate collection sources, client permissions and approval rules | 8–12 |
| Rebuild exception queue and purchase-order checks | 8–12 |
| Parallel run, reconcile differences and train staff | 8–12 |
| **Total** | **40–60 hours** |

At an assumed external implementation rate of €85/hour, the one-off exit budget is **€3,400–€5,100**, excluding the replacement product's subscription and any vendor exit fee. Obtain the actual quote and confirm export rights before contracting.

### Recommended architecture

~~~mermaid
flowchart LR
  A[Peppol / email / scanned PDF] --> B[Purchased invoice SaaS: OCR + extraction]
  B --> C[UBL + original PDF]
  C --> D[Exact Online]
  B --> E[Exception queue]
  E --> F[Accountant review]
  F --> D
  C --> G[Firm-controlled archive]
  D --> G
~~~

No custom model is proposed. The vendor handles capture; Exact remains the accounting system; accountants retain authority over exceptions and postings. No autonomous payment release is included.

## Part C — Three architecture scenarios

### Scenario 1: FlandersBio — Build the core, connect standard components

**Decision:** Build the proprietary genomic analysis pipeline because the algorithm and biomarker database are the moat; do not outsource sensitive core processing. Buy commodity infrastructure only where it can remain inside the approved environment.

~~~mermaid
flowchart LR
  A[Raw genomic data] --> B[Controlled on-prem / private compute]
  B --> C[Custom pattern matching + biomarker database]
  C --> D[Auditable report generator]
  D --> E[Pharma partner export]
  B --> F[Access logs + audit trail]
  C --> F
~~~

Exit path: own the data, algorithm and database; use portable storage formats and reproducible deployment. Open standards help at the boundaries but do not replace ownership of the proprietary core.

### Scenario 2: GhentAccounting — Buy

~~~mermaid
flowchart LR
  A[Peppol / email / PDF] --> B[Purchased invoice SaaS]
  B --> C[UBL + original PDF]
  C --> D[Exact Online]
  B --> E[Human review queue]
  E --> D
  C --> F[Export archive]
~~~

Exit path: bulk PDF/UBL export, recreate rules and permissions, reconnect Exact, parallel-run before switching.

### Scenario 3: BeneluxMarketing — Connect

**Decision:** Connect the six existing tools through a thin integration layer. The agency has one developer, no single provider covers all five capabilities well, and needs will change over the next year. Do not build foundational models or buy an all-in-one suite that replaces every existing tool.

~~~mermaid
flowchart LR
  A[Marketer workspace] --> B[Owned workflow / connector layer]
  B --> C[Content generation]
  B --> D[Social listening]
  B --> E[Ad platform connectors]
  B --> F[Personalisation engine]
  B --> G[Competitive intelligence]
  B --> H[Standard data store + client audit log]
~~~

Use MCP where it provides a standard tool interface, and keep provider-specific adapters behind the owned connector layer. MCP can reduce custom tool-integration work, but it does not make proprietary data, pricing, model weights or vendor features portable automatically.

## Part D — OmniRetail composite case: diagnosis and scorecard

The course describes OmniRetail as a composite case. Its facts include proprietary conversation logs, fine-tuned models hosted by Vendor X, proprietary embeddings, prompts stored in Vendor X's workflow builder, vendor-hosted fraud detection and BI, API cost increasing 180%, storage rising from €800 to €4,200/month, new hosting fees for three fine-tunes, a €12,000 export tool and an estimated 400 engineering hours for API migration.

| Dimension | Score | Evidence in the case |
|---|---:|---|
| Data portability | **3/3** | Conversation logs, embeddings and fine-tuned models are in vendor-specific formats/infrastructure; export now costs €12,000. |
| API stability | **3/3** | The next API version deprecates the response format their application depends on; migration is estimated at 400 engineering hours. |
| Pricing control | **3/3** | API price increases 180%; embeddings jump from €800 to €4,200/month; three fine-tuned models incur new hosting fees. |
| Feature dependency | **3/3** | Chat, embeddings, recommendations, fraud detection, prompts and analytics rely on Vendor X's proprietary services and formats. |
| Migration cost | **3/3** | CTO estimate is €400,000 and six months, plus the €12,000 export tool. |
| **Total** | **15/15** | **Critical lock-in.** |

The most expensive dependency is not just one API: it is the missing abstraction and portability layer across the whole stack. The course case itself estimates that an initial two-week investment (€15,000) in an abstraction layer, standard formats and a written exit plan could have made individual vendor components replaceable instead of facing €400,000 and six months now.

## Part E — MCP: what it does and does not solve

MCP standardises how an AI application discovers and calls tools or accesses context exposed by an MCP server. It can reduce custom integration lock-in on the tool-connection layer, especially for BeneluxMarketing's Connect architecture.

MCP does **not** automatically make model weights portable, export a vendor's proprietary database, freeze prices, guarantee API uptime, or make two tools behave identically. The host application still needs authentication, authorisation, least-privilege permissions, validation, logging, rate limits and human approval for consequential write actions. In a freight system, reading a shipment status is lower risk than changing a booking or releasing a payment.

## Part F — My 90-day exit plan

| Period | Action | Evidence of completion |
|---|---|---|
| **First week** | Record actual cloud provider, model ID/version, endpoint, account tier, region and terms URL; preserve prompt v2, test set and all outputs; add a version field to every run. | Reproducible run manifest and completed terms checklist. |
| **First month** | Run the same ten inputs twice on a local open-weights model; compare field-level outcomes, latency and token counts; add a provider adapter and strict output schema; normalize weights with deterministic code. | Cloud/local comparison with raw outputs, plus regression tests for inputs 5, 8 and 9. |
| **First quarter** | Keep the local model warm; shadow-run on anonymised freight emails; use human review for ambiguous fields; rehearse switching the endpoint and restoring the cloud provider. | Documented switch procedure, approval thresholds and measured accuracy/latency/cost comparison. |

**Tripled-price answer today:** the prototype's prompt and test assets are portable, so the code migration should be small. I estimate 12–24 hours for adapter work, regression testing and review. This is a planning estimate, not a measurement. I cannot report the performance cost yet because the local-model comparison has not been run. Do not switch until the second model's field-level accuracy and failure profile have been measured.

## Sources reviewed (20 November 2026)

- Week 7 Journey Hub brief and rubric, supplied with this assignment.
- My repository: profile.md, passport.md, build/prompt.md, build/test-set.md, build/log.md and posts/week-06.md.
- OkiOki, supported accounting packages and UBL integration: https://support.okioki.be/hc/en-be/articles/4408173206417-Which-accounting-packages-does-OkiOki-integrate-with-and-how-does-she-do-it
- OkiOki, document archive downloads: https://support.okioki.be/hc/en-be/articles/4404524461329-How-can-I-download-my-documents
- OkiOki, pricing (accountant pricing is quote-based): https://www.okioki.be/en-be/prices
- Google Gemini API Additional Terms: https://ai.google.dev/gemini-api/terms
- Google Gemini deprecation schedule: https://ai.google.dev/gemini-api/docs/deprecations
- Ollama Qwen2.5 3B model page: https://ollama.com/library/qwen2.5:3b
- Ollama API introduction: https://github.com/ollama/ollama/blob/main/docs/api/introduction.mdx
