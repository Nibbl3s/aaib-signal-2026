---
week: 2
title: "The Part of My Build Where AI Is the Wrong Tool"
author: "Tim Lampe"
beat: "AI in M&A Valuation"
skill: "Knowing when not to use AI"
date: 2026-10-01
---


# The part of my build where AI is the wrong tool

My build is a prompt that reads two annual reports from the same company and flags inconsistencies between the years. I ran it twice on each of ten report pairs, then ran the "no AI" framework against it. The honest result is that for most of what the prompt does, AI is the wrong tool.

## Why the spreadsheet wins

**Reliability.** In thyssenkrupp nucera's report, the cashflow from the statements doesn't add up to the reported cashflow. Both of my runs caught it. A formula catches it every time, and my runs did not do that elsewhere. On Siemens, one run gave 3 flags and the other 11, and only 2 of 12 distinct flags appeared in both. Across ten report pairs, two came out correct.

**Auditability.** If a reviewer asks why something was flagged, I can point to three cells. With a model I can show a prompt and an answer that may not reproduce.

**Cost, and it isn't the run.** Last week's title already said it: a €5 run and a €400 check. The check is the expensive part, and it grows with every result I can't trust.

**Maintenance.** If I want a different threshold, I edit one cell. With a prompt, I retest ten pairs.

## The insight

The 25% rule in my prompt is a formula written as a prompt. On Apple, Telekom and ASML it produced most of the swing flags, and many were noise that no note could ever settle. In a spreadsheet I can see that and fix it, for example with an absolute floor. It also changes what "AI flags inconsistencies" means in my build. The workflow splits into three:

- A script runs the three checks and lists the swings.
- AI reads the notes for each listed swing and quotes where the explanation sits, or says it found none.
- A human decides.

Calling all three steps "AI" would make my build look better than it is, and it would hide where the risk sits.

## What would change my mind

If the reports came as scans or with broken tables, getting the numbers out would become a fuzzy problem, and AI could earn a place before the script runs. In one of my runs, a table cell read "Wer" instead of a number.

## What I want to learn next

If a script produces the list of swings, how often does AI find the right explanation in the report, measured against the original pages?

---

*AI disclosure: I used Claude Sonnet 5.5 (Anthropic) to run and compare the test prompts, to draft and format this post and the outreach emails, and to format my log; the test design, the results and the conclusions are mine.*
