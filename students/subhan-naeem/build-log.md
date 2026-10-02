# Build Log — AI Market-Entry Risk Detector

## The Job

### What it does, in one sentence

The tool classifies information about a potential international market into one of five market-entry risk categories.

**Input:** A short piece of information about a potential international market.

**Output:** One risk category — Political Risk, Economic Risk, Legal/Regulatory Risk, Operational Risk, or No Major Risk — plus a one-sentence explanation.

### Who would use it, and instead of what?

Business consultants could use it as a first-pass classification tool when reviewing market-entry research, instead of manually sorting every piece of information into a risk category.

### Is the answer checkable?

Yes. I created predefined classification rules and expected answers before running the test cases, so the AI's classifications can be compared against those expected answers.

---

# The Test Set

### Where the inputs came from

I wrote the test cases myself based on realistic international market-entry situations.

**Real, or written by me?**

Written by me.

**Anonymised?**

Yes. The test cases do not contain personal information or identifiable individuals.

### Awkward cases deliberately included

- Ambiguous — a human would have to ask a follow-up
- Another language
- Very short input
- Very long input
- One where the correct answer is "I don't know"
- One near the boundary between two categories
- One with a typo or written badly

I deliberately included challenge cases involving multiple risk categories to test the limits of the single-category format.

The inputs and expected answers were defined before running the tool.

---

# Runs

## Run 1 — Prompt v1 — Week 2

**Brief:** Test whether the market-entry risk classifier can consistently assign predefined risk categories to clear market-entry information.

**Model used:** ChatGPT

**Inputs tested:** 15 standard market-entry cases, followed by 3 additional challenge cases.

| Input | Short Label | Expected | Got (Run A) | Got (Run B) | Verdict | Failure Code |
|---|---|---|---|---|---|---|
| 1 | Foreign telecom restrictions | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓ | None |
| 2 | Currency loses 25% | Economic Risk | Economic Risk | Economic Risk | ✓ | None |
| 3 | Political protests | Political Risk | Political Risk | Political Risk | ✓ | None |
| 4 | Port delays | Operational Risk | Operational Risk | Operational Risk | ✓ | None |
| 5 | Growing consumer market | No Major Risk | No Major Risk | No Major Risk | ✓ | None |
| 6 | 15% inflation | Economic Risk | Economic Risk | Economic Risk | ✓ | None |
| 7 | Foreign-company licence | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓ | None |
| 8 | Skilled-worker shortage | Operational Risk | Operational Risk | Operational Risk | ✓ | None |
| 9 | Possible sanctions | Political Risk | Political Risk | Political Risk | ✓ | None |
| 10 | Unreliable infrastructure | Operational Risk | Operational Risk | Operational Risk | ✓ | None |
| 11 | Possible corporate-tax increase | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓ | None |
| 12 | Recession and lower spending | Economic Risk | Economic Risk | Economic Risk | ✓ | None |
| 13 | Government change | Political Risk | Political Risk | Political Risk | ✓ | None |
| 14 | Large growing customer base | No Major Risk | No Major Risk | No Major Risk | ✓ | None |
| 15 | Data-transfer restrictions | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓ | None |
| C1 | Tax increase + currency decline | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓ | None |
| C2 | Unspecified new regulations | Legal/Regulatory Risk | Legal/Regulatory Risk | Legal/Regulatory Risk | ✓ | None |
| C3 | Component shortage + possible import restrictions | Operational Risk | Operational Risk | Operational Risk | ✓ | None |

### Result

**18 correct out of 18 → 100%**

### Failures by Type

| Code | Count | Notes |
|---|---:|---|
| F1 — Wrong | 0 | No wrong classifications observed |
| F2 — Fabricated | 0 | No invented facts observed |
| F3 — Missed | 0 | No clear missed required category observed |
| F4 — Format | 0 | Output followed the requested format |
| F5 — Refused | 0 | No refusals |
| F6 — Inconsistent | 0 | Repeated runs produced the same category |

---

## What Surprised Me

The tool was more consistent than I expected. Even when the inputs contained uncertainty or more than one possible risk category, it generally selected one category and explained its choice without inventing additional facts.

### The failure that would have mattered most in real use, and why

A wrong classification would matter most because consultants could overlook an important type of market-entry risk and potentially use an incomplete assessment when advising a client.

---

# Challenge-Case Observation

The challenge cases revealed a limitation even though they did not produce an F1–F6 failure.

When one input contains multiple risk categories, the prompt forces the AI to select exactly one.

For example, **C1** contained both a tax increase (**Legal/Regulatory Risk**) and a currency decline (**Economic Risk**). The AI selected Legal/Regulatory Risk but acknowledged the Economic Risk in its reasoning.

This means consistency does not necessarily mean that the tool fully represents the complexity of the information.

---

# Changes

## Change 1 — Week 2

### What I changed

Nothing during the main testing phase.

### Why I thought it would help

I wanted to test the original prompt before changing it, so that I could identify actual weaknesses rather than improving the prompt before measuring its initial performance.

### What I predicted would happen

I expected the tool to perform well on clear cases but potentially struggle with ambiguous cases involving more than one risk category.

### What actually happened

The tool achieved **100% on the 18 tested cases** and remained consistent across repeated runs.

The main limitation appeared in the design of the single-category output rather than in an incorrect answer.

### Was I right?

Partly.

I expected ambiguity to create classification problems, but the tool handled the tested cases consistently. However, the challenge cases showed that the single-category design cannot fully represent multiple simultaneous risks.

---

# AI or No AI? — Week 2

## Business Problem

A consulting firm needs to assess risks before entering a new international market.

### Do you already know the answer?

**No.**

The consulting team does not already know all of the relevant market-entry risks. They need to research information about the market before making a recommendation.

### Is the cost of being wrong greater than the cost of being slow?

**Yes.**

Missing an important market-entry risk could lead to a costly recommendation for the client. Spending additional time checking the information is preferable to relying on an incorrect or incomplete assessment.

### Is the information stable or constantly changing?

The information is **constantly changing**.

Political conditions, regulations, exchange rates, inflation and other market conditions can change over time. This means research may need to be updated regularly.

### Can you verify the AI's answer?

**Yes.**

The AI's classification can be checked against reliable external sources such as:

- Government websites
- Regulatory documents
- Economic data
- Market research

This makes it possible for a consultant to verify whether the identified risk is supported by evidence.

### Is there a simpler tool that could do the job?

**Yes, for some parts of the task.**

A spreadsheet or rules-based system could classify clearly defined risks using predetermined criteria.

AI becomes more useful when the information is unstructured or requires interpretation. Therefore, AI is not automatically necessary for every part of the market-entry risk assessment.

---

# Show & Critique — Other Pair's Tool

**Tool tested:** Employee AI Adoption Sentiment Classifier

## Testing Approach

I tested the other pair's prompt using several inputs containing multiple possible categories and repeated one ambiguous input twice to test consistency.

## Result

The tool consistently selected one category and provided a relevant explanation. I did not identify a clear F1–F6 failure during my tests.

## Observation

The prompt handles overlapping concerns by instructing the AI to select the strongest concern.

This makes the output consistent, although deciding which concern is "strongest" can involve subjective interpretation.

## Overall Critique

The tool performed consistently on the cases I tested, but its single-category design means that some employee comments containing multiple equally important concerns may not be fully represented.

---

# Deployment Probe — Week 2

### After the Intro Session


