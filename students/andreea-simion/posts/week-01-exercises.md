# Week 1: Token Economics & Cost Frameworks — Evidence Submission

**Beat:** The Psychology of AI Adoption in the Workplace  
**Author:** Andreea Simion[cite: 2]  

---

## 1. Declared Beat & Rationale

* **Declared Beat:** The Psychology of AI Adoption in the Workplace[cite: 2].
* **Rationale:** I chose this beat because the technical implementation of AI tools is only half the battle; the true determinant of success is how human employees perceive, trust, and adapt to these tools in daily workflows[cite: 2]. Understanding the psychological barriers to adoption—such as job displacement anxiety and automation bias—is essential for leading effective organizational change[cite: 2].

---

## 2. EuroShop Cost Model & Recommendation

### Recommendation for CMO & CFO
* **CMO Recommendation:** I recommend implementing the **Premium Tier**[cite: 2]. Despite having the highest monthly token cost ($1,800), its **95% accuracy rate** minimizes costly human intervention, resulting in the lowest overall monthly operating cost of **€9,300**[cite: 2].
* **CFO Lead Metric:** When presenting to the CFO, I will lead with **Cost per Correctly Handled Email (€0.33)** rather than raw token prices[cite: 2]. Raw token fees account for under 20% of total operational cost, whereas total cost per resolved email reflects actual bottom-line business impact[cite: 2].

### Cost Calculations Summary
*(Calculated assuming $1.00 = €1.00 for unified currency analysis[cite: 2])*

* **Monthly Email Volume:** 30,000 emails (1,000 emails/day × 30 days)[cite: 2]
* **Monthly Input Tokens:** 6,000,000 tokens (30,000 × 200 tokens)[cite: 2]
* **Monthly Output Tokens:** 12,000,000 tokens (30,000 × 400 tokens)[cite: 2]
* **Human Error Correction Cost:** €5.00 per error[cite: 2]

| Metric | Budget Tier | Standard Tier | Premium Tier |
| :--- | :--- | :--- | :--- |
| **Success / Error Rate** | 70% / 30%[cite: 2] | 85% / 15%[cite: 2] | 95% / 5%[cite: 2] |
| **Monthly Token Cost** | €300.00[cite: 2] | €900.00[cite: 2] | €1,800.00[cite: 2] |
| **Monthly Error Cost** | €45,000.00[cite: 2] | €22,500.00[cite: 2] | €7,500.00[cite: 2] |
| **Total Monthly Cost** | **€45,300.00**[cite: 2] | **€23,400.00**[cite: 2] | **€9,300.00**[cite: 2] |
| **Annualized Cost** | **€543,600.00**[cite: 2] | **€280,800.00**[cite: 2] | **€111,600.00**[cite: 2] |
| **Cost per Email** | €1.51[cite: 2] | €0.78[cite: 2] | **€0.31**[cite: 2] |
| **Cost per Correct Email** | €2.16[cite: 2] | €0.92[cite: 2] | **€0.33**[cite: 2] |

---

## 3. Token Count Table & Multilingual Trade-off

### Multilingual Token Comparison Table

| Prompt Language | Input Text Sample | Token Count | Character Count | Ratio (Tokens/Char) |
| :--- | :--- | :--- | :--- | :--- |
| **English** | *[Insert English prompt used in lab]* | *[Count]* | *[Char Count]* | *[Ratio]* |
| **German / French / Dutch** | *[Insert Translated prompt used in lab]* | *[Count]* | *[Char Count]* | *[Ratio]* |
| **Non-Latin Language (e.g., Chinese/Arabic)** | *[Insert Non-Latin prompt used in lab]* | *[Count]* | *[Char Count]* | *[Ratio]* |

### Trade-off Analysis Question
* **Findings:** Non-English languages often require significantly more tokens for the exact same message due to byte-pair encoding (BPE) tokenizers being optimized primarily for English text.
* **Strategic Trade-off:** For international customer support like EuroShop, operating in non-English languages inflates raw token expenditure. However, using lower-cost model tiers or forced English translation pipelines to cut token costs risks increasing error rates, which dramatically increases human intervention costs. Thus, maintaining higher-tier model quality remains the most cost-effective choice regardless of language token density.
