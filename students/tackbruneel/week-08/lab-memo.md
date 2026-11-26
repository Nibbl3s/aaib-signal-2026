# Week 8: Design defense — AI intake for Thorax Studio

**Thor Tack** · Beat: AI Cost Decisions for a One-Person DJ & Events Business · 4 ECTS · 26 Nov 2026

**Attendance, said up front:** I missed the Monday 23 Nov session. So I have no Northwind team sketch, no team cost model and no critique forms, given or received (section 8). Everything below is my own design for a real company I run, worked through with the Week 8 template: use case, five layers, sketch, cost model, the Build as one box, board questions and cost at scale.

---

## 1. The company

**Thorax Studio** is my one-person web and app studio in Izegem. It sells websites and custom apps to local businesses in West- and Oost-Vlaanderen. It is a sister brand of my DJ business: same enterprise (Thor Tack, trading as Thorax), same inbox, same owner.

- **Size:** 1 person, 10–20 h/week next to my studies. 1 paying website client (€39/month), 1 app offer out (Geo Aardwarmte, €1,400 + €179/month), 16 businesses in the pipeline since 2 Oct 2026 (`klanten.md`).
- **Stack today:** a step form on thoraxstudio.be that writes to Firestore (Firebase project `thorax-klanten`); a Google Apps Script that mails each new request to my Gmail; info@thoraxstudio.be (Combell) forwarding to Gmail; WhatsApp; offers filled from templates by a Python script (`vul-sjabloon.py`); invoices in Accountable (Peppol); demos on Firebase Hosting. The DJ side runs on a Google Form + Gmail.
- **Budget constraint (mine):** **€300 cash** in Year 1 (≈ 8 months of my only client's licence) and **25 hours** of my own time, valued at my €60/h floor rate.
- **The felt problem (from my own pipeline):** 5 pitch mails got 0 replies, and calls are logged nowhere. The time goes into reading requests, working out the formula and price, and writing the first reply. When that reply is late, the lead goes cold.

## 2. The use case and why this one

**Use case: inquiry → first reply + pre-filled offer**, for both brands, with me approving every message before it leaves.

Through the Week 4 candidate lens:

| Candidate | Volume | Value per case | Error lands where? | Verdict |
|---|---|---|---|---|
| **Inquiry → first reply + offer** | 7/month now (≈ 4 studio + 3 DJ, est.) | 12 min saved, plus a faster first reply | Before anything is sent: I check it | **Chosen** |
| Pipeline follow-up nudges | 16 open leads | high, follow-up is where deals die | In my calendar, low risk | Second. A reminder doesn't need AI, my calendar already does it |
| Writing demo-site copy | 1–2/month | high | The client reads it | Already done with Claude Code by hand. No integration needed |
| Client chatbot on the site | unknown | low | **Straight to the client** | Rejected: an unchecked error reaches the client, the exact risk my Build measured |

Why this one: it's the only step where the input is messy free text (form remarks, mails, WhatsApp) and the output feeds a template I already own. **And I've measured this pattern for eight weeks.** My Build does exactly this for DJ inquiries, so I know its failure profile before I write a line of integration code.

## 3. The architecture sketch

```
                     ┌──────────────────────────── 4. INTERFACE ────────────────────────────┐
                     │  Gmail: a DRAFT reply + offer PDF appears in the thread                │
                     │  ★ HUMAN CHECKPOINT 1: I read the 3-line checklist and press Send      │
                     │    (gear / formula / price / date; any "unknown" in red at the top)    │
                     │  klanten.md row updated by me (pipeline stays a plain file I own)      │
                     └──────────────────▲────────────────────────────────────────────────────┘
                                        │ Gmail draft (MIME) + PDF          ▲ FALLBACK: AI down
                     ┌──────────────────┴──────── 2. AI MODEL ─────────────┐ │ or JSON invalid →
                     │  Claude Haiku 4.5 (L)  · API, EU billing account     │ │ today's plain
                     │  call 1 EXTRACT  = my Build, prompt v2 → JSON        │ │ notification mail,
                     │       (DJ fields, or studio fields: zaak, sector,    │ │ I handle it by hand
                     │        current site, wishes, deadline, budget)       │ │ (= how it works today)
                     │  call 2 DRAFT    = reply text in Dutch, no prices    │ │
                     │  € 0.0047 per inquiry (2 calls)                       │ │
                     └──────────────────▲───────────────────────────────────┘ │
                                        │ HTTPS JSON (prompt + text in, JSON out)
                     ┌──────────────────┴──────── 3. INTEGRATION ──────────────────────────────┐
                     │  Google Apps Script (L) — already running, triggered per new request      │
                     │   1 build input → 2 call EXTRACT → 3 validate JSON in CODE (allowed       │
                     │   values, HH:MM, missing_for_quote recomputed) → 4 PRICE FROM MY TABLE    │
                     │   in code (Start €39 / Zaak €59 / Plus €99; DJ €90/h) — never from the    │
                     │   model → 5 call DRAFT → 6 create Gmail draft → 7 write log row           │
                     │   Error handling: 1 retry, then FALLBACK path. Build cost: 16 h (≈ €960)  │
                     └───────▲───────────────────────▲───────────────────────────▲──────────────┘
                             │ Firestore REST         │ Gmail API                  │ Form responses
┌─────────── 1. DATA ────────┴───────────────────────┴───────────────────────────┴───────────┐  ┌──── 5. GOVERNANCE ────┐
│ Firestore `aanvragen` (L) (studio step form) · Gmail inbox (L) (info@ + DJ mails)            │  │ ai_log in Firestore:  │
│ Google Form responses (DJ bookings) · WhatsApp: pasted in by me (no API, no auto-read)       │  │ prompt version, model,│
│ Price table + offer templates: my repo (git) · Invoices: Accountable (L), NOT connected       │  │ input hash, output    │
│ Privacy boundary: name/phone/mail go to the model only inside the inquiry text; no client    │  │ JSON, my edit Y/N     │
│ files, no invoices, no Geo app data ever leave Google/Firebase                                │  │ Monthly: re-run 30-   │
└───────────────────────────────────────────────────────────────────────────────────────────────┘  │ call test set (W7)    │
                                                                                                   │ Cost alert: €5/month  │
  (L) = lock-in marker · ★ = human checkpoint · cost annotations on the paid/expensive boxes      │ EU AI Act: minimal    │
                                                                                                   └───────────────────────┘
```

**The Build as one box** (call 1 EXTRACT):

1. **What feeds it:** one inquiry text (form fields joined + remark, or one mail), never the whole thread history.
2. **What consumes its output:** code first (validation + price lookup), then the draft call, then **me**. No client sees anything I haven't read.
3. **When it's wrong:** v2 still says `on_site` for T06 in both runs, a "yes" tick box with no gear named (2/30 = 7% dangerous on Haiku). The code check can't catch that, because `on_site` is an allowed value. So the gear and formula fields get their own line at the top of the draft, and I check them on every draft. What code does catch: format errors (Llama's "0:00", Dutch labels, broken JSON) and a `missing_for_quote` list that disagrees with the fields.
4. **When it's unavailable:** the Apps Script already mails me the raw request today, so the fallback is the current process. Nothing gets lost.
5. **Where it stores what it sees:** one log row per call in Firestore (`ai_log`), kept 12 months, then deleted. Anthropic's own retention is on the checklist in section 5.

## 4. Five layers: the decisions

| Layer | Decision (2–3 sentences) |
|---|---|
| **1. Data** | Sources are the three channels I already have: Firestore `aanvragen` (studio form), the Gmail inbox and the DJ Google Form. WhatsApp stays manual: I paste a message in when I want a draft, because the WhatsApp Business API adds cost and an account for ±1 message a week. The price table and templates stay in my git repo, and invoices (Accountable) are deliberately not connected. Freshness: per request, triggered on arrival. |
| **2. AI model** | Claude Haiku 4.5 through the API, because on my own test set it's the only model that's good enough: **22/30** with prompt v2 against **3/30** for Llama 3.2 3B on my laptop (26 Nov). Cost €0.0047 per inquiry, €59/year even at 100 calls a day. It's a **connect** decision, not build or buy: one function, provider in config, OpenAI-compatible shape, so switching is one URL (shown in Week 7). |
| **3. Integration** | Extend the Apps Script that already mails me new requests: no new server, no middleware, no new account beyond the API key. Real-time per request; on any error, one retry, then the plain notification mail (the fallback is today's process). Prices and formula come from **code**, never from the model, because F6 showed the model can give two different answers on the same input. |
| **4. Interface** | A Gmail draft in the client's own thread, with a 3-line check block at the top (gear/formula, price, date, plus any `unknown` field in red). I press Send. Nothing auto-sends, and the AI never talks to a client. Training burden: one person, a one-page runbook. The single point of failure is me, not the AI. |
| **5. Governance** | Every call is logged (prompt version, model, input hash, output, whether I edited it), so I can measure my real edit rate instead of trusting the test set. Monthly regression: the Week 7 scripts re-run the 30 test calls, and again when the provider announces a model change. EU AI Act: minimal risk (a drafting aid; a human decides and sends; no chatbot facing people). GDPR: legitimate interest for replying to an inquiry, a line in the privacy page naming the AI processor, logs deleted after 12 months. |

## 5. The cost model (it matches the sketch box by box)

Full generated tables: [`cost-tables.md`](cost-tables.md) from [`cost_model.py`](cost_model.py). Every line maps to a box in the sketch.

| Category | Year 1 estimate | Sketch box |
|---|---:|---|
| AI API: 84 inquiries × 2 calls × (1,246 in + 154 out / 1,500 in + 400 out tokens) × Haiku $1/$5 per 1M | **€0.40** cash | 2. AI MODEL |
| Integration build: Apps Script call, JSON validation, price lookup, Gmail draft, log | 16 h = €960 (my time) | 3. INTEGRATION |
| Regression set ported to studio fields | 4 h = €240 (my time) | 5. GOVERNANCE |
| Infrastructure: Firestore, Apps Script, Gmail on free tiers, already running | €0 | 1. DATA |
| Training: one-page runbook | 1 h = €60 | 4. INTERFACE |
| Contingency 15% | €0.06 cash + €189 time | |
| **Total** | **€0.46 cash · 24.1 h of my time** | fits €300 / 25 h |

The model price is a rounding error. The real cost is my time, both to build it and to review every draft. That's why the design spends its effort on the review step and the price-from-code rule, not on choosing the cheapest model.

**Gate before I build it:** at Month-1 volume (7 inquiries/month) the time saved is ≈ €84/month against ≈ €36/month of review time and residual error risk. That pays back the €1,449 of build time in ≈ 30 months. At 15 inquiries/month it's ≈ 14 months. **So I build it when the pipeline reaches 15 inquiries a month, not before.** Until then the manual process plus my templates is the right answer. It's the same "don't invest yet" logic as my Recorded Pitch 1.

## 6. Cost-at-scale one-pager

Price source: Claude Haiku 4.5, $1 input / $5 output per 1M tokens, platform.claude.com/pricing, read **19 Nov 2026**. FX $1 = €0.86 (assumption). Error inputs: dangerous-field rate **7%** (measured 26 Nov, Haiku + prompt v2, 2/30), 10% of those missed by my review (assumption), €300 per miss (Week 4 value model).

| | Inquiries/month | AI calls/day | Token €/month | Review time €/month | Expected error € /month | **Total €/month** | Cost per correctly handled inquiry |
|---|---:|---:|---:|---:|---:|---:|---:|
| Month 1 (launch) | 7 | 0.7 | 0.03 | 21 | 15 | **36** | €5.14 |
| Month 6 (growth) | 15 | 1.4 | 0.07 | 45 | 32 | **77** | €5.14 |
| Month 12 (scale) | 30 | 2.9 | 0.14 | 90 | 63 | **153** | €5.14 |

**€5.14 per correctly handled inquiry, of which €0.005 is the model.** At 3× growth the token line stays under €1/month. What grows is my review time, which is linear, so past ≈ 30 inquiries a month the question becomes whether review can be partly automated. My Build data says not for the gear and formula fields.

## 7. Defense: the five board questions

| Board question | My answer (figure or named constraint) |
|---|---|
| **Why not the built-in AI in tools you already have?** | Gmail's own writing help doesn't know my price table, my formula rules or my "unknown → ask" logic. It writes nice text, and nice text with a wrong price is my most expensive failure (€300 per miss). A CRM with AI (HubSpot-type) would move my pipeline out of a plain file I own into a vendor's database, which is lock-in D1 for a 16-row pipeline. The integration I'm proposing is 16 hours on a script that already runs. |
| **What does this cost at scale, and at 3×?** | €0.0047 per inquiry. At 3× my Month-12 volume (90 inquiries a month) the token bill is **€0.42/month**. The cost that scales is review time: €3 per inquiry at €60/h, **€270/month** at 90 inquiries, which is still under the €1,080/month of time it saves at that volume. |
| **What if the provider changes pricing or shuts down?** | A 10× price rise moves my bill from €0.03 to €0.33 a month: irrelevant. A shutdown or silent model routing is the real risk (Week 7: Gemini 2.5 Flash got ≈ 29 days and was routed to another model). The call sits behind one function with the provider in config, and the 30-call regression set tells me in 2 minutes whether a replacement is good enough. If nothing is, the fallback is my current manual process, so the business never stops. |
| **How does it handle Dutch, French and English, and what's the accuracy gap?** | My test set is 15 real inquiries, **almost all Dutch**, so I can only claim Dutch: 22/30 on Haiku with v2. I have **zero** measured French or English inquiries, so I make no claim. Studio clients are West-Flemish local businesses, so Dutch is ≈ all of the volume today. A French inquiry gets the plain fallback until I've added 10 French test cases and measured them. |
| **What risk are we not seeing?** | That I stop reading the check block. My review is the only control on the field the model still gets wrong (T06 gear, 2/30), and a 3-minute check done 30 times a month turns into a glance. Mitigation: the log records whether I edited each draft. If my edit rate drops to 0% while the test set still shows 7% dangerous errors, I'm rubber-stamping, and that's my signal. |

**Bonus:** with **€100K** I wouldn't spend more on AI. I'd hire a part-time salesperson, because my bottleneck is conversations (0 replies to 5 mails), not drafting speed. With **€25K** (or €25) the answer is the same design: it costs €0.46 in cash.

## 8. Critique forms

**Neither exists.** I wasn't in class on 23 Nov, so I gave no critique and received none. I'm not reconstructing a board round that didn't happen. To get outside eyes anyway, the [Signal post](../posts/week-08.md) ends with the question I'm least sure of, and I'll take a classmate's critique on it in Week 9 if one is offered.

## 9. Build Checkpoint 2 (summary; full record in [`../build/log.md`](../build/log.md))

| | Haiku 4.5 v1 (1 Oct) | **Haiku 4.5 v2 (26 Nov)** | Llama 3.2 3B v1 (19 Nov) | **Llama 3.2 3B v2 (26 Nov)** |
|---|---:|---:|---:|---:|
| Strict, all 10 fields right | 15/30 | **22/30** | 1/30 | **3/30** |
| With code doing the mechanical jobs | — | — | 12/30 | **5/30** |
| Dangerous gear error (`on_site` when it isn't) | 4/30 (13%) | **2/30 (7%)** | 4/30 (13%) | **4/30 (13%)** |
| Inputs that differed between runs (F6) | 5/15 | **0/15** | 14/15 | 12/15 |
| Unparseable JSON | 0 | 0 | 1 | **5** |

Prediction (written first): Haiku ≈ 24/30, Llama ≈ 6/30, Haiku gear error 0–1/30, Llama ≥ 2/30. **I was right about the direction on Haiku and wrong about the size, and wrong about Llama in a way that changed the design.** The longer v2 prompt (+56% input tokens) helped the big model and *hurt* the small one: more broken JSON, and a gear field that went from 22 to 10 right out of the parseable outputs. That's why the sketch puts Haiku in the model box and keeps Llama only as the regression-test comparison, not as a fallback.

---

*AI use: Claude wrote and ran the plumbing (the Llama runner, 30 Haiku calls as fresh sub-agent sessions, the scorer and `cost_model.py`) and drafted this memo from my Build data, my Thorax Studio files and the Week 8 template. The choice of company and use case, the budget cap, the 15-inquiries-a-month build gate, the prompt v2 prediction and the decision not to fill in critique forms I never did are mine. I checked every number against the generated tables before submitting.*
