---
week: 4
title: "Evidence - Business Case Draft: Sanctions Screening Build (for the Week 4 clinic)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Value quantification"
date: 2026-10-11
---

# Business Case Draft: Sanctions Screening Build

> Draft for the Monday clinic, 12 October 2026. Every number has a formula or a source; "(est.)" marks my own estimates. The interview with a practitioner (sent 11 October) should replace the (est.) figures before the final memo.

## Assumptions

| # | Assumption | Value | Basis |
|---|---|---|---|
| A1 | Screening volume | 1,500 checks/month = 18,000/yr | Week 1 scenario: 150 shipments × 8 parties + 300 monthly re-screens |
| A2 | Loaded analyst rate | **€45/hr** | €51,547 salary × 1.4 ÷ 1,600 h = €45.10 (salary: ERI, import/export compliance specialist, Belgium; course formula). Replaces the unsourced €50/hr I used in Week 1 |
| A3 | Manual check time today | 6 min (est.) | To confirm in the interview |
| A4 | Genuine matches | 0.2% of checks = 36/yr | Week 1 |
| A5 | Human recall on genuine matches | 98% (est.) → 0.72 misses/yr | 36 × 2% |
| A6 | Cost of one missed match | €250,000 (est.) | Week 1. The weakest number in the case |
| A7 | False positives | 4% of non-matches, 15 min each = 720/yr | Week 1 |
| A8 | AI cost | Tokens €166/yr; implementation €15,000 + €8,000 integration; maintenance €6,000/yr | Tokens: Week 1 (18,000 × 2,500 in / 500 out, Sonnet 5 $2/$10, × 0.92). Others: course defaults |

**What it costs today:** 18,000 × 6 min = 1,800 h × €45 = **€81,000/yr**, about 1.1 FTE.

---

## Part 1. My Build v1, as built, at its measured rate

The tool reads the invoice and gives a verdict; a human verifies every output in 2 min (est.) instead of doing the 6-minute check.

| Line | Formula | €/yr |
|---|---|---:|
| Gross benefit at 100% success | 18,000 × (6 − 2) min = 1,200 h × €45 | 54,000 |
| Redo cost at measured 70.8% | 29.2% × 18,000 = 5,256 wrong outputs × 6 min = 525.6 h × €45 | −23,652 |
| **Gross benefit at measured rate** | | **30,348** |
| Tokens + maintenance | €166 + €6,000 | −6,166 |
| Extra missed matches | 36 genuine × 12.5% false clear (Input 7, 1 of 8 runs on genuine matches) × 50% not caught by the verifier (est.) = 2.25 misses vs 0.72 today → +1.53 × €250,000 | −382,500 |
| **Net, Year 2 onwards** | | **−358,318** |

### Who pays for each failure

| Code | Measured | What happens | Who pays |
|---|---|---|---|
| F3 missed | 1 of 8 runs on genuine matches | A sanctioned entity is cleared | The importer: fine, legal costs, possibly a criminal referral (€250,000 est.) |
| F2 fabricated | 2 of 24 runs | A made-up supplier or value looks real and passes a quick review | The importer at a customs audit; the analyst who signed it |
| F1 wrong | 3 of 24 runs | Over-flag (analyst time) or downgraded match (caught only if reviewed) | Compliance team time |
| F6 inconsistent | 7 of 12 inputs | Same document, different verdict | The compliance officer: the decision can't be defended to a regulator |
| F4 format | 1 of 24 runs | Broken field for downstream systems | IT, cheap to fix |

### Is it worth building at this rate? No.

The time saving is real (€30k), but one extra missed match every eight months costs more than twelve times that (€382,500). **What rate would it need?** The extra misses must cost less than the €24,182 net time benefit (€30,348 − €6,166): 24,182 ÷ 250,000 = 0.097 extra misses/yr. So residual misses ≤ (0.72 + 0.097) ÷ 36 = 2.3%. With a verifier who catches half, **the tool's false-clear rate on genuine matches must be ≤ 4.5%. Measured: 12.5%**, on only 8 runs, so the true rate could be far better or worse.

**Is 4.5% reachable?** Not reliably by improving the prompt, given 58% inconsistency. It *is* reachable by design: never let the AI say "clear". That is the candidate below.

---

## Part 2. The redesigned candidate: rule engine first, AI as a second pair of eyes

A deterministic match against the EU consolidated list (free) decides "clear". AI does two jobs only: it pre-fills the invoice fields, and it **adds** a flag when it sees a cross-script name variant the rules miss. It can never remove a flag, so it cannot create a new miss. A human reviews every flag.

| Category | Formula | €/yr |
|---|---|---:|
| Time saved | 18,000 × (6 − 2) min × €45/60 | 54,000 |
| Revenue | No revenue effect for an importer's screening step (est.) | 0 |
| Cost reduction | 720 false positives × (15 − 10) min with AI pre-notes (est.) × €45/60 | 2,700 |
| Risk mitigation | 0.72 misses × €250,000 = €180,000 expected loss × 25% reduction (50% of misses are cross-script (est., Week 1) × 50% AI catch rate (Input 7, 1 of 2 runs)) | 45,000 |
| **Gross benefit** | | **101,700** |
| Tokens | Week 1 | −166 |
| Maintenance | Course default | −6,000 |
| Error correction | 12.5% extraction errors (F2 + F4, 3 of 24 runs) × 18,000 × 3 min × €45/60 | −5,063 |
| Extra flags from AI | 4.2% over-flagging (Huawei, 1 of 24 runs) × 18,000 = 750 × 15 min × €45/60 | −8,438 |
| **Running AI cost** | | **−19,667** |
| Implementation, Year 1 only | €15,000 + €8,000 | −23,000 |
| **Net Year 1 / Year 2+** | | **59,033 / 82,033** |
| **Payback** | €23,000 ÷ (€82,033 ÷ 12 = €6,836/month) | **3.4 months** |

**Freed hours:** 1,200 h ≈ 0.75 FTE. They are not a saving until redeemed. The plan is to redeploy them to enhanced due diligence on flagged counterparties, not to cut a job.

### Sensitivity

- **Estimates 50% too optimistic (benefits halved, costs +50%):** €50,850 − €29,500 = €21,350/yr net; payback €34,500 ÷ €1,779 = 19.4 months. **The case still holds, but only just within two years.**
- **Without the risk line at all** (if €250,000 is wrong, or the AI catches nothing): €56,700 − €19,667 = **€37,033/yr**. The case does not depend on my weakest number. It is a time case with a risk upside, not the other way round.

---

## Open questions for the clinic and the interview

1. Is 6 minutes per manual check realistic? This drives €54,000 of the €101,700.
2. How often is origin genuinely unclear on transshipped goods? My Build's biggest real-world weakness, not yet in the model.
3. A real enforcement figure to replace the €250,000 assumption.
4. Does a mid-sized importer already pay for a screening tool? If so, the baseline is not "fully manual".
