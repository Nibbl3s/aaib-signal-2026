# Build Log

---

## The job

**What it does, in one sentence:**
> Extracts structured assignment metadata (task name, due date, word count limit) from Canvas course snippets across Artevelde IBM/IOM modules.

**Input:** Raw course snippet or announcement text from Canvas.
**Output:** Structured JSON containing `task_name`, `due_date`, and `word_count_limit`.
**Who would use it, and instead of what?** Higher education students, instead of manually searching through long course announcements and syllabi.

**Is the answer checkable?** Could two people independently agree whether a given output is right?
> Yes. Output fields must strictly match the facts in the text or return 'NOT_SPECIFIED'.

---

## The test set

**Where the inputs came from:** Actual course modules from Canvas (Accounting, Advanced AI in Business, Data Skills, Digital Business Foundations, French Transition).
**Real, or written by me?** Real snippets, anonymised.
**Anonymised?** Yes.

**Awkward cases deliberately included:**

- [x] Ambiguous — a human would have to ask a follow-up
- [x] Another language (Dutch/French)
- [x] Very short input
- [x] Very long input
- [x] One where the correct answer is "I don't know"
- [x] One near the boundary between two categories
- [x] One with a typo, or written badly

---

## Runs

### Run 1 — prompt v1 — 2026-10-05

**Brief:** Evaluate whether prompt v1 accurately extracts structured assignment metadata across Canvas modules without hallucinating missing dates or word limits.
**Model used:** GPT-4o / Claude 3.5 Sonnet
**Inputs tested:** 10 real snippets from IBM/IOM Canvas modules

| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Accounting Balance Sheet | task: Balance Sheet \| due: 2026-11-12 \| limit: 1000w | task: Balance Sheet, due: 2026-11-12, limit: 1000w | task: Balance Sheet, due: 2026-11-12, limit: 1000w | ✓ | None |
| 2 | AI Signal Post 2 | task: Signal Post #2 \| due: Fri 23:59 \| limit: 600w | task: Signal Post #2, due: Fri 23:59, limit: 600w | task: Signal Post #2, due: Fri 23:59, limit: 400-600w | ✗ | F6 Inconsistent |
| 3 | Data Skills Excel | task: Clean dataset \| due: NOT_SPECIFIED \| limit: NOT_SPECIFIED | task: Clean dataset, due: NOT_SPECIFIED, limit: NOT_SPECIFIED | task: Clean dataset, due: NOT_SPECIFIED, limit: NOT_SPECIFIED | ✓ | None |
| 4 | DBF E-commerce Case | task: E-comm Case \| due: 2026-12-18 \| limit: 1500w | task: E-comm Case, due: 2026-12-18, limit: 1500w | task: E-comm Case, due: 2026-12-18, limit: 1500w | ✓ | None |
| 5 | French Spreekopdracht | task: présentation \| due: 15 nov \| limit: NOT_SPECIFIED | task: présentation, due: 15 nov, limit: NOT_SPECIFIED | task: présentation, due: 2026-11-15, limit: NOT_SPECIFIED | ✗ | F2 Fabricated |
| 6 | Accounting P&L Analysis | task: P&L Analysis \| due: tomorrow noon \| limit: 800w | task: P&L Analysis, due: tomorrow noon, limit: 800w | task: P&L Analysis, due: tomorrow noon, limit: 800w | ✓ | None |
| 7 | DBF Podcast Summary | task: Podcast summary \| due: 2026-10-30 \| limit: 500w | task: Podcast summary, due: 2026-10-30, limit: 500w | task: Podcast summary, due: 2026-10-30, limit: 500w | ✓ | None |
| 8 | French Vocab Quiz | task: Vocab quiz \| due: NOT_SPECIFIED \| limit: NOT_SPECIFIED | task: Vocab quiz, due: Mon 09:00, limit: NOT_SPECIFIED | task: Vocab quiz, due: NOT_SPECIFIED, limit: NOT_SPECIFIED | ✗ | F3 Missed |
| 9 | Data Skills Dashboard | task: Dashboard #2 \| due: week 8 \| limit: NOT_SPECIFIED | task: Dashboard #2, due: week 8, limit: 2 pages | task: Dashboard #2, due: week 8, limit: NOT_SPECIFIED | ✗ | F4 Format |
| 10 | AI Capstone Draft | task: Capstone Draft \| due: Nov 20 \| limit: 2500w | task: Capstone Draft, due: Nov 20, limit: 2500w | task: Capstone Draft, due: Nov 20, limit: 2500w | ✓ | None |

Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs

**Result:** 6 correct out of 10 → **60%**

**Failures by type:**

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong | 0 | |
| F2 Fabricated | 1 | INP-05: Hallucinated year '2026' when given Dutch date '15 november' without year |
| F3 Missed | 1 | INP-08: Treated review session time 'Monday 09:00' as submission deadline |
| F4 Format | 1 | INP-09: Confused page limit '2 pages' with word count limit |
| F5 Refused | 0 | |
| F6 Inconsistent | 1 | INP-02: Run A extracted single max '600w', Run B extracted range '400-600w' |

**What surprised me:**
> The model hallucinated a year (2026) when given a Dutch date without a year ('15 november') because it implicitly assumed current calendar context without verification.

**The failure that would have mattered most in real use, and why:**
> F2 (Fabricated year) or F3 (Mistaking class time for a submission deadline), as both cause a student to miss an actual assignment submission.

---

## Changes

*(Will be completed during Week 3 & Week 4 iterations)*

---

## Deployment probe — from Week 2

**After the intro session (Monday 28 September, 10:25–11:25, at the fablab — machines, safety, file formats):**

| | |
|---|---|
| Machine(s) I expect to use, and why | Laser cutter (for acrylic faceplate standee) & 3D printer (for tablet mount attachment). |
| The artifact I'm aiming for (kiosk face, counter mock, standee…) | A desktop kiosk standee holding a tablet displaying 'Assignment Quick-Scan' at campus library desks. |
| Which weekly session or OPEN block I'll visit for file-prep, and when | Campus Kantienberg Fablab session on Week 4, Wednesday 14:00 block. |
