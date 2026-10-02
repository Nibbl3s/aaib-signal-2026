# Test Set — AI Bias & Assessment Tool
**Target Scale:** 10 Inputs

---

### Input 1: The Standard Corporate Vendor Pitch (Clear Risk)
* **Input Text:** 
> "Our resume-screening engine 'TalentFit Pro' parses applicant pools for Fortune 500 companies. It utilizes a deep-learning neural network trained on ten years of successful past hires at the firm to automatically score incoming CVs for 'cultural fit' and 'leadership potential,' instantly fast-tracking top-quartile candidates while auto-rejecting the bottom 50% to save HR hours."
* **Pre-Written Expected Answer:**
  - **Function:** Automated resume screening and ranking
  - **Risk Level:** High Risk
  - **Justification:** Trains on historical hire data ("successful past hires"), which carries severe risk of replicating past demographic exclusions, and uses automated rejection for high-stakes employment decisions.

---

### Input 2: The Ambiguous / Subtle Case
* **Input Text:** 
> "Project Horizon: A natural language processing tool designed to evaluate customer service chat logs. It scores support agents on 'enthusiasm,' 'warmth,' and 'de-escalation pacing' to ensure brand alignment and automatically suggests coaching modules for low scorers."
* **Pre-Written Expected Answer:**
  - **Function:** Employee chat log evaluation and scoring
  - **Risk Level:** Moderate Risk
  - **Justification:** While not a hiring decision, scoring subjective traits like "warmth" and "enthusiasm" disproportionately penalizes communication styles often stereotyped across gender lines, though it lacks direct legal employment termination/hiring impact.

---

### Input 3: The Very Short Input
* **Input Text:** 
> "AI-powered scheduling assistant that prioritizes night shifts for energetic staff."
* **Pre-Written Expected Answer:**
  - **Function:** Automated shift scheduling optimization
  - **Risk Level:** High Risk
  - **Justification:** Prioritizing night shifts based on nebulous "energy" metrics can indirectly discriminate against caregivers (statistically predominantly women with childcare responsibilities), making it a high-risk operational AI system.

---

### Input 4: The Multi-Language Case (French)
* **Input Text:** 
> "Outil de recrutement prédictif basé sur l'IA qui analyse les expressions faciales et le ton de la voix lors d'entretiens vidéo pour attribuer un score de fiabilité et d'ambition professionnelle."
* **Pre-Written Expected Answer:**
  - **Function:** Video interview facial and voice analysis
  - **Risk Level:** High Risk
  - **Justification:** Uses pseudoscientific biometric analysis of facial expressions and voice tone to score "reliability" and "ambition," which is widely documented to encode gender and racial biases.

---

### Input 5: The "I Don't Know" / Out-of-Scope Case
* **Input Text:** 
> "An internal corporate database script that automatically organizes employee travel reimbursement receipts by department code and date submitted into an Excel spreadsheet."
* **Pre-Written Expected Answer:**
  - **Function:** Automated expense receipt organization
  - **Risk Level:** Low/None
  - **Justification:** A deterministic data-sorting administrative script with no human assessment, profiling, or employment impact. No bias risk present.

---

### Input 6: The Subtle Linguistic Bias Case
* **Input Text:** 
> "Job ad excerpt: Looking for a 'rockstar ninja' developer who is a 'digital native' and 'hungry to hustle 24/7' with zero personal commitments outside of coding."
* **Pre-Written Expected Answer:**
  - **Function:** Job advertisement wording screening
  - **Risk Level:** Moderate Risk
  - **Justification:** Language like "ninja," "hustle 24/7," and demanding zero personal commitments uses well-documented masculine-coded and ableist tropes that systematically discourage primary caregivers and female applicants from applying.

---

### Input 7: The Multi-Language Case (Spanish)
* **Input Text:** 
> "Plataforma de análisis de desempeño que rastrea las pulsaciones de teclado y las capturas de pantalla de la cámara web cada 5 minutos para calcular una puntuación diaria de productividad."
* **Pre-Written Expected Answer:**
  - **Function:** Remote employee monitoring and productivity tracking
  - **Risk Level:** High Risk
  - **Justification:** Continuous surveillance tools (keystroke tracking and webcam snapshots) disproportionately penalize workers who require accommodations, nursing breaks, or have domestic interruption profiles, disproportionately affecting women.

---

### Input 8: The Vague / Hype-Heavy Vendor Pitch
* **Input Text:** 
> "SynergyAI revolutionizes the workplace by using holistic cognitive mapping to unlock human potential and synergize team dynamics for optimal organizational harmony."
* **Pre-Written Expected Answer:**
  - **Function:** Workplace team dynamics analytics
  - **Risk Level:** High Risk
  - **Justification:** Vague pseudoscience ("cognitive mapping," "organizational harmony") masking opaque algorithmic evaluation of employee behavioral patterns without verifiable validity or accountability.

---

### Input 9: The Edge Case — Administrative Neutrality
* **Input Text:** 
> "Automated software tool that matches incoming customer support tickets with available agents based solely on timezone and language fluency."
* **Pre-Written Expected Answer:**
  - **Function:** Support ticket routing by timezone and language
  - **Risk Level:** Low/None
  - **Justification:** Purely objective logistical routing based on technical constraints (geography and language) with no behavioral scoring, demographic profiling, or employment impact.

---

### Input 10: The High-Stakes Performance Evaluation Case
* **Input Text:** 
> "Automated bonus allocation system that calculates annual bonuses for corporate executives based on quarterly revenue growth combined with peer feedback sentiment metrics."
* **Pre-Written Expected Answer:**
  - **Function:** Executive bonus calculation and sentiment tracking
  - **Risk Level:** High Risk
  - **Justification:** Combining financial metrics with unstructured "peer feedback sentiment" introduces severe subjective bias into high-stakes financial compensation, where women are frequently penalized for assertiveness or leadership styles.
