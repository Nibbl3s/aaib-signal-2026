---
week: 10
title: "When the Comps Tool Meets the Law: Classifying AI Peer-Group Selection"
author: Tim Lampe
beat: AI in M&A Valuation
skill: Regulatory reasoning
date: 2026-11-20
---

In M&A valuation the peer group decides the answer. Valutico's own guidance says the choice of comparables has a huge impact on the result, so vendors now sell AI-powered peer selection. The legal question sounds academic until a client asks who is accountable for the screen.

**The use case.** An advisory firm lets an AI system propose comparables: the analyst enters a target's description and key metrics, the system returns candidates labelled comparable, not comparable or unclear, with reasons. Valutico advertises this across 50,000+ listed companies; my Build does the same in small. A human analyst reviews the output.

**The classification.** The AI Act regulates uses, not technology, so I walked the decision tree. Step 1, prohibited? No: nothing scores people on social behaviour, reads emotions or categorises biometrics. Step 2, Annex III? I checked all eight areas. The closest candidates are employment (point 4) and creditworthiness (point 5b), but both concern natural persons, and this tool judges companies. Step 3, safety component of a regulated product (Annex I)? No. Step 4, does it interact with people or generate content? Yes: an analyst chats with it and it writes text, so Article 50 transparency applies, and so does the AI literacy duty of Article 4, softened on 27 July 2026 to "take measures to support". Result: low-risk, with transparency duties. Why not higher? Because no step in the tree is triggered by the use, whatever the technology underneath. But the reasoning matters more than the tier, because it holds only for this use. Point the same engine at a target's management team or a founder's creditworthiness and Annex III is back on the table. Under Article 25, changing the intended purpose can even turn a deployer into a provider. Walking all four steps takes an hour, and almost nobody documents it.

**The GDPR overlap.** My test inputs are company-level data only: no personal data, so no lawful basis is needed for the Build. In real deals, annual reports name executives and shareholders. Then legitimate interest (Article 6(1)(f)) with a short written assessment, a processor contract with the model provider and no-training settings are the minimum. Article 22 is not in play, as no automated decision is taken about a natural person. Data subject rights (access, rectification, erasure) become hard only if personal data ends up in training, which is a good reason to keep it out from day one, which costs nothing.

**Timeline and cost.** Enforceable now: the prohibitions (since February 2025, up to €35M or 7%), Article 4, and Article 50 since 2 August 2026 (up to €15M or 3%). The Annex III date, 2 December 2027, matters only if the use changes. No AI Act fine had been published in the sources I found (late September 2026), but the GDPR is biting: the Dutch authority fined Uber about €825M in August for automated decisions. My own estimate for a mid-size advisory firm: €11,000 to €33,000 in year one, then €2,000 to €5,000 a year. If the use were high-risk, the course benchmark is €95,000 to €240,000.

**The insight.** Minimal risk is a result of checking, not a default. The expensive moment is the day someone adds "and also screen the management team". Classify the use, not the tool, and re-run the tree whenever the use changes. For valuation teams, that means a written classification memo before the first client deliverable.

*AI disclosure: I drafted this post with Claude Sonnet 5.5 and checked the figures and claims against my own Build log, my Week 1 model and the sources named above. The final wording and the conclusions are mine.*
