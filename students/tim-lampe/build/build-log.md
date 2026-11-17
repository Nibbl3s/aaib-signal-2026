# Build Log

> **Updated 17 Nov 2026.** Nothing from the earlier log was deleted. Text marked **(NEW)** was added. The first-person sentences in NEW parts are drafts written for you: check that each one is true for you before you hand the log in. Where something was written after the fact, it says so; nothing is backdated.

> The run tables are easier in the spreadsheet: [`prompt-test-harness.xlsx`](/resources/prompt-test-harness.xlsx). Keep the narrative sections here, because those are what get marked.

---

## The job

**Version 1 (until 7 Oct 2026), kept as it was:**

**What it does, in one sentence:**
> Compares to annual reports of the same company from consecutive years and flags inconsistencies naming the line items and values involved

**Input:** two financial reports year N, year N+1
**Output:** A list of flags in the format Flag / Values / Type
**Who would use it, and instead of what?** Analysts or auditors who would otherwise reconcile prior year comparatives by hand

**Is the answer checkable?** Could two people independently agree whether a given output is right?
> Partly. Footing errors and mismatched prior-year values are objectively checkable. "Unexplained swing" depends on the 25% threshold, and whether something is "explained" is a judgement call. Missing items are hard to separate from legitimate changes caused by divestments and restructuring

**(NEW) Current job (since Change 1, 7 Oct 2026): the Comp Screen**

**What it does, in one sentence:**
> Classifies each candidate company as Comparable, Not comparable or Unclear for a given target, with a one-sentence reason, for a trading-multiples valuation.

**Input:** a target description and six candidate descriptions (business, size, margin, growth)
**Output:** one line per candidate: `Candidate name | Verdict | one-sentence reason (max 20 words)`
**Who would use it, and instead of what?** Analysts at an M&A advisory boutique, who now screen peers by hand (about 8 hours per valuation, my Week 4 estimate), with an analyst signing off every row.

**Is the answer checkable?**
> Mostly. When the description gives business model, revenue, margin and growth, two people can agree on Comparable or Not comparable. "Unclear" and borderline cases depend on rules. I now write the rules down in the key (for example: a private company has no trading multiple, so it is Not comparable). Without that rule the Carl Zeiss SMT case could not be scored: Google, Groq and Claude all said Not comparable where my first key said Unclear.

---

## The test set

**Version 1 (annual reports), kept as it was:**

**Where the inputs came from:** public annual reports (Geschäftsberichte) of listed companies, two years each (Siemens, Wirecard, Rheinmetall, Thyssenkrupp, Apple, ASML, Telekom, Allianz, Münchener Rück, SAP)
**Real, or written by me?** Real
**Anonymised?** No, public reports

**(NEW) Test Set 1 (Comp Screen, used for Runs 2 and 3):** 12 inputs with 6 candidates each (72 verdicts per run): semiconductor equipment (ASML), industrial robots, HR software, specialty chemicals, surgical devices, low-cost airlines, payments, offshore wind, packaging, supermarkets, freight forwarding, beverages. Written by Claude, not by me; mostly fictional companies. The expected answers were drafted by Claude as well. I have not yet checked them independently, and the Carl Zeiss SMT answer is in dispute (see Run 2). **Limitation: the answer key is not independent.**

**(NEW) Test Set 2 (prepared, not yet run):** 10 new inputs from other industries, 60 verdicts per run, with the key rules written down first (`test-set-2-comp-screen.md`). The Expected column is drafted by Claude and counts as mine only after I have read and confirmed it, before Run 1 of that set.

**Awkward cases deliberately included** (version 1, kept as it was):

- [x] Ambiguous — a human would have to ask a follow-up
- [x] Another language
- [ ] Very short input
- [x] Very long input
- [ ] One where the correct answer is "I don't know"
- [x] One near the boundary between two categories
- [ ] One with a typo, or written badly

**(NEW) Awkward cases in the Comp Screen sets:**

- [x] One where the correct answer is "I don't know" (one Unclear candidate per input)
- [x] One near the boundary between two categories (private companies, e.g. Carl Zeiss SMT in Test Set 1; Rule P in Test Set 2)
- [x] Ambiguous (a candidate whose description fits only partly)
- [ ] Another language, very long input, very short input, typo (not covered; all descriptions are short English texts)

The inputs themselves and their expected answers live in `test-set.md`. **Write the expected answer before you run the tool** — every time.

---

## Runs

One table per run. A run is: every input, twice, against one version of the prompt.

### Run 1 — prompt v1 — *date*

**Brief:** —
**Model used:** Claude Sonnet 5.5
**Inputs tested:** Siemens AR 2019 vs AR 2020

| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Siemens GB 2019 & 2020 | Siemens excluding Siemens Energy | 3 Flags | 11 Flags | ✗ | F3 |
| 2 | Wirecard GB 2017 & 2018 | a lot of flags | 10 Flags | 11 Flags | ✗ | F3 |
| 3 | Rheinmetall GB 2024 & 2025 | Nothing really | 3 Flags | 3 Flags | ✓ | |
| 4 | Thyssenkrupp GB 2024 & 2025 | I don't know what to expect | 7 Flags | 3 Flags | ✗ | F6 |
| 5 | Apple 2024 & 2025 | No Flags | 4 Flags | 4 Flags | ✗ | F6 |
| 6 | ASML 2024 & 2025 | I don't know what to expect | 9 Flags | 16 Flags | ✗ | F6 |
| 7 | Telekom 2024 & 2025 | No flags | 5 Flags | 2 Flags | ✓ | |
| 8 | Allianz 2024 & 2025 | No flags | 5 Flags | 5 Flags | ✗ | F6 |
| 9 | Münchener Rück 2024 & 2025 | No flags | 8 Flags | 2 Flags | ✗ | F6 |
| 10 | SAP 2024 & 2025 | No flags | 6 Flags | Fail | ✗ | F6 |

Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs

**Result:** 2 correct out of 10 → **20%**

**Failures by type:**

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong | 0 | |
| F2 Fabricated | 0 | |
| F3 Missed | 2 | Siemens, Wirecard: A and B used different methods, A missed a lot that B found |
| F4 Format | 0 | |
| F5 Refused | 0 | |
| F6 Inconsistent | 6 | Thyssenkrupp, Apple, ASML, Allianz, Münchener Rück, SAP: runs differ in flags, in what counts as explained, or in one case failed |

**What surprised me:**
> I was surprised how big the difference is. The same prombt, the same data, still different output most of the times

**The failure that would have mattered most in real use, and why:**
> A missed real inconsistency (F3) that only became visible through F6. On Wirecard, run A never flagged that the 2018 capex table  does not match the cash flow statement nor that the free cash flow. Run B found it. In a deal that gap moves free cash flow, so it feeds straight into a valuation.

### (NEW) Run 2 — prompt v2 (Comp Screen) — 26 Oct 2026, Groq and Llama; 17 Nov 2026, Claude

**Brief:** written after the runs, not before (the briefs for these runs were never recorded): measure how accurate the Comp Screen is on 12 inputs on two models other than my first one, and what it costs. What I hoped: at least 80% of verdicts right and no broken format.
**Prompt:** `prompt-header.txt` (stand-in Comp Screen prompt: criteria business model, products and customers, end markets and geography, size and growth, margin; "Unclear" if information is not enough; one line per candidate).
**Inputs tested:** Test Set 1, 12 inputs × 6 candidates.
**Models and conditions:**

| Model | How it was run | Runs per input |
|---|---|---|
| Groq `openai/gpt-oss-120b` | script, API, 26 Oct 2026 | 2 |
| Llama 3.2 3B (`llama3.2`) | script, local Ollama, 26 Oct 2026 | 2 |
| Claude Sonnet 5.5 | Claude chat, new chat per input, default settings, 17 Nov 2026 | **1** (no token counts in the chat) |

Wrong verdicts out of 6, per input:

| # | Input | Claude (1 run) | Groq A | Groq B | Llama A | Llama B |
|---|---|---|---|---|---|---|
| 1 | Semiconductor equipment (ASML) | 1 | 1 | 1 | 3 | 0 |
| 2 | Industrial robots | 0 | 1 | 1 | 0 | 1 |
| 3 | HR software | 0 | 0 | 0 | 1 | 3 |
| 4 | Specialty chemicals | 0 | 0 | 0 | 2 | 1 |
| 5 | Surgical devices | 0 | 1 | 0 | 3 | 2 |
| 6 | Low-cost airlines | 0 | 0 | 0 | 2 | 2 |
| 7 | Payments | 0 | 0 | 0 | 1 | 0 |
| 8 | Offshore wind | 0 | 0 | 0 | 0 | 2 |
| 9 | Packaging | 0 | 0 | 0 | 2 | 1 |
| 10 | Supermarkets | 0 | 0 | 0 | 0 | 0 |
| 11 | Freight forwarding | 0 | 0 | 0 | 0 | 0 |
| 12 | Beverages | 0 | 0 | 1 | 1 | 3 |
| | **Wrong verdicts** | **1 of 72** | **3 of 72** | **3 of 72** | **15 of 72** | **15 of 72** |

**Result:**

| | Claude Sonnet 5.5 | Groq gpt-oss-120b | Llama 3.2 3B |
|---|---|---|---|
| Verdicts right | **71 of 72 (98.6%)** | **138 of 144 (95.8%)** | **114 of 144 (79.2%)** |
| Inputs with all 6 right | 11 of 12 | 9 of 12 (both runs) | 4 of 12 (both runs) |
| Same verdicts on both runs | not measurable (1 run) | 10 of 12 inputs | 2 of 12 inputs |

**Failures by type:**

| Code | Claude | Groq | Llama | Notes |
|---|---:|---:|---:|---|
| F1 Wrong | 1 | 6 | 30 | Claude: Carl Zeiss SMT. Groq: all 6 are "Not comparable" where my key says Unclear (Zeiss ×2, Vertex Machine Tools ×2, Strand Orthopaedics, Sunrise Juices). Llama: 9 false Comparable, 10 false Not comparable, 11 Unclear where an answer was possible |
| F2 Fabricated | not counted | not counted | not counted | Only the reasons on input 1 were read: Google, Groq and Llama used facts the prompt did not give (margins, growth, "broader customer base") |
| F3 Missed | 0 | 0 | 0 | |
| F4 Format | 0 | 0 | 0 | 0 of 24 Groq calls and 0 of 24 Llama calls broken; Claude: all lines in the right format, no reason over 20 words |
| F5 Refused | 0 | 0 | 0 | |
| F6 Inconsistent | n/a | 2 of 12 inputs | 10 of 12 inputs | |

**What surprised me:**
> Two things. First, the local model was close to a coin toss between runs: the same input gave different verdicts in 10 of 12 cases. Second, all three cloud models disagreed with my own key on the same candidate, Carl Zeiss SMT. Zeiss is private, so "no trading multiples" is a good reason for Not comparable and my key was probably the one that was wrong. The key was written by Claude, and I had not checked it.

**The failure that would have mattered most in real use, and why:**
> A false "Comparable" (Llama: 9 of 144 verdicts; Groq and Claude: 0). A wrong peer enters the multiple and moves the price. Second place: "Not comparable" where the right answer is Unclear (all six Groq errors): close peers vanish silently and nobody looks at them again. That is why the design routes every "Not comparable" on a close case to a person.

**Limits of this run:** the key is not independent; Claude ran once in a chat, with no token counts and no stability measure; Google was not run on the 12 inputs (only on input 1: 5 of 6 verdicts right).

### (NEW) Run 3 — prompt v2 — Test Set 2 — planned, not run

**Brief (draft for me to confirm before the run):** measure Claude Sonnet 5.5 on 10 inputs I did not use to write or tune the prompt or the first test set, twice, in new chats.
**Prediction (draft, confirm or change before running):** at least 90% of verdicts right; the most common error is a private company called Comparable, because the prompt has no rule for private companies (that would be an F1 on the prompt, not on the model); both runs give the same verdicts on at least 8 of 10 inputs.
**Status:** Key confirmed by me on: ____ (date, time). Results go in the table in `test-set-2-comp-screen.md`.

---

## Primary research: Someone Else's Test Set (practitioner request)

### The record
- 29.09, email 1 to KPMG. Asked for 8 to 10 company-and-year pairs with one line on what a reviewer should flag in each.
- 29.09, email 2 to a Deloitte. Asked for a list of 8 to 10 pairs a practitioner would use to test a reviewer.

### What came back
- Firm A: no reply as of 02.10
- Firm B: no reply as of 02.10 

### What it changed
- **I cannot report a success rate on someone else's inputs.** The comparison "my inputs vs theirs" does not exist in this submission. My measured result (2 of 10 correct) is for inputs I chose myself, and I state it as such.
- **I dropped the assumption that a practitioner set was obtainable within the term.** With two unanswered requests I cannot tell whether the cause is the channel, the timing, or the request itself. Two attempts is too few to say anything about the market. It only shows that this route did not deliver in the time I had.

### The Email
- **Subject: Test cases for a student project on spotting inconsistencies in annual reports**

Dear Sir or Madam,

I'm a business student at Arteveldehogeschool in Ghent, working on a course project that tests an AI prompt for comparing two years of a company's annual report and flagging inconsistencies (restated figures, items that don't foot, unexplained swings). I'm writing to you at Deloitte Belgium because your team reviews financial statements across years as part of transaction work.

One request: could someone on your team share 8 to 10 examples of company and year pairs where a reviewer would be expected to flag something, with one line on what they would flag? Public annual reports are fine, so no client data is needed. If it's easier, I can anonymise anything you send before I use it.

This is for coursework, not a commercial evaluation. I would like to test the prompt on cases chosen by someone who does this work, not only on cases I picked myself. Happy to send you the results.

Thanks,

### (NEW) Week 7: a question to a vendor, in writing
- **26 Oct 2026, 11:54 (Brussels time), GroqCloud contact form:** asked how many days' written notice Groq gives before changing the per-token price of a production model, or to say if it makes no such commitment.
- **Reply:** none as of 13 Nov 2026.
- **What it changed:** the pricing-control score for Groq stays at 2 and is not provisional any more, because the evidence is an absence; the exit plan relies on a monthly re-test and a spare model instead of a notice period; Groq stays the tested spare, not the primary provider for client work.

### (NEW) Week 8: a practitioner breaks the design
- Not yet done (no practitioner found as of 17 Nov 2026). Kit: `6ects-practitioner-kit.md`.

---

## Changes

Every time you change the prompt, record it here before you re-run. Predicting the effect first, then checking, is what separates a change from a guess.

### Change 1 — 2026-10-07

**What I changed:** Replaced the annual-report analysis task with a peer-group screen. The prompt now classifies each candidate company as Comparable / Not comparable / Unclear against 5 criteria (business model, customer segment, size, geography, growth/margin) and adds a rule "never invent financial figures, write 'not provided'".

**Why I thought it would help:** In M&A valuation the peer group drives the multiple, so the screen sits closer to the real decision than summarising financial statements. The "Unclear" option and the no-invented-figures rule should reduce fabricated answers.

**What I predicted would happen:** On 2 test cases where I know the correct peer set, at least 5 of 6 verdicts per case match my own (about 80%+). No invented financial figures (0 fabricated). Weak spot: the model labels borderline candidates "Comparable" instead of "Unclear".

**(NEW) What actually happened (added afterwards, 26 Oct and 17 Nov 2026, not part of the original entry):**
- *At least 5 of 6 verdicts right:* held. On the first input Google and Groq got 5 of 6; across the 12 inputs Groq got 95.8% and Claude 98.6%.
- *0 fabricated figures:* did not hold. On input 1 Google, Groq and Llama all used facts the prompt did not give (margins, growth, a "broader customer base"). F2 was not counted across all 12 inputs.
- *Weak spot "Comparable instead of Unclear":* the opposite happened. The cloud models said "Not comparable" where my key says Unclear (all 6 Groq errors, the one Claude error). Only the local Llama made false "Comparable" calls (9).

### (NEW) Change 2 — 2026-11-17

**What I changed:** the main model of the Comp Screen moves to Claude Sonnet 5.5. Groq `openai/gpt-oss-120b` is the spare and Llama 3.2 3B an offline emergency tool. The prompt itself did not change.

**Why:** I built and tuned the prompt on Claude; a main model that had never been measured on my 12 inputs could not be defended to a board.

**What I predicted would happen:** not written down before the run. I record that here and do not backdate one. What I would have predicted: at least as accurate as Groq (95.8%).

**Result (re-measured, Test Set 1, one run in a chat):** 71 of 72 verdicts right (98.6%), against 138 of 144 (95.8%) for Groq. One error, Carl Zeiss SMT, where my key says Unclear and all three cloud models say Not comparable.
**Cost (estimate, the chat shows no tokens):** about $0.0022 per screen, against $0.00057 for Groq.
**Delta explained:** +2.8 points. That is one verdict of 72 against six of 144, so it is too small to be proof. The remaining difference to Groq is the three Unclear candidates that Claude got right and Groq did not (Vertex Machine Tools, Strand Orthopaedics, Sunrise Juices). Next: a second run of Claude (stability), and a decision on the Zeiss key.

### (NEW) Change 3 — prepared, not made

Add a rule to the prompt: answer Unclear when the information is not enough to decide, and Not comparable only when the information shows a different business (written down in `build-checkpoint-2-plan.md`). Prediction: Groq goes from 6 wrong of 144 to 2 or fewer, false Comparable stays 0. Not run.

---

## Deployment probe — from Week 2

One section, kept short. It feeds the same checkpoints — write it when you
have something to write, not on a schedule. Two entries are dated: the plan
rows are part of Build Checkpoint 1 (Week 4); the deployment observation is
logged before Week 8 so it can feed your CP2 revision delta.

**After the intro session (Monday 28 September, 10:25–11:25, at the fablab — machines, safety, file formats):**

| | |
|---|---|
| Machine(s) I expect to use, and why | wood laser machine|
| The artifact I'm aiming for (kiosk face, counter mock, standee…) |box for wine bottle with QR code for my contact details and a description of what my product does|
| Which weekly session or OPEN block I'll visit for file-prep, and when |I already have the file ready to go. Just need to test it|

**When the artifact exists — the deployment observation (the evidence, not the prop):**

> **What I deployed:** — (artifact, where it stood, who walked up)
>
> **What the physical context showed that the chat window could not:** —
> (e.g. people walked past it; they read it but didn't know what to ask; the printed answer went stale the day prices changed)
>
> **What it cost** (time, materials, revisions): —
>
> **Feeds which failure class or memo section:** —

*The probe teaching you nothing new is a finding too — write that, with the observation that proves it.*

---

## Cost — from Week 6

**(NEW) Filled in for the Comp Screen, 17 Nov 2026.** One screen = one call with a target and 6 candidates.

| | Groq `gpt-oss-120b` | Claude Sonnet 5.5 | Google `gemini-3.8-flash` (one call, 19 Oct) |
|---|---|---|---|
| Prices used (with snapshot date) | $0.15 in / $0.60 out per 1M (Groq's own /models response, 26 Oct 2026) | $2 in / $10 out per 1M (price trackers quoting Anthropic's pricing page, 17 Nov 2026; confirm on the page) | $0.25 / $1.50 stand-in (course Pricing Reference, 7 Sep 2026, Flash-Lite class; the real price is still to be checked) |
| Measured input tokens per run | 395 (average of 24 calls) | not measured (chat); about 395 assumed, the Groq count | 258 |
| Measured output tokens per run | 853 billed, of which 710 hidden reasoning | not measured; about 144 visible assumed (102 words × 1.4), hidden unknown | 3,784 billed (121 visible + 3,663 hidden) |
| **Cost per run** | **$0.00057 (€0.00053)** | **about $0.0022 (€0.0020), estimate** | **$0.0057 (€0.0053) at the stand-in price** |
| Realistic monthly volume, and why that number | 660 screens a month: 10 analysts × 3 screens a day × 22 days (Week 6 assumption). Week 8 design case: 12 screens a month (4 valuations × 3 runs) | same | same |
| **Monthly token cost (660 screens)** | **€0.35** | **about €1.35 (estimate)** | **€3.49 (stand-in price)** |

**Error cost — the part that matters** (error rate per verdict, 6 verdicts per screen, so 3,960 verdicts a month at 660 screens):

| | Groq | Claude Sonnet 5.5 | Llama 3.2 3B (local) |
|---|---|---|---|
| Measured error rate | 4.2% on 144 verdicts (12 inputs × 2 runs) | 1.4% on 72 verdicts (12 inputs × 1 run) | 20.8% on 144 verdicts |
| Who fixes an error here? | The analyst who reads the peer list and corrects the verdict | same | same |
| Cost per error | 30 min × €48/h = €24 (assumption; my Week 6 draft used €60/h = €30; €48 is the Belgian average labour cost in 2024, Eurostat) | same | same |
| **Monthly error cost (660 screens)** | **about 165 errors × €24 = €3,960** | **about 55 errors × €24 = €1,320** | **about 825 errors × €24 = €19,800** |
| **Error cost ÷ token cost** | **about 11,000×** | **about 980×** | no token cost (€0): the cheapest system is the most expensive one |

At the Week 8 design volume of 12 screens a month the same rows give Groq about €72 and Claude about €24 of error cost a month. Weakest numbers: the 30 minutes per error, the Claude token estimate, the Claude error rate (one run, 72 verdicts), and a key that was written by Claude.

*(Week 2 job for reference: 8 of 10 inputs wrong, 80%.)*

---

## Second model — from Week 7

| | Model A: Google `gemini-3.8-flash` | Model B: Llama 3.2 3B (local) | Groq `gpt-oss-120b` (reference) | Claude Sonnet 5.5 (added 17 Nov) |
|---|---|---|---|---|
| Success rate on the same test set | 5 of 6 verdicts on input 1 only (not run on the 12) | 114 of 144 verdicts (79.2%), 12 inputs × 2 runs | 138 of 144 (95.8%), 12 inputs × 2 runs | 71 of 72 (98.6%), 12 inputs × 1 run, chat |
| Cost per run | $0.0057 (stand-in price, hidden reasoning tokens included) | €0 per call; laptop, setup time and re-testing are the real costs; 3.8 s per call | $0.00057 | about $0.0022 (estimate) |
| Notable difference in *how* it failed | Carl Zeiss SMT as Not comparable (my key: Unclear); reason for Intel used knowledge outside the prompt | unstable (same verdicts on both runs in 2 of 12 inputs); all error types, 9 false Comparable | 6 errors, all "Not comparable" where my key says Unclear; reasons that cited margins the prompt did not give | 1 error, the Zeiss case; stability not measured |

**Would switching be a day's work or a rebuild?**
> A day's work. Moving from Google to Groq meant changing the URL, the authorisation header, the request body and the response parsing; the prompt did not change. About 1 hour to switch and 3 hours to re-run and classify the 12 inputs. A full exit including a parallel month and a briefing for 10 analysts: about 10.8 hours, €519 at €48/h (estimate).

---

## Attack — from Week 9

| Attack tried | What I did | Worked? | What it got |
|---|---|---|---|
| Instruction override | | | |
| Instruction hidden inside the input | | | |
| Extract the prompt itself | | | |
| Out-of-scope request | | | |

**What I would fix first, and why that one:**
> —

---

## Regulatory — from Week 10

| | |
|---|---|
| AI Act tier, with the reasoning | — |
| Annex reference, if high-risk | — |
| Does it process personal data? | — |
| Lawful basis, if so | — |
| Article 22 relevant? | — |
| Would deploying it need anything I have not done? | — |

---

## Checkpoint summaries

Write these at Weeks 4, 8 and 12. Five lines each — they are what gets marked, and what you will copy into the memo.

### Checkpoint 1 — Week 4
*(NEW: filled in on 17 Nov 2026 from Run 1 and Change 1; it was not written at the time.)*
> **What it does:** Compares two annual reports of the same company and flags inconsistencies (version 1). Replaced on 7 Oct by the Comp Screen.
> **Measured:** 20% on 10 inputs (2 correct), version 1 job
> **Dominant failure type:** F6 inconsistent between runs (6 of 10 inputs), plus F3 missed (2)
> **The failure that would matter most:** A missed real inconsistency (F3) that only became visible through F6: on Wirecard run A never flagged that the 2018 capex table does not match the cash flow statement
> **What I'd change first:** The job itself. I replaced it with the peer-group screen on 7 Oct (Change 1) because it sits closer to the valuation decision and the answer is easier to check.

### Checkpoint 2 — Week 8
> **Changed since CP1:** The job changed from annual-report inconsistencies to the Comp Screen (Change 1, 7 Oct); the main model changed to Claude Sonnet 5.5 (Change 2, 17 Nov); a new test set and the key rules were prepared (Test Set 2). A prompt rule for "Unclear" is prepared but not run (Change 3).
> **Measured now:** 98.6% of verdicts (71 of 72) on 12 inputs, Claude, one run; Groq 95.8% and Llama 79.2% over two runs (was: 20% of inputs on the old job; different job and test set, so not like for like)
> **Did my change do what I predicted?** Change 1: partly. At least 5 of 6 verdicts right held; 0 fabricated figures did not hold; the weak spot went the other way (Not comparable instead of Unclear, not Comparable). Change 2: no prediction was written down in advance; the result matched what I would have expected (at least Groq's 95.8%), but it is one run.
> **Cost per run at realistic volume:** Claude about €0.0020 per screen (estimate), about €1.35 a month at 660 screens; Groq €0.00053, €0.35 a month. The error cost is the bill: about €1,320 a month for Claude and €3,960 for Groq at an assumed 30 minutes per error.
> **What I now know that I didn't in Week 4:** the model's token cost is almost irrelevant next to the error cost (about 11,000× for Groq); the same prompt on a small local model gave different verdicts in 10 of 12 inputs; and my own answer key was a weak point: three cloud models disagreed with it on one candidate, so a key must be written and confirmed by me before the run.

### Checkpoint 3 — Week 12
> **Final measured performance:** — % on — inputs
> **The three numbers going into my memo:** —
> **The limitation I have to state in the memo:** —
> **What I would do differently if I started again:** —
> **What this taught me that no reading would have:** —

---

*Never delete a failure. A log full of successes is a log that has been curated, and a curated log is worth nothing.*
