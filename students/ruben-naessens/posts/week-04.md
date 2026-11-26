---
week: 4
title: "Show Me the Numbers: When Recruitment AI Creates Value"
author: "Ruben Naessens"
beat: "AI in international recruitment"
skill: "Value quantification"
date: 2026-11-26
---

# Show Me the Numbers: When Recruitment AI Creates Value

*AI-assisted draft for Ruben’s review. The scenario calculations are illustrative, and the proposed recommendation has not yet been confirmed as his own conclusion.*

A qualification-extraction tool can produce tidy JSON in seconds. That is easy to demonstrate. What is harder to demonstrate is whether a recruiter finishes the whole task sooner after checking and correcting every field. For recruitment agencies, formatting speed matters less than verified requirements and usable staff time.

My Build separates education, experience, professional skills and languages into mandatory and preferred requirements. The original ten-ad evaluation recorded **one strict pass**: nine outputs contained at least one category error under the project’s scoring rule. That is an ad-level result, not evidence that 90% of individual qualifications were wrong. It does show why a business case must include review.

## An explicit scenario

Consider a hypothetical agency processing **100 vacancies monthly**, or **1,200 annually**. Assume manual extraction takes **12 minutes** and AI plus human review takes **four minutes**, including generation, checking and corrections. At a fully loaded labour cost of **€35 per hour**, eight minutes saved per vacancy would release:

**1,200 × (12 − 4) ÷ 60 = 160 hours**, valued at **160 × €35 = €5,600 annually**.

These are scenario assumptions, not measurements from Worldwiders. Earlier reported timings of 97 seconds and 39 seconds were not a controlled, matched comparison of manual extraction against AI plus completed review. They cannot validate the twelve-minute and four-minute inputs.

The important distinction is between capacity and cash. Saving 160 hours does not reduce payroll unless spending actually changes. The hours might instead support candidate conversations or sourcing, but the agency must show that scattered minutes can be reused productively.

## Four kinds of benefit

| Category | Illustrative annual calculation | Treatment |
| --- | --- | --- |
| Productivity | 1,200 × 8/60 × €35 = **€5,600** | Count as potential capacity value only. |
| Quality | 1,200 × (8% − 4%) × 10/60 × €35 = **€280** | Hypothetical reduction in rework; exclude to avoid overlap with review time. |
| Risk | (3 − 1) incidents × €150 = **€300** | No incident data supports this; exclude. |
| Revenue | 2 extra placements × €1,500 contribution = **€3,000** | Attribution is unproven; exclude. |

The quality scenario assumes fewer corrections, not the measured strict-pass rate improving from 8% to 4%. These are different metrics. Neither the assumed rework improvement nor the risk and revenue effects has been observed. Adding every optimistic number would disguise uncertainty as precision.

## Costs and sensitivity

Budget **€2,400** for initial setup, testing and training; **€1,200 annually** for monitoring and maintenance; and a placeholder **€0.12 per vacancy** for usage. These estimates need validation, especially staff effort and actual usage charges.

First-year cost is **€2,400 + €1,200 + 1,200 × €0.12 = €3,744**. Against €5,600 of fully reusable capacity, net value is **€1,856**, giving a capacity-based return of **€1,856 ÷ €3,744 = 49.6%**. That is not a demonstrated cash ROI.

| Net minutes saved per vacancy | Annual capacity value | First-year net value |
| --- | --- | --- |
| 4 | €2,800 | **−€944** |
| 8 | €5,600 | **€1,856** |
| 10 | €7,000 | **€3,256** |

At the eight-minute assumption, break-even volume is **€3,600 ÷ [(8/60 × €35) − €0.12] ≈ 792 vacancies annually**. At 1,200 vacancies, approximately **5.35 net minutes saved per case** would cover the estimated first-year cost, assuming all saved capacity is usable.

## What would justify investment?

The proposed recommendation is a limited pilot. Process twenty representative vacancies manually and with AI, using comparable conditions and checking both methods’ final outputs. Record end-to-end time, critical omissions, invented requirements, tier mistakes and correction effort. Counterbalance task order to reduce familiarity effects.

A practitioner interview should challenge workload, costs and whether saved time can be redeployed. No interview, peer review or completed paired timing study is claimed here. The conditional pilot should be stopped or redesigned if review erases the saving or quality remains unacceptable. A structured intake form remains a cheaper comparator.

**How many verified, reusable minutes must this tool save before a recruitment agency should fund it?**

---

Evidence: [original Build log](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/ruben-naessens/build/log.md) and [test set](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/ruben-naessens/build/test-set.md).

AI-use disclosure: ChatGPT substantially drafted this analysis and checked its arithmetic. All business-case inputs are assumptions. Ruben must critically review and revise the draft before submission.
