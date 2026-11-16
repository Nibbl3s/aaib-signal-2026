---
type: passport
student: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
track: "6 ECTS"
---
 
# Skills Passport
 
**Student:** Jasper Derieuw
**Beat:** EU and China Trade Compliance in the AI Era
**Track:** 6 ECTS
 
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

---

## Checkpoint 1 — End of Week 4

**Build**
- **What my tool can do now:** read a shipment invoice, extract supplier, origin, HS code and value, and flag the supplier against a supplied sanctions list; clean invoices are mostly handled correctly.
- **What it can't do yet:** give the same verdict twice reliably, or safely handle Chinese-script names, unclear origin and corrupted documents.
- **Which number proves it:** 17 of 24 runs correct (70.8%), 7 of 12 inputs answered differently on a re-run, and 1 of 2 runs missed a sanctioned bank written in Chinese characters.

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Cost literacy | 1 | 🟢 | My Week 1 model priced tokens at €166/yr against ~€450k/yr expected missed-match cost (0.04% of the total), and I later caught and corrected the direction of my own Month-6 breakeven conclusion. |
| Capability skepticism | 2 | 🟢 | Running my own tool twice on 12 inputs exposed 58% inconsistency and one invented supplier on the "I don't know" test, and the No-AI framework told me AI must not decide alone. |
| Vendor claim detection | 3 | 🟡 | First pass 9/12 on the Claim Gauntlet; on NexusAI my first tags matched the reveal on 14/16, but I revised six and ended at 8/16, so the Aspiration/Avoidance boundary is where I still drift. |
| Value quantification | 4 | 🟡 | At its measured rate my Build is net −€358k/yr and would need ≤4.5% false clears (measured 12.5%); after the clinic I replaced my guessed €250k error cost with sourced fines (€50k–€500k) and a pattern-routing pilot (€19.8k/yr) that does not depend on any fine, but its invoice mix is still my estimate. |

**6 ECTS — extended evidence:** vendor outreach to ComplyAdvantage and World-Check (no reply; silence documented as a finding); a second test set built from real customs patterns (75% on 8 inputs, exposed the transshipment-origin weakness); Janis's freight set run twice (10/10 consistent, origin missed on 3 inputs); Week 3 follow-up questions to the vendor (0 of 3 answered); practitioner interview requested 11 October (no reply by 14 October).

**Your click:** In Week 1 I believed the token price was the cost question; now I know the cost of being wrong decides the case, and that I have to measure the tool before I can put a price on it.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:

---

## Checkpoint 2 — End of Week 8

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Market mechanism thinking | 5 | 🟡 | My GEO audit scored a real broker 9/18 with quoted evidence and found 0 of 6 AI answers naming a customs broker, but I haven't tested whether any fix changes those answers. |
| Cost projection | 6 | 🟢 | I costed my Build from 24 of my own API calls, projected it from 10 to 100,000 checks a day, and found errors cost 85–299× the tokens. |
| Lock-in detection | 7 | 🟢 | I scored my own stack 5/15 from the vendors' real terms and measured my exit cost: €1,258 in hours, about €16,800 a year in performance. |
| Design defense | 8 | 🟡 | Costing every box of my design cut my own Week 4 case from €82k to €10.5k–28.5k a year; defending it live to a board happens on 23 Nov. |

**Re-rate Checkpoint 1.** Do not copy your Week 4 answers down. Four weeks of compounding changes them — sometimes upward, sometimes not, because Week 8 shows you what you did not know you did not know in Week 4.

| Skill | Week 4 rating | Week 8 rating | What changed |
|-------|:-------------:|:-------------:|--------------|
| Cost literacy | 🟢 | 🟢 | Now from measured tokens instead of estimates: €0.0044 per check on v1, €0.0020 on v2 over 60 calls. |
| Capability skepticism | 🟢 | 🟢 | I learned that 24/24 on my own invoices became 28/36 on unseen ones: a prompt can be overfitted to its test set. |
| Vendor claim detection | 🟡 | 🟡 | An absence is data: 33 days of silence to one direct question on notice periods became a decision rule in my ADR. |
| Value quantification | 🟡 | 🟡 | The 6 minutes per check and the 70/30 routing split are still estimates; the fablab review test is meant to measure them. |

**6 ECTS — extended evidence:** a second provider measured on my full test set (Gemini 3 Flash, 20/24 strict, 83.3%, against Claude's 91.7%); the vendor's notice period asked in writing (Verifex, 14 October, no reply after 33 days) and recorded as ADR 001; my Build run on a model I own (local llama3.2: 18/24 own set, 5/36 unseen); a practitioner review of my Week 8 design, added when it has taken place.

**Your click:** At CP1 I believed a better prompt would make the tool trustworthy. Now I know a prompt can look perfect on the invoices it was written for and still fail on new ones, and that the design around the model decides more than the model.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:

---

## Checkpoint 3 — End of Week 12

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
