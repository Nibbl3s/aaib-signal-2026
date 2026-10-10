## The job

**What it does, in one sentence:**
> Classifies real UI design feedback into predefined categories and converts it into actionable tasks for creative project teams.

**Input:** Individual design feedback comments from the publicly available Google UICrit dataset.
**Output:** A structured response containing:
- Design issue category
- Whether action is required
- One concise, actionable design task
  
**Who would use it, and instead of what?** Project managers at creative agencies, instead of manually categorising design feedback and translating each comment into an actionable task for designers.

**Is the answer checkable?** Yes, within defined evaluation criteria. Classification can be compared against manually established reference labels, and generated tasks can be checked against the original feedback for factual accuracy. However, some design comments are subjective or ambiguous, so two human evaluators may disagree. These limitations must be documented.

*If the honest answer is "not really," change the job now. Week 2 is the cheapest time to do it and Week 6 is the most expensive.*

---

## The test set

**Where the inputs came from:** Google Research UICrit, a publicly available dataset containing critiques of mobile user interface designs. https://github.com/google-research-datasets/uicrit/blob/main/uicrit_public.csv 
**Real, or written by me?** Real dataset comments, including feedback from human reviewers.
**Anonymised?** The dataset is publicly available. Only relevant design feedback will be used, without adding personal or confidential client information.

**Awkward cases deliberately included** — tick what you covered:

- [x] Ambiguous — a human would have to ask a follow-up
- [x] Another language (german, dutch)
- [ ] Very short input
- [ ] Very long input
- [x] One where the correct answer is "I don't know"
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

**Brief:** Test whether a basic prompt can consistently classify publicly available design feedback and generate actionable design tasks without inventing information.
**Model used:** To be recorded during testing.
**Inputs tested:** 15 selected UICrit comments.

| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | | | | | ✓ / ✗ | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |
| 9 | | | | | | |
| 10 | | | | | | |

Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs

**Result:** — correct out of — → **—%**

**Failures by type:**

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong | | |
| F2 Fabricated | | |
| F3 Missed | | |
| F4 Format | | |
| F5 Refused | | |
| F6 Inconsistent | | |

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
