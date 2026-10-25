---
week: 10
title: "Evidence - Capstone Checkpoint 3: Evidence Check Against the Seven Criteria"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Regulatory reasoning"
date: 2026-10-14
---

# Capstone Checkpoint 3: What I Can Cite, and What Is Missing

Scenario (locked in Week 4): a ~150-employee Antwerp importer of Chinese electronic components decides whether to pilot rules-first sanctions screening with AI as a second pair of eyes.

| Criterion | Weight | Evidence I have (citeable) | The gap |
|---|---:|---|---|
| Value reasoning | 20% | Manual cost €81,000/yr (18,000 × 6 min × €45; salary: ERI). Fine range from a real Antwerp case: €50,000 / €250,000 / €500,000 (Week 4). Year 2+ saving €10,538–€28,520, payback 9.8–26.4 months, break-even at 35.2% errors (Week 8). Measured accuracy: 100% on n = 24 own runs, 77.8% on n = 36 unseen runs (Build Runs 3–4). The "no AI" option: rule-based matching first (Week 2) | **6 minutes per check** and the **70/30 routing split** are still my estimates; no practitioner has confirmed them (Week 4 interview: no reply). The "no AI" option is argued but not costed side by side with the design |
| Modality fit | 15% | Week 2: rule-based fuzzy matching beats an LLM for list lookup; AI only for reading invoices and cross-script names. Week 7: a local 3B model scored 13.9% vs 77.8% for the cloud model on unseen inputs. Week 8: list matching bought, not built | Not compared with non-generative document extraction (classic OCR or templates); that alternative is not measured |
| Cost awareness | 15% | Measured: €0.0020 per check (60 calls, 652.6 in / 90.5 out tokens). Scale table 10 → 100,000 checks/day (Week 6); 3× growth (Week 8). Provider comparison: Gemini 3 Flash 20/24 (83.3%, n = 24; updated 25 Oct 2026), list prices (Week 7). Hidden costs: integration, maintenance, training, security €4,515, compliance €1,800; year-1 system €38,775 (est.). Error cost and who pays: €4.50 per redo, analyst | Prompt v2 not run on Gemini, so the provider comparison is on v1 only |
| Security review | 15% | 10 markers across all four threats, top 3 justified (Week 9). 20 attack runs, committed before running: 0/10 worked on Sonnet 5.5, 4/10 on llama3.2, including one sanctioned bank cleared. Mitigations €4,515 with residual risk. Three incident briefs | The first fix (strictest-of rule) is designed but **not built and re-tested**. The screening service's fuzzy match is untested. Practitioner view requested 14 Oct, no reply yet |
| Governance assessment | 15% | Minimal risk, with Annex III checked point by point (points 6 and 7 scoped to public authorities). GDPR: legitimate interest, Art. 22 tied to a real human check, rights, impact assessment. Compliance cost €1,800. Vendor terms read (Week 7) | Practice: how a federation or DPO actually classifies (Voka question not sent yet). Whether the Omnibus changed AI literacy (Art. 4): unchecked. Legal rate €150/hr (est.) unsourced |
| Integration fit | 10% | Five-layer design on Microsoft 365 + ERP, buy vs build explicit, fallback to the manual queue, lock-in 5/15, exit cost €1,258, exit target Gemini (Weeks 7–8) | The importer is a composite: its real systems are assumed. No practitioner has broken the design yet (Week 8 6 ECTS, after class on 23 Nov) |
| Discovery strategy | 10% | Week 5: GEO audit of a Belgian customs broker, 9/18. In a live query, three AI assistants named none of the brokers that handle my customs and invented firms ("KTL Customs BV", "FG Customs BV") | **The emptiest row.** Week 5 is about the broker, not my importer. Missing: what AI-mediated discovery means for this importer, for example a buyer asking an AI "which screening vendor?" and getting invented firms, and concrete tactics |

**Read-out:** no empty rows. Security and governance are the fullest, as they should be. The weakest rows are **discovery** (one week old and not yet applied to the capstone company) and **value reasoning** (two load-bearing estimates still unconfirmed). Five actions:

1. Write a discovery paragraph for the importer (Week 11 or 12).
2. Build and re-test the strictest-of fix.
3. Run prompt v2 on Gemini (the 24 v1 runs are complete since 25 Oct).
4. Send the Voka question.
5. Chase one practitioner for the 6-minute figure.

Traffic light (self): **amber**.

---

*AI disclosure: I used Claude to collect the figures from my own evidence files and structure the table; the gaps and the traffic light are my assessment.*
