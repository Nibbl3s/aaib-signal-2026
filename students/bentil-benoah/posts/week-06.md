# What Does an AI-Powered ERP Customer Enquiry Classifier Actually Cost?

*Signal Post 6 — Bentil Benoah — Beat: AI in ERP and Business Process Automation*

## Hook
Every ERP vendor now sells "AI-powered" ticket routing. The pitch is that it is cheap. I costed my own Week 2 classifier to check — and the token bill turned out to be the least interesting number.

## The use case
A B2B distributor running an ERP receives customer enquiries by email and portal. An AI model reads each enquiry and routes it to one of five queues: Order Status, Invoice/Payment, Return/Refund, Product Issue or Other. The output is one label, so outputs are tiny. I assume each customer ("user") sends 5 enquiries per day, 30 days per month.

## The numbers
I ran my classifier prompt with a real test enquiry in Google AI Studio (Gemini 3.8 Flash) on 30 October 2026. AI Studio counted **42 input tokens** (measured). The run stalled before returning a response because no API key was attached, so I have **no measured output tokens**. I assume **5 output tokens** (one category label) — an assumption, not a measurement.

Pricing: Gemini 3.1 Flash-Lite, $0.25 / 1M input and $1.50 / 1M output (course AI Pricing Reference, snapshot 7 September 2026).

Cost per call = 42 × $0.25/1M + 5 × $1.50/1M = **$0.000018**.

| Users | Calls/day | Daily | Monthly | Annual |
|---|---|---|---|---|
| 100 | 500 | $0.009 | $0.27 | $3.24 |
| 1,000 | 5,000 | $0.09 | $2.70 | $32.40 |
| 10,000 | 50,000 | $0.90 | $27.00 | $324.00 |

Even a premium model (gpt-5.6-sol, $5/$30) would cost $540/month at 10,000 users. For a classifier, tokens are almost free.

The real cost is errors. A misrouted enquiry needs an agent to re-route it — I assume 2 minutes at the course's €33/hour loaded rate, **€1.10 per error**. In Week 2 my classifier scored 10/10 in two runs (0% errors). But 20 synthetic inputs prove very little: with 0 errors in 20 trials the true error rate could still plausibly be up to ~15% (rule of three). So I also model a realistic **5%** error rate: at 10,000 users that is 1.5M calls × 5% = 75,000 errors × €1.10 = **€82,500/month** — roughly 3,300 times the token bill (€25).

## The break point
The value of the AI is the manual triage it replaces: I assume 1 minute per enquiry, **€0.55**. Per enquiry, the AI saves €0.55 and costs €0.00002 in tokens plus (error rate × €1.10). The economics break when the error rate reaches about **50%**. That sounds safe, but it rests on one assumption: the cost of a misroute. If a wrong route delays a refund and costs €5 of handling (the course's support figure), the break point drops to **11%**. Note that user count does not appear in this equation at all.

## The insight
For ERP automation, the pricing page is a distraction. What decides the business case is the error rate and what an error costs downstream — and my "0% error" result is from a test set far too small and too clean to trust. Before scaling, I would test on a few hundred real, messy enquiries.

## The question
How many real enquiries do you need to test before an error-rate estimate is good enough to put in a budget?
