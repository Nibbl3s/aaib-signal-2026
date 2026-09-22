
```markdown
---
week: 1
title: "The €0.0023 Email — and the 5x Mistake That Got Me There"
author: "Brecht Masschaele"
beat: "AI in International Management"
skill: "Cost literacy"
date: 2026-09-25
---

## Hook

Our coordinator, backoffice and coaches answer roughly 3,000 student emails a month — no invoice, no AI involved, nobody's ever priced it. If we're going to automate any of that to free up time for the conversations that actually need a human, the first question isn't "should we?" It's "what would it even cost?" 📧

## The Numbers

Fortunately, our programmes run in English — one advantage international programmes have when it comes to AI: no translation layer, no token inflation from non-English text (a token runs roughly ¾ of an English word, and that ratio gets worse the further a language sits from English). So Dunglish is fine. AI will clean it up anyway.

**The model:** Claude Haiku 4.5 — the cheapest model in the current lineup, and the right one for this job. A student email reply is a short, structured, low-stakes task: no deep reasoning, no multi-step logic, just "read the question, answer it correctly, in the right tone." That's exactly what a budget-tier model is built for. Paying Sonnet or Opus prices for this would be buying reasoning power the task doesn't need.

**The use case:** a short student email — a deadline question, a rescheduling request, a "where do I find X" — answered by AI instead of a person.

**Token estimate:** 500 tokens in (the student's question, plus the system prompt and tone instructions the model needs every time — not just the raw email) and 400 tokens out (a complete, correctly-toned reply). I bumped the input estimate up from my first draft: a bare email is maybe 150–200 tokens, but the instructions telling the model *how* to answer run every single time too, and that overhead adds up.

**Volume:** 3,000 emails/month.

**Pricing:** Claude Haiku 4.5 — $1.00/1M input tokens, $5.00/1M output tokens (Anthropic pricing page, checked 22 September 2026).

* Input: 3,000 × 500 = 1,500,000 tokens → 1.5 × $1.00 = **$1.50/month**
* Output: 3,000 × 400 = 1,200,000 tokens → 1.2 × $5.00 = **$6.00/month**
* Token cost: **$7.50/month** → €6.90/month at $1 = €0.92, or **€82.80/year**
* Per email: $7.50 ÷ 3,000 = **$0.0025**, or **€0.0023**

## The Insight

My first draft used a "budget tier" number I'd half-remembered rather than looked up — $0.20/$1.20 per million tokens. It doesn't exist. Real Haiku pricing is five times higher on input and output alike, and once I also corrected my token estimate upward, the total moved from $1.56/month to $7.50/month — a 5x swing from two mistakes that both happened to point the same direction. That's the actual week 1 lesson: not "AI is cheap," but that a cost estimate is only as good as the two numbers under it, and neither one is obvious enough to eyeball. I'd have published a wrong number with total confidence if nobody had asked me to check it.

Even corrected, €82.80/year for 3,000 emails is still trivial next to a €4,000/month "AI platform" line. The AI bill was never the risk — the wrapper is, and that's where week 3's vendor-claims lesson is going to land.

## The Question

Before I automate anything: is this a job for a €4,000/month AI platform, or for Power Automate with a Haiku-tier API call bolted on where it's actually needed — and how would I tell the difference before signing anything?

---

Sources: [Claude Platform pricing](https://platform.claude.com/docs/en/about-claude/pricing), checked 22 September 2026.
```
