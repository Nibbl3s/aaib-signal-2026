# Activity 3: EuroShop Cost Modeling Lab

Author: Kiril Boyakov

## Assumptions

- 1,000 emails/day and 30 days/month = 30,000 emails/month.
- Each email uses 200 input tokens and 400 output tokens.
- Each failed response costs €5 to correct.
- Course exchange rate: $1 = €0.92.
- Prices, success rates and correction costs remain constant as volume grows.
- Vendor prices are classroom assumptions, not current raw model API prices.
- Annual baseline calculations assume constant volume; Month 6 growth is modeled separately.

| Tier | Input per 1,000 tokens | Output per 1,000 tokens | Success rate | Error rate |
|---|---:|---:|---:|---:|
| Budget | $0.01 | $0.02 | 70% | 30% |
| Standard | $0.03 | $0.06 | 85% | 15% |
| Premium | $0.06 | $0.12 | 95% | 5% |

## Step 1: Monthly token volume

Emails: 1,000 × 30 = 30,000.
Input: 30,000 × 200 = 6,000,000 tokens.
Output: 30,000 × 400 = 12,000,000 tokens.

## Step 2: Monthly token costs

### Budget

Input: 6,000,000 / 1,000 × $0.01 = $60.
Output: 12,000,000 / 1,000 × $0.02 = $240.
Total: $60 + $240 = $300.
Euro equivalent: $300 × 0.92 = €276.

### Standard

Input: 6,000,000 / 1,000 × $0.03 = $180.
Output: 12,000,000 / 1,000 × $0.06 = $720.
Total: $180 + $720 = $900.
Euro equivalent: $900 × 0.92 = €828.

### Premium

Input: 6,000,000 / 1,000 × $0.06 = $360.
Output: 12,000,000 / 1,000 × $0.12 = $1,440.
Total: $360 + $1,440 = $1,800.
Euro equivalent: $1,800 × 0.92 = €1,656.

## Step 3: Monthly error costs

Budget: 30,000 × 30% = 9,000 failures; 9,000 × €5 = €45,000.
Standard: 30,000 × 15% = 4,500 failures; 4,500 × €5 = €22,500.
Premium: 30,000 × 5% = 1,500 failures; 1,500 × €5 = €7,500.

## Step 4: Total monthly costs

Total = vendor token cost converted to euros + human correction cost.

| Tier | Token cost | Error cost | Total/month |
|---|---:|---:|---:|
| Budget | €276 | €45,000 | €45,276 |
| Standard | €828 | €22,500 | €23,328 |
| Premium | €1,656 | €7,500 | €9,156 |

## Step 5: Business metrics

### Annual cost at constant volume

Budget: €45,276 × 12 = €543,312.
Standard: €23,328 × 12 = €279,936.
Premium: €9,156 × 12 = €109,872.

### Cost per email

Budget: €45,276 / 30,000 = €1.5092, approximately €1.51.
Standard: €23,328 / 30,000 = €0.7776, approximately €0.78.
Premium: €9,156 / 30,000 = €0.3052, approximately €0.31.

### Cost per correctly handled email

Following the exercise's formula, the denominator counts emails handled correctly without human correction.

Budget successful emails: 30,000 × 70% = 21,000.
Standard successful emails: 30,000 × 85% = 25,500.
Premium successful emails: 30,000 × 95% = 28,500.

Budget: €45,276 / 21,000 = €2.156, approximately €2.16.
Standard: €23,328 / 25,500 = €0.9148, approximately €0.91.
Premium: €9,156 / 28,500 = €0.3213, approximately €0.32.

| Metric | Budget | Standard | Premium |
|---|---:|---:|---:|
| Monthly total | €45,276 | €23,328 | €9,156 |
| Annual total, constant volume | €543,312 | €279,936 | €109,872 |
| Cost per email | €1.51 | €0.78 | €0.31 |
| Cost per correctly handled email | €2.16 | €0.91 | €0.32 |

## Step 6: Recommendation

Under the stated assumptions, Premium is the strongest cost option, provided its 95% success rate holds on EuroShop's actual emails. Its total monthly cost of €9,156 is €36,120 below Budget and €14,172 below Standard. Its higher token charges are more than offset by lower correction costs.

## Part 3: Analysis

### Question 1: Why is Budget the most expensive system?

Budget's 30% failure rate produces €45,000 in monthly human correction costs, overwhelming the savings from cheaper tokens.

### Question 2: Why might a company choose Budget?

A company might focus on the vendor invoice and overlook correction work borne by its staff. Budget could be reasonable for a different task with cheaper errors or a higher actual success rate, but it has no total-cost advantage under this exercise's assumptions.

### Question 3: What should the CFO hear first?

The headline should be €9,156 in total monthly cost for Premium, including human corrections, compared with the alternatives. Presenting only the €1,656 token bill would substantially understate the required budget.

## Part 4: Month 6 growth

### Monthly volume

Month 1 is the starting point, so Month 6 has five growth intervals.

30,000 × 1.30^5 = 111,387.9 expected emails, approximately 111,388.

Calculations retain the unrounded expected volume.

### Token volumes

Input: 111,387.9 × 200 = 22,277,580 tokens.
Output: 111,387.9 × 400 = 44,555,160 tokens.

### Token costs

Budget:
Input = 22,277,580 / 1,000 × $0.01 = $222.7758.
Output = 44,555,160 / 1,000 × $0.02 = $891.1032.
Total = $1,113.879 × 0.92 = €1,024.76868.

Standard:
Input = 22,277,580 / 1,000 × $0.03 = $668.3274.
Output = 44,555,160 / 1,000 × $0.06 = $2,673.3096.
Total = $3,341.637 × 0.92 = €3,074.30604.

Premium:
Input = 22,277,580 / 1,000 × $0.06 = $1,336.6548.
Output = 44,555,160 / 1,000 × $0.12 = $5,346.6192.
Total = $6,683.274 × 0.92 = €6,148.61208.

### Error costs

Budget: 111,387.9 × 30% × €5 = €167,081.85.
Standard: 111,387.9 × 15% × €5 = €83,540.925.
Premium: 111,387.9 × 5% × €5 = €27,846.975.

### Total Month 6 costs

Budget: €1,024.76868 + €167,081.85 = €168,106.61868.
Standard: €3,074.30604 + €83,540.925 = €86,615.23104.
Premium: €6,148.61208 + €27,846.975 = €33,995.58708.

| Tier | Token cost | Error cost | Total Month 6 |
|---|---:|---:|---:|
| Budget | €1,024.77 | €167,081.85 | €168,106.62 |
| Standard | €3,074.31 | €83,540.93 | €86,615.23 |
| Premium | €6,148.61 | €27,846.98 | €33,995.59 |

Totals are calculated before rounding, so displayed components may differ by €0.01 when added.

### Question 1: What happens to cost per email?

It stays constant: Budget €1.5092, Standard €0.7776 and Premium €0.3052. Every modeled cost scales proportionally with email volume. This assumes no volume discounts, fixed charges, capacity constraints or changes in accuracy.

### Question 2: Does the recommendation change?

No. Premium has the lowest cost per email and therefore remains the cheapest tier at every positive volume under these assumptions. There is no crossover point between the tiers.

### Question 3: Compare Premium with three human agents

Three agents: 3 × €3,000 = €9,000/month.

Premium cost per email:
Input = 200 / 1,000 × $0.06 = $0.012.
Output = 400 / 1,000 × $0.12 = $0.048.
Tokens in euros = ($0.012 + $0.048) × 0.92 = €0.0552.
Expected correction cost = 5% × €5 = €0.25.
Total = €0.0552 + €0.25 = €0.3052/email.

Break-even:
€0.3052 × volume = €9,000.
Volume = €9,000 / €0.3052 = approximately 29,488.86 emails/month.

Premium is cheaper below this threshold and more expensive above it. At whole-number volumes, it is cheaper through 29,488 emails and more expensive from 29,489 emails.

At 30,000 emails, Premium costs €9,156, or €156 more than the salary comparison.

The wording can be misleading: rising volume does not make a variable-cost system cheaper than a fixed €9,000 bill. We also do not know whether three agents could handle this volume, their accuracy, or additional employment costs. This arithmetic alone cannot establish that replacing the system with three people is practical.

## Check your understanding

### Why can higher token prices produce lower total costs?

A more accurate system can reduce expensive human corrections by more than the additional token charges.

### What hidden cost makes cheap AI expensive?

In this model, it is employee time spent correcting failed responses. In practice, errors may also cause delays, refunds or lost customers.

### What should I ask when someone says AI is cheap?

Do you mean the token bill, or the total cost of delivering a correctly handled customer request?

## Sources and assistance

Scenario, prices and exchange-rate convention:
https://advanced-ai-in-business.vercel.app/week/1

ChatGPT helped work through the calculations, explain the assumptions, and draft these answers. The figures are a classroom model, not measured EuroShop operating results.
