---
week: 9
title: "Evidence - Security Advisory Memo: What to Fix Before Go-Live (6 ECTS)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Attack surface thinking"
date: 2026-11-16
---

# Security Advisory: What to Fix Before the Screening Pilot Goes Live

**To:** CFO and IT lead, Antwerp importer (capstone scenario) · **From:** Jasper Derieuw · **Date:** 16 November 2026

## Bottom line

Fix four things before the first invoice goes through the system: make the 2-minute check a real check, put the data flow under a processing agreement with a retention period, lock down who can approve and edit, and keep the cheap injection fix. Together about €4,947 in year 1. My own ranking from October put injection second; two practitioners moved access control in and injection down.

## Whom I asked

| Who (anonymised) | How | When | What I showed |
|---|---|---|---|
| An IT professional at a former employer (Belgian manufacturing company) | Email, Dutch | Sent 14 Oct 2026; reply dated 24 Oct 2026 | My five main risks in plain language; question: "which 3 would actually keep you awake, and why? Did I miss one?" |
| A customs and trade-compliance specialist at a large international company | Teams, 20 min | 16 Nov 2026 | A one-page summary of my Week 8 design ([practitioner review](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/practitioner-review.md)) |

## What the IT professional said (original Dutch, my translation)

1. **Privacy and GDPR.** "moet duidelijk zijn waar die data terechtkomt, hoe lang die wordt bewaard en wie er toegang toe heeft" (it must be clear where the data ends up, how long it is kept and who has access to it).
2. **Wrong or misleading output.** "Een duidelijke disclaimer en mogelijkheid tot verificatie zijn daarom nodig" (a clear disclaimer and a way to verify are therefore needed).
3. **Security and unauthorised access.** "Zonder sterke authenticatie, juiste rechtenbeheer en bescherming tegen bijvoorbeeld prompt injection of datalekken, kunnen gevoelige gegevens zichtbaar worden voor verkeerde personen" (without strong authentication, proper rights management and protection against, for example, prompt injection or data leaks, sensitive data can become visible to the wrong people).

Why these three: "omdat ze direct gevolg kunnen hebben voor gebruikers, hun data en het vertrouwen in de tool" (because they directly affect users, their data and trust in the tool). The customs specialist, separately, put the 2-minute check first: "If 90% of invoices are 'clear,' people stop reading carefully."

## Where they disagreed with me

- **I ranked by what the AI could be tricked into; they ranked by who can see and change things.** Neither put injection first. My own attack runs agree: Claude Sonnet 5.5 resisted 0 of 10 attacks.
- **Access control was missing from my review.** Of my 10 markers, none covers who can edit the SharePoint list or the log. Anyone who can set a row to "approved" bypasses the screening without touching the AI.
- **Retention was a Low in my review (DL-3, score 6).** The IT professional asked "how long is it kept" in the same breath as "where does it go", so I merge it into the data-flow risk.
- **Neither named shadow AI.** I keep it Medium; its fix is a policy (€225), not a system change.

## Revised priority order

| New | Surface | Old | Why it moved |
|:-:|---|:-:|---|
| 1 | **CW-1** Rubber-stamp H1, and the means to verify | 1 | Stays first: named by the customs specialist unprompted, and the IT professional's "mogelijkheid tot verificatie" is the same control. Since Week 8 it also decides the business case: break-even at 3.1–5.0 minutes per check |
| 2 | **DL-1 + DL-3** Personal data to the API, with no retention period | 3 | Up: the IT professional's first concern, and a go-live blocker that a contract and a decision on retention can close before day one |
| 3 | **AC-1 (new)** Who can approve rows and edit the list and log | – | New, from the IT professional's "rechtenbeheer". Rated L 3 × I 4 = 12 (est.): a 2-person team with shared edit rights is the default in SharePoint |
| 4 | **PI-2** Injection on a near-match | 2 | Down, fix kept: it needs three failures at once (fuzzy miss, a model that obeys, a skimmed H1). Fix 1 and the attack re-test before any model switch close two of the three; the €252 fix is done before go-live anyway |

## What it costs

| Fix | Cost, year 1 | Residual |
|---|---|---|
| CW-1: source line per field, 2+ countries → H2, monthly re-check | €3,078 ([mitigations](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-09/mitigations.md)) | 12, Medium |
| DL-1 + DL-3: processing agreement, retention period set with the DPO (Week 10) | €690 | 5, Low |
| AC-1: edit rights on the list for the 2 analysts only; approval records the signed-in account; the log read-only, deletion by IT admin only; quarterly access review | 4 h × €63 + 4 × 1 h × €45 = €432 (est.) | 1 × 4 = 4, Low |
| PI-2 and PI-3: strictest route wins, non-JSON → H2, attack re-test | €252 + €270 | 5, Low |
| Other Medium surfaces (SA-1, CW-2, DL-2) | €225 | as in the mitigation table |
| **Total** | **€4,947** | |

That is €78 more than the €4,869 contingency in my Week 8 cost model: security now uses the whole contingency and a little more.

## What I still do not know

How long an honest H1 check takes (the fablab review test measures it), who the importer's DPO is and what retention they will set (Week 10), and whether any screening vendor will put its terms in writing (ADR 001).

---

*AI disclosure: the replies are quoted from the IT professional's email and my notes of the call; translations from Dutch are mine. I used Claude to structure the memo and check the arithmetic; the revised order and the reasons are mine.*
