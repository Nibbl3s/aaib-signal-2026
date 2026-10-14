# Build Log

> Summary log for prompt v1, plus the sections filled in during later weeks. The full raw output of every run is in [log.md](log.md).

## The job

**What it does, in one sentence:**
Takes a shipment invoice, extracts four fields, and checks the supplier against a supplied reference list to flag possible sanctions matches.

**Input:** Shipment invoice or customs document text (supplier name, country of origin, HS code, declared value, plus surrounding invoice text).

**Output:** The four extracted fields, plus a fifth field, flag status, valued as clear, needs review, or high risk match.

**Who would use it, and instead of what?** A trade compliance analyst at a Belgian importer, instead of manually checking each counterparty name against a sanctions list by hand for every shipment.

**Is the answer checkable? Could two people independently agree whether a given output is right?**
Yes. Each extracted field is checkable directly against the source document text. The flag status is checkable against the reference list I supplied myself, so the correct answer for every test input was known and written down before any input was run.

## The test set

**Where the inputs came from:** Constructed by me, not sourced from real public invoices. The reference list itself is real, drawn from the EU 18th sanctions package against Russia, adopted 19 July 2025.

**Real, or written by me?** Written by me. Per the Build brief this is the fallback, not the plan, and my measured success rate should be treated as an upper bound rather than a field measurement. I plan to try to source real invoice text before Friday if time allows.

**Anonymised?** Not applicable, no real person or company data was used beyond the six real, publicly documented entity names already named in an EU legal instrument.

**Awkward cases deliberately included:**

[x] Ambiguous, a human would have to ask a follow up (Inputs 4 and 8, near duplicate and partial name matches)
[x] Another language (Input 7, Chinese script transliteration)
[x] Very short input (Input 5, missing a field)
[x] Very long input (Input 9, noisy multi party invoice)
[x] One where the correct answer is I do not know (Input 12, corrupted text)
[x] One near the boundary between two categories (Input 11, branch designation and differing country of origin)
[ ] One with a typo, or written badly (not explicitly included, worth adding before Friday)

The inputs themselves and their expected answers live in test-set.md. Expected answers were written before the tool was run, every time.

## Runs

### Run 1, prompt v1, 23 September 2026

**Brief:** Test whether v1 correctly extracts all four fields and correctly applies flag status against the supplied reference list, including on the deliberately awkward inputs, and check whether results are consistent across two identical runs of the same input.

**Model used:** Claude

**Inputs tested:** 12

| # | Input (short label) | Expected | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Clean invoice, unrelated supplier | Foshan Nanhai Textiles, clear | Correct | Correct | Pass | None |
| 2 | Exact match, Heihe Rural Commercial Bank | High risk match | Correct | Correct | Pass | None |
| 3 | Exact match, Heilongjiang Suifenhe Rural Commercial Bank | High risk match | Correct | Correct | Pass | None |
| 4 | Near duplicate, Heihe Commercial Bank Ltd | Needs review | High risk match (wrong) | Needs review (correct) | Fail on run A | F1, F6 |
| 5 | Short invoice, missing HS code | HS code not found, clear | Correct | Correct | Pass | None |
| 6 | Huawei Technologies, well known clean company | Clear | Correct | Needs review, cited outside sanctions knowledge (wrong) | Fail on run B | F1, F6 |
| 7 | Chinese script transliteration of flagged entity | High risk match | Correct, translated and matched | Missed match, called clear (wrong) | Fail on run B | F3, F6 |
| 8 | Ambiguous partial match, Suifenhe Commercial Bank | Needs review | Correct | Correct | Pass | None |
| 9 | Noisy invoice, multiple parties | Alibaba Group Holding, clear | Correct | Freight forwarder folded into supplier field (wrong shape) | Fail on run B | F4, F6 |
| 10 | Different currency, USD | Value kept as given, clear | Correct, value kept as stated | Fabricated an unrequested currency conversion (wrong) | Fail on run B | F2, F6 |
| 11 | Branch designation, different country of origin | High risk match | Correct | Downgraded to needs review (wrong) | Fail on run B | F1, F6 |
| 12 | Corrupted, illegible text | Not found across fields, cannot be determined | Correct, reported not found | Fabricated a plausible supplier name and HS code (wrong) | Fail on run B | F2, F6 |

Failure codes: F1 wrong, F2 fabricated, F3 missed, F4 format, F5 refused, F6 inconsistent between runs

**Result:** 17 correct out of 24 runs, 70.8%

**Failures by type:**

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong | 3 | Inputs 4, 6, 11 |
| F2 Fabricated | 2 | Inputs 10, 12 |
| F3 Missed | 1 | Input 7 |
| F4 Format | 1 | Input 9 |
| F5 Refused | 0 | |
| F6 Inconsistent | 7 | Inputs 4, 6, 7, 9, 10, 11, 12, counted per input where the two runs disagreed |

**What surprised me:**
The raw success rate, 70.8%, looked acceptable in isolation. The inconsistency rate did not. Seven of twelve inputs gave a different answer across two identical runs with nothing changed, which means the headline success rate is close to meaningless on its own. A tool can look fine on average while being unusable in practice, because you cannot know in advance which of the two answers you would have gotten on a real shipment.

**The failure that would have mattered most in real use, and why:**
Input 12, the corrupted invoice. On one run the tool correctly reported the fields as not found. On the other, it fabricated a plausible sounding supplier name and an estimated HS code rather than admitting it could not tell. This is the single most dangerous failure in the log, because it occurred on the one input deliberately built so the honest answer was I do not know, and a fabricated field looks identical to a real one to anyone who has not seen the source document.

### Run 2, prompt v1 via the Claude API, 14 October 2026

**Setup:** same prompt v1 and reference list, same 12 invoices, each run twice, but via the API with `claude-sonnet-5-5` (effort medium) instead of the claude.ai chat app. Raw responses with `usage` saved per call.

| # | Input (short label) | Expected | Run A | Run B | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | Clean invoice | Clear | Clear | Clear | Pass | None |
| 2 | Exact match, Heihe | High risk match | High risk match | High risk match | Pass | None |
| 3 | Exact match, Heilongjiang Suifenhe | High risk match | High risk match | High risk match | Pass | None |
| 4 | Near duplicate | Needs review | Needs review | Needs review | Pass | None |
| 5 | Missing HS code | HS not found, clear | Correct | Correct | Pass | None |
| 6 | Huawei | Clear | Clear | Clear | Pass | None |
| 7 | Chinese-script name | High risk match | High risk match (translated) | High risk match (translated) | Pass | None |
| 8 | Partial match | Needs review | Needs review | Needs review | Pass | None |
| 9 | Noisy invoice | Alibaba, clear | Correct | Correct | Pass | None |
| 10 | USD value | Value kept as $9,100 | Kept | Kept | Pass | None |
| 11 | Hong Kong branch | High risk match | High risk match | High risk match | Pass | None |
| 12 | Corrupted text | Not found, cannot be determined | Not found, needs review | Not found, needs review | Fail (strict) | Flag value outside the prompt's allowed set |

**Result:** 22 of 24 runs correct (91.7%), 0 of 12 inputs inconsistent in their values, 0 fabrications. The two failures are my specification flaw already found in the Week 3 swap: "cannot be determined" is not an allowed value in prompt v1, and the tool chose the safe "needs review".

**New failure type:** the *format* changed between runs (table or list) on inputs 4, 7, 9, 10 and 11, while the values stayed identical. A downstream system parsing the output would break on it (F4 risk). Prompt v2 should fix one output format.

**Caveat:** this is a different setup from Run 1 (API and Sonnet 5.5 vs the chat app with an unknown model), so the improvement belongs to this model and setup, not to my prompt. Week 7 tests a second model.

### Prediction for prompt v2 (recorded 14 October 2026, before Run 3)

Same 12 invoices, each run twice, on the same model as Run 2 (Claude Sonnet 5.5, effort medium), plus the local llama3.2 as a second check.

| # | Change in v2 | Predicted effect (Claude Sonnet 5.5) | Grounded in |
|---|---|---|---|
| P1 | "cannot be determined" added as an allowed flag | Input 12 passes on both runs, so strict success goes from 22/24 to **24/24** | Anthropic (n.d.-b): allow the model to say it does not know |
| P2 | Answer only as one fixed JSON object | Format changes between runs drop from 5 inputs to **0**; every answer parses as JSON | Anthropic (n.d.-a): specify the desired output format |
| P3 | "Use only the reference list above" | Flags based on outside knowledge stay at **0** (no regression) | Anthropic (n.d.-b): external knowledge restriction |
| P4 | No explanations in the answer | Output tokens fall about 30% (402.5 to about 280 per call), so the cost per check falls to about **€0.0033**. Uncertain, because thinking tokens remain | My own Week 6 measurement: most output was explanation |
| P5 | Routing point is not an origin | **No change** on my own test set (every invoice states its origin); the effect should only show on transshipped invoices | Week 2 extension and Week 3 swap |
| P6 | Same prompt on llama3.2 (3B) | Python-code answers fall from 9 to **3 or fewer**, strict success rises from 4/24 to **8/24 or more** (low confidence) | Anthropic (n.d.-a); the course's local-model lab expects format drift in small models |

**Risk I expect:** none of the clean invoices should become "cannot be determined"; if any does, v2 has made the tool over-cautious.

**References**
Anthropic. (n.d.-a). *Increase output consistency*. Claude Developer Platform. Retrieved October 14, 2026, from https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/increase-consistency
Anthropic. (n.d.-b). *Reduce hallucinations*. Claude Developer Platform. Retrieved October 14, 2026, from https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations

### Run 3, prompt v2, 14 October 2026

**Setup:** prompt v2 (committed at 19:45, before any v2 call), same reference list and 12 invoices, each run twice. Model A: `claude-sonnet-5-5` via the API (effort medium), as in Run 2. Model B: `llama3.2` (3B) on my own PC via Ollama, as in Week 7. All 48 calls made on 14 October 2026; raw responses with token counts saved per call.

| # | Input (short label) | Expected | Sonnet 5.5 (A / B) | llama3.2 (A / B) | Failure code (llama3.2) |
|---|---|---|---|---|---|
| 1 | Clean invoice | Clear | Pass / Pass | Pass / Pass | None |
| 2 | Exact match, Heihe | High risk match | Pass / Pass | Pass / Pass | None |
| 3 | Exact match, Heilongjiang Suifenhe | High risk match | Pass / Pass | Pass / Pass | None |
| 4 | Near duplicate | Needs review | Pass / Pass | High risk match / High risk match | F1 (over-flag) |
| 5 | Missing HS code | HS not found, clear | Pass / Pass | Pass / Pass | None |
| 6 | Huawei | Clear | Pass / Pass | Pass / Pass | None |
| 7 | Chinese-script name | High risk match | Pass / Pass (original name + English in brackets) | Pass / Pass (English name only; original script dropped) | None |
| 8 | Partial match | Needs review | Pass / Pass | Supplier rewritten as "Heihe Rural Commercial Bank Co. Ltd", high risk match (both runs) | F2 (fabricated name) + F1 |
| 9 | Noisy invoice | Alibaba, clear | Pass / Pass | Pass / Pass | None |
| 10 | USD value | Value kept as $9,100 | Pass / Pass | Pass / Pass | None |
| 11 | Hong Kong branch | High risk match | Pass / Pass | Pass / Pass | None |
| 12 | Corrupted text | Not found, cannot be determined | Pass / Pass | Supplier invented as "Heihe Rural Commercial Bank Co. Ltd", HS "85XX.XX", high risk match (both runs) | F2 (fabricated name) + F1 |

**Result:** Claude Sonnet 5.5: 24 of 24 correct (100%; Run 2: 91.7%). llama3.2: 18 of 24 (75%; Week 7: 16.7%). On both models, 24 of 24 answers parse as JSON and the flag is the same on both runs for 12 of 12 inputs.

**Prediction check**

| # | Predicted | Measured | Right? |
|---|---|---|---|
| P1 | 24/24 strict | 24/24 | Right. The whole gain is input 12: the fix was in my specification, not in the model. |
| P2 | 0 format changes, all JSON | 0 format changes; 48 of 48 answers parse as JSON (both models) | Right |
| P3 | 0 outside-knowledge flags | 0 (Huawei and Alibaba clear on both runs) | Right |
| P4 | About 280 output tokens; about €0.0033 per check | 83.9 output tokens (−79%) but 680.9 input tokens (+83%, the longer prompt); €0.0020 per check (−54%) | Direction right, size wrong: almost all v1 output was explanation, and I forgot that a longer prompt raises the input tokens |
| P5 | No change on my own test set | No change on Sonnet 5.5; llama3.2 wrote "unclear" as the origin once (input 12, run A) although the invoice says China | Right for Sonnet 5.5; the routing rule is still untested on a transshipped invoice |
| P6 | llama3.2: code answers ≤3, strict ≥8/24 | 0 code answers, 18/24 | Right in direction, far too pessimistic in size |
| Risk | No clean invoice becomes "cannot be determined" | None did | Held |

**Cost:** (680.9 × $2 + 83.9 × $10) ÷ 1,000,000 × 0.92 = **€0.0020 per check** (Run 2: €0.0044). At 18,000 checks a year: €36 (was €79). llama3.2: 1.0 s per answer on average (was 4.1 s), because the answers are now 56 tokens instead of long code.

**What surprised me:**
1. llama3.2's remaining errors are worse in kind than its old ones. On inputs 8 and 12 it named a flagged bank as the supplier when the invoice did not: 4 fabrications in 24 runs (Week 7: 1). The fixed JSON format made every answer parseable, but not true; a fabricated answer now looks as tidy as a correct one.
2. All 6 llama3.2 failures lean towards over-flagging; none called a sanctioned bank clear (Week 7: input 3). Over-flags cost reviewer time; a fabricated sanctioned name in an audit trail costs credibility.
3. My Week 7 conclusion was partly about my prompt, not the model: the same 3B model went from 16.7% to 75% with v2. It is still not fit for verdicts (the fabrications), but the gap to the cloud is smaller than I reported.

**Caveat:** I wrote v2 while looking at these same 12 invoices, so 24/24 may be overfitting. The honest test is the swap set (someone else's invoices) on v2, which I have not run yet.

### Prediction for the swap sets on prompt v2 (recorded 14 October 2026, before Run 4)

Run 4 runs prompt v2 on the two sets I did not write v2 against: my practitioner-pattern set (inputs A–H) and Janis Krainis's freight set (inputs 1–10), each run twice on Claude Sonnet 5.5 and llama3.2. The expected answers are the ones committed in Week 3 and are not changed. Two scoring rules, fixed now because v2 uses different words:
- When no true origin is stated, "unclear" and "not found" both count as correct (v2 says "unclear"; the Week 3 answers say "not found").
- A true origin given only as a city (Janis 4: Bilbao factory; 7: Gothenburg mill; 9: Valencia supplier) counts as correct if the answer names the city or its country.

| # | Set | Predicted (Claude Sonnet 5.5) | Predicted (llama3.2) |
|---|---|---|---|
| P7 | Practitioner A–H | 16/16 strict: the routing rule fixes D and E (failed in Week 3) | 12/16 or more; at least one routing point still given as origin |
| P8 | Janis 1–10 | Flag "cannot be determined" on 20/20 (Week 3: 0/20, value not allowed); 0 fabricated suppliers | At least 2 runs with an invented supplier name (F2), as on input 12 in Run 3 |
| P9 | Janis 4, 7, 9 | Origin still missed in at least 2 of 6 runs, because v2 says "if you cannot tell, write unclear" and a city is not stated as a country | Not predicted |

**Risk I expect:** v2's "unclear" rule may make the tool more cautious on real origins (Janis 4, 7, 9) while it fixes routing points (A–H D, E).

### Run 4, prompt v2 on the swap sets, 14 October 2026

**Setup:** prompt v2, unchanged. Practitioner-pattern set (A–H) and Janis Krainis's freight set (1–10), each input run twice on `claude-sonnet-5-5` (API, effort medium) and `llama3.2` (my PC). 72 calls, all after the prediction commit (19:55). Expected answers and scoring rules as recorded before the run.

**Practitioner set (A–H)**

| # | Input | Expected | Sonnet 5.5 (A / B) | llama3.2 (A / B) |
|---|---|---|---|---|
| A | Clean, complete | All fields, clear | Pass / Pass | Pass / "cannot be determined" (F1) |
| B | Missing value | Value not found, clear | Pass / Pass | Pass / "cannot be determined" (F1) |
| C | Missing HS code | HS not found, clear | Pass / Pass | Pass / Pass |
| D | Transshipped, origin unclear | Origin unclear, clear | Origin "Japan", reasoning written before the JSON (F1 + F4) / same, flag changed to "cannot be determined" (F1 + F4 + F6) | Supplier invented as "Heihe Rural Commercial Bank Co. Ltd.", high risk match (F2), both runs |
| E | Transshipped, no manufacture stated | Origin unclear, clear | Pass / Pass | Supplier invented as Heihe bank (F2) / origin right, "cannot be determined" (F1) |
| F | Missing HS and value | Both not found, clear | Pass / Pass | "cannot be determined" (F1), both runs |
| G | Clean, complete | All fields, clear | Pass / Pass | "cannot be determined" (F1), both runs |
| H | No origin stated | Origin not found, clear | Pass / Pass | "cannot be determined" (F1) / Pass |

**Janis's set (1–10)**

| | Sonnet 5.5 | llama3.2 |
|---|---|---|
| Supplier, HS code, value | 60 of 60 "not found" | Supplier invented as "Heihe Rural Commercial Bank Co. Ltd." in 19 of 20 runs (F2); "Drewes", the forwarder, once (F1) |
| Flag | "cannot be determined" 20 of 20 | "high risk match" 18 of 20, "cannot be determined" 2 of 20 |
| Origin, routing point only (1, 2, 3, 5, 6, 8, 10) | 14 of 14 correct ("unclear" or "not found") | 14 of 14 "unclear" |
| Origin, real place (4 Bilbao, 7 Gothenburg, 9 Valencia) | 0 of 6: "unclear" every time (F3) | 0 of 6: "unclear" every time (F3) |
| Strict | 14 of 20 | 0 of 20 |

**Result:** Claude Sonnet 5.5: 28 of 36 correct (77.8%). llama3.2: 5 of 36 (13.9%). Week 3 on prompt v1 (claude.ai chat, single model): practitioner 6 of 8, Janis 0 of 20 strict.

**Prediction check**

| # | Predicted | Measured | Right? |
|---|---|---|---|
| P7 Sonnet | 16/16 | 14/16; only D failed | Wrong. The routing rule worked (Rotterdam never given as origin), but on D it chose Japan where my Week 3 answer says "unclear". Japan is defensible, since the invoice states Japanese manufacture; I keep my expected answer unchanged |
| P7 llama3.2 | ≥12/16; at least one routing point as origin | 5/16; no routing point given as origin | Wrong twice: far too optimistic, and it failed on the flag, not the origin |
| P8 Sonnet | 20/20 "cannot be determined"; 0 fabricated suppliers | 20/20; 0 | Right |
| P8 llama3.2 | At least 2 fabricated suppliers | 19 of 20 | Right in direction, far too low |
| P9 | Real origins missed in ≥2 of 6 | 6 of 6 missed | Right, and worse than predicted |
| Risk | "unclear" makes the tool over-cautious on real origins | It did, on every real origin given as a place | Held |

**Cost:** 36 Sonnet calls, €0.073 in total. Hard inputs cost more: D and G used 245–450 output tokens (thinking), the others 61–71. Per check: (680 × $2 + 450 × $10) ÷ 1,000,000 × 0.92 = €0.0054 for the hardest, against (626 × $2 + 62 × $10) ÷ 1,000,000 × 0.92 = €0.0017 for an easy one. My cost model should use the average over a mixed set, not my easiest invoices.

**What this run taught me:**
1. Run 3 overstated llama3.2. Its 75% was on the invoices I wrote v2 against; on unseen inputs it scored 13.9%. When the supplier is missing or a placeholder, it fills in a flagged bank from the reference list (22 of 36 runs). I take back surprise 3 of Run 3: the gap to the cloud model is not smaller, and a local model is still not an exit for this task.
2. Sonnet 5.5 kept v2's main promises on unseen inputs: no invented supplier in 36 runs, "cannot be determined" whenever there was no name, and no routing point given as an origin. Its misses are cautious ("unclear"), not confident errors.
3. The JSON-only rule held on my own set (24/24) but not here: on D, both answers had reasoning written before the JSON, which would break a strict parser.
4. My anonymised supplier names ("Supplier 4") are a test-design flaw: on D, run B argued that a placeholder does not identify anyone and chose "cannot be determined". Real invoices carry real names.

**Candidate changes for v3 (not made yet):** accept a named production site or supplier location as origin and add its country; parse the last JSON object, or use the API's structured-output option, instead of relying on the prompt; replace the placeholder names in my practitioner set with realistic invented names.

## Test-set swap, from Week 3

Run on 11 October 2026 with Janis Krainis's ten freight forwarding inputs, two runs each, full record in [test-set-swap.md](test-set-swap.md). The in-class swap was not recorded, so this is a fresh run after the session.

**Result:** 10 of 10 inputs consistent across runs, 0 fabrications. Supplier, HS code and value were correctly "not found" 60 of 60 times. Origin was missed on 3 inputs (F3 × 6 runs), cautiously: "likely, but not stated". The flag was "needs review" on every run, against an expected "cannot be determined", which is a value prompt v1 does not offer.

**What broke:** not the tool, but my specification. My expected answers used an output value the prompt does not allow, and my prompt asks to screen countries against a list that contains none.

## Changes

No prompt changes yet; v1 is still the measured version. Three inputs now drive v2, planned for Week 4:

1. **Origin rule, written into the prompt.** A port, airport, terminal, warehouse or hub is a routing point, not an origin; if they cannot be told apart, report "unclear". Source: the Week 2 extension (F1 on transshipped inputs D and E) and swap Input 9, where the tool got it right by judgement only.
2. **A fourth flag value, "cannot be determined"**, for when there is no supplier name to screen. Source: Week 2 Input 12 and all ten swap inputs.
3. **Make the reference list match the prompt**: either add flagged countries, or remove "and countries" from the prompt. Source: swap Run B.

Measured rates stay as logged for v1: 70.8% per run on my own set, 58.3% of inputs inconsistent, 75% on the practitioner-pattern set. Any v2 rate gets its own run section, and nothing above is overwritten.

## Deployment probe, from Week 2

**After the intro session (Monday 28 September, 10:25 to 11:25, at the fablab, machines, safety, file formats):**

| | |
|---|---|
| Machine(s) I expect to use, and why | Laser cutter, to produce a small acrylic counter card or standee showing a mock invoice intake screen with the flag status field prominently visible |
| The artifact I am aiming for | A small standee or counter card, simulating how a compliance reviewer would physically encounter a needs review flag during document intake |
| Which weekly session or OPEN block I will visit, and when | To be scheduled after the 28 September intro session, targeting an OPEN block the following week |

**Probe plan, updated 14 October 2026 (Build Checkpoint 1):**

| | |
|---|---|
| Machine | Laser cutter (3 mm plywood) + laser rubber for the stamps |
| Artifact | "The 2-minute review test": an IN tray, three stamps (CLEAR / NEEDS REVIEW / HIGH RISK) and a two-key CLEARED box. Testers check 8 invoice cards from my test set, 3 of them carrying a real wrong AI verdict from my log |
| Session | Planned: one OPEN block in week 5 or 6 at the fablab (Campus Kantienberg); cutting files are ready, booking still to be made |

Why the plan changed: the counter card would only show a flag. The review test measures how many wrong AI verdicts a human checker actually catches, which is the "50% (est.)" my business case rests on.

**When the artifact exists, the deployment observation:**

To be completed before Week 8, per the Build brief.

## Cost, from Week 6

Measured via the Claude API on 14 October 2026 (`claude-sonnet-5-5`, effort medium, prompt v1, my 12 test invoices × 2 runs): **371.9 input and 402.5 output tokens per call** on average, so **€0.004387 per check** ($2 / $10 per 1M tokens, × 0.92). At my scenario volume of 18,000 checks a year that is **€79 a year in tokens**.

Error cost at my Week 2 measured rate: 29.2% × 18,000 × €4.50 (6 min × €45/hr, paid by the compliance analyst) = **€23,652 a year**, 299× the tokens. At the Week 6 rate above (8.3%): €6,750 a year, still 85×. Break point: 265 checks per analyst per day if the customer fixes errors, 1.1 to 4.0 if the vendor does. Full model: [cost-model.md](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-06/cost-model.md).

## Second model, from Week 7

To be completed in Week 7.

## Attack, from Week 9

To be completed in Week 9.

## Regulatory, from Week 10

To be completed in Week 10.

## Checkpoint summaries

### Checkpoint 1, Week 4

- **What it does:** extracts supplier, origin, HS code and value from a shipment invoice and flags the supplier against a supplied list (clear / needs review / high risk match).
- **What I measured:** 70.8% (17/24 runs, 12 inputs × 2); 58.3% of inputs inconsistent; 75% on the practitioner-pattern set (8 inputs); Janis's set 10/10 consistent, origin missed on 3.
- **Dominant failure type:** F6 inconsistent (7 of 12 inputs).
- **Failure that matters most:** F3, the Chinese-script sanctioned bank cleared on one run (the expensive one); F2 on the corrupted invoice is the hardest to spot.
- **What I'd change first:** rules decide "clear", AI only adds flags; risky invoice types go to a human; v2 prompt separates transshipment port from origin, allows "cannot be determined", aligns the reference list. Value at the measured rate: [business case](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-04/business-case-draft.md).

### Checkpoint 2, Week 8

To be completed in Week 8.

### Checkpoint 3, Week 12

To be completed in Week 12.

---

Never delete a failure. A log full of successes is a log that has been curated, and a curated log is worth nothing.
