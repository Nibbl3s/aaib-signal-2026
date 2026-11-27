---
week: 8
title: "Kojima Productions: Let AI Draft the Handoff, Not Set the Schedule"
author: "Daniel Stefirta"
beat: "AI in Game Production"
skill: "Integration design"
date: 2026-11-27
---

# Kojima Productions: Let AI Draft the Handoff, Not Set the Schedule

**Daniel Stefirta · Signal 8 · AI in Game Production**

A production brief can be wrong without looking wrong. If a summary quietly turns “animation needs a first pass” into “animation blocks the milestone,” the studio can redirect people based on a dependency nobody agreed to. The design question is who can turn a draft into a decision.

## The company

Kojima Productions is an independent game developer in Tokyo and the studio behind *Death Stranding 2: On the Beach*.[^1] Kojima has described 150 people as his preferred upper limit for a project team, not a verified studio headcount.[^2] In the studio’s own interview, a project manager describes colleagues following daily progress and supporting task management across teams.[^3] I would pilot one handoff between gameplay engineering and animation on a single project. The goal is to flag dependencies before a producer’s stand-up, not to generate assets or rank people. The **US$10,000 first-year cap** and the stack below are my proposal, not the studio’s budget or tools.

## The architecture

1. **Data.** In a proposed Jira Cloud setup, a read-only connector pulls issue IDs, statuses, existing dependency links and producer-approved notes from one project.[^4] It sends only those fields, not attachments, scripts, personnel records or unapproved material. The tracker remains the source of truth.
2. **AI.** Claude Haiku 4.5 via Amazon Bedrock drafts a brief with a claim, issue ID and exact supporting quote for each proposed dependency. If the notes do not establish the link, the draft says “needs confirmation.” The budget assumes 2,000 input and 300 output tokens per brief, or **US$0.0035** at Anthropic’s published rates, not an AWS quote.[^5]
3. **Integration.** A scheduled Python worker assembles inputs before stand-up. It reuses the exact-quote and allowed-value checks from my Classifier, made stricter here: reject invalid JSON, unknown issue IDs and quotes missing from the cited issue. An exact quote can still support the wrong conclusion, so passing validation never means approval. If the model fails, a rules-only brief lists Jira’s existing links and unresolved issues. If Jira is unavailable, flag missing source data instead of presenting yesterday’s brief as current.
4. **Interface.** The producer sees the draft beside its source tickets. The gameplay or animation lead confirms disputed links. Only the producer signs off and shares the brief; neither the model nor the worker can edit the schedule.
5. **Governance.** Keep approved briefs and decision metadata in an encrypted studio-controlled S3 bucket. Restrict drafts to pilot reviewers and delete rejected drafts after 30 days. Before sending internal notes, IT verifies the approved Bedrock region and retention settings.[^6] No external sharing is enabled.

## The defense

**Why not Jira’s built-in AI?** If a saved filter plus a producer gets the same verified brief faster, use that. I would buy inference only if it saves time reading approved prose without increasing missed blockers. I would not assume a bundled assistant meets our field restrictions, citation checks or sign-off requirements without testing it.

**What locks us in?** Jira issue links and permissions need remapping if the tracker changes. A model swap also needs acceptance tests: in my [Checkpoint 2 run](https://github.com/Nibbl3s/aaib-signal-2026/commit/f08997d25496f8b656f754e85e6bfaaf85ad3d61), both prompts scored **22/40**, and parser-invalid replies rose from two to four. That was classification, not dependency extraction. It justifies a validation gate, not a predicted pilot error rate.

**What happens at scale?** My ten-case review timing self-report gives a rough planning proxy of **37.3 seconds per reply**, including correction. At 20 briefs per day over 220 workdays and US$50/hour, that implies about **US$2,279 in review** and **US$15 in model tokens** per year. With US$4,500 implementation, US$600 infrastructure and US$1,000 contingency allowances, year one is about **US$8,395**. At 40 briefs per day it reaches **US$10,690**. Review time, not token price, breaks the cap.

## The question

Can reviewers spot a plausible but unsupported dependency faster than they can write the brief themselves? I would compare the pilot against the rules-only brief on the same tickets, and drop the AI layer if it misses more real blockers or fails to save net reviewer time.

*AI assistance: source research, arithmetic checks and drafting. The architecture and budgets are proposals; Kojima Productions did not pilot or endorse them.*

[^1]: Kojima Productions. (n.d.). [Company](https://www.kojimaproductions.jp/en/company) and [Death Stranding 2: On the Beach](https://www.kojimaproductions.jp/en/death-stranding-2).
[^2]: GamesRadar+. (2025). [Kojima on keeping internal project teams to 150 people](https://www.gamesradar.com/games/action/hideo-kojima-doesnt-want-more-than-150-people-working-on-games-like-death-stranding-2-thanks-to-a-sheep-herding-tip-from-mad-max-director-george-miller/).
[^3]: Kojima Productions. (n.d.). [Staff interview 05: A bridge connecting the team](https://www.kojimaproductions.jp/en/Staff-interview-05).
[^4]: Atlassian. (n.d.). [Jira Cloud REST API v3: Issues](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/).
[^5]: Anthropic. (n.d.). [Claude Haiku 4.5](https://platform.claude.com/docs/en/models/haiku-4-5/overview). Published rates checked November 27, 2026: US$1 per million input tokens and US$5 per million output tokens.
[^6]: Amazon Web Services. (n.d.). [Data retention in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html).
