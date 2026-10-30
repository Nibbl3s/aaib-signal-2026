---
week: 6
title: "When Cheap AI Becomes Expensive: Costing My Review Classifier"
author: "Ksenija Maruscaka"
beat: "AI in Marketing and Consumer Personalization"
skill: "Cost projection"
date: 2026-10-30
---

# When Cheap AI Becomes Expensive: Costing My Review Classifier

## The Hook

An AI model can classify a customer review for a fraction of a cent. That sounds perfect for e-commerce marketing teams — until thousands of reviews need checking, incorrect labels require staff time, and the business must support the system. I tested one real API call to find out what this might cost.

## The Use Case

My Week 2 Build sorts customer reviews into three categories: **Product Quality**, **Shipping**, and **Neutral/Other**. A marketing team could use these labels to identify recurring complaints. For my business scenario, I assume a subscription service charging each online shop **€15 per month**, with each shop processing **two reviews daily**. These are planning assumptions, not real company data.

## What I Measured

On 30 October 2026, I called **Google Gemini 3.1 Flash-Lite** through Hoppscotch. For the review "The jacket tore after one week of use," it correctly returned **Product Quality**. The actual API response showed **37 input tokens**, **2 output tokens**, and **39 tokens in total**.

Google's [published Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) lists **$0.25 per million input tokens** and **$1.50 per million output tokens** for the paid Standard tier (checked 30 October 2026).

My measured-call calculation is:

`(37 × $0.25 / 1,000,000) + (2 × $1.50 / 1,000,000) = $0.00001225`.

This is a **paid-tier cost equivalent**; a free-tier request might actually be billed at $0.

| Paying shops | Calls per day | Calls per month | API cost per month | API cost per year |
|---|---:|---:|---:|---:|
| 10 | 20 | 600 | $0.00735 | $0.0882 |
| 100 | 200 | 6,000 | $0.0735 | $0.882 |
| 1,000 | 2,000 | 60,000 | $0.735 | $8.82 |
| 10,000 | 20,000 | 600,000 | $7.35 | $88.20 |

At 10,000 business accounts, the modeled token bill is only **$7.35 per month**. This assumes every call stays as short as my test; longer reviews and prompts would increase it.

## The Hidden Cost and Break Point

My original Week 2 Build passed **8 of 12 tests**, meaning **4 of 12 failed (33.3%)**. That is a small, earlier test set — **not a measured error rate for Gemini 3.1 Flash-Lite**. I use it only as a provisional risk assumption.

Suppose a marketing analyst takes **30 seconds** to fix a wrong category and costs **€30/hour**. Each correction then costs **€0.25**. At 100 shops, the service processes 6,000 reviews monthly; applying the old failure rate gives **2,000 corrections**, or **€500** in labor. That dwarfs the **$0.0735** API bill.

With €15 subscription revenue per shop, these assumptions imply a **variable-cost break point of approximately six reviews per shop per day**. More reviews make the correction costs exceed the subscription revenue even while the API remains cheap. I also assume **€2,000 initial integration** and **€100 monthly monitoring**, which make profitability harder at a small customer base. None of these costs is a real vendor quote.

The decisive assumption is correction time. If fixing an error takes two minutes rather than 30 seconds, the labor cost at two reviews daily rises to **€20 per shop per month**, already above the €15 subscription.

## The Lesson

The surprising result is that token pricing is almost irrelevant for this short classification task: staff corrections dominate. Before launch, I would test the same API model on more real reviews, measure correction time, and enforce a clear fallback for ambiguous comments. My next question is whether improving the prompt reduces total costs more than switching to a more expensive model.
