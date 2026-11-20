# Week 7 Submission — Janis Krainis

**Course:** Advanced AI in Business — 4 ECTS  
**Student:** Janis Krainis  
**Date:** 20 November 2026  
**Beat:** AI and Communication Automation in European Freight Forwarding  
**Project context:** Email extraction prototype for freight-forwarding operations connected to upcoming internship at Drewes.

## Submission contents

1. Signal Post 7 (400–600 words).
2. Lock-in analysis of my own Build and vendor terms.
3. GhentAccounting Scenario 2 recommendation (Build / Buy / Connect).
4. Five-dimension 0–3 scorecards and migration plan.
5. Architecture diagrams for FlandersBio, GhentAccounting and BeneluxMarketing.
6. OmniRetail composite-case lock-in point table.
7. MCP understanding check.
8. Cloud-vs-local model comparison, with illustrative local data clearly marked as simulated.
9. Recorded Pitch 1 script.

> **Important evidence note:** The original cloud benchmark figures below are from my existing Build log. The local benchmark results in Part C are simulated examples, not measurements from a Mac run. They are included to show the format and analysis; replace them with the actual output from the benchmark script before presenting them as experimental findings.



# Part 1 — Signal Post 7

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


---

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


---

# Part C — Second-model comparison: cloud baseline vs local Qwen2.5 3B

> **SIMULATED EXAMPLE — NOT AN ACTUAL RUN.** The local figures below are plausible illustrative data to show how a completed comparison should be presented. Qwen2.5 3B has not been executed on Janis's Mac as part of this work. Replace this entire subsection with the output from \`benchmark_local.py\` before claiming it as measured evidence.

## C1. Test design

The same ten synthetic freight messages are evaluated twice with a local model using the same extraction instructions and the same expected outputs as the original Build. The selected candidate is Qwen2.5 3B through Ollama, using the local \`localhost:11434/api/chat\` endpoint. The proposed run uses temperature 0.2 and two seeds (41 and 42). The evaluation checks all four fields: Origin, Destination, Weight and Cargo Type. It treats a weight as correct only when it is explicitly normalized to a numeric kilogram value; “about two tons” is not accepted as a final normalized field.

Qwen2.5 3B is a small multilingual model that can run locally on a MacBook Air M2, but its licence is the Qwen Research License rather than Apache 2.0. This makes it appropriate as a controlled coursework experiment only after checking the licence; it should not automatically be selected for commercial use.

## C2. Illustrative local results

| Metric | Cloud Build, recorded | Local Qwen2.5 3B, simulated |
|---|---:|---:|
| Run 1 exact case passes | 8/10 (80%) | 7/10 (70%) |
| Run 2 exact case passes | 9/10 (90%) | 8/10 (80%) |
| Total output-level passes | 17/20 (85%) | 15/20 (75%) |
| Cases passing both runs | 8/10 (80%) | 7/10 (70%) |
| Field-level matches | Not separately counted in original log | 75/80 (93.75%) |
| Mean response latency | Not recorded | 2.3 s in Run 1; 2.1 s in Run 2 |
| Prompt tokens | Not recorded for the entire benchmark | 2,980 in Run 1; 2,982 in Run 2 |
| Completion tokens | Not recorded for the entire benchmark | 584 in Run 1; 597 in Run 2 |
| Model API charge | Not recoverable from original run log | €0 for local inference; electricity and hardware excluded |

The simulated local result is 75% at case level, ten percentage points below the recorded cloud output-level pass rate of 85%. It is not evidence that the hosted model is inherently better: the two systems are not fully comparable until the original cloud model ID, endpoint and settings are recovered and both systems are run from a controlled benchmark harness.

## C3. Illustrative per-input outcome table

| Input | Run 1 | Run 2 | Illustrative failure explanation |
|---:|---|---|---|
| 1 — Antwerp to Vienna | PASS | PASS | All four fields match. |
| 2 — Rotterdam to Milan | PASS | PASS | All four fields match. |
| 3 — Marseille to Hamburg (French) | FAIL | PASS | Run 1 outputs “Hambourg” rather than the expected normalized English city “Hamburg”; Run 2 returns Hamburg. |
| 4 — Bilbao to Prague | PASS | PASS | All four fields match. |
| 5 — Missing weight | PASS | PASS | Correctly returns “Not specified”; no weight is fabricated. |
| 6 — Structured booking form | PASS | PASS | Correctly extracts all four fields. |
| 7 — Metric tons | PASS | PASS | Correctly converts 24 metric tons to 24,000 kg. |
| 8 — Conversational weight | FAIL | FAIL | Run 1 returns “about 2,000 kg”; Run 2 returns “2 tonnes”. Both fail the strict numeric-kg output contract. |
| 9 — Valencia / Madrid multi-leg | FAIL | FAIL | Both runs select Madrid as the current hub but omit the Valencia supplier context required by the expected output. |
| 10 — Incomplete fragment | PASS | PASS | Correctly leaves origin and weight as “Not specified”. |

This produces 15 passing outputs out of 20. Three outputs fail in Run 1 (inputs 3, 8 and 9); two fail in Run 2 (inputs 8 and 9). Seven inputs pass in both runs. Five individual field mismatches occur across 80 evaluated fields, which gives 93.75% field-level agreement even though exact-case success is 75%. This difference shows why field-level accuracy and full-record accuracy should both be reported.

## C4. Failure comparison

The original cloud log shows two failure patterns: inconsistent normalization of “about two tons” on input 8, and loss of the Valencia supplier context on input 9. The illustrative local run repeats both. The local model also makes one additional multilingual normalization error on input 3, returning the French place spelling “Hambourg” in one run rather than the expected “Hamburg”.

The missing-weight safeguard is a relative strength in this scenario: input 5 passes in both simulated local runs. That is important because inventing a pharmaceutical shipment's weight is more serious than a city-name formatting mismatch. In a real deployment, critical fields should have different validation rules and risk weights rather than relying only on one overall accuracy percentage.

## C5. Cost comparison

The local model's inference API charge is €0 because Ollama runs the model on the local computer. This does **not** mean the model has no cost: electricity, hardware depreciation, setup, updates and maintenance are excluded.

The exact cost of the original twenty cloud calls is not recoverable from the existing Build log. Week 6 contains a separate modelled unit cost of approximately €0.00478 per call under its stated token assumptions. Applying that projection to twenty calls would produce approximately €0.096, but this is a projection using the Week 6 pricing reference—not an observed invoice for the original benchmark. The Week 6 post mentions a Gemini Flash initial test and later cites a different pricing reference, so the cost should not be presented as a verified provider comparison.

## C6. Where the data went

**Cloud baseline:** the ten synthetic test messages were sent to a hosted model API. The project records do not identify the exact provider/model endpoint for every run. Therefore, the processing region, retention period and data-handling terms cannot be assigned confidently to all twenty requests. These were synthetic messages, not real Drewes customer correspondence. Before sending operational emails, the actual endpoint and account tier must be identified and checked against the provider terms and company policy.

**Local Ollama setup:** with the local model tag \`qwen2.5:3b\` and endpoint \`http://localhost:11434/api/chat\`, inference runs on the Mac. The model weights are downloaded from the Ollama registry, but message prompts are sent to the local Ollama process. This statement assumes the local model is used and Ollama cloud features are not enabled. Ollama's published privacy policy states that prompts and responses processed locally are not collected or transmitted by Ollama.

## C7. What this comparison would mean

If these illustrative outcomes were confirmed in a real run, the local model would offer a strong data-control advantage and no per-call API charge, but would perform worse on exact case success than the cloud baseline. The decision would not be “local is free, therefore local wins”. The better architecture would retain the ability to switch models, use deterministic unit conversion and schema validation, and route ambiguous multi-leg messages to a person. A model should not be allowed to choose silently when a current transit hub and a supplier origin are both present.

**Evidence status:** all local rates, token counts, latencies and per-input outputs in C2–C5 are simulated. The cloud figures are taken from the existing Build log. The comparison becomes empirical only after the local benchmark script has been executed and the generated raw outputs have been inspected.

## C8. Reproducible local run

~~~bash
ollama pull qwen2.5:3b
python3 students/janis-krainis/build/benchmark_local.py --model qwen2.5:3b
~~~

The script writes \`local-benchmark-results.md\` and \`local-benchmark-results.json\` into the Build directory. Replace the simulated tables and explanations above with those actual outputs before calling the comparison measured.


---

# Recorded Pitch 1 — 3-minute script

**Direction:** Controlled pilot of freight-email extraction with a replaceable model and human approval.

### 0:00–0:15 — Recommendation

I recommend that freight-forwarding operations test AI email extraction in a limited, human-in-the-loop pilot, rather than automate bookings or shipment decisions immediately. The model should be replaceable; the workflow and validation rules should stay under the company's control.

### 0:15–1:10 — What I am recommending and why

My project focuses on a bottleneck in European freight forwarding: transport requests arrive through emails and staff repeatedly identify key details before moving work into operational systems. My prototype extracts four fields—origin, destination, weight and cargo type—from a message.

I would buy the basic model capability through an API rather than build a model from scratch. This is a commodity extraction task, not the core competitive advantage of a forwarding company. But I would not buy an entire proprietary workflow and let the provider own the business rules. I would keep a standard output schema, deterministic validation, audit records and an exception queue outside the model provider. Missing or ambiguous information should be sent to a person, not guessed.

### 1:10–2:05 — The number that turns the recommendation

The current prototype passed 17 of 20 recorded outputs, or 85%, across ten synthetic test messages run twice. Only eight of the ten test cases passed in both runs. The most useful failures were not random: one conversational weight was represented inconsistently, and one multi-leg shipment lost the original supplier context.

That 85% is the one number I would use to explain why I am recommending a pilot rather than deployment. It comes from my Build log, not a vendor benchmark. I have low confidence that it predicts real operational accuracy because the sample contains only ten synthetic emails and does not represent the full range of customer formats, attachments or operational edge cases. I would set a higher critical-field acceptance threshold before any live rollout; that threshold must be agreed with the operational team and tested on a representative, anonymised sample.

### 2:05–2:45 — What I still need to find out

First, I need to rerun the same ten cases twice on a local open-weights model and compare not just the pass rate but how the failures differ. Second, my current cloud log does not record the exact model ID and endpoint for every run, so I need to identify the provider, account tier and applicable terms before making a reliable statement about data retention, price changes or switching cost. Third, I need to test the extraction on representative freight emails with human-reviewed expected answers.

### 2:45–3:00 — Close

My recommendation is a controlled pilot, not autonomous booking. The success condition is not a clever prompt; it is accurate fields, predictable failure handling and an exit path that lets the company replace the model without rebuilding the forwarding workflow.
