# Signal Post 2 — The Cost of Getting AI Wrong

| Field | Details |
|---|---|
| Week | Week 2 |
| Title | The Cost of Getting AI Wrong |
| Author | Subhan Naeem |
| Beat | AI in Business Consulting |
| Skill | Capability skepticism |
| Date | 2026-01-10 |
# Signal Post 2 — The Cost of Getting AI Wrong

Last week, I looked at the cost of AI in business consulting. My main question was simple: **how much does AI cost a consulting firm?**

I found that the direct AI cost can be surprisingly small, but that does not necessarily mean AI is cheap. If consultants have to spend time checking and correcting unreliable outputs, the real cost can become much higher.

This week, I wanted to take that idea one step further:

> **When is AI actually worth using in consulting?**

To explore this, I built a simple **AI Market-Entry Risk Detector**. The tool takes information about a potential international market and classifies it as **Political Risk, Economic Risk, Legal/Regulatory Risk, Operational Risk, or No Major Risk**.

I created **15 test cases** and decided the expected answers before running the AI. I then ran each case twice.

## Initial Results

The initial results were positive. The AI classified all 15 cases correctly and produced consistent answers across the two runs.

However, when I introduced more difficult cases, I found a more interesting limitation.

One case contained both a **20% tax increase** and a **sharp fall in the country's currency**. These represent two different types of risk. However, my prompt required the AI to choose exactly one category.

The AI selected **Legal/Regulatory Risk** and mentioned the currency decline in its explanation.

The AI had followed my instructions correctly. The problem was that **my instructions simplified the real consulting problem**.

## What This Changed for Me

This changed the way I think about AI reliability.

A tool does not necessarily have to give a factually wrong answer to be problematic. It can produce a consistent answer while still leaving out part of the information that a consultant needs.

I also considered whether AI was even necessary for this task.

For simple, structured rules, a **spreadsheet or rules-based system** could perform the classification without AI. For example, a spreadsheet could flag a tax increase above a chosen threshold or a currency decline beyond a defined percentage. The rules would be transparent, repeatable, and easier to audit, without the additional cost and uncertainty of AI-generated classifications. AI becomes more interesting when the information is unstructured, large in volume, or requires interpretation.

## Connecting Back to Week 1

This connects back to my Week 1 question about cost.

The real cost of AI is not only the price of processing tokens. It also includes:

- The time required to verify outputs
- The consequences of missed information
- The human judgement needed around the AI

This gives me a bigger question to investigate over the coming weeks:

> **What does it take to make AI genuinely useful and trustworthy in business consulting?**

## What I Want to Explore Next

I want to explore this from several angles rather than assuming that AI is automatically good or bad for consulting.

Some questions I want to investigate are:

- If the tool is accurate, how much does verification still cost?
- If another model performs better, is it worth the additional cost?
- What happens when users deliberately try to break the system?
- What changes when the tool moves from an experiment into an actual consulting workflow?

## Final Reflection

For me, the interesting part of AI in consulting is therefore no longer simply whether AI can do the task.

It is whether the **entire system around the AI** — the prompt, verification process, human judgement, cost, and controls — makes the result useful enough for a real business decision.
