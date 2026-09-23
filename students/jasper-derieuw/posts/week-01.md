---
week: 1
title: "AI Sanctions Screening Costs €166 a Year: The Number That Decides Everything Isn't on Any Pricing Page"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cost literacy"
date: 2026-09-25
---

# The €250,000 Number No Sanctions-Screening Vendor Will Quote You

*I chose this beat because trade compliance sits exactly where AI's language capability either earns its keep or quietly fails — and unlike most AI use cases, getting it wrong here isn't a bad customer experience, it's a criminal liability event. It's also where I want to work: compliance-adjacent roles in international trade are exactly the kind of "AI plus regulation" intersection this programme is training us for.*

**Hook**

Every EU company buying from China has to screen its counterparties against sanctions and denied party lists. It isn't optional, and getting it wrong is a criminal liability problem, not a rounding error. AI vendors now sell automated screening, and the token price looks almost free. I priced it out for a mid-sized Belgian importer. The token bill is real, and it is also the least important number in the whole calculation.

**The Numbers**

A Belgian importer running ~150 shipments/month from China screens 8 parties per shipment (supplier, manufacturer, beneficial owners, freight forwarder, consignee) plus a monthly re-screen of ~300 standing counterparties — 1,500 checks/month total. Each check feeds the model 2,500 input tokens and generates 500 output tokens for a structured risk assessment.

Model: Claude Sonnet 5 · $2.00/1M input · $10.00/1M output
Input:  1,500 x 2,500 = 3.75M tokens -> $7.50
Output: 1,500 x   500 = 0.75M tokens -> $7.50
Token cost: $15/month -> €13.80/month -> ~€166/year ($1 = €0.92)

€166 a year — run this at 10x volume and it still doesn't clear €1,700. But token cost isn't the decision. Assume a true hit rate of 0.2% (3 genuine matches/month) and 95% model recall (misses 1 in 20) → ~1.8 missed hits/year, at an assumed €250,000/miss (fine, legal, remediation, disruption):

Non-hit screens/month = 1,497
False positive rate: 4% (tightening the match threshold to cut false positives would also cut recall on genuine hits — the one error that can't be afforded)
False positives/month ≈ 60 -> 720/year
Review time: 15 min/FP x €50/hr loaded analyst rate = €12.50/FP
Annual false positive cost: 720 x €12.50 = €9,000

**Per year: tokens €166 · missed hits ~€450,000 · false positives €9,000 → total ≈ €459,166**

That €250,000-per-miss figure is the weakest number in this post, and it's the one that decides everything. At €50,000 the case looks relaxed; at €1M it's an emergency. Before trusting this I'd calibrate it against real EU enforcement figures, not a guess.

**The Insight**

The token line is €166 — 0.04% of the total — and it's the only figure with a pricing page behind it. Everything that actually decides the investment lives off that page. Screening has a twist inventory AI doesn't: the two errors aren't the same size. A false positive costs €12.50 of analyst time; a false negative costs a quarter-million euros and possibly a criminal referral. Any vendor quoting one accuracy percentage is averaging those two together — hiding the only asymmetry that matters. The misses cluster exactly where naive string-matching fails: Chinese name transliteration variants. That's where a language-aware model earns its keep, or quietly doesn't. Cost literacy here isn't reading the token price — it's knowing the vendor priced the cheap error and stayed silent on the expensive one.

**The Question**

At what missed-hit rate does language-aware AI screening stop being cheaper than paying a second analyst to review every China transaction by hand? One figure I want before Week 2: the real all-in cost of a single EU sanctions breach for an SME — if anyone has a number from an enforcement case, bring it to class, because it's the figure my whole calculation turns on.

---

*AI disclosure: I used Claude to sanity-check the token cost calculation and stress-test the false-positive/false-negative cost model before publishing.*

---

Full EuroShop cost model and token-count workings: [week-01-evidence.md](./week-01-evidence.md)
