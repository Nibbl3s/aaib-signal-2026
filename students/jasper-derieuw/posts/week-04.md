---
week: 4
title: "My Sanctions Screening Tool Saves €30,000 a Year. It Also Loses €358,000."
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Value quantification"
date: 2026-10-14
verdict: "Build it rule-first, not AI-first"
stamp: "PILOT · HUMAN FALLBACK"
kpis: "€30k | time saved a year at the measured rate ; −€358k | net once missed matches are priced ; ≤4.5% | false clears it would need (measured 12.5%)"
takeaways: "Accuracy is not value: the failure type decides the case ; Let rules decide and AI only add warnings ; Send risky invoice types to a human"
---

# My Sanctions Screening Tool Saves €30,000 a Year. It Also Loses €358,000.

**Hook**

Last week a vendor would not tell me what its automation figure rests on. This week I held my own tool to the same standard: show me the numbers. My sanctions screening prompt saves a Belgian importer about €30,000 a year in analyst time. Price in the sanctioned suppliers it lets through, and it loses €358,000.

**The Candidate**

The value chain of a mid-sized Belgian importer buying from China has ten steps, from sourcing to payment. Three pass the five-criterion filter: supplier due diligence, invoice extraction for customs, and sanctions screening on every shipment. I picked screening because it is the most repetitive (about 1,500 checks a month, est.), the most expensive by hand (about €81,000 a year at 6 minutes per check (est.) and a €45 loaded hourly rate), and the one where my own Build gives me measured data instead of a vendor's claim. The AI reads the invoice, extracts four fields and flags the supplier. The human decides.

**The Numbers**

My Build got 17 of 24 runs right (70.8%). Used as a pre-screen with a 2-minute human check (est.) instead of a 6-minute manual one:

| Line | Formula | €/yr |
|---|---|---:|
| Time saved | 18,000 checks × 4 min × €45/60 | 54,000 |
| Redo of wrong outputs | 29.2% × 18,000 × 6 min × €45/60 | −23,652 |
| Tokens + maintenance | €166 + €6,000 | −6,166 |
| Extra missed matches | 1.53 a year × €250,000 (est.) | −382,500 |
| **Net** | | **−358,318** |

The last line decides everything. On genuine sanctioned names my tool cleared one run in eight: the bank written in Chinese characters. If the human checker catches half of those (est.), the tool adds about 1.5 missed matches a year to the 0.7 a careful analyst already misses.

Is €250,000 per miss fair? I replaced my guess with real cases. In an Antwerp sanctions case two companies paid €50,000 effective fines and a customs broker was fined €500,000, and EU law now allows up to €40 million. Even at €50,000 the tool loses €52,318 a year. At €250,000 it would need at most 4.5% false clears to break even; I measured 12.5%.

So I redesigned it. Rules decide "clear", the AI may only add warnings, never remove one, and risky invoice types (Chinese-script names, name variants, unreadable documents, unclear origin; about 30%, est.) go straight to a human. The routing itself is a rule, not AI: non-Latin characters, missing fields or more than one port send an invoice to a person.

| Line | €/yr |
|---|---:|
| Time saved on clean invoices (12,600 × 4 min × €45/60) | 37,800 |
| Redo of AI errors on clean invoices (21% measured) | −11,907 |
| Tokens + maintenance | −6,116 |
| **Net, year 2+** | **19,777** |
| One-time build and integration | 23,000 |
| **Payback** | **14 months** |

Risk reduction is zero, by design: the risky invoices are handled exactly as today. That is the point. The case no longer depends on any fine.

**The Pressure Test**

Make every estimate 50% worse: halve the time saved and add 50% to every cost. The cautious version then loses €8,135 a year. The bolder version, where the AI pre-screens everything but can only add flags, still makes €21,350, but only if its flags on Chinese-script names work, and I measured that on exactly two runs. So the forecast cannot carry the decision. The pilot's stop conditions do: at least 60% clean invoices, a clean check in 3 minutes or less, zero missed matches, and the AI running in shadow mode on the risky invoices to test its flags without risk.

**The Insight**

Accuracy is not value. 70.8% sounds like a working tool, but the business case is decided by the type of failure: a wrong currency costs a few minutes, a cleared sanctioned bank costs a fine. The question for any AI pitch in compliance is not "how accurate is it?" but "who is allowed to say clear, and what does one wrong clear cost?" My answer, with my own numbers: a rule says clear, a human checks, and the AI only gets to raise its hand. In Week 1 I thought the token price was the cost question. It is €166 a year. The real cost was always the one no pricing page shows.

---

*AI disclosure: I used Claude to check the arithmetic, find the enforcement cases and structure this post. The Build runs, the pattern idea from the class clinic and the recommendation are mine.*

Full workings: [business case](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-04/business-case-draft.md) · [investment memo](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-04/investment-memo.md) · [value chain and candidates](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-04/value-chain.md)
