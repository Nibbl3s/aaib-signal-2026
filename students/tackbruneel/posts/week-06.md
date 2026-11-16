---
week: 6
title: "AI That Reads DJ Bookings Costs Fractions of a Cent. The Errors Don't."
author: "Thor Tack"
beat: "AI Cost Decisions for a One-Person DJ & Events Business"
skill: "Cost projection"
date: 2026-10-26
---

**Hook:** DJ booking software is adding AI that reads your inquiries for you. I built that tool for my own DJ business and measured it with my own API key. The token bill is so small it rounds to zero, which is exactly why the real cost hides somewhere else.

**The Use Case:** Picture a DJ booking platform like Check Cherry adding "inquiry intake": every form answer or e-mail goes through a prompt that returns ten booking fields (date, times, venue, guests, who brings the decks) plus what the DJ still has to ask before quoting. The users are DJs paying $29 a month (Check Cherry Standard, checkcherry.com/pricing, read 26 Oct 2026). I assume a busy DJ gets one inquiry message a day.

**The Numbers:** I ran my own prompt on two real inquiries through `gemini-3.1-flash-lite` ($0.25 in / $1.50 out per 1M tokens, AI Studio, 26 Oct 2026). The usage objects said 644 in / 151 out and 949 in / 157 out: $0.00043 per run. Measuring showed two things I hadn't expected. Output barely moves, because my JSON format caps it. And about 540 input tokens of every call are my own instructions, not the client's message.

For the platform I priced it at the course Standard tier ($2 / $12 per 1M, AI Pricing Reference, 7 Sep 2026): $0.0034 per call. My Week 2 test (on Claude Haiku) got 50% of outputs fully right. Here a wrong answer costs the platform one more call, so I count 1.5 calls per inquiry.

| DJs | Calls/day | Monthly | Annual |
|---:|---:|---:|---:|
| 100 | 150 | $15.48 | $185.81 |
| 1,000 | 1,500 | $154.84 | $1,858.14 |
| 10,000 | 15,000 | $1,548.45 | $18,581.40 |

At 10,000 DJs that's about €1,425 a month against $290,000 in subscriptions: 0.5% of revenue.

**The Break Point:** More users don't break it; more calls per user would. With revenue fixed at $29, AI cost reaches 10% of a subscription at 19 calls per DJ per day on Standard and 7 on Premium. It eats the whole subscription at 187 (Standard) and 75 (Premium). No DJ answers 75 inquiries a day, so on tokens alone this feature never breaks.

What could pull the break point closer:
- **A longer prompt.** Fixing my errors means adding examples to those 540 tokens.
- **Promo prices that expire.** Two Gemini rates I read end on 30 Nov and 31 Dec.
- **Reliability.** That evening 5 of my 8 calls came back HTTP 503, "high demand". A product can't ship on that, and paying for a better tier or a second provider shows up on no per-token table.

**The Insight:** The break point that matters isn't the vendor's. Who fixes a wrong field? The DJ. For my own business, at 2.9 inquiries a month, tokens cost €0.0011 a month. In my Week 2 test, 13% of runs wrongly said "the decks are on site", and that mistake costs a gig. If I trusted the tool unchecked, that's about €116 a month in expected losses, roughly 100,000 times the token bill. The platform keeps 99% of the subscription while the DJ carries the risk. A cost model that stops at tokens tells the vendor the feature is free and tells the DJ nothing.

**The Question:** If the vendor's cost is fractions of a cent and the DJ's is a lost gig, who should carry that risk? And would one "please confirm who brings the decks" step remove most of it?

*AI use: Claude wrote the scripts for the API calls and the cost model and drafted this post from my cost model (`week-06/cost-model.md`). I created the API key and entered it myself; the volumes, error costs and test results are mine. I reviewed it.*
