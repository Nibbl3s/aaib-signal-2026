# INVESTMENT MEMO — ScoutLab scouting workflow

**STATUS: One-page draft for classmate review. Not yet the revised submission.**

**TO:** Head of Recruitment, Flanders United FC (composite scenario)  
**FROM:** Gaetan Werbrouck, Business Analyst  
**DATE:** 13 October 2026  
**SUBJECT:** Conditional pilot of ScoutLab for player discovery and comparison

## Executive summary

I recommend a small, time-limited ScoutLab pilot, not a full rollout. In a hypothetical workload, it could create €16,000/year in time-capacity value against €3,120 in modelled Year 1 costs, but this return is not measured and excludes unpriced data and hosting costs.

## The problem

For this scenario, Flanders United FC reviews an assumed 200 player profiles/month. Analysts currently collect and compare statistics across multiple pages and spreadsheets; the assumed baseline is 15 minutes/profile at €40/hour. These are modelling assumptions, not measurements from a real club. The prototype’s 339-row Premier League 2023/24 reference dataset has no market values, so it cannot independently establish which players are undervalued.

## The proposal

Pilot ScoutLab as a decision-support interface for filters, position-relative profiles, player comparison, similar-profile discovery and shortlist export. Compare it with the existing workflow and a spreadsheet/database baseline using the same profiles. Human scouts remain responsible for checking data, reviewing video and tactical fit, and making all recruitment decisions; the market-value feature stays off until dated, attributable values are supplied.

## Benefit analysis

| Category | Annual value | Basis |
|---|---:|---|
| Time saved | €16,000 (est.) | 200 profiles/month × 12 × 10 min saved ÷ 60 × €40/hour |
| Revenue increase | €0 counted | No additional transfer revenue demonstrated |
| Cost reduction | €0 counted | No eliminated cash expense demonstrated |
| Risk mitigation | €0 counted | No measured reduction in recruitment errors |
| **Gross benefit** | **€16,000 (est.)** | Capacity value only |
| Setup and validation | €800 (est.) | 20 hours × €40/hour |
| Data checks/refresh | €1,920/year (est.) | 4 hours/month × 12 × €40/hour |
| Maintenance | €400/year (est.) | 10 hours/year × €40/hour |
| **Year 1 modelled cost** | **€3,120 (est.)** | Excludes paid data, data rights and hosting |
| **Net benefit Year 1** | **€12,880 (est.)** | €16,000 − €3,120, before unpriced costs |
| Payback | **0.7 months (est.)** | €800 setup ÷ ((€16,000 − €2,320 recurring cost)/12) |

The app makes no LLM API calls, so this model includes no LLM token cost; data preparation, permissions and hosting are not free and need quotes. The ten-minute saving and 200-profile volume must be measured.

## Risks and mitigations

Historical or mismatched data could create misleading shortlists, so record data sources and dates and audit name matches. The dashboard may add less value than a spreadsheet, so compare time, correction rate and useful-candidate yield before approving wider use.

## Recommendation and sensitivity

**Pilot with conditions.** Proceed only if the expected-answer checks pass, data permissions and full costs are known, and a timed comparison shows an improvement over the current process and spreadsheet baseline. If time savings are 50% lower, gross value falls to €8,000 and modelled net to €4,880 before unpriced costs; if the saving is not demonstrated, do not invest further.

---

**Next step:** Get a real classmate to review this draft, record their comments in peer-review-record.md, then revise this memo. It must not be labelled peer-reviewed until that has happened.
