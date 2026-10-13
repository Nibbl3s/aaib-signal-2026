# Week 4 — Applying the 5-Criterion AI Candidate Filter

## Screening table

| Process | Repetitive? | Pattern-based? | Error-tolerant? | Cost-justifiable? | Verifiable? | Verdict |
|---|---|---|---|---|---|---|
| Finance invoice extraction | Yes: 600 invoices/month | Yes: invoices contain recurring fields | Yes, if an AP employee approves exceptions and payments | Yes: 12% error rate and material correction costs | Yes: compare extracted fields with invoice and SAP | **Strong candidate with human approval** |
| Customer Support ticket triage | Yes: 4,200 tickets/month | Yes: recurring topics and knowledge-base matches | Yes, if AI suggests/routs and agents handle uncertain tickets | Yes: 30% repetitive tickets and substantial search time | Yes: routing accuracy, handling time, reopen rate and CSAT | **Strong candidate with guardrails** |
| Data & Analytics recurring reports | Yes: 50 recurring reports/month | Yes: recurring SQL/data patterns | Yes, if an analyst validates queries and totals | Potentially: 100 hours/month currently spent building/rerunning reports | Yes: compare against trusted queries and known totals | **Strong candidate with analyst verification** |
| Marketing content creation | Yes: monthly content and campaigns | Yes: templates, tone and content patterns | Usually, if published content is approved | Maybe: current output is four blog posts/month, but revenue impact is uncertain | Partly: factual accuracy is checkable, business impact is slower to attribute | **Pilot narrowly; don't assume revenue lift** |
| Engineering code review | Yes: 120 pull requests/week | Yes: code patterns and test cases | Partly: developers must review every suggestion | Potentially, but review time and defect costs need measurement | Partly: tests help, but not every bug is caught by tests | **AI-risky; human review required** |
| HR resume screening | Yes: 300 resumes/month | Yes: resumes have recurring fields | Only with careful human oversight; ranking can create fairness risks | Borderline based on 15 hours/month of scanning | Partly: selection outcomes are not a complete measure of fairness | **Do not automate hiring decisions; limited assistive use only** |
| IT password-reset helpdesk | Yes: 70% of 200 helpdesk tickets are password resets | Mostly rule-based, not a language-understanding problem | Yes with identity checks | Some time is spent, but the task is routine | Yes | **Use conventional self-service automation, not AI** |
| Operations vendor renewals | Yes: 80 active contracts | Contract terms have patterns, but dates are structured data | Yes with owner approval | Potentially: three missed renewals caused higher auto-renewal rates last year | Yes: alert delivery and missed-renewal rate | **Start with a calendar/contract-management rule; consider AI only for clause extraction** |

## Top 3 candidates and how each passes the criteria

### 1. Finance: invoice extraction and validation

- **Repetitive:** 600 invoices are processed each month.
- **Pattern-based:** vendor, invoice number, dates, VAT and totals appear in recurring document layouts.
- **Error-tolerant:** AI extracts fields, but the AP team checks exceptions and authorizes payment.
- **Cost-justifiable:** the case includes 150 hours/month of processing and a 12% manual-entry error rate.
- **Verifiable:** extracted values can be checked against the invoice image and the SAP record.
- **What AI does:** reads invoices and proposes structured fields, highlighting mismatches or missing values.
- **What humans do:** handle exceptions, resolve supplier disputes and approve payments.

### 2. Customer Support: ticket triage and knowledge-base suggestions

- **Repetitive:** 4,200 tickets arrive each month.
- **Pattern-based:** many tickets repeat known questions and can be matched to existing knowledge-base entries.
- **Error-tolerant:** an agent reviews proposed routing and any response before it is sent, particularly for billing or account-specific issues.
- **Cost-justifiable:** 30% of tickets are repetitive and agents spend two hours a day searching the knowledge base.
- **Verifiable:** measure routing accuracy, time to first response, reopen rate, escalation rate and customer satisfaction.
- **What AI does:** assigns a likely category and suggests relevant articles or a response draft.
- **What humans do:** approve customer-facing replies and handle exceptions and escalations.

### 3. Data & Analytics: recurring report preparation

- **Repetitive:** 50 recurring reports are built or rerun each month.
- **Pattern-based:** recurring queries and report layouts provide reusable patterns.
- **Error-tolerant:** an analyst verifies query logic and totals before the report is circulated.
- **Cost-justifiable:** the stated workload is about 100 analyst hours per month.
- **Verifiable:** outputs can be compared with approved SQL queries, source totals and prior-period checks.
- **What AI does:** drafts a query or report summary from an approved request and schema.
- **What humans do:** validate the query, investigate anomalies and interpret what the data means for a decision.

The framework filters out “AI because it is possible.” The best candidates have a repeated workload, a measurable baseline, human review before consequential action, and a test that can show whether the tool is actually right.