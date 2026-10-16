---
week: 4
title: "81% Accurate and Barely Worth It. The Price of a Hidden Complaint"
author: "Guillaume Vandenweghe"
beat: "What AI really costs in the insurance sector, with a focus on claims handling and customer service"
skill: "Value quantification"
date: 2026-10-16
---

My email-sorting tool gets 81% of its answers right. That sounds like a business case. When I put a euro amount on each answer, the 8% that go wrong eat 71% of the value, because they are almost all angry customers sent to the wrong desk.

## The candidate

A mid-sized Belgian non-life insurer receives about 20,000 customer emails a month in its claims inbox (my running estimate since Week 1). Today a person reads each one and sends it to a queue: new claim, follow-up, policy change, cancellation, complaint. My Build does that first sort: one email in, one of six labels out, and "UNCLEAR" always goes to a human. It passes the five-criterion filter on paper: repetitive, pattern-based, verifiable (two people agree on a label), cheap to run. The one criterion it only half passes is "error-tolerant", and that is where the money is.

## The numbers

Inputs (est. = my estimate, not measured):

- Volume: 20,000 emails/month (est.)
- Human sort time: 1.5 minutes per email (est.)
- Loaded cost: €38,000 × 1.4 ÷ 1,600 h = **€33/hour** (course reference, customer support agent). So one human sort costs 1.5/60 × €33 = **€0.83**
- Complaints: 3% of the inbox (est.) = 600/month
- Measured on my test set (13 real emails, each run twice = 26 runs; 21 of 26 correct = 81%, or 75% if an email only counts when both runs are right): all 16 non-complaint runs correct. Of 10 complaint runs: 5 correct, 3 sent to UNCLEAR (a human still sees them), **2 sent to the normal claims queue** (a hidden complaint)

| Category | Formula | Per year |
|---|---|---|
| Time saved | (19,400 non-complaints × 100% + 600 complaints × 50%) × €0.83 × 12 | €195,030 |
| Revenue gained | Not claimed: I have no data that faster sorting keeps customers | €0 |
| Cost avoided | Not claimed: I do not know today's human misrouting rate | €0 |
| Risk | *Added*, not reduced: 600 × 20% = 120 hidden complaints/month × €96.60 × 12 | −€139,104 |
| AI cost: tokens | 20,000 × (1,150 in × $2 + 20 out × $12) per 1M = $50.80/month × 0.92 × 12 | −€561 |
| AI cost: running | Monitoring 4 h/week × €48 × 52 (≈€10,000) + IT maintenance €5,000 (est.) | −€15,000 |
| AI cost: one-time | Mailbox and claims-system integration (est.) | −€30,000 |
| **Net benefit, year 1** | 195,030 − 139,104 − 561 − 15,000 − 30,000 | **€10,365** |
| **Payback** | €30,000 ÷ (€40,365 ÷ 12 = €3,364/month) | **8.9 months** |

Where does €96.60 per hidden complaint come from? Thirty minutes of extra handling when it surfaces late (€16.50), plus a 10% chance it becomes an Ombudsman file costing six hours at €46 (€27.60), plus a 15% chance the customer leaves, losing €350 of yearly margin (€52.50). All three are estimates. This is the weakest number in the post, and it is the one that decides the result.

The tokens cost €561 a year. The hidden complaints cost 248 times more.

## The pressure test

What if my benefit estimates are 50% too optimistic? For example, sorting really takes 45 seconds instead of 90. Time saved falls to €97,515, while the hidden complaints still cost €139,104. Year 1 becomes **−€87,150**. The project does not pay back at all.

Break-even: the tool stays positive as long as fewer than **26%** of complaints are hidden. Version 1 hides 20%. That is a thin margin built on 10 runs.

Now the version I would actually pilot: prompt v2 sends every dissatisfied email it is unsure about to a human. I assume that costs some automation (90% of normal emails auto-sorted instead of 100%) but cuts hidden complaints to 5%. Year 1 net: **€94,300**, payback 2.9 months. With the same 50% haircut it is still +€7,000.

## The insight

In my beat the ROI is not in the accuracy figure but in where the errors land. An 81% tool that fails on random emails would be fine. Mine fails on the one email type that can reach the Ombudsman. That is also the FOMO trap: a vendor demo with "95% accuracy" says nothing about which 5% fails. My recommendation is not "buy" or "build" yet. It is: fix the complaint boundary, then run an 8-week shadow pilot on real mail, and measure the two numbers I had to guess, the complaint share and the cost of a hidden complaint. One more caveat for the CFO: the 500 hours saved per month are capacity, not cash, until someone decides what those 3.75 FTE will do instead.

*AI note: I used Claude to help structure this post and check my calculations. The test results, the assumptions and the recommendation are mine.*
