# Build Log v1

## Fablab Deployment Probe Plan
- Machine: Laser Cutter (Campus Kantienberg Fablab)
- Physical Artifact: Acrylic and plywood counter standee with QR code and visual triage alert indicators, simulating a reception and bar manager station.
- Fablab Workshop Session: Vector design and laser cutting open lab session, Campus Kantienberg.

---

## Test Execution Log (10 Inputs x 2 Runs)

### Input 1 (Severe Food Poisoning & Legal Threat)
- Run 1: Category: Food/Hygiene | Escalation: YES | Root Cause: Seafood platter caused food poisoning | Sentiment: Negative
- Run 2: Category: Food/Hygiene | Escalation: YES | Root Cause: Seafood platter caused food poisoning | Sentiment: Negative
- Result: PASS (Both runs fully consistent with Ground Truth)
- Failure Class: None

### Input 2 (Server Praise)
- Run 1: Category: Service/Staff | Escalation: NO | Root Cause: Exceptional server recommendation | Sentiment: Positive
- Run 2: Category: Service/Staff | Escalation: NO | Root Cause: Exceptional server service | Sentiment: Positive
- Result: PASS (Both runs consistent, minor natural variation in root cause phrasing)
- Failure Class: None

### Input 3 (Boundary Case: Broken AC in Dining Room)
- Run 1: Category: Facility/Maintenance | Escalation: NO | Root Cause: Broken dining room air conditioning | Sentiment: Negative
- Run 2: Category: Facility/Maintenance | Escalation: NO | Root Cause: Broken dining room air conditioning | Sentiment: Negative
- Result: PASS (Successfully prioritized facility breakdown over tasting menu context)
- Failure Class: None

### Input 4 (Hungarian Edge Case: Clumsy Waiter, Cold Soup, Free Coffee)
- Run 1: Category: Service/Staff | Escalation: NO | Root Cause: Hideg leves és ügyetlen felszolgálás | Sentiment: Negative
- Run 2: Category: Food/Hygiene | Escalation: NO | Root Cause: Hideg leves tálalása | Sentiment: Negative
- Result: FAIL on Run 2
- Failure Class: F1 (Wrong category on Run 2), F6 (Inconsistent categorization across runs).
- Observation: Without explicit hierarchy rules, the model vacillated between the waiter incident and the cold food. The model also generated the root cause in Hungarian, revealing that v1 lacked an explicit English output language constraint.

### Input 5 (Short and Ambiguous Review)
- Run 1: Category: General/Experience | Escalation: NO | Root Cause: Unremarkable overall experience | Sentiment: Neutral
- Run 2: Category: General/Experience | Escalation: NO | Root Cause: Unremarkable overall experience | Sentiment: Neutral
- Result: PASS
- Failure Class: None

### Input 6 (Sarcasm and Irony: Slow Service and Cold Burger)
- Run 1: Category: Service/Staff | Escalation: NO | Root Cause: Excessive wait and inattentive staff | Sentiment: Negative
- Run 2: Category: Service/Staff | Escalation: NO | Root Cause: Slow service and cold burger | Sentiment: Negative
- Result: PASS (Both runs pierced surface sarcasm without being misled by words like 'loved' or 'masterclass')
- Failure Class: None

### Input 7 (Duplicate Charge & Visa Fraud Dispute Threat)
- Run 1: Category: Service/Staff | Escalation: YES | Root Cause: Duplicate charge and dispute | Sentiment: Negative
- Run 2: Category: Service/Staff | Escalation: YES | Root Cause: Duplicate credit card dispute | Sentiment: Negative
- Result: PASS (Correctly identified financial escalation risk despite absence of the literal word 'refund')
- Failure Class: None

### Input 8 (Boutique Room Praise with Street Traffic Noise)
- Run 1: Category: General/Experience | Escalation: NO | Root Cause: Loud street traffic overnight | Sentiment: Positive
- Run 2: Category: General/Experience | Escalation: NO | Root Cause: Loud street traffic overnight | Sentiment: Positive
- Result: FAIL against Ground Truth (Expected Facility/Maintenance)
- Failure Class: F1 (Category mismatch). The model classified this under General/Experience because the overwhelming tone was room praise, viewing external traffic noise as external context rather than physical property defect.

### Input 9 (Nonsense Text with Positive Praise)
- Run 1: Category: General/Experience | Escalation: NO | Root Cause: Positive overall experience | Sentiment: Positive
- Run 2: Category: General/Experience | Escalation: NO | Root Cause: Positive overall experience | Sentiment: Positive
- Result: PASS (No parsing breakdown, accurately captured net sentiment)
- Failure Class: None

### Input 10 (Rotting Patio Plank and Bodily Injury)
- Run 1: Category: Facility/Maintenance | Escalation: YES | Root Cause: Rotting patio plank caused injury | Sentiment: Negative
- Run 2: Category: Facility/Maintenance | Escalation: YES | Root Cause: Rotting patio plank caused injury | Sentiment: Negative
- Result: PASS (Triggered escalation due to safety hazard and physical injury without explicit legal threats)
- Failure Class: None

---

## Metric Breakdown & Performance Summary
- Total Test Cases: 10
- Total Execution Runs: 20
- Clean Runs Matching Ground Truth: 17 / 20 (85% Run Accuracy)
- Cross-Run Consistency (Identical outputs across Run 1 and Run 2): 9 / 10 (90% Stability)
- Ground Truth Pass Rate (Passed both runs cleanly): 8 / 10 (80%)
- Identified Failure Modes:
  - F1 (Wrong output): 2 cases (Input 4 Run 2 category drift, Input 8 boundary mismatch).
  - F6 (Inconsistent output): 1 case (Input 4 switched category between Service/Staff and Food/Hygiene).
  - Implicit Defect: Language leakage in root cause field during non-English input processing.
