# ScoutLab V2 — expected-answer evaluation plan

**Version:** Week 4 Build update  
**Data source:** FootballScoutingAI processed Premier League 2023/24 CSV (loaded at runtime).  
**Rule:** These expected answers were written before formally running this test set through the updated ScoutLab. Do not replace the expected answers after seeing results. Log every pass/failure and repeat the checks when possible.

This is a workflow and source-data validation set, not proof that ScoutLab can predict future player success. The ten named players are real rows in the reference dataset, and the simple facts below are independently checkable in that CSV.

| # | Real input / action to test | Expected answer written before running | What to record when tested |
|---:|---|---|---|
| 1 | Find Erling Haaland | Player is present; team is Manchester City; position group is Forward; age 23; league minutes 2,556; goals per 90 0.95; expected goals per 90 1.03. | Did the profile show those source facts? Any missing/wrong field? |
| 2 | Find Bukayo Saka | Player is present; team is Arsenal; position group is Forward; age 21; league minutes 2,933; goals per 90 0.49. | Field match, display errors, score availability. |
| 3 | Find Mohamed Salah | Player is present; team is Liverpool; position group is Forward; age 31; league minutes 2,535; goals per 90 0.64. | Field match, display errors, score availability. |
| 4 | Find Cole Palmer | Player is present; team is Chelsea; source position is FW,MF, grouped position is Forward; age 21; league minutes 2,624; goals per 90 0.75. | Check that the multi-position source string is grouped consistently. |
| 5 | Find Phil Foden | Player is present; team is Manchester City; source position is FW,MF, grouped position is Forward; age 23; league minutes 2,865; goals per 90 0.60. | Check group mapping and that profile values match the source. |
| 6 | Find Declan Rice | Player is present; team is Arsenal; position group is Midfielder; age 24; league minutes 3,230; tackles per 90 1.4; pass success 90.7%. | Confirm a midfielder gets a midfielder benchmark and correct source fields. |
| 7 | Find Rodri | Player is present; team is Manchester City; position group is Midfielder; age 27; league minutes 2,938; pass success 92.5%. | Confirm comparison/profile values and group mapping. |
| 8 | Find Virgil van Dijk | Player is present; team is Liverpool; position group is Defender; age 32; league minutes 3,178; clearances per 90 4.0; pass success 91.5%. | Check a defender's role-relative display and source facts. |
| 9 | Find Aaron Wan-Bissaka | Player is present; team is Manchester United; position group is Defender; age 25; league minutes 1,781; tackles per 90 1.3; interceptions per 90 2.1. | Check display and role mapping. |
| 10 | Find Alisson Becker | Player is present; team is Liverpool; position group is Goalkeeper; age 30; league minutes 2,520. Missing attacking metrics should remain missing, not become fabricated zero values in the profile. | Check goalkeeper field coverage and missing values. |
| 11 | Compare Haaland and Saka | Exactly both selected profiles should appear. Both should be grouped as Forward. Their percentile metrics may differ, but neither should be labelled as having a verified transfer value from the default dataset. | Record comparison display, any warning and value-field status. |
| 12 | Similar-player search for Haaland | Returned alternatives should be other players, not Haaland himself; every returned alternative should be in the Forward group and show a similarity score. | Record row count, positions, duplicate/self match, and unexpected results. |
| 13 | Open Hidden Gems using the default data | The app should state that market values are unavailable and offer a valuation template. It must not invent a hidden-gem list or default player prices. | Pass/fail and exact visible warning. |
| 14 | Upload a controlled test value CSV with at least three same-position players, using explicitly synthetic prices | Market-value fields should parse, be joined to the corresponding player names, and enable a same-position performance/value percentile comparison. The values are test fixtures only, not real valuations. | Record rows matched, missing names, unit interpretation and gap calculation. |
| 15 | Export a shortlist containing two chosen players | Export should contain the selected players and their calculated fields; it should not be mistaken for a verified transfer recommendation. | Open CSV and check row count/column headers. |

## Failure classification

- **F1 — Wrong:** the displayed value or ranking is inconsistent with the source or expected output.
- **F2 — Fabricated:** a player, metric, value, or source is invented rather than found in the data.
- **F3 — Missed:** a required player/field is omitted or the feature fails to surface an expected candidate.
- **F4 — Format:** output does not match the expected structure or export.
- **F5 — Refused:** the tool fails to answer a valid supported request.
- **F6 — Inconsistent:** repeating the same action with the same data produces materially different results.

## Results log — completed from the student's confirmation

**Reported outcome: 15/15 passed.** The student confirmed that all 15 cases passed. The case-by-case entries below record that confirmation; the assistant did not independently observe the live UI. No failure codes were reported.

| # | Actual result | Pass/fail | Failure code (if any) | Notes / fix |
|---:|---|---|---|---|
| 1 | User reports expected profile facts were shown. | **Pass** | None | Reported by student; no fix reported. |
| 2 | User reports expected profile facts were shown. | **Pass** | None | Reported by student; no fix reported. |
| 3 | User reports expected profile facts were shown. | **Pass** | None | Reported by student; no fix reported. |
| 4 | User reports expected profile facts and Forward grouping were shown. | **Pass** | None | Reported by student; no fix reported. |
| 5 | User reports expected profile facts and Forward grouping were shown. | **Pass** | None | Reported by student; no fix reported. |
| 6 | User reports expected midfielder profile facts were shown. | **Pass** | None | Reported by student; no fix reported. |
| 7 | User reports expected midfielder profile facts were shown. | **Pass** | None | Reported by student; no fix reported. |
| 8 | User reports expected defender profile facts were shown. | **Pass** | None | Reported by student; no fix reported. |
| 9 | User reports expected defender profile facts were shown. | **Pass** | None | Reported by student; no fix reported. |
| 10 | User reports goalkeeper profile and missing attacking metrics behaved as expected. | **Pass** | None | Reported by student; no fix reported. |
| 11 | User reports comparison behaved as expected. | **Pass** | None | Reported by student; no fix reported. |
| 12 | User reports similar-player search behaved as expected. | **Pass** | None | Reported by student; no fix reported. |
| 13 | User reports missing-market-value warning/template behavior was correct. | **Pass** | None | Reported by student; no fix reported. |
| 14 | User reports synthetic values were accepted and value comparison worked. | **Pass** | None | Reported by student; no fix reported. |
| 15 | User reports shortlist export behaved as expected. | **Pass** | None | Reported by student; no fix reported. |
