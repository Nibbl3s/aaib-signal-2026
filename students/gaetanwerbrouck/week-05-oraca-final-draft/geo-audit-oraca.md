# GEO audit: Oraca

**Beat:** AI-assisted football scouting and identifying undervalued players  
**Company:** Oraca — https://oraca.ai/  
**Audit date:** 21 October 2026  
**Status:** Updated with student-supplied Google Rich Results Test and Google search evidence. Some technical details (including the exact non-critical schema issues, robots.txt, sitemap.xml, and canonical tags) remain unverified.

## Six-criterion scorecard

Course bands: **0–6 AI-Invisible; 7–11 AI-Marginal; 12–15 AI-Present; 16–18 AI-Optimized.** Each criterion is scored out of 3. Scores for criteria 1, 3, and 6 are provisional because the technical or systematic checks were not completed.

| Criterion | Score / 3 | Quoted evidence and interpretation |
|---|---:|---|
| 1. Structured data and schema markup | **2/3 — provisional** | The page source excerpt included `type="application/ld+json"`, `@context":"https://schema.org"` and an `Organization` item. Google’s Rich Results Test on 21 October 2026 reported **“Eén geldig item gedetecteerd”** (“one valid item detected”) and listed **“Software-apps”**. It reported “Page fetch: Successful,” “Crawl allowed: Yes,” and “Indexing allowed: Yes,” while also noting non-critical issues. This supports the presence of recognized structured data on the tested page. I score this 2/3 rather than 3/3 because the evidence confirms at least one valid structured-data item, but does not establish the full rich set described in the rubric (for example, verified Organization, Product/Service, FAQ, Review, and pricing markup). The summary does not establish that the Organization and Software apps items are the same item, or that all site pages are error-free. |
| 2. Content parseability | **3/3** | Homepage labels the product “AI player discovery for recruitment teams,” organizes its workflow as “Surface,” “Scout,” and “Reach,” and includes “Questions, answered.” These visible headings and FAQ-style answers make the page’s topic and intended users easy to identify. |
| 3. Third-party mention density | **0/3 — based on reported Google check** | In the Google-focused search for **“Oraca football scouting”**, the student reviewed the first two result pages on 21 October 2026 and reported **0 qualifying independent results**. This is evidence of low third-party visibility for that query and scope; it does not prove there are no independent mentions anywhere online. |
| 4. AI citation/recommendation presence | **1/3** | In the two tested responses, “SciSports appeared in both responses” and “Oraca appeared in neither response” (comparison of the saved answers). This supports a low score for this small test only; it does not establish what other models or prompts would do. |
| 5. Authority and expertise signals | **2/3** | The methodology page says signals are “validated out-of-sample” and states, “We surface a confidence level when the data is thin.” The research page describes a pre-registered forward test, with first public scoring planned for 30 June 2027. These are useful transparency signals, but are mostly company-published and the forward test is not yet scored. |
| 6. Direct brand-search strength | **2/3 — preliminary** | For the exact query **“oraca”**, the supplied Google results showed an AI Overview describing Oraca as **“An AI-powered player discovery and scouting tool”** that analyzes data across **“60+ leagues”**, and organic results included **“Oraca: AI football scouting for recruitment teams”** at `oraca.ai`. The same overview said the term referred to multiple entities, including unrelated businesses/topics. No dedicated knowledge panel was visible in the supplied results. This indicates some discoverability but meaningful name ambiguity; the pasted evidence does not conclusively establish the official site’s exact organic rank. |
| **Total** | **10/18 — updated estimate** | **AI-Marginal** under the course bands (7–11). Criterion 1 assumes the rubric gives full marks for one valid detected structured-data item; confirm against the exact rubric. Criteria 3 and 6 are limited to the supplied search evidence. |

## What the website does well
- Clearly names the product category and target users.
- Explains a workflow in three readable steps: Surface, Scout, and Reach.
- Provides a methodology page that discusses out-of-sample validation, leakage prevention, uncertainty, and limitations.
- Publishes a separate research page describing a paper, a predictions ledger, and a pre-registered forward evaluation.

## Risks and caveats
The homepage reports 327 players flagged in a blind 2018–2023 backtest, a 4.8× average return, and 12% of picks returning 10× or more. These are vendor-reported results, not independently verified by this audit. The research page says first public scoring of its frozen forward predictions is planned for 30 June 2027. The product is described as private beta, limiting what can be independently assessed about adoption and the user experience.

## Four-factor vulnerability assessment

| Factor | Rating | Rationale |
|---|---|---|
| Visit dependency | **Medium** | Search discovery may affect awareness and early-access enquiries, but no traffic-source or conversion data is public in the evidence reviewed. |
| AI substitutability | **Low** | AI can summarize public marketing pages, but it cannot substitute for access to Oraca’s private product, proprietary data, model outputs, or recruitment workflow. This is an assessment, not a measured business metric. |
| Intermediary position | **Low** | Oraca presents itself as a direct software provider to recruitment teams rather than a publisher dependent on referral traffic. Its actual sales and distribution mix is not public. |
| SEO asset weight | **Medium** | Public methodology and research content can support discovery and trust, but the share of acquisition attributable to organic search is unknown. |
| **Overall assessment** | **Moderate vulnerability; low confidence** | Public evidence is insufficient to quantify commercial exposure. |

### 60% traffic-drop scenario
If organic search visits fell by 60%, Oraca could receive fewer first-time visitors and early-access enquiries if search is a meaningful acquisition channel. The actual impact would depend on search’s share of traffic, conversion rates, and leads from direct outreach, referrals, partnerships, and the football network. A 60% traffic decline must not be presented as a 60% revenue decline; no public data here supports a numerical revenue estimate.

## Sources
- Oraca homepage: https://oraca.ai/
- Oraca methodology: https://oraca.ai/methodology
- Oraca research: https://oraca.ai/research
- SciSports scouting: https://www.scisports.com/scouting/
- SciSports player valuation model: https://www.scisports.com/finding-value-with-scisports-player-valuation-model/
- SciSports club solutions: https://www.scisports.com/clubs/
- SciSports / RBFA announcement: https://www.scisports.com/scisports-and-rbfa-partner-to-elevate-performance-scouting/

## Remaining checks before submission
- Open the detailed Software apps result in the Rich Results Test and record the exact item type, fields, and messages for the non-critical issues if required by the rubric.
- The Google-focused query “Oraca football scouting” yielded 0 qualifying independent results in the first two pages according to the student's check. Save screenshots or the URLs/search notes if the assignment requires an evidence trail.
- The exact-name Google search showed the AI Overview and `oraca.ai` organic result, but no dedicated knowledge panel was visible in the supplied capture; exact organic rank was not conclusively established.
- The Rich Results Test does not verify `robots.txt`, `sitemap.xml`, canonical tags, or every page on the site.
- Cite the captured test and search evidence in the submitted audit or attach screenshots if the instructor expects proof of each observation.
