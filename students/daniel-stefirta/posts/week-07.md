---
week: 7
title: "A Portable Prompt Is Not a Portable Game-Production Decision"
author: "Daniel Stefirta"
beat: "AI in Game Production"
skill: "Lock-in detection"
date: 2026-11-18
---

# A Portable Prompt Is Not a Portable Game-Production Decision

Switching an AI provider looks easy when the output is three JSON fields. My game-production Classifier shows why that is misleading: I can move the prompt without preserving usable decisions.

## The use case and decision

For a realistic small game studio, the Classifier screens production tasks by pipeline layer, AI exposure and supporting words from the task. It is decision support, not permission to replace artists or automate staffing decisions.

My recommendation is **Buy the inference capability behind a thin, replaceable adapter**, while retaining the task records, validation and human sign-off. Here are the five questions:

1. **Competitive advantage?** Generic task classification is not the studio's creative advantage; production judgement remains internal.
2. **Commoditised problem?** Hosted text classification is a service category, but acceptable performance still needs testing.
3. **Multiple capabilities?** This bounded workflow needs one model, not a multi-tool platform.
4. **Changing needs?** Categories may evolve, but no measured requirement justifies orchestration infrastructure yet.
5. **Engineering capacity?** Maintaining a small adapter is materially narrower than operating model hosting. This recommendation assumes limited developer support, not an AI operations team.

## Lock-in scorecard

I score the current Classifier stack **9/15: high risk**. These are judgements about my implementation, not a vendor-wide rating.

| Dimension | Score | Evidence |
|---|:---:|---|
| Data portability | 1 | Prompt and task/log snapshot exist in text and JSON; full independent restoration remains untested. |
| API stability | 3 | Gateway/client compatibility required a separate measurement client. Runable permits service changes without a fixed deprecation window.[^1] |
| Pricing control | 2 | Runable promises “reasonable notice,” not a numerical period or increase cap.[^1] |
| Feature dependency | 2 | No proprietary retrieval or fine-tuning, but the unchanged prompt failed the tested local acceptance gate. |
| Migration cost | 1 | Estimated 32–56 hours for adapter work, export/restore checks, evaluation, rollback and handover. Full hosting exit is excluded. |

The strongest contractual weakness is gateway continuity. AWS's longer model-lifecycle policy cannot guarantee that intermediary interface.[^2]

## The measured exit gap

I ran `llama3.2:1b` locally on my ThinkPad T470s: the same 15 inputs, twice. The existing parser accepted **0/30 exact label matches**, versus **14/30, 46.7%**, in the historical cloud baseline. Two local responses contained correct labels but malformed JSON. Categorical answers changed in 12/15 pairs. The cloud mainly disagreed with the judgement key; local responses also broke labels, format and source grounding.

This is a configuration comparison, not proof that model size caused the gap: dates differ, and local default sampling differs from cloud temperature zero. Local inference incurred no external API fee; electricity, hardware and operations were not measured.

## Migration and the next 90 days

At an assumed €50/hour, the inference-path exit allowance is **€1,600–€2,800**. The tested local replacement loses 46.7 percentage points on parser-accepted matches. A standard endpoint does not erase that performance cost.

First week: preserve records and verify account terms. First month: test an independent adapter with comparable settings and restore exported records. By day 90: switch only after acceptance and rollback tests pass. Otherwise keep human review and the dependency explicit.

The studio needs an evidenced exit, not ownership at any quality. I performed the local runs; AI assistance prepared automation, retrieved terms, checked scoring and drafted this post.

[^1]: Runable, *Terms of Service*, sections 2 and 9, accessed 18 November 2026. https://runable.com/terms-of-service
[^2]: AWS, *Model lifecycle (Legacy)*, accessed 18 November 2026. https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle-legacy.html