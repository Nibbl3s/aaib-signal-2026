---
week: 8
title: "I Designed the AI Intake for My Own Studio. Then I Decided Not to Build It Yet."
author: "Thor Tack"
beat: "AI Cost Decisions for a One-Person DJ & Events Business"
skill: "Design defense"
date: 2026-11-26
---

**Hook:** In a one-person business, skipping design doesn't produce a failed IT project. It produces a nice-sounding reply with the wrong price, sent at midnight because you trusted it. I've measured my own extraction tool for eight weeks, so I know which field it gets wrong. This week I designed around that field.

**The Company:** Thorax Studio is my one-person web and app studio in Izegem, the sister brand of my DJ business: same owner, same inbox. It sells websites (€39–€99 a month) and custom apps to local businesses. Today: one paying client, one app offer out, 16 businesses in the pipeline. Requests come in through a step form that writes to Firestore, an Apps Script that mails them to me, a Combell mailbox, WhatsApp, and a Google Form for DJ bookings. My constraint: **€300 cash and 25 hours of my own time in Year 1**, at my €60/h floor rate. Volume: about 7 inquiries a month across both brands.

**The Architecture:** One use case: inquiry → first reply + pre-filled offer, approved by me.

- **Data layer.** The three channels I already have: Firestore, Gmail, the DJ form. WhatsApp stays manual (I paste a message in), because the Business API is an extra account and cost for about one message a week. My price table and offer templates stay in my own git repo. Invoices (Accountable) are deliberately not connected.
- **AI model layer.** Claude Haiku 4.5 over the API: call 1 extracts the fields (that's my Build, now on prompt v2), call 2 drafts a Dutch reply without prices. €0.0047 per inquiry. I chose it on evidence: **22/30** fully right on my 15 real inquiries, against **3/30** for Llama 3.2 3B on my laptop. A *connect* decision, provider in config.
- **Integration layer.** I extend the Apps Script that already runs: validate the JSON in code, then look up **the price in code from my table, never from the model**, create a Gmail draft and write a log row. On any error it retries once, then falls back to today's plain notification mail. So the AI can't take the business down.
- **Interface layer.** A draft in the client's own Gmail thread, with a three-line check block on top: gear or formula, price, date, and any unknown field in red. I press Send. Nothing auto-sends, and the AI never talks to a client.
- **Governance layer.** Every call is logged with prompt version, model and whether I edited the draft. The Week 7 test scripts re-run my 30 test calls monthly, and whenever the provider announces a change. EU AI Act: minimal risk, because a human decides and sends.

Year 1: **€0.46 in cash, 24 hours of my time.** Per correctly handled inquiry it costs €5.14, and €0.005 of that is the model. The rest is my review time and the leftover error risk.

**The Defense:** *Why not the AI built into Gmail or a CRM?* It writes good text but doesn't know my price table or my "unknown → ask" rule, and a CRM would move a 16-row pipeline out of a file I own. *What if the provider triples the price?* My bill goes from €0.03 to €0.10 a month. A silent model swap is the real risk, which is why the regression set exists. *What about French?* My test set is almost all Dutch. I claim 22/30 for Dutch and nothing for French, so French inquiries get the manual path until I've measured them. *What's the risk you're not seeing?* That I stop reading the check block. Prompt v2 fixed most of my Build's dangerous gear errors, but one survived in both runs: a "yes" tick box with no gear named still comes out as "decks on site", 2 of 30 outputs, about 7%. No code check catches it, because "on site" is an allowed answer. My review is the only control, so the log tracks my edit rate. If it drops to zero while the test set still shows 7%, I'm rubber-stamping.

The board question I'd ask myself is *should you build it at all?* At 7 inquiries a month it saves about €84 of my time and costs about €36 in review and risk. That pays back the build in roughly 30 months. At 15 a month it's 14 months. **So I build it when the pipeline reaches 15 inquiries a month.** Until then, my templates and my own reading are the right system. Good design includes when to build.

**The Question:** I'm least sure that a three-minute human check stays a real check at 30 drafts a month. If someone has measured how fast review quality decays on routine AI drafts, that number would change my build gate more than any model price.

*AI use: Claude ran the 60 test calls and the scoring, built the cost model script and drafted this post from my lab memo (`week-08/lab-memo.md`). The company, the use case, the budget cap, the build gate and the v2 prediction are mine. I reviewed it.*
