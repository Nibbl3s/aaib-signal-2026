---
week: 4
title: "The Fake Analyst: What's My Fact-Checker Actually Worth?"
author: "Kirill Kyryllov"
beat: "The Fake Analyst: When AI-Generated Business Reports Get It Wrong"
skill: "Value quantification"
date: 2026-10-18
---

My beat has spent three weeks establishing that AI confidently gets financial claims wrong. This
week I had to answer a harder question: is building a tool to catch those errors actually worth
anything in euros, or is it just a nice idea with no business case behind it?

## The Candidate

My Build is a claim-risk classifier, a prompt that flags a factual claim in an AI-generated
business report as "Needs verification" or "Safe to trust." It sits in the value chain exactly
where my beat lives: the moment before an AI-drafted report reaches a human sign-off and then a
client. For this exercise I quantified it against a realistic scenario: Vandermeer & Partners, a
mid-sized Belgian consulting firm where consultants currently verify AI-assisted claims by hand.

## The Numbers

**Time saved** is the most defensible number here, because the arithmetic is simple, but its
inputs are still estimates. I assumed 5 minutes of manual verification per claim and roughly 1
minute with the tool (reading a flag instead of triaging from scratch); I haven't timed either.
At 300 claims/month and €39/hr loaded cost, the current process costs €11,700/year, and with the
tool it drops to €2,340/year. **Time saved: €9,360/year.**

**Revenue increase** is €0. I was tempted to stretch the framework to find a number here, but
this tool doesn't close deals faster or win more business. Inflating a benefit line to make a
case look bigger is exactly what the vendor proposals in Week 3 did, and exactly what I learned
to distrust.

**Cost reduction** comes from incident avoidance. I estimate that a single incorrect claim
reaching a client costs about €1,200 to correct (correction time, client communication,
reputational handling). If manual review alone misses roughly 4 significant claims a year and
the tool cuts that to about 1 (based on my measured 13.3% miss rate), that's **€3,600/year** in
avoided correction cost.

**Risk mitigation** is the tail-risk number: a 5% annual probability of a serious client-facing
error, a €50,000 cost if it happens, and a 40% reduction factor from the tool catching the most
common failure pattern (confident, specific, unverified numbers), gives an expected value of
**€1,000/year**. Small on paper, but this is insurance money, not a number anyone expects to use
most years.

**Gross benefit: €13,960/year.** Subtracting AI cost (€2,502 in Year 1, almost all of it
implementation, since token cost at this volume is a trivial €2/year) and the tool's own error
correction cost (€1,200/year, since it isn't perfect either), **net benefit is €10,258 in Year 1**,
with a payback period of roughly 2.3 months.

## The Pressure Test

The weakest lines are cost reduction and risk mitigation, which rest on estimated incident rates,
not Vandermeer's actual error history. If those two estimates are 50% too optimistic, net benefit
falls to roughly €7,958/year. If the time-saved figure is 50% too optimistic (for example, review
with the tool takes 3 minutes per claim instead of 1), net benefit still holds at around
€5,578/year. The case survives a bad estimate on any single line, which is the point of running
the pressure test rather than just presenting the best-case number.

## The Insight

Building the benefit case was harder than I expected for a tool that's about catching errors
rather than making money. It forced me to admit that only one input in this whole case is
actually measured: my tool's 86.7% accuracy on 15 claims, itself an upper bound because I wrote
the test set. Everything else (review times, incident rates, the €1,200 correction cost) is an
estimate. The real takeaway for my beat: a tool that prevents AI-generated mistakes has value,
but proving that value rigorously requires the same discipline as catching the mistakes in the
first place.