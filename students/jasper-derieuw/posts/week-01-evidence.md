---
week: 1
title: "Evidence - Cost Modeling Lab & Token Discovery Lab"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cost literacy"
date: 2026-09-25
---
# Week 1 Evidence — Cost Modeling Lab & Token Discovery Lab

This file holds the full workings behind [week-01.md](./week-01.md): the EuroShop cost model, the multilingual token comparison table, and the declared beat rationale.

---

## 1. Declared Beat

**My beat is: EU and China Trade Compliance in the AI Era**

I chose this beat because trade compliance sits exactly where AI's language capability either earns its keep or quietly fails — and unlike most AI use cases, getting it wrong here isn't a bad customer experience, it's a criminal liability event. It's also where I want to work: compliance-adjacent roles in international trade are exactly the kind of "AI plus regulation" intersection this programme is training us for.

**Track:** 6 ECTS

---

## 2. Token Discovery Lab — English vs. Dutch

Tokenizer used: TikToken Tokenizer. Cost basis: $0.03 per 1,000 tokens, quoted per 1,000 documents processed (matching the AI Bill activity convention).

| Document | English Tokens | English Cost | Dutch Tokens | Dutch Cost | Difference | % Increase |
|---|---|---|---|---|---|---|
| Doc 1 — Customer Support Email | 151 | $4.53 | 170 | $5.10 | $0.57 | +12.6% |
| Doc 2 — Product Description | 98 | $2.94 | 144 | $4.32 | $1.38 | +46.9% |
| Doc 3 — Meeting Transcript | 157 | $4.71 | 228 | $6.84 | $2.13 | +45.2% |
| Doc 4 — Legal Contract Clause | 136 | $4.08 | 188 | $5.64 | $1.56 | +38.2% |
| Doc 5 — Invoice | 146 | $4.38 | 168 | $5.04 | $0.66 | +15.1% |

**Average increase across all 5 documents: ~31.6%** — in the same range as the course reference table for Dutch (+40%), lower but same order of magnitude. Per the instructions, the measured figure is trusted over the reference table.

### Reflection Questions

**1. Which document increased the most in tokens, and by what %?**
Doc 2 (Product Description), +46.9% — the largest jump of the five documents tested.

**2. Annual cost difference at 1,000 uses/year, English vs. Dutch, for Doc 2:**
$2.94/year (English) vs. $4.32/year (Dutch) — a **$1.38/year** difference. Note: at this low a volume (1,000/year) the multilingual tax is trivial in absolute terms; it only becomes a meaningful budget line at real business scale (e.g. EuroShop's 30,000 emails/month, see below).

**3. Trade-off — should a Dutch-market chatbot force customers into English to save cost?**
It depends on the criteria. Forcing English reduces token cost by roughly 30–47% based on the measurements above, but for older or non-English-fluent Dutch customers this creates a real service and accessibility problem — potentially reduced customer satisfaction, complaints, or lost business in a market where Dutch/French are the working languages. The cost saving has to be weighed against the revenue and trust at risk from excluding a segment of the customer base, not treated as a free win.

---

## 3. Cost Modeling Lab — EuroShop

**Scenario:** EuroShop, mid-sized European e-commerce company. 1,000 customer emails/day, 30 business days/month = 30,000 emails/month. Each email: 200 input tokens, 400 output tokens. Error cost: €5 per incorrectly handled query, fixed by a human agent. Currency conversion: $1 = €0.92 throughout.

### Step 1 — Monthly Token Volume

Total input tokens/month = 30,000 x 200 = 6,000,000
Total output tokens/month = 30,000 x 400 = 12,000,000

### Step 2 — Token Cost per Tier (USD)

| Tier | Input $/1K | Output $/1K | Input Cost | Output Cost | Token Cost/Month |
|---|---|---|---|---|---|
| Budget | $0.01 | $0.02 | 6,000 x $0.01 = $60 | 12,000 x $0.02 = $240 | $300 |
| Standard | $0.03 | $0.06 | 6,000 x $0.03 = $180 | 12,000 x $0.06 = $720 | $900 |
| Premium | $0.06 | $0.12 | 6,000 x $0.06 = $360 | 12,000 x $0.12 = $1,440 | $1,800 |

### Step 3 — Error Costs (EUR)

Budget:   30,000 x 30% x €5 = €45,000
Standard: 30,000 x 15% x €5 = €22,500
Premium:  30,000 x  5% x €5 =  €7,500

### Step 4 — Total Monthly Cost (converted to EUR at $1 = €0.92)

| Tier | Token Cost (USD) | Token Cost (EUR) | Error Cost (EUR) | **Total/Month (EUR)** |
|---|---|---|---|---|
| Budget | $300 | €276 | €45,000 | **€45,276** |
| Standard | $900 | €828 | €22,500 | **€23,328** |
| Premium | $1,800 | €1,656 | €7,500 | **€9,156** |

### Step 5 — Business Metrics

| Tier | Annual Cost | Cost/Email | Cost per Correctly Handled Email |
|---|---|---|---|
| Budget | €543,312 | €1.509 | €45,276 / (30,000x0.70) = €2.156 |
| Standard | €279,936 | €0.778 | €23,328 / (30,000x0.85) = €0.915 |
| Premium | €109,872 | €0.305 | €9,156 / (30,000x0.95) = €0.321 |

### Step 6 — Recommendation

Premium is cheapest on every real metric — total monthly cost, cost per email, and cost per correctly handled email — despite having the highest token price. If presenting to a CFO, I would lead with **cost per correctly handled email**, not token cost, because that is the number that actually reflects what EuroShop pays to get a customer issue resolved.

---

## 4. Analysis Questions (Part 3)

**Q1 — The Paradox: why is Budget the most expensive system despite the lowest token cost?**
Because the failure rate is highest, and in a high-volume environment those failures compound. 30% of 30,000 emails is 9,000 human interventions/month at €5 each (€45,000) — this dwarfs the €276/month saved on tokens versus Premium. Scale turns a small per-unit saving into a large absolute loss.

**Q2 — Business Insight: why would any company choose Budget, given it costs €1.51/email vs. Premium's €0.31/email?**
A company chooses Budget when it stops its analysis at the vendor's quoted price — €300/month for Budget looks 6x cheaper than Premium's €1,800/month on the token line alone. But that comparison ignores the 9,000 human interventions/month Budget generates at €5 each. Budget only wins if the error-cost math is never run.

**Q3 — Reality Check: token cost or total cost, presenting to the CFO?**
Total cost — it shows where the company can actually save the most money in daily operations, and whether a plan change is needed. Token cost alone is misleading because it excludes the human-fix cost that dominates the real total.

---

## 5. Scale Question (Part 4)

CMO: "We're growing 30% month over month. Recalculate for Month 6."

Month 6 volume = 30,000 x (1.30)^5 ≈ 111,000 emails/month

### Premium tier at Month 6

Token cost: 111,000/30,000 x $1,800 = $6,660/month -> €6,127
Error cost: 111,000 x 5% x €5 = €27,750/month
Total: ≈ €33,877/month
Cost per email: €33,877 / 111,000 ≈ €0.305

**1. What happens to cost per email as volume grows?**
It stays flat — €0.305 per email at both Month 1 and Month 6. Because both token cost and error cost scale linearly with volume (constant per-unit rates, constant error percentage), there are no economies of scale in this pricing model.

**2. Does the tier recommendation change? If so, at what volume?**
No — the recommendation never changes with volume. Since all three tiers scale at the same proportional rate, Premium wins at any volume for the same reason it wins at 30,000/month.

**3. At what volume does Premium become cheaper than hiring 3 human agents (€3,000/month each = €9,000/month total)?**

Premium cost per email = (200 x $0.06 + 400 x $0.12)/1,000 tokens-equivalent x €0.92, plus 5% x €5 error cost
= €0.0552 (token) + €0.25 (error) = €0.3052/email

Solve for volume V where 0.3052 x V = €9,000:
V ≈ 29,490 emails/month

**Breakeven is ~29,500 emails/month — essentially EuroShop's current Month 1 volume (30,000).** At Month 1, Premium AI (€9,156/month) is already running almost level with 3 human agents. By Month 6 (111,000/month), Premium is clearly and increasingly cheaper (€33,877 vs. a flat €9,000 for agents) — though at that volume, 3 human agents could very likely not physically handle 111,000 emails/month regardless of cost, which is itself worth noting.

---

*AI disclosure: I used Claude to check these calculations, structure the tables, and stress-test the reasoning before submission.*
