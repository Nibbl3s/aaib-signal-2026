# Week 1
**Course:** Advanced AI for Business  
**Beat:** AI in International Recruitment / International Tech Candidate Screening  
**Student Name:** Ruben Naessens  
**Track:** 6 ECTS  

---

## Part 1: Signal Post 1

### Screening AI Costs More Than You Think: A Global Recruiter's Real Numbers

#### Hook
International recruitment agencies are increasingly using AI to screen large volumes of cross-border candidates. The token cost looks almost negligible, but multilingual documents, compliance information, and screening errors can change the economics completely. I priced out a hypothetical AI screening workflow for an international tech recruitment agency to see what the numbers actually look like.

#### The Numbers
Consider an international recruitment agency processing **1,000 multinational tech candidates per month** across 20 countries. Each candidate submits a CV, cover letter, and potentially multilingual certification or qualification documents.

For this hypothetical workflow, I estimate **2,000 input tokens** per candidate for the candidate documents, job requirements, and relevant screening rules. The AI produces approximately **500 output tokens** containing a structured candidate assessment, score, compliance flag, and summary.

Using OpenAI's GPT-6 Sol API pricing of **$2 per 1 million input tokens and $10 per 1 million output tokens**:

- **Input:** 1,000 × 2,000 = 2,000,000 tokens → 2 × $2 = **$4/month**
- **Output:** 1,000 × 500 = 500,000 tokens → 0.5 × $10 = **$5/month**
- **Token cost:** $9/month → approximately **€8.28/month** at $1 = €0.92, or approximately **€99.36/year**

*Pricing source: OpenAI API pricing, checked September 2026.*

But token cost is not the same as business cost. Assume, purely as a working hypothesis, that **4% of evaluations produce a material screening error** because of cultural nuance, multilingual interpretation, incomplete information, or compliance-related mistakes. That would be 40 problematic evaluations per month.

If one serious error — such as missing a strong candidate or mishandling a recruitment/compliance case — creates an average business impact of **€5,000**, the expected impact would be:

**40 × €5,000 = €200,000/month.**

This €5,000 figure is an assumption, not a measured fact, so it would need to be tested with real recruitment data.

#### The Insight
The surprising number is not the API bill. It is how little the model itself costs compared with the assumptions surrounding the workflow. At roughly **€8.28 per month**, the token bill is tiny for an agency processing 1,000 candidates. That makes it tempting to conclude that AI screening is automatically cheap.

But the €200,000 figure above is not evidence that AI actually creates €200,000 of monthly losses. It is an illustration of how sensitive the business case becomes when error costs are introduced. The 4% error rate and €5,000 impact per error are assumptions that need to be measured rather than accepted.

For me, that is the real lesson of cost literacy: **the vendor's token price is only one input into the business case.** The important questions are how often the system fails, what those failures cost, and whether human review can reduce the risk at an acceptable cost.

#### The Question
How can we accurately measure the cost of an AI screening error across different countries, languages, and recruitment regulations?

---

## Part 2: Cost Model for EuroShop (Core)

### 1. Volume & Baseline Assumptions
* **Volume:** 1,000 emails/day × 30 days = **30,000 emails/month**
* **Tokens per email:** 200 input tokens + 400 output tokens
* **Total monthly volume:**
  * Input: $30,000 \times 200 = 6,000,000\text{ tokens}$ (6M)
  * Output: $30,000 \times 400 = 12,000,000\text{ tokens}$ (12M)
* **Human Error Correction Cost:** €5 per error
* **Exchange Rate:** $\$1.00 = €0.92$

### 2. Full Calculation Table

| Tier | Input Rate | Output Rate | Token Cost (USD) | Token Cost (EUR) | Error % | Error Cost (EUR) | Total Cost / Month | Total Cost / Year | Cost per Email |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Budget** | $0.01 / 1k | $0.02 / 1k | $300 | €276 | 30% | €45,000 | **€45,276** | **€543,312** | **€1.51** |
| **Standard** | $0.03 / 1k | $0.06 / 1k | $900 | €828 | 15% | €22,500 | **€23,328** | **€279,936** | **€0.78** |
| **Premium** | $0.06 / 1k | $0.12 / 1k | $1,800 | €1,656 | 5% | €7,500 | **€9,156** | **€109,872** | **€0.31** |

### 3. Recommendation & Justification for the CMO
> **Recommendation:** I advise EuroShop to select the **Premium Tier**.
> 
> **Justification:** Although the Premium tier incurs the highest API token expense ($1,800/month), it delivers the lowest total system cost at **€9,156/month (€0.31 per email)**. The Budget tier appears cheap on API pricing alone, but its 30% failure rate incurs €45,000 in monthly human correction costs, inflating total expenses to **€45,276/month (€1.51 per email)**. The core business metric is the *cost per correctly processed query*, not the raw token price.

---

## Part 3: Token Discovery Lab & Multilingual Comparison (Core)

### 1. Token Comparison Table (English vs. Dutch)
*Calculated at $0.03 per 1,000 input tokens.*

| Document | English Tokens | English Cost | Dutch Document | Dutch Tokens | Dutch Cost (USD) | Difference (USD) | % Increase |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Doc 1: Customer Support** | 138 | $0.00414 | Customer Support Email | 185 | $0.00555 | +$0.00141 | **+34.1%** |
| **Doc 2: Product Description** | 98 | $0.00294 | Product Description | 134 | $0.00402 | +$0.00108 | **+36.7%** |
| **Doc 4: Legal Clause** | 118 | $0.00354 | Legal Contract Clause | 162 | $0.00486 | +$0.00132 | **+37.3%** |

### 2. Analysis & Trade-off Questions

1. **Which document increased the most in tokens when translated?**  
   **Document 4 (Legal Clause)** had the highest percentage increase (+37.3%). Dutch tokenizers split complex, compounded legal terminology into multiple smaller sub-word tokens, driving up the count significantly.

2. **Annual cost difference for the most expensive document (1,000 runs/year):**  
   * **English:** $1,000 \times \$0.00414 = \$4.14 / \text{year}$  
   * **Dutch:** $1,000 \times \$0.00555 = \$5.55 / \text{year}$  
   * **Annual Difference:** Processing non-English business text adds a **34% to 40% multilingual tax**. At a scale of 30,000 monthly emails, this gap becomes a substantial financial overhead.

3. **The Trade-off Question:**  
   * *Should a company force customers to use English to reduce costs?*  
   * **Answer:** No. Forcing customers to communicate in English to save on API tokens introduces severe customer friction, increases churn, and damages brand trust. Because API token costs represent a tiny fraction of total workflow costs (as proven in the EuroShop model), the small savings in token fees are far outweighed by the loss of customer retention and revenue.

---

## Part 4: Declared Beat (Core)

* **Declared Beat:** AI-Driven Efficiency & Multilingual Compliance in International Candidate Screening  
* **Why I Chose It:** International recruitment agencies handle massive volumes of multi-format, multilingual CVs while navigating strict regional compliance rules. I chose this beat because token economics, error costs, and multilingual taxes interact directly with core business revenue and legal risks in HR tech.

---

## Part 5: 6 ECTS Extension ("Get a Real Quote")

### 1. Vendor Inquiry Emails (Verbatim)

**Email 1 (Sent to Vendor A - Greenhouse AI / HR Tech Vendor):**  
> *Date Sent:* September 22, 2026  
> *Subject:* Inquiry: Enterprise AI Candidate Screening Integration  
> *Body:*  
> Dear Enterprise Sales Team,  
> We are evaluating automated screening tools to process approximately 1,000 international candidate applications per month across multiple languages. Could you provide a volume-based quote or details on custom pricing tiers for enterprise API access or automated candidate ranking workflows?  
> Best regards,  
> Ruben Naessens 

**Email 2 (Sent to Vendor B - Workable AI Assistant):**  
> *Date Sent:* September 22, 2026  
> *Subject:* Enterprise Quote Request: Multilingual Resume Screening  
> *Body:*  
> Hello Workable Team,  
> Our recruitment agency processes around 1,000 candidate profiles monthly (CVs and cover letters in various EU languages). We are looking for custom enterprise pricing for your AI parsing and candidate matching features. What is your typical monthly or annual rate for this volume?  
> Best regards,  
> Ruben Naessens 

### 2. Vendor Responses Received
* **Vendor A:** Received an automated reply on September 22, 2026, redirecting to a sales calendar link to book a 30-minute discovery call. No direct pricing figures were provided via email.  
* **Vendor B:** No response received as of September 29, 2026 (Documented as pending).

### 3. Enterprise Pricing Analysis
This exercise demonstrates that enterprise AI pricing operates completely differently from self-serve API pricing pages. While self-serve API providers quote transparent per-token costs, enterprise vendors sell complete business solutions bundled with platform support, SLAs, and integration features. Pricing above self-serve tiers is opaque and value-based rather than cost-based: vendors obscure raw model costs to protect their margins (which can be 5–10× higher than raw API rates) and force buyers into consultative sales calls to anchor prices against perceived customer value rather than underlying compute costs.
