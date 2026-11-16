---
week: 6
title: "What Does AI Email Triage Actually Cost Drewes at Scale?"
author: "Janis Krainis"
beat: "AI and Communication Automation in European Freight Forwarding"
skill: "Cost projection"
date: 2026-10-30
---

# What Does AI Email Triage Actually Cost Drewes at Scale?

When building communication automation tools for European freight forwarding—such as the email triage and data extraction pipeline for Drewes[cite: 1, 2]—it is easy to look at a single API response and assume AI is practically free. When I made my first API test call using Google’s Gemini Flash model, the response showed 184 input tokens and 42 output tokens, costing roughly €0.0001 per call. At prototype scale (10 calls a day), the monthly bill is €1.43[cite: 2]. But a cost model that stops at 10 calls is a trap. To build a system that survives contact with reality, you have to project the curve from 10 calls to 50,000 calls per day[cite: 2].

### The Use Case and Token Model
The use case is a 15-person operational forwarding desk handling 18,000 shared inbox emails per month (600 calls/day). Each email requires the AI to read customer message threads (average 200 input tokens) and output a structured JSON classification with extracted container numbers and routing tags (average 400 completion tokens)[cite: 15]. Using Standard tier pricing (`gpt-5.6-terra` / equivalent at $2.00 per 1M input tokens and $12.00 per 1M output tokens, sourced from the course AI Pricing Reference dated September 7, 2026)[cite: 20], the unit cost is €0.00478 per call.

### Scaling the Costs
Projecting this unit cost across monthly scale points (30 days/month)[cite: 17] reveals how quickly expenses compound[cite: 22]:
* **Small Pilot (100 calls/day):** €14.34/month[cite: 16]
* **Medium Desk (600 calls/day):** €86.04/month[cite: 16]
* **Full Branch (5,000 calls/day):** €717.00/month[cite: 16]
* **Enterprise Scale (50,000 calls/day):** €7,170.00/month[cite: 16]

While €7,170/month looks manageable against enterprise revenue, this token-only view is dangerously incomplete[cite: 23]. 

### Adding Error Costs and the Break Point
Following Week 6 frameworks, we must factor in our Week 2 measured error rate of 18%. At 18,000 monthly emails, 3,240 emails will fail (missing secondary IDs or misclassifying urgency). If each failure takes a coordinator 10 minutes to manually fix at a Belgian loaded rate of €33/hr (€5.00/fix)[cite: 24], the monthly error remediation cost is **€16,200**[cite: 23]. 

The token bill (€14.44) represents less than 0.1% of the total system cost; human error correction accounts for 99.9%[cite: 23]. The unit economics break point for this tool is not bound by API pricing inflation, but by accuracy degradation[cite: 26, 32]. If the error rate creeps from 18% to 30% due to prompt drift or messy carrier formatting, rework costs jump to €27,000/month, completely inverting the business case[cite: 32].

### The Insight
Every AI builder in logistics learns the hard way that token pricing is a distraction[cite: 23]. The real cost driver is error remediation[cite: 23]. If you do not model your Week 2 error rate into your Week 6 scale projection, your financial model is just a wish.

* **The Question:** If error rework is 1,000x more expensive than API tokens, why do most engineering teams spend all their optimization energy on prompt token compression instead of output validation guardrails?
