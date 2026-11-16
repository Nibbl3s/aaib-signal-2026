---
week: 4
title: "Show Me the Numbers: The One Place AI Pays in My DJ Business"
author: "Thor Tack"
beat: "AI Cost Decisions for a One-Person DJ & Events Business"
skill: "Value quantification"
date: 2026-10-12
---

**Hook:** For three weeks I've argued AI out of my DJ business: not for the price (Week 2), not a $9.99 DM bot (Week 3). That was starting to look less like skepticism and more like a mood. So this week I mapped my whole value chain and asked one question per step: what's it worth, in euros, after costs?

**The Candidate:** My value chain is inquiry → quote → booking → **gig prep** → gig → invoice. Inquiry and quote are low volume (≈ 3 a month) and errors there are expensive. My Build showed it: 50% accuracy, and twice "gear on site" when I had to bring it. Gig prep is different: about 4 gigs a month at 1–2 hours each. The client's wishes ("no drum and bass", a first-dance song, a Spotify playlist) have to become a crate of tracks I own, tracks I still need, and a rough order. The AI drafts that crate. I listen, choose, and still read the floor live.

**The Numbers:**

Inputs: 48 gigs a year (4/month), prep 1.5 h per gig (my own estimate). My time is valued at €20/h (est.: student self-employed; admin hours don't replace a paid gig at €60–80/h).

| Category | Formula | €/year |
|---|---|---:|
| Time saved | 48 gigs × 0.5 h saved (est.) × €20 | 480 |
| Revenue increase | prep time doesn't limit my bookings | 0 |
| Cost reduction | no external cost replaced | 0 |
| Risk mitigation | 48 × 5% chance of missing a must-play (est.) × €300 impact × 50% reduction | 360 |
| **Gross benefit** | | **840** |

AI cost, all of it, not just tokens:

| Cost | Formula | €/year |
|---|---|---:|
| Tokens | 48 × (30k input × $2/1M + 3k output × $12/1M) × 0.92 | 4 |
| Set-up (one-off) | 5 h (library export + prompt) × €20 | 100 |
| Maintenance | 0.5 h/month × 12 × €20 | 120 |
| Human check | 48 × 10 min × €20/h | 160 |
| **AI cost Year 1** | | **384** |

**Net Year 1:** €840 − €384 = **€456**. **Year 2+:** €840 − €284 = **€556**, or €46 a month. **Payback:** €100 set-up ÷ €46/month ≈ **2.2 months**. Prices: course AI Pricing Reference, snapshot 7 Sept 2026.

Compare my Build on the inquiry → quote step: €87.50/year gross at best, and a single gear failure costs €300 (`build/business-case.md`). Same kind of tool, opposite answer.

**The Pressure Test:** Assume the AI is wrong half the time: half the crate is unusable, and it never prevents a missed song. Then time saved halves to €240, risk mitigation falls to €0, and gross is €240. Year 1: €240 − €384 = **−€144**. Year 2: €240 − €284 = **−€44**. So at 50% error it loses money. Break-even for Year 2 is €284 of time saved (with risk mitigation at zero), so about 60% of the hoped-for saving. That's testable: I'll run it on my next 5 gigs and count usable vs unusable suggestions, the same way I tested the Build.

The sensitivity that matters more: if my time is worth €40/h, Year 2 net rises from €556 to about €756 (time saved and the check both double). The whole case moves with one number I chose myself, which is why it's marked (est.).

**The Insight:** Accuracy isn't value. Where the error *lands* is value. In my quote flow an error lands at the client: a wrong price or no decks, discovered too late. In my prep flow an error lands on my own headphones, two days before the gig, while I'm listening to every track anyway. A fabricated track (F2) costs me ten seconds; a missed gear field costs me the gig. Same tool, same failure rate, a different business case. The question isn't "is this AI good enough?" but "who catches its mistakes, and when?"

*AI use: Claude drafted this post and its calculations from my own gig volume, prep time and Build results; the estimates (est.) are mine to confirm. I reviewed it.*
