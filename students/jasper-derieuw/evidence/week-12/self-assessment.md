---
week: 12
title: "Evidence - Self-Assessment of My Capstone Memo Draft Against the Rubric"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Synthesis"
date: 2026-11-16
---

# Self-assessment: capstone memo draft of 16 November against the capstone rubric

I rated the [memo draft](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-12/capstone-memo-draft.md) against each criterion's band descriptors, then checked each rating against what the text actually says, not what I meant it to say.

## Ratings

| Criterion (weight) | My band | Why: evidence in the draft | What holds it back |
|---|---|---|---|
| 1. Value reasoning (20%) | **B, upper** | Cause and effect stated (2 min instead of 6 → €7,298–€25,280 a year); accuracy measured on unseen invoices (28/36); weakest number named, with what the recommendation becomes if it is wrong; no-AI option costed and partly adopted (option 0b) | The figure that carries the whole saving, the 2-minute check, is still an assumption; so is the 30% share of full checks |
| 2. Modality fit (15%) | **A, lower** | The task is split: reading the invoice is a language task, matching the name is a rules job; a non-generative invoice model is named, priced and rejected for a specific gap (no origin or HS-code field) | The non-generative alternative is judged from its documentation, not tested on my invoices |
| 3. Cost awareness (15%) | **A** | Tokens measured over 60 calls with input and output priced separately; 1×, 10×, 100×; two providers compared on the same set; hidden costs (build, security, compliance, maintenance, error correction) itemised; who pays for an error is named | The extra €2,441 a year for a deliberate check (E21) is not yet in the totals; the 365 build hours are an estimate |
| 4. Integration fit (10%) | **A, lower** | Fitted to a company with no developers, Microsoft 365 and an ERP; buy, connect, build only the wiring; manual fallback; lock-in and exit cost stated | The hand-off to the ERP is described in one line |
| 5. Security review (15%) | **A** | Five named threats mapped to where they enter the design, each with a mitigation and a cost; attacks measured on two models; three real incidents; the fix is architectural (rules decide the route) | The rubber-stamp mitigation has only been tested on paper |
| 6. Governance (15%) | **B, upper** | Prohibited practices, Annex III points 6 and 7, Art. 6(3), Annex I and Art. 4 each checked; GDPR lawful basis, Art. 13/14, 22, 28, 35; timeline with a date that has moved once | Data subject rights (access, objection: Art. 15 and 21) and the AI Act transparency check (Art. 50) are not addressed; the classification is my reading until counsel confirms it |
| 7. Discovery strategy (10%) | **B, upper** | 18 answers from three assistants, tactics specific to a Belgian importer, competitors' AI visibility assessed, the mechanism shift explained (what survives is what the assistant can cite) | No structured-data tactic (machine-readable company and certificate data), which the rubric names; the link between discovery and the screening decision is thin |
| 6 ECTS: quality of evidence (40%) | **A** | Vendors, chamber of commerce, four practitioners, three models and a test with 10 people; non-responses dated (33 days) | Some practitioner quotes are close paraphrases; the Week 4 reply arrived on 28 October, late enough to constrain its use |
| 6 ECTS: what it changed (30%) | **A** | Figures replaced (6 min → 4.7–7.5 min), a direction changed (rules decide, not the model), counsel added to the budget; each piece mapped to a claim (E1–E21) | The memo appendix still says E1–E20 |
| 6 ECTS: professional quality (30%) | **B** | Clear structure, every figure has a formula or source | 2,686 words, more than 4–5 pages; tables dense for a board reader |

## My three weakest sections

1. **Value reasoning, because its load-bearing number is assumed.** The rubric asks that load-bearing figures come from my own Build or research "not from an assumption presented as a finding". The memo labels the 2-minute check as assumed, but the saving still rests on it. My paper test (E21) measured only the name check (19–30 s), a lower bound. **Fix:** use the fablab run on 18 November to time a full check of one invoice (all five fields) and show the saving at the measured time, at 4.7 minutes and at the break-even.
2. **Governance, because two items the rubric names are missing.** I covered classification and the GDPR basis, but not the rights of the directors and owners whose names the system processes (access and objection), and I did not state why the AI Act transparency duties do not apply. **Fix:** two sentences in section 3.7: Art. 15 and 21 handled through the privacy notice and the analysts' log; Art. 50 does not apply because no one interacts with the system and it generates no content for the public.
3. **Discovery strategy, because it lacks the structured-data tactic and a clear link to the decision.** My tactics publish proof as documents but not as machine-readable data. **Fix:** add a seventh tactic (company, VAT, AEO and certificate data marked up as structured data on the site) and one sentence on why discovery matters for this decision: buyers ask assistants which importers screen their suppliers, so a documented screening process is also something buyers can find.

**Also to fix before the final memo:** trim to 4–5 pages (move the threat table detail and the discovery audit numbers to the appendix), add the €2,441 to the cost table, update E1–E20 to E21.

---

*AI disclosure: Claude compared my draft against the rubric's band descriptors and proposed ratings; I checked each rating, decided the bands and chose the three weakest sections.*
