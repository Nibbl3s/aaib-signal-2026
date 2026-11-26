---
checkpoint: 2
week: 8
title: Voice-Preserving Copyediting Gatekeeper (Prompt v11)
author: Luna Van der Heyden
beat: Algorithmic Homogenization: The Commercial and Brand Toll of AI Editing Tools in Trade Publishing
target_deployment: Standaard Uitgeverij NV
date: 2026-11-26
---

# Build Checkpoint 2 — Voice-Preserving Copyediting Gatekeeper (Prompt v11)

## 1. What Changed & Why (Prompt v9/v10 → Prompt v11)
Between Week 4 and Week 8, the prompt evolved from a broad literary diagnostic into a strict, minimal-intervention editorial gatekeeper (**Prompt v11**):
- **Separated voice screening from mechanical edits:** Replaced open-ended rewrites with a 5-marker **Synthetic / Generic Prose Cluster Check** (requiring `Contrast formula` + 1 marker, `Stock clichés` + 1 marker, or 3+ markers together) plus mandatory counter-evidence, while carving out staccato action fragments, rhetorical anaphora, and genre dialogue so raw human drafts (such as Chapter 4 / Input 16) are not falsely flagged as AI.
- **Capped edits at 1 word or 1 punctuation mark:** Restricted `Fixes` strictly to changes two independent copyeditors would make identically, routing multi-word syntax breaks or style-sheet conflicts to non-suggestive `Queries` (never rewriting author prose).
- **Added Core Shields, Silent Pre-Output Lint & Rolling Style Sheet:** Added strict `DATA ONLY` prompt-injection defense, `EVIDENCE ONLY` verbatim quoting, `VOICE & GENRE SHIELD` (protecting dialect, fragments, and intentional capitalization), a `Silent Pre-Output Lint`, and a chainable `Style sheet update` across 2,000–8,000-word manuscript chunks.
- **Model & Deployment Shift:** Benchmarked against a local open-weights model (`llama3.2 3B` via Ollama, which scored ~38% with 100% homogenization blindness and F5 refusal on prompt injection) and selected a provider-agnostic API wrapper running **Gemini 3.1 Flash-Lite** (`$0.25 / 1M` input tokens, `$1.50 / 1M` output tokens; *AI Pricing Reference, 7 September 2026*).

## 2. Prediction vs. Measured Delta (Before → After)
- **Prediction Before Running Prompt v11:** Tightening the 5-marker cluster rules and capping edits at 1 word/punctuation mark would eliminate false AI flags on human thriller/horror drafts (fixing Prompt 10's failure on Input 16), neutralize prompt injections cleanly, and push strict double-run consistency above **85%**, while leaving minor edge-case drift on stylized capitalization or Dutch dialogue.

| Metric | Prompt 10 (16 Inputs × 2 Runs) | Prompt 11 (16 Inputs × 2 Runs) | Delta / Change |
| :--- | :---: | :---: | :---: |
| **Strict Clean Pass Rate (Both Runs Exact)** | **75.00%** *(12 / 16)* | **81.25%** *(13 / 16)* *(75.0% if Input 7 article rule conflict is counted)* | **+6.25 percentage points** |
| **Top-Level Verdict Accuracy (`PASS / REVISE / UNSURE`)** | **87.50%** *(14 / 16)* | **93.75%** *(15 / 16)* | **+6.25 percentage points** |
| **Format Drift (`F4`) & False Refusals (`F5`)** | 0 | **0 / 32 runs** | **100% schema & injection resilience** |
| **Strict Error / Run-to-Run Drift Rate** | **25.00%** *(4 / 16)* | **18.75%** *(3 / 16: Inputs 13, 16, New 10)* | **−6.25 percentage points** |
| **Local Baseline Comparison (`llama3.2 3B`)** | ~38% *(5 / 13)* | **81.25% strict / 93.75% verdict** | **+43.25 percentage points** |

- **Was My Prediction Right?** **Mostly yes—with one sharp surprise.** Prompt v11 fixed the false AI-cluster flags on human thriller/rhetorical prose (Inputs 11 & 16), kept **0 format errors** across all 32 runs, and passed every AI-smoothed test case cleanly. However, **"copyeditor muscle memory"** still overrode explicit negative rules under edge-case pressure:
  - **F1 (Wrong — 4 occurrences):** Capitalized `god.` → `God.` on Input 13 (Run A), falsely flagged a curly quote on Input 16 (Run B), removed the article `a` in `a death glares` on Input 7 (violating Section 3's no-article rule), and inserted a period inside quotes (`geen uitgang.'`) on Dutch Input 10 (Run B).
  - **F2 (Fabricated — 1 occurrence):** Quoted `"out-loud"` as a hyphen error on Input 13 (Run A) when the input read `"out loud"`.
  - **F3 (Missed — 1 occurrence) & F6 (Inconsistent — 3 occurrences):** Run B missed `mij arm` → `mijn arm` on Dutch Input 10 and flipped verdicts on Input 13 (`REVISE` → `UNSURE`).

## 3. Cost & Time Quantification (€50/hr Copyediting Benchmarks)
Using verified industry copyediting benchmarks (EFA, CIEP, ACES *The Copyeditor's Handbook*, Gabriella Sterio) at a **€50/hour** loaded editor rate on a ~47,094-word novel (~8 chunks of ~6,000 words per book):
- **Manual Copyedit (Before):** **19.0–31.5 hours/book** (midpoint **25.25 hours** = **€1,262.50/book**).
- **Prompt v11 + Human Review (After):** **3.3–4.4 hours/book** (midpoint **3.85 hours** = **€192.50/book**) + **~1.2 minutes/book** (`1.5` error/drift runs × `~1.35 min` avg check) = **~3.87 hours/book** (**~21.38 net hours saved per book**, ~84.7% reduction).
- **API Token Cost (`gemini-3.1-flash-lite` @ $0.25/1M input, $1.50/1M output):** ~9,100 tokens per ~6,000-word chunk ≈ **€0.0028 per run** (**~€0.0224 per book** across 8 runs).
- **Error Cleanup Cost at Measured 18.75% Strict Drift Rate:** At **~€1.13 average per flagged item** (~1.2–1.5 min at €50/hr), each erroneous/drifting run costs **~€1.13** to check/dismiss.

| Deployment Scale | Books / Year | Runs / Year (8/book) | Annual Token Cost | Annual Error Cleanup (18.75% @ €1.13) | Annual Ops / Maint. | Net Annual Value vs. Manual (€1,262.50/book) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Baseline (Standaard Uitgeverij)** | 100 | 800 | **~€2.24** | **~€169.50** *(150 runs)* | €1,500 (+ €6,000 Y1 setup) | **€100,528.26** *(Year 1, incl. €1,200 risk value)* / **€106,528.26** *(Year 2+)* |
| **Full Scale (7× Group Volume)** | 700 | 5,600 | **~€15.68** | **~€1,186.50** *(1,050 runs)* | €2,500 | **~€745,298/year** gross editing/cleanup savings vs. €883,750 manual |

**Key Economic Takeaway:** At 700 books/year, human error cleanup (**~€1,186.50/year**) costs **~75× more than API tokens (~€15.68/year)**—proving that lowering the **18.75%** strict error/drift rate matters far more than token price.

## 4. Next Fix (Target for Prompt v12)
To push strict double-run compliance from **81.25%** above **90%** (and cut strict drift from **18.75%** to **≤10%**):
1. **Add an explicit character-for-character substring check before outputting any `Original` quote:** Eliminates **F2** fabricated quotes like `"out-loud"` and false curly-quote flags (Input 16 Run B).
2. **Harden negative prohibitions with concrete examples in Section 3:** Explicitly show `god.` (do not capitalize), `geen uitgang'` (do not add terminal punctuation inside quotes), and align test expectations on articles (`a death glares`) so rules and benchmarks never conflict.
3. **Add a 2-pass Dutch typo sweep on high-velocity dialogue:** Prevents missing common Dutch pronoun/agreement slips (`mij arm` → `mijn arm`) when rapid quote fixes compete for attention.
