# Build: Test Set

## Note on input sourcing

These 12 inputs are constructed by me, not sourced from real public invoices or documents. Per the Build brief, this is the fallback, not the plan: constructed inputs are unconsciously shaped to be answerable, so my measured success rate should be treated as an upper bound, not a true field measurement. If time allows before Friday I will try to replace some of these with real sourced shipping documents. Expected answers below were written before any input was run through the tool.

Reference list used for flag status (see prompt.md): Heihe Rural Commercial Bank Co. Ltd. and Heilongjiang Suifenhe Rural Commercial Bank Co. Ltd. are the two flagged entities. Huawei Technologies, Alibaba Group Holding, Ningbo Port Group, and Foshan Nanhai Textiles are clear.

---

## Input 1 — Clean, straightforward invoice

INVOICE #INV-2026-01-1102
Supplier: Foshan Nanhai Textiles Co. Ltd.
Country of Origin: China
HS Code: 6302.60
Declared Value: EUR 8,400.00
Shipment: 500 units cotton bath towels, Foshan to Antwerp

**Expected:** Supplier: Foshan Nanhai Textiles Co. Ltd. | Country: China | HS Code: 6302.60 | Value: EUR 8,400.00 | Flag status: clear

---

## Input 2 — Exact match to a flagged entity

INVOICE #INV-2026-01-1103
Supplier: Heihe Rural Commercial Bank Co. Ltd.
Country of Origin: China
HS Code: 8471.30
Declared Value: EUR 152,000.00
Shipment: Server hardware components, Heihe to Rotterdam

**Expected:** Supplier: Heihe Rural Commercial Bank Co. Ltd. | Country: China | HS Code: 8471.30 | Value: EUR 152,000.00 | Flag status: high risk match

---

## Input 3 — Second exact match, different flagged entity

INVOICE #INV-2026-01-1104
Supplier: Heilongjiang Suifenhe Rural Commercial Bank Co. Ltd.
Country of Origin: China
HS Code: 8517.62
Declared Value: EUR 97,500.00
Shipment: Telecommunications equipment, Suifenhe to Hamburg

**Expected:** Supplier: Heilongjiang Suifenhe Rural Commercial Bank Co. Ltd. | Country: China | HS Code: 8517.62 | Value: EUR 97,500.00 | Flag status: high risk match

---

## Input 4 — Near duplicate / misspelled flagged entity (the fuzzy match edge case)

INVOICE #INV-2026-01-1105
Supplier: Heihe Commercial Bank Ltd.
Country of Origin: China
HS Code: 8471.30
Declared Value: EUR 61,200.00
Shipment: Computer peripherals, Heihe to Antwerp

**Expected:** Supplier: Heihe Commercial Bank Ltd. | Country: China | HS Code: 8471.30 | Value: EUR 61,200.00 | Flag status: needs review (close variant of a flagged entity, missing "Rural" and "Co.", genuinely ambiguous whether this is the same entity, a related branch, or unrelated)

---

## Input 5 — Very short, missing a field entirely

INVOICE #INV-2026-01-1106
Supplier: Ningbo Port Group Co. Ltd.
Country of Origin: China
Declared Value: EUR 3,200.00

**Expected:** Supplier: Ningbo Port Group Co. Ltd. | Country: China | HS Code: not found | Value: EUR 3,200.00 | Flag status: clear

---

## Input 6 — Well known clean company (false positive risk test)

INVOICE #INV-2026-01-1107
Supplier: Huawei Technologies Co. Ltd.
Country of Origin: China
HS Code: 8517.62
Declared Value: EUR 210,000.00
Shipment: Networking equipment, Shenzhen to Rotterdam

**Expected:** Supplier: Huawei Technologies Co. Ltd. | Country: China | HS Code: 8517.62 | Value: EUR 210,000.00 | Flag status: clear (well known large company, not on the reference list; tests whether the tool over flags based on name recognition alone)

---

## Input 7 — Transliteration variant, partly in Chinese (tests the multilingual weakness from Week 1)

INVOICE #INV-2026-01-1108
供应商 (Supplier): 黑河农村商业银行有限公司 (Heihe Rural Commercial Bank Co., Ltd.)
Country of Origin: China
HS Code: 8471.30
Declared Value: EUR 88,000.00
Shipment: Computer hardware, Heihe to Antwerp

**Expected:** Supplier: Heihe Rural Commercial Bank Co. Ltd. (translated) | Country: China | HS Code: 8471.30 | Value: EUR 88,000.00 | Flag status: high risk match (tests whether the tool correctly matches a Chinese-script name against an English-script reference list entry)

---

## Input 8 — Ambiguous partial match, missing a distinguishing word

INVOICE #INV-2026-01-1109
Supplier: Suifenhe Commercial Bank
Country of Origin: China
HS Code: 8517.62
Declared Value: EUR 44,000.00
Shipment: Telecom parts, Suifenhe to Hamburg

**Expected:** Supplier: Suifenhe Commercial Bank | Country: China | HS Code: 8517.62 | Value: EUR 44,000.00 | Flag status: needs review (missing "Heilongjiang" and "Rural", genuinely ambiguous whether same entity)

---

## Input 9 — Long, noisy invoice with extra distracting information

INVOICE #INV-2026-01-1110
Bill To: EuroTrade Logistics NV, Antwerp, Belgium
Freight Forwarder: Kuehne Nagel International AG
Consignee: EuroTrade Logistics NV
Supplier: Alibaba Group Holding Ltd.
Country of Origin: China
HS Code: 3926.90
Declared Value: EUR 15,750.00
Payment Terms: Net 30
Incoterms: FOB Shanghai
Shipment: Plastic packaging components, Shanghai to Antwerp via Rotterdam
Additional Notes: Please confirm receipt within 48 hours. Insurance handled separately by consignee.

**Expected:** Supplier: Alibaba Group Holding Ltd. | Country: China | HS Code: 3926.90 | Value: EUR 15,750.00 | Flag status: clear (tests whether the tool correctly picks the supplier field, not the freight forwarder or consignee, out of a noisier document)

---

## Input 10 — Different currency and value format (tests format handling, F4)

INVOICE #INV-2026-01-1111
Supplier: Foshan Nanhai Textiles Co. Ltd.
Country of Origin: China
HS Code: 6302.60
Declared Value: $9,100 USD
Shipment: Cotton bedding sets, Foshan to Rotterdam

**Expected:** Supplier: Foshan Nanhai Textiles Co. Ltd. | Country: China | HS Code: 6302.60 | Value: $9,100 USD (or converted, tool's choice should be consistent and stated) | Flag status: clear

---

## Input 11 — Country of origin differs from supplier's apparent home country

INVOICE #INV-2026-01-1112
Supplier: Heihe Rural Commercial Bank Co. Ltd. (Hong Kong Branch)
Country of Origin: Hong Kong
HS Code: 8471.30
Declared Value: EUR 73,400.00
Shipment: Computer hardware, Hong Kong to Antwerp

**Expected:** Supplier: Heihe Rural Commercial Bank Co. Ltd. (Hong Kong Branch) | Country: Hong Kong | HS Code: 8471.30 | Value: EUR 73,400.00 | Flag status: high risk match (tests whether a branch designation or different listed country of origin still correctly triggers the match on the core entity name)

---

## Input 12 — Genuinely unclear / corrupted text (the "I don't know" case)

INVOICE #[illegible]
Supplier: [text corrupted in transmission]
Country of Origin: China
HS Code: 85XX.XX
Declared Value: [amount not legible]
Shipment: Electronics, origin port unclear

**Expected:** Supplier: not found | Country: China | HS Code: not found | Value: not found | Flag status: cannot be determined (this is the case where the correct answer is genuinely "I don't know" — the tool should say so rather than guessing a plausible supplier name or value)
