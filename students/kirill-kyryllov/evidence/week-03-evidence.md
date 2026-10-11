# Week 3 — Evidence

## 1. Tagged Claims Table — NexusAI Proposal

| # | Claim | Section | Tag | Reasoning |
|---|---|---|---|---|
| 1 | "200+ European companies" | Exec Summary | Aspiration | No named clients, no case studies — impressive-sounding number that can't be checked |
| 2 | "average cost reductions of 25-30%" | Exec Summary | Aspiration | "Average" hides variance; unclear who measured it, vendor or client |
| 3 | "up to 94% accuracy" | Demand Forecasting | Aspiration | "Up to" = best case under ideal conditions, not a guarantee |
| 4 | "proprietary ML models" | Demand Forecasting | Avoidance | "Proprietary" could mean anything from a neural net to if-then rules — no architecture named |
| 5 | "continuously learns and adapts" | Demand Forecasting | Aspiration | Vague; doesn't say how often retraining happens or on whose data |
| 6 | "reducing fuel costs by up to 22%" | Route Optimization | Aspiration | Same "up to" problem — depends entirely on starting baseline |
| 7 | "improving on-time delivery by 35%" | Route Optimization | Aspiration | No hedge word, but sourced from client self-reporting — not independently measured |
| 8 | "40% reduction in picking time" | Warehouse Mgmt | Aspiration | Client self-reported, no controlled baseline, suspiciously fast (3 months) for a physical process change |
| 9 | "natural language interface" (NL/FR/EN) | Conversational Interface | Fact (but misleading) | Chatbot likely exists, but doesn't mean AI is doing the actual optimization — could be a wrapper on rules |
| 10 | "Internal benchmarking" (accuracy source) | Proven Results table | Avoidance | Vendor tested their own model on their own data — no independent verification |
| 11 | "Client self-reporting" (all other metrics) | Proven Results table | Avoidance | Weakest form of evidence — no audit, no control group |
| 12 | "trained on 10+ years of European supply chain data" | Technology Stack | Avoidance | Scope unspecified — one company's data or fifty's? Unknown geographic/volume coverage |
| 13 | "Powered by leading LLM technology" | Technology Stack | Avoidance | Deliberately vague — doesn't name the model, which determines both cost and quality |
| 14 | "SOC 2 Type II, ISO 27001" | Technology Stack | Fact | Real, checkable certifications — though they cover security/IT ops, not model accuracy |
| 15 | "Money-back guarantee if no improvement in 90 days" | Next Steps | Aspiration | "Measurable improvement" undefined — fine print likely narrows this significantly |
| 16 | "Only 2 pilot slots remaining" | Next Steps | Avoidance | Classic artificial scarcity — a vendor with 200+ clients should know exactly when slots reopen |

**Distribution: 2 Fact · 9 Aspiration · 5 Avoidance** (out of 16)

## 2. Top 5 Avoidances

1. **No independent verification of any metric** — every performance number is either "internal benchmarking" or "client self-reporting," never third-party audited
2. **No named clients** — "200+ companies" with zero case studies or reference clients to call
3. **No model architecture disclosed** — "proprietary ML" and "leading LLM technology" never specify what's actually running
4. **No error cost stated** — 94% accuracy means 6% wrong; the proposal never says what a wrong forecast costs
5. **No full cost breakdown** — missing LLM API costs, ongoing retraining, data prep labor, and exit/switching costs beyond the €252,000 headline

## 3. FOMO Framework Walkthrough — NexusAI

**Q1 — What specific problem?** Vague. "Supply chain optimization" bundles four separate
modules (forecasting, routing, warehouse, chatbot) with no single named problem and no
company-specific current/target metric for EuroLogistics.

**Q2 — Cost of doing nothing for 6 months?** Not stated. The only urgency in the proposal is
artificial: "only 2 pilot slots remaining." No competitor threat or cost-of-delay figure given.

**Q3 — Can claims be verified independently?** Partially at best. Every headline metric is
sourced as "internal benchmarking" or "client self-reporting," not independently audited. The
money-back guarantee has no defined success metric, making it effectively unenforceable.

**Q4 — What's the total cost?** €252,000 quoted for Year 1, but missing: ongoing LLM API costs
behind the conversational interface, staff hours for integration beyond the flat fee, model
retraining/maintenance after Year 1, and switching costs. Platform license alone is ~57% of
the stated total, suggesting the real TCO is understated.

**Q5 — Is there a simpler solution for 80% of the value?** Likely yes. Route optimization
software (non-AI) could address delivery efficiency alone; demand forecasting could start with
an Excel-based seasonal model; a process audit might resolve warehouse inefficiencies without
AI at all. Bundling four problems into one purchase obscures this.

**Verdict: Walk away** (or at minimum, demand a free pilot on EuroLogistics' own data with a
written, specific success metric before any commitment). The proposal fails Q1 and Q2
immediately, which per the framework means stopping before Q3-Q5 even matter.