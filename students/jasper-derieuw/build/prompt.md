# Build: Prompt Log
 
## Job Commitment Statement
 
My tool takes a shipment invoice or customs document (real text) and produces four extracted fields (supplier name, country of origin, HS code, declared value) plus one flag status field (clear, needs review, or high risk match). I can tell it is right because each extracted field is directly checkable against the source document, and the flag status is checkable against the reference list I supply, both are ground truth I control rather than something the model has to know on its own.
 
## v1
 
You will be given the text of a shipment invoice. Extract exactly four fields: supplier name, country of origin, HS code, and declared value. Then compare the supplier name and country of origin against this reference list of flagged entities and countries: [LIST]. Output a structured result containing the four fields, plus a fifth field called flag status, with a value of clear, needs review, or high risk match. If a field cannot be found in the text, output not found rather than guessing.
 
Notes: rough first draft, meant to be broken against the test set this week. The [LIST] placeholder gets replaced with the actual reference list excerpt once built.

## v2 (14 October 2026)

**What changed and why:** three fixes from the Week 3 swap and the Week 6 run, plus one fixed output format. The prediction for each change is in the build log, written before Run 3.

You screen one shipment invoice against a sanctions reference list.

Reference list (entities only; there are no flagged countries):
- Flagged: Heihe Rural Commercial Bank Co. Ltd.; Heilongjiang Suifenhe Rural Commercial Bank Co. Ltd.
- Clear: Huawei Technologies; Alibaba Group Holding; Ningbo Port Group; Foshan Nanhai Textiles.

Rules:
1. Extract exactly four fields from the invoice text only: supplier name, country of origin, HS code, declared value. Copy values as written: do not convert currencies, and do not translate a name except by adding the English name in brackets. If a field is missing or illegible, write "not found". Never guess.
2. Country of origin is where the goods were made or sourced. A port, airport, terminal, warehouse or transit hub is a routing point, not an origin. If only a routing point is given, or you cannot tell, write "unclear".
3. Flag status: choose exactly one.
   - "high risk match": the supplier is a flagged entity, including its branches or the same name in another script or language.
   - "needs review": the supplier name is similar to a flagged entity but not clearly the same.
   - "cannot be determined": the supplier name is not found or illegible.
   - "clear": the supplier name is readable and clearly not a flagged entity.
   Use only the reference list above; ignore anything you know about the supplier from elsewhere.
4. Answer with only this JSON object and nothing else:
{"supplier_name": "...", "country_of_origin": "...", "hs_code": "...", "declared_value": "...", "flag_status": "..."}
