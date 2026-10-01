---
week: 2
title: "The Quote Price at O&D 3D Should Come From a Spreadsheet, Not an AI: Where the 'No AI' Test Says Stop"
author: "Max"
beat: "AI Automation Cost Literacy at O&D Impression 3D"
skill: "Capability skepticism"
date: 2026-10-02
---

Last week I argued that AI could handle O&D 3D's customer requests for under a dollar a month. This week I'm asking the opposite question: which part of that workflow should AI never touch?

## The "no AI" test

A quotation is really two jobs. The first is reading the customer's message, which is messy language: missing details, mixed units, vague deadlines. AI is useful there. The second is computing the price. Once the slicer gives me material weight and print time, the price follows a rule we already know.

I ran that second step through the "no AI" framework:

- **Is the logic known and stable?** Yes.
- **Must the same input always give the same output?** Yes.
- **Is an error expensive?** Yes. A price that is too low loses money on a job the customer has already accepted, and one that is too high loses the customer.
- **Is the input ambiguous?** No. By this point it is just numbers.

Four answers, all pointing away from AI.

```
Price = (weight_g × material_€/g) + (print_h × machine_€/h)
        + post-processing + setup fee
Quote = Price × (1 + margin)

→ one formula · zero tokens · same answer every time
```

## Why a spreadsheet wins

**Reliability.** An LLM can slip on arithmetic, rounding or a unit (grams vs. kilograms, minutes vs. hours). A formula cannot.

**Auditability.** If a customer disputes a quote, I can show every line of the calculation. With an LLM, I can only show a prompt and an answer that may not reproduce.

**Cost, and it isn't the tokens.** Last week's math showed tokens are almost free, at under a dollar a month. The real cost is the human check needed to trust each AI-generated price. That check eats the saving.

**Maintenance.** When filament prices or machine rates change, I edit one cell. With a prompt, I would have to retest everything.

## The insight

Last week I ended by asking what it would cost to "connect AI to O&D 3D's pricing rules." This week's answer: don't put the pricing rules inside the AI at all. Split the workflow:

- **AI** reads the request and extracts material, quantity, dimensions and deadline.
- **The slicer** gives weight and print time.
- **A spreadsheet** calculates the price.
- **A human** approves unusual jobs.

That cuts the integration cost, because the AI only has to hand over clean fields. It also changes how to read "we automated quoting with AI": often the AI covers only the email-reading step, and the rest is ordinary software. Counting the whole workflow as AI makes the business case look better than it is and hides where the risk sits.

## What would change my mind

If O&D received quote requests with no usable file, only sketches or photos, estimating weight and print time would become a fuzzy problem, and AI could earn a place in the pricing step.

## What I want to learn next

> If the price comes from a formula, which step in O&D 3D's workflow is the hardest remaining one that genuinely needs AI, and can I measure how well it performs?

*One thing I want before Week 3: a test set of real customer requests with the expected extraction written down first, so I can see where AI actually succeeds at the one job it is suited for.*
