# Build Log — DJ booking inquiry extractor

## The job

**What it does, in one sentence:**
> It reads a booking inquiry for my DJ business (form answer or e-mail) and returns the booking fields plus a list of what I still need to ask before I can send a quote.

**Input:** one booking-form answer or one e-mail, mostly in Dutch.
**Output:** a fixed JSON with 10 fields (see `prompt.md`).
**Who would use it, and instead of what?** Me, instead of re-reading every form answer and mail thread to work out what's still missing before I quote. I get under 10 inquiries a month, but they come in through three channels (form, mail, chat) and the details are often spread over several messages.

**Is the answer checkable?** Could two people independently agree whether a given output is right?
> Yes for most fields: a date, a time or a venue is either in the message or it isn't. The fields that need judgment (does "normally present" mean the sound system is arranged?) are decided in advance in the *Decisions* table in `test-set.md`, so a second person can check against that.

---

## The test set

**Where the inputs came from:** my own Google booking form (10 answers, July 2025 – Sept 2026) and my Gmail (5 messages).
**Real, or written by me?** All 15 are real. I did not invent any.
**Anonymised?** Yes. Names, e-mails and phone numbers removed; private home addresses replaced by `[address]` + town.

**Awkward cases deliberately included:**

- [x] Ambiguous — a human would have to ask a follow-up (T04, T09, T14)
- [ ] Another language — none of my real inquiries are in another language
- [x] Very short input (T12)
- [x] Very long input (T09)
- [x] One where the correct answer is mostly "I don't know" (T12, T14)
- [x] One near the boundary between two categories (T09, T15)
- [x] One with a typo, or written badly (T04, T10, T12)

The inputs and expected answers are in `test-set.md`. The expected answers were written before Run 1.

---

## Runs

### Run 1 — prompt v1 — 2026-10-01

**Brief:** Check whether v1 copies every field the client actually gave without inventing anything, and correctly lists what's still missing. I expect the form answers to be near-perfect and the free-text e-mails and remarks to cause the errors.
**Model used:** Claude Haiku 4.5. Each run was a separate, fresh session with only the prompt and one input — no memory of other inputs or of the expected answers.
**Inputs tested:** 15 × 2 runs = 30 outputs.
**Scoring:** an input is ✓ only if all 10 fields match the expected answer.

| # | Input (short label) | Expected (key fields) | Got (run A) | Got (run B) | Verdict | Failure code |
|---|---|---|---|---|---|---|
| T01 | Sweet 16, location "not 100% sure" | venue = Beurtkaai 1, Roeselare | ✓ all match | venue `unknown`, missing += venue | A ✓ / B ✗ | F3, F6 |
| T02 | Staff party, "please bring lights" | sound_and_light = rent_from_dj | ✓ (venue written as "8870 Izegem") | ✓ same | ✓ ✓ | — |
| T03 | 50th birthday, clean form | all fields | ✓ | ✓ | ✓ ✓ | — |
| T04 | Birthdays + graduation, vague | venue = [address] | venue `unknown` | venue `unknown` | ✗ ✗ | F3 |
| T05 | Fuif, start 0:00 | start 00:00 | ✓ | ✓ | ✓ ✓ | — |
| T06 | Party Instinct, gear "Ja" but none listed | dj_gear unknown, missing = dj_gear | dj_gear `on_site`, end `"0:00"`, missing [] | dj_gear `on_site`, missing [] | ✗ ✗ | F1, F4, F6 |
| T07 | Wedding, town only | all fields | ✓ | ✓ | ✓ ✓ | — |
| T08 | Shop reopening | all fields | ✓ | ✓ | ✓ ✓ | — |
| T09 | Proclamation, form vs remark conflict | dj_gear dj_brings, guests 80-100 | dj_gear `on_site`, guests `0 - 100` | dj_gear `on_site`, guests ✓ | ✗ ✗ | F1, F3, F6 |
| T10 | Wedding, times "are estimates" | 21:00–03:00, dj_brings | times `unknown`, dj_gear `unknown` | same | ✗ ✗ | F3 |
| T11 | KSA Kick-Off e-mail | venue unknown, party_fuif | venue `"Izegem"`, type `other` | venue `"Izegem"`, type ✓ | ✗ ✗ | F2, F1, F6 |
| T12 | "Getting married next year, price?" | wedding, all else unknown | ✓ | ✓ | ✓ ✓ | — |
| T13 | Wedding details "22u/23u", "normally present" | start 22:00, dj_gear unknown | start `unknown`, dj_gear `on_site` | start `unknown`, dj_gear ✓ | ✗ ✗ | F3, F2, F6 |
| T14 | Client reply, confused about gear | is_booking_inquiry true, birthday | `false`, all unknown | `false`, all unknown | ✗ ✗ | F1 |
| T15 | Municipal shift notification (not a client) | is_booking_inquiry false | ✓ | ✓ | ✓ ✓ | — |

Failure codes: **F1** wrong · **F2** fabricated · **F3** missed · **F4** format · **F5** refused · **F6** inconsistent between runs

**Result:** 15 correct out of 30 → **50%** (run A 8/15, run B 7/15). Only **7 of 15 inputs (47%)** were correct in *both* runs.

**Failures by type** (counted per wrong field per run):

| Code | Count | Notes |
|---|---:|---|
| F1 Wrong | 7 | dj_gear `on_site` on T06 and T09 (both runs); T14 called "not a booking" (both runs); T11 type `other` (run A) |
| F2 Fabricated | 3 | T11 venue "Izegem" taken from the club's name (both runs); T13 dj_gear `on_site` guessed from "music installation" (run A) |
| F3 Missed | 8 | 5 of 8 come from my own prompt rule "uncertain → unknown" (T01-B, T10 ×2, T13 ×2); 2 are T04, where my `[address]` placeholder probably looked like a blank; 1 is T09 guests (run A ignored the remark) |
| F4 Format | 1 | T06 run A returned `"0:00"` instead of `"00:00"` |
| F5 Refused | 0 | |
| F6 Inconsistent | 5 inputs | T01, T06 (format), T09, T11, T13 gave different answers on the same input |

**What surprised me:**
> Dates were 30/30 correct, including "3/09/2027" and form dates like "7-3-2026". So the failure I feared most (a made-up date) didn't show up once. The biggest group of failures wasn't the model at all. It was my prompt contradicting my own expected answers: I told it "if the client says it's uncertain, write unknown", then when I wrote the expected answers I wanted the estimated times anyway (T10, T13). The model followed the prompt and I marked it wrong. Also, 5 of 15 inputs gave a different answer on the second run, with the same prompt and the same input.

**The failure that would have mattered most in real use, and why:**
> T09, dj_gear = `on_site` in both runs. The client writes that there's only a mixer without decks and asks whether I can bring a back-up. The tool says the gear is on site and `missing_for_quote` is empty, so nothing tells me to bring decks. I'd show up to a paid gig with nothing to play on. That's worse than a wrong price, because you can't fix it on the night. The same pattern (trusting the tick box over the free text) happened on T06.

### Run 2 — prompt v2 — 2026-11-26

**Brief:** Does turning my pre-run decisions into rules (remark beats tick box, estimates kept, gear `unknown` unless clearly confirmed, explicit format) fix the judgment errors on Haiku and the format errors on Llama? Prediction written first (see Changes → v2).
**Models used:** Claude Haiku 4.5, each output a fresh Claude Code sub-agent session that read only one file (prompt v2 + one input); and Llama 3.2 3B via Ollama on my laptop (`../week-08/run_v2_local.py`). Same 15 inputs × 2 runs, same expected answers (1 Oct 2026), same scorer (`../week-08/score_v2.py`). Raw outputs: `../week-08/runs/v2/`.
**Scoring note:** two Haiku answers name the same thing in other words ("[address] (no town given)" for T04, "rond de 90" for T13 guests). Under my Week 2 wording rule those count as right, like "8870 Izegem" did in Run 1. Without that rule Haiku is 18/30.

| # | Haiku v2 (A / B) | Llama v2 (A / B) | Failure codes (Haiku · Llama) |
|---|---|---|---|
| T01 | ✓ ✓ | ✗ ✗ (gear `unknown`, invented sound `not_needed`; B broken JSON) | — · F3, F2, F4 |
| T02 | ✓ ✓ | ✗ ✗ (A broken JSON; B gear `"self"`) | — · F4 |
| T03 | ✓ ✓ | ✗ ✗ (gear `"self"`; **02:30 → 14:30**) | — · F4, F1 |
| T04 | ✓ ✓ | ✗ ✗ (gear `unknown`) | — · F3 |
| T05 | ✗ ✗ sound `unknown` (want `not_needed`) | ✗ ✗ | F3 · F1, F3 |
| T06 | ✗ ✗ **gear `on_site`**, sound `unknown` | ✗ ✗ (A broken JSON; **B gear `on_site`**) | **F1**, F3 · F4, **F1** |
| T07 | ✓ ✓ | ✗ ✗ (**03:00 → 15:00**; **A gear `on_site`**) | — · F1 |
| T08 | ✓ ✓ | ✗ ✗ (A broken JSON) | — · F4, F1 |
| T09 | ✗ ✗ type `party_fuif` (want `other`), sound `unknown` — **gear now right** | ✗ ✗ (gear `unknown`, guests 0-100) | F1, F3 · F3 |
| T10 | ✓ ✓ | ✗ ✗ (type `party_fuif`, gear `unknown`) | — · F1, F3 |
| T11 | ✓ ✓ | ✗ ✗ (**A venue "Izegem" again**, gear `on_site`; B broken JSON) | — · F2, F4 |
| T12 | ✓ ✓ | ✓ ✓ | — · — |
| T13 | ✓ ✓ | ✗ ✗ (A gear `on_site`) | — · F1 |
| T14 | ✗ ✗ sound `rent_from_dj` (want `unknown`) | ✗ ✓ | F2 · F2 |
| T15 | ✓ ✓ | ✗ ✗ (municipal shift mail called a company event) | — · F1 |

**Result:** Haiku **22/30 (73%)**, up from 15/30; run A 11/15, run B 11/15; **0 of 15 inputs** differed between runs (was 5). Llama **3/30**, up from 1/30, but 5 broken JSON (was 1) and 12/15 inputs inconsistent. With code doing the mechanical jobs (`../week-08/whatif_v2.py`) Llama drops to **5/30**, down from 12/30 with v1.
**Cost:** v2 is 56% longer (Llama tokens: 644 → 1,008 in), so a Haiku run goes from ≈ $0.0016 to ≈ **$0.0020** (1,246 in / 154 out at $1/$5 per 1M). At 35 inquiries a year that's $0.07 instead of $0.06. Llama: €0, median 3.9 s per call (was 3.4 s).

**What surprised me:**
> The same prompt change went in opposite directions on the two models. On Haiku, every rule I added did what it should: T09's gear flipped to `dj_brings`, the estimates in T01, T10 and T13 were kept, and the two runs agreed on every input. On Llama the longer prompt made things worse: more broken JSON, an invented gear value `"self"`, and the gear field right in only 10 of 25 parseable outputs (was 22 of 29). It still turned 02:30 into 14:30 even though the prompt now says that in plain words. A rule in a prompt is a request. Only code enforces it.

**The failure that would matter most now:**
> T06 on Haiku, both runs: `on_site`, although the prompt now says that a "yes" without saying what is there is `unknown`. The form ticks "Ja" for gear but lists nothing. It's the one dangerous error v2 didn't fix (2/30 = 7%), and no code check catches it because `on_site` is an allowed value. That's why my Week 8 design shows the gear field to me on every draft, whatever the model.

---

## Changes

### v2 — 2026-11-26 (prompt in `prompt.md`)

**Reason:** Run 1 showed my prompt contradicting the decisions I wrote down before Run 1 (uncertain → unknown, tick box over remark), and the Week 7 Llama run showed format rules the prompt never stated. v2 turns the pre-run decisions into general rules and states the format. Expected answers unchanged (1 Oct 2026).

**Prediction, written and agreed 26 Nov 2026 before any v2 run:**
- Haiku 4.5: 15/30 → about **24/30**.
- Llama 3.2 3B: 1/30 → about **6/30**; format stays its weak point.
- Dangerous gear error (`on_site` where I must bring decks): Haiku 4/30 → **0–1/30**; Llama stays at **≥ 2/30**.
- Biggest risk: the "unknown unless clearly confirmed" gear rule pushes correct `dj_brings` answers (T04, T10) to `unknown`.

**Result vs prediction:** Haiku 22/30 (predicted ≈ 24), gear error 2/30 (predicted 0–1); Llama 3/30 (predicted ≈ 6), gear error 4/30 (predicted ≥ 2). The risk I named (T04/T10 going to `unknown`) did not happen on Haiku; it did on Llama (T04, T10 gear `unknown` in both runs). See Run 2.

*(the v1 candidate list below is what v2 was built from)*

Candidate for v2, to be predicted before re-running:
- Decide the "uncertain" rule properly: an estimate or a range → keep the earliest stated value and add the field to `missing_for_quote`. This should fix T01, T10 and T13 without losing the "ask the client" signal.
- When the free-text remark contradicts a tick box, the remark wins.
- Never derive the venue from an organisation's name.

---

## Deployment probe — from Week 2

I missed the fablab intro session on Monday 28 September. This plan is based on the fablab information on the course site; I still have to confirm the machine and the session with the fablab.

| | |
|---|---|
| Machine(s) I expect to use, and why | Laser cutter: a flat plywood sign is quick to cut and engrave, and fits next to the DJ booth |
| The artifact I'm aiming for (kiosk face, counter mock, standee…) | A small standee at the DJ booth: "Book DJ Thorax for your party" + a QR code to my booking form. The probe tests whether inquiries made at a party (on a phone, after a few drinks) are messier than the ones I get now |
| Which weekly session or OPEN block I'll visit for file-prep, and when | **Not booked yet (12 Oct).** To book: the first fablab OPEN block after Week 4, for laser-cutter file-prep (SVG of the standee + QR code) |

**When the artifact exists — the deployment observation:**

> **What I deployed:** —
> **What the physical context showed that the chat window could not:** —
> **What it cost** (time, materials, revisions): —
> **Feeds which failure class or memo section:** —

---

## Cost — from Week 6

Measured on 26 Oct 2026 with my own API key, `gemini-3.1-flash-lite` ($0.25 / $1.50 per 1M, AI Studio, read the same day), prompt v1 + real inputs. Full model: [`../week-06/cost-model.md`](../week-06/cost-model.md).

| | |
|---|---|
| Tokens per run (measured, T03 + T09) | 796 in / 154 out on average; output fixed by the JSON (151–157) |
| Cost per run | $0.00043 |
| Monthly volume | 2.9 inquiries (0.9 measured form + mail, 2 estimated chat/phone) |
| Monthly token cost | €0.0011 |
| Error rate | 50% (Run 1, Haiku 4.5, n = 30); dangerous gear error 13% |
| Who fixes an error | me |
| Monthly error cost | €3.62 ordinary + €116 gear errors unchecked (€0.97 with a 1-min gear check) |
| Error cost ÷ token cost | 4,001× with the gear check, 104,242× without |

New observation: on the same T09 input Gemini returned `dj_gear` = `unknown` and put it in `missing_for_quote`. Wrong by my scoring rule, but the safe kind of wrong, where Haiku said `on_site` twice. Only two Gemini outputs so far, so this is a lead for the Week 7 second-model run, not a result. 5 of 8 calls got HTTP 503 on the free tier, so T12 was never measured.

## Second model — from Week 7

Run 19 Nov 2026 on a model I own: `llama3.2` (Llama 3.2 3B, Q4_K_M, 2.0 GB) via Ollama 0.40.16 on my MacBook (M4, 16 GB). Prompt v1 unchanged, same 15 inputs × 2 fresh runs, same expected answers. Script, raw outputs and scorer: [`../week-07/`](../week-07/). Full analysis: [`../week-07/lab-memo.md`](../week-07/lab-memo.md).

| | Haiku 4.5 (Run 1, cloud) | Llama 3.2 3B (mine) |
|---|---|---|
| Fully correct | 15/30 (50%) | **1/30 (3%)** (T14-B only) |
| Cost per run | ≈ $0.0016 | €0 per call (laptop, electricity, my time) |
| Dominant failure | F3 missed, F1 wrong (judgment) | F4 format (Dutch labels, "0:00", 1 broken JSON) + F1 on `missing_for_quote` (rules) |
| Gear error (T06, T09 `on_site`) | 4/30 = 13% | **4/30 = 13%, same inputs** |
| F6 inconsistent inputs | 5/15 | 14/15 |
| Data | Anthropic's servers | never left my laptop |
| Latency | — | median 3.4 s, first call 5.3 s |

New fabrication on both models: T11 venue "Izegem" from "KSA Meisjes Izegem". New on Llama: "02:30" → "14:30" (T03-A) and "02:00" → "14:00" (T05-B).

What-if (not a score): if code maps the event label, pads times and builds `missing_for_quote` from the unknown fields, Llama reaches 12/30. So most of the gap is format, which a wrapper can absorb. The gear error is not, and it doesn't move with the vendor.

## Attack — from Week 9

*(later)*

## Regulatory — from Week 10

*(later)*

---

## Checkpoint summaries

### Checkpoint 1 — Week 4
> **What it does:** Reads one booking inquiry for my DJ business (form answer or e-mail, mostly Dutch) and returns 10 booking fields plus the list of what I still need to ask before I can quote.
> **Measured:** 50% fully correct on 15 real inputs × 2 runs (n = 30); only 7/15 inputs (47%) correct in both runs; dates 30/30 correct.
> **Dominant failure type:** F3 missed (8 of 19 failures), mostly caused by my own prompt rule "uncertain → unknown" contradicting the expected answers I wanted (T01, T10, T13). F1 wrong is second (7), concentrated on the gear field.
> **The failure that would matter most:** T09, dj_gear = `on_site` in both runs while the client wrote there's only a mixer and asked me to bring back-up decks. Nothing goes into `missing_for_quote`, so I'd turn up to a paid gig without decks (≈ €300 + reputation). Worth more than three years of the tool's time savings (see `business-case.md`).
> **What I'd change first:** let a free-text remark override a tick-box answer, and fix the "uncertain" rule (keep the stated estimate and add the field to `missing_for_quote`). Then re-run the same 15 inputs ×2 with a written prediction first: I expect T01, T10 and T13 to flip to correct and T09 to become `dj_brings`.

### Checkpoint 2 — Week 8
> **What it does now:** reads one booking inquiry and returns the 10 fields plus what to ask, **22/30 fully right on Haiku 4.5 with prompt v2** (was 15/30), with both runs agreeing on all 15 inputs.
> **Revision and why:** v2 (26 Nov) turned the decisions I'd written before Run 1 into rules, because Run 1 showed my prompt contradicting my own expected answers. Prediction first: Haiku ≈ 24/30, gear error 0–1/30. Measured: 22/30, gear error 2/30 (T06 both runs). Right direction, too optimistic.
> **The delta explained:** the gains are exactly the rules I added (T01, T10, T13 estimates kept; T09 gear fixed). The leftovers are T06 (a "Ja" tick box still read as gear on site), T05/T09 sound and light, and T14. On Llama the same change backfired (3/30, and 5/30 with code instead of 12/30), so prompt rules don't transfer to small models. Code has to enforce the format.
> **Costed:** ≈ $0.0020 per Haiku run (+25%), $0.07 a year at my volume. The cost that matters is still the 7% dangerous gear error: one miss ≈ €300.
> **Where it sits:** the EXTRACT box in my Week 8 Thorax intake design (`../week-08/lab-memo.md`), behind a code validator and in front of a human check on gear/formula/price.

### Checkpoint 3 — Week 12
> *(later)*

---

*Never delete a failure.*

*AI use: Claude helped with the plumbing (anonymising inputs, running the 30 test runs in fresh sessions, filling in the tables) and drafted the narrative text in this log. The choice of job (from options AI proposed), the choice of inputs, the expected answers and the judgment calls in `test-set.md` are mine. The "failure that would have mattered most" analysis was drafted by AI; I agree with it.*
