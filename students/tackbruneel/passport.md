# Skills Passport — Thor Tack

Thirteen skills. Three checkpoints: end of Weeks 4, 8 and 12.
Rating: 🟢 Confident / 🟡 Getting there / 🔴 Need practice — plus **one sentence of evidence**
(something you did, not how you feel).

This is not a grade. Nobody marks it. Your teacher reads it and tells you where they see it
differently — the disagreement is the entire point. Commit it **on its own**, not bundled
with a post. In Week 12 you will open this file's history and see three versions of yourself.

## Checkpoint 1 — end of Week 4

**My Build in three lines**
- *What it can do:* pull dates, times, venue and guest count out of a real booking inquiry. Dates were 30/30 correct.
- *What it can't do:* tell reliably whether I have to bring my own gear. Twice it said "on site" when the client had asked me to bring decks.
- *The number that proves it:* 50% fully correct on 15 real inputs × 2 runs (n = 30); 4/30 runs got the gear field dangerously wrong.

| # | Skill | Rating | Evidence |
|---|-------|--------|----------|
| 1 | Cost literacy | 🟡 | My Week 1 post showed tokens cost €0.03/month while errors cost ≈ €150, but in Week 3 I found my volume assumption (8 inquiries/month) was ~3× too high once I counted my real form and mail data. |
| 2 | Capability skepticism | 🟢 | I measured my own tool at 50% on 30 runs, classified all 19 failures (F1–F6), and found the biggest failure source was my own prompt rule, not the model. |
| 3 | Vendor claim detection | 🟡 | On NexusAI I tagged 9 avoidances where the reveal had 5, and I can argue each one. But I've only taken apart one real vendor (InstantDM: its 7 → 18 bookings is arithmetic, not a measurement), and I haven't put questions to a vendor myself. |
| 4 | Value quantification | 🟡 | I built a full value model for my Build (net ≈ −€1,401 unchecked, +€32/year checked) and a positive one for gig prep (+€556/year), but most inputs are still my own estimates marked (est.), not measured. |

## Checkpoint 2 — end of Week 8

**My Build in three lines** (Week 4 answers in brackets)
- *What it can do:* pull all booking fields out of a real inquiry, 22/30 fully right on Haiku with prompt v2, and give the same answer twice on all 15 inputs. (Week 4: dates only, 50%.)
- *What it can't do:* read a "yes" tick box with no gear named as "I don't know". T06 still says decks are on site in both runs. And it doesn't run well on a model I own: 3/30 on Llama 3B. (Week 4: the gear field in general.)
- *The number that proves it:* 22/30 strict on 15 real inputs × 2 runs; dangerous gear error 2/30 = 7% (was 4/30 = 13%). (Week 4: 50%, 4/30.)

**Checkpoint 1 skills, re-rated (not copied)**

| # | Skill | Week 4 | Now | Evidence |
|---|-------|--------|-----|----------|
| 1 | Cost literacy | 🟡 | 🟢 | My Week 8 cost model splits €0.46 of cash from 24 h of my own time, and shows the model is €0.005 of a €5.14 cost per correctly handled inquiry. |
| 2 | Capability skepticism | 🟢 | 🟢 | I predicted v2 before running it (24/30) and measured 22/30. I also found the same prompt change made the small model worse (12 → 5/30 with code), which I hadn't expected. |
| 3 | Vendor claim detection | 🟡 | 🟡 | Still one real vendor taken apart (InstantDM) and one set of real terms read (Gemini, Week 7). I haven't put questions to a vendor myself yet. |
| 4 | Value quantification | 🟡 | 🟡 | The Week 8 build gate (build only at ≥ 15 inquiries/month, 14-month payback) is a real calculation, but the 12 minutes saved per inquiry is still my estimate, not timed. |

**Checkpoint 2 skills**

| # | Skill | Rating | Evidence |
|---|-------|--------|----------|
| 5 | Market mechanism thinking | 🟡 | My Week 5 GEO audit scored DJ Thorax 6/18: 0 of 6 AI answers named me, and I traced it to zero third-party mentions, not my own site. But I haven't re-tested whether my fixes changed anything. |
| 6 | Cost projection | 🟢 | Week 6 measured real tokens (644/151, 949/157), and in Week 8 I projected Month 1/6/12 with error cost included and the price source dated. The token line never passes €1/month. |
| 7 | Lock-in detection | 🟢 | I scored my own stack 6/15 against Google's real terms and actually migrated my Build to a local model to price the exit (Week 7). The Week 8 sketch marks 5 (L) components. |
| 8 | Integration & architecture design | 🟡 | I designed a five-layer intake for Thorax Studio with a fallback that is today's process. But I missed the Monday session, so no board ever attacked it and I have no critique to learn from. |

**Reflection.** In Week 1 I thought the question was which AI to use and what it costs. Now the first thing I ask is where the error lands and who catches it, because in all eight weeks the model price never once decided anything. The token bill was always fractions of a cent, and the decision always turned on one field going wrong on one night.

## Checkpoint 3 — end of Week 12

| 9 | Attack surface thinking | — | |
| 10 | Regulatory reasoning | — | |
| 11 | Cross-domain transfer | — | |
| 12 | Synthesis | — | |
| 13 | Defence | — | |
