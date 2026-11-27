# Build test run 20261125-1329
Model: `claude-sonnet-5-5` via `claude -p` (mode: isolated); each call is a separate process; 2 runs per item.
Answer key = your test-set.md, unchanged. 'Full' = all three fields match exactly. Mismatches still need YOUR F1 to F6 classification.

## Summary (core items, n=15)

| Version | Full run A | Full run B | Full in BOTH runs | Same answer in both runs | Event ok | Asset ok | Fact/opinion ok | Format problems |
|---|---|---|---|---|---|---|---|---|
| v1 | 7/15 | 8/15 | 7/15 | 13/15 | 25/30 | 18/30 | 28/30 | 0/30 |
| v2 | 8/15 | 8/15 | 8/15 | 14/15 | 28/30 | 18/30 | 30/30 | 0/30 |

## Per item: v1

| Item | Expected (your key) | Run A | Run B | Full A/B | Wrong fields (A) | Wrong fields (B) |
|---|---|---|---|---|---|---|
| 1 | rate decision / bonds, fx / fact | rate decision / bonds, equities, fx / fact | rate decision / bonds, equities, fx / fact | N/N | asset | asset |
| 2 | macro data / fx / fact | macro data / none / fact | macro data / bonds, equities, fx / fact | N/N | asset | asset |
| 3 | company news / equities / opinion | company news / equities / opinion | company news / equities / opinion | Y/Y | none | none |
| 4 | company news / equities / fact | company news / equities / fact | company news / equities / fact | Y/Y | none | none |
| 5 | regulation / commodities / fact | market move / commodities / fact | regulation / commodities / fact | N/Y | event | none |
| 6 | market move / bonds, equities, fx / fact | market move / bonds / fact | market move / bonds / fact | N/N | asset | asset |
| 7 | regulation / commodities / fact | regulation / commodities / fact | regulation / commodities / fact | Y/Y | none | none |
| 8 | company news / equities / fact | company news / equities / fact | company news / equities / fact | Y/Y | none | none |
| 9 | macro data / fx / fact | macro data / bonds, equities, fx / fact | macro data / bonds, equities, fx / fact | N/N | asset | asset |
| 10 | company news / equities / opinion | company news / equities / opinion | company news / equities / opinion | Y/Y | none | none |
| 11 | company news / equities / opinion | opinion only / equities / opinion | opinion only / equities / opinion | N/N | event | event |
| 12 | none / none / fact | none / equities / fact | none / equities / fact | N/N | asset | asset |
| 13 | opinion only / crypto / opinion | opinion only / crypto / opinion | opinion only / crypto / opinion | Y/Y | none | none |
| 14 | opinion only / fx / opinion | rate decision / bonds, equities / fact | rate decision / bonds, equities / fact | N/N | event, asset, fo | event, asset, fo |
| 15 | opinion only / crypto / opinion | opinion only / crypto / opinion | opinion only / crypto / opinion | Y/Y | none | none |

## Per item: v2

| Item | Expected (your key) | Run A | Run B | Full A/B | Wrong fields (A) | Wrong fields (B) |
|---|---|---|---|---|---|---|
| 1 | rate decision / bonds, fx / fact | rate decision / bonds, equities, fx / fact | rate decision / bonds, equities, fx / fact | N/N | asset | asset |
| 2 | macro data / fx / fact | macro data / bonds, equities, fx / fact | macro data / none / fact | N/N | asset | asset |
| 3 | company news / equities / opinion | company news / equities / opinion | company news / equities / opinion | Y/Y | none | none |
| 4 | company news / equities / fact | company news / equities / fact | company news / equities / fact | Y/Y | none | none |
| 5 | regulation / commodities / fact | market move / commodities / fact | market move / commodities / fact | N/N | event | event |
| 6 | market move / bonds, equities, fx / fact | market move / bonds / fact | market move / bonds / fact | N/N | asset | asset |
| 7 | regulation / commodities / fact | regulation / commodities / fact | regulation / commodities / fact | Y/Y | none | none |
| 8 | company news / equities / fact | company news / equities / fact | company news / equities / fact | Y/Y | none | none |
| 9 | macro data / fx / fact | macro data / none / fact | macro data / none / fact | N/N | asset | asset |
| 10 | company news / equities / opinion | company news / equities / opinion | company news / equities / opinion | Y/Y | none | none |
| 11 | company news / equities / opinion | company news / equities / opinion | company news / equities / opinion | Y/Y | none | none |
| 12 | none / none / fact | none / equities / fact | none / equities / fact | N/N | asset | asset |
| 13 | opinion only / crypto / opinion | opinion only / crypto / opinion | opinion only / crypto / opinion | Y/Y | none | none |
| 14 | opinion only / fx / opinion | opinion only / bonds, equities / opinion | opinion only / bonds, equities / opinion | N/N | asset | asset |
| 15 | opinion only / crypto / opinion | opinion only / crypto / opinion | opinion only / crypto / opinion | Y/Y | none | none |
