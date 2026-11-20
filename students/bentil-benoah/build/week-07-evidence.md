# Week 7 — Lock-in Detection: Build Evidence

**Student:** Bentil Benoah Boakye\
**Track:** 4 ECTS\
**Beat:** AI in ERP and Business Process Automation

## Use case

My Build is a prototype customer-enquiry classifier for a hypothetical Belgian SME using Odoo.

The five required categories are:

1. Order Status
2. Invoice/Payment
3. Return/Refund
4. Product Issue
5. Other

The Odoo integration has not been implemented.

## Local model test

Codex helped me run my existing ten synthetic customer enquiries through Llama 3.2 3B using Ollama.

Each enquiry was tested twice.

| Test | Exact category-name matches |
| --- | --- |
| Week 2 cloud test, run 1 | 10/10 |
| Week 2 cloud test, run 2 | 10/10 |
| Week 7 Ollama test, run 1 | 2/10 |
| Week 7 Ollama test, run 2 | 2/10 |

The local result was 20%, compared with 100% in the historical cloud log, an 80 percentage-point difference under the strict exact-label matching rule.

These tests were conducted at different times through different interfaces. The comparison is limited and should not be treated as a controlled benchmark.

## Observed failure

For the double-payment enquiry, the local model returned:

- Run 1: `1. Order Status`
- Run 2: `2`

Neither response matched the required exact category-name format.

The local model frequently returned category numbers instead of category names. This shows a formatting problem and inconsistent responses.

The exact-match results do not establish how many replies were semantically correct.

## Lock-in assessment

My provisional score for the cloud prototype is 7/15.

| Dimension | Score | Reason |
| --- | --- | --- |
| Data portability | 1 | Prompt and test files are portable Markdown |
| Service stability | 2 | Provider terms do not guarantee an unchanged service |
| Pricing | 2 | No long-term fixed subscription price |
| Feature dependency | 2 | Local model produced substantially different output formats |
| Migration cost | 0 | Estimated two-day prototype migration |
| **Total** | **7/15** | Provisional assessment |

This score concerns the prototype, not a deployed Odoo system.

## Migration estimate

Estimated work: 16 hours.

Assumed hourly cost: €50.

**Estimated prototype switching cost: €800.**

This includes connector changes, validation, testing and handover. It is not a production quotation.

## Costs

Local Ollama inference had no per-call provider fee, but hardware, electricity and maintenance still matter.

The historical cloud test cost is unknown. The Week 6 cost projection used assumptions rather than a measured bill.

## Proposed next steps

**Week 1:** Preserve test evidence and reject invalid classification labels.

**Month 1:** Develop a provider adapter and test more difficult enquiries.

**Day 90:** Rehearse switching models and compare errors before connecting to a live workflow.

## Limitations and AI assistance disclosure

The test set contained only ten synthetic enquiries, tested twice. The local and cloud tests were not run under identical conditions.

Codex assisted with running the local Ollama tests. The results and limitations are reported rather than presenting the AI-generated outputs as independently verified production performance.

This document summarizes the test evidence. The original raw outputs should be retained separately.
