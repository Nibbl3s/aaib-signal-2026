---
week: 4
title: "Is AI in ERP Actually Worth the Money?"
author: "Bentil Benoah Boakye"
beat: "AI in ERP and Business Process Automation"
skill: "Value quantification"
date: 2026-10-16
---

# Is AI in ERP Actually Worth the Money?

When companies talk about AI, they usually focus on how much time it can save or how many tasks it can automate. But I think the more important question is whether those improvements are actually worth paying for. This week I wanted to look at the financial side of AI in ERP systems instead of just focusing on what the technology can do.

For my example, I decided to use the customer enquiry classifier that I have been working on for my Build. The tool reads customer messages and puts them into five categories: Order Status, Invoice/Payment, Return/Refund, Product Issue and Other. I chose this because it is something I can imagine being useful for a company working with Odoo.

In the company's value chain, this would be part of customer service. When a customer sends a message, somebody normally has to read it and decide who should handle it. My idea is to automate that first step, while still leaving more complicated decisions to employees.

## Looking at the numbers

Since I don't have access to real company figures, I created a hypothetical example of a Belgian SME receiving 3,000 customer enquiries every month. I assumed the average labour cost is €25 per hour.

If AI could save four minutes on 70% of those enquiries, the company would save 140 hours per month.

3,000 × 70% × 4 ÷ 60 = 140 hours

140 × €25 = **€3,500 per month**

I also assumed that using AI could reduce incorrect classifications by two percentage points. If correcting one mistake costs €5, that would mean another €300 in potential savings.

I looked at four possible benefit categories:

| Benefit | Calculation | Monthly value |
|---|---|---:|
| Time savings | 3,000 × 70% × 4 ÷ 60 × €25 | €3,500 |
| Fewer errors | 3,000 × 2% × €5 | €300 |
| Extra capacity | Not counted separately to avoid double-counting | €0 |
| Risk reduction | No reliable data available | €0 |
| **Total** | €3,500 + €300 | **€3,800** |

These are working categories rather than confirmed labels from the course framework. I gave the last two categories a value of zero because I didn't want to make up extra benefits just to make the investment look better.

Of course, the AI system would also cost money. For this example, I estimated €100 per month for AI usage, €500 for maintenance and human checking, and a one-time setup cost of €2,000.

That means the monthly net benefit would be:

€3,800 − €600 = **€3,200**

Over one year, after including the setup cost, that would be:

(€3,200 × 12) − €2,000 = **€36,400**

The simple payback period would be €2,000 ÷ €3,200 = **0.63 months**, assuming the savings start immediately.

At first, these numbers make the investment look like an easy decision. But I realised there is a difference between saving time and saving actual money. If employees still work the same hours and the company cannot use the saved time for something productive, the financial benefit could be much lower.

## What if my estimates are wrong?

One thing I learned from Week 3 is that impressive numbers don't mean much if nobody questions where they came from.

So I tested what would happen if my estimated benefits were 50% too high. Instead of €3,800, the company would only save €1,900 per month.

After subtracting €600 in operating costs, the monthly net benefit would be €1,300. The payback period would then increase to €2,000 ÷ €1,300 = **1.54 months**.

Even in that situation, the investment still looks profitable on paper. But that doesn't mean I would recommend buying it immediately.

For example, my Build classifier scored 10/10 in two test runs during Week 2. That sounds good, but I created the test examples myself, and most of them were quite straightforward. Real customer messages could be much more complicated, especially when people write in different languages or mention several problems in the same message.

The company might also spend more time correcting mistakes than expected. That would reduce the savings. This is why I wouldn't trust a vendor simply because they advertise a high automation rate.

## What I would recommend

I would start with a small pilot using anonymised real customer enquiries. I would compare how long employees take to classify messages manually with how long it takes when they use the AI tool. I would also measure mistakes, correction time and the total running cost.

I would compare the results with simpler rules that could already be used in Odoo. If those rules solve the problem well enough, there might not be a reason to use AI at all.

For now, my decision would be **PILOT rather than BUY**.

What I learned this week is that AI doesn't create value just because it automates something. The value comes from what a company actually gains after paying for the system and dealing with its limitations. For me, that is probably the most important thing to understand if I want to work with ERP and business automation in the future.
