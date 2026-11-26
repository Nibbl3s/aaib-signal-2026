
# Week 8 Lab: Cost-at-Scale One-Pager
## Northwind Logistics NV — Multilingual AI Shipment Triage

**Author:** Andreea Simion  
**Beat:** The Psychology of AI Adoption in the Workplace  
**Skill:** Cost projection and design defense  
**Date:** 26 November 2026

---

## 1. Purpose

This cost model estimates how the monthly operating cost of Northwind Logistics' proposed AI shipment-status and exception-triage system changes as usage grows.

Northwind Logistics is a fictional composite freight-forwarding company headquartered in Antwerp, Belgium. It has 340 employees, 450 active clients and €58 million in annual revenue. Its operations cover Belgium, the Netherlands, Germany and France, requiring Dutch, French, German and English support.

The model compares three stages:

- Month 1: Initial launch
- Month 6: Increased adoption
- Month 12: Higher-volume operation

The main financial risk is not necessarily the AI model's token bill. It is the human time required to review, correct and manage inaccurate AI outputs.

## 2. Monthly Cost Projection

The following estimates are carried forward from my Week 6 cost modelling and Northwind Logistics' Week 8 architecture work.

| Cost indicator | Month 1 | Month 6 | Month 12 |
|---|---:|---:|---:|
| Estimated AI requests per day | 500 | 1,500 | 4,500 |
| Estimated AI token cost/month | €25 | €75 | €225 |
| Estimated total monthly cost | €2,400 | €6,200 | €17,500 |
| Non-token cost remainder | €2,375 | €6,125 | €17,275 |

**Calculation:** Non-token cost remainder = estimated total monthly cost − estimated AI token cost.

The non-token remainder is expected to be driven primarily by human error-remediation work, according to the original cost model. However, the available notes do not separate human correction labour from hosting, monitoring, maintenance and other operational costs. Therefore, the remainder must not be interpreted as a verified error-labour figure.

## 3. Error Costs and Human Review

The system is not designed to send every AI-generated response directly to customers. Human coordinators review and approve outputs before external messages are sent.

This reduces the risk of inaccurate shipment information reaching clients, but it introduces a labour cost.

The main error categories to monitor are:

- Incorrect shipment or exception classification.
- Inconsistent outputs between similar cases.
- Fabricated details or unsupported explanations.
- Incorrect language or misunderstanding of Dutch, French, German or English input.

The cost of correcting errors should be calculated as:

**Monthly error-remediation cost = number of errors × average correction time × employee hourly labour cost.**

For example, if 100 errors require five minutes each to correct, the workload is 500 minutes, or 8.33 hours. The financial cost depends on the actual hourly employment cost.

The current Northwind projections include an allowance for human error-remediation, but the original documents do not provide enough information to calculate the exact number of errors, correction hours or labour cost for each month.

These figures must be measured during the pilot rather than presented as confirmed results.

## 4. Model Pricing and Source

**Proposed model:** Google Gemini 3.1 Flash-Lite  
**API model identifier:** `gemini-3.1-flash-lite`

Official Google Gemini API pricing reference:

[Google AI for Developers — Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing)

**Date accessed:** 26 November 2026

The published standard paid-tier prices listed for Gemini 3.1 Flash-Lite are:

| Token type | Published price per 1 million tokens |
|---|---:|
| Input tokens (text, image, video) | $0.25 |
| Output tokens | $1.50 |

These are USD prices. Actual costs depend on the number of input and output tokens consumed by each request.

The existing Northwind estimates of €25, €75 and €225 per month are retained as preliminary planning estimates. They should be recalculated using measured average input/output tokens per request, the actual request volume and the applicable exchange rate.

The official price reference does not independently verify those three euro estimates.

## 5. What Happens as Usage Grows?

| Period | Main operational challenge |
|---|---|
| Month 1 | Establishing baseline accuracy, identifying common errors and measuring the time coordinators spend reviewing outputs. |
| Month 6 | More requests and more employees using the system increase the importance of consistent review procedures and quality monitoring. |
| Month 12 | Higher volume makes small error-rate differences financially significant because more cases may require human intervention. |

The projected total monthly cost rises from €2,400 in Month 1 to €17,500 in Month 12.

This is not simply a token-cost increase. The model suggests that human review and error remediation are major cost drivers.

The key performance indicators should therefore include:

- AI requests processed per month.
- Percentage of outputs accepted without correction.
- Error rate by error category.
- Average human correction time.
- Monthly human review and remediation hours.
- Total monthly AI and operational cost.

## 6. Financial and Operational Risks

**Accuracy risk:** If the system produces too many incorrect outputs, human correction costs may increase and reduce the value of automation.

**Multilingual risk:** Dutch, French, German and English outputs must be evaluated separately. A good overall accuracy figure could hide weaker performance in one language.

**Provider pricing risk:** Google may change API pricing. The integration should remain modular so that another model or a local open-weights alternative can be considered.

**Scaling risk:** Higher request volumes may increase review workload, even when token costs remain relatively low.

**Uptime risk:** If the AI service becomes unavailable, coordinators must still be able to access shipment information through the existing systems and use manual procedures.

## 7. Conclusion

The cost-at-scale model shows why AI adoption should not be evaluated using API prices alone.

For Northwind Logistics, the preliminary estimates suggest that human review and error-remediation work may account for a much larger share of operating costs than model usage itself.

The most important next step is to measure the real error rate and correction time during the pilot. Those measurements will make the Month 1, Month 6 and Month 12 projections more reliable.

The financial success of the system will depend not only on affordable AI access, but also on whether the system produces accurate, consistent and trustworthy outputs that employees can use without excessive correction work.

---

## 8. Assumptions and Evidence Gaps

| Item | Status |
|---|---|
| Month 1, 6 and 12 request volumes | Preliminary planning estimates |
| Monthly AI token costs | Existing estimates; require recalculation against measured token usage and published pricing |
| Total monthly costs | Existing planning estimates |
| Human error-remediation costs | Included in original total-cost estimates, but not separately itemised |
| Error rate by month | Not yet measured for Northwind |
| Average correction time | Not yet measured for Northwind |
| Employee hourly labour cost | Not provided in the available company profile |
| Hosting and monitoring costs | Not separately itemised in the monthly projections |
| Google Gemini pricing | Official pricing reference listed above; accessed 26 November 2026 |

**Evidence limitation:** The monthly totals are planning projections, not measured operating expenses. A pilot is required to validate the error rate, correction workload and full operating cost.

**Overall finding:** Human error-remediation is a critical variable in the business case. Measuring it is more useful than relying on token prices alone.
