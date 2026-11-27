# AI Integration for a Belgian Exam-Prep & Tutoring Platform: A €38K Design

Most tutoring companies adding AI make the exact same mistake: they bolt a generic chatbot onto their website and call it "personalized coaching." When students get confident-sounding hallucinations right before exam week, trust collapses and tutors end up spending more time correcting AI drafts than teaching. Designing an integration that actually helps students study requires connecting real course materials, controlling error rates, and keeping humans in charge of academic accuracy.

## The Company

**StudieKompas Vlaanderen** is a Ghent-based exam-prep and tutoring organization with 45 employees and €3.2M in annual revenue, supporting roughly 2,400 Flemish higher-education students across business, law, and engineering tracks. They run on **Canvas LMS** (via institutional course exports), **HubSpot CRM**, **Microsoft 365**, and a **custom legacy scheduling and billing portal** built on PostgreSQL with no public API. Management has approved a **€38,000 total Year 1 budget** and a **10-week timeline** (2 internal developers plus 1 academic coordinator) to launch an automated lecture-to-exam study coach—without risking GDPR violations or overwhelming their tutors.

## The Five-Layer Architecture

**1. Data Layer:** Students upload messy lecture slide decks (PDF/PPTX) and past exam blueprints inside an authenticated course workspace, while enrollment status and language preferences (Dutch/English) are pulled from HubSpot via REST API. Because the legacy PostgreSQL billing portal has no API, our pipeline queries a **read-only SQL view** once nightly to verify active subscription status—never writing back into the legacy database. All student names and student numbers are stripped locally on an EU server before inference so zero PII leaves Belgium.

**2. AI Model Layer:** Rather than fine-tuning a custom model—which would blow through our €38,000 cap—we connect via an EU-hosted commercial API tier (**Gemini 2.5 Flash**, $0.30/$2.50 per 1M tokens, *AI Pricing Reference, 7 September 2026*), costing roughly **€0.004 per 40-slide deck** (~€140/month at 1,200 decks/day). Prompts enforce strict extractive grounding ("cite slide numbers or output `NOT IN SLIDES`") across Dutch and English, wrapped behind an OpenAI-compatible router so StudieKompas can switch providers in under 6 hours.

**3. Integration Layer:** Two internal developers build lightweight Python workers triggered on file upload, parsing slides locally with PyMuPDF before calling the model API—avoiding expensive enterprise middleware. **Fallback path:** If the AI API times out after 5 seconds or goes offline during peak January exam week, the worker automatically bypasses AI synthesis and delivers a deterministic, rule-based keyword-and-heading outline extracted directly from the slide deck so students are never left empty-handed.

**4. Interface Layer:** Generated cheat sheets and practice questions appear inside a clean web view embedded in **Microsoft Teams / Canvas LTI** (tools students and tutors already use, avoiding custom mobile app development). For high-stakes exam packs, a **human-in-the-loop tutor checkpoint** flags low-confidence extractions for a 2-minute tutor spot-check before publishing to the shared course hub, keeping training to one 30-minute tutor onboarding session.

**5. Governance Layer:** Every prompt, slide citation, tutor edit, and token cost is logged in an EU PostgreSQL audit table feeding a **Power BI** dashboard to track monthly spend and hallucination edit rates. Under the **EU AI Act**, this system is classified as **Minimal/Limited Risk** (an assistive study tool with mandatory source citations and tutor review rather than automated grading), while **GDPR** compliance is enforced via EU residency, PII stripping, and zero-data-retention API terms.

## The Defense

**Why not just use Microsoft 365 Copilot or built-in LMS AI?** Licensing Copilot across 2,400 students and 45 staff (~€30/user/month) would cost over **€880,000/year**—more than twenty times our €38,000 budget—and generic Copilot neither enforces strict slide-citation rules nor checks subscription eligibility against StudieKompas’s no-API PostgreSQL portal.

**What does this cost at scale and what is the lock-in risk?** Total Year 1 build and run cost is **€34,850** (€24,000 internal dev allocation, €3,600 EU hosting/logging, €1,680 annual API tokens, €1,020 tutor training, and a 15% contingency of €4,550), leaving €3,150 headroom. Even at **3× exam-week volume (3,600 decks/day)**, monthly API spend rises from €140 to **€420/month**, keeping unit economics intact. Lock-in risk is **low**: the three major commercial providers sit within a factor of two of each other at every tier (*AI Pricing Reference, 7 September 2026*), so swapping providers takes under 6 hours.

## The Question

The one thing I am least sure about is **tutor review fatigue during peak exam weeks**: if 400 students upload decks in the same 48 hours, will tutors start rubber-stamping flagged cheat sheets—and should we gate human review strictly to shared course packs while letting individual student drafts rely on automated slide-number verification?
