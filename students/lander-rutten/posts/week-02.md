1)
Problem 1: Customer Support Email Response
Scenario: A customer writes: "I ordered item X on [date] and it hasn't arrived. What do I do?"
Task: Respond with next steps (check tracking, estimate delivery, offer refund).
Your Assessment:
•	 x	AI-Suitable
•	 	AI-Risky
•	 	AI-Incompatible
Why:  AI is trained in customer service and the worst thing that can happen is that the customer doesn’t find it. 
Problem 2: Medical Diagnosis
Scenario: A patient describes symptoms. The system recommends whether to see a doctor or self-treat.
Task: Assess symptoms and recommend action.
Your Assessment:
•	 	AI-Suitable
•	 x	AI-Risky
•	 	AI-Incompatible
Why: Because symptoms are different for everyone and it can cause bad consequences
Problem 3: Meeting Notes Summarization
Scenario: A 1-hour meeting is recorded and transcribed (10,000 words). Task: extract key decisions and action items.
Task: Generate a 300-word summary with decisions and owners.
Your Assessment:
•	 x	AI-Suitable
•	 	AI-Risky
•	 	AI-Incompatible
Why: Because AI can consume information much faster than humans and it is trained to gather information an explain it to us.



2) Use Case: Job Requirement Extraction Tool (HR Beat)
Problem: Extract explicit minimum qualifications (Degree, Years of Experience, Required Hard Skills) from unstructured job descriptions into a structured JSON format.
1. Do you know the answer already?
•	Answer: No.
•	Reasoning: Each incoming job description is unformatted, unique raw text that must be processed individually to structure its data.
2. Is the cost of being wrong higher than the cost of being slow?
•	Answer: No.
•	Reasoning: The tool functions as an initial triage assistant for recruiters. If the tool extracts a skill incorrectly, a human recruiter will spot it during review. The error cost is low (a few seconds of human correction time) compared to the time saved manually scanning hundreds of job ads.
3. Is the information stable or changing rapidly?
•	Answer: Stable.
•	Reasoning: Once a job description text is pasted into the prompt, the source text remains static. The requirements inside that specific document do not change while being processed.
4. Can you verify the AI's answer?
•	Answer: Yes.
•	Reasoning: We have the original job description text as our ground truth. Every extracted item can be verified word-for-word against the source text to ensure no facts were fabricated or missed.
5. What's the simplest tool that solves this?
•	Answer: AI (Large Language Model) with Human Verification.
•	Reasoning: Traditional rules or Regular Expressions break easily because job ads variate wildly in syntax, language, and formatting. AI handles unstructured text extraction exceptionally well. Since the cost of error is low and the output is fully verifiable against the source text, AI is the optimal tool for this job.
Decision: Use AI with a human-in-the-loop

Signal post2:

Week 2 – Capability Skepticism
During week 2, we learned about the limitations of AI and why we should not always trust the answers it gives us. I found this lesson interesting because I already use AI quite often, but I did not always think about the fact that AI can give an answer that sounds very convincing while still being completely wrong. The examples from the lesson made this clear. AI can give specific numbers, sources, names and explanations that look correct, even when the information is made up. This showed me that checking the output of AI is very important.
One of the most interesting parts of the lesson was learning about hallucinations. A hallucination happens when AI generates information that is not correct but presents it as if it were true. We looked at several examples, such as fake legal cases, incorrect company information and made-up sources. What surprised me was that these mistakes can be difficult to notice because the answer can look very professional and detailed. This taught me that I should not only look at how confident or professional an answer sounds, but also check whether the information can actually be verified.
We also learned about different types of AI errors. The error codes F1 to F6 were useful because they give a clear way to classify what went wrong. F1 means an error, F2 means fabricated information, F3 means something was missed, F4 is a formatting error, F5 means the AI refused the task, and F6 means that the AI gave inconsistent results. I think this is useful because it makes it easier to analyse an AI tool instead of simply saying that the answer was "wrong".
I also applied what we learned to my own beat. My beat focuses on using AI in HR, more specifically on extracting the most important qualifications from a job vacancy. I created a test set with different vacancies and used my prompt to analyse them. I then compared the results with the expected answers and looked at where the AI made mistakes. This was interesting because the AI was able to identify many qualifications correctly, but it was not always consistent. In some cases, it focused on information that was less important or missed certain qualifications. This showed me that even when an AI tool seems to work well, it is still necessary to test it with different inputs.
Another important lesson was that AI is not always the best solution. We learned that we should first ask whether the problem really needs AI, whether mistakes would have serious consequences, whether the information is up to date and whether the result can be checked. Sometimes a simple rule, spreadsheet or human decision can be a better solution.
Overall, I found this lesson useful and interesting. I learned that AI can be very helpful, but that we should remain critical when using it. Testing my own beat made the lesson more practical because I could see the limitations of AI in my own project. In the future, I will pay more attention to checking AI outputs instead of automatically assuming that a detailed answer is correct.
