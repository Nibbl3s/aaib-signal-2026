---
week: 1
title: AI Adoption Is Cheap. Getting People to Use It Is Not.
author: Andreea Simion
beat: The Psychology of AI Adoption in the Workplace.
skill: "Cost literacy"
date: 2026-09-26
---

# Week: 1: Token Economics & Cost Frameworks — Lab Results & Submission
## 2. EuroShop Cost Model Calculations

*Note: As assumed in the notes, currency conversion is simplified as $1 = €1[cite: 2].*

### Step 1: Monthly Token Volume
* **Emails per month:** 30,000 (1,000 emails/day × 30 business days)[cite: 2]
* **Input tokens per email:** 200 tokens[cite: 2]
* **Output tokens per email:** 400 tokens[cite: 2]

| Metric | Monthly Volume |
| :--- | :--- |
| **Emails** | 30,000 |
| **Input tokens** | 6,000,000 |
| **Output tokens** | 12,000,000 |
| **Total tokens** | 18,000,000 |

[cite: 2]

---

### Step 2: Monthly Token Costs
* **Formula:** $\text{Token cost} = \left(\frac{\text{Token volume}}{1,000}\right) \times \text{Price per 1,000 tokens}$[cite: 2]

* **Budget Tier:**
  * Input cost: $(6,000,000 \div 1,000) \times \$0.01 = \$60$[cite: 2]
  * Output cost: $(12,000,000 \div 1,000) \times \$0.02 = \$240$[cite: 2]
  * **Total monthly token cost:** $\$300$[cite: 2]
* **Standard Tier:**
  * Input cost: $(6,000,000 \div 1,000) \times \$0.03 = \$180$[cite: 2]
  * Output cost: $(12,000,000 \div 1,000) \times \$0.06 = \$720$[cite: 2]
  * **Total monthly token cost:** $\$900$[cite: 2]
* **Premium Tier:**
  * Input cost: $(6,000,000 \div 1,000) \times \$0.06 = \$360$[cite: 2]
  * Output cost: $(12,000,000 \div 1,000) \times \$0.12 = \$1,440$[cite: 2]
  * **Total monthly token cost:** $\$1,800$[cite: 2]

| Tier | Input cost/month | Output cost/month | Total token cost/month |
| :--- | :--- | :--- | :--- |
| **Budget** | $60 | $240 | $300 |
| **Standard** | $180 | $720 | $900 |
| **Premium** | $360 | $1,440 | $1,800 |

[cite: 2]

---

### Step 3: Monthly Error Costs
* **Formula:** $\text{Error cost} = \text{Error rate} \times 30,000 \text{ emails} \times €5$[cite: 2]

* **Budget Tier:** $30\% \times 30,000 \times €5 = €45,000/\text{month}$[cite: 2]
* **Standard Tier:** $15\% \times 30,000 \times €5 = €22,500/\text{month}$[cite: 2]
* **Premium Tier:** $5\% \times 30,000 \times €5 = €7,500/\text{month}$[cite: 2]

| Tier | Success rate | Error rate | Incorrectly handled emails/month | Error cost/month |
| :--- | :--- | :--- | :--- | :--- |
| **Budget** | 70% | 30% | 9,000 | €45,000 |
| **Standard** | 85% | 15% | 4,500 | €22,500 |
| **Premium** | 95% | 5% | 1,500 | €7,500 |

[cite: 2]

---

### Step 4: Total Monthly Cost
* **Formula:** $\text{Token cost} + \text{Error cost}$ (assuming $\$1 = €1$)[cite: 2]

| Tier | Calculation | Total/month |
| :--- | :--- | :--- |
| **Budget** | €300 + €45,000 | **€45,300** |
| **Standard** | €900 + €22,500 | **€23,400** |
| **Premium** | €1,800 + €7,500 | **€9,300** |

[cite: 2]

---

### Step 5: Business Metrics
* **Formulas:**
  * $\text{Annual cost} = \text{Monthly cost} \times 12$[cite: 2]
  * $\text{Cost per email} = \text{Monthly cost} \div 30,000$[cite: 2]
  * $\text{Cost per correctly handled email} = \text{Monthly cost} \div (30,000 \times \text{success rate})$[cite: 2]

| Metric | Budget | Standard | Premium |
| :--- | :--- | :--- | :--- |
| **Annual cost** | €45,300 × 12 = **€543,600** | €23,400 × 12 = **€280,800** | €9,300 × 12 = **€111,600** |
| **Cost per email** | €45,300 ÷ 30,000 = **€1.51** | €23,400 ÷ 30,000 = **€0.78** | €9,300 ÷ 30,000 = **€0.31** |
| **Cost per correct email** | €45,300 ÷ 21,000 = **€2.16** | €23,400 ÷ 25,500 = **€0.92** | €9,300 ÷ 28,500 = **€0.33** |

[cite: 2]

---

### Step 6: Recommendation
I would recommend the **Premium tier** because its 95% success rate means fewer mistakes and less work for human agents[cite: 2]. Although the AI costs $1,800 per month, the total monthly cost is only **€9,300**, compared to **€23,400** for Standard and **€45,300** for Budget (assuming $\$1 = €1$)[cite: 2]. For the CFO, I would focus on the **€0.33 cost per successfully handled email**, as it gives a clearer picture of the overall cost[cite: 2].

---

## 3. Analysis & Scale Questions

### Part 3: Analysis Answers
* **Question 1 (The Paradox):** The Budget tier has the lowest token cost ($300/month), but its 30% error rate leads to €45,000 in human correction costs, making it the most expensive overall at €45,300/month[cite: 2].
* **Question 2 (Business Insight):** A company might choose Budget if it has a very tight budget, handles simple queries, or has enough in-house staff to fix errors cheaply, but in EuroShop's case, the €45,300 monthly total makes it much more expensive than Premium[cite: 2].
* **Question 3 (The Reality Check):** I would lead with the total cost, because the CFO needs to see the full business impact, not just the AI token price; Premium costs €9,300/month overall compared to Budget's €45,300[cite: 2].

---

### Part 4: Scale Questions (111,000 Emails/Month)
1. **What happens to the cost per email as volume grows?**  
   The cost per email stays roughly the same because token and error costs increase proportionally with volume[cite: 2]. Premium remains **€0.31/email**, Standard **€0.78/email**, and Budget **€1.51/email**[cite: 2].
2. **Does your tier recommendation change? At what volume?**  
   No, I would still recommend Premium[cite: 2]. At 111,000 emails/month, Premium costs approximately **€34,410**, compared to **€86,580** for Standard and **€167,610** for Budget[cite: 2]. Premium has the lowest cost per email, regardless of volume, so there is no break-even volume where another tier becomes cheaper under these assumptions[cite: 2].
3. **At what volume does Premium become cheaper than hiring 3 human agents?**  
   Three human agents cost **€9,000/month**[cite: 2]. Premium costs approximately **€0.31/email**[cite: 2].  
   $$\text{Break-even volume} = \frac{€9,000}{€0.31} = 29,032 \text{ emails/month}$$  
   So Premium is cheaper than the €9,000 fixed cost below approximately **29,032 emails/month**[cite: 2]. Above that volume, Premium costs more than €9,000/month[cite: 2]. This comparison assumes the three agents can handle the same volume and service scope[cite: 2].
