# Build Log — Claim Risk Classifier

## Honesty note on the test set
This test set was written by me, not sourced from public real-world documents (public reviews,
forums, job ads). Per the Build Brief: "Inputs you invent are unconsciously shaped to be
answerable, so your tool will look better than it is." I'm flagging this explicitly — the
measured success rate below should be treated as an **upper bound**, not a true reflection of
real-world performance. Several claims are adapted from the course's Week 2 Seven Failures
exercise, and the financial-modeling claims (#10, #13, #15) reflect failure patterns central to
my beat, but none of the 15 were pulled from independent public sources.

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
classification decision as "Safe to trust," treating it as a general accounting principle. But
CapEx vs. OpEx misclassification is a known, recurring AI financial-modeling failure pattern
central to my beat. The general *principle* (hardware purchases can be CapEx) is stable, but applying it confidently to a specific €15,000 line item without context (useful life, materiality threshold, company policy) is exactly the kind of "sounds right, might not be" claim this tool was built to catch — and it didn't. **Hypothesis for why:** the prompt's "safe to trust" bucket includes "general, stable conceptual knowledge," and the model appears to have matched on the general CapEx concept rather than evaluating the specific euro amount attached to it.

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

## Checkpoint 1 — Week 4

**What it does:** Classifies a single factual claim from an AI-generated business report as
"Needs verification" or "Safe to trust," based on claim type (private company data, cited
sources, technical specs, regulatory citations vs. stable historical facts).

**Measured:** 86.7% (13/15) on an invented test set — self-authored, so treated as an upper
bound per the honesty note above, not a reliable real-world figure.

**Dominant failure type:** F1 (Wrong) — both failures found were this type; 0 F6
(inconsistency) across 30 runs.

**The failure that would matter most:** Claim #10 (CapEx €15,000 classification marked "Safe to
trust" when it needed verification) — this is the highest-stakes miss because it's exactly the
kind of confident, specific financial claim that would reach a real decision-maker unchecked, and it reproduces a known AI financial-modeling failure pattern central to my beat.

**What I'd change first:** Add explicit instruction that a specific number attached to a
general accounting principle (CapEx/OpEx, tax treatment) should default to "Needs verification"
even when the underlying principle is stable — the number carries the risk, not the concept.

## Fablab probe plan (planning rows — formal submission due Week 4, CP1)
- **Machine:** 3D printer
- **Artifact:** A small 3D-printed desk stand that holds a phone or tablet at an analyst's desk.
  The stand itself is just a physical holder — the claim classifier keeps running as a chat tool
  (prompt.md) on the device it holds. The point is to simulate the tool being kept visibly open
  and within reach during real report-checking work, instead of living in an unused browser tab.
- **Session:** Fablab intro attended Monday 28 September (Week 2 session); a follow-up booked
  visit to the fablab's 3D printing sessions to be scheduled during independent build hours,
  with the deployment observation logged before Week 8 (CP2)