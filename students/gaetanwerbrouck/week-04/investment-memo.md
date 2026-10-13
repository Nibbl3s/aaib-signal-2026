# INVESTMENT MEMO — AI Candidate: Invoice Processing

**TO:** CEO, TechCorp  
**FROM:** Gaetan Werbrouck, Business Analyst  
**DATE:** 13 October 2026  
**SUBJECT:** Pilot recommendation — AI-assisted invoice extraction and validation

## Executive summary

I recommend a controlled pilot, not a full rollout. Under the lesson’s assumptions, estimated annual gross economic value is €214,560 versus €26,000 Year 1 cost, but the result depends on validating correction costs and actually using the time freed.

## The problem

TechCorp processes 600 invoices/month at 15 minutes each, or 150 hours/month. A 12% error rate means 72 invoices/month need correction. At an unverified €220 per correction, that is €15,840/month, so Finance must measure the true correction cost before treating it as a saving.

## The proposal

Pilot AI-assisted OCR and extraction for vendor, invoice number, date, VAT and total, with checks against SAP and purchase-order rules. Route low-confidence fields and mismatches to accounts-payable staff; never let the AI approve or pay invoices. Compare time and error rate with a measured baseline, with humans approving exceptions and payments.

## Benefit analysis

| Category | Annual value (€) | Basis |
|---|---:|---|
| Time saved | 56,160 | (150 − 30) hours/month × 12 × €39/hour; capacity value, not automatic cash savings |
| Revenue increase | 0 | No evidenced sales effect claimed |
| Cost reduction | 158,400 | (72 − 12) corrections/month × €220 × 12; €220 is an estimate |
| Risk mitigation | 0 separately | No separate probability/impact estimate; avoids double-counting |
| **Gross economic benefit** | **214,560** | Time capacity + correction savings |
| AI cost, Year 1 | **(26,000)** | €15,000 setup/integration + €8,000 annual AI/service cost (lesson estimate) + €3,000 maintenance (est.) |
| **Conditional net value, Year 1** | **188,560** | Gross value less Year 1 cost, if time capacity is realized |
| Payback after go-live | **~0.85 months (est.)** | €15,000 ÷ ((€214,560 − €11,000 recurring costs)/12); excludes ramp-up |

## Risks and mitigations

Extraction errors could pass through unnoticed; use confidence thresholds, exception queues, source-document checks and sample audits. The €220 correction cost and 2% post-AI error rate may be optimistic; measure both during the pilot. Invoice data may be sensitive, so approve access, retention, security and data-processing terms before using live data.

## Recommendation

**Pilot with conditions.** Agree a baseline and targets for processing time, error rate and total cost, and keep humans accountable for exceptions and payments. Scale only if Finance validates the assumptions and the pilot beats both the current workflow and a conventional OCR/rules-based alternative.

## Sensitivity note

If gross benefits are 50% lower, the estimated Year 1 net value is still €81,280. If saved staff time creates no value, the case is €158,400 estimated correction savings minus €18,200 in costs, or €132,400 net, but still relies on verifying the €220 correction-cost estimate.