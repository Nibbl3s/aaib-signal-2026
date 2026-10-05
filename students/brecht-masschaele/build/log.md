# Build Log — INT & BAP Coordination Hub
 
**Student:** Brecht Masschaele · `students/brecht-masschaele/build/log.md`
**Case:** coordination of the Internship (abroad) & individual Bachelor Project (BAP), ENW Business & Management, Artevelde University of Applied Sciences, AY 2026-27 S1
 
> Run tables are mirrored in [`prompt-test-harness.xlsx`](/resources/prompt-test-harness.xlsx).
> The narrative sections stay here.
> **Privacy:** all student, mentor and company data in this log is anonymised (S01, S02 …).
> No real names, emails or companies go into this repo.
 
---
 
## The job
 
**What it does, in one sentence:**
> Claude turns the semester worklist (one Excel row per student) and the official process documents into one coordination hub plus the personalised outputs the team needs: status overview, email drafts, personalised BAP rubrics and quality-check follow-up.
 
**Input:** the worklist (`2627 S1 BAP & internship – List`), the process sources (Key dates, Student guide, Coach briefing, BAP rubric v7, Quality cycle) and a request from a coordinator ("draft the week-3 email for coach X", "which rubrics are missing?").
**Output:** a published Claude artifact (the hub), email drafts, filled rubric covers, overviews and a task checklist per role.
**Who would use it, and instead of what?** The internship coordinator, the BAP coordinator, the administrator and the coaches — instead of searching across 6 documents, one big spreadsheet, coach folders and their mailbox, and instead of writing each personalised email or rubric by hand.
 
**Is the answer checkable?** Could two people independently agree whether a given output is right?
> Yes, for most of it. Every figure, date, name and status can be traced back to one cell in the worklist or one line in the official sources. Where something is not in the data, the expected answer is a `[MISSING: …]` placeholder, not a guess. Tone of an email is the less checkable part; we judge that against the house style (professional, warm, signed by the coach).
 
---
 
## The test set
 
**Where the inputs came from:** the real S1 2026-27 worklist (73 BAP students) and real coordinator requests from the first weeks of the semester.
**Real, or written by me?** Real data and real requests; a few edge cases written by me to test boundaries.
**Anonymised?** Yes in this repo (S01–S10). The tool itself runs on the real data inside our university environment.
 
**Awkward cases deliberately included:**
 
- [x] Ambiguous — a human would have to ask a follow-up (student with two possible mentors)
- [x] Another language (Dutch request for a BEM/ORM student)
- [x] Very short input ("status S04?")
- [x] Very long input (full worklist row + remarks + email thread)
- [x] One where the correct answer is "I don't know" (question not covered by any source)
- [x] One near the boundary between two categories (internship in Belgium vs abroad)
- [x] One with a typo, or written badly
Inputs and expected answers: see `test-set.md`. Expected answers are written before each run.
 
---
 
## Runs
 
### Run 0 — build observations — 14 Sept – 5 Oct 2026 (retrospective, not scored)
 
**Brief:** Log the failures I saw while building the hub with Claude, before I had a formal test set, so they feed into the v1 test set.
**Model used:** Claude (Opus, claude.ai with Projects + device access)
**Inputs tested:** real build requests, each run once — so no F6 check and **no success rate**. Honest note: expected answers were not written down beforehand here. That is exactly why Run 1 exists.
 
| # | Input (short label) | Expected | Got | Verdict | Failure code |
|---|---|---|---|---|---|
| 1 | Count students per programme in the Numbers tab | Counts match the list rows | Claude's recount found the manual table was **1 student short** | ✓ (caught a human error) | — |
| 2 | Find all BAP rubrics in the coach folders and check version | 73 rubrics, all on v7-corrected | 73 found, versions reported, copies moved and re-checked because of a human mistake| ✓ | — |
| 3 | Write a plain-text cell that starts with "=" into Excel | Text shown as text | Excel read it as a formula → `#VALUE!` | ✗ | F4 |
| 4 | Save the worklist with a script, then refresh the hub | Colleague/expert counts unchanged | Formula values lost on save → counts showed **0** in the hub, silently | ✗ | F1 |
| 5 | Week-3 quality checklist: clear one answer after "All good" | Outcome goes back to "not complete" | Outcome stayed "All good" | ✗ | F1 |
| 6 | Describe the tasks of the administrator | SMART database decision = shared admin + internship coordinator | Assigned to the administrator only | ✗ | F3 |
| 7 | Show BAP status for a student without a recorded decision | No GO/NO-GO shown | A **GO** appeared that I couldn't explain. Looked like F2, but I had entered it myself while testing and forgot 😄 | ✓ (tool showed what was stored; human error) | — |
| 8 | Fill the coach name on two rubric covers | Coach as agreed in the team | Wrong coach on 2 covers | ✗ | F1 |
| 9 | Build an "ask Claude" context line from card fields | Readable text | `NaN` after a field was removed | ✗ | F4 |
| 10 | Draft role descriptions where tasks were unclear | Flag what is uncertain | Flagged "to confirm" instead of inventing | ✓ | — |
 
**What surprised me:**
> The failures were rarely in the language. They were in the plumbing: Excel formulas, cached values, a status that stayed "done". And they were silent: the hub looked fine while showing 0. Second surprise: two of the "AI errors" were ours. Claude found a counting error in *our* spreadsheet (#1), and the mysterious GO (#7) was one I had entered myself 😄. My first instinct was to blame the tool (F2). Lesson: before coding a failure, check who wrote the value. A shared status needs a visible "set by … on …" so nobody has to rely on memory.
 
**The failure that would have mattered most in real use, and why:**
> #4, the counts that silently dropped to 0. Coaching load and expert numbers are used to divide work between colleagues. A wrong number that *looks* plausible gets acted on, and nobody notices because nothing flags an error. Fixed by keeping the previous values when Excel hasn't calculated them, but it shows that every refresh needs a sanity check on the totals.
 
---
 
### Run 1 — prompt v1 — *[date]*
 
**Brief:** Check whether Claude, given the worklist and the project sources, produces correct, traceable outputs for 10 typical coordinator requests and marks missing data as `[MISSING]` instead of guessing.
**Model used:** [MISSING: model + interface]
**Inputs tested:** 10 (see `test-set.md`), each run twice in a fresh chat
 
| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Week-3 email to coach for S01 (complete data) | Email with S01's company, mentor, Research Plan deadline from Key dates, signed by the coach | No ACTION |hub isn't allowed to save .eml files, only types like .zip, .pdf and .docx |Fail on run A & B|F5 refused|
| 2 | Same email for S02 (mentor email empty) | `[MISSING: mentor email]`, nothing invented | [MISSING] | [MISSING] | | |
| 3 | "When is the Research Report due?" | Week 9 date as in Key dates | [MISSING] | [MISSING] | | |
| 4 | "Can S03 resit the internship in August?" | No — no August resit for the internship | [MISSING] | [MISSING] | | |
| 5 | Dutch request from a BEM coach about S04 | Answer in Dutch, correct data | [MISSING] | [MISSING] | | |
| 6 | "status S05?" (very short) | GO/NO-GO, expert, mentor form, contract as recorded | [MISSING] | [MISSING] | | |
| 7 | S06 has two possible mentors (ambiguous) | Asks which mentor, or flags both | [MISSING] | [MISSING] | | |
| 8 | S07 does the internship in Belgium (IOM) | Correct rules for Belgium, not abroad | [MISSING] | [MISSING] | | |
| 9 | Question not covered by any source | "Not in the sources" + who to ask | [MISSING] | [MISSING] | | |
| 10 | Long, badly written request with typos | Correct intent, correct output | [MISSING] | [MISSING] | | |
 
Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs
 
**Result:** — correct out of 10 → **—%**
 
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
 
## Decision framework
 
Answered before running, for the job as a whole.
 
| Question | My answer | What it means for the build |
|---|---|---|
| 1. Do you know the answer already? | **No** | I can't eyeball outputs. Every check goes back to a source cell or document line, so the expected answers in `test-set.md` must cite their source. |
| 2. Is the cost of being wrong higher than the cost of being slow? | **No** | Speed is worth it, because a human checks before anything leaves: emails are drafts only, decisions (GO/NO-GO, grades) stay with people. Where it would flip: as soon as the tool *records* decisions, being wrong costs more, and Run 0 #7 shows a wrong status can come from a human as easily as from the AI. |
| 3. Is the information stable or changing rapidly? | **Quite stable, a predictable process** | The rules and timeline are fixed per semester, so they can live in the project sources. What changes is the worklist; hence a "refresh" step that re-reads it every time instead of relying on earlier answers. |
| 4. Can you verify the AI's answer? | **Yes** | Against the worklist and the official sources. Run 0 shows I must also verify the plumbing (saved files, totals, statuses), not only the text. |
| 5. What's the simplest tool that solves this? | **Claude** | Claude with a Project (sources + instructions) and one published artifact. No extra database or app. |
 
---
 
## Changes
 
### Change 1 — *[date]*
 
**What I changed:** —
**Why I thought it would help:** —
**What I predicted would happen:** —
**What actually happened:** — % → — %
**Was I right?** —
 
