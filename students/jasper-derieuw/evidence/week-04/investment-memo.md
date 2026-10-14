---
week: 4
title: "Evidence - One-Page Investment Memo: Sanctions Screening (draft v1, before peer review)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Value quantification"
date: 2026-10-11
---

# Investment Memo

**To:** Chief Financial Officer · **From:** Jasper Derieuw, compliance analyst (student) · **Date:** 11 October 2026 (draft v1, before peer review)
**Subject:** A 3-month pilot of rules-first sanctions screening with AI as a second check

**Executive summary.** I recommend a 3-month pilot of a sanctions screening set-up in which fixed rules decide and AI may only add warnings, at a one-time cost of €23,000 (est.) and €19,667 a year to run (est.). At my measured figures it returns €82,033 a year from year 2 and pays back in 3.4 months; the AI tool I built and tested on its own would *lose* about €358,000 a year, so the design choice matters more than the technology.

**The problem.** We screen every party on every shipment against EU sanctions lists: 1,500 checks a month (Week 1 scenario). Done by hand at 6 minutes per check (est.) and €45/hr loaded (€51,547 salary × 1.4 ÷ 1,600 h), that costs **€81,000 a year**, about 1.1 FTE. The expensive risk is not the time but a miss: one cleared sanctioned party is assumed to cost €250,000 (est.) in fines and legal costs, and names in Chinese script are where manual and simple string matching fail most.

**The proposal.** A deterministic match against the free EU consolidated list decides "clear". AI does two things only: it pre-fills the invoice fields, and it adds a "needs review" flag when it sees a cross-script or near-duplicate name the rules miss. It can never remove a flag, so it cannot create a new miss. An analyst reviews every flag and owns every "clear"; implementation by an external developer plus integration with our document intake.

| Category | Basis (formula) | €/yr |
|---|---|---:|
| Time saved | 18,000 checks × (6 − 2) min × €45/60 | 54,000 |
| Revenue | No revenue effect for an importer's screening step (est.) | 0 |
| Cost reduction | 720 false positives × 5 min saved × €45/60 | 2,700 |
| Risk reduction | 0.72 misses/yr × €250,000 × 25% (est.: half of misses cross-script × 50% measured AI catch) | 45,000 |
| **Gross benefit** | | **101,700** |
| Running AI cost | Tokens €166 + maintenance €6,000 + error correction €5,063 + extra AI flags €8,438 | −19,667 |
| One-time, year 1 | Build €15,000 + integration €8,000 (course defaults) | −23,000 |
| **Net benefit** | Year 1 / year 2+ | **59,033 / 82,033** |
| **Payback** | €23,000 ÷ (€82,033 ÷ 12) | **3.4 months** |

**Risks and mitigations.** (1) *Inconsistent or invented output:* my own tool gave a different answer on 58% of inputs across two identical runs and once invented a supplier name (Week 2), so it never decides; it only adds flags, and every flag is checked against the official list. (2) *Vendor claims replacing measurement:* screening vendors advertise automation rates they would not source for me (Week 3), so the pilot is measured on our own invoices against our own baseline. (3) *Routing points mistaken for origin:* the tool confused transshipment ports with the country of origin (Week 2 extension), so origin stays a human field.

**Recommendation.** Pilot for 3 months on all China shipments, with go/no-go conditions: no missed match in the pilot, and the analyst's time per check at or below 2 minutes. If either fails, stop; the €23,000 one-time cost is the maximum loss.

**Sensitivity.** If every estimate is 50% too optimistic (benefits halved, costs +50%), the case still returns €21,350 a year with a 19-month payback. Without the risk line at all, it still returns €37,033 a year, so the decision does not rest on the €250,000 assumption, my weakest number.
