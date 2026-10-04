# Build Log — Claim Risk Classifier

## Honesty note on the test set
This test set was written by me, not sourced from public real-world documents (public reviews,
forums, job ads). Per the Build Brief: "Inputs you invent are unconsciously shaped to be
answerable, so your tool will look better than it is." I'm flagging this explicitly — the
measured success rate below should be treated as an **upper bound**, not a true reflection of
real-world performance. Several claims are adapted directly from this week's Seven Failures
exercise and from my own Week 1 post (the CapEx/OpEx and financial modeling claims), which are
closer to "real" in the sense that they're drawn from an actual FT article and an actual course
case study, but the full set of 15 was authored by me for this test, not pulled from independent
public sources.

## Tool
Model used: Gemini
Prompt version tested: v1 (see prompt.md)
Each input run twice (Run 1, Run 2), to check for consistency (F6).

## Results

| # | Claim | Expected | Run 1 | Run 2 | Consistent? | Correct? | Failure Type |
|---|---|---|---|---|---|---|---|
| 1 | Smith v. OpenAI Corp. legal case | Needs verification | Needs verification | Needs verification | Yes | ✓ | — |
| 2 | Belgium Euro adoption dates | Safe to trust | Safe to trust | Safe to trust | Yes | ✓ | — |
| 3 | Company XYZ Q3 2024 revenue | Needs verification | Needs verification | Needs verification | Yes | ✓ | — |
| 4 | Williams et al. 2022 meta-analysis | Needs verification | Needs verification | Needs verification | Yes | ✓ | — |
| 5 | GPT-4 200K context window + premium | Needs verification | Needs verification | Needs verification | Yes | ✓ | — |
| 6 | EU AI Act Article 52 | Needs verification | Needs verification | Needs verification | Yes | ✓ | — |
| 7 | Water boils at 100°C | Safe to trust | Safe to trust | Safe to trust | Yes | ✓ | — |
| 8 | Internal Q2 churn rate 4.3% | Needs verification | Needs verification | Needs verification | Yes | ✓ | — |
| 9 | Chatbot reduced tickets "significant amount" | Safe to trust | Safe to trust | Safe to trust | Yes | ✓ | — |
| 10 | CapEx €15,000 server classification (Russian) | Needs verification | Safe to trust | Safe to trust | Yes | **✗** | **F1 (Wrong)** |
| 11 | "AI" (single word, no context) | I don't know / not enough context | Safe to trust | Safe to trust | Yes | **✗** | **F1 (Wrong) / edge case not handled** |
| 12 | "The meeting happened at some point last quarter" | Safe to trust | Safe to trust | Safe to trust | Yes | ✓ | — |
| 13 | ICAEW dependency mapping guidance | Needs verification | Needs verification | Needs verification | Yes | ✓ | — |
| 14 | Pays-Bas euro 1999 (French) | Safe to trust | Safe to trust | Safe to trust | Yes | ✓ | — |
| 15 | Debt balances negative Month 7 | Needs verification | Needs verification | Needs verification | Yes | ✓ | — |

## Summary

- **Total inputs:** 15
- **Total runs:** 30 (each input run twice)
- **Correct classifications:** 13/15 (86.7%)
- **Inconsistent runs (F6):** 0/15 — every claim got the same classification both times
- **Failures found:** 2, both classified as F1 (Wrong)

## Failure analysis

**Claim #10 — CapEx classification (F1):** The tool classified a specific CapEx/OpEx
classification decision as "Safe to trust," treating it as general accounting principle. But
this is exactly the failure mode documented in my Week 1 post: CapEx vs. OpEx misclassification
is a named, recurring AI financial-modeling failure (per the Corient case study referenced in
that post). The general *principle* (hardware purchases can be CapEx) is stable, but applying
it confidently to a specific €15,000 line item without context (useful life, materiality
threshold, company policy) is exactly the kind of "sounds right, might not be" claim this tool
was built to catch — and it didn't. **Hypothesis for why:** the prompt's "safe to trust" bucket
includes "general, stable conceptual knowledge," and the model appears to have matched on the
general CapEx concept rather than evaluating the specific dollar amount attached to it.

**Claim #11 — single word "AI" (F1 / edge case):** This was deliberately included as the "where
the right answer is 'I don't know'" awkward case the Build brief asks for. Prompt v1 forces a
binary choice (Needs verification / Safe to trust) with no third option, so the tool defaulted
to "Safe to trust" rather than flagging that there's nothing to classify. **This is a prompt
design flaw, not just a model failure** — v1 never gave the model permission to say "insufficient
input."

## What this means for v2
Two concrete fixes to test next:
1. Add explicit instruction: specific numbers attached to a general principle (CapEx/OpEx,
   tax treatment, etc.) should be "Needs verification" even if the underlying principle is
   stable — the number, not the concept, is the risk.
2. Add a third classification option ("Insufficient context") for inputs too short or vague to
   assess, rather than forcing a binary choice.

## Fablab probe plan (planning rows — formal submission due Week 4, CP1)
- **Machine:** Laser cutter (tentative)
- **Artifact:** A small standee/kiosk face showing the claim classifier in a simulated "analyst's
  desk" deployment context
- **Session:** Fablab intro, Monday 28 Sept (attended during Week 2 session) — follow-up booked
  visit to be scheduled during independent build hours, before Week 8 (CP2) observation is due