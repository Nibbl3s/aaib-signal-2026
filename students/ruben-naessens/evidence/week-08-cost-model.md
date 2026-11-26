# Week 8 — Recruitment architecture cost model

**Design:** [week-08-architecture.md](week-08-architecture.md), Design A  
**Prepared:** 26 November 2026  
**Status:** Scenario budget, not a supplier quote, invoice, implemented system or measured ROI. All workload, labour, timing, hosting and effort values below are assumptions unless explicitly identified as a published model rate.

## 1. Scope and assumptions

- 100 vacancies/month at steady volume = 1,200/year; two reviewers. Existing ATS, staff machines and private access infrastructure are assumed available.
- Plain text only, pasted by staff; manual approved transfer to the ATS. No email integration, OCR, embeddings, vector database, autonomous agent tools or ATS API licence.
- One small private VM runs Python integration, Streamlit UI, SQLite and operational logs. Backup has its own allowance. Storage and log estimates require a quote and sizing check.
- Implementation rate EUR 50/hour; reviewer rate EUR 35/hour; restore-check operator EUR 30/hour. These are planning estimates, not market research or observed salaries.
- Manual complete task 12 minutes/vacancy; AI-assisted complete task 4 minutes, including intake, generation, every-field review, corrections, export and manual ATS transfer. Neither time is measured. Earlier 97- and 39-second observations do not establish this matched comparison.
- All capacity is assumed reusable in the benefit scenario. Payroll savings are not assumed. Prices exclude VAT/taxes; exchange conversion is a planning assumption, not a current exchange-rate quote.
- Existing workplace/ATS licences are marginal EUR 0 only if their terms and spare capacity permit this use. Otherwise recost. No production system may proceed on an unfunded identity/network assumption.

## 2. One-time setup — EUR 2,400

| Cost ID | Architecture component | Work | Hours × rate | Cost |
| --- | --- | --- | --- | ---: |
| S1 | D1–D3, G1 | Define source records, staging schema, retention and backup arrangement | 6 × EUR 50 | EUR 300 |
| S2 | M1 | Adapt/version prompt and schema; baseline API evaluation and cost capture | 6 × EUR 50 | EUR 300 |
| S3 | I1–I3 | Request handling, deduplication, validation, bounded retry and approval-gated export | 14 × EUR 50 | EUR 700 |
| S4 | U1–U2 | Intake/review UI, edit/reject/approve and transfer confirmation | 10 × EUR 50 | EUR 500 |
| S5 | G1–G2, shared host | Role checks, deployment/secrets, logging, failure drills and processing review | 8 × EUR 50 | EUR 400 |
| S6 | U1–U2, G2 | Reviewer training: two staff × two hours | 4 × EUR 50 | EUR 200 |
| **Total** | **All five layers** | **48 hours** | | **EUR 2,400** |

S6 uses a EUR 50 training allowance including facilitation/opportunity cost, rather than the EUR 35 operational review rate. S5 is an internal effort allowance, not a purchased legal opinion or security certification. If external specialists are needed, quote them separately.

## 3. Annual fixed operation — EUR 1,200

| Cost ID | Architecture component | Assumed quantity | Annual cost |
| --- | --- | --- | ---: |
| R1 | Shared private VM: I1–I3, U1–U2, D2 and G1 | EUR 20/month; includes primary disk | EUR 240 |
| R2 | D3 separate encrypted backup storage | EUR 5/month | EUR 60 |
| R3 | G1 error/usage alerts and log allowance | EUR 5/month | EUR 60 |
| R4 | M1 adapter, I1–I3, U1–U2 and G1 maintenance | 12 hours/year × EUR 50 | EUR 600 |
| R5 | G1 regression evaluation and error review | 6 hours/year × EUR 35 | EUR 210 |
| R6 | D3/G2 restore drill | 1 hour/year × EUR 30 | EUR 30 |
| **Total** | **Fixed operation** | **EUR 100/month equivalent** | **EUR 1,200** |

R1/R2/R3 are budget estimates, not verified vendor offers. SQLite and Streamlit have no separate paid licence assumed in this model; configuration/development and hosting are nevertheless charged above. Primary SQLite storage and log tables are not billed as a second database service.

## 4. Variable model usage — V1

**Candidate model:** gpt-5.4-mini-2026-03-17, selected provisionally for this design, not validated on Ruben's test set.

The official [OpenAI model page](https://developers.openai.com/api/docs/models/gpt-5.4-mini), checked 26 November 2026, lists text input USD 0.75 and output USD 4.50 per million tokens, with structured output support. Its regional-processing option has a 10% uplift. The default calculation below is not a claim of EU-only processing. Regional suitability and service access require checking before use.

Assume 4,000 total input tokens (prompt, schema and vacancy) and 1,000 **billable** output tokens per call. Include any charged reasoning tokens in that output assumption; do not count just visible JSON. Use no tools, no caching/batch discount and no fine-tuning. Disable additional reasoning where supported for this bounded task; record actual usage and selected settings in the future pilot.

- USD/call = (4,000 × 0.75 + 1,000 × 4.50) / 1,000,000 = **USD 0.0075**.
- Planning conversion: USD 1 = EUR 0.95.
- Retry assumption: 5% of jobs have one extra call, average **1.05 calls/job**; never unlimited retries.
- Estimated EUR/job = 0.0075 × 0.95 × 1.05 = **EUR 0.00748125**.
- At 1,200 jobs, estimated annual API usage = **EUR 8.98**.
- With the 10% regional uplift, illustrative annual usage = **EUR 9.88**, subject to eligibility and actual terms.
- A 20-case evaluation uses approximately EUR 0.15 at the same token/call assumptions; covered within the allowance below, not an extra paid platform.

**Budget allowance rather than vendor price:** retain **EUR 0.12/job**, or **EUR 144/year** at 1,200 jobs, as a conservative usage envelope aligned with the Week 4 scenario. This includes planned API test traffic and variation in tokens/settings. Do not add EUR 8.98 on top of EUR 144: these are alternative views of the same V1 line.

The allowance does not buy more staff time or an ATS connector. It is a planning envelope, not a contractual per-job cap. The app should impose input/output limits and halt/escalate jobs over the approved limits; record actual provider charges and alert when aggregate spend exceeds the allowed budget. Oversized or unsupported jobs follow the manual path.

## 5. First-year reconciliation

| Cost boundary | Formula | Amount |
| --- | --- | ---: |
| One-time setup | S1–S6 | EUR 2,400 |
| Annual fixed operation | R1–R6 | EUR 1,200 |
| Annual model allowance | 1,200 × EUR 0.12 | EUR 144 |
| **Year-one project budget** | **2,400 + 1,200 + 144** | **EUR 3,744** |
| Operational recruiter labour, H1cost | 1,200 × 4/60 × EUR 35 | EUR 2,800 |
| **All-in assisted workflow, year one** | **3,744 + 2,800** | **EUR 6,544** |
| All-in assisted cost/vacancy | 6,544 / 1,200 | EUR 5.45 |
| Manual comparator | 1,200 × 12/60 × EUR 35 | EUR 8,400 |
| **Potential net first-year capacity value** | **8,400 − 6,544** | **EUR 1,856** |
| Subsequent-year all-in cost | 1,200 + 144 + 2,800 | EUR 4,144 |
| Subsequent-year net capacity value | 8,400 − 4,144 | EUR 4,256 |

**No double counting:** gross released capacity = (12 − 4) × 1,200 / 60 × 35 = EUR 5,600. Subtract project budget EUR 3,744 to get the same EUR 1,856. Either compare complete workflow costs, or subtract project costs from released capacity; do not subtract the EUR 2,800 reviewer labour twice. Corrections are already inside the four-minute workflow estimate.

Using the API estimate instead of the allowance gives year-one project cost EUR 3,608.98 and potential net capacity value EUR 1,991.02. This is a pricing sensitivity, not a second benefit. The conservative EUR 3,744 budget remains the main scenario.

No separate expected incident-loss saving, quality benefit or placement revenue is monetised. There is no evidence yet for such incremental benefits.

## 6. Timing, volume and reuse sensitivity

| Complete assisted minutes/job | Project budget | Assisted labour | Net annual capacity value versus manual |
| --- | ---: | ---: | ---: |
| 4 | EUR 3,744 | EUR 2,800 | EUR 1,856 |
| 8 | EUR 3,744 | EUR 5,600 | **−EUR 944** |
| 10 | EUR 3,744 | EUR 7,000 | **−EUR 2,344** |

At 1,200 jobs, minimum net time saved = 3,744 × 60 / (1,200 × 35) = **5.35 minutes/job**. With a 12-minute manual baseline, assisted total time must stay below approximately **6.65 minutes/job**.

At eight minutes saved, budgeted break-even volume = (2,400 + 1,200) / [(8/60 × 35) − 0.12] = 791.79, so approximately **792 jobs/year**.

If only 50% of released time is reusable, value = EUR 2,800 − EUR 3,744 = **−EUR 944**. Approximately **66.9%** of the assumed released capacity must be usable to cover the budget. This is not cash profit; it depends on actual deployment of saved staff time.

## 7. Month snapshots and scale

These are **illustrative planning points**, not a ramp that sums to the 1,200/year steady-volume scenario.

| Planning point | Jobs that month | Project operation including V1 allowance | Complete review/transfer labour | Setup in month | All-in month cost |
| --- | ---: | ---: | ---: | ---: | ---: |
| Month 1 | 25 | EUR 100 + EUR 3 = EUR 103 | EUR 58.33 | EUR 2,400 | EUR 2,561.33 |
| Month 6 | 100 | EUR 100 + EUR 12 = EUR 112 | EUR 233.33 | EUR 0 | EUR 345.33 |
| Month 12 | 200 | EUR 100 + EUR 24 = EUR 124 | EUR 466.67 | EUR 0 | EUR 590.67 |
| 3× steady monthly volume | 300 | EUR 100 + EUR 36 = EUR 136 | EUR 700 | EUR 0 | EUR 836 |

Monthly fixed EUR 100 is an allocation of annual infrastructure and effort, not necessarily an equal invoice every month. These linear extrapolations assume one-job-at-a-time operation remains acceptable. Check concurrency, review backlog, storage, host performance and staffing before using them as a scale quote. Replacing SQLite or adding a connector creates a revised architecture and new costs.

## 8. Fallback and switching budgets

**H2cost: manual fallback labour**, only for jobs not also counted as assisted. If 5% of annual jobs (60) bypass AI before processing:
- 1,140 assisted × 4/60 × EUR 35 = EUR 2,660.
- 60 manual × 12/60 × EUR 35 = EUR 420.
- Usage allowance for assisted jobs = 1,140 × 0.12 = EUR 136.80.
- First-year total = 2,400 + 1,200 + 136.80 + 2,660 + 420 = **EUR 6,816.80**.
- Net versus all-manual EUR 8,400 = **EUR 1,583.20**.
Failed attempts that consume both staff time and tokens need an additional measured allowance; this bypass scenario is not a zero-cost outage promise.

L1 provider switch contingency = 8 developer hours × EUR 50 + 2 review hours × EUR 35 = **EUR 470**, plus incremental calls, any new subscriptions and extra effort identified in the switch test. This contingency is not included in base operation because no switch has occurred; holding it as cash reserve would increase year-one budget to EUR 4,214 before extra API usage.

## 9. No phantom components check

| Architecture item | Cost accounted for |
| --- | --- |
| D1 source selection/intake | S1 + H1cost; existing staff device/ATS marginal licence assumption |
| D2 staging, approved records and audit tables | S1 + R1; no second hosted database charge |
| D3 backup and restore | S1 + R2 + R6 |
| D4 manual ATS transfer | H1cost or H2cost, plus S6 training; no API connector |
| M1 model, prompt and adapter | S2 + V1 + R4 + R5 |
| I1 requests, input caps and deduplication | S3 + R1 + R4 |
| I2 validation, retry and exception route | S3 + V1 + R4; human correction inside H1cost |
| I3 approved export and transfer log | S3 + H1cost + R1 |
| U1/U2 intake/review interface | S4 + S6 + R1 + R4 + H1cost |
| G1 roles, logs, monitoring and evaluation | S5 + R1 + R3 + R4 + R5 |
| G2 owner, fallback and recovery | S5 + S6 + R6 + H2cost |
| L1–L3 exit preparation | Base source/schema documentation in setup; actual provider change separately costed above |

## 10. Evidence still needed

Obtain a hosting/access quote; confirm existing licence permissions and provider terms; measure total tokens/calls and full staff task time; review quality on representative languages; obtain actual practitioner objections; decide acceptance and retention requirements; revise Design A and recost changed components.

The live Week 8 rubric was not accessible during preparation. This model follows the user's supplied five-layer/cost-consistency requirement but does not certify complete rubric compliance.

*AI-use disclosure: ChatGPT drafted this scenario and checked its arithmetic. All implementation components remain proposals. No agency quote, practitioner interview, implementation, legal review or observed time saving is claimed.*
