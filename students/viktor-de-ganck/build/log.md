# Build Log — Template

**Copy this into `students/your-name/build/log.md` and fill it in as you go.**

> **The run tables are easier in the spreadsheet: [`prompt-test-harness.xlsx`](/resources/prompt-test-harness.xlsx).** It calculates your success rate, counts failures by type, and flags inconsistency between runs automatically. Keep the narrative sections — the surprises, the changes, the checkpoint summaries — here in the log, because those are what get marked.

Fill it in *as you go*, not the night before a checkpoint. A log reconstructed from memory is a log that quietly loses the failures, and the failures are what you are being graded on.

---

## The job

**What it does, in one sentence:**
> Classifies one financial news item for a investor into event type, asset class, and fact or opinion.

**Input:** one headline plus lead, or one opinion piece, in English or Dutch.
**Output:** three labelled lines.
**Who would use it, and instead of what?** a retail investor, instead of reading and sorting every source by hand.

**Is the answer checkable?** Could two people independently agree whether a given output is right?
> yes, mostly; event and asset are checkable against fixed categories; fact or opinion is the hardest field, which is why I wrote four rules for it.

*If the honest answer is "not really," change the job now. Week 2 is the cheapest time to do it and Week 6 is the most expensive.*

---

## The test set

**Where the inputs came from:** public news sites (Federal Reserve, Eurostat, TheStreet, VEB, The Economist, Financial Times).
**Real, or written by me?** all real.
**Anonymised?** individuals named in opinion pieces anonymised.

**Awkward cases deliberately included** — tick what you covered:

- [x] Ambiguous — a human would have to ask a follow-up
- [x] Another language
- [x] Very short input
- [ ] Very long input
- [x] One where the correct answer is "I don't know"
- [x] One near the boundary between two categories
- [x] One with a typo, or written badly

*A test set with none of these will tell you your tool is excellent. It isn't; your test set is.*

The inputs themselves and their expected answers live in `test-set.md`. **Write the expected answer before you run the tool** — every time.

---

## Runs

One table per run. A run is: every input, twice, against one version of the prompt.

**Every run starts with one line: `Brief: …`** — one sentence of intent, written **before** the
run. What the run is for, what you expect it to show. Two people could disagree on a vague
brief; they can't on a specific one. (This is the same expected-answers-first rule, one step
earlier — applied to the task itself.) Read in sequence at the checkpoints, your briefs show
your thinking sharpening: v1 vague, v3 sharp. The first output reveals what the brief failed
to specify — revise the brief, then re-run. A brief is a hypothesis, not a contract.

### Run 1 — prompt v1 — 7 October 2026

**Brief:** I expect v1 to get the event type mostly right but disagree with me on fact or opinion, because that's the hardest field.
**Model used:** Claude Sonnet 5.5 (claude.ai)
**Inputs tested:** 15, each run twice (A and B)

**Deviation:** in run A, items 1 to 6 each ran in a new chat; items 7 to 15 ran in one shared chat to save time, so they may be influenced by earlier items. Run B: every item in a new chat. Labels were checked with Claude for consistency, and the tested model is also Claude; noted as a possible bias.

| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Fed raises rates | rate decision / FX, bonds / fact | rate decision / bonds / fact | rate decision / bonds / fact | ✗ | F3 (missed FX) |
| 2 | Eurostat inflation 3.8% (The Economist) | macro data / FX / fact | macro data / bonds / fact | macro data / bonds, FX, commodities / fact | ✗ | F1, F6 |
| 3 | Option Care buyout (unconfirmed) | company news / equities / opinion | same | same | ✓ | |
| 4 | Google–Constellation deal | company news / equities / fact | same | same | ✓ | |
| 5 | G7 oil reserve release | regulation / commodities / fact | market move / commodities / fact | market move / commodities / fact | ✗ | F1 |
| 6 | Treasury yields lower | market move / FX, equities, bonds / fact | market move / bonds / fact | market move / bonds / fact | ✗ | F3 (missed FX, equities) |
| 7 | Red-dyed diesel order | regulation / commodities / fact | same | same | ✓ | |
| 8 | SAP neemt TechWolf over (NL) | company news / equities / fact | same | same | ✓ | |
| 9 | US handelstekort (NL) | macro data / FX / fact | same | same | ✓ | |
| 10 | Seagate overnamestrijd (NL) | company news / equities / opinion | same | same | ✓ | |
| 11 | Jefferies koersdoel (NL) | company news / equities / opinion | opinion only / equities / opinion | opinion only / equities / opinion | ✗ | F1 |
| 12 | Beursagenda (NL) | none / none / fact | same | same | ✓ | |
| 13 | Crypto analyst, sarcasm (Financial Times) | opinion only / crypto / opinion | same | same | ✓ | |
| 14 | Macro commentator, rate odds (Financial Times) | opinion only / FX / opinion | rate decision / bonds / fact | macro data / bonds / fact | ✗ | F1, F6 |
| 15 | Coin Bureau BTC -30% (Financial Times) | opinion only / crypto / opinion | same | same | ✓ | |

Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs

**Result:** Run A 9 of 15 → 60%. Run B 9 of 15 → 60%. Same answer in both runs: 13 of 15 (87%). Per field over both runs: fact or opinion 93%, event 80%, asset 73%.

**Failures by type:**

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong | 4 | items 2, 5, 11, 14 |
| F2 Fabricated | 0 | |
| F3 Missed | 2 | items 1, 6: incomplete asset list |
| F4 Format | 0 | all 30 answers followed the 3-line format |
| F5 Refused | 0 | |
| F6 Inconsistent | 2 | items 2 and 14 differ between A and B |

**What surprised me:**
> My Brief was wrong. I expected fact or opinion to be the hardest field, but it was the best (93%), probably because I wrote four explicit rules for it. Asset was the worst field (73%): the model chose "bonds" in 4 of 6 failures and almost always gave only one asset, while my prompt never says when to list more than one. The field without rules failed most. Running items 7 to 15 in a shared chat changed little: in the clean run B only item 14 gave a different answer.

**The failure that would have mattered most in real use, and why:**
> Item 14. An opinion piece in the Financial Times full of percentages was classified as an official rate decision (run A) and as macro data (run B), and both times as fact. For a retail investor, that is the most dangerous mistake possible: speculation that looks like hard news because it contains numbers. It was also inconsistent, so the same post can be labelled differently tomorrow.

*This one line is the most valuable thing in the log. Not the success rate — which failure would have caused actual damage.*

---

## Changes

Every time you change the prompt, record it here **before** you re-run. Predicting the effect first, then checking, is what separates a change from a guess.

### Change 1 - 12 October 2026 (planned, not yet run)

**What I changed:** nothing in the prompt yet. Planned, two rules, both becoming v2: (A) list every asset class a news item clearly affects, for example FX alongside bonds for a rate decision; (B) expectations, odds or forecasts by an individual or a market are opinion even when they contain numbers; official statistics and central bank decisions stay fact.
**Why I thought it would help:** item 14 failed on fact or opinion in both runs because the percentages made it look like data, and the prompt has no rule for numbers inside an opinion.
**What I predicted would happen:** items 1, 6 and 14 become fully correct: 12 of 15 (80%), up from 9 of 15 (60%). Risk: item 2 ("expected" in a Eurostat flash estimate) could wrongly flip to opinion. I will also test on new items so the rules are not only fitted to this test set.
**What actually happened:** re-run still to do; result goes here as % → %
**Was I right?** —

*Being wrong here is fine and common. Not noticing you were wrong is the problem.*

---

## Deployment probe — from Week 2

One section, kept short. It feeds the same checkpoints — write it when you
have something to write, not on a schedule. Two entries are dated: the plan
rows are part of Build Checkpoint 1 (Week 4); the deployment observation is
logged before Week 8 so it can feed your CP2 revision delta.

**After the intro session (Monday 28 September, 10:25–11:25, at the fablab — machines, safety, file formats):**

| | |
|---|---|
| Machine(s) I expect to use, and why | Laser cutter: fast and cheap for flat parts in plywood or acrylic, which suits a small desk object. |
| The artifact I'm aiming for (kiosk face, counter mock, standee…) | A desk stand holding a printed "morning briefing" card with three classified headlines and a QR code to the tool, placed on a desk to simulate a retail investor's morning routine. |
| Which weekly session or OPEN block I'll visit for file-prep, and when | A fablab OPEN block in week 5 (week of 19 October 2026); exact slot still to be booked. I missed the intro session (28 Sep) because I started in the wrong course group. |

**When the artifact exists — the deployment observation (the evidence, not the prop):**

> **What I deployed:** — (artifact, where it stood, who walked up)
>
> **What the physical context showed that the chat window could not:** —
> (e.g. people walked past it; they read it but didn't know what to ask; the printed answer went stale the day prices changed)
>
> **What it cost** (time, materials, revisions): —
>
> **Feeds which failure class or memo section:** —

*The probe teaching you nothing new is a finding too — write that, with the observation that proves it.*

---

## Cost — from Week 6

| | |
|---|---|
| Model / tier | gemini-3.1-flash-lite (list ID gemini-3.1-flash-lite-preview), Budget tier, Gemini API free tier |
| Prices used (with snapshot date) | $0.25 input / $1.50 output per 1M tokens, AI Pricing Reference snapshot 7 Sep 2026, accessed 30 Oct 2026; $1 = €0.92 |
| Measured input tokens per run | 220.5 (two calls on 30 Oct 2026: item 14 = 247, item 11 = 194) |
| Measured output tokens per run | 18 (item 14 = 20, item 11 = 16); no thinking tokens billed |
| **Cost per run** | $0.0000821 (€0.0000756) |
| Realistic monthly volume, and why that number | 880 runs: 40 items/day (est.) × 22 working days at Graslei Wealth (composite, Week 4); my test set drew 7 items from two sources on one day |
| **Monthly token cost** | €0.07 |

**Error cost — the part that matters:**

| | |
|---|---|
| Measured error rate | 40% on 15 inputs (Week 2, Claude Sonnet 5.5; on Flash-Lite only 2 items tested: item 11 right, item 14 wrong as "rate decision / fact") |
| Who fixes an error here? | The advisor who reads the morning list re-reads the item and corrects the label |
| Cost per error | 3 min (est.) × €57/h loaded = €2.85 |
| **Monthly error cost** | 352 errors × €2.85 = €1,003 |
| **Error cost ÷ token cost** | about 15,000 × |

---

## Second model — from Week 7

| | Model A | Model B |
|---|---|---|
| Model | | |
| Success rate on the same test set | | |
| Cost per run | | |
| Notable difference in *how* it failed | | |

**Would switching be a day's work or a rebuild?**
> —

---

## Attack — from Week 9

| Attack tried | What I did | Worked? | What it got |
|---|---|---|---|
| Instruction override | | | |
| Instruction hidden inside the input | | | |
| Extract the prompt itself | | | |
| Out-of-scope request | | | |

**What I would fix first, and why that one:**
> —

---

## Regulatory — from Week 10

| | |
|---|---|
| AI Act tier, with the reasoning | — |
| Annex reference, if high-risk | — |
| Does it process personal data? | — |
| Lawful basis, if so | — |
| Article 22 relevant? | — |
| Would deploying it need anything I have not done? | — |

---

## Checkpoint summaries

Write these at Weeks 4, 8 and 12. Five lines each — they are what gets marked, and what you will copy into the memo.

### Checkpoint 1 — Week 4
> **What it does:** Classifies one financial news item (English or Dutch) into event type, asset class, and fact or opinion, for a retail investor.
> **Measured:** 60% on 15 inputs (9 of 15 fully correct in each of two runs; the same answer in both runs on 13 of 15). With 15 inputs the 95% interval is 36% to 80%.
> **Dominant failure type:** F1 wrong, 4 of the 6 failing items. The weakest field is asset class (73%); fact or opinion is the strongest (93%).
> **The failure that would matter most:** item 14, an FT opinion piece full of rate-hike percentages, labelled as an official rate decision (run A) and as macro data (run B), both times as fact.
> **What I'd change first:** add one rule to the prompt: an individual's or a market's expectations, odds or forecasts are opinion even when they contain numbers, while official statistics and central bank decisions stay fact. Then re-test on the 15 items plus 5 fresh opinion-piece items, so the rule is not just fitted to item 14.

### Checkpoint 2 — Week 8
> **Changed since CP1:** —
> **Measured now:** — % (was — %)
> **Did my change do what I predicted?** —
> **Cost per run at realistic volume:** —
> **What I now know that I didn't in Week 4:** —

### Checkpoint 3 — Week 12
> **Final measured performance:** — % on — inputs
> **The three numbers going into my memo:** —
> **The limitation I have to state in the memo:** —
> **What I would do differently if I started again:** —
> **What this taught me that no reading would have:** —

---

*Never delete a failure. A log full of successes is a log that has been curated, and a curated log is worth nothing.*

Labels written by me and checked with Claude for consistency with my own rules; prompt v1 drafted with Claude from my rules.
Run results entered and summarised with Claude; verdicts and conclusions are my own.
Checkpoint 1 summary lines drafted with Claude from my logged results; the data and the failure judgements are my own.

## Build Checkpoint 2 (Week 8): revision v1 to v2

### Prediction (written Wed 25 Nov 2026, 13:25, before any v2 run)
My words: "I expect the errors will fall by 15% because of the updated prompt."
Made specific (confirmed by me): errors in the fields the change targets (event and fact_or_opinion) fall by about 15%, from 10 wrong field-answers in v1 (event 6, fact/opinion 4, out of 60) to about 8 or 9. Asset errors (12 of 30 in v1) should stay about the same, because v2 has no asset rule.

### v1 re-baseline (Claude Code, claude-sonnet-5-5, 25 Nov 2026 13:15)
7/15 fully correct in both runs (the Week 4 run in the claude.ai chat gave 9/15). Same answer in both runs: 13/15. Event 24/30, asset 18/30, fact/opinion 26/30. Format problems: 0/30.

### Failure coding rule
An extra asset, or a wrong event or fact_or_opinion, is F1. A missing or incomplete asset list is F3. Different answers between runs on the same item is F6. No F2, F4 or F5 cases so far.

## Build Checkpoint 2 (Week 8): revision v1 to v2

### Revision and reason
v2 = v1 plus three rules about opinion labels: (1) use event "opinion only" when the item is only someone's forecast or commentary; (2) if the opinion is about a specific company event, keep "company news" and set fact_or_opinion to opinion; (3) probabilities, market expectations and forecasts are opinion even when they contain numbers. Reason: in the v1 baseline, items 11 (Jefferies price target) and 14 (rate odds) were labelled as fact or with the wrong event type, which is the dangerous failure for a retail investor (opinion read as fact).

### Prediction (written before measuring)
See the prediction written above in this entry.

### Re-measure on the same 15-item test set (same harness, 2 runs per item)

| | v1 (13:15) | v1 (13:29) | v2 |
|---|---|---|---|
| Fully correct in both runs | 7/15 | 7/15 | 8/15 |
| Same answer in both runs | 13/15 | 13/15 | 14/15 |
| Event correct | 24/30 | 25/30 | 28/30 |
| Asset correct | 18/30 | 18/30 | 18/30 |
| Fact/opinion correct | 26/30 | 28/30 | 30/30 |
| Wrong event + fact/opinion answers | 10 | 7 | 2 |

Chance noise: v1 against itself moved by 3 wrong answers (10 to 7), so differences smaller than about 3 are not evidence.

### Delta (EDIT into your own words)
I predicted a 15% drop in event and fact/opinion errors. They fell from 7 to 2 (10 to 2 against the first v1 run), so I under-predicted. The new rules target opinion labels and fixed items 11 and 14, which are the items that inspired them. Asset stayed at 18/30, so a longer prompt alone does not reduce errors. The change was one of several options Claude proposed; I chose it because it looked the most valid.

### Out-of-sample check (6 fresh items, answer key written before the run, 2 runs per item)

| | v1 | v2 |
|---|---|---|
| Fully correct in both runs | 3/6 | 2/6 |
| Same answer in both runs | 6/6 | 5/6 |
| Event correct | 8/12 | 7/12 |
| Asset correct | 12/12 | 12/12 |
| Fact/opinion correct | 10/12 | 10/12 |
| Wrong event + fact/opinion answers | 6/24 | 7/24 |

Result: the improvement from the core test set did not show up on new items. v1 and v2 are equal within noise (7 against 6 wrong answers). This is not evidence that v2 is worse. It is evidence that the core result was partly fitted to items 11 and 14, which motivated the rules.

### Failure coding (fresh items)
- F1 event, both versions, both runs: model says "regulation", my key says "company news". F1 wrong. The item is an authority decision about a takeover, so my key is arguable.
- F4 event, both versions, both runs: model says "company news", my key says "regulation" (OPEC+ output decision). F1 wrong.
- F6 fact/opinion, both versions, both runs: model says "fact" for a bid plus an analyst remark that the premium is too low. F1 wrong, and it is the dangerous direction (opinion read as fact). Mixed item, so my key is arguable. Rule 2 did not trigger.
- F2 event, v2 run B only: "market move" in one run and "company news" in the other. F6 inconsistent.

### Limitations
15 core items and 6 fresh items, 2 runs each. Core and fresh keys were written by the same person, and three fresh labels (F2 fact/opinion, F2 asset, F4 event) were changed once after a consistency check against my own earlier key. Fresh asset answers were all correct, but the fresh key follows the item text literally, while the core key also counts assets that are only implied, so asset scores are not comparable between the two sets. Only F5 and F6 test the opinion rules.

### Observation
Both versions show the same weak spot on new items: the boundary between "regulation" and "company news" when an authority or organisation decides something (F1, F4). Candidate for a v3 rule. It must be tested on new items, not on these six.

### Cost per run (ESTIMATE, not measured)
One classification call is about 330 input tokens (prompt plus item) and 25 output tokens. At the Standard tier from the AI Pricing Reference (snapshot 7 Sep 2026): 330 x EUR 1.84 / 1M + 25 x EUR 11.04 / 1M = about EUR 0.0009 per item. A full test run (15 items x 2 versions x 2 runs = 60 calls) is about EUR 0.05, the fresh check (24 calls) about EUR 0.02. Claude Sonnet 5.5 is not in the price snapshot, so the Sonnet 5 price (EUR 1.84 / EUR 9.20 per 1M) gives about EUR 0.0008. The headless runs also carry Claude Code overhead, so the real bill for those runs was higher than this estimate.

### Fablab observation
Not run.

### Decision
Keep v2, status: not confirmed out of sample. Cost per run is an estimate, not measured.
