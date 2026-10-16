# Build log — every run, every failure (Week 2)

> Never delete a row. A log full of successes is a log that has been curated.

## The Job

**One sentence:** My tool takes one customer email sent to a Belgian non-life insurer and produces one of six categories (NEW_CLAIM, CLAIM_FOLLOWUP, POLICY_CHANGE, CANCELLATION, COMPLAINT, UNCLEAR) plus the language. I can tell it is right because the expected label is written in `test-set.md` before running, and two people can agree on a label.

- **Input:** one customer email (NL / FR / EN / mixed)
- **Output:** two lines — `CATEGORY:` and `LANGUAGE:`
- **User:** the first-line mail desk of a claims department, so each email lands in the right queue
- **Checkable?** Yes — six fixed labels and four language codes; no taste involved.

## The Test Set

- **Source:** 12 public Trustpilot reviews of Belgian insurers (AG Insurance, Baloise, AXA, Ethias and others)
- **Real or invented:** 12 real, 0 adapted, 0 invented
- **Anonymised:** yes — claim numbers and city names replaced by `[CLAIM]` and `[CITY]`
- **Awkward cases covered:** 2 in French, 5 English/mixed, 2 very short, 1 UNCLEAR, 3 angry status questions, 1 Ombudsman complaint, 2 with several requests, 1 long and rambling. Not covered: an "am I covered for…?" question.

## Run setup

- **Model and version:** Claude Opus 5.5 · **Interface:** Claude chat · **Date of runs:** 2026-10-05
- **Method (deviation from one email per chat, disclosed):** prompt v1 was used unchanged, with all 12 emails in one message and the instruction to classify each email separately. Run A and Run B were two separate new chats with exactly the same message. The model also returned a summary table, which is what is logged below.
- The expected answers were committed in `test-set.md` before the runs and were not in the message sent to the model.

## Run table — prompt v1

| # | Input (short label) | Expected | Got A | Got B | Verdict | Failure code |
|---|---|---|---|---|---|---|
| 1 | AG, claim took a year, already paid | COMPLAINT, NL | UNCLEAR, NL | COMPLAINT, NL | ❌ | F6 (A: F1) |
| 2 | Baloise, policy cancelled, Ombudsman | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ | |
| 3 | "UNE HONTE" 45 min on hold | COMPLAINT, FR | UNCLEAR, FR | UNCLEAR, FR | ❌ | F1 |
| 4 | AXA work accident, hospital costs | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | CLAIM_FOLLOWUP, FR | ✅ | |
| 5 | Ethias bike, no reimbursement | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | ✅ | |
| 6 | "-10 Star", résiliation ignored | CANCELLATION, MIXED | CANCELLATION, MIXED | CANCELLATION, MIXED | ✅ | |
| 7 | 3 unpaid claims, wants to cancel | CANCELLATION, NL | CANCELLATION, NL | CANCELLATION, NL | ✅ | |
| 8 | Bank account + address change | POLICY_CHANGE, NL | POLICY_CHANGE, NL | POLICY_CHANGE, NL | ✅ | |
| 9 | Baloise glass breakage invoice | CLAIM_FOLLOWUP, MIXED | CLAIM_FOLLOWUP, MIXED | CLAIM_FOLLOWUP, MIXED | ✅ | |
| 10 | Ethias theft refused, 24h rule | COMPLAINT, EN | CLAIM_FOLLOWUP, EN | CLAIM_FOLLOWUP, EN | ❌ | F1 |
| 11 | "The most useless insurance" | UNCLEAR, EN | UNCLEAR, EN | UNCLEAR, EN | ✅ | |
| 12 | Claim > 1 year, Test-Aankoop | COMPLAINT, NL | COMPLAINT, NL | COMPLAINT, NL | ✅ | |

Verdict = ✅ correct in both runs (category AND language) · ❌ wrong in at least one run.

**Score:** 9 correct out of 12 → 75%

- Category: run A 9/12 (75%), run B 10/12 (83%); correct in both runs 9/12 (75%)
- Language: 24/24 runs correct (100%)
- Consistency: 11 of 12 inputs got the same answer in run A and run B (only #1 changed)

## Failures by type

| Code | Type | Count | Which inputs |
|---|---|---|---|
| F1 | Wrong — confidently incorrect label | 3 | #1 (run A only), #3, #10 |
| F2 | Fabricated — invented details not in the email | 0 | |
| F3 | Missed — overlooked something that was in the email | 0 | |
| F4 | Format — right content, not the two-line format | 0 in the tables | The per-email two-line answers (part 1) were not saved, so only the tables were checked |
| F5 | Refused — hedged or asked a question instead of answering | 0 | |
| F6 | Inconsistent — run A ≠ run B | 1 | #1 |

All three failed inputs (#1, #3, #10) have COMPLAINT as the expected answer.

## What surprised me
All three failures (#1, #3, #10) sit on the COMPLAINT boundary, and in each case the model followed rule 2 of my own prompt ("frustration alone is not a COMPLAINT") more strictly than I did when I wrote the expected answers. So the problem is not only the model: my rule and my expected answers disagree, and I have to decide which one is wrong before I change the prompt in v2. The language was correct in all 24 runs, even for the mixed and very short emails.

## The failure that would matter most

A real complaint sorted as something else. In this test that happened in #10: an angry customer whose theft claim was refused was sorted as CLAIM_FOLLOWUP in both runs, so in a live system the email would sit in the normal claims queue and nobody from complaints handling would see it. The customer gets a standard reply or none, escalates, and the insurer risks an Ombudsman case, a lost customer and a public review like the ones in this test set. A complaint sorted as UNCLEAR (#1 run A, #3) is less dangerous, because UNCLEAR still goes to a human. The opposite mistake, a normal question treated as a complaint, only costs some extra handling time.
## Deployment probe — plan

| | Plan |
|---|---|
| **Machine(s)** | Laser cutter (MDF or acrylic, with the category names engraved) |
| **Artifact** | A small desk mock of a claims mail desk: six labelled trays, one per category (NEW_CLAIM, CLAIM_FOLLOWUP, POLICY_CHANGE, CANCELLATION, COMPLAINT, UNCLEAR), with printed test emails on cards. A claims handler or classmate sorts the cards by hand next to the tool's label, to see whether they trust the label at a glance and where the COMPLAINT tray gets missed. |
| **Fablab session** | An open fablab session before Week 4 (CP1). The agenda link on the course page returned a 404 on 5 October, so I will ask fablab@arteveldehs.be for the next open slot and note the date here. |

## Week 3 — test-set swap (partner input through my prompt)

**Setup:** I ran a classmate's input through my prompt v1, unchanged. Same method as Week 2: a new chat per run, run A and run B, one email per chat.

- **Partner / source:** Janis Krainis — `students/janis-krainis/build/test-set.md`, input 1 (freight booking email)
- **Model and version:** Claude Opus 5.5 · **Date of runs:** 2026-10-09
- **Expected answer written before running:** yes. I used the rules of my own prompt: the email is not about insurance, so the correct answer is UNCLEAR.
- **Why this input:** it is out of scope for my tool, but it contains words that could pull it into a claims category ("auto spare parts", "shipment", "warehouse"). A real claims inbox also receives emails that are not about insurance, such as wrong-address mail, supplier mail and spam.

| # | Input (short label) | Expected | Got A | Got B | Verdict | Failure code |
|---|---|---|---|---|---|---|
| S1 | Freight booking, 1,200 kg auto spare parts Antwerp → Vienna (EN) | UNCLEAR, EN | UNCLEAR, EN | UNCLEAR, EN | ✅ | — |

**Result:** 1 correct out of 1 → 100%. Both runs gave the same answer (no F6), in the exact two-line format (no F4).

**What broke and why it matters:** nothing broke. The tool did not force the out-of-scope email into a claims queue, even though it mentions car parts. This shows rule "UNCLEAR = not about insurance" works for a clear case. It does not show the tool is robust in general: the swap tested a boundary that was easy for my prompt. My weakest boundary is still COMPLAINT (Week 2: #1, #3 and #10 failed there). A harder swap input would be an email that is partly about insurance, for example a garage asking about payment for a repair.

**Change planned for prompt v2 (not made yet):** none from this input. Prompt v2 will focus on the COMPLAINT boundary found in Week 2: first decide whether my rule 2 or my expected answers are wrong, then change only that.

**Updated total (Week 2 + swap):** 10 correct out of 13 inputs → 77%.

## Week 4 — value estimate (what my measured rate is worth)

**Self-diagnostic pattern:** 4, guessed error cost. My result depends on the cost of a hidden complaint, and that number is an estimate.

Rates use run level: 26 runs (13 inputs × 2). 21 of 26 correct = 81% (strict, both runs right: 75%). Non-complaint runs: 16/16 correct. Complaint runs: 10, of which 5 correct, 3 → UNCLEAR (a human still sees them), 2 → CLAIM_FOLLOWUP (hidden complaint, #10 in both runs).

| Line | Value | Formula / source |
|---|---|---|
| What the job costs a human today | €0.83 per email | 1.5 min (est.) × €33/h (course loaded cost reference: €38,000 × 1.4 ÷ 1,600) |
| Volume | 20,000 emails/month | Estimate, same as Week 1 and 2 |
| Measured success rate | 81% of runs (75% strict) | This log, Week 2 + Week 3 swap |
| Gross benefit at 100% | €198,000/year | 20,000 × €0.83 × 12 |
| Gross benefit at my rate | €195,030/year | Complaints are 3% (est.): (19,400 × 100% + 600 × 50%) × €0.83 × 12 |
| What each failure costs, and who pays | UNCLEAR: €0 extra (a human sorts it, as today). Hidden complaint: €96.60, paid by the insurer and the customer | 30 min × €33 = €16.50 + 10% Ombudsman × 6 h × €46 = €27.60 + 15% churn × €350 margin = €52.50 (all est.) |
| Failure cost per year | −€139,104 | 600 × 20% = 120/month × €96.60 × 12 |
| AI cost | −€15,561/year + €30,000 one-time | Tokens €561 (Standard tier, 1,150 in / 20 out) + monitoring €10,000 + IT €5,000 (est.) |
| **Net benefit** | **€10,365 in year 1 · €40,365/year after** | Payback 8.9 months |

**At my measured rate, is this worth building?** Only just, and not safely: with time savings 50% lower, year 1 is −€87,150. Break-even is at 26% of complaints hidden; v1 hides 20%, measured on only 10 complaint runs.
**What rate would it need?** Hidden complaints ≤ 5% of complaints, even if that costs automation (90% of normal emails auto-sorted). Then year 1 net is €94,300 and payback 2.9 months; still +€7,000 with a 50% haircut. That looks reachable with prompt v2 (send every dissatisfied email it is unsure about to a human), but I have to measure it.

## Checkpoint 1 (Week 4)

1. **What it does:** sorts one customer email to a Belgian non-life insurer into one of six queues plus its language, in a fixed two-line format.
2. **What I measured:** 13 real inputs (12 Trustpilot reviews + 1 classmate swap), expected answers written before running, every input run twice: 21/26 runs correct (81%), 10/13 inputs correct in both runs (77%), language 26/26.
3. **Dominant failure type:** F1, confidently wrong, all on the COMPLAINT boundary (#1 run A, #3, #10); one F6 (#1).
4. **Failure that would matter most:** a real complaint sorted as CLAIM_FOLLOWUP (#10): nobody in complaints handling sees it, and it can become an Ombudsman case. It is also the line that decides my business case (€139,104/year).
5. **What I would change first:** prompt v2 on the COMPLAINT boundary only: decide first whether rule 2 or my expected answers are wrong, then add a test set with more complaint and non-complaint emails, so the hidden-complaint rate is measured on more than 10 runs.

**Deployment scenario (locked):** the tool pre-sorts the claims inbox of a mid-sized Belgian non-life insurer; COMPLAINT and UNCLEAR always go to a human; first live use only as an 8-week shadow pilot next to the human sorters.

### Deployment probe — status Week 4

| | Status |
|---|---|
| **Machine(s)** | Laser cutter (unchanged from the plan above) |
| **Artifact** | Six-tray claims mail desk with printed test emails on cards (unchanged) |
| **Fablab session** | Not booked yet: requested by e-mail to fablab@arteveldehs.be on 16 October 2026; I will add the date here when it is confirmed. |
