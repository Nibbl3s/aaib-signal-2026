# Build test run 20261125-1350
Model: `claude-sonnet-5-5` via `claude -p` (mode: isolated); each call is a separate process; 2 runs per item.
Answer key = your test-set.md, unchanged. 'Full' = all three fields match exactly. Mismatches still need YOUR F1 to F6 classification.

## Summary (fresh items, n=6)

| Version | Full run A | Full run B | Full in BOTH runs | Same answer in both runs | Event ok | Asset ok | Fact/opinion ok | Format problems |
|---|---|---|---|---|---|---|---|---|
| v1 | 3/6 | 3/6 | 3/6 | 6/6 | 8/12 | 12/12 | 10/12 | 0/12 |
| v2 | 3/6 | 2/6 | 2/6 | 5/6 | 7/12 | 12/12 | 10/12 | 0/12 |

## Per item: v1

| Item | Expected (your key) | Run A | Run B | Full A/B | Wrong fields (A) | Wrong fields (B) |
|---|---|---|---|---|---|---|
| F1 (fresh) | company news / equities / fact | regulation / equities / fact | regulation / equities / fact | N/N | event | event |
| F2 (fresh) | company news / bonds, equities / fact | company news / bonds, equities / fact | company news / bonds, equities / fact | Y/Y | none | none |
| F3 (fresh) | market move / bonds, commodities, equities / fact | market move / bonds, commodities, equities / fact | market move / bonds, commodities, equities / fact | Y/Y | none | none |
| F4 (fresh) | regulation / commodities / fact | company news / commodities / fact | company news / commodities / fact | N/N | event | event |
| F5 (fresh) | opinion only / crypto / opinion | opinion only / crypto / opinion | opinion only / crypto / opinion | Y/Y | none | none |
| F6 (fresh) | company news / equities / opinion | company news / equities / fact | company news / equities / fact | N/N | fo | fo |

## Per item: v2

| Item | Expected (your key) | Run A | Run B | Full A/B | Wrong fields (A) | Wrong fields (B) |
|---|---|---|---|---|---|---|
| F1 (fresh) | company news / equities / fact | regulation / equities / fact | regulation / equities / fact | N/N | event | event |
| F2 (fresh) | company news / bonds, equities / fact | company news / bonds, equities / fact | market move / bonds, equities / fact | Y/N | none | event |
| F3 (fresh) | market move / bonds, commodities, equities / fact | market move / bonds, commodities, equities / fact | market move / bonds, commodities, equities / fact | Y/Y | none | none |
| F4 (fresh) | regulation / commodities / fact | company news / commodities / fact | company news / commodities / fact | N/N | event | event |
| F5 (fresh) | opinion only / crypto / opinion | opinion only / crypto / opinion | opinion only / crypto / opinion | Y/Y | none | none |
| F6 (fresh) | company news / equities / opinion | company news / equities / fact | company news / equities / fact | N/N | fo | fo |
