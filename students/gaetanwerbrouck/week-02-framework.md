# Week 2: Five-question framework

**Use case:** An assistant that extracts listed football statistics from a player profile into a consistent table for a scout.

## 1. Do I know the answer already?

Not necessarily. The information may be spread across a profile or report, and a tool could save time copying it into a standard format. If I already have a clean table, using AI would add little value.

## 2. Is the cost of being wrong higher than the cost of being slow?

For a first-pass data extraction task, an incorrect number could mislead a scout. The system should therefore not be used as an unchecked source of truth. The cost is lower if the output is only a draft and every value is checked against the supplied profile.

## 3. Is the information stable or changing rapidly?

Player statistics, team, injuries, and contract information can change. The tool should only extract from the specific source supplied for that run, and the source date should be recorded. It should not rely on remembered or supposedly current facts.

## 4. Can I verify the answer?

Yes, if the original profile or report is available. Each extracted field can be compared with the source. If a field is absent or unclear, the tool should say “Not stated” rather than guess.

## 5. What is the simplest tool that works?

A spreadsheet or a simple form may be enough if the source is already structured. AI becomes worth testing when the input is messy text and the same fields need to be extracted repeatedly. The test should measure whether it saves time without introducing unacceptable errors.

## Decision

I would test AI only as a supervised extraction assistant. It would not make transfer recommendations or decide whether a player is undervalued. The output must be checked against the source before anyone uses it.
