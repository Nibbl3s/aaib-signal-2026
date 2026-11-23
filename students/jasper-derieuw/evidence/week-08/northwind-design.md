---
week: 8
title: "Evidence - Northwind Logistics: Integration Design, Cost Model and Board Answers"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Design defense"
date: 2026-11-16
---

# Northwind Logistics: My Integration Design

The class case (Week 8): Northwind Logistics NV, Antwerp, 340 employees, €58M revenue, freight brokerage across Belgium, the Netherlands, Germany and France in four languages. Systems: SAP S/4HANA (API), Salesforce (API), a custom TMS with **no API, SQL only**, Microsoft 365 (Graph), Power BI, WhatsApp Business. Constraints: **€50,000** for year 1, **3 months**, 2 developers + 1 data analyst, GDPR, AI Act low or limited risk, client pricing must not leak, no single point of failure. I worked this on my own, ahead of the class on 23 November; the team roles are mine combined.

## 1. One use case, and why

**Document intake:** transport orders, packing lists and customs documents arrive by email in four languages and are typed into the TMS by hand. The AI reads each document and proposes the fields; a person approves them before anything enters the TMS.

| Candidate | Value | AI fit | Feasible in 3 months with 2 developers? | Verdict |
|---|---|---|---|---|
| **Document intake to the TMS** | High: every order passes through it | Reading messy multilingual documents is what a language model does well; my own Build does the same task | Yes: read-only on the TMS core, writes only to a staging table | **Chosen** |
| Route and carrier optimisation | High | An optimisation problem, not a language problem; needs live TMS data the TMS cannot expose | No: no API, too risky to touch | Rejected |
| Client chat on WhatsApp | Medium | Customer-facing: injection, invented answers (the Air Canada pattern), four languages live | Possible, but the risk lands on clients | Rejected for now |
| Sales support in Salesforce | Low to medium | Einstein already exists for this | Buy, not build | Use the built-in tool |

**Volume (est.):** €58M ÷ €1,500 per order (est.) = about 38,700 orders a year, 155 per business day; with about 2 documents per order, **300 documents a day**. To be checked with Northwind before the build.

## 2. Five layers

| Layer | Decision | Why |
|---|---|---|
| **Data** | Documents from the shared order mailbox through Microsoft Graph (included in their Microsoft 365, €0 extra); client and carrier master data read from SAP and Salesforce through their APIs; the TMS through **SQL with three limited accounts** (read-only for lookups, write only in our own staging schema, add-only for approved orders); new orders wait in a **staging table** until the import job adds them to the same TMS order tables that manual entry uses | The TMS has no API and cannot be replaced; a nightly export would be up to 24 hours old and cannot write back; the staging table keeps every write reversible |
| **AI model** | Claude Sonnet 5.5 via the API ($2 / $10 per 1M input / output tokens, Anthropic price list, Nov 2026), one JSON answer per document, a fixed field list and "not found" when a field is missing **(L)**; exit target Gemini 3 Flash | My Build: 28 of 36 correct on unseen documents with the same prompt design (Build log, Run 4); Gemini scored 83.3% on my set (Week 6) |
| **Integration** | An **Azure Functions** script polls the mailbox every 15 minutes (2,880 polls a month: 4 an hour × 24 h × 30 days, plus about 6,250 document runs: 75,000 a year ÷ 12, so about 9,100 runs a month, far inside Microsoft's free grant of 250,000), calls the model, applies rules, writes proposals to the staging table; an import job moves **approved** rows into the TMS, through the TMS's own import procedure if one exists, and skips document numbers already in the TMS | Small, testable, built by 2 developers; the rules route doubtful documents to a person, and orders above €2,000 get the deliberate check |
| **Interface** | A review list in Teams (SharePoint list, included in Microsoft 365): the document next to the proposed fields, approve or correct; Power BI shows the queue and correction rate per user and per language, only to staff who already have a Power BI licence (€0 extra) | Staff already work in Teams; no new tool or licence |
| **Governance** | Named owners and a fixed rhythm (see "Owners and rhythm"); every proposal, correction and approval logged with user and time in a log table next to the staging table; monthly re-test on the same 100 labelled documents; cost alert at €100 a month in tokens; back to manual if the re-test falls below 70%; DPA with the model provider and EU data safeguards; no client price lists in the prompt | Audit trail; a drop in accuracy is caught; pricing exposure limited to what is on the document |

### Owners and rhythm

| Role | Who at Northwind | Owns |
|---|---|---|
| Business owner | Head of Operations | Go, stop or switch back to manual; owns the risk |
| Technical owner | One of the 2 internal developers | Script, import job, model, cost alert (the 4 h a month of maintenance) |
| Quality owner | The data analyst | Monthly re-test, Power BI correction rate (per user and per language), the €2,000 threshold |
| Privacy | DPO or external lawyer | DPA, retention period, yearly GDPR check |

| How often | What | Who |
|---|---|---|
| Daily | Queue and failed imports in Power BI | Technical owner |
| Weekly | Corrections per user (spot approving without looking) and per language | Quality owner |
| Monthly | Re-test on the same 100 labelled documents; token cost against the alert | Quality owner |
| Quarterly | Review the €2,000 threshold, prompt and model; report to the business owner | Quality + business owner |
| Yearly | DPA, AI Act status, retention period | Privacy |

**Hard limits:** tokens above **€100 a month** trigger the cost alert (normal at month 6: €41); a re-test below **70%** (baseline 77.8%) means **back to manual** until fixed. Reusing the same 100 labelled documents makes the re-test automatic; the analyst reviews it in about 1 h a month (12 × €45 = **€540 a year**, paid from the contingency).

### Fallback: the manual path

We switch to manual when the model does not respond, the script or Azure is down, the re-test falls below 70%, the cost alert goes off and the business owner pauses the system, or the import job fails. The script retries every 15 minutes; after 8 failed tries (2 hours) a Teams alert goes to the Head of Operations. Staff type documents from the mailbox into the TMS screen as today and label each email "manual" so the script skips it; the import job also skips document numbers already in the TMS. Drafts already in the staging table can still be approved. When the model is back, the script continues only with unhandled emails.

```
                    Order mailbox (M365)
                            │
                   Is the model working?
              YES ┌─────────┴─────────┐ NO (8 failed tries = 2 h → Teams alert)
                  ▼                   ▼
        AI reads + rules       Employee opens email, labels it "manual"
                  ▼                   │
        Staging table (waiting room)  │
                  ▼                   │
        Person approves in Teams [H]  │
                  ▼                   ▼
        Import job (skips duplicates)   Employee types it into the TMS screen
                  └─────────┬─────────┘
                            ▼
              TMS: the same order tables as always
```

Gemini 3 Flash is the **exit plan** if the provider changes price or disappears (about €1,258), not a backup for an outage: for a few hours, typing by hand is cheaper and already proven.

### TMS access: SQL, not a nightly export

| | SQL access (chosen) | Nightly export |
|---|---|---|
| Lookups | Live: a client created this morning is known | Up to 24 hours old: new clients wrongly flagged |
| Writing approved orders | Possible (import job) | Not possible: an export only goes out |
| Load on the TMS | About 300 small queries a day | None |

| Account | May do | May not do |
|---|---|---|
| reader (script) | Read clients, carriers and orders | Change anything in the TMS |
| staging (script) | Write and update in its own staging schema | Touch the TMS tables |
| importer (import job) | Add approved orders, or call the TMS's own import procedure | Delete or overwrite |

**Plan B:** if IT does not allow live reads, a nightly export for lookups only; new clients then go to a person through the "new client" rule. **The one real risk:** the TMS screen checks things itself (required fields, codes, order numbers) and a SQL insert skips those checks. So in month 1 we ask IT for the TMS's own import route; if there is none, the import job repeats those checks and is tested in the month-3 parallel run (that is why it is the largest item, 60 h).

### The €2,000 threshold

A person checks every document; the threshold decides which ones get the deliberate check. My probe: a quick check catches 47% of wrong fields, a deliberate one 80% (33 points more). The extra minute (€0.75) pays when 0.222 × 0.33 × damage per error × order value ≥ €0.75. With damage estimated at 0.5% of the order value (est.): order value ≈ €2,050, so **€2,000**. At 1% damage it drops to about €1,000; month 1 measures the real damage per error. This is staff time, not part of the €50,000 build budget.

### Languages and cost

The model reads each document in its own language; there is no translation step. Harder documents use more tokens: in my Build an easy invoice cost €0.0017 and the hardest €0.0054 (3.2×). Even if every document were that hard, tokens would be about **€1,550 a year** (3.1% of the budget). The real language cost is mistakes: each extra error point costs about €2,250 a year (75,000 × 1% × 4 min × €0.75). So: accuracy **and** tokens are measured per language on the 200-document validation set, Power BI tracks corrections per language, and a language more than 10 points below the others goes to the deliberate check (or manual) until fixed.

## 3. Architecture sketch

```
┌────────────────────────────── INTERFACE ──────────────────────────────┐
│ Teams review list: document + proposed fields → APPROVE / CORRECT  [H] │
│ Power BI: queue, correction rate, cost per document                    │
└───────────────▲──────────────────────────────────────────┬────────────┘
                │ proposals                                 │ approved rows
┌───────────────┴─────────────── INTEGRATION ───────────────▼────────────┐
│ Azure Functions every 15 min: Graph → model → rules → STAGING TABLE     │
│ Rules to a person: missing field, unsure language, order > €2,000,      │
│ new client, any customs field                                           │
│ FALLBACK: model down → documents stay in the mailbox → manual entry    │
│ Build + test: 260 h × €63 = €16,380                                     │
└───────▲───────────────────────▲──────────────────────────▲─────────────┘
        │ email (Graph)          │ JSON                     │ SQL (read + staging)
┌───────┴──── DATA ────────┐ ┌──┴── AI MODEL ──────┐ ┌─────┴──── TMS ─────────┐
│ M365 order mailbox       │ │ Claude Sonnet 5.5 (L)│ │ Custom TMS, no API     │
│ SAP + Salesforce (APIs)  │ │ €0.0064 per document │ │ read-only + staging    │
│ master data, read-only   │ │ €491 a year          │ │ table (import job)     │
└──────────────────────────┘ └──────────────────────┘ └────────────────────────┘
┌───────────────────────────── GOVERNANCE ───────────────────────────────┐
│ Log of proposals, corrections, approvals · monthly re-test (100 docs)   │
│ DPA + EU safeguards · cost alert · AI Act: minimal risk                  │
│ Hosting €1,200 · maintenance €2,268 · validation set €900 · legal €900  │
└──────────────────────────────────────────────────────────────────────────┘
(L) = lock-in marker · [H] = human checkpoint · WhatsApp not touched in phase 1
```

## 4. Cost model, year 1 (against €50,000)

| Category | Formula | € |
|---|---|---:|
| AI API | 300 documents × 250 days × €0.0064 (2,000 input and 300 output tokens at $2/$10 per 1M × 0.92, est.) + re-test 100 × 12 × €0.0064 | 491 |
| Integration development | Mailbox connector 40 h + extraction and rules 40 h + staging table and import job 60 h + review list 60 h + testing on real documents 40 h + logging 20 h = 260 h × €63 (€63/h: my estimate between the Belgian average labour cost of €47.10 and the freelance median of about €72) | 16,380 |
| Infrastructure | Azure Functions (compute inside the free grant) + storage, monitoring and buffer, €100 a month (est.) | 1,200 |
| Validation set | Data analyst labels 200 real documents × 6 min × €45/hr | 900 |
| Training | 12 operations staff × 2 h × €45 (Belgian average labour cost €47.10, Eurostat 2023) | 1,080 |
| Legal: DPA and GDPR check | 6 h × €150 (lower end of Belgian lawyer rates of €100–300, est.) | 900 |
| Maintenance, months 4–12 | 4 h a month × 9 × €63 | 2,268 |
| Contingency 15% | 15% × €23,219 (€540 reserved for the analyst's monthly re-test review; the rest, €2,943, is about 47 developer hours) | 3,483 |
| Microsoft 365, Graph, Teams, Power BI | Already licensed; dashboard only for existing Power BI users | 0 |
| **Total, year 1** | | **26,702** |

**Headroom: €23,298** of the €50,000.

**What it returns (est.):** typing a document into the TMS by hand 4 min (est.), checking a proposal 1.5 min (est.): 75,000 documents × 2.5 min × €0.75 = €140,625 a year, minus corrections at 22.2% (75,000 × 22.2% × 4 min × €0.75 = €49,950) = **€90,675 a year**, a payback of about 3.5 months on €26,702. Both times are my estimates; month 1 measures them, and the case shrinks fast if a check takes longer than 1.5 minutes. Every box in the sketch has a line here; WhatsApp, route optimisation and Einstein have none because they are not in the design.

**Months 1, 6 and 12** (documents × 21 days; errors at my unseen-input rate of 22.2% × 4 min to correct × €0.75; fixed €352 a month = hosting €100 + maintenance €252):

| Month | Documents a day | Tokens a month | Corrections a month | Total a month |
|---|---:|---:|---:|---:|
| 1 (one client group) | 50 | €7 | €699 | €1,058 |
| 6 (all clients) | 300 | €41 | €4,196 | €4,588 |
| 12 (growth) | 450 | €61 | €6,294 | €6,707 |

At 100, 1,000 and 10,000 documents a day the token bill is €14, €135 and €1,352 a month. **The cost that decides is correcting the AI, not the tokens:** at month 6 corrections are about 100 times the token bill.

**What "cost-effective" means here.** A finished document in the TMS must cost less than today, counting everything:

| Per year (75,000 documents) | Today | With AI, year 1 | With AI, year 2+ |
|---|---:|---:|---:|
| Typing 4 min × €0.75 | €225,000 | – | – |
| Checking a draft 1.5 min (est.) | – | €84,375 | €84,375 |
| Fixing mistakes 22.2% × 4 min | – | €49,950 | €49,950 |
| System (year 2: running only, est.) | – | €26,702 | about €4,700 |
| **Per document** | **€3.00** | **€2.15** | **about €1.85** |

Counting only the 77.8% the AI gets right first time, a document still costs €2.76. Tokens are €0.0064 per document (0.3%). It stops paying when a check takes more than about **2.6 minutes** in year 1 (3.0 from year 2), or when more than about **51%** of drafts need a fix (60% from year 2).

## 5. The five board questions

| # | Question | Answer, with a figure or a named constraint |
|---|---|---|
| 1 | Why not Copilot or Einstein? | Copilot drafts text inside Microsoft 365 and Einstein works inside Salesforce; neither writes checked fields into a TMS that has no API, nor keeps a per-document approval record. We use them where they fit (drafting, sales) and build only the €16,380 intake link they cannot do. |
| 2 | What does it cost at scale? | €4,588 a month at 300 documents a day, of which €41 is tokens; at 10,000 a day tokens are €1,352 a month. The number to watch is the correction rate: each point of errors costs about €190 a month at 300 documents a day. |
| 3 | What if the vendor doubles the price or disappears? | Tokens ×2 = €982 a year, still under 2% of the budget. Switching to Gemini 3 Flash took about €1,258 in my own Build (Week 7); if the model is down, documents wait in the mailbox and are entered by hand as today. |
| 4 | Four languages? | Measured on my Build: a French document 2 of 2 and a Chinese-script document 2 of 2 (n = 2 each). Not measured: German and Dutch. That is why the 200-document validation set must cover all four before go-live, and any low-confidence language goes to a person. |
| 5 | What risk are we not seeing? | A wrong field that looks right and is approved in a hurry (on my unseen inputs 22.2% needed a correction). Mitigation: corrections are tracked per user in Power BI, a monthly sample is re-checked, and nothing reaches the TMS without approval. Second: client data leaving the EU, closed by a DPA with EU safeguards before go-live. |

**Regulation in one line:** document extraction is not an Annex III use, so minimal risk under the AI Act; GDPR applies to contact names on documents (legitimate interest, DPA, retention period).

**How this differs from my own beat:** the same pattern as my importer design (the AI proposes, rules route, a person decides, a manual fallback), but here the hard constraint is the TMS without an API, not a sanctions list.

---

**Sources:** Week 8 case page (budget, timeline, team, systems; no rates given); Anthropic price list, Nov 2026 (Claude Sonnet 5.5 $2 / $10 per 1M tokens); ECB reference rate 11 Nov 2026 (USD 1.1127); Azure Functions pricing (Flex Consumption free grant 250,000 executions and 100,000 GB-s a month); Microsoft Power BI pricing (Pro $14 per user per month); Eurostat via Brussels Times (Belgian hourly labour cost €47.10, 2023); Lemon.io and ContractRates.fyi (Belgian freelance developer rates); Global Law Experts (Belgian lawyer rates about €100–300/h).

*AI disclosure: I chose the use case and the design; I used Claude to structure the five layers, draw the sketch and compute the cost model. Claude also helped me look up prices and rates online. Volumes and hours marked (est.) are my estimates; the accuracy and cost per call come from my own Build runs.*
