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
- [x] Very short input
- [x] Very long input
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

### Run 1 — prompt v1 — *11.10.2026*

**Brief:** Test whether a basic prompt can consistently classify publicly available design feedback and generate actionable design tasks without inventing information.
**Model used:** To be recorded during testing.
**Inputs tested:** 15 selected UICrit comments.

| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| T01 | small tennis text | READABILITY; YES; UI_DESIGNER | READABILITY; YES; UI_DESIGNER | READABILITY; YES; UI_DESIGNER | Acceptable | — |
| T02 | championship contrast | READABILITY; YES; UI_DESIGNER | READABILITY; YES; UI_DESIGNER | READABILITY; YES; UI_DESIGNER | Acceptable | — |
| T03 | crowded screen | LAYOUT_SPACING; YES; UI_DESIGNER | LAYOUT_SPACING; YES; UI_DESIGNER | LAYOUT_SPACING; YES; UI_DESIGNER | Acceptable | — |
| T04 | search bar margin | LAYOUT_SPACING; YES; UI_DESIGNER | LAYOUT_SPACING; YES; UI_DESIGNER | LAYOUT_SPACING; YES; UI_DESIGNER | Acceptable | — |
| T05 | menu prominence | VISUAL_HIERARCHY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | Acceptable | — |
| T06 | arrow prominence | VISUAL_HIERARCHY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | Acceptable | — |
| T07 | left-aligned menu | LAYOUT_SPACING; CLARIFICATION_NEEDED; PROJECT_MANAGER | LAYOUT_SPACING; CLARIFICATION_NEEDED; PROJECT_MANAGER | LAYOUT_SPACING; CLARIFICATION_NEEDED; PROJECT_MANAGER | Acceptable | — |
| T08 | blurred background | VISUAL_HIERARCHY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | Acceptable | — |
| T09 | Facebook icon alignment | LAYOUT_SPACING; YES; UI_DESIGNER | LAYOUT_SPACING; YES; UI_DESIGNER | LAYOUT_SPACING; YES; UI_DESIGNER | Acceptable | — |
| T10 | German left-aligned text | LAYOUT_SPACING; CLARIFICATION_NEEDED; PROJECT_MANAGER | LAYOUT_SPACING; CLARIFICATION_NEEDED; PROJECT_MANAGER | LAYOUT_SPACING; CLARIFICATION_NEEDED; PROJECT_MANAGER | Acceptable | — |
| T11 | Dutch logo visibility | READABILITY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | Acceptable (category alt.) | — |
| T12 | typo: login contrast | READABILITY; YES; UI_DESIGNER | READABILITY; YES; UI_DESIGNER | READABILITY; YES; UI_DESIGNER | Acceptable | — |
| T13 | typos: unused space | LAYOUT_SPACING; YES; UI_DESIGNER | VISUAL_CONSISTENCY; YES; UI_DESIGNER | VISUAL_HIERARCHY; YES; UI_DESIGNER | A category wrong; B plausible | F1 (A), F6 |
| T14 | long: font consistency | VISUAL_CONSISTENCY; YES; UI_DESIGNER | VISUAL_CONSISTENCY; YES; UI_DESIGNER | VISUAL_CONSISTENCY; YES; UI_DESIGNER | Acceptable | — |
| T15 | grammar: checkbox sizing | LAYOUT_SPACING; YES; UI_DESIGNER | LAYOUT_SPACING; YES; UI_DESIGNER | LAYOUT_SPACING; YES; UI_DESIGNER | Acceptable | — |


Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs

**Result (strict complete output):** 26/30 → **86.7%** (category exact-match + correct action + correct role + acceptable task).
**Task acceptability (manual):** 30/30 → **100% provisional**; all tasks were relevant to the source feedback, with no confirmed inventions.
**Substantive output acceptability:** 29/30 → **96.7% provisional** when defensible alternative categories count as acceptable (T11 twice and T13 B).

**Failures by type:**

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong | 1 confirmed | T13 A: VISUAL_CONSISTENCY is unsupported by feedback about visual dominance/unused space. Four strict category-label mismatches exist, but T11 A/B and T13 B are defensible alternatives. |
| F2 Fabricated | 0 confirmed | No clearly invented UI element, deadline or specification in tasks. |
| F3 Missed | 0 confirmed | No omitted requirement that is explicitly present in the version of feedback actually tested. |
| F4 Format | 0 observed | All four fields were provided in recorded outputs. |
| F5 Refused | 0 observed | No refusals. |
| F6 Inconsistent | 1 case | T13 category differs between run A and B; a simultaneous F1/F6 is possible. |

**What surprised me:**
> Even after removing explicit "To fix this..." recommendations from most test inputs, the assistant generated usable tasks. Category wording was less reliable than action decisions and role assignments. The reference labels are sometimes open to multiple reasonable readings (notably T11 and T13).

**The failure that would have mattered most in real use, and why:**
> A wrongly labelled or overconfident task could be routed to the wrong workflow or acted on without clarification. T13 showed category inconsistency; T07/T10 show the value of asking for clarification rather than treating a layout observation as an instruction.

*This one line is the most valuable thing in the log. Not the success rate — which failure would have caused actual damage.*

**Methodological limitations:**
> T01 includes an explicit "To fix this" recommendation while most other inputs do not. The test set contains translated, edited and deliberately misspelled feedback, so describe it as UICrit-based/adapted rather than 15 verbatim originals. The 30 outputs are not 30 independent real-world projects. Manual task acceptability is a reviewer judgment, not an independent gold-standard score. Prompt v1 was only tested on one model as recorded here; model identity and dates must be filled in.

*Do not delete observed errors. Preserve original chat transcripts and exact inputs if available.*
---

### Change 1 – Prompt v2 – 13 October 2026

**What I changed:**

Removed the predefined options for CATEGORY and RESPONSIBLE_ROLE. The AI can now independently identify the most appropriate design category and professional role. Instructions for consistent terminology remain in place.

The three ACTION_REQUIRED options and the rules for generating tasks remain unchanged.

**Why I thought it would help:**

In real creative agencies, client feedback does not always fit predefined design categories. Giving the AI more flexibility might help it better understand unusual feedback and suggest appropriate responsibilities.

During v1 testing, some AI-generated categories differed from the reference labels but were still professionally reasonable. This suggested that strict categories might sometimes limit the usefulness of the output.

**What I predicted would happen:**

I expect the AI to maintain at least 90% agreement with the reference decisions for ACTION_REQUIRED and continue generating accurate tasks.

I also expect more variation in CATEGORY and RESPONSIBLE_ROLE labels between repeated tests, because the model no longer selects from fixed lists.

This experiment will test whether the additional flexibility outweighs the potential loss of consistency.

**What actually happened:**

Prompt v2 was tested on 11 feedback inputs (5 standard and 6 challenging cases), with one response per input.

The AI correctly identified ACTION_REQUIRED and RESPONSIBLE_ROLE in 10 out of 11 cases (90.9%). The generated tasks were appropriate in 10 out of 11 cases.

Removing predefined categories resulted in more specific classifications, such as VISUAL_CLUTTER, COLOR_CONTRAST and TYPOGRAPHY_CONSISTENCY. In several cases, these were more descriptive than my original reference categories.

However, T10 revealed an important weakness: the AI converted ambiguous German feedback into an actionable task instead of requesting clarification. One category also contained a formatting error.

**Was I right?**

Partially. My prediction that open classification would produce more flexible and descriptive categories was supported by the results. The AI generally continued to generate useful tasks.

However, it did not maintain the same reliability for ACTION_REQUIRED across all cases. The T10 error shows that greater flexibility does not necessarily lead to better decisions.

Category consistency between repeated runs remains untested because I completed only one pass with v2. Therefore, I cannot confirm whether removing predefined categories reduces consistency.

My conclusion is that open classification can improve the descriptive quality of feedback categories, but reliable action decisions and clear human verification remain essential.

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
