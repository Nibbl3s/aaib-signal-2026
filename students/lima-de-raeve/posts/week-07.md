# Week 7 — Build, Buy or Connect? The Hidden Cost of AI Dependence

**Beat: How AI Enables the One-Person Business**

This week, we explored an important decision for businesses adopting AI: should they build their own solution, buy an existing one, or connect different services? We also looked at vendor lock-in, which happens when a business becomes dependent on one technology provider and switching becomes difficult or expensive.

For my project, I continued working with SoloShop, a hypothetical online clothing business operated by one entrepreneur. My AI use case is a customer-service classifier that sorts incoming emails into three categories: **AUTOMATE, HUMAN INTERVENTION, or INSUFFICIENT INFORMATION**.

## Build vs Buy: Testing a Local AI Model

Earlier in the course, I tested my classifier using Google's Gemini 3.1 Flash-Lite. This week, I installed Ollama on my laptop and tested a locally running Llama 3.2 (1B) model.

I used the same ten customer messages and tested each message twice, resulting in twenty local runs.

The difference was significant:

| Metric | Gemini | Local Llama |
|---|---|---|
| Classification agreement | Approximately 70% | 35% |
| Repeat consistency | 100% | 40% |
| Exact-format compliance | Not measured comparably | 0% |
| API cost | Very low, usage-based | €0 per request |

Llama frequently classified messages incorrectly, gave different answers to identical inputs, and ignored instructions to return only the category. It even refused to classify a serious security complaint.

I was surprised by how weak its performance was compared with Gemini. However, I also recognise that I tested a small 1B model. A larger local model might perform better, but that would require additional testing and potentially better hardware.

## The Risk of Vendor Lock-In

Using Gemini means relying on Google's infrastructure, pricing and API availability.

I evaluated SoloShop using a five-dimensional vendor lock-in scorecard:

| Dimension | Score (0–3) |
|---|---:|
| Data portability | 1 |
| API stability | 2 |
| Pricing control | 2 |
| Feature dependency | 1 |
| Migration cost | 1 |
| **Total** | **7/15 — Moderate** |

My conclusion is that moderate lock-in is acceptable for SoloShop.

The business can store customer messages and prompts independently of Google. If necessary, the entrepreneur could move to another cloud provider. I estimated that a straightforward migration might take one to three days.

However, my experiments revealed something important: **being able to transfer a prompt does not mean another model will produce equally reliable results.** A new provider would need to be tested before replacing Gemini.

## My Recommendation: Buy, but Keep Control

I would choose **BUY**, using Gemini as a ready-made cloud AI service rather than building a model from scratch.

However, I would not allow it to manage customer service independently.

From my own experience working at hotel reception, I know that customer emails are not always straightforward. Sometimes additional information is needed, and serious complaints require personal attention.

For SoloShop, I would introduce a two-to-three-month pilot in which the entrepreneur checks every AI classification. I would aim for at least **90% classification accuracy**, while requiring all critical complaints to be escalated.

I would also introduce a separate complaint-detection system that flags potentially sensitive messages and notifies the entrepreneur, even if Gemini classifies them incorrectly.

To protect privacy, unnecessary personal information could be replaced with customer codes before messages are sent to the cloud provider.

## Key Takeaway

This week's biggest lesson was that choosing an AI solution is not just about its price or technical capabilities.

For a one-person business, reliability, privacy, control and the ability to switch providers are equally important.

**AI should reduce the entrepreneur's workload without creating a new dependency that the business cannot manage.**
