INVESTMENT MEMO — AI CANDIDATE: Claim Risk Classifier

TO:       Managing Partner, Vandermeer & Partners
FROM:     Kirill Kyryllov, Business Analyst
DATE:     18 October 2026
SUBJECT:  AI Investment Recommendation — Pre-Submission Claim Verification

EXECUTIVE SUMMARY
Deploy a lightweight AI claim-risk classifier to flag unverified claims in AI-assisted client
reports before consultant sign-off. One-time cost of €2,000, with a payback period of roughly
2.3 months and a measured Year 1 net benefit of €10,258.

THE PROBLEM
Consultants currently verify AI-generated claims in client reports manually, at roughly 5
minutes per claim across an estimated 300 claims/month. This process is slow, inconsistent, and
measurably fallible: my own prototype tool, tested on 15 realistic claims, still missed 2 (13.3%)
without any tool at all to assist — and the type of claim that slips through (a specific,
confident financial classification like CapEx/OpEx) is exactly the kind that reaches a client
and causes real damage once discovered, as documented in a real case I researched in Week 1
(€1,200–€3,600 to correct after the fact).

THE PROPOSAL
A prompt-based classifier flags each claim in a draft report as "Needs verification" or "Safe to
trust," based on claim type (cited sources, private company data, technical specs vs. stable
general facts). Consultants still make the final call — the tool pre-screens, it doesn't decide.
Implementation is a single prompt refined and tested against a firm-specific claim set, with no
new infrastructure required.

BENEFIT ANALYSIS

| Category          | Annual Value (€)  | Basis                                      |
|--------------------|-------------------|---------------------------------------------|
| Time saved         | €9,360            | 300 hrs/yr manual → 60 hrs/yr with tool, €39/hr |
| Revenue increase   | €0                | Not applicable to this tool                  |
| Cost reduction     | €3,600            | 4 → 1 significant misses/yr avoided, €1,200/incident |
| Risk mitigation    | €1,000            | 5% × €50,000 × 40% reduction factor          |
| GROSS BENEFIT      | €13,960           |                                               |
| AI cost (Year 1)   | €2,502            | Tokens (€2) + implementation (€2,000) + maintenance (€500) |
| Tool's own error cost | €1,200         | ~24 consequential tool misses/yr × €50       |
| NET BENEFIT Y1     | €10,258           |                                               |
| Payback period     | ~2.3 months       | €2,000 implementation ÷ (€10,258/12)         |

RISKS & MITIGATIONS
The tool itself is imperfect — measured at 86.7% accuracy on an invented test set, which is
likely an upper bound, not a reliable real-world figure (Week 2 capability skepticism). It also
has a known design gap: it cannot say "insufficient context," so ambiguous inputs default to
"Safe to trust," the riskiest possible failure direction. Mitigation: consultants remain the
final reviewer, and a v2 prompt revision (adding a third classification option) is already
planned before wider rollout. The cost-reduction and risk-mitigation figures above rest on
estimated incident rates, not Vandermeer's actual error history — a genuine limitation, not a
hidden one.

RECOMMENDATION
Pilot, not full rollout. Run the tool alongside normal manual review for one quarter, measure
its actual catch rate against real Vandermeer claims, and replace the estimated incident
figures above with measured ones before deciding on firm-wide deployment.

SENSITIVITY NOTE
If the cost-reduction and risk-mitigation estimates are 50% too optimistic, net benefit falls to
roughly €7,980/year, the case still clears a reasonable payback threshold. If the dominant
time-saved figure itself is 50% too optimistic (e.g. real verification only drops to 2.5 min
instead of 1 min per claim), net benefit falls to roughly €5,578/year, the case still holds, but
with less margin for the other estimates also being wrong.