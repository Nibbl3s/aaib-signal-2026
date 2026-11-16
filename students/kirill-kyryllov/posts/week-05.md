---
week: 5
title: "Can an AI Find Your Accountant? A GEO Audit of Titeca"
author: "Kirill Kyryllov"
beat: "The Fake Analyst: When AI-Generated Business Reports Get It Wrong"
skill: "Market mechanism thinking"
date: 2026-10-23
---

My beat is about AI getting financial claims wrong. This week the question moved one step
earlier: before an SME owner ever reads an AI-generated report, they may ask an AI which
accountant to hire. If the AI is the gatekeeper, the firms it never names simply don't exist
for that client, and nobody tells them.

## The Company

Titeca Pro Accountants & Experts is a Flemish accounting and advisory firm founded in 1987,
with 15 offices across West and East Flanders, including Ghent. I chose it because its size
should make it visible, yet when I asked Gemini three times for an accountant in Ghent, it
named Titeca only once, with a 3.4★ rating.

## The Audit

| Criterion | Score | What I found |
|---|:---:|---|
| Structured data | 1/3 | Only generic `WebSite`/`WebPage`/`Article` markup; no `Organization` or `LocalBusiness`. The Ghent office page has none at all |
| Content parseability | 1/3 | The homepage headline calls Titeca "the confidant for any entrepreneur", never "accountant" or "Ghent" |
| Third-party mentions | 2/3 | Directories, job boards, one podcast article; no press, no comparison articles |
| AI citation presence | 2/3 | Ghent: 1 of 3 runs. Lokeren and Wetteren: named. Family-business query: named first |
| Authority signals | 2/3 | Named partners, ITAA and MSI Global membership, own client portal; no original research |
| Brand search | 2/3 | Ranks #1 for its name, but no knowledge panel; each office is a separate listing (Ghent: 3.4★ from 5 reviews) |
| **Total** | **10/18** | **AI-Marginal** |

Two things stood out. First, the same Ghent question returned ten different firms across
three runs, and none appeared every time. Second, when I asked Gemini directly about Titeca,
it said its Trustpilot score was 3.8 from 6 reviews. I checked: it is 2.3 ("Poor") from 6
reviews, on a profile Titeca has never claimed. The AI got the count right and invented the
score.

## The Verdict

Would an AI recommend Titeca to a Ghent SME? Sometimes. It appears reliably in small towns
and when the question matches its positioning ("family business, several offices"), but in
Ghent it is crowded out by local firms rated 4.9–5.0★. The biggest gap is not the website,
it is fragmentation: an AI sees fifteen small listings with a handful of reviews each, not
one 39-year-old firm. The most important fix is to consolidate those signals: claim
Trustpilot, collect reviews per office, and mark up each office as an accounting business.

## The Insight

For Ghent accountants there is no ranking to climb: the shortlist changes from run to run.
What decides who appears seems to be local reviews and how closely a firm's own words match
the client's question. And the AI's description of a firm can be wrong in confident, specific
ways, which is exactly the failure my beat keeps finding.

## The Question

If an AI can invent a firm's rating in its favour today, what stops it inventing one against
it tomorrow, and would the firm ever find out?