# Week 4 Build alignment — ScoutLab

## Beat
**How Football Clubs Use Data to Find Undervalued Players.**

## Current problem and intended decision
The Build is intended to help a recruitment analyst decide which players deserve further human scouting by making performance profiles, role-relative comparisons and candidate lists easier to inspect. When dated market-value data is available, it can also surface a performance/value percentile gap. It does not decide who should be signed or claim that its rankings prove market mispricing.

## How this fits the Week 4 brief

| Week 4 requirement | ScoutLab application |
|---|---|
| Identify a specific candidate | First-pass performance profiling, player comparison and similar-profile discovery. |
| Map to the value chain | Primary activity: scouting/recruitment, part of sourcing talent for the club's sporting performance. |
| Quantify four benefits | Current defensible benefit is only a *scenario estimate* for time capacity saved; revenue, direct cost reduction and risk mitigation stay at €0 until evidence supports them. |
| Estimate costs | Include setup, maintenance, human data checks and data rights/refresh. No LLM API token cost is assumed because the application itself does not make LLM calls. Hosting and any paid-data fee are not yet priced. |
| Calculate net benefit and payback | Provisional scenario only, not a verified ROI. Test the time-saving assumption and compare against the spreadsheet/database alternative. |
| Pressure-test | Use 50% lower time savings, check how new data subscriptions or extra data-preparation work would change the result. |
| Build checkpoint 1 | Update the log with current capabilities, what is genuinely measured, the failure that matters, and the first change. |
| Skills Passport checkpoint 1 | Make the current capability evidence specific to ScoutLab. The former 20/20 result belongs to V1's fixed-rule prompt and must not be presented as a measured ScoutLab success rate. |
| Capstone scenario lock | Keep the Flanders United FC yes/no decision, now framed as whether to pilot ScoutLab alongside the simpler existing workflow. |

## What has changed from V1

Week 2 V1 classified 10 player profiles against five fixed rules. Its expected answers and two-run result are retained as historical evidence. The Week 2 conclusion still stands: a spreadsheet/database is the simpler solution for that deterministic task.

ScoutLab is a different version and a different scope. It adds filtering, profiles, role-relative metrics, comparisons, a similar-profile function, shortlists and an optional value-gap view. Therefore V1's 20/20 classification result does **not** measure V2. V2 has a manual UI smoke check reported by the user, but the formal expected-answer set still needs to be run and logged.

## Limitations that directly affect value

The default public 2023/24 Premier League dataset has 339 rows and does not contain market values. It is historical and does not itself prove that any player is undervalued. A dated, attributed value file and aligned player/performance data are needed for that feature. The source dataset licence is not clearly stated by the upstream README, so the prototype loads the file at runtime rather than copying it into this repository.

## Coursework work that remains real and must not be fabricated

- Run the new evaluation set and record actual outcomes.
- Measure current manual minutes and ScoutLab-assisted minutes, using the same task and players.
- Record actual cost and data-source/permission assumptions.
- Complete the investment memo peer review with a real classmate, then update the memo and peer-review record from real feedback.
- Enter real clinic and cross-pollination findings and a real future FabLab booking date.
- Submit the Week 4 Signal post, quantification table, revised memo, scenario lock, Passport checkpoint and Build log by the assignment deadline.
