
# Week 6 - Cost Projection

**Advanced AI for Business**  
**Beat:** AI in Business Consulting

All the AI pricing has been taken from the AI Pricing Reference, snapshot 7 September 2026.

## 1. API response with usage object and per-call cost

I completed Activity 1 using Path C (the course-provided mock response) because my live Hoppscotch request did not work. This is the course mock response, not a live response from my own prompt.

**Prices (Budget tier, gpt-5.6-luna):** input $0.20 and output $1.20 per 1 million tokens.

**Source:** AI Pricing Reference, course snapshot of 7 September 2026.

| Calculation | Cost |
|---|---:|
| Input: (28 ÷ 1,000,000) × $0.20 | $0.0000056 |
| Output: (25 ÷ 1,000,000) × $1.20 | $0.0000300 |
| **Total cost per call** | **$0.0000356** |

## 2. Beat cost model – AI in Business Consulting

### 2.1 Use case and assumptions

My use case is an AI-powered Market-Entry Risk Detector for international business consultants. It reads information about a potential market, classifies it as Political, Economic, Legal/Regulatory, Operational or No Major Risk, and gives a one-sentence explanation.

| Assumption | Value |
|---|---:|
| Analyses per user per day | 3 |
| Days per month | 30 |
| Analyses per user per month | 90 |
| Estimated input tokens per call | 850 |
| Estimated output tokens per call | 35 |
| Subscription price (hypothetical) | €9.99 per user per month |
| Fixed operating costs (hosting, infrastructure, maintenance) | €150 per month |
| Exchange rate | $1 = €0.92 |

The token counts are estimates from my own prompt, not measured API usage.

### 2.2 Model, price and unit cost

**Model:** Google Gemini 3.1 Flash-Lite, paid tier.

Input $0.25 and output $1.50 per 1 million tokens.

**Source:** AI Pricing Reference (snapshot 7 September 2026) and Google AI pricing.

| Calculation | Cost |
|---|---:|
| Input: (850 ÷ 1,000,000) × $0.25 | $0.0002125 |
| Output: (35 ÷ 1,000,000) × $1.50 | $0.0000525 |
| **Total unit cost per analysis** | **$0.000265** |

### 2.3 Scale projection

**3 analyses per user per day, 30 days**

| Scale | Users | Calls/day | Unit cost | Daily cost | Monthly cost | Annual cost | Revenue/month |
|---|---:|---:|---:|---:|---:|---:|---:|
| Prototype | 10 | 30 | $0.000265 | $0.00795 | $0.2385 | $2.86 | €99.90 |
| Small | 100 | 300 | $0.000265 | $0.0795 | $2.385 | $28.62 | €999 |
| Medium | 1,000 | 3,000 | $0.000265 | $0.795 | $23.85 | $286.20 | €9,990 |
| Large | 10,000 | 30,000 | $0.000265 | $7.95 | $238.50 | $2,862 | €99,900 |

API costs are in USD and revenue is in EUR. At $1 = €0.92, the Large scale costs about €219 per month in API fees against €99,900 of revenue. These figures cover API usage only, not hosting, development or maintenance; those are included in the fixed costs.

### 2.4 Model tier comparison

**Same 850 input / 35 output tokens**

| Tier | Price per 1M (in / out) | Cost per analysis | Cost per user per month (90 analyses) | Cost per month at 10,000 users | Calls/user/day at which API cost = 10% of €9.99 price | Calls/user/day at which API cost = 100% of price |
|---|---:|---:|---:|---:|---:|---:|
| Budget (gpt-5.6-luna) | $0.20 / $1.20 | $0.000212 | $0.0191 | $190.80 | 171 | 1,707 |
| Gemini 3.1 Flash-Lite (my beat model) | $0.25 / $1.50 | $0.000265 | $0.0239 | $238.50 | 137 | 1,366 |
| Standard (gpt-5.6-terra) | $2.00 / $12.00 | $0.00212 | $0.191 | $1,908 | 17 | 171 |
| Premium (gpt-5.6-sol) | $5.00 / $30.00 | $0.0053 | $0.477 | $4,770 | 7 | 68 |

Thresholds convert the €9.99 price to dollars at $1 = €0.92 (€9.99 = $10.86).

The model choice changes cost per analysis by about 25× (Budget to Premium). That is the lever I control; the number of calls per user is not.

### 2.5 Break points

**Fixed-cost break-even**

Monthly API cost per user:

`90 × $0.000265 = $0.02385 = €0.021942`

Contribution per user:

`€9.99 − €0.021942 = €9.968058`

Break-even:

`€150 ÷ €9.968058 = 15.05`

So the break-even point is **16 paying users**. The answer is also 16 users on the Budget, Standard and Premium tiers because API cost is quite small next to the subscription price.

**Overhead share**

Total monthly cost falls to about 10% of subscription revenue at roughly **154 users**.

**Per-user API break point**

On Flash-Lite, API cost per user reaches 10% of the price at about 137 analyses per day and 100% of the price at about 1,366 per day.

On Premium, those thresholds are about 7 and 68 per day.

My assumption is 3 per day. The calls-per-user assumption is the finding: on a Premium model, a consultant would only need to run about 2 to 3 times my assumed volume to reach the 10% warning zone.

**Error-rate break point (value)**

Correcting a wrong classification costs a consultant 10 minutes at a loaded €57.75 per hour:

`10 ÷ 60 × €57.75 = €9.625 per error`

The consultant bears this cost, not me, so it would appear as lost value and churn rather than on my API invoice.

The error rate at which a consultant's correction time equals the €9.99 subscription price is:

`€9.99 ÷ (90 × €9.625) = about 1.15%`

This is roughly one error per consultant per month.

If the tool is correct on all 18 test inputs, the Rule of Three:

`3 ÷ 18 = 16.7%`

only rules out error rates above about 16.7%.

Showing with the same method that the error rate is below 1.15% would need approximately:

`3 ÷ 0.0115 = 260`

error-free test inputs.

**Assumptions behind the break points:** 3 analyses per user per day, 30-day month, €9.99 per user per month, €150 fixed costs per month, 850 input and 35 output tokens per call, API prices as of the snapshot 7 September 2026, 10 minutes and €57.75 per hour for each correction. If any of these change, the break points change.

## 3. The Build – AI Market-Entry Risk Detector

The Build classifies market information into Political, Economic, Legal/Regulatory or Operational Risk, or No Major Risk, with a one-sentence explanation.

### 3.1 Tokens and cost per run

I costed the Build at the course's Standard tier (gpt-5.6-terra): input $2.00 and output $12.00 per 1 million tokens (AI Pricing Reference, snapshot 7 September 2026).

I chose the Standard tier because my tool is designed to save consultants time without relying on the more expensive Premium model. My Week 2 test had 18/18 correct results, so I think Standard gives a reasonable balance between cost and performance.

| Item | Value |
|---|---:|
| Estimated input tokens per run | 850 |
| Estimated output tokens per run | 35 |
| Input cost: (850 ÷ 1,000,000) × $2.00 | $0.00170 |
| Output cost: (35 ÷ 1,000,000) × $12.00 | $0.00042 |
| **Total cost per run** | **$0.00212** |

### 3.2 Monthly volume and token cost

Pilot volume: **40 analyses per month**. This represents a small pilot with one consultant using the tool to analyse around 40 market-entry cases per month.

| Item | Value |
|---|---:|
| Monthly volume | 40 analyses |
| Cost per run | $0.00212 |
| Monthly token cost | 40 × $0.00212 = $0.0848 |
| Exchange rate | $1 = €0.92 |
| Monthly token cost in euros | €0.0780 |

### 3.3 Error cost using my Week 2 measured rate

In Week 2, my Risk Detector classified 18 of 18 test inputs correctly. Each input was run twice, giving 36 correct runs out of 36. The measured error rate was **0% on the 18 test inputs**.

**Who fixes an error:** a consultant at the firm using the tool.

A correction takes about 10 minutes at a loaded cost of €57.75 per hour (Week 4 consultant cost assumption):

`10 ÷ 60 × €57.75 = €9.625 per error`

Because 18 inputs is a small sample, I also use the Rule of Three as a stress test:

`3 ÷ 18 = 16.7% (exactly 1 in 6)`

This is a planning assumption, not my measured error rate. The three errors are not real errors from my test.

| Measurement | Build 1: Measured | Build 2: Rule of Three |
|---|---:|---:|
| Test inputs | 18 | 18 |
| Errors observed / assumed | 0 | 3 assumed |
| Error rate | 0% | 16.7% (1 in 6) |
| Monthly volume | 40 | 40 |
| Expected monthly errors | 0 | 6.67 |
| Cost per error | €9.625 | €9.625 |
| Monthly error cost | €0 | €64.17 |
| Monthly token cost | €0.0780 | €0.0780 |
| Error cost ÷ token cost | 0× | about 822× |

### 3.4 Conclusion

My Week 2 test gave an observed error rate of 0%, so the observed monthly error cost at 40 analyses is €0. That does not guarantee the tool will never make mistakes on real market information.

Under the Rule of Three stress test, human correction costs would be hundreds of times the token cost. Token cost is the smaller number; the error rate is the variable that decides whether the tool pays for itself, so human verification and more testing come before real consulting use.

## AI use disclosure

I used ChatGPT and Claude to help structure this document, check the calculations and improve the wording. The use case, assumptions, Week 2 test results and conclusions are my own.
```
