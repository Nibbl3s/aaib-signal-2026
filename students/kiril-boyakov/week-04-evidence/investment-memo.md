# Investment memo — Freight-mode classification

**To:** Operations Director, EuroRoute Forwarding  
**From:** Kiril Boyakov  
**Date:** 2026-10-18  
**Status:** Revised after AI-assisted review; classmate review pending  
**Context:** Fictional planning scenario; operational figures are estimates.

### Executive summary

Approve a capped €300 initial evaluation of the freight-mode classifier, within a potential €2,700 setup budget. The model estimates €7,819 in first-year net capacity value, but a combined downside scenario loses €731; these assumptions do not yet justify deployment.

### Problem and proposal

At 3,000 descriptions monthly, manual classification takes an assumed 36,000 × 1/60 = 600 hours annually, valued at €18,000 at €30/hour. The tool suggests a transport mode and quotes supporting evidence. Staff confirm the result before rate lookup; it neither calculates nor approves freight prices.

### Annual benefits and costs

| Item | Formula | Value |
|---|---|---:|
| Time saved before correction | 36,000 × (1 − 0.25)/60 × €30 | €13,500 |
| Revenue increase | No additional bookings established | €0 credited |
| Direct cost reduction | No expense elimination established | €0 credited |
| Risk reduction | No proven reduction established | €0 credited |
| Setup | 60 hours × €40 + 10 hours × €30 | €2,700 |
| Technical running costs | 24 hours × €40 + €120 hosting + €100.80 tokens | €1,180.80 |
| Correction | 36,000 × 5% × 2/60 × €30 | €1,800 |
| Net Year 1 benefit | €13,500 − €2,700 − €1,180.80 − €1,800 | €7,819.20 |

Tokens: 36,000 × [(800/1M × €2) + (100/1M × €12)] = €100.80, using illustrative budgeting rates.

Economic payback is €2,700 ÷ [(€13,500 − €1,180.80 − €1,800)/12] = 3.1 operational months. Economic ROI is 137.6%. Neither represents proven cash savings: management must identify useful work or avoidable expenditure for the released capacity.

### Evaluation and risks

First measure manual and assisted handling time. Allocate the initial ten staff-hours to case preparation (3), comparative testing (4), and analysis (3), at €30/hour. This is a spending cap, not a guarantee of completing the proposed 100-case comparison. Stop and rescope if insufficient.

Compare manual work, simple rules and AI. Include review, correction, clarification and escalation time. The recorded 20 passes cover only ten selected inputs and two prompt versions; they do not establish production reliability.

Wrong labels may survive review. Require source evidence, human confirmation and escalation for ambiguity. Use anonymised pilot inputs. Confirm that the setup estimate covers integration, privacy checks and access controls; otherwise revise the budget. Losses from undetected operational errors remain unquantified.

### Recommendation and sensitivity

Approve evaluation only. Proposed deployment gates are at least 95/100 complete passes, no observed material error escaping review, staff time at most 60% of the manual baseline, and a positive case against simpler rules. These are screening criteria, not a reliability guarantee.

Halving time benefits leaves €1,069 net in Year 1; also doubling corrections produces a €731 loss. Rollout requires validated assumptions and a documented use for released capacity.