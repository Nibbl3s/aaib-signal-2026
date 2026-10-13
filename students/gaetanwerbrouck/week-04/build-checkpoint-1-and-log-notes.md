# Week 4 — Build Checkpoint 1 and Build Log Notes

## Five-line Build checkpoint

1. **What my tool can do now:** It applies five explicit age, minutes, production, value and position rules to classify a supplied football-player profile.
2. **What it cannot do yet:** It does not independently verify that player data are current, judge qualitative scouting fit, or estimate a player's true future value.
3. **What I measured:** Ten player inputs were tested twice against expected answers set before testing; all 20 individual classifications matched (20/20, 100% observed classification success on this narrow test).
4. **Dominant failure / failure that would matter most:** There were no observed individual classification errors, but one run contained a summary-count inconsistency. The more consequential deployment failure would be a wrong or missed classification because input statistics are stale or a threshold is applied incorrectly.
5. **What I would change first:** Add more edge cases and a source-data validation step, and automatically check that the explanatory summary agrees with the classification table.

## Own Build value row (estimates must stay labelled)

| Field | Current estimate | Basis |
|---|---:|---|
| Human cost today | €5.33 per profile (est.) | 8 minutes/profile × €40/hour loaded scout/analyst rate; both values are estimates, not measured from the Week 2 test |
| Volume | 200 profiles/month (est.) | Hypothetical club scenario; replace if you have a real volume |
| Measured success rate | 100% observed classifications | 20/20 classifications correct across 10 profiles and two runs; small, bounded test; one separate summary counting inconsistency |
| Gross benefit at 100% | €8,000/year capacity value (est.) | (8 min manual − 3 min AI + human check) × 200/month × 12 ÷ 60 × €40/hour |
| Gross benefit at observed rate | €8,000/year in this arithmetic | Observed rate is 100%, but this must not be presented as proven production reliability |
| Failure cost and who pays | €6.67 per recheck (est.) plus unpriced missed-player opportunity | Ten minutes of rechecking × €40/hour; the club's scout/recruitment department absorbs the time, and the opportunity cost of a missed target is not quantified |
| AI Year 1 cost | €1,205 (est.) | €800 setup/testing + €400 maintenance + ~€5 token cost; excludes new data rights/integration |
| Net benefit vs manual baseline | €6,795/year (est.) | €8,000 − €1,205, before any error-cost reserve |
| Decision against simplest alternative | No-go for AI on fixed rules | Spreadsheet/database filtering is likely cheaper and more deterministic for structured inputs |

## Clinic and cross-pollination evidence — fill in from class

- My selected self-diagnostic pattern (1–6): **5 — no volume (provisional; change this if you chose a different cluster in class)**.
- The pattern my cluster found: **[one sentence from your actual group discussion]**.
- The fix or insight I took from another cluster: **[one sentence based on what you actually heard]**.

## FabLab probe plan — update with a real future booking

| Machine | Artifact / probe | FabLab session |
|---|---|---|
| Laser cutter | A layered decision-tree panel or player-screening checklist showing the five criteria. | **[enter actual booked future session date]** |
| 3D printer | A small physical stand or token representing a player profile moving into the shortlist stage. | **[enter actual booked future session date]** |
| Fabricator | A physical label/card or visual element for the scouting shortlist, subject to the machine's actual capabilities. | **[enter actual booked future session date]** |

The existing GitHub log records the 28 September introduction. That is not the same as a future deployment-probe session booking. Book the session, then replace the placeholders with the real date and confirm the third machine's exact name/function with the FabLab if needed.