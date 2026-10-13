# INVESTMENT MEMO — ScoutLab scouting workflow

**STATUS: Draft for real classmate peer review. Not yet the revised submission.**

**TO:** Head of Recruitment, Flanders United FC (composite scenario)  
**FROM:** Gaetan Werbrouck, Business Analyst  
**DATE:** 13 October 2026  
**SUBJECT:** Conditional pilot of ScoutLab for player discovery and comparison

## Executive summary

I recommend a limited pilot, not a full rollout. Under explicit scenario assumptions, ScoutLab could create €16,000/year in time-capacity value against €3,120 in modelled Year 1 costs, but the estimate excludes unpriced data and hosting costs and has not been measured in a real club workflow.

## The problem

Flanders United FC is assumed to review 200 player profiles/month. Analysts currently gather and compare statistics across separate sources, making it harder to review profiles consistently. The 200-profile volume, 15-minute current handling time and €40/hour loaded rate are assumptions, not measured club data. The reference dataset used in the prototype has 339 historical Premier League 2023/24 players and no market values, so it cannot by itself prove who is undervalued.

## The proposal

Pilot ScoutLab as a decision-support interface for filters, position-relative profiles, player comparison, similar-profile search and shortlist export. Compare it with both the current process and a spreadsheet/database baseline. Human scouts must verify the data, inspect video and assess tactical fit; the application must not make signing decisions. The optional performance/value comparison stays off until an attributable, dated market-value dataset is supplied.

## Benefit analysis

| Category | Annual value | Basis |
|---|---:|---|
| Time saved | €16,000 (est.) | 200 profiles/month × 12 × 10 minutes saved ÷ 60 × €40/hour |
| Revenue increase | €0 counted | No proven link from this screen to additional transfer revenue |
| Cost reduction | €0 counted | No eliminated cash expense demonstrated |
| Risk mitigation | €0 counted | No calibrated probability/impact evidence for avoided recruitment losses |
| **Gross benefit** | **€16,000 (est.)** | Capacity value only |
| Setup and validation | €800 (est.) | 20 hours × €40/hour |
| Data checking and refresh | €1,920/year (est.) | 4 hours/month × 12 × €40/hour |
| Maintenance | €400/year (est.) | 10 hours/year × €40/hour |
| **Year 1 modelled cost** | **€3,120 (est.)** | Excludes any paid data feed, hosting and data rights |
| **Net benefit Year 1** | **€12,880 (est.)** | €16,000 - €3,120, before unpriced costs |
| Payback | **0.7 months (est.)** | €800 setup ÷ ((€16,000 - €2,320 recurring cost)/12) |

The application does not make LLM API calls, so no token spend is included. That does not make data, hosting or maintenance free.

## Risks and mitigations

First, stale or mismatched data could create a misleading comparison; record source dates and audit player-name matches. Second, the default historical data lacks market values, and any values supplied must have a credible source and date. Third, the dashboard could add little value beyond a spreadsheet; measure task time and shortlist usefulness against that baseline.

## Recommendation

**Pilot with conditions.** Proceed only if the test set passes, the data permissions and full costs are established, and a timed comparison demonstrates a real improvement over the existing process and spreadsheet alternative.

## Sensitivity note

If the time benefit is 50% lower, gross value is €8,000 and modelled net is €4,880 before unpriced data/hosting costs. The case can easily weaken if the saving is not observed, so do not approve a full deployment from this estimate alone.

---

**Peer review required:** Have a classmate review the numbers and risks, complete the peer-review record, then revise this memo. Do not label it peer-reviewed until that has happened.
