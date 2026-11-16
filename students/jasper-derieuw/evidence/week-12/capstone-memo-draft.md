---
week: 12
title: "Capstone Memo (Draft): AI-Assisted Sanctions Screening at an Antwerp Importer"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Synthesis"
date: 2026-11-16
---

# AI-Assisted Sanctions Screening: Pilot First, Then Decide

**To:** CFO and Head of Compliance, an Antwerp importer of Chinese electronic components (about 150 employees; realistic composite) · **From:** Jasper Derieuw, junior consultant · **Date:** draft of 16 November 2026 · **Status:** draft for peer review on 4 January 2027

---

## 1. Executive summary

**Run a three-month pilot of AI-assisted sanctions screening on one product family, and do not buy a full system yet.** The AI only proposes the invoice fields and adds warnings; fixed rules decide the route; a person decides every invoice. The pilot stops if an honest check takes more than three minutes or if it misses a single sanctioned match.

**Why:** two analysts check 18,000 suppliers a year by hand at about €81,000. My own build read the invoices correctly in 28 of 36 runs on invoices it had never seen (77.8%) for €0.002 a check; behind the routing rules, 0 of 20 attack attempts and 0 of 32 genuine matches reached the quick check.

**Cost and return:** €28,007–€28,607 one-off; a saving of €7,298–€25,280 a year from year two; payback in 13 to 47 months. Tokens cost under €40 a year: this is a case about people's time, not about AI prices.

**The weakest number:** the time of the AI-assisted check. I assumed two minutes; a customs specialist expects "five or ten"; above 2.8–4.7 minutes the saving is gone. **If it is wrong, the answer becomes "buy the screening service only"** (section 3.2), which is the first step of this plan anyway. In a paper test with 10 people (16 November), a careful name check of a clean invoice took a median 19 seconds with a quick confirmation and 30 with a deliberate one; the quick check caught 47% of the AI's planted errors, the deliberate one 80%. That is a lower bound: a full check also covers the order, value and HS code.

**Risk class:** minimal risk under the EU AI Act, documented as if it were high-risk until outside counsel confirms. The obligations that bite come from sanctions, customs and data protection law, and they stay with the importer whatever the model says.

**Not recommended:** an AI that clears suppliers on its own; a model run on the company's own hardware (it scored 5 of 36 on unseen invoices); signing a screening vendor that will not put three terms in writing.

---

## 2. The problem and the current state

Every supplier invoice is checked against the EU consolidated sanctions list before payment: 1,500 checks a month, 18,000 a year. Two compliance analysts do this by hand at about 6 minutes a check: 18,000 × 6 min × €0.75 = **€81,000 a year** (analyst rate €45/hr: €51,547 salary × 1.4 ÷ 1,600 h; ERI). The 6 minutes was my estimate; an accounts-payable manager's figures put a routine check at 3–5 minutes and a difficult one at 20–30, with 1 in 10 needing follow-up: **4.7–7.5 minutes on average** (appendix E6).

A miss is expensive: in one Antwerp sanctions case the fines ran from €50,000 to €500,000 per company (Week 4), and liability that cannot be passed to a tool. "'The AI suggested it' is not a defence" (customs specialist, E17).

Of eight AI candidates in the importer's value chain (Week 4), sanctions screening scored highest on volume, repetition and verifiability. HS-code suggestion, adverse-media checks and CBAM reporting were rejected: errors there cannot be verified against a list, or the volume is too low.

## 3. Value analysis

### 3.1 What the AI does, and the modality

The task has two halves with different answers.

- **Reading the invoice** (supplier, origin, HS code, value, in English, French or Chinese script) is a language task. A language model handles messy, multilingual documents; my build does it at €0.002 a check. The **non-generative alternative**, a ready-made invoice model (Azure Document Intelligence, $10 per 1,000 pages), reads the supplier and the bank details well but **has no origin or HS-code field** and cannot tell a transit port from a place of manufacture (appendix, no-AI option). That distinction is where my build needed the most work: on a classmate's freight set the origin was missed on 3 of 10 inputs, and the rule "a routing point is not an origin" fixed most of it.
- **Matching the name against the list** is a rules job. It is bought as a screening service, not prompted, in every option.

**The AI may not decide.** My first runs cleared a sanctioned bank written in Chinese script in 1 of 2 runs (September), and a free local model cleared a sanctioned bank when the invoice told it to (October). The accuracy I rely on is the one on unseen invoices, **28 of 36 (77.8%)**, not the 24 of 24 on the invoices the prompt was written for.

### 3.2 The options, including no AI

| Option | Running cost, year 2+ | One-off | What it covers |
|---|---:|---:|---|
| 0a. Today, all by hand | €81,000 | €0 | Everything, slowly |
| 0b. Screening service only, no AI | €82,082 | ≈ €0 | Automatic name matching; analysts still read every invoice |
| 0c. 0b plus a non-generative invoice reader | €82,248, minus an unmeasured time saving | not costed | Supplier and bank details, not origin or HS code |
| **1. Recommended: 0b plus an AI pre-fill, rules and a person** | **€55,720–€73,702** | **€28,007–€28,607** | All five fields, with routing to a full check |

**Option 0b is a no-regret move** and the first step of the roadmap. Option 1 saves €7,298–€25,280 a year against today, but only if three conditions hold (table below). All three depend on numbers that more analysis cannot settle and a three-month pilot can.

| No AI wins if … | Threshold | Today's evidence |
|---|---|---|
| The AI-assisted check takes too long | above 2.8–4.7 min | assumed 2 min; "five or ten" (E17); name check alone 19–30 s in my paper test (E21) |
| Too many invoices need the full check | above 43.5–76.8% | model assumes 30%; hard test sets 70–80% (routing replay); practice "1 in 10" (E6) |
| The payback outlives the system | above 36 months (est.) | 13–47 months |

### 3.3 Cost estimate

| Item | Formula | € |
|---|---|---:|
| Tokens | 18,000 × €0.0020 (652.6 input and 90.5 output tokens, measured over 60 calls; $2/$10 per 1M × 0.92) + monthly re-test | 38 a year |
| Build and training (one-off) | 365 h × €63 + 2 analysts × 2 h × €45 | 23,180 |
| Security fixes (one-off) / security and compliance upkeep (yearly) | Week 9 advisory memo; yearly classification review | 1,797 / 3,240 |
| Compliance (year 1) | Legitimate-interest and impact assessments, privacy notice, a classification file, outside counsel | 3,120–3,720 |
| Screening service, maintenance, governance | €1,082 + €6,000 + €2,160 a year | 9,242 a year |
| Human checks | 70% of invoices × 2 min + 30% × 6 min = 960 h × €45 | 43,200 a year |
| Correcting AI errors | 0–22.2% × 18,000 × €4.50 (0% on my own set, 22.2% on unseen inputs) | 0–17,982 a year |

**Year 1 all-in: €83,727–€102,309**, against €81,000 today: year 1 costs more. From year 2 the importer saves €7,298–€25,280. **At scale**, tokens stay trivial: €360 a year at 10× the volume, €3,600 at 100×. The bill scales with errors and check time, not with tokens. **Provider tiers:** Gemini 3 Flash scored 20 of 24 against Claude Sonnet 5.5's 22 of 24 on the same set, at the same €0.0020 a check; it over-flags partial matches, which would cost about €16,800 a year in extra checks.

### 3.4 Integration approach

**Buy, connect, build only the wiring.** The importer has no developers, Microsoft 365 and an ERP. The design (Week 8, revised after a practitioner review):

1. Invoices arrive in a shared mailbox; a script reads them every 15 minutes.
2. The model proposes five fields as one JSON answer.
3. A bought screening service matches the supplier against the EU list.
4. **Rules, not AI, decide the route:** any list hit, any AI warning, a non-Latin name, a missing field, an unclear origin, conflicting origin documents, a product-risk flag, unverifiable ownership, or a changed bank account goes to a full manual check; only complete, clean invoices from known suppliers go to the quick confirmation.
5. An analyst approves every invoice in a Teams list, with the source line shown next to each field. Nothing becomes payment or declaration data without that approval.
6. If the model fails three times, everything falls back to today's manual process.

The routing rules and checks marked P1–P9 in my design came from two practitioners (appendix E6 and E17). **Lock-in:** 5 of 15 on the course scorecard. Leaving Anthropic costs about €1,258 in hours (1–2 weeks), but a switch to Gemini costs about €16,800 a year in performance: the real lock-in is capability, not price. The model sits behind one function, so it can be replaced. No screening vendor is signed without a written price-notice period, a data export and a termination notice (ADR 001: the vendor I asked did not answer in 33 days).

### 3.5 Discovery strategy

When buyers ask an AI assistant for suppliers, the assistant builds the shortlist itself, and what survives is **what it can cite**. In 18 answers from ChatGPT, Claude and Gemini (16 November): one Belgian importer appeared in all six "who imports from China?" answers, because every directory describes it identically; one distributor was named in three of six sanctions answers, each time for its published purchasing conditions and compliance statement; AEO status, the EU's certificate for reliable customs operators, appeared in 2 of 18 answers and in none of the buyer checklists (appendix E20). The field is nearly empty.

**Tactics for this importer:** (1) publish its compliance proof as documents (a dated sanctions statement, a sanctions clause in the purchasing conditions); (2) one identical description on its site, europages and Kompass; (3) state how and where it sources in China; (4) show the buyer's checklist on the site (enterprise and VAT number, Recupel, Bebat, Peppol); (5) state its AEO status with its number, if held; (6) re-run the same three questions every quarter. **On the buying side:** never shortlist a vendor from an AI answer alone; one assistant named a company I could not find and placed two others in the wrong city.

### 3.6 Security review

The importer's attacker is the supplier, who writes the invoice text the model reads. The four threats plus access control, mapped to the design (Week 9):

| Threat | Where in the design | Mitigation and cost |
|---|---|---|
| Confidently wrong output: a quick check that becomes a rubber stamp | The 2-minute confirmation | Source line per field, conflicting origins to a full check, monthly re-check of 30 cleared invoices: €3,078; a deliberate confirmation caught 80% of planted errors against 47% for a quick one (E21), for about €2,441 a year in extra seconds, not yet in the totals |
| Data leakage: directors' and owners' names to the model provider | The model call | Processing agreement, retention period, EU safeguards: €690 |
| Unauthorised access: who can approve or edit | The Teams list and the log | Edit rights for the two analysts only, approval tied to the signed-in account, a read-only log: €432 |
| Prompt injection through the invoice | The model's input | The strictest route wins, non-JSON goes to a person, attacks re-tested before any model switch: €522 |
| Shadow AI: analysts paste invoices into a free chatbot at month-end | Outside the design | An AI usage policy naming the approved tool, a briefing, and a fallback queue fast enough that nobody needs a shortcut: €225 |

**Total: €4,947 in year 1**, about the 15% contingency of the build budget.

**Measured:** Claude Sonnet 5.5 resisted 10 of 10 attacks; a local model did not (4 of 10, including a sanctioned bank cleared by a line in the invoice). With the routing rule replayed on all 140 recorded answers, **0 of 20 attacks and 0 of 32 genuine matches reached the quick check on either model**: safety no longer depends on which model is used. The real cases behind this list: a car dealer's chatbot talked into a $1 sale, an airline held liable for its chatbot's invented policy, engineers leaking source code into a public chatbot. The ranking was set with an IT professional and a customs specialist; both moved access control up and injection down.

### 3.7 Governance assessment

**EU AI Act: minimal risk.** Not a prohibited practice. Not Annex III: points 6 and 7 cover systems used by or on behalf of public authorities, and the importer screens its own suppliers; even if Annex III applied, the Art. 6(3) exception for a preparatory task would cover pre-filling fields for an analyst. Not a safety component of a regulated product. No public-facing chatbot. The remaining duty is AI literacy (Art. 4, softened by Regulation (EU) 2026/1744 to "take measures to support" it).

**GDPR applies now:** invoices name directors and owners. Lawful basis: legitimate interest (Art. 6(1)(f)), documented; information to suppliers (Art. 13/14); a processing agreement (Art. 28); an impact assessment (Art. 35, advisable). **Art. 22 stays out only while the human check is real**, which links the weakest number to the legal position as well as the business case.

**In practice:** a trade-compliance specialist told me large companies classify with Legal and IT, involve outside counsel for anything touching customs or sanctions, and "design and document it as if it were high-risk until the classification is confirmed". The chamber of commerce I asked did not answer in 33 days. The plan therefore budgets counsel and an "as if high-risk" file: €3,120–€3,720 in year 1 instead of €1,800. **Timeline:** Annex III duties start on 2 December 2027 (a date that has moved once); a reclassification would have to be known by mid-2027.

## 4. Implementation roadmap

| Phase | When | What | Gate to the next phase |
|---|---|---|---|
| **0. Prepare** | Month 0–1 | Buy the screening service (option 0b) on three written terms; processing agreement, legitimate-interest and impact assessments; counsel confirms the risk class; access rights set; analysts trained | All go-live blockers closed |
| **1. Pilot** | Months 1–3 | One product family, known suppliers, running in parallel with the manual process; measure the check time, the share routed to a full check, the error rate and missed matches (monthly sample) | Check ≤ 3 min, 0 missed matches, ≥ 60% clean invoices |
| **2. Roll out** | Months 4–6 | All product families; P1–P9 in production; monthly re-test including the attacks | Error rate below 31.2% |
| **3. Run** | Month 7 onward | Monthly re-test; yearly classification review; check before 2 December 2027; quarterly discovery check | Any trigger stops the system until reassessed |

**What depends on what:** the AI pilot cannot start before phase 0's contracts and data-protection work; the rollout cannot start without the pilot's measured check time. If the pilot fails its gate, the importer stays on option 0b and has lost the pilot cost, not the full build.

---

## Appendix

The primary evidence behind this memo (vendor correspondence, practitioner conversations, measured results on three models, a market audit), with each piece mapped to the claim it supports: [evidence index E1–E20](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-12/evidence-index.md) and [what my primary research changed](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-12/what-research-changed.md). Workings: [no-AI option](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-12/no-ai-option.md), [discovery audit](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-12/discovery-audit.md), [architecture](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/architecture.md) and [practitioner review](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/practitioner-review.md), [advisory memo](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-09/advisory-memo.md), [regulatory impact assessment](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-10/regulatory-impact-assessment.md), [Build log](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/log-v1.md).

---

*AI disclosure: the recommendation, the evidence gathering and the judgements are mine; I used Claude to assemble this draft from my own evidence files, check every figure against them and structure the memo. Figures marked (est.) are my estimates; measured figures state what was measured and on how many cases.*
