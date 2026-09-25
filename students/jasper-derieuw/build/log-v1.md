# Build Log

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

## Changes

No changes made yet. First revision planned before the Week 3 Gauntlet gate, once feedback from a second person's test set is available, per the Build brief's guidance that a second person's inputs will break the prompt in ways my own never did.

## Deployment probe, from Week 2

**After the intro session (Monday 28 September, 10:25 to 11:25, at the fablab, machines, safety, file formats):**

| | |
|---|---|
| Machine(s) I expect to use, and why | Laser cutter, to produce a small acrylic counter card or standee showing a mock invoice intake screen with the flag status field prominently visible |
| The artifact I am aiming for | A small standee or counter card, simulating how a compliance reviewer would physically encounter a needs review flag during document intake |
| Which weekly session or OPEN block I will visit, and when | To be scheduled after the 28 September intro session, targeting an OPEN block the following week |

**When the artifact exists, the deployment observation:**

To be completed before Week 8, per the Build brief.

## Cost, from Week 6

To be completed in Week 6.

## Second model, from Week 7

To be completed in Week 7.

## Attack, from Week 9

To be completed in Week 9.

## Regulatory, from Week 10

To be completed in Week 10.

## Checkpoint summaries

### Checkpoint 1, Week 4

To be completed in Week 4.

### Checkpoint 2, Week 8

To be completed in Week 8.

### Checkpoint 3, Week 12

To be completed in Week 12.

---

Never delete a failure. A log full of successes is a log that has been curated, and a curated log is worth nothing.
