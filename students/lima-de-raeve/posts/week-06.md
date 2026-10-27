---
week: 6
title: "What Does AI Customer Service Actually Cost at Scale?"
author: "Lima"
beat: "How AI Enables the One-Person Business"
skill: "Cost projection"
date: 2026-10-27
---

# What Does AI Customer Service Actually Cost at Scale?

## The Hook

AI promises to help solo entrepreneurs run businesses without hiring additional employees. But while automating customer service sounds financially attractive, what happens when a small online store grows to thousands of customers? This week, I investigated whether AI costs could eventually outweigh the benefits.

## The Use Case: SoloShop

For my ongoing AI in Business project, I developed SoloShop, a hypothetical Belgian online clothing store operated by one entrepreneur.

My AI Build classifies customer enquiries into three categories: **AUTOMATE**, **HUMAN INTERVENTION**, and **INSUFFICIENT INFORMATION**. Straightforward enquiries could eventually be handled automatically, while complicated complaints and refund requests would be forwarded to the owner.

As SoloShop grows, I envision hiring a customer service manager who would take responsibility for customer enquiries and AI supervision, while I would retain control over financial decisions.

## The Numbers

Unlike previous weeks, when I mainly relied on estimates, I made a real API call using **Google Gemini 3.1 Flash-Lite**.

I tested a customer message about receiving a damaged jacket and requesting a refund. Gemini correctly classified it as HUMAN INTERVENTION.

The API response provided the following measurements:

- **Input tokens:** 167
- **Output tokens:** 38
- **Total tokens:** 205

Using the course's Gemini pricing reference of $0.25 per million input tokens and $1.50 per million output tokens:

**Input cost:** (167 ÷ 1,000,000) × $0.25 = $0.00004175

**Output cost:** (38 ÷ 1,000,000) × $1.50 = $0.000057

**Total cost per classification: $0.00009875**

To estimate future demand, I assumed that 10% of SoloShop's active customers would contact customer service each month, generating one classification per enquiry.

| Active customers | Enquiries/month | Monthly API cost | Annual API cost |
|---|---:|---:|---:|
| 100 | 10 | $0.00099 | $0.01185 |
| 1,000 | 100 | $0.00988 | $0.11850 |
| 10,000 | 1,000 | $0.09875 | $1.18500 |
| 100,000 | 10,000 | $0.98750 | $11.85000 |

At 10,000 customers, classification costs less than ten US cents per month. Even at 100,000 customers, the projected monthly API cost remains below one dollar.

However, these calculations only cover classification. Generating replies, maintaining integrations, monitoring performance, and employing staff would introduce additional expenses.

## The Break Point

I assumed an average monthly revenue of **€30 per active customer**. At 10,000 customers, SoloShop would generate €300,000 in monthly revenue, making the classification API bill almost negligible.

Under fixed assumptions, there is no customer-count break point for API costs alone: both revenue and classification costs increase proportionally.

The more interesting risk is **human correction time**.

In Week 2, my classifier achieved 70% agreement with preliminary expected classifications across ten test cases. This is not a validated 30% error rate, but it provides a reason to investigate reliability.

Assuming 70% of 300 monthly enquiries are successfully automated, with one minute saved per enquiry at €20 per hour, the gross benefit would be €70 per month.

If correcting a genuine error requires three additional minutes, each correction costs approximately €1. Around **70 additional errors per month** would therefore eliminate that benefit, before other expenses.

## The Insight

What surprised me most was how insignificant the token bill became compared with potential human costs.

A cheaper AI model is not necessarily the most economical choice. If a more expensive model reduces errors and avoids manual corrections, it could create greater overall value.

For solo entrepreneurs, the challenge is therefore not simply choosing the cheapest API. It is understanding the complete workflow: which enquiries AI can safely automate, when a human must intervene, and how those decisions change as the business grows.

## The Question

As AI becomes cheaper, will the biggest competitive advantage for solo entrepreneurs come from reducing technology costs, or from designing better systems that minimise unnecessary human work?
