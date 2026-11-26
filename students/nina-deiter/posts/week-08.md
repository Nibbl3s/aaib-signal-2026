---
week: 8
title: "Good Enough Is Not Enough: Designing AI for Client Feedback"
author: "Nina Deiter"
beat: "When does AI actually help project managers in creative agencies — and when does it get in the way?"
skill: "Lock-in detection"
date: 2026-11-26
---

# Signal Post 8 – Good Enough Is Not Enough: Designing AI for Client Feedback

**Beat:** When does AI actually help project managers in creative agencies — and when does it get in the way?

## Hook

Token costs are not the real problem. The real problem is the error costs that come up when the tool is not chosen or designed properly. If project managers want to rely on a tool to save time and spend it on more valuable work, that tool first needs to go through a well-run design process.

## The company

I assume the company is a creative brand agency with five project managers. The agency is real, but I reduced the number of project managers significantly to make the numbers easier to follow. The project managers already work with Langdock. One budget constraint is that the licence costs have to be paid by the customers. There is no perfect workflow yet.

## The architecture

**Data:** The data is client feedback that the project managers currently have to scan, categorise, store and distribute by hand. Feedback that comes in by email should then be transferred to Langdock, for example into the project file.

**AI model:** The AI model is Langdock, which gives access to Claude, ChatGPT and Gemini. It works best for us because it combines the strongest models.

**Integration:** The integration could be a mix of manual input and automation. The project manager (PM) copies the feedback email into the respective project folder. There, an agent or skill processes the feedback into an Excel file, which is updated with every new piece of feedback. A fully automatic workflow is also possible, but I have not yet worked out how it would work. The PM sees the output in the project folder and can still use the chat function to adapt and correct it.

**Interface:** The PM sees the output in an Excel file. The file has the columns feedback summary, to-dos, correction loop, responsible and notes. The PM then distributes the feedback to the team. The sending-out is not linked to the feedback-to-task assistant. Correction loops are counted with each new piece of feedback.

**Governance:** The quality is checked by the PMs, who have the best overview of the whole project. The company-internal AI team is responsible for checking and maintaining the overall safety of Langdock.

## The defence

Langdock has been in use at the company for one year, so it makes sense to keep using and developing it. We also already have an Outlook–Langdock plugin, which integrates the AI into our daily tool. The setup is strong because it combines Claude, ChatGPT and Gemini, which are currently the most popular and reliable models, especially for PMs. These tools meet the needs of PMs. Creatives in the company have access to other tools that fit their tasks better.

If the vendor changes its pricing or disappears, that would be a shock at first. But everything can be saved and stored outside, and skills etc. can be exported. Since Langdock uses the other three vendors, we could switch to one of them without too much damage. Most people pay an average subscription of about €20 per month. People who need more tokens can upgrade to a higher plan.

The risk we are not seeing is that critical thinking fades over time because the tool is so easy to use. With the feedback-to-task assistant, PMs may stop questioning the output once they see that it works well most of the time. But there can always be a small mistake with a fatal impact.

## The question

I would change the design if I saw a positive effect on time and money saved with my tool and design.

---

**AI use:** I used an AI tool only to correct grammar and phrasing in my own text. The arguments, examples and analysis are my own.

