---
week: 8
title: Protecting Author Voice at Standaard Uitgeverij: A Copyediting Gatekeeper Design
author: Luna Van der Heyden
beat: Algorithmic Homogenization: The Commercial and Brand Toll of AI Editing Tools in Trade Publishing
skill: Design Defense, Five-Layer Architecture, and Cost-at-Scale Projection
date: 2026-11-26
---

# Protecting Author Voice at Standaard Uitgeverij: A Copyediting Gatekeeper Design

**Hook:**
In publishing, skipping integration design means letting generic AI tools flatten an author's voice or invent edits that editors have to untangle line by line. A rushed AI add-on creates hidden cleanup work and erodes reader trust in distinctive prose. Good integration design puts strict editorial rules and human sign-off ahead of raw automation.

**The Company:**
Standaard Uitgeverij NV is a medium-sized Belgian book and comic publishing company headquartered in Antwerp and owned by Standaard Boekhandel Group. Operating in the publishing industry, it dominates the Dutch-language comics market (85% share) alongside fiction and non-fiction imprints (MandA.be, 2026). Regarding size, it employs 48.4 full-time equivalents (roughly 50 staff) and sells over four million copies annually (Companyweb, 2026). While internal departmental budgets remain private, its budget constraint is defined by its 2025 annual accounts: €32.51 million in revenue, a €5.56 million gross margin, and a tight €618,561 net profit (~1.9% margin), requiring strict cost discipline (Companyweb, 2026).

**The Architecture:**
The **Data Layer** pulls ~6,000-word manuscript sections (~8 chunks per ~47,000-word book) from Microsoft SharePoint via Graph API alongside a living style sheet and a read-only SQL view of title records from the legacy system, stripping personal details and keeping data inside the EU under zero-retention rules for GDPR. In the **AI Model Layer**, a swappable API connection calls **Gemini 3.1 Flash-Lite** ($0.25/1M input tokens, $1.50/1M output tokens; AI Pricing Reference, 7 September 2026) guided by a strict copyediting-gatekeeper prompt. Instead of rewriting prose, the AI screens for prompt-injection tricks and five generic, over-smoothed writing patterns, limits mechanical fixes to single words or punctuation marks, and flags tricky spots as questions for the editor (~€0.0028 per chunk run, or ~€2.24/year across 100 books). In the **Integration Layer**, a lightweight Python/n8n script on an EU server splits manuscripts into chunks, carries style notes forward between sections, and drops straight back to normal Word editing if the API fails. In the **Interface Layer**, editors stay in Word and Teams—no custom app needed—reviewing short flags with 3-word text anchors and approving every change by hand. In the **Governance Layer**, an EU PostgreSQL log and Power BI dashboard track verdicts, human overrides, and error/drift rates under a minimal-risk EU AI Act setup.

**The Defense:**
Why not just use Microsoft 365 Copilot inside Word? General-purpose copilots tend to smooth text into predictable templates and risk erasing an author's distinctive voice, whereas our gatekeeper blocks style rewrites, protects dialect and sentence rhythm, and leaves final sign-off to the editor. Lock-in risk is low because our rules and style sheets sit in plain text and JSON behind a swappable API layer with no custom model lock-in. At scale, token costs stay tiny—rising from ~€2.24/year at 100 books to ~€15.68/year at 700 books (~5,600 runs)—while human time spent checking and fixing AI slips at our measured 18.75% strict error/drift rate (93.75% main-verdict accuracy) moves from ~€169.50/year to ~€1,186.50/year at ~€1.13 per flag (~€745K/year gross editing cost savings vs. manual copyediting at ~€50/hr across 700 books), which fits a tight 1.9% net margin.

**The Question:**
What would make me change this design is multi-chapter Dutch testing showing that cutting strict AI error/drift from 18.75% to ≤10% creates too many borderline flags for editors to check—and I am least sure where that balance sits before checking flags slows editors down.
