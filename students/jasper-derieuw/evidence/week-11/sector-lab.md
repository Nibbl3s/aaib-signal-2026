---
week: 11
title: "Evidence - Choose-Your-Sector Lab: Visual Quality Inspection in Automotive Parts Manufacturing"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cross-domain transfer"
date: 2026-11-16
---

# Sector Lab: Manufacturing, Visual Quality Inspection

**Why this sector:** it is the furthest from my beat I could pick. My Build reads text and checks it against a list; this is cameras, milliseconds and physical parts. I am absent from the class on 14 December (the teacher knows), so I did the field work in advance and on my own, on 16 November, without the room pooling; Section 4 replaces the pooling with the course's reference comparisons.

**The brief (course scenario 5):** a factory making automotive parts, 12,000 parts a day on one line in 3 shifts, under 400 ms per part, 4 years of photos (~2M images) labelled inconsistently between shifts, an air-gapped network, 6 quality inspectors, €200,000 capital against €340,000 a year of inspection labour and scrap. A false positive scraps a good part at about €40; a defect that ships can trigger a recall, "six figures minimum".

## 1. Field record

| | What I found |
|---|---|
| **Sector** | Manufacturing: AI visual inspection of automotive parts |
| **Two real companies** | **TI Fluid Systems, Liège**: steel strip for brake and fuel pipes. Its camera system 3 m above the strip needed complex calibration and flagged false holes; it was replaced by a contact image sensor with custom software from InDeep-solutions (Ferrières): holes of 1 mm and up at 95 m/min, 0.4 s response, images kept six months ([Vision Systems Design, 17 Apr 2025](https://www.vision-systems.com/factory/manufacturing/article/55283046/how-ti-fluid-systems-improved-its-steel-strip-inspections)). **AISIN Europe**: automotive electronic components, an AI with UNamur that separates normal from abnormal images to cut the false alarms of the existing system; "The goal is for the person to make the final decision, not for it to happen automatically" ([UNamur, 3 Sep 2026](https://www.unamur.be/en/newsroom/ai-and-quality-control-when-humans-stay-control)) |
| **Real vendor + one claim** | **Robovision, Ghent**, customers named on its site: Niko, Eurocircuits, Unilin. Claim: "100% of the products are automatically inspected at a speed and accuracy unmatched by human operators" ([robovision.ai](https://robovision.ai/what-we-do/manufacturing), read 16 Nov 2026). Deployment: "cloud-based solutions, on-premises setups, or a hybrid approach" |
| **Regulator or standard** | **Machinery Regulation (EU) 2023/1230**, applying from 20 January 2027. **AI Act Art. 6(1a) and (1b)** as inserted by Regulation (EU) 2026/1744: AI "solely used for … quality control shall not qualify as safety components", but AI "the failure or malfunctioning of which would endanger health and safety shall qualify". The same Omnibus moved machinery from Annex I Section A to Section B, so AI rules for machinery come through the Machinery Regulation, with Annex I high-risk duties from 2 August 2028 ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng)) |
| **Hardest skill here** | Market mechanism thinking (5): nobody picks a brake-pipe supplier by asking an AI assistant. And value (4): I have no real scrap or escape rates |
| **What the brief got wrong or left out** | It treats every false positive as €40 of scrap. AISIN's approach sends doubtful parts to a person, which turns a false positive into inspector seconds, not scrap. It also leaves out whether workers appear in the camera image |
| **What an insider would tell me I got wrong** | Whether the air gap is real or habit, and how a new model gets onto the line. My guess: the expensive part is relabelling 2 million inconsistent images, not the model |

## 2. The ten skills

Volume basis: 12,000 parts × 250 working days = **3.0 million parts a year** (est.: the brief gives a daily figure only).

| # | Skill | My answer for this sector | What is different from my beat |
|---|---|---|---|
| 1 | Cost literacy | The unit is one image inference on a box next to the line: almost €0 per part. The cost is capital: €200,000 ÷ 3.0M parts = **€0.067 per part in year 1** (est.). No cloud API fits: the network is air-gapped and 400 ms leaves no room for a round trip | My cost is variable (€0.002 per check, tokens); here it is fixed (cameras, edge hardware, labelling). A cloud price list tells you nothing |
| 2 | Capability skepticism | It fails predictably on rare defects (few examples), on labels that disagree between shifts, on changes in lighting or material, and on new part types. A wrong answer here is a missed defect, not a confident sentence | My failure was a fluent wrong text (an invented supplier, a confident origin). Here it is a silent miss, and the training labels themselves are unreliable |
| 3 | Vendor claim detection | Robovision's "100% … inspected" is a fact about coverage, not accuracy. "Accuracy unmatched by human operators" is an aspiration with no figure. Avoided: the false-negative rate, the labelling effort, and whether it runs fully air-gapped | **Same pattern as my beat** (Week 3): the number that decides the case is the one the vendor leaves out |
| 4 | Value quantification | Value is inspector time plus scrap, against escapes. At the brief's €40 per false positive, scrapping wrongly rejected parts eats the whole €340,000 at **0.28% false positives** (€340,000 ÷ (3.0M × €40)). **One escape** at €100,000 or more costs **29%** of a year's value | In my beat a false positive costs 15 analyst minutes and a miss is a fine. Here a false positive is a destroyed part, and the two errors differ in cost by a factor of more than 2,500 (€100,000 ÷ €40) |
| 5 | Market mechanism thinking | Automotive buyers choose suppliers through approved-supplier lists, audits against the IATF 16949 quality standard and part approval. An AI assistant is not the gatekeeper; the customer's supplier-quality engineer is | **Breaks.** In my beat (Week 5), AI assistants named and invented brokers. Here discovery does not run through AI at all |
| 6 | Cost projection | At 10× (ten lines), cost grows per line: cameras, an edge box and integration, roughly linear (est.). Unit economics break on labelling and retraining for every new part type, not on inference | In my beat 10× volume moved tokens from €38 to €380 a year and errors decided everything. Here volume is nearly free; **variety** costs |
| 7 | Lock-in detection | The lock-in is the labelled dataset and the integration with PLCs and the MES, not an API. Ask before signing: can the labels and the trained model be exported, and in which format? | My lock-in was a cloud model with a 1–2 week exit (Week 7). Here the air gap removes API lock-in but adds hardware and integration lock-in |
| 8 | Design defence | Cameras → edge inference on the line network → reject gate on the PLC. The threshold is set for **recall** (miss nothing); doubtful parts go to an inspector station rather than to scrap. Models are updated only in maintenance windows, after a re-test on a fixed set of known defects. Fallback: the line keeps running with manual inspection | **Same shape as my design**: the machine flags, rules route, a person decides the doubtful cases, and there is a manual fallback. What differs is the clock: 400 ms instead of 15 minutes |
| 9 | Attack surface thinking | Prompt injection does not apply: there is no text. What bites: poisoned or careless labels (the brief's inconsistent shifts), a dirty or moved camera (a physical "attack" that needs no attacker), and model updates carried into the air-gapped network. Data leakage is low; the images are parts | In my beat the supplier wrote the text the model read (injection). Here the threat is the **training data** and the **physical** setup |
| 10 | Regulatory reasoning | AI Act: quality control alone is not a safety component (Art. 6(1a)), so **minimal risk for cosmetic defects**; but if a missed defect "would endanger health and safety" (Art. 6(1b)), as with a brake pipe, it counts as a safety component, and the high-risk route runs through the Machinery Regulation (Annex I, from 2 Aug 2028). GDPR: low, unless workers appear in the images; Belgian collective agreement no. 68 on camera surveillance at work would then apply (to confirm). Customer requirement: IATF 16949 | My classification turned on **who** uses the system (public authority or not). Here it turns on **what** a missed defect does. Same tree, different decisive question |

## 3. Transfer reflection

1. **Identical questions (universal):** what one unit costs and what drives it; what the vendor leaves out; where the human checkpoint sits and what happens when the system is down.
2. **Answers that changed completely (sector-specific):** the cost structure (variable tokens → fixed capital); the error asymmetry (a 15-minute redo → a €40 scrap vs a €100,000+ recall); the regulator (sanctions and customs law → machinery and product safety); how customers choose suppliers (AI assistants → audits and approved lists).
3. **Hardest skill:** market mechanism thinking. My Week 5 method assumed buyers ask an AI; in automotive supply they do not, and I had no evidence of what replaces it beyond the IATF 16949 audit.
4. **Looked up vs assumed:** looked up: the two companies, the vendor claim, the Omnibus articles, the Machinery Regulation date. Assumed: 250 working days, a linear cost per extra line, that a doubtful part can go to a person instead of scrap, and €100,000 as the floor of "six figures".
5. **What an insider would correct:** whether the air gap is real, how updates enter, and whether relabelling the 2 million images is the real budget. I will put exactly these to an insider (6 ECTS).

## 4. The room, replaced: reading the course comparisons

**Three functions, one model (marketing, HR, operations).** Universal: the cost model structure, the lock-in factors and the attack-surface categories. Sector-specific: error tolerance, the AI Act class and GDPR sensitivity. The model is the same; the **context** sets the risk: who is affected, what a wrong answer costs, and which law owns the outcome.

**Five-industry risk matrix.** Closest to my beat: logistics (customs documents, mostly low risk, low lock-in). The outlier is healthcare: highest on error cost, regulation, data sensitivity and bias at once. The most uniform row is the attack surface: every sector has a data leak and a manipulation route. My manufacturing lab matches the matrix on low GDPR and medium error cost, but adds what the matrix flattens: within one factory, error cost ranges from cosmetic to safety-critical, and the AI Act class follows that.

**Four business functions.** My beat sits in operations (document processing): "misclassification; data leakage". From lowest to highest AI risk I rank marketing, operations, finance, HR: error cost, regulation and bias all rise in that order, and HR is where people's livelihoods are decided.

---

*AI disclosure: I chose the sector and did the field work in the built-in browser with Claude; the companies, the vendor claim and the legal text are cited from their sources as read on 16 November 2026. The estimates marked (est.) and the transfer reflection are mine.*
