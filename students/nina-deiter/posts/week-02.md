---
week: 2
title: "When AI Gets in the Way: Why Creative Agencies Still Need Human Judgment"
author: "Nina Deiter"
beat: "When does AI actually help project managers in creative agencies — and when does it get in the way?"
skill: "Capability skepticism"
date: 2026-10-03
---

#The Problem

Project managers in creative agencies regularly receive client feedback that needs to be interpreted, organised and translated into actionable tasks for designers. AI promises to automate this process, potentially saving time and reducing administrative work.

But what happens when client feedback is unclear? Can AI reliably decide what needs to be changed, or might it create unnecessary work by interpreting vague comments too confidently?

#Applying the No-AI Decision Framework

**Q1 – Do we already know the answer?**

Not always. Creative feedback can be subjective and incomplete. For example, a client might mention that text is left-aligned without explaining why this is a problem or what should change.

AI can identify the topic, but it cannot reliably determine the client's actual intention from missing information.

**Q2 – Is the cost of being wrong higher than the cost of being slow?**

Potentially, yes. If AI incorrectly interprets feedback and creates a task, designers may spend time making changes the client never requested. This can lead to additional revisions, wasted resources and client dissatisfaction.

Asking one clarification question may take longer initially but prevent unnecessary work.

**Q3 – Is the information stable or changing rapidly?**

Creative requirements frequently evolve through client discussions, design reviews and revisions. An AI-generated task based on incomplete feedback may quickly become irrelevant once the client's actual expectations are clarified.

**Q4 – Can we verify the AI's answer?**

Sometimes. Straightforward feedback, such as a button being too small, can usually be translated into a task and checked against the original comment.

However, ambiguous feedback cannot always be verified without additional information from the client. A plausible AI-generated task is not necessarily the correct one.

**Q5 – What is the simplest solution?**

For unclear feedback, the simplest solution is direct human clarification. Instead of allowing AI to independently create a design task, the project manager should ask the client what specifically needs improvement.

AI can still help organise feedback, but it should not replace decisions that require missing context.

#Evidence From My AI Build

To investigate this, I developed a Creative Agency Feedback-to-Task Assistant using publicly available UICrit design feedback.

The tool classifies feedback, determines whether action is required, generates a task and suggests a responsible professional role.

In my first testing phase, most feedback was successfully converted into meaningful tasks, including longer and linguistically challenging comments.

However, Prompt v2 revealed an important limitation. In test case T10, German feedback described left-aligned text without clearly specifying a required change. Instead of requesting clarification, the AI generated a design task and assigned it to a UI designer.

This illustrates how AI can produce a convincing output even when the underlying instruction is insufficient.

#My Verdict: AI Should Assist, Not Assume

AI can add value by structuring and summarising design feedback into short, actionable tasks. Especially in ongoing creative projects, this could help project managers maintain a clear overview, keep track of previous feedback and avoid repeatedly reading lengthy client comments.

However, AI should not independently interpret ambiguous requirements or make creative decisions based on missing information. Human judgment remains essential to prevent unnecessary work and misunderstandings.

An important next step would be to test how reliably the tool processes longer and more complex feedback. This could reveal where AI provides the greatest value alongside human intelligence: AI could organise and condense information, while project managers verify its interpretation and make the final decisions.

My conclusion: AI helps creative project managers maintain structure and continuity throughout a project, but gets in the way when it replaces clarification and human judgment with assumptions.
