---
week: 12
title: "Evidence - Discovery Mini-Audit: How AI Assistants Find (or Miss) a Belgian Importer"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Synthesis"
date: 2026-11-16
---

# Discovery Mini-Audit: How AI Assistants Find a Belgian Importer

**Why:** my capstone memo has to say how customers will find my importer when AI assistants are the gatekeepers. My Week 5 audit covered a customs broker, not an importer. This audit asks the importer's own market.

**Method (16 November 2026):** three questions, three assistants, two runs each in a fresh chat: 18 answers. ChatGPT (free, "Think", logged in), Claude (Pro, Opus 5.5, logged in), Gemini (free, automatic model). Times were not recorded. Expectations were written down before the first answer. Every company name that looked doubtful was checked on the web on the same day.

| | Question (verbatim) |
|---|---|
| Q1 | Which companies in Belgium import electronic components from China and sell them to business customers? Name specific companies. |
| Q2 | I want to buy electronic components from a Belgian importer that sources from China. Which importers can show that their Chinese suppliers are screened against EU sanctions? Name specific companies. |
| Q3 | How can I check whether a Belgian electronics distributor is reliable and compliant before I order from them? Be specific about what to look for. |

## 1. What came back

| | ChatGPT | Claude | Gemini |
|---|---|---|---|
| **Q1: names per answer** | 20 and 17 | 6 and 12 | 6 and 11 |
| **Q1: kept on the second run** | 10 of 20 | 4 of 6 (same top 2) | 2 of 6 |
| **Q2: who is named as screening suppliers** | **ELCOS** first, 2 of 2 | Nobody (run 1: "Any names I offered would be guesses"); Avnet with caveats (run 2) | 5 distributors (run 1); **ELCOS** among 7 (run 2) |
| **Q3: what a buyer should check** | Company register, VAT, annual accounts, CE/RoHS, WEEE (Recupel), reviews, bank account in the company's name | The same, plus counterfeit standards and, once, export controls | The same, plus Peppol e-invoicing and packaging and copying levies |
| **Sources shown** | Yes (mostly europages) | Yes (directories, trade data, company pages) | **None in 6 answers** |

**Across all 18 answers:**
- **One company in 6 of 6 Q1 answers: Alcom Electronics.** Next: Velleman 5 of 6, Avnet 4 of 6, Halfin 3 of 6. Every directory profile I found describes Alcom the same way: "importer and distributor of electronic components" in Kontich.
- **One company named for its sanctions documents: ELCOS** (3 of 6 Q2 answers). Each time the assistant cited its published purchasing conditions (a sanctions and export-control article) and its compliance statement of 26 April 2023. The PDF exists, signed by ELCOS BV on that date.
- **AEO status** (the EU's certificate for reliable customs operators) appears in **2 of 18** answers, both Gemini Q2, and **0 of 6** buyer checklists (Q3). Gemini also overstated it, claiming AEO status "legally require[s]" sanctions screening.
- **Sanctions screening appears in 0 of 6 buyer checklists.** In Q3, "compliance" means product compliance (CE, RoHS, WEEE), never sanctions.

**Checked on the web (16 Nov):** ELCOS, Horizon Components, We Innovae, A&C Solutions (with its Higo connector line), Nijkerk Electronics, Heynen and Master Chips all exist. Errors, all from Gemini: one company I could not find anywhere ("Primelec / Prime Electronic Components, Genk"), two wrong locations (Nijkerk in Antwerp, not Brussels; Heynen in Houthalen-Helchteren, not Hasselt), and the overstated AEO claim. The EU listing of a Chinese chipmaker that two assistants mentioned (Yangzhou Yangjie, 23 April 2026, Implementing Regulation (EU) 2026/509) is real.

**My expectations against the result:** Q1 "mostly large distributors": wrong; Belgian independents came first. Q2 "names no importer, or invents some": mostly wrong; 5 of 6 answers named real companies, and one was named for a real document. Q3 "AEO missing": right, 0 of 6.

## 2. What it means: the mechanism

In search, a page ranks and the buyer clicks. Here the assistant assembles a shortlist itself, and the shortlist changes from chat to chat: half of ChatGPT's names were different on the second run. What survives is **what the assistant can cite**. The one company that appears in every Q1 answer is the one described identically in every directory, and the one named in a sanctions question is the one that published its sanctions terms as a document. On the compliance question the field is almost empty: in 18 answers, one Belgian distributor was named for evidence it had published.

## 3. Tactics for the importer

| # | Tactic | Evidence behind it | Cost (est.) |
|---|---|---|---|
| 1 | **Publish the compliance proof as documents**: a dated sanctions and export-control statement (PDF) and a sanctions clause in the purchasing conditions, on the company's own site | ELCOS: named in 3 of 6 Q2 answers, each time for these two documents | 1–2 days of the compliance analyst; the content exists once the pilot's governance is written |
| 2 | **One consistent description everywhere**: "importer and distributor of electronic components, sourcing from China, [city]" on the website and in europages, Kompass and Belgian directories | Alcom: 6 of 6 Q1 answers with an identical directory description; ChatGPT's sources were mostly europages | Half a day, then a yearly check |
| 3 | **Make the China sourcing verifiable**: say where and how the company sources | Velleman: 5 of 6 Q1 answers, always with its "sourcing offices in China and Hong Kong"; Claude confirmed Avnet's China shipments from trade data | Included in tactic 2 |
| 4 | **Show the buyer's checklist on the site**: enterprise and VAT number, Recupel and Bebat member numbers, Peppol ID, declarations of conformity on request | The registers and memberships recommended in 6 of 6 Q3 answers | Half a day |
| 5 | **State AEO status with its number**, if the importer holds it, and describe it accurately: a customs-reliability certificate, not proof of sanctions screening | AEO absent from all 6 buyer checklists: an unused, verifiable signal | €0 if held |
| 6 | **Re-run the same 3 questions every quarter** in three assistants and log whether the importer is named and which document is cited | Answers change between runs and between assistants | About 20 minutes a quarter |

**And on the buying side:** never shortlist a screening vendor or a supplier from an AI answer alone. In this audit one company could not be found, two locations were wrong and one legal claim was overstated (all Gemini, which showed no sources), and the lists changed between runs.

**Limits:** 18 answers on one day, two of the three assistants logged in (ChatGPT read Q1 as a seller looking for prospects), and the importer in my scenario is a composite, so this measures the market it would have to stand out in, not the importer itself.

---

*AI disclosure: I ran the 18 chats myself and pasted the full answers; Claude extracted the names, checked the doubtful companies on the web and drafted this analysis. The raw answers are in my private records; the tactics and their selection are mine.*
