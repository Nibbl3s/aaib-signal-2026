# Build: Prompt Log
 
## Job Commitment Statement
 
My tool takes a shipment invoice or customs document (real text) and produces four extracted fields (supplier name, country of origin, HS code, declared value) plus one flag status field (clear, needs review, or high risk match). I can tell it is right because each extracted field is directly checkable against the source document, and the flag status is checkable against the reference list I supply, both are ground truth I control rather than something the model has to know on its own.
 
## v1
 
You will be given the text of a shipment invoice. Extract exactly four fields: supplier name, country of origin, HS code, and declared value. Then compare the supplier name and country of origin against this reference list of flagged entities and countries: [LIST]. Output a structured result containing the four fields, plus a fifth field called flag status, with a value of clear, needs review, or high risk match. If a field cannot be found in the text, output not found rather than guessing.
 
Notes: rough first draft, meant to be broken against the test set this week. The [LIST] placeholder gets replaced with the actual reference list excerpt once built.
