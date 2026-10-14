---
week: 4
title: "Evidence - Value Chain, Five-Criterion Filter and Top Three Candidates"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Value quantification"
date: 2026-10-13
---

# Week 4 Evidence: Value Chain and Candidates

**The company (composite):** a mid-sized Belgian importer of consumer goods and components from China. About 150 inbound shipments a month, about 300 standing counterparties, a two-person compliance and customs team, with customs declarations partly handled by an external broker. This is the same scenario as my Week 1 cost model and my capstone.

## 1. Value chain map

| # | Activity | What happens today | AI potential | Why |
|---|---|---|---|---|
| 1 | Supplier sourcing | Buyers find and compare Chinese suppliers, often with documents in Chinese | Maybe | Translation and summaries help; the decision stays commercial |
| 2 | Supplier onboarding and due diligence | Ownership checks, sanctions and adverse media checks before the first order | **Yes** | Text-heavy, repeated for every new supplier, checkable against lists |
| 3 | Purchase orders and contracts | Standard terms, occasional custom clauses | Maybe | Clause extraction is possible, but the volume is low |
| 4 | Shipping booking | Booking requests to forwarders, routing via ports and hubs | Maybe | Extraction works (see my test-set swap); routing points create origin confusion |
| 5 | Customs declaration | Supplier, origin, HS code and value per shipment, checked and filed with the broker | **Yes** | High volume, pattern-based, and every field is checkable against the document |
| 6 | Sanctions screening per shipment | Every party on every shipment, plus a monthly re-screen | **Yes** | My Build's job; high stakes, so only with guardrails |
| 7 | Regulatory monitoring | Tracking new EU sanctions packages, AI Act and CBAM changes | Maybe | Useful as alerts; dangerous as an answer (Week 2: invented citations) |
| 8 | CBAM reporting | Quarterly carbon reporting on covered goods (steel, aluminium) | No | Low frequency, a regulatory filing; a spreadsheet does it |
| 9 | Invoice processing and payment | Supplier invoices matched to orders and paid | Maybe | Standard AP automation; not specific to my beat |
| 10 | Sales and customer service | Selling to Belgian retailers | No | Outside the compliance function this case is about |

**Three picked from the map:** 2, 5 and 6, all in the compliance core, all high volume, all checkable against a document or list.

## 2. Five-criterion filter

Y = passes, P = partly, N = fails. The criteria come from the Week 4 page: repetitive, pattern-based, error-tolerant (can a human review it before it matters), cost-justifiable, verifiable.

| Candidate | Repetitive | Pattern | Error-tolerant | Cost-justifiable | Verifiable | Verdict |
|---|:-:|:-:|:-:|:-:|:-:|---|
| A. Sanctions screening, rules first plus AI flag | Y | Y | P | Y | Y | **Strong, with guardrails**: the AI may only add flags |
| B. Invoice field extraction for customs | Y | Y | Y | P | Y | **Strong**: every field is checked against the document |
| C. HS code suggestion | Y | Y | P | Y | P | **Good with review**: a wrong code means wrong duty, but the broker checks it |
| D. Origin and transshipment check | Y | P | N | Y | P | **Risky**: wrong origin can mean anti-dumping duty exposure; flag only |
| E. Adverse media on new suppliers | P | Y | Y | P | P | **Moderate**: onboarding volume only |
| F. Translating Chinese supplier documents | P | Y | Y | N | P | **Weak on cost**: low volume, cheap tools exist |
| G. Regulatory change alerts | Y | Y | Y | P | P | **Moderate**: alerts yes, answers no |
| H. CBAM report preparation | N | P | N | P | P | **No**: quarterly filing, use a spreadsheet |

## 3. Top three candidates

### A. Sanctions screening (rules first, AI as a second pair of eyes)
- **Repetitive:** about 1,500 checks a month (Week 1).
- **Pattern-based:** name matching across spellings and scripts is exactly what language models are good at.
- **Error-tolerant:** only if the AI can add a flag and never remove one; a human reviews every flag. On its own it fails this criterion (Week 2: 58% inconsistent).
- **Cost-justifiable:** manual screening costs about €81,000 a year, and one miss is assumed at €250,000.
- **Verifiable:** every flag is checked against the official EU list.
- **AI does:** pre-fills the parties and adds flags for cross-script name variants. **Human does:** decides every flag and owns the "clear".

### B. Invoice field extraction for customs
- **Repetitive:** every shipment, every day.
- **Pattern-based:** four fields from semi-structured text.
- **Error-tolerant:** the declaration is reviewed before filing.
- **Cost-justifiable:** partly; it saves typing, but the broker already does part of it.
- **Verifiable:** each field is checked against the source document (my Build's job statement).
- **AI does:** extracts supplier, origin, HS code and value, and says "not found" when a field is missing. **Human does:** checks before filing, and handles origin when routing points are involved.

### C. HS code suggestion
- **Repetitive:** every new product line.
- **Pattern-based:** product description to tariff code.
- **Error-tolerant:** partly; the broker reviews, but a wrong code changes the duty paid.
- **Cost-justifiable:** classification is slow expert work, and errors carry penalties.
- **Verifiable:** partly; against the EU tariff (TARIC) and binding tariff information, but some classifications need judgement.
- **AI does:** suggests a code with its reasoning and alternatives. **Human does:** confirms the code; nothing is filed on an AI suggestion alone.

**Carried forward:** A is the candidate I quantify in the benefit table and the memo. B is its input step. C is the next candidate if A works.
