# Build Log — HR Audit Tool

## The job

**What it does, in one sentence:**
> An automated pre-publication audit tool that checks job advertisements for clarity and missing details across seven criteria.

**Input:** Raw text of a job advertisement (e.g. copied from LinkedIn or Arbetsförmedlingen). 
**Output:** A structured 7-point audit report highlighting clarity issues, missing details, and vague phrasing.

**Who would use it, and instead of what?**
> Someone who needs to review all of a company's published job ads, for example an HR or recruitment manager, or an external auditor. The tool extracts key details from each ad (start date, workplace location, required and preferred qualifications, application deadline) and shows where information is missing or unclear. This makes it possible to compile an overview of how clear the ads are. It replaces having a person read and assess every ad by hand, which takes a long time when a company has many ads published.

**Is the answer checkable?** Could two people independently agree whether a given output is right?
> Yes

---

## The test set

**Where the inputs came from:** Copied directly from public job boards
**Real, or written by me?** Real
**Anonymised?** No

**Awkward cases deliberately included** — tick what you covered:

- [x] Ambiguous — a human would have to ask a follow-up
- [x] Another language
- [ ] Very short input
- [ ] Very long input
- [x] One where the correct answer is "I don't know"
- [ ] One near the boundary between two categories
- [x] One with a typo, or written badly

---

## Runs

### Run 1 — prompt v1 — 2026-09-29

**Brief:** Test whether the prompt can reliably extract key details (start date, workplace location, requirements and preferred qualifications, application deadline) from 10 job ads, and correctly say when a detail is missing. I expect it to handle clear ads well and to struggle with ads where information is missing or ambiguous.
**Model used:** Gemini Pro 3.1
**Inputs tested:** 10 job ads, each run twice (run A and run B)

| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 |Play Area Host | Struggle with percentage| 30 Sep| 1 Oct|✓| 
| 2 |Restaurantchef| Start date| 30 Sep| 1 Oct|✗|F6|
| 3 |Truck driver |Requirements and "wanted"  | 30 Sep| 1 Oct|✗|F1 + F6|
| 4 |English teacher |Requirements | 30 Sep| 1 Oct|✗|F1|
| 5 |Caretaker |Nothing  | 30 Sep| 1 Oct|✗|F1 + F6|
| 6 |Administrative officer |Nothing  | 30 Sep| 1 Oct|✗|F4|
| 7 |Senior accountant |Workplace location | 30 Sep| 1 Oct|✗|F1 + F6|
| 8 |Recruiter |Start date | 30 Sep| 1 Oct|✓|
| 9 |Salesperson |Workplace location | 30 Sep| 1 Oct|✓|
| 10 |Teacher |Nothing | 30 Sep| 1 Oct|✗|F1 + F6|



Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs

**Result:** 3 correct out of 10 → **30%**

**Failures by type:**

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong |5| |
| F2 Fabricated | | |
| F3 Missed | | |
| F4 Format |1 | |
| F5 Refused | | |
| F6 Inconsistent |5| |

**What surprised me:**
> I was surprised by how big the differences were between the two runs. The same prompt and the same input gave different answers in 5 of 10 ads.

**The failure that would have mattered most in real use, and why:**
> The wrong application deadline (rows 4 and 5). The tool gave a wrong date, in both runs on the English teacher ad. A reviewer would trust the date and report the ad as clear, while a real applicant could miss the deadline or apply too late. A wrong date looks just as confident as a correct one, so it is hard to spot without reading the ad.

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
