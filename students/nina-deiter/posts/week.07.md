---
week: 7
title: "Build, Buy, or Connect? Who Owns Mutabor's AI Stack?"
author: "Nina Deiter"
beat: "When does AI actually help project managers in creative agencies — and when does it get in the way?"
skill: "Lock-in detection"
date: 2026-11-19
---

# Signal Post 7 – Build, Buy, or Connect? Who Owns Mutabor's AI Stack?

**Beat:** When does AI actually help project managers in creative agencies — and when does it get in the way?

## The Hook

AI tools are fast to adopt and slow to leave. In creative agencies, where models change and develop quickly, the useful question is not "which tool is best?" but "what happens when we need to switch?", for example because of extraordinarily high prices. Especially when one main tool or workflow is established for a whole company unit, the decision becomes hard.

## The Use Case

Mutabor is a brand agency where creatives, strategists, project managers and finance work together. Its AI work runs through Langdock, a platform that bundles several AI vendors. An internal team develops and maintains the AI workflows and tracks new possibilities. For project managers, almost everything AI-related can be solved inside Langdock alone.

## The Decision

I walked the five questions:

1. **Competitive advantage?** It depends. AI is becoming part of the core business, but Langdock is still a supporting tool. Mutabor's edge is its project management knowledge.
2. **Commodity?** Yes. Langdock combines the relevant vendors and stays up to date.
3. **Capabilities no single vendor offers?** Company-wide yes, for project managers no.
4. **Needs changing within 12 months?** No, the workflow stays the same. Only the possibilities grow.
5. **Engineering capacity?** Yes, a specialised internal team.

**Verdict: Buy**, with Connect as an option the internal team keeps open.

## The Lock-In Scorecard

| Dimension | Score | Evidence |
|---|---:|---|
| Data portability | 1 | Exporting data is possible for the most part. However, I found no confirmed self-service export of agent configurations, and deleting an agent deletes its files immediately. |
| API stability | 1 | The API is versioned and the old Assistants API came with a migration guide, but I found no published deprecation window. |
| Pricing control | 1.5 | The seat prices are public, but I found no price-notice period. In one specific plan, workflow AI usage is billed per token on top. |
| Feature dependency | 1 | Because Langdock bundles several models, a single model can be swapped without touching the workflow. The platform itself cannot. |
| Migration cost | 1 | I would say the migration costs are moderate and would take 1–3 months, as feature dependency is low and Mutabor has its own in-house AI department. |
| **Total** | **5.5/15** | **Moderate risk** |

Overall, Mutabor is only partially locked in. The in-house AI team and the low feature dependency keep the exit manageable.

## The Migration Path

If Langdock raised prices tomorrow, the platform would be the single point of failure, not the models. Switching takes anywhere from a few days to a few months, but the cost sits in performance: every workflow has to be re-tested before staff trust it. In my own Week 6 test, Gemini and Qwen both handled the ambiguous German feedback correctly, yet Qwen added tasks nobody asked for.

The 90-day answer: keep prompts and test sets versioned outside Langdock, get the price-notice period in writing, and run the test set on a second provider once a quarter. Open standards such as MCP keep tool connections portable.

## The Insight

Moderate lock-in is acceptable when the capability is a commodity and a team can maintain the exit. That is Mutabor's position. GhentAccounting, with zero engineers, reaches the same "Buy" but must buy its exit capacity externally. OmniRetail, at 13/15, shows what happens without any plan.

In creative agencies, lock-in sits less in the model than in workflows and prompts. Langdock lowers model lock-in but concentrates it: the abstraction layer is itself a vendor.

## The Question

How can an agency enjoy a bundled AI platform while making sure its prompts and test sets can leave with it?
