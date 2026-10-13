# Week 4 — Benefit Quantification: TechCorp Invoice Processing

## Candidate and baseline

**Candidate:** AI-assisted invoice data extraction and validation in Finance.

TechCorp processes 600 invoices/month. Manual processing takes 15 minutes per invoice, and the error rate is 12%. For the modeled AI process, use the assignment's worked-example assumptions: 3 minutes per invoice and a 2% error rate. The €220 average correction cost and €8,000 AI estimate are examples supplied by the lesson; implementation cost is estimated separately below.

## Benefit table

| Benefit category | Current state | With AI | Annual value and formula |
|---|---|---|---|
| Time saved | 600 × 15 min = 150 hours/month | 600 × 3 min = 30 hours/month | **€56,160/year** = (150 − 30) hours/month × 12 × €39/hour. This is freed capacity and only becomes cash savings if TechCorp redeploys the time or reduces paid work. |
| Revenue increase | No direct revenue effect established | Not claimed | **€0**. No defensible evidence that faster invoice processing generates extra sales, so do not invent a revenue uplift. |
| Cost reduction | 12% × 600 = 72 errors/month; 72 × €220 = €15,840/month | 2% × 600 = 12 errors/month; 12 × €220 = €2,640/month | **€158,400/year** = (€15,840 − €2,640) × 12. The €220 correction cost is a lesson-provided estimate, not a measured TechCorp figure. |
| Risk mitigation | No separate probability/impact estimate supplied | Not separately quantified | **€0 separately counted**. Error-correction savings already appear above; assigning another risk value could double-count the same benefit. |
| **Gross benefit** |  |  | **€214,560/year** = €56,160 + €158,400 |
| Less: AI cost, Year 1 |  |  | **€18,200 (est.)** = €15,000 implementation/integration + €3,000 maintenance (20% of implementation) + €200 usage/OCR/API allowance. |
| **Net benefit, Year 1** |  |  | **€196,360** = €214,560 − €18,200 |
| Payback period |  |  | **About 0.85 months after go-live** = €15,000 implementation ÷ ((€214,560 − €3,200 recurring costs)/12). This excludes time to deploy. |

## Assumptions and checks

- The 15-minute manual time and 12% error rate come from the TechCorp profile. The 3-minute post-AI time, 2% error rate and €220 correction cost come from the lesson's worked example, so they are assumptions to validate in a pilot, not proven TechCorp outcomes.
- The €39/hour AP analyst loaded cost comes from the lesson's reference rates.
- Implementation/integration (€15,000), maintenance (€3,000) and usage/OCR/API (€200) are estimates. Replace them with quotes if available.
- The 1,440 hours/year of capacity value is not automatically a cash saving. The business case should explain how the time will be redeployed.
- The risk-mitigation row is deliberately zero to avoid double-counting correction savings and because the assignment provides no separate probability-and-impact estimate for this process.

## 50% downside check

If the combined benefits are 50% lower than estimated, gross benefit would be €107,280/year. Subtracting the same €18,200 Year 1 cost leaves **€89,080 net benefit**. That still looks positive on these assumptions, but the pilot must verify the error-rate improvement and the €220 correction-cost estimate.