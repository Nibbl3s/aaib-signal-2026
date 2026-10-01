---
week: 2
title: "My Own Classifier Says AI Can Help Balance a Game. The Framework Says No."
author: "Daniel Stefirta"
beat: "AI in Game Production"
skill: "Capability skepticism"
date: 2026-10-01
---

## Hook

Kojima Productions' Game Designer posting lists six tasks. The last one is three words: "Adjusting various parameters." That's balancing: how much a heavy load drains stamina on a slope, how fast rain eats a cargo container. It sounds like the perfect AI job: numbers in, better numbers out. I think it's the clearest case in my beat where AI is the wrong tool.

## The Case

The awkward part: my own tool disagrees with me. My Classifier labels that exact line `ai_assisted_human_signs_off`. Before running it, I'd written `human_only`. So I ran the five questions on it.

**1. Do you know the answer already?** Partly. The target isn't unknown. The posting says design follows "the direction indicated by the director." The feel is decided. What's missing is the numbers that produce it.

**2. Is being wrong costlier than being slow?** No. A bad value costs a re-tune, and live games get patched. On to Q3.

**3. Is the information stable?** No, and this is where it stops. The parameters belong to an unreleased build that changes every day. No model was trained on it. Anything it suggests is a plausible number for *a* game, not this one.

**4. Can you verify the answer?** Only by playing it. The ground truth is a playtester carrying 120 kg up a ridge and saying "that's miserable in the wrong way." A language model can't hold a controller.

**5. What's the simplest tool?** A spreadsheet that links weight, stamina drain and trip time with visible formulas. Then a playtest.

## Why the simpler tool wins

It doesn't win on cost. My classifier costs about €0.00065 per call. If an AI draft saved even one minute of a designer's time, it would pay for itself about 500 times over.

It wins on **accuracy and trust**. Accuracy: the playtest is the only real check, and it has to happen either way. The AI draft adds a step but removes nothing, so the human still signs off on every value. Here, signing off *is* the job. Trust: a designer has to defend each number to the director. "Stamina drain is 1.4× because the weight curve says so" holds up when someone challenges it. "The model suggested 1.4" doesn't.

That's the takeaway for my Build. **"AI-assisted" only saves money when checking is cheaper than producing.** In balancing, checking is nearly the whole cost. My classifier's label isn't wrong about capability, because AI *can* draft values. It's wrong about value. And this week I measured the same weakness from the other side: on exposure, my classifier scored 60% on 15 inputs, while a constant that gives the same answer to everything scored 66.7%.

## The Question

If "AI-assisted" only pays off when checking is cheaper than producing, can my classifier learn to tell those two apart from one line of a job posting, or is that the part a rule has to do?

---

*Assumptions: the balancing examples (load weight, stamina, cargo damage from rain) are mechanics visible to any player, not Kojima Productions' internal data. I don't know how their designers actually tune values. The spreadsheet-plus-playtest workflow is my assumption about common practice. A designer's minute is priced at about €0.38: ¥4,079 an hour (SalaryExpert's 2026 Japan average for game designers) at ¥179 per euro. Classifier figures: my Build log (15 inputs, 2 passes, `claude-haiku-4.5`), $1.00 = €0.92.*

*AI disclosure: an AI assistant ran my classifier and the no-AI baseline in code, checked the arithmetic, and helped draft and edit this post. I chose the case and the argument, and checked every claim against my Build log.*
