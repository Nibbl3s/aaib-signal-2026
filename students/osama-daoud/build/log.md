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
| Machine | Laser cutter (cutting and engraving plexiglass / acrylic) |
| Artifact | A tablet-style plexiglass panel for the physio's desk in a club's medical room, showing one "player card" exactly like the tool's output: name, body part, injury type and expected time out |
| Fablab session | To be booked at the fablab (Voetweg 66), before Week 8 |
