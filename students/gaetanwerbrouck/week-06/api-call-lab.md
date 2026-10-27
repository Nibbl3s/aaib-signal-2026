# Week 6 — First API Call Lab and Cost Projection Framework

**Beat:** How Football Clubs Use Data to Find Undervalued Players
**Prices used:** AI Pricing Reference, snapshot 7 September 2026. Conversion: $1 = €0.92.

---

## Activity 1 — My first API call

**Provider:** Google AI Studio (Gemini API, free tier)
**Tool:** Hoppscotch (hoppscotch.io)
**Model:** `gemini-3.1-flash-lite`, taken from my own `GET /v1beta/models` list (confirmed by `modelVersion` in the response)

**Request:** `POST https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=…`

```json
{
  "contents": [{
    "parts": [{
      "text": "Write a one-sentence customer support response to a customer asking about our 30-day return policy."
    }]
  }]
}
```

**My full response** (the `thoughtSignature` string is shortened):

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "You may return your item for a full refund within 30 days of purchase, provided it is in its original condition and packaging.",
            "thoughtSignature": "EnMKcQFpFH0T5UjXv4KD…"
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP",
      "index": 0
    }
  ],
  "usageMetadata": {
    "promptTokenCount": 22,
    "candidatesTokenCount": 27,
    "totalTokenCount": 49,
    "promptTokensDetails": [
      { "modality": "TEXT", "tokenCount": 22 }
    ],
    "serviceTier": "standard"
  },
  "modelVersion": "gemini-3.1-flash-lite",
  "responseId": "rxHfaptG2qKewQ-4vMnZBQ"
}
```

The response contains a `thoughtSignature`, but `usageMetadata` has no `thoughtsTokenCount`, and 22 + 27 = 49 equals `totalTokenCount`. So no hidden reasoning tokens were billed on top of the 27 output tokens.

*(Full response copied from Hoppscotch, as returned.)*

| My numbers | |
|---|---:|
| Input tokens | 22 |
| Output tokens | 27 |
| Total tokens | 49 |

### Cost of my one call

Google Flash-Lite pricing: $0.25 per 1M input tokens, $1.50 per 1M output tokens.

```
Input cost  = (22 ÷ 1,000,000) × $0.25 = $0.0000055
Output cost = (27 ÷ 1,000,000) × $1.50 = $0.0000405
Total cost  =                            $0.000046
```

**Cost of one call: $0.000046** (about 0.0046 cents). Because I used the free tier, Google actually charged me $0. This is what the call would cost on the paid tier.

Output is 88% of the cost ($0.0000405 of $0.000046), even though there were only five more output tokens than input tokens. Output tokens cost six times more per token, so they dominate the bill.

### The scale shock, with my own call

| Scale | Calls/day | Cost/call | Daily cost | Monthly cost (30 days) |
|---|---:|---:|---:|---:|
| Prototype | 10 | $0.000046 | $0.00046 | $0.014 |
| Beta | 100 | $0.000046 | $0.0046 | $0.14 |
| Launch | 1,000 | $0.000046 | $0.046 | $1.38 |
| Growth | 10,000 | $0.000046 | $0.46 | $13.80 |
| Scale | 100,000 | $0.000046 | $4.60 | $138.00 |
| Hyper-scale | 1,000,000 | $0.000046 | $46.00 | $1,380.00 |

These numbers assume every call stays at 22 input and 27 output tokens. A one-sentence answer is the smallest workload there is, so a real product's calls will be much bigger.

### Check your understanding (Activity 1)

1. **Where do you find token usage?** In the `usageMetadata` object of the Gemini response (`promptTokenCount`, `candidatesTokenCount`, `totalTokenCount`). For OpenAI it is the `usage` object.
2. **Prompt vs completion tokens:** Prompt (input) tokens are what I send in; completion (output) tokens are what the model generates. Output is priced higher: 6× for Flash-Lite ($1.50 vs $0.25), so output usually dominates the cost.
3. **$0.0000356 × 100,000 calls/day:** $3.56/day × 30 = **$106.80/month**.
4. **Why did the startup's costs grow faster than its users?** Cost per user was not constant. Prompts got longer, outputs got longer, power users made more calls each, and the team moved to a better model while the provider raised prices. Each factor multiplied the cost per call or the calls per user, so cost grew faster than user count.

---

## Activity 2 — Cost Projection Framework applied to my beat

### Layer 1: Unit cost

| Field | Value |
|---|---|
| Use case | **AI scouting report writer.** A scout or analyst selects a candidate player; the AI reads the player's position-relative stat profile (ScoutLab-style percentiles), the dated market value, and the scout's own match notes, then writes a one-page structured report: strengths, weaknesses, data gaps, and whether the performance-vs-value gap justifies a live viewing. |
| Average input tokens/call | 1,800 (est.): ~600 system instructions and report rubric + ~700 stat profile and value data + ~500 scout notes |
| Average output tokens/call | 700 (est.): one-page structured report |
| Model/tier | Standard: `gpt-5.6-terra` |
| Input price | $2.00 per 1M tokens (snapshot 7 Sep 2026) |
| Output price | $12.00 per 1M tokens (snapshot 7 Sep 2026) |

```
Input cost  = (1,800 ÷ 1,000,000) × $2.00  = $0.0036
Output cost = (700 ÷ 1,000,000)   × $12.00 = $0.0084
Unit cost   =                              $0.012 per report
```

Output is 70% of the unit cost. Shorter reports would cut cost faster than a shorter prompt would.

The token counts are **estimates**, not measurements. The measured anchor is my one Activity 1 call; the costing of my own Build prompt is in `build-cost.md`.

### Layers 2–4: My scale projection worksheet

Unit cost: $0.012 per report. Monthly = daily × 30, annual = monthly × 12.

| Scale | Calls/day | Unit cost | Daily cost | Monthly cost | Annual cost |
|---|---:|---:|---:|---:|---:|
| Prototype | 10 | $0.012 | $0.12 | $3.60 | $43.20 |
| Pilot | 100 | $0.012 | $1.20 | $36.00 | $432.00 |
| Launch | 1,000 | $0.012 | $12.00 | $360.00 | $4,320.00 |
| Growth | 10,000 | $0.012 | $120.00 | $3,600.00 | $43,200.00 |
| Scale | 100,000 | $0.012 | $1,200.00 | $36,000.00 | $432,000.00 |

### Hidden cost multipliers in scouting

| Multiplier | How it shows up in my beat |
|---|---|
| Prompt length inflation | Clubs will want more context per player: injury history, contract details, extra seasons, video-tagging notes. 1,800 input tokens can easily become 4,000. |
| Output length creep | Directors want "the full report" before a bid. 700 output tokens become 1,500. |
| Calls per user growth | The transfer window. A scout writing 15 reports a day in October can need 60 a day in late January or August. |
| Model upgrades | If the Standard model misreads percentiles or invents context, the obvious fix is Premium, which costs 2.5× more per report. |

**Three scenarios at 1,000 calls/day (Standard):**

| Scenario | Unit-cost change over 12 months | Annual cost |
|---|---|---:|
| Conservative | flat | $4,320 |
| Realistic | +50% (longer prompts and reports) | $6,480 |
| Worst case | ×2 (model upgrade + longer prompts + more calls/user) | $8,640 |

### Check your understanding (Activity 2)

1. **Four layers:** unit cost → daily cost → monthly cost → annual cost.
2. **Why monthly beats per-call for budgeting:** The per-call figure ($0.012) looks negligible and hides scale. The monthly figure is what appears on the invoice and what a CFO compares against revenue.
3. **Four hidden multipliers:** prompt inflation (more input tokens), output creep (more of the expensive output tokens), more calls per user (multiplies volume without new revenue), model upgrades (multiplies the price per token 2.5–25×).
4. **$0.005 × 50,000 calls/day:** $250/day → $7,500/month → **$90,000/year**.
