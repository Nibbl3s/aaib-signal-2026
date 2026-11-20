---
title: "Why Owning Your AI Weights Isn't Enough: Avoiding Lock-In in Hospitality AI"
date: "2026-11-20"
author: "Levente Sinka"
week: 7
---

Independent hospitality operators are replacing €2,000/month marketing agencies with AI pipelines for guest reviews and Generative Engine Optimization (GEO). Most optimize for the cheapest API call and never ask what happens when a vendor pulls a model or triples prices. If you cannot leave without rebuilding, you are renting your business.

### The Use Case

Consider a solo hospitality operator running an automated Review Triage and GEO Engine for 20 independent restaurants and cafés, modeled on venues like Turner's in Sárvár. The system classifies multilingual reviews (Hungarian, Dutch, English), flags urgent escalations, and turns daily specials into Schema.org JSON-LD markup. It requires strict JSON formatting, nuanced multilingual judgment, and stable links to menus and review feeds.

### The Decision

Walking the five-question framework leads straight to **Connect**. Is building a foundation LLM our competitive advantage? No, hospitality expertise and local client relationships are the moat (Q1: No). Is multilingual GEO plus escalation triage solved cleanly by one off-the-shelf tool? No, packaged suites either miss local context or trap venue data inside proprietary dashboards (Q2: No). Do we need multiple evolving capabilities (triage, schema generation, social copy) that no single vendor leads in? Yes (Q3: Yes, Q4: Yes), and a technical solo operator can maintain a thin wrapper (Q5: Yes). Buying creates a trap; building an LLM wastes months; connecting lets you swap providers.

### The Lock-In Scorecard

Scoring my own cloud stack (Groq `openai/gpt-oss-20b` with Google AI Studio fallback) exposes where the real lock-in sits:

| Dimension | Score (0-3) | Evidence |
| :--- | :--- | :--- |
| Data Portability | 1 | Reviews and JSON-LD live in my own standard JSON/PostgreSQL store. |
| API Stability | 2 | Groq confirmed in writing (Nov 20, 2026) no guaranteed minimum deprecation notice; `llama-3.3-70b-versatile` was already gone on Nov 19. |
| Pricing Control | 3 | Groq confirmed zero fixed notice for on-demand price hikes; hidden reasoning tokens amplify bill spikes. |
| Feature Dependency | 1 | Standard OpenAI-compatible chat completions keep application code portable. |
| Migration Cost | 1 | Swapping endpoints takes hours, plus prompt regression testing. |
| **Total** | **8 / 15** | **Moderate Risk** |

Pricing Control (3/3) and API Stability (2/3) are the chokepoints. Both cloud providers sell uncontracted list rates with zero binding notice.

### The Migration Path

To test leaving completely, I ran my 8-review multilingual benchmark twice (16 runs) locally on `llama3.2` (3B) via Ollama on a MacBook Air M1. It cost €0, kept 100% of guest data offline, and hit 100% raw JSON compliance. Yet exact-match accuracy collapsed from 81.3% (13/16) in the cloud to **18.8% (3/16)** locally: it over-escalated every negative review and mangled Hungarian context (turning burnt coffee and hard eggs into "undercooked egg"). A realistic exit therefore means swapping to a second cloud API behind a 50-line OpenAI-compatible wrapper plus MCP tool connections, taking 12 to 16 hours instead of a rebuild, while upgrading a local model for privacy-sensitive drafting.

### The Insight

Independent hospitality cannot survive €400,000 rewrites, nor can it absorb €5/fix alert fatigue from undersized local models. The winning architecture is neither blind cloud loyalty nor pure self-hosting. It is a thin Connect layer: own venue data in open JSON, standardize tool wiring with MCP, run automated weekly evals across two providers, and treat every LLM as a replaceable utility.
