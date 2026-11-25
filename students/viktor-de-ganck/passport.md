---
type: passport
student: "Viktor De Ganck"
beat: "AI as a retail investor's research desk"
track: "4 ECTS"
---

# Skills Passport

**Student:** Viktor De Ganck
**Beat:** AI as a retail investor's research desk
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

**What can my Build do now?** It sorts a financial news item into event type, asset class and fact or opinion; fact or opinion was right in 93% of 30 answers, and official statements, Dutch items and sarcasm were handled correctly.
**What can it not do yet?** List all the relevant asset classes (73% right), tell a government action from a market move, label an opinion piece full of numbers as opinion (item 14), or give the same answer twice (2 of 15 items differed).
**Which number proves it?** 9 of 15 items fully correct (60%), in both runs, 95% interval 36% to 80%.

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Cost literacy | 1 | 🟡 | I priced my research desk at €0.49 to €4.10 a month from the course price list and found that data access and wrong answers cost more than tokens, but in Week 4 I could not source my implementation costs, so those lines stay (est.). |
| Capability skepticism | 2 | 🟡 | I measured my news classifier at 9 of 15 items fully correct and caught that it labelled an opinion item as fact, but 15 short items is too small a test to know its real rate. |
| Vendor claim detection | 3 | 🔴 | I tagged five of Perplexity's finance claims as fact, aspiration or avoidance, and found that spotting a false or exaggerated claim is hard because it depends on phrasing rather than anything checkable; I did not test any claim myself. |
| Value quantification | 4 | 🟡 | My Signal post 4 prices my Build for a composite 8-advisor wealth manager with a formula behind every line: at my measured 60% Year 1 loses EUR 1,882, it breaks even at 73% and pays back in 10.5 months at 80%; time spent on news is still my estimate. |

**6 ECTS, extended evidence:** not applicable (4 ECTS track).

**Your click:** In Week 1 I assumed an AI news tool would be right 80 to 100% of the time; now I believe the measured error rate decides the whole case, because at 60% accuracy the tool loses money in Year 1, and 20 percentage points of accuracy decide the whole investment.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:

---

## Checkpoint 2 — End of Week 8

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Market mechanism thinking | 5 | 🔴 | I scored Fluere 2/18 (AI-Invisible) on a 6-criterion GEO audit and checked its absence with two ChatGPT runs, but it was one company on one engine and I needed step-by-step help to view the page source, so I could not repeat it cold. |
| Cost projection | 6 | 🟡 | My own Gemini API call gave EUR 0.0000756 per run and EUR 0.07 a month at 880 runs, against about EUR 1,003 a month in error cost, and Flash-Lite repeated my item 14 error, but 40 items a day and the token count are still estimates. |
| Lock-in detection | 7 | 🟡 | I scored my Graslei Wealth design 6/15 on the lock-in checklist with evidence in every row and measured that llama3.2 3B got 1 of 15 items right against 9 of 15 for Sonnet, but I never tested which of the five dimensions should weigh most. |
| Design defense | 8 | 🔴 | I produced a Northwind design, defense checklist and cost model, but they were drafted with Claude, I missed the live class, my critique form is a stand-in, and I have not defended the design aloud, so I would struggle to defend it cold. |

**Re-rate Checkpoint 1.**

| Skill | Week 4 rating | Week 8 rating | What changed |
|-------|:-------------:|:-------------:|--------------|
| Cost literacy | 🟡 | 🟡 | Token cost is now measured from my own API call (EUR 0.0000756 per run) instead of taken from the price list alone, but labour and integration costs are still assumptions. |
| Capability skepticism | 🟡 | 🟡 | My Week 4 score of 9 of 15 became 7 of 15 in both runs when the same prompt ran in clean separate processes, so 15 items cannot separate a real change from noise of about 3 answers; v2 scored 8 of 15 and its gain did not repeat on 6 fresh items, but I needed help to design these checks. |
| Vendor claim detection | 🔴 | 🟡 | I now test a claim myself (a cheaper model scored 1 of 15 on my items against 9 of 15) and record what vendor terms leave undocumented, instead of only tagging claims as fact or aspiration. |
| Value quantification | 🟡 | 🟡 | My Week 4 post predicted 80% accuracy by Week 8, and I measured 7 to 8 of 15 (47 to 53%), below my own 73% break-even, so the formulas work but my accuracy input was wrong. |

**6 ECTS, extended evidence:** not applicable (4 ECTS track).

**Your click:** At Checkpoint 1 I believed my Build had a better accuracy of 60% and that 80% was reachable by Week 8. The same prompt, re-run in clean separate processes, scored 7 of 15 in both runs, and my revision v2 scored 8 of 15 with a gain that did not repeat on 6 new items. I now treat one accuracy number from 15 items as a range of about 3 answers, and my 73% break-even as out of reach for this prompt. In other words I'm still trying to figure out how to better the accuracy and fix my build. Most of the tasks have been completed with 95% help of AI meaning that I have trouble figuring out what specifically everything means and what I should do. But I've definitely become more familiar with how to work with Claude, Claude code and how to prompt correctly.

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
