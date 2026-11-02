---
week: 6
title: "A freight classifier costs less than a euro in tokens. Integration is another bill."
author: "Kiril Boyakov"
beat: "AI in European Freight Cost Estimation"
skill: "Cost projection"
date: 2026-11-02
---

My freight classifier's projected token cost looked almost too small to matter: about €0.58 for 3,000 monthly runs. But that number leaves out the employee checking each result, the person maintaining the integration, and mistakes requiring correction. Measuring the tokens made the distinction clearer.

The use case is deliberately narrow. At fictional EuroRoute Forwarding, the tool reads a freight description, identifies the transport mode and quotes supporting words. An employee confirms the result before looking up rates. It does not calculate or approve a freight price. My scenario keeps Week 4's assumed 3,000 descriptions per month: ten staff-user equivalents averaging ten descriptions per calendar day. This allocates monthly workload; it does not assume each person works thirty days.

With my permission, ChatGPT operated a real Hoppscotch request using my API account. The requested alias returned Gemini 3.5 Flash-Lite. Its usageMetadata recorded 352 input tokens and 42 output tokens. The model correctly classified the truck-service example as ROAD. This was one successful example, not proof of reliability across real enquiries.

At Google's Standard paid rates of $0.30 per million input tokens and $2.50 per million output tokens, the calculation is:

352 × $0.30 / 1,000,000 + 42 × $2.50 / 1,000,000 = **$0.0002106 per call**.

This is a paid-rate equivalent; I have not verified an actual charge. Using the course budgeting assumption of $1 = €0.92 gives €0.000193752 per run.

Holding that usage constant, and assuming ten calls per user daily:

| Users | Monthly API cost | Annual API cost |
|---:|---:|---:|
| 100 | $6.318 | $75.816 |
| 1,000 | $63.18 | $758.16 |
| 10,000 | $631.80 | $7,581.60 |

These projections exclude human work. Longer inputs, longer answers and additional calls would change them. A linear 50% increase in unit cost over twelve months increases the annual token estimate by 25% at constant volume.

My Week 2 log records twenty passing responses across ten repeated descriptions. That produces a measured error rate of zero in that selected set, but the tests used another model and included batch prompts. Applying zero errors to Gemini production would be unjustified. I therefore also retain Week 4's assumed 5% correction rate: 150 monthly corrections at €1 each. That is approximately 258 times the token cost.

Including fifteen seconds of routine human handling per description, corrections, €90 monthly maintenance and hosting, and €2,700 setup, the first-year process cost is about €10,087. The manual baseline values the same work at €18,000. The apparent €7,913 benefit represents usable staff capacity, not guaranteed cash savings.

Under these assumptions, first-year break-even is approximately 970 descriptions monthly. The critical assumption is that assisted handling takes fifteen seconds while manual classification takes one minute. If manual classification already takes fifteen seconds, the economic advantage disappears. Cheap tokens cannot repair that assumption.

I would pilot this against a structured form or simple rules before integrating it. The unresolved question is: does the classifier reduce total handling time after checking and correction, on descriptions the team actually receives?

Sources: [Google pricing](https://ai.google.dev/gemini-api/docs/pricing), checked 2 November 2026; [measurement and calculations](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/kiril-boyakov/week-06-evidence/analysis.md).

AI assistance: ChatGPT operated the authorised API calls, helped draft this post and checked arithmetic. The usage is measured; the business scenario remains hypothetical.
