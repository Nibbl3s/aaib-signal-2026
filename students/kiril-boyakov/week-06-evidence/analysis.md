# Week 6 evidence — API cost projection

Author: Kiril Boyakov | Track: 4 ECTS | Measurement date: 2026-11-02
Beat: AI in European Freight Cost Estimation

## 1. What was actually measured

Two successful requests were sent through Hoppscotch using my Google API account. The assistant operated the browser with my permission. Request and response files preserve the actual data; no credentials are included. These are API measurements, not tokenizer estimates.

Endpoint: `POST https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent`

Requested alias: `gemini-flash-lite-latest`. Both responses identify the actual model as `gemini-3.5-flash-lite`. Aliases can change; record the returned model on subsequent runs.

| Call | Input tokens | Output tokens | Total | HTTP | Observed request time |
|---|---:|---:|---:|---|---|
| Return-policy exercise | 22 | 22 | 44 | 200 | 929 ms |
| Build v1, Test 01 | 352 | 42 | 394 | 200 | 734 ms |

Files: [intro request](intro-request.json), [intro response](intro-response.json), [Build request](build-request.json), [Build response](build-response.json).

Gemini calls its usage object `usageMetadata`. The Build response contains:

```json
{
"usageMetadata": {
  "promptTokenCount": 352,
  "candidatesTokenCount": 42,
  "totalTokenCount": 394,
  "promptTokensDetails": [{"modality": "TEXT", "tokenCount": 352}],
  "serviceTier": "standard"
}
}
```

The returned Build response was:

> Mode: ROAD
> Evidence: "Partial-Truck Load (PTL) and Full-Truck Load (FTL)"
> Reason: The description explicitly references truck transport through the mention of truck-load services.

Assessment: PASS for the expected ROAD label, exact supporting quotation and three-field format. This is one successful input, not a new representative accuracy measurement.

The introductory response promised a full refund or exchange although those policy details were not supplied. Its purpose here is demonstrating usage measurement; it should not be treated as an approved customer response.

Earlier attempts encountered a 404 for the unavailable Gemini 2.5 Flash model and a 503 high-demand response on the replacement model. These are availability failures, not classification errors. No token usage was returned for those errors. Their billing was not verified and no invented token charge is assigned.

## 2. Price and per-call calculation

Source: [Google pricing](https://ai.google.dev/gemini-api/docs/pricing), checked 2026-11-02. Gemini 3.5 Flash-Lite Standard paid rates: $0.30 per million input tokens and $2.50 per million output tokens, including thinking. No separate thinking count appeared in these two responses; reported input plus output equals total.

These calculations show the paid-rate equivalent. Account billing/free-tier status was not checked, so this is not a claim about an invoice. Taxes, exchange fees and paid external tools are excluded.

Formula: cost = input / 1,000,000 × input price + output / 1,000,000 × output price.

- Intro input: 22 / 1,000,000 × $0.30 = $0.0000066.
- Intro output: 22 / 1,000,000 × $2.50 = $0.000055.
- Intro total: **$0.0000616**.
- Build input: 352 / 1,000,000 × $0.30 = $0.0001056.
- Build output: 42 / 1,000,000 × $2.50 = $0.000105.
- Build total: **$0.0002106**.

For combining API dollars with labour euros, use the previous course budgeting convention $1 = €0.92. This is an explicit planning assumption, not a live exchange rate. Build token cost = €0.000193752 per run.

## 3. Beat use case and monthly Build volume

Continue Week 4's fictional EuroRoute Forwarding scenario: 3,000 descriptions/month. For scale modelling, assume ten active staff-user equivalents and an average of ten descriptions per user per calendar day: 10 × 10 × 30 = 3,000. This is a monthly workload allocation, not a claim that each employee works thirty days. Staffing, shifts and actual operating days need verification.

One API call classifies one description. Human confirmation precedes rate lookup. The tool neither calculates a freight price nor approves a quote. Structured intake fields or simple rules remain the comparison alternative.

Monthly input = 3,000 × 352 = 1,056,000 tokens; output = 3,000 × 42 = 126,000; total = 1,182,000.

Daily cost = 100 × $0.0002106 = $0.02106.
Monthly cost = 3,000 × $0.0002106 = **$0.6318**, or **€0.581256**.
Annual cost = 12 × $0.6318 = **$7.5816**, or **€6.975072**.

One short input is a weak basis for average usage. Longer enquiries, multilingual text and longer responses can raise tokens. The following tables hold the measured usage constant and do not establish throughput or rate-limit capacity.

## 4. Scale projection

### Calls per day (30 days/month; 12 months/year)

| Calls/day | USD/day | USD/month | USD/year |
|---:|---:|---:|---:|
| 10 | 0.00211 | 0.0632 | 0.7582 |
| 100 | 0.02106 | 0.6318 | 7.5816 |
| 1,000 | 0.21060 | 6.3180 | 75.8160 |
| 10,000 | 2.10600 | 63.1800 | 758.1600 |
| 100,000 | 21.06000 | 631.8000 | 7581.6000 |

### Users at ten calls/user/day

Calls/month = users × 10 × 30. Monthly cost = calls/month × $0.0002106; annual = monthly × 12.

| Users | Calls/month | USD/month | USD/year |
|---:|---:|---:|---:|
| 10 | 3,000 | 0.6318 | 7.5816 |
| 100 | 30,000 | 6.3180 | 75.8160 |
| 1,000 | 300,000 | 63.1800 | 758.1600 |
| 10,000 | 3,000,000 | 631.8000 | 7581.6000 |

## 5. Cost growth and alternative model prices

At 3,000 calls/month and constant volume:

| Scenario | Month 1 API USD | Month 12 API USD | Twelve-month API USD |
|---|---:|---:|---:|
| Flat usage and rates | 0.6318 | 0.6318 | 7.5816 |
| Unit cost rises linearly to 1.5× by Month 12 | 0.6318 | 0.9477 | 9.4770 |
| Stress case: 2× unit cost for every month | 1.2636 | 1.2636 | 15.1632 |

For the rising case, Month m multiplier = 1 + 0.5 × (m − 1)/11; average multiplier = 1.25. The 2× case is a scenario, not an upper limit on possible cost.

Prompt growth of 50%, output growth of 50%, and 20% more calls multiply cost by 1.5 × 1.2 = 1.8 if both token components grow together. Retries that generate additional billable outputs add further cost; do not assume every failed HTTP request is billed as a full successful call.

Price-only comparison using the same 352 input/42 output tokens:

| Model | USD/M input | USD/M output | USD/run | USD/3,000 runs |
|---|---:|---:|---:|---:|
| Gemini 3.5 Flash-Lite | 0.30 | 2.50 | 0.0002106 | 0.6318 |
| Gemini 3.8 Flash | 0.75 | 3.75 | 0.0004215 | 1.2645 |
| Gemini 4 Argon | 2.00 | 10.00 | 0.0011240 | 3.3720 |
| Local model, Week 7 measurement | — | — | Not measured | Not measured |

These are Standard rates on the measurement date, not measured outputs or quality comparisons across models. Actual token use can differ. Google lists Flash's rates doubling on 2027-01-01 and Argon's on 2026-12-01; those rows must not be annualised unchanged. Local hardware, electricity, operations and quality have not been measured.

## 6. Error cost using my Week 2 record

[Saved Build log](../build/log.md): 20/20 passing responses across ten distinct descriptions, each repeated. Test 01 used v1 individually; the other nine used v1b in two batches. The recorded model was GPT 6 Astra Medium, not this Gemini API model.

Recorded error rate = 0 / 20 = 0%. Repetitions, selected examples, batch context and the model change prevent treating this as proven production accuracy.

Keep Week 4 assumptions: routine handling 0.25 minutes at €30/hour = €0.125 per description. Additional correction takes 2 minutes at €30/hour = €1/error. This additional correction is separate from routine review. Undetected customer losses are not priced.

Monthly correction cost = 3,000 × error rate × €1.

| Error-rate case | Errors/month | Correction EUR/month | Tokens + correction EUR/month | Correction/token ratio |
|---|---:|---:|---:|---:|
| Recorded 0%, extrapolation only | 0 | 0 | 0.581256 | 0× |
| Assumed 1% | 30 | 30 | 30.581256 | 51.61× |
| Assumed 5%, Week 4 base | 150 | 150 | 150.581256 | 258.06× |
| Assumed 10% | 300 | 300 | 300.581256 | 516.12× |

Even one €1 correction costs more than the base month's tokens. Run unseen representative inputs through this API before estimating a Gemini failure rate.

## 7. Total integration cost and break point

Retain the Week 4 planning inputs: setup €2,700 (€2,400 implementation/evaluation + €300 training), maintenance €80/month, hosting €10/month, manual baseline 1 minute at €30/hour = €0.50/description. These have not become measured costs merely because API usage is now measured.

At 3,000 monthly descriptions and 5% additional correction:

- Routine human handling = 3,000 × €0.125 = €375/month.
- Corrections = 3,000 × 0.05 × €1 = €150/month.
- Recurring process cost = €375 + €150 + €90 + €0.581256 = **€615.581256/month**.
- Annual recurring cost = €7,386.975072.
- First-year process cost = €7,386.975072 + €2,700 = **€10,086.975072**.
- Manual annual capacity cost = 3,000 × 12 × €0.50 = €18,000.
- First-year net capacity value = €18,000 − €10,086.975072 = **€7,913.024928**.

This replaces Week 4's token estimate only. It does not demonstrate cash savings or deployment readiness. Staff time must be productively redeployed for the capacity value to be realised. Authentication, monitoring, privacy review, rate limits and escalation must fit the provisional integration budget or be added.

### Volume break-even

Let N be descriptions/month and e the correction rate. First-year monthly-equivalent AI cost = N × (€0.125 + e × €1 + €0.000193752) + €90 + €2,700/12.

Manual cost = N × €0.50.

At e = 5%, saving per description = €0.50 − €0.125 − €0.05 − €0.000193752 = €0.324806248.

Break-even N = €315 / €0.324806248 = **969.81 descriptions/month**, rounded up to **970**. Excluding first-year setup, steady-state break-even = €90 / €0.324806248 = **277.09 descriptions/month**, rounded up to **278**.

The break point rests on the unmeasured reduction from 60 to 15 seconds, €1 corrections, 5% error, useful staff capacity, and fixed overhead remaining sufficient. If manual classification takes only 15 seconds, AI has no labour advantage and adds costs. At larger scales, additional staff and infrastructure make fixed overhead assumptions unreliable.

### Failure-rate break point at current volume

At N = 3,000, break-even e = 0.50 − 0.125 − 0.000193752 − 315/3,000 = **26.9806%**. This is an accounting threshold, not an acceptable error target. Expensive undetected mistakes would lower it substantially.

There is no defensible revenue break-even because this internal tool has no demonstrated revenue. With no fixed costs, proportional revenue and variable costs have a constant ratio, so user growth alone does not create a crossing. Fixed costs, such as those included above, can create a volume break-even; changes in staffing or usage can create further thresholds. A hypothetical 10%-of-revenue warning would require a justified revenue input; none is invented here.

## 8. Decision and remaining uncertainty

Pilot against manual classification and simple rules. Measure net handling time, representative failure rate, input-length distribution and retry behaviour before approving integration. Set usage alerts and a spending cap, log actual model versions, and use bounded retries with delay for temporary failures.

The required API evidence, beat projection and Build costing are included. The two-provider extension is optional on my 4-ECTS track and was not performed. No local-model result is claimed.

Sources: [Week 6](https://advanced-ai-in-business.vercel.app/week/6), [Google prices](https://ai.google.dev/gemini-api/docs/pricing), [Week 4 assumptions](../week-04-evidence/analysis.md), [Week 2 log](../build/log.md).

Preparation note: the separate rubric Markdown URL could not be retrieved in this session. This evidence was checked against the supplied deliverables and Week 6 page, not falsely described as checked against that inaccessible rubric.

AI assistance: ChatGPT operated the authorised API requests, organised the observed responses, drafted the analysis and checked calculations. Operational assumptions are hypothetical; no interviews or additional accuracy tests are claimed.
