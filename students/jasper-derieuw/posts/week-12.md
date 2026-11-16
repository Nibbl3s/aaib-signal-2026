---
week: 12
title: "Should an Antwerp Importer Let AI Screen Its Chinese Suppliers? Pilot It. Don't Buy It Yet."
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Synthesis"
date: 2026-11-16
verdict: "Pilot, don't buy: the human check decides"
stamp: "3-MONTH PILOT · STOP AT 3 MIN OR 1 MISS"
kpis: "77.8% | right on invoices the AI had never seen (28/36) ; €0.002 | tokens per check ; 47% → 80% | planted AI errors caught, quick vs deliberate check"
takeaways: "Buy the no-regret step first ; Rules and a person decide, not the model ; Measure the human check before you argue about it"
---

# Should an Antwerp Importer Let AI Screen Its Chinese Suppliers? Pilot It. Don't Buy It Yet.

Should a mid-sized importer let AI check its Chinese suppliers against the EU sanctions list? After 12 weeks of building, attacking and testing an AI screening tool, and asking practitioners to break it, my answer for a 150-person Antwerp electronics importer is: not on its own, and not without a stopwatch.

## The recommendation

Buy a screening service now: automatic list matching for about €1,082 a year, a no-regret step. Then run a three-month AI pilot on one product family, €28,007–€28,607 one-off. The AI only pre-fills the invoice fields and adds warnings; fixed rules route each invoice; a person decides every one. The key risk is a human check that turns into a rubber stamp, so the pilot stops at three minutes a check or at one missed sanctioned match.

## The value case

Two analysts check 18,000 invoices a year by hand: 18,000 × 6 minutes at €45 an hour is €81,000. My build reads supplier, origin, HS code, value and bank details from an invoice. On invoices it had never seen it was right in 28 of 36 runs (77.8%), at €0.002 a check. Tokens cost under €40 a year, and €3,600 at 100 times the volume. What improves is analyst time: if a clean invoice needs a two-minute confirmation instead of a six-minute check, the importer saves €7,298–€25,280 a year from year two, with payback in 13 to 47 months. Year one costs more than today. Of the options I costed, including no AI at all and a non-generative invoice reader that has no origin field, this is the only one that covers all five fields. The saving breaks in two precise places: an assisted check above 2.8–4.7 minutes, or more than 43.5–76.8% of invoices needing the full check. This is a case about people's time, not AI prices.

## The risk reality

First, the supplier writes the input. A free local model cleared a sanctioned bank because the invoice told it to. So rules decide the route, not the model: replayed on 140 recorded answers, 0 of 20 attacks and 0 of 32 genuine matches reached the quick check. Second, liability stays human. "'The AI suggested it' is not a defence," a customs specialist told me; one Antwerp sanctions case ended in fines of €50,000 to €500,000 per company. In my paper test with 10 people, a quick confirmation caught 47% of the AI's planted errors; a deliberate one, where clearing meant removing the AI's red flag by hand, caught 80%, for 15.5 seconds more a card.

## The insight

The number that decided my case was never the AI's. Tokens, accuracy, even the AI Act class (minimal risk; the binding duties come from sanctions, customs and data protection law) mattered less than one human number: how long an honest check takes. I assumed two minutes; a practitioner said five to ten. I would measure it in week 2, not week 12. Every case I built this term was decided by the cost of being wrong. And to another consultant: test on inputs your prompt was not written for. Mine scored 24 of 24 on its own set and 77.8% on a stranger's; only the second belongs in a business case.

## What's next

For the importer: sign the screening service with three terms in writing (a price-notice period, a data export and a termination notice) and start the pilot with a stopwatch. For the sector: the AI Act's Annex III high-risk duties start on 2 December 2027, a date that has already moved once; the importers who document now will not have to rebuild later.

---

*AI disclosure: the recommendation, the tests, the practitioner conversations and the judgements are mine; every figure comes from my capstone memo draft and its evidence appendix. I used Claude to draft this summary from those files and check each number against them.*

Full workings: [capstone memo draft](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-12/capstone-memo-draft.md) · [evidence index](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-12/evidence-index.md) · [Build log](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/log-v1.md) · [the whole story as a visual case file: The Last Check](https://aaib-signal-2026.vercel.app/pages/jasper-derieuw-the-last-check.html)
