---
type: passport
student: "Gaetan Werbrouck"
beat: "How Football Clubs Use Data to Find Undervalued Players"
track: "4 ECTS"
---

# Skills Passport

**Student:** Gaetan Werbrouck
**Beat:** How Football Clubs Use Data to Find Undervalued Players
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

---

## Checkpoint 1 — End of Week 4

### Build status

- **What can my tool do now?** ScoutLab can filter a larger player pool, show position-relative player profiles, compare candidates, find similar statistical profiles and export a shortlist; a value-gap view requires a separate valuation file.
- **What can it not do yet?** It cannot prove that a player is undervalued, use live 2026 market data from the default source, evaluate video or replace a scout. The 15-case expected-answer set is recorded as 15/15 passes based on my report; I have not independently documented a second full run or measured consistency across repeats.
- **Which number proves it?** The reference CSV contains 339 player rows, but that is a dataset-size figure, not an accuracy result. The earlier 20/20 result applies only to the retired V1 five-rule prompt, not ScoutLab V2.

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Cost literacy | 1 | 🟡 | In Week 1 I calculated token and failure costs across three pricing tiers and compared cost per correctly handled email. |
| Capability skepticism | 2 | 🟡 | In Week 2 I tested 10 player profiles twice, found the individual classifications matched the expected answers, and concluded a spreadsheet is simpler for the fixed rules. |
| Vendor claim detection | 3 | 🟡 | In Week 3 I tagged all 16 NexusAI claims and identified five avoidances, including undefined accuracy and unsupported customer results. |
| Value quantification | 4 | 🔴 | ScoutLab's current business case uses clearly labelled estimates, but its actual time saving, useful-shortlist rate and total data/hosting cost have not been measured. |

**6 ECTS — extended evidence:** *(reference your extension work — the second vendor deconstruction, the extended cost model, the sensitivity analysis)*

**Your click:** In Week 1 I focused mainly on token prices. I now understand that failure correction, implementation, maintenance and human oversight can dominate token costs, so I need to compare total cost with measured benefits.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:

---

## Checkpoint 2 — End of Week 8

### Build status

- **What can my tool do now?** ScoutLab filters, profiles, compares and shortlists players, and can add an optional AI note that code checks against the table; since Week 8 the code also supplies each player's strongest and weakest metric.
- **What can it not do yet?** It cannot prove a player is undervalued, I have not measured any time saved against a spreadsheet, and the checker cannot catch misleading wording around correct numbers.
- **Which number proves it?** On the same 10-player test run twice, llama3.2:3b went from 4 of 20 to 20 of 20 on my checker after the Week 8 change, but summaries quoting stat values fell from 18 to 0 of 20; at Week 4 I only had a 339-row dataset size and 15/15 self-reported UI passes.

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Market mechanism thinking | 5 | 🟡 | In Week 5 I ran the same ChatGPT recommendation prompt twice, saw only SciSports appear both times, and scored Oraca 10/18 with some checks still unverified. |
| Cost projection | 6 | 🟡 | In Week 6 I measured a Gemini call (137 input and 229 output tokens, $0.000378) and modelled a transfer-window break point, but my volumes and error rates are still assumptions. |
| Lock-in detection | 7 | 🟡 | In Week 7 I scored ScoutLab 5/15, named the third-party GitHub dataset link as its riskiest dependency and wrote a 90-day exit plan, without testing a real switch to a second provider API. |
| Design defense | 8 | 🔴 | My Week 8 design file answers the five board questions with figures or named constraints, but I prepared it with AI help and have not yet shown I can defend it without notes. |

**Re-rate Checkpoint 1.** Do not copy your Week 4 answers down. Four weeks of compounding changes them — sometimes upward, sometimes not, because Week 8 shows you what you did not know you did not know in Week 4.

| Skill | Week 4 rating | Week 8 rating | What changed |
|-------|:-------------:|:-------------:|--------------|
| Cost literacy | 🟡 | 🟡 | I moved from price calculations to a measured call, but the biggest cost in my Week 8 design, human time and errors, is still unmeasured. |
| Capability skepticism | 🟡 | 🟡 | The Week 7 test showed a small model often failing to pick the highest and lowest metric; in Week 8 that comparison moved into code, and a read-through with AI help found gaps my checker missed. |
| Vendor claim detection | 🟡 | 🟡 | In Week 5 my post said Oraca's backtest results were the company's own figures and had not been independently verified. |
| Value quantification | 🔴 | 🔴 | I still have not run the timed ScoutLab-versus-spreadsheet comparison, so my value figures remain scenarios. |

**6 ECTS — extended evidence:**

**Your click:** At Checkpoint 1, I thought mainly about counting the cost of AI mistakes. Now I also ask whether AI needs to do that step at all. For example, code can find a player's strongest and weakest stat.

**Reflection:** In Week 1, I looked at AI mostly as a model with a price. Now I see it as one part of a system. I also need to think about what data it gets, who checks its answers and what happens when it is wrong or stops working.

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