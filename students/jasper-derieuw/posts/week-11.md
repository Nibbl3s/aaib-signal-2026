---
week: 11
title: "I Took My Sanctions Framework Into a Car-Parts Factory. The Questions Survived. The Answers Didn't."
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cross-domain transfer"
date: 2026-11-16
verdict: "The questions are universal; which one decides is local"
stamp: "10/10 QUESTIONS TRANSFERRED · 2/10 ANSWERS"
kpis: "10/10 | questions that carried over to the factory ; 2/10 | answers that carried over fully ; 2,500× | cost gap between a missed defect and a false reject"
takeaways: "Price the mistake before the unit ; The vendor always leaves out the number that decides ; In my beat liability cannot be delegated, and the counterparty writes the input"
---

# I Took My Sanctions Framework Into a Car-Parts Factory. The Questions Survived. The Answers Didn't.

For ten weeks I built a way to judge AI on one problem: an Antwerp importer screening Chinese suppliers against the EU sanctions list. This week I carried it into a sector I know nothing about, to find out which parts of it were method and which were just my beat.

## The framework, in two places

The factory is the course's manufacturing case: 12,000 car parts a day, cameras instead of invoices, an air-gapped network and 400 milliseconds per part. I added real evidence: TI Fluid Systems in Liège, which inspects steel strip for brake and fuel pipes; AISIN Europe, whose inspection AI only filters images so that "the person … make[s] the final decision"; and Robovision in Ghent, which promises "100% of the products are automatically inspected at a speed and accuracy unmatched by human operators".

All ten questions carried over. Only two answers did.

**Universal.** Vendor claims (3): my screening vendor's terms leave out a notice period, and Robovision's "100%" is coverage, not accuracy. In both sectors the number that decides is the one missing. Design (8): in both, the machine flags, rules route and a person decides, with a manual fallback.

**Partly.** Value (4): the same method of netting out errors, but different weights. My importer saves €10,538–€28,520 a year if errors stay under 35.2%; the factory's €340,000 is gone at 0.28% false rejects, at €40 a part. Lock-in (7): my risk is a cloud model; theirs is a labelled dataset wired into the line. Regulation (10): the same AI Act tree, but a different deciding test. My tool is minimal risk because Annex III points 6 and 7 only cover public authorities. Factory inspection is "quality control", not a safety component, unless a miss "would endanger health and safety", the line the Digital Omnibus drew in July. A scratch is quality; a hole in a brake pipe is safety.

**Not at all.** Cost (1): I pay €0.002 per check in tokens; the factory pays capital, about €0.067 a part in year 1. Capability (2): my model fails with a fluent wrong sentence; a vision model fails silently on a rare defect. Market mechanism (5): AI assistants named none of the customs brokers I tested, but no carmaker picks a brake-pipe supplier by asking a chatbot; it audits them. Cost at scale (6): volume is my problem, variety is theirs. Attacks (9): my supplier writes the text my model reads; in the factory the weak points are the training labels and a dirty lens.

## What only my beat has

A generalist would miss three things.

First, **liability cannot be delegated**. The sanctions regulations forbid making funds available to a listed party, and customs law makes the declarant answer for every field. A customs specialist put it to me in one line: "'The AI suggested it' is not a defence." The fine range I sourced in Week 4 runs from €50,000 to €500,000.

Second, **the counterparty writes the input**. The supplier controls the invoice, the stamps and the spelling of its own name, sometimes in Chinese script. In a factory a part cannot lie about itself; in my beat every document can. In my own attack runs, a local model cleared a sanctioned bank because the invoice told it to.

Third, **the ground moves**. Documents conflict on origin when goods are transshipped, and a supplier can be clean today and listed tomorrow, so a check at invoice time is not enough. My revised design now sends conflicting origins to a person and screens again before payment.

## The insight

The framework is a set of questions, and they travel. What does not travel is which question decides. In my beat it is liability: who answers when the AI is wrong. In the factory it is the asymmetry between a €40 false reject and a recall worth €100,000 or more, 2,500 times as much. A consultant who walks into a factory asking my beat's deciding question will be polite, thorough and wrong. One principle did hold everywhere: price the mistake before you price the unit. Every case I have built this term was decided by the cost of being wrong, never by the cost of the AI.

## The question

My capstone rests on a two-minute human check that a practitioner thinks takes five to ten. Before Week 12 I want to measure it, not argue it: what does an honest check really cost?

---

*AI disclosure: the field work, the sector choice and the judgements on what transferred are mine; the companies, the vendor claim and the legal text are cited from their sources as read on 16 November 2026. I used Claude to search with me, structure the comparison and check the figures.*

Full workings: [sector lab](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-11/sector-lab.md) · [transfer brief](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-11/transfer-brief.md)
