# Week 2 evidence — Capability skepticism

Author: Kiril Boyakov  
Beat: AI in European Freight Cost Estimation

## 1. Three borderline modality cases

These are my selected borderline cases from the course sorting exercise.

### Case 1: Fraud detection in bank transactions

**Classification: AI-Risky; suitability depends on the system and its authority.**

The input is structured transaction data, and the output is a legitimate/suspicious classification. A specialised fraud-detection model could identify patterns and flag transactions for investigation. However, a general-purpose language model should not automatically be treated as suitable for a decision requiring a response within 0.5 seconds.

A false negative could allow fraud; a false positive could block a legitimate customer. I would compare a tested specialist model with existing rules, measure both kinds of error and response time, and retain an escalation process. Flagging a transaction for review is a different responsibility from making an irreversible decision.

### Case 2: Hiring candidate screening

**Classification: AI-Risky.**

The inputs are CVs and job requirements; the output is a ranking of candidates. AI could help extract explicitly stated qualifications, but ranking suitability involves judgments that may reproduce bias or overlook relevant experience.

Human review of only the top ten does not resolve the problem: a qualified applicant might already have been excluded. I would start with a consistent human scoring rubric and use any automated extraction as supporting information. Reviewers should check source CVs and examine some excluded candidates, rather than assume the ranking is reliable.

### Case 3: Legal contract review

**Classification: AI-Risky as an assistant for identifying issues.**

The input is a contract, and the output is a list of potentially unusual clauses with their locations. This is more checkable than asking AI whether the entire contract is legally safe.

AI might identify wording that differs from an approved template, but it could miss a significant clause or invent an interpretation. I would first use a template comparison and checklist, then have a qualified reviewer assess important issues. AI-generated flags could support that review, but the absence of a flag would not establish that a contract is safe.

## 2. Five-question framework — My freight classifier

### Use case

My Build reads a freight-service description and returns a transport-mode label, an exact supporting quotation, and a short explanation. Its role is to suggest which transport-rate category an employee should investigate. It does not calculate a price, book a shipment, or approve a customer quote.

### Question 1: Do you know the answer already?

For my test set, yes: the expected answers were recorded before testing. For a new description, the answer may be explicitly present in the wording even if it has not yet been organised into a category.

Clear terms such as “air freight” can often be handled by simple rules. If the description does not identify a mode, neither AI nor a rule should invent one; the useful result is a request for clarification.

### Question 2: Is the cost of being wrong higher than the cost of being slow?

If the label automatically selects a price or books transport, a wrong answer could have serious consequences. In that situation, checking is more important than speed.

For this prototype, a person reviews the source and classification before acting. That makes a limited experiment reasonable, but I have not measured the financial consequences of errors or the time required for review. Automatic downstream decisions are outside its scope.

### Question 3: Is the information stable or changing rapidly?

The meanings of transport categories are relatively stable. The classifier receives the description directly, so it should not rely on remembered information about a company.

Freight rates, surcharges, schedules, and availability can change. Those are separate information requirements and are not established by correctly classifying a description. A transport-mode label cannot validate a current freight price.

### Question 4: Can you verify the AI’s answer?

Yes, within the defined task. I can compare the label and exact quotation with the supplied description and the expected answer.

My recorded tests produced 20 passing results from ten inputs tested twice. However, Test 01 used individual chats with v1, while Tests 02–10 used two batches with v1b. The batch examples shared context. This is a small, selected test set and does not establish accuracy on unseen customer requests.

Ambiguous examples also require careful human judgment when defining the expected answer. Agreement with an answer key is useful only if that key is defensible.

### Question 5: What is the simplest tool that solves this?

For straightforward descriptions, a keyword dictionary and explicit rules may be sufficient. The rules would need to distinguish a list of available services from modes combined in one journey. They should return uncertainty when the information is missing or conflicting.

AI may help with varied wording and multiple languages, but my current results do not prove that it performs better than rules. The next comparison should use the same unseen inputs for both approaches and measure accuracy, review time, and cost.

### Decision

Keep the classifier as a supervised prototype and compare it with a simple rules-based baseline before recommending deployment. The current experiment shows that the model matched my expected answers on selected descriptions; it does not establish that AI is necessary or economically worthwhile.

## 3. Connection to my “no AI” Signal post

A stronger no-AI use case in my beat is calculating a freight quote when the applicable rates, shipment details, and calculation rules are already known. A validated spreadsheet or rules-based calculator can perform the calculation consistently and show how the total was obtained. Missing rates or unclear shipment details should trigger clarification. A language model may help organise the request, but it should not invent the missing values or replace the calculation.

## AI assistance

I used AI to help draft and structure this evidence and assess the logged responses against the saved expected answers. My Build results and execution methods are recorded in the build log.

Source: [Week 2 — Capability skepticism](https://advanced-ai-in-business.vercel.app/week/2)