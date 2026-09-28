# Build — Prompt History

## v1 — 2026-09-28

**Job:** Flag inconsistencies between two financial statements from different years (same company).

**Input:** two financial statements (e.g. income statement, balance sheet extracts) for the same company, one from year N and one from year N+1.

**Output:** a list of flagged inconsistencies, each naming the specific line items and values involved.

**Prompt:**

---
You are reviewing two financial statements from the same company, from different years, for inconsistencies.

STATEMENT YEAR N:
{{statement_year_n}}

STATEMENT YEAR N+1:
{{statement_year_n_plus_1}}

Compare the two statements and flag inconsistencies. An inconsistency is any of the following:
- The same line item (e.g. total revenue, total assets) reported with different values in places where it should match (e.g. a prior-year comparative column in the newer statement doesn't match the actual prior-year statement).
- A figure that doesn't foot correctly (e.g. subtotals or totals that don't sum from their components) within either statement.
- A material year-over-year change (more than 25%) in a line item with no explanation present in either statement.
- A line item present in one year's statement but missing, without explanation, in the other.

Respond in exactly this format, one entry per inconsistency found:
Flag: [line item name]
Values: [year N value] vs [year N+1 value]
Type: [restated figure / footing error / unexplained swing / missing item]
Note: [one sentence on why this is flagged]

If no inconsistencies are found, respond: "No inconsistencies found."
Do not flag a normal, explained change (e.g. one with a footnote or note in the statement) as an inconsistency. Do not invent figures that are not present in either statement.
---

**Why this version:** v1 uses four concrete inconsistency types instead of a vague "check for issues", so two people reading the same output can agree whether a flag is correct. The 25%-threshold rule is a placeholder — arbitrary but explicit, so it's testable and adjustable once I see real results. The last line is a direct guardrail against F2 (fabrication), since inventing a mismatched number would be the most dangerous failure here.

**Known risks going in:** likely to struggle on (1) statements using different line-item naming/structure between years, (2) restatements that are legitimate and explained but easy to mistake for errors, (3) currency or unit changes (e.g. thousands vs millions) that look like huge swings but aren't.
