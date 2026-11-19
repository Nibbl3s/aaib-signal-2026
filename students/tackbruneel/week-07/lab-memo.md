# Week 7 — Lock-in detection: my Build on a model I own

**Thor Tack** · Beat: AI Cost Decisions for a One-Person DJ & Events Business · 19 Nov 2026

**Everything measured here can be re-run.** The script that ran the local model is [`run_local.py`](run_local.py), the raw responses are in [`runs/llama3.2/`](runs/llama3.2/) (30 JSON files), the scorer is [`score.py`](score.py). The scorer uses the expected answers in [`../build/test-set.md`](../build/test-set.md), which I wrote on 1 Oct 2026, before any model ran. [`whatif.py`](whatif.py) is a separate "what if code did the mechanical part" check. It is clearly not the official score.

---

## 0. Warm-up: Path A (one vendor's suite) or Path B (three providers, open standards)?

**My first answer (08:45):** A. I'm one person, and two weeks of integration is two weeks without gigs or clients.
**My answer at the end:** it depends on how long the thing will live. A is fine for a prototype I throw away. For anything that holds my clients' data or that I'll still use in a year, B, or rather A behind a thin layer of my own. The two weeks in Path B are what OmniRetail didn't spend, and it cost them €400K later. My own Build shows the cheap version of this: everything I own (prompt, test set, expected answers, outputs) already sits in my own repo as plain text. That's why my migration cost below is hours, not months.

---

## 1. Build, buy or connect for a business in my beat: DJ Thorax inquiry intake

The decision: should a one-person DJ business use AI to read booking inquiries (form, mail, chat) and work out what's still missing before a quote?

| Question | Answer for DJ Thorax | → |
|---|---|---|
| 1. Is this capability my competitive advantage? | No. Clients book me for the music and the night, not for how fast I parse their mail. | Q2 |
| 2. Is it a commoditised problem with good off-the-shelf solutions? | Partly. DJ booking software (e.g. Check Cherry, $29/month Standard, checkcherry.com/pricing, read 26 Oct 2026) already has structured inquiry forms. The AI intake part is not a mature product yet. | Q3 |
| 3. Do I need several AI capabilities no single vendor does well? | No, one: extraction. | Q4 |
| 4. Will my needs change a lot in 12 months? | Volume might grow, the job won't. | Q5 |
| 5. Do I have the capacity to build or maintain? | Barely. I can maintain one prompt + one script; I can't maintain a stack. | Buy, or no AI |

**My reflex** was "build", because I already have a prompt. The framework says the opposite: my own Google booking form (free) already does the structured part in fixed boxes, and my Week 4 value model says the AI part is worth at most €87.50/year at ≈35 inquiries a year. So the real choice is **"buy" (= my existing form + a price table, no AI)**. If AI does get added later, it should be a thin *connect* layer (sections 5–7), never a suite.

---

## 2. The Trapped Company: OmniRetail lock-in points

| # | Lock-in point | What decision created it | Could it have been avoided? | Cost of avoiding it then |
|---|---|---|---|---|
| 1 | Chat logs only in Vendor X's schema | Let the vendor be the only place conversations are stored | Yes: nightly export to their own database as JSON | ≈ 3 developer-days |
| 2 | Recommendation model fine-tuned on Vendor X's infrastructure, not exportable | Fine-tuned where it was easiest, with 3 years of purchase data | Partly: keep the training data + pipeline reproducible, or fine-tune an open-weights model they host | 3–4 weeks ML work + hosting |
| 3 | 12M embeddings from a proprietary model, in Vendor X's vector DB | Used the vendor's embedding model + vector store together | Yes: keep raw product text as the source of truth, store vectors in an open store (e.g. Postgres + pgvector), so re-embedding is a known batch job | ≈ 1 week |
| 4 | Prompts and templates inside Vendor X's workflow builder | Built prompts in the vendor's UI instead of in their own code | Yes: prompts in git | ≈ 2 days |
| 5 | Fraud model, training data and pipeline all on Vendor X's ML platform | Trained where the data already was | Yes: train in a portable format on their own or neutral infrastructure | weeks |
| 6 | Analytics in Vendor X's warehouse + BI, reports in their format | Took the bundled BI because it "just worked" | Yes: own warehouse, standard SQL | weeks |
| 7 | Every tool coded against Vendor X's response format, no abstraction layer | Called the vendor API directly from every tool | Yes: one internal gateway that every tool calls | ≈ 2 weeks (€15K in the debrief) |
| 8 | No price cap or export clause in the contract | Accepted list terms | Yes: negotiate a price cap, an export clause and a notice period before signing | negotiation time |

**Most expensive to undo:** 2 + 5, the trained models. You can't export them, so you rebuild them, and the retraining is most of the €400K / 6 months.
**Hardest to migrate:** 5, fraud detection. Model, training data and pipeline all live on the vendor, and switching means a period with weaker fraud protection.
**The root cause:** 7. It isn't a vendor decision at all, and it would have made every other point survivable.

**OmniRetail scorecard:**

| Dimension | Score | Evidence from the scenario |
|---|:-:|---|
| 1. Data portability | 3 | free CSV export replaced by a €12,000 "premium migration tool"; fine-tuned and fraud models can't be exported; embeddings in a proprietary format |
| 2. API stability | 2 | the next API version deprecates the response format all their tools use; 400 engineering hours to migrate. No notice period given in the scenario |
| 3. Pricing control | 3 | API calls +180% overnight; embedding storage €800 → €4,200/month; new €1,500/month per hosted model |
| 4. Feature dependency | 3 | six capabilities on vendor-specific features, no abstraction layer |
| 5. Migration cost | 2 | €400K and 6 months (top of the €100K–€500K / 3–6 months band) |
| **Total** | **13/15** | **Critical.** Paying the new prices "because we have no choice" is exactly what 13–15 means |

---

## 3. Architecture for all three scenarios

### Scenario 1 — FlandersBio: **Build** the core, open standards around it

5 questions: Q1 yes, the biomarker database + pattern-matching *is* the company → Build. Health data can't leave their infrastructure, which rules out Buy anyway. With 2 ML engineers and no infrastructure people, they build only the core and keep everything else boring and standard.

```
┌──────────────┐   ┌──────────────────────────┐   ┌───────────────────────┐
│ Raw genomic  │──▶│ Pattern-matching pipeline│──▶│ Report generator      │──▶ pharma partners
│ data (10 TB) │   │ (CUSTOM · core IP)       │   │ (custom, templates)   │    (PDF + audit log)
│ own storage  │   └────────────┬─────────────┘   └───────────────────────┘
│ open formats │                │
│ (FASTQ/BAM)  │   ┌────────────▼─────────────┐
└──────────────┘   │ Biomarker DB (50,000)    │
  if replaced:     │ PostgreSQL (CUSTOM data, │
  any S3-type      │ open-source engine)      │
  storage          └──────────────────────────┘
                     if replaced: any SQL DB
  Compute: own servers or EU sovereign cloud running open-source workflow tools
  (if replaced: another host, same containers)
```

Lock-in: D1 0 (own data, open formats) · D2 0 · D3 1 (compute/cloud pricing) · D4 1 (pipeline depends on two people's knowledge) · D5 1 → **3/15, low.** The real dependency is the two engineers, not a vendor. **Exit path:** containers + documentation, so a hire can run the pipeline.

### Scenario 2 — GhentAccounting: **Buy** (worked in full in section 6)

```
scans/PDF ─▶ ┌──────────────────────────┐   API   ┌─────────────────┐
(mail/upload)│ Invoice OCR + classify   │────────▶│ Exact Online    │ = system of record
             │ SaaS (BOUGHT, NL/FR/EN)  │         │ (BOUGHT, already │   (bookings stay
             └────────────┬─────────────┘         │ theirs)         │    in Exact)
                          │ anomalies             └─────────────────┘
                 ┌────────▼─────────┐
                 │ Staff review     │  if the OCR vendor is replaced: another
                 │ queue (humans)   │  Exact-integrated scan service; Exact stays
                 └──────────────────┘
```

### Scenario 3 — BeneluxMarketing: **Connect**

5 questions: Q1 no (their advantage is client relationships + creative judgment) · Q2 not as one product: five different capabilities · Q3 yes, no single vendor does all five well → **Connect**. Q4 (needs change within 12 months) points the same way. With 1 developer they connect through standards and own only a thin layer.

```
             ┌───────────── integration layer (OWNED, thin) ─────────────┐
marketers ──▶│ OpenAI-compatible model gateway  +  MCP connectors       │
             │ prompts + brand voice in git · client data in own DB     │
             └──┬──────────────┬───────────────┬──────────────┬─────────┘
                ▼              ▼               ▼              ▼
          LLM provider    Social listening  Ads analytics   Personalisation
          (connected,     tool (bought)     (Google/Meta/   (bought, in their
          swap = 1 URL)                     LinkedIn/TikTok  CMS)
                                            APIs, connected)
  Migration notes: LLM → any OpenAI-compatible provider · listening tool → another
  with CSV/API export · analytics stays on the platforms' own APIs
```

Lock-in: system ≈ D1 1 · D2 1 · D3 2 (several SaaS prices) · D4 1 · D5 1 → **6/15, moderate**. The weakest part is the social listening tool, the one bought component holding historic data. **Exit path:** a monthly export of mentions to their own database.

---

## 4. Read the real terms: Google Gemini API (my Build's cloud provider)

My Week 6 cost model runs on `gemini-3.1-flash-lite` with my own AI Studio key. My Run 1 test was on Claude Haiku 4.5. I score Gemini because it's the provider I'd actually deploy on. Pages read 19 Nov 2026. The ai.google.dev URLs now redirect to aistudio.google.com/docs/…

| Field | What I found |
|---|---|
| Vendor | Google, Gemini API via AI Studio (free tier, my key "aaib-week6") |
| Data export: self-service, standard format? | **Not documented.** No export path in the terms or the logs policy. Paid projects log prompts/responses (default max **55 days**, logs-policy). Since **26 Oct 2026** new paid projects "store requests by default" (changelog). On the **free tier** "human reviewers may read, annotate, and process your API input and output" (terms). |
| Published deprecation policy? How long? | Preview models: "at least 2 weeks notice" (models page). Stable models: **no minimum**. Shutdown dates are "the earliest possible dates" (deprecations). Track record: Gemini 2.5 Flash (stable) got ≈29 days (announced 2 Nov, requests auto-routed to `gemini-3.5-flash-lite` from 1 Dec 2026, billed at the replacement's price). My model, `gemini-3.1-flash-lite`, has an earliest shutdown of **7 May 2027**. |
| Price change notice period? | Paid: changes "effective 30 days after they are posted", and continued use = consent (terms). Free tier: nothing. |
| Promotional rate? Expiry? | Not on my model. But published increases are already scheduled: Gemini 3.8 Flash input $0.75 → $1.50 on **1 Jan 2027**, Gemini 4 Carbon input $2.00 → $4.00 on **1 Dec 2026** (pricing page). |
| Something they conspicuously do not commit to | **That my prompt keeps running on the same model.** Deprecated models are *routed* to a replacement, so my outputs can change under the same model name, without an error, and the bill follows the new model. Also no SLA on the free tier (5 of my 8 Week 6 calls got HTTP 503). |

Also: there's an **OpenAI-compatible endpoint** (`…/v1beta/openai/`), still "in beta". My Week 6 script uses the Gemini-native shape (`contents`/`parts`, `usageMetadata`), not that one.

### My own stack: lock-in scorecard

| Dimension | Score | Evidence |
|---|:-:|---|
| 1. Data portability | 1 | Everything I need is plain text in my own git repo: prompt, 15 inputs, expected answers, raw outputs (`../week-06/api/`, `runs/`). What Google keeps is the problem: free-tier inputs can be read by human reviewers and used to improve products, and there's no documented way to export or delete logs. |
| 2. API stability | 2 | Stable models have no minimum notice. 2.5 Flash got ≈29 days and *automatic routing* to a different model. My script calls `v1beta`. My model's earliest shutdown is 7 May 2027, about 6 months away. |
| 3. Pricing control | 2 | List price, unilateral, 30 days' notice on paid, nothing on free; increases already scheduled on two models. **Impact on me is tiny:** my token cost is €0.0011/month (Week 6). |
| 4. Feature dependency | 1 | The prompt and JSON schema are mine and run unchanged on another cloud model (Haiku, Run 1). But the prompt assumes frontier capability: on a 3B model I own it drops from 15/30 to 1/30 (section 5). That's dependency on capability I don't control. |
| 5. Migration cost | 0 | To another cloud model: change URL, key and response parsing (≈2 h), re-run 30 calls and re-score (≈2 h) = **≈4 h ≈ €80** at my €20/h. To my local model: the switch took 1 h tonight, but performance is the price (section 5). |
| **Total** | **6/15** | **Moderate.** The point I fear most: **D2, silent routing.** My prompt's behaviour changes under the same model name and my test set is the only thing that would notice. |

---

## 5. Part 1: my Build on a model I own

**Model B:** `llama3.2` (Llama 3.2 3B, Q4_K_M, 2.0 GB), Ollama 0.40.16 installed via Homebrew, on my MacBook (Apple M4, 16 GB). Same prompt v1, same 15 real inputs, same expected answers, **2 runs each = 30 outputs**, every call fresh (no history), default sampling settings. Run 19 Nov 2026.

| | Model A · cloud | Model B · mine |
|---|---|---|
| Model | Claude Haiku 4.5 (Run 1, 1 Oct 2026) | Llama 3.2 3B, local via Ollama |
| Success rate, same test set (all 10 fields right) | **15/30 = 50%** (A 8/15, B 7/15) | **1/30 = 3%** (A 0/15, B 1/15; only T14-B) |
| Cost per run | **≈ $0.0016** (796 in / 154 out, my Week 6 token counts, × Haiku 4.5 $1 / $5 per 1M, platform.claude.com/pricing, 19 Nov 2026) | **€0 per call.** Honest version: the laptop, the electricity, 2 GB of disk, and I'm the operations team |
| How it failed | Judgment errors on free text. Kept the format 29/30. Mostly **F3 missed** (8, from my own "uncertain → unknown" rule) and **F1 wrong** (7, gear field) | Rule-following errors. **F4 format** on almost everything (event type in Dutch: "verjaardag", "trouw", "personeelsfeest" instead of the allowed values; "0:00" instead of "00:00"; one broken JSON). **F1** on `missing_for_quote` (23/29: it lists fields it *did* fill). Plus new **F2 fabrications** |
| Where the data went | Anthropic's servers, under their terms | **Never left my laptop** |
| Speed | not measured in Run 1 (Week 6 Gemini lab call: 19.8 s) | median **3.4 s** per input, first call 5.3 s (model loading). No truncation: longest input 957 tokens, runner default context 4,096 |
| Consistency (F6) | 5 of 15 inputs differed between runs | **14 of 15** inputs differed between runs |

### The failure profile, field by field (Llama, 29 parseable outputs)

| Field | Right | What went wrong |
|---|:-:|---|
| event_date | **29/29** | nothing, same as Haiku (30/30) |
| start / end time | 26 / 25 | F4 "0:00", "22:00/23:00"; **F1 "02:30" → "14:30"** (T03-A) and "02:00" → "14:00" (T05-B): a 2 a.m. finish turned into an afternoon |
| venue | 26 | **F2** "Izegem" from "KSA Meisjes Izegem" (T11, both runs, *the exact same fabrication Haiku made*); "Gemeentebestuur Ingelmunster" (T15) |
| guest_count | 26 | F3 ignored "80-100" in the T09 remark (both runs); F2 "an estimate" (T11-A, copied from my prompt) |
| dj_gear | 22 | **F1 `on_site` on T06 and T09, both runs: the same dangerous gear error as Haiku, 4/30 = 13% on both models.** F2 `on_site` on T12-A and `dj_brings` on T14-A, where nothing was stated |
| sound_and_light | 25 | F2 `not_needed` on T01 (field was empty); F3 missed "please bring a light installation" (T02) |
| is_booking_inquiry | 28 | F1 the municipal shift e-mail (T15-B) treated as a booking |
| event_type | 6 | **F4** Dutch label instead of the allowed value (22 of 23 errors) |
| missing_for_quote | 6 | **F1** filled with fields that are known |

**How the two failed differently.** Haiku understood the task and got the judgment calls wrong. Llama mostly understood the *content*: dates 29/29, times, venues and guest counts mostly right. It broke the *rules*: allowed values, time format, the logic of `missing_for_quote`, and sometimes valid JSON. Those failures have different fixes. Haiku's need a better prompt and a bigger test set. Llama's are mostly mechanical, so ordinary code can catch them. To check that, [`whatif.py`](whatif.py) lets code do three mechanical jobs (map the Dutch label to the allowed value, pad "0:00", compute `missing_for_quote` from the unknown fields). With that, **Llama goes from 1/30 to 12/30 (40%)**, close to Haiku's 15/30 with no prompt change. That's not the official score. It shows the gap is mostly format, and an abstraction layer can absorb format.

**What no vendor switch fixes:** the gear error. T06 and T09 were wrong on *both* models in *both* runs. The tick box says "gear on site", the free text says otherwise, and both models trust the tick box. The risk is in the step, not the vendor. That's why my value model keeps a human check on the gear field whatever model runs.

**Two smaller findings.** A rented model improves while I sleep; this one is frozen at what I pulled tonight, and upgrading means re-downloading and re-running this whole test. Also, "open-weights" isn't "open source": the Llama 3.2 Community License requires "Built with Llama" on anything I distribute with it, and companies above 700 million monthly users need Meta's permission (dev.meta.ai/llama/llama3_2/license, read 19 Nov 2026). Irrelevant at my size, but it's a vendor's terms all the same.

---

## 6. Part 2: Scenario 2, GhentAccounting, worked

**The five questions, in order:**

1. *Is invoice extraction their competitive advantage?* **No.** Their 300 SME clients pay for bookkeeping and advice. Nobody picks an accountant for their OCR. → Q2
2. *Is this a commoditised problem with good off-the-shelf solutions?* **Yes.** Reading supplier, date, amounts and VAT from invoices in NL/FR/EN, then pushing them into an accounting package, is a mature software category. Exact Online has an API and integrations for exactly this. **→ Buy. Stop here.**

The other three questions only confirm it: one capability, not several (Q3); the job is stable (Q4); and **0 engineers** (Q5) means Build or Connect would create a worse dependency, on a freelancer instead of a vendor. Two months rules out anything custom.

**Lock-in scorecard (bought invoice-OCR SaaS feeding Exact Online):**

| Dimension | Score | Evidence (from the scenario + how this product category works) |
|---|:-:|---|
| 1. Data portability | 1 | The output (bookings) lands in Exact Online, which they already own as system of record; scans stay theirs. What isn't portable is what the tool *learns*: per-supplier recognition rules and corrections. |
| 2. API stability | 1 | The integration is the vendor's job, not theirs: the vendor keeps its Exact connector working. GhentAccounting writes no code that can break. |
| 3. Pricing control | 2 | SaaS per-document or per-seat pricing, set by the vendor at renewal. 15,000 documents/month could push them over a tier. To check before signing: the price-change notice and whether volume tiers are fixed for the contract term. |
| 4. Feature dependency | 1 | No custom code. The dependency is configuration: expense categories, the mapping to their chart of accounts, anomaly rules. Rebuildable, but someone has to redo it. |
| 5. Migration cost | 1 | Weeks, not months (costed below). |
| **Total** | **6/15** | **Moderate** |

**Migration path, costed** (switching to another Exact-integrated OCR vendor; my assumptions marked):

| Item | Estimate | Cost |
|---|---|---:|
| Set-up + mapping by an implementation partner | 3 days × €800/day (assumption) | €2,400 |
| Their own staff: re-do categories and rules, test | 24 h × €40/h loaded (assumption) | €960 |
| One month of double subscriptions while running both | top of their €2,000–5,000 budget | €5,000 |
| Lower accuracy in the first month: extra checking | 10% of 15,000 docs × 1 min = 25 h × €40 | €1,000 |
| **Total** | **≈ 1–2 months** | **≈ €9,400** |

**Why moderate lock-in is acceptable here, and not for FlandersBio or OmniRetail:**
- **What's locked in isn't what they compete on.** At FlandersBio the analysis *is* the company and the data is health data, so any lock-in is lock-in on their IP. At GhentAccounting the locked-in part is a commodity.
- **The system of record stays theirs.** Every booking ends up in Exact Online. OmniRetail had their *data and trained models* inside the vendor. GhentAccounting has only a processing step there.
- **Leaving costs less than staying manual.** ≈€9,400 once, against ≈3 FTE of manual entry the tool replaces (3 × ≈€4,000 loaded per month = ≈€12,000 a month, my assumption). The exit costs less than one month of the problem.
- **Scale.** OmniRetail's €400K exit is what happens when six capabilities and €80M of revenue sit on one vendor. GhentAccounting has one capability and a known €9K exit.

**What I'd still put in the contract:** export of all processed documents + extracted fields as CSV/JSON on request, 60+ days' notice on price changes, and volume tiers fixed for the contract term.

---

## 7. Part 3: if Gemini tripled the price tomorrow

**In money:** nothing to switch for. €0.0011/month × 3 = **€0.0033/month**. At my volume price isn't the trigger.
**In hours:** to another cloud model ≈ **4 h (≈€80)**. To my own laptop: the switch took about **1 h** tonight (install + pull + one script).
**In performance:** 15/30 → **1/30** strict on my own model, **12/30** if code does the mechanical part. The gear error stays at 13% on both.

**So the trigger that would really make me move isn't price.** It's (a) my model being retired or *routed* to another one, which is only announced as an "earliest possible" date, and (b) data terms: on the free tier, real client inquiries (names, addresses, phone numbers) could be read by Google's reviewers. Before real use, that alone rules out the free tier for client data.

### 90-day exit plan

**First week**
- Put the model call behind **one function** (`extract(inquiry) → dict`) that reads the provider from config: Gemini via its **OpenAI-compatible endpoint**, Ollama on `localhost:11434/v1`, or another provider. Then switching is one URL, as the Local Model Lab showed.
- No real client data on the free tier. Paid tier, or local only.

**First month**
- Move the three mechanical jobs into code (allowed values, time format, `missing_for_quote` from the unknown fields) plus a JSON check. Measured effect on my own model: 1/30 → 12/30. It also protects against a cloud model drifting on format.
- Make `run_local.py` + `score.py` my **regression test**: run the 30-call test set on every model I might use, and again whenever Google announces a deprecation or routing change (check the deprecations page monthly).

**First quarter**
- Write v2 of the prompt (free-text remark beats the tick box; "estimate" → keep the value and ask) and test it on *both* models with a written prediction first. Keep Llama warm as the fallback, and try one newer small model (Qwen3 or Phi-4-mini) on the same 30 calls.
- **Whatever the model, a human checks the gear field.** No vendor switch has moved the 13%.

**If we had to leave in 90 days** (checklist format): 1. Move to Llama on my laptop, because it's free and the data stays with me. 2. The work is ≈1 developer-day (≈€160 at my rate), mostly the function and the post-processing. 3. The piece with no clean equivalent is **frontier-level reading of messy free text**; my answer is a human check on gear and price. 4. I'd lose nothing permanently: all data and history are in my repo. 5. The trigger: `gemini-3.1-flash-lite` retired or routed, or the terms allowing training on paid-tier inputs.

---

## 8. MCP understanding check

1. **What does MCP standardise?** How a model connects to tools and data: tool discovery, calling and results in one format. Any MCP-capable model can use any MCP server without rewriting the connection.
2. **Which dimensions does it lower?** D2 (API stability) and D4 (feature dependency) on the tool side. **Not** D1 or D5: an MCP server in front of proprietary data is still proprietary data. OmniRetail with MCP would still have its embeddings and models stuck at Vendor X.
3. **Where does it help most of the three scenarios?** BeneluxMarketing, the Connect path: one developer can swap the LLM or a tool without rewriting integrations. Almost nothing for FlandersBio (custom core) or GhentAccounting (one bought product).
4. **For my own Build?** Not needed: one model, no tools. The standard that helped me tonight is the **OpenAI-compatible request shape**, not MCP: it's why the local switch is one URL.

---

*AI use: Claude installed Ollama on my Mac and wrote and ran the plumbing scripts (`run_local.py`, `score.py`, `whatif.py`). It read the Gemini, Anthropic and Llama terms pages and drafted this memo from my measured results, my Week 4 value model and the course material. The expected answers, the decision to score Gemini as my stack, the "don't invest" direction and the judgment calls in the test set are mine. I reviewed every score and the failure codes before submitting.*
