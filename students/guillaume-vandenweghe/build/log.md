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

- **Model and version:** Claude Opus 5.5 · **Interface:** Claude chat · **Date of runs:** _____
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
