---
week: 7
title: "Build, Buy or Connect? Can My Marketing AI Survive a Switch?"
author: "Ksenija Maruscaka"
beat: "AI in Marketing and Consumer Personalization"
skill: "Lock-in detection"
date: 2026-11-20
---

# Build, Buy or Connect? Can My Marketing AI Survive a Switch?

## The question

AI can classify customer reviews quickly. But what if its provider raises prices, retires a model, or refuses requests? Could my marketing AI work without Google?

## My use case and decision

My Build classifies reviews as **Product Quality**, **Shipping**, or **Neutral/Other**. I tested twelve Week 2 examples twice on Gemini 3.1 Flash-Lite and downloaded Llama 3.2 running locally with Ollama on Windows.

I recommend **connect**. My five-question reasoning: classification is not our competitive advantage, so **build** is unnecessary. Ready-made tools exist, so **buy** is possible. But marketing may also need translation, email writing, and personalization; requirements will change. With some technical help, a small API adapter is manageable, unlike maintaining a model. I would keep reviews and labels in company-owned files.

Customer feedback shapes marketing campaigns. If we keep everything inside one vendor dashboard, switching may lose old categories and corrections. Saving our own CSV is a simple way to keep control.

## The lock-in score

These scores describe my prototype and safeguards, not a signed contract. Zero is low risk; three is high.

| Dimension | Score | Evidence |
|---|---:|---|
| Data portability | 1 | Inputs and outputs are saved locally in CSV; Google-side history export is unverified. |
| API stability | 1 | Gemini uses `v1beta`; shutdown is listed for 7 May 2027. |
| Pricing control | 2 | Google's paid prices normally change 30 days after posting, with exceptions. |
| Feature dependency | 1 | Labels transfer, but Gemini and Ollama use different APIs. |
| Migration cost | 0 | Estimated exit: 28 hours, under one month and €20,000. |

**Total: 5/15 — moderate risk.** Pricing control worries me most.

## What my real test showed

Llama passed **9/12 reviews twice**; Gemini passed **5/12** but hit **eight HTTP 429 rate-limit errors**. Among completed calls, Gemini was correct **12/16 (75%)** and Llama **19/24 (79.2%)**. The lower Gemini pass rate includes API failures.

Llama confused shipping and quality on reviews 4 and 7, and changed its answer on review 11. Gemini mislabelled reviews 5 and 7; other calls were blocked. Sixteen successful Gemini calls cost **$0.00035575** at paid-tier rates. Llama had **€0 per-call API fee**, but hardware costs remain. Gemini sent reviews to Google; Llama kept them local.

I was surprised that Llama changed its answer even with the same instructions. Migration is not only changing an API; we must check whether the new model understands difficult complaints. Some expected labels are subjective, making this a small pilot, not proof of production quality.

## My exit plan

I estimate **28 hours × €60 = €1,680** for switching, retesting and documentation (an assumption). In week one I would save prompts and inputs; in month one add an adapter; within ninety days retest accuracy and costs on anonymized reviews, keeping a fallback.

Before launching, a person should review unclear complaints. I would monitor failed API calls as well as wrong categories. If a provider becomes unreliable, the team can switch models using saved original reviews. That is what avoiding lock-in means in practice.

My lesson: **cheap tokens do not guarantee reliable AI**. Would a paid plan solve the 429 failures?

**Sources (checked 20 November 2026):** [Gemini pricing](https://aistudio.google.com/docs/pricing), [Gemini API terms](https://aistudio.google.com/docs/terms), [model deprecations](https://aistudio.google.com/docs/deprecations). Test evidence: my 20 November 2026 Windows PowerShell run and saved CSV.
