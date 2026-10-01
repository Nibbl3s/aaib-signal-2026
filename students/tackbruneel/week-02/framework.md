# Week 2 — Framework application

**Thor Tack** · Beat: AI Cost Decisions for a One-Person DJ & Events Business

---

## Part 1 — Three borderline cases from the sorting game

### Problem 4 — Fraud detection on bank transactions (0.5 s decision)

**Verdict: AI-suitable for a trained scoring model. AI-incompatible for a generative model (LLM).**

**Modality:** structured input (amount, merchant, location, time, history) → binary output, decided in under half a second, millions of times a day.

**Reasoning:** this is the classic job for a classification model trained on historical fraud labels. The data is structured, the outcome is labelled, and you can measure the model's precision and recall on last month's transactions. An LLM is the wrong tool: it's too slow for 0.5 s, too expensive at that volume, and it can't explain a score in a way you can audit. The 0.5 s limit also rules out "a human checks it", so "AI-risky, add a human" doesn't solve anything here.

**Mitigation (instead of "human review"):** three bands, not two.
- A low score is approved automatically.
- A high score is not blocked. It triggers a step-up check (confirm in the banking app).
- Only the middle band goes to a human queue, *after* the moment of purchase.

A false positive then costs the customer one tap instead of a declined card.

### Problem 5 — Screening 500 CVs, AI ranks the top 10

**Verdict: AI-incompatible for ranking. Acceptable only for extraction with fixed criteria.**

**Reasoning:** the problem isn't the 10 people the AI picks but the 490 that no human will ever read. There's no ground truth for "best candidate", so you can't build a test set to measure the ranking. A model trained on past hiring copies past bias, and nobody notices because the rejected CVs are never looked at. Under the EU AI Act, AI used to screen or rank job applicants is listed as high-risk (Annex III, employment), so this also comes with legal obligations.

**Mitigation:** split the job.
1. Rule-based knock-outs that a human wrote and can defend: required diploma, work permit, language.
2. AI only *extracts* fields from each CV (years of experience, certificates, languages). This can be checked, like my own Build.
3. A human applies the criteria to the extracted table and reads every CV that passes the knock-outs.

### Problem 7 — Reviewing a 10-page vendor contract for unusual clauses

**Verdict: AI-risky — usable only as a "diff against my own template", with a lawyer signing off.**

**Reasoning:** the dangerous error here is the missed clause (F3), not the false alarm. A wrongly flagged normal clause costs the lawyer two minutes. A missed liability or auto-renewal clause can cost thousands. An LLM asked "what's risky?" decides for itself what "risky" means and can't show you what it didn't flag.

**Mitigation:**
- Compare the contract to *our own* standard template, so every deviation shows up (this part is a text comparison, not AI).
- AI only summarises each deviation in plain language.
- Before trusting it, test it on 10 contracts with clauses we planted ourselves and measure how many it finds.
- A lawyer reviews every flagged deviation. Nothing is signed on the AI's word.

---

## Part 2 — Five-question framework on a real use case in my beat

**Use case:** let AI calculate the price in the quotes I send for DJ bookings (DJ fee + optional sound & light via my partner VisionSound + travel).

| # | Question | Answer for my business | → |
|---|---|---|---|
| 1 | Do I know the answer already? | Mostly yes. The price comes from hours × hourly rate, plus extras. My rates are in my own sent mails: €60/h for a private 18th birthday, €80/h for a youth-movement party, €500–700 as the indication for a wedding. The answer is a formula, not a judgment. | Use what I know |
| 2 | Is the cost of an error higher than the cost of being slow? | Yes. In Week 1 I estimated a bad quote at about €150 (lost or underpriced booking). Being slow costs almost nothing: my replies to the Kick-Off and wedding inquiries went out the same evening and the next morning, and both clients were fine with that. Taking a few minutes to calculate the price changes nothing. | Don't use AI |
| 3 | Is the information stable or changing quickly? | Stable per season, but it depends on the client type, and there's no written rule for when €60 or €80 applies. An AI would have to guess which rate fits. | Don't use AI until the rule is written down |
| 4 | Can I verify the answer? | Yes, but checking means recalculating it myself, so the AI saves no time. | Don't use AI alone |
| 5 | What's the simplest tool that solves this? | A price table: event type → hourly rate, + km × travel rate, + gear options. In a spreadsheet or as fixed items in Accountable, where I already make my quotes and invoices. | Use it |

**Decision:** no AI for the price. A price table does it faster, exactly the same every time, and it can't invent a price. AI *does* make sense one step earlier, for reading the messy inquiry and pulling out the hours, date and event type. That's exactly what my Build does: the measured 50% shows it still needs a human check before those fields go into the price table.

---

*AI use: Claude drafted the reasoning in this document, based on my own booking data, rates and Build results. I reviewed it and agree with it.*
