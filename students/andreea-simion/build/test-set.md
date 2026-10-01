# Test Set: Workplace AI Adoption Sentiment Classifier

**Beat:** The Psychology of AI Adoption in the Workplace  
**Target File:** `students/your-name/build/test-set.md`  

---

## Initial In-Class Test Inputs (5 / 5)

### Input 1 (Standard Clear Case)
* **Raw Text:** "Management keeps pushing this new AI tool, but honestly, everyone in my department is terrified we're going to be made redundant by next quarter."
* **Type:** Standard clear input
* **Expected Category:** `Job Security Fear`
* **Expected Reasoning:** Expresses direct anxiety about team redundancy and replacement[cite: 1].

---

### Input 2 (Ambiguous / Boundary Case)
* **Raw Text:** "I spent two hours trying to figure out how to generate the monthly report. When it finally spat out a draft, the sales figures for Q2 were completely wrong anyway."
* **Type:** Ambiguous (combines Usability and Accuracy concerns)
* **Expected Category:** `Trust/Accuracy Concern` *(or `Usability/Complexity` depending on primary emphasis; ground truth rule prioritizes the factually incorrect output).*
* **Expected Reasoning:** Mentions interface friction, but the core failure preventing work completion is fabricated/incorrect data.

---

### Input 3 (Foreign Language Case)
* **Raw Text:** "On nous impose encore un autre logiciel cette année... Je n'ai même plus le temps de faire mon vrai travail tellement il y a de formations."
* **Type:** Language variation (French)
* **Expected Category:** `Change Fatigue`[cite: 1]
* **Expected Reasoning:** Complains about continuous forced software rollouts taking time away from core tasks.

---

### Input 4 (Very Short Case)
* **Raw Text:** "Total waste of time."
* **Type:** Extremely short / minimal context
* **Expected Category:** `Unclassified/Irrelevant`[cite: 1]
* **Expected Reasoning:** Too brief and lacking explicit details to assign a specific psychological barrier accurately without guessing.

---

### Input 5 ("I Don't Know" / Off-Topic Case)
* **Raw Text:** "Does anyone know if the parking garage gates are open after 6 PM today?"
* **Type:** Irrelevant / Off-topic
* **Expected Category:** `Unclassified/Irrelevant`[cite: 1]
* **Expected Reasoning:** Text does not reference AI, workplace software, or adoption sentiment.

---

## Remaining Inputs To Collect By Friday (Target: 10–15 Total)
- [ ] Input 6: Forum post regarding fear of deskilling
- [ ] Input 7: Positive employee review praising automation speed
- [ ] Input 8: Dutch employee comment regarding tool skepticism
- [ ] Input 9: Public review complaining about complex UI
- [ ] Input 10: Mixed review (Enthusiastic + Skeptical)
