---
week: 1
title: "AI Customer Quotation at O&D 3D Costs Under a Dollar a Month: The Number That Isn't the Question"
author: "Max"
beat: "AI Automation Cost Literacy at O&D Impression 3D"
skill: "Cost literacy"
date: 2026-09-25
---

What if a customer could send O&D 3D a simple message describing what they need, and AI could turn that request into a structured manufacturing brief in seconds? For a small digital manufacturing company working across 3D printing, resin, SLS, CNC and laser cutting, AI automation could save real time — but how much would that intelligence actually cost?

## The numbers

One of the first processes I would automate at O&D 3D is the initial customer request and quotation preparation. Today, a customer explains what they need by email or through a form, and someone has to understand the request, spot the missing information, decide on the right manufacturing technology and put together what's needed for a quote.

An AI assistant could handle that first stage automatically: read the customer's message, identify quantity, dimensions, material, application, tolerances and deadline, and ask follow-up questions when something is missing.

For this example, one customer interaction uses roughly 2,500 input tokens and 1,000 output tokens. At 300 customer requests a month, that's 750,000 input tokens and 300,000 output tokens.

```
Model: GPT-5 mini · $0.25 per 1M input · $2.00 per 1M output
Input:  300 × 2,500 = 750,000 tokens  → 0.75M × $0.25 = $0.19
Output: 300 × 1,000 = 300,000 tokens  → 0.30M × $2.00 = $0.60
Token cost: $0.79 / month → about $9.50 / year
```

Even at **ten times** that volume, the model cost is still only about $7.90 a month, before any other software, hosting or integration cost.

## The insight

The surprising part is that the AI itself may not be the expensive piece of this automation. At this scale, processing hundreds of customer requests could cost less than a typical business software subscription.

So the real question isn't "can we afford AI?" — it's "can we integrate AI correctly into the business?"

For O&D 3D, the value comes from connecting the AI to actual manufacturing knowledge: the differences between FDM, SLS, resin, CNC and laser cutting, material data, machine capabilities, pricing rules and production constraints. That's what turns AI from a chatbot into a digital manufacturing assistant.

The biggest benefit may not even be the money saved on tokens — it could be the time saved by employees, faster replies to customers, fewer repetitive tasks, and more consistent quotes. AI becomes interesting once it's wired into the company's existing processes, not simply because it can generate text.

## What I want to learn next

> If AI can analyse a customer request for less than one dollar a month at this scale, how far could we automate the complete journey from customer request to finished product at O&D 3D?

*One thing I want before Week 2: a real estimate of what it costs, in hours or euros, to connect an AI assistant to O&D 3D's actual pricing rules and material data — since that integration cost, not the token cost, is what will decide whether this is worth building.*
