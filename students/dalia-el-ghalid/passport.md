# Skills Passport

## Checkpoint 1 (Week 4)

### Build Summary
* **What can your tool do now?** It transforms messy lecture slide text into a 3-part structured Exam Cheat Sheet (Executive Summary, Key Definitions Table, and flagged Incomplete Concepts).
* **What can't it do yet?** It cannot guarantee 100% adherence to zero-external-knowledge constraints, occasionally using general web facts when a slide term lacks a definition.
* **Which number proves it?** Measured 80% pass rate across 10 double-run test inputs (8/10 passes, 2/10 F2 Fabrication failures).

---

### Skills Self-Assessment

* **Cost Literacy:** 🟢
  * *Evidence:* Built a supply chain replenishment cost model comparing token costs (€1,242/mo) vs. operational error risks (€225,000/mo) in Week 1.
* **Capability Skepticism:** 🟢
  * *Evidence:* Built a 5-input test set for an Exam Cheat Sheet generator and identified an F2 Fabrication failure on Input 3 during double-run testing in Week 2.
* **Vendor Claim Detection:** 🟢
  * *Evidence:* Deconstructed Cognii’s ed-tech claims into Facts, Aspirations, and Avoidances using the 5-Question FOMO Framework in Week 3.
* **Value Quantification:** 🟢
  * *Evidence:* Calculated a net benefit of €17,880 across a 100-student cohort for my study coach build, accounting for token costs, setup, and F2 error verification penalties.

# Skills Passport — Dalia El Ghalid

## Checkpoint 2 — Build Status (Week 8)
- **What can my tool do now?** Extract key definitions, formulas, and exam practice questions from 40+ slide lecture decks with mandatory `[Slide X]` citations and explicit `[NOT IN SLIDES]` flags at 95% verified accuracy.
- **What can't it do yet?** Read formulas or charts embedded inside non-selectable screenshot images on slides without running an OCR step first (accounting for 4 of my 5 remaining errors).
- **Which number proves it?** Re-measuring on the same 10-deck test set reduced my error rate from **12% (88% accuracy, 7 F2 fabrications)** in Week 4 to **5% (95% accuracy, 1 F2 fabrication)** at **€0.0088 per deck** (*AI Pricing Reference, 7 September 2026*).

---

## Checkpoint 2 — Eight-Skill Self-Assessment (and Re-Rated Checkpoint 1)

| Skill | Week | Checkpoint 1 (Re-rated) | Checkpoint 2 (Week 8) | Evidence (Week 8) |
| :--- | :---: | :---: | :---: | :--- |
| **Cost literacy** | 1 | 🟢 | 🟢 | Calculated exact input/output token spend (€0.0088/deck) and human QA cleanup costs for my Build and my Signal Post 8 architecture using the September 7, 2026 AI Pricing Reference. |
| **Capability skepticism** | 2 | 🟡 | 🟢 | Replaced LLM synthesis with a deterministic rule-based heading/keyword fallback during peak-week API timeouts and identified that image-embedded slide formulas need OCR rather than better prompting. |
| **Vendor claim detection** | 3 | 🟡 | 🟢 | Rejected licensing Microsoft 365 Copilot (€880K+/year across 2,400 students and 45 staff) after verifying it cannot enforce slide-citation rules or query a legacy no-API PostgreSQL database. |
| **Value quantification** | 4 | 🟡 | 🟢 | Quantified that adding `[Slide X]` citations raised API token cost by €0.0007/deck while cutting student/tutor verification time by €0.43/deck, delivering positive net savings at scale. |
| **Market mechanism thinking** | 5 | 🔴 | 🟡 | Accounted for how higher-education students increasingly bypass static LMS portals for AI study tools, designing embedded Canvas/Teams LTI delivery with tutor-verified exam packs to retain trust. |
| **Cost projection** | 6 | — | 🟢 | Modeled Month 1, Month 6, and Month 12 run costs at 1× and 3× exam-week volumes (3,600 decks/day), proving human QA review—not API tokens—drives unit economics. |
| **Lock-in detection** | 7 | — | 🟢 | Marked vendor lock-in points in my architecture and wrapped inference in an OpenAI-compatible JSON router so swapping between Gemini, Claude, or Mistral takes under 6 hours. |
| **Design defense** | 8 | — | 🟢 | Designed and defended a complete five-layer AI integration architecture in class (Northwind Logistics) and in Signal Post 8 (StudieKompas Vlaanderen) with matching cost models and board Q&As. |

---

## Reflection (Checkpoint 2)

Looking back at Week 1, I thought building with AI meant finding the smartest model and writing a clever prompt. Today, I think like an architect: the model itself is usually the cheapest and easiest box in the diagram, while real business value depends on how safely data flows in, how cheaply humans catch its predictable errors, and what happens the moment the API goes down.
