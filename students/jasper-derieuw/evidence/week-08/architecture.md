---
week: 8
title: "Evidence - Integration Architecture for an Antwerp Importer (sanctions screening)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Design defense"
date: 2026-10-14
---

# Integration Architecture: Sanctions Screening for an Antwerp Importer

**The company** (my capstone scenario, a realistic composite): a ~150-employee Antwerp importer of Chinese electronic components. About 150 shipments and 1,500 counterparty checks a month (18,000 a year), screened today by 2 compliance analysts by hand at about 6 minutes each: 1,800 h × €45/hr = **€81,000 a year** (Week 4). Systems already paid for: Microsoft 365 (Outlook, Teams, SharePoint) and an ERP with supplier master data. No developers in-house.

## 1. The use case, and why this one

**One use case:** check every supplier invoice against the EU sanctions list before payment, with AI only reading the invoice and adding warnings.

Why this one (Week 4 five-criterion filter): it is repetitive (1,500 a month), pattern-based, verifiable against a public list, and it already costs €81,000 a year. Rejected for now: HS-code suggestion (a wrong code is a customs error the AI cannot verify), adverse-media checks (open-ended, hard to verify), CBAM reporting (low volume at this importer).

**What the AI may not do:** decide that a supplier is clear. My Build v1 called a sanctioned bank clear in 1 of 8 runs on genuine matches (Week 4); a rule engine and a person make that call.

## 2. Five layers

| Layer | Decision | Why (my evidence) |
|---|---|---|
| **1. Data** | Invoices arrive as PDF in a shared Outlook mailbox; text is read via Microsoft Graph. Supplier master data comes from an ERP export. The sanctions list is the **EU consolidated financial sanctions list** (free, updated by the EU), screened through a bought screening service. | Real sanctions data instead of my 6-entity test list. Invoice text is written by the supplier, so it is untrusted input (Week 9). |
| **2. AI model** | **Claude Sonnet 5.5** via the API (`claude-sonnet-5-5`, $2/$10 per 1M tokens), prompt v2, one JSON answer per invoice: four fields + one flag. **(L)** Exit target: Gemini 3 Flash. **No local model.** | Prompt v2 on 18 unseen inputs: Sonnet 5.5 28/36 (77.8%), local llama3.2 5/36 (13.9%), with a sanctioned bank invented as the supplier in 22 of 36 runs (Build log, Run 4). Lock-in score 5/15, exit cost about €1,258 (Week 7). |
| **3. Integration** | Every 15 minutes, a script takes new invoices, asks the model for the fields, then **rules decide the route**. The screening service matches the supplier name against the EU list. Routing rules send to a person: any list hit, any AI flag other than "clear", a non-Latin supplier name, a missing field, an origin of "unclear", or more than one port. **Fallback:** if the API fails 3 times in a row, every invoice goes to the manual queue (today's process). | The routing is a rule, not AI (Week 4, Part 4). The script already exists as my Build runner. |
| **4. Interface** | A SharePoint list shown in Teams: one row per invoice with the fields, the AI flag and the route. **H1:** an analyst confirms every "clear" (2-minute check). **H2:** routed invoices get a full manual check (6 minutes). Interface in English, the analysts' working language. | Nothing new to install or learn beyond one list; 2 users, about 2 hours of training each. |
| **5. Governance** | Every raw model answer is saved with its token count (as in my Build), plus who approved what and when. Monthly re-test on my 30-input test set (12 own + 18 swap); a drop below 75% strict triggers a review. Monthly token-cost alert. EU AI Act: expected minimal risk (it screens companies, not people; to confirm in Week 10). GDPR: beneficial owners on sanctions lists are people, so a data processing agreement with the model provider is needed before go-live. | The audit trail is what a customs authority would ask for after a missed hit. |

## 3. Architecture sketch

```
┌─────────────────────────── INTERFACE ───────────────────────────┐
│  Teams / SharePoint list: one row per invoice (already paid)    │
│  [H1] analyst confirms every "clear", 2 min      €18,900/yr*    │
│  [H2] full manual check on routed invoices, 6 min €24,300/yr*   │
└───────────────▲─────────────────────────────────▲───────────────┘
                │ route + fields + flag            │ FALLBACK: API down
┌───────────────┴──────── INTEGRATION ────────────┴───────────────┐
│  Script every 15 min (my Build runner)   build €23,000 (yr 1)   │
│  1. read invoice → 2. AI fields → 3. screening service →        │
│  4. ROUTING RULES (not AI): hit / flag ≠ clear / non-Latin name │
│     / missing field / origin "unclear" / >1 port  →  H2         │
└───────▲───────────────────────▲──────────────────────▲──────────┘
        │ invoice text           │ JSON (5 fields)       │ name
┌───────┴──────── DATA ─────┐ ┌──┴──── AI MODEL ────┐ ┌─┴── SCREENING ────┐
│ Outlook mailbox (Graph)   │ │Claude Sonnet 5.5 (L)│ │ Bought service (L)│
│ ERP supplier export       │ │ prompt v2, €0.0020  │ │ EU consolidated   │
│ EU sanctions list (free)  │ │ per check, €38/yr   │ │ list, €1,082/yr   │
└───────────────────────────┘ │ exit: Gemini 3 Flash│ └───────────────────┘
                              └─────────────────────┘
┌──────────────────────── GOVERNANCE ─────────────────────────────┐
│ Raw answers + approvals logged · monthly 30-input re-test       │
│ cost alert · AI Act class (Week 10) · GDPR processing agreement │
│ Analyst time for re-test + 30-invoice sample: €2,160/yr         │
└─────────────────────────────────────────────────────────────────┘
(L) = lock-in marker   * analyst time, the largest running cost
```

## 4. My Build is one box: the five questions

| Question | Answer |
|---|---|
| **What feeds it?** | Invoice text written by the supplier. Anyone who can send an invoice can put text in front of the model, including instructions (the Week 9 injection test). |
| **Who sees its output first?** | The routing rules, then an analyst. No AI answer reaches payment or customs without H1 or H2. |
| **What happens when it is wrong?** | Prompt v2 on Sonnet 5.5: 0 invented suppliers in 60 runs, and its misses were cautious ("unclear" on 6 of 6 real origins given as a city), which the routing sends to H2: caught, at 6 minutes each. **What passes through:** a confident wrong origin. On practitioner input D it wrote "Japan" where the documents conflict. With no other routing trigger, that reaches H1, a 2-minute check that may not catch it. |
| **What happens when it is unavailable?** | After 3 failed calls, every invoice goes to H2: today's manual process at 6 minutes, about 150 analyst hours a month, which the 2 analysts already cover. Screening never stops; it slows down. |
| **Where does it store what it sees?** | Raw answers in the company's SharePoint (inside its Microsoft 365 tenant). At Anthropic, API data falls under the Commercial Terms: no training on it (Week 7). Retention period to be set with the data protection officer (Week 10). |

## 5. Board questions

| # | Question | Answer |
|---|---|---|
| 1 | Why not the AI in our existing tools (Microsoft 365 Copilot)? | Copilot can read an invoice, but it does not screen against the EU list, does not give one fixed answer per invoice, and leaves no per-invoice audit trail. We buy what exists (the screening service, about €1,082 a year) and build only the thin part that does not: invoice pre-fill and routing. |
| 2 | What does this cost at scale; what if we grow 3×? | At 3× (4,500 checks a month), tokens go from €3 to €9 a month. Analyst clean-up of AI errors goes from €0–€1,499 to €0–€4,496 a month (0% error on my own set, 22.2% on unseen inputs, × €4.50 per redo). The bill scales with errors, not tokens (cost-at-scale one-pager). |
| 3 | What if Anthropic changes its price or shuts down? | Tokens ×3 = €110 a year instead of €38: no reason to leave. Retirement needs at least 60 days' notice; the switch to Gemini 3 Flash costs about €1,258 and 1–2 weeks (Week 7). The screening service may stop "with or without notice" (Verifex terms, §15), so the fallback is the manual queue and the EU's own list. |
| 4 | How does it handle Chinese, Dutch and French? | Measured: the Chinese-script invoice passed 2 of 2 runs on v2 and costs 3% more input tokens (693 vs about 670); the French request passed 2 of 2. That is n = 2 each, so non-Latin supplier names go to a person by rule, whatever the model says. |
| 5 | What risk are we not seeing? | Automation bias at H1: about 1,050 "clear" rows a month confirmed in 2 minutes each. My Build showed that a wrong answer looks as tidy as a right one (Run 3). Mitigation: a monthly sample of 30 cleared invoices re-checked in full, and the monthly re-test. Second: injection through invoice text (Week 9). |
| Bonus | €100k instead? €25k? | €100k: a screening service with transliteration and ownership data, and a validation set of 200 real invoices instead of 30 synthetic ones. €25k: drop the €8,000 mailbox automation (analysts drop invoices into a folder), cut maintenance to €2,250 (15% of the smaller €15,000 build) and contingency to 10%: about €22,800. |

---

*AI disclosure: I used Claude to structure the five layers, draw the ASCII sketch and check the arithmetic against my Build log and Weeks 4, 6 and 7; the design choices, the routing rules and the numbers from my own runs are mine.*
