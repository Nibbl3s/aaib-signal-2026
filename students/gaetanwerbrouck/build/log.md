# Week 2 — Build Log



## Goal



Test whether an AI system can consistently classify football players against five explicit scouting criteria.



## Prompt



The player must meet all five conditions:



1. The player is 23 years old or younger.

2. The player has played at least 1,000 league minutes.

3. The player's goals + assists per 90 is at least 0.50.

4. The player's estimated market value is below €10 million.

5. The player is an outfield player.



## Test methodology



I created a test set of 10 real player inputs with the expected classification written before running the AI.



I ran the complete test set twice using the same criteria. I compared each AI result against the expected answer and compared Run 1 with Run 2.



Failure categories:



* F1 — Wrong

* F2 — Fabricated

* F3 — Missed

* F4 — Format

* F5 — Refused

* F6 — Inconsistent



## Results



| Player            | Expected               | Run 1                  | Run 2                  | Failure |

| ----------------- | ---------------------- | ---------------------- | ---------------------- | ------- |

| Christos Tzolis   | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Nicolò Tresoldi   | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Romeo Vermant     | Meets criteria         | Meets criteria         | Meets criteria         | None    |

| Joseph Opoku      | Meets criteria         | Meets criteria         | Meets criteria         | None    |

| Mihajlo Cvetković | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Max Dean          | Meets criteria         | Meets criteria         | Meets criteria         | None    |

| Pape Moussa Fall  | Meets criteria         | Meets criteria         | Meets criteria         | None    |

| Nilson Angulo     | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Hugo Vetlesen     | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Raul Florucz      | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |



## Failure analysis



There were no F1–F6 failures in the final classification results. The AI produced the same classification for all 10 players in both runs and matched the expected answers.



There was one minor internal counting error in Run 1: the explanation said that five players met the criteria but only named four players. The actual classification table correctly identified the four players who met all five criteria. This did not change any individual classification and did not occur as a difference between Run 1 and Run 2.



One useful observation from the test is that exact wording of thresholds matters. For example, Mihajlo Cvetković has an estimated market value of exactly €10 million. Because the rule says "below €10 million", he does not qualify.



## Summary



The test suggests that the AI handled this bounded classification task reliably across the 10 test inputs and two runs. The task is relatively easy to verify because every decision can be checked against the underlying player data.



However, this does not mean that AI is automatically the best tool for the task. A spreadsheet or database filter could perform the same five-rule classification more simply and deterministically. AI becomes more interesting when the scouting process includes less structured information, such as scouting reports, written evaluations or other qualitative evidence.



## Data sources



* Performance statistics: FBref, Belgian Pro League 2025–26.

* Estimated market values: Transfermarkt.

* Accessed: September 2026.



## FabLab probe plan



The FabLab introduction took place on Monday 28/09. We had a tour of the available equipment and examples of what could be made, including laser cutting and 3D printing.



| Machine                   | Artifact                                                                                                 | FabLab session                     |

| ------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------- |

| Laser cutter | A physical visualization of the player-screening criteria, such as a layered or labelled scouting filter | Future session: NOT YET BOOKED; add confirmed date after booking |

| 3D printer | A small physical representation of a player profile or scouting data structure | Future session: NOT YET BOOKED; add confirmed date after booking |

| Fabricator | A physical visualization or fabricated representation of the scouting filter | Future session: NOT YET BOOKED; add confirmed date after booking |



The purpose of these probes is to explore how the digital player-screening concept could be translated into a physical or visual artifact.





---

## Historical Week 4 estimate for V1 (superseded by the current ScoutLab checkpoint below)

This earlier calculation describes the retired five-rule classifier. It is kept as build history, not as the current ScoutLab V2 value estimate.

### Five-line checkpoint evidence

1. **What the tool does:** It applies five explicit screening rules to supplied player profiles and classifies whether all five rules are met.
2. **What I measured:** I tested 10 player profiles twice; all 20 individual classifications matched their expected answers. One explanation had a counting inconsistency, so the small test does not prove production reliability.
3. **Dominant observed failure:** A minor F1-style wrong count in the explanation (five claimed, four named); the classification table itself was correct.
4. **Failure that would matter most:** Stale or fabricated player statistics/market values could create a false shortlist and waste scout time. Inputs need source dates and human verification.
5. **What I would change first:** Use a spreadsheet/database filter for the five deterministic rules, then only test AI for a genuinely less-structured task such as extracting evidence from scouting reports.

### Provisional value estimate for my own Build

**Important:** only the 20/20 result is measured. The volume, handling times and hourly rate below are scenario assumptions, not information supplied by a real club.

| Item | Estimate or result | Basis |
|---|---:|---|
| Human screening today | 8 minutes/profile (est.) | Hypothetical manual baseline |
| Volume | 200 profiles/month (est.) | Must be replaced with a real club's volume |
| Loaded human rate | €40/hour (est.) | Scenario assumption |
| Observed success rate | 20/20 = 100% | Ten profiles run twice; very small test |
| Time saved vs manual review | 5 minutes/profile (est.) | Assumes AI-assisted review takes 3 minutes including verification |
| Gross time-capacity value | €8,000/year (est.) | (8 − 3) min × 200/month × 12 ÷ 60 × €40 |
| Token cost | ~€5/year (est.) | 2,400 profiles/year × 500 input and 100 output tokens; lesson reference prices, converted at $1 = €0.92 |
| Setup/testing | €800 (est.) | 20 hours × €40/hour |
| Maintenance | €400/year (est.) | 10 hours × €40/hour |
| Net Year 1 before unmeasured error handling | €6,795 (est.) | €8,000 − (€5 + €800 + €400) |
| 5% error-check sensitivity | −€800/year (est.) | 120 profiles × 10 minutes × €40/hour |
| Net Year 1 in 5% error scenario | €5,995 (est.) | €6,795 − €800 |

The €8,000 is capacity value, not automatically a cash saving. It assumes a club really processes 200 profiles monthly and can redeploy the time. It also does not mean AI is the best option: a spreadsheet is estimated to save six minutes per profile and has much lower setup and maintenance cost. Under these assumptions, the spreadsheet is the preferred option. Actual club volume and processing times must be measured before claiming ROI.

### Week 4 clinic and cross-pollination notes

- **Provisional self-diagnostic:** Pattern 5 — no volume. I do not know the actual number of player profiles a target club screens per month.
- **Question to ask the cluster/teacher:** What evidence would be acceptable for monthly scouting volume and the loaded hourly cost?
- **Cluster finding from classmates:** [Fill in the actual pattern your cluster reported.]
- **Cross-pollination takeaway:** [Fill in the actual insight reported by another cluster.]

### FabLab probe plan status

The introduction on Monday 28/09 was attended. The three exploratory artifacts are a laser-cut scouting filter, a 3D-printed player profile/data structure, and a Fabricator-made representation. **A future FabLab session is not yet recorded as booked.** After booking it, replace the status in the table above with the confirmed session date. Do not mark this checkpoint complete until the booking is real.


---

# Week 4 — Build Checkpoint 1 and Build Log Notes

## V1 historical checkpoint (Week 2, retained for honesty)

1. **What V1 could do:** Apply five explicit age, minutes, goals-plus-assists, market-value and position rules to a player profile.
2. **What V1 could not do:** Verify current data, judge qualitative fit or estimate a player's future value.
3. **What was measured on V1:** Ten player inputs tested twice, all 20 classifications matched expected answers; this result applies only to the old fixed-rule prompt.
4. **Most important V1 risk:** Stale or fabricated player data could create a false shortlist.
5. **V1 conclusion:** A spreadsheet/database is the simpler choice for five deterministic rules.

## Current Build Checkpoint 1 — ScoutLab V2

1. **What my tool can do now:** ScoutLab loads a 339-row Premier League 2023/24 benchmark, filters players, shows position-relative profiles, compares candidates, finds statistically similar profiles, and exports a shortlist. It can compare performance with market-value percentiles only if separate market values are supplied.
2. **What it cannot do yet:** The default source has no market values and is not a live 2026 recruitment dataset. It cannot prove that a player is undervalued, predict future performance, review video or make a signing decision.
3. **What I measured:** I have confirmed that the app's interface and tabs are accessible and usable. This is only a manual UI check, not an accuracy evaluation. The new expected-answer evaluation set and a timed manual-versus-ScoutLab comparison have **not yet been run**, so no ScoutLab accuracy or time-saving rate is claimed. The V1 20/20 result is not a V2 result.
4. **Dominant failure type / highest-impact failure:** V2's dominant failure type is not yet known. The highest-impact risk to test is a wrong or missing player/metric caused by source-data mismatch, low metric coverage or player-name joining. A fabricated or stale market value would be particularly damaging, so the app does not create values itself.
5. **What I would change first:** Run the 15-case expected-answer set in the ScoutLab evaluation-plan file, repeat key checks, fix any failures, and time the same scouting task in ScoutLab and a spreadsheet baseline.

## Provisional own-Build value row (all assumptions clearly labelled)

| Field | Value | Basis |
|---|---:|---|
| Current human handling time | 15 min/profile (est.) | Hypothetical baseline, needs measurement |
| Volume | 200 profiles/month (est.) | Composite club scenario, not real club data |
| ScoutLab-assisted handling time | 5 min/profile (est.) | Hypothesis after data is prepared |
| Measured ScoutLab success rate | Not yet measured | Evaluation set prepared, not yet run |
| Gross time-capacity value | €16,000/year (est.) | (15 - 5) min × 200 × 12 ÷ 60 × €40/hour |
| Revenue increase | €0 counted | Not proven |
| Cost reduction | €0 counted | No cash expense eliminated |
| Risk mitigation | €0 counted | No calibrated risk reduction measured |
| Year 1 modelled cost | €3,120 (est.) | €800 setup + €1,920 data refresh/checking + €400 maintenance; excludes paid data and hosting |
| Net benefit | €12,880 (est.) before unpriced costs | €16,000 - €3,120 |
| Decision | Pilot, not full rollout | Must beat the spreadsheet and current process in a measured trial |

## Week 4 clinic and cross-pollination notes

- **Self-diagnostic pattern:** 5 — no volume (provisional; change this if you selected another pattern in class).
- **Question to ask the cluster/teacher:** What evidence would establish actual monthly scouting volume and handling time?
- **Cluster finding from classmates:** [Fill in the actual sentence reported by your group.]
- **Cross-pollination takeaway:** [Fill in a real insight you heard from another group.]

## FabLab probe plan

The 28 September introduction was a tour of available equipment, including laser cutting and 3D printing. That introduction is not the future probe booking.

| Machine | Artifact / probe | Future FabLab session |
|---|---|---|
| Laser cutter | A visual scouting workflow panel, showing when a candidate proceeds to manual review. | **[Enter confirmed booked date]** |
| 3D printer | A small holder/stand for physical player-profile cards used to simulate a shortlist review. | **[Enter confirmed booked date]** |
| Fabricator | A small label/card or physical display part, subject to confirmation of the machine's capabilities. | **[Enter confirmed booked date]** |

Book the session and add its real date. Keep the classroom notes blank until you can enter what classmates actually said.


---

## ScoutLab V2 — actual evaluation log (Week 4)

**Status: all 15 UI cases reported as passed by the student.** The assistant has recorded the student's confirmation; the interactive results were not independently observed. The expected answers in `build/scoutlab/evaluation-plan.md` remain unchanged.

| Case | Input/action | Run 1 result | Run 2 result | Pass/fail | Failure type (F1–F6) | Notes/evidence |
|---:|---|---|---|---|---|---|
| 1 | Find Erling Haaland | Pass (reported) | Not repeated | **Pass** | None | Student reports expected profile facts displayed. |
| 2 | Find Bukayo Saka | Pass (reported) | Not repeated | **Pass** | None | Student reports expected profile facts displayed. |
| 3 | Find Mohamed Salah | Pass (reported) | Not repeated | **Pass** | None | Student reports expected profile facts displayed. |
| 4 | Find Cole Palmer | Pass (reported) | Not repeated | **Pass** | None | Student reports expected profile facts and Forward grouping. |
| 5 | Find Phil Foden | Pass (reported) | Not repeated | **Pass** | None | Student reports expected profile facts and Forward grouping. |
| 6 | Find Declan Rice | Pass (reported) | Not repeated | **Pass** | None | Student reports expected midfielder profile facts. |
| 7 | Find Rodri | Pass (reported) | Not repeated | **Pass** | None | Student reports expected midfielder profile facts. |
| 8 | Find Virgil van Dijk | Pass (reported) | Not repeated | **Pass** | None | Student reports expected defender profile facts. |
| 9 | Find Aaron Wan-Bissaka | Pass (reported) | Not repeated | **Pass** | None | Student reports expected defender profile facts. |
| 10 | Find Alisson Becker | Pass (reported) | Not repeated | **Pass** | None | Student reports goalkeeper profile and missing attacking values behaved as expected. |
| 11 | Compare Haaland and Saka | Pass (reported) | Not repeated | **Pass** | None | Student reports comparison behaved as expected. |
| 12 | Similar-player search for Haaland | Pass (reported) | Not repeated | **Pass** | None | Student reports similar-player search behaved as expected. |
| 13 | Open Hidden Gems using default data | Pass (reported) | Not repeated | **Pass** | None | Student reports no-value warning/template behaved as expected. |
| 14 | Upload controlled test value CSV with at least three same-position players and synthetic prices | Pass (reported) | Not repeated | **Pass** | None | Student reports synthetic value upload/comparison worked. |
| 15 | Export shortlist containing two chosen players | Pass (reported) | Not repeated | **Pass** | None | Student reports shortlist export behaved as expected. |

### Timed comparison (same profiles, same task)

| Trial | Current manual/spreadsheet time | ScoutLab time, including data checks | Corrections needed | Useful candidates found | Notes |
|---:|---|---|---|---|---|
| 1 | — | — | — | — | — |
| 2 | — | — | — | — | — |
| 3 | — | — | — | — | — |

### Results summary (UI outcome reported by student)

- Cases passed: **15 / 15 (student-reported)**
- Cases failed: **0 reported**
- F1 wrong: 0 reported · F2 fabricated: 0 reported · F3 missed: 0 reported · F4 format: 0 reported · F5 refused: 0 reported · F6 inconsistent: not tested by a second run
- Median manual/spreadsheet time: **Not measured**
- Median ScoutLab time including verification: **Not measured**
- Measured time difference: **Not available**
- Decision versus spreadsheet baseline: **Pending timed comparison**

The student's confirmation is the evidence for the 15 UI passes; the assistant did not independently observe those app interactions. A second run was not confirmed, so consistency (F6) remains untested.

Do not convert the hypothetical €16,000/year capacity estimate into a measured ROI until the time comparison has been completed and a real workload has been established.


---

## ScoutLab V2 — checks actually completed (13 October 2026)

**Scope note:** The student subsequently confirmed that all 15 interactive cases passed. The results are marked as student-reported in the table above; the assistant did not independently observe the live UI. The manual-versus-ScoutLab timing table remains open because no measurements have been provided.

### Reference-dataset fact check (source-level support for cases 1–10)

I fetched and checked the same public CSV URL used by `app.py`. It contains 339 player rows. Each target player was present, and the pre-written source facts below matched the CSV. This verifies source-row facts only; I did not verify how each profile rendered in the live UI.

| Case | Player | Checked source facts | Source-row result | UI profile result |
|---:|---|---|---|---|
| 1 | Erling Haaland | Manchester City; Forward; age 23; 2,556 minutes; goals/90 0.95; xG/90 1.03 | Match | Pass (reported) |
| 2 | Bukayo Saka | Arsenal; Forward; age 21; 2,933 minutes; goals/90 0.49 | Match | Pass (reported) |
| 3 | Mohamed Salah | Liverpool; Forward; age 31; 2,535 minutes; goals/90 0.64 | Match | Pass (reported) |
| 4 | Cole Palmer | Chelsea; source position FW,MF; grouped Forward; age 21; 2,624 minutes; goals/90 0.75 | Match | Pass (reported) |
| 5 | Phil Foden | Manchester City; source position FW,MF; grouped Forward; age 23; 2,865 minutes; goals/90 0.60 | Match | Pass (reported) |
| 6 | Declan Rice | Arsenal; Midfielder; age 24; 3,230 minutes; tackles/90 1.4; pass success 90.7% | Match | Pass (reported) |
| 7 | Rodri | Manchester City; Midfielder; age 27; 2,938 minutes; pass success 92.5% | Match | Pass (reported) |
| 8 | Virgil van Dijk | Liverpool; Defender; age 32; 3,178 minutes; clearances/90 4.0; pass success 91.5% | Match | Pass (reported) |
| 9 | Aaron Wan-Bissaka | Manchester United; Defender; age 25; 1,781 minutes; tackles/90 1.3; interceptions/90 2.1 | Match | Pass (reported) |
| 10 | Alisson Becker | Liverpool; Goalkeeper; age 30; 2,520 minutes; attacking fields are missing in the source CSV | Match | Pass (reported) |

**Source-row result:** 10/10 expected fact sets matched in the reference CSV. Separately, the student later reported passing the 10 UI profile cases.

### Core unit tests

I could not create a fresh repository clone because direct GitHub access from this execution environment failed. To test the logic nevertheless, I reproduced the current `scouting_core.py` and `test_scouting_core.py` contents in an isolated local test folder and ran `python -m pytest -q`.

**Result: 4 passed in 1.18 seconds.** The tests cover name/position normalization, market-value parsing and units, scoring plus a synthetic value overlay (including value-gap and provenance fields), and similar-player output excluding the reference player and supplying similarity scores. This is a local reconstruction of the current source, not a run inside the actual Streamlit UI.

### Case-by-case interpretation of the checks

| Case(s) | What was actually checked | Status |
|---|---|---|
| 1–10 | Source facts plus live profile behavior | Student reports all ten UI cases passed |
| 11 | Haaland/Saka comparison | Student reports pass |
| 12 | Similar-player search for Haaland | Student reports pass |
| 13 | Default data has no values; warning/template | Student reports pass |
| 14 | Synthetic valuation upload/comparison | Student reports pass |
| 15 | Two-player shortlist CSV export | Student reports pass |

**Failure classification:** The student reported no failures in the 15 UI cases. The four code tests and source-row checks also passed. F6 consistency remains untested because a second full run was not confirmed.

### Timed comparison — still required

**Not run.** This environment could not open the live/local Streamlit interface, so I have no genuine ScoutLab interaction time or spreadsheet time to report.

For a fair, quick trial, time the same fixed task in both workflows: find Haaland and Saka, verify their position/minutes/goals-per-90, compare them side-by-side, create a shortlist containing exactly those two players, and export/open the CSV. In the spreadsheet workflow, locate the same two rows and create/export the same two-player comparison. Start the timer at the first search/filter action and stop only when the exported file is open; include any data checks and corrections. Repeat three times and enter the actual times and corrections in the timed-comparison table above. This measures retrieval/comparison/export workflow time, not scouting accuracy or candidate-selection quality.
