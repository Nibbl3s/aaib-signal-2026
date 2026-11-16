# INVESTMENT MEMO — AI CANDIDATE: AI Market-Entry Risk Detector

**TO:** Managing Partner, Meridian Market Advisory  
**FROM:** Subhan Naeem, Business Analyst  
**DATE:** 15 October 2026  
**SUBJECT:** AI Investment Recommendation — AI Market-Entry Risk Detector

## Executive Summary

I recommend a three-month pilot of the AI Market-Entry Risk Detector, a first-pass classifier for market-risk information. Per consultant, the tool is estimated to cost €1,335 in Year 1 and generate €5,313 in released time-capacity value, resulting in a net benefit of €3,978 and a payback period of approximately 0.7 months. These figures are estimates and must be validated through the pilot.

## The Problem

Consultants currently sort market-entry information into risk categories manually. At an estimated 15 minutes per item and 40 items per month (both assumptions, not measured), this requires 120 hours annually. At a loaded labour cost of €57.75 per hour, this represents €6,930 in annual labour capacity.

The hourly cost is calculated as €66,000 × 1.4 ÷ 1,600 productive hours. Time spent on manual classification is unavailable for deeper analysis and potentially billable client work.

## The Proposal

The AI Market-Entry Risk Detector classifies information into five categories:

- Political Risk
- Economic Risk
- Legal/Regulatory Risk
- Operational Risk
- No Major Risk

Each classification includes a one-sentence explanation.

Consultants must verify every classification against authoritative sources and remain responsible for the final assessment. AI-assisted classification and human review are estimated to take 3.5 minutes per item. The pilot will compare actual completion times, errors and costs against the manual process.

## Benefit Analysis

| Category | Annual Value (€) | Basis |
|---|---:|---|
| Time saved | €5,313 | 40 items/month × 11.5 minutes ÷ 60 × €57.75/hour × 12 months = 92 hours saved |
| Revenue increase | €0 (base case) | Excluded to avoid double-counting; potential upside of €5,520 (est.) is not included |
| Cost reduction | €0 | No cash expenditure is reduced; the tool adds a subscription |
| Risk mitigation | €0 | No reduction claimed; see Risks and Mitigations |
| **GROSS BENEFIT** | **€5,313** | Potential time-capacity value, not guaranteed cash savings |
| AI cost, Year 1 | €1,335 (est.) | Subscription €276 + setup €231 + maintenance €58 + failure correction €770 |
| **NET BENEFIT, YEAR 1** | **€3,978 (est.)** | €5,313 − €1,335 |
| Net benefit, Year 2+ | €4,209/year (est.) | €5,313 − €1,104 annual costs |
| Payback period | 0.7 months (est.) | €231 setup cost ÷ (€4,209 Year 2+ net benefit ÷ 12) |

Failure correction assumes a conservative planning failure rate of 16.7%, based on the rule of three applied to 18 correct results out of 18 designed test cases (3 ÷ 18). Across 480 annual items, this implies approximately 80 failures × €9.63 per failure = €770 annually. This is a planning assumption, not a measured failure rate.

## Risks and Mitigations

### 1. Missed or Misclassified Risks

The tool must select one category, meaning secondary risks in an item containing multiple risks could be omitted. This was identified as a capability limitation during Week 2. An uncaught error could contribute to a poor client recommendation, with an illustrative potential consequence of €250,000. The Year 1 net benefit would be wiped out if the annual probability of such an event exceeded approximately 1.6% per consultant (€3,978 ÷ €250,000).

**Mitigation:** Require consultant verification, revise the prompt to identify all relevant risk categories, and log every failure by type.

### 2. Unproven Estimates

The 18/18 correct result comes from a small, designed test set. The estimated 15-minute manual time, 3.5-minute AI-assisted time and 40 monthly items have not been measured. Applying the evidence-evaluation discipline from Week 3, these assumptions should be treated as unverified claims until tested in practice.

The financial case breaks even at approximately 2.4 minutes saved per item, meaning AI-assisted assessment could take up to approximately 12.6 minutes per item before the Year 2+ case becomes negative, assuming other inputs remain unchanged.

**Mitigation:** Measure actual completion times, workload, errors and correction effort during the pilot.

### 3. Client Confidentiality

The prototype uses a consumer ChatGPT account. Client information must not be entered until an appropriate business-tier agreement and GDPR safeguards are in place. Any additional licensing and governance costs must be included in the final business case.

**Mitigation:** Use approved tools and data-handling procedures, and confirm confidentiality and GDPR requirements before processing client information.

## Recommendation

**Pilot, do not deploy broadly.**

Proceed to wider use only if the three-month pilot demonstrates all of the following:

- At least 90% correct classifications across a minimum of 50 real items.
- No missed risk remains undetected after mandatory consultant verification.
- Measured AI-assisted assessment and review time averages five minutes or less per item.
- An approved business-tier plan and appropriate confidentiality and GDPR safeguards are in place.

The pilot should document actual costs, processing times, error types and correction effort before a final investment decision.

## Sensitivity Analysis

If benefits are 50% lower than estimated, gross benefit falls to €2,656.50. Year 1 net benefit becomes €1,321.50, while Year 2+ net benefit becomes €1,552.50 per year. Payback extends to approximately 1.8 months.

The financial case therefore remains positive under this lower-benefit scenario, but it is particularly vulnerable to a single costly, uncaught error. Human oversight and confidentiality safeguards are essential.

---

# Capstone Checkpoint 1 — Scenario Lock

1. **The company:** Meridian Market Advisory, a composite 25-person consulting firm in Ghent that advises Belgian mid-market manufacturers (50–500 employees) on entering new export markets in Europe, MENA and Asia. Each consultant screens roughly 40 market-risk information items per month (est.).

2. **The decision:** Should Meridian run a 3-month pilot of an AI Market-Entry Risk Detector that classifies market information into five categories (political, economic, legal/regulatory, operational, no major risk)?

3. **The reader:** This memo is addressed to the Managing Partner, who approves tool spending and is accountable for the quality of advice given to clients.

4. **Why it matters:** If they get this wrong, a missed or misclassified risk could lead a client into a failed market entry costing around €250,000 (est.), and Meridian would risk losing the client, its fee and its reputation. Wrongly rejecting a tool that works would forfeit roughly €5,000 per consultant per year (est.) in released time.

5. **What I still need to find out:** How accurately the tool classifies real, ambiguous market information (not just my 18 designed test cases), how long manual versus AI-assisted classification actually takes, how many items a consultant really handles per month, and whether the time saved is used on billable work.

---

# Week 4 — Benefit Quantification Table

**AI Tool:** AI Market-Entry Risk Detector  
**Target User:** International Business Consultant  
**Purpose:** Estimate whether AI-assisted first-pass risk classification saves time and whether the benefits outweigh costs and failures.

**Framing:** All figures are annual per consultant unless stated otherwise. Figures marked (est.) are planning assumptions, not measured business results. Failures are treated as costs, not as reductions in gross benefit.

## 1. Benefit Quantification

### A. Annual Benefits

| Benefit | Formula / Basis | Annual Value |
|---|---|---:|
| Time saved | 40 items/month × 11.5 minutes ÷ 60 × €57.75/hour × 12 | €5,313 |
| Revenue increase | Base case €0 to avoid double-counting. Potential upside: 92 hours × 50% billable redeployment × €120/hour (est.) | €0 |
| Cost reduction | No cash expenditure reduced; subscription adds cost | €0 |
| Risk mitigation | No reduction claimed; over-reliance could introduce risk | €0 |
| **Gross benefit** | Potential value of released time capacity | **€5,313** |

The €5,313 is not guaranteed cash savings. Value is realised only if the released time is used productively.

### B. Annual Costs

| Cost | Formula / Basis | Year 1 | Year 2+ |
|---|---|---:|---:|
| Subscription | €23 × 12 months (assumed price) | €276 | €276 |
| Setup | 4 hours × €57.75/hour; one-time | €231 | €0 |
| Maintenance | 25% of setup cost (within 20–30% rule of thumb) | €58 | €58 |
| Failure correction | 480 × 16.7% ≈ 80 failures × €9.63 | €770 | €770 |
| Human review | Included in 3.5-minute AI-assisted time | €0 | €0 |
| **Total cost** | Sum of costs | **€1,335** | **€1,104** |

### C. Financial Results

| Measure | Calculation | Result |
|---|---|---:|
| Net benefit, Year 1 | €5,313 − €1,335 | €3,978 (est.) |
| Net benefit, Year 2+ | €5,313 − €1,104 | €4,209/year (est.) |
| Payback period | €231 ÷ (€4,209 ÷ 12) | 0.7 months (est.) |

## 2. Assumptions and Evidence

| Input | Value | Basis |
|---|---|---|
| Monthly / annual workload | 40 / 480 items | Planning assumption; not measured |
| Manual assessment time | 15 minutes/item | Estimate; not measured |
| AI-assisted assessment + human review | 3.5 minutes/item | Estimate; not measured |
| Time saved | 11.5 minutes/item; 92 hours/year | 40 × 11.5 ÷ 60 × 12 |
| Gross annual salary | €66,000 | Illustrative; not verified |
| Loaded hourly labour cost | €57.75 | €66,000 × 1.4 ÷ 1,600 productive hours |
| Test-set accuracy | 18/18 correct (100%) | 18 designed cases across two runs; not proof of real-world accuracy |
| Planning failure rate | 16.7% (≈83.3% success) | Rule of three: 3 ÷ 18 ≈ 16.7%; conservative planning ceiling, not measured failure rate |
| Correction time / cost | 10 minutes / €9.63 per failure | 10 ÷ 60 × €57.75; excludes wider consequences |
| Subscription | €23/month | Assumed ChatGPT Plus price; not a supplier quote |
| Setup time | 4 hours | Planning assumption for prompt setup and testing |

## 3. Activity 3 Calculation Row

| Question | Calculation / Answer |
|---|---|
| What does the job cost a human today? | 15 ÷ 60 × €57.75 = €14.44/item |
| How often does it happen? | 40 items/month; 480/year |
| What is the measured success rate? | 18 ÷ 18 = 100% on the test set only; real-world accuracy remains unknown |
| What is the gross benefit at 100%? | 40 × 11.5 ÷ 60 × €57.75 × 12 = €5,313/year |
| What is the benefit after failures? | €5,313 − €770 correction costs = €4,543 before subscription, setup and maintenance |
| What does one failure cost, and who pays? | 10 ÷ 60 × €57.75 = €9.63, paid through consultant time; uncaught errors may cost much more |
| What is the net benefit? | Year 1: €5,313 − (€276 + €231 + €58 + €770) = €3,978. Year 2+: €5,313 − (€276 + €58 + €770) = €4,209/year |
| What is the payback period? | €231 ÷ (€4,209 ÷ 12) = 0.7 months |

## 4. Interpretation and Limitations

The tool could release an estimated 7.67 hours/month (92 hours/year), worth €5,313 in annual time capacity per consultant. Estimated net benefit is €3,978 in Year 1 and €4,209/year thereafter.

However, the time estimates and workload are unmeasured, and 18/18 correct classifications on designed test cases do not establish real-world accuracy. The prototype uses a free ChatGPT interface; business licensing, confidentiality and governance costs for client data are not included.

A limited pilot should measure actual manual and AI-assisted times, workload, error types, correction effort and all deployment costs before a final investment decision.

## 5. Sensitivity and Break-Even Tests

| Test | Calculation | Result |
|---|---|---|
| 50% lower benefit | Gross benefit: €5,313 × 50% = €2,656.50 | Year 1 net: €1,321.50; Year 2+ net: €1,552.50/year |
| Payback under lower benefit | €231 ÷ (€1,552.50 ÷ 12) | 1.8 months |
| Value of each minute saved | 480 × €57.75 ÷ 60 | €462/year |
| Break-even time saved | €1,104 ÷ €462 | 2.4 minutes/item |
| Maximum AI-assisted time at break-even | 15 − 2.4 minutes | Approximately 12.6 minutes/item, compared with the 3.5-minute estimate |
| Tail-risk test | Year 1 net benefit: €3,978; hypothetical missed-risk consequence: €250,000; €3,978 ÷ €250,000 | A probability above 1.6% per consultant/year would wipe out the Year 1 benefit if that consequence occurred |

### Conclusion

Under the stated assumptions, the tool appears financially promising, even with 50% lower benefits. However, actual time savings, workload and real-world error rates remain unverified. A pilot with human oversight and failure tracking is recommended before relying on the tool for client-facing market-entry decisions.
