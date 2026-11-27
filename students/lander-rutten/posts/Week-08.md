# What Designing a €45K AI System Taught Me About Architecture and Real-World Constraints

Before this week’s lesson on design defense, I thought building an AI solution was mostly about finding a good model and writing a clever prompt. What really stood out to me during this session—and honestly changed how I look at AI projects—was seeing how quickly a "great" AI idea falls apart when it hits real business constraints. When we had to design an integration for a company with an old database, a strict €50,000 budget, and only three months to build it, I realized that the AI model itself is actually the smallest part of the puzzle. The real challenge is connecting it safely to existing systems and being able to defend every single euro and design choice to a skeptical board.

## Applying the Lesson to HR: Colruyt Group

This insight immediately reminded me of high-volume recruitment in Belgium, such as at **Colruyt Group**. Every year, Colruyt receives over 100,000 job applications across Dutch, French, and English, especially for store and warehouse roles. Their HR team manages everything in **SAP SuccessFactors** and collaborates through Microsoft 365.

If I were asked to design an AI screening assistant for them with a realistic **€45,000 Year-1 budget**, **3 months**, and 2 internal developers, I would no longer start by picking the newest AI model. Instead, I learned this week to start with the hardest rules: strict **GDPR and EU AI Act compliance** (no personal candidate data leaking to external servers, and a human always making the final decision) and **zero downtime** if the AI breaks.

## How I Would Build It Across Five Layers

Breaking the system into five layers—a framework from this week’s class that I found super practical because it forces you not to skip boring details like backups and privacy—makes the design clear and safe:

1. **Data Layer:** When a candidate uploads a resume (CV) into **SAP SuccessFactors**, our system copies it into a secure European database. Before any AI sees it, a simple script strips out personal details—removing names, addresses, ages, and phone numbers—and replaces them with an anonymous ID.
2. **AI Model Layer:** I applied a lesson from earlier in this course when I tested running my own job-requirement tool on a small local model (`llama3.2` 3B), which made way too many mistakes and invented requirements. That experience taught me not to host a weak local model just to save a few cents. Instead, I would connect to **`gemini-3.5-flash-lite`** on European servers through a universal API wrapper ($0.30/1M input tokens, $2.50/1M output tokens). Including the ~35% extra tokens needed for Dutch and French, screening one CV costs only **~€0.0011**.
3. **Integration Layer:** Our 2 internal developers build a lightweight Python connector linking SAP, the privacy filter, and the AI wrapper. One of my favorite takeaways from this week is designing a clear backup plan for failure: if the AI goes offline, resumes simply flow into the normal SAP inbox unranked so recruiters can keep working without any interruption.
4. **Interface Layer:** I learned that building a brand-new app wastes time and money. Recruiters stay inside **SAP SuccessFactors** and **Microsoft Teams**, seeing a short bullet list of matched skills alongside exact quotes from the CV. Because we need a strict human checkpoint, the AI never rejects anyone; a recruiter always reviews the summary first.
5. **Governance Layer:** Every AI output, prompt version, and human decision is logged in a secure European **audit database**, while a dashboard tracks costs and error rates. Because AI in hiring is classified as **High-Risk** under the EU AI Act, human oversight and fairness checks across Dutch and French candidates are built in from day one.

## What I Learned About Defending a Design

The toughest part of this week—and the most valuable—was preparing for the board’s hardest questions:

* **Why not just use built-in SAP AI or Microsoft Copilot?** Enterprise add-ons charge per employee across thousands of staff—easily costing over €100,000 per year—while giving little control over Belgian privacy masking. Our €45,000 setup targets one specific bottleneck while keeping full control.
* **What does this cost at 3× scale?** For 30,000 store and logistics CVs per year (2,500/month), AI tokens cost just **€2.75/month**. Even if 10% of CVs need a 3-minute recruiter fix (€2.20 each), correction costs are **€550/month**—well below the €16,150+ saved annually. At 3× scale (90,000 CVs/year), AI tokens still cost only **€8.25/month**.
* **Are we locked into one vendor?** No, the lock-in risk is low (score 5/15). Because all resumes stay in SAP and our wrapper uses standard JSON formats, switching to Claude or Mistral takes **under 4 hours**.

## My Final Takeaway & Open Question

Overall, I really enjoyed stepping into the role of an architect this week because it tied everything from the past two months together—token math, error costs, lock-in risks, and real-world limits. The one question I am still thinking about for my own design is **human over-trust**: how do we design the recruiter’s screen so busy staff actually check the CV quotes instead of blindly clicking "approve" on every AI recommendation?
