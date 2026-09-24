---
week: 1
title: "The DJ Quote Bot Costs Nothing to Run — Until It Sends the Wrong Price"
author: "Thor Tackbruneel"
beat: "AI Cost Decisions for a One-Person DJ & Events Business"
skill: "Cost literacy"
date: 2026-09-24
---

**Hook:** I get under 10 booking inquiries a month for DJ gigs and XDJ RX3 rentals, so auto-drafting replies with AI sounds like an obvious win — it's cheap, right? I ran the actual numbers on my own beat, and the token bill turned out to be the least interesting number in the whole model.

**The Numbers:** The use case: AI auto-drafts a personalized quote reply to each booking inquiry — reads the customer's message (event date, type, gear needed), pulls in my pricing rules, and drafts a reply with a price and terms. At roughly 8 inquiries/month, each needing ~400 input tokens (their message + my pricing context) and ~300 output tokens (the drafted reply), at Standard tier pricing ($2.00/1M input, $12.00/1M output):

- Input: 8 × 400 = 3,200 tokens → 0.0032M × $2.00 = $0.0064
- Output: 8 × 300 = 2,400 tokens → 0.0024M × $12.00 = $0.0288
- **Token cost: $0.035/month → €0.03/month at $1 = €0.92, or about €0.39/year**

*Prices: AI Pricing Reference, course snapshot 7 September 2026.*

But token cost isn't the real cost. If the AI gets one detail wrong — underprices a gig, misses a travel fee, mixes up a date — that either eats my margin or loses the booking outright. Assume that happens on roughly 1 in 8 replies if I'm not reviewing every draft, and that a bad quote costs me on average €150 in lost or underpriced business. That's 1 error × €150 = **€150/month**.

**Total: €0.03 tokens + €150 error ≈ €150/month (~€1,800/year).**

**The Insight:** What surprised me is that the AI itself is basically free at my volume — I'm not paying for compute, I'm paying for the absence of a review step. That €150/month isn't really an "AI cost" at all; it's the cost of trusting an unreviewed draft with money on the line. It's also the weakest number in this post — I estimated it from a rough sense of what a gig or rental is worth to me, not from actual data. At €75 it halves; if a bad quote costs me a full private event instead of a small rental, it could triple. Before trusting this unsupervised, I'd want a few months of AI drafts logged next to what I'd actually have sent, to see how often I'd catch myself correcting it. The broader lesson: the token bill almost never decides whether a small operation should automate something. The error cost does.

**The Question:** At what point does adding a manual review step cost me more in delay — a slow reply loses bookings too — than it saves in avoided mistakes?

*AI helped draft and check the cost calculations in this post.*
