# Week 7 — Evidence: Lock-in Detection

## 1. My Build on a model I own

Same prompt v1, same 15 test claims, every claim run twice, same scoring rules as Week 2.
Scripts: [`build/run_build.py`](../build/run_build.py) (cloud) and [`build/run_local.py`](../build/run_local.py) (local).
The local script differs from the cloud one in one line: the endpoint URL.
Raw results: [`build/week-06-results.csv`](../build/week-06-results.csv), [`build/week-07-local-results.csv`](../build/week-07-local-results.csv), [`build/week-07-local-sample-response.json`](../build/week-07-local-sample-response.json)

| | Model A · Cloud | Model B · Mine |
|---|---|---|
| **Model** | `gemini-3.1-flash-lite`, Google Gemini API, run 15 Nov 2026 | `llama3.2` (3B, 2.0 GB) via Ollama on my MacBook Air, run 20 Nov 2026 |
| **Success rate, same test set** | 14 of 15 (93.3%) | 7 of 15 (46.7%) |
| **Inconsistent across 2 runs (F6)** | 0 of 15 | 4 of 15 (#2, #8, #10, #13) |
| **Format errors (F4)** | 0 | 0 |
| **Tokens per run (in/out)** | 284 / 34 | 296 / 39 |
| **Latency** | not measured | 1.1 s per call; first call 2.2 s |
| **Cost per run** | $0.00012175 = €0.000112 | €0 per call (laptop, electricity and my own time are not free) |
| **How it failed** | One F1: #11 ("AI") marked Safe to trust, both runs | F6 on 4 claims incl. #10 (CapEx); F1 with an invented justification on #4 and #6 ("well-established"); F1 in the safe direction on #9 and #11 (over-flagging); F5 refusal on a test question about the EU AI Act during setup |
| **Where the data went** | Google's servers (EEA paid-service data terms apply) | Never left my machine |

**How the two failed differently:** Gemini made one mistake, and made it the same way both times, so it is predictable and I can design around it. Llama failed in three different ways at once: it changed its answer on the same claim, it flagged harmless claims for no reason, and it let risky claims through. For Vandermeer, the most dangerous failure is #4 and #6. Llama marked an unverifiable study and a specific EU AI Act article as "Safe to trust" and gave a confident reason ("well-established") both times. A consultant reading that flag has no reason to doubt it, so the error goes straight to the client. Inconsistency is less dangerous because it shows up if you run the check twice; a confident wrong reason does not. And on #10, the CapEx claim at the centre of my beat, Llama gave one answer on the first run and the opposite on the second, which makes it a coin flip on exactly the error my tool exists to catch.

**Exit-cost question — if Google tripled the price tomorrow, what would switching cost?**
- In hours: ~0.25 h to switch code (one URL), ~1 h to re-run and re-score the test set.
- In performance: accuracy 93.3% → 46.7%, consistency 0 → 4 inconsistent claims, and risky claims (#4, #6) passing as safe.
- In money: tripling the price changes almost nothing at my volume: €0.034 → ~€0.10 per month (€0.40 → ~€1.20 per year).
- **Conclusion:** price is not what holds me to Google; model quality is. The real exit trigger is a model shutdown or silent model swap, not a price rise.

## 2. Reading the real terms (Gemini API)

Sources (accessed 20 Nov 2026): Gemini API Additional Terms of Service, effective 23 March 2026 (https://ai.google.dev/gemini-api/terms); Gemini deprecations page (https://ai.google.dev/gemini-api/docs/deprecations).

| Field | Finding |
|---|---|
| Vendor | Google, Gemini API (free tier, EEA user) |
| Data export: self-service, standard format? | Not applicable to my Build: the calls are stateless, nothing is stored at Google. Prompt, test set and results live in my GitHub repo as .md/.csv/.json |
| Published deprecation policy? How long? | A deprecation page lists only the *earliest possible* shutdown dates; Google promises "advance notice" of the exact date but commits to **no fixed period**. `gemini-3.1-flash-lite` (released 7 May 2026): earliest shutdown 7 May 2027, replacement `gemini-3.5-flash-lite`. Its preview version lived 3 Mar – 25 May 2026 (~12 weeks) |
| Price change notice period? | 30 days after posting, "unless otherwise specified"; new paid services can be priced immediately. Continued use = consent |
| Promotional rate? Expiry? | The free quota is not contractual; no expiry date is published |
| **Something they conspicuously do not commit to** | (1) No minimum notice period for model shutdowns. (2) Model names are not stable: `gemini-3.5-flash` now silently routes to `gemini-3.6-flash`; from 1 Dec 2026 `gemini-2.5-flash` routes to `gemini-3.5-flash-lite`, billed at the new rate, with breaking API changes. The same code can get a different model and a different price |

Other relevant terms: free-tier users must not submit sensitive, confidential or personal information; tools offered to users in the EEA may only use Paid Services; Google states its services should not be relied on for financial or other professional advice.

## 3. Lock-in scorecard: my own stack (Build on Gemini API)

| Dimension | Score | Evidence |
|---|:---:|---|
| 1. Data portability | 0 | Stateless API calls; all assets (prompt, test set, results, scripts) are in my repo in standard formats |
| 2. API stability | 2 | Endpoint is `v1beta`; no fixed deprecation notice; model aliases are silently re-routed to newer models (3.5-flash → 3.6-flash) and old ones re-billed at new rates; preview model lived ~12 weeks |
| 3. Pricing control | 2 | List price, no contract; 30-day notice with "unless otherwise specified"; free quota can change |
| 4. Feature dependency | 0 | Plain text prompt, no vendor-specific features; proven by switching to a local model by changing one URL |
| 5. Migration cost | 1 | Code: ~1 h. Quality: accuracy halves on the local model; a usable switch needs prompt v2 or a comparable cloud model (estimate: 4–8 h of prompt work and re-testing) |
| **Total** | **5/15** | **Moderate risk.** The lock-in is not in the code but in model quality and in Google's right to swap the model under the same name |

## 4. Scenario 2: GhentAccounting

**Five questions:**
1. Is AI their competitive advantage? **No** — their advantage is client relationships and accounting expertise. → Q2
2. Commoditised problem with good off-the-shelf solutions? **Yes** — invoice OCR and categorisation in NL/FR/EN is a standard product category with several vendors integrating with accounting software. → **Buy**
3–5. Confirmed: one capability (not many), and 0 engineers means they cannot build or maintain a connect layer.

**Architecture (Buy):**

    Scanned invoices --> Bought invoice-OCR SaaS --> Exact Online (system of record, owned)
                         (bought; can be swapped for     ^
                          another OCR vendor with an     | standard Exact Online API
                          Exact Online connector) -------+
    Staff (3 people) review exceptions in the SaaS interface

**Lock-in scorecard** (assumption-based: no specific vendor chosen):

| Dimension | Score | Evidence / assumption |
|---|:---:|---|
| 1. Data portability | 1 | Extracted invoice data lands in Exact Online, which the firm controls; correction history and custom rules inside the SaaS may not export |
| 2. API stability | 1 | Integration point is Exact Online's published API, not the OCR vendor's |
| 3. Pricing control | 2 | Monthly subscription or per-document tiers, changeable at renewal |
| 4. Feature dependency | 1 | Categorisation rules and approval flows configured in the vendor's UI would need re-creating |
| 5. Migration cost | 1 | ~€8,000 and ~6 weeks (see below) |
| **Total** | **6/15** | **Moderate — acceptable** |

**Migration path, costed (assumptions):** one month running two vendors in parallel (~€3,000 at a €3,000/month subscription, within their €2,000–5,000 budget) + re-configuring the Exact Online connection and rules (~40 h external setup at ~€100/h = €4,000) + retraining 3 staff for one day (24 h × €39/h = €936) + historical data: already in Exact Online (€0). **Total ≈ €8,000, ~6 weeks.**

**Why moderate lock-in is acceptable here:** the bought tool is a commodity with substitutes, the system of record (Exact Online) stays theirs, and switching costs about one month of subscription plus setup. OmniRetail locked its *core infrastructure* (models, embeddings, data) into one vendor; FlandersBio's AI *is* its IP. GhentAccounting is renting a replaceable utility.

## 5. My 90-day exit plan

| When | Action |
|---|---|
| **First week** | Done: prompt, test set, scripts and results in GitHub; model endpoint in one line. Add: record the exact model ID with every run (to detect silent re-routing) |
| **First month** | Write prompt v2 ("Insufficient context" option); run it on both Gemini and Llama; check whether v2 closes the gap on #4, #6 and #10 on the local model |
| **First quarter** | Replace the self-written test set with real AI-generated claims; move client work to the paid tier (EEA rule); check the deprecations page monthly; set the trigger in advance: switch when the model gets a shutdown date or is re-routed, not when price rises |

## 6. Class activities, completed independently

I was absent from the 16 November session, so I worked through these from the Week 7 page afterwards. There was no in-class vote or pair discussion behind them.

**Warm-up (Path A: one provider's full suite vs Path B: three providers on open standards):** For a first prototype I would choose Path A, because speed matters more than flexibility before you know the product works. But I would keep the exits open from day one: prompts and data stored in my own formats, and one place in the code where the vendor is called. My own Build shows why that is enough at the start: moving it to another model took one line of code. What did not move with it was the quality, and no architecture choice fixes that.

**OmniRetail lock-in points:**

| # | Lock-in point | Decision that created it | Avoidable? | Cost of avoiding it then |
|---|---|---|---|---|
| 1 | Conversation logs | Stored only in Vendor X's proprietary schema | Yes: keep own copy in a standard format | Days of work |
| 2 | Fine-tuned recommendation models | Trained and hosted only on Vendor X | Partly: keep training data, fine-tune portable models | Weeks |
| 3 | Product embeddings | Proprietary embedding model and vector DB | Yes: open embedding model + standard vector store | ~1 week |
| 4 | Prompts and templates | Kept inside Vendor X's workflow builder | Yes: keep prompts in own repo | Hours |
| 5 | Fraud detection model | Trained on Vendor X's ML platform, not exportable | Partly: exportable model format | Weeks |
| 6 | Analytics | Vendor X's warehouse and BI | Yes: own warehouse | Weeks |
| 7 | **No abstraction layer** | Every tool built against Vendor X's response format | Yes | ~2 weeks, ~€15,000 (course figure) vs €400,000 and 6 months now |

Most expensive and hardest to undo: the fine-tuned models and the fraud model (they live on Vendor X's infrastructure). The single cheapest fix would have been the abstraction layer.

**Scenario sketches:**

    FlandersBio (Build):
      Genomic data (own infrastructure) --> Custom pipeline + biomarker DB (custom, core IP)
        --> Open-source models / PostgreSQL (open standards) --> Auditable reports

    BeneluxMarketing (Connect):
      Own integration layer (MCP / OpenAI-compatible APIs)
        --> swappable tools: content generation, social listening, analytics,
            personalisation, competitive intelligence

**MCP check:** MCP lowers lock-in on Dimension 2 because the tool interface stays the same when the model behind it changes, and on Dimension 4 because integrations are built against an open spec instead of one vendor's function-calling format. It helps BeneluxMarketing, which wires many tools together, but does little for GhentAccounting, which buys one tool and maintains no integration layer. It would not help my Build either: my lock-in is model quality, not tool wiring.

---
*AI use: I used an AI assistant to help structure this evidence and phrase my conclusions in English. All measurements come from my own runs, and the conclusions reflect my own view of the results.*