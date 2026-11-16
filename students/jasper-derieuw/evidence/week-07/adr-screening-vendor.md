---
week: 7
title: "Evidence - ADR: Buying the Sanctions List Matching, and on What Terms (6 ECTS)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Lock-in detection"
date: 2026-11-16
---

# ADR 001: Which screening service for the list matching, and on what terms

**Status:** proposed, for my capstone importer · 16 November 2026

## Context

My design for the importer buys the matching of supplier names against the EU sanctions list instead of building it ([Week 8 architecture](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/architecture.md)). The reference vendor is Verifex: Starter plan $49 a month for 2,500 screenings (Week 6). Its terms (updated 7 Oct 2026) state no notice period for subscription price changes, only "reasonable notice" for rate-limit changes (§8); allow termination "with or without notice" (§15); and describe no export process (§9). That affects two lock-in dimensions: pricing control and data portability (Week 7 scorecard).

## The question I asked

| | |
|---|---|
| To | Verifex, through the contact form on verifex.dev |
| When | Wednesday 14 October 2026, 19:41 |
| Question (verbatim) | "If you change the price of the Starter plan, how much notice do existing customers get, and is that notice period written in your terms or contract?" |
| What came back | **No reply as of 16 November 2026 (33 days).** One message, no reminder sent. |

## Decision

Use a bought screening service for the list matching, but **do not sign with a vendor that will not put three things in writing**: a notice period for price changes, an export of the screening history in CSV or JSON, and a notice period for termination. Keep the matching behind one function in the script so the vendor can be swapped, and keep the free EU list plus a manual check as the fallback.

## Alternatives considered

| Option | Why not (yet) |
|---|---|
| A. Verifex Starter as published | Cheapest, but no written notice period, termination without notice, and no answer to a direct question |
| B. Build our own matching on the free EU list | No vendor, but the importer has no developers, and matching Chinese names across scripts is the hard part (Weeks 2 and 8) |
| C. A larger screening vendor under a contract | Terms can be negotiated; price not known, quotes not yet requested |
| D. No AI and no vendor: manual screening | Today's process, €81,000 a year (Week 4); remains the fallback |

## Consequences

- **The vendor's actual answer is silence.** A vendor that does not commit in an email is unlikely to commit in a contract, so Verifex cannot be the choice unless it answers in writing.
- **Pricing control stays at 2** in my lock-in scorecard until a vendor commits to a notice period.
- **If the vendor stops overnight**, every invoice goes to the full manual check: 1,500 × 6 min × €0.75 = €6,750 a month, today's cost. Screening slows down but does not stop.
- **Switching vendor** touches one function in the script, then a re-test on my 35 test inputs (est. 1–2 developer days).
- **Next step:** request the terms of two other vendors before the pilot, with the three conditions above as a checklist.

---

*AI disclosure: I used Claude to read the vendor's terms and to structure this record; the question, the decision and the conditions are mine, and the silence is recorded as it happened.*
