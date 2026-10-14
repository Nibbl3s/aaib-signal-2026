---
week: 9
title: "Evidence - Mitigation Table for My Top Attack Surfaces (6 ECTS)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Attack surface thinking"
date: 2026-10-14
---

# Mitigations: Cost, Residual Risk, Worth It?

For every surface rated Medium or High in my [security review](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-09/security-review.md). Rates: developer €63/hr, analyst €45/hr (Week 4); residual risk is likelihood × impact after the mitigation, on the same 1–5 scales.

| Surface (score now) | Mitigation | Cost, year 1 | Residual (L × I) | Worth it? |
|---|---|---|---|---|
| **CW-1** Rubber-stamp H1 (16) | Each H1 row shows the invoice line every field was copied from; invoices naming 2+ countries go to H2; keep the monthly re-check of 30 cleared invoices | €378 build (6 h × €63, est.) + €2,700 extra H2 time (5% of 18,000 invoices (est.) × 4 extra min × €0.75) = **€3,078** | 3 × 4 = **12**, Medium | Yes: it is the last line behind every other surface. Residual stays Medium because a person can still skim; my fablab probe measures how much a deliberate check catches compared with a stamp |
| **DL-1** Personal data to the API (15) | Data processing agreement with transfer safeguards, checked before go-live; record the processing in the company's register | Legal review 4 h × €150/hr (est.) + analyst 2 h × €45 = **€690** | 5 × 1 = **5**, Low | Yes: a go-live blocker. The data still flows, but lawfully |
| **SA-1** Free chatbot during backlog (12) | One-page AI usage policy naming the approved tool; 30-minute briefing; keep the fallback queue fast enough that nobody needs a shortcut | Policy 4 h × €45 + briefing 2 × 0.5 h × €45 = **€225** | 3 × 3 = **9**, Medium | Yes, but the cheapest fix leaves the most residual: a policy depends on people at month-end |
| **CW-2** Confident wrong origin (12) | Covered by CW-1 (2+ countries → H2); prompt v3 asks for the source line of the origin | €0 extra (inside CW-1 and the v3 work) | 2 × 4 = **8**, Medium | Yes, at no extra cost |
| **PI-2** Injection on a near-match (10) | Script takes the strictest of screening match, AI flag and routing rules; a non-JSON answer → H2; invoices with instruction-like text ("ignore", "screening system", "set flag", "must return") → H2 | 2 × (2 h × €63) = **€252** | 1 × 5 = **5**, Low | Yes: the cheapest fix for the only damage that cannot be undone |
| **PI-3** Model switch reopens injection (10) | Add the 5 attacks to the monthly re-test; "0 of 10 attacks work" is a condition before any model switch | 10 calls × €0.0020 × 12 + 0.5 h × €45 × 12 = **€270** | 1 × 5 = **5**, Low | Yes: it keeps the Week 7 exit plan safe |
| **DL-2** Supplier names to the screening vendor (10) | Ask the vendor for its processing terms and export format before signing (asked Verifex on 14 Oct; no reply yet) | **€0** | 5 × 2 = **10**, Medium until they answer | Yes: costs nothing; the reply or the silence decides the vendor |

**Total, year 1: €4,515.** That fits inside the €4,869 contingency of my Week 8 cost model, so the security work does not change the budget, only what the contingency is for.

**What stays Medium after mitigation:** CW-1 (12), DL-2 (10), SA-1 (9) and CW-2 (8). Three of the four depend on people or on a vendor's answer, not on code. That is the ranking I will test with a practitioner: which of these would they lose sleep over?

---

*AI disclosure: I used Claude to structure the table and check the arithmetic; the mitigations, the estimates marked (est.) and the residual ratings are mine.*
