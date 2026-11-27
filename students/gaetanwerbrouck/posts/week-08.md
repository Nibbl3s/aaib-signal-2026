---
week: 8
title: "Draw the Checkpoint Before the Model: A Scouting AI Design"
author: "Gaetan Werbrouck"
beat: "How Football Clubs Use Data to Find Undervalued Players"
skill: "Design defense"
date: 2026-11-27
---

A club that bolts an AI writer onto its scouting data can get fluent notes that are wrong, with nobody assigned to catch them. In my first test, a small model passed only 4 of 20 player notes, mostly by naming the wrong strongest or weakest stat. Integration design decides what the model may do, what checks it, and what happens when it fails.

## The company

KV Mechelen plays in the Jupiler Pro League, Belgium's top division. The company running the club [reported](https://www.companyweb.be/en/0479448630/yellow-red-kv-mechelen) about €20.9 million turnover, a €2.8 million loss and 155.2 full-time-equivalent staff for 2025. This is my outside proposal. I have not spoken to the club or checked its scouting tools. I assume three scouts review 200 player profiles a month, with a first-year budget of €10,000. The job is to narrow a long list to players worth watching and explain why. People still decide who gets signed. My app, ScoutLab, is a prototype. The production version does not exist yet.

## The architecture

**Data.** Today, ScoutLab loads a 339-row Premier League 2023/24 file from a stranger's GitHub repository, with an unclear licence. Production needs a licensed feed covering the leagues the club scouts, imported as CSV, plus scouts' own notes. I have no quote for that feed.

**AI model.** Code calculates position percentiles, similar players, and now each player's strongest and weakest stat. An optional language model writes only the short note. The default is local llama3.2:3b; a paid cloud model is an alternative. After I handed it those two answers, it went from 4 to 20 of 20 on my checker. But its summaries stopped quoting stat values: 18 of 20 did before, none after. The checker missed that, and some conclusions are still unsupported.

**Integration.** CSV import feeds the app. One function calls any OpenAI-compatible endpoint, with address and model name as settings. If it fails, tables and charts still work.

**Interface.** The existing Streamlit screen shows numbers beside the note. A failed check produces a warning, not a block. A scout reads, watches the player, and decides.

**Governance.** An automatic check tests both stat labels, unknown numbers, certain unsupported claims and a missing summary. Still proposed: a log, a named owner, and a monthly error review.

**Costs (assumptions):** development €3,200 (10 days), hosting €600, API allowance €100 and legal check €1,500. That is €5,400, leaving €4,600 for data, which may be too little. At my Week 6 estimate of about €0.011 per report, 200 reports cost about €2 a month. Two review minutes each at €40 an hour is about €267 a month of scout time, outside the cash budget.

## The defense

**Why this design?** Comparisons belong in code, and a perfect score still needs reading. On my original prompt, Claude Sonnet 5.5 in the chat app passed 19 of 20 and local llama 4 of 20; I have not tested Claude on the new one. That is a small sample, and the Claude run was not an API test.

**Why not built-in AI?** If the licensed data platform offers its own AI notes, test them on the same players. If they perform as well, protect club data and allow export, buy them.

**Lock-in?** I scored my stack 5/15 in Week 7. The model is configurable; the data link is the weak point. A new provider still needs retesting.

**Scale?** At 600 reports a month, tokens are about €7 and review time is €800. Scouts become the cost long before the model does. Correcting bad notes costs extra: at 5% errors and an assumed ten minutes each, another €200.

**Risk?** The EU AI Act's [Annex III, point 4(a)](https://artificialintelligenceact.eu/annex/3/), lists AI intended for recruiting or selecting people, including evaluating candidates. I cannot rule out that a tool helping a club judge whom to sign falls under it. Player data also needs GDPR handling.

## The question

The thing I am least sure about is whether a lawyer would call this player-evaluation tool high-risk under the AI Act. If the answer is yes, I would pause the AI note and redesign governance before any club relied on it.

*Sources: my Week 6 cost work, Week 7 probe and lock-in scorecard, my Week 8 re-run; EU AI Act Annex III (checked 27 November 2026). KV Mechelen company figures: Companyweb summary of the 2025 accounts (checked 27 November 2026). Scouting volumes, project budget, review times and costs are my assumptions or estimates, not club data. This is student work, not affiliated with or endorsed by KV Mechelen.*
