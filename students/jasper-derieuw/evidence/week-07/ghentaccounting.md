---
week: 7
title: "Evidence - Scenario 2 Worked: GhentAccounting (Buy)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Lock-in detection"
date: 2026-11-16
---

# Scenario 2: GhentAccounting

**The case (course Week 7, fictional):** a Belgian accounting firm, 24 employees, 300 SME clients, 15,000 invoices and receipts a month, extracted and categorised by hand by 3 staff. Needs OCR and classification in Dutch, French and English; uses Exact Online (which has an API); 0 engineers; budget €2,000–€5,000 a month; must work within 2 months.

## 1. The five questions (stop at the first clear "yes")

| # | Question | Answer | Result |
|---|---|---|---|
| 1 | Is this capability our competitive advantage? | No. Clients pay for advice and reliability; extracting invoice fields is back-office work | Go to 2 |
| 2 | Is this a commoditised problem with good off-the-shelf solutions? | **Yes.** Invoice OCR and categorisation is a mature product category, and tools connect to accounting software through its API | **Consider Buy: stop** |
| 5 | (check) Do we have the capacity to build or maintain? | No: 0 engineers and a 2-month deadline | Confirms Buy |

**Path: Buy.** As my teacher put it in class, the answer is rarely one path for everything; here every layer points the same way: buy the tool, keep the data in Exact Online.

**Budget check with my own numbers:** €2,000–€5,000 for 15,000 documents is €0.13–€0.33 per document. My measured AI cost for reading one invoice was €0.0020–€0.0044 (Weeks 6 and 8), so the model would cost them about €30–€66 a month. The budget pays for the product, the Exact Online link and the support, not the AI. That is what "buy" means for a firm without engineers.

## 2. Lock-in scorecard (0 = free, 3 = trapped)

| Dimension | Score | Evidence |
|---|:-:|---|
| 1. Data portability | 1 | The extracted data ends up in Exact Online, the firm's own system of record. What can stay behind at the vendor: the scanned archive and the categorisation rules set up in the tool (est.; depends on the contract) |
| 2. API stability | 1 | The link runs through Exact Online's published API, maintained by the vendor; a change on either side can break it, but that is the vendor's job to fix |
| 3. Pricing control | 2 | A subscription with per-document tiers: at 15,000 documents a month a tier change or renewal price can move the bill, and the firm has little leverage beyond switching |
| 4. Feature dependency | 1 | Standard features (OCR, categorisation, matching to purchase orders); only the configured rules and workflows would need setting up again |
| 5. Migration cost | 1 | A new tool, rules set up again, staff retrained, a month of parallel running: about 1–2 months (est.) |
| **Total** | **6 / 15** | **Moderate** |

## 3. Why moderate lock-in is acceptable here

1. **It is not what they sell.** If the vendor raises its price, GhentAccounting loses some margin, not its business.
2. **The system of record stays theirs.** The bought tool sits in front of Exact Online; the data ends up in their own system, not the vendor's.
3. **Alternatives exist.** A commodity market means a switch is a re-setup, not a rebuild.
4. **Avoiding lock-in would cost more than lock-in.** With 0 engineers and 2 months, building is not an option; a custom layer would itself need someone to maintain it.

**Compared with the other two cases:** OmniRetail (14/15 in my class scoring) was locked in on things that *are* its business, its recommendations and fraud detection, with no layer of its own. FlandersBio (2/15) builds and owns its core because the core is the company. GhentAccounting is locked in only on a back-office commodity step, with its own system of record outside the vendor. **Lock-in matters in proportion to how close it sits to what makes you money.**

**Open standards (the MCP brief):** they help little here. MCP lowers lock-in on the Connect path; a firm that buys one commodity tool gains more from a good contract than from a standard.

## 4. What to get in writing before signing, and a 90-day exit plan

Before signing: (1) export of documents and extracted data in CSV or JSON, self-service; (2) a written notice period for price changes; (3) a term of 12 months or less, with a notice period for termination.

| When | Action |
|---|---|
| First week | Export all documents and extracted data; list the rules set up in the tool |
| First month | Trial a second tool on one month of invoices, in parallel |
| First quarter | Switch, keep the old tool read-only for the archive, retrain staff |

**What the exit costs (est.):** setting up the rules in a new tool 40 h × €45 = €1,800 + retraining 3 staff × 4 h × €45 = €540 + one month of parallel subscription at their €2,000–€5,000 budget = **€4,340–€7,340**, about one and a half to two months of their current tool budget.

**Link to my own Build:** it is the same task as my tool, reading invoices and pulling out fields, but a different path because of a different team. My importer buys the list matching and connects a model through a thin layer; GhentAccounting, with no engineers, buys the whole thing.

---

*AI disclosure: I used Claude to structure the five questions, the scorecard and the comparison; the path, the scores and the reasoning are mine, and the scenario is the course's.*
