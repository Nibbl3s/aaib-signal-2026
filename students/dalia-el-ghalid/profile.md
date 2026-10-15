# Build Log & Checkpoint 1 Summary

## Tool Overview & Performance
* **Tool Name:** Lecture-to-Exam Cheat Sheet Generator (v2)
* **What it does:** Transforms unstructured lecture notes into a structured 3-part exam summary.
* **Measured Success Rate:** 80% (8/10 successful extractions across double-run tests).
* **Dominant Failure Class:** F2 Fabrication (hallucinating outside definitions for unlisted terms on Input 3, Run 2).
* **Critical Failure Risk:** F2 Fabrication reaching a student unverified, causing them to study incorrect definitions for an exam.
* **Planned Fix:** Add explicit negative constraints in prompt system instructions and enforce strict markdown formatting rules.

## Deployment Probe Plan (Fablab Physical Probe)
| Category | Detail / Selection |
| --- | --- |
| **Machines** | Laser Cutter / 3D Printer (Fablab Ghent) |
| **Artifact** | Desk-standee card featuring prompt quick-reference, guardrail rules, and failure checklist |
| **Fablab Session** | Booked for Week 6 Fablab intro & fabrication session |
