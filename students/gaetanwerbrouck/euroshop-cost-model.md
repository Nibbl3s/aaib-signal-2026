\# Week 1: EuroShop Cost Modeling Lab



\## Scenario



EuroShop processes 30,000 customer service emails per month.



Each email contains:

\- 200 input tokens

\- 400 output tokens



The AI provider offers three pricing tiers.



| Tier | Input | Output | Success Rate |

|---|---:|---:|---:|

| Budget | $0.01 / 1K | $0.02 / 1K | 70% |

| Standard | $0.03 / 1K | $0.06 / 1K | 85% |

| Premium | $0.06 / 1K | $0.12 / 1K | 95% |



Each incorrectly handled query costs the business €5.



The conversion rate used is $1 = €0.92.



\## Token volumes



Monthly input tokens:



30,000 × 200 = 6,000,000 input tokens



Monthly output tokens:



30,000 × 400 = 12,000,000 output tokens



\## Monthly and yearly costs



\### Budget



Token cost:



6,000,000 / 1,000 × $0.01 = $60



12,000,000 / 1,000 × $0.02 = $240



Total token cost = $300 = €276



Incorrectly handled emails:



30,000 × 30% = 9,000



Error cost:



9,000 × €5 = €45,000



Total monthly cost:



€276 + €45,000 = €45,276



Yearly cost:



€45,276 × 12 = €543,312



Cost per email:



€45,276 / 30,000 = €1.51



Correctly handled emails:



30,000 × 70% = 21,000



Cost per correctly handled email:



€45,276 / 21,000 ≈ €2.16



\### Standard



Token cost:



6,000,000 / 1,000 × $0.03 = $180



12,000,000 / 1,000 × $0.06 = $720



Total token cost = $900 = €828



Incorrectly handled emails:



30,000 × 15% = 4,500



Error cost:



4,500 × €5 = €22,500



Total monthly cost:



€828 + €22,500 = €23,328



Yearly cost:



€23,328 × 12 = €279,936



Cost per email:



€23,328 / 30,000 = €0.78



Correctly handled emails:



30,000 × 85% = 25,500



Cost per correctly handled email:



€23,328 / 25,500 ≈ €0.92



\### Premium



Token cost:



6,000,000 / 1,000 × $0.06 = $360



12,000,000 / 1,000 × $0.12 = $1,440



Total token cost = $1,800 = €1,656



Incorrectly handled emails:



30,000 × 5% = 1,500



Error cost:



1,500 × €5 = €7,500



Total monthly cost:



€1,656 + €7,500 = €9,156



Yearly cost:



€9,156 × 12 = €109,872



Cost per email:



€9,156 / 30,000 = €0.31



Correctly handled emails:



30,000 × 95% = 28,500



Cost per correctly handled email:



€9,156 / 28,500 ≈ €0.32



\## Summary



| Tier | Monthly Cost | Yearly Cost | Cost / Email | Cost / Correct Email |

|---|---:|---:|---:|---:|

| Budget | €45,276 | €543,312 | €1.51 | €2.16 |

| Standard | €23,328 | €279,936 | €0.78 | €0.92 |

| Premium | €9,156 | €109,872 | €0.31 | €0.32 |



\## Month 6 growth



At approximately 111,000 emails per month:



| Tier | Approx. Monthly Cost |

|---|---:|

| Budget | €167,101 |

| Standard | €86,314 |

| Premium | €33,877 |



The cost per email stays approximately the same under the same assumptions.



\## Premium versus three human agents



Three human agents cost €9,000 per month.



Premium AI costs €9,156 per month at 30,000 emails.



The approximate break-even volume is 29,489 emails per month.



\## Conclusion



The main lesson from the EuroShop case is that the cheapest token price does not necessarily produce the cheapest overall system. Error costs can dominate the total cost, so the important business metric is the cost per correctly handled query rather than the token price alone.

