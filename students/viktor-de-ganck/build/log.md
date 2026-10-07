# Build Log — Template

**Copy this into `students/your-name/build/log.md` and fill it in as you go.**

> **The run tables are easier in the spreadsheet: [`prompt-test-harness.xlsx`](/resources/prompt-test-harness.xlsx).** It calculates your success rate, counts failures by type, and flags inconsistency between runs automatically. Keep the narrative sections — the surprises, the changes, the checkpoint summaries — here in the log, because those are what get marked.

Fill it in *as you go*, not the night before a checkpoint. A log reconstructed from memory is a log that quietly loses the failures, and the failures are what you are being graded on.

---

## The job

**What it does, in one sentence:**
> Classifies one financial news item for a retail investor into event type, asset class, and fact or opinion.

**Input:** one headline plus lead, or one X post, in English or Dutch.
**Output:** three labelled lines.
**Who would use it, and instead of what?** a retail investor, instead of reading and sorting every source by hand.

**Is the answer checkable?** Could two people independently agree whether a given output is right?
> yes, mostly; event and asset are checkable against fixed categories; fact or opinion is the hardest field, which is why I wrote four rules for it.

*If the honest answer is "not really," change the job now. Week 2 is the cheapest time to do it and Week 6 is the most expensive.*

---

## The test set

**Where the inputs came from:** public news sites (Federal Reserve, Eurostat, TheStreet, VEB) and X.
**Real, or written by me?** all real.
**Anonymised?** individuals on X anonymised.

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
| 2 | Eurostat inflation 3.8% (X) | macro data / FX / fact | macro data / bonds / fact | macro data / bonds, FX, commodities / fact | ✗ | F1, F6 |
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
| 13 | Crypto analyst, sarcasm (X) | opinion only / crypto / opinion | same | same | ✓ | |
| 14 | Macro commentator, rate odds (X) | opinion only / FX / opinion | rate decision / bonds / fact | macro data / bonds / fact | ✗ | F1, F6 |
| 15 | Coin Bureau BTC -30% (X) | opinion only / crypto / opinion | same | same | ✓ | |

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
> Item 14. An opinion post on X full of percentages was classified as an official rate decision (run A) and as macro data (run B), and both times as fact. For a retail investor, that is the most dangerous mistake possible: speculation that looks like hard news because it contains numbers. It was also inconsistent, so the same post can be labelled differently tomorrow.

*This one line is the most valuable thing in the log. Not the success rate — which failure would have caused actual damage.*

---

## Changes

Every time you change the prompt, record it here **before** you re-run. Predicting the effect first, then checking, is what separates a change from a guess.

### Change 1 — *date*

**What I changed:** —
**Why I thought it would help:** —
**What I predicted would happen:** —
**What actually happened:** — % → — %
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
| Machine(s) I expect to use, and why | — |
| The artifact I'm aiming for (kiosk face, counter mock, standee…) | — |
| Which weekly session or OPEN block I'll visit for file-prep, and when | — |

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
| Model / tier | — |
| Prices used (with snapshot date) | — |
| Measured input tokens per run | — |
| Measured output tokens per run | — |
| **Cost per run** | — |
| Realistic monthly volume, and why that number | — |
| **Monthly token cost** | — |

**Error cost — the part that matters:**

| | |
|---|---|
| Measured error rate | — % on — inputs |
| Who fixes an error here? | — |
| Cost per error | — |
| **Monthly error cost** | — |
| **Error cost ÷ token cost** | — × |

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
> **What it does:** —
> **Measured:** — % on — inputs
> **Dominant failure type:** —
> **The failure that would matter most:** —
> **What I'd change first:** —

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
