---
week: 5
title: "Can an AI Find a 3D Printing Shop in Liège? A GEO Audit of My Own Company, O&D 3D"
author: "Max"
beat: "How can AI automation transform the workflow of a digital manufacturing company?"
skill: "Market mechanism thinking"
date: 2026-10-18
---

*Updated 28 November 2026. My first audit scored O&D 3/18, but it used a search engine instead of the answer engines. I re-ran the six queries in ChatGPT and Perplexity, and the result changed. This version replaces the first one.*

When a customer asks an AI assistant "who can 3D print a replacement part near Liège?", only a few names come back. I audited one company to see whether it makes that list. The first answer I got was wrong, and why it was wrong is the most useful part.

## The company

O&D Impression 3D is a 3D printing company with its workshop in Welkenraedt, in the province of Liège (the registered office is still in Baelen). It offers FDM, SLS, resin, CNC and laser cutting, plus modelling and scanning. I co-founded it and run its website, so I can act on what I find. I chose it because it is exactly the kind of small shop that should appear when someone asks for local custom parts.

## The audit

| Criterion | Score | What I found |
|---|---|---|
| Structured data | 1 | The page source has JSON-LD (`LocalBusiness` with address and phone, `WebSite`), but it is minimal: the business name is a person's name, with no opening hours, no `sameAs`, no `FAQPage`. |
| Content parseability | 2 | A clear H1 and an FAQ with 8 answered questions. Perplexity read machines, volumes and the 24-hour quote promise correctly. No tables, no prices. |
| Third-party mentions | 1 | ChatGPT shows the Google profile (4.9/5, 35 reviews). Perplexity mostly cites O&D's own sites. |
| AI citation presence | 3 | Named in 11 of 12 answers (6 queries, 2 engines); first in 6 of the 8 discovery queries. |
| Authority signals | 1 | Case-study and guide pages exist, but no named author, credential or certification. |
| Brand direct search | 2 | Found and described correctly on both engines, but addresses, phone numbers and one build volume differ between sources. |
| **Total** | **10/18** | **Out of the AI-Invisible band (0 to 6)** |

Tests: 28 November 2026, private browser window, six queries on each engine, one run per query. ChatGPT was logged out. Perplexity was logged out for two queries, then used with a brand-new account.

## What I got wrong the first time

On 18 October I scored 3/18 and wrote that nothing outside my own site said O&D exists. I had used a search engine as a stand-in for the answer engines, and I had read the page as text, which hid the structured data in the page source. When I asked ChatGPT and Perplexity directly, O&D was named almost every time. They read my site, my Google profile and a second site I had forgotten about, none of which that search engine surfaced. An audit of AI visibility has to question the AI.

## The verdict

O&D is visible, on thin support. It ranks first for local queries: "Liège", "Welkenraedt" or "Verviers" in the query puts it on top. On a generic Belgian query without a city, Perplexity did not name it at all. ChatGPT did, but only because it guessed my region from my IP address. So the visibility depends on the customer's city, not on the strength of the company's footprint. Structured data exists but is thin, third parties say little, and the facts are inconsistent: the registered office is in Baelen, the workshop in Welkenraedt, and one old page still states the wrong SLS build volume.

The fixes, in order: complete the structured data (company name, opening hours, links to the Google profile, FAQ markup) with both addresses described correctly, align the facts across the sites and the Google profile, then get listed on the directories where competitors already appear (3Dnatives, Craftcloud, Kompass).

## The insight

This is Week 4 again: the tool I priced saves €552 a year, while the form behind it brings about 12 requests a month, and those depend on being found. For a small manufacturer the answer layer is local first. Being cited does not need a large footprint, but it needs consistent facts and more than one source, so that an AI does not rely on a city name or on a single page.

**The question:** Will AI agents soon request quotes by themselves, and what must a manufacturer's website expose to receive them?

*AI use: Claude helped draft and structure this post; the data and the tests are mine, and I checked the figures.*
