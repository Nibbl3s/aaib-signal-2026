---
week: 7
title: "I Priced the Wrong Model Last Week. What Leaving Google Would Cost O&D 3D"
author: "Max"
beat: "How can AI automation transform the workflow of a digital manufacturing company?"
skill: "Lock-in detection"
date: 2026-11-20
---

Last week I priced my quote tool at $0.25 per million input tokens. Google's own page says $0.30, and $2.50 for output instead of $1.50. The model behind my call was a successor that costs 42% more per call. That is lock-in in one line: the vendor's replacement arrives with its own price.

## The use case
The od3d.be form receives about 12 quote requests a month. My Build reads each free-text message and returns process, material, quantity, largest dimension and what is missing as JSON. A person checks every result. It runs on gemini-3.5-flash-lite with one prompt, tested on 13 real customer messages, twice.

## The decision

- **Is this our competitive advantage?** No. Customers choose O&D for printers and service, not for reading emails.
- **A commodity with good off-the-shelf products?** The engine yes, my five-field schema no.
- **Several capabilities no vendor does well?** No, one.
- **Will needs change in 12 months?** Yes. Google's own table gives gemini-3.1-flash-lite a 12-month life (7 May 2026 to 7 May 2027), and my prompt will change too.
- **Engineering capacity?** One part-time person.

Answer: **Connect, in its thinnest form**: one function, an OpenAI-compatible call, the model name in a setting. No framework, no MCP.

## The scorecard
| Dimension | Score | Evidence |
|---|---|---|
| Data portability | 1 | Prompt, test set and logs are my own files. Google's terms contain no export clause; a tuned model would sit on their side. |
| API stability | 2 | A deprecation page with dates, but the promise is "advance notice" with no number of days. A preview model lived 83 days. |
| Pricing control | 2 | Changes take effect 30 days after posting; continued use counts as consent. |
| Feature dependency | 1 | Plain-text prompt, no tuning. The same script ran on Google and on my laptop. |
| Migration cost | 0 | About 1 hour measured to run the whole test on a second model, under €100, with a written plan. |

**Total: 6/15, moderate.** The dimension I fear is API stability: the absence of a notice period is a finding, not an oversight.

## The migration path
I ran the same 13 messages twice on Google and on llama3.2 on my laptop. Strictly scored against answers written beforehand, Google passed 3 and 4 of 13; the local model passed 0 and 0. A run costs €0.0047 on Google and €0 locally.

They fail differently. Google always returns valid JSON and breaks the rules with confidence: it names FDM when the customer never did, in 10 of 26 runs. The local model breaks the shape as well (invalid JSON, numbers as text, a 300 mm statue read as "30") and names FDM in 17 of 26 runs.

Now the exit test. If Google tripled its price at 400 requests a day, I would pay €8.66 more a month. Switching to my local model would cost about €4,950 a month in extra fixes.

## The insight
In digital manufacturing the lock-in is not in the price per token. It is in how a model fails: the same prompt invents a process on one model and refuses on another, and no pricing page says so. And customers send us their designs, so where the data goes is part of the contract: on Google's free tier prompts may be read by human reviewers; locally, nothing leaves the machine. Score the exit before you build, and measure the second model yourself.

*Sources: Google Gemini API pricing, deprecations and terms pages (20 November 2026); my own runs.*

*AI use: Claude helped draft and structure this post; the data and the tests are mine, and I checked the figures.*
