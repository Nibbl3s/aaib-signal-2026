# Week 5 evidence — Freightos

Author: Kiril Boyakov  
Beat: AI in European Freight Cost Estimation  
Research date: 25 October 2026  
Status: completed 4-ECTS submission evidence; limitations and the failed test attempt are disclosed below.

## Company and scope

Company: [Freightos](https://www.freightos.com/). Category: digital freight pricing, booking and market intelligence. This fits my beat because freight buyers and forwarders need to find rate-comparison and quotation tools. Freightos is global, so this is an audit of its relevance to European freight buyers, not a claim that it serves only Europe. The company was selected before discovery testing; it was not selected because an unbranded AI query recommended it.

The audit examines the homepage and forwarder service page, with supporting marketplace, industry and review sources. Research was performed with AI assistance using web search and direct browser inspection. Search results are not AI recommendation responses. Scores are judgements against the course framework, not validated predictions of visibility or product quality.

## 1. GEO audit

| Criterion | Score /3 | Evidence and justification |
|---|---:|---|
| Structured Data & Schema Markup | 1, conservative | Direct inspection of JSON-LD on the [homepage](https://www.freightos.com/) and [forwarder page](https://www.freightos.com/forwarders/) found `"@type":"Organization"`, `"@type":"FAQPage"`, WebPage, WebSite and BreadcrumbList. Neither inspected page contained a Product or Service type in those JSON-LD blocks. This exceeds basic Organization-only markup, but does not meet the course's stated level-2 combination of Organization plus Product/Service. I therefore retain 1 rather than award 2 solely for FAQs. This is a two-page check, not proof that other pages lack service schema; it is not a schema validation test. |
| Content Parseability | 2 | The [homepage](https://www.freightos.com/) has distinct audience headings and a section titled “Frequently Asked Questions”. The [forwarder page](https://www.freightos.com/forwarders/) separates “Rate & Quote”, “Sales Portal” and “Terminal”. These make functions and audiences easy to extract. I did not establish the full combination of comparison tables and extraction-focused features described for 3. |
| Third-Party Mention Density | 2 | The first two Google result pages for `Freightos` contained nine distinct external domains with substantive mentions, excluding company-controlled social profiles, WebCargo, ads and duplicate/image results. Examples: Wikipedia’s snippet described a “booking and payments platform”; Rithum said “Save on freight when you book with Freightos”. The domain register and method are in [discovery-results.md](discovery-results.md). Nine meets the course’s 4–10 range. Mentions establish presence, not independent endorsement. |
| AI Citation Presence | 2 | Freightos was named in both repeated Perplexity answers and both Google AI Overview variations: four of four successful answer outputs. One additional Perplexity attempt required sign-up and produced no recommendation. In the first answer Freightos was described as “A marketplace”; Google’s forwarder answer placed it third. See the dated query log, excerpts and answer links in [discovery-results.md](discovery-results.md). I award 2 rather than 3 because route coverage was caveated, positions varied, and only one query was repeated on the same engine. This small mixed-engine sample is not a general visibility rate. |
| Authority & Expertise Signals | 3 | The [FBX introduction](https://www.freightos.com/freight-resources/introducing-freightos-baltic-index/) has the byline “By Eytan Buchman”. More importantly, the [Baltic Exchange white paper](https://www.balticexchange.com/content/dam/balticexchange/consumer/data-services-/documents-/fbx-guides-and-policies/Baltic%20Exchange%20White%20Paper%20-%20Using%20FBX%20to%20manage%20freight%20rate%20volatility%20-%20Digital%20version%202022.pdf) identifies “Calculating Agent” and “Freightos” within its governance process. This combines named authorship with documented original market-data work and external institutional recognition. A byline alone would not justify 3. The older paper supports the documented relationship, not an assertion that every process remains unchanged today. |
| Brand Direct-Search Strength | 2 | Google’s first organic result was “Freightos” with sitelinks; Wikipedia, Trustpilot and LinkedIn also appeared. A branded AI Overview was visible, but a separate knowledge panel was not observed. Sponsored competitors appeared above the organic result. Score 2 reflects a strong exact-brand presence without all of the course’s top-score signals. Results were personalised in a Belgium-localised browser, so this is one observed search context. |

**Final score: 12/18 = 1 + 2 + 2 + 2 + 3 + 2.** This falls in the course’s 12–15 “AI-Present” band. The band is a classroom heuristic, not a validated prediction of recommendation probability or sales.

### Supplemental third-party source register

These seven supporting sources were found during preliminary targeted research. They are separate from the nine-domain Google first-two-pages count used for the final score; see discovery-results.md. Count each domain once, not duplicated pages.

1. [Baltic Exchange FAQ](https://www.balticexchange.com/en/who-we-are/faqs.html): confirms container assessments in collaboration with Freightos. Primary evidence of the partner's own activities.
2. [Barchart partnership announcement](https://www.barchart.com/cmdty/press/6000089/barchart-and-freightos-announce-strategic-partnership-for-global-container-freight-data-distribution): confirms its data-distribution relationship. Commercial partner source.
3. [CAPA supplier profile](https://centreforaviation.com/data/profiles/suppliers/freightos): industry directory presence.
4. [Trustpilot profile](https://www.trustpilot.com/review/freightos.com): customer-review presence; neither individual reviews nor the company's profile description prove universal service quality.
5. [G2 profile](https://www.g2.com/products/freightos-the-online-freight-marketplace/reviews): software-review presence. Vendor-written overview and user reviews must be distinguished.
6. [Capterra reviews](https://www.capterra.com/p/155657/Freightos/reviews/): another review domain.
7. [Axios interview](https://www.axios.com/2023/01/27/freightos-ceo-talks-going-public-via-spac-in-2023): historical business-media coverage, not evidence of current performance.

Research searches included `Freightos`, `Freightos shipping platform reviews comparison`, `Freightos Baltic Exchange index partnership` and `Freightos company Nasdaq Reuters CNBC`. A search containing an outlet's name is not evidence that the outlet covered the company; only retrieved sources are counted.

### Initial assessment

Freightos provides substantial material an answer engine could retrieve, including structured FAQs, clear service descriptions and external references. The observed queries show recommendation presence in this small sample, not how frequently assistants recommend it across all users. My priority improvement is clearer machine-readable service and audience information on the inspected pages, followed by testing whether recommendations accurately distinguish the marketplace, forwarder tools and market indexes. This should be evaluated through actual discovery and conversion measurements rather than assuming markup creates sales.

## 2. Four-factor vulnerability assessment

These are reasoned assessments, not measured channel shares. Freightos combines several business lines, so its exposure is not identical across all products.

| Factor | Level | Reason and evidence |
|---|---|---|
| Visit Dependency | Medium | New buyers may discover services through the website, but the [forwarder page](https://www.freightos.com/forwarders/) describes software and integrations used in ongoing work. Traffic therefore matters for acquisition without every visit being equivalent to revenue. Actual acquisition-channel shares were not available. |
| AI Substitutability | Medium / partial | AI could summarise freight explanations or compare platform descriptions. The [marketplace](https://ship.freightos.com/) instead asks “Where would you like to ship?” and supports shipment and payment management. A general answer alone cannot confirm a live shipment-specific booking; an integrated agent could change that distinction. |
| Intermediary Position | High / partial intermediary | Freightos connects freight buyers and providers. Its [company explanation](https://www.freightos.com/freight-resources/what-is-freightos/) calls it “a freight marketplace”. However, booking, payments and workflow tools add value beyond a simple directory. AI could influence which intermediary is chosen without removing the operational work. |
| SEO Asset Weight | Medium, provisional | The [homepage resource section](https://www.freightos.com/) includes “Freight Glossary” and “Freight Calculator”, showing discoverable content and tools. Carrier connections and workflow functionality offer other sources of value. No traffic analytics were inspected, so I cannot establish SEO's actual share of acquisition. |

### Risk matrix

I place the company around **moderate risk**: medium visit dependency and partial AI substitution. The course matrix uses high/low axes, so this is a qualitative position between its extremes, not a calculated risk probability. Informational pages are more exposed than recurring booking or software workflows.

### Hypothetical 60% traffic decline

A 60% fall in traffic would not automatically mean a 60% fall in revenue: the result depends on which visits disappear and whether existing customers continue booking. If website-generated new customers contributed 20% of baseline revenue, and their contribution fell proportionately with traffic while everything else stayed unchanged, the illustrative revenue reduction would be 0.60 × 0.20 = 12%; the 20% is an assumption, not Freightos data. The company should measure channel-level acquisition and retention, strengthen direct customer relationships and make its tools usable through trusted integrations.

### Understanding questions

**Which factor matters most?** Visit dependency is my starting point because lost visibility becomes a business problem through lost acquisition or transactions. AI substitutability then helps explain which visits are most exposed; neither factor alone predicts the outcome.

**Can visit dependency be reduced?** Yes, through repeat customers, direct relationships, integrations and useful account-based tools. This shifts the acquisition mix rather than eliminating the need to attract customers.

**Is freight more or less exposed than a recipe blog?** Transactional freight services are generally less directly substitutable than recipe instructions: someone must supply capacity, confirm terms and fulfil the shipment. Freight explanation pages can still lose clicks when an assistant supplies the answer itself.

## 3. Discovery experiment and comparison

Actual tests, the failed attempt, exact queries, answer links, excerpts and Google domain count are recorded in [discovery-results.md](discovery-results.md). The original plan was four runs on one engine. After two successful Perplexity runs, a sign-up requirement blocked the third. The two remaining question variations were therefore run through Google AI Overviews; they are labelled separately rather than presented as controlled same-model repetitions. Underlying model versions were not exposed.

The repeated importer question returned Freightos first and SeaRates second both times. Both answers failed to name a third company and instead offered a generic digital-forwarder category. Stability therefore did not establish completeness or verified Belgium-route coverage.

### Named versus omitted company

Freightos was named in both importer answers; **iContainers** was omitted from those two answers. It is a reasonable comparison candidate because its [official site](https://www.icontainers.com/) identifies it as “a digital freight forwarder based in Barcelona” and offers online freight quotation, booking and tracking. Its [ocean service page](https://www.icontainers.com/ocean-freight/) describes comparing route-specific options, while its [booking guide](https://www.icontainers.com/help/how-to-quote-and-book-ocean-freight-online/) explains the process. This does not verify availability for a particular Belgian shipment.

| Check | Freightos: named in A1/A2 | iContainers: omitted in A1/A2 |
|---|---|---|
| Public explanation | Marketplace and separate forwarder tools with FAQs | Identifies itself as a digital forwarder, with service descriptions and booking instructions |
| Operational offering | Comparison and booking across providers | Online quotations and shipment management through the forwarder |
| Online information | Clear structure plus the external evidence documented above | Relevant public content exists; no equivalent full schema or external-domain audit was conducted |
| Observed AI visibility | Appeared in all four successful outputs | Absent from A1/A2 but named in Google's benchmarking variation C |

The omission is query-dependent, not proof of poor service or universal invisibility. I have not asked an industry insider to validate the shortlist. From the service descriptions, an insider could reasonably consider both, while insisting on lane coverage, charges and responsibility before choosing. My sector implication is that the question's buyer role and task can affect which freight provider enters the shortlist.

## 4. Completion and rubric check

- Six scored criteria with quoted/technical evidence: completed; 12/18 with reasoning.
- Four-factor vulnerability assessment, matrix placement and traffic scenario: completed.
- Live discovery: two repeated Perplexity answers, one blocked Perplexity attempt and two Google AI Overviews recorded, with method change disclosed.
- Google first-two-pages count and exact-brand result: checked in the current personalised Belgium browser context.
- Signal post: revised to include measured observations; word count checked separately.
- [Week 5 rubric](https://advanced-ai-in-business.vercel.app/resources/week-05-rubric.md): retrieved and read on 25 October 2026; completeness, auditable reasoning and application to this beat checked. No grade is claimed.
- Classroom pooling, partner comparison and Notion practice: no participation claimed. These are not additional items in the rubric's 4-ECTS submission checklist.
- Company-contact extension: not undertaken; optional on the recorded 4-ECTS track.
- Canvas submission must be made separately after GitHub publication.

Course reference: [Week 5](https://advanced-ai-in-business.vercel.app/week/5).

AI assistance: ChatGPT/Codex researched public sources, inspected markup, operated the browser to run the recorded discovery tests, proposed scores and drafted the analysis. These are agent-operated observations, not claimed manual student runs or interviews.
