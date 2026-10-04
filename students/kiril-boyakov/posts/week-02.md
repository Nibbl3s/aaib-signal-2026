---
week: 2
title: "A Freight Quote Needs a Calculator Before It Needs AI"
author: "Kiril Boyakov"
beat: "AI in European Freight Cost Estimation"
skill: "Capability skepticism"
date: 2026-10-04
---

My family works in logistics, so I have been curious about freight since childhood. Last week, I explored the difference between cheap AI tokens and expensive human checking. This week, I asked a more basic question: when should a freight business avoid using a language model for the task?

My example is calculating a customer quote when the shipment details, applicable rate sheet, and pricing rules are already available. The business needs a traceable calculation. A fluent explanation cannot compensate for using the wrong rate or leaving out a surcharge.

## Applying the five questions

**Do we know the answer already?** We may not know the final total, but we know how to calculate it. For a hypothetical shipment with a €500 base charge, a 10% fuel surcharge applied to that base, and a €30 handling fee, the total is €580. A spreadsheet can calculate this directly. The important work is confirming that those are the applicable charges.

**Is being wrong more expensive than being slow?** A wrong quote could reduce the company’s margin, require a correction, or damage customer trust. Taking time to verify the inputs may therefore be worthwhile. I would not let a generated answer become a customer commitment without checking.

**Is the information stable?** The arithmetic is stable, but rates, surcharges, and availability can change. The calculation must use an approved rate source and its validity dates. A model’s remembered knowledge cannot establish which price applies today.

**Can we verify the answer?** Yes, if each amount can be traced to a rate entry and each operation to an explicit rule. A spreadsheet can expose that calculation. If an input is missing, the process should stop and request clarification.

**What is the simplest tool?** For this bounded case, I would choose a validated spreadsheet or rules-based calculator, with human review for exceptions. More complex freight pricing may require dedicated software, but complexity alone does not make a language model the right calculator.

## What my Build actually showed

My Build tackles a smaller task: classifying freight-service descriptions by transport mode and quoting the supporting words. Across ten inputs tested twice, all 20 recorded responses matched the expected answers.

That result needs context. One input was tested in two individual chats with prompt v1. The remaining nine were tested in two batches with v1b. Examples within a batch shared context, and many descriptions contained clear transport terms. This does not establish 100% accuracy on unseen customer requests.

It also does not prove that AI beats a keyword dictionary. My next useful comparison is between the classifier and simple rules on unfamiliar, ambiguous descriptions, measuring errors and checking time.

The distinction matters: identifying “air freight” in supplied text does not demonstrate the ability to produce a reliable air-freight price. I would consider AI for organising varied requests, while keeping the actual calculation tied to verified data and explicit rules.

My question is: how much time must an AI classifier save over simple rules to justify its additional checking and operating costs?

Sources: [Week 2 course instructions](https://advanced-ai-in-business.vercel.app/week/2); [my Build log](../build/log.md).

AI assistance: I used AI to help structure and draft this post, prepare the classifier prompts, and assess recorded outputs. The test log documents the responses and the change from individual to batch testing.