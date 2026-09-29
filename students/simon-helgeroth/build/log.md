# Build Log — HR Audit Tool

## The job

**What it does, in one sentence:**
> An automated pre-publication audit tool that checks job advertisements for clarity and missing details across seven criteria.

**Input:** Raw text of a job advertisement (e.g. copied from LinkedIn or Arbetsförmedlingen). 
**Output:** A structured 7-point audit report highlighting clarity issues, missing details, and vague phrasing.
**Who would use it, and instead of what?** —

**Is the answer checkable?** Could two people independently agree whether a given output is right?
> —

---

## The test set

**Where the inputs came from:** Copied directly from public job boards
**Real, or written by me?** Real
**Anonymised?** No

**Awkward cases deliberately included** — tick what you covered:

- [ ] Ambiguous — a human would have to ask a follow-up
- [ ] Another language
- [ ] Very short input
- [ ] Very long input
- [ ] One where the correct answer is "I don't know"
- [ ] One near the boundary between two categories
- [ ] One with a typo, or written badly

---

## Runs

### Run 1 — prompt v1 — 2026-09-29

**Brief:** —  
**Model used:** —  
**Inputs tested:** —  

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

---

## Changes

### Change 1 — *date*

**What I changed:** —  
**Why I thought it would help:** —  
**What I predicted would happen:** —  
**What actually happened:** — % → — %  
**Was I right?** —  

---

## Deployment probe — from Week 2

**After the intro session (Monday 28 September, 10:25–11:25, at the fablab — machines, safety, file formats):**

| | |
|---|---|
| Machine(s) I expect to use, and why | — |
| The artifact I'm aiming for (kiosk face, counter mock, standee…) | — |
| Which weekly session or OPEN block I'll visit for file-prep, and when | — |

**When the artifact exists — the deployment observation (the evidence, not the prop):**

> **What I deployed:** — (artifact, where it stood, who walked up)  
> **What the physical context showed that the chat window could not:** —  
> **What it cost** (time, materials, revisions): —  
> **Feeds which failure class or memo section:** —  

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
