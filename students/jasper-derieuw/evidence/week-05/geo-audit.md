---
week: 5
title: "Evidence - GEO Audit: Can AI Find Gaston Schul?"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Market mechanism thinking"
date: 2026-10-14
---

# GEO Audit: Can AI Find Gaston Schul?

**The company:** [Gaston Schul](https://www.gaston-schul.com/en), an independent customs broker and trade-compliance partner, "founded in 1845", with "350+ customs specialists" and Belgian offices in Antwerp (Noorderlaan 147) and Hoogstraten-Meer. It offers sanctions and denied-party screening as a managed service: exactly what a Belgian SME importing from China needs if it has no compliance staff.

**Why this company:** in my live query below, not one of six AI answers named a customs broker, even though the broker already files the importer's customs declarations. Gaston Schul is the company that should have appeared and didn't.

## 1. The live query (14 October 2026)

**Query, verbatim:** "Which companies can help a Belgian SME that imports electronics from China screen its Chinese suppliers against EU sanctions lists? Please recommend specific providers." Run twice per assistant (13:41 and 13:44), each in a new chat.

| Assistant | Companies named (run 1 → run 2) | Same on run 2? |
|---|---|---|
| Claude | AEB, Descartes, Thomson Reuters, Creditsafe, dilisense, OpenSanctions, Sanction Scanner, Datenna, Sayari, Kharon → EU Sanctions Helpdesk, AEB, OpenSanctions, sanctions.io, Descartes, ComplyAdvantage, LSEG, Sayari, Kharon | Partly (5 of 10 kept) |
| Gemini | AEB, Descartes, MIC, Sayari, LexisNexis, Moody's, Acquis, "Pitch Law", Big Four → dilisense, RegLab, NameScan, Moody's, LexisNexis, ComplyAdvantage, Credendo, FIT/AWEX/hub.brussels | No (2 kept) |
| ChatGPT | Altares D&B, LSEG, Dow Jones, LexisNexis, ComplyAdvantage → Altares D&B, Sayari, LSEG, Dow Jones, ComplyAdvantage | Mostly (4 of 5, same first pick) |

- **No company appears in all six answers.** Sayari comes closest (4 of 6).
- **Customs brokers: 0 of 6.** The free EU Sanctions Helpdesk, built for SMEs: 1 of 6.
- **Hallucination risk:** Gemini recommended "Pitch Law" as a Belgian sanctions law firm; I could not find it, and it disappeared on run 2. Gemini also attributed World-Check to LexisNexis (it belongs to LSEG) and presented RegLab, a Dutch anti-money-laundering tool for law firms, as a "Benelux sanctions screening" provider.
- **Would an insider name the same companies?** Partly. Screening software and data vendors, yes. But an insider would start with the importer's own customs broker or the free EU Helpdesk, not with enterprise ownership-intelligence tools.

## 2. Six-criterion GEO audit (each 0–3; checked 14 October 2026)

| # | Criterion | Score | Evidence |
|---|---|:-:|---|
| 1 | Structured data and schema | 2 | Page source: the homepage has JSON-LD `Organization` and `WebPage`; the [trade-compliance page](https://www.gaston-schul.com/en/services/customs-advisory/trade-compliance) has an `FAQPage` with 8 questions. There is also an [llms.txt](https://www.gaston-schul.com/llms.txt) written for AI systems. No Service, Review or pricing markup. |
| 2 | Content parseability | 2 | The page answers the buyer's question directly: "Can you run our sanctions and export-control screening for us?" and "Rather than buying screening software and operating it yourself, we screen your counterparties and transactions". The llms.txt states: "It is a customs broker and trade compliance partner, not a freight forwarder or shipping line." But there are no comparison tables, and headings are marketing lines ("Compliance is cheaper than …"). |
| 3 | Third-party mentions | 1 | Outside its own site I found a customs-services directory listing (Railmarket) and a trade-show exhibitor page (Multimodal UK). The CEO's Lodewijk van der Grinten award is reported on Gaston Schul's own site; my search found no independent news coverage. |
| 4 | AI citation presence | 1 | The SME's own question: named in 0 of 6 answers. In three category questions in ChatGPT (13:47–13:49) it was named first in two ("Which customs brokers in Antwerp offer sanctions and denied-party screening…", "Who can take over our trade compliance screening…") and absent from the third ("Recommend a customs and trade compliance partner in Belgium for an SME…"). It surfaces only when the buyer already knows to ask for a customs broker. |
| 5 | Authority and expertise | 2 | "Founded in 1845", "350+ customs specialists", "AEO-authorised across its markets"; a downloadable "Sanctions and Export Controls guide" and dated articles (EORI/VAT court case, CBAM). No named-author credentials or client case studies on the compliance page. |
| 6 | Brand direct-search strength | 1 | Its own site is the result for the brand; no Wikipedia page (English and Dutch Wikipedia: 0 results); beyond its own site, mostly directory listings. I did not check for a Google knowledge panel. |
| | **Total** | **9 / 18** | **AI-Marginal** (7–11: significant gaps) |

**Assessment.** Gaston Schul is AI-Marginal: its own pages are better prepared for AI than most (FAQ markup, an llms.txt, a page that literally answers "can you run our screening for us?"), but almost nobody else writes about it. Would an AI recommend it to a Belgian SME asking for sanctions screening? Not today: the assistants answered with software and data vendors, because that is who the rest of the web associates with "sanctions screening". The single most important improvement is to be named on independent pages that answer the SME's question in the SME's words (EU and regional trade-support guides, trade press, a client case study), not more pages on its own site.

## 3. Four-factor vulnerability assessment

| Factor | Level | Why |
|---|---|---|
| Visit dependency | Medium | Revenue comes from clearance and advisory contracts, not from visits; the website generates leads (guide download, "Customs Health Check"). |
| AI substitutability | Low | Filing declarations as an AEO-authorised broker and running a client's screening is regulated work an AI answer cannot replace; only its explainer articles can be summarised away. |
| Intermediary position | Partial | It sits between the importer and customs, but delivers the service itself rather than listing others. |
| SEO asset weight | Supporting | Articles and the llms.txt support lead generation; the core business runs on client relationships and partnerships with forwarders. |

**Risk matrix:** medium visit dependency and low substitutability: **low to moderate risk**.

**If traffic dropped 60% in 12 months:** existing clearance revenue would barely move, because clients and forwarder partners do not arrive through search. What would shrink is new SME business, and that is exactly the segment the AI answers already send elsewhere. To change that, Gaston Schul would need a page aimed at that buyer (sanctions screening for Belgian importers, with a price range and plain-language Q&A) and, above all, mentions on the independent sites AI assistants actually cite.

## 4. A second finding: the more generic the question, the more the AI invents

In the third category question, the one that sounds most like a real SME, ChatGPT named only two firms: "KTL Customs BV" and "Douaneagentschap FG Customs BV". I could not find either, and "BV" is a Dutch company form, not a Belgian one. In the second question it also named "Export Control Group International", which I could not find either; CATTS (Dutch) and AWB Consulting (German) do exist, but neither is Belgian. An SME acting on these answers could contact a firm that does not exist.

---

*AI disclosure: the live query and the three category questions were run by me in Claude, Gemini and ChatGPT. I used Claude to check the page source, search for third-party mentions and verify the companies named, and to structure this audit. The scores are mine.*
