---
week: 2
title: "Evidence - Capability Skepticism (Borderline Modality Cases, No-AI Decision Framework)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Capability skepticism"
date: 2026-09-23
---

# Week 2 Evidence

This file holds the workings behind [week-02.md](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/posts/week-02.md): the reasoning for the three borderline modality cases, and the five question decision framework applied to my own Build. It is the same content submitted on Canvas for Week 2, added to the repository on 11 October 2026 so the evidence sits next to the post.

The Build v1 evidence (prompt, test set, run log, probe plan) is in [build/](https://github.com/Nibbl3s/aaib-signal-2026/tree/main/students/jasper-derieuw/build), and the 6 ECTS extension is in [someone-elses-test-set.md](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/someone-elses-test-set.md).

---

## 1. Borderline Modality Cases, Reasoning

Ten business problems were sorted into AI-Suitable, AI-Risky, or AI-Incompatible. The three genuinely borderline cases, with full reasoning, follow. The remaining seven were tagged with shorter, less contested reasoning.

**Problem 4, Real-Time Fraud Detection (0.5s response required)**

AI-Incompatible for LLMs specifically, AI-Suitable for classical ML. LLM latency, cost, and non-determinism do not fit a hard 0.5 second, high volume decision loop. This is a job for classical ML, gradient boosting, anomaly detection, built for exactly this constraint. The modality question here is not whether "AI" can do this, but which kind of AI: a language model and a classical predictive model are different tools with different failure modes, and conflating them is the single most common category error in vendor conversations.

**Problem 2, Medical Diagnosis (doctor vs. self-treat recommendation)**

AI-Incompatible as an autonomous decision system; AI-Risky at best as a human supervised triage aid. The course's own pattern summary buckets medical and safety decisions under Incompatible outright. Errors can cause serious harm, and "I don't know" is not an acceptable non-answer here, but AI lacks reliable grounding to always know when it has crossed into that territory. As a fully autonomous system this is Incompatible. It only moves into Risky territory once a human clinician reviews every output before it reaches a patient, at which point it is no longer really an AI decision, it is an AI assisted one.

**Problem 9, Regulatory Compliance Check (EU AI Act classification, must be auditable)**

AI-Incompatible as the decision maker; AI-Risky only as a drafting aid with mandatory human sign-off. This is the same failure shape as the Week 2 Frame's Case 7, a live regulatory citation question, exactly the pattern that produced a fabricated article number, an invented safe harbor, and a fake fairness score with total confidence. "Must be auditable for regulators" is the disqualifying phrase: an auditor needs to trust that the stated reasoning actually drove the answer, and classifications are not consistent run to run, a finding my own Build log later confirmed directly (58.3% inconsistency rate). AI can usefully draft a first pass classification for a lawyer to check, but the decision of record has to be owned by a qualified human.

---

## 2. Five Question Decision Framework, Applied to My Build

Sanctions screening tool, tested against my own measured data rather than a hypothetical.

**Q1, Do you know the answer already?**
No. Whether a given supplier name matches a sanctioned or denied party entity is not something a compliance officer can reliably know from memory across hundreds of counterparties and constantly updated lists. Go to Q2.

**Q2, Is the cost of being wrong higher than the cost of being slow?**
Yes. A missed sanctions match risks a fine, legal exposure, and potentially a criminal referral, modelled at roughly €250,000 per miss in my Week 1 post. A false positive costs roughly €12.50 in analyst time. The two errors are wildly asymmetric, and the expensive one is exactly the error a confidently wrong AI tool produces silently. Per the framework, this is where it stops: don't use AI, use a human or a rule.

**Q3, Is the information stable or changing rapidly?**
Changing rapidly. Sanctions lists are updated frequently, the EU issued an 18th, 19th, and 21st Russia sanctions package within roughly a year, and a model's training data will always lag the current list. This independently confirms the Q2 stop.

**Q4, Can you verify the AI's answer?**
Partially, and only because the tool was engineered that way. My Build supplies a fixed reference list directly in the prompt, turning this into text matching rather than knowledge retrieval, a real mitigation. But my own measured data shows a 58.3% inconsistency rate across identical runs, and one case where the tool fabricated a supplier name entirely rather than saying "not found."

**Q5, What's the simplest tool that solves this?**
A rule based exact or fuzzy match lookup would outperform my AI tool on this specific job: deterministic, 100% consistent by construction, auditable, and far cheaper at scale. The one place AI plausibly adds value is cross-script transliteration matching, where my own data was mixed, correct once, wrong once.

**Decision.** Following the framework strictly: don't use an LLM alone for this job. Use a deterministic matching system as the primary engine, with an LLM layered on only for cross-script matching, and only ever as a flag for human review, never an autonomous "clear" verdict.

---

*AI disclosure: Claude converted this section from my Week 2 Canvas submission (PDF) to Markdown on 11 October 2026. The content is unchanged.*
