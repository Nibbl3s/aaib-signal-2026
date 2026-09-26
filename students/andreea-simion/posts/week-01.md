---
week: 1
title: AI Adoption Is Cheap. Getting People to Use It Is Not.
author: Andreea Simion
beat: The Psychology of AI Adoption in the Workplace.
skill: "Cost literacy"
date: 2026-09-26
---

Your post starts here. Plain Markdown.
# AI Adoption Is Cheap. Getting People to Use It Is Not.

Companies can spend thousands implementing an AI tool and still fail to get employees to use it effectively. I’m interested in the psychology behind that problem: trust, resistance, uncertainty, and motivation all affect whether employees actually adopt AI. But before thinking about those behavioral factors, I wanted to know something simpler: **what would an AI adoption assistant actually cost to run?**

## The Numbers

Imagine a company with **5,000 employees** introducing a new generative AI tool. The company creates an AI “adoption coach” that employees can ask questions such as: *“How should I use AI to summarize this report?”*, *“Can AI help me with this task?”*, or *“Why did the AI give me this answer?”*

Assume each employee has **20 interactions per month**.

That gives:

* 5,000 employees × 20 interactions = **100,000 interactions/month**
* Each interaction uses approximately **1,000 input tokens**
* Each response uses approximately **300 output tokens**

So the monthly token volume is:

**Input:**
100,000 × 1,000 = **100 million input tokens**

**Output:**
100,000 × 300 = **30 million output tokens**

I used OpenAI's current **GPT-5.4 mini** API pricing as the model-cost reference: **$0.75 per 1 million input tokens** and **$4.50 per 1 million output tokens**.

That gives:

* Input: 100 × $0.75 = **$75/month**
* Output: 30 × $4.50 = **$135/month**
* **Total token cost = $210/month**
* **Annual token cost = $2,520**

The class exercise made a similar distinction between token cost and the full business cost. In the EuroShop example, the cheapest token tier actually became the most expensive option because errors created much larger human correction costs.

My €210-equivalent figure is therefore **not the total cost of the AI adoption program**. It excludes the software interface, integration, employee training, monitoring, administration, and the cost of employees dealing with bad AI answers.

## The Insight

The surprising part is how small the token bill is.

A company serving 5,000 employees could theoretically generate **130 million tokens every month for only about $210 in raw model usage** under these assumptions. The expensive part may not be the AI at all.

This changes how I think about the psychology of AI adoption. If the technology itself is relatively inexpensive, the important business question becomes: **why aren't employees using it effectively?**

An employee who distrusts AI, doesn't understand how to prompt it, or is afraid that using it makes their work less valuable can create far more organizational friction than the underlying token bill.

My biggest lesson from Week 1 is therefore the same one I saw in the EuroShop exercise: **token cost is only one part of AI economics**. The real cost of AI adoption may sit in the human behavior surrounding the technology.

## The Question

If the token cost of workplace AI is this small, **how much should companies actually spend on the psychological and organizational side of AI adoption?**

Next, I want to investigate whether better AI adoption is mainly a technology problem—or a human behavior problem.
