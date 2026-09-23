---
week: 2
title: "I Built a Sanctions Screening Tool. It Was Wrong or Inconsistent 58% of the Time."
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Capability skepticism"
date: 2026-09-30
---

# I Built a Sanctions Screening Tool. It Was Wrong or Inconsistent 58% of the Time.

**Hook**

Last week I priced out an AI sanctions screening tool for a Belgian importer and found the token cost was almost irrelevant next to the cost of a missed match. This week I actually built the tool and tested it. The honest answer, once I ran it through the "no AI" decision framework, was that AI should not be making this decision alone.

**The Numbers**

I built a prompt that takes a shipment invoice, extracts four fields (supplier name, country of origin, HS code, declared value), and compares the supplier against a small reference list containing two real sanctioned entities from the EU's 18th sanctions package, plus four real, unrelated companies as clean controls. I tested it on twelve inputs, each run twice, including the deliberately awkward cases the Build brief asks for: a near duplicate name, a Chinese script transliteration of a sanctioned entity, and a corrupted invoice where the honest answer was simply I do not know.

The results: seventeen of twenty four runs were correct, a 70.8 percent per run success rate. That number alone would look fine in a slide deck. It is the wrong number to lead with.

The real finding is that seven of the twelve inputs, 58.3 percent, produced a different answer across two identical runs with no change to the prompt or the input. On one run the tool correctly flagged a near duplicate name as needing review. On the next identical run it called the same name a full match. On the corrupted invoice, the one input built so the correct answer was simply unknown, one run correctly said so, and the other invented a plausible sounding supplier name rather than admitting it could not tell.

Running the five question no AI framework against my own tool made the decision obvious rather than a judgment call. Question one, do I know the answer already: no. Question two, is the cost of being wrong higher than the cost of being slow: yes, a missed match risks a fine and possible criminal referral, while a false positive costs roughly fifteen minutes of analyst time. The framework stops there. Do not use AI alone. Use a human or a rule.

**The Insight**

I built this tool believing the interesting risk was hallucination, the model inventing a fact. It is a real risk, and it showed up exactly once, in the worst possible place. But the bigger risk turned out to be something the Week 1 material warned about almost in passing: inconsistency. A tool that is wrong in a predictable way can be designed around. A tool that gives a different verdict on the same input depending on nothing you can see cannot be costed, audited, or defended, and a compliance decision that cannot be defended is not a decision at all.

The honest design that follows from my own data is not AI or no AI. It is a deterministic rule based match as the primary engine, since that is consistent by construction, with AI layered on only for the one sub case where it plausibly adds real value, matching a name across scripts, and even then only ever as a flag for a human, never as an autonomous clear verdict.

**The Question**

At what inconsistency rate should a compliance tool be considered unfit for any autonomous use, regardless of its average accuracy, and who in an organisation is actually responsible for measuring that number before deployment rather than after an incident?

---

*AI disclosure: I used Claude to help build and run the test set against my own prompt, to classify the failures using the F1 to F6 taxonomy, and to structure this write up. The decision to test for inconsistency across repeated runs, the choice of the corrupted invoice as a deliberate edge case, and the framework based conclusion were mine.*
