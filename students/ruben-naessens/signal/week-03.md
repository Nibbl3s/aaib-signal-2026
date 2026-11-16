# Real Value or FOMO? Testing HireVue's Recruitment AI Claims

**Week 3 — The Skeptic | Ruben Naessens**

Recruitment is an attractive market for AI vendors because recruiters spend time on repetitive work: reading vacancies, screening applications and coordinating interviews. My own project focuses on a small part of this process: extracting mandatory and preferred qualifications from vacancy descriptions into structured JSON. That makes it especially important to separate a tool's technical capability from the business outcomes its marketing promises.

For this week's vendor example, I examined **HireVue's AI Hiring Agents** page. It advertises **“60% less time screening”**, alongside faster hiring and lower interview costs. This is a real, published vendor claim, not a result I measured myself. The page presents these numbers as outcomes associated with its offering, but I cannot assume they apply to a Belgian recruitment agency or to my narrower vacancy-extraction use case.

**What is being sold?** HireVue offers recruitment technology including AI-supported screening, interviews and workflow automation. **What is being promised?** Less recruiter time spent screening and, by implication, a more efficient hiring process. The distinction matters: automating an interview or screening step is a feature; saving 60% of staff time in my setting is an outcome that needs local evidence.

My first question is the denominator. Sixty percent of what? Does screening include reviewing CVs, conducting interviews, reading job descriptions or scheduling? How long did the process take before implementation? Did the measurement include setup, quality checks and correcting mistakes? A percentage without a defined baseline can create FOMO even when the underlying improvement is genuine.

Second, I would check **transferability**. HireVue's product covers a wider workflow than my build. If its customers use automated interviews at high volume, that does not establish that extracting qualifications from a few hundred multilingual vacancies will produce the same savings. I would also want a breakdown by language and vacancy complexity. Dutch, French and English descriptions can express requirements differently; a neat JSON response might still incorrectly label a preference as mandatory.

Third, speed is not the same as quality. A recruiter could process more applications while missing important requirements or introducing unfair exclusions. I would measure critical extraction errors, false mandatory requirements and the minutes of human review needed per vacancy. Those metrics would be compared against both manual extraction and a cheaper alternative: a standardized vacancy intake form with clear fields. If a form solves the problem reliably, AI may be unnecessary.

My **FOMO verdict is pilot, not buy**. Before paying for a full rollout, I would request the methodology behind the advertised screening-time figure, pricing, privacy and retention terms, and evidence for comparable organizations. Then I would run a limited test on representative vacancies with expected outputs written in advance. The decision rule would be net minutes saved after review, acceptable critical-error rates and a defensible total cost.

The lesson for my recruitment beat is that a vendor can have a useful product and still make claims that are too broad for my situation. HireVue's headline gives me a hypothesis worth testing, not an ROI figure I can put into my own business case. The antidote to FOMO is to define the task, baseline, alternatives and failure costs before buying.

**Source:** HireVue, [AI Hiring Agents](https://www.hirevue.com/platform/ai-hiring-agents) (vendor marketing page, accessed 16 October 2026). The 60% figure is HireVue's claim; it has not been independently verified here.

**Disclosure:** ChatGPT assisted with research and drafting. No vendor interview, vendor outreach or independent product test is claimed in this post.
