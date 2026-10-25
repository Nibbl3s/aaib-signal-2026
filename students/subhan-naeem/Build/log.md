# Build Log — AI Market-Entry Risk Detector

## The job

**What it does, in one sentence:**

The AI Market-Entry Risk Detector classifies information about a potential international market into one of five market-entry risk categories.

**Input:** A short piece of information about a potential international market.

**Output:** One risk category — Political Risk, Economic Risk, Legal/Regulatory Risk, Operational Risk, or No Major Risk — plus a one-sentence explanation.

**Who would use it, and instead of what?**

Business consultants could use it as a first-pass classification tool when reviewing market-entry research, instead of manually sorting every piece of information into a risk category.

**Is the answer checkable? Could two people independently agree whether a given output is right?**

Yes. The prompt defines five categories, and expected categories were established for the test cases before testing. The AI's classifications can be compared against these expected answers. However, some inputs contain multiple risks, so selecting a single category can involve judgement.

---

## The test set

**Where the inputs came from:**

I created realistic international market-entry scenarios with the help of AI.

**Real, or written by me?**

Written specifically for the experiment, with AI assistance. These are simulated scenarios rather than inputs collected directly from public sources.

**Anonymised?**

Yes. The scenarios contain no personal information or identifiable individuals.

**Awkward cases deliberately included — tick what you covered:**

- [ ] Ambiguous — a human would have to ask a follow-up
- [ ] Another language
- [ ] Very short input
- [ ] Very long input
- [ ] One where the correct answer is "I don't know"
- [x] One near the boundary between two categories — the challenge cases contain overlapping risks
- [ ] One with a typo, or written badly

The challenge cases test overlapping risk categories, incomplete regulatory information, and competing operational and regulatory signals.

The test set contains 15 standard cases and 3 additional challenge cases. Expected categories were established before testing. The inputs and expected categories are documented in `test-set.md`.

---

## Runs

### Run 1 — prompt v1 — Week 2

**Brief:** Test whether the original market-entry risk classifier consistently assigns predefined risk categories to clear market-entry information and whether it handles challenge cases involving overlapping risks.

**Model used:** ChatGPT

**Inputs tested:** 15 standard cases and 3 additional challenge cases, with each case run twice.

| #  | Input (short label)                               | Expected              | Got (run A)           | Got (run B)           | Verdict | Failure code |
| -- | ------------------------------------------------- | --------------------- | --------------------- | --------------------- | ------- | ------------ |
| 1  | Foreign telecom restrictions                      | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓       | None         |
| 2  | Currency loses 25%                                | Economic Risk         | Economic Risk         | Economic Risk         | ✓       | None         |
| 3  | Political protests                                | Political Risk        | Political Risk        | Political Risk        | ✓       | None         |
| 4  | Port delays                                       | Operational Risk      | Operational Risk      | Operational Risk      | ✓       | None         |
| 5  | Growing consumer market                           | No Major Risk         | No Major Risk         | No Major Risk         | ✓       | None         |
| 6  | 15% inflation                                     | Economic Risk         | Economic Risk         | Economic Risk         | ✓       | None         |
| 7  | Foreign-company licence                           | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓       | None         |
| 8  | Skilled-worker shortage                           | Operational Risk      | Operational Risk      | Operational Risk      | ✓       | None         |
| 9  | Possible sanctions                                | Political Risk        | Political Risk        | Political Risk        | ✓       | None         |
| 10 | Unreliable infrastructure                         | Operational Risk      | Operational Risk      | Operational Risk      | ✓       | None         |
| 11 | Possible corporate-tax increase                   | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓       | None         |
| 12 | Recession and lower spending                      | Economic Risk         | Economic Risk         | Economic Risk         | ✓       | None         |
| 13 | Government change                                 | Political Risk        | Political Risk        | Political Risk        | ✓       | None         |
| 14 | Large growing customer base                       | No Major Risk         | No Major Risk         | No Major Risk         | ✓       | None         |
| 15 | Data-transfer restrictions                        | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓       | None         |
| C1 | Tax increase + currency decline                   | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓       | None         |
| C2 | Unspecified new regulations                       | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓       | None         |
| C3 | Component shortage + possible import restrictions | Operational Risk      | Operational Risk      | Operational Risk      | ✓       | None         |

**Result:** 18 correct out of 18 cases → 100% on the recorded case-level results.

**Failures by type:**

| Code            | Count | Notes                                    |
| --------------- | ----: | ---------------------------------------- |
| F1 Wrong        |     0 | No wrong classifications recorded        |
| F2 Fabricated   |     0 | No invented facts recorded               |
| F3 Missed       |     0 | No missed required category recorded     |
| F4 Format       |     0 | Output followed the requested format     |
| F5 Refused      |     0 | No refusals recorded                     |
| F6 Inconsistent |     0 | Repeated runs returned the same category |

**What surprised me:**

The tool was more consistent than I expected. It classified the tested cases correctly on both runs, including the challenge cases involving uncertainty or overlapping risks. However, consistent classification did not mean that every aspect of the risk was represented in the single-category output.

**The failure that would have mattered most in real use, and why:**

A wrong or incomplete classification could cause a consultant to overlook an important market-entry risk and make an insufficiently informed recommendation to a client. The tool should therefore be used as a first-pass sorter, not as a replacement for research and professional judgement.

**Challenge-case observation:**

C1 included both a 20% tax increase, representing Legal/Regulatory Risk, and a sharp currency decline, representing Economic Risk. The expected primary category was Legal/Regulatory Risk. This illustrates the limitation of requiring the tool to select only one category when an input contains multiple risks.

The results demonstrate consistency on this test set, not guaranteed accuracy on real-world market information.

---

## Changes

### Change 1 — Week 2

**What I changed:**

Nothing during the main testing phase. I tested the original Prompt v1 before making changes.

**Why I thought it would help:**

Testing the original prompt first allowed me to establish baseline performance and identify limitations before modifying the instructions.

**What I predicted would happen:**

I expected the tool to perform well on clear cases but potentially struggle with ambiguous inputs involving more than one risk category.

**What actually happened:**

The recorded results showed 18 correct classifications out of 18 cases, with each case run twice. The main limitation observed was the single-category output, which cannot fully represent multiple simultaneous risks.

**Was I right?**

Partly. The tool handled the tested cases consistently, but the challenge cases demonstrated that the output design can simplify situations involving multiple risks. No prompt change was made during this testing phase.

---

## Deployment probe — from Week 2

**After the intro session:**

|                                                                       |                                                                                                             |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Machine(s) I expect to use, and why                                   | Not decided yet; I need to consider the available machines and their suitability for the intended artifact. |
| The artifact I'm aiming for                                           | Not decided yet; this depends on the available Fablab facilities and what can be produced.                  |
| Which weekly session or OPEN block I'll visit for file-prep, and when | Not decided yet; I will confirm the relevant session or OPEN block.                                         |

**When the artifact exists — the deployment observation:**

**What I deployed:** Not yet decided or completed.

**What the physical context showed that the chat window could not:** To be completed after the artifact is produced and tested in its intended physical context.

**What it cost (time, materials, revisions):** To be recorded after the deployment probe.

**Feeds which failure class or memo section:** To be completed after observing the deployment.

---

## Checkpoint summaries

Complete these at the relevant checkpoints.

### Checkpoint 1 — Week 4

**What it does:** First-pass classification of market-entry information into one of five risk categories.

**Measured:** 100% on 18 recorded test cases; each case was run twice.

**Dominant failure type:** No F1–F6 failures recorded in the current test set and oversimplification of information containing multiple risks because the tool must select one primary category.

**The failure that would matter most:** An incorrect or incomplete classification that causes a consultant to overlook a significant risk.

**What I'd change first:** Consider how the tool could flag inputs containing multiple risks instead of representing them with only one category and test a revised prompt that identifies all relevant risk categories, then compare its classifications against predefined expected answer
