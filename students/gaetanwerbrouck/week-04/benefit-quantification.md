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
| Less: AI cost, Year 1 |  |  | **€26,000 (est.)** = €15,000 one-time implementation/integration + €8,000 annual AI/service cost (lesson estimate) + €3,000 annual maintenance (20% of implementation). |
| **Net benefit, Year 1** |  |  | **€188,560** = €214,560 − €26,000 |
| Payback period |  |  | **About 0.9 months after go-live** = €15,000 implementation ÷ ((€214,560 − €11,000 recurring costs)/12). This excludes time to deploy. |

## Assumptions and checks

- The 15-minute manual time and 12% error rate come from the TechCorp profile. The 3-minute post-AI time, 2% error rate and €220 correction cost come from the lesson's worked example, so they are assumptions to validate in a pilot, not proven TechCorp outcomes.
- The €39/hour AP analyst loaded cost comes from the lesson's reference rates.
- The €8,000 annual AI/service cost is the lesson's rough example. Implementation/integration (€15,000) and maintenance (€3,000/year) are estimates; replace them with actual quotes if available.
- The 1,440 hours/year of capacity value is not automatically a cash saving. The business case should explain how the time will be redeployed.
- The risk-mitigation row is deliberately zero to avoid double-counting correction savings and because the assignment provides no separate probability-and-impact estimate for this process.

## 50% downside check

If the combined benefits are 50% lower than estimated, gross benefit would be €107,280/year. Subtracting the full €26,000 Year 1 cost leaves **€81,280 net benefit**. That still looks positive on these assumptions, but the pilot must verify the error-rate improvement and the €220 correction-cost estimate.

---

# My Build value quantification — ScoutLab (Week 4)

This section is for my own Build, in addition to the TechCorp worked example above. These are **scenario assumptions**, not measured club outcomes. The app's interface is available. The 15-case expected-answer set is recorded as 15/15 passes based on the student's report, but the timed comparison with manual/spreadsheet scouting has not yet been completed.

## Candidate and value-chain position

**Candidate:** ScoutLab, a player-discovery, comparison and shortlisting workflow for a recruitment analyst. This sits in the primary recruitment/scouting activity. Its value is helping scouts find and compare profiles for deeper review, not replacing their decision.

## Four-category benefit table

| Benefit category | Current state | With ScoutLab | Annual value and formula |
|---|---|---|---|
| **Time saved** | 200 profiles/month × 15 minutes/profile (all est.) | 5 minutes/profile after data is prepared (est.) | **€16,000 (est.)** = (15 - 5) minutes × 200 × 12 ÷ 60 × €40/hour |
| **Revenue increase** | No directly attributable transfer-income uplift measured | No revenue uplift claimed | **€0 counted** because there is no evidence the screen itself causes extra transfer revenue |
| **Cost reduction** | No eliminated cash cost measured | Freed analyst capacity only | **€0 counted** because capacity value is already represented above and no spend reduction is established |
| **Risk mitigation** | No credible probability/impact baseline for a missed or wrongly signed player | No risk-reduction rate validated | **€0 counted** until a defensible probability × impact × reduction estimate exists |
| **Gross benefit** | | | **€16,000/year (est.)** |
| Less: Year 1 cost | | | **€3,120 (est.)** = €800 setup/validation + €1,920 data checks/refresh + €400 maintenance. Paid data, hosting and rights are unpriced. |
| **Net benefit Year 1** | | | **€12,880 (est.)** = €16,000 - €3,120, before unpriced costs |
| Payback | | | **0.7 months (est.)** = €800 setup ÷ ((€16,000 - €2,320 annual recurring cost)/12) |

## Cost assumptions and caveats

- Current handling time: 15 minutes/profile, assumed.
- ScoutLab-assisted handling time: 5 minutes/profile after data is prepared, assumed.
- Volume: 200 profiles/month, assumed for the Flanders United FC composite scenario.
- Loaded hourly cost: €40/hour, assumed.
- Setup: 20 hours × €40 = €800.
- Data review/refresh: 4 hours/month × 12 × €40 = €1,920/year.
- Maintenance: 10 hours/year × €40 = €400/year.
- LLM API token spend: €0 in this prototype because it does not call a language model. Hosting and data licensing/subscription remain unknown and are excluded from this provisional total.

## 50% downside test

If time saved is only five minutes/profile rather than ten, gross capacity value becomes €8,000/year. With the same €3,120 modelled costs, net value is €4,880/year before any unpriced data or hosting costs. If a paid data source or the actual time burden is high enough, even this scenario may not hold.

## Decision

**Pilot, not full rollout.** Run the 15-case evaluation plan, compare the same profiles against the current process and a spreadsheet/database baseline, and measure actual times and human corrections. If ScoutLab does not save time or improve the usefulness of the shortlist beyond the simpler alternative, do not invest further. A positive performance/value percentile gap is only a prompt for further scouting, not proof of undervaluation.
