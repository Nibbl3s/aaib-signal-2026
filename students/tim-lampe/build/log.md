 Build Log — Template

**Copy this into `students/your-name/build/log.md` and fill it in as you go.**

> **The run tables are easier in the spreadsheet: [`prompt-test-harness.xlsx`](/resources/prompt-test-harness.xlsx).** It calculates your success rate, counts failures by type, and flags inconsistency between runs automatically. Keep the narrative sections — the surprises, the changes, the checkpoint summaries — here in the log, because those are what get marked.

Fill it in *as you go*, not the night before a checkpoint. A log reconstructed from memory is a log that quietly loses the failures, and the failures are what you are being graded on.

---

## The job

**What it does, in one sentence:**
> Compares to annual reports of the same company from consecutive years and flags inconsistencies naming the line items and values involved

**Input:** two financial reports year N, year N+1
**Output:** A list of flags in the format Flag / Values / Type
**Who would use it, and instead of what?** Analysts or auditors who would otherwise reconcile prior year comparatives by hand

**Is the answer checkable?** Could two people independently agree whether a given output is right?
> Partly. Footing errors and mismatched prior-year values are objectively checkable. "Unexplained swing" depends on the 25% threshold, and whether something is "explained" is a judgement call. Missing items are hard to separate from legitimate changes caused by divestments and restructuring

*If the honest answer is "not really," change the job now. Week 2 is the cheapest time to do it and Week 6 is the most expensive.*

---

## The test set

**Where the inputs came from:** —
**Real, or written by me?** —
**Anonymised?** —

**Awkward cases deliberately included** — tick what you covered:

- [ ] Ambiguous — a human would have to ask a follow-up
- [ ] Another language
- [ ] Very short input
- [ ] Very long input
- [ ] One where the correct answer is "I don't know"
- [ ] One near the boundary between two categories
- [ ] One with a typo, or written badly

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

### Run 1 — prompt v1 — *date*

**Brief:** —
**Model used:** Claude Sonnet 5.5
**Inputs tested:** Siemens AR 2019 vs AR 2020

| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Siemens GB 2019 & 2020 | Siemens excluding Siemens Energy | 3 Flags | 11 Flags | ✗ | F3 |
| 2 | Wirecard GB 2017 & 2018 | a lot of flags | 10 Flags | 11 Flags | ✗ | F3 |
| 3 | Rheinmetall GB 2024 & 2025 | Nothing really | 3 Flags | 3 Flags | ✓ | |
| 4 | Thyssenkrupp GB 2024 & 2025 | I don't know what to expect | 7 Flags | 3 Flags | ✗ | F6 |
| 5 | Apple 2024 & 2025 | No Flags | 4 Flags | 4 Flags | ✗ | F6 |
| 6 | ASML 2024 & 2025 | I don't know what to expect | 9 Flags | 16 Flags | ✗ | F6 |
| 7 | Telekom 2024 & 2025 | No flags | 5 Flags | 2 Flags | ✓ | |
| 8 | Allianz 2024 & 2025 | No flags | 5 Flags | 5 Flags | ✗ | F6 |
| 9 | Münchener Rück 2024 & 2025 | No flags | 8 Flags | 2 Flags | ✗ | F6 |
| 10 | SAP 2024 & 2025 | No flags | 6 Flags | Fail | ✗ | F6 |

Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs

**Result:** 2 correct out of 10 → **20%**

**Failures by type:**

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong | 0 | |
| F2 Fabricated | 0 | |
| F3 Missed | 2 | Siemens, Wirecard: A and B used different methods, A missed a lot that B found |
| F4 Format | 0 | |
| F5 Refused | 0 | |
| F6 Inconsistent | 6 | Thyssenkrupp, Apple, ASML, Allianz, Münchener Rück, SAP: runs differ in flags, in what counts as explained, or in one case failed |

**What surprised me:**
> —

**The failure that would have mattered most in real use, and why:**
> —

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
