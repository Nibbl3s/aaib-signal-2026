# Week 6 — Cost projection: what my inquiry extractor costs, measured

**Thor Tack** · Beat: AI Cost Decisions for a One-Person DJ & Events Business

**Everything below can be recomputed.** The raw API responses are in [`api/`](api/), the arithmetic is in [`cost_model.py`](cost_model.py) and its output is [`cost-tables.md`](cost-tables.md). Change a price or an assumption in the script, run it again, and every table updates. No number in this file was typed in by hand.

---

## 1. My first API call (Activity 1)

**How:** a small Python script ([`api_call.py`](api_call.py)) that calls the Gemini API directly (`generativelanguage.googleapis.com/v1beta`). I used a script rather than Hoppscotch so my key never sits in a browser tab or a file. The script asks for it hidden and doesn't save it.
**Key:** Google AI Studio, free tier, created 26 Oct 2026.
**Model ID:** taken from my own models list (step 1 of the lab), not from the week page. The list had 46 models on 26 Oct 2026: [`api/models.txt`](api/models.txt). I picked `gemini-3.1-flash-lite`, the cheapest current Flash-Lite.

**Request:** the course lab prompt, *"Write a one-sentence customer support response to a customer asking about our 30-day return policy."*
**Sent:** 26 Oct 2026, 20:03 CET · **Response:** *"You may return any item within 30 days of purchase for a full refund, provided it is in its original condition."*

**The usage object, verbatim** ([`api/lab-call.json`](api/lab-call.json)):

```json
"usageMetadata": {
  "promptTokenCount": 23,
  "candidatesTokenCount": 25,
  "totalTokenCount": 48,
  "promptTokensDetails": [{ "modality": "TEXT", "tokenCount": 23 }],
  "serviceTier": "standard"
}
```

**Per-call cost** at `gemini-3.1-flash-lite`, $0.25 input / $1.50 output per 1M tokens (AI Studio model card, read 26 Oct 2026; same as the course AI Pricing Reference of 7 Sep 2026):

```
Input  = 23 ÷ 1,000,000 × $0.25 = $0.0000058
Output = 25 ÷ 1,000,000 × $1.50 = $0.0000375
Total                           = $0.0000433 per call
```

Output was 87% of the cost from 52% of the tokens, the same pattern as the week page example.

**What the usage object doesn't show:** this call took **19.8 seconds**. Around 20:00 that evening, **5 of my 8 generate calls got HTTP 503** ("This model is currently experiencing high demand"). One test input (T12) never got through, even after three retries. The usage object prices the calls that succeed. It says nothing about the ones that don't.

---

## 2. Prices used, with sources and dates

| Price | Value ($ per 1M tokens, in / out) | Source, date accessed |
|---|---|---|
| `gemini-3.1-flash-lite` (the model I measured) | $0.25 / $1.50 | AI Studio model card, 26 Oct 2026 |
| Course Budget tier | $0.20 / $1.20 | AI Pricing Reference, snapshot 7 Sep 2026 |
| Course Standard tier | $2.00 / $12.00 | same |
| Course Premium tier | $5.00 / $30.00 (regular, not the Sol promo) | same |
| Exchange rate, days per month | $1 = €0.92, 30 days | course convention |

**What had moved by 26 Oct (seven weeks after the course snapshot), from the AI Studio model picker:**

- `gemini-3-flash-preview` ($0.50 / $3.00) is now marked **Paid**. The course reference lists it as free tier.
- `gemini-3.8-flash`: $0.75 / $3.75 *"through December 31, 2026"*. A dated promo, so a cost model built on it expires in two months.
- `gemini-4-argon`: $2.00 / $10.00 *"through November 30, 2026"*, released 13 Oct 2026.
- `gemini-3.5-flash-lite`: $0.30 / $2.50, card says released 21 Jul 2026. The course reference (7 Sep) says this ID "matches nothing live". It is in **my own** models list on 26 Oct, and so is `gemini-3.6-flash`. Either they went live after 7 Sep, or the pricing page lagged the API. In both cases, a price list that is seven weeks old is already wrong in places.

---

## 3. My Build, costed from my own calls

**What I ran:** prompt v1 ([`../build/prompt.md`](../build/prompt.md)) as the system instruction, with one real test input as the message. Same model, same day.

| Input | Input tokens | Output tokens | Latency | Cost per run |
|---|---:|---:|---:|---:|
| T03 (typical form answer, 373 characters) | 644 | 151 | 0.96 s | $0.0003875 |
| T09 (longest input, 1,439 characters) | 949 | 157 | 13.04 s | $0.0004727 |
| T12 (shortest, 200 characters) | — | — | — | 503 three times, not measured |
| **Average of the 2 measured runs** | **796** | **154** | | **$0.0004301** |

Usage objects verbatim: [`api/build-T03.json`](api/build-T03.json), [`api/build-T09.json`](api/build-T09.json). Neither run used thinking tokens (no `thoughtsTokenCount`).

**Two things I only see because I measured:**

1. **Output barely moves (151 vs 157).** My prompt forces a fixed JSON with 10 fields, so the expensive tokens are capped by the schema, not by how much the client writes. A four-times-longer message only added 6 output tokens.
2. **Most of the input is me, not the client.** T09's message is 1,066 characters longer than T03's and cost 305 more tokens (≈ 3.5 characters per token). At that rate T03's 373-character message is about 107 tokens, so the other **≈ 540 tokens of every call are my prompt v1**, about two-thirds of the average input. *(Derived estimate, not measured separately.)* At my volume that's irrelevant. At platform scale it's what caching (week page, hidden cost 2) would be for.

**Monthly cost at my real volume:**

| Line | Value | Where it comes from |
|---|---|---|
| Realistic volume | **2.9 inquiries/month** | 0.9/month measured (13 form + mail inquiries in 15 months) + 2/month estimated via Instagram/WhatsApp/phone (Week 4 business case) |
| Monthly token cost | 2.9 × $0.0004301 × 0.92 = **€0.0011** | measured unit cost |
| My measured error rate | **50%** fully correct on 15 inputs × 2 runs (n = 30) | Week 2, Run 1, 1 Oct 2026, **Claude Haiku 4.5** |
| Dangerous error rate | 4/30 = **13%**: "gear on site" when I have to bring my own decks (T06, T09) | same run |
| Who fixes an error? | **Me.** Nobody else reads my inquiries | |
| Cost per ordinary error | **€2.50**: I re-read the inquiry myself (7.5 min × €20/h), so the saving is gone | Week 4 business case |
| Cost per gear error, unchecked | **€300**: I turn up without decks, lose the fee of a gig plus reputation | Week 4 business case, est. |
| Monthly error cost | 2.9 × 50% × €2.50 = **€3.62**, plus gear: **€116** unchecked, or **€0.97** if I always check the gear field (1 min) | |
| **Error cost ÷ token cost** | **4,001×** with the gear check · **104,242×** without | |

**The weak link, stated plainly:** the token counts are Gemini's (26 Oct) but the error rate is Haiku's (1 Oct). I only have two Gemini outputs to compare:

- **T03:** all 10 fields correct.
- **T09:** 9 of 10 correct. `dj_gear` = `unknown` and `missing_for_quote` = `["dj_gear"]`, where I expected `dj_brings`. By my scoring rule that's a fail, **but it's the safe fail**: it tells me to ask about the decks. Haiku said `on_site` in both runs on this exact input, which is the €300 failure.

Two inputs can't replace a 50% measured on 30 outputs. That comparison is the Week 7 "second model" run.

**The costs that aren't tokens (Layer 5), per year, for my own use:**

| Cost | €/year | How |
|---|---:|---|
| Tokens | €0.01 | 12 × €0.0011 |
| Ordinary error remediation | €43 | 12 × €3.62 |
| Gear check, 1 min per inquiry | €12 | 12 × €0.97 |
| Prompt writing and testing (one-off, Year 1) | €80 | 4 h × €20 (Week 4) |
| **Total Year 1** | **≈ €135** | against at most €87.50/year of time saved (Week 4) |

The token line is **0.01%** of the total. Even a 100× price increase wouldn't change my decision. A worse error rate would.

---

## 4. The curve and the tier comparison (Activities 2–3, my own numbers)

**Per run, on my measured 796 in / 154 out tokens:**

| Tier | $ in / out per 1M | Cost per run | × Budget |
|---|---|---:|---:|
| Budget | $0.20 / $1.20 | $0.0003441 | 1× |
| Standard | $2.00 / $12.00 | $0.0034 | 10× |
| Premium | $5.00 / $30.00 | $0.0086 | 25× |
| Measured (`gemini-3.1-flash-lite`) | $0.25 / $1.50 | $0.0004301 | 1.2× |

*Assumption: the same token counts on every tier. Other providers' tokenizers would count my Dutch text differently, which is exactly what a two-provider run would show.*

**The curve, from my measured unit cost:**

| Scale | Calls/day | Daily | Monthly (×30) | Annual (×12) | Monthly at Standard | Monthly at Premium |
|---|---:|---:|---:|---:|---:|---:|
| Prototype | 10 | $0.0043 | $0.13 | $1.55 | $1.03 | $2.58 |
| Beta | 100 | $0.043 | $1.29 | $15.48 | $10.32 | $25.81 |
| Launch | 1,000 | $0.43 | $12.90 | $154.84 | $103.23 | $258.07 |
| Growth | 10,000 | $4.30 | $129.04 | $1,548.45 | $1,032.30 | $2,580.75 |
| Scale | 100,000 | $43.01 | $1,290.38 | $15,484.50 | $10,323.00 | $25,807.50 |

**My year-one row is not on this table:** 2.9 inquiries a month is about 0.1 calls a day, a hundred times below "Prototype". For one DJ, scale isn't the question. It only becomes one if the extractor is a product that many DJs use, so that's my beat use case.

---

## 5. Beat cost model: AI inquiry intake inside DJ booking software (Activity 4)

**Use case:** DJ booking software (think Check Cherry, the DJ CRM) adds the feature I built: every inquiry that comes in by form or mail is read by AI, which fills in the booking fields and lists what the DJ still has to ask before quoting.
**Who uses it:** DJs and small DJ companies that pay for the software.
**How often:** **1 call per DJ per day.** That's a busy DJ business (≈ 30 inquiry messages a month, follow-ups included). My own rate is 0.1/day. This number is an assumption, which is why the break point below is stated in calls per DJ per day.
**Revenue per DJ:** **$29/month**, Check Cherry's Standard plan ([checkcherry.com/pricing](https://www.checkcherry.com/pricing), read 26 Oct 2026). The same page also says "Plans from $39/month". I use the lower figure because it gives the harsher break point.
**Who pays an error here?** Not the software company. The DJ reads the result and either re-runs it or fixes it. For the vendor an error costs **one more call**, so calls are ×1.5 at my 50% measured error rate.

**Scale projection at Standard tier** (a vendor selling to paying customers would not ship the cheapest model):

| Scale | DJs | Calls/day (incl. re-runs) | Daily | Monthly | Annual |
|---|---:|---:|---:|---:|---:|
| Prototype | 10 | 15 | $0.05 | $1.55 | $18.58 |
| Small | 100 | 150 | $0.52 | $15.48 | $185.81 |
| Medium | 1,000 | 1,500 | $5.16 | $154.84 | $1,858.14 |
| Large | 10,000 | 15,000 | $51.62 | $1,548.45 | $18,581.40 |

At 10,000 DJs that is $1,548/month (€1,425) against $290,000/month in subscriptions: **0.5% of revenue**.

**Break point:** hold revenue at $29/DJ/month and raise calls per DJ per day until AI cost equals revenue.

| Tier | AI cost per DJ/month at 1 call/day | Warning zone (AI = 10% of revenue) | **Break point (AI = revenue)** |
|---|---:|---:|---:|
| Budget | $0.0155 | 187 calls/DJ/day | **1,873 calls/DJ/day** |
| Standard | $0.15 | 19 calls/DJ/day | **187 calls/DJ/day** |
| Premium | $0.39 | 7 calls/DJ/day | **75 calls/DJ/day** |

**The break point, stated:** on Premium, the inquiry feature eats 10% of a $29 subscription at **7 inquiries per DJ per day** and all of it at **75**. On Standard it's **19 and 187**. **The assumption it rests on:** each inquiry is one call of about 800 tokens in and 150 out, plus re-runs at a 50% error rate, and the whole $29 is counted as revenue for this one feature.

No DJ answers 75 inquiries a day, so **tokens never break this product.** What could move the break point toward you:

- **Prompt growth.** Fixing my errors probably means adding examples to the prompt, and 540 tokens of instructions could easily double. Input tokens would roughly double, but output stays capped by the JSON.
- **Promo expiry.** Two of the Gemini prices I read today end on 30 Nov and 31 Dec 2026.
- **Reliability rather than price.** 5 of 8 calls failed on the free tier tonight. A product can't ship on that. Paying for a higher tier or a second provider is a cost that appears on no per-token table. That's next week's lock-in question.

---

## 6. What this changes

The unit economics that break are **not the vendor's but the DJ's.** The software company pays fractions of a cent per inquiry and keeps 99% of the subscription. The DJ pays for every wrong `dj_gear` in time, or, if they trust the tool, in a gig without decks. In my Build that is **€116/month of expected gear-failure cost on €0.0011/month of tokens**. A cost model that only prices tokens would tell a DJ-software company this feature is free. A cost model that asks "who pays the error?" tells a DJ it's only safe with the gear field checked by hand.

---

*AI use: Claude wrote the two scripts (API call and cost model), ran the cost model, compared the two Gemini outputs with my expected answers and drafted this write-up. I created the API key and entered it in the script myself; Claude never saw it. The volumes, error costs and expected answers are mine (Weeks 2 and 4). The choice of use case and the revenue benchmark were drafted by AI and checked by me.*
