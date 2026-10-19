# Week 6 Checklist Worksheet: Cost Projection (due Friday 23:59, Canvas)

Beat: AI in M&A Valuation
Prices: AI Pricing Reference, snapshot 7 September 2026, $1 = €0.92. Check the snapshot date on the course page before you submit.

Three pieces of evidence are due. Evidence 2 is finished below. Evidence 1 and 3 need numbers only you can produce (your own API key, your own Week 2 measurement).

## Evidence 1: Your API response with the usage object visible, and your per-call cost

What you do (about 20 minutes, free with Google AI Studio):
1. aistudio.google.com, sign in, "Get API Key", create a key. Do not paste the key into any chat or document, and hide it in your screenshot.
2. hoppscotch.io: method GET, URL `https://generativelanguage.googleapis.com/v1beta/models?key=YOUR_KEY`. Find a Flash or Flash-Lite model ID in the answer. Use your own ID, not the one printed on the course page.
3. Change the method to POST, URL `https://generativelanguage.googleapis.com/v1beta/models/YOUR_MODEL_ID:generateContent?key=YOUR_KEY`, header `Content-Type: application/json`, body:
```
{ "contents": [{ "parts": [{ "text": "PASTE ONE REAL PEER-SCREEN TEST INPUT HERE" }] }] }
```
4. Screenshot the response with the `usageMetadata` block visible (`promptTokenCount`, `candidatesTokenCount`, `totalTokenCount`). Hide the key.

Write down:

| Field | Your value |
|---|---|
| Model ID (from your list) | [gemini-flash.3.8] |
| Date and time of call | [19.10.26 / 1pm] |
| Input tokens (promptTokenCount) | 22 |
| Output tokens visible (candidatesTokenCount) | 27 |
| Total tokens (totalTokenCount) | 486 |
| Hidden tokens (total − input − output; look for `thoughtsTokenCount` in your full response) | 437 (implied) |
| Input price per 1M tokens (Pricing Reference, Google Flash-Lite class, snapshot 7 Sep 2026) | $0.25 (check this matches your model) |
| Output price per 1M tokens | $1.50 (check this matches your model) |

Per-call cost:
- Input cost = (22 ÷ 1,000,000) × $0.25 = $0.0000055
- Output cost, visible tokens only = (27 ÷ 1,000,000) × $1.50 = $0.0000405
- Total with the course formula (visible tokens) = $0.000046
- Output cost incl. hidden tokens = (464 ÷ 1,000,000) × $1.50 = $0.000696
- Total incl. hidden tokens = $0.0007015 (€0.00065), about 15× the course-formula figure

Why it matters: your total (486) is far above input + output (49). The difference is the model's hidden reasoning ("thinking") tokens, which providers bill at the output price. The course formula only uses the visible output, so it would understate this call by about 15×. Say which figure you use, and why. The free tier means you did not pay, but the model is costed at list price.

Check in your full response whether the field `thoughtsTokenCount` appears next to `totalTokenCount`; that confirms the 437. Also fill in the model ID and the date/time of your call from your own response and models list.

Check: the course example (28 in, 25 out, Budget $0.20/$1.20) gives $0.0000056 + $0.000030 = $0.0000356.

If you cannot make the call, the course allows Path C (mock response), but then Evidence 1 is the course's sample, not your own. Say so in the submission.

## Evidence 2: Beat cost model (finished, based on my estimates, to be replaced by your measured tokens)

Use case: AI peer screen inside a valuation platform for advisory boutiques. One call checks a target against 20 candidates and returns Comparable / Not comparable / Unclear with a one-line reason.

| Item | Value | Status |
|---|---|---|
| Input tokens per call | 2,850 (600 instructions + 250 target + 20 × 100 candidates) | Estimate, replace with Evidence 1/Build |
| Output tokens per call | 1,000 (20 verdicts × 50) | Estimate |
| Model and tier | Standard, `gpt-5.6-terra` | Course reference |
| Prices | $2.00 in, $12.00 out per 1M | Pricing Reference, 7 Sep 2026 |
| Unit cost | $0.0057 + $0.0120 = $0.0177 per call | Calculated |
| Screens per analyst per day | 6, on 22 working days = 132 calls/month | Assumption |
| Seat price | €150/month | Assumption (Valutico publishes none) |

Scale projection (Standard tier):

| Scale | Users | Calls/day | Daily cost | Monthly cost | Annual cost | Share of revenue |
|---|---|---|---|---|---|---|
| Prototype | 10 | 60 | $1.06 / €0.98 | €21 | €258 | 1.4% |
| Small | 100 | 600 | $10.62 / €9.77 | €215 | €2,579 | 1.4% |
| Medium | 1,000 | 6,000 | $106.20 / €97.70 | €2,149 | €25,794 | 1.4% |
| Large | 10,000 | 60,000 | $1,062 / €977 | €21,495 | €257,939 | 1.4% |

(Daily cost × 22 working days = monthly; the post uses the same basis.)

Tier comparison at 10,000 users: Budget `gpt-5.6-luna` €2,149/month; Standard €21,495; Premium `gpt-5.6-sol` €53,737 (€644,846/year). Premium is 25× Budget per call: Budget $0.00177, Premium $0.04425.

Break point:
- Warning zone (cost = 10% of a €150 seat): 42 screens/analyst/day on Standard, 17 on Premium.
- Cost = revenue: 419/day on Standard, 167 on Premium.
- With a bulk mode of 200 candidates per call (about 20,850 in / 10,000 out, $0.16 per call): 13% of the seat at 6/day, already in the warning zone; break at about 46/day on Standard.
- Assumption the break point rests on: 20 candidates and one call per screen, a €150 seat.
- What could change it: candidates per call, output length, calls per analyst (automation), tier, a price change by the provider.

Sensitivity, hidden reasoning tokens (your first call: 437 hidden vs 27 visible; your Build call: 3,663 hidden vs 121 visible): if the screen call adds hidden tokens billed as output, the unit cost on Standard becomes $0.0237 with 500 hidden tokens (1.3×; €28,781/month at 10,000 users), $0.0417 with 2,000 (2.4×; €50,640/month) and $0.0617 with 3,663 (3.5×; €74,875/month). Use a non-thinking setting or model for simple verdicts if the provider offers one. Note the 3,663 was measured on a 6-candidate call; I do not know how it scales to 20 candidates, so treat the 20-candidate figure as a scenario, not a measurement.

Weakest numbers: seat price, 6 screens a day, token estimates (until replaced by your Build measurements), and all the human-time figures in Evidence 3.

## Evidence 3: Your Build costed from your own API call

| Item | Your value |
|---|---|
| Input tokens per run (own call, own test input) | 258 (promptTokenCount) |
| Output tokens per run | 121 visible + 3,663 hidden (thoughtsTokenCount) = 3,784 billed; total 4,042 |
| Cost per run at your tier | Model: gemini-3.8-flash. Check its price in the Pricing Reference and recompute. At Flash-Lite prices ($0.25 in / $1.50 out): $0.000246 on visible tokens, $0.0057405 including hidden tokens (about 23×; €0.0053). Formula: (258 ÷ 1M) × input price + (3,784 ÷ 1M) × output price |
| Realistic monthly volume, and why that number | 660 runs a month: a boutique team of 10 analysts × 3 screens a day × 22 working days (assumption: [confirm or change]). Each run screens 6 candidates, as in my Build test |
| Monthly token cost | 660 × $0.0057405 = $3.79 ≈ €3.49 (at Flash-Lite prices; redo with the real price of gemini-3.8-flash) |
| Your measured error rate (Week 2) | Build test, 19 Oct 2026: 1 of 6 verdicts (17%) differed from my answer key on one test case (ASML as target): Carl Zeiss SMT came back Not comparable, my key said Unclear. If you accept Not comparable as correct, the rate is 0 of 6. Replace with your Week 2 rate if you have one |
| Who fixes an error here? | The analyst who reads the peer list and corrects the verdict |
| Cost per error | One wrong verdict: 5 minutes to read, check and correct × €60/hour = €5 (assumption, weak) |
| Monthly error cost | 660 runs × 6 candidates = 3,960 verdicts; 17% wrong = 660 errors; 660 × €5 = €3,300 |
| Error cost ÷ token cost | €3,300 ÷ €3.49 ≈ 950× |

The error rate above comes from one test case with 6 candidates, so it is my weakest number: with so few inputs the rate could easily be 0% or 33%. Say that in the submission. The course says it clearly: say what you measured and on how many inputs, and treat anything you assumed as your weakest number.

## Check Your Understanding (short answers)

Activity 1:
- Token usage is in the response's `usage` (OpenAI) or `usageMetadata` (Google) block.
- Input tokens are what you send, output tokens what the AI writes. Output is usually priced several times higher (here 6×).
- $0.0000356 × 100,000 × 30 = $106.80 per month.
- The startup's costs rose faster than its users because calls per user, prompt length, output length and model tier all grew at once.

Activity 2:
- The four layers: unit, daily, monthly, annual cost.
- Monthly cost is what appears on the invoice and in the budget; per-call cost hides scale.
- Hidden multipliers: prompt length inflation, output length creep, more calls per user, model upgrades.
- $0.005 × 50,000 × 30 × 12 = $90,000 a year.

Activity 3:
- The unit economics break point is the scale or usage level at which serving a user costs more than the user pays.
- The cheapest tier can be the most expensive system when errors need human fixing.
- Ways to push it out: cache and limit calls, shorten prompts and outputs, reduce error rate, route by difficulty, raise revenue per user.
- Revenue €10 and cost €12 per user: the break point is already behind you, every user loses €2.

## Before you submit
1. Make the API call and fill Evidence 1.
2. Replace my token estimates in Evidence 2 and in the post with your own numbers.
3. Fill the Build table with your Week 2 error rate.
4. Read the Week 6 rubric (linked on the course page, not accessible to me).
5. Check the post's AI disclosure and make sure it is true for you.
