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
3. **What I measured:** The user has confirmed that the app's interface and tabs are accessible and usable. The new expected-answer evaluation set and a timed manual-versus-ScoutLab comparison have **not yet been run**, so no ScoutLab accuracy or time-saving rate is claimed. The V1 20/20 result is not a V2 result.
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
