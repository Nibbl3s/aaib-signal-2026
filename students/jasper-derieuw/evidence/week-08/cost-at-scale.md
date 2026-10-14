---
week: 8
title: "Evidence - Cost at Scale: Year 1 and Months 1, 6 and 12"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cost projection"
date: 2026-10-14
---

# Cost at Scale: the Importer Design

Every line below is a box in the [architecture sketch](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/architecture.md), and every box in the sketch has a line here (Section 4).

## 0. Inputs

| Input | Value | Source |
|---|---|---|
| Volume | 1,500 checks a month, 18,000 a year; 71 a business day (1,500 ÷ 21) | Capstone scenario (Week 4) |
| Token cost per check | **€0.0020**: (652.6 × $2 + 90.5 × $10) ÷ 1,000,000 × 0.92 | Averages of all 60 prompt-v2 calls on Claude Sonnet 5.5, own set + both swap sets (Build log, Runs 3 and 4); price: course AI Pricing Reference, 7 Sep 2026, rate as for Sonnet 5 |
| Analyst rate | €45/hr = €0.75/min | €51,547 × 1.4 ÷ 1,600 h (Week 4) |
| Routing split | 70% to H1 (2 min), 30% to H2 (6 min) | Week 4 invoice-pattern mix (est.) |
| AI error rate | 0% to 22.2% | 0 of 24 wrong on my own set (Run 3); 8 of 36 on unseen inputs (Run 4) |
| Cost of one AI error | €4.50 | 6-minute redo × €0.75 |
| Today, fully manual | €81,000 a year, €6,750 a month, €4.50 a check | 18,000 × 6 min × €0.75 |

## 1. Year 1

| Category | Formula | € |
|---|---|---:|
| AI API | 18,000 × €0.0020 + re-test 60 calls × 12 months × €0.0020 | 38 |
| Integration development | 365 h × €63/hr (€15,000 build + €8,000 mailbox integration; course default, Week 4) | 23,000 |
| Infrastructure and running | Screening service 2 seats × €45.08 × 12 = €1,082 (Verifex Starter, Week 6; est. for 2 seats) + maintenance €6,000 (course default) + Microsoft 365 €0 (already paid) | 7,082 |
| Governance | Monthly re-test 1 h + monthly sample of 30 cleared invoices × 6 min = 4 h a month × 12 × €45 | 2,160 |
| Training | 2 analysts × 2 h × €45 | 180 |
| Contingency 15% | 15% × €32,460 | 4,869 |
| **System total, year 1** | | **37,329** |
| Human checks (H1 + H2) | 12,600 × 2 min + 5,400 × 6 min = 960 h × €45 | 43,200 |
| AI error clean-up | 0% to 22.2% × 18,000 × €4.50 (upper bound: some of these invoices already go to H2) | 0 to 17,982 |
| **All-in, year 1** | | **80,529 to 98,511** |

**Year 1 against today (€81,000):** between €471 cheaper and €17,511 more expensive. Year 1 carries the one-off build.

**Year 2 onward:** €38 + €7,082 + €2,160 + €43,200 + €0 to €17,982 = **€52,480 to €70,462**, so a saving of **€10,538 to €28,520 a year**. Payback on the one-off €23,180 (build + training): €23,180 ÷ (€28,520 ÷ 12) = **9.8 months** at 0% errors, €23,180 ÷ (€10,538 ÷ 12) = **26.4 months** at 22.2%.

## 2. Months 1, 6 and 12

| Month | Checks | AI calls a day | Token cost | Monthly total (incl. errors) | What is in it |
|---|---:|---:|---:|---:|---|
| 1 (pilot, parallel) | 150 through AI, 1,500 manual | 7 | €0.30 | **€7,745** | Today's €6,750 + fixed €770 (screening €90 + maintenance €500 + governance €180) + comparing 150 checks × 2 min × €0.75 = €225 |
| 6 (live) | 1,500 | 71 | €3.05 | **€4,373 to €5,872** | Fixed €770 + human checks €3,600 + error clean-up €0 to €1,499 |
| 12 (3× growth) | 4,500 | 214 | €9.15 | **€11,579 to €16,075** | Fixed €770 + human checks €10,800 + error clean-up €0 to €4,496; manual at 3× would be €20,250 |

**Per check, month 6:** €2.92 to €3.91, against €4.50 by hand. **Per correctly handled check, tokens only:** €0.0020 ÷ 77.8% = €0.0026.

## 3. What decides the case

Tokens are €38 of a €52,480–€70,462 running year: under 0.1%. **The error rate decides it.** The design stops saving money when error clean-up eats the whole saving: €28,520 ÷ (18,000 × €4.50) = **35.2% errors**. I measured 0% on my own invoices and 22.2% on unseen ones, so the margin is real but not wide.

**Not counted:** the risk reduction (Week 4: €45,000 a year at a €250,000 fine, €37,033 net without it). Without it this is a time case, and a smaller one than Week 4's €54,000, because routing sends 30% of invoices to a full check.

## 4. Sketch ↔ cost cross-check

| Box in the sketch | Cost line |
|---|---|
| Outlook mailbox, ERP export, SharePoint, Teams | €0 (already paid) |
| EU sanctions list | €0 (free) |
| Bought screening service (L) | €1,082 |
| Claude Sonnet 5.5 (L) | €38 |
| Script (integration) | €23,000 once + €6,000 maintenance |
| H1, H2 | €18,900 + €24,300 |
| Governance (log, re-test, sample) | €2,160 (log storage €0, SharePoint) |
| Fallback (manual queue) | €0 extra: today's process; during an outage, 6 min a check |

---

*AI disclosure: I used Claude to build the tables and check every formula against my Build log and Weeks 4, 6 and 7; the routing split and the error-rate range are my estimates and measurements as labelled.*
