---
week: 7
title: "I Ran My Sanctions Screening Tool on My Own PC. It Got 4 Out of 24 Right."
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Lock-in detection"
date: 2026-10-14
verdict: "Connect, and keep the exit a re-test away"
stamp: "LOCK-IN 5/15 · MODERATE"
kpis: "5/15 | lock-in score of my own stack ; €1,258 | cost to switch provider ; 16.7% | success on a model I own (vs 91.7% cloud)"
takeaways: "My lock-in is capability, not price ; A thin switching layer and a saved test set are the cheapest insurance ; Owning the model removed the vendor but added wrong answers"
---

# I Ran My Sanctions Screening Tool on My Own PC. It Got 4 Out of 24 Right.

**Hook**

Everyone warns about vendor lock-in as a price problem: the provider raises prices and you are stuck. I priced my own exit this week. If my AI provider tripled its price tomorrow, I would not move. My real lock-in turned out to be somewhere else.

**The Use Case**

A Belgian SME importing from China has to screen every supplier against EU sanctions lists. My Build reads a shipment invoice, extracts supplier, origin, HS code and value, and flags the supplier; a compliance analyst decides. It runs on Claude Sonnet 5.5 through the API, from one small script that can also call Gemini or a model on my own PC.

**The Decision**

Build, buy or connect? Screening is compliance hygiene, not a competitive advantage, so building everything makes no sense. Matching names against sanctions lists is a commodity: a published plan costs $49 a month for 2,500 screens. But invoice extraction and cross-script name warnings are not in that product, the lists change with every sanctions package, and an SME has no developers. So: **connect**. Buy the list matching, connect one language model through a thin layer for extraction and warnings, and keep the decision with a person.

**The Lock-in Scorecard**

I scored my own stack on five dimensions, 0 to 3 each: 5 out of 15, moderate. Data portability scores 0: every prompt, invoice and raw answer sits as plain JSON on my own disk. API stability scores 1: Anthropic gives at least 60 days' notice before retiring a model, and kept exactly 61 days twice this year. Feature dependency and migration cost score 1 each: one function switches providers, and moving took an afternoon. The highest score, 2, is pricing control: list prices can change on 30 days' notice, with no cap.

But that risk barely bites. Tripling the price moves my tokens from €79 to €237 a year, while switching costs about €1,258. The dependency that matters is capability. The same prompt scored 91.7% on Claude, 89.5% on Gemini (19 runs so far) and 16.7% on a free model on my own PC, which wrote Python code instead of answers nine times and once cleared a sanctioned bank.

**The Migration Path**

If I had to leave within 90 days, I would move to Gemini: in week one re-run my 12 test invoices, in month one run 10% of real checks in parallel, and by the end of the quarter switch while keeping the old path as a fallback. That costs about 1.5 developer days and 10 analyst hours. What I cannot carry over is my measured baseline: every model fails differently, so the switch is a re-test, not a rewrite.

**The Insight**

In my beat, lock-in is less about who owns the data or sets the price, and more about which models are good enough to trust with a sanctions decision. Running the model on my own PC removes the vendor but adds wrong answers. The real protection is cheap: a thin switching layer, a saved test set, and the discipline to re-measure.

---

*AI disclosure: all runs were made with my own prompt and test set on 14 October 2026 (Claude API, Gemini API, and llama3.2 on my own PC). I used Claude to write the run script, read the vendors' terms, check the arithmetic and structure this post; the scores and the decision are mine.*

Full workings: [second model](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-07/second-model.md) · [lock-in scorecard and exit plan](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-07/lock-in.md)
