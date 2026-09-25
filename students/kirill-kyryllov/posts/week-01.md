---
week: 1
title: "57% Wrong, One Number Real: What an AI Tax Error Actually Costs"
author: "Kirill Kyryllov"
beat: "The Fake Analyst: When AI-Generated Business Reports Get It Wrong"
skill: "Cost literacy"
date: 2026-09-25
---

The Financial Times reported this week on research by technology firm Saturn, which put an
actual price tag on AI getting things wrong. Saturn ran over 10,000 financial questions
through 18 AI models, including ChatGPT, Claude, Gemini, Copilot and Grok. On average, the
models gave the wrong answer to money questions 57% of the time. On questions with more than
one calculation, that jumped to 88%, and some models were wrong 99% of the time on the harder
ones. ([Financial Times, Sept 19 2026](https://www.ft.com/content/c0cd359d-df84-4208-a789-ffa864b43666)
— Aliya Shibli, "AI chatbots give wrong answers to financial queries 'most of the time'")

One case stood out: Claude Haiku 4.5, a free model, got a pension tax rule wrong in a way that
could have left a saver facing a **£17,500 charge from HMRC**. Another model invented a rule
about student loans, telling a graduate they could stop repayments simply by moving abroad.

## The numbers

Here's what made this stick with me. The AI answer itself is free or close to it, a few cents
per query at most. But the £17,500 charge isn't hypothetical spending, it's what one wrong
answer, acted on, actually costs a single person.

- Cost to ask the question: effectively €0
- Cost of the wrong answer, if acted on: £17,500 (one pension tax case)
- Best-performing model tested (Claude Opus 5, "reasoning" mode): still wrong **39%** of the time

Even the best model in this test got two out of five financial questions wrong. That's not an
edge case, that's the baseline.

## The insight

This is exactly the gap I wanted to look at with this beat: AI reports and answers don't cost
much to produce, which is precisely why nobody stops to check them. The £17,500 isn't an AI
cost, it's a **human decision cost** that shows up only after someone trusted the answer. The
FCA already found that one in five UK adults are open to letting AI make financial decisions
for them, and AI financial advice is currently unregulated, meaning none of the protections
you'd get from a human adviser apply if it goes wrong.

## What I want to learn next

Whether this failure rate (roughly 1 in 2 wrong on average) holds up in business contexts
beyond personal finance, like marketing reports or HR analytics, or whether financial/tax
questions are uniquely hard for these models because the rules change so often. If anyone
has run their own numbers through an AI model and had it get something wrong, I want to hear
what it actually cost to fix.