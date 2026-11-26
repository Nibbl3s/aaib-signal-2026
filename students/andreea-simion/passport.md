# Skills Passport — Andreea Simion

**Beat:** The Psychology of AI Adoption in the Workplace  
**Course:** Advanced AI In Business (AAIB 2026)  

---

## Skills Passport: Checkpoint 1 (Re-rated at Week 8)

### Build Progress Diagnostic
- **What can your tool do now?** The tool automatically ingests unstructured employee feedback text (in English, French, or Dutch) and classifies it into one of six core psychological barrier categories (e.g., Job Security Fear, Change Fatigue).
- **What can't it do yet?** It struggles to distinguish primary intent on borderline, mixed-sentiment inputs (where positive usage and fear co-exist) and hallucinates specific technical interface complaints on ultra-short inputs.
- **Which number proves it?** Measured a 70% pass rate across 10 dual-run test inputs (20 executions total), with 3 instances tagged as F6 (Inconsistent) and 1 instance tagged as F2 (Fabricated).

### Skill Self-Assessments (Recalibrated)
1. **Cost Literacy (Week 1)**
   - **Rating:** 🟢 Confident
   - **Evidence:** Built the EuroShop token and error cost model, demonstrating that Budget tier ($300/mo token cost) was actually the most expensive option (€45,300 total) due to human error costs, and calculated the $210/mo model usage cost for an employee adoption coach across 5,000 employees.
2. **Capability Skepticism (Week 2)**
   - **Rating:** 🟢 Confident
   - **Evidence:** Deconstructed sentiment classification failures across a 10-input test matrix, identifying 30% failure rates (F1 wrong, F2 fabricated, F6 inconsistent) and demonstrating why pure AI without human review is unsafe for HR decision-making.
3. **Vendor Claim Detection (Week 3)**
   - **Rating:** 🟢 Confident
   - **Evidence:** Deconstructed the NexusAI proposal (tagging 16 claims across Aspiration, Avoidance, and Fact) and created a 5-claim deconstruction table for PsychoPulse AI, identifying how "93% accuracy" claims conceal internal benchmark bias and unbudgeted API overhead.
4. **Value Quantification (Week 4)**
   - **Rating:** 🟡 Getting there *(recalibrated from 🟢 — Week 8 showed how architectural integration overhead, multi-system data access, and scale error-remediation labor complicate standalone ROI estimates)*
   - **Evidence:** Mapped TechCorp's value chain, applied the 5-criterion filter, and built a defensible investment memo for my HR Sentiment Classifier showing a €10,710 gross benefit, subtracting €2,376 in human error correction, and establishing a net Year 1 value of €7,729 with a 0.8-month payback period.

---

## Skills Passport: Checkpoint 2 (Week 8)

### Build Progress Diagnostic
- **What can your tool do now?** Classifies unstructured employee/coordinator feedback in EN, FR, and NL (and ready for DE) into six psychological barrier categories (*Job Security Fear*, *Trust/Accuracy Concern*, *Usability/Complexity*, *Change Fatigue*, *Enthusiastic/Receptive*, *Unclassified/Irrelevant*) as a component inside a five-layer architecture with human-in-the-loop review and local open-weights fallback options.
- **What can't it do yet?** Still struggles to separate primary intent on borderline mixed-sentiment inputs, risks fabricated context on very short comments without strict short-text/confidence guardrails, and drops accuracy on Dutch nuance when running on an un-tuned local 8B model.
- **Which number proves it?** 70% dual-run pass rate on the cloud baseline (30% error rate across 20 runs: 3 F6 inconsistent, 2 F1 wrong, 1 F2 fabricated) vs. 60% pass rate on local Llama-3-8B (with F4 format drift and a Dutch classification miss on Input 9).

### Skill Self-Assessments
| Skill | Week | Self-Assessment | Evidence (one sentence) |
| :--- | :---: | :---: | :--- |
| Cost literacy | 1 | 🟢 | Modeled EuroShop's token vs. error costs (€45,300 Budget vs. €9,300 Premium total monthly cost) and connected API unit costs to human remediation labor. |
| Capability skepticism | 2 | 🟢 | Applied the No-AI framework and failure taxonomy (F1–F6) across test runs, showing why human review and guardrails are essential for workplace feedback. |
| Vendor claim detection | 3 | 🟢 | Audited 16 NexusAI claims and PsychoPulse AI's pitch across Fact, Aspiration, and Avoidance, separating verified compliance from unverified benchmarks and FOMO. |
| Value quantification | 4 | 🟢 | Quantified the HR sentiment classifier business case (€10,710 gross benefit, €2,981 Year 1 cost, €7,729 net Year 1 benefit, 0.8-month payback) alongside stress tests. |
| Market mechanism thinking | 5 | 🟡 | Audited MindGym (14/18, AI-Present) and ChangeLab (4/18, AI-Invisible) using the 6-criterion GEO framework, while still practicing how discovery shifts apply to transactional vs. advisory workflows. |
| Cost projection | 6 | 🟢 | Measured Gemini 3.1 Flash-Lite per-call cost ($0.0000460) and projected Month 1/6/12 and 3x scale costs for Northwind Logistics, highlighting error labor over token spend. |
| Lock-in detection | 7 | 🟢 | Scored lock-in risks (e.g., 3/15 low risk for our modular classifier vs. 6/15 for GhentAccounting) and mapped a <4-hour rerouting and local open-weights exit path. |
| Design defense | 8 | 🟡 | Designed Northwind Logistics' five-layer architecture within €50,000 and 3 months and drafted answers to the 5 board questions plus budget shifts, with room to sharpen rapid Q&A delivery under pressure. |

### Reflection Question
Looking back at Week 1, I used to view AI adoption mainly through raw model pricing or surface-level feature promises. Now I look at AI as a system of trade-offs—weighing error-correction labor, data portability, regulatory boundaries, and human trust against the simplest alternative that actually works. That shift is why I now start with constraints, failure modes, and human checkpoints before choosing a model or architecture.
