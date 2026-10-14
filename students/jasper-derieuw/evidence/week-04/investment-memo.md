---
week: 4
title: "Evidence - One-Page Investment Memo: Sanctions Screening (v2, after peer review)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Value quantification"
date: 2026-10-14
---

# Investment Memo

**To:** Head of Compliance (budget sign-off: CFO) · **From:** Jasper Derieuw · **Date:** 14 October 2026 (v2, after peer review)
**Subject:** A 3-month pilot of rules-first sanctions screening with a human fallback

**Executive summary.** I recommend a 3-month pilot in which fixed rules decide, AI only pre-fills and adds warnings on clean invoices, and every risky invoice type stays with a human: €23,000 one-time (est.), returning about €19,800 a year (payback 14 months) without relying on any fine estimate. If the pilot shows the AI flags risky names reliably, extending it to all invoices raises the return to €37,000–€127,000 a year.

**The problem.** We screen every party on every shipment against EU sanctions lists: 1,500 checks a month (Week 1 scenario). By hand, at 6 minutes per check (est.) and €45/hr loaded (€51,547 × 1.4 ÷ 1,600 h), that costs €81,000 a year, about 1.1 FTE. The real risk is a miss: in a recent Antwerp case, companies paid €50,000 effective fines and a customs broker received a €500,000 fine, and EU law now allows up to €40M.

**The proposal.** A rule-based match against the free EU consolidated list decides "clear". A second rule routes the risky invoice types (non-Latin names, name variants, unreadable documents, unclear origin: about 30%, est.) straight to a human. On the clean 70% the AI pre-fills the fields and may add a warning, never remove one, and an analyst checks each result in about 2 minutes (est.).

| Category | Basis | €/yr |
|---|---|---:|
| Time saved | 12,600 clean invoices × 4 min × €45/60 | 37,800 |
| Revenue | No revenue effect | 0 |
| Cost reduction | False-positive reviews unchanged | 0 |
| Risk reduction | Risky types stay with a human (no worse than today) | 0 |
| **Gross benefit** | | **37,800** |
| AI cost, running | Redo of AI errors €11,907 + tokens €116 + maintenance €6,000 | −18,023 |
| AI cost, one-time (year 1) | Build €15,000 + integration €8,000 | −23,000 |
| **Net** | Year 1 / year 2+ | **−3,223 / 19,777** |
| **Payback** | €23,000 ÷ (€19,777 ÷ 12) | **14 months** |

**Risks and mitigations.** (1) *Inconsistent or invented output:* my own tool changed its answer on 58% of inputs and once invented a supplier (Week 2), so the AI never decides and risky types never reach it. (2) *Vendor claims instead of measurement:* screening vendors would not source their automation rates for me (Week 3), so the pilot is measured on our own invoices against our own baseline. (3) *Thin margin:* if my estimates are wrong, routing shrinks the savings, so the pilot has hard stop conditions.

**Recommendation.** Pilot for 3 months, with the AI also running in shadow mode (logged, not used) on the risky invoices. Go on only if at least 60% of invoices are clean, a clean check takes 3 minutes or less, and there are zero missed matches; otherwise stop, and the €23,000 is the maximum loss.

**Sensitivity.** If my estimates are 50% too optimistic, this pilot version loses about €8,100 a year, which is why the stop conditions matter more than the forecast. The full design still returns €21,350 a year in that case, but only if the shadow test proves the AI's flags work.

**What I still don't know (est.):** the real share of risky invoice types, the real minutes per check (practitioner asked on 11 October, no reply yet), and whether a screening tool is already paid for.

*AI disclosure: I used Claude to draft this memo from my business case and to check the arithmetic; the recommendation and the stop conditions are mine.*
