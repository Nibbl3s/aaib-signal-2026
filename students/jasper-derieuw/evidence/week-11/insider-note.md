---
week: 11
title: "Evidence - Talking to Someone Inside the Sector: What I Had Wrong (6 ECTS)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cross-domain transfer"
date: 2026-11-16
---

# Inside the Factory: What I Had Wrong, and Which of My Assumptions Were Local

## 1. Whom I asked, and what

| | |
|---|---|
| Who | An IT professional in production at a Belgian manufacturing company (anonymised; the same person who answered my Week 9 security question) |
| When and how | Email in Dutch, sent Monday 16 November 2026; reply the same day |
| What I showed | The course's factory scenario in one sentence; my [sector lab](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-11/sector-lab.md) was committed before the reply, with my guesses about what an insider would correct |

The five questions (my translation): (1) Is a production network really air-gapped, and how does new software or an AI model reach the line? (2) What is most expensive in camera inspection: the cameras, the software, or labelling and maintenance? (3) When a camera rejects a part, is it scrapped straight away or does a person look first? (4) Do workers appear in the image, and how is that handled (privacy, collective agreement no. 68)? (5) What would I, an outsider coming from documents, get wrong?

## 2. What came back (original Dutch, my translation)

1. "Een productienetwerk is meestal strikt gescheiden, maar niet altijd volledig air gapped. Er zijn vaak gecontroleerde verbindingen naar bijvoorbeeld MES, ERP of een update server." (A production network is usually strictly separated, but not always fully air-gapped. There are often controlled connections to, for example, the MES, the ERP or an update server.) New software or a model "wordt eerst getest en daarna pas uitgerold" (is tested first and only then rolled out).
2. "Het duurste is vaak niet de camera zelf, maar het labelen van foto's, het trainen en onderhouden van het model en het opvolgen van nieuwe fouttypes." (The most expensive part is often not the camera itself, but labelling photos, training and maintaining the model, and following up new defect types.) Camera and lighting are mostly one-off costs.
3. "Een afgekeurd onderdeel gaat meestal niet meteen weg. Het komt vaak in een controlezone terecht waar een operator of quality medewerker het nakijkt." (A rejected part usually does not leave straight away. It often goes to a control zone where an operator or quality employee checks it.) Automatic rejection is mainly for clear or safety-critical defects.
4. Workers can appear in view, especially with cameras above a workstation or conveyor; this is limited by placement, masking or a narrow field of view, and "duidelijke communicatie naar de medewerkers is nodig" (clear communication to the workers is needed).
5. "AI camera inspectie [is] geen plug and play oplossing … De echte uitdaging zit in datakwaliteit, verlichting, positionering en herkalibratie." (AI camera inspection is not a plug-and-play solution … The real challenge is data quality, lighting, positioning and recalibration.) "Hertraining en opvolging [blijven] nodig" (retraining and follow-up remain necessary), and "de menselijke controle [blijft] belangrijk als vangnet" (human control remains important as a safety net).

## 3. What I had wrong, and how I got there

| What I wrote in the lab | What the insider said | How I got there |
|---|---|---|
| "No cloud API fits: the network is air-gapped" (skill 1), treated as a fact | Separated, with **controlled connections** and a **tested rollout**. The question is not "can anything get in" but "what passes the gate, and after which test" | I took the brief's word "air-gapped" as absolute. In my beat a network boundary never came up: I send data to an API under a contract, so I had no instinct for degrees of separation |
| Cost is "fixed (cameras, edge hardware, labelling)", with €200,000 spread over year 1 (skill 1) | Cameras and lighting are one-off; **labelling, retraining and following new defect types never stop** | My beat taught me that the model provider maintains the model: Anthropic retrains, I re-test a prompt. I carried "someone else maintains the model" into a sector where the factory owns the model |
| Capability limits: rare defects, bad labels, lighting changes (skill 2) | Right on data quality, but I underweighted **positioning and recalibration**: physical upkeep, not just data | My inputs are documents. A PDF does not drift out of focus or lose its lighting, so physical upkeep was not on my list |
| My value calculation used the brief's €40 scrap per false reject: break-even at **0.28%** false rejects (skill 4) | Doubtful parts go to a **control zone**; only clear or safety-critical defects are rejected automatically | I used the brief's number although my own lab had already doubted it. A false reject that costs about 30 seconds of a quality employee (est. €0.38 at €45/hr) moves the break-even from 0.28% to about **30%** (€340,000 ÷ (3.0M × €0.38), est.). The real risk is entirely on the side of misses |

**What I had right** (written down before the reply): the expensive part is labelling, not the model; doubtful parts should go to a person; workers in view would trigger privacy rules and collective agreement no. 68.

## 4. Comparative note: my beat and the factory

| Assumption I brought from my beat | My beat (sanctions screening at an importer) | The factory (visual inspection) | Local or universal? |
|---|---|---|---|
| The provider maintains the model; I maintain a prompt and a test set | True: a cloud model, re-tested monthly (Week 8) | False: the factory owns the model, retraining never stops | **Local** to cloud language models |
| Inputs arrive clean and stay clean | Mostly: digital invoices (scans aside) | No: lighting, position and calibration change the input | **Local** to document work |
| The unit cost is variable, per call | €0.002 per check | Near zero per part; the cost is upkeep | **Local** |
| A change must be tested before it reaches production | My rule: 0 of 10 attacks must work before any model switch (Week 9) | "Eerst getest en daarna pas uitgerold" | **Universal** |
| A person is the safety net for doubtful cases | Every invoice reaches H1 or H2 (Week 8) | Control zone; "menselijke controle … als vangnet" | **Universal** |
| Privacy rules are triggered by the data | Names of directors and owners on invoices (GDPR) | Workers in the camera image (GDPR plus collective agreement no. 68) | **Universal question, local trigger** |
| Errors are asymmetric, and the design follows the expensive one | A missed sanctions match vs a 15-minute recheck | A shipped defect vs about 30 seconds in the control zone | **Universal**, with a much steeper asymmetry in the factory |

**What it changed.** Three of my seven assumptions were local, and all three come from the same root: in my beat someone else owns the model and the input is a document. In a factory the company owns both the model and the physical conditions that feed it, so the running cost sits in upkeep that my framework did not ask about. I add one question to my framework for any new sector: **who maintains the model and its inputs, and what does that cost each year?** It also comes back to my own capstone: the monthly re-test in my governance budget (€2,160 a year, Week 8) is not optional overhead; it is my version of the factory's retraining, and the insider's "geen plug and play" applies to my design as much as to theirs.

---

*AI disclosure: I asked the questions and quote the reply as received, with my own translations; I used Claude to structure the comparison and check the arithmetic. The judgements on what was local and what was universal are mine; figures marked (est.) are my estimates.*
