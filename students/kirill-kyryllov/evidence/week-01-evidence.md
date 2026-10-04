# Week 1 — Evidence

## 1. Cost Model for EuroShop

### The Scenario
AI-powered customer service chatbot for EuroShop, a mid-sized European e-commerce company.
1,000 customer emails/day × 30 business days/month = 30,000 emails/month.
Average email: 200 tokens in (customer question), 400 tokens out (AI response).

### Part 1 — Step-by-Step Calculations

**Step 1: Monthly token volume**
- Total input tokens/month = 200 × 30,000 = **6,000,000 (6M)**
- Total output tokens/month = 400 × 30,000 = **12,000,000 (12M)**

**Step 2: Token cost per tier**

*Budget ($0.01/1K input, $0.02/1K output):*
- Input cost = (6,000,000 ÷ 1,000) × $0.01 = 6,000 × $0.01 = **$60**
- Output cost = (12,000,000 ÷ 1,000) × $0.02 = 12,000 × $0.02 = **$240**
- Token cost = $60 + $240 = **$300** → × 0.92 (USD→EUR) = **€276**

*Standard ($0.03/1K input, $0.06/1K output):*
- Input cost = 6,000 × $0.03 = **$180**
- Output cost = 12,000 × $0.06 = **$720**
- Token cost = $180 + $720 = **$900** → **€828**

*Premium ($0.06/1K input, $0.12/1K output):*
- Input cost = 6,000 × $0.06 = **$360**
- Output cost = 12,000 × $0.12 = **$1,440**
- Token cost = $360 + $1,440 = **$1,800** → **€1,656**

**Step 3: Error cost per tier** (error rate × 30,000 emails × €5/error)
- Budget: 30% × 30,000 × €5 = **€45,000**
- Standard: 15% × 30,000 × €5 = **€22,500**
- Premium: 5% × 30,000 × €5 = **€7,500**

**Step 4: Total monthly cost** (token cost + error cost)
- Budget: €276 + €45,000 = **€45,276**
- Standard: €828 + €22,500 = **€23,328**
- Premium: €1,656 + €7,500 = **€9,156**

**Step 5: Business metrics**

| Tier | Total/Month | Total/Year (×12) | Cost/Email (÷30,000) | Cost/Correctly Handled Email |
|---|---|---|---|---|
| Budget | €45,276 | €543,312 | €1.51 | €45,276 ÷ (30,000×0.70=21,000) = **€2.16** |
| Standard | €23,328 | €279,936 | €0.78 | €23,328 ÷ (30,000×0.85=25,500) = **€0.91** |
| Premium | €9,156 | €109,872 | €0.31 | €9,156 ÷ (30,000×0.95=28,500) = **€0.32** |

**Step 6: Recommendation**
Premium. It has the highest per-token price but the lowest total cost per email (€0.31 vs
€1.51 for Budget) because its 5% error rate keeps human-correction costs low. If presenting to
the CFO, I would lead with **total cost per correctly handled email**, not token cost — token
cost alone makes Premium look 6× more expensive than Budget ($1,800 vs $300), when in reality
Premium is 5× cheaper overall once error costs are included.

### Part 3 — Analysis Questions

**Q1 — The Paradox:** Why is Budget the most expensive system despite the lowest token cost?
Budget's 30% error rate generates €45,000/month in human-correction costs, which dwarfs the
roughly €1,380 it saves in token spend compared to Premium (€1,656 − €276).

**Q2 — Business Insight:** Premium costs €0.31/email, Budget costs €1.51/email. Why would any
company choose Budget? A company might choose Budget if it only looks at the invoice line item
("AI platform: $300/month") without asking about error rates, if email volume is very low so
the absolute error cost stays small, or if it already has spare internal staff capacity to
absorb corrections at no visible marginal cost.

**Q3 — The Reality Check:** Which number would you lead with to the CFO — token cost or total
cost? Total cost per correctly handled email. Token cost understates Budget's real cost by
over 99% (€276 vs €45,276 total) — leading with token cost alone would be actively misleading
to a decision-maker.

### Part 4 — The Scale Question

Month 6 volume at 30% month-over-month growth: 30,000 × (1.30)⁵ ≈ **111,000 emails/month**
(new input tokens ≈ 22.2M, output tokens ≈ 44.4M)

| Tier | Token Cost (EUR) | Error Cost | Total/Month | Cost/Email |
|---|---|---|---|---|
| Budget | €1,021 | €166,500 | €167,521 | €1.51 |
| Standard | €3,064 | €83,250 | €86,314 | €0.78 |
| Premium | €6,127 | €27,750 | €33,877 | **€0.31** |

**What happens to cost/email as volume grows?** Nothing changes — it stays identical at every
tier (€1.51 / €0.78 / €0.31), because both token cost and error cost scale linearly with
volume. There's no economy of scale in this model, since neither cost component has a fixed
component.

**Does the tier recommendation change?** No. Premium remains cheapest per email at every
volume tested, since the ratio between tiers is volume-independent here.

**At what volume does Premium beat 3 human agents (€3,000/month each = €9,000/month fixed)?**
Premium cost per email = (€1,656 + €7,500) ÷ 30,000 = **€0.3052/email**
Solve: €0.3052 × V = €9,000 → **V ≈ 29,500 emails/month**

At the current volume (30,000/month), Premium AI (€9,156) is already roughly at parity with
3 human agents (€9,000) — Premium only stays cheaper than a fixed 3-agent team below ~29,500
emails/month. Caveat: this comparison assumes 3 agents can absorb higher volume without adding
headcount, which in reality they can't past a certain capacity, so the real crossover depends
on how agent staffing itself would need to scale.

### The Key Insight
The cheapest tokens (Budget) produced the most expensive system. The most expensive tokens
(Premium) produced the cheapest system. Token cost is not total cost — the business metric
that matters is cost per correctly handled query, not cost per token.

---

## 2. Token Count Table — English vs. Ukrainian

**Methodology:**
- Cost = (tokens ÷ 1,000) × $0.03
- Difference = Ukrainian cost − English cost
- % Increase = (Ukrainian tokens − English tokens) ÷ English tokens × 100

| Document | English Tokens | English Cost | Ukrainian Tokens | Ukrainian Cost | Difference | % Increase |
|---|---|---|---|---|---|---|
| Doc 1 | 149 | $0.00447 | 254 | $0.00762 | $0.00315 | 70.47% |
| Doc 2 | 98 | $0.00294 | 217 | $0.00651 | $0.00357 | 121.43% |
| Doc 3 | 157 | $0.00471 | 308 | $0.00924 | $0.00453 | 96.18% |
| Doc 4 | 136 | $0.00408 | 472 | $0.01416 | $0.01008 | 247.06% |
| Doc 5 | 147 | $0.00441 | 234 | $0.00702 | $0.00261 | 59.18% |
| **Total** | **687** | **$0.02061** | **1,485** | **$0.04455** | **$0.02394** | **116.16%** |

### Q&A

**1. Largest token increase:**
Doc 4: 136 → 472 tokens, a **247.06% increase** (~3.5× more tokens) — the largest jump of any
document in the set.

**2. Annual cost difference (most expensive document, 1,000 runs/year):**
Doc 4 — English: $0.00408 × 1,000 = **$4.08/year** vs. Ukrainian: $0.01416 × 1,000 =
**$14.16/year** → **$10.08/year difference** for this single document alone.

**3. Should you force English for a customer service chatbot?**
No, generally. The token premium is small in absolute terms (fractions of a cent per message)
and is usually outweighed by:
- Lost customers/satisfaction if they're uncomfortable responding in English
- Lower first-contact resolution accuracy when customers can't fully express their issue
- Trust, accessibility, and possible regulatory expectations around language access

Better fix: keep customer-facing chat in Ukrainian, but write system prompts in English, cache
repeated context, and route simple queries to cheaper models — this captures most of the
savings without sacrificing the customer experience.

**4. The % premium:**
**116.16%** overall (~2.2× the English cost), ranging from **59.18%** (Doc 5, smallest
premium) to **247.06%** (Doc 4, largest premium) depending on the document.

**5. Is the premium worth it?**

*Worth it when:*
- Customers mostly speak Ukrainian and are uncomfortable in English
- Interactions are high-stakes (banking, healthcare, legal, complaints)
- Trust/retention matter, or local-language support is a requirement
- Margin per conversation comfortably exceeds the token cost premium

*Maybe not worth it when:*
- Volume is huge and margins are razor-thin
- Queries are simple and low-stakes (hours, order status) with an English-comfortable audience
- The audience is mostly technical/international and already defaults to English

*Middle ground:* Ukrainian for customer-facing text, English for system prompts, caching for
repeated context, and cheaper models for simple queries — this captures most of the benefit of
native-language support while shrinking the token premium that drives it.

---

## 3. Declared Beat

**Beat:** The Fake Analyst: When AI-Generated Business Reports Get It Wrong

I keep asking myself how close AI actually is to replacing human analysts, not the marketing
version, the real one. I want to dig into where AI-generated business analysis actually breaks,
and what that tells us about what still needs a human.