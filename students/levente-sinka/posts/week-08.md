---
title: "Replacing a €12,600 Restaurant Agency: A 5-Layer Hybrid AI Architecture"
date: "2026-11-27"
author: "Levente Sinka"
week: 8
---

Most independent restaurants treat AI as a software purchase. They bolt on an automated review responder or pay an off-site agency to pair generic captions with stock photos. Skipping integration design creates disconnected tools, wrong online menus, and hidden review labor that erases any cash savings.

### The Company

Rather than using hypothetical agency estimates, this design is built directly on my Week 4 interview with the owner of a real 90-seat casual-dining bistro in Western Hungary. The restaurant previously paid a regional agency €12,600/year (€1,000/month retainer plus €600 in shoot fees). Worse, the owner still burned 12 to 14 hours/month micromanaging briefs and snapping hasty kitchen photos (€4,032/year at €28/hour loaded rate), while agency menu mistakes caused €1,200 to €1,500/year in comped meals. The constraint is tight: replace the €12,600 retainer with a €10,560 Year 1 hybrid budget (€9,000/year local solo creator visiting twice weekly, €960/year software stack, €600 setup), zero in-house engineers, three guest languages (Hungarian, German, English), and EU GDPR compliance.

### The Architecture

One focused use case fixes both bottlenecks: a multilingual Guest Review Triage and Local GEO (Generative Engine Optimization) pipeline that turns daily kitchen specials into Schema.org JSON-LD markup and flags urgent complaints before they hurt ratings.

* **Data Layer:** Read-only daily POS menu exports and Google/TripAdvisor review feeds. Accounting and guest payment records stay physically disconnected. Logs live in open JSON inside an EU-hosted PostgreSQL database (€120/year, inside the €960 software stack).
* **AI Model Layer (ADR-001 Routing):** A Connect setup behind an OpenAI-compatible client. Grounded in the Course AI Pricing Reference (7 September 2026) and my Week 6 live Hungarian API measurements, mission-critical escalation triage and Schema generation route to Groq (`openai/gpt-oss-20b` at €0.000092/run) with Google AI Studio (`gemini-3.1-flash-lite` at €0.000097/run) as backup, already absorbing Groq's +62.6% Hungarian tokenizer tax and 246 hidden reasoning tokens. At 150 monthly calls for this bistro (60 reviews, 90 menu/social updates), raw API spend is under €1/year; even scaling to 20 venues (1,200 reviews/month) costs just €0.11 to €0.12/month.
* **Integration Layer:** A thin Python wrapper (€600 setup) strips guest PII, enforces strict JSON validation (stopping the Markdown-fence parser crash seen on Gemini in Week 6), runs deterministic keyword overrides for food-poisoning or billing disputes, and auto-fails over to the backup API or manual inbox with zero downtime.
* **Interface Layer:** No custom dashboard. The solo creator handles routine drafts, while the owner receives only flagged escalations and final menu checks via WhatsApp or email, cutting owner coordination from 13 hours down to 2 hours/month.
* **Governance Layer:** EU-only processing under Zero-Data-Retention terms, EU AI Act Limited-Risk disclosure on automated FAQs, and mandatory human sign-off on negative replies and live menu prices.

### The Defense

Why not buy packaged tools like MARA AI or Microsoft Copilot? MARA locks review history inside a proprietary dashboard, ignores POS-to-GEO menu markup, and cannot fix the owner's core bottleneck: authentic physical presence on the restaurant floor. Lock-in is equally real: on November 20, 2026, Groq Customer Support confirmed in writing zero guaranteed notice for model deprecation or price hikes, so ADR-001 isolates providers behind a swappable wrapper (under 2 days to migrate). Most importantly, human review time drives total cost, not tokens. Applying my Week 2 measured 15% cloud error rate (17/20 clean runs) and the Course Loaded Cost Reference (€33/hour, €5/fix for 10 minutes of review), 60 monthly reviews create 9 fixes: **1.5 hours/month (€45/month, €540/year)** of creator review time, absorbed inside the €9,000 retainer while cutting menu-error comps by €1,000/year. At 20-venue solo-operator scale (1,200 reviews/month), that 15% error rate demands **30 hours/month (€900/month)** in cleanup, 7,745x the €0.12 token bill. Free local `llama3.2` (3B) makes this worse: even after my Week 8 prompt tightening jumped accuracy from 18.8% to 62.5% (+43.7 points across 16 runs), a 37.5% error rate would require **75 hours/month (€2,250/month)** at 20-venue scale, breaking unit economics past my 17.9% ceiling.

### The Question

The one thing I am least sure about is whether kitchen staff will update daily POS specials cleanly enough for automated Schema.org publishing, or whether messy inputs will push creator review time past 1.5 hours/month per venue. If real tracking breaks that ceiling, I would cut automated GEO markup and keep AI strictly on review triage.

*AI-use note: Gemini assisted with structuring and editing the prose; all restaurant interview figures, live API token measurements, local model benchmarks, and vendor support quotes are my own verified primary measurements.*
