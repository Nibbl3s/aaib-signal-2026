---
week: 6
title: "My Sanctions Screening Tool Costs €0.004 per Check. The Bill That Matters Is €23,652."
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cost projection"
date: 2026-10-14
verdict: "Charge per check, not per seat"
stamp: "COSTED · MEASURED n=24"
kpis: "€0.0044 | per check, measured from my own API calls ; 299× | errors vs tokens at my Week 2 error rate ; 1.1 | checks per day where it breaks if the vendor fixes errors"
takeaways: "Scale does not break a token-cheap tool; error handling does ; Whoever pays for a wrong answer decides the break point ; Re-measure every time the model changes"
---

# My Sanctions Screening Tool Costs €0.004 per Check. The Bill That Matters Is €23,652.

**Hook**

In Week 1 I estimated the token bill for AI sanctions screening at €166 a year. This week I measured it with my own API key: €79. It barely matters, because the cost that decides whether this business survives is not on any pricing page.

**The Use Case**

An AI pre-screen for Belgian importers buying from China. It reads a shipment invoice, extracts supplier, origin, HS code and value, and flags the supplier against the EU sanctions list. A compliance analyst checks every result. Sold as a subscription per analyst, with each analyst running about 25 checks a day.

**The Numbers**

I ran my 12 test invoices twice through Claude Sonnet 5.5 ($2 input and $10 output per million tokens, checked 14 October 2026). The usage data gave 371.9 input and 402.5 output tokens per call, so one check costs €0.0044. For the price I used a real SME plan: $49 (€45.08) a month for 2,500 screenings.

| Users | Checks per day | Tokens per month | Revenue per month | Token share |
|---|---:|---:|---:|---:|
| 100 | 2,500 | €329 | €4,508 | 7.3% |
| 10,000 | 250,000 | €32,905 | €450,800 | 7.3% |

A year of tokens costs €3,949 at 100 users and €394,859 at 10,000. Growing a hundredfold changes nothing about the margin: the token share stays at 7.3%.

The real cost sits elsewhere. In Week 2 my tool was wrong on 29.2% of runs, and every wrong answer costs an analyst about six minutes: €4.50 at a €45 loaded hourly rate. For one importer screening 18,000 parties a year, that is €79 in tokens against €23,652 in errors. Re-measured this week through the API, the error rate was 8.3%: still €6,750 a year, 85 times the tokens.

**The Break Point**

If the customer's own analyst fixes the errors, the vendor only pays for re-runs, and a €45 subscription breaks even at 265 checks per analyst per day, ten times the modelled use. But if the vendor promises to fix errors itself, as a managed screening service does, every check carries €1.31 of analyst time and the break point collapses to 1.1 checks per analyst per day (4.0 at this week's error rate). That is why most screening vendors charge per screening, not per user. The assumption the break point rests on is not calls per user. It is who pays for a wrong answer.

**The Insight**

Cost projection made me look past the token line twice. First, scale does not hurt a token-cheap tool; usage intensity and error handling do. Second, the error rate is not a property of my prompt alone: the same prompt was wrong 29% of the time in the chat app and 8% through the API with a newer model. A builder in my beat should price the error, decide who carries it, and re-measure every time the model changes.

**The Question**

If a provider silently updates the model behind my tool and the error rate moves from 8% back to 29%, who notices first, and who pays the difference?

---

*AI disclosure: the API calls were run with my own key on 14 October 2026. I used Claude to write the run script, check the arithmetic and structure this post; the scenario and conclusions are mine.*

Full workings: [cost model](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-06/cost-model.md) · [Build log](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/log-v1.md)
