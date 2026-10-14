---
week: 4
title: "Evidence - TechCorp Value Audit (practice lab)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Value quantification"
date: 2026-10-14
---

# TechCorp Value Audit (practice lab)

TechCorp is the course's composite B2B SaaS company in Ghent: 500 employees, €42M revenue, 1,200 customers. All figures below come from the course profile unless marked (est.).

## 1. Value chain map

| Activity | Type | AI potential | Why (for every Yes) |
|---|---|:-:|---|
| Product development | Primary | Yes | Documentation is 3 sprints behind and 120 pull requests a week take 2–4 h of review; drafting docs from code is pattern work an engineer can check. |
| Marketing and sales | Primary | Yes | Reps spend 6 h a week on admin, proposals take 3 days and CRM data is 40% incomplete; drafting proposals and filling the CRM from emails is repetitive text work. |
| Service delivery | Primary | Maybe | Value depends on the product itself, not on a repeated text task. |
| Customer support | Primary | Yes | 4,200 tickets a month, 30% repetitive, and agents spend 2 h a day searching the knowledge base. |
| Customer success | Primary | Maybe | Churn prediction (8% churn, 1 CSM per 120 accounts) is classical machine learning, not a language model. |
| Finance | Support | Yes | 600 invoices a month at 15 min each with a 12% manual entry error rate; invoice extraction is the job my own Build tested. |
| HR | Support | Yes | 60% of HR emails are repeat policy questions; a policy assistant that cites the handbook and escalates to a person fits. |
| IT and security | Support | Maybe | 70% of 200 helpdesk tickets are password resets: that is a self-service portal job, not an AI job (Week 2 no-AI check). |
| Legal and compliance | Support | Maybe | 25 contracts a quarter is too little volume to justify a build. |
| Data and analytics | Support | Maybe | 50 recurring reports a month is a BI automation job first. |
| Operations | Support | Maybe | Missed renewals (3 last year) need a calendar rule, not AI. |

**Three with the most value potential:** customer support, finance invoices, HR policy questions.

## 2. Five-criterion filter

| Process | Repetitive? | Pattern-based? | Error-tolerant? | Cost-justifiable? | Verifiable? | Verdict |
|---|:-:|:-:|:-:|:-:|:-:|---|
| Support reply drafting | Yes | Yes | Yes | Yes | Yes | Strong |
| Finance invoice extraction | Yes | Yes | Yes | Yes | Yes | Strong |
| HR policy Q&A | Yes | Yes | Partly | Partly | Yes | Strong, with guardrails |
| Sales proposal drafting | Yes | Yes | Yes | Partly | Partly | Strong |
| Engineering documentation | Yes | Yes | Yes | Partly | Partly | Candidate |
| IT password resets | Yes | No | Yes | Yes | Yes | No AI needed: self-service reset |
| HR resume screening | Yes | Yes | No | Partly | Partly | Risky: high-risk use under the EU AI Act, bias |
| Legal contract review | No | Yes | No | Partly | Partly | Risky |

## 3. Top three candidates

**1. Customer support reply drafting**
- Repetitive: 4,200 tickets a month.
- Pattern-based: 30% are repeat questions with known answers.
- Error-tolerant: an agent reads every draft before it is sent.
- Cost-justifiable: 60 agents lose about 2 h a day searching the knowledge base.
- Verifiable: each draft can be checked against the knowledge base article it cites.
- **AI does:** finds the right article and drafts the reply. **Human does:** checks, edits and sends; handles complaints and edge cases.

**2. Finance invoice extraction**
- Repetitive: 600 invoices a month.
- Pattern-based: the same fields on every invoice.
- Error-tolerant: every entry is reviewed before posting.
- Cost-justifiable: 150 h a month of manual entry with 12% errors.
- Verifiable: each field is checkable against the source document.
- **AI does:** pre-fills supplier, amount, VAT and dates, and says "not found" when a field is missing. **Human does:** reviews and posts; handles unreadable or unusual invoices.

**3. HR policy questions**
- Repetitive: 60% of HR emails are repeat questions.
- Pattern-based: answers come from one handbook.
- Error-tolerant: only partly. A wrong policy answer is a liability (the Air Canada pattern), so every answer must cite the handbook and anything unclear goes to HR.
- Cost-justifiable: partly, as volume per week is not given.
- Verifiable: each answer links to the handbook section.
- **AI does:** answers with a citation. **Human does:** owns the handbook, answers anything without a clear source, and handles personal cases.

## 4. Benefit table: finance invoice extraction

Loaded rate: accounts payable analyst €39/hr (course loaded-cost reference).

| Category | Current state | With AI | Annual value (€) |
|---|---|---|---:|
| Time saved | 7,200 invoices × 15 min | 5 min review each (est.) | 7,200 × 10 min × €39/60 = **46,800** |
| Revenue increase | No revenue effect | – | **0** |
| Cost reduction | 12% entry errors, about 20 min to correct (est.) | 4% errors after review (est.) | 7,200 × 8% × 20 min × €39/60 = **7,488** |
| Risk mitigation | Wrong or duplicate payment (est. 2% a year × €50,000) | Halved by review (est.) | 2% × €50,000 × 50% = **500** |
| **Gross benefit** | | | **54,788** |
| Less AI cost, year 1 | Tokens 7,200 × $0.012 × 0.92 = €80; build + integration €23,000; maintenance €6,000; redo of AI errors at my measured 21% on clean invoices: 1,512 × 10 min × €39/60 = €9,828 | | **−38,908** |
| **Net benefit, year 1** | | | **15,880** |
| **Payback** | €23,000 ÷ ((€54,788 − €15,908) ÷ 12) | | **7.1 months** |

Token basis: 3,000 input and 500 output tokens per invoice (est.) at the course's standard tier ($2 / $12 per million).

---

*AI disclosure: I used Claude to structure this lab and check the arithmetic; the Yes/Maybe/No calls, the filter verdicts and the estimates marked (est.) are mine.*
