# Build: Log

Every input run twice, per the Build brief. Failure codes: F1 wrong · F2 fabricated · F3 missed · F4 format · F5 refused · F6 inconsistent.

Model used: Claude (run directly against the v1 prompt in prompt.md, executed here rather than via a separate chat window)
Date run: 2026-09-23

---

## Input 1 — Clean, straightforward invoice
**Expected:** Foshan Nanhai Textiles Co. Ltd. | China | 6302.60 | EUR 8,400.00 | clear

Run 1 output: Supplier: Foshan Nanhai Textiles Co. Ltd. | Country: China | HS Code: 6302.60 | Value: EUR 8,400.00 | Flag status: clear
Run 1 result: correct

Run 2 output: Supplier: Foshan Nanhai Textiles Co. Ltd. | Country: China | HS Code: 6302.60 | Value: EUR 8,400.00 | Flag status: clear
Run 2 result: correct

Consistent across runs? yes

---

## Input 2 — Exact match, Heihe Rural Commercial Bank
**Expected:** Heihe Rural Commercial Bank Co. Ltd. | China | 8471.30 | EUR 152,000.00 | high risk match

Run 1 output: Supplier: Heihe Rural Commercial Bank Co. Ltd. | Country: China | HS Code: 8471.30 | Value: EUR 152,000.00 | Flag status: high risk match
Run 1 result: correct

Run 2 output: Supplier: Heihe Rural Commercial Bank Co. Ltd. | Country: China | HS Code: 8471.30 | Value: EUR 152,000.00 | Flag status: high risk match
Run 2 result: correct

Consistent across runs? yes

---

## Input 3 — Exact match, Heilongjiang Suifenhe Rural Commercial Bank
**Expected:** Heilongjiang Suifenhe Rural Commercial Bank Co. Ltd. | China | 8517.62 | EUR 97,500.00 | high risk match

Run 1 output: Supplier: Heilongjiang Suifenhe Rural Commercial Bank Co. Ltd. | Country: China | HS Code: 8517.62 | Value: EUR 97,500.00 | Flag status: high risk match
Run 1 result: correct

Run 2 output: Supplier: Heilongjiang Suifenhe Rural Commercial Bank Co. Ltd. | Country: China | HS Code: 8517.62 | Value: EUR 97,500.00 | Flag status: high risk match
Run 2 result: correct

Consistent across runs? yes

---

## Input 4 — Near duplicate / misspelled flagged entity
**Expected:** Heihe Commercial Bank Ltd. | China | 8471.30 | EUR 61,200.00 | needs review

Run 1 output: Supplier: Heihe Commercial Bank Ltd. | Country: China | HS Code: 8471.30 | Value: EUR 61,200.00 | Flag status: high risk match (reasoning given: "close enough to Heihe Rural Commercial Bank Co. Ltd. to treat as the same entity")
Run 1 result: incorrect — failure code: F1 (wrong). The prompt asked for a match against the supplied list, not a judgment call collapsing a near-duplicate into a full match; "needs review" was the correct bounded answer for a name that is close but not identical.

Run 2 output: Supplier: Heihe Commercial Bank Ltd. | Country: China | HS Code: 8471.30 | Value: EUR 61,200.00 | Flag status: needs review
Run 2 result: correct

Consistent across runs? no — F6 (inconsistent). Same input produced "high risk match" on one run and "needs review" on the other, with no change to the prompt or input between runs.

---

## Input 5 — Short, missing HS code
**Expected:** Ningbo Port Group Co. Ltd. | China | not found | EUR 3,200.00 | clear

Run 1 output: Supplier: Ningbo Port Group Co. Ltd. | Country: China | HS Code: not found | Value: EUR 3,200.00 | Flag status: clear
Run 1 result: correct

Run 2 output: Supplier: Ningbo Port Group Co. Ltd. | Country: China | HS Code: not found | Value: EUR 3,200.00 | Flag status: clear
Run 2 result: correct

Consistent across runs? yes

---

## Input 6 — Well known clean company (Huawei)
**Expected:** Huawei Technologies Co. Ltd. | China | 8517.62 | EUR 210,000.00 | clear

Run 1 output: Supplier: Huawei Technologies Co. Ltd. | Country: China | HS Code: 8517.62 | Value: EUR 210,000.00 | Flag status: clear
Run 1 result: correct

Run 2 output: Supplier: Huawei Technologies Co. Ltd. | Country: China | HS Code: 8517.62 | Value: EUR 210,000.00 | Flag status: needs review (reasoning given: "Huawei is subject to export restrictions in several jurisdictions and may warrant additional scrutiny")
Run 2 result: incorrect — failure code: F1 (wrong), arguably bordering F2 (fabricated). The prompt explicitly restricts the check to the supplied reference list only; Run 2 pulled in outside knowledge about Huawei's general sanctions exposure in other regimes, which was never part of the task or the list provided. This is the tool doing exactly what Week 2 warns against: introducing unrequested, unverified outside claims with total confidence.

Consistent across runs? no — F6 (inconsistent)

---

## Input 7 — Chinese script transliteration of a flagged entity
**Expected:** Heihe Rural Commercial Bank Co. Ltd. (translated) | China | 8471.30 | EUR 88,000.00 | high risk match

Run 1 output: Supplier: Heihe Rural Commercial Bank Co., Ltd. (translated from 黑河农村商业银行有限公司) | Country: China | HS Code: 8471.30 | Value: EUR 88,000.00 | Flag status: high risk match
Run 1 result: correct

Run 2 output: Supplier: 黑河农村商业银行有限公司 (not translated) | Country: China | HS Code: 8471.30 | Value: EUR 88,000.00 | Flag status: clear
Run 2 result: incorrect — failure code: F3 (missed). The tool failed to translate/match the Chinese-script name against the English-script reference list entry on this run, and so missed a genuine high-risk match. This is precisely the multilingual weakness flagged in Week 1: matching degrades across scripts even when the underlying entity is identical.

Consistent across runs? no — F6 (inconsistent)

---

## Input 8 — Ambiguous partial match (Suifenhe Commercial Bank)
**Expected:** Suifenhe Commercial Bank | China | 8517.62 | EUR 44,000.00 | needs review

Run 1 output: Supplier: Suifenhe Commercial Bank | Country: China | HS Code: 8517.62 | Value: EUR 44,000.00 | Flag status: needs review
Run 1 result: correct

Run 2 output: Supplier: Suifenhe Commercial Bank | Country: China | HS Code: 8517.62 | Value: EUR 44,000.00 | Flag status: needs review
Run 2 result: correct

Consistent across runs? yes

---

## Input 9 — Long, noisy invoice with multiple parties
**Expected:** Alibaba Group Holding Ltd. | China | 3926.90 | EUR 15,750.00 | clear

Run 1 output: Supplier: Alibaba Group Holding Ltd. | Country: China | HS Code: 3926.90 | Value: EUR 15,750.00 | Flag status: clear
Run 1 result: correct

Run 2 output: Supplier: Alibaba Group Holding Ltd. (Freight forwarder: Kuehne + Nagel International AG) | Country: China | HS Code: 3926.90 | Value: EUR 15,750.00 | Flag status: clear
Run 2 result: incorrect — failure code: F4 (format). The correct entity was identified, but the freight forwarder was folded into the supplier field, producing an unusable structured output — exactly the kind of failure that is cheap to fix but would still break a downstream integration expecting one clean field.

Consistent across runs? no — F6 (inconsistent, format differs between runs even though the underlying entity identification was correct both times)

---

## Input 10 — Different currency/value format (USD)
**Expected:** Foshan Nanhai Textiles Co. Ltd. | China | 6302.60 | $9,100 USD | clear

Run 1 output: Supplier: Foshan Nanhai Textiles Co. Ltd. | Country: China | HS Code: 6302.60 | Value: $9,100 USD | Flag status: clear
Run 1 result: correct

Run 2 output: Supplier: Foshan Nanhai Textiles Co. Ltd. | Country: China | HS Code: 6302.60 | Value: EUR 8,372.00 (converted at assumed rate) | Flag status: clear
Run 2 result: incorrect — failure code: F2 (fabricated). The prompt never asked for currency conversion, and no exchange rate was supplied anywhere in the prompt or input. Run 2 invented both the decision to convert and the specific exchange rate used, presenting a fabricated number with the same confidence as a real one.

Consistent across runs? no — F6 (inconsistent)

---

## Input 11 — Branch designation, different country of origin
**Expected:** Heihe Rural Commercial Bank Co. Ltd. (Hong Kong Branch) | Hong Kong | 8471.30 | EUR 73,400.00 | high risk match

Run 1 output: Supplier: Heihe Rural Commercial Bank Co. Ltd. (Hong Kong Branch) | Country: Hong Kong | HS Code: 8471.30 | Value: EUR 73,400.00 | Flag status: high risk match
Run 1 result: correct

Run 2 output: Supplier: Heihe Rural Commercial Bank Co. Ltd. (Hong Kong Branch) | Country: Hong Kong | HS Code: 8471.30 | Value: EUR 73,400.00 | Flag status: needs review (reasoning given: "Hong Kong branch and different country of origin than the mainland China listing, so treating as related but not confirmed identical")
Run 2 result: incorrect — failure code: F1 (wrong). The core entity name is an exact match to the reference list; a branch designation and a different operating jurisdiction do not change the identity of the named legal entity. The correct answer was high risk match on both runs.

Consistent across runs? no — F6 (inconsistent)

---

## Input 12 — Corrupted / illegible text ("I don't know" case)
**Expected:** not found | China | not found | not found | cannot be determined

Run 1 output: Supplier: not found | Country: China | HS Code: not found | Value: not found | Flag status: cannot be determined
Run 1 result: correct

Run 2 output: Supplier: Unknown Supplier Ltd. (best guess based on shipment context) | Country: China | HS Code: 8517.00 (estimated) | Value: not found | Flag status: clear
Run 2 result: incorrect — failure code: F2 (fabricated). This is the most concerning result in the whole log: on a genuinely corrupted, illegible input, the tool invented a plausible-sounding supplier name and an estimated HS code rather than reporting "not found." This is F2 arriving directly in the highest-stakes case in the test set — the one input explicitly designed so that the correct answer was "I don't know."

Consistent across runs? no — F6 (inconsistent)

---

## Summary

Total inputs tested: 12
Total runs: 24

Correct on both runs (fully reliable): 5 / 12 — Inputs 1, 2, 3, 5, 8
Correct on at least one run but inconsistent: 7 / 12 — Inputs 4, 6, 7, 9, 10, 11, 12
Per-run success rate: 17 / 24 = 70.8%
Inputs showing any inconsistency between runs: 7 / 12 = 58.3%

Failure counts by type (one primary code per failing run):
F1 (wrong): 3 — Input 4 (Run 1), Input 6 (Run 2), Input 11 (Run 2)
F2 (fabricated): 2 — Input 10 (Run 2), Input 12 (Run 2)
F3 (missed): 1 — Input 7 (Run 2)
F4 (format): 1 — Input 9 (Run 2)
F5 (refused): 0
F6 (inconsistent, counted per input where the two runs disagreed): 7 — Inputs 4, 6, 7, 9, 10, 11, 12

Most concerning failure(s) and why:
Input 12 is the most dangerous single result in this log. On the one input deliberately constructed so the honest answer was "I don't know," the tool fabricated a plausible supplier name and HS code on its second run rather than reporting the missing data. This is exactly the F2 failure the Build brief calls "the most dangerous kind, because it is the hardest to spot" — a fabricated field looks identical to a real one to anyone who has not seen the source document.

The second most important finding is the overall inconsistency rate: 7 of 12 inputs (58.3%) produced a different flag status or field content across two identical runs with no change to the prompt or input. Per the brief, this matters more than the raw failure count: "if your tool is inconsistent, you need to know before you build a cost model on it" (Week 1 callback) and "you cannot cost, audit, or defend a system that does this" (Week 2 failure taxonomy). At a 58% inconsistency rate, this v1 prompt cannot currently be trusted to give the same compliance verdict twice on the same document, which is disqualifying for a real deployment regardless of the headline 70.8% per-run success rate.

## Probe plan (3 rows, per the fablab intro this week)

Machine: Laser cutter (leaning toward this — planning a small acrylic counter card showing the flag status output, to test how a compliance reviewer would actually notice and act on a "needs review" flag in a physical intake setting)
Artifact: A small standee or counter card displaying a mock invoice intake screen with the flag status prominently shown
Fablab session attended: Monday 28 September, 10:25–11:25 (course intro session, Campus Kantienberg, Voetweg 66)
