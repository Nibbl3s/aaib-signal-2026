---
week: 8
title: "Evidence - A Practitioner Breaks My Design (6 ECTS)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Design defense"
date: 2026-11-16
---

# A Practitioner Breaks My Design

## 1. Who, and what I showed them

| | |
|---|---|
| Who | A customs and trade-compliance specialist at a large international company, 12 years in customs and export-control compliance (anonymised; permission given to quote) |
| When and how | Monday 16 November 2026, 13:00, 20 minutes, Microsoft Teams |
| What I showed | A one-page summary of my [Week 8 architecture](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/architecture.md): the importer, what the AI may and may not do, the invoice flow, the routing rules, the fallback, my measured results and my three open doubts |
| How | I explained without defending, asked six prepared questions, a follow-up on each ("what would make you comfortable enough to rely on that part?"), and ended with: "What would go wrong here that I have not thought of?" |

## 2. What they said I had wrong

The quotations come from the notes I took during the call; most are word for word, some are close paraphrases of what was said.

| Their words | Part of my design |
|---|---|
| "None of them automatically 'wins.' … If the invoice, packing list and certificate disagree, I would treat the origin as unverified and stop the automatic flow." | Origin extraction |
| "You should never let the AI choose the more plausible-looking document. Your current weakness is exactly there: if it writes 'Japan' confidently when the documents conflict, that is not an extraction error—it is a compliance-control failure." | AI model |
| "Two minutes is tight. If the analyst has to open the invoice, compare it with the PO, check the HS code and review the screening result, it becomes closer to five or ten minutes." | H1 check |
| "Otherwise the 2-minute check risks becoming a rubber stamp." | H1 check |
| "For electronic components, supplier-name screening is necessary but absolutely not sufficient. The bigger issue is often the item." | List matching |
| "A name-only sanctions check will not reliably catch that. You need ownership information." | List matching |
| "'The AI suggested it' is not a defence." | Liability |
| "Your audit trail needs to be complete and immutable enough to reconstruct the decision." | Governance |

**Their answer to the last question:**

> "The biggest thing you have not fully addressed is data quality and exception volume. Your test says 28 of 36 unseen invoices were correct, but in production the dangerous cases are not the easy ones—they are the unusual invoices, scanned documents, mixed languages, changed supplier details, incorrect certificates, and conflicting data."
>
> "Second, your 2-minute confirmation may become a rubber stamp if analysts receive too many cases. If 90% of invoices are 'clear,' people stop reading carefully. You need sampling, quality monitoring and a way to measure false negatives—not only false positives."
>
> "Third, do not assume the sanctions list is updated in real time. A supplier can be clean today and listed tomorrow."
>
> "Fourth, your cost estimate is useful, but it ignores implementation, data protection, supplier onboarding, exception handling, model monitoring, audit support and the compliance analyst's time to manage exceptions."

## 3. The sting in numbers

My cost model assumed 2 minutes for H1 (est.); the practitioner says 5 to 10. That number decides the case:

| | Formula | Result |
|---|---|---:|
| Cost of one extra H1 minute | 12,600 H1 checks a year × €0.75 | €9,450 a year |
| Break-even H1 time at 22.2% errors | 2 + €10,538 ÷ €9,450 | 3.1 min |
| Break-even H1 time at 0% errors | 2 + €28,520 ÷ €9,450 | 5.0 min |
| Year 2+ saving if H1 takes 5 min | €10,538 to €28,520 − 3 × €9,450 | −€17,812 to +€170 |
| Each 10 points of invoices moved from H1 to H2 | 1,800 × (6 − 2) min × €0.75 | €5,400 a year |

At 10 minutes H1 would be slower than the 6-minute full check, and the AI step would only add cost. **The case now hangs on two numbers, not one:** the error rate (break-even 35.2%) and how long an honest low-risk confirmation takes (break-even 3.1–5.0 min). Changes P1, P3 and P4 below move invoices from H1 to H2; that share is not yet known.

Their fourth point is partly answered and partly not. My [cost model](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/cost-at-scale.md) does include implementation (€23,000), maintenance, model monitoring (the monthly re-test) and contingency, but the one-pager did not show them. Not costed anywhere: a specialist for export-control cases, ownership data from an enhanced screening service, re-screening volume, data-protection work and audit support.

## 4. The revised architecture

Changes are marked **P1–P8** and attributed to the practitioner.

| # | Change | Prompted by | Layer |
|---|---|---|---|
| P1 | Any conflict between invoice, packing list and certificate of origin routes to H2. The AI shows the conflicting values side by side and may not choose one. | "None of them automatically 'wins.'" | Integration, model |
| P2 | H1 only for known suppliers, complete fields, a clean screening result and no product-risk flag. A structured checklist with source evidence, analyst ID and timestamp; approval is blocked while a mandatory field is missing. | "Two minutes is tight." | Interface |
| P3 | A product-risk flag before routing (HS code, description, destination); a hit goes to a specialist (H3), not H1. The AI may flag; classification and licensing stay with a qualified person. | "Supplier-name screening is necessary but absolutely not sufficient." | Integration |
| P4 | Screening on aliases, address, country and fuzzy names, plus ownership data where available; unverifiable ownership goes to H2. | "A name-only sanctions check will not reliably catch that." | Screening |
| P5 | Every AI value is labelled a proposal, with source document, page and field next to it. Only human-approved data becomes declaration-ready; repeated AI errors trigger escalation, not more volume. | "'The AI suggested it' is not a defence." | Interface, governance |
| P6 | Every extraction, screening result, route, approval, exception, correction and re-screen is logged with time and user identity, in a log that cannot be edited afterwards. | "Complete and immutable enough to reconstruct the decision." | Governance |
| P7 | Re-screen before payment and on every update of the EU list. | "A supplier can be clean today and listed tomorrow." | Screening |
| P8 | Start with a pilot on one product family and known suppliers, with no automatic clearance; measure exception rate, false negatives, H1 time and audit completeness before scaling. | "The dangerous cases are not the easy ones." | Governance |

```
Invoice PDF ─► AI PROPOSAL: 5 fields, each with source page and field  [P5]
               conflicting origin documents → show both, choose none   [P1]
                    │
                    ▼
SCREENING (L): name + aliases + address + fuzzy + ownership data       [P4]
                    │
                    ▼
ROUTING RULES (not AI), first match wins
  list, alias or ownership hit, or ownership unverifiable ──► H2       [P4]
  origin documents conflict ───────────────────────────────► H2       [P1]
  product-risk flag (HS code, description, destination) ───► H3       [P3]
  AI warning, non-Latin name, missing field, >1 port ──────► H2
  else: known supplier, complete, clean ────────────────────► H1       [P2]
                    │
                    ▼
H1 low-risk confirmation: checklist, source evidence, analyst ID,
   timestamp; no approval while a mandatory field is missing           [P2]
H2 full manual check, 6 min       H3 export-control specialist         [P3]
                    │
                    ▼
DECLARATION-READY DATA only after human approval                       [P5]
                    │
                    ▼
RE-SCREEN before payment and on every EU list update                   [P7]

GOVERNANCE: every step logged with time + user, not editable           [P6]
            monthly sample of H1 approvals to find false negatives;
            escalate when errors repeat                                [P5]
PILOT:      one product family, known suppliers, no auto-clearance     [P8]
FALLBACK:   unchanged; after 3 failed API calls everything goes to H2
```

## 5. Where I adapted their advice

- **P3 is scoped.** EU dual-use licensing (Regulation (EU) 2021/821) applies to exports, brokering and transit, so for an importer it bites when components are resold abroad. The flag stays, because the importer cannot tell from an invoice where the goods end up.
- **P5 sharpens what was there.** In version 1 no AI answer reached payment or customs without H1 or H2; what was missing was the label "proposal", the source evidence and an approval record.

## 6. What it changed

I defended my design on accuracy: 28 of 36 on unseen invoices. The practitioner judged it on control: who confirmed what, against which document, and in how much time. A design that is right 78% of the time can still fail an audit if a person cannot show why they cleared an invoice. The first number my pilot must measure is no longer the error rate but how long an honest confirmation takes.

---

*AI disclosure: I held the conversation and wrote down the practitioner's answers (some as close paraphrases, as noted in Section 2); I used Claude to structure this record, compute the break-even and redraw the sketch. The changes are mine, attributed to the practitioner where they came from them.*
