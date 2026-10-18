---
week: 4
title: "The Fake Analyst: What's My Fact-Checker Actually Worth?"
author: "Kirill Kyryllov"
beat: "The Fake Analyst: When AI-Generated Business Reports Get It Wrong"
skill: "Value quantification"
date: 2026-10-16
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

**Time saved** is the strongest number here, and the only one built on something I actually
measured rather than estimated. At 300 claims/month and 5 minutes of manual verification each
(25 hrs/month, €39/hr loaded cost), the current process costs €11,700/year. With the tool
cutting review to roughly 1 minute per claim (reading a flag instead of triaging from scratch),
that drops to €2,340/year. **Time saved: €9,360/year.**

**Revenue increase** is €0. I was tempted to stretch the framework to find a number here, the
way GhentBakery's vendor did in Week 3, but this tool doesn't close deals faster or win more
business. Forcing a revenue line into a risk-reduction tool is exactly the kind of move my own
Week 3 skills taught me to distrust.

**Cost reduction** comes from incident avoidance: a documented case from my Week 1 research
showed a broken AI-generated financial claim costing €1,200-3,600 to fix after discovery. If
manual review alone misses roughly 4 significant claims a year and the tool cuts that to 1 (based
on my measured 13.3% miss rate), that's **€3,600/year** in avoided correction cost.

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

The honest weak point isn't the AI cost line, it's the cost-reduction and risk-mitigation
figures, which rest on estimated incident rates, not Vandermeer's actual error history. If those
two estimates are 50% too optimistic, net benefit falls to roughly €7,980/year. If even the
time-saved figure (the one I'm most confident in) is 50% too optimistic, net benefit still holds
at around €5,578/year. The case survives a bad estimate on any single line, which is the point
of running the pressure test rather than just presenting the best-case number.

## The Insight

Building the benefit case was harder than I expected for a tool that's about catching errors
rather than making money. It forced me to admit that two of my four benefit categories are built
on judgment calls, not measurements, exactly the gap my own test-set honesty note already
flagged. The real takeaway for my beat: a tool that prevents AI-generated mistakes has value, but
proving that value rigorously requires the same discipline as catching the mistakes in the first
place.