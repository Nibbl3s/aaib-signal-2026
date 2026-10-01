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

---

## Changes

*(none yet — v2 planned for the Week 4 checkpoint)*

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
| Which weekly session or OPEN block I'll visit for file-prep, and when | To confirm — first available OPEN block after Week 3; file-prep before the Week 4 checkpoint |

**When the artifact exists — the deployment observation:**

> **What I deployed:** —
> **What the physical context showed that the chat window could not:** —
> **What it cost** (time, materials, revisions): —
> **Feeds which failure class or memo section:** —

---

## Cost — from Week 6

*(later)*

## Second model — from Week 7

*(later)*

## Attack — from Week 9

*(later)*

## Regulatory — from Week 10

*(later)*

---

## Checkpoint summaries

### Checkpoint 1 — Week 4
> *(to write in Week 4)*

### Checkpoint 2 — Week 8
> *(later)*

### Checkpoint 3 — Week 12
> *(later)*

---

*Never delete a failure.*

*AI use: Claude helped with the plumbing (anonymising inputs, running the 30 test runs in fresh sessions, filling in the tables) and drafted the narrative text in this log. The choice of job (from options AI proposed), the choice of inputs, the expected answers and the judgment calls in `test-set.md` are mine. The "failure that would have mattered most" analysis was drafted by AI; I agree with it.*
