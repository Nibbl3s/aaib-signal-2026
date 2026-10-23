# Week 5 — Market mechanism thinking: GEO audit of DJ Thorax

**Thor Tack** · Beat: AI Cost Decisions for a One-Person DJ & Events Business

**Company:** DJ Thorax: https://www.djthorax.com
**Category:** DJ for parties, youth-movement fuiven, company events and weddings in West Flanders (Belgium)
**Why this company:** it's my own one-person DJ business. Anyone can check every claim below on the live site, and it was the company that *should* have appeared in my live query and didn't. Auditing myself also means I can state facts about bookings and channels that I couldn't know about a competitor.

*Disclosure: I'm auditing my own business, so the risk is going easy on myself. I countered that by scoring only on evidence a reader can check.*

---

## 1. Live query record (Activity 1)

| Field | Run A | Run B |
|---|---|---|
| **The query, verbatim** | "I'm organising a wedding party near Izegem in West Flanders, Belgium. I need a DJ. Who should I book?" | same, new chat, unchanged |
| **Assistant used, and date** | Duck.ai (GPT-6 Luna, web search on, not logged in, location sharing declined), 23 Oct 2026 | same |
| **Companies named** | **None.** "I can't confidently single out one Izegem-area DJ"; pointed to House of Weddings' West Flanders listings | **DJ Gert V** (Hooglede, via houseofweddings.com) and **DJ Pieter** (Zulte, via gigheaven.com / djpieter.be) |
| **Would an insider name these same companies?** | n/a | See note 1 below |
| **One company that should have appeared and didn't** | **DJ Thorax**: 23 listed events in the same region, 7 of them in Ingelmunster | same |
| **Ran it twice — same answer?** | **No.** 0 names → 2 names on an identical query | |

**Earlier runs (19 Oct, in the session without the teacher):** I ran the same query twice in Claude (Sonnet, with web search) through my coursework tool. Run 1 named nobody; run 2 named three eventplanner.net listings (*Team Vanoutryve / DJ Gerd*, *Allmusic Party DJ*, *All Party Events*). **I don't count these as clean:** run 2 mentioned it had deliberately left out my own business, so that session had my profile in context. That's why I re-ran everything on Duck.ai, without login.

**Variations for criterion 4 (Duck.ai, 23 Oct):**

| Query | Named | Source cited |
|---|---|---|
| "Our youth movement (Chiro) is organising a fuif in Ingelmunster, West Flanders. Which DJ should we book?" | DJ Vjeetn, DJ Fish, DJ GERD | uitinvlaanderen.be (event listing of a recent Ingelmunster fuif), trustlocal.be |
| "Is DJ Thorax from West Flanders a good DJ to book for a party?" | — | "I couldn't find reliable reviews or booking information for a DJ called DJ Thorax in West Flanders" |

**Note 1 — insider check:** I'm the insider here, as a working DJ in this region. *(Thor to fill in: do I know DJ Gert V, DJ Pieter, DJ Vjeetn, DJ Fish, DJ GERD, and would people in the scene name them?)* None of the names looks invented: every one came with a source link I could open.

**What it says about the sector:** the AI never cited a DJ's own website. Every name came from a **third party that lists DJs or events**: House of Weddings, Trustlocal, eventplanner.net, UiTinVlaanderen. Local DJs are found through the directories and event agendas that write about them, not through their own sites.

**Pool row** *(in the Canvas pool format; I didn't post it by the Monday 11:30 deadline)*: `DJs / events (wedding + fuif DJ, West Flanders) | Yes, but only DJs listed on directories (House of Weddings, Trustlocal, UiTinVlaanderen) — never from their own sites | Insider: see note 1 | No — 0 names vs 2 names on identical runs`

---

## 2. GEO audit — six criteria (scored 0–3)

| # | Criterion | Score | Evidence (quoted from the site / checks, 23 Oct 2026) |
|---|---|:---:|---|
| 1 | **Structured Data & Schema Markup** | **2** | Page source has one `application/ld+json` block with `"@type":["MusicGroup","EntertainmentBusiness"]`, `makesOffer` with six named services (e.g. `"DJ voor trouwfeesten"`, `"Licht en geluid op maat"`), `areaServed` listing 10 places (Izegem, Ingelmunster, Roeselare…), a `Person` ("Thor Tack") and a `FAQPage`. **Not 3:** there's no `Review` or `aggregateRating` and no price in any `Offer`. |
| 2 | **Content Parseability** | **2** | The `<title>` states the job plainly: "DJ Thorax \| DJ boeken in West-Vlaanderen voor fuiven & feesten". The sections have headings (Over, Referenties, Mixes, Licht & Geluid, FAQ) and the FAQ uses 7 `<details>` Q&As. **Not 3:** several headings are split into styled fragments ("Van klassiekers / tot / moderne beats", "Hier ging het / dak / eraf"), so the heading text means little out of context; there are no tables and only 2 lists; and the hero `<h1>` is a slogan ("Good music isn't just heard — it's felt."), not what the business does. |
| 3 | **Third-Party Mention Density** | **0** | A web search for `"DJ Thorax"` returns only my own pages (djthorax.com, /homepage, an old Google Sites page). `thorax site:houseofweddings.com OR site:trustlocal.be OR site:uitinvlaanderen.be OR site:eventplanner.net` finds no page about me. Searching for "Thorax" with the event names from my references (Laspidy, Party Instinct, Kontrabasfeesten…) returns nothing. The `sameAs` links (Instagram, Facebook, SoundCloud) are my own profiles, not third parties. |
| 4 | **AI Citation Presence** | **0** | 0 mentions in 6 Duck.ai answers: wedding query ×2, fuif-in-Ingelmunster query, and even the direct brand query ("couldn't find reliable reviews or booking information"). The fuif query named three other DJs *for the town where I've played 7 listed events*. |
| 5 | **Authority & Expertise Signals** | **1** | Named person (`"Person","name":"Thor Tack"`), a list of 23 events with town and repeat count ("Beach Party · 8770 Ingelmunster · 3×"), and "een geldige DJ-licentie (Unisono)". **Not 2:** no blog or articles, no case studies beyond the event names, no reviews or testimonials, no press. The Unisono licence is a legal requirement, not a sign of expertise. |
| 6 | **Brand Direct-Search Strength** | **1** | Searching the exact name "DJ Thorax" puts djthorax.com at #1 with the right description, but there's no knowledge panel, no Wikipedia page, no news, and only own pages in the results. Without the "DJ", "Thorax" is swamped by anatomy and the medical journal *Thorax*. |
| | **Total** | **6 / 18** | **AI-Invisible (0–6): urgent action needed** |

**Readiness summary:** DJ Thorax is **AI-Invisible**. Five of its six points come from things on its own site (schema, structure, a named person). It scores **zero on both criteria that measure the outside world**, mentions by others and actual AI citations, and those are exactly what the AI used in every answer. An AI asked for a DJ in this region won't name DJ Thorax. That's not because the site is bad; it's because no source the AI reads writes about it. **The single most important improvement:** get onto the third-party sources the AI actually cited. In practice:
1. ask the youth movements I play for to list "DJ Thorax" in their UiTinVlaanderen event entry (that's where DJ Vjeetn and DJ Fish came from);
2. create Trustlocal and House of Weddings profiles and ask past clients for reviews there.

---

## 3. Vulnerability assessment — four factors

| Factor | Level | Reasoning |
|---|---|---|
| **1. Visit Dependency** | **Low** | Revenue comes from gigs, not visits. Most bookings come through my network: repeat youth-movement parties (Beach Party 3×, Laspidy 3×, Kontrabasfeesten 3×), word of mouth, and direct mail, Instagram or WhatsApp. The site is mainly where people land to fill in the booking form after they've already heard of me. |
| **2. AI Substitutability** | **Low** | An AI answer can't play a set or read a dance floor. The product is a live service; the site is only the way to book it. |
| **3. Intermediary Position** | **Low** (partial for sound & light) | I'm the vendor of the DJ set. For sound and light I do act as a middleman (rental partners), so that part of the offer could be bypassed if a client finds the rental company directly. |
| **4. SEO Asset Weight** | **Marginal** | My competitive edge is reputation and repeat bookings in a local network, not search rankings. The site has a clean title and schema, but I never invested in SEO content. |

**Risk matrix:** Low visit dependency × Low substitutability → **Low risk.**

**What a 60% traffic drop would do:** almost nothing to current revenue. Most gigs come from organisers who already know me and use the site only for the form. The real exposure is the opposite of the recipe blog's: I'm not losing visits I had, I'm **missing new clients I never reach**. That matters most for weddings and company events, where the client is outside my youth-movement network, starts with a search or an AI question, and, as the queries show, gets someone else's name.

---

*AI use: Claude ran the Duck.ai queries and web checks, extracted the schema and headings from the live page source, and drafted the scoring and reasoning; the facts about my bookings and channels are mine. I reviewed it.*
