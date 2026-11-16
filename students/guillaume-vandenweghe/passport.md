---
type: passport
student: "Guillaume Vandenweghe"
beat: "What AI really costs in the insurance sector, with a focus on claims handling and customer service"
track: "4 ECTS"
---

# Skills Passport

**Student:** Guillaume Vandenweghe
**Beat:** What AI really costs in the insurance sector, with a focus on claims handling and customer service
**Track:** 4 ECTS

> Copy this file to `students/your-name/passport.md` in the Signal repository in Week 1.
> Update it at three checkpoints — end of Week 4, Week 8 and Week 12 — and commit each time.
> **Commit it separately each checkpoint.** The Git history is the point: it shows what you thought you knew in Week 4 next to what you actually knew by Week 12. Nobody can reconstruct that afterwards.

---

## How to Rate Yourself

| Level | Meaning | The honest test |
|-------|---------|-----------------|
| 🟢 **Confident** | I can do this without help | *Could I explain it to a colleague and answer their follow-up?* |
| 🟡 **Getting there** | I can do this with the framework in front of me | *I need to look things up, but I get it.* |
| 🔴 **Need practice** | Not there yet | *I would struggle if asked to do this cold.* |

🟡 is the most common honest rating and the most useful one. A passport that is all 🟢 tells your instructor nothing except that you have not calibrated yet.

## Evidence: One Sentence, Something You Actually Did

| Good | Not good |
|------|----------|
| "I caught 4 of 5 hallucinations in the Week 2 lab" | "I think I'm good at this" |
| "My Week 4 memo priced all three candidates with formulas" | "I understand ROI" |
| "I found 3 attack surfaces in my own Week 8 design" | "I got a good mark" |

Evidence anchors the rating in something real. It is also what your instructor validates or challenges — and that conversation is the point of the passport.

## Start Each Checkpoint With Your Build

Before you rate anything, answer three questions about your Build, one line each:

1. **What can your tool do now?**
2. **What can't it do yet?**
3. **Which number proves it?** An error rate, a cost per run, a score on your test set, and what you measured it on.

A rating is easy to fill in without thinking. A line that hangs on a number you measured is not. Use your answers as raw material for the Evidence column: several skills can point straight at them.

---

## Checkpoint 1 — End of Week 4

**Your Build, right now** (one line each):

- What can your tool do now? Sort one customer email to a Belgian non-life insurer into one of six queues and name its language (NL/FR/EN/MIXED), in a fixed two-line format.
- What can't it do yet? Reliably recognise a complaint: it sends some angry customers who ask for compensation to the normal claims queue (#10, both runs).
- Which number proves it? 21 of 26 runs correct (81%; 10 of 13 inputs correct in both runs = 77%) on 13 real emails, but only 5 of 10 complaint runs correct, and 2 of 10 hidden in the wrong queue.

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Cost literacy | 1 | 🟢 | In Week 1 and again in Week 4 I priced the token bill of my use case (€561/year for 20,000 emails a month) and showed it is a tiny part of the real cost, which is error handling. |
| Capability skepticism | 2 | 🟡 | My Week 2 Build log classifies every failure (3 × F1, 1 × F6), but my own expected answers on the COMPLAINT boundary disagree with my rule 2, and I have not resolved that yet. |
| Vendor claim detection | 3 | 🟢 | I tagged all 16 NexusAI claims with a reason each, and tagged Tractable's "3 mins / 10x / 70%" as Avoidance because none has a source or method. |
| Value quantification | 4 | 🟡 | My Week 4 business case has a formula for every line and a 50% pressure test (+€10,365 becomes −€87,150), but the €96.60 cost of a hidden complaint, which decides the result, is still an estimate. |

**6 ECTS — extended evidence:** not applicable (4 ECTS).

**Your click:** In Week 1 I thought the cost of AI was the price per token; now I know the cost sits in the errors and who catches them: in my Build the hidden complaints cost about 248 times the token bill.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:

---

## Checkpoint 2 — End of Week 8

**Your Build, right now** (one line each):

- What can your tool do now?
- What can't it do yet?
- Which number proves it?

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Market mechanism thinking | 5 | 🟢 / 🟡 / 🔴 | |
| Cost projection | 6 | 🟢 / 🟡 / 🔴 | |
| Lock-in detection | 7 | 🟢 / 🟡 / 🔴 | |
| Design defense | 8 | 🟢 / 🟡 / 🔴 | |

**Re-rate Checkpoint 1.** Do not copy your Week 4 answers down. Four weeks of compounding changes them — sometimes upward, sometimes not, because Week 8 shows you what you did not know you did not know in Week 4.

| Skill | Week 4 rating | Week 8 rating | What changed |
|-------|:-------------:|:-------------:|--------------|
| Cost literacy | | | |
| Capability skepticism | | | |
| Vendor claim detection | | | |
| Value quantification | | | |

**6 ECTS — extended evidence:**

**Your click:** What did you believe at Checkpoint 1 that you've since replaced? Four weeks of compounding should have produced at least one.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:

---

## Checkpoint 3 — End of Week 12

**Your Build, right now** (one line each):

- What can your tool do now?
- What can't it do yet?
- Which number proves it?

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Attack surface thinking | 9 | 🟢 / 🟡 / 🔴 | |
| Regulatory reasoning | 10 | 🟢 / 🟡 / 🔴 | |
| Cross-domain transfer | 11 | 🟢 / 🟡 / 🔴 | |
| Synthesis | 12 | 🟢 / 🟡 / 🔴 | |
| Defense | 13 | 🔴 | Not yet demonstrated — complete after your Week 13 defence |

**Re-rate everything.** All twelve prior skills, honestly. This is the version a future employer could read.

| Skill | CP1 | CP2 | CP3 |
|-------|:---:|:---:|:---:|
| Cost literacy | | | |
| Capability skepticism | | | |
| Vendor claim detection | | | |
| Value quantification | | | |
| Market mechanism thinking | — | | |
| Cost projection | — | | |
| Lock-in detection | — | | |
| Design defense | — | | |
| Attack surface thinking | — | — | |
| Regulatory reasoning | — | — | |
| Cross-domain transfer | — | — | |
| Synthesis | — | — | |

**6 ECTS — extended evidence:**

**Your click:** What did you believe at Checkpoint 2 that you've since replaced? This is the version a future employer could read — make the change nameable.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:

---

## After Week 13

Come back once and fill in **Defense**. Then read the three columns of Checkpoint 3 side by side.

That progression — what you rated yourself in Week 4, and what you can evidence by Week 13 — is the honest answer to "what did you actually learn?" It is worth more than the grade, and unlike the grade, it is yours and it is specific.

---

## The Rule

If every skill is 🟢, you are almost certainly overconfident. If more than three are 🔴 at Checkpoint 3, you are almost certainly underconfident. Neither is a problem to hide — both are a conversation to have.

*This passport is not graded. It exists so you can see your own growth, and so your instructor can tell you when your self-assessment and their observation disagree. That disagreement is where the real learning happens.*
