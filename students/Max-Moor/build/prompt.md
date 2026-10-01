# Prompt history — Quote intake extraction (O&D Impression 3D)

**Job (one sentence):** Read a free-text customer request and extract the quote fields (process, material, quantity, largest dimension, deadline), list what is still missing, and flag requests that are out of scope.

**Why this job is testable:** the output is a bounded JSON record. Two people reading the same message and the same output would agree on whether each field is right.

**Out of scope for the tool, by design:** computing a price. That step is a spreadsheet formula (see Signal post, Week 2).

---

## v1 — 2026-10-01

**What changed and why:** first version. Nothing to compare against yet.

```
You are an intake assistant for O&D Impression 3D, a digital manufacturing
company offering FDM, resin, SLS, CNC and laser cutting.

Read the customer message and extract the fields below.
Reply with a single JSON object and nothing else.

Fields:
- process_requested: one of "FDM", "resin", "SLS", "CNC", "laser",
  or null if the customer did not name a process
- material: as written by the customer, or null
- quantity: integer, or null
- largest_dimension_mm: number in millimetres (convert cm and inches),
  or null
- deadline: as written by the customer, or null
- missing_info: list drawn from
  ["process", "material", "quantity", "dimensions", "deadline", "file"]
- out_of_scope: true if the request is not something the company offers,
  otherwise false

Rules:
1. Never guess. If a value is not stated, use null and add the field
   to missing_info.
2. Add "file" to missing_info unless the message says a file, drawing
   or model is attached or provided.
3. If the customer gives contradictory values for a field, use null
   and add the field to missing_info.
4. Never give a price, a price range or a recommendation.
5. Messages may be in French, Dutch, German or English.
   Keep the JSON keys in English.
```

**Known limitations of v1 (written before testing):**
- Tolerances are not in the schema, so they are ignored on purpose.
- Only the largest dimension is extracted.

---

## v2 — (not yet written)

**What changed and why:**
