# INVESTMENT MEMO — AI Candidate: Invoice Processing

**TO:** CEO, TechCorp  
**FROM:** Gaetan Werbrouck, Business Analyst  
**DATE:** 13 October 2026  
**SUBJECT:** Pilot recommendation — AI-assisted invoice extraction and validation

> **Review status:** Revised after a skeptical pre-review. A real classmate review is still required; record their feedback in peer-review-record.md and make any resulting final edits before submitting.

## Executive summary

I recommend a controlled pilot of AI-assisted invoice extraction, not an immediate full rollout. Under the lesson’s worked-example assumptions, annual gross economic value is estimated at €214,560 against an estimated Year 1 cost of €18,200, giving €196,360 in conditional net value; the result depends most on whether error correction really costs €220 per error and whether saved staff time is put to productive use.

## The problem

TechCorp processes 600 invoices per month and spends 15 minutes per invoice on manual entry: 150 hours/month. Its stated 12% error rate means about 72 invoices/month need correction. At the lesson’s estimated €220 per correction, current correction cost is €15,840/month. The €220 is not a measured TechCorp figure, so Finance must validate it before this benefit is treated as cash savings.

## The proposal

Pilot OCR and AI-assisted extraction for vendor name, invoice number, date, VAT and total, with validation against SAP fields and purchase-order rules. Low-confidence fields and mismatches should be routed to accounts-payable staff; the system must not approve or pay invoices autonomously. Compare the pilot against a measured baseline and use human approval throughout.

## Benefit analysis

| Category | Annual value (€) | Basis |
|---|---:|---|
| Time saved | 56,160 | (150 − 30) hours/month × 12 × €39/hour; capacity value, not automatic cash savings |
| Revenue increase | 0 | No evidenced sales effect claimed |
| Cost reduction | 158,400 | (72 − 12) corrections/month × €220 × 12; €220 is an assumption |
| Risk mitigation | 0 separately | No independent probability/impact estimate; avoids double-counting error savings |
| **Gross economic benefit** | **214,560** | €56,160 + €158,400 |
| AI cost, Year 1 | **(18,200)** | €15,000 setup/integration + €3,000 maintenance + €200 usage allowance (all estimates) |
| **Conditional net value, Year 1** | **196,360** | €214,560 − €18,200, only if the capacity value is realized |
| **Cash-like case if time is not redeployed** | **140,200** | €158,400 estimated correction savings − €18,200 Year 1 cost |
| Payback after go-live | ~0.85 months (est.) | €15,000 setup ÷ ((€214,560 − €3,200 recurring costs)/12); excludes rollout ramp-up |

## Risks and mitigations

First, incorrect extraction may pass through unnoticed; use confidence thresholds, exception queues, source-document checks and regular sample audits. Second, the €220 correction cost and 2% future error rate may be over-optimistic; measure actual correction time and error rates during the pilot. Third, invoice data may be commercially sensitive or contain personal data; approve data retention, access controls, security terms and any data-processing agreement before using live invoices.

## Recommendation

**Pilot, with conditions.** Use a representative invoice sample, a documented baseline and agreed targets for processing time, error rate and total cost; keep a human responsible for exceptions and payment approval. Scale only if Finance verifies the assumptions and the pilot improves on the current workflow and a conventional OCR/rules-based alternative.

## Sensitivity note

If gross benefit is 50% lower, it becomes €107,280 and the modeled Year 1 net value is still €89,080 after estimated cost. If the time saved produces no operational value, the remaining estimated error-correction benefit gives €140,200 net before any additional costs, but this still depends heavily on the unverified €220 correction-cost assumption. These are scenarios, not guaranteed returns.