# Week 2 — Evidence

## 1. Modality Sorting — Full Results

For reference, all 10 problems sorted first (AI-Suitable / AI-Risky / AI-Incompatible), before
picking the three borderline cases below:

1. Customer Support Email Response → AI-Suitable
2. Medical Diagnosis → AI-Incompatible
3. Meeting Notes Summarization → AI-Suitable
4. Fraud Detection in Bank Transactions → AI-Risky (borderline)
5. Hiring Candidate Screening → AI-Risky (borderline)
6. Inventory Forecasting → AI-Risky (borderline)
7. Legal Contract Review → AI-Risky
8. Writing Product Launch Announcement → AI-Suitable
9. Regulatory Compliance Check → AI-Incompatible
10. Sales Follow-Up Email → AI-Suitable

## 2. Three Borderline Modality Cases — Reasoning

**Fraud Detection in Bank Transactions (AI-Risky, bordering AI-Incompatible)**
This is borderline because the classification depends entirely on deployment design, not on
the task itself. AI flagging a transaction for human review is reasonable; AI auto-approving or
auto-blocking within the 0.5-second window, with no human in the loop, pushes it toward
Incompatible. The 0.5-second constraint is what makes this borderline: it rules out the safety
net (human-in-the-loop) that makes every other AI-Risky case on this list acceptable.

**Hiring Candidate Screening (AI-Risky, could be AI-Incompatible)**
Borderline because the stakes, a candidate's career and real legal liability for discriminatory
bias, are arguably high enough to qualify as Incompatible, the same bar Medical Diagnosis and
Regulatory Compliance clear. What keeps it in Risky instead is that, unlike medical diagnosis,
there's a genuinely workable middle ground: AI for CV parsing and keyword extraction only, never
for final ranking, with mandatory human review of both the top and bottom of the ranked list to
catch bias in both directions. The existence of that middle ground is what separates it from
Incompatible.

**Inventory Forecasting (AI-Suitable, but arguably AI-Risky)**
Borderline for a different reason than the first two: the data here is stable and verifiable
(you can check a forecast against actual sales after the fact), which argues for Suitable. But
an LLM specifically, as opposed to a dedicated statistical or ML forecasting model, is probably
the wrong tool even though "AI" in general is fine. This is a case where the task is suitable
for AI broadly, but not for the type of AI (a language model generating plausible text) this
course is mostly examining. The borderline isn't about risk, it's about which kind of AI the
word "AI" is even pointing at.

## 3. Five-Question Framework Walkthrough

**Use case (from my beat):** Should a company let AI build a complete financial model from
scratch, with no financial analyst in the loop, start to finish?

**Q1 — Do you know the answer already?**
No. That's the entire reason to use AI here: the company doesn't have the model yet and wants
one built.

**Q2 — Is the cost of being wrong higher than the cost of being slow?**
Yes, clearly. A broken model doesn't just cost time to fix, it costs real money. A documented
case from my Week 1 research found a rebuild of a broken AI-generated financial model running
€1,200-€3,600, for a model that cost about €25 in subscription fees to generate in the first
place. If the broken model gets used for a real decision before anyone catches the error, the
cost is worse: a separate case researched by the Financial Times found an AI pension-tax error
that risked a saver a £17,500 charge from HMRC. The downside dwarfs the time saved.

**Q3 — Is the information stable or changing rapidly?**
Mixed, and this is where it gets genuinely interesting rather than a clean yes/no. The
underlying accounting logic (double-entry bookkeeping, how a balance sheet has to balance) is
stable. But the specific rules that actually trip AI up in practice, CapEx vs. OpEx
classification, tax treatment, intercompany eliminations, change by jurisdiction and by year.
The AI sounds equally confident either way; it just isn't reliably right on the part that
changes.

**Q4 — Can you verify the AI's answer?**
Only if someone already knows what a correct model looks like, which means a financial analyst
still has to check every formula, every classification, every balance by hand. At that point,
the time supposedly saved by using AI gets handed straight back to the human doing the audit.

**Q5 — What's the simplest tool that solves this?**
A model template built once by a human with the structural logic already correct (cover page,
assumptions, scenario pages, internal checks), filled in by AI where it's genuinely just data
entry, and checked by the analyst specifically at the known failure points (CapEx/OpEx calls,
intercompany balances, formula consistency across periods), rather than a from-scratch AI build
with no review at any stage.

**Verdict:** AI-Risky, bordering on AI-Incompatible, for full autonomous model generation. Not
because AI can't produce something that looks like a financial model, it clearly can, and fast.
The blocking problem is Q4: verifying the model requires exactly the expertise the AI was
supposed to replace. You can't outsource the audit to the thing being audited. The simpler
solution isn't really simpler, it's moving the expensive part (human judgment) earlier, into
the template design, instead of later, into discovering the model is wrong after a partner has
already acted on it.

## 4. Build v1

### 4.1 The Job
My tool takes one factual claim extracted from an AI-generated business report or response, and
produces a classification: "Needs verification" or "Safe to trust". I can tell it is right
because each claim type (private company data, cited source or citation, technical spec,
historical or stable fact) has a known risk pattern from this week's Seven Failures exercise,
so the tool's classification can be checked against that pattern and against whether the claim
is independently verifiable.

Stress-test question: "How would I know if it got that wrong?" Answer: if the tool says "Safe
to trust" for a claim that turns out to be fabricated, or "Needs verification" for something
genuinely stable and low-risk, that's a clear, checkable miss, not a matter of taste.

### 4.2 Prompt v1
Full prompt is in `build/prompt.md`. Summary: classifies a single claim as "Needs verification"
or "Safe to trust", with explicit guidance on which claim types (cited sources, private company
data, technical specs, regulatory citations) typically need verification, and which (stable
historical facts, vague/unquantified statements) are typically safe.

### 4.3 Test Set
15 claims (full list in `build/test-set.md`), expected answers written before any run, including
deliberately awkward cases: a single ambiguous word ("AI", claim #11, expected "I don't know"),
a foreign-language input (French, claim #14), a deliberately vague claim with no specific number
(claim #9), and claims drawn directly from this week's Seven Failures plus claims extending my
own Week 1 beat research (CapEx/OpEx, claim #10; ICAEW guidance, claim #13; financial model
debt-balance behavior, claim #15).

**Honesty note:** this test set was authored by me rather than sourced from independent public
documents. Per the Build brief, I'm treating the measured success rate below as an upper bound,
not a reliable real-world figure, and flagging that explicitly rather than presenting it as
more rigorous than it is.

### 4.4 Results (full log in `build/log.md`)
- **Total inputs:** 15, each run twice through Gemini (30 runs total)
- **Correct classifications:** 13/15 (86.7%)
- **Inconsistent runs (F6):** 0 — every claim got the same classification on both runs
- **Failures found:** 2, both F1 (Wrong)

**Failure 1 (claim #10, CapEx classification):** The tool classified a specific €15,000 CapEx
decision as "Safe to trust," apparently matching on the general accounting *principle* (hardware
purchases can be CapEx) rather than evaluating the specific dollar amount and context attached
to it. This is exactly the CapEx/OpEx failure mode documented in my Week 1 research as a known,
recurring AI financial-modeling error, and my own tool reproduced it.

**Failure 2 (claim #11, single-word input "AI"):** This was deliberately included as the "right
answer is 'I don't know'" awkward case the Build brief asks for. The tool defaulted to "Safe to
trust" rather than flagging insufficient context. On inspection this is a prompt design flaw,
not just a model failure: prompt v1 only offers a binary choice and never gives the model
permission to say "not enough information to classify."

### 4.5 What this means for v2
Two concrete changes to test next: (1) instruct the model explicitly that a specific number
attached to a general principle should be "Needs verification" even when the underlying
principle is stable, since the number carries the risk, not the concept; (2) add a third
classification option, "Insufficient context," so vague or too-short inputs aren't forced into
a binary choice they don't fit.

### 4.6 Fablab Probe Plan (planning rows)
- **Machine:** 3D printer
- **Artifact:** A small 3D-printed desk stand that holds a phone or tablet at an analyst's desk.
  The stand itself is just a physical holder — the claim classifier keeps running as a chat tool
  (prompt.md) on the device it holds. The point of the stand is to simulate the tool being kept
  visibly open and within reach during real report-checking work, instead of living in an
  unused browser tab.
- **Session:** Fablab intro attended Monday 28 September (Week 2 session); a follow-up booked
  visit to the fablab's 3D printing sessions to be scheduled during independent build hours,
  with the deployment observation logged before Week 8 (CP2)