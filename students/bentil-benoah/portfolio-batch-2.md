# Portfolio Batch 2 — Weeks 5 to 8

**Student:** Bentil Benoah Boakye · **Track:** 4 ECTS
**Beat:** AI in ERP and Business Process Automation (Odoo)
**Prepared:** 27 November 2026, after my Week 8 Canvas submission

This is an index of my Weeks 5–8 activity work, for review at Week 8 alongside the Build and Skills Passport Checkpoint 2. It only links work that exists. Missing or partial items are listed for each week and in the summary at the end. I did not take the 6 ECTS extensions (optional on 4 ECTS).

## Week 5 — Market mechanism thinking

Canvas: submitted 23 October 2026, 23:21.

- [Signal post 5: "Can AI Find Odoo? A GEO Audit"](posts/week-05.md). It contains my six-criterion GEO audit of Odoo (scored 0–3) and the four-factor vulnerability assessment.
- **Check:** the GEO audit and vulnerability assessment are inside the post. There is no separate evidence file in the repository.

## Week 6 — Cost projection

Canvas: submitted 30 October 2026, 23:58. The evidence was pasted into the Canvas text entry and is not stored in this repository.

- [Signal post 6: "What Does an AI-Powered ERP Customer Enquiry Classifier Actually Cost?"](posts/week-06.md). It contains the scale projection, the error cost and the "when does it stop being worth it" break point.
- Canvas evidence: per-call cost calculation, cost projection at 100/1,000/10,000 users, error cost and a break-point error rate of about 16.7%.
- **Partial:** the per-call cost in my Canvas evidence used the course's mock API response, not my own API call. In the post I measured 42 input tokens in Google AI Studio but guessed the output tokens. So my Week 6 Build was not costed from a complete real API usage object. Real token counts for my own Build came later: in Week 7 (local) and Week 8 (2,606 input / 68 output tokens, see Week 8).

## Week 7 — Lock-in detection

Canvas: submitted 20 November 2026, 11:51.

- [Signal post 7](posts/week-07.md): lock-in scorecard (7/15) and Build/Buy/Connect choice.
- [Week 7 Build evidence](build/week-07-evidence.md): five-dimension lock-in scorecard, Build run on a model I own (local Llama 3.2 3B: 2/10 per run, against 10/10 for the historical cloud log), €800 prototype migration estimate.
- Week 7 runs are now also entered in the [Build log](build/log.md).
- **Partial:**
  - the cloud test's cost is unknown, so only one of the two "both costs" is given;
  - the per-case Week 7 raw replies were never uploaded, so only the two quoted double-payment replies are available;
  - my architecture recommendation is for my own hypothetical Odoo SME, and I have not shown it is one of the three course scenarios.

## Week 8 — Design defense

Canvas: submitted 27 November 2026, 21:38.

- [Signal post 8](posts/week-08.md): BelSupply BV integration architecture.
- BelSupply: [five-layer architecture and Build placement](build/week-08/belsupply-architecture.md), [sketch](build/week-08/belsupply-architecture.svg), [cost model with Month 1/6/12](build/week-08/belsupply-costs.md).
- Northwind, done individually as catch-up: [use case, five layers and five board-defense answers](build/week-08/northwind-catch-up.md), [sketch](build/week-08/northwind-architecture.svg), [cost model with Month 1/6/12](build/week-08/northwind-costs.md).
- Supporting: [source checks](build/week-08/source-checks.md), [token projections](build/week-08/token-projections.md), [calculation script](build/week-08/check_financials.py) and [outputs](build/week-08/financial-checks.json).
- Build Checkpoint 2: [checkpoint summary](build/week-08/checkpoint-summary.md), [raw results](build/week-08/results.jsonl), [prediction](build/week-08/prediction.json), [prompt v2](build/prompt-v2.txt), [Build log](build/log.md).
- [Skills Passport, Checkpoint 2](passport.md).
- **Missing:** both peer critique forms (the one given and the one received). I missed the Week 8 class, did not join a team or board round, and have no critique forms. No forms have been created after the fact.
- **Partial:**
  - the cost one-pagers are dated, but hardware, labour and power prices are my own planning assumptions, not cited supplier prices;
  - no fablab deployment observation, because the session was never booked.

## Summary of missing or partial work

| Week | Item | Status |
|---|---|---|
| 6 | Cost from my own complete API usage object | Partial (mock response; output tokens guessed) |
| 7 | Cost of both models | Partial (cloud cost unknown) |
| 7 | Per-case raw Week 7 replies | Not available in repository |
| 8 | Critique form given | Missing (absent from class) |
| 8 | Critique form received | Missing (absent from class) |
| 8 | Cited price sources in cost one-pager | Partial (assumptions dated, not sourced) |
| 8 | Fablab observation | Not done |

*Assistance:* Claude compiled this index from my existing repository files and my Canvas submissions. It adds no new results.
