# Eight Minutes Saved, or Eight Minutes of AI FOMO? A Recruiter's Value Audit

*Week 4 — The Skeptic | Recruitment and multilingual HR workflows*

The most convincing AI demo in recruitment is not necessarily the best investment. A model can read a vacancy and neatly divide its qualifications into mandatory and preferred requirements. It looks useful immediately. But the business question is harder: **how much time survives after a recruiter checks the output, and what does a wrong classification cost?**

My AI Build starts with a prompt that extracts qualifications from job advertisements into JSON. It sorts education, experience, technical skills and language requirements under two headings: mandatory and nice-to-have. It explicitly says not to invent qualifications. That structure is helpful, especially when a recruiter handles multilingual vacancies. It is not proof of return on investment.

## Put a price on the work

I modelled a small recruitment operation processing 100 vacancies a month, or 1,200 a year. These are **scenario assumptions**, not measurements from an agency. Suppose a recruiter spends 12 minutes manually extracting requirements. With AI, the extraction is fast, but reviewing and correcting the output still takes four minutes. The genuine saving would be eight minutes per vacancy.

At an illustrative fully loaded labour cost of €35 per hour, the annual capacity value is 1,200 × 8 ÷ 60 × €35 = **€5,600**. I then budgeted €2,400 for setup, tests and training; €1,200 per year for monitoring and maintenance; and €0.12 per vacancy for model usage, or €144 annually. First-year costs therefore total **€3,744**. The difference is **€1,856**, equivalent to a **49.6% first-year return on the estimated cost**, if all the assumptions hold.

That result is attractive but not spectacular. More importantly, €5,600 in time value is not automatically €5,600 in the bank. If a recruiter uses those saved minutes for higher-value candidate conversations, the agency may benefit. If the minutes are scattered across a day and cannot be productively reused, the financial benefit shrinks.

## Audit four kinds of value

I separated the case into productivity, quality, risk and revenue. Productivity is the €5,600 capacity estimate. For quality, imagine that the share of vacancies needing a ten-minute correction falls from 8% to 4%. The formula is 1,200 × 4% × 10 ÷ 60 × €35, producing **€280** in potential avoided rework. For risk, imagine two fewer incidents per year at an expected cost of €150 each: **€300**. For revenue, two additional successful placements with €1,500 contribution each would be **€3,000**.

Those last three figures are *hypotheses*, not results. The quality figure might already be captured in the four-minute review assumption, so adding it again could double count. The risk estimate needs incident data, and a quicker extraction process does not automatically cause extra placements. I deliberately exclude all three from the base-case ROI. A spreadsheet can make uncertain assumptions look precise; that is not the same as evidence.

## Where the FOMO hides

The temptation is to compare manual work with an almost instantaneous model response. That leaves out the human review. In recruitment, misreading “French preferred” as “French required” could wrongly narrow a candidate pool. The tool should prepare a structured draft, not decide who qualifies. My existing prompt says not to invent facts, but that instruction alone cannot guarantee accuracy.

The sensitivity test exposes the fragile economics. If the net saving is only four minutes instead of eight, annual capacity value falls to €2,800 and the first-year case becomes **negative €944**. At ten minutes saved, it rises to **positive €3,256**. Under the eight-minute base case, the project needs roughly **792 vacancies annually** to cover its estimated first-year costs. Volume, review time and error rates matter much more than a flashy demonstration.

## What I would fund

I would approve a **limited pilot**, not a rollout. Twenty varied vacancy texts, including multilingual examples, should be processed manually and with AI plus human review. I would record end-to-end minutes, omissions, invented requirements, mandatory/preferred misclassifications and corrections. The human reviewer remains responsible for every final field. A practitioner interview should then challenge the workload and timing assumptions before anyone signs a budget.

My current recommendation is conditional: proceed only if the pilot shows meaningful time savings without unacceptable classification errors. The real ROI is in verified, reusable recruiter capacity. The FOMO is treating a well-formatted JSON response as proof that an agency has saved money.

---
*AI-use disclosure: I used ChatGPT to help structure this value audit, calculate scenario economics and draft the post. The recruitment extraction prompt is my existing project. All numerical business assumptions in this post are illustrative and must be tested; I have not claimed to conduct an interview or peer review.*
