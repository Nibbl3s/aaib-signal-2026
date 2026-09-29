# My Beat: AI in Business Consulting

## Activity 1: The AI Bill

**Ranking: Output C → Output B → Output A**

I think **Output C** is the most expensive because it is written in French. Since many AI models have been trained heavily on English data, I assumed that processing French could require more tokens and therefore cost more.

I ranked **Output B** as the second most expensive because it contains more complex words and is more detailed than Output A.

I ranked **Output A** as the cheapest because it uses basic vocabulary and is written in English. I assumed that English would require fewer tokens to process than French.

---

## Activity 2: Token Discovery Lab

| Document | English Tokens | English Cost | Your Language | Tokens |     Cost | Difference | % Increase |
| -------- | -------------: | -----------: | ------------- | -----: | -------: | ---------: | ---------: |
| Doc 1    |            165 |     $0.00495 | Urdu          |    315 | $0.00945 |   $0.00450 |     90.91% |
| Doc 3    |            173 |     $0.00519 | Urdu          |    309 | $0.00927 |   $0.00408 |     78.61% |
| Doc 5    |            162 |     $0.00486 | Urdu          |    214 | $0.00642 |   $0.00156 |     32.10% |

### Questions

#### 1. Which document increased the most in tokens when translated to your language? What was the % increase?

**Answer:** Document 1 had the largest increase, at **90.91%**.

#### 2. For the most expensive document, what's the annual cost difference if you process it 1,000 times/year in English vs. your language?

**Answer:** Processing Document 1 in Urdu costs **$4.50 more per year** than processing it in English when processed 1,000 times annually.

#### 3. If you're building a customer service chatbot for your country, should you force all customers to use English to reduce costs? What's the trade-off?

**Conclusion:** Reducing costs is important, but customer accessibility and satisfaction should also be considered. A multilingual chatbot balances affordability with a better customer experience.

---

# Activity 3: Cost Modeling Lab

## Part 1: Do the Math

EuroShop receives **1,000 emails per day**.

### Monthly Email Volume

**Monthly emails:**

`1,000 × 30 = 30,000 emails/month`

Each email contains:

* **Input:** 200 tokens
* **Output:** 400 tokens

**Monthly input tokens:**

`30,000 × 200 = 6,000,000 tokens`

**Monthly output tokens:**

`30,000 × 400 = 12,000,000 tokens`

---

## Budget Tier

### AI Cost

**Input cost:**

`6,000,000 ÷ 1,000 × $0.01 = $60`

**Output cost:**

`12,000,000 ÷ 1,000 × $0.02 = $240`

**Total AI cost:**

`$60 + $240 = $300`

**Convert to euros:**

`$300 × 0.92 = €276`

### Error Cost

**Incorrect emails:**

`30,000 × 30% = 9,000 incorrect emails`

**Correction cost:**

`9,000 × €5 = €45,000`

### Total Monthly Cost

**€276 + €45,000 = €45,276**

---

## Standard Tier

### AI Cost

**Input cost:**

`6,000,000 ÷ 1,000 × $0.03 = $180`

**Output cost:**

`12,000,000 ÷ 1,000 × $0.06 = $720`

**Total AI cost:**

`$180 + $720 = $900`

**Convert to euros:**

`$900 × 0.92 = €828`

### Error Cost

**Incorrect emails:**

`30,000 × 15% = 4,500 errors`

**Correction cost:**

`4,500 × €5 = €22,500`

### Total Monthly Cost

**€828 + €22,500 = €23,328**

---

## Premium Tier

### AI Cost

**Input cost:**

`6,000,000 ÷ 1,000 × $0.06 = $360`

**Output cost:**

`12,000,000 ÷ 1,000 × $0.12 = $1,440`

**Total AI cost:**

`$360 + $1,440 = $1,800`

**Convert to euros:**

`$1,800 × 0.92 = €1,656`

### Error Cost

**Incorrect emails:**

`30,000 × 5% = 1,500 errors`

**Correction cost:**

`1,500 × €5 = €7,500`

### Total Monthly Cost

**€1,656 + €7,500 = €9,156**

---

# Part 2: Business Metrics

## Annual Cost

| Tier     | Monthly Cost | Annual Cost |
| -------- | -----------: | ----------: |
| Budget   |      €45,276 |    €543,312 |
| Standard |      €23,328 |    €279,936 |
| Premium  |       €9,156 |    €109,872 |

## Cost per Email

| Tier     | Cost per Email |
| -------- | -------------: |
| Budget   |          €1.51 |
| Standard |          €0.78 |
| Premium  |          €0.31 |

## Cost per Correctly Handled Email

| Tier     | Cost per Correctly Handled Email |
| -------- | -------------------------------: |
| Budget   |                            €2.16 |
| Standard |                            €0.92 |
| Premium  |                            €0.32 |

---

# Part 3: Analysis

## 1. Why is Budget the most expensive despite having the lowest token cost?

The Budget tier has a **30% error rate**. This creates **9,000 incorrect emails per month**, and correcting them costs **€45,000**. This is much higher than the **€276 AI cost**.

## 2. Why might a company choose Budget?

A company might choose Budget if it has a limited AI budget or if the tasks are low-risk and human correction is not very expensive.

## 3. Which number should you present to the CFO?

I would present **total cost**, rather than just token cost, because total cost includes both the AI cost and the cost of correcting errors.

---

# Part 4: Scale

The company grows by **30% each month**.

### Month 6

`30,000 × 1.30⁵ ≈ 111,000 emails/month`

### Human Agents

Three human agents cost:

`3 × €3,000 = €9,000/month`

Premium cost per email is approximately **€0.31**.

### Break-Even Point

`€9,000 ÷ €0.31 ≈ 29,032 emails/month`

So at around **29,000–29,500 emails per month**, Premium becomes cheaper than three human agents.

---

# Final Recommendation

I would still recommend the **Premium tier** because its higher AI token cost is offset by its much lower error rate.

Its total monthly cost is:

* **Budget:** €45,276
* **Standard:** €23,328
* **Premium:** €9,156

This shows that looking only at the price of AI tokens can be misleading. The cost of errors and human correction can have a much larger impact on the overall business cost.

---

# My Beat: AI in Business Consulting

I chose **AI in Business Consulting** because I am interested in business consulting, especially in an international business environment.

I chose this beat because I want to understand how major consulting firms, such as the **Big Four**, are currently using AI in areas such as research, analysis and strategy. I also want to explore how AI could change the role of consultants in the future.
