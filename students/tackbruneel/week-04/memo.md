# Investment memo — AI ticket triage

**TO:** CEO, TechCorp
**FROM:** Thor Tack, analyst
**DATE:** 12 October 2026
**SUBJECT:** Pilot AI triage for incoming support tickets — go, with a 3-month pilot and a hard stop

**Executive summary.** Routing support tickets by hand costs us about 1,400 agent-hours a month. AI triage could free about 1,050 of them, worth **€348,815 net in Year 1** on time saved alone, with a one-off cost of €23,000 that pays back in under a month. I recommend a 3-month pilot measured on our own tickets before any wider rollout.

**The problem.** Our 50,400 support tickets a year arrive in one queue and are read and routed by hand before anyone starts solving them. At €33/hour loaded cost, routing alone costs about €554,000 a year (1,400 h × 12 × €33). Urgent tickets wait in the same queue as password resets, which slows the responses our biggest customers notice.

**The proposal.** An AI model reads each new ticket and assigns a category, a priority and a team. Tickets it isn't sure about go to a human dispatcher. Agents still answer every ticket and re-route the misrouted ones. All urgent tickets are confirmed by a human within 15 minutes.

**Benefit analysis**

| Category | Formula | €/year |
|---|---|---:|
| Time saved | 1,050 h/month × 12 × €33 | 415,800 |
| Revenue (est.) | 0.25% churn avoided × 1,200 customers × €43,200 | 129,600 (est.) |
| Cost reduction | none: hours are redeployed, not cut | 0 |
| Risk (est.) | 10% × €100,000 × 50% | 5,000 (est.) |
| **Gross benefit** | | **550,400** |
| AI cost Year 1 | tokens 185 + setup 15,000 + integration 8,000 + maintenance 6,000 | −29,185 |
| Error cost | 7,560 misroutes × €5 | −37,800 |
| **Net Year 1** | gross − AI cost − error cost | **483,415** |
| **Net Year 1, time saved only** | the figure I'm asking you to approve on | **348,815** |
| **Payback** | €23,000 ÷ (€371,815 ÷ 12) | **0.7 months** |

**Risks and mitigations.**
1. **Accuracy on our tickets is unknown.** The 85% assumption comes from the vendor and the case, not from our data. *Mitigation:* the pilot runs on 2,000 real tickets, with the correct category known afterwards. We measure before we trust.
2. **A misrouted urgent ticket from a large customer.** The cost of that error is far above €5. *Mitigation:* every ticket the AI marks as urgent, or that comes from our top-50 accounts, is confirmed by a human.
3. **Lock-in and running cost.** *Mitigation:* the contract must allow export of our routing rules and data, and token use is reported monthly.

**Recommendation.** **Pilot, with conditions:** 3 months, €23,000 one-off budget. Go to full rollout only if measured routing accuracy is ≥ 85% on our tickets and no urgent ticket waits longer than today.

**Sensitivity.** If every estimate is 50% too optimistic (half the hours saved, error rate doubled to 30%), net Year 1 falls to €207,900 − €29,185 − €75,600 = **€103,115**, still positive. The case only breaks if hours saved fall below about 170 a month (265 if errors also double). Even 50% accuracy doesn't break it at €5 per misroute, so the real exposure is the urgent-ticket case in risk 2, not the average error.

---

## Review — the five CEO questions

*Peer review is done in class; this is my own pass with the same five questions, made before handing in.*

| CEO question | Answer in v1 | Change made |
|---|---|---|
| Show me the numbers | Every row has a formula | — |
| Where's the cost? | Licence/tokens only | Added error cost as its own line, not hidden in the net |
| What's the risk? | Generic "accuracy" | Named the urgent-ticket case and added the top-50 rule |
| Would I approve this? | v1 asked for a full rollout | Changed to a pilot with a measurable go/no-go |
| Does it read like a vendor pitch? | v1 headline used the €483k with estimates | Recommendation now rests on the conservative €348,815, with estimates marked (est.) |

*AI use: Claude drafted this memo from the TechCorp case data; I reviewed it.*
