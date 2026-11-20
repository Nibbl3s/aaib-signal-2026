---
week: 7
title: "The Lock-In Is Not the API, It Is the Test Set"
author: "Guillaume Vandenweghe"
beat: "What AI really costs in the insurance sector, with a focus on claims handling and customer service"
skill: "Lock-in detection"
date: 2026-11-20
---

In insurance, the dangerous lock-in is not the contract. It is the day a vendor swaps the model under your feet and complaints start landing in the wrong queue. This week I scored my own Build for lock-in and ran it on a model I own.

## The use case

A mid-sized Belgian non-life insurer receives 20,000 claims emails a month (est.) in Dutch, French and English. My Build sorts each one into six queues plus its language. The failure that matters is a hidden complaint: a real complaint filed as a normal claim email, at about €96.60 each (est.). Today it runs on Google's Gemini 3.1 Flash-Lite through the API, for €2.82 a month in tokens.

## The decision: connect

Competitive advantage? No. Commodity? The model is: I have run the same prompt on four models. The insurer's part is not: the six queues, the complaint rule and a test set with answers written in advance. Will needs change within 12 months? Yes. Google shipped three Flash-Lite generations between July 2025 and July 2026. Engineering capacity? An insurer this size has IT, not an ML team. So: buy the model, own a thin layer around it, meaning the prompt, the test set and a pass/fail gate. That is Connect.

## The scorecard

| Dimension | Score | Evidence |
|---|:-:|---|
| Data portability | 0 | Prompt, test set, log and raw responses sit in my own repo |
| API stability | 2 | Earliest shutdown 7 May 2027; on 8 Oct 2026 Google automatically routed `gemini-3.7-flash` calls to a newer model |
| Pricing control | 2 | List price, 30 days' notice; the named successor costs 24% more per run on my tokens |
| Feature dependency | 1 | Text in, two lines out; an OpenAI-compatible endpoint exists |
| Migration cost | 1 | About 3 weeks and €3,300 at insurer scale (est.) |

Total: 6 of 15, moderate. The riskiest row is API stability: a re-route keeps the name and changes the model, so a measured error rate can change without any code changing.

## The migration path

If Google tripled its price, the bill would go from €2.82 to €8.46 a month. Nobody leaves for that. So I tested the exit itself: same prompt, same 12 emails, each run twice, on Llama 3.2 (3B) on a laptop with the wifi off. The API fee was €0, an email took half a second, and no email left the machine. But it got 10 of 24 runs right, against 18 on Gemini. It hid no complaints, yet it called 9 of 14 normal-email runs a complaint and mixed up Dutch and English. So owning the model is not yet a real exit: it fails my gate. The thin wrapper is one function that calls any OpenAI-compatible endpoint. Gemini, Groq and Ollama all offer one.

## The insight

In my beat, lock-in has moved from the contract to the evaluation. Open standards make it cheap to switch the API. They tell you nothing about whether the new model hides complaints. Each model I tested fails in its own direction: Claude hides complaints, Gemini over-flags them, Groq hesitates, Llama sees complaints everywhere. An insurer that owns its test set can leave any vendor in three weeks. One that does not is locked in, even with an open API.

## The question

Should a regulator-facing process like complaint handling be allowed to run on a model the vendor can swap without notice?

*AI note: I ran the API calls and the local model myself with scripts, and used Claude to help with the research, the calculations and the structure of this post. The scores, choices and conclusions are mine.*
