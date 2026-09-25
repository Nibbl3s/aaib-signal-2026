---
week: 1
title: "The €0.0000356 Email: What One AI Answer Actually Costs"
author: "Lena Devos"
beat: "AI in European Retail Logistics"
skill: "Cost literacy"
date: 2026-09-25
---

Our warehouse software answered maybe 3,000 customer emails a month. Nobody ever asked what
one answer cost, because the invoice just said "AI platform" and the number had a comma in it.

This week I learned to read the actual unit: tokens. Not words — tokens, roughly ¾ of an
English word, and the difference matters more the further you get from English.

## The numbers

A short customer email is about 200 tokens in and 400 out. At a budget-tier price
($0.20 per 1M input, $1.20 per 1M output — the numbers in the course pricing reference):

- Input: 200 ÷ 1,000,000 × $0.20 = $0.00004
- Output: 400 ÷ 1,000,000 × $1.20 = $0.00048
- **One email answered: about $0.0005.**

## The insight

Three thousand emails is $1.50/month of tokens. The AI bill was never the problem — which
means the €4,000/month "AI platform" line was buying something else, and nobody could tell me
what. That is the actual finding: **the token cost is trivial; the wrapper is where the money
goes.** Week 3 is about reading vendor claims, and I am now suspicious of every line on that
invoice.

## What I want to learn next

Whether the multilingual tax (French/Dutch costing more tokens than English) shows up in real
Belgian retail support queues — and whether anyone buying these systems ever asks.

*One number I want before Week 2: what the warehouse paid per answered email, all-in. If anyone has a figure from their own part-time job, bring it to class.*
