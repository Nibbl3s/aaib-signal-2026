---
week: 10
title: "Evidence - Capstone Checkpoint 3: Evidence Check Against the Seven Criteria"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Regulatory reasoning"
date: 2026-11-16
---

# Capstone Checkpoint 3: What I Can Cite, and What Is Missing

Scenario (locked in Week 4): a ~150-employee Antwerp importer of Chinese electronic components decides whether to pilot rules-first sanctions screening with AI as a second pair of eyes. First drafted 14 October 2026; updated 16 November 2026.

| Criterion | Weight | Evidence I have (citeable) | The gap |
|---|---:|---|---|
| Value reasoning | 20% | Manual cost €81,000/yr (18,000 × 6 min × €45; salary: ERI). Fine range €50,000 / €250,000 / €500,000 (Week 4). Year 2+ saving €10,538–€28,520, payback 9.8–26.4 months, break-even at 35.2% errors (Week 8). Measured accuracy: 100% on n = 24 own runs, 77.8% on n = 36 unseen runs (Build Runs 3–4). **Second break-even from the practitioner review: the 2-minute check may take 3.1–5.0 minutes before the saving is gone (Week 8, 6 ECTS).** The "no AI" option: rule-based matching first (Week 2) | **6 minutes per check, the 70/30 split and now the 2-minute H1 time are estimates**; a customs specialist put H1 at "five or ten minutes" (opinion, not measured). My fablab review test (18 Nov) is the first measurement. The "no AI" option is not costed side by side |
| Modality fit | 15% | Week 2: rule-based fuzzy matching beats an LLM for list lookup; AI only for reading invoices and cross-script names. Week 7: a local 3B model scored 13.9% vs 77.8% for the cloud model on unseen inputs. Week 8: list matching bought, not built | Not compared with non-generative document extraction (classic OCR or templates); that alternative is not measured |
| Cost awareness | 15% | Measured: €0.0020 per check (60 calls). Scale 10 → 100,000 checks/day (Week 6); 3× growth (Week 8). Provider comparison: Gemini 3 Flash 20/24 (83.3%, n = 24). Hidden costs: integration, maintenance, training, **security €4,947 (after practitioner input), compliance €1,800; year-1 system €39,207 (est.)**. Error cost and who pays: €4.50 per redo, analyst | Provider comparison on prompt v1 only. **Not costed: the specialist (H3), enhanced screening with ownership data, re-screening volume, supplier onboarding and audit support (named by the customs specialist)** |
| Security review | 15% | 10 markers, top 3 justified (Week 9). 20 attack runs committed before running: 0/10 on Sonnet 5.5, 4/10 on llama3.2. **Advisory memo with two practitioners: an IT professional (reply dated 24 Oct) and a customs specialist (16 Nov); revised order, a new surface (access rights), €4,947.** Three incident briefs | The first fix (strictest-of rule) is designed but **not built and re-tested**. The screening service's fuzzy match is untested |
| Governance assessment | 15% | Minimal risk, Annex III checked point by point (points 6 and 7 scoped to public authorities). GDPR: legitimate interest, Art. 22 tied to a real human check, rights, impact assessment. Compliance cost €1,800. **Practice: Voka asked 14 Oct, reminder 16 Nov, silent. A trade-compliance specialist at a large international company (16 Nov): classification is done jointly by Legal/Compliance and IT/Data Governance with the tool's business owner, on an internal intake checklist, with external counsel before go-live for anything touching customs, sanctions or personal data; when unclear, "we design and document it as if it were high-risk until the classification is confirmed"** | Whether the Omnibus changed AI literacy (Art. 4): checked in the RIA. Legal rate €150/hr (est.) unsourced. External counsel, which the practitioner's company uses for this kind of tool, is not in my €1,800 |
| Integration fit | 10% | Five-layer design on Microsoft 365 + ERP, buy vs build, fallback, lock-in 5/15, exit €1,258 (Weeks 7–8). **Design broken by a customs specialist on 16 Nov: eight changes (P1–P8), including conflicting origins → manual check, product-risk routing, re-screening before payment** | The importer is a composite. **The revised design is not yet fully costed or re-tested** |
| Discovery strategy | 10% | Week 5: GEO audit of a Belgian customs broker, 9/18. In a live query, three AI assistants named none of the brokers that handle my customs and invented firms ("KTL Customs BV", "FG Customs BV") | **The emptiest row.** Week 5 is about the broker, not my importer. Missing: what AI-mediated discovery means for this importer, for example a buyer asking an AI "which screening vendor?" and getting invented firms, and concrete tactics |

**Read-out (updated 16 Nov 2026):** no empty rows. Security and governance are the fullest; both now carry practitioner evidence. The weakest rows are still **discovery** and **value reasoning**, and value reasoning gained a second load-bearing estimate: the time of the 2-minute check. Five actions:

1. Measure the check time in the fablab review test (18 Nov).
2. Write a discovery paragraph for the importer (Week 11 or 12).
3. Build and re-test the strictest-of fix.
4. Cost the revised design (specialist, enhanced screening).
5. Run prompt v2 on Gemini.

Traffic light (self): **amber**.

---

*AI disclosure: I used Claude to collect the figures from my own evidence files and structure the table; the gaps and the traffic light are my assessment, and the practitioner's answers are quoted from their messages.*
