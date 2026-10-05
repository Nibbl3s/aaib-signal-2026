---
week: 2
title: "Where is my claim? The best answer is a database field, not a chatbot"
author: "Guillaume Vandenweghe"
beat: "What AI really costs in the insurance sector, with a focus on claims handling and customer service"
skill: "Capability skepticism"
date: 2026-10-09
---
Every claims department gets the same email hundreds of times a week: "Where is my claim?" It looks like the perfect job for an AI assistant. It is short, it is repetitive, and customers want an answer fast. I ran it through the five-question "no AI" framework, and AI fails it on the first question.
 
The use case
 
A mid-sized Belgian insurer (same example as my Week 1 post) receives 20,000 claim emails per month. I assume a quarter of them are status questions: about 5,000 per month. That 25% is my assumption, not a measured figure. Counting it is exactly what my Build is for.
 
The five questions
 
1. Do we already know the answer? Yes. The status of every claim sits in the claims management system: received, expert appointed, waiting for documents, approved, paid on a date. The answer exists. Nobody needs to generate it.
 
2. Is being wrong worse than being slow? Yes. A late reply annoys a customer. A wrong reply ("your payment was sent yesterday" when it was not) makes them call twice, lose trust and possibly file a complaint. In insurance a complaint can end up at the Ombudsman.
 
3. Is the information stable? No. A claim's status can change daily. A language model does not know today's status of claim [X]. Without a live connection to the system it can only produce a plausible guess, which is the same failure as the fake legal citations in this week's gallery.
 
4. Can we verify the AI's answer? Only by looking up the status in the claims system. But once you have looked it up, you already have the answer, and the AI added nothing except a second place where an error can creep in.
 
5. What is the simplest tool? A status field plus a template. When a claim changes status, the system sends an automatic SMS or email, and the customer portal shows a simple tracker ("step 3 of 5: expert visit planned"). A rule answers the email: IF the email asks for status THEN send the template filled with the live status.
 
Cost, accuracy, trust
 
Cost: a template filled from a database costs close to nothing per message. An LLM that answers from a live lookup still needs that same lookup, plus tokens, plus a review step.
Accuracy: the template is exactly as accurate as the claims system. The AI is at best that accurate, and at worst inventive.
Trust: the regulator and the Ombudsman will ask what the insurer told the customer and why. "The system status said X" is an answer. "The model generated it" is not.
 
Using my Week 1 assumptions (12% errors, €8 to fix each one), an AI answering 5,000 status emails without live data would produce about 600 wrong answers and €4,800 in correction work per month, before counting the complaints.
 
This is not "AI bad, spreadsheet good"
 
AI can still have a role here: sorting the incoming email, so the status questions reach the template and the real complaints reach a human. That is exactly the job I am testing in my Build. The lesson is narrower: AI is useful to route the question, not to know the answer.
 
The question
 
How many status emails would disappear if the insurer simply sent a proactive message every time a claim changed status, before anyone builds a chatbot to answer them?
 
*AI note: I used Claude to help structure this post and check my calculations. The use case, the assumptions and the conclusions are mine.*
 
