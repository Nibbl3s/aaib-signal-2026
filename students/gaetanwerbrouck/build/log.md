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

### Timed comparison — actual measurements still required

**Status: NOT RUN / NOT VERIFIED.** The example times previously shown below were illustrative only and have been removed from the results table so they cannot be mistaken for observed evidence. No genuine ScoutLab-versus-spreadsheet time-saving percentage is currently claimed.

**Task:** Identify Haaland and Saka, verify position/minutes/goals per 90 against the 2023/24 dataset, compare them, create a shortlist containing exactly those two players, and export/open the CSV.

**Protocol:** Use the same source data and task in both workflows. Start timing at the first search/filter action and stop when the exported file is open. Include data checks and corrections. Repeat three times per workflow. Record correction counts and any failures. This measures workflow time, not scouting accuracy or candidate-selection quality.

| Trial | ScoutLab observed time | Spreadsheet observed time | ScoutLab corrections/errors | Spreadsheet corrections/errors |
|---|---|---|---|---|
| 1 | Pending real run | Pending real run | Pending | Pending |
| 2 | Pending real run | Pending real run | Pending | Pending |
| 3 | Pending real run | Pending real run | Pending | Pending |
| Average | Pending real run | Pending real run | Pending | Pending |

**Calculations to complete after the trials**

- Mean time (seconds) = sum of three observed times ÷ 3.
- Time reduction (%) = (spreadsheet mean − ScoutLab mean) ÷ spreadsheet mean × 100.
- Report correction counts alongside the time result; do not treat faster output as better if it introduces more errors.

**Current conclusion:** The timing comparison is outstanding. The ROI figures in the Week 4 memo and Signal Post 4 remain scenario estimates, not measured savings. Do not claim a measured time reduction or positive ROI until these trials have been run.


---

## Build Checkpoint 2 (Week 8, 27 November 2026): revision v2, "code compares, model writes"

**Status:** revision made, prediction written, then re-measured on my laptop on 27 November 2026. The prediction below was drafted with AI help, shown to me before the run and left unchanged.

### Reason for the revision

In the Week 7 probe, llama3.2:3b passed 4 of 20 player notes. The main failures were picking the wrong strongest metric (10 of 20) and the wrong weakest metric (14 of 20). One note can fail both. Finding the highest and lowest of about six numbers is something code does exactly, so there is no reason to ask a language model to do it.

### The change

- `scout_summary.py`: with `precompute=True`, each player's block now includes a STRONGEST and a WEAKEST line calculated by ScoutLab, and the instruction tells the model to copy them. The ScoutLab app now uses this version.
- `precompute=False` still builds the Week 7 prompt. I checked that its exported text matches the Week 7 `prompt.txt` (ignoring Windows line endings).
- `ask_model` can now collect the token counts the endpoint reports, and `run_probe.py` has a `--precompute` switch and writes those counts into the results file.
- The checker and the ten players are unchanged. Unit tests: 5 summary tests and 4 core tests passed in a Linux test environment. The Week 7 saved llama answers still score 4 of 20. A fake local endpoint was used only to test that the new code path runs; it says nothing about model quality.

### Prediction (written before any v2 run with a real model)

Baseline: 4 of 20, wrong strongest 10, wrong weakest 14, invented numbers 0, unsupported claims 0, exact format 0 of 20.

1. Success rises to **at least 16 of 20**.
2. Wrong strongest and wrong weakest each fall to **2 or fewer**.
3. Invented numbers stay at 0. This is the one I would watch, because the prompt changed.
4. Exact format may still fail. It is reported separately and does not count toward success.
5. Misleading prose such as calling a 23rd-percentile figure "above the average" will **not** be fixed. The change does not touch it and the checker cannot detect it.

**Why I expect this:** it moves a calculation out of the language model into code. A related published approach, program-aided language models, also hands the calculating step to a program and reports better results (Gao et al., 2023). Their setup differs from mine (the model writes the program there), so it supports the direction, not my specific numbers.

Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., & Neubig, G. (2023). PAL: Program-aided language models. *Proceedings of the 40th International Conference on Machine Learning, PMLR, 202*, 10764–10799. https://proceedings.mlr.press/v202/gao23f.html

**What a better score will and will not mean:** the strongest and weakest checks now test whether the model can copy a given label, not whether it can reason about the numbers. With temperature 0, the two runs may be identical, which would make 20 notes closer to 10 independent results.

### Re-measurement (same ten players, same checker, two runs each)

Both versions were run one after the other on my laptop with llama3.2:3b at temperature 0. I re-ran v1 to get endpoint-reported token counts. It scored 4 of 20 again, with the same failure counts as in Week 7.

| Measure | v1 (re-run, 27 Nov) | v2 (27 Nov) |
|---|---:|---:|
| Success on the checker | 4 / 20 | 20 / 20 |
| Wrong strongest | 10 | 0 |
| Wrong weakest | 14 | 0 |
| Invented numbers | 0 | 0 |
| Unsupported claims (keyword check) | 0 | 0 |
| Missing summary | 0 | 0 |
| Exact format | 0 / 20 | 0 / 20 |
| Input tokens per run of 10 (reported) | 1,875 | 2,233 |
| Output tokens per run of 10 (reported) | 1,145 and 1,147 | 801 and 801 |
| Seconds, run 1 and run 2 | 172.0 and 131.5 | 175.7 and 106.0 |
| Summaries that quote a stat value or percentile | 18 / 20 | **0 / 20** |

The last row is not part of the checker. I added it after reading the raw answers, by searching each SUMMARY line for a decimal number or the word "percentile". League minutes do not count. The two v2 runs produced identical text, so v2 is really 10 independent notes. The two v1 runs gave the same pass or fail for each player, but their text differed slightly.

### Cost

- **API cost on the laptop:** €0 per call for both versions. Electricity, hardware and my time are not counted.
- **If billed:** at the course reference price for gpt-5.6-terra ($2 / $12 per 1M tokens, snapshot 7 September 2026, $1 = €0.92), using llama's reported token counts: v1 about €0.0161 per 10 notes, v2 about €0.0130, about 20% less. Input rose by 358 tokens (19%) and output fell by about 345 (30%); output is priced six times higher. This is a what-if at another model's price, not a bill. The Week 7 estimate for input (1,424, characters ÷ 4) was about 24% below the 1,875 reported.
- **Error cost and who pays it:** the club pays the scout's time to find and fix a bad note. My Week 4 assumption is 10 minutes at €40/hour, €6.67 per error; I have not measured it. By the checker, 16 failed v1 notes would cost about €107 per 20 notes (upper-end scenario) and v2 would cost €0. The €0 is too optimistic: on reading the 10 unique v2 notes (read-through done with AI help), at least 2 draw conclusions the statistics cannot support. At the same assumption that is about €13 per 10 notes, if a scout spots them. The player carries a different cost if a wrong note makes a club overlook him, and I have not priced it. The API provider pays none of it.

### Delta explanation: did the change do what I predicted?

| Prediction | Result |
|---|---|
| 1. At least 16 of 20 | Held: 20 of 20. I predicted less than it reached |
| 2. Wrong strongest and weakest 2 or fewer each | Held: 0 and 0 |
| 3. Invented numbers stay at 0 | Held on the count, but it means little: the v2 summaries quote no stat values, so there was almost nothing to invent |
| 4. Exact format may still fail | Held: 0 of 20. The model writes numbered names instead of the PLAYER: line |
| 5. Misleading prose will not be fixed | Partly right. The "above the average" wording I used as the example, seen in v1, does not appear in v2. Other misleading wording remains |

**Why the score rose:** code now does the comparison. The checker's strongest and weakest tests now mostly measure whether the model can copy a label, so 20 of 20 is not evidence that it reasons better about football data.

**What I did not predict:** the summaries stopped quoting stat values, although the instruction still asks for two sentences using the numbers. Most became "high X, indicating..., but Y is relatively low". The requested caveat became a bare "Sample size: N league minutes". I do not know why this happened. My change added two lines per player and altered two instruction lines, and I did not test them separately. The checker passes these notes because it looks for wrong numbers, not missing ones.

**Examples of remaining errors:** Harry Wilson's low expected goals is read as a sign he may not be clinical in front of goal, but expected goals measures the chances a player gets, not how well he finishes them. His strength is called "high" at the 62nd percentile. Martin Dubravka's saves per 90 are read as ability and his goals conceded as his effectiveness, although both depend heavily on the team's defence and the shots he faces.

**Decision:** keep v2 for picking the strongest and weakest metric. Do not treat its notes as reliable. The next revision, not made yet, should make the checker require the two relevant values in the summary, or have code write that sentence.

### FabLab deployment probe

Not run and not booked, so there is no probe observation in this delta.
