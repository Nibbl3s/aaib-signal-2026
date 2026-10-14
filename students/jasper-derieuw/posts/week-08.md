---
week: 8
title: "I Defended My Own AI Design to a Board. It Shrank My Business Case."
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Design defense"
date: 2026-10-14
verdict: "Buy the list, build the thin layer, keep a person on every clear"
stamp: "PAYBACK 10–26 MONTHS"
kpis: "€37,329 | year-1 system cost ; <0.1% | tokens' share of the running cost ; 35.2% | error rate at which the design stops paying"
takeaways: "Drawing every box and costing it removed my optimistic numbers ; Buy what exists and build only the thin part ; The error rate on real invoices decides the case, not the token price"
---

# I Defended My Own AI Design to a Board. It Shrank My Business Case.

**Hook**

In Week 4 I priced a redesigned version of my sanctions-screening tool at €82,000 a year with a 3.4-month payback. This week I had to draw every box, put a cost on each one and answer the questions a board would ask. The same idea now saves €10,500 to €28,500 a year from year two, with a payback of 10 to 26 months. Nothing broke. I just stopped leaving things out.

**The Company**

A realistic composite from my capstone: a 150-employee Antwerp importer of Chinese electronic components. It runs about 1,500 counterparty checks a month. Two compliance analysts do them by hand at about 6 minutes each: 1,800 hours × €45 loaded rate = €81,000 a year. It already pays for Microsoft 365 and an ERP, and has no developers. One missed sanctioned supplier has cost Belgian companies €50,000 to €500,000 in recent cases. The CFO's question: is a three-month pilot worth it?

**The Architecture**

*Data.* Invoices arrive as PDFs in a shared Outlook mailbox and are read through Microsoft Graph. Supplier data comes from an ERP export. The sanctions list is the EU consolidated list, which is free.

*AI model.* Claude Sonnet 5.5 with my prompt v2 reads each invoice and returns one JSON answer: supplier, origin, HS code, value and a flag. It costs €0.0020 per check, measured over 60 of my own calls. I rejected a local model: on 18 inputs it had never seen, a 3B model on my PC scored 13.9% and named a sanctioned bank as the supplier in 22 of 36 runs.

*Integration.* A script runs every 15 minutes. The list matching is bought, not built: a screening service at about €1,082 a year. Then rules, not AI, decide the route. Any list hit, any AI flag other than "clear", a non-Latin name, a missing field, an "unclear" origin or more than one port goes to a person. If the API fails three times in a row, everything goes to the manual queue, which is today's process.

*Interface.* One SharePoint list inside Teams. An analyst confirms every "clear" in 2 minutes (70% of invoices); routed invoices get a full 6-minute check (30%, my estimate).

*Governance.* Every raw answer and every approval is logged. A monthly re-test on my 30 test inputs and a full re-check of 30 cleared invoices cost €2,160 a year in analyst time. The AI never clears a supplier on its own.

**The Defense**

Why not Microsoft 365 Copilot, which they already pay for? It can read an invoice, but it does not screen against the EU list, does not give one fixed answer and leaves no audit trail per invoice. So I buy what exists and build only the thin part in between.

What does it cost? Year one: €37,329 for the system, of which €23,000 is the one-off build, plus €43,200 of human checks. Tokens are €38 a year, under 0.1% of the running cost. If volume triples, tokens go from €3 to €9 a month; what really grows is analyst time.

What if the provider triples its price? Then tokens cost €110 a year, and leaving costs about €1,258 (Week 7). I would stay.

The number that decides the case is the error rate. On my own invoices prompt v2 made 0 errors in 24 runs; on unseen ones it failed 8 of 36 times (22.2%). Each error is a 6-minute redo at €4.50, and the design stops saving money at 35.2% errors. That is also why my Week 4 figure was too high: it assumed a 2-minute check on every invoice and counted risk reduction as a saving. Costing every box took away most of my business case, but what is left I can defend.

**The Question**

The 70/30 routing split is my own estimate, and it moves the payback more than any price does. What share of real invoices from Chinese suppliers has a non-Latin name, a missing field or more than one port?

---

*AI disclosure: all costs come from my own API calls and the workings linked below. I used Claude to check the arithmetic, draw the sketch and structure this post; the design choices and the estimates marked as mine are mine.*

Full workings: [architecture and board questions](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/architecture.md) · [cost at scale](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/cost-at-scale.md) · [Build log, Runs 3 and 4](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/log-v1.md)
