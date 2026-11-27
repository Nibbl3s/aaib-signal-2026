---
week: 8
title: "I Designed the AI News Desk for 8 Advisors. At the Accuracy I Measured, It Still Loses Money in Year 1."
author: "Viktor De Ganck"
beat: "AI as a retail investor's research desk"
skill: "Design defense"
date: 2026-11-25
---
In news triage the model is the cheap part: my tokens cost EUR 11 a year. A firm that skips the design pays for everything else, which is the integration, the maintenance and the mistakes that reach clients. I designed the full desk for Graslei Wealth and priced it at the accuracy I measured this week, not the 80% I predicted in Week 4.

## The Company

Graslei Wealth is my composite independent wealth manager in Ghent, from Week 4: 8 advisors who read the FT, ECB, Fed and VEB (the Flemish investors' federation) every morning before client calls. The managing partner decides, and wants a ready morning list before the first client call, because today nobody can show which items an advisor skipped or misread. Constraints: EUR 8,000 for integration (est.), no engineers, and no client data in the AI pipeline.

## The Architecture

**Data:** public headlines from the sources advisors already read, about 40 items a day (est.). No client data.

**Model:** Claude Sonnet 5.5 through the API at Standard tier ($2 in, $12 out per 1M tokens, course price list of 7 Sep 2026). My prompt v2 returns event type, assets, and fact or opinion. About 500 tokens in and 30 out per item: EUR 11 a year.

**Integration:** one small function fetches the items, calls the API, and rejects any answer that is not three allowed lines. A rejected item is shown unlabelled. EUR 8,000 once, then EUR 2,000 a year for maintenance (both est.).

**Interface:** one morning list. Opinion items sit in their own section, "opinion, not news". The asset label is shown as "suggested", because assets were right in only 18 of 30 answers.

**Governance:** every call is logged with item, model version, labels and cost. One advisor checks 15 items a month against the source, and no label reaches a client unless the advisor read the item. Data flows one way: feeds, function, model, log and list.

**Cost:** at 100% accuracy the saving is 8 advisors x 0.15 h x 220 days x EUR 57 = EUR 15,048 a year (my Week 4 model). My measured 8 of 15 (53%) gives EUR 8,026. Year 1 costs EUR 10,911 (11 + 8,000 + 2,000 + 900 for mistakes), so Year 1 nets **-EUR 2,885** and payback takes 18.8 months. v2 cut wrong event and fact/opinion answers from 7 and 10 (two identical v1 runs) to 2, but on 6 fresh items it did no better than v1, so part of that gain was fitted.

## The Defense

**Why this approach?** A three-label answer can be graded against a key, so data can prove or kill it. Pilot first: two advisors, one month, a script instead of the integration. The EUR 8,000 is spent only if 30 fresh items reach 22 fully correct (73%, the break-even).

**Why not built-in AI?** Copilot for 8 users is 8 x $30 x 12 x 0.92 = EUR 2,650 a year (est.), cheaper than my EUR 10,911. If it passes my 15 items, I drop the build.

**Lock-in:** 6/15 on my Week 7 scorecard, pricing control weakest (30 days' notice). I own the prompt and the graded items. Llama ran the same prompt in under 1 hour but scored 1 of 15, so it proves an exit exists, not that it is usable.

**Cost at scale:** ten times the news costs EUR 110 a year in tokens, and doubling the advisors doubles the saving, not the bill. Each 10 points of accuracy are worth EUR 1,505 a year.

**Fallback:** if the API or the format check fails, items appear unlabelled and advisors read as today. The dangerous failure is opinion shown as fact: none in 30 answers on my 15 items, but mixed items (a bid plus an analyst remark) came back as fact in 2 of 12 fresh answers.

## The Question

If the pilot misses 22 of 30, I drop the integration and keep the prompt. What I am least sure about is whether 30 items can be trusted, because the same prompt scored about 3 items differently between identical runs.

*Measured: 15 items, run twice, same harness for v1 and v2, plus 6 fresh items with an answer key written before the run. (est.) figures are my assumptions; Graslei Wealth is a composite. Numbers calculated in Python; post drafted with Claude from my own data. Case, design choices and verdict are mine.*
