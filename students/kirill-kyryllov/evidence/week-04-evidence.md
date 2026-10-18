# Week 4 — Evidence: Benefit Quantification

## Candidate: Claim Risk Classifier (my Build)

**Scenario:** Vandermeer & Partners, a mid-sized Belgian consulting firm. Consultants currently
verify AI-generated claims in client reports manually before sign-off.

### Assumptions
- **Volume:** 300 claims/month (20 AI-assisted client reports × 15 claims each, consistent with
  my own test set size)
- **Manual verification time (current state):** 5 min/claim — finding a source, judging risk level
- **Loaded hourly cost:** €39/hr (Finance analyst, Belgian market rate, per course reference table)
- **With tool:** AI pre-screens each claim; consultant reviews flags rather than triaging every
  claim from scratch — reduced to ~1 min/claim

## 1. Time Saved

**Current state (manual, no tool):**
- 300 claims/month × 5 min = 1,500 min/month = 25 hrs/month → 300 hrs/year
- Value: 300 × €39/hr = **€11,700/year**

**With tool:**
- 300 claims/month × 1 min = 300 min/month = 5 hrs/month → 60 hrs/year
- Cost: 60 × €39/hr = **€2,340/year**

**Time saved: €11,700 − €2,340 = €9,360/year**

## 2. Revenue Increase

Not applicable. This tool reduces risk and review time; it doesn't generate new sales or faster
deal closure. **€0** — flagged honestly rather than stretched to fit the framework.

### 3. Cost Reduction (error correction avoided)

- Cost of an incorrect claim reaching a client: conservative estimate **€1,200/incident**
  (correction time, client communication, reputational handling for a single factual error that
  reached a report before being caught)
- Estimated significant misses per year **without** the tool (manual review only): 4/year
- Estimated significant misses per year **with** the tool (based on measured 13.3% miss rate on
  genuinely risky claims): ~1/year
- Cost reduction: (4 − 1) incidents × €1,200 = **€3,600/year**

## 4. Risk Mitigation (tail risk — professional liability)

- Probability of a serious client-facing error causing reputational/liability damage: ~5%/year
- Cost of such an event: €50,000 (conservative — lost client, remediation, partner time)
- Reduction factor from using the tool: 40% (catches the most common failure pattern — confident,
  specific, unverified numbers)
- Risk mitigation value: 5% × €50,000 × 40% = **€1,000/year** (expected value — the real value
  is tail-risk insurance, not this figure alone)

## AI Cost (Year 1)

**Token cost:**
- ~40 tokens in, ~60 tokens out per claim, Standard tier ($2.00/1M in, $12.00/1M out)
- 300 claims/month × 40 = 12,000 input tokens/month; × 60 = 18,000 output tokens/month
- **Token cost: ~€2/year** (trivial at this volume — consistent with Week 1's finding that
  token cost is never the real cost driver)

**Other AI costs:**
- Implementation (one-time, prompt refinement to v2, testing): €2,000
- Annual maintenance: €500
- **Year 1 AI cost: €2,502**

**Error correction cost (tool's own miss rate):**
- 3,600 claims/year × 13.3% miss rate = ~479 tool misses/year, but only a small fraction are
  genuinely costly (most are low-stakes, like the vague-statement edge case) — estimate 5% of
  misses are consequential: ~24/year × €50 (quick re-check cost) = **€1,200/year**

## Summary Table

| Category | Annual Value (€) |
|---|---|
| Time saved | €9,360 |
| Revenue increase | €0 |
| Cost reduction (incident avoidance) | €3,600 |
| Risk mitigation (expected value) | €1,000 |
| **Gross benefit** | **€13,960** |
| Less: AI cost (Year 1) | €2,502 |
| Less: tool's own error correction cost | €1,200 |
| **Net benefit (Year 1)** | **€10,258** |
| **Payback period** | €2,000 (implementation) ÷ (€10,258/12) ≈ **2.3 months** |

## Honest caveat

This is built on an invented test set (per the honesty note in `build/log.md`) and several
estimated probabilities (incident rates, risk reduction factor) rather than measured client
data. The **time saved** figure is the most defensible number here — it's a direct mechanical
calculation from measured review time. The **cost reduction** and **risk mitigation** figures
are the weakest links; they would need real incident history from Vandermeer & Partners to
replace the estimates with measured figures.