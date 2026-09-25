# Week 1 — Evidence

## 1. Cost Model for EuroShop

**Scenario:** AI-powered customer service chatbot, 30,000 emails/month (1,000/day × 30 days).
Input: 200 tokens/email, Output: 400 tokens/email → 6M input tokens/month, 12M output tokens/month.

| Tier | Token Cost (EUR) | Error Cost | Total/Month | Total/Year | Cost/Email |
|---|---|---|---|---|---|
| Budget | €276 | €45,000 | €45,276 | €543,312 | €1.51 |
| Standard | €828 | €22,500 | €23,328 | €279,936 | €0.78 |
| Premium | €1,656 | €7,500 | €9,156 | €109,872 | €0.31 |

**Cost per correctly handled email:** Budget €2.16 · Standard €0.91 · Premium €0.32

**Recommendation:** Premium. It has the highest token price but the lowest total cost per
email, because its 5% error rate keeps human-correction costs low. To the CFO, I'd lead with
cost per correctly handled email, not token cost — token cost alone (€1,656 vs €276 for
Budget) makes Premium look worse than it is once error costs are factored in.

**Scale check (Month 6, ~111,000 emails):** cost per email stays identical at every tier
(€1.51 / €0.78 / €0.31), since both token cost and error cost scale linearly. Premium AI
(€9,156/month at current volume) is already roughly on par with 3 human agents at €9,000/month
fixed, and stays cheaper than that fixed team only below ~29,500 emails/month.

## 2. Token Count Table — English vs. Ukrainian

| Document | English Tokens | English Cost | Ukrainian Tokens | Ukrainian Cost | Difference | % Increase |
|---|---|---|---|---|---|---|
| Doc 1 | 149 | $0.00447 | 254 | $0.00762 | $0.00315 | 70.47% |
| Doc 2 | 98 | $0.00294 | 217 | $0.00651 | $0.00357 | 121.43% |
| Doc 3 | 157 | $0.00471 | 308 | $0.00924 | $0.00453 | 96.18% |
| Doc 4 | 136 | $0.00408 | 472 | $0.01416 | $0.01008 | 247.06% |
| Doc 5 | 147 | $0.00441 | 234 | $0.00702 | $0.00261 | 59.18% |
| **Total** | **687** | **$0.02061** | **1,485** | **$0.04455** | **$0.02394** | **116.16%** |

Ukrainian text costs **116.16% more** in tokens than English on average (roughly 2.2×), ranging
from 59% (Doc 5) to 247% (Doc 4).

**Trade-off question — should you force English for a customer service chatbot?**
No, generally. The token premium is small in absolute terms (a few cents per interaction) and
usually outweighed by lost customer satisfaction, lower first-contact resolution accuracy, and
trust/accessibility concerns if customers aren't comfortable in English. The better fix is to
keep customer-facing chat in Ukrainian, but write system prompts in English, cache repeated
context, and route simple queries to cheaper models — this captures most of the benefit while
shrinking the premium. The premium is clearly worth paying for high-stakes interactions
(banking, healthcare, complaints) where trust and retention matter, and less clearly worth it
for high-volume, low-stakes, low-margin queries with an English-comfortable audience.

## 3. Declared Beat

**Beat:** The Fake Analyst: When AI-Generated Business Reports Get It Wrong

I keep asking myself how close AI actually is to replacing human analysts, not the marketing
version, the real one. I want to dig into where AI-generated business analysis actually breaks,
and what that tells us about what still needs a human.