# Screening AI Costs More Than You Think: A Global Recruiter's Real Numbers

## Hook

International recruitment agencies are increasingly using AI to screen large volumes of cross-border candidates. The token cost looks almost negligible, but multilingual documents, compliance information, and screening errors can change the economics completely. I priced out a hypothetical AI screening workflow for an international tech recruitment agency to see what the numbers actually look like.

## The Numbers

Consider an international recruitment agency processing **1,000 multinational tech candidates per month** across 20 countries. Each candidate submits a CV, cover letter, and potentially multilingual certification or qualification documents.

For this hypothetical workflow, I estimate **2,000 input tokens** per candidate for the candidate documents, job requirements, and relevant screening rules. The AI produces approximately **500 output tokens** containing a structured candidate assessment, score, compliance flag, and summary.

Using OpenAI's GPT-6 Sol API pricing of **$2 per 1 million input tokens and $10 per 1 million output tokens**:

- **Input:** 1,000 × 2,000 = 2,000,000 tokens → 2 × $2 = **$4/month**
- **Output:** 1,000 × 500 = 500,000 tokens → 0.5 × $10 = **$5/month**
- **Token cost:** $9/month → approximately **€8.28/month** at $1 = €0.92, or approximately **€99.36/year**

**Pricing source:** OpenAI API pricing, checked September 2026.

But token cost is not the same as business cost. Assume, purely as a working hypothesis, that **4% of evaluations produce a material screening error** because of cultural nuance, multilingual interpretation, incomplete information, or compliance-related mistakes. That would be 40 problematic evaluations per month.

If one serious error — such as missing a strong candidate or mishandling a recruitment/compliance case — creates an average business impact of **€5,000**, the expected impact would be:

**40 × €5,000 = €200,000/month.**

This €5,000 figure is an assumption, not a measured fact, so it would need to be tested with real recruitment data.

## The Insight

The surprising number is not the API bill. It is how little the model itself costs compared with the assumptions surrounding the workflow. At roughly **€8.28 per month**, the token bill is tiny for an agency processing 1,000 candidates. That makes it tempting to conclude that AI screening is automatically cheap.

But the €200,000 figure above is not evidence that AI actually creates €200,000 of monthly losses. It is an illustration of how sensitive the business case becomes when error costs are introduced. The 4% error rate and €5,000 impact per error are assumptions that need to be measured rather than accepted.

For me, that is the real lesson of cost literacy: **the vendor's token price is only one input into the business case.** The important questions are how often the system fails, what those failures cost, and whether human review can reduce the risk at an acceptable cost.

## The Question

How can we accurately measure the cost of an AI screening error across different countries, languages, and recruitment regulations?
