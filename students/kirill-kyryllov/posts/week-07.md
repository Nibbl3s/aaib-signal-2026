---
week: 7
title: "My Fact-Checker Can Leave Google in One Line of Code. Its Accuracy Can't"
author: "Kirill Kyryllov"
beat: "The Fake Analyst: When AI-Generated Business Reports Get It Wrong"
skill: "Lock-in detection"
date: 2026-11-20
---

My beat is about AI claims that sound right and aren't. This week I asked a different
question about my own fact-checker: if Google changed the deal tomorrow, could I leave? The
code says yes. The results say not really.

## The Use Case

Vandermeer & Partners, my capstone scenario, is a composite Ghent accounting firm of about
40 consultants that drafts client reports with AI help. Before sign-off, each factual claim
goes through my claim-risk classifier, one prompt that labels it "Needs verification" or
"Safe to trust", so consultants check the three risky claims in a report instead of all
fifteen. That is about 300 claims a month on Google's `gemini-3.1-flash-lite`, where the tool
scored 14 of 15 on my test set at €0.40 a year.

## The Decision

AI is not Vandermeer's competitive advantage; clients pay for judgement (Q1: no). Hallucination
checkers exist, but they mostly verify text against source documents rather than decide which
claims need a human (Q2: not quite). It is one capability, not five (Q3: no). But the model
underneath will change within a year whether the firm wants it or not (Q4: yes). That points
to a light Connect: own the thin parts, meaning the prompt, the test set and the one line that
names the model, and rent the model behind them. Building a model makes no sense with zero
engineers; buying a closed tool would hide the one number they need: how often it is wrong.

## The Lock-In Scorecard

| Dimension | Score | Evidence |
|---|:---:|---|
| Data portability | 0 | Stateless calls; prompt, test set and results live in my own repo |
| API stability | 2 | No fixed shutdown notice; old model names silently re-routed |
| Pricing control | 2 | List price, 30 days' notice "unless otherwise specified" |
| Feature dependency | 0 | Plain text prompt; switching took one URL |
| Migration cost | 1 | Hours of work, but a large quality drop (below) |
| **Total** | **5/15** | **Moderate** |

The highest risk is API stability. Google's deprecation page lists only the earliest possible
shutdown dates, and it already re-routes old names: requests to `gemini-3.5-flash` now go to
`gemini-3.6-flash`, and from 1 December `gemini-2.5-flash` moves to another model, billed at
its rate. For a tool whose job is to be consistent, that is the trap: nothing breaks, the
answers just change.

## The Migration Path

I tested the exit. Changing one URL pointed the same script at Llama 3.2 running on my own
laptop. The switch took minutes; the quality did not survive: 7 of 15 correct, four claims
answered differently on two runs, including the CapEx claim, and two risky citations labelled
safe with a confident reason. A realistic exit is a comparable cloud model behind the same
wrapper: roughly 4–8 hours of prompt work and one hour to re-run the test set. The test set is
what makes the switch safe, because it says whether the new model is good enough before a
client does.

## The Insight

Lock-in in my beat isn't about price: tripling Google's price would cost Vandermeer under a
euro a year. The dependency is quality, and the danger is not noticing when it changed. A firm
that keeps its own test set and logs the model ID on every run can leave in a day. A firm that
doesn't won't even know it was moved.