---
week: 6
title: "How Much Does My AI Market-Entry Risk Detector Cost?"
author: "Subhan Naeem"
beat: "AI in Business Consulting"
skill: "Cost projection"
date: 2026-11-12
---

Consulting firms are adding AI to speed up market-entry screening, and the API bill looks tiny. But the number on the pricing page is not the number that decides whether a tool works. I modelled my own to find out which one is.

## The use case

My AI Market-Entry Risk Detector reads information about a potential market and classifies it as Political, Economic, Legal/Regulatory, Operational or No Major Risk, with a one-sentence explanation. I assume an international consultant runs it three times a day, or 90 analyses a month, and pays a hypothetical €9.99 per month. I also assume €150 of fixed monthly costs.

## The numbers

From my own prompt I estimated 850 input and 35 output tokens per analysis (estimates, not measured usage). On Google's Gemini 3.1 Flash-Lite ($0.25 input and $1.50 output per million tokens) that is $0.000265 per analysis, about €0.022 per consultant per month (at $1 = €0.92).

**Projection** (3 analyses per user per day, 30 days, $1 = €0.92)

| Consultants | Analyses/day | API cost/month | API cost/year | Revenue/month |
|---|---:|---:|---:|---:|
| 10 | 30 | €0.22 | €2.63 | €99.90 |
| 100 | 300 | €2.19 | €26.33 | €999 |
| 1,000 | 3,000 | €21.94 | €263.30 | €9,990 |
| 10,000 | 30,000 | €219.42 | €2,633.04 | €99,900 |

Even at 10,000 consultants the API bill is about €219 a month against €99,900 of revenue. On the course's Standard tier ($2/$12) it would be about €1,755 on Premium, about €4,388.

**The break point:** fixed costs make me break even at 16 paying consultants on every tier. Per user, API cost alone would only exceed the €9.99 price at about 1,370 analyses a day on Flash-Lite, or about 70 on Premium, against my assumed three. So volume is not what breaks this product. Errors are.

In Week 2 my tool classified 18 of 18 test inputs correctly, a measured 0% error rate. But 18 cases only rule out error rates above about 16.7% (Rule of Three: 3 ÷ 18). That is a stress-test assumption, not my error rate. If a consultant needs 10 minutes to fix a wrong classification at a loaded €57.75 per hour (€9.63 per error), 16.7% means 15 errors and about €144 of correction time per consultant per month, against a €9.99 price.

The real break point is therefore an error rate of about 1.2%, roughly one error per consultant per month. The consultant, not me, pays that cost, so it would show up as churn rather than on my invoice.

## The insight

AI processing is almost free here; trust is the expensive part. With zero errors in 18 tests the tool looks perfect, but proving an error rate below 1.2% would take roughly 260 error-free test inputs, not 18. A builder in consulting should budget for testing and human review before optimizing token prices.

## The question

How can consulting firms measure whether an AI tool is reliable enough for real market-entry decisions, and how many test cases are enough?

*Sources: AI Pricing Reference (course snapshot, 7 September 2026) and Google AI pricing, my Risk Detector prompt and Week 2 test results, Week 4 consultant cost assumption. Token counts, subscription price, fixed costs and estimates.*

*AI disclosure: I used ChatGPT and Claude to help structure this document, check the grammar and improve the wording. The use case, assumptions, and the content are my own.*
