# Build: Test-Set Swap (Week 3)

> The Week 3 exercise: run another student's Week 2 inputs through my prompt and log the input that broke my tool. I did not record the in-class swap, so I ran it again on 11 October 2026, after the session. This file is that run, not a reconstruction of the class one.

**Inputs:** the ten inputs from Janis Krainis's freight forwarding test set ([students/janis-krainis/build/test-set.md](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/janis-krainis/build/test-set.md)), used unchanged. Chosen because freight requests sit next to my beat and include ports, hubs and a multi-leg route, which is where my Week 2 extension found the tool's real weakness: reporting a routing point as the country of origin.

**Prompt:** v1, unchanged ([prompt.md](prompt.md)), with the same reference list as my own test set: Heihe Rural Commercial Bank Co. Ltd. and Heilongjiang Suifenhe Rural Commercial Bank Co. Ltd. flagged; Huawei Technologies, Alibaba Group Holding, Ningbo Port Group and Foshan Nanhai Textiles clear.

**Why this set is hard for my tool:** these are booking requests, not invoices. Most of my four fields are simply not there. The honest answer for most fields is "not found", which tests F2 (fabricated) far harder than my own invoices did.

## Rules for the expected answers

Written and saved on 11 October 2026 at 11:50, **before any run**. Honest note on the record: I meant to commit them before running, but ran both chats first, so the commit came a few minutes after the runs. The expected answers below were not changed after seeing any output.

- **Supplier:** the party selling or shipping the goods, only if named. A "supplier in Valencia" without a name is not a supplier name.
- **Country of origin:** where the goods were made or sourced. A port, airport, terminal, warehouse or transit hub is a routing point, not an origin. If only a routing point is given, the answer is "not found". This is the rule my Week 2 extension said the next prompt version needs.
- **HS code / declared value:** only if stated. No input states either.
- **Flag status:** "cannot be determined" when there is no supplier name to check, the same rule as Input 12 in my own set.

## Inputs and expected answers

| # | Input (Janis's label) | Supplier | Country of origin | HS | Value | Flag | What it tests for my tool |
|---|---|---|---|---|---|---|---|
| 1 | Antwerp port to Vienna | not found | not found (port) | not found | not found | cannot be determined | Port read as origin; invented supplier |
| 2 | Rotterdam to Milan | not found | not found (port) | not found | not found | cannot be determined | Very short input |
| 3 | French, Marseille to Hamburg | not found | not found (port city, no production stated) | not found | not found | cannot be determined | Other language; borderline origin |
| 4 | Bilbao factory to Prague | not found | Spain (made at the Bilbao factory) | not found | not found | cannot be determined | A real origin among the routing points |
| 5 | Frankfurt airport to Budapest | not found | not found (airport) | not found | not found | cannot be determined | Missing fields; "Drewes" is the forwarder, not the supplier |
| 6 | Form: Warehouse Poznan to Leipzig | not found | not found (warehouse) | not found | not found | cannot be determined | Structured text tempting a guessed HS code |
| 7 | Gothenburg mill to Lyon | not found | Sweden (produced at the mill) | not found | not found | cannot be determined | Origin from a production site |
| 8 | Rotterdam terminal to Antwerp | not found | not found (terminal) | not found | not found | cannot be determined | Conversational, vague reference |
| 9 | Valencia supplier, Madrid hub, to Bucharest | not found | Spain (Valencia supplier, **not** the Madrid hub) | not found | not found | cannot be determined | **The transshipment trap** |
| 10 | Fragment, machine parts to partner site | not found | not found | not found | not found | cannot be determined | Almost nothing given: the "I don't know" case |

Failure codes as in [log.md](log.md): F1 wrong · F2 fabricated · F3 missed · F4 format · F5 refused · F6 inconsistent. Each input runs twice, in two separate fresh chats.

## Runs

**Date:** 11 October 2026. **Model:** Claude, claude.ai, two separate fresh chats, prompt v1 plus all ten inputs pasted as one message per chat. **Method difference from Week 2:** my Week 2 runs went one input at a time; here all ten went in one message. That may make the model more careful, so treat the consistency result below as weaker evidence than the Week 2 result.

| # | Run A: Supplier / Origin / HS / Value / Flag | Run B: same fields | Consistent? | Verdict against my expected answers | Code |
|---|---|---|---|---|---|
| 1 | not found / not found / not found / not found / needs review | identical | yes | Fields correct; flag differs (see below) | flag only |
| 2 | not found / not found / not found / not found / needs review | identical | yes | Fields correct; flag differs | flag only |
| 3 | not found / not found / not found / not found / needs review | identical | yes | Fields correct; flag differs | flag only |
| 4 | not found / **not found** / not found / not found / needs review | identical | yes | Origin missed: expected Spain. Run A noted "Spain is likely but not stated" | F3 (both runs) |
| 5 | not found / not found / not found / not found / needs review | identical | yes | Fields correct; correctly said "Drewes" is the forwarder, not the supplier | flag only |
| 6 | not found / not found / not found / not found / needs review | identical | yes | Fields correct; no guessed HS code despite the form layout | flag only |
| 7 | not found / **not found** / not found / not found / needs review | identical | yes | Origin missed: expected Sweden. Both runs noted Sweden as "likely" | F3 (both runs) |
| 8 | not found / not found / not found / not found / needs review | identical | yes | Fields correct; flag differs | flag only |
| 9 | not found / **not found** / not found / not found / needs review | identical | yes | Origin missed: expected Spain. **Did not fall into the transshipment trap**: Madrid was never given as origin | F3 (both runs) |
| 10 | not found / not found / not found / not found / needs review | identical | yes | Fields correct; flag differs | flag only |

Run A added an extra "Notes" column; Run B put the same points in notes under the table. The five fields were identical in both runs, so I do not count this as F4 or F6.

## Result

| Measure | Result |
|---|---|
| Supplier, HS code, declared value | 60 of 60 correct ("not found" every time) |
| Country of origin | 14 of 20 correct; inputs 4, 7, 9 missed in both runs |
| Flag status, strict against my expected answer | 0 of 20 ("needs review" every time, I expected "cannot be determined") |
| Inputs consistent across the two runs | 10 of 10 (F6: 0) |
| Fabrications (F2) | 0 |
| Failures by code | F3 × 6 (three inputs, both runs) · F1, F2, F4, F5, F6: 0 |

**Strictly against what I wrote down beforehand, no input passed.** That number is honest but it mostly measures a flaw in my test, not in the tool:

1. **"cannot be determined" is not an allowed value in prompt v1.** The prompt allows only clear, needs review and high risk match. I used "cannot be determined" for Input 12 in Week 2, the model produced it once there, and I carried it into these expected answers without checking the prompt. Here the tool picked "needs review", the closest allowed value, every time. Operationally that is the safe outcome, because nothing was cleared. The fix belongs in the prompt, not in the scoring.
2. **The three origin misses are cautious misses, not confident errors.** In each case the tool said the origin was likely but not stated. Run B made a point I had not: a "supplier in Valencia" is not necessarily the manufacturer. My expected answer for Input 9 may be the weaker reading.

## The input that broke my tool

**None broke it the dangerous way.** On a set that is almost all "not found", I expected fabrication (F2) like Input 12 in Week 2, and it did not happen once in 20 runs. The most informative input is **9, the multi-leg route**: the tool kept the Madrid hub out of the origin field in both runs, which is exactly the rule my Week 2 extension said v1 lacked. That rule is not written in v1, so the tool applied it by judgement. In Week 2 its judgement changed between runs, so the rule should be written into the prompt rather than relied on.

**What the swap found that my own tests did not:** my prompt asks to compare "entities and countries", but my reference list contains no countries (Run B pointed this out). Country screening has never been tested at all.
