# Week 6 Evidence: Cost Projection, API Measurements & Build Economics

## 1. API Response & Per-Call Cost Calculation

To establish an empirical baseline for enterprise cost modeling, we executed a test call against the Google Gemini API using the budget-tier model variant. The exact request details and raw JSON response object are documented below.

**Selected Model Tier:** gemini-3.1-flash-lite

**API Endpoint:** https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent

**Prompt Sent:** Write a one-sentence customer support response to a customer asking about our 30-day return policy.

```json
{
  "usageMetadata": {
    "promptTokenCount": 22,
    "candidatesTokenCount": 27,
    "totalTokenCount": 49,
    "promptTokensDetails": [
      {
        "modality": "TEXT",
        "tokenCount": 22
      }
    ]
  }
}
```

### Per-Call Unit Cost Calculation

Google AI Studio pricing for gemini-3.1-flash-lite is set at $0.25 per 1 million input tokens and $1.50 per 1 million output tokens. Using our measured token counts (22 input, 27 output), the unit cost per execution is derived as follows:

**Input Cost:** (22 / 1,000,000) × $0.25 = $0.00000550 per call

**Output Cost:** (27 / 1,000,000) × $1.50 = $0.00004050 per call

**Total Unit Cost:** $0.00000550 + $0.00004050 = $0.00004600 per call

## 2. Beat Cost Model: Scale Projections & Break Points

For our beat, The Psychology of AI Adoption in the Workplace, we model an Automated Employee AI Sentiment & Adoption Barrier Classifier deployed across enterprise feedback channels (Slack, Teams, pulse forms).

| Scale Level | Calls / Day | Unit Cost | Daily Cost | Monthly Cost (30d) | Annual Cost |
| --- | --- | --- | --- | --- | --- |
| Prototype | 10 | $0.0000460 | $0.00046 | $0.014 | $0.17 |
| Pilot | 100 | $0.0000460 | $0.00460 | $0.14 | $1.66 |
| Launch | 1,000 | $0.0000460 | $0.04600 | $1.38 | $16.56 |
| Growth | 10,000 | $0.0000460 | $0.46000 | $13.80 | $165.60 |
| Scale | 100,000 | $0.0000460 | $4.60000 | $138.00 | $1,656.00 |

### Unit Economics Break Point & Key Assumptions

**Revenue / Value Assumption:** €1.50 per employee / month (internal operational efficiency value allocation).

**Where the Break Point Rests:** Pure API token costs never break the unit economics because they represent less than 0.01% of total enterprise value. The true economic break point rests entirely on the classification error rate and downstream human remediation labor. If the error rate exceeds 10%, human correction costs completely wipe out the efficiency gains, regardless of how cheap the API tokens are.

## 3. The Build Costed From Your Own API Call

To evaluate real operational expenditure, we connect our measured token pricing to our actual enterprise build: an HR Sentiment & Barrier Classifier processing employee feedback.

**Realistic Monthly Volume:** 300 feedback comments per month (representing an active enterprise HR intake channel across multi-language Slack/Teams channels).

**Monthly API Token Cost:** 300 comments × $0.0000460 = $0.0138 / month (€0.0127 / month or €0.15 / year).

### Integration of Week 2 Measured Error Rates

From our Week 2 empirical stress test (log.md), the classifier produced a 30% failure rate across dual test runs (consisting of F1 Wrong, F2 Fabricated, and F6 Inconsistent classifications).

**Monthly Misclassifications:** 300 comments × 30% error rate = 90 misclassified comments per month.

**Who Fixes the Error?** An HR Recruiter / Organizational Analyst reviewing and manually correcting misclassified sentiment tags in the HR dashboard.

**Time Required per Fix:** 3 minutes per misclassified entry.

**Loaded Recruiter Hourly Rate:** €44.00 / hour (Belgian market loaded reference rate).

**Cost per Error Fix:** 3 min / 60 min × €44.00 = €2.20 per error fix.

**Monthly Error Remediation Labor:** 90 errors × €2.20 = €198.00 / month (€2,376.00 / year).

## Total Year 1 Cost Model Summary

| Cost Component | Monthly Cost (€) | Annual Cost (€) | % of Total |
| --- | --- | --- | --- |
| API Token Cost (Gemini Flash-Lite) | €0.013 | €0.15 | 0.005% |
| Initial Setup & Prompt Tuning | — | €500.00 | 16.77% |
| Annual Script Maintenance | €8.33 | €100.00 | 3.35% |
| Error Remediation Labor (30% rate) | €198.00 | €2,376.00 | 79.70% |
| **TOTAL YEAR 1 OPERATING EXPENDITURE** | **€206.34** | **€2,976.15** | **100.00%** |

### Core Architectural Finding

**Cost Gap Ratio:** Monthly Error Remediation Cost (€198.00) / Monthly API Token Cost (€0.0127) ≈ 15,590×

**Conclusion:** The labor cost of correcting AI classification errors is over 15,000 times higher than the cost of running the API calls. Optimizing prompt token lengths saves negligible fractions of a cent; investing in prompt optimization and validation guardrails to reduce the error rate represents the absolute core financial lever for this build.
