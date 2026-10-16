# Build log — every run, every failure (Week 2)

## Run 1 + Run 2 — prompt v1 — 1 October 2026

- **Tool:** ChatGPT (web), prompt v1 from `prompt.md`
- **Method:** every article in a **new chat**, run **twice**. Same prompt, same article text both times.
- **Scoring rule:** an answer is correct when all four fields match the expected answer in `test-set.md` in meaning. Small wording differences that keep the same meaning (e.g. "until late December" vs "late December") count as correct but are noted.

| # | Player | Run 1 | Run 2 | Failure | Note |
|---|---|---|---|---|---|
| 1 | Joel Ordóñez (HLN, Dutch) | ✅ | ✅ | — | Identical both runs |
| 2 | Joel Ordóñez (RotoWire) | ✅ | ✅ | — | Run 1 "until late December", run 2 "late December": same meaning, wording varied |
| 3 | Kai Havertz (Arsenal, short) | ✅ | ✅ | — | Trap passed: said "unknown", did not invent the hamstring injury |
| 4 | Kai Havertz (ESPN) | ✅ | ✅ | — | |
| 5 | Cody Gakpo (Liverpool) | ✅ | ✅ | — | Body part "ankle", type correctly "unknown" |
| 6 | Bruno Fernandes (BBC) | ✅ | ✅ | — | |
| 6 | Cody Gakpo (BBC) | ✅ | ✅ | — | |
| 6 | Patrick Dorgu (BBC) | ✅ | ✅ | — | All three players found in both runs |
| 7 | João Pedro (X post) | ✅ | ✅ | — | Kept the range "3–4 weeks" |
| 8 | Kylian Mbappé (Le Monde, French) | ✅ | ❌ | **F2 + F6** | Run 1: injury type "unknown" (correct). Run 2: "ligament". The article never says ligament: the tool guessed (F2 fabricated) and changed its answer between runs (F6 inconsistent) |
| 9 | Iván Cuéllar (Guardian) | ✅ | ✅ | — | Trap passed: did not list Eriksen. Wrote the name as `Iván "Pichu" Cuéllar`, as written in the article |
| 10 | Ion Izagirre (cycling) | ✅ | ✅ | — | Trap passed: did not refuse, although the prompt says "football players" |

## Results

- **Success rate:** 23 / 24 correct answers = **95.8%** (n = 12 expected answers × 2 runs, from 10 articles)
- **Failures by type:**

| Type | Count |
|---|---|
| F1 wrong | 0 |
| F2 fabricated | 1 (#8, run 2) |
| F3 missed | 0 |
| F4 format | 0 |
| F5 refused | 0 |
| F6 inconsistent | 1 (#8, run 1 vs run 2) |

## What I learned

- The tool handled almost every trap: it said "unknown" when the article did not say, found all three players in #6, did not add Eriksen in #9, and did not refuse the cycling article.
- The one failure came on the hardest case: a **French** article with an injury (knee capsule) that does not fit my categories. The first time the tool answered honestly, the second time it **guessed "ligament"**, even though the prompt says "Do not guess". The same input gave a different answer.
- So a 95.8% score does not mean the tool can be trusted on its own: the mistake happened exactly where a mistake matters, on an unclear injury. This supports my Week 1 lesson: keep a human check.

## Ideas for v2

- Add a rule: "If the injury does not clearly fit one of the five types, write unknown."
- Change "football players" to "athletes", since the tool is also used for other sports.
- Run the French article more times to see how often the guess happens.

## Physical deployment probe — plan (Week 2)

| Field | Plan |
|---|---|
| Machine | Laser cutter: cutting and engraving 3 mm acrylic (clear front plate, coloured back plate, U-frame and two stand feet) |
| Artifact | An A5 desk stand for the club's data or medical room: engraved labels (player, body part, injury type, expected time out, source + date) and a "Checked by physio" box, with a swappable printed player card (fictional player) that slides in from the top |
| Fablab session | To be booked at the fablab (Voetweg 66), before Week 8. Laser-cut files are ready (SVG) |

## Build Checkpoint 1 — Week 4

1. **What it does:** it reads a real news article about an injured athlete and fills in a player card with four fields: player, body part, injury type (muscle / ligament / bone / head / unknown) and expected time out.
2. **What I measured:** 23 of 24 answers correct (95.8%) on 10 real articles in English, Dutch and French (12 players), every article run twice in a new chat.
3. **Dominant failure type:** F2 fabricated, together with F6 inconsistent: the only failure, where the tool invented an answer and changed it between runs.
4. **The failure that would matter most:** an F2 on the injury type or the time out. It looks like a confident, correct answer, so an analyst could pass it on without noticing, and a wrong injury could affect a transfer or selection decision.
5. **What I would change first:** add a rule to the prompt, "If the injury does not clearly fit one of the five types, write unknown", and change "football players" to "athletes". Then re-run the French Mbappé article several times to see if the guess disappears.

**Value (Week 4):** worth about €760 net a year to a club data analyst, used as a prompt in an AI chat tool (est.: 150 articles/month; the test articles average 179 words, about 45 seconds of reading at 238 words per minute, so the tool saves about 40 seconds per article, mostly the writing, because every card still has to be checked). Not worth building as a custom system: maintenance alone would cost about five times what it saves. The article volume and the writing/checking times are still estimates.
