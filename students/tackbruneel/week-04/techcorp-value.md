# Week 4 — Value quantification: TechCorp

**Thor Tack** · Case: TechCorp, a Ghent B2B SaaS company (composite): 500 staff, €42M revenue, 1,200 customers, €45/user/month, average customer 80 users = €43,200/year.

---

## 1. Value chain map

| Activity | Type | AI potential | Why (one sentence per Yes) |
|---|---|---|---|
| Sales (proposals, prospect research) | Primary | **Yes** | Proposals reuse the same building blocks every time; AI can draft them from CRM data for a rep to edit. |
| Customer support (ticket handling) | Primary | **Yes** | Thousands of tickets a month in a handful of categories: high-volume text classification that's easy to check. |
| Marketing (content, campaigns) | Primary | **Yes** | Blog posts, release notes and campaign variants are repetitive text, and a marketer reviews before publishing. |
| Engineering (product development) | Primary | Maybe | Code assistants help, but quality is hard to measure and errors can reach production. |
| Customer success (renewals, churn) | Primary | Maybe | Churn signals are patterns in usage data, but a wrong "at risk" call damages the relationship. |
| Operations / hosting | Primary | Maybe | Alert triage is pattern-based, but outages are high-stakes. |
| Finance (invoice processing, AP) | Support | **Yes** | Invoices are structured documents; extraction can be checked against the PO and the amount. |
| Data / reporting | Support | **Yes** | Monthly reports follow a fixed template from fixed data; AI drafts, an analyst checks the numbers. |
| HR (recruitment, CV screening) | Support | No | Ranking candidates is high-risk under the EU AI Act and has no ground truth (see my Week 2, Problem 5). |
| Legal (contract review) | Support | Maybe | Only as "diff against our template" plus a lawyer (my Week 2, Problem 7). |
| IT support (internal helpdesk) | Support | Maybe | Same shape as customer support but much lower volume. |
| Executive (strategy) | Support | No | One-off judgment calls: not repetitive, not checkable. |

**Top 3 picked:** support ticket triage, invoice processing, monthly report generation.

---

## 2. Top 3 candidates — the 5-criterion filter

### A. Support ticket triage
| Criterion | Pass? | Reason |
|---|---|---|
| Repetitive | ✓ | Daily; 50,400 tickets a year. |
| Pattern-based | ✓ | Text → one of a fixed set of categories and priorities. |
| Error-tolerant | ✓ | A misrouted ticket gets re-routed by the agent who receives it; nobody is harmed before a human sees it. |
| Cost-justifiable | ✓ | 1,400 agent-hours a month at €33/h loaded. |
| Verifiable | ✓ | Every ticket's final category is known after resolution, so accuracy can be measured weekly. |

**AI does:** read the incoming ticket, assign category + priority + suggested team, flag uncertain ones. **Human still does:** answers every ticket, re-routes the misrouted ones, owns all urgent tickets.

### B. Invoice processing (accounts payable)
| Criterion | Pass? | Reason |
|---|---|---|
| Repetitive | ✓ | Every supplier invoice, every day. |
| Pattern-based | ✓ | Extract supplier, VAT number, amount, PO number, due date. |
| Error-tolerant | ✓ (with a check) | Nothing is paid without a 3-way match against PO and receipt. |
| Cost-justifiable | ✓ | €260,280/year current cost, of which €190,080 is error correction. |
| Verifiable | ✓ | The extracted amount either matches the PO or it doesn't. |

**AI does:** extract the fields and propose the booking. **Human still does:** approves payment, handles every mismatch.

### C. Monthly management report generation
| Criterion | Pass? | Reason |
|---|---|---|
| Repetitive | ✓ | Monthly, same template. |
| Pattern-based | ✓ | Turns fixed KPI tables into commentary. |
| Error-tolerant | ~ | Only if the analyst checks every number; a wrong number in a board report is costly. |
| Cost-justifiable | ~ | Maybe 2–3 analyst days a month: real but small. |
| Verifiable | ✓ | Every figure in the text can be traced back to the source table. |

**AI does:** drafts the narrative around the numbers. **Human still does:** checks every figure, writes the "so what".

**Ranking:** A > B > C. C is the weakest: it's the lowest cost and the error tolerance depends entirely on the analyst's discipline.

---

## 3. Benefit quantification — candidate A: support ticket triage

| Category | Formula | Value / year |
|---|---|---:|
| **Time saved** | (1,400 − 350) h/month × 12 × €33/h loaded | **€415,800** |
| **Revenue increase** | Faster first response → fewer churned customers: 0.25% of 1,200 customers retained × €43,200 (est.) | **€129,600** (est.) |
| **Cost reduction** | No headcount cut assumed: freed hours are redeployed, so counting them again here would double-count | **€0** |
| **Risk mitigation** | P(SLA penalty or lost enterprise deal from slow urgent tickets) 10% × impact €100,000 × reduction 50% (est.) | **€5,000** (est.) |
| **Gross benefit** | sum | **€550,400** |
| AI cost Year 1 | tokens €185 + implementation €15,000 + integration €8,000 + maintenance €6,000 | €29,185 |
| Error cost | 15% of 50,400 tickets = 7,560 misrouted × €5 to re-route | €37,800 |
| **Net benefit Year 1** | €550,400 − €29,185 − €37,800 | **€483,415** |
| Net benefit Year 1, time saved only (conservative) | €415,800 − €29,185 − €37,800 | €348,815 |
| **Payback** | one-off €23,000 ÷ (net Year 2+ €371,815 ÷ 12) — conservative case | **≈ 0.7 months** |

**Framing note:** I use loaded cost (€33/h, which already includes the ×1.4 overhead), not salary. Revenue and risk are marked (est.) because they're my assumptions, not TechCorp data. The recommendation rests on the conservative line (time saved only), so it holds even if both estimates are zero.

---

*AI use: Claude drafted this analysis from the TechCorp case figures on the course page; estimates marked (est.) are assumptions, not case data. I reviewed it.*
