# Skills Passport

- **Student:** Luna Van Der Heyden
- **Beat:** Algorithmic Homogenization: The Operational and Brand Costs of AI-Driven Editing in Commercial Publishing

## Checkpoint 2 (Week 8)

### My Build (Prompt v11 — Copyediting Assistant & Editorial Gatekeeper)
- **What can my tool do now?** It acts as a copyediting assistant and screener for editors that catches technical slips (typos, capitalization, grammar, quotation marks), flags clusters of generic AI-smoothed prose, logs specific author queries, and strictly protects the author's voice without rewriting it.
- **What can't it do yet?** It has not yet reached my ≤10% error-rate target (currently 18.75% strict error/drift rate across two runs), still struggles to distinguish the most polished AI writing from human prose, occasionally over-flags Dutch text, and hasn't been timed on a full manuscript yet to verify the 30-hour time savings.
- **Which number proves it?** Across 16 test inputs run twice (32 runs total), Prompt v11 scored an **81.25% strict pass rate (13/16)** and **93.75% verdict-level pass rate (15/16)** with **0 format errors** and **0 prompt-injection failures**.

---

### Eight-Skill Self-Assessment (Weeks 1–8)

| Skill | Week | Self-Assessment | Evidence |
| :--- | :---: | :---: | :--- |
| Cost literacy | 1 | 🟢 | I understand how token usage and API pricing work in practice, having calculated exact per-call costs ($0.00055/call on Flash-Lite) and mapped out a €49,358 Year-1 budget. |
| Capability skepticism | 2 | 🟢 | I understand where AI helps versus where strict rules or human judgment are needed, which is why my prompt blocks voice rewrites and escalates uncertain spans as author queries instead of guessing. |
| Vendor claim detection | 3 | 🟢 | I can break down vendor marketing into Fact, Aspiration, and Avoidance, as shown in my deconstruction of MyPoolitzer's uncheckable "sales potential" claims. |
| Value quantification | 4 | 🟡 | I understand how to calculate time saved and ROI (€26,851.98 net benefit), though I still need to run a timed test on my prompt to prove whether it actually saves 30 hours per book. |
| Market mechanism thinking | 5 | 🟡 | I understand the general concept of how AI-mediated search affects discovery (audited Pegasus Publishers at 9/18), though I still need more practice applying it independently. |
| Cost projection | 6 | 🟡 | I am getting there—I understand how costs scale from Month 1 to 3× volume and why human error cleanup dominates token cost, though I still need to refine and double-check my risk and scale recalculations. |
| Lock-in detection | 7 | 🟢 | I understand how to spot vendor traps across five dimensions and build a 90-day exit plan, having scored Storyloft (11/15) and GhentAccounting (5/15). |
| Design defense | 8 | 🔴 | I do not fully understand how to connect and defend every technical layer of a full system architecture yet, so I need more practice explaining all components under board questioning. |

---

### Reflection
Looking back at Week 1, I used to think building with AI was mainly about writing a good prompt and checking cheap token prices. Now I realize that the real challenge is proving whether the tool actually saves human time, keeping error rates low enough that cleanup doesn't erase the savings, and knowing honestly where my own technical limits still are. Instead of guessing whether my prompt works, I now test it repeatedly on fixed inputs, track exact failure codes, and focus on fixing the specific edge cases that matter most.

## Completed Competencies
- [x] Token Discovery & Cost Modeling (Week 1)
- [x] Multilingual Token Analysis (Week 1)
- [x] Repository Initialization & Student Directory Setup (Week 1)

## Checkpoint 1 · Weeks 1–4

**Beat:** Algorithmic Homogenization in Trade Publishing · 4 ECTS

| Skill | Rating | Evidence — one sentence, something you actually did |
| :--- | :--- | :--- |
| **Cost literacy** (W1) | 🟡<br>*Getting there* | My Week 1 post priced raw token volume in USD for 50 books, but I had to restructure my cost baseline in Week 4 to incorporate Belgian loaded labor rates and an error-correction buffer. |
| **Capability skepticism** (W2) | 🟡<br>*Getting there* | While my Week 2 post argued against AI style editing to prevent homogenization, my Week 4 capstone contradicts this by recommending a specialized AI tool for line-editing, revealing an unresolved tension in my thesis. |
| **Vendor claim detection** (W3) | 🟡<br>*Getting there* | I successfully deconstructed MyPoolitzer's vendor pitch in Week 3, though my final business case still relies on proposing a vendor-dependent RAG tool. |
| **Value quantification** (W4) | 🟡<br>*Getting there* | I mapped a Year 1 net benefit of €26,851.98 in my Week 4 table, but I struggled initially with whether reallocated editorial hours counted as hard cost reductions or internal capacity recovery. |

> *“In Week 1 I believed the token bill was the total cost of AI. Four posts on one beat replaced that: the expensive part isn't the API subscription, but the hidden human labor penalty of cleaning up algorithmic homogenization.”*
