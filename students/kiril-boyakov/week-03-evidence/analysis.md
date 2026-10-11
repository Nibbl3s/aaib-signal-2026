# Week 3 evidence — Vendor claim detection

Author: Kiril Boyakov  
Beat: AI in European Freight Cost Estimation  
Track: 4 ECTS

## Activity 2 — NexusAI proposal

NexusAI is the fictional vendor in the course exercise. These classifications evaluate the proposal, not a real company's performance.

“Fact” means a specific claim that can be checked; it does not mean I have independently verified it. “Aspiration” describes a promised or qualified benefit. “Avoidance” identifies missing information needed to judge a claim.

### Tagged claims

| # | Claim | Section | Tag | My reasoning |
|---|---|---|---|---|
| 1 | More than 200 European companies | Executive summary | Fact — verification needed | A customer count can be checked through deployment records and customer references. None are supplied here. |
| 2 | Average cost reductions of 25–30% | Executive summary | Avoidance | The proposal does not define the cost baseline, sample selection, or whether savings include the cost of buying and operating NexusAI. |
| 3 | Up to 94% forecast accuracy | Demand forecasting | Aspiration | “Up to” describes a possible best result, not typical performance. The accuracy metric and forecast horizon are undefined. |
| 4 | Proprietary machine-learning models | Demand forecasting | Fact — verification needed | Ownership and use of models can be checked. Being proprietary does not establish that they outperform simpler alternatives. |
| 5 | Continuously learns and adapts | Demand forecasting | Avoidance | The statement does not explain whether learning is automatic or periodic, how updates are validated, or how poor updates are reversed. |
| 6 | Fuel savings of up to 22% | Route optimization | Aspiration | This is a qualified benefit, without evidence that EuroLogistics would achieve it. |
| 7 | On-time delivery improves by 35% | Route optimization | Avoidance | The starting rate, measurement period and sample are missing. It is unclear whether this means a relative increase or percentage-point increase. |
| 8 | Picking time falls by 40% within three months | Warehouse management | Avoidance | There is no sample size, baseline or comparison showing whether the software caused the improvement. |
| 9 | Interface supports Dutch, French and English | Conversational interface | Fact — verification needed | This can be demonstrated using real tasks in each language. Language availability alone does not establish answer quality. |
| 10 | Forecast results come from internal benchmarking | Proven results | Avoidance | The benchmark dataset, metric, comparison model and separation between training and testing are not disclosed. |
| 11 | Results rely on client self-reporting | Proven results | Avoidance | Collection methods, unsuccessful deployments and independent checks are missing. This applies to fuel, delivery and picking results; forecasting uses internal benchmarking. |
| 12 | Models trained on over ten years of European data | Technology stack | Fact — verification needed | Data provenance and time coverage could be checked. Years of data do not establish relevance, quality or permission to use it. |
| 13 | Leading LLM technology | Technology stack | Avoidance | The provider, model, version, role and evaluation results are not identified. “Leading” has no defined benchmark. |
| 14 | SOC 2 Type II and ISO 27001 | Technology stack | Fact — verification needed | Request the SOC 2 report and ISO certificate, checking scope, dates and covered entity. These do not prove forecasting accuracy. |
| 15 | Money back without measurable improvement in 90 days | Next steps | Avoidance | The improvement threshold, eligible fees, exclusions and refund procedure are undefined. |
| 16 | Only two pilot slots remain | Next steps | Fact — verification needed | Capacity is potentially checkable, but no evidence is given. Scarcity does not establish business value or urgency. |

### My top five avoidances

1. **Performance definitions and independent testing.** What exactly does forecast accuracy measure? Show typical results on held-out customer data, compared with the existing method.
2. **Error consequences and human work.** What do incorrect forecasts or recommendations cost? Who checks them, and how much time does checking require? An undefined 94% accuracy metric cannot automatically be interpreted as 6% of forecasts being wrong.
3. **Representative customer evidence.** Provide three relevant customer references, sample sizes and results from unsuccessful deployments as well as successful ones.
4. **Integration and total ownership cost.** Identify supported systems, implementation responsibilities, staff time, data preparation, usage charges, maintenance and exit costs.
5. **Enforceable pilot and contract terms.** Define the baseline, success threshold, evaluation period, refund coverage, cancellation rights and data-export arrangements before signing.

## Activity 3 — FOMO framework: NexusAI

### 1. What specific business problem will this solve?

The proposal names broad activities, but gives no current and target metrics for EuroLogistics. We do not know whether forecasting, routing or warehouse picking is the main problem. I would first measure one operational bottleneck and agree a target. Question 1 already prevents a purchase; I complete the remaining questions to show the other gaps.

### 2. What happens if we do nothing for six months?

The proposal gives no quantified cost of inaction or demonstrated competitive threat. Two remaining pilot slots create sales urgency, not operational urgency. Missing evidence does not prove that waiting is harmless: EuroLogistics must calculate its current losses and whether they are increasing.

### 3. Can we verify the vendor's claims independently?

Not from the supplied evidence. I would request customer references and a controlled pilot using our data, our baseline and written success criteria. The money-back statement is not enough without contractual definitions. I would walk away if the vendor refused meaningful testing.

### 4. What is the total cost?

The quoted first-year charges are:

- Implementation: €85,000.
- Licence: €12,000 × 12 = €144,000.
- Data integration: €15,000.
- Training and onboarding: €8,000.
- Total quoted: €252,000.

This is more than a licence-only quotation, but it still does not establish full ownership cost. Internal staff time, data cleaning, usage limits, ongoing maintenance, error correction and switching costs need clarification. I would not apply an assumed cost multiplier without evidence.

### 5. Is there a simpler, cheaper solution?

Compare NexusAI against existing routing software, a statistical forecasting baseline and a warehouse process audit. Test the alternatives on the same problem and data. I cannot assume they deliver 80% of the benefit without measuring it.

### Verdict: WALK AWAY from the current proposal

I would not approve this purchase because the business problem and supporting evidence are insufficiently defined. This is not a rejection of AI. A revised proposal could justify a limited pilot after the baseline, total costs and success conditions are agreed.

## Applying the framework to my beat — Freightos

Source: https://www.freightos.com/ai-for-freight-forwarding/

This is a desk-based assessment of public marketing material, not a product test or vendor conversation.

1. **Specific problem:** A possible use case is reducing staff time spent turning freight requests into checked quotes. Actual handling time must be measured first. A proposed pilot target is a 25% reduction in total staff time per approved quote, without an increase in material errors.
2. **Six-month inaction:** Calculate avoidable handling costs and document any lost business caused by delays. I currently have no company data establishing either amount.
3. **Independent verification:** Use representative, anonymised requests with expert-checked answers. Include ambiguous units, missing details, multilingual requests and unusual routes. Measure the entire workflow, including correction.
4. **Total cost:** Request a written quotation covering subscriptions, setup, integrations, usage, training, review and exit. Compare full cost per approved quote with the current process.
5. **Simpler alternative:** Compare the pilot with a structured request form, validated rate table and deterministic calculator.

**Verdict: PILOT, conditional on a measured business need, acceptable costs and written evaluation criteria.** This is a proposed evaluation, not a purchase recommendation or claim that a pilot has happened.

## Activity 4 — Comparing the two cases

These are fictional course cases, not independently verified company results.

| Dimension | GhentBakery: bought too much | FlandersTextiles: missed potential value |
|---|---|---|
| What did they evaluate? | The promise of transformation and the vendor's headline accuracy. | AI's general reputation for errors rather than the proposed vision system's performance. |
| Did they use the FOMO framework? | No meaningful baseline comparison, urgency assessment or simpler-alternative evaluation is shown. | They rejected the proposal without testing it against the measurable cost of the existing process. |
| Did they assess modality fit? | They did not establish whether the forecasting model added enough value over their spreadsheet. | They confused computer vision for defect detection with the limitations of text-generating models. |
| Did they calculate total cost? | They overlooked implementation, staff time and evaluation costs. | They did not adequately compare implementation and operating costs with avoidable defect losses. |
| Root cause | Buying the promise without establishing additional business value. | Rejecting a category of technology without evaluating the specific application. |
| First question they should have asked | What measured problem remains unsolved by our current forecasting process? | What does our current defect-detection failure rate cost, and can this system reduce it? |

### Numerical checks and limitations

**GhentBakery:** €4,000 × 12 = €48,000 annual licence cost. Including €15,000 implementation gives €63,000 in first-year vendor charges. Adding the €8,000 consultant gives €71,000, before valuing 120 staff hours.

The vendor's 92% and the existing method's 89% should not be treated as a demonstrated three-percentage-point improvement unless measured on comparable data using the same metric. A small improvement could still be valuable, but its financial benefit must exceed its full cost.

**FlandersTextiles:** First-year system cost is €80,000 + (€3,000 × 12) = €116,000.

If missed defects fall from 15% to 5%, and losses fall proportionally, annual losses become €340,000 × 5/15 = approximately €113,333. Avoided losses would be approximately €226,667, leaving a potential first-year benefit of €110,667 before additional costs.

These are scenario calculations, not proven savings. A controlled pilot must test detection, false alarms, staff workload and financial outcomes. The percentage of defects missed is also different from the percentage of shipped products that are defective.

### Understanding the framework

- Asking about six months of inaction separates measurable operational urgency from sales pressure.
- Commonly omitted costs include internal integration time, data preparation and ongoing review or correction.
- The 80% rule is a comparison heuristic: prefer a simpler solution when it delivers enough value at substantially lower cost. Its percentages must be tested, not assumed.
- Both cases show why a buyer should evaluate a specific claim against a baseline instead of automatically trusting or rejecting AI.


## Evidence limitations and AI assistance

I have not contacted either vendor or independently verified their performance. No pilot results are claimed.

I used AI assistance to structure this analysis, identify questions and draft the text. The classifications and proposed evaluation criteria require my review.