# Course alignment: ScoutLab Build

This folder contains the runnable application, not a replacement for the full Advanced AI for Business course assignments.

## Beat and decision problem

**Beat:** How Football Clubs Use Data to Find Undervalued Players.

**Decision supported:** Which players merit additional human scouting because their observed performance profile is strong relative to same-position peers, and, where dated market estimates exist, their performance rank is higher than their market-value rank.

The current app is a data-driven screening and comparison tool. It does not use a language model to decide who is undervalued, and it does not make signing decisions.

## Connection to the work already completed

| Course area | Existing evidence | How this Build uses it |
|---|---|---|
| Week 1: Cost literacy | euroshop-cost-model.md, week-01.md | Keeps data, setup, maintenance and human-review costs visible. |
| Week 2: Capability skepticism | build/framework.md, build/prompt.md, build/test-set.md, build/log.md | Preserves the conclusion that five fixed rules are better handled by a spreadsheet than by a language model. |
| Week 3: Vendor claim detection | week-03/claims.md, week-03/fomo.md, week-03/signal-post-3.md | Avoids calling the prototype predictive or production-ready without evidence. |
| Week 4: Value quantification and Passport checkpoint 1 | week-04/benefit-quantification.md, week-04/investment-memo.md, week-04/signal-post-4.md, passport.md | Replaces the five-rule toy with a more useful workflow, without carrying hypothetical ROI estimates forward as if measured. |
| Week 5: Market mechanism thinking | posts/week-05.md draft | Treats market value as a signal shaped by scarcity, demand, contracts and bargaining, rather than as an objective measure of player quality. |

## What remains across the course

The repository README says the Signal requires a weekly public post, with Weeks 4, 8 and 11 marked in depth. The Skills Passport is checkpointed in Weeks 4, 8 and 12. The Passport also identifies later skills as cost projection (Week 6), lock-in detection (Week 7), design defense (Week 8), attack-surface thinking (Week 9), regulatory reasoning (Week 10), cross-domain transfer (Week 11), synthesis (Week 12), and defense (Week 13).

This branch does not claim those future assignments are finished. The Build should evolve as later weeks introduce new constraints. Peer-review evidence, a booked FabLab session, and actual clinic/cross-pollination findings must still be recorded from real events rather than invented.

## Evidence needed before treating ScoutLab as validated

1. Run the unit tests and manually check the app against several profiles.
2. Record the source and date of every market-value input. The default 2023/24 reference dataset has no market-value column, so the hidden-gem comparison is intentionally unavailable until values are provided.
3. Check whether player statistics and value inputs cover the same season and use consistent player identities.
4. Test the app with someone who did not build it, record feedback and changes, and add actual course peer-review evidence separately.
5. Do not reuse the Week 4 ROI scenario for this larger tool until its costs, time saved, data work and validation burden have been measured again.
