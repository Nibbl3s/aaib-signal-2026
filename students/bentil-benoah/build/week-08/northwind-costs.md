# Northwind — Week 8 cost evidence

Bentil Benoah Boakye · 4 ECTS · planning assumptions dated 27 November 2026

**Individual catch-up after missing class; no team or peer critique claimed.**

All euro amounts are planning assumptions, not verified quotations, actual wages or measured power costs. No VAT or financing calculation is included; final quote/tax treatment could change the budget. [Source and licence checks](source-checks.md) identify entitlement and language risks. **Only the classifier experiment and its tokens/timings were measured.** Northwind performance is entirely unmeasured; its 15% error scenario is not an observed result.

## Period and assumptions

Use 250 working days per full operating year and 250/12 days per average operating month. The budget includes implementation plus twelve operating months; it is not a measured three-month-build cash-flow schedule. If the first-year cap instead covers twelve calendar months from approval, align procurement and the actual go-live date before approval. Constant-volume and growth budgets below are separate scenarios.

- Launch volume: 300 enquiries/day; 75,000 per year.
- Labour €30/hour; human review 15 seconds/query = €0.125; additional correction 30 seconds/error = €0.25/error.
- Error scenario 15% gives €0.0375 correction/query, for **€0.1625 review plus correction/query**. Review time applies to every ticket; correction is additional and not double-counted.
- Northwind bears review/correction costs. The scenario assumes errors receive correction effort; actual reviewer detection and final accuracy are unknown. Downstream losses from missed errors, shipment delays, complaints and outages are unquantified and excluded, not assumed absent.
- Existing Salesforce edition/API entitlement assumed adequate for zero incremental platform licence cost; verify before accepting the budget. Do not add Microsoft 365, WhatsApp, SAP, TMS or Power BI launch connections to Northwind.
- No external per-token inference charge; local hardware, power, software and maintenance are cost-bearing. Capacity and logging/security configuration are untested.

## Constant-volume first-year budget

| Component | Cost |
|---|---:|
| Salesforce-only integration development | €20,000.00 |
| Dedicated AI server | €2,400.00 |
| Middleware/software allowance | €1,200.00 |
| Infrastructure/electricity allowance | €1,200.00 |
| Maintenance and monitoring | €2,400.00 |
| Training | €1,500.00 |
| External token provider charges | €0.00 |
| Human review | €9,375.00 |
| Additional error correction | €2,812.50 |
| Subtotal | €40,887.50 |
| Contingency: 15% of subtotal | €6,133.13 |
| Total | €47,020.63 |
| Budget remaining, subtracting rounded total | €2,979.37 |

Fixed first-year costs before contingency: **€28,700.00**. Upfront investment = **€23,900.00** (€20,000 development + €2,400 server + €1,500 training). Fixed recurring cost before contingency is €4,800/year, or €400/month. Existing company platform subscriptions are sunk costs excluded from this incremental model; new API/licence charges would be incremental.

The €20,000 development allowance is an assumption. At an illustrative €50/hour it buys 400 total hours, or 200 hours per developer spread over three months; it does not pay two full-time developers for three months. The analyst support is assumed included in the €2,400 monitoring allowance, with additional capacity uncosted. Confirm resource availability and scope before treating the three-month timeline as feasible.

## Month 1, 6 and 12 scenarios

First-year allocated monthly cost = (fixed first-year costs / 12 + monthly queries × €0.1625) × 1.15.
Recurring monthly cost with reserve = (fixed recurring costs / 12 + monthly queries × €0.1625) × 1.15.

| Operating month | Daily enquiries | Monthly enquiries | Review | Extra correction | External token fee | First-year allocated total | Recurring with reserve |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | 300 | 6,250.00 | €781.25 | €234.38 | €0 | €3,918.39 | €1,627.97 |
| 6 | 600 | 12,500.00 | €1,562.50 | €468.75 | €0 | €5,086.35 | €2,795.94 |
| 12 | 900 | 18,750.00 | €2,343.75 | €703.13 | €0 | €6,254.32 | €3,963.91 |

The allocated column spreads hardware, integration and training across twelve months; it is not a cash-flow claim. Arithmetic uses unrounded query counts and costs; individual displayed cells can differ by a cent from a sum of rounded cells. ROUND_HALF_UP is used for final euro displays. The Northwind figures €3,918.39 / €5,086.35 / €6,254.32 and BelSupply €929.82 / €1,319.15 / €1,708.47 agree with the supplied draft.

## Annual growth forecast — explicit additional assumption

Months 1–5 stay at launch volume; months 6–11 double; month 12 triples. This step schedule is added for analysis because three point-in-time volumes do not define an annual forecast; it is not claimed as the company's forecast. Average monthly working days stay 250/12. Fixed costs and error/review rates stay constant, conditional on capacity and staff availability.

This gives **125,000.00 enquiries** and **€56,364.38 first-year cost**. This exceeds the €50,000 budget by €6,364.38; the launch estimate alone cannot justify approval under sustained growth. Cap scope/volume or secure additional budget and capacity before rollout. Hypothetical first-year ROI under this schedule is 10.89%, conditional on the same manual baseline and time savings.

## Value, ROI and payback

For Northwind only, add a clearly labelled sensitivity assumption of 60 seconds/query for manual categorisation; this was not measured or supplied as Northwind-specific baseline data. Without that assumption, ROI/payback cannot be established. At €30/hour manual categorisation costs €0.50/query, giving **€37,500.00/year** at launch. Subtracting the rounded AI-assisted first-year total yields **€-9,520.63** net capacity value and **-20.25% ROI**, where ROI = (manual cost − AI-assisted total) / AI-assisted total.

For payback, do not divide upfront investment by savings that already include that upfront spend. Recurring annual cost before reserve is €16,987.50. With constant launch volume, **base payback is 13.98 operating months** using upfront investment / net monthly recurring savings; applying 15% reserve to both upfront and recurring costs gives **18.36 operating months**. These are post-launch capacity-value estimates, not verified cash payback, and presume the same savings continue beyond year 1 where needed.

Under the explicit growth schedule, cumulative end-month recurring savings recover upfront plus reserve after approximately **10.79 operating months** (linear interpolation within the recovery month). Real implementation spending/go-live dates would alter calendar payback; add the three-month implementation window only if all upfront spend occurs before it and no savings start during it. Salaries may not reduce, so these time savings may never become cash savings.

## Cost per correctly handled query

At launch use the 85% **model-only planning scenario**, not an assumed measured production rate: total including review, errors, upfront cost and contingency / (annual enquiries × 0.85) = **€0.7376 per model-correct query**. This conservative denominator does not claim the three wrong outputs stayed wrong after review; it shows how cost changes with measured-model quality assumed for planning.

If, purely hypothetically, human review corrected every error and every query were finally correct, total / all queries would be **€0.6269**. Final reviewed accuracy has not been measured, so do not report that value as actual cost per correctly resolved ticket. Classification is not complete customer-enquiry resolution.

## Scaling and sensitivity

See [measured-token projections](token-projections.md). At three times volume fixed costs do not automatically triple; review and correction costs do. Model throughput, four-language accuracy, ticket length, review time, error cost and licence entitlements must be tested before accepting these scenarios. Maintaining the same 15% error rate at all volumes is an assumption. No hardware benchmark establishes that a single server can process 10,000 enquiries/day.

Reproduction: [check_financials.py](check_financials.py), [financial-checks.json](financial-checks.json). Calculations round only at final display. All Build experiment bytes remain unchanged.

**AI disclosure:** ChatGPT assisted the supplied architecture and cost draft; Codex independently recalculated arithmetic, separated upfront/recurring costs, added explicit growth/payback assumptions and checked official sources. No supplier quotation, operating expense, production accuracy or deployment is claimed.
