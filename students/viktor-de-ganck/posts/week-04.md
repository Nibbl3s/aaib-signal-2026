---
week: 4
title: "AI Sorting Financial News for Advisors: Worth a Pilot, Not Yet a Purchase"
author: "Viktor De Ganck"
beat: "AI as a retail investor's research desk"
skill: "Value quantification"
date: 2026-10-12
---
For my Build, I made an AI prompt that sorts financial news. For each news item it gives three labels: what kind of event it is, which assets it affects, and whether it is fact or opinion. In my test, all three labels were right on 9 of 15 real news items (60%). What is that worth in euros? A retail investor has no salary to save, so I priced it for someone paid to read the news: an investment advisor.

## The candidate

**Graslei Wealth** is a composite firm: an independent wealth manager in Ghent with 8 advisors. Every morning, each advisor reads the news (FT, ECB, Fed, X, VEB) to decide what to mention to clients.

**What the tool does for them**, using three items from my own test set:

| News item | Labels | What the advisor does |
|---|---|---|
| Fed raises rates | rate decision / FX, bonds / **fact** | Read it, tell clients with bond funds |
| "Beursagenda" (upcoming company dates) | none / none / fact | Keep it for planning client calls |
| Commentator on X about rate-hike odds | opinion only / FX / **opinion** | Skip it, or at least never present it as news |

In short: **the tool tells the advisor which items are real news, which are background, and which are just opinion.** The buyer is the managing partner.

## The numbers

Measured numbers come from my Build; (est.) marks my assumptions.

**Time saved.** In my test set, 3 of 15 items (20%) were "opinion only": the ones an advisor can skip. If an advisor spends 45 minutes (est.) on the news each morning, skipping 20% saves **9 minutes a day**.

**Value of that time.** Loaded cost of an advisor: €65,000 salary (est.) × 1.4 ÷ 1,600 hours = **€57 per hour**.

- At 100% accuracy: 8 advisors × 0.15 h × 220 days × €57 = **€15,048 a year**
- At my measured 60%: a wrong label means reading the item anyway, so only 60% of the saving is real: **€9,029 a year**

**Costs:**

- AI usage: 40 items a day (est.), 500 tokens in and 30 out each, standard tier = **€11 a year** (full articles on a premium model: about €150)
- Connecting it to the firm's news feed: **€8,000** once (est.)
- Maintenance, 25% of that: **€2,000 a year** (est.)
- Mistakes: the dangerous one is opinion labelled as fact (2 of 30 answers in my test). If 6 of those a year reach a client (est.), at €150 each to correct (est.): **€900 a year**

| | Year 1 | Year 2+ |
|---|---|---|
| Value at 60% | €9,029 | €9,029 |
| Costs and mistakes | −€10,911 | −€2,911 |
| **Net** | **−€1,882** | **€6,118** |

**Payback:** €8,000 ÷ (€6,118 ÷ 12) = **15.7 months**. At 60%, Year 1 loses money.

## The pressure test

**If the time saving is half what I assumed** (4.5 minutes a day), Year 1 is **−€6,397** and payback takes almost 5 years.

**If my 60% is too high:** with 15 items, the true rate could be anywhere from 36% to 80%. At 36%, Year 1 is **−€5,494**.

**The rate it needs:** Year 1 breaks even at **73%** accuracy. At **80%**, Year 1 turns positive (€1,127) and payback drops to 10.5 months. The real question is whether I can get from 60% to 80%.

## Can it reach 80%?

My failures are not random. Two items missed FX because my prompt never says when to list more than one asset. One opinion piece full of percentages was labelled as fact.

For Week 8 I will add two rules: when to list several assets, and that forecasts and odds are opinion even with numbers in them. **My prediction:** this fixes 3 of my 6 failing items: 12 of 15, or 80%. I will rerun the same 15 items, plus new ones so the rules are not just fitted to my test set.

## The insight

1. **The AI costs €11 a year.** The real costs are connecting it and fixing its mistakes.
2. **Accuracy is the business case.** Twenty percentage points decide the whole investment.
3. **Verdict: pilot, not purchase.** If my rules reach 80%, two advisors use it for one month without the €8,000 integration, and we measure the minutes they actually save.

**My question:** of all the news you read in a morning, how much of it do you actually use?

*Graslei Wealth and all (est.) figures are my assumptions. The 60%, 20% and 2 of 30 come from my own Build (run 1, 15 items, run twice). Numbers calculated in Python, post drafted with Claude from my Build log; case, verdict and prediction are mine.*
