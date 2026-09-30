\# Week 2 Capability Framework



\## Use case



Using AI to screen football players for potentially undervalued profiles based on a fixed set of performance, age, position and estimated market-value criteria.



\## 1. Do you know the answer already?



No. The purpose of the screening is to identify players who meet the criteria, so the final shortlist is not known beforehand.



However, once the player data is available, the actual classification is deterministic. A player either meets all five conditions or does not.



\## 2. Is the cost of being wrong higher than the cost of being slow?



For an initial scouting shortlist, the cost of being wrong is relatively limited because the result can be checked by a scout before any transfer decision is made. The cost of being slow is also relatively low for this stage.



The situation would be different if the AI output were used directly to make a transfer decision. A wrong recommendation could have significant financial and sporting consequences. AI should therefore not be treated as the final decision-maker.



\## 3. Is the information stable or changing rapidly?



The information changes over time. Player minutes and performance statistics change as the season progresses, and estimated market values can also change.



This means the AI should not be expected to know the current values from memory. The relevant data should be supplied to the system or retrieved from reliable, current sources.



\## 4. Can you verify the AI's answer?



Yes. The answer can be checked against the underlying player data.



In the Week 2 experiment, each player was given an age, number of league minutes, goals and assists per 90, position and estimated market value. The classification could therefore be checked directly against the five rules.



This makes the use of AI safer than a situation where the answer cannot be independently verified.



\## 5. What's the simplest tool that solves this?



For the exact classification task tested in this experiment, a spreadsheet or database filter is probably simpler than AI.



The five conditions are numerical and deterministic. A spreadsheet can apply them consistently without generating explanations or introducing language-model errors.



AI becomes more useful when the scouting task becomes less structured, for example when analysing scouting reports, summarising qualitative information, comparing written assessments or combining structured statistics with unstructured information.



\## Conclusion



This use case shows why AI capability and AI usefulness are not the same thing. The AI model was able to apply the five rules consistently in the test, but that does not automatically make AI the best tool for the task.



For a simple rule-based player filter, a spreadsheet is sufficient. AI becomes more interesting further up the scouting process, where the information is less structured and requires interpretation.



