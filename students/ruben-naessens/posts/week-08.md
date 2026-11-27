---
week: 8
title: "Who checks the requirements before they reach the recruiter’s system?"
author: "Ruben Naessens"
beat: "AI in international recruitment"
skill: "Design defense"
date: 2026-11-26
---

<!-- Local working copy. Ruben: complete the internship prompt, review the post and closing question, and set the date when you publish. -->

A Málaga IT support vacancy asks for troubleshooting and network knowledge. It also asks applicants to work occasional weekends. In the original extraction test, all three ended up among the skills. A recruiter who searches the resulting records for technicians needs the first two pieces of information. The third belongs elsewhere. That small mistake gives a practical starting point for designing a recruitment tool. Where would someone catch it before the record is used again?

The proposal is for one multilingual recruitment team at Worldwiders, whose public business includes language recruitment. It covers extracting requirements from advertisements. Candidate records and hiring decisions stay outside the pilot. The planning case allows €3,744 for first-year setup and operation at 100 vacancies a month. Those are coursework assumptions. The company has supplied neither a budget nor a description of its internal systems. [Company background](https://worldwiders.com/about-us)

[Ruben 1 — Use 20–30 words to describe a specific recruitment task you know and why you would try extraction or a structured intake form first.]

## From an advert to an approved record

The **data layer** starts when a recruiter selects an approved vacancy text and removes unnecessary contact details. A private database keeps the source version beside the draft so a later edit can be traced. An encrypted backup is budgeted separately. An applicant tracking system, or ATS, is the proposed destination for approved fields. The pilot assumes the team already has one.

The **model layer** would send only the vacancy and extraction instructions to GPT-5.4 mini. The output has eight lists covering education, experience, professional skills and languages, each split into required and preferred. The earlier manual ChatGPT trial recorded one strict pass in ten advertisements. Nine had at least one classification error. The proposed API model still needs its own evaluation. [Original test log](https://github.com/Nibbl3s/aaib-signal-2026/blob/53a5696410e63fe13cb000e5bf73fae556f10467/students/ruben-naessens/build/log.md)

The **integration layer** checks the response structure and prevents duplicate jobs. A valid list can still put the wrong item in the right-looking box. The **interface layer** therefore shows the original and the draft side by side. A recruiter checks each field, including empty ones, corrects errors and approves the record. Only then can it be exported. The recruiter confirms transfer into the ATS. That final step takes time and belongs in the cost model.

The Valencia vacancy illustrates a different review. It specifies at least B1 Spanish and describes B2B experience as ideal. A reviewer has to check that the language threshold survived extraction and that the preference for B2B sales stayed in the preferred list.

The **governance layer** assigns approval to the recruiter and operation to an IT owner. It records changes and schedules monthly checks on known vacancies. During an outage, staff can continue entering requirements manually and reconcile those jobs afterwards. If the provider changes, the team can retain approved records in JSON or CSV. The design reserves eight developer hours and two reviewer hours, estimated at €470, to adapt and retest a replacement. [Architecture sketch](https://github.com/Nibbl3s/aaib-signal-2026/blob/53a5696410e63fe13cb000e5bf73fae556f10467/students/ruben-naessens/evidence/week-08-architecture.md)

## What would the review step cost?

At 1,200 ads a year, twelve manual minutes per ad at €35 an hour gives €8,400 of staff time. At four minutes for the whole assisted task, staff time would cost €2,800. Setup of €2,400, fixed operation of €1,200 and a €144 model-use allowance bring the first-year total to €6,544. The €1,856 difference is capacity the team would still have to put to use. Neither timing has been measured end to end.

At 100 ads in a steady month, the model budgets about €345 including review and excluding the one-time setup. At 300 ads it projects €836 on the same basis. That projection assumes the reviewers and the small database can handle the queue. At the base volume, an assisted task averaging more than about six minutes and 39 seconds would use up the first-year advantage. [Cost model and working](https://github.com/Nibbl3s/aaib-signal-2026/blob/53a5696410e63fe13cb000e5bf73fae556f10467/students/ruben-naessens/evidence/week-08-cost-model.md)

I’d have a recruiter check every advert for now. The Málaga test listed weekend work as an IT skill. I’d try checking only flagged adverts if the pilot found no similar mistakes in the unflagged ones.

The proposed trial pairs manual and assisted processing on 20 representative vacancies, times both through ATS entry and checks every approved mandatory requirement against the source. It would record both the correction time and any errors left after approval. The reviewer would also record which drafts the tool flagged before review and which errors they found in the unflagged drafts.

Think of the last multilingual vacancy you worked on. Which requirement would you still check against the original advert if the AI flagged nothing, and why?

*ChatGPT organised the existing design, checked the calculations, drafted the factual passages, suggested wording for the recruiter-review decision and proposed the closing question.*
