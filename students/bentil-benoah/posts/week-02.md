---
week: 2
title: "When AI Is Not the Right Tool"
author: "Bentil Benoah Boakye"
beat: "AI in ERP and Business Process Automation"
skill: "Capability skepticism"
date: 2026-10-02
---

# When AI Is Not the Right Tool

This week I learned that just because AI can be used for something does not mean that it should be used.

For my beat, AI in ERP and Business Process Automation, I thought about a company using Odoo. Imagine the company gives customers a 10% discount when their order is above €1,000. The company could ask an AI system to look at every order and decide if the discount should be applied.

At first this sounds like automation, but after using the five-question framework, I don't think AI is the right tool.

**1. Do we know the answer already?**

Yes. The rule is already known. If the order is above €1,000, the customer gets 10% discount. There is nothing for AI to predict.

**2. Is the cost of being wrong higher than the cost of being slow?**

A mistake could cause the company to charge the wrong amount. Even if one mistake is not very expensive, doing this across thousands of orders could create a bigger problem.

**3. Is the information stable or changing rapidly?**

The information is stable. The company already has the order amount inside the ERP system and the discount rule is fixed.

**4. Can we verify the AI's answer?**

Yes, we can compare the answer with the rule. But if we already have to use the rule to check the AI, then it makes more sense to just use the rule directly.

**5. What is the simplest tool that solves this?**

A normal automated rule in Odoo would be simpler. For example: if the order total is above €1,000, apply a 10% discount. This would be faster, easier to understand and more predictable than asking AI to make the decision.

This example changed the way I think about AI in ERP systems. I am interested in using AI with Odoo, so it is easy to think that adding more AI automatically makes the system better. But sometimes normal automation is actually the better solution.

AI becomes more useful when the input is less structured. For example, understanding a customer's written complaint and deciding whether it is about an invoice, return or product problem is harder to solve with one simple rule. That is similar to the classifier I am testing for my Build.

My main takeaway is that AI should solve a problem that actually needs AI. If a spreadsheet, normal ERP rule or simple automation can do the same job reliably, I would choose the simpler solution.