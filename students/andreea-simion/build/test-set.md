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

## Complete Test Inputs (10 / 10)

### Input 1 (Standard Clear Case)
* **Raw Text:** "Management keeps pushing this new AI tool, but honestly, everyone in my department is terrified we're going to be made redundant by next quarter."
* **Type:** Standard clear input
* **Expected Category:** `Job Security Fear`[cite: 1]
* **Expected Reasoning:** Direct anxiety about redundancy and team replacement[cite: 1].

---

### Input 2 (Ambiguous / Boundary Case)
* **Raw Text:** "I spent two hours trying to figure out how to generate the monthly report. When it finally spat out a draft, the sales figures for Q2 were completely wrong anyway."
* **Type:** Ambiguous (combines Usability and Accuracy concerns)
* **Expected Category:** `Trust/Accuracy Concern`
* **Expected Reasoning:** Mentions UI friction, but the core failure preventing work completion is fabricated/incorrect data.

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
* **Expected Reasoning:** Lacks explicit context to assign a specific psychological barrier accurately without guessing.

---

### Input 5 ("I Don't Know" / Off-Topic Case)
* **Raw Text:** "Does anyone know if the parking garage gates are open after 6 PM today?"
* **Type:** Irrelevant / Off-topic
* **Expected Category:** `Unclassified/Irrelevant`[cite: 1]
* **Expected Reasoning:** Text does not reference AI, workplace software, or adoption sentiment.

---

### Input 6 (Usability / Interface Complexity)
* **Raw Text:** "The prompt interface is super clunky. Half my team can't figure out where to upload the CSV file, so we just went back to doing it manually in Excel."
* **Type:** Usability
* **Expected Category:** `Usability/Complexity`[cite: 1]
* **Expected Reasoning:** Direct frustration with tool navigation and UI complexity preventing adoption.

---

### Input 7 (Enthusiastic / Receptive)
* **Raw Text:** "I was skeptical at first, but using the copilot to draft routine client follow-ups saved me almost three hours this week. Big fan so far."
* **Type:** Positive sentiment
* **Expected Category:** `Enthusiastic/Receptive`[cite: 1]
* **Expected Reasoning:** Expresses satisfaction and measurable time-saving benefits.

---

### Input 8 (Change Fatigue)
* **Raw Text:** "We just spent three months adapting to Slack, last month it was Notion, and now they want us on an AI platform? I can't keep up with all these changes."
* **Type:** Change fatigue
* **Expected Category:** `Change Fatigue`[cite: 1]
* **Expected Reasoning:** Overwhelmed by consecutive software updates and tool rollouts.

---

### Input 9 (Dutch Language Edge Case)
* **Raw Text:** "Ik vertrouw die antwoorden echt niet. De bronnen die het aanhaalt bestaan niet eens."
* **Type:** Language variation (Dutch)
* **Expected Category:** `Trust/Accuracy Concern`[cite: 1]
* **Expected Reasoning:** Expresses distrust due to hallucinated citations in Dutch.

---

### Input 10 (Mixed Sentiment / Borderline)
* **Raw Text:** "It's cool that it writes emails fast, but I'm worried management will use this data to evaluate our productivity metrics."
* **Type:** Borderline (Enthusiastic vs. Job Security/Surveillance Fear)
* **Expected Category:** `Job Security Fear`[cite: 1]
* **Expected Reasoning:** Despite mentioning speed, the core underlying barrier is anxiety over management surveillance and role assessment.
