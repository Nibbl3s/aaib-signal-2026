# Business case — first draft (Week 3, for the Week 4 clinic)

**Tool:** booking-inquiry extractor (prompt v1, see `prompt.md`).
**Question:** is it worth running this on every inquiry instead of reading the inquiries myself?

All numbers below are either **measured** (from my own data or my Run 1) or **assumed** (marked, with the reason). The assumed ones are what I want to test at the clinic.

---

## 1. Volume — how many inquiries?

| Source | Count | Period | Per month | Type |
|---|---:|---|---:|---|
| Booking form (serious answers only) | 11 | Jul 2025 – Sep 2026 (15 months) | 0.7 | measured |
| E-mail inquiries outside the form | 2 | same period | 0.1 | measured |
| WhatsApp / Instagram / phone | ? | — | ? | **not logged** |
| **Measured total** | **13** | | **≈ 0.9** | |

**Correction to my Week 1 post:** there I assumed 8 inquiries a month. Through the channels I can actually count, it's under 1 a month. Either the other channels carry most of the volume, or Week 1 overestimated by about 8×. This is the number that decides everything below, so I'll start logging WhatsApp and Instagram inquiries this week.

## 2. Value — time saved

| | Value | Type |
|---|---|---|
| Time to read an inquiry and work out what's still missing | 5–10 min | assumed (my own estimate; to time on the next 5 inquiries) |
| Value of my time | €20/hour | assumed (student self-employed; below my €60–80 DJ rate because admin time doesn't replace a gig) |
| Time saved per month at 0.9 inquiries | 4.5–9 min → **€1.50–3** | calculated |
| Time saved per month at 8 inquiries (Week 1 assumption) | 40–80 min → **€13–27** | calculated |

## 3. Cost — running the tool

| | Value | Type |
|---|---|---|
| Tokens per run | ≈ 1,000 input (prompt + inquiry) + 200 output | estimated from text length; to measure in Week 6 |
| Price | $2.00 / 1M input, $12.00 / 1M output | course AI Pricing Reference, snapshot 7 Sept 2026 (same as Week 1) |
| Cost per run | ≈ $0.0044 | calculated |
| Cost per month (0.9–8 runs) | **< €0.05** | calculated |

As in Week 1: the token cost is irrelevant.

## 4. Error cost — the number that matters

| | Value | Type |
|---|---|---|
| Inputs fully correct (Run 1) | 15/30 = **50%** | measured |
| Dangerous error: tool says "DJ gear on site" when I must bring my own (T06, T09) | 4/30 runs = **13%** | measured |
| Cost if that error reaches a real gig unchecked | ≈ €300 (lost fee of a 4-hour gig at €60–80/h, plus reputation) | assumed |
| Expected cost per month if I trust it unchecked, at 0.9 inquiries | 0.9 × 13% × €300 ≈ **€35** | calculated |
| Same at 8 inquiries/month | 8 × 13% × €300 ≈ **€312** | calculated |

## 5. Result (draft)

| Per month | 0.9 inquiries (measured) | 8 inquiries (Week 1 assumption) |
|---|---:|---:|
| Time saved | €1.50–3 | €13–27 |
| Token cost | < €0.05 | < €0.05 |
| Expected error cost if unchecked | ≈ €35 | ≈ €312 |
| **Net if unchecked** | **≈ −€32** | **≈ −€290** |

**Draft conclusion:** at a 50% success rate, running the tool unchecked loses money at any volume. If I check every output, the error cost drops to near zero, but so does the time saved, since checking means reading the inquiry anyway. So v1 has **no positive business case**. It only gets one if two things change together:
1. accuracy on the gear and time fields goes up enough that I only need to check flagged fields (the v2 changes in `log.md`), and
2. volume is higher than the 0.9/month I can count today.

**What I want to test at the Week 4 clinic:**
- Is €300 a fair cost for "showing up without gear", or should it be the full cost of a lost client?
- Should I value my admin time at €20/hour?
- Is a business case of "don't run it unchecked" a valid outcome for the Build, or should I change the job?

---

*AI use: Claude drafted this business case from my booking-form export, mails, Run 1 results and the course price snapshot. The assumptions marked "assumed" are to be confirmed by me.*
