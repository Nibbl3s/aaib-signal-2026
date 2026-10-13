---
week: 5
title: "A Football Transfer Value Is a Signal, Not a Verdict"
author: "Gaetan Werbrouck"
beat: "How Football Clubs Use Data to Find Undervalued Players"
skill: "Market mechanism thinking"
date: 2026-10-13
---

# A Football Transfer Value Is a Signal, Not a Verdict

A transfer-market estimate looks like a single number, but it represents a crowded set of incentives. A club's willingness to pay can reflect a player's performance, age, contract situation, scarcity at a position, expected development, competing bids and the seller's bargaining power. It is useful information, but it is not the same thing as a player's underlying quality.

That distinction matters for my beat: how football clubs use data to find players whose performance is better than their reputation or estimated value suggests. A club with fewer resources cannot simply buy every highly rated player. It needs a shortlist that helps scouts spend time on players who might be overlooked.

## A price is a signal, but it is a noisy one

In a market, a price helps coordinate decisions. It signals what buyers are willing to give up and what sellers think they can obtain. Transfer-market estimates play a similar role: they give recruiters a reference point when comparing targets.

However, an estimate is not a clean measurement of performance. Two players can post similar statistics but have different estimated values because they differ in age, contract length, league, public reputation or the competition for their signature. A player's price can also rise because several clubs want the same scarce profile, not because their recent on-pitch output suddenly improved.

That creates a scouting question: can data find players whose statistical performance deserves more attention than their estimated price or reputation would suggest? The answer should not be a single unexplained AI score. It should be a transparent shortlist with enough context for a scout to investigate the reasons.

## I changed the Build instead of defending the first version

My Week 2 experiment used five fixed rules: age, league minutes, goals plus assists per 90, estimated market value and outfield position. The ten test profiles were classified correctly in both runs, but the task is deterministic. A spreadsheet can apply those rules more simply and consistently. A successful AI test did not demonstrate that AI created extra value.

I therefore built ScoutLab as a more useful scouting workflow. It can filter a larger player pool, open player profiles, compare players, find statistically similar same-position profiles, build a shortlist and export it. It converts selected statistics to percentiles within a position group, so a defender is not assessed using the same generic scoring recipe as a forward. Similar-player search is intended to suggest who deserves a closer look, not to claim that two players are interchangeable.

There is an important gap in the default data. The public FootballScoutingAI reference dataset covers 339 Premier League player rows from 2023/24 and contains performance metrics, but no market-value field. That dataset alone cannot establish who is undervalued. ScoutLab therefore does not invent transfer values or label a player a hidden gem just because the performance score is high. The value comparison becomes available only when a separate, attributed market-value file is supplied.

## What the gap score can and cannot say

When market values are available, ScoutLab calculates a simple signal:

**Value gap = position-relative performance percentile − position-relative market-value percentile.**

A positive gap means that a player's performance rank is higher than their value rank among the selected position peers. It is a way to generate leads, not evidence that the market is wrong. The result depends on the quality, date and consistency of both datasets. If the performance data is from one season and market estimates are from a different date, the gap can be misleading.

The tool also cannot see everything a scout needs to know. Minutes and per-90 statistics can hide sample-size problems. League strength, tactical role, off-ball movement, injuries, contract status, wages, personality and adaptation can alter the recruitment decision. Video review and human judgement remain essential before any club treats the shortlist as actionable.

## My current conclusion

The market price is a useful signal, not a verdict on the player. A position-relative performance and value comparison can make that signal easier to question, but it cannot prove mispricing on its own. The next validation step is to add dated values for the same player pool, check name matches, test the results with a second person and compare the shortlist with independent scouting judgement.

The useful result is not a dashboard that promises to discover a bargain. It is a transparent way to decide which player deserves the next hour of scouting, and a clear record of what evidence would change that decision.

## Sources and method

- [FootballScoutingAI reference project](https://github.com/sahilwalawalkar/FootballScoutingAI)
- [Processed Premier League 2023/24 scouting data](https://raw.githubusercontent.com/sahilwalawalkar/FootballScoutingAI/main/data/processed/premier_league_2023_24_scouting_final.csv)

The app is a student-built prototype. The reference dataset's README does not clearly state a dataset licence, so its terms should be reviewed before redistribution or commercial use.
