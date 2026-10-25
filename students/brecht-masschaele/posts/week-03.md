---
week: 3
title: "Coordination Hub & Coach Hub: Real Value or FOMO? I Built a Skill That Asks First"
author: "Brecht Masschaele"
beat: "AI in International Management"
skill: "Vendor claim detection"
date: 2026-10-25
---

## Hook

Week 3 showed two ways to waste money on AI. I do not want to buy a "revolution" that beats our spreadsheet by three points. I have two AI ideas for our internship & BAP programme, so I built a tool that tests them first. 🛠️

## What I Built

A Claude skill called **AI FOMO Check**. It asks six questions, one at a time: What's the real problem, in numbers? What does waiting six months cost? Is AI the right tool? Can the claims be checked on our data? What's the total cost? Is there a simpler fix for 80% of the problem? It pushes back on vague answers, can also say "buy", and ends with one verdict.

## The Vendor Claims

Both ideas run on Claude, so the skill first tagged Anthropic's pitch:

| Claim | Tag | Why |
|---|---|---|
| "No model training on your content by default" (Team) | **Fact** | Checkable in the terms, but personal accounts aren't covered. |
| Claude "meets the compliance requirements higher education institutions have for student data" | **Avoidance** | Which requirements? No GDPR basis, no data processing agreement named. |
| Helps admin teams "transform the way they work without losing quality" | **Aspiration** | No baseline, no metric, no timeframe. |
| Premium seat = "5x more usage than standard seats" | **Avoidance** | Five times an unpublished limit. With 40 coaches, I can't budget on that. |

## Run 1: Coordination Hub

AI drafts replies to repeat questions in our shared inbox. The fit is good: repetitive work, and every draft is reviewed. But the volumes are still estimates, waiting costs staff hours rather than students, and a FAQ page with templates might do most of the job. **Verdict: pilot**, against a templates-only comparison.

## Run 2: Coach Hub

250 BAP students a year (70 in semester 1, 180 in semester 2), 20 to 40 coaches, 21 paid hours per student. The goal isn't fewer hours but better ones: less admin, more in-depth coaching. Feedback also differs widely between coaches.

The skill split the Hub into two kinds of work:

| Part | Verdict | Why |
|---|---|---|
| Research Plan feedback, Socratic coach, feedback checker, source checker | **AI** | Reading and writing against the rubric. Up to an hour of coach work becomes 10–15 minutes of review. |
| Draft emails to students and mentors | **AI** | Personal; the coach reviews them. |
| Executive assistant | **AI, if grounded** | Only safe if it answers from the BAP guide. |
| Coach to-do list, overview, coordinator monitoring | **Rules** | "Is task X done by date Y?" needs an exact answer every time. |

The source checker searches the web to flag fake references, but can miss paywalled sources: it sorts, the coach decides.

**Rough win:** 250 students × 4 tools × 45 minutes ≈ **750 hours a year**, about 14% of 5,250 paid coaching hours, moved to real coaching. It's an estimate until I know how often each tool runs.

**Cost:** the tools already exist, so mainly seats (up to 40, about €8,800 a year at list price) and coach training.

**Verdict: pilot.** Five coaches in semester 2, measuring the share of hours spent on admin versus coaching, and feedback consistency against the rubric. Both hubs share one condition: no student documents go in until our data protection officer has seen the DPA.

## The Question

If AI drafts the feedback, how do coaches stay the ones who decide, and how do we stay credible telling students that AI may polish their work but not do their thinking? 🤔

---

*AI helped me build the skill and edit this post. The answers and verdicts are mine. Anthropic's claims were taken from claude.com on 19 October 2026.*

