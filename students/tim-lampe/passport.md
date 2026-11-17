---
type: passport
student: "Tim Lampe"
beat: "AI in Finance: How M&A Consultants use AI to value enterprises"
track: "6 ECTS"
---

# Skills Passport

**Student:** Your Name
**Beat:** Your Signal beat
**Track:** 4 ECTS *(or 6 ECTS)*

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

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Cost literacy | 1 | 🟡 |I converted token prices ($2.00 in / $12.00 out per million, 0.92 USD to EUR) into a cost per run of about €0.09 for my peer screen, but I have not yet measured real token use per run.|
| Capability skepticism | 2 | 🟡|I designed my peer-screen prompt with an "Unclear" verdict and a no-invented-figures rule against fabricated output (F2), but I have not yet measured how often it still fails.|
| Vendor claim detection | 3 |🟡 |I tagged 7 Valutico claims (2 Facts, 1 Aspiration, 4 Avoidances) and found that its "half the time" claim conflicts with its own "a third" quote, but the vendor has not answered my questions, so the claims stay untested||
| Value quantification | 4 |🟡 |I quantified the peer screen at €1,055 net per month with a 0.9-month payback (3.3 months under a 50% pressure test), but time saved, volume and accuracy are my estimates, not measurements|

**6 ECTS — extended evidence:** Valutico's seven claims tagged and tested with the FOMO questions (Q3 verification, Q4 total cost, Q5 simpler solution). Verdict: pilot, not buy. I also sent the vendor two questions ("suggests the most relevant comps" and "pays out 10 times over"). The silence is documented as evidence under Q3.
- **Extended cost model:** Token cost per run (16,500 in / 5,000 out = $0.093 = €0.086), times 3 runs and 4 valuations a month (about €1 a month), plus maintenance (2 h × €48 = €96 a month) and a one-off implementation (20 h × €48 = €960). Net benefit €1,055 a month, payback 0.9 months.
- **Sensitivity analysis:** Benefits −50% and costs +50% give a payback of 3.3 months. With volume also halved, the payback is 10.1 months. Break-even: the screen must save at least 3 analyst-hours a month (the base case saves 24). Risk side: the net benefit per valuation (€264) equals 0.007% of a €4M enterprise-value error (my estimate).

**Your click:** I believed an AI tool's value was its accuracy; now I believe value is the hours it saves that someone actually reuses, minus the cost of the errors left in the output, and that needs an error rate I have to measure.

**Instructor check:** ☐ Validated ☐ Adjusted — Notes:

---

## Checkpoint 2 — End of Week 8

| Skill | Week | Rating | Evidence (one sentence) |
|-------|:----:|:------:|-------------------------|
| Market mechanism thinking | 5 | 🟡 | I applied it to my own design in Week 8: a provider price change is cheap for me (tripling the token price adds about €22 a year) while leaving costs about €519 in work, and I chose a main model, a spare and an offline fallback so no single provider sets my terms. |
| Cost projection | 6 | 🟢 | I costed the Comp Screen end to end (€10,378 one-off, €1,644 running in year 1, €12,021 total against a €15,000 budget) and the numbers agree across the post, the cost model and the Build Log. |
| Lock-in detection | 7 | 🟡 | I priced my exit from the model API at about €519 (10.8 h) and tested a second provider (Groq 95.8%, Llama 79.2%), but my written vendor question (sent 26 Oct, no reply as of 13 Nov) left the notice period unknown. |
| Design defense | 8 | 🟡 | I defended the design with a stress test (payback 10.2 months; 42 months with benefits −50% and costs +50%) and named review time as the deciding number (break-even 2.8 h per valuation), but I have not tested Copilot and no practitioner has challenged the design yet. |

**Re-rate Checkpoint 1.**

| Skill | Week 4 rating | Week 8 rating | What changed |
|-------|:-------------:|:-------------:|--------------|
| Cost literacy | 🟡 | 🟢 | In Week 4 I assumed 16,500 input tokens per run (€0.09); I have now measured about 395 input tokens per screen, so tokens are about €1 a month and the real costs are build, hosting, maintenance and review time (€12,021 in year 1). |
| Capability skepticism | 🟡 | 🟡 | I now measure failures (Claude 71/72, Groq 138/144, Llama 114/144, sorted into F1 to F6), but Claude was run only once and fabricated figures (F2) are not counted yet, so I still cannot call it stable. |
| Vendor claim detection | 🟡 | 🟡 | I checked Groq's price against my own API response and asked it a written question, but it never answered, and I took Claude's price from price trackers and have not scored Anthropic's notice terms. |
| Value quantification | 🟡 | 🟡 | The Week 4 figures (€1,055 net a month, 0.9-month payback, 3.3 months under stress) became €1,015 a month, 10.2 months and 42 months once every cost was included, and the case still rests on my own estimates of 8 hours manual screening and 2 hours review. |

**6 ECTS — extended evidence:** Primary evidence is self-measurement on a 12-case test set (Claude 71/72, Groq 138/144, Llama 114/144) plus one written vendor question to Groq (26 Oct 2026, 11:54, contact form, no reply as of 13 Nov). A second test set with 10 new industries is prepared and not yet run, and no practitioner has challenged the design yet.

**Your click:** At Checkpoint 1 I believed the 0.9-month payback was the case and that tokens were the cost to watch (€0.09 per run); costing every box replaced that, because tokens are negligible (about €1 a month), the bill is build, hosting, maintenance and review time, and the payback is 10.2 months, or 42 under stress, with one number I only estimate: the 2 hours an analyst needs to review a machine screen.

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
