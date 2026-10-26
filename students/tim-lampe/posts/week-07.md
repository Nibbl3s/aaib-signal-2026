---
week: 7
title: "A Peer Screen on Two Providers: What It Costs to Leave"
author: "Tim Lampe"
beat: "AI in M&A Valuation"
skill: "Lock-in detection"
date: 2026-10-26
---

# A Peer Screen on Two Providers: What It Costs to Leave

## Hook

Valuation platforms sell AI peer selection as a feature. Few ask what happens when the model underneath is retired or repriced. The peer list sits under every multiple, so the answer matters.

## The Use Case

I modelled an AI peer screen inside a valuation platform for advisory boutiques. A target and six candidates go in; each candidate comes back as Comparable, Not comparable or Unclear, with a one-line reason. My Build runs on Google's Gemini API (`gemini-3.8-flash`). To test the exit, I ran the same prompt on Groq (`openai/gpt-oss-120b`) and on Llama 3.2 3B on my own laptop. Google and Groq gave the same six verdicts on my first case; Groq and Llama then ran 12 cases twice. Google was not run on all 12.

## The Decision

Build, buy or connect? A boutique's edge is the judgement about which peers hold up in front of a client, not the model call, and the model call is a commodity. So: buy. But models and prices change within 12 months, so buy the model and own the wiring: one function holds provider, URL, model ID and prompt, and every raw answer is saved with its token usage.

## The Lock-In Scorecard

| Dimension | Gemini API | Groq | Llama (local) |
|---|---|---|---|
| Data portability | 1 | 0 | 0 |
| API stability | 2 | 2 | 0 |
| Pricing control | 2 | 2 | 0 |
| Feature dependency | 1 | 0 | 0 |
| Migration cost | 1 | 1 | 1 |
| **Total (of 15)** | **7, moderate** | **5, moderate** | **1, low** |

The highest cloud risk is API stability. Google lists shutdown dates but no notice period in days; `gemini-2.0-flash` closed on 1 June 2026. Groq retired `llama-3.3-70b-versatile` on 16 August after an email on 17 June. I found no price-change notice period for Groq, so that score is provisional.

## The Migration Path

If Google tripled its price tomorrow, my 660-run month would rise from about €3.49 to about €10.46 at a stand-in price. The bill is not the cost; the work is. Moving to Groq meant changing the URL, the header, the request body and the response parsing. The prompt did not change. I estimate one hour to switch and three more to re-test; with a parallel month and a briefing for ten analysts, leaving costs about €519 at €48 an hour (Belgian average, Eurostat 2024). That is roughly six years of the price increase, so only a retirement or falling quality would make me go.

The re-test shows what leaving to each place costs. Groq got 138 of 144 verdicts right (96%) for about €0.35 a month. Llama got 114 of 144 (79%) for nothing per call, with the data staying on my machine. They failed differently. All six Groq misses were "Not comparable" where my key says Unclear. Llama changed its verdicts between identical runs in 10 of 12 cases and made every error type, including 9 false "Comparable" calls. A wrong peer inside the multiple is the costly error, so the local model is a spare, not a replacement.

## The Insight

Lock-in in this beat sits in the wiring, not the logo. Most boutiques will buy a platform that hides the model, the notice period and the export format, so they cannot score it. Ask any vendor in writing: how do I export my data, how many days' notice before a model is retired, how many before a price changes? The vendors who answer are worth a premium.

*AI disclosure: I ran the API calls myself; Claude helped research the vendor terms, do the arithmetic and draft the text, and I checked the scores and numbers. [Adjust to what is true for you.]*
