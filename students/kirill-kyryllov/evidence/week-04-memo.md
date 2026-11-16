# Investment Memo — AI Candidate: Claim Risk Classifier

**To:** Managing Partner, Vandermeer & Partners
**From:** Kirill Kyryllov, Business Analyst
**Date:** 18 October 2026
**Subject:** AI Investment Recommendation — Pre-Submission Claim Verification

## Executive Summary

Deploy a lightweight AI claim-risk classifier to flag unverified claims in AI-assisted client
reports before consultant sign-off. One-time cost of €2,000, with an estimated Year 1 net
benefit of €10,258 and a payback period of roughly 2.3 months.

## The Problem

Consultants currently verify AI-generated claims in client reports manually, at an estimated 5
minutes per claim across roughly 300 claims/month. This process is slow and fallible, and the
type of claim most likely to slip through (a specific, confident financial classification like
CapEx/OpEx) is exactly the kind that reaches a client and causes real damage once discovered.
Correcting an error like this after it reaches a client costs an estimated €1,200 per incident
(conservative). My own prototype shows the risk is real: tested on 15 claims, it still missed 2
(13.3%), including exactly this CapEx case.

## The Proposal

A prompt-based classifier flags each claim in a draft report as "Needs verification" or "Safe to
trust," based on claim type (cited sources, private company data, technical specs vs. stable
general facts). Consultants still make the final call: the tool pre-screens, it doesn't decide.
Implementation is a single prompt refined and tested against a firm-specific claim set, with no
new infrastructure required.

## Benefit Analysis

| Category | Annual Value (€) | Basis |
|---|---|---|
| Time saved | €9,360 | 300 hrs/yr manual → 60 hrs/yr with tool, €39/hr (estimated review times) |
| Revenue increase | €0 | Not applicable to this tool |
| Cost reduction | €3,600 | 4 → 1 significant misses/yr avoided, €1,200/incident |
| Risk mitigation | €1,000 | 5% × €50,000 × 40% reduction factor |
| **Gross benefit** | **€13,960** | |
| AI cost (Year 1) | €2,502 | Tokens (€2) + implementation (€2,000) + maintenance (€500) |
| Tool's own error cost | €1,200 | ~24 consequential tool misses/yr × €50 |
| **Net benefit (Year 1)** | **€10,258** | |
| **Payback period** | **~2.3 months** | €2,000 implementation ÷ (€10,258 / 12) |

## Risks & Mitigations

The tool itself is imperfect: measured at 86.7% accuracy on a self-written test set, which is an
upper bound, not a reliable real-world figure (Week 2 capability skepticism). It also has a known
design gap: it cannot say "insufficient context," so ambiguous inputs default to "Safe to trust,"
the riskiest possible failure direction. Mitigation: consultants remain the final reviewer, and a
v2 prompt revision (adding a third classification option) is planned before wider rollout. Apart
from the 86.7% accuracy, every input above (review times, incident rates, correction cost) is an
estimate, not Vandermeer's actual data: a genuine limitation, not a hidden one.

## Recommendation

Pilot, not full rollout. Run the tool alongside normal manual review for one quarter, measure its
actual catch rate and review time on real Vandermeer claims, and replace the estimates above with
measured figures before deciding on firm-wide deployment.

## Sensitivity Note

If the cost-reduction and risk-mitigation estimates are 50% too optimistic, net benefit falls to
roughly €7,958/year and the case still holds. If the time-saved figure is 50% too optimistic (for
example, review with the tool takes 3 minutes per claim instead of 1), net benefit falls to
roughly €5,578/year: the case still holds, but with less margin if the other estimates are also
wrong.