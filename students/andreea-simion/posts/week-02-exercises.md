---
week: 2
title: "Week 2 Exercises & Framework Analysis"
author: "Andreea Simion"
beat: "The Psychology of AI Adoption in the Workplace"
skill: "Capability Skepticism"
date: 2026-10-01
---

# Week 2 Exercises: Capability Skepticism & Analysis

---

## 1. Exercise: The Frame (7 Case Evaluations)

Below is the evaluation of the seven capability cases analyzed during Week 2[cite: 3].

| Case # | Category / Subject | Assessment | Evaluation & Reason | Ground Truth Verification |
| :---: | :--- | :---: | :--- | :--- |
| **Case 1** | **Legal Research**<br>*(AI-generated legal briefs)* | ✗ **Hallucinated** | A single district court ruling in New York cannot set binding precedent across all federal circuits. *Smith v. OpenAI Corp.* is completely invented[cite: 3]. | **Hallucinated:** The case does not exist[cite: 3]. Courts sanction lawyers for submitting AI-hallucinated cases[cite: 3]. |
| **Case 2** | **Historical Fact**<br>*(Belgium Euro adoption)* | ✓ **Accurate** | Jan 1, 1999 (electronic) and 2002 (cash) are correct historical dates[cite: 3]. *(Human Misinterpretation: missed that dual-circulation was 2 months, not 30 days)[cite: 3].* | **Accurate:** Belgium adopted the Euro on these exact dates[cite: 3]. Facts were cited correctly[cite: 3]. |
| **Case 3** | **Product Feature**<br>*(Slack Enterprise Grid)* | ✗ **Hallucinated** | Slack runs as multi-tenant SaaS on AWS and does not offer a "Slack Private Cloud"[cite: 3]. Proprietary ML models on 500+ databases is buzzword soup[cite: 3]. | **Partially Hallucinated:** Real features (256-bit encryption, TLS 1.3) mixed with invented partnerships and private cloud claims[cite: 3]. |
| **Case 4** | **Customer Data**<br>*(Company XYZ revenue)* | ✗ **Hallucinated** | "Company XYZ" is a fictional placeholder name, yet the AI pulled specific revenue figures and YoY growth rates out of thin air[cite: 3]. | **Hallucinated:** Company XYZ numbers are completely made up[cite: 3]. Credible format with specific numbers is a classic sign of hallucination[cite: 3]. |
| **Case 5** | **Scientific Claim**<br>*(Vitamin B12 & memory)* | ✓ **Accurate** | Cites academic studies (Johnson et al. 2019, Williams et al. 2022) and provides a balanced summary[cite: 3]. *(Human Misinterpretation: tricked by fake author citations)[cite: 3].* | **Mostly Accurate But Risky:** General claim is sound, but citations like "Johnson et al., 2019" must be verified as AI frequently invents citations[cite: 3]. |
| **Case 6** | **Technical Spec**<br>*(GPT-4 context window)* | ✓ **Accurate** | 128,000 tokens matched the GPT-4 Turbo spec[cite: 3]. *(Human Misinterpretation: conflated real 128k specs with a fabricated 200k tier and made-up enterprise pricing)[cite: 3].* | **Hallucinated (Outdated):** Conflated 128K standard with Claude 3.5's 200K tokens into invented features[cite: 3]. *(Note: accurate answers expire over time)[cite: 3].* |
| **Case 7** | **Compliance Requirement**<br>*(EU AI Act transparency)* | ✗ **Hallucinated** | Specific "0.85 fairness score" safe harbor exception sounds completely invented—regulatory laws don't grant legal exemptions on decimal scores[cite: 3]. | **Mostly Hallucinated:** EU AI Act requires transparency in high-risk cases, but Article 52 details and the 0.85 threshold were fabricated[cite: 3]. |

---

## 2. Core Takeaways on Capability Failure

1. **AI Predicts Words, Not Facts:** AI does not check facts—it predicts what words sound reasonable together[cite: 3].
2. **High-Risk Domains Require Verification:** Whenever exact details, numbers, or legal facts matter, human verification is mandatory[cite: 3].
3. **Expiration of Truth:** Correct AI answers have a shelf life, and nothing in the output indicates when information expires[cite: 3].

---

## 3. Modality & Decision Framework Summary

### The 5-Question Decision Framework Matrix

| Step | Question | If YES | If NO |
| :---: | :--- | :--- | :--- |
| **Q1** | Do you know the answer already? | Use that answer | Go to Q2 |
| **Q2** | Is the cost of being wrong higher than the cost of being slow? | **Don't use AI** (Use human/rule) | Go to Q3 |
| **Q3** | Is the information stable or changing rapidly? | Go to Q4 | **Don't use AI** (Training data is old) |
| **Q4** | Can you verify the AI's answer? | Go to Q5 | **Don't use AI alone** (Use Human-in-the-loop) |
| **Q5** | What's the simplest tool that solves this? | Use simpler tool (Spreadsheet/Rule) | **Consider AI** |

---

## 4. Modality Sorting Exercise Results

| Scenario / Problem | Category Bucket | Strategic Rationale |
| :--- | :---: | :--- |
| **Customer Support Email Response** | **AI-Suitable** | Training data exists; response is helpful; low cost of error[cite: 2, 3]. |
| **Medical Diagnosis** | **AI-Incompatible** | High consequences; zero margin for error; AI will confidently recommend wrong actions[cite: 2, 3]. |
| **Meeting Notes Summarization** | **AI-Suitable** | Compression task on provided text; low/medium cost of error; human can review[cite: 2, 3]. |
| **Fraud Detection in Bank Transactions** | **AI-Risky** | False positives cost customer experience; false negatives cost money; hybrid AI + human review required[cite: 2, 3]. |
| **Hiring Candidate Screening** | **AI-Risky** | Legal/ethical minefield; historical bias; transparency regulations require human judgment[cite: 2, 3]. |
| **Inventory Forecasting** | **AI-Suitable** | Pattern matching against historical sales data; traditional ML/statistical tools may be better[cite: 2, 3]. |
| **Legal Contract Review** | **AI-Risky** | Effective for template pattern matching; highly risky if AI independently determines legal risk[cite: 2, 3]. |
| **Writing Product Launch Announcement** | **AI-Suitable** | Format/drafting task where human edits final copy; low-stakes error[cite: 2, 3]. |
| **Regulatory Compliance Check** | **AI-Incompatible** | Requires auditable, legally defensible human reasoning; non-compliance carries severe fines[cite: 2, 3]. |
| **Sales Follow-Up Email** | **AI-Suitable** | Persuasive, low-stakes personalization task[cite: 2, 3]. |
