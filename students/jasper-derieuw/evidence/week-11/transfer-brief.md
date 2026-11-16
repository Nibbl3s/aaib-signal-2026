---
week: 11
title: "Evidence - Transfer Brief: My Own Beat Through the Factory's Lens"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Cross-domain transfer"
date: 2026-11-16
---

# Transfer Brief: EU–China Trade Compliance, Seen From the Factory

My beat's sector: an importer's trade-compliance function (sanctions screening and customs data for goods from China). After the [sector lab](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-11/sector-lab.md) in manufacturing, the same ten questions, back home.

## 1. The ten skills in my beat

| # | Skill | Universal question | My beat's answer (with evidence) | Did the answer carry over to the factory? |
|---|---|---|---|---|
| 1 | Cost literacy | What does one unit cost? | €0.002 per invoice check in tokens (Week 8, 60 calls) | No: the factory pays capital, about €0.067 per part in year 1 (est.) |
| 2 | Capability skepticism | Where does it predictably fail? | Fluent wrong text: 24/24 on my own invoices, 28/36 on unseen ones; a confident origin where documents conflict (Build Runs 3–4) | No: there it fails silently on rare defects and bad labels |
| 3 | Vendor claim detection | What does the vendor leave out? | The screening vendor's terms give no notice period, and it did not answer in 33 days (ADR 001) | **Yes**: Robovision gives coverage, not accuracy |
| 4 | Value quantification | What is it worth, net of errors? | €81,000 a year by hand; saving €10,538–€28,520 from year 2; break-even at 35.2% errors and at a 3.1–5.0 minute check (Weeks 8–9) | Partly: same method, but there the error asymmetry is 2,500× |
| 5 | Market mechanism thinking | Who controls access to customers? | AI assistants named 0 of 6 customs brokers and invented firms (Week 5) | No: automotive buyers choose through audits and approved lists |
| 6 | Cost projection | What breaks at 10×? | Tokens are trivial; errors scale with volume (Week 6) | No: there, variety (new part types) breaks it, not volume |
| 7 | Lock-in detection | What would leaving cost? | 5/15; €1,258 in hours, €16,800 a year in performance (Week 7) | Partly: the dataset and the integration lock in, not the API |
| 8 | Design defence | Who decides, and what if it is down? | Rules route, the AI proposes, a person decides; manual fallback (Week 8, revised P1–P8) | **Yes**: AISIN's AI filters, "the person … make[s] the final decision" |
| 9 | Attack surface thinking | Who writes what the model reads? | The supplier writes the invoice: indirect injection; 0/10 attacks on Sonnet 5.5, 4/10 on llama3.2 (Week 9) | No: there it is the training labels and the camera itself |
| 10 | Regulatory reasoning | Which law owns the outcome? | AI Act minimal risk (Annex III points 6/7 scoped to public authorities); the duties come from sanctions, customs and data protection law (Week 10) | Partly: same tree, but the deciding test is what a miss does, not who uses it |

**Score:** all ten questions carried over; two answers carried over fully (3, 8), three partly (4, 7, 10) and five not at all (1, 2, 5, 6, 9).

## 2. Three universal principles (true in my beat and in the factory)

1. **The error decides the case, not the unit price.** Errors cost my importer 85–299 times the tokens (Week 6); in the factory one escape outweighs 2,500 false rejections. Price the mistake first.
2. **The vendor leaves out the number that decides.** A notice period in my beat, an accuracy figure in the factory. Ask for the missing number before reading the brochure.
3. **The person must decide, and that decision has a cost that sets the ROI.** My case dies if the 2-minute check takes more than 3.1–5.0 minutes; the factory's dies if doubtful parts go to scrap instead of a person. Design the human check first, then the model.

## 3. Three risks specific to my beat (what a generalist would miss)

1. **Liability cannot be delegated.** The sanctions regulations (e.g. Council Regulation (EU) No 269/2014, Art. 2) forbid making funds available to a listed party, and customs law makes the declarant responsible for accuracy (Union Customs Code, Art. 15(2)). "'The AI suggested it' is not a defence" (customs specialist, 16 Nov).
2. **The counterparty writes the input.** The supplier controls the invoice text, the stamps and the spelling of its own name, including in Chinese script. Every input is potentially adversarial (Week 9).
3. **Origin and lists move under you.** Documents conflict on origin when goods are transshipped, and a supplier can be clean today and listed tomorrow, so screening must repeat before payment (Week 8 practitioner review, P1 and P7).

## 4. What I would need to learn to advise in a factory

How production lines are updated and validated, what the customer's quality standard (IATF 16949) demands from an inspection change, and how a quality team sets a reject threshold. The framework told me what to ask; it did not tell me any of those answers.

---

*AI disclosure: the figures are from my own evidence files, cited per row; I used Claude to structure the table and the lists. The judgements on what carried over are mine.*
