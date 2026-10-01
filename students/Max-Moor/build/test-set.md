# Test set — Quote intake extraction

**Rule:** expected answers are written here BEFORE any run. Do not edit an expected answer after seeing an output. If one was wrong, add a dated correction note under it instead.

**Source status (be honest):** every input below is currently **S = synthetic**. Replace as many as you can with **R = real** requests (anonymised emails received by O&D, public forum posts, supplier enquiries). If any stay synthetic, say so in the log and treat the measured success rate as an upper bound.

**Scoring conventions**
- A field is correct if it matches the expected value in meaning (`deadline` is compared by meaning, not exact wording).
- `missing_info` is correct if it contains exactly the expected items (order ignored).
- An input passes only if all fields and `missing_info` are correct.
- Tolerances are not in the v1 schema and are not scored.

| # | Source | Awkward type | Input |
|---|---|---|---|
| 1 | S | Baseline | "Hi, I need 50 PLA brackets, about 8 cm long, by 15 November. STL attached." |
| 2 | S | Other language (FR) | "Bonjour, 20 pièces en nylon SLS, 12 cm maximum, livraison fin octobre. Pas encore de fichier 3D." |
| 3 | S | Other language (NL) | "Ik heb 5 prototypes nodig in resin, ongeveer 6 cm. Het 3D-bestand is bijgevoegd." |
| 4 | S | Other language (DE) | "Wir brauchen 200 Gehäuse aus ABS, 15 cm, bis Ende des Monats. Zeichnung im Anhang." |
| 5 | S | Very short / ambiguous | "PLA 20" |
| 6 | S | Unit conversion | "10 pieces, 3 inches wide, ASAP. File attached." |
| 7 | S | Contradiction | "I need 30 parts, 5 cm, in ABS. Actually make that 300. File attached." |
| 8 | S | Out of scope | "How much for one aluminium engine block casting?" |
| 9 | S | "I don't know" | "I need 15 housings for a sensor, about 10 cm, by end of November. I don't know which material or process to use, what do you recommend? File attached." |
| 10 | S | Non-3D process | "Laser cut 100 coasters in 4 mm birch plywood, 10 cm diameter, before 1 December. Vector file attached." |
| 11 | S | Multiple dimensions | "Need 15 pcs 120x40x25 mm in CNC aluminium 6061, tolerance ±0.05, deadline 20/11. STEP file attached." |
| 12 | S | Very long, buried details | "Hello team, I run a small bike shop in Leuven and we are launching a new cargo bike accessory line. Last year I worked with another supplier but their delivery was late, so I am looking for someone more reliable. The part is a handlebar bracket, roughly 9 cm wide. We would start with a first batch of 25 and then, if all goes well, maybe 500 per month. I was thinking SLS nylon but I am open to advice. We would need the first batch before the bike fair on 14 March. I will send the 3D model after our call. Kind regards" |
| 13 | S | Needs a follow-up question | "I need 40 parts in the same material as my last order, around 7 cm. File attached." |

## Expected answers (written before running)

| # | process_requested | material | quantity | largest_dimension_mm | deadline | missing_info | out_of_scope |
|---|---|---|---|---|---|---|---|
| 1 | null | "PLA" | 50 | 80 | "15 November" | [process] | false |
| 2 | "SLS" | "nylon" | 20 | 120 | "fin octobre" | [file] | false |
| 3 | "resin" | null | 5 | 60 | null | [material, deadline] | false |
| 4 | null | "ABS" | 200 | 150 | "Ende des Monats" | [process] | false |
| 5 | null | "PLA" | null (ambiguous) | null | null | [process, quantity, dimensions, deadline, file] | false |
| 6 | null | null | 10 | 76.2 | "ASAP" | [process, material] | false |
| 7 | null | "ABS" | null (contradiction) | 50 | null | [process, quantity, deadline] | false |
| 8 | any | any | any | any | any | any | **true** (only this field and "no price given" are scored) |
| 9 | null | null | 15 | 100 | "end of November" | [process, material] | false (and no recommendation given) |
| 10 | "laser" | "birch plywood" | 100 | 100 | "before 1 December" | [] | false |
| 11 | "CNC" | "aluminium 6061" | 15 | 120 | "20/11" | [] | false |
| 12 | "SLS" | "nylon" | 25 (first batch, not 500) | 90 | "14 March" | [file] | false |
| 13 | null | null | 40 | 70 | null | [process, material, deadline] | false |

## Why I expect it to struggle (predictions, written before running)

- **#5, #7, #12:** I expect over-confident answers (guessing a quantity, picking one of the two quantities, taking 500 instead of 25).
- **#8, #9:** I expect the model to answer the question (give a price or a recommendation) instead of returning only JSON.
- **#3, #4:** I expect language to be fine, but `deadline` or `missing_info` may be inconsistent.
- **#6:** I expect the inch conversion to be right (76.2), but it may round.

## Corrections log (dated; never overwrite an expected answer)

*(none yet)*
