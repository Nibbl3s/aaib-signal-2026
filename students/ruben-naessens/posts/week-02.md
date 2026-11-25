---
week: 2
title: "Which Part of Recruitment Actually Needs AI?"
author: "Ruben Naessens"
beat: "AI in international recruitment"
skill: "No-AI decision framework"
date: 2026-11-18
---

# Which Part of Recruitment Actually Needs AI?

During my internship at Worldwiders, I worked with vacancies across different markets and languages. Job ads can describe similar requirements in very different ways. That makes extracting qualifications a plausible use for AI. Once those requirements are structured and verified, the next step may be much simpler. If a vacancy requires a forklift certificate, for example, an applicant’s verified certificate status can be represented as a field in the recruitment system.

## Five questions before using AI

1. **What problem am I solving?** Recruiters read vacancy descriptions and turn them into consistent requirements. My prompt drafts that structure, grouping education, experience, skills and languages into mandatory and preferred fields.
2. **Can a simpler method do it?** If a hiring manager already enters the requirements in separate fields, use those fields directly. For verified information such as possession of a certificate, a deterministic check is easier to audit.
3. **Where could AI help?** Free-text vacancies can mix requirements, preferences, duties and benefits. A model can interpret phrases such as “an advantage” and extract them into a consistent structure even when the ad has no dedicated list of optional qualifications.
4. **What happens when it is wrong?** A mislabeled field can make a recruiter look for the wrong skill or mistake an optional qualification for a requirement. The recruiter has to check the draft against the source before using it.
5. **Is the benefit worth the effort?** That depends on how much review and correction the draft takes. I tested extraction quality first. To evaluate the business case, I still need to time manual extraction and compare it with AI extraction plus review.

## What happened in ten tests

I ran the same v1 prompt on ten public vacancies from Multilingual Jobs Worldwide in separate ChatGPT chats. I set the expected checks before each run. Under my strict rule, an ad passed only if the output matched the expected checks and kept unrelated information out of the four fields.

**One of ten vacancies passed.** In nine, at least one item landed in the wrong category. That is an ad-level result from one recruitment site. Many individual qualifications came through correctly. For a junior IT support role in Málaga, the model preserved the French and English fluency requirements and kept point-of-sale experience optional. It also classified weekend availability as a technical or professional skill. In another case, it placed willingness to relocate alongside CRM and claims-platform skills. The team lead vacancy passed, including its minimum two years of leadership experience and its coaching requirements.

## Where I would draw the line

I would use AI to draft structured requirements from inconsistent job ads, with a recruiter reviewing the result. For verified facts already in the recruitment system, I would use ordinary rules. The next prompt should keep concrete skills such as coaching and troubleshooting while leaving work conditions and general personality traits out of the skills field. I would retest the same vacancies and then ask whether reviewing those drafts is faster than extracting the requirements manually.

[Supporting evidence: three borderline modality cases](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/ruben-naessens/evidence/week-02.md).

*AI-use disclosure: ChatGPT assisted with the test runs, analysis and drafting.*
