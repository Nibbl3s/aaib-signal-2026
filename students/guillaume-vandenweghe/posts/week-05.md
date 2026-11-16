---
week: 5
title: "Can an AI Find a 115-Year-Old Insurer? A GEO Audit of Federale Verzekering"
author: "Guillaume Vandenweghe"
beat: "What AI really costs in the insurance sector, with a focus on claims handling and customer service"
skill: "Market mechanism thinking"
date: 2026-10-23
---

In my beat, customers compare insurers on one thing they cannot see before they buy: how the claim will be handled. If they now ask an AI which insurer handles claims well, the insurers it leaves out never even make the shortlist.

## The company

Federale Verzekering (federale.be) is a Brussels mutual insurer founded in 1911 by 13 building contractors. It has €625.9 million in premiums and 715 FTE (2025, its own "Over ons" page). It sells directly, through its own offices and advisers, without brokers. I chose it because a direct insurer has no broker to recommend it. If the AI does not name it, nobody does.

## The audit

I asked four consumer questions and two entrepreneur questions (Claude with web search, a fresh session each time, 23 October 2026).

| Criterion | Score | Evidence |
|---|:-:|---|
| 1. Structured data | 0 | No `application/ld+json` or schema.org on six pages I checked, and the meta description is empty on every one |
| 2. Content parseability | 2 | The car page has clear H2s and a BA / mini-omnium / omnium comparison table, and the claims guide is in "4 stappen". But the homepage H1 is a savings slogan, "ZIE HET GROOT, OOK VOOR JE SPAARGELD", and there is no FAQ page (/nl/faq gives a 404) |
| 3. Third-party mentions | 2 | Dutch Wikipedia, bouwinfo.be, UNIZO (a paid "publireportage"), Bouwunie. Test-Aankoop's complaints page says "Geen score beschikbaar". It is missing from the HelloSafe comparison page that the AI quoted |
| 4. AI citation presence | 1 | 0 of 4 consumer answers named it. In the 2 entrepreneur answers it came first and second, but one assistant said it was "not certifying their claims service" |
| 5. Authority signals | 1 | It names its CEO and publishes 2025 figures and a solvency report. But the articles are signed "Fédérale Assurance" and there is no data on claims speed |
| 6. Brand direct-search | 2 | It has a Dutch Wikipedia page with an infobox, but no French or English one. A search for its name shows a PDF from its own site first and a Wikipedia page about the "Federal Public Service" |
| **Total** | **8/18** | **AI-Marginal** |

## The verdict

If a private customer in Ghent asks for "an insurer that handles claims quickly", Federale does not appear. Both runs of my main question named the same market leaders (AG, AXA, Ethias, KBC and others). The assistant took that list straight from HelloSafe, a comparison site where Federale does not appear. Neither run named one best insurer, because Test-Aankoop's claims-satisfaction scores are behind a paywall. Federale does appear when an entrepreneur asks, but mostly because of what the model already knew from training, not from anything on its own site. Its biggest gaps: no structured data, no independent text about its claims service, and no French or English presence.

## The insight

The gatekeeper in my beat is not the AI alone. The AI copies its list from comparison sites and cannot see the one source that measures claims service. Insurers that sell through brokers have a human recommending them. Direct insurers depend on being written about. So the cheapest move for Federale is not technical: publish its own claims figures (time to payment, satisfaction) on a page with structured data, so an AI has something to cite.

## The question

If an insurer published its real claims-handling times, would AI assistants start recommending on service instead of brand size, and would the big insurers follow?

*AI note: I used Claude with web search to run the six queries and Claude to help structure this post. The audit checks, scores and conclusions are mine.*
