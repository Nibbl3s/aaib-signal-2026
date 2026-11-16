# Week 5 — Evidence: GEO Audit of Titeca Pro Accountants & Experts

## 1. Live Query Record

| Field | Record |
|---|---|
| My beat | The Fake Analyst: When AI-Generated Business Reports Get It Wrong |
| The query, verbatim | "Which accounting firm in Ghent, Belgium would you recommend for a small or medium-sized company that needs help with financial reporting?" |
| Assistant used, and date | Gemini, 23 October 2026. Run 1 in a normal chat, run 2 in a temporary chat, run 3 in a normal chat |
| Companies named | Run 1: United Accountants (PIA Group, listed twice under two names), A&T Services, FIDUCIAL Accountancy Gent, Titeca Pro Accountants & Experts. Run 2: NMR Consult, United Accountants, FIDUCIAL. Run 3: Moore Belgium, ADD Consult Gent, die van de boekhouding, FVS Services, FK Boekhouding & Fiscaliteit |
| Would an insider name these same companies? | Partly. All are real local firms, but none of the larger players with a Ghent presence appeared in any of the three runs: no Big Four, and no Vandelanotte |
| One company that should have appeared and didn't | Vandelanotte, one of Belgium's larger independent accounting firms. It never appeared in the three Ghent runs, yet Gemini itself named it (with a Ghent office) when asked about family businesses in East Flanders |
| Ran it twice — same answer? | **No.** 10 different firms across 3 runs; none appeared in all three. Only United Accountants and FIDUCIAL appeared twice. Runs 1 and 3 (normal chat) were also personalised: Gemini added advice about "SQL, Power Query, Excel Pivot Tables" that was not in the question |

**Sentence on the sector:** For Ghent accountants, there is no stable "position" in an AI answer to optimise for: the same question returned three largely different shortlists.

### Follow-up tests (temporary chat, 23 October 2026)

Hypothesis written before running: Gemini picks accountants mainly from each city's Google Maps listing, which is why Titeca is weak in Ghent (3.4★, 5 reviews).

| Test | Prediction | Result | Verdict |
|---|---|---|---|
| Same question, Lokeren (Titeca listing 4.6★) | Titeca appears | Titeca named 2nd, as one of the "strongest local options" | Partly confirmed (appeared; no rating given) |
| Same question, Wetteren (Titeca listing 3.5★) | Titeca appears lower | Titeca named 4th of 4 | Partly confirmed |
| "Tell me about Titeca in Ghent: offices, rating, sources?" | AI quotes 3.4 and doesn't know it's a network | AI knew it was a network ("12–13 offices") and quoted Trustpilot 3.8 and Indeed 5.0 | Not confirmed |
| "Family business in East Flanders, firm with several offices?" | — | **Titeca named 1st**, with accurate details (Ghent, Aalter, Lokeren offices; succession and takeover advice) | — |

**Revised explanation:** the original hypothesis was wrong. What fits the data better is competition density plus query fit. Titeca appears reliably in small towns and when the question matches its positioning (family businesses, several offices), but is crowded out in Ghent by firms with stronger local reviews.

**Two AI errors found while checking:**
- **Fabricated rating:** Gemini said Titeca's Trustpilot score is 3.8 from 6 reviews. The real Trustpilot page shows **2.3 ("Poor") from 6 reviews**, mostly 1-star, on an **unclaimed** profile. The review count was right; the score was invented, and in the company's favour. (The Indeed 5.0 figure was not verified.)
- **Stale fact:** Gemini said "12–13 offices". Titeca's own timeline lists 15 (Roeselare, Moeskroen, Brugge, Knokke, Ieper, Gent, Waregem, Maldegem, Kortrijk, Oostende, Lokeren, Aalter, Mariakerke, Wetteren, Tielt). "13" matches a 2023 Jubel.be article, so the AI repeated an old third-party source rather than the company's own site.

## 2. GEO Audit Scorecard

**Company:** Titeca Pro Accountants & Experts · **URL:** https://www.titeca.be · **Category:** Accounting and tax advisory for SMEs, self-employed and family businesses (founded 1987, 15 offices in West and East Flanders, Ghent office at Kortrijksesteenweg 1103)

| Criterion | Score (0-3) | Evidence |
|---|:---:|---|
| 1. Structured Data | **1** | Homepage has one JSON-LD block, but only generic types: `WebSite`, `WebPage`, `Article`, `Person`, `ImageObject`, `SearchAction` (the homepage is marked up as an *article*). No `Organization`, `LocalBusiness` or `AccountingService`. The Ghent office page has **0** JSON-LD blocks: address, phone and opening hours exist only as plain text |
| 2. Content Parseability | **1** | Homepage headline: "Titeca, de vertrouwenspersoon van elke ondernemer en zelfstandige" (EN: "the confidant for any entrepreneur or self-employed person") — no "accountant", "boekhouder" or "Gent". Ghent page headings include "Het persoonlijk contact, die babbel met een koffietje, dat maakt het verschil". Services (Pro Accountants, Fiscaal adviseur, Overname expert…) appear only as navigation links, with no direct sentence saying what the firm does where |
| 3. Third-Party Mentions | **2** | Found on Lexgo.be ("a rapidly growing, full-service accounting and consulting group"), VDAB job listings (Ghent, Roeselare, Kortrijk, Waregem, Wetteren), Kompass ("20-49 Employees"), Companyweb, Jubel.be (article on its podcast "Wat als?"), Trustpilot, FinalScout. Mostly directories and job ads; no Wikipedia, no independent comparison articles, no press coverage. Sources even disagree on size (Kompass: 20-49 employees; Jubel 2023: 13 offices; own site: 15) |
| 4. AI Citation Presence | **2** | Ghent generic query: named in 1 of 3 runs. Lokeren: named 2nd. Wetteren: named 4th of 4. Family-business East Flanders query: named **1st**. Consistent for some query variations, rarely for the city with the most competition |
| 5. Authority Signals | **2** | Named people (CEO Jurka Vanthournout, Ghent partner Geert De Somere), news and "verhalen" sections, podcast "Wat als?", ITAA and MSI Global membership logos, Voka sustainability charter, Great Place To Work badge (Oct 2026 – Oct 2027), own client portal "James". Missing: original research, data, or case studies with numbers |
| 6. Brand Direct-Search | **2** | Google search for "Titeca" and "Titeca accountants": titeca.be ranks #1. No knowledge panel and no Wikipedia page. Below the results, each office is a separate Maps listing with its own rating: Wetteren 3.5★ (11), **Gent 3.4★ (5)**, Lokeren 4.6★ (10), and one office at 2.6★; categories differ ("Accounting firm" vs "Bookkeeping service") |
| **Total** | **10/18** | **AI-Marginal** |

## 3. Assessment

Titeca is **AI-Marginal (10/18)**. Its biggest gaps are machine-readable identity (no `Organization` or `LocalBusiness` markup, and a homepage headline that never says "accountant") and fragmented reputation: 15 separate Google listings with small review counts, plus an unclaimed Trustpilot profile at 2.3★. An AI asked for an accountant in Ghent would mention Titeca only occasionally, because its Ghent listing is weak against local firms rated 4.9–5.0★; it is recommended reliably only in small towns or when the question matches its "family business, several offices" positioning. The single most important fix is to consolidate its reputation signals: claim Trustpilot, collect reviews per office, and add `AccountingService` markup with the address of each office, so an AI sees one strong firm instead of fifteen weak listings.

## 4. Vulnerability Assessment (4 factors)

| Factor | Level | Why |
|---|---|---|
| Visit Dependency | **Medium** | Revenue comes from recurring accounting retainers, not website visits, but new clients and new hires (many open VDAB vacancies) still arrive through search and the site |
| AI Substitutability | **Low** | AI can answer generic tax questions from its news pages, but cannot prepare and file annual accounts, run payroll, or act as an ITAA-certified accountant |
| Intermediary Position | **Low** | Titeca is the direct service provider, not a directory or comparison site |
| SEO Asset Weight | **Medium** | SEO supports acquisition (WordPress site with SEO plugin, news, podcast, events), but the firm grows mainly through acquiring other accounting offices and through referrals |

**Risk matrix:** Visit dependency low-to-medium × AI substitutability low → **low risk** quadrant.

**If traffic dropped 60% in the next 12 months:** existing revenue would barely move, because clients are on recurring contracts. The real damage would be slower: fewer inbound leads in competitive cities like Ghent, and fewer job applicants for a firm that is hiring across many offices. The risk is not losing clients, but quietly not being on the shortlist when a new client asks an AI. To change that, Titeca would need to present itself as one firm to machines (one consolidated reputation, structured data per office) rather than as fifteen separate listings.

## Sources
- Titeca, Kantoor Gent: https://www.titeca.be/nl/titeca-kantoor/kantoor-gent/
- Titeca, Over ons (timeline of offices): https://www.titeca.be/nl/over/
- Trustpilot, Titeca: checked 23 October 2026 (2.3, 6 reviews, unclaimed)
- Lexgo: https://www.lexgo.be/en/companies/4824-titeca-pro-accountants-experts
- Kompass: https://it.kompass.com/en/c/titeca/be0329253/
- Jubel.be: https://www.jubel.be/author/titeca/
- VDAB vacancy (Ghent office): https://www.vdab.be/vindeenjob/vacatures/74167627/finance-management-consultant