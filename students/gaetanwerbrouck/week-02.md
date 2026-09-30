---
week: 2
title: "Can AI Actually Spot an Undervalued Footballer?"
author: "Gaetan Werbrouck"
beat: "How Football Clubs Use Data to Find Undervalued Players"
skill: "Capability skepticism"
date: 2026-09-30
---

## The promise

A football club looking for undervalued players has to compare a lot of information. A data system can help narrow the field, and a language model can turn reports into summaries. It is tempting to treat a confident AI recommendation as a discovery. But a convincing answer is not the same as a correct one.

The useful question is not simply whether AI can produce a scouting report. It is whether the system can do a specific job reliably enough to justify putting it into a real workflow.

## A narrower job

For my Week 2 build, I am starting with a smaller task: extracting facts that are explicitly written in a player profile. The tool receives a profile and returns fields such as age, position, club, appearances, goals, and assists. If a field is missing, it should say “Not stated”. It should not guess, search its memory, estimate market value, or declare that the player is undervalued.

This is less exciting than asking AI to find the next bargain, but it is also easier to test. I can compare each extracted value with the source text. If the model invents a statistic or misses a number that is plainly present, I have a clear failure to record.

## Where confidence becomes a problem

The larger scouting question is much harder. “Undervalued” is not a fact that appears in a player profile. It depends on what a club needs, the player’s role, the quality of the competition, contract details, availability, and the price a club would actually have to pay. Some of those facts change quickly. Others require judgment and context.

A model might produce a persuasive explanation while relying on incomplete or outdated information. It might also treat a missing statistic as zero, confuse a season total with a career total, or overlook a difference between positions. Those errors matter because a scout could spend time investigating the wrong player, or miss someone worth a closer look.

## A sensible role for AI

The five-question framework from this week gives me a way to decide where AI belongs. If a spreadsheet or simple rule can do the job, there may be no reason to use a language model. If the information changes quickly, I need a current source rather than the model’s memory. If I cannot verify an answer, I should not rely on it alone. And if an error is costly, a human check becomes more important.

For now, I see AI as a possible assistant for organizing supplied information and suggesting leads for a scout to investigate. I do not see a generated ranking as proof of a player’s value. The human still needs to check the evidence and decide whether the player fits the club.

## The test

The build will test whether the model can extract information consistently, including from short, Dutch, incomplete, and ambiguous profiles. I will write the expected answers before running it, then run each input twice and record mistakes. That should show whether even this narrow task is dependable, and where the prompt needs to change.

The bigger lesson is that AI capability should be measured against a specific job, not judged by how impressive its answer sounds.
