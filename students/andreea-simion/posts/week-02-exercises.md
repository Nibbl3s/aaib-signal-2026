---
week: 2
title: Capability Skepticism — Borderline Modality Reasoning & Lab Results
author: Andreea Simion
beat: The Psychology of AI Adoption in the Workplace.
skill: "Capability skepticism"
date: 2026-10-01
---

# Capability Skepticism

## Borderline Modality Reasoning

The sorting exercise is working material; the reasoning below demonstrates the capability skepticism skill.

- **Problem 4: Fraud Detection in Bank Transactions (AI-Risky)**
  - **Reasoning:** Traditional machine learning models excel at detecting statistical anomalies. However, deploying unmonitored generative AI here is high-risk. A false positive damages customer trust, whereas a false negative leads to direct financial loss. A hybrid approach—where AI flags anomalies and human analysts verify them—is required.

- **Problem 5: Hiring Candidate Screening (AI-Risky)**
  - **Reasoning:** While AI can parse CVs quickly, automating scoring or ranking introduces severe ethical and legal liabilities. LLMs trained on historical hiring data often encode structural biases. Furthermore, regulatory frameworks (such as the EU AI Act) require transparent and defensible reasoning for recruitment evaluation. AI should only perform keyword/structure filtering, leaving candidate assessment to humans.

- **Problem 7: Legal Contract Review (AI-Risky)**
  - **Reasoning:** Generative AI is effective at pattern-matching against standard templates to highlight missing terms. However, relying on AI to independently determine what constitutes an acceptable legal risk is unsafe due to potential hallucinations and subtle misinterpretations. The tool must function strictly as an initial redliner for human legal counsel.

# 5-Question Framework Walkthrough

- **Beat:** The Psychology of AI Adoption in the Workplace
- **Use Case:** Automated Classification of Employee AI Sentiment & Adoption Barriers

### 1. Do you know the answer already?

- **No.** Hundreds of unstructured, open-ended employee comments arrive weekly, and manual review takes dozens of HR hours.

### 2. Is the cost of being wrong higher than the cost of being slow?

- **No (Medium/Low cost).** Misclassifying a single comment doesn't trigger severe immediate harm; human HR managers aggregate these into general trends rather than taking automated punitive action on individual inputs.

### 3. Is the information stable or changing rapidly?

- **Stable.** Underlying psychological adoption barriers (fear, fatigue, usability complaints) rely on consistent human sentiment patterns.

### 4. Can you verify the AI's answer?

- **Yes.** HR personnel can spot-check logs, audit flagged categories, and verify against sample employee sentiment polls.

### 5. What's the simplest tool that solves this?

- Rule-based keyword matching (e.g., "layoff" → Job Security Fear) works for plain inputs, but fails on nuance, sarcasm, and multilingual feedback.
- **Decision:** AI with Human-in-the-Loop Review. AI excels at processing natural language sentiment across languages, provided HR uses human oversight to audit inconsistent edge cases (F6 failures).

# Build v1: Prompt, Test Set, Log, and Probe Plan

## A. System Prompt (v1)

**Role:** You are an expert HR organizational psychologist analyzing employee feedback regarding new AI tool adoptions.

**Task:** Classify an employee's comment into EXACTLY ONE of the following categories:

- Job Security Fear
- Trust/Accuracy Concern
- Usability/Complexity
- Change Fatigue
- Enthusiastic/Receptive
- Unclassified/Irrelevant

**Rules:**

1. Output ONLY a valid JSON object with two fields: `"category"` and `"reasoning"`.
2. Do not invent categories outside the provided list.
3. If a comment covers multiple issues, pick the strongest primary concern.
4. If the text does not contain enough information or is off-topic, output `"Unclassified/Irrelevant"`.

## B. Complete Test Set (10 Inputs)

| Input # | Case Type | Raw Employee Comment | Expected Category | Expected Reasoning |
|---|---|---|---|---|
| 1 | Standard Clear Case | "Management keeps pushing this new AI tool, but honestly, everyone in my department is terrified we're going to be made redundant by next quarter." | Job Security Fear | Direct anxiety about redundancy and team replacement. |
| 2 | Ambiguous Case | "I spent two hours trying to figure out how to generate the monthly report. When it finally spat out a draft, the sales figures for Q2 were completely wrong anyway." | Trust/Accuracy Concern | Mentions UI friction, but the core failure preventing work completion is fabricated/incorrect data. |
| 3 | Language Variation (French) | "On nous impose encore un autre logiciel cette année... Je n'ai même plus le temps de faire mon vrai travail tellement il y a de formations." | Change Fatigue | Complains about continuous forced software rollouts taking time away from core tasks. |
| 4 | Very Short Case | "Total waste of time." | Unclassified/Irrelevant | Lacks explicit context to assign a specific psychological barrier accurately without guessing. |
| 5 | Off-Topic Case | "Does anyone know if the parking garage gates are open after 6 PM today?" | Unclassified/Irrelevant | Text does not reference AI, workplace software, or adoption sentiment. |
| 6 | Usability Concern | "The prompt interface is super clunky. Half my team can't figure out where to upload the CSV file, so we just went back to doing it manually in Excel." | Usability/Complexity | Direct frustration with tool navigation and UI complexity preventing adoption. |
| 7 | Positive Sentiment | "I was skeptical at first, but using the copilot to draft routine client follow-ups saved me almost three hours this week. Big fan so far." | Enthusiastic/Receptive | Expresses satisfaction and measurable time-saving benefits. |
| 8 | Change Fatigue | "We just spent three months adapting to Slack, last month it was Notion, and now they want us on an AI platform? I can't keep up with all these changes." | Change Fatigue | Overwhelmed by consecutive software updates and tool rollouts. |
| 9 | Language Variation (Dutch) | "Ik vertrouw die antwoorden echt niet. De bronnen die het aanhaalt bestaan niet eens." | Trust/Accuracy Concern | Expresses distrust due to hallucinated citations in Dutch. |
| 10 | Borderline Case | "It's cool that it writes emails fast, but I'm worried management will use this data to evaluate our productivity metrics." | Job Security Fear | Despite mentioning speed, the core underlying barrier is anxiety over management surveillance and role assessment. |

## C. Log & Failure Classification

### Physical Deployment Probe Plan

- **Machines:** Laser Cutter / 3D Printer
- **Artifact:** Desktop Feedback Kiosk Standee (Physical sentiment logging box for office breakrooms)
- **Fablab Session:** Fablab Voetweg 66 Walk-in / Lab Session

| Input # | Expected Category | Run 1 Category | Run 2 Category | Failure Classification | Outcome |
|---|---|---|---|---|---|
| 1 | Job Security Fear | Job Security Fear | Job Security Fear | None | PASS |
| 2 | Trust/Accuracy Concern | Usability/Complexity | Trust/Accuracy Concern | F6 inconsistent | FAIL |
| 3 | Change Fatigue | Change Fatigue | Change Fatigue | None | PASS |
| 4 | Unclassified/Irrelevant | Usability/Complexity | Change Fatigue | F1 wrong, F2 fabricated, F6 inconsistent | FAIL |
| 5 | Unclassified/Irrelevant | Unclassified/Irrelevant | Unclassified/Irrelevant | None | PASS |
| 6 | Usability/Complexity | Usability/Complexity | Usability/Complexity | None | PASS |
| 7 | Enthusiastic/Receptive | Enthusiastic/Receptive | Enthusiastic/Receptive | None | PASS |
| 8 | Change Fatigue | Change Fatigue | Change Fatigue | None | PASS |
| 9 | Trust/Accuracy Concern | Trust/Accuracy Concern | Trust/Accuracy Concern | None | PASS |
| 10 | Job Security Fear | Enthusiastic/Receptive | Job Security Fear | F1 wrong, F6 inconsistent | FAIL |

# Run Summary Statistics

- **Total Test Inputs:** 10 (20 total model executions)
- **Pass Rate:** 70% (7 out of 10 inputs consistently passed both runs)
- **Failure Instances Tagged:**
  - **F1 Wrong:** 2 instances (Input 4, Input 10 Run 1)
  - **F2 Fabricated:** 1 instance (Input 4 invented non-existent context)
  - **F6 Inconsistent:** 3 instances (Input 2, Input 4, Input 10)
