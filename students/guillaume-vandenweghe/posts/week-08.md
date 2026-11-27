---
week: 8
title: "The Model Costs €3 a Month. The Design Decides the Other €11,000"
author: "Guillaume Vandenweghe"
beat: "What AI really costs in the insurance sector, with a focus on claims handling and customer service"
skill: "Design defense"
date: 2026-11-27
---

In insurance, an AI project that skips design does not fail on the model. It fails on the box nobody drew: a complaint left for three weeks in the claims queue because a tool tagged it "status question" and a busy handler trusted it. This week I designed the architecture around my Build and defended every box.

## The company

Leie Verzekeringen is a realistic composite: a Belgian non-life insurer with 600 staff, 250,000 policyholders and 20,000 customer emails a month in Dutch, French and English (est.). Claims live in a claims-management suite with a REST API. Policies sit in an older policy-administration system that only offers a read-only database view. Email runs on Microsoft 365. Complaints must be registered and answered on time; the Ombudsman and the FSMA check that. Budget: €60,000 for year one (est.), live in four months, with three internal developers.

## The architecture

**Data.** Emails come from the shared claims mailbox through Microsoft Graph. Bodily-injury emails can contain health data (GDPR article 9), so only the email text goes to the model.

**AI model.** My Build: one call per email that returns a queue (six options), the language and nothing else. It runs on `gemini-3.1-flash-lite` on Vertex AI in the EU multi-region, where processing stays in Europe and prompts are not used for training. At my measured 556 input and 9 output tokens and the EU rate of $0.28 / $1.65 per million, the bill is about €3 a month. This is Connect: the insurer owns the prompt, the test set and a pass/fail gate; the model sits behind one swappable function.

**Integration.** A webhook triggers a small cloud function. It first runs a keyword net with no AI in it ("klacht", "plainte", "ombudsman", "advocaat", "Test-Aankoop"): a hit goes straight to the complaints queue. Then it calls the model (10-second timeout) and writes the tag back into Outlook. If anything fails, the email stays untagged and handlers work as today.

**Interface.** Outlook tags for handlers, an alert to the complaints officer for every COMPLAINT, and a Power BI page. The AI never writes a reply to a customer.

**Governance.** Every tag is logged with model, prompt version and any human change. Every week, someone reads 50 emails that were not tagged COMPLAINT, looking for hidden complaints. Under the EU AI Act, risk assessment and pricing in life and health insurance are high-risk (Annex III); routing non-life email that a human reviews is not. Classification: minimal risk.

## The defense

**Why not built-in?** Microsoft 365 Copilot costs $30 per user per month. For 40 claims handlers that is about €13,000 a year, and it writes drafts. But it does not sort a shared mailbox, and nobody can show the board its hidden-complaint rate, because nobody measured it on our emails.

**Cost at scale?** Tokens are not the issue: three times the volume is €9 a month. The error profile is. On my test set, this model sent 5 of 14 normal emails to COMPLAINT. That is safe, because a human sees each one, but at insurer volume the errors cost about €11,400 a month (est.), against €3 of tokens. So this week I revised the prompt and re-measured it: on a local 8B model, complaints hidden in a normal queue fell from 3 to 0 of 10, and normal emails flagged as complaints from 4 to 2 of 14. On the small 3B model the same change backfired. A prompt fix belongs to one model, so the gate is re-run for every model.

**Lock-in?** Moderate. Google can retire the model (earliest May 2027) or re-route a model name, as on 8 October 2026. A switch costs about €3,000 and two weeks: change the ID, re-run the test set, shadow-run. What does not move with you is the measured behaviour, so the gate is re-run on every change.

**The risk we are not seeing?** A hidden complaint. My measured rate is 0 of 10, but ten runs prove little. That is why two controls do not depend on a human reading the tag: the keyword net and the weekly sample. The go-live gate is at most 5% hidden complaints and at most 15% normal emails flagged as complaints.

Designing the class case, a logistics firm, showed the same pattern: tokens were 0.09% of a €48,000 budget.

## The question

The one thing I am least sure about: the audit. If 5% of complaints were hidden, a weekly sample of 50 emails would contain one about every eight weeks. Is that enough to prove the gate holds in production, or do I need a sample ten times larger?

*AI note: I ran the Build myself and used Claude for research, calculations and the structure of this post. The design choices, scores and conclusions are mine.*
