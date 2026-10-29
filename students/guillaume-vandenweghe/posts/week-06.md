---
week: 6
title: "€2.82 to Run, €11,740 to Be Wrong: The Real API Bill of AI in a Claims Inbox"
author: "Guillaume Vandenweghe"
beat: "What AI really costs in the insurance sector, with a focus on claims handling and customer service"
skill: "Cost projection"
date: 2026-10-30
---

This week I sent my claims-sorting prompt through two real APIs and read the `usage` object. At a mid-sized Belgian insurer, the token bill would be €2.82 a month. The mistakes would cost €11,740.

## The use case

My Build sorts each customer email in the claims inbox of a Belgian non-life insurer into one of six queues, plus its language. I model a mid-sized insurer with 250,000 policyholders (est.) and 20,000 claims emails a month (est.). That is 0.08 emails per policyholder per month. The failure that matters: a complaint that lands in the normal claims queue, where nobody from complaints handling sees it.

## The numbers

Prices, checked on 29 October 2026: Gemini 3.1 Flash-Lite costs $0.25 input and $1.50 output per million tokens (Google AI pricing page). The course Standard tier costs $2 and $12. My 24 API runs averaged 556 input and 9 output tokens. Almost everything is input: my prompt holds six category definitions and four rules, and the answer is two lines. One email costs €0.00014 ($1 = €0.92).

| Policyholders | Emails/day | Tokens/month | Tokens/year | Errors/month |
|--:|--:|--:|--:|--:|
| 100 | 0.3 | €0.00 | €0.01 | €5 |
| 1,000 | 2.7 | €0.01 | €0.14 | €47 |
| 10,000 | 26.7 | €0.11 | €1.35 | €470 |
| 250,000 | 666.7 | €2.82 | €33.79 | €11,740 |

The error column uses my measured rate. In Week 2, version 1 hid 2 of 10 complaint runs (20%) in the normal claims queue. With complaints at 3% of emails (est.), that is 120 hidden complaints a month. Each one costs €96.60 (est.): late handling, some Ombudsman files and lost customers. The insurer pays those euros. The customer pays in weeks of waiting. Errors are 4,169 times the token bill.

## The break point

What does one policyholder bring in? The average Belgian motor premium was €507 a year in 2024 (Assuralia). With a 5% margin (est.), that is €2.11 a month. With the expected error cost, one email costs €0.59. Today a policyholder writes 0.08 emails a month, so the AI uses 2% of the margin.

The warning zone (10% of the margin) starts at 0.36 emails per policyholder per month. The break point is **3.6 emails per policyholder per month**. The assumption that works: an average customer who writes about once a year. The one that fails: a customer with an open claim who chases it every week. After a storm, thousands do that at once. On tokens alone, the break would only come at 14,986 emails. If version 2 hides only 5% of complaints, the break point moves to 13.8.

## The insight

In claims handling, the token price is not the cost line that breaks. Between Flash-Lite and the Premium tier, the token bill changes 20 times, and the total cost hardly moves. A low price is not a low bill either: gpt-oss-20b on Groq is cheaper per token, but it "thinks" about 460 tokens before each two-line answer, so a run costs 23% more than on Gemini. Through the API, Gemini hid no complaints at all, but it flagged a third of my normal emails as complaints. The errors moved, but the monthly bill (€11,432) hardly did. The number that decides the case is the error rate, and nobody prints that on a pricing page.

## The question

If being wrong costs thousands of times more than the tokens, should insurers pay AI vendors per correctly routed email instead of per token?

*AI note: I made the API calls myself with a script (Google and Groq, free tier) and used Claude to help with the calculations and to structure this post. The numbers, choices and conclusions are mine.*
