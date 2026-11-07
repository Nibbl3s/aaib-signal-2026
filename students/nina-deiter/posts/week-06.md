# Week 6 – 6 ECTS Extension: Measured Across Two Providers

**Use Case:** AI Feedback-to-Task Assistant for Creative Agencies  
**Test date:** November 7, 2026  
**Providers:** Google Gemini API and GroqCloud  
**Models:** Gemini 3.5 Flash-Lite and Qwen 3.8 27B

### 1. Methodology

I tested two AI models through their respective APIs using Hoppscotch. Both providers offered a free tier for the tests, but I calculated the equivalent costs using their standard paid API prices.

I used three identical feedback scenarios for both models:

- **T1 – Standard:** Clear client feedback containing several design changes.
- **T2 – Ambiguous:** German feedback with an unclear request regarding text alignment.
- **T3 – Complex:** Longer client feedback containing multiple changes, fixed design elements and decisions requiring clarification.

The purpose was to compare real token consumption, estimated API costs and differences in output quality.

### 2. Measured Results

| Metric | Gemini | Groq / Qwen |
|---|---:|---:|
| Total input tokens | 525 | 562 |
| Total output tokens | 1,319 | 1,842 |
| Total tokens | 1,844 | 2,404 |
| Average cost per run | $0.001152 | $0.002606 |
| Monthly cost (300 runs) | $0.35 | $0.78 |

**Prices used:**

- Gemini 3.5 Flash-Lite: $0.30 input / $2.50 output per million tokens.
- Qwen 3.8 27B via Groq: $0.80 input / $4.00 output per million tokens.

These are estimates based on the three measured API responses and a projected monthly volume of 300 feedback evaluations.

### 3. Quality and Failure Comparison

Both models successfully identified the main client requirements in all three tests.

In T2, both correctly recognised ambiguous German feedback and recommended seeking clarification rather than implementing an unsupported design change. This was particularly relevant because my earlier Week 2 Langdock testing revealed a weakness in handling this type of ambiguity.

However, Groq's Qwen model tended to provide more detailed responses and introduce additional recommendations.

For example, in T2 it suggested creating optional layout variations even though the client had not requested them. In T3, it suggested a staging update and client delivery steps that were not explicitly specified.

These additions were not necessarily incorrect, but they could create unnecessary work if project managers treated every suggested action as an approved client requirement.

Gemini generally produced more concise, focused outputs while covering the required tasks and constraints.

Neither model made a confirmed major error in the three tests. However, the sample is too small to establish a reliable production accuracy rate.

### 4. Model Decision

For my Feedback-to-Task Assistant, I would currently choose **Gemini 3.5 Flash-Lite**.

Both models performed adequately, but Gemini generated more concise responses and had lower estimated API costs.

The cost difference itself is relatively small: approximately $0.44 per month at the projected usage volume. Therefore, output reliability and the risk of creating unnecessary tasks are more important decision factors than token pricing alone.

### 5. Limitations and Conclusion

The comparison is based on only three prompts per model, with one response per prompt. It does not prove that Gemini consistently outperforms Qwen.

Furthermore, the tests used a simplified version of my tool's instructions rather than the complete Langdock implementation. Longer feedback, project history and additional instructions could affect both cost and output quality.

The results suggest that **human verification and the prevention of incorrectly generated tasks matter more than small differences in API costs**.

Before selecting a model for real deployment, I would test both with a larger dataset, repeated runs and measured human correction times.

**Sources:** Google Gemini API Pricing and GroqCloud Model Pricing, accessed November 7, 2026.
