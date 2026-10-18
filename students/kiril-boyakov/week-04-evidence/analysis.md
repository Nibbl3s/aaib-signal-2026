# Week 4 evidence — Value quantification

Author: Kiril Boyakov  
Beat: AI in European Freight Cost Estimation  
Date: 2026-10-18  
Track: 4 ECTS

## 1. Candidate and business context

EuroRoute Forwarding is a fictional composite European freight forwarder handling road, air and sea enquiries. For this planning scenario, it processes 3,000 freight descriptions per month.

The candidate is my existing transport-mode classifier. It reads a description, returns a mode and quotes supporting evidence. It flags insufficient information and unsupported modes. It does not select a carrier, calculate prices or approve customer quotes.

Its proposed position in the value chain is:

Customer enquiry → transport-mode classification → human confirmation → rate lookup → price calculation → quote approval → booking.

Only the classification stage is included in this business case. Benefits from automating the entire quotation process are excluded.

## 2. Self-diagnostic

My main issue is “accuracy does not equal value.” My selected tests passed, but I have not measured whether using the tool is faster than manual classification after review and correction.

The most important missing measurements are actual monthly volume, manual handling time, review time, error frequency and correction time. This is an individual analysis; I am not claiming participation in a classroom clinic or peer discussion.

## 3. Five-criterion candidate filter

| Criterion | Assessment | Reason |
|---|---|---|
| Repetitive | Yes, within the scenario | The assumed workload is 3,000 descriptions each month. Actual demand must be verified. |
| Pattern-based | Yes | Classification uses explicit language identifying transport modes. |
| Error-tolerant | Conditional | A trained employee checks the source and label before any rate category is used. Review reduces risk but does not guarantee that every error is caught. |
| Cost-justifiable | Conditional | The economic case is positive under the base assumptions but becomes negative in the combined downside scenario. |
| Verifiable | Yes, with limitations | Labels and quotations can be checked against source descriptions. Ambiguous examples need a predefined expected response. |

Verdict: a candidate for a limited comparative pilot, not immediate deployment.

The simpler alternative is a structured intake form or keyword rules with manual handling of ambiguous cases. It must be tested alongside the AI.

## 4. What my Build evidence actually shows

The saved Week 2 log records:

- Ten distinct descriptions, each assessed twice.
- Twenty passing responses out of twenty recorded responses.
- Prompt v1: two responses covering one distinct input.
- Prompt v1b: eighteen responses covering nine distinct inputs in two batches.
- No failures or inconsistencies recorded.

Observed pass rate = 20 ÷ 20 × 100 = 100%.

These are selected public service descriptions, not a representative sample of production enquiries. Repeated responses are not twenty independent inputs. Batch context and the two prompt versions limit generalisation.

The 100% result is used only as an observed test result. The business case separately uses an assumed 95% acceptable-output rate for planning.

## 5. Assumptions register

All operational and cost figures below are estimates for this fictional scenario unless explicitly identified as recorded test results.

| Input | Planning assumption | Evidence still needed |
|---|---:|---|
| Monthly volume | 3,000 descriptions | Intake records |
| Annual volume | 3,000 × 12 = 36,000 | Seasonal workload |
| Manual classification time | 1 minute per description | Timed manual baseline |
| AI-assisted routine handling | 0.25 minutes per description | Timing including submission, reading and confirmation |
| Outputs requiring correction | 5% | Unseen representative test set |
| Additional time per correction | 2 minutes | Timed correction exercise |
| Loaded employee cost | €30/hour | Employer cost information |
| Input tokens per call | 800 | Actual usage, including instructions |
| Output tokens per call | 100 | Actual usage |
| Input price | €2 per million tokens | Explicit budgeting assumption, not a provider quote |
| Output price | €12 per million tokens | Explicit budgeting assumption, not a provider quote |
| Implementation and evaluation | 60 hours × €40 | Scoped implementation estimate |
| Staff training | 10 total staff-hours × €30 | Training plan |
| Maintenance | 2 hours/month × €40 | Monitoring and support requirements |
| Hosting | €10/month | Deployment quotation |

The proposed deployment uses one call per description. It is not assumed to have the same performance as the batch tests. Additional retries or a change of model require recalculation.

## 6. Benefit quantification — all four categories

| Category | Current state | Proposed state | Formula | Annual value |
|---|---|---|---|---:|
| Time saved | 36,000 × 1/60 = 600 hours | Routine handling: 36,000 × 0.25/60 = 150 hours | (600 − 150) × €30 | €13,500 |
| Revenue increase | No established sales effect | No additional sales assumed | 0 additional bookings × contribution per booking | €0 counted |
| Cost reduction | No identified expense eliminated | No licence, contractor or payroll reduction established | €0 identified current expense − €0 replacement expense | €0 counted |
| Risk mitigation | Probability and impact not measured | No proven risk reduction | Probability × impact × reduction; reduction credited as 0 pending evidence | €0 counted |
| Gross quantified benefit | | | €13,500 + €0 + €0 + €0 | €13,500 |

The time figure is capacity value, not automatically cash savings. Salaries may remain unchanged. To realise value, management must identify useful work for the released time or demonstrate an avoidable expense.

Correction time is deducted below, not hidden in the gross time-saving estimate. No labour saving is counted twice as both time saved and cost reduction.

## 7. Cost calculations

### Token usage

Annual input tokens = 36,000 × 800 = 28,800,000.

Annual input cost = 28,800,000 ÷ 1,000,000 × €2 = €57.60.

Annual output tokens = 36,000 × 100 = 3,600,000.

Annual output cost = 3,600,000 ÷ 1,000,000 × €12 = €43.20.

Annual token cost = €57.60 + €43.20 = €100.80.

These are budgeting rates in euros, not current prices for the model used in my tests.

### Implementation and running costs

| Cost | Formula | Amount |
|---|---|---:|
| Implementation and evaluation | 60 × €40 | €2,400 once |
| Staff training | 10 × €30 | €300 once |
| Total setup | €2,400 + €300 | €2,700 once |
| Maintenance | 2 × 12 × €40 | €960/year |
| Hosting | €10 × 12 | €120/year |
| Tokens | €57.60 + €43.20 | €100.80/year |
| Recurring technical costs | €960 + €120 + €100.80 | €1,180.80/year |

### Human correction

Cost per correction = 2/60 × €30 = €1.

Corrections per year = 36,000 × 5% = 1,800.

Annual correction cost = 1,800 × €1 = €1,800.

The freight-intake team bears this workload. Routine review of all outputs is already included in the 0.25-minute handling assumption.

This model assumes correction occurs before an operational decision. It does not price customer losses from undetected mistakes; evidence of such mistakes would weaken the case and require a separate loss estimate.

## 8. Net benefit, ROI and payback

Year 1 incremental costs = €2,700 + €1,180.80 + €1,800 = €5,680.80.

Year 1 net economic benefit = €13,500 − €5,680.80 = €7,819.20.

Economic ROI = €7,819.20 ÷ €5,680.80 × 100 = 137.6%.

Steady-state annual net benefit = €13,500 − €1,180.80 − €1,800 = €10,519.20.

Economic payback = €2,700 ÷ (€10,519.20/12) = approximately 3.1 months after full operation begins.

This is economic payback based on useful capacity, not proven cash payback. It assumes constant volume, immediate full adoption and twelve operational months. Implementation delays and gradual adoption would reduce first-year benefits.

### Cross-check against the full manual process

Current manual labour value = 600 × €30 = €18,000/year.

Proposed Year 1 process cost = routine handling €4,500 + correction €1,800 + setup €2,700 + technical running costs €1,180.80 = €10,180.80.

Difference = €18,000 − €10,180.80 = €7,819.20.

This agrees with the net-benefit calculation above.

## 9. Connecting performance to value

Let p be the proportion of outputs that meet the acceptance criteria without additional correction.

Annual correction cost = 36,000 × (1 − p) × €1.

Year 1 net economic benefit = €13,500 − €2,700 − €1,180.80 − [36,000 × (1 − p)].

| Performance assumption | Correction cost | Year 1 net benefit |
|---|---:|---:|
| 100%, matching the recorded selected-test rate | €0 | €9,619.20 |
| 95%, planning assumption | €1,800 | €7,819.20 |
| 90%, downside assumption | €3,600 | €6,019.20 |

The first row is an extrapolation for comparison, not a production forecast.

Economic break-even occurs when:

36,000 × (1 − p) = €9,619.20

p = 1 − 9,619.20/36,000 = 73.28%.

This is not an acceptable operational accuracy target. It assumes cheap, detectable mistakes. A confidently wrong label that escapes review could be far more expensive.

## 10. Pressure test

If gross time savings are 50% lower:

Gross benefit = €13,500 × 50% = €6,750.

Year 1 net benefit = €6,750 − €5,680.80 = €1,069.20.

If savings halve AND corrections rise to 10%:

Correction cost = 36,000 × 10% × €1 = €3,600.

Year 1 net benefit = €6,750 − €2,700 − €1,180.80 − €3,600 = −€730.80.

If released time cannot be used productively, its realised financial benefit could be zero. This is why the headline ROI is insufficient to approve deployment.

## 11. Proposed pilot and decision

Recommendation: PILOT, not full rollout.

Use 100 unseen, anonymised descriptions and expected answers established before testing. Compare manual classification, a simple rules-based method and the AI on equivalent cases. Separate participants or counterbalance test order to reduce learning effects.

Record correct labels, accurate evidence, required format, handling time, correction time, abstentions and failure types. An appropriate request for more information is not a failure.

Proposed gates are:

- At least 95 of 100 outputs meet the complete acceptance criteria.
- No material misclassification escapes the review stage in the pilot.
- Total staff time, including correction, is at most 60% of the measured manual baseline.
- A positive revised business case and a documented use for released capacity.
- An advantage over the simpler alternative sufficient to justify additional cost.

These are proposed gates, not achieved results. A small pilot cannot prove that serious errors will never occur.

Limit the initial evaluation to €300 of staff time: 10 hours × €30. This is an authorisation cap for the first stage, not a promise that ten hours will be sufficient. It is included within the overall setup budget, not added again.

## 12. Capstone Checkpoint 1 — five-line scenario lock

1. The company: EuroRoute Forwarding, a fictional European forwarder handling road, air and sea enquiries, with an assumed 3,000 freight descriptions per month.
2. The decision: Should EuroRoute deploy an AI transport-mode classifier with mandatory human confirmation instead of its current manual classification process?
3. The reader: The operations director who controls the intake workflow and implementation budget.
4. Why it matters: The scenario values current classification work at €18,000 annually; an unsuccessful deployment could consume €5,680.80 in first-year incremental resources without delivering the expected benefit.
5. What I still need to find out: Representative accuracy, actual volume, manual and assisted handling times, correction costs, the value of released capacity, and whether simpler rules perform as well.

## Sources and assistance

Framework: https://advanced-ai-in-business.vercel.app/week/4

Recorded test evidence: ../build/log.md

All company volumes, timings, labour rates, deployment costs and deployment performance assumptions are hypothetical planning inputs. No interview, new experiment, classroom participation or peer review is claimed here.

AI assistance was used to structure the analysis and check arithmetic. I must review the assumptions and explain the calculations myself.



## AI-assisted review of the investment memo

**Reviewer:** ChatGPT, taking the perspective of a skeptical classmate  
**Status:** This is not a review by another student.

**1. Can I follow the numbers?**  
Yes. The calculations are consistent, and distinguishing staff capacity from cash savings makes the case more credible. However, the one-minute manual baseline and fifteen-second assisted handling time are assumptions. For a simple classification task, manual processing might already be very fast. Measure both before relying on the estimated return.

**2. Are costs missing or benefits counted twice?**  
Routine review and additional correction are separated clearly, so I do not see double counting. However, the budget should clarify whether implementation includes privacy checks, access controls and integration work. The model also excludes losses from mistakes that escape review. Those omissions could materially change the result.

**3. Are the risks specific enough?**  
Yes: incorrect classification, limited test coverage and errors surviving human review are relevant. The pilot needs clearer instructions for handling ambiguous descriptions. A correct “NOT ENOUGH INFORMATION” result is useful, but the time spent resolving the missing information must still be measured.

**4. Would I approve the evaluation?**  
I would approve the €300 evaluation, but not deployment. Explain whether ten staff-hours can cover preparing expected answers, running three comparison methods, reviewing results and analysing timings. If not, reduce the pilot scope or request a revised budget before starting.

**5. Does this sound like an honest assessment?**  
Mostly yes. The downside scenario and explicit assumptions help. However, the headline 137.6% ROI sounds more certain than the evidence supports. I would lead with the estimated €7,819 capacity benefit and the possibility of a €731 loss, keeping the ROI secondary.

### Main revisions I recommend

- Make timing validation the first pilot activity.
- Define the tasks included within the €300 evaluation cap.
- Include clarification and escalation time in the comparison.
- State that rollout depends on a practical use for the released staff capacity.
- Explain that the 95% pilot threshold is a proposed screening criterion, not proof of production reliability.


### Changes made after AI-assisted review

- Made baseline timing the first evaluation activity.
- Split the €300 evaluation cap into preparation, testing and analysis, with a stop-and-rescope condition.
- Required clarification and escalation time to be measured.
- Clarified the implementation costs that still need confirmation.
- Made deployment conditional on useful redeployment of released staff capacity.
- Clarified that pilot thresholds do not prove production reliability.

These revisions respond to AI-assisted feedback. Classmate peer review remains pending unless the teacher accepts an alternative.