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
| **Data** | Documents from the shared order mailbox through Microsoft Graph; client and carrier master data read from SAP and Salesforce through their APIs; the TMS is **read-only** for lookups, and new orders go to a **staging table**, never into the TMS core tables | The TMS has no API and cannot be replaced; a staging table keeps every write reversible |
| **AI model** | Claude Sonnet 5.5 via the API, one JSON answer per document, a fixed field list and "not found" when a field is missing **(L)**; exit target Gemini 3 Flash | My Build: 28 of 36 correct on unseen documents with the same prompt design (Build log, Run 4); Gemini scored 83.3% on my set (Week 6) |
| **Integration** | A script polls the mailbox every 15 minutes, calls the model, applies rules, writes proposals to the staging table; an import job moves **approved** rows into the TMS | Small, testable, built by 2 developers; the rules route doubtful documents to a person |
| **Interface** | A review list in Teams (SharePoint list): the document next to the proposed fields, approve or correct; Power BI shows the queue and correction rate | Staff already work in Teams; no new tool to learn |
| **Governance** | Every proposal, correction and approval logged with user and time; monthly re-test on 100 labelled documents; cost alert; DPA with the model provider and EU data safeguards; no client price lists in the prompt | Audit trail; a drop in accuracy is caught; pricing exposure limited to what is on the document |

## 3. Architecture sketch

```
┌────────────────────────────── INTERFACE ──────────────────────────────┐
│ Teams review list: document + proposed fields → APPROVE / CORRECT  [H] │
│ Power BI: queue, correction rate, cost per document                    │
└───────────────▲──────────────────────────────────────────┬────────────┘
                │ proposals                                 │ approved rows
┌───────────────┴─────────────── INTEGRATION ───────────────▼────────────┐
│ Script every 15 min: Graph → model → rules → STAGING TABLE              │
│ Rules to a person: missing field, low-confidence language, value > €X,  │
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
| Integration development | Mailbox connector 40 h + extraction and rules 40 h + staging table and import job 60 h + review list 60 h + testing on real documents 40 h + logging 20 h = 260 h × €63 | 16,380 |
| Infrastructure | Small cloud function and storage, €100 a month (est.) | 1,200 |
| Validation set | Data analyst labels 200 real documents × 6 min × €45/hr | 900 |
| Training | 12 operations staff × 2 h × €45 | 1,080 |
| Legal: DPA and GDPR check | 6 h × €150 (est.) | 900 |
| Maintenance, months 4–12 | 4 h a month × 9 × €63 | 2,268 |
| Contingency 15% | 15% × €23,219 | 3,483 |
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

*AI disclosure: I chose the use case and the design; I used Claude to structure the five layers, draw the sketch and compute the cost model. Volumes and hours marked (est.) are my estimates; the accuracy and cost per call come from my own Build runs.*
