# Week 2 — AI in Business Consulting

## 1. Three Borderline Modality Cases

# Case 1: Fraud Detection

**Bucket:** AI-Risky

**Why it's not obvious:**  
A normal person's transactions can be checked against their usual pattern. When the pattern is different, or the amount is very different from normal, AI can catch it quickly, which is much harder for humans. But it can also be wrong. If it flags a normal purchase and blocks the customer, it costs time, money and trust. If it misses real fraud, money is lost, which is serious because every cent at a bank needs to be accounted for.

**Guardrail:**  
A human can't be this fast, so the AI gives each transaction a risk score, and unusual ones are marked for a human to verify and decide. The model is also checked and maintained regularly so it keeps up with fraud patterns, because they keep changing.

# Case 2: Hiring Candidate Screening

**Bucket:** AI-Risky

**Why it's not obvious:**  
AI can go through 500 resumes much faster than a person. But it learns from past hiring data, so it can copy old bias. If the company's hiring needs have changed, it can also reject a resume for a made-up reason. That matters because a rejected candidate is owed a proper reason, and being rejected without one can feel discriminatory or like not getting equal opportunity.

**Guardrail:**  
The AI is only used to sort for clear, checkable things like matching keywords or years of experience. Humans read the CVs and decide who moves forward, and every rejection needs a proper, documented reason.

# Case 3: Legal Contract Review

**Bucket:** AI-Risky

**Why it's not obvious:**  
AI can read a 10-page contract quickly and flag wording that looks unusual, which makes it sound like a perfect fit. But AI doesn't actually know what is risky for a company, because it only knows patterns from past data. If a clause is something new, the AI can miss it, and a missed risky clause could cost the business later.

**Guardrail:**  
The AI only flags clauses for review, and it doesn't decide what is risky. A human, ideally a lawyer, reads the flagged clauses and decides which ones are real risks. A person should still skim the parts the AI didn't flag, because a new kind of risk is exactly what it can miss.


**Overall observation:** 
I chose AI-Risky for all three because AI helps with speed here, but a mistake is costly, so a human decides



## Extra Borderline cases from my own beat

### Case 1 — AI-assisted research

**Scenario:**  
A consultant needs to review 100 pages of market reports and produce a shortlist of the most relevant findings.

**Reasoning:**  
AI is useful for quickly summarising and organising a large amount of information, but a consultant should verify important findings against the original reports because missing or misinterpreting information could affect the client’s recommendation.

### Case 2 — Final client recommendation

**Scenario:**  
A consultant needs to decide whether a client should enter a new international market based on political, economic and operational risks.

**Reasoning:**  
AI could help organise evidence and identify possible risks, but I would not leave the final recommendation entirely to AI. The consultant should make and justify the final recommendation because the decision involves judgement, incomplete information and potentially significant consequences for the client.

### Case 3 — Simple risk classification

**Scenario:**  
A company has a fixed set of rules where inflation above 10% is classified as Economic Risk, a new licensing law is Legal/Regulatory Risk, and a supply shortage is Operational Risk.

**Reasoning:**  
AI is probably unnecessary for this task because the rules are already clear and structured. A spreadsheet or simple rules-based system could classify the information more cheaply and consistently.

**Overall observation:**  
These three cases show that the question is not simply whether AI can perform a task. The more useful question is whether AI adds value compared with human judgement or a simpler tool. In consulting, AI can be useful for processing and organising information, while human verification and judgement remain important for consequential decisions.

---

## 2. Five-Question Framework Walkthrough

**Use case:** A consulting firm needs to assess risks before entering a new international market.

### Question 1: Do you already know the answer?

**Answer: No.**

The consulting team does not already know all of the relevant market-entry risks. They need to research information about the market before making a recommendation.

### Question 2: Is the cost of being wrong greater than the cost of being slow?

**Answer: Yes.**

Missing an important market-entry risk could lead to a costly recommendation for the client. Spending additional time checking the information is preferable to relying on an incorrect or incomplete assessment.

### Question 3: Is the information stable or constantly changing?

**Answer: The information is constantly changing.**

Political conditions, regulations, exchange rates, inflation and other market conditions can change over time. This means research may need to be updated regularly.

### Question 4: Can you verify the AI’s answer?

**Answer: Yes.**

The AI’s classification can be checked against reliable external sources such as government websites, regulatory documents, economic data and market research. This makes it possible for a consultant to verify whether the identified risk is supported by evidence.

### Question 5: Is there a simpler tool that could do the job?

**Answer: Yes, for some parts of the task.**

A spreadsheet or rules-based system could classify clearly defined risks using predetermined criteria. AI becomes more useful when the information is unstructured or requires interpretation. Therefore, AI is not automatically necessary for every part of the market-entry risk assessment.
