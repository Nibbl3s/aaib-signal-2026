---
week: 7
title: "Build, Buy, or Connect? Avoiding Vendor Lock-In in AI Study Coaches"
author: "Dalia El-Ghalid"
beat: "AI as a Personal Study Coach"
skill: "Lock-in detection"
date: 2026-11-16
---

### Hook
EdTech platforms and university study apps are racing to embed AI study coaches that turn lecture slides into flashcards and practice exams. Building on a single proprietary AI provider feels fast in week one—until that vendor triples API rates or deprecates an endpoint right before exam season. In student-facing tools, architectural lock-in doesn't just inflate costs; it risks breaking study workflows when students need them most.

### The Use Case
Consider a European EdTech startup (or university LMS plugin) deploying an **AI Personal Study Coach**. Students upload PDF lecture slides, and the system extracts core concepts, generates structured JSON flashcards, and tracks spaced-repetition mastery. To deliver this, the platform needs document parsing, LLM generation, and vector search across past course notes.

### The Decision
Walking the 5-question **Build vs. Buy vs. Connect** framework reveals why **Connect** is the right path:
1. **Is this capability our competitive advantage?** *No.* Underlying LLM text generation and OCR are commodities; the platform's real moat is its pedagogical UX and student adoption.
2. **Is this a commoditized problem with good off-the-shelf solutions?** *Partially,* for raw LLM calls, but no single vendor handles PDF parsing, flashcard structuring, and spaced-repetition analytics well out of the box.
3. **Do we need multiple AI capabilities that no single vendor provides well?** *Yes.* Combining specialized PDF layout extraction with fast LLM flashcard generation works best with modular tools.
4. **Will our needs change significantly in the next 12 months?** *Yes.* Model prices and capabilities shift monthly, requiring the ability to swap providers without rewriting the app.
5. **Do we have engineering capacity to build/maintain?** *Yes.* Maintaining a thin abstraction layer is far cheaper than getting trapped in a proprietary ecosystem.

### The Lock-In Scorecard
Scoring a typical single-vendor EdTech AI stack without safeguards yields **10/15 (High Risk)**:
* **Data Portability (2/3):** Student flashcard histories are exportable as CSV, but vector embeddings of course notes are locked in the vendor's proprietary vector store.
* **API Stability (2/3):** Providers frequently deprecate specific model snapshots with 30–60 days' notice, threatening broken JSON outputs during exam peaks.
* **Pricing Control (3/3):** Pay-as-you-go list pricing offers zero contractual protection against sudden tier restructuring or token hikes.
* **Feature Dependency (2/3):** Relying on vendor-specific structured-output wrappers and proprietary prompt playgrounds makes switching require code rewrites.
* **Migration Cost (1/3):** Switching a lightweight study app takes ~40–60 engineering hours and re-indexing course PDFs—painful for a small team, though not fatal.

### The Migration Path
If the primary cloud provider tripled prices tomorrow, migrating without an abstraction layer would take roughly **60 engineering hours** to rewrite API calls, validate JSON schemas on a new model, and re-embed student notes—plus a **5–8% temporary accuracy drop** while re-tuning prompts. Wrapping model calls in an **OpenAI-compatible API interface** and using **Model Context Protocol (MCP)** to connect the LLM to student study databases reduces that migration to under **8 hours** (swapping an API key and endpoint).

### The Insight
In EdTech, token prices drop every quarter, which lures builders into taking proprietary shortcuts. True architectural resilience comes from owning the **wiring and student data schemas** in open formats (JSON/PostgreSQL) while treating the AI model itself as a replaceable utility.

---

> **Academic Integrity & Human Review Disclaimer:**  
> *This post was drafted and formatted with the assistance of generative AI tooling as an analytical assistant. In strict accordance with Arteveldehogeschool guidelines, all architectural evaluations, framework decisions, lock-in scores, and strategic insights were personally audited, verified, and reviewed by Dalia El-Ghalid prior to publication.*
