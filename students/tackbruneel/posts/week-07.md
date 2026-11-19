---
week: 7
title: "I Moved My DJ Booking AI Onto My Own Laptop. The Dangerous Error Came With It."
author: "Thor Tack"
beat: "AI Cost Decisions for a One-Person DJ & Events Business"
skill: "Lock-in detection"
date: 2026-11-19
---

**Hook:** For a one-person DJ business, lock-in doesn't look like a €400K migration. It looks like your AI quietly changing under the same name, and the job going wrong on a Saturday night. I tested how much leaving would cost me by actually leaving.

**The Use Case:** My Build reads a booking inquiry (form answer or e-mail, mostly Dutch) and returns ten fields: date, times, venue, guests, who brings the decks, plus what I still need to ask before quoting. It runs on Google's `gemini-3.1-flash-lite` with my own key, at €0.0011 a month for about 35 inquiries a year. On my 15 real test inquiries (2 runs each), the cloud model I tested in Week 2, Claude Haiku 4.5, got 15 of 30 outputs fully right.

**The Decision:** Walking the five questions: reading inquiries isn't my competitive advantage (clients book me for the night, not my e-mail parsing). Structured intake is a solved problem: my free Google booking form already collects most fields in fixed boxes. I need one capability, not several, and I can maintain one prompt but not a stack. That makes it **buy** (the form plus a price table), and if AI is added at all, a thin **connect** layer I own, never a suite.

**The Lock-In Scorecard:** I scored my own stack against Google's real terms (read 19 Nov 2026). **6/15, moderate.**
- **Data portability, 1.** My prompt, test set and outputs are plain text in my own repo. But on the free tier Google's terms say "human reviewers may read" API input and output, and I found no export or delete path for their logs.
- **API stability, 2.** Preview models get two weeks' notice; stable models get no minimum. Gemini 2.5 Flash got about 29 days, after which requests are *routed* to a different model and billed at its price.
- **Pricing control, 2.** List price, 30 days' notice on paid, nothing on free. The impact on me is tiny.
- **Feature dependency, 1.** The prompt is mine, but it assumes a frontier model (see below).
- **Migration cost, 0.** About 4 hours to move to another cloud model.

The highest risk isn't price. It's silent routing: same model name, different behaviour, and only my test set would notice.

**The Migration Path:** I ran the same prompt on the same 30 calls on Llama 3.2 3B, a 2 GB open-weights model on my own laptop, through Ollama. Cost per call: €0. Data: never left my machine. Score: **1 of 30**. But it failed differently from the cloud model. Haiku made judgment errors. Llama got the content right (dates 29/29) and broke the rules: Dutch labels instead of the allowed values, "0:00" instead of "00:00", a "what's missing" list full of fields it had filled. Once code does those three mechanical jobs, it's **12 of 30**. The thin wrapper is worth more than the model choice. And one error moved with me: both models said "the decks are on site" on the same two inquiries, in both runs. 13% on each.

**The Insight:** In my beat the vendor isn't the dangerous dependency. The step is. The token bill can triple and I won't notice; a wrong gear field costs a gig whichever model writes it. So the lock-in fix for a one-person business isn't multi-cloud. It's one function I own, a test set I re-run whenever the vendor announces a change, and a human check on the one field no model has got right yet.

*AI use: Claude installed Ollama, wrote and ran the scripts for the local runs and scoring, read the Gemini terms pages and drafted this post from my lab memo (`week-07/lab-memo.md`). The test set, expected answers and the decision are mine. I reviewed it.*
