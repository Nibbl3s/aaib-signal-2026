---
week: 2
title: "One Student, One Coach, One Form: Why My BAP Rubric Distribution Doesn't Need AI"
author: "Brecht Masschaele"
beat: "AI in International Management"
skill: "Capability skepticism"
date: 2026-10-09
---

## Hook

Every semester, our internship & BAP coordination hub sends each coach a pre-filled evaluation rubric for every graduation-project (BAP) student they assess: right student, right company, right coach, right folder. It's exactly the kind of repetitive admin that screams "give it to AI", and I did set it up as an AI skill. Then I ran it through this week's framework. 🎓

## The Case

The job: take the semester's BAP & internship list, make one copy of the BAP rubric per student, fill in the Cover tab, and save it in the coach's folder.

Here's what failure looks like, in this week's vocabulary:

- **F1 wrong:** student A's details on student B's form.
- **F2 fabricated:** a company name or second assessor missing from the list, so the AI "helpfully" fills in something plausible. The fake court case in miniature.
- **F3 missed:** a student who never gets a form.
- **F6 inconsistent:** a second run that doesn't match the first.

None of these is a cosmetic error. A grading form with the wrong name, or in the wrong coach's folder, is an assessment problem and a privacy problem at the same time.

## The Framework

1. **Do I already know the answer?** Yes. The list *is* the answer. There's no judgment involved, only copying.
2. **Is being wrong costlier than being slow?** Yes. A slow distribution costs me an afternoon. A wrong cover can attach a grade to the wrong student.
3. **Stable or changing?** The list changes every semester; the rule (one row = one form) never does.
4. **Can I verify it?** Only by opening every file and checking it against the list, which means doing the job twice.
5. **Simplest tool?** A template whose Cover tab looks everything up from the student number (XLOOKUP against the list), copied once per row by a short script or a Power Automate flow. A missing field stays blank and visibly flagged, never guessed.

## The Insight

The sharpest lesson came from the rubric itself. During a QA pass on version 7, we found that the totals used COUNTA instead of COUNT, so a half-filled form showed 0/20. Rules fail too. But they fail the same way every time: fix it once, and every future form is right. An AI step can fail differently on run two than on run one, so you never actually reach "fixed". That's the difference between a bug and a hallucination.

That doesn't mean AI has no place in the hub. It earned its place upstream: rewriting criteria in plain English, drafting assessor notes, spotting that COUNTA bug. That's language and judgment work, and a human checks it once. Filling in a hundred cover tabs is neither.

So the line I'm drawing: **AI helps design the form, a rule fills it in.** The rule wins on cost (nothing per run), accuracy (same list, same forms) and trust: when a grade is contested, every value on the cover can be traced back to one row in one list.

## The Question

If the paperwork side of the hub belongs to rules, where is the judgment work that could really use AI support, like spotting early warning signs in internship logbooks? And how do I test that when "correct" is partly a matter of opinion? 🔍

---

*AI helped me structure and edit this post. The case, the reasoning and the conclusion are mine.*

