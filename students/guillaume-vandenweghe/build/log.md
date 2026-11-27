# Build log — every run, every failure (Week 2)

> Never delete a row. A log full of successes is a log that has been curated.

## The Job

**One sentence:** My tool takes one customer email sent to a Belgian non-life insurer and produces one of six categories (NEW_CLAIM, CLAIM_FOLLOWUP, POLICY_CHANGE, CANCELLATION, COMPLAINT, UNCLEAR) plus the language. I can tell it is right because the expected label is written in `test-set.md` before running, and two people can agree on a label.

- **Input:** one customer email (NL / FR / EN / mixed)
- **Output:** two lines — `CATEGORY:` and `LANGUAGE:`
- **User:** the first-line mail desk of a claims department, so each email lands in the right queue
- **Checkable?** Yes — six fixed labels and four language codes; no taste involved.

## The Test Set

- **Source:** 12 public Trustpilot reviews of Belgian insurers (AG Insurance, Baloise, AXA, Ethias and others)
- **Real or invented:** 12 real, 0 adapted, 0 invented
- **Anonymised:** yes — claim numbers and city names replaced by `[CLAIM]` and `[CITY]`
- **Awkward cases covered:** 2 in French, 5 English/mixed, 2 very short, 1 UNCLEAR, 3 angry status questions, 1 Ombudsman complaint, 2 with several requests, 1 long and rambling. Not covered: an "am I covered for…?" question.

## Run setup

- **Model and version:** Claude Opus 5.5 · **Interface:** Claude chat · **Date of runs:** 2026-10-05
- **Method (deviation from one email per chat, disclosed):** prompt v1 was used unchanged, with all 12 emails in one message and the instruction to classify each email separately. Run A and Run B were two separate new chats with exactly the same message. The model also returned a summary table, which is what is logged below.
- The expected answers were committed in `test-set.md` before the runs and were not in the message sent to the model.

## Run table — prompt v1

| # | Input (short label) | Expected | Got A | Got B | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | AG, claim took a year, already paid | COMPLAINT, NL | UNCLEAR, NL | COMPLAINT, NL | ❌ | F6 (A: F1) |
| 2 | Baloise, policy cancelled, Ombudsman | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ | |
| 3 | "UNE HONTE" 45 min on hold | COMPLAINT, FR | UNCLEAR, FR | UNCLEAR, FR | ❌ | F1 |
| 4 | AXA work accident, hospital costs | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | ✅ | |
| 5 | Ethias bike, no reimbursement | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | ✅ | |
| 6 | "-10 Star", résiliation ignored | CANCELLATION, MIXED | CANCELLATION, MIXED | CANCELLATION, MIXED | ✅ | |
| 7 | 3 unpaid claims, wants to cancel | CANCELLATION, NL | CANCELLATION, NL | CANCELLATION, NL | ✅ | |
| 8 | Bank account + address change | POLICY_CHANGE, NL | POLICY_CHANGE, NL | POLICY_CHANGE, NL | ✅ | |
| 9 | Baloise glass breakage invoice | CLAIM_FOLLOWUP, MIXED | CLAIM_FOLLOWUP, MIXED | CLAIM_FOLLOWUP, MIXED | ✅ | |
| 10 | Ethias theft refused, 24h rule | COMPLAINT, EN | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | ❌ | F1 |
| 11 | "The most useless insurance" | UNCLEAR, EN | UNCLEAR, EN | UNCLEAR, EN | ✅ | |
| 12 | Claim > 1 year, Test-Aankoop | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ | |

Verdict = ✅ correct in both runs (category AND language) · ❌ wrong in at least one run.

**Score:** 9 correct out of 12 → 75%

- Category: run A 9/12 (75%), run B 10/12 (83%); correct in both runs 9/12 (75%)
- Language: 24/24 runs correct (100%)
- Consistency: 11 of 12 inputs got the same answer in run A and run B (only #1 changed)

## Failures by type

| Code | Type | Count | Which inputs |
|---|---|---|---|
| F1 | Wrong — confidently incorrect label | 3 | #1 (run A only), #3, #10 |
| F2 | Fabricated — invented details not in the email | 0 | |
| F3 | Missed — overlooked something that was in the email | 0 | |
| F4 | Format — right content, not the two-line format | 0 in the tables | The per-email two-line answers (part 1) were not saved, so only the tables were checked |
| F5 | Refused — hedged or asked a question instead of answering | 0 | |
| F6 | Inconsistent — run A ≠ run B | 1 | #1 |

All three failed inputs (#1, #3, #10) have COMPLAINT as the expected answer.

## What surprised me
All three failures (#1, #3, #10) sit on the COMPLAINT boundary, and in each case the model followed rule 2 of my own prompt ("frustration alone is not a COMPLAINT") more strictly than I did when I wrote the expected answers. So the problem is not only the model: my rule and my expected answers disagree, and I have to decide which one is wrong before I change the prompt in v2. The language was correct in all 24 runs, even for the mixed and very short emails.

## The failure that would matter most

A real complaint sorted as something else. In this test that happened in #10: an angry customer whose theft claim was refused was sorted as CLAIM_FOLLOWUP in both runs, so in a live system the email would sit in the normal claims queue and nobody from complaints handling would see it. The customer gets a standard reply or none, escalates, and the insurer risks an Ombudsman case, a lost customer and a public review like the ones in this test set. A complaint sorted as UNCLEAR (#1 run A, #3) is less dangerous, because UNCLEAR still goes to a human. The opposite mistake, a normal question treated as a complaint, only costs some extra handling time.
## Deployment probe — plan

| | Plan |
|---|---|
| **Machine(s)** | Laser cutter (MDF or acrylic, with the category names engraved) |
| **Artifact** | A small desk mock of a claims mail desk: six labelled trays, one per category (NEW_CLAIM, CLAIM_FOLLOWUP, POLICY_CHANGE, CANCELLATION, COMPLAINT, UNCLEAR), with printed test emails on cards. A claims handler or classmate sorts the cards by hand next to the tool's label, to see whether they trust the label at a glance and where the COMPLAINT tray gets missed. |
| **Fablab session** | An open fablab session before Week 4 (CP1). The agenda link on the course page returned a 404 on 5 October, so I will ask fablab@arteveldehs.be for the next open slot and note the date here. |

## Week 3 — test-set swap (partner input through my prompt)

**Setup:** I ran a classmate's input through my prompt v1, unchanged. Same method as Week 2: a new chat per run, run A and run B, one email per chat.

- **Partner / source:** Janis Krainis — `students/janis-krainis/build/test-set.md`, input 1 (freight booking email)
- **Model and version:** Claude Opus 5.5 · **Date of runs:** 2026-10-09
- **Expected answer written before running:** yes. I used the rules of my own prompt: the email is not about insurance, so the correct answer is UNCLEAR.
- **Why this input:** it is out of scope for my tool, but it contains words that could pull it into a claims category ("auto spare parts", "shipment", "warehouse"). A real claims inbox also receives emails that are not about insurance, such as wrong-address mail, supplier mail and spam.

| # | Input (short label) | Expected | Got A | Got B | Verdict | Failure code |
|---|---|---|---|---|---|---|
| S1 | Freight booking, 1,200 kg auto spare parts Antwerp → Vienna (EN) | UNCLEAR, EN | UNCLEAR, EN | UNCLEAR, EN | ✅ | — |

**Result:** 1 correct out of 1 → 100%. Both runs gave the same answer (no F6), in the exact two-line format (no F4).

**What broke and why it matters:** nothing broke. The tool did not force the out-of-scope email into a claims queue, even though it mentions car parts. This shows rule "UNCLEAR = not about insurance" works for a clear case. It does not show the tool is robust in general: the swap tested a boundary that was easy for my prompt. My weakest boundary is still COMPLAINT (Week 2: #1, #3 and #10 failed there). A harder swap input would be an email that is partly about insurance, for example a garage asking about payment for a repair.

**Change planned for prompt v2 (not made yet):** none from this input. Prompt v2 will focus on the COMPLAINT boundary found in Week 2: first decide whether my rule 2 or my expected answers are wrong, then change only that.

**Updated total (Week 2 + swap):** 10 correct out of 13 inputs → 77%.

## Week 4 — value estimate (what my measured rate is worth)

**Self-diagnostic pattern:** 4, guessed error cost. My result depends on the cost of a hidden complaint, and that number is an estimate.

Rates use run level: 26 runs (13 inputs × 2). 21 of 26 correct = 81% (strict, both runs right: 75%). Non-complaint runs: 16/16 correct. Complaint runs: 10, of which 5 correct, 3 → UNCLEAR (a human still sees them), 2 → CLAIM_FOLLOWUP (hidden complaint, #10 in both runs).

| Line | Value | Formula / source |
|---|---|---|
| What the job costs a human today | €0.83 per email | 1.5 min (est.) × €33/h (course loaded cost reference: €38,000 × 1.4 ÷ 1,600) |
| Volume | 20,000 emails/month | Estimate, same as Week 1 and 2 |
| Measured success rate | 81% of runs (75% strict) | This log, Week 2 + Week 3 swap |
| Gross benefit at 100% | €198,000/year | 20,000 × €0.83 × 12 |
| Gross benefit at my rate | €195,030/year | Complaints are 3% (est.): (19,400 × 100% + 600 × 50%) × €0.83 × 12 |
| What each failure costs, and who pays | UNCLEAR: €0 extra (a human sorts it, as today). Hidden complaint: €96.60, paid by the insurer and the customer | 30 min × €33 = €16.50 + 10% Ombudsman × 6 h × €46 = €27.60 + 15% churn × €350 margin = €52.50 (all est.) |
| Failure cost per year | −€139,104 | 600 × 20% = 120/month × €96.60 × 12 |
| AI cost | −€15,561/year + €30,000 one-time | Tokens €561 (Standard tier, 1,150 in / 20 out) + monitoring €10,000 + IT €5,000 (est.) |
| **Net benefit** | **€10,365 in year 1 · €40,365/year after** | Payback 8.9 months |

**At my measured rate, is this worth building?** Only just, and not safely: with time savings 50% lower, year 1 is −€87,150. Break-even is at 26% of complaints hidden; v1 hides 20%, measured on only 10 complaint runs.
**What rate would it need?** Hidden complaints ≤ 5% of complaints, even if that costs automation (90% of normal emails auto-sorted). Then year 1 net is €94,300 and payback 2.9 months; still +€7,000 with a 50% haircut. That looks reachable with prompt v2 (send every dissatisfied email it is unsure about to a human), but I have to measure it.

## Checkpoint 1 (Week 4)

1. **What it does:** sorts one customer email to a Belgian non-life insurer into one of six queues plus its language, in a fixed two-line format.
2. **What I measured:** 13 real inputs (12 Trustpilot reviews + 1 classmate swap), expected answers written before running, every input run twice: 21/26 runs correct (81%), 10/13 inputs correct in both runs (77%), language 26/26.
3. **Dominant failure type:** F1, confidently wrong, all on the COMPLAINT boundary (#1 run A, #3, #10); one F6 (#1).
4. **Failure that would matter most:** a real complaint sorted as CLAIM_FOLLOWUP (#10): nobody in complaints handling sees it, and it can become an Ombudsman case. It is also the line that decides my business case (€139,104/year).
5. **What I would change first:** prompt v2 on the COMPLAINT boundary only: decide first whether rule 2 or my expected answers are wrong, then add a test set with more complaint and non-complaint emails, so the hidden-complaint rate is measured on more than 10 runs.

**Deployment scenario (locked):** the tool pre-sorts the claims inbox of a mid-sized Belgian non-life insurer; COMPLAINT and UNCLEAR always go to a human; first live use only as an 8-week shadow pilot next to the human sorters.

### Deployment probe — status Week 4

| | Status |
|---|---|
| **Machine(s)** | Laser cutter (unchanged from the plan above) |
| **Artifact** | Six-tray claims mail desk with printed test emails on cards (unchanged) |
| **Fablab session** | Not booked yet: requested by e-mail to fablab@arteveldehs.be on 16 October 2026; I will add the date here when it is confirmed. |

## Week 6 — cost it for real (API calls)

**Setup:** prompt v1 unchanged, the 12 inputs of `test-set.md`, each run twice (run A, run B), one API call per run, default settings. Calls made with a bash/curl script on 2026-10-29 (same GET /models and POST requests as the Hoppscotch lab). Raw responses: `build/week6-results/`. Expected answers unchanged since Week 2.

- **Provider 1:** Google Gemini API, model `gemini-3.1-flash-lite` (free tier). Price $0.25 / $1.50 per 1M tokens (ai.google.dev/gemini-api/docs/pricing, 29 Oct 2026).
- **Provider 2:** Groq, model `openai/gpt-oss-20b` (free tier). Price $0.075 / $0.30 per 1M tokens (console.groq.com/docs/models, 29 Oct 2026).

### Run table — Google `gemini-3.1-flash-lite` (tokens = input + output, run A / run B)

| # | Expected | Got A | Got B | Verdict | Failure code | Tokens |
|---|---|---|---|---|---|---|
| 1 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 676+9 / 676+9 |
| 2 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 872+9 / 872+9 |
| 3 | COMPLAINT, FR | COMPLAINT, FR | COMPLAINT, FR | ✅ |  | 458+9 / 458+9 |
| 4 | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | ✅ |  | 477+10 / 477+10 |
| 5 | CLAIM_FOLLOWUP, EN | COMPLAINT, EN | COMPLAINT, EN | ❌ | F1 | 530+9 / 530+9 |
| 6 | CANCELLATION, MIXED | CANCELLATION, MIXED | CANCELLATION, MIXED | ✅ |  | 513+11 / 513+11 |
| 7 | CANCELLATION, NL | CANCELLATION, NL | CANCELLATION, NL | ✅ |  | 481+10 / 481+10 |
| 8 | POLICY_CHANGE, NL | COMPLAINT, NL | COMPLAINT, NL | ❌ | F1 | 592+9 / 592+9 |
| 9 | CLAIM_FOLLOWUP, MIXED | CLAIM_FOLLOWUP, NL | COMPLAINT, NL | ❌ | F1, F6 | 538+10 / 538+9 |
| 10 | COMPLAINT, EN | COMPLAINT, EN | COMPLAINT, EN | ✅ |  | 544+9 / 544+9 |
| 11 | UNCLEAR, EN | UNCLEAR, EN | UNCLEAR, EN | ✅ |  | 440+8 / 440+8 |
| 12 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 556+9 / 556+9 |

**Score:** 18 of 24 runs correct (75%); hidden complaints 0/10; complaint → UNCLEAR 0/10; inconsistent: #9.

### Run table — Groq `openai/gpt-oss-20b`

| # | Expected | Got A | Got B | Verdict | Failure code | Tokens |
|---|---|---|---|---|---|---|
| 1 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 700+441 / 700+216 |
| 2 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 885+557 / 885+604 |
| 3 | COMPLAINT, FR | UNCLEAR, FR | UNCLEAR, FR | ❌ | F1 | 509+1037 / 509+1586 |
| 4 | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | ✅ |  | 527+234 / 527+213 |
| 5 | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | ✅ |  | 576+513 / 576+379 |
| 6 | CANCELLATION, MIXED | CANCELLATION, MIXED | CANCELLATION, MIXED | ✅ |  | 561+366 / 561+248 |
| 7 | CANCELLATION, NL | CANCELLATION, NL | CANCELLATION, NL | ✅ |  | 527+222 / 527+240 |
| 8 | POLICY_CHANGE, NL | CANCELLATION, NL | CANCELLATION, NL | ❌ | F1 | 621+335 / 621+570 |
| 9 | CLAIM_FOLLOWUP, MIXED | CLAIM_FOLLOWUP, NL | CLAIM_FOLLOWUP, NL | ❌ |  | 576+300 / 576+463 |
| 10 | COMPLAINT, EN | UNCLEAR, EN | COMPLAINT, EN | ❌ | F1, F6 | 586+903 / 586+218 |
| 11 | UNCLEAR, EN | UNCLEAR, EN | UNCLEAR, EN | ✅ |  | 492+497 / 492+364 |
| 12 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 589+347 / 589+610 |

**Score:** 17 of 24 runs correct (71%); hidden complaints 0/10; complaint → UNCLEAR 3/10; inconsistent: #10. Average reasoning tokens per run: 458 (billed as output).

### Cost per run and per month (20,000 emails/month, est.)

| | Google | Groq |
|---|--:|--:|
| Avg tokens per run (in / out) | 556 / 9.3 | 596 / 477.6 |
| Cost per run | $0.0001530 | $0.0001880 |
| Monthly token cost | €2.82 | €3.46 |
| Monthly error cost at this provider's measured rate | €11,432 | €4,721 |

**Costing with my Week 2 measured rate (the Build costing for Canvas):** 120 hidden complaints/month × €96.60 + 180 UNCLEAR × €0.83 = €11,740 a month, 4,169 × the token bill of €2.82 (Google).

**What I learned:** (1) Via the API, neither model hid a complaint (Claude chat hid #10 in both Week 2 runs; Gemini now labels it COMPLAINT twice), but Gemini over-flags complaints: 5 of 14 non-complaint runs. My COMPLAINT boundary is still the problem; only the direction of the error changed. (2) My Week 4 token guess (1,150 input) was about twice too high: the real prompt plus email is 440–872 tokens on Gemini. (3) A low price per token does not mean a low cost per run: gpt-oss-20b spends 193–1,568 reasoning tokens on a two-line answer. (4) My test set is all angry reviews, which inflates false complaints. For prompt v2 I need calm emails in the test set as well.

## Week 7 — a model I own (local run, Llama 3.2 3B)

**Setup:** prompt v1 unchanged, the 12 inputs of `test-set.md`, expected answers unchanged since Week 2, each run twice (run A, run B), one call per run, default settings. Runner: Ollama 0.40.16 (MIT licence), model `llama3.2` (Meta Llama 3.2, 3.2B parameters, Q4_K_M, 2.0 GB, Llama 3.2 Community License). Run on 2026-11-20 at 10:45 UTC on a MacBook Air (Apple M4, 16 GB, macOS 26.5.2). Wifi **off** during all runs (script check: `network_during_run: OFFLINE`); every call went to `localhost:11434`. Context length not changed (longest input 953 tokens, well under the default). One warm-up call, not counted. No fallback needed. Raw responses: `build/week7-results/`.

### Run table — Llama 3.2 3B, local

| # | Expected | Got A | Got B | Verdict | Failure code | Tokens in+out (A / B) | Seconds (A / B) |
|---|---|---|---|---|---|---|---|
| 1 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 720+11 / 720+11 | 1.1 / 0.3 |
| 2 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 953+11 / 953+11 | 1.7 / 0.3 |
| 3 | COMPLAINT, FR | COMPLAINT, FR | UNCLEAR, MIXED | ½ | F1, F6 | 468+11 / 468+10 | 0.4 / 0.3 |
| 4 | CLAIM_FOLLOWUP, FR | NEW_CLAIM, FR | COMPLAINT, MIXED | ❌ | F1, F6 | 487+10 / 487+12 | 0.4 / 0.3 |
| 5 | CLAIM_FOLLOWUP, EN | COMPLAINT, EN | COMPLAINT, EN | ❌ | F1 | 531+11 / 531+11 | 0.5 / 0.3 |
| 6 | CANCELLATION, MIXED | COMPLAINT, EN | COMPLAINT, EN | ❌ | F1 | 518+11 / 518+11 | 0.5 / 0.3 |
| 7 | CANCELLATION, NL | COMPLAINT, EN | CANCELLATION, NL | ½ | F1, F6 | 502+11 / 502+11 | 0.5 / 0.3 |
| 8 | POLICY_CHANGE, NL | CANCELLATION, EN | CANCELLATION, NL | ❌ | F1 | 622+11 / 622+11 | 0.7 / 0.3 |
| 9 | CLAIM_FOLLOWUP, MIXED | COMPLAINT, MIXED | COMPLAINT, EN | ❌ | F1 | 551+12 / 551+11 | 0.6 / 0.3 |
| 10 | COMPLAINT, EN | COMPLAINT, EN | COMPLAINT, EN | ✅ |  | 546+11 / 546+11 | 0.6 / 0.3 |
| 11 | UNCLEAR, EN | COMPLAINT, EN | UNCLEAR, EN | ½ | F1, F6 | 448+11 / 448+9 | 0.5 / 0.2 |
| 12 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, EN | ½ | F1 (language) | 588+11 / 588+11 | 0.6 / 0.3 |

**Score:** 10 of 24 runs correct (42%); category only 11 of 24; language 16 of 24. Hidden complaints 0 of 10; complaint → UNCLEAR 1 of 10; normal emails in a wrong queue 12 of 14 (9 of them to COMPLAINT); inconsistent A ≠ B: #3, #4, #7, #11. No format errors, invented labels or refusals.

### Failures by type

| Code | Count (runs) | Where |
|---|--:|---|
| F1 wrong (category) | 13 | #3B, #4 A+B, #5 A+B, #6 A+B, #7A, #8 A+B, #9 A+B, #11A |
| F1 wrong (language only) | 1 | #12B (NL labelled EN); language also wrong in 7 runs that already had a wrong category |
| F2 fabricated | 0 | |
| F3 missed | 0 | |
| F4 format | 0 | every answer was exactly two parseable lines |
| F5 refused | 0 | |
| F6 inconsistent | 4 inputs | #3, #4, #7, #11 |

### Cloud vs local

| | Model A: Google `gemini-3.1-flash-lite` (cloud API, Week 6) | Model B: `llama3.2` (local, Ollama) |
|---|---|---|
| Model and size | Closed weights, size not published | Open weights, 3.2B parameters, Q4_K_M |
| Run date | 2026-10-29 | 2026-11-20 |
| Success rate (category + language) | 18 of 24 runs (75%) | **10 of 24 runs (42%)** |
| Category only | 18 of 24 | 11 of 24 |
| Hidden complaints (the failure that matters) | 0 of 10 | **0 of 10** |
| Complaint → UNCLEAR (a human still sees it) | 0 of 10 | 1 of 10 |
| Normal emails in the wrong queue | 5 of 14 | 12 of 14 |
| Inconsistent A ≠ B (F6) | #9 | #3, #4, #7, #11 |
| Format errors (F4) / invented labels (F2) | 0 / 0 | 0 / 0 |
| Avg tokens per run (in / out) | 556 / 9.3 | 578 / 10.9 |
| Cost per run | $0.000153 = €0.000141 (API) | €0 API · electricity ≈ €0.000001 (est.) |
| Monthly cost at 20,000 emails | €2.82 tokens | €0 API · ≈ €0.02 electricity (est.: 20 W × run time × €0.30/kWh) · hardware not priced (existing laptop) |
| Time per email | not measured in Week 6 | avg 0.5 s (range 0.2–1.7 s); time to first token ≈ 0.2 s |
| Capacity check | n/a | 20,000 emails × 0.47 s ≈ 2.6 hours of laptop time a month: speed is not the problem |
| Monthly error cost at this rate (est.) | €11,432 | **€27,487** |
| Where the data went | Google's servers; under the EEA terms not used to improve products, logged for a limited time for abuse detection, may be cached "in any country" where Google has facilities | Stayed on the laptop: wifi was **OFFLINE** during all runs. Only the model download (≈ 2 GB) used the internet |
| Hardware | none needed | MacBook Air, Apple M4, 16 GB RAM (`Mac16,12`), macOS 26.5.2, Ollama 0.40.16. No slowdown, crash or truncation |
| Context length | default | Not changed (Ollama default, ≈ 4K per the lab); the model supports 131,072. My longest input is 953 tokens (#2), so nothing was cut off |

**What I learned:** (1) Running a model I own works and is fast: half a second per email on a laptop, €0 API fee, and the emails never left the machine. (2) But the 3B model is not good enough for my task: it labels 18 of 24 runs COMPLAINT, so it fails my gate on normal emails (12 of 14 misrouted vs the ≤ 15% target). (3) It fails in the safe direction (no hidden complaints), like Gemini and Groq, but much more often and less consistently. (4) Owning the weights removes the price, shutdown and data-location risks, but not the need to re-measure: the test set is what makes any exit possible. Next: try a larger open model (7–8B) on the same 12 inputs before counting local as my fallback.

## Week 8 — Build Checkpoint 2: prompt v2, predicted and re-measured

**Short version:** I changed one thing (the COMPLAINT boundary, as a 5-step decision procedure with three examples), predicted the effect on Llama 3.2 3B, and re-ran all 12 inputs twice with v1 and v2 on the same day, offline. **My prediction was wrong for the model I made it for:** on the 3B model v2 made over-flagging worse (normal → COMPLAINT 9 → 12 of 14). **On the 8B model it did what I expected:** hidden complaints 3 → 0 of 10, normal → COMPLAINT 4 → 2 of 14, overall 12 → 16 of 24.
### 1. Reason and prediction (written before the run)

**Written:** 2026-11-27, 14:25 UTC, before any v2 output existed. Run follows on the same day.

#### Why revise, and what
**Reason (from my own log).** Two problems point at the same spot, the COMPLAINT boundary:
1. Week 4 passport: my rule 2 ("frustration alone is not a complaint, unless escalation / compensation / Ombudsman") disagrees with my own Week 2 expected answers. #3 ("UNE HONTE! 3/4 heure au téléphone") and #10 (theft claim refused, no compensation asked) are COMPLAINT in my test set but fail rule 2 as written.
2. Week 7: Llama 3.2 3B called 18 of 24 runs COMPLAINT, 9 of 14 normal-email runs went to COMPLAINT. Gemini (Week 6) did the same on a smaller scale (#5, #8). All my emails are angry; the model reads anger as "complaint".

**The one change (prompt v1 → v2).** The category list, the output format and the language line stay the same. Only the COMPLAINT boundary changes:
- one sentence that says anger is normal and does not decide the category;
- an ordered 5-step decision procedure: (1) mentions complaint / Ombudsman / lawyer / Test-Aankoop / FSMA / compensation → COMPLAINT; (2) still waiting for one concrete action on a claim, contract change or cancellation → that queue, even if angry; (3) new damage → NEW_CLAIM; (4) contests a finished decision or treatment → COMPLAINT; (5) otherwise UNCLEAR;
- three short invented examples, not taken from the test set.
The expected answers in `test-set.md` are **not** changed: v2 writes down the boundary I already used in Week 2. Prompt grows from 292 to 406 words.

**Documented practice behind it.** Few-shot examples improve task performance without retraining (Brown et al., 2020); vendor guides say "a few well-crafted examples … improve accuracy and consistency" and recommend numbered sequential steps when order matters (Anthropic, n.d.; OpenAI, n.d.). Counter-evidence: small models copy the label of the examples they see (majority / recency label bias; Zhao et al., 2021). That gives a testable risk: v2 may push emails towards CLAIM_FOLLOWUP, the label of my first example.

#### Prediction (llama3.2 3B, same 12 inputs × 2 runs, compared with v1)
| Measure | v1 (Week 7, measured) | v2 predicted |
|---|---|---|
| Correct (category + language) | 10 / 24 | **14–16 / 24** |
| Normal emails in a wrong queue | 12 / 14 | **≤ 6 / 14** |
| Normal emails → COMPLAINT | 9 / 14 | **≤ 4 / 14** |
| Hidden complaints (the dangerous one) | 0 / 10 | **≤ 1 / 10** (risk: #1 or #10 read as "waiting for payment" → CLAIM_FOLLOWUP) |
| Language correct (control, not touched) | 16 / 24 | **16 ± 2 / 24** (no change expected) |
| Inconsistent A ≠ B (F6) | 4 inputs | about the same (2–5) |
| Input tokens per call | 578 | **≈ +150** (longer prompt) → ≈ +25 % token cost if priced at the Gemini 3.1 Flash-Lite rate |

**If llama3.1:8b is also run:** v1 on 8B scores better than v1 on 3B; v2 helps less on 8B than on 3B.

**What would prove me wrong:** normal → COMPLAINT stays above 6 of 14 (the model ignores the steps), or hidden complaints rise to 2 or more (the fix moved the error into the dangerous direction).


### 2. Setup of the run
- Same 12 inputs from `test-set.md`, expected answers unchanged since Week 2. Every input × 2 runs (A, B), one call per run, default settings (temperature not changed).
- **Same day, same machine, v1 and v2 back to back**, so the v1 run is a fresh control and not only last week's numbers.
- Models: `llama3.2` (3.2B, Q4_K_M, digest a80c4f17acd5) and, as an extra, `llama3.1:8b` (8B, 4.9 GB, digest 46e0c10c039e). Runner Ollama 0.40.18. MacBook Air, Apple M4, 16 GB, macOS 27.2.1.
- Run on 2026-11-27 from 14:45 UTC. Wifi **off**, script check `network_during_run: OFFLINE`. One warm-up call per model, not counted. 96 counted calls, all HTTP 200.
- Raw responses: `build/week8-results/local/` (file name = model_prompt_email_run).

### 3. Results

| Measure (24 runs each) | 3B v1 (Week 7) | 3B v1 (today) | **3B v2** | 8B v1 | **8B v2** | Gemini 3.1 Flash-Lite v1 (Week 6) |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Correct (category + language) | 10 | 7 | **8** | 12 | **16** | 18 |
| Category correct | 11 | 11 | 12 | 15 | **19** | 18 |
| Language correct | 16 | 16 | 19 | 20 | 20 | n/a |
| **Hidden complaints** (of 10) | 0 | 0 | 0 | **3** | **0** | 0 |
| Complaint → UNCLEAR (of 10) | 1 | 1 | 0 | 0 | 0 | 0 |
| Normal emails in a wrong queue (of 14) | 12 | 12 | 12 | 6 | 5 | 5 |
| Normal → COMPLAINT (of 14) | 9 | 9 | **12** | 4 | **2** | 5 |
| Inconsistent A ≠ B (F6), inputs | 4 | 5 | 3 | 1 | 3 | 1 |
| Format errors / invented labels | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Avg tokens in / out | 578 / 10.9 | 578 / 11.0 | 771 / 11.1 | 563 / 10.8 | 756 / 10.8 | 556 / 9.3 |
| Avg seconds per call | 0.47 | 0.48 | 0.52 | 0.96 | 1.10 | — |

#### llama3.2 3B — prompt v1 (control, re-run today)

| # | Expected | Got A | Got B | Verdict | Failure code | Tokens in+out (A / B) | Seconds (A / B) |
|---|---|---|---|---|---|---|---|
| 1 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 720+11 / 720+11 | 1.1 / 0.3 |
| 2 | COMPLAINT, NL | COMPLAINT, EN | COMPLAINT, EN | ❌ | F1 (language) | 953+11 / 953+11 | 1.7 / 0.3 |
| 3 | COMPLAINT, FR | COMPLAINT, FR | UNCLEAR, MIXED | ½ | F1, F6 | 468+11 / 468+10 | 0.4 / 0.3 |
| 4 | CLAIM_FOLLOWUP, FR | COMPLAINT, MIXED | NEW_CLAIM, MIXED | ❌ | F1, F6 | 487+12 / 487+11 | 0.5 / 0.3 |
| 5 | CLAIM_FOLLOWUP, EN | COMPLAINT, EN | COMPLAINT, EN | ❌ | F1 | 531+11 / 531+11 | 0.5 / 0.3 |
| 6 | CANCELLATION, MIXED | COMPLAINT, MIXED | COMPLAINT, MIXED | ❌ | F1 | 518+12 / 518+12 | 0.5 / 0.3 |
| 7 | CANCELLATION, NL | COMPLAINT, NL | COMPLAINT, NL | ❌ | F1 | 502+11 / 502+11 | 0.5 / 0.3 |
| 8 | POLICY_CHANGE, NL | CANCELLATION, EN | CANCELLATION, NL | ❌ | F1, F6 | 622+11 / 622+11 | 0.7 / 0.3 |
| 9 | CLAIM_FOLLOWUP, MIXED | COMPLAINT, MIXED | COMPLAINT, MIXED | ❌ | F1 | 551+12 / 551+12 | 0.6 / 0.3 |
| 10 | COMPLAINT, EN | COMPLAINT, EN | COMPLAINT, EN | ✅ |  | 546+11 / 546+11 | 0.6 / 0.3 |
| 11 | UNCLEAR, EN | UNCLEAR, EN | UNCLEAR, MIXED | ½ | F1 (language), F6 | 448+9 / 448+10 | 0.5 / 0.2 |
| 12 | COMPLAINT, NL | COMPLAINT, EN | COMPLAINT, NL | ½ | F1 (language), F6 | 588+11 / 588+11 | 0.7 / 0.3 |

#### llama3.2 3B — prompt v2

| # | Expected | Got A | Got B | Verdict | Failure code | Tokens in+out (A / B) | Seconds (A / B) |
|---|---|---|---|---|---|---|---|
| 1 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 913+11 / 913+11 | 2.4 / 0.3 |
| 2 | COMPLAINT, NL | COMPLAINT, EN | COMPLAINT, NL | ½ | F1 (language), F6 | 1146+11 / 1146+11 | 1.6 / 0.3 |
| 3 | COMPLAINT, FR | COMPLAINT, FR | COMPLAINT, FR | ✅ |  | 661+11 / 661+11 | 0.3 / 0.3 |
| 4 | CLAIM_FOLLOWUP, FR | COMPLAINT, FR | COMPLAINT, FR | ❌ | F1 | 680+11 / 680+11 | 0.4 / 0.3 |
| 5 | CLAIM_FOLLOWUP, EN | COMPLAINT, EN | COMPLAINT, EN | ❌ | F1 | 724+11 / 724+11 | 0.5 / 0.3 |
| 6 | CANCELLATION, MIXED | COMPLAINT, MIXED | COMPLAINT, MIXED | ❌ | F1 | 711+12 / 711+12 | 0.5 / 0.3 |
| 7 | CANCELLATION, NL | COMPLAINT, NL | COMPLAINT, NL | ❌ | F1 | 695+11 / 695+11 | 0.5 / 0.3 |
| 8 | POLICY_CHANGE, NL | COMPLAINT, NL | COMPLAINT, NL | ❌ | F1 | 815+11 / 815+11 | 0.7 / 0.3 |
| 9 | CLAIM_FOLLOWUP, MIXED | COMPLAINT, NL | COMPLAINT, MIXED | ❌ | F1, F6 | 744+11 / 744+12 | 0.6 / 0.3 |
| 10 | COMPLAINT, EN | COMPLAINT, EN | COMPLAINT, EN | ✅ |  | 739+11 / 739+11 | 0.6 / 0.3 |
| 11 | UNCLEAR, EN | UNCLEAR, MIXED | UNCLEAR, MIXED | ❌ | F1 (language) | 641+10 / 641+10 | 0.3 / 0.3 |
| 12 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, MIXED | ½ | F1 (language), F6 | 781+11 / 781+12 | 0.7 / 0.3 |

#### llama3.1 8B — prompt v1

| # | Expected | Got A | Got B | Verdict | Failure code | Tokens in+out (A / B) | Seconds (A / B) |
|---|---|---|---|---|---|---|---|
| 1 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 705+11 / 705+11 | 2.2 / 0.6 |
| 2 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 938+11 / 938+11 | 3.7 / 0.6 |
| 3 | COMPLAINT, FR | CLAIM_FOLLOWUP, NL | COMPLAINT, MIXED | ❌ | F1, F6, **hidden complaint** | 453+10 / 453+12 | 0.7 / 0.6 |
| 4 | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | ✅ |  | 472+10 / 472+10 | 0.8 / 0.5 |
| 5 | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | ✅ |  | 516+10 / 516+10 | 1.0 / 0.5 |
| 6 | CANCELLATION, MIXED | COMPLAINT, MIXED | COMPLAINT, MIXED | ❌ | F1 | 503+12 / 503+12 | 1.1 / 0.6 |
| 7 | CANCELLATION, NL | CANCELLATION, NL | CANCELLATION, NL | ✅ |  | 487+11 / 487+11 | 1.0 / 0.5 |
| 8 | POLICY_CHANGE, NL | CANCELLATION, NL | CANCELLATION, NL | ❌ | F1 | 607+11 / 607+11 | 1.6 / 0.6 |
| 9 | CLAIM_FOLLOWUP, MIXED | CLAIM_FOLLOWUP, NL | CLAIM_FOLLOWUP, NL | ❌ | F1 (language) | 536+10 / 536+10 | 1.2 / 0.5 |
| 10 | COMPLAINT, EN | NEW_CLAIM, EN | NEW_CLAIM, EN | ❌ | F1, **hidden complaint** | 531+10 / 531+10 | 1.2 / 0.5 |
| 11 | UNCLEAR, EN | COMPLAINT, EN | COMPLAINT, EN | ❌ | F1 | 433+11 / 433+11 | 0.6 / 0.5 |
| 12 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 573+11 / 573+11 | 1.4 / 0.5 |

#### llama3.1 8B — prompt v2

| # | Expected | Got A | Got B | Verdict | Failure code | Tokens in+out (A / B) | Seconds (A / B) |
|---|---|---|---|---|---|---|---|
| 1 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 898+11 / 898+11 | 5.6 / 0.5 |
| 2 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 1131+11 / 1131+11 | 3.6 / 0.5 |
| 3 | COMPLAINT, FR | COMPLAINT, FR | COMPLAINT, FR | ✅ |  | 646+11 / 646+11 | 0.7 / 0.5 |
| 4 | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | ✅ |  | 665+10 / 665+10 | 0.8 / 0.5 |
| 5 | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | ✅ |  | 709+10 / 709+10 | 1.0 / 0.5 |
| 6 | CANCELLATION, MIXED | COMPLAINT, MIXED | CANCELLATION, MIXED | ½ | F1, F6 | 696+12 / 696+12 | 1.1 / 0.6 |
| 7 | CANCELLATION, NL | COMPLAINT, NL | CANCELLATION, NL | ½ | F1, F6 | 680+11 / 680+11 | 1.1 / 0.5 |
| 8 | POLICY_CHANGE, NL | CANCELLATION, NL | CANCELLATION, NL | ❌ | F1 | 800+11 / 800+11 | 1.6 / 0.5 |
| 9 | CLAIM_FOLLOWUP, MIXED | CLAIM_FOLLOWUP, NL | NEW_CLAIM, NL | ❌ | F1, F6 | 729+10 / 729+10 | 1.2 / 0.5 |
| 10 | COMPLAINT, EN | COMPLAINT, EN | COMPLAINT, EN | ✅ |  | 724+11 / 724+11 | 1.3 / 0.5 |
| 11 | UNCLEAR, EN | UNCLEAR, MIXED | UNCLEAR, MIXED | ❌ | F1 (language) | 626+10 / 626+10 | 0.6 / 0.5 |
| 12 | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ |  | 766+11 / 766+11 | 1.4 / 0.5 |

### 4. Prediction vs result (llama3.2 3B, the model I predicted for)

| Measure | Predicted | Measured | Right? |
|---|---|---|:-:|
| Correct | 14–16 / 24 | 8 / 24 (v1 today: 7) | ❌ |
| Normal emails in a wrong queue | ≤ 6 / 14 | 12 / 14 | ❌ |
| Normal → COMPLAINT | ≤ 4 / 14 | 12 / 14 (worse than v1: 9) | ❌ |
| Hidden complaints | ≤ 1 / 10 | 0 / 10 | ✅ |
| Language (control) | 16 ± 2 | 19 | ❌ (just outside, better) |
| F6 inputs | 2–5 | 3 | ✅ |
| Input tokens | ≈ +150 | +193 (578 → 771) | ≈ (more than predicted) |
| 8B: v1 better than 3B v1 | yes | yes (12 vs 7) | ✅ |
| 8B: v2 helps less than on 3B | yes | **no**: +4 on 8B, +1 on 3B, and hidden complaints 3 → 0 | ❌ |

### 5. Why the delta looks like this
- **3B: the model did not follow the steps, it followed the word.** With v2 the 3B model answered COMPLAINT in 22 of 24 runs. v2 uses the word COMPLAINT more often than any other label (in the definition, in steps 1 and 4 and in an example). I expected label bias towards CLAIM_FOLLOWUP, the label of my first example (Zhao et al., 2021). The bias went to the label that appears most often in the prompt instead. Same mechanism, wrong direction in my prediction.
- **8B: the procedure worked where it was aimed.** The three hidden complaints of v1 (#3A → CLAIM_FOLLOWUP, #10 twice → NEW_CLAIM) are gone: step 1 and step 4 catch them. Normal → COMPLAINT fell from 4 to 2 (#6A, #7A). What v2 did **not** fix: #8 (address and bank-account change, read as CANCELLATION in all runs on both models) and #9 (language MIXED read as NL). Both are outside the boundary I changed.
- **The noise floor is ±3.** The same model and the same prompt v1 scored 10/24 last week and 7/24 today (different answers on #2, #4, #6, #7, #9, #11, #12; Ollama 0.40.16 → 0.40.18, default temperature). So the 3B change from 7 to 8 is noise, not an effect. The 8B change (12 → 16, and 3 → 0 hidden) is larger than that.
- **Overfitting risk.** v2 writes down the boundary I used for my own expected answers, and two examples sit close to test inputs (#5, #10). 16/24 on these 12 inputs is therefore an upper estimate. New, unseen emails are needed before I trust it.

### 6. Cost (real token counts from my own calls)
Priced at the Gemini 3.1 Flash-Lite rate as if the same prompt ran on the API ($0.25 / $1.50 per 1M, course reference 7 Sep 2026, $1 = €0.92), and as run locally:

| | 3B v1 | 3B v2 | 8B v1 | 8B v2 |
|---|--:|--:|--:|--:|
| Per call at API rate | €0.000148 | €0.000193 | €0.000144 | €0.000189 |
| Per month at 20,000 emails, API rate | €2.96 | €3.85 | €2.89 | €3.77 |
| Locally: API fee | €0 | €0 | €0 | €0 |
| Locally: laptop time per month (20,000 × avg s) | 2.7 h | 2.9 h | 5.3 h | 6.1 h |
| **Error cost per month (est.), paid by the insurer** | **€27,487** | **€27,437** | **€31,107** | **€11,432** |

Error cost uses the same formula as Weeks 6 and 7: 20,000 emails × [97% normal × misroute rate × €1.65 + 3% complaints × (UNCLEAR rate × €0.83 + hidden rate × €96.60)]. The payer is the insurer: re-routing time, and for a hidden complaint the late answer, Ombudsman risk and churn (€96.60, Week 4 estimate).
**v2 costs +30% in tokens (+€0.89 a month at API rates) and, on 8B, saves ≈ €19,700 a month in error cost against v1 on the same model.** 8B v2 now has the same estimated error cost as Gemini v1 (€11,432), at €0 API fee, with no email leaving the laptop.

### 7. Deployment probe (fablab)
The sorting tray was laser-cut on 9 November but is **not assembled, and the card test has not been run yet**. So there is no physical observation to feed into this delta. That is open; I will do it before Week 9 and add it here.

### 8. What I learned
1. **I predicted the right fix for the wrong model.** The procedure works on a model big enough to follow steps (8B) and backfires on one that is not (3B). A prompt fix is a property of prompt + model, not of the prompt.
2. **The gate result changes the design.** 8B + v2 on 12 inputs: hidden complaints 0/10 (gate ≤ 5% ✅), normal → COMPLAINT 2/14 = 14% (over-flag gate ≤ 15% ✅), but normal emails in any wrong queue 5/14 = 36% (Week 7 gate ≤ 15% ❌, mostly #8 and #9). Local 8B is now a candidate fallback, not yet a passed one.
3. **Re-run the control on the same day.** Without today's v1 run I would have compared v2 (8) with last week's 10 and concluded v2 made the 3B model worse overall. It did not: today v1 scored 7.
4. **Next:** run v2 on Gemini 3.1 Flash-Lite (the model in my design), add 10 new, unseen emails (one per category plus calm ones), and fix #8 (a contract change that mentions leaving is not a cancellation).

#### References
Anthropic. (n.d.). *Prompting best practices* (sections "Use examples effectively" and "Be clear and direct"). Claude Platform Docs. Retrieved November 27, 2026, from https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices

Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... Amodei, D. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems, 33*, 1877–1901.

OpenAI. (n.d.). *Prompt engineering*. OpenAI Platform documentation. https://platform.openai.com/docs/guides/prompt-engineering

Zhao, Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate before use: Improving few-shot performance of language models. *Proceedings of the 38th International Conference on Machine Learning, PMLR 139*, 12697–12706.
