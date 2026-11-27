### Checkpoint 1: Foundation Skills (Week 4)

**Build Status:**
- What can your tool do now: Classifies incoming multi-language restaurant and hotel reviews into structured JSON categories and flags urgent operational escalations.
- What can't it do yet: It cannot reliably distinguish between minor guest dissatisfaction and severe health or safety hazards without human review.
- Which number proves it: 85% overall accuracy on the 20-sample validation dataset, with 2 false-negative escalation errors (F1).

**Skills Self-Assessment:**
- Cost literacy: 🟢 | Built a full monthly and annual token cost projection for review batch processing in Week 1, accounting for input/output token pricing tiers and loaded staff costs.
- Capability skepticism: 🟢 | Evaluated model boundaries in Week 2, identifying hallucinated review responses and false classifications under the No-AI decision framework.
- Vendor claim detection: 🟢 | Deconstructed MARA AI's marketing assertions in Week 3, separating aspirational claims from verifiable technical facts and identifying vendor avoidance tactics.
- Value quantification: 🟢 | Formulated an end-to-end business case comparing agency retainers to an AI-assisted workflow, modeling time saved, direct expense reduction, and risk mitigation.

## Checkpoint 2: Builder Skills (Week 8)

### Build Status (Compared with Week 4)
* **What can your tool do now:** Runs both on cloud APIs (Groq/Google) and fully offline on local `llama3.2` (3B) via Ollama with 100% raw JSON output, zero escalation false positives after v2 rule tightening, and verified per-call token costing.
* **What can't it do yet:** On local 3B weights, it still introduces mixed-sentiment regressions (misclassifying nuanced complaints as Neutral or General/Experience) and drifts across runs on acoustic/facility complaints even at `temperature: 0.1`.
* **Which number proves it:** Local `llama3.2` accuracy jumped from 18.8% (3/16) in Week 7 to 62.5% (10/16) in Week 8 (+43.7 percentage points) with 0/16 false alarms, yet the remaining 37.5% error rate is still more than double my 17.9% economic break-even limit (compared to 85% cloud accuracy in Week 4).

### Checkpoint 1 Re-Rating (Recalibrated at Week 8)
* **Cost literacy (W1):** 🟡 *(Recalibrated from 🟢)* | Week 6 live API testing showed I underestimated hidden reasoning tokens (246/call on Groq) and non-English tokenizer overhead (+62.6% on Hungarian), proving real API bills diverge sharply from basic list-price math.
* **Capability skepticism (W2):** 🟡 *(Recalibrated from 🟢)* | In Week 8, tightening my prompt fixed 100% of escalation false alarms but silently broke two previously passing mixed-sentiment reviews, showing how brittle prompt boundaries are on smaller models.
* **Vendor claim detection (W3):** 🟢 *(Confirmed)* | Still solid, reinforced in Week 7 when I audited Groq's actual ToS and got written support confirmation of zero guaranteed deprecation or pricing notice.
* **Value quantification (W4):** 🟢 *(Confirmed)* | Held up under pressure in Week 7's pitch and Week 8's Northwind defense, where I tied ROI directly to a concrete 42-hour break-even ceiling and €5/fix error remediation math.

### Skills Self-Assessment (Weeks 1 to 8)
| Skill | Week | Self-Assessment | Evidence (one sentence) |
| :--- | :--- | :--- | :--- |
| Cost literacy | 1 | 🟡 | Priced Northwind's Year 1 EU LLM tokens (€450) and WhatsApp API (€1,500) using blended multilingual token overhead instead of naive English list prices. |
| Capability skepticism | 2 | 🟡 | Separated deterministic SQL ETA checks from AI text triage in the Northwind Data Layer and documented prompt regressions on my own v2 local Build test. |
| Vendor claim detection | 3 | 🟢 | Rejected Microsoft Copilot and Salesforce Einstein for Northwind with concrete budget (€122.4K/year) and technical (legacy SQL TMS blind spot) evidence. |
| Value quantification | 4 | 🟢 | Modeled Northwind's Year 1 investment (€49,358) against ~260 saved CS hours/month, showing a ~6-month gross payback and €0.65 cost per handled query at scale. |
| Market mechanism thinking | 5 | 🟢 | Designed my Week 8 hospitality architecture specifically around converting live POS menus into Schema.org JSON-LD so venues win AI-mediated local discovery (GEO). |
| Cost projection | 6 | 🟢 | Projected Northwind from Month 1 (€2,019/mo) to 3x Month 12 scale (€5,507/mo), proving that 86% of scaled cost comes from human error cleanup rather than tokens. |
| Lock-in detection | 7 | 🟢 | Marked every lock-in point (L) on the Northwind sketch and kept LLM migration under 2 days via an OpenAI-compatible Python wrapper and open EU PostgreSQL logs. |
| Design defense | 8 | 🟢 | Designed and defended a complete 5-layer Northwind Connect architecture within €50K and 3 months, preempting all five board questions during peer critique. |

### Reflection (Week 1 to Week 8)
In Week 1, I thought adopting AI meant picking the smartest or cheapest model and writing a clever prompt. Today, I think of the AI model as the smallest, most replaceable box inside a larger system where data boundaries, deterministic rules, error-cleanup math, and exit paths decide whether the business makes or loses money. I no longer ask "what can this model do?", I ask "what breaks when it fails at 3x scale, and how fast can I swap it out?"
