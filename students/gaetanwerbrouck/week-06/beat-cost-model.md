# Week 6 Lab — Beat Cost Model, Tier Comparison and Break Point

**Beat:** How Football Clubs Use Data to Find Undervalued Players
**Prices:** AI Pricing Reference, snapshot 7 September 2026 (read 26 October 2026). Conversion: $1 = €0.92.
**Status of the numbers:** Prices are from the reference. Token counts, volumes, seat price and error rates are **my assumptions** and are labelled as such. The only measured token figures I have are in `api-call-lab.md` and `build-cost.md`.

---

## Step 1 — The use case

**What the AI does:** An AI scouting report writer, sold as an add-on to a player-discovery tool like my ScoutLab Build. The scout picks a candidate; the AI reads the player's position-relative stat profile, the dated market value and the scout's match notes, then writes a one-page structured report: strengths, weaknesses, data gaps, and whether the performance-vs-value gap justifies sending someone to watch him live.

**Who uses it:** Scouts and recruitment analysts at clubs, academies and agencies. A Belgian Pro League club might have 3–8 users; a big club's recruitment department, 20–40.

**How often:** 15 reports per user per day in a normal week (assumption). In the transfer window, power users go to 60/day (assumption).

## Step 2 — Token estimate

| | Tokens | Basis |
|---|---:|---|
| Input per call | 1,800 | ~600 instructions and rubric + ~700 stat profile and value data + ~500 scout notes (est.) |
| Output per call | 700 | One-page structured report (est.) |

## Step 3 — Model tier and pricing

**Chosen tier: Standard (`gpt-5.6-terra`): $2.00 / 1M input, $12.00 / 1M output.**
Why: the report has to interpret percentiles correctly and must not invent context. A scout who catches the AI inventing one statistic stops trusting every report. The budget tier is in the comparison below as the routing option.

---

## Tier comparison for my use case (Activity 3 lab)

### Per-call cost (1,800 in / 700 out)

| Attribute | Budget | Google equivalent | Standard | Premium | Local (self-hosted) |
|---|---|---|---|---|---|
| Model | gpt-5.6-luna | gemini-3.1-flash-lite | gpt-5.6-terra | gpt-5.6-sol | e.g. Llama 3.2 3B |
| Input / 1M | $0.20 | $0.25 | $2.00 | $5.00 | €0 per call |
| Output / 1M | $1.20 | $1.50 | $12.00 | $30.00 | €0 per call |
| Input cost/call | $0.00036 | $0.00045 | $0.0036 | $0.009 | — |
| Output cost/call | $0.00084 | $0.00105 | $0.0084 | $0.021 | — |
| **Total/call** | **$0.0012** | **$0.0015** | **$0.012** | **$0.030** | €0, but hardware, power and my time are not free |
| Latency | 0.5–1 s | — | 1–3 s | 5–15 s | *to measure in Week 7* |
| Quality for this task | *to test* | *to test* | *to test* | *to test* | *to measure in Week 7* |
| Best for | *Week 7* | | | | *Week 7* |

The Local column is left blank on purpose. That is the Week 7 bridge task.

Budget → Premium is **25×** per report. Same prompt, same report length.

### Monthly token cost at 1,000 users × 15 reports/day = 15,000 reports/day (450,000/month)

| Tier | Token cost/month | In EUR |
|---|---:|---:|
| Budget | $540 | €497 |
| Google Flash-Lite | $675 | €621 |
| Standard | $5,400 | €4,968 |
| Premium | $13,500 | €12,420 |

### Adding the error cost: who pays?

A wrong report (a misread percentile, a wrong age or value, an invented strength) costs the **club** about 10 minutes of a scout re-checking FBref/Transfermarkt and rewriting the conclusion: 10 min × €40/h = **€6.67 per error**. I use €40/h for consistency with my Week 4 memo.

I have **no measured error rate for report writing**. My ScoutLab evaluation (15/15 passed) measured the deterministic tool, not generated text. So the rates below borrow the course's illustrative 30% / 15% / 5% tier rates purely to show the shape of the result.

| Tier | Token cost (EUR) | Assumed error rate | Wrong reports/month | Error cost (€6.67) | Total monthly cost to clubs |
|---|---:|---:|---:|---:|---:|
| Budget | €497 | 30% | 135,000 | €900,000 | €900,497 |
| Standard | €4,968 | 15% | 67,500 | €450,000 | €454,968 |
| Premium | €12,420 | 5% | 22,500 | €150,000 | €162,420 |

Even on Premium, tokens are under 8% of the total. In scouting the expensive part is the scout's time, not the model. **The vendor doesn't pay this error cost, the club does**, and the club pays by cancelling the subscription.

---

## Step 4 — Cost projection (Standard tier, 15 reports/user/day)

| Scale | Users | Calls/user/day | Total calls/day | Unit cost | Daily cost | Monthly cost | Annual cost |
|---|---:|---:|---:|---:|---:|---:|---:|
| Prototype | 10 | 15 | 150 | $0.012 | $1.80 | $54 | $648 |
| Small | 100 | 15 | 1,500 | $0.012 | $18.00 | $540 | $6,480 |
| Medium | 1,000 | 15 | 15,000 | $0.012 | $180.00 | $5,400 | $64,800 |
| Large | 10,000 | 15 | 150,000 | $0.012 | $1,800.00 | $54,000 | $648,000 |

In EUR: €50 / €497 / €4,968 / €49,680 per month.

---

## Step 5 — Break point

**Revenue assumption:** €39 per user per month for the AI report add-on (my assumption, not a quoted market price).

**Cost per user per month, including regeneration.** When a report is wrong, a scout who doesn't fix it by hand clicks "regenerate", which adds one more paid call. I use the same uplift as the lesson: Budget ×1.30, Standard ×1.15, Premium ×1.05.

| Tier | Cost/user at 15/day | at 60/day (transfer window) | Margin at 60/day | Warning zone (cost = 10% of revenue) | Break point (cost = revenue) |
|---|---:|---:|---:|---:|---:|
| Budget | €0.65 | €2.58 | €36.42 ✓ | ~91 reports/user/day | ~906 reports/user/day |
| Standard | €5.71 | €22.85 | €16.15 ✓ | ~10 reports/user/day | ~102 reports/user/day |
| Premium | €13.04 | €52.16 | −€13.16 ✗ | ~4.5 reports/user/day | ~45 reports/user/day |

Formula: cost per user per month = reports/day × 30 × unit cost × 0.92 × regeneration factor.

**What the table shows:**

- **The number of users doesn't move the break point.** Cost and revenue both grow per seat, so 10 users and 10,000 users have the same margin percentage. That's why the Step 4 table looks scary but isn't the danger on its own.
- **The variable that does move it is reports per user per day.** On Standard I'm already in the warning zone at a normal 15/day (cost = 14.6% of the seat price). In the transfer window (60/day) Standard still makes money, but **Premium goes negative at about 45 reports/day**, so a transfer window plus a "let's just use the better model" upgrade breaks it.
- **Assumption that makes it work:** tiered routing. If Budget writes the first-pass reports and Standard only writes reports for players who reach the shortlist (an 80/20 split), the blended cost is $0.00336 per report, **72% cheaper** than all-Standard. With a blended regeneration factor of 1.27 (0.8 × 1.30 + 0.2 × 1.15), that pushes the break point from ~102 out to ~330 reports/user/day.
- **Assumption that makes it fail:** a flat seat price with unlimited reports, Premium as the default model, and a January window. Also any price change. This model is a reading on 26 October 2026 with prices from 7 September 2026; it has to be re-run when either changes.

## Check your understanding (Activity 3)

1. **Unit economics break point:** the usage level at which the cost of serving one user exceeds what that user pays.
2. **Why the cheapest tier can be the most expensive system:** a higher error rate creates human correction work that costs far more than the tokens saved (€900k vs €162k per month in my table).
3. **Three ways to push it out:** tiered routing (Budget for first pass, Standard for the shortlist); caching (don't re-write a report for a player whose data hasn't changed since last week); usage-based pricing or a fair-use cap for transfer-window power users. Also: shorter reports, better prompts that lower the error rate.
4. **Revenue €10, cost €12:** it's already broken, at every scale, from the first user. More users just lose more money. The break point is in usage per user (here at 10/12 = 83% of current usage), so the fix is lower cost per user or higher price, not growth.
