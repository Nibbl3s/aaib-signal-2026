# Signal Post 4 — AI Scouting: Does the ROI Beat a Spreadsheet?

## Hook

Football clubs do not need another tool that produces an impressive shortlist; they need one that saves scouting time without hiding good players or wasting budget. A positive demo is not an ROI case, especially when a spreadsheet can do part of the job.

## The candidate

My beat is how football clubs use data to find players whose performance is better than their reputation or transfer value suggests. The candidate is an AI-assisted first-pass screen for hypothetical Belgian club Flanders United FC. It classifies player profiles using five rules: age, league minutes, goals plus assists per 90, estimated market value and outfield position. This sits in recruitment/scouting. Human scouts still check data and decide who deserves detailed scouting; the tool does not decide who is signed.

## The numbers

I tested my prompt on 10 player profiles, with expected answers set before testing, and ran the set twice. All 20 classifications matched the expected answers: 20/20, or 100% observed success on this small, bounded test. One separate counting inconsistency appeared in an explanation, showing that correct individual classifications do not guarantee every summary is correct. This is promising evidence for a narrow task, not proof of production accuracy.

For a value estimate, I use a hypothetical scenario, not measured club data: 200 profiles screened per month; eight minutes of manual screening per profile; three minutes per profile for AI-assisted screening plus human verification; and a loaded scout/analyst rate of €40/hour. The time saving is (8 − 3) minutes × 200 × 12 = 12,000 minutes, or 200 hours/year. At €40/hour, that is **€8,000/year in capacity value**. It becomes a cash saving only if the club redeploys the hours or avoids paid work.

| Benefit category | Annual value | Formula and treatment |
|---|---:|---|
| Time saved | €8,000 | 200 hours × €40/hour; hypothetical capacity value |
| Revenue increase | €0 | No evidence that this screen increases transfer profit |
| Cost reduction | €0 | No actual payroll or other expenditure is shown to disappear |
| Risk mitigation | €0 separately | No defensible probability/impact estimate for a missed player; do not invent one |
| **Gross quantified benefit** | **€8,000** | Only time-capacity value is counted |

Assume the club already has the structured data. For 2,400 profiles/year, 500 input tokens and 100 output tokens per profile, the lesson's reference prices ($2 per million input tokens and $12 per million output tokens) imply about €5/year in tokens after the $0.92 conversion. I estimate 20 hours of setup/testing at €40/hour (€800) and 10 hours of maintenance at €40/hour (€400). Year 1 cost is about **€1,205**, excluding any new data subscription or integration quote. Net Year 1 value against manual screening is €8,000 − €1,205 = **€6,795**. Payback is about **1.3 months**: €800 setup ÷ ((€8,000 − €405 recurring cost)/12).

## The pressure test

The 100% result covers only 10 profiles and two runs, with deterministic criteria. It says little about messy, stale or incomplete real-world data. If the time benefit is 50% lower, gross value falls to €4,000 and estimated net value remains €2,795 in Year 1. In a 5% error scenario, 120 profiles/year would need correction; ten minutes of rechecking at €40/hour costs about €800/year. The opportunity cost of missing a genuinely undervalued player remains unpriced.

The AI is not competing only with manual work. A spreadsheet/database filter can apply the same five rules to structured fields. If that takes an estimated two minutes per profile, it saves (8 − 2) minutes × 2,400 ÷ 60 = 240 hours/year, worth €9,600. Assuming €160 setup and €80 annual upkeep, its Year 1 net value is about €9,360, above the AI case's €6,795 and with less risk of invented reasoning. These spreadsheet figures are estimates too, but it is the right alternative to test.

## The insight

My verdict is **no-go for AI on this five-rule task; use a spreadsheet or database filter**. The test shows the prompt can classify these examples, but capability is not the same as value. AI may earn its place if the club needs to combine unstructured scouting reports, qualitative assessments or signals that rules cannot handle. That requires a new test set and a separate business case, not a claim that this small test already proves ROI.

