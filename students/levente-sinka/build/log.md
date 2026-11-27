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

## Checkpoint 2: Build Revision, Measured Delta & Costing (Week 8)

* **Date:** November 27, 2026
* **System Under Test:** Hospitality Review Triage (Local `llama3.2` 3B via Ollama on MacBook Air M1, €0 marginal API cost)
* **Test Harness:** Exact same 8 external multilingual reviews (EN, NL, HU), run twice = 16 total runs.

### 1. Revision Made (v1 to v2) & Reason
In Week 7 (v1), local `llama3.2` scored only 3/16 (18.8%) because it triggered `escalation: YES` on every routine negative complaint (8/16 false alarms), missed `Facility/Maintenance` on acoustic issues, and hallucinated an undercooked egg on the Hungarian review.
To test whether prompt engineering could make a €0 local model viable without switching to paid cloud APIs, I made two targeted changes:
1. Added strict boundary rules in the prompt restricting `escalation: YES` strictly to acute health, allergy, injury, harassment, or legal/chargeback threats, while defining routine complaints as `NO` and tightening `Facility/Maintenance` vs. `General/Experience` rules.
2. Lowered sampling temperature to `0.1` to reduce run-to-run drift.

### 2. Prediction (Recorded Before Running)
Accuracy will jump from the Week 7 baseline of 18.8% (3/16) to between 62.5% and 81.3% (10/16 to 13/16), a +44 to +62 percentage-point delta, while maintaining 16/16 raw JSON compliance.

### 3. Measured Result & Delta
* **v1 Baseline (Week 7):** 3/16 exact matches (**18.8%**) in 26.2s, 8/16 escalation false positives, 16/16 valid JSON.
* **v2 Revised (Week 8):** 10/16 exact matches (**62.5%**) in 28.0s, 0/16 escalation false positives, 16/16 valid JSON.
* **Measured Accuracy Delta:** **+43.7 percentage points** (+7 passing runs), hitting the lower edge of my prediction.

### 4. Failure & Regression Analysis
* **Fixed:** Escalation false alarms dropped from 50% to 0%. Inputs 2, 3, 4, 5, and Hungarian Input 6 all reached 2/2 PASS, and the Hungarian semantic hallucination disappeared.
* **Prompt Regressions Introduced:** Tighter rules broke two previously passing mixed-sentiment cases. Input 1 (nice garden, unavailable menu items) dropped from 2/2 PASS to 0/2 FAIL (`General/Experience` instead of `Food/Hygiene`), and Input 8 (30-minute wait, nice atmosphere) dropped from 1/2 to 0/2 (`Neutral` instead of `Negative`).
* **Unresolved Variance:** Input 7 (acoustics) still drifted between Run 1 (`General/Experience`, `Positive`) and Run 2 (`Facility/Maintenance`, `Neutral`) even at `temperature: 0.1`.

### 5. Costing the Delta (1,200 Reviews/Month, €5/Fix Remediation Rate)
| Version | Monthly API Cost | Error Rate | Monthly Error Cleanup (1,200 x Error x €5) | Total Monthly Cost | Cost per Correctly Handled Review |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Local `llama3.2` v1 (W7)** | €0.00 | 81.2% | €4,872 | €4,872 | €21.65 |
| **Local `llama3.2` v2 (W8)** | €0.00 | 37.5% | €2,250 | €2,250 | €3.00 |
| **Cloud Baseline (W2/W6 ref)** | ~€0.12 | 15.0% | €900 | €900.12 | €0.88 |

* **Cost Delta (v1 to v2):** Prompt tightening cut projected monthly error-remediation cost by **€2,622/month (-53.8%)** at €0 extra API cost.
* **Strategic Conclusion:** Even with a +43.7 point gain, local `llama3.2` (3B) still produces a 37.5% error rate (€2,250/month in cleanup), which is more than double my Week 6 economic break-even ceiling of 17.9% (€1,074/month) and 2.5x more expensive than a paid cloud reasoning model. Local 3B stays restricted to zero-stakes drafting; mission-critical triage remains on a swappable cloud API behind a thin wrapper.
