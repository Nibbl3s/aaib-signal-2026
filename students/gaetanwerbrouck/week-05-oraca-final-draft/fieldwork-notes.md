# Week 5 fieldwork notes

## 1. AI-mediated discovery test

**Beat:** How football clubs use data to find undervalued players.  
**Assistant tested:** ChatGPT  
**Test date:** 21 October 2026 (confirmed by student)

**Exact prompt used in both runs:**

> I work in football recruitment for a professional club in Europe. Recommend three AI-powered football scouting or player-discovery platforms that could help a recruitment team identify potentially undervalued players. For each, explain what it does and cite sources. Do not invent providers; if you cannot verify three, say so.

### Run 1
- SciSports
- TransferLab
- Hudl Wyscout

### Run 2
- SciSports
- TransferRoom Scout
- SkillCorner

### Repeatability observation
SciSports appeared in both answers. The other two providers differed between runs, so the recommendations were partly repeatable but not identical. Both answers returned three providers and citations. This observation is limited to two runs of one prompt in ChatGPT.

### Relevant company omitted
**Oraca** — https://oraca.ai/ — did not appear in either answer. Oraca describes itself as an AI player-discovery platform for football recruitment teams and publishes methodology and research pages. The omission is a useful lead for a GEO audit, not proof that AI systems generally fail to recommend Oraca.

## 2. Company-site evidence reviewed

### Homepage — https://oraca.ai/
The page describes the service as “AI player discovery for recruitment teams” and says “Private beta.” It explains a three-part workflow labelled “Surface,” “Scout,” and “Reach,” and includes FAQ-style questions and answers. The homepage reports “327 players flagged in a blind 2018–2023 backtest,” “4.8× average return on a recommended signing,” and “12% of picks returned 10× or more.” These are company-reported claims. The page itself cautions: “Past model performance is not a guarantee of future results.”

### Methodology — https://oraca.ai/methodology
The page says signals are “validated out-of-sample” and describes controls for leakage, uncertainty, and limitations. This is a positive transparency signal, but it remains first-party material rather than independent verification.

### Research — https://oraca.ai/research
The page describes a pre-registered forward test with predictions frozen on 11 June 2026 and says the “First public scoring” is planned for 30 June 2027, after the 2026/27 season. Therefore, that forward evaluation was not yet publicly scored on the test date.

## 3. Online-presence comparison: SciSports and Oraca

SciSports has dedicated public scouting, valuation, and club-solution pages. It also published an announcement about a collaboration with the Royal Belgian Football Association. The announcement is on SciSports' own site, so it is not fully independent confirmation, but it provides a public institutional reference.

Oraca's site is explicit about its product, intended audience, methodology, and research. On 21 October 2026, additional targeted web searches for “Oraca” with “football scouting,” “AI,” and “player discovery” mainly surfaced Oraca's own website pages (homepage, methodology, research, and a free-agent rankings page). The search also returned unrelated uses of similar names. I did not find a clearly relevant independent third-party source in the surfaced results. This supports a cautious preliminary low third-party-visibility assessment, but it is not a Google first-two-pages count and does not prove independent references do not exist. SciSports has a broader visible public content footprint, including scouting and valuation pages and an announcement about an RBFA collaboration hosted on SciSports' own website.

## 4. Google and structured-data evidence (21 October 2026)

### Page source and Rich Results Test
The supplied page-source excerpt included a script of type `application/ld+json`, the context `https://schema.org`, and an `Organization` item. The excerpt was truncated, so it does not establish the complete JSON-LD structure.

The Google Rich Results Test summary reported:
- “Eén geldig item gedetecteerd” (“one valid item detected”).
- Detected structured data: “Software-apps.”
- “Page fetch: Successful.”
- “Crawl allowed: Yes.”
- “Indexing allowed: Yes.”
- Non-critical issues were reported, but the supplied summary did not include their details.
- Crawl timestamp: 21 October 2026, 18:13:37; Google smartphone inspection tool.

Interpretation: Google fetched the tested page and detected one valid structured-data item eligible for consideration for a rich result. This does not guarantee a rich result will appear, prove every page is indexed, or show that all site-wide structured data is error-free. The `Organization` source excerpt and “Software-apps” test result may refer to separate items; the summary does not establish whether they are the same item.

### Google searches
For **“Oraca football scouting”**, the student reviewed the first two pages of Google-focused results and reported **0 qualifying independent results**. This is a scoped finding for that query and date, not proof that no independent mention exists elsewhere online.

For the exact query **“oraca”**, the supplied results showed an AI Overview describing the football platform as “An AI-powered player discovery and scouting tool” analyzing data across “60+ leagues.” The overview also said the name referred to multiple entities, including unrelated businesses/topics. Organic results included “Oraca: AI football scouting for recruitment teams” at `oraca.ai` and “ORACA Independent Equity Research” at `oraca.net`. No dedicated knowledge panel was visible in the supplied capture, and the text did not conclusively establish the official site’s exact organic rank.

### Remaining technical checks
- Detailed Rich Results Test item fields and non-critical issue messages were not captured.
- `robots.txt`, `sitemap.xml`, canonical tags, and site-wide indexability remain unverified.
- Keep screenshots or result URLs if the assignment requires evidence attachments.


## 5. Required fieldwork recording sheet — completed from available evidence

| Field | Recorded result |
|---|---|
| My beat | AI-assisted football scouting and identifying undervalued players |
| Query, verbatim | “I work in football recruitment for a professional club in Europe. Recommend three AI-powered football scouting or player-discovery platforms that could help a recruitment team identify potentially undervalued players. For each, explain what it does and cite sources. Do not invent providers; if you cannot verify three, say so.” |
| Assistant and date | ChatGPT; 21 October 2026 |
| Companies named | Run 1: SciSports, TransferLab, Hudl Wyscout. Run 2: SciSports, TransferRoom Scout, SkillCorner. |
| Would an insider name the same companies? | **Provisional judgement: broadly yes, with caveats.** SciSports and Hudl Wyscout are recognisable football-data/scouting names; TransferLab, TransferRoom Scout, and SkillCorner are plausible specialist tools but do different jobs and should not be treated as identical products. This is a reasoned assessment, not an interview with a club recruiter. |
| One company that should have appeared but did not | Oraca (https://oraca.ai/), an AI player-discovery platform for recruitment teams. |
| Ran it twice — same answer? | Partly. SciSports appeared in both answers; the other two names changed. |
| One-sentence sector finding | In this two-run test, AI surfaced established or more visibly documented football-data providers more consistently than Oraca, suggesting that discoverability may depend partly on public corroboration and recognizable category signals—not only on a product’s own claims. |

## 6. Pair activity: compare one named company and one omitted company

**Named company: SciSports.** The visible public footprint includes dedicated scouting, player-valuation, and club-solution pages, plus a company-hosted announcement about a collaboration with the Royal Belgian Football Association. These give an AI answer engine multiple clear pages and an institutional reference to retrieve. The announcement is hosted by SciSports itself, so it is not independent confirmation by itself.

**Omitted company: Oraca.** Its site clearly explains AI player discovery, its workflow, methodology, and research plans. However, the supplied Google check for “Oraca football scouting” found zero qualifying independent results in the first two result pages reviewed. The exact-name search also showed name ambiguity with unrelated entities. This comparison suggests Oraca’s weakness is not simply unclear website copy; it is the smaller visible independent footprint and the fact it did not surface in the two test answers. This is a small, date-specific observation—not proof of how every AI system behaves.

## 7. Limits of the fieldwork

This evidence records two runs of one prompt in ChatGPT, not a representative test across all assistants. The class-wide pooled dataset depends on classmates’ results and cannot be completed accurately from the information available here. No classmate results have been invented. If your instructor asks for the pooled-room activity as a separate submission, add the actual class data.
