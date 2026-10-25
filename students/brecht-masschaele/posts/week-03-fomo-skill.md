---
week: 3
title: "Coordination Hub & Coach Hub: Real Value or FOMO? I Built a Skill That Asks First"
author: "Brecht Masschaele"
beat: "AI in International Management"
skill: "Vendor claim detection"
date: 2026-10-25
---

## Hook

Week 3 showed two ways to waste money on AI. I don't want to buy a "revolution" that beats my spreadsheet by three points. I don't want the management to turn down a tool that would save us some burn-outs and bore-outs a year. I want to avoid the root cause: let's test the claim. I have two AI ideas for our internship & BAP programme, so I built a tool that tests them first. 🛠️

## What I Built

A Claude skill called **AI FOMO Check**. I give it an idea or paste a vendor pitch, and it asks six questions, one at a time: What's the real problem, in numbers? What's the real win, and what does waiting six months cost? Is AI the right tool? Can the claims be checked on our data? What's the total cost? Is there a simpler fix for 80% of the problem?

It pushes back on vague answers, stops when an answer kills the case, and can also say "buy". It ends with one verdict.

## The Vendor Claims

Both ideas run on Claude, so the skill first tagged Anthropic's pitch (claude.com, 19 October):

| Claim | Tag | Why |
|---|---|---|
| "No model training on your content by default" (Team) | **Fact** | Checkable in the terms, but personal accounts aren't covered. |
| Claude "meets the compliance requirements higher education institutions have for student data" | **Avoidance** | Which requirements? No GDPR basis, no data processing agreement, no EU location named. |
| Helps admin teams "transform the way they work without losing quality" | **Aspiration** | No baseline, no metric, no timeframe. |

## Two Runs

**Coordination Hub:** AI drafts replies to repeat questions in our shared inbox.

**Coach Hub:** AI gives coaches a process to-do list, a progress overview, draft emails, and coaching notes on student documents.

| Question | Coordination Hub | Coach Hub |
|---|---|---|
| Real problem | Repeat emails. Volume and time are still estimates. | 250 BAP students a year, 21 paid hours each (5,250 hours). Too much of that goes to admin, and feedback differs widely between coaches. |
| Cost of waiting | Staff hours, no students. **Low.** | Semester 2 grows from 70 to 180 students and from 20 to 40 coaches. **Real.** |
| AI fit | Good: repetitive and reviewed. | **Split.** To-do lists and overviews follow fixed dates: that's rules, not AI. Draft emails and document feedback fit well. A source audit risks invented findings. |
| Total cost | About €3,000 in Year 1. | The tools already exist. The cost is seats: up to 40 (about €8,800/yr at list price), plus training coaches. |
| Simpler fix | FAQ page and templates. | Shared timeline, email templates, and a feedback template based on our BAP rubric. |

The Coach Hub run surprised me. "One AI tool for coaches" bundles four jobs, and only two need AI. It also sharpened the goal: not fewer hours, but better ones. Less admin per student, more time for in-depth feedback and coaching sessions. That's a target I can measure.

## The Verdicts

**Coordination Hub: pilot.** One named task, timed, against a templates-only comparison.

**Coach Hub: simpler fix plus pilot.** Build the timeline and templates now, without AI. Pilot AI document feedback with five coaches in semester 2, measured on the share of coaching hours spent on admin versus feedback and sessions, and on feedback consistency against the rubric.

Both have one condition: no student documents go in until our data protection officer has seen the DPA.

## The Question

If coaches use AI to write feedback, how do we stay credible telling students that AI may polish their work but not do their thinking? 🤔

---

*AI helped me build the skill and edit this post. The design choices, answers and verdicts are mine. Anthropic's claims were taken from claude.com on 19 October 2026.*

