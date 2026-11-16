# Build value model — Week 4 (Checkpoint 1)

**Tool:** booking-inquiry extractor, prompt v1 (`prompt.md`). **Measured:** 15/30 = **50%** fully correct (15 real inputs × 2 runs, Run 1, 1 Oct 2026).
**Question:** at my measured rate, is this worth using on every inquiry instead of reading inquiries myself?

*Week 3 draft → Week 4 changes:* volume updated with my own estimate for Instagram/WhatsApp/phone; laid out in the Week 4 format (human cost per job → gross at 100% and at the measured rate → failure cost → net → required rate).

---

## 1. Inputs

| Input | Value | Source |
|---|---|---|
| Human time per inquiry (read it, work out what's missing) | 7.5 min (5–10) | est. — to time on my next 5 inquiries |
| Value of my time | €20/h | est. — student self-employed; admin time doesn't replace a gig, so below my €60–80 DJ rate. Sensitivity at €40/h below |
| **Human cost per job** | 7.5/60 × €20 = **€2.50** | calculated |
| Volume: form + e-mail | 0.9/month | measured: 13 serious inquiries in 15 months |
| Volume: Instagram / WhatsApp / phone | 2/month (1–3) | est. — my own estimate, logging starts now |
| **Realistic monthly volume** | **≈ 2.9/month ≈ 35/year** | |
| Measured success rate | 50% (n = 30 runs, 15 inputs) | measured |
| Dangerous-failure rate: "gear on site" when I must bring my own (T06, T09) | 4/30 = 13% | measured |
| Cost of that failure if it reaches a gig | €300 (lost fee of a 4-hour gig at €60–80/h + reputation) | est. — who pays: me |
| Token cost per run | ≈ $0.0044 (1,000 in + 200 out at $2/$12 per 1M) | course pricing snapshot 7 Sept 2026 |

## 2. Value model

| Step | Formula | €/year |
|---|---|---:|
| Gross benefit at 100% accuracy | 35 × €2.50 | **€87.50** |
| Gross benefit at measured 50% | 35 × €2.50 × 50% | **€43.75** |
| AI running cost | 35 × $0.0044 × 0.92 | €0.14 |
| Set-up cost (one-off) | 4 h writing/testing the prompt × €20 | €80 |
| Failure cost if used unchecked | 35 × 13% × €300 | **€1,365** |
| **Net, unchecked, Year 1** | 43.75 − 0.14 − 80 − 1,365 | **≈ −€1,401** |
| Failure cost if I always check the gear field (1 min per inquiry) | gear errors caught; check = 35 × 1/60 h × €20 | €11.67 |
| **Net, gear field always checked, Year 1** | 43.75 − 0.14 − 80 − 11.67 | **≈ −€48** |
| **Net, gear field always checked, Year 2+** | 43.75 − 0.14 − 11.67 | **≈ +€32/year** |

**Who pays a failure:** me. A misread inquiry means I quote wrong or turn up without decks, and there's nobody else to absorb it.

## 3. Answer: at my measured rate, is this worth building?

**No, not as a tool I trust unchecked.** The time it can save is worth at most €87.50 a year at my volume. A single gear failure (€300) wipes out more than three years of that.

**What rate would it need?** For running it unchecked to break even, the *dangerous* error rate has to fall below €2.50 ÷ €300 = **0.8%**, so fewer than 1 gear mistake per 120 inquiries. With 15 test inputs I can't even measure a rate that low. **Not reachable in a way I could prove.**

**The version that does work:** always check the one dangerous field (gear) myself and let the tool do the rest. That breaks even in Year 2 at about +€32/year. Positive, but so small that the real value of the Build is what it *taught* me: AI shouldn't be the step that touches gear or price (Weeks 2–3). The booking form already collects those fields in fixed boxes, for free.

## 4. Sensitivity

| Change | Effect |
|---|---|
| My time worth €40/h instead of €20/h | gross at 50% = €87.50/year; checked version ≈ +€64/year from Year 2 |
| Volume 8/month (my Week 1 assumption) instead of 2.9 | gross at 50% ≈ €120/year, but unchecked failure cost ≈ €3,744/year: worse, not better |
| v2 halves the overall error rate (75% correct) and removes the gear errors | gross €65.60/year; unchecked becomes viable only if gear errors are really 0, which needs a bigger test set to prove |

**Conclusion for the capstone:** at my volume, AI on the inquiry → quote path is worth tens of euros a year at best, and it's only safe with a human check on gear and price. The decision for DJ Thorax is less "AI or not" than "which step can afford an error". The answer so far: only the reading step, never the gear or price step.

---

*AI use: Claude built this value model from my measured Run 1 results, my booking-form/mail counts and my own estimates (marked est.). I reviewed it.*
