---
week: 4
title: "A Perfect Test Score Is Not a Freight Business Case"
author: "Kiril Boyakov"
beat: "AI in European Freight Cost Estimation"
skill: "Value quantification"
date: 2026-10-18
---

My freight-mode classifier passed every recorded Week 2 test. That sounds encouraging, but it does not answer the business question: would anyone save enough time or money to justify using it? This week, I put a price on the narrow task it actually performs.

### The candidate

EuroRoute Forwarding is my fictional European freight-forwarding scenario. I assume it handles 3,000 freight descriptions monthly. The classifier sits between receiving an enquiry and looking up applicable rates. It proposes a transport mode, quotes supporting evidence and flags insufficient information. An employee confirms the result. It does not calculate freight prices.

My log contains twenty passing responses across ten distinct inputs, using individual and batch testing with two prompt versions. These selected service descriptions do not establish production accuracy. For budgeting, I therefore assume 5% of outputs need correction rather than extrapolating zero failures.

### The numbers

Every operational figure below is a planning assumption, not a company measurement.

Annual volume is 3,000 × 12 = 36,000 descriptions. Manual classification is assumed to take one minute each: 36,000/60 = 600 hours. At an assumed loaded labour cost of €30/hour, that represents €18,000 annually.

AI-assisted routine handling, including submission and confirmation, is assumed to take fifteen seconds. That is 36,000 × 0.25/60 = 150 hours. Before additional correction, the difference is 450 hours.

| Benefit category | Formula or basis | Annual value |
|---|---|---:|
| Time saved | 450 hours × €30 | €13,500 |
| Revenue increase | No additional bookings established | €0 credited |
| Direct cost reduction | No existing expense demonstrably eliminated | €0 credited |
| Risk mitigation | No measured probability or impact reduction | €0 credited |

Zero credited benefit does not mean improvement is impossible. It means I lack evidence to count it. Adding speculative sales or risk benefits would make the case look stronger without making it more reliable.

The token allowance assumes 800 input and 100 output tokens per description. At illustrative budgeting rates of €2 and €12 per million tokens respectively, annual usage costs 36,000 × [(800/1,000,000 × €2) + (100/1,000,000 × €12)] = €100.80. These are not verified prices for my test model.

Setup is estimated at 60 hours × €40 plus ten training hours × €30: €2,700. Maintenance is 24 hours × €40 = €960 annually, and hosting is €120. Recurring technical costs therefore total €1,180.80.

Correction matters more than tokens. At 5%, 1,800 outputs need two additional minutes each. Correction costs 1,800 × 2/60 × €30 = €1,800. Routine review is already included in the fifteen-second assumption, avoiding double counting.

First-year net economic benefit is €13,500 − €2,700 − €1,180.80 − €1,800 = **€7,819.20**. Economic ROI is €7,819.20/€5,680.80 = 137.6%. Payback is €2,700 divided by monthly recurring net benefit of €10,519.20/12: approximately 3.1 operational months.

However, those are capacity-based figures. If employees remain on the same salaries, freed time does not automatically become cash savings. Management needs useful work for that capacity. The calculation also assumes twelve fully operational months; gradual adoption would reduce first-year value.

### The pressure test

If time benefits are half my estimate, gross value falls to €6,750 and first-year net benefit to €1,069.20. If corrections also double to 10%, their cost becomes €3,600 and net benefit falls to **−€730.80**.

The weakest assumption may be the manual baseline. Reading an explicit phrase such as “air freight” could take much less than one minute. Conversely, submitting text and checking evidence could take longer than fifteen seconds. A perfect classification score cannot resolve either uncertainty.

Undetected mistakes are another gap. The model prices corrections before operational use, not losses from selecting an incorrect rate category. Such losses require separate measurement.

### The decision

I recommend a capped €300 initial evaluation, included within the setup allowance. Compare manual work, simple rules and AI on unseen examples, measuring review, correction and clarification time. Stop and rescope if the allowance cannot cover meaningful testing.

The real opportunity is reducing a verified bottleneck at acceptable cost. The FOMO would be treating a successful demonstration as proof of profitable deployment. My family’s logistics background makes the application interesting to me; the numbers determine whether it deserves investment.

---

Sources: [Week 4 value-quantification framework](https://advanced-ai-in-business.vercel.app/week/4); [my Build log](../build/log.md); [detailed calculations](../week-04-evidence/analysis.md).

AI assistance: I used AI to structure this post, review assumptions and check arithmetic. The business scenario is hypothetical. No new pilot, practitioner interview or classmate review is claimed.