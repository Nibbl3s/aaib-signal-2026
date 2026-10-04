---
week: 2
title: "No, Don't Let AI Build the Whole Model: Running the 'No AI' Framework"
author: "Kirill Kyryllov"
beat: "The Fake Analyst: When AI-Generated Business Reports Get It Wrong"
skill: "Capability skepticism"
date: 2026-10-10
---

Last week I wrote about a case where a company let AI build a full financial model, and it
took a human 20-40 hours to rebuild it after the AI inserted dead numbers, forced balance-sheet
plugs, and misclassified CapEx as OpEx. This week I wanted to test whether that was a one-off
failure or a predictable one. The "no AI" decision framework says it's predictable.

## The use case

Should a company let AI build a complete financial model from scratch, with no financial
analyst in the loop?

**Q1: Do you know the answer already?** No. That's the whole reason to use AI here, the
company doesn't have the model yet.

**Q2: Is the cost of being wrong higher than the cost of being slow?** Yes, clearly. A broken
model doesn't just cost time, it costs real money. In the case I covered last week, the
rebuild ran €1,200-€3,600 for a model that cost about €25 in subscription fees to generate. If
the broken model gets used for a real decision before anyone catches it, the cost is worse:
one AI pension-tax error researched by the Financial Times risked a saver a £17,500 charge
from HMRC. The downside dwarfs the time saved.

**Q3: Is the information stable or changing rapidly?** This is where it gets interesting.
Accounting logic itself (double-entry, how a balance sheet balances) is stable. But the
specific rules that trip AI up, like CapEx vs. OpEx classification, tax treatment, intercompany
eliminations, change by jurisdiction and by year. AI is confident either way. It just isn't
reliably right on the part that changes.

**Q4: Can you verify the AI's answer?** Only if someone already knows what a correct model
looks like, meaning a financial analyst still has to check every formula, every classification,
every balance. At that point, the "time saved" by AI gets handed straight back to the human
doing the audit.

**Q5: What's the simplest tool that solves this?** A model template built once by a human,
filled in by AI where it's just data entry, and checked at the known failure points (CapEx/OpEx
calls, intercompany balances, formula consistency across periods) by the analyst. Not a
from-scratch AI build with no review.

## The verdict

AI-Risky, bordering on AI-Incompatible, for full autonomous model generation. Not because AI
can't produce something that looks like a financial model. It clearly can, fast. The problem is
Q4: verifying the model requires exactly the expertise the AI was supposed to replace. You can't
outsource the audit to the thing being audited.

## The simpler solution

Keep a human-built template with the structural logic (cover page, assumptions, checks) already
correct, and let AI populate it with data under supervision, not build the architecture itself.
This is slower than "AI, build me a model" but faster than discovering the model is wrong after
a partner has already acted on it.

## What this changes about my beat

I'd assumed the interesting failures would be AI getting numbers wrong. The more interesting
finding is that verification itself is the bottleneck: the "simpler tool" here isn't really
simpler, it's just moving the expensive part (human judgment) earlier, before the model ships,
instead of after it breaks.