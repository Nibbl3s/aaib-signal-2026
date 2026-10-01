# Build Run Log

**Beat:** The Psychology of AI Adoption in the Workplace[cite: 1]  
**Prompt Version:** v1[cite: 1]  
**Target File:** `students/your-name/build/log.md`  
**Failure Taxonomy:** F1 wrong | F2 fabricated | F3 missed | F4 format | F5 refused | F6 inconsistent

---

## 1. Physical Deployment Probe Plan

| Parameter | Details |
| :--- | :--- |
| **Machines** | Laser Cutter / 3D Printer |
| **Artifact** | Desktop Feedback Kiosk Standee (Physical sentiment logging box for office breakrooms) |
| **Fablab Session** | Fablab Voetweg 66 Walk-in / Lab Session |

---

## 2. Test Execution Log (Dual-Run Matrix)

### Input 1: Standard Clear Case
* **Text:** "Management keeps pushing this new AI tool, but honestly, everyone in my department is terrified we're going to be made redundant by next quarter."[cite: 1]
* **Expected:** `Job Security Fear`[cite: 1]
* **Run 1 Result:** `Job Security Fear` — Correct.
* **Run 2 Result:** `Job Security Fear` — Correct.
* **Failure Tag:** None (Passed)

---

### Input 2: Ambiguous / Boundary Case
* **Text:** "I spent two hours trying to figure out how to generate the monthly report. When it finally spat out a draft, the sales figures for Q2 were completely wrong anyway."[cite: 1]
* **Expected:** `Trust/Accuracy Concern`[cite: 1]
* **Run 1 Result:** `Usability/Complexity` — Category focused on the two-hour UI struggle.
* **Run 2 Result:** `Trust/Accuracy Concern` — Category focused on incorrect Q2 figures.
* **Failure Tag:** `F6 inconsistent` (Run 1 and Run 2 produced different primary classifications)

---

### Input 3: Foreign Language Case
* **Text:** "On nous impose encore un autre logiciel cette année... Je n'ai même plus le temps de faire mon vrai travail tellement il y a de formations."[cite: 1]
* **Expected:** `Change Fatigue`[cite: 1]
* **Run 1 Result:** `Change Fatigue` — Correct.
* **Run 2 Result:** `Change Fatigue` — Correct.
* **Failure Tag:** None (Passed)

---

### Input 4: Very Short Case
* **Text:** "Total waste of time."[cite: 1]
* **Expected:** `Unclassified/Irrelevant`[cite: 1]
* **Run 1 Result:** `Usability/Complexity` — Assumed the user was complaining about tool interface complexity.
* **Run 2 Result:** `Change Fatigue` — Assumed the user was frustrated with rollout pace.
* **Failure Tag:** `F1 wrong`, `F2 fabricated` (AI assumed non-existent context), `F6 inconsistent`

---

### Input 5: Off-Topic / Out of Bounds
* **Text:** "Does anyone know if the parking garage gates are open after 6 PM today?"[cite: 1]
* **Expected:** `Unclassified/Irrelevant`[cite: 1]
* **Run 1 Result:** `Unclassified/Irrelevant` — Correct.
* **Run 2 Result:** `Unclassified/Irrelevant` — Correct.
* **Failure Tag:** None (Passed)

---

### Input 6: Usability / Interface Complexity
* **Text:** "The prompt interface is super clunky. Half my team can't figure out where to upload the CSV file, so we just went back to doing it manually in Excel."
* **Expected:** `Usability/Complexity`
* **Run 1 Result:** `Usability/Complexity` — Correct.
* **Run 2 Result:** `Usability/Complexity` — Correct.
* **Failure Tag:** None (Passed)

---

### Input 7: Enthusiastic / Receptive
* **Text:** "I was skeptical at first, but using the copilot to draft routine client follow-ups saved me almost three hours this week. Big fan so far."
* **Expected:** `Enthusiastic/Receptive`
* **Run 1 Result:** `Enthusiastic/Receptive` — Correct.
* **Run 2 Result:** `Enthusiastic/Receptive` — Correct.
* **Failure Tag:** None (Passed)

---

### Input 8: Change Fatigue
* **Text:** "We just spent three months adapting to Slack, last month it was Notion, and now they want us on an AI platform? I can't keep up with all these changes."
* **Expected:** `Change Fatigue`
* **Run 1 Result:** `Change Fatigue` — Correct.
* **Run 2 Result:** `Change Fatigue` — Correct.
* **Failure Tag:** None (Passed)

---

### Input 9: Dutch Language Edge Case
* **Text:** "Ik vertrouw die antwoorden echt niet. De bronnen die het aanhaalt bestaan niet eens."
* **Expected:** `Trust/Accuracy Concern`
* **Run 1 Result:** `Trust/Accuracy Concern` — Correct.
* **Run 2 Result:** `Trust/Accuracy Concern` — Correct.
* **Failure Tag:** None (Passed)

---

### Input 10: Mixed Sentiment / Borderline
* **Text:** "It's cool that it writes emails fast, but I'm worried management will use this data to evaluate our productivity metrics."
* **Expected:** `Job Security Fear`[cite: 1]
* **Run 1 Result:** `Enthusiastic/Receptive` — Focused on the positive email generation clause.
* **Run 2 Result:** `Job Security Fear` — Focused on productivity metric monitoring.
* **Failure Tag:** `F1 wrong` (Run 1), `F6 inconsistent`

---

## 3. Failure Summary Matrix

* **Total Inputs Run:** 10 (20 total executions)
* **Pass Rate:** 70% (7/10 inputs consistently passed both runs)
* **Failure Instances:**
  * **F1 Wrong:** 2 instances (Input 4 Run 1/2, Input 10 Run 1)
  * **F2 Fabricated:** 1 instance (Input 4 invented context)[cite: 3]
  * **F6 Inconsistent:** 3 instances (Input 2, Input 4, Input 10)[cite: 3]
