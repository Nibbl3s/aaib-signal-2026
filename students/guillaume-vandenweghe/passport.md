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

- What can your tool do now? Sort a Belgian insurer's customer email into six queues plus language in two parseable lines, on a cloud model (Gemini) or fully offline on my laptop (Llama 3.1 8B), with prompt v2 that turns my COMPLAINT boundary into five ordered steps.
- What can't it do yet? Keep normal emails out of the wrong queue: even the best local run puts 5 of 14 normal-email runs in a wrong queue (#8 contract change → CANCELLATION every time), and v2 has not yet been tested on Gemini or on emails it has never seen.
- Which number proves it? On 12 real emails × 2 runs (27 Nov 2026, offline): Llama 3.1 8B with v2 = 16/24 correct, 0/10 hidden complaints (v1: 3/10), 2/14 normal → COMPLAINT; the same v2 on Llama 3.2 3B = 8/24 with 12/14 normal → COMPLAINT, so the fix only works on the bigger model.

**Compared with Week 4:** in Week 4 my problem was hidden complaints (2 of 10 on the first model). Since then, every model I tested on the same 12 emails fails in its own direction: Claude hides complaints, Gemini over-flags, Groq hesitates, a local 3B model calls almost everything a complaint. My Week 4 answer was about one model; now I know the number belongs to the model *and* the prompt, and has to be re-measured every time either changes.

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Market mechanism thinking | 5 | 🟡 | My Week 5 GEO audit of Federale Verzekering scored 8/18 with quoted evidence for every criterion (0 schema.org hits on six pages), but I tested AI visibility with one tool on one day, so I cannot say how stable that result is. |
| Cost projection | 6 | 🟢 | My Northwind one-pager projects Month 1, 6 and 12 plus 3× growth from one formula, and shows that the token bill (€12 a month at 1,800 emails a day) is never the problem: the over-flag cost (€0.63 per email) is. |
| Lock-in detection | 7 | 🟢 | I scored my own Gemini stack 6/15 with dated evidence (the 8 Oct 2026 re-route of `gemini-3.7-flash`) and tested the exit on a local model, which showed that the real lock-in is the error profile, not the API. |
| Design defense | 8 | 🟡 | I designed and costed the Northwind architecture (€48,143 of €50,000, every sketch box matched to a cost line), but I missed the session, so it was never questioned by a real board, and my only critique was of the course's worked example. |

**Re-rate Checkpoint 1.**

| Skill | Week 4 rating | Week 8 rating | What changed |
|-------|:-------------:|:-------------:|--------------|
| Cost literacy | 🟢 | 🟢 | Still confident, and sharper: in Week 4 I compared tokens with error cost; now I also price review time, sync failures and audit hours, and I use the EU regional rate instead of the headline rate. |
| Capability skepticism | 🟡 | 🟢 | Up, because I now measure my own changes the same way I measured the models: I wrote a prediction for prompt v2, it was wrong on the 3B model, and I could show why (it copied the most frequent label) and that the same model varies ±3 runs between days. |
| Vendor claim detection | 🟢 | 🟡 | Down on purpose: I first wrote "a model swap takes a day" in my head, the same claim I criticised in the ModeAntwerp example. Catching my own claims is harder than tagging NexusAI's. |
| Value quantification | 🟡 | 🟡 | My saving per status email (4 minutes) and the €150 cost of a hidden complaint are still estimates, and they drive the Northwind case more than any measured number. |

**6 ECTS — extended evidence:** not applicable (4 ECTS).

**Your click:** At Checkpoint 1 I believed the job was to find the most accurate model. I have replaced that with: no model is "accurate", each one fails in its own direction, so the design has to decide which failure it can afford and put a check where review does not catch it. In my Northwind design the AI only labels and never writes the reply, for exactly that reason.

**Reflection (Week 1 → Week 8):** In Week 1 I thought about AI as a price per token. Now I think about it as one box in a system, and I start from the question "what happens when this box is wrong or gone?", before I look at the price at all.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:
