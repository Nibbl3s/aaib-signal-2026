---
week: 12
title: "Evidence - The No-AI Option and the Non-Generative Alternative, Costed Side by Side"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Synthesis"
date: 2026-11-16
---

# The No-AI Option, Costed Side by Side

The capstone rubric asks for the "no AI" option to be "seriously considered and either adopted or rejected with clear reasoning", and for the modality to be justified against non-generative alternatives. Four options for the same importer (18,000 checks a year), all figures from my own evidence unless marked.

## 1. Four options

| | **0a. Today** | **0b. Rules only** | **0c. Non-generative extraction** | **1. Recommended: AI-assisted pilot** |
|---|---|---|---|---|
| What it is | Two analysts read every invoice and check names by hand | Buy a list-matching screening service; analysts still read every invoice | 0b plus a ready-made invoice-reading model without generative AI (Azure Document Intelligence, prebuilt invoice model) to pre-fill fields | 0b plus a language model that pre-fills fields and adds warnings; rules route; a person decides every invoice |
| Name matching against the EU list | By hand | **Automatic** (exact, fuzzy, aliases) | Automatic | Automatic, plus the model flags cross-script variants |
| Supplier name and bank details pre-filled | No | No | **Yes** (VendorName; PaymentDetails: IBAN, SWIFT) | Yes |
| Origin and HS code pre-filled | No | No | **No**: the model's schema has no origin or HS code field | Yes, with "unclear" when a port is not an origin |
| One-off cost | €0 | About €0 (web portal, est.) | Integration, not costed (similar to Option 1's script, est.) | €28,007–€28,607 |
| Running cost, year 2+ | €81,000 | €82,082 (€81,000 + €1,082 service) | €82,248, minus a time saving I have not measured (extraction: 18,000 pages × $10 per 1,000 × 0.92 = €166, at 1 page per invoice, est.) | **€55,720–€73,702** (€81,000 − saving of €7,298–€25,280) |
| New risks | None | Vendor terms (ADR 001) | Vendor terms; a second vendor | Injection, data to a model provider, AI Act file, the check becoming a stamp (Week 9) |
| Evidence | Week 4 | Weeks 6–7 | Official price page and schema (sources below) | Weeks 6–11 |

## 2. When the no-AI option wins

The AI's saving disappears, and Option 0b becomes the better buy, if any one of these holds:

| Condition | Threshold | Formula | What I know |
|---|---|---|---|
| The AI-assisted check takes too long | Above **2.8–4.7 min** | 2 + saving ÷ (12,600 × €0.75) | Assumed 2 min; a customs specialist expects "five or ten" (E17) |
| Too many invoices need the full check | Above **43.5–76.8%** routed to H2 | 30% + saving ÷ €540 per point | My cost model assumes 30%; hard test sets gave 70–80% (routing replay); practice suggests "1 in 10" need follow-up (E6) |
| The payback outlives the system | Above **36 months** (a 3-year life, est.) | one-off ÷ (saving ÷ 12) | 13–47 months: the pessimistic end fails this test |

All three conditions point at the same unknowns: how long an honest check takes, and how many invoices are really complete. Neither can be found by more analysis; both can be measured in three months.

## 3. Why gen-AI, and not the non-generative model

The non-generative invoice model is the cheaper and safer reader for what it covers: supplier name and bank details at about €0.0092 a page, with no prompt to inject. But its schema has no country of origin and no HS code, and nothing in it can tell a routing port from where goods were made. That reasoning is what a language model is for, and it is exactly where my Build needed the most work: on the classmate's freight set the origin was missed on 3 of 10 inputs (E4), and the v2 rule "a routing point is not an origin" fixed most of it (28 of 36 on unseen inputs, E10). Matching names against the EU list is the opposite case: a rules job, bought as a service in every option.

**One idea worth keeping:** the bank details the non-generative model reads well are exactly what an accounting manager worried about (E6, design rule P9). A future version could use it as a second, injection-free reader for bank-detail changes.

## 4. Verdict

**Option 0b is a no-regret move:** buy the list-matching service in every scenario. **Option 1 is a bet on two numbers**, so it is a pilot, not a purchase: if the pilot shows a check above three minutes or too many invoices needing the full check, the importer stops at Option 0b and keeps the service. Option 0c covers too little of the task to replace either, but its bank-detail reading is worth a second look.

**Sources:** [Azure Document Intelligence pricing](https://azure.microsoft.com/en-us/pricing/details/document-intelligence/) ("All Prebuilt Models … Invoice … $10 per 1,000 pages", read 16 Nov 2026); [invoice model schema](https://github.com/Azure-Samples/document-intelligence-code-samples/blob/main/schema/2024-11-30-ga/invoice.md) (fields incl. VendorName and PaymentDetails; no origin or HS code field, read 16 Nov 2026); [Microsoft Learn: invoice model](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/invoice) (27 languages). My figures: [numbers in the evidence index](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-12/evidence-index.md) and the [routing fix replay](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/log-v1.md).

---

*AI disclosure: I used Claude to find and read the vendor's price page and schema, structure the comparison and check the arithmetic; the options, the thresholds and the verdict are mine.*
