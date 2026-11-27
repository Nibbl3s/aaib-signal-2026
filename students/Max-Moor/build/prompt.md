# Prompt history — Quote intake extraction (O&D Impression 3D)

**Job (one sentence):** Read a free-text customer request and extract the quote fields (process, material, quantity, largest dimension, deadline), list what is still missing, and flag requests that are out of scope.

**Why this job is testable:** the output is a bounded JSON record. Two people reading the same message and the same output would agree on whether each field is right.

**Out of scope for the tool, by design:** computing a price. That step is a spreadsheet formula (see Signal post, Week 2).

---

## v1 — 2026-10-05 (revised before the first run)

**What changed and why:** first version. Before any run, I adjusted it after reading the 13 real customer messages: customers rarely name a process or a deadline, so those two fields are optional and never flagged as missing; and a request with a 3D file attached does not need its dimensions flagged.

```
You are an intake assistant for O&D Impression 3D, a digital manufacturing
company offering FDM, resin, SLS, CNC and laser cutting.

Read the customer message and extract the fields below.
Reply with a single JSON object and nothing else.

Fields:
- process_requested: one of "FDM", "resin", "SLS", "CNC", "laser",
  or null if the customer did not name a process
- material: as written by the customer, or null
- quantity: total number of pieces as an integer, or null
- largest_dimension_mm: largest overall dimension of the finished part
  in millimetres (convert cm and inches), or null
- deadline: a date the customer needs the parts by, as written, or null.
  A question about delivery time is not a deadline.
- missing_info: list drawn from ["material", "quantity", "dimensions", "file"]
- out_of_scope: true if the request is not something the company offers,
  otherwise false

Rules:
1. Never guess. If a value is not stated, use null.
2. Add "material" to missing_info if material is null, and "quantity" if
   quantity is null.
3. Add "file" to missing_info unless the message says a 3D file, technical
   drawing or model is attached or provided. A reference photo or a logo
   image is not a 3D file.
4. Add "dimensions" to missing_info only if largest_dimension_mm is null AND
   no 3D file is attached.
5. If the customer gives contradictory values for a field, use null and
   add the field to missing_info.
6. process_requested and deadline are optional: never list them in
   missing_info.
7. Never give a price, a price range or a recommendation.
8. Messages may be in French, Dutch, German or English.
   Keep the JSON keys in English.
```

**Known limitations of v1 (written before testing):**
- Tolerances, colour, finishing, shipping and design services are not in the schema, so they are ignored on purpose.
- Only the largest dimension is extracted.
- "Out of scope" depends on the model guessing what O&D offers from one line of description.

---

## v2 — (not yet written)

**What changed and why:**

AI use: Claude helped me draft and structure this file; the inputs, the runs and the figures are mine.
