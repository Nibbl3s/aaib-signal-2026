
# Build, Buy, or Connect? What Testing My Own HR Tool Taught Me About AI Lock-In

Before this week’s lesson on lock-in detection, I mostly thought about AI architecture in terms of accuracy and token prices. I assumed that if you use a standard API, you can easily switch providers whenever you want. Learning about vendor lock-in—and actually trying to run my own HR tool on a local model—completely changed how I look at building with AI. What stood out most to me during the class was the idea that lock-in doesn't live in the vendor's logo, but in the missing abstraction layer. Once a company builds its workflows directly around one provider's specific format, leaving becomes too expensive to survive.

## The HR Use Case

In HR technology, the stakes of getting this architecture wrong are especially high. Consider a high-volume recruitment operation like **Colruyt Group**, which processes over 100,000 applications annually through **SAP SuccessFactors**. To help recruiters who currently spend 3 minutes per CV on manual triage, the company needs automated CV extraction, personal data anonymization (to comply with GDPR and the EU AI Act), and candidate ranking.

## Build, Buy, or Connect?

Walking through the **Build vs. Buy vs. Connect** framework made the right choice clear:

1. **Is this capability our competitive advantage?** -> **No.** Colruyt wins on retail logistics and operations, not proprietary language models.
2. **Is this a commoditized problem with good off-the-shelf solutions?** -> **Partially.** Basic CV parsing is standard, but integrating cleanly with SAP SuccessFactors while enforcing strict anonymization requires custom orchestration.
3. **Do we need multiple AI capabilities that no single vendor provides well?** -> **Yes.** Combining anonymization, multilingual extraction, and ATS ranking points directly to **Connect**—wiring best-of-breed models together behind a thin abstraction layer.

## 5-Dimension Lock-In Scorecard

Scoring a typical single-vendor cloud setup on the **5-Dimension Lock-In Scorecard** showed me where the real traps hide:

| Dimension | Score (0–3) | Evidence & Risk Analysis |
| :--- | :---: | :--- |
| **Data Portability** | **0 / 3** | Low risk, as raw CVs and outputs stay inside SAP SuccessFactors. |
| **API Stability** | **2 / 3** | High risk—providers frequently update or deprecate lightweight models without guaranteeing consistent output formatting. |
| **Pricing Control** | **2 / 3** | High risk—pay-as-you-go rates can change unilaterally with minimal notice. |
| **Feature Dependency** | **1 / 3** | Moderate risk—prompts often rely on one model's specific behavior. |
| **Migration Cost** | **1 / 3** | Low technical effort (<1 month), but high **performance risk**. |
| **Total Score** | **6 / 15** | **Moderate Risk** |

## The Migration Path & My Key Takeaway

What surprised me most in this week’s lab was testing my migration path in practice. Technically, switching endpoints behind an OpenAI-compatible wrapper or **Model Context Protocol (MCP)** takes less than 8 hours. However, when I moved my job-requirement extraction prompt from `gemini-3.1-flash-lite` (85% accuracy, €0.000165/run) to a local `llama3.2` 3B open-weights model (€0/run), error-free consistency dropped from 85% to 0% (18.75% single-run content accuracy), causing hallucinations and format drift. At €5.00 per manual recruiter correction, a "free" local model would push monthly error costs from €750 to over €4,000.

My biggest takeaway from this lesson is that true independence in HR tech isn't about avoiding cloud vendors or hosting everything yourself. Over the next 90 days, any HR team deploying AI should focus on owning the wiring: enforce strict JSON schemas, build a thin abstraction layer between the ATS and the AI, and benchmark backup models regularly so you always have a real exit option.

```
