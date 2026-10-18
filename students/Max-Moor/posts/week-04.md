---
week: 4
title: "O&D 3D Gets 12 Quote Requests a Month: Why an AI Intake Tool Doesn't Pay (Yet)"
author: "Max"
beat: "How can AI automation transform the workflow of a digital manufacturing company?"
skill: "Value quantification"
date: 2026-10-18
---

In Week 1 I wrote that AI could read O&D 3D's quote requests for under a dollar a month. That was true and beside the point: a tool can cost almost nothing and still lose money. This week I priced the whole thing, starting with a number I had never counted.

## The candidate

The process is quote intake at O&D 3D, my digital manufacturing case study. A customer fills in the website form in free text. Someone reads it, pulls out process, material, quantity, largest dimension and deadline, and lists what is missing before a price is calculated. In the value chain it sits at the start of sales and order intake, upstream of production. My Build is a prompt that returns that record as JSON. In my Week 2 test on 13 real requests, two runs each, it got every field right on 5 of 13 in one run and 8 of 13 in the other. The price stays in a spreadsheet, as Week 2 argued.

## The numbers

In Week 1 I assumed 300 requests a month. I then counted: the form has received 88 submissions since 12 March, about **12 a month** (an upper bound, since it also gets questions and spam). That one correction changes everything.

| Line | Formula | Per year |
|---|---|---|
| Cost of the task today | 144 requests × 5 min (est.) × €46/h | €552 |
| Time saved, at my measured 50% | €552 × 50% | +€276 |
| Revenue, cost reduction, risk | no evidence, so not counted | €0 |
| Fixing failures | 72 failures × 2 min (est.) × €46/h | −€110 |
| Checking every output | 144 × 1 min (est.) × €46/h | −€110 |
| Tokens (Week 1 model) | 144 × $0.0026 × 0.92 | −€0.35 |
| Maintenance | 25% of the build | −€230 |
| **Net per year** | | **−€175** |
| Build, one-time | 20 h (est.) × €46/h | €920 |
| **Payback** | | **never** |

Tokens are noise: 35 cents a year. The build and the human check are the bill. Even a perfect tool (100% success) nets only +€211 a year and needs 52 months to repay €920. Bought from an agency at the course benchmark of €15,000, it never pays back. Rates and times marked (est.) are mine; the volume and the success rate are measured.

## The pressure test

Halve the benefits, or raise every cost by 50%, and even my V2 target of 80% (not built yet) loses €164 or €136 a year. So the case does not survive the pressure test. It was already negative on measured numbers.

One unmeasured number could rescue it: minutes per request. At 15 minutes (est.) and 80% success, the net is +€940 a year and payback is 11.7 months. At today's volume, a 12-month payback needs 15 minutes per request; at 5 minutes it would need about 49 requests a month. So the next step is a stopwatch on 10 real requests, not more code.

## The insight

Where is the real ROI? Not in the model price and not in the success rate alone, but in volume times minutes, which I had assumed instead of measured. Where is the FOMO? In me: I built an AI tool for a task worth €552 a year because "AI for quoting" sounded like my beat.

The cheaper fix is boring. The form I read has fields for name, phone, VAT, reason, description, file and email, but none for material, quantity or dimensions. Making those required would remove much of the extraction work for about an hour of setup. AI earns its place only on free text that still arrives by email, and only if that volume is real.

My recommendation is no-go now, and re-open at roughly 50 requests a month or if handling time proves to be 15 minutes or more.

*Correction, 2026-10-18: this post replaces my Week 1 assumption of 300 requests a month with the measured 12. The Week 1 post stays as published.*
