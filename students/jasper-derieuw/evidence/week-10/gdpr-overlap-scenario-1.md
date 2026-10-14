---
week: 10
title: "Evidence - GDPR Overlap: Scenario 1, AI Resume Screening"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Regulatory reasoning"
date: 2026-10-14
---

# GDPR Overlap: AI Resume Screening

**Scenario 1 (Week 10 course page):** a company uses AI to scan 5,000 CVs, gives each candidate a "fit score", and automatically rejects the bottom 80% before any person sees them.

## 1. What personal data, and how sensitive?

CVs hold names, contact details, education, work history and often a photo, an age or a nationality. A "fit score" is profiling: an automated evaluation of personal aspects such as work performance (GDPR Art. 4(4)). Photos and free text can reveal special category data (ethnic origin, health, trade union membership; Art. 9), which the system may pick up even if no one asks for it.

## 2. Lawful basis (Art. 6)

| Processing | Basis | Why |
|---|---|---|
| Reading the CV for this vacancy | Steps before a contract at the candidate's request (Art. 6(1)(b)) | The candidate sent the CV to apply |
| Scoring and ranking with AI | Legitimate interest (Art. 6(1)(f)), with a written assessment | Handling 5,000 applications is a real interest, but it must be weighed against the candidate's rights. Consent does not work here: a job applicant cannot freely refuse |
| Training the model on past hires | Needs its own basis | A different purpose from today's vacancy. Past decisions can carry past bias into the score |
| Special category data | Art. 9 condition needed; none fits easily | Better to strip photos, age and nationality before scoring |

## 3. Article 22: the decisive point

The auto-rejection of 80% is a decision **based solely on automated processing, including profiling**, with a **similarly significant effect**: losing access to a job. The Article 29 Working Party guidelines on automated decision-making (endorsed by the EDPB) give e-recruiting without human involvement as a standard example.

It is only allowed under one of three exceptions (Art. 22(2)):
- **Necessary for a contract:** must be strictly necessary. With 5,000 applicants a company could argue it, but must show that less intrusive means, such as a human reviewing the rejections, do not work.
- **Authorised by law:** no Belgian or EU law authorises this.
- **Explicit consent:** not freely given in a job application.

Even under an exception, the candidate keeps the right to human intervention, to give their view and to contest the decision (Art. 22(3)).

**The simplest fix:** do not reject automatically. Let the score sort the pile, and let a person decide every rejection, or at least review a real sample with the power to overturn. A rubber-stamp review does not count as human involvement.

## 4. Data subject rights

| Right | What it means here |
|---|---|
| Information (Art. 13(2)(f)) | Candidates must be told that automated decision-making is used, with meaningful information about the logic and the consequences |
| Access (Art. 15(1)(h)) | A rejected candidate can ask for their data, including the score and how it was reached |
| Rectification (Art. 16) | If the AI misread the CV (wrong dates, wrong degree), the candidate can have it corrected and re-scored |
| Objection (Art. 21) | Under legitimate interest, the candidate can object to the profiling |
| Erasure (Art. 17) | CVs and scores are deleted after the recruitment, unless the candidate agrees to stay in a pool. If CVs were used for training, deleting them from the model is hard: one more reason not to train on them |

**Impact assessment:** mandatory. Systematic evaluation of personal aspects by automated processing, with decisions that significantly affect people, is the first case listed in Art. 35(3)(a).

## 5. The link with my own tool

The same mechanism decides my Build's status. My tool supports a decision (pay this supplier or not), and Article 22 stays out of play only while the human check is real. Scenario 1 shows what happens when the human is removed: the company needs an exception it probably cannot meet. My Week 9 top risk, the rubber-stamp check, is the slow version of the same failure.

---

*AI disclosure: I used Claude to check the GDPR article references and structure the tables; the assessment and the link to my tool are mine.*
