---
week: 11
title: "Same Questions, Different Stakes: What a Hospital Taught Me About AI in M&A Valuation"
author: Tim Lampe
beat: AI in M&A Valuation
skill: Cross-domain transfer
date: 2026-11-20
---

A framework built in one industry can fail quietly in the next. The retail-to-hospital story in this week's brief is a composite, but the mechanism is real: the team kept the questions and assumed the risk weights travelled with them. In M&A valuation the temptation runs the other way, because our work is so numeric that we assume everything transfers.

**The framework application.** I tested the ten skills first in a sector I know nothing about, Belgian healthcare: the AI that rewrites medical reports in plain language at ZAS, AZ Maria Middelares and UZ Brussel, and Tandem's AI scribe, live inside the Nexuzhealth record system. Then I turned the same ten questions on my own beat, AI-assisted peer-group selection. The questions did not change. The answers did.

Cost literacy is universal: tokens times volume times price. In my Week 1 model a 40-peer run costs €5.15 in tokens and €400 in analyst review; in my Build, a six-candidate screen costs about €0.002 on Claude (an estimate), while a wrong verdict costs about €24 of analyst time (my assumption). In the hospital, 40,000 reports a year costs a few hundred euros of model time on my estimate, and validation costs far more. Capability skepticism: in valuation a wrong "comparable" label looks plausible and stays silent. On my 12 test inputs Claude got 71 of 72 verdicts right in one run, and every error from the cheaper Groq model was a "Not comparable" where my key says "Unclear": the peers that get dropped are the ones nobody sees. Vendor claims are aspirational everywhere: "global first" in healthcare, "AI-powered peer selection" in valuation, neither checkable without your own data.

Market mechanism differs most visibly. In valuation, data platforms decide which companies even appear as candidates; in Belgian hospitals the record system is the gatekeeper to clinicians, so vendors integrate with it. At scale, model price rises linearly in both; what breaks first is human review capacity. Lock-in sits in the comps database and templates in my beat, in the EHR integration in healthcare. Design defense means different things: an auditor wants to know why each peer is in or out, a hospital shows patients the original report next to the AI version. Attack surface is shared (injection through documents), but the asset differs: confidential deal data against patient data.

Regulation is where transfer breaks. My Week 10 reflex was Annex III first. In healthcare, software with a medical purpose goes through the MDR, which is Annex I, with AI Act duties from 2 August 2028, plus GDPR Article 9 and the new health data space rules. My own tool stays low-risk.

**Sector-specific risks.** A generalist would miss three things in valuation. First, silent judgement error: the peer group is the valuation, and a bad screen shifts the price without any visible failure. In a hospital a wrong output is noticed by a clinician or a patient; in valuation it is noticed, if at all, by the counterparty, so the error cost looks low while the deal value at stake is high. Second, confidentiality: target data and inside information must not reach an external model without contractual limits on retention and training. The hospital contrast is instructive, because the Belgian report tool is reportedly run inside the hospital rather than through an outside service. Third, professional liability: the signing valuer answers to auditors, courts and counterparties, so every AI-suggested peer needs a reproducible reason that a human owns. The model cannot carry that liability for me. None of these shows up on a pricing page or in a vendor demo.

**The insight.** What transferred was the question list, the habit of pricing the human check and the suspicion of vendor claims. What did not transfer was every weight: error cost, regulatory path, gatekeeper and what dominates the budget. In healthcare compliance and validation outweigh tokens; in valuation the analyst's time does. To advise in a new industry I would first learn who signs off, what a wrong answer costs, and which regulation attaches to the intended purpose, before touching a spreadsheet. The deepest lesson is humility: I could apply all ten skills to healthcare in thirty minutes and still not know the first thing an insider would correct.

**The question.** For the capstone, I want to test my weakest number, the cost of the human check, the way a hospital would: with a named person who signs off. What does that sign-off cost per peer group?

*Same AI, different sector. Apply the full evaluation framework to your beat's industry. What's different about AI in your sector? What risks are sector-specific? What's universal?*
