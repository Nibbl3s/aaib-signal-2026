# What Does an AI-Powered ERP Customer Enquiry Classifier Actually Cost?

*Signal Post 6 — Bentil Benoah — Beat: AI in ERP and Business Process Automation*

## Why I looked at this
A lot of ERP software now says it uses AI to sort customer emails. Everyone says it is cheap. I wanted to see if that is true, so I worked out the cost of my own Week 2 classifier.

## The use case
Imagine a company that sells products to other businesses and uses an ERP system. Customers send questions by email. The AI reads each question and puts it in one of five groups: Order Status, Invoice/Payment, Return/Refund, Product Issue or Other. The AI only answers with one word or two, so the answers are very short. I assume every customer sends 5 questions a day, 30 days a month.

## The numbers
On 30 October 2026 I tested my prompt in Google AI Studio (Gemini 3.8 Flash) with one of my test questions. AI Studio showed that my prompt was **42 input tokens**. That number is real. But the answer never came back, because I had no API key connected. So I do not have a real number for the output. I guessed **5 output tokens**, because the answer is just a category name.

For the price I used Gemini 3.1 Flash-Lite: $0.25 per million input tokens and $1.50 per million output tokens (course AI Pricing Reference, 7 September 2026).

One call costs: 42 × $0.25/1M + 5 × $1.50/1M = **$0.000018**. That is almost nothing.

| Customers | Calls per day | Per day | Per month | Per year |
|---|---|---|---|---|
| 100 | 500 | $0.009 | $0.27 | $3.24 |
| 1,000 | 5,000 | $0.09 | $2.70 | $32.40 |
| 10,000 | 50,000 | $0.90 | $27.00 | $324.00 |

Even with an expensive model (gpt-5.6-sol), 10,000 customers would only cost about $540 a month.

## The real cost: mistakes
The AI costs very little. Mistakes cost a lot more. When the AI puts a question in the wrong group, an employee has to move it. I guess that takes 2 minutes. At €33 an hour, that is **€1.10 per mistake**.

In Week 2 my classifier got 10 out of 10 right, two times. That sounds perfect, but it was only 20 test questions that I made up myself. That is not enough to know how it works in real life. So I also tried a more realistic 5% mistake rate. With 10,000 customers that is 75,000 mistakes a month, or **€82,500 a month**. The AI itself only costs about €25. The mistakes cost much more than the AI.

## When does it stop being worth it?
Without AI, an employee needs about 1 minute to sort each question, so about **€0.55**. The AI is worth it as long as the mistakes cost less than that. With €1.10 per mistake, that is up to about a **50% mistake rate**. But if a mistake costs more, for example €5 because a refund gets delayed, the limit drops to about **11%**. The number of customers does not change this.

## What I learned
The price of the AI is not the important part. The important part is how often it makes mistakes and how much each mistake costs. My test was too small to know that for sure. Next time I would test it on a few hundred real customer emails.

## My question
How many real emails do you need to test before you can trust the mistake rate?
