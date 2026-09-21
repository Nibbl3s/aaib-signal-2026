---
week: 1
title: "The €5 Comps Run and the €400 Check"
author: "Tim Lampe"
beat: "AI in M&A Valuation"
skill: "Cost literacy"
date: 2026-09-21
---

#  The €5 Comps Run and the €400 Check

Everyone asks what AI costs per token. For an M&A company, the better question should be the costs per verified number. I ran the math and the answer is different than what you expect.

**The Numbers**

Use case: AI-assisted comparable-company analysis for one deal. The model screens 40 candidate peers. Per peer it reads about 50,000 tokens (business description, segment note, MD&A, latest earnings call) and writes a 3,000-token summary. A final pass reads all summaries plus the target profile (100,000 tokens) and writes a 20,000-token peer-set memo.

Step 1, AI cost (Claude Sonnet 5 list price: $2 per 1M input, $10 per 1M output)
Input: 40 x 50,000 + 100,000 = 2,100,000 tokens x $2 / 1M = $4.20
Output: 40 x 3,000 + 20,000 = 140,000 tokens x $10 / 1M = $1.40
Total: $5.60 x 0.92 = EUR 5.15 per run

Step 2, the check (assumptions: EUR 60 per analyst hour, 10 minutes per peer to review and fix)
40 x 10 min = 400 min = 6.67 h x EUR 60 = EUR 400

Step 3, total and manual baseline (assumption: 45 minutes per peer without AI)
AI plus check: EUR 5.15 + EUR 400 = EUR 405.15
Manual: 40 x 45 min = 30 h x EUR 60 = EUR 1,800
Saving: EUR 1,394.85 (77.5%). The AI share of the total is 1.3%.

Step 4, worst case
Assume 95% of peers contain an error and each needs 15 extra minutes to fix:
40 x 0.95 x 0.25 h x EUR 60 = EUR 570
Total: EUR 5.15 + EUR 400 + EUR 570 = EUR 975.15, still 46% below manual.

Volume (30 days/month, 360 days/year): one run per day costs 30 x EUR 5.15 = EUR 154.56 per month, or EUR 1,854.72 per year, in model fees alone.

**The Insight**

Even at 95% errors, the AI route is 46% cheaper than doing everything by hand, because correcting the output is faster than creating it manually. The model bill is only 5.15€ --> 1,3% of the total.
The real cost driver is obviously not the AI itself but the check. Since no one knows which peers are right, all 40 need review anyway, so the €400 is due whether 5% or 95% are wrong. The break-even is about 45 minutes of review per peer.

This changes the perspective on how to read vendor prices. Valutico starts at roughly $7,000 a year per user. AlphaSense is $18,375 per year. My model feed for daily runs are €1,854.72 p.a, but the labor costs are €144,000. So where does the value come from vendors? They sell data and therefore, ideally, less checking time. If a vendor cuts my review by half, that saves €200 per peer, more than any token discount ever could.

**The Question**

If checking is the real cost what would a vendor have to prove for me to believe its data halves review time? And how could I measure that in a test next week?
