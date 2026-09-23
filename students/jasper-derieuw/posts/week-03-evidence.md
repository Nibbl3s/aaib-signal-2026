---
week: 3
title: "Evidence - Vendor Claim Detection (NexusAI Deconstruction, FOMO Framework, Case Comparison)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Vendor claim detection"
date: 2026-10-07
---

# Week 3 Evidence

This file holds the full workings behind [week-03.md](./week-03.md): the tagged claims table for the NexusAI proposal, the top five avoidances, the five question FOMO framework walkthrough, and the GhentBakery versus FlandersTextiles case comparison.

---

## 1. The Claim Gauntlet (in class warm up, self scored)

Twelve claims assessed against the answer key. First pass score: 9 out of 12 correct. The three misses, items 5, 9, and 10, all clustered around the hardest distinction in the exercise, Aspiration versus Avoidance, and the "a real number can still be an avoidance" trap in item 10. All three corrected below.

| # | Claim | Final tag | Reasoning |
|---|---|---|---|
| 1 | "Processes over 2 million documents per month across 40 enterprise clients" | Fact | Denominators present, checkable |
| 2 | "Leading European retailers trust our AI" | Avoidance | Names nobody |
| 3 | "We expect to reduce your processing time by up to 70%" | Aspiration | Two deferrals, "expect" and "up to" |
| 4 | "94.2% accuracy on the CoNLL-2003 benchmark" | Fact | Named benchmark, checkable, though possibly irrelevant to a real use case, tagging correctly is not the same as accepting relevance |
| 5 | "Customers typically see ROI within 6 months" | Avoidance (corrected from initial Aspiration) | "Typically" has no denominator, claims a past result while making it unverifiable |
| 6 | "Roadmap includes native SAP integration in Q3" | Aspiration | A roadmap is an intention, not a feature |
| 7 | "ISO 27001 certified, certificate 2024/17831, issued March 2025 by BSI" | Fact | Certificate number, issuing body, date, fully checkable |
| 8 | "The solution is fully GDPR compliant" | Avoidance | GDPR compliance is not a property a product can hold alone |
| 9 | "AI-powered insights that transform how your team works" | Aspiration (corrected from initial Avoidance) | Pure unfalsifiable future promise, not a hidden past result |
| 10 | "Pricing starts at €499 per month" | Avoidance (corrected from initial Fact) | A real number engineered to prevent calculating actual cost |
| 11 | "Pilot with a Belgian logistics firm, errors fell from 12% to 3% over eight weeks" | Fact | Before and after, named period, named sector, a genuinely good claim |
| 12 | "Proprietary and industry-leading" | Avoidance | Two unfalsifiable deflections in one phrase |

Final corrected score: 12 out of 12.

---

## 2. NexusAI Proposal, Full Sixteen Claims Tagged

| # | Claim | Section | Tag | Reasoning |
|---|---|---|---|---|
| 1 | "200+ European companies" | Executive Summary | Avoidance | No names, no case studies, unclear if paying, piloting, or signed up |
| 2 | "average cost reductions of 25-30%" | Executive Summary | Avoidance | Average across 200+ companies hides variance, no stated range or methodology |
| 3 | "up to 94% accuracy" | Demand Forecasting | Aspiration | Classic ceiling hedge, satisfied by any number below it |
| 4 | "proprietary ML models" | Demand Forecasting | Avoidance | Describes ownership, not architecture |
| 5 | "continuously learns and adapts" | Demand Forecasting | Avoidance | A specific technical claim, vague about mechanism and frequency, presented as already true |
| 6 | "reducing fuel costs by up to 22%" | Route Optimization | Aspiration | Same ceiling hedge as claim 3 |
| 7 | "improving on-time delivery by 35%" | Route Optimization | Avoidance | No hedge language, but disclosed elsewhere as client self reported, unverifiable |
| 8 | "40% reduction in picking time" | Warehouse Management | Avoidance | Same self reporting issue, no stated baseline method |
| 9 | "natural language interface" (Dutch/French/English) | Conversational Interface | Fact, potentially misleading | The interface likely exists, but describes the frontend, not the optimization layer |
| 10 | "Up to 94%" / "Based on internal benchmarking" | Proven Results table | Avoidance | Self tested, self reported, nothing independently verified |
| 11 | "Client self-reporting" (all metrics) | Proven Results table | Fact, honest disclosure | Accurate disclosure, but caps reliability of every other metric in the table |
| 12 | "Proprietary ML models trained on 10+ years" | Technology Stack | Avoidance | Unspecified scope, could be one company's decade or fifty companies' |
| 13 | "Powered by leading LLM technology" | Technology Stack | Avoidance | No named model or provider, "leading" is unfalsifiable |
| 14 | "SOC 2 Type II, ISO 27001" | Technology Stack | Fact, weaker than it looks | Real certifications, but no certificate number, issuing body, or date given, unlike the Gauntlet's parallel item |
| 15 | "Money-back guarantee if no improvement in 90 days" | Next Steps | Fact, pending fine print | A real contractual commitment, value depends entirely on terms |
| 16 | "Only 2 pilot slots remaining" | Next Steps | Avoidance | Scarcity language, may be real, may not, untested |

**Final tally: 4 Fact, 2 Aspiration, 10 Avoidance.** This skew matches the item bank's own guidance that real proposals lean Avoidance, the hardest call to make and the most common tactic in practice. NexusAI's proposal is built mostly from technically true statements engineered to dodge the questions that actually matter.

---

## 3. Top Five Avoidances

**1. The AI definition itself.** Four different phrasings across the proposal, "proprietary ML models," "advanced AI algorithms," "AI-driven," "powered by leading LLM technology," and zero architecture named anywhere. This is the single most important gap, since it is the exact failure mode from this week's opening case, a company paying €500K for a rules engine wearing an AI label. Ask: is there a trained predictive model making forecasts, or is this rules plus an LLM chat frontend?

**2. Error rates and the cost of being wrong.** 94% accuracy is stated and never contextualised. No statement of what the other 6% costs, or who absorbs that cost. Ask: what does a bad forecast cost in overstock or stockout, and who bears that risk contractually?

**3. Total cost beyond the license.** €252,000 Year 1 is quoted, but nothing is said about ongoing LLM API costs, data preparation effort, quarterly retraining, or post pilot pricing. Maps directly onto FOMO Question 4. Ask: what is the realistic Year 2 and Year 3 cost, including everything not itemised here?

**4. Client references, specifically.** 200+ companies claimed, zero named. Ask: can I speak directly to three named clients in a comparable industry?

**5. Contract terms and exit conditions.** A 90 day pilot with a money back guarantee is described, but nothing about the commitment period after, switching costs, or what happens to integrated data and workflows on exit. A direct Week 7 lock in preview, entirely absent here.

---

## 4. FOMO vs Strategic Fit, Applied to NexusAI

**Q1, specific problem:** Never named. "Intelligent Supply Chain Optimization" is a solution looking for a problem statement, not a current metric and target metric.

**Q2, cost of doing nothing for six months:** Unstated. The only urgency offered is manufactured, "only 2 pilot slots remaining," which is scarcity marketing, not a quantified cost of inaction.

**Q3, can claims be verified independently:** Partially. Certifications and the named pilot result are checkable. The headline efficiency numbers are internal benchmarking or client self reporting, both explicitly disclosed as unverified in the proposal's own table.

**Q4, total cost beyond license:** Incomplete by the framework's own rule, license and implementation are typically only 30 to 50% of true total cost of ownership. LLM API costs, retraining, and data prep are all missing.

**Q5, simpler solution for 80% of the value:** Likely yes, in pieces. Conventional route optimization software already exists as a mature, non-AI category. A well built Excel forecasting model with seasonal adjustment, the same approach that worked reasonably well for GhentBakery, could capture meaningful forecasting value at a fraction of the cost.

**Verdict: Pilot, not buy, and only under specific conditions.** Before any commitment, EuroLogistics should name their own specific problem independently of the pitch, demand a pilot on their own data measured against their own baseline, get total cost of ownership in writing covering every item in the top five avoidances above, and separately price a non-AI alternative as the real comparison point. If the vendor will not commit to a verifiable pilot on EuroLogistics's own data, the verdict moves from pilot to walk away.

---

## 5. Case Comparison: GhentBakery vs FlandersTextiles

| Dimension | GhentBakery (Bought too much) | FlandersTextiles (Missed real value) |
|---|---|---|
| What did they evaluate? | The vendor's pitch and conference excitement, not the actual problem or the data behind the 92% claim | Their general feelings about AI in the news, not the specific claim or the specific cost of their current manual process |
| Did they use the FOMO framework? | No. Q1, Q2, and Q5 never asked | No. Q1 and Q2 were favourable to buying (real problem, real ongoing cost), but the board rejected on Q3 shaped fear without ever asking whether the claim could be verified |
| Did they assess modality fit (Week 2)? | No. Never compared against a domain expert's existing 89% accurate method | No, and more costly. Computer vision for defect detection is explicitly AI suitable per Week 2, pattern finding in provided data, not a hallucination prone language model, and the board never made that distinction |
| Did they calculate total cost (Week 1)? | Only the sticker price, never compared against the marginal 3% real world improvement over the free existing spreadsheet | No. Never ran the actual numbers, €340,000 current annual error cost versus an estimated €113,000 post AI cost, an overwhelming case that was never calculated |
| Root cause of the mistake | Trusting the pitch, accepting "AI" and "revolutionize" as sufficient justification | Dismissing the pitch on the wrong grounds, skepticism fired at the category "AI" rather than the specific claim |
| What question should they have asked first? | Q5, is there a simpler, cheaper solution that already solves 80% of this | Q3, can we verify this claim independently, before rejecting it, a 30 day side by side pilot would have settled it |

**Reflection:** both companies made the same underlying mistake in opposite directions, neither evaluated the specific claim in front of them. GhentBakery treated "AI" as a reason to say yes without evidence. FlandersTextiles treated "AI" as a reason to say no without evidence. The lesson for my own beat is direct, a sanctions screening or invoice extraction vendor pitch deserves neither reflexive trust nor reflexive rejection, it deserves the same five questions applied to the specific claim, the specific data, and the specific cost of getting it wrong, exactly what my own Build's measured 58% inconsistency rate already forced me to do to my own tool rather than take on faith.

---

*AI disclosure: I used Claude to help structure these tables and to check my Gauntlet and NexusAI tagging against the official answer keys. The tagging judgments themselves, the FOMO framework answers, and the case comparison reflection were mine.*
