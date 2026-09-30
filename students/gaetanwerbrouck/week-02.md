\# Week 2 — The Signal



\## Is AI the right tool?



For my beat, “How Football Clubs Use Data to Find Undervalued Players,” I tested whether AI could screen players against five fixed criteria: age, league minutes, goals and assists per 90, estimated market value, and whether the player was an outfield player. The AI had to classify each player as either meeting or not meeting all five conditions.



The test worked surprisingly well. I used 10 real player inputs and ran the same test twice. The classifications matched the expected answers in both runs. There were no F1–F6 failures in the actual classifications. There was one minor counting error in the explanation of the first run: it said five players met the criteria but only named four. The table itself was correct, and the error did not change any player classification.



However, this experiment also showed me that AI is not necessarily the right tool for this particular problem.



The task is completely rule-based. Once I have the player data, the answer is determined by five simple conditions. A spreadsheet can check whether the age is 23 or below, minutes are at least 1,000, goals plus assists per 90 are at least 0.50, market value is below €10 million, and the player is an outfield player. It can then filter the players who pass all five conditions.



This makes a spreadsheet a better solution for the basic screening step. It is deterministic, easy to audit, cheap to run repeatedly, and does not have the same risk of an AI misunderstanding a condition or producing an invented explanation. If a threshold changes, I can change the spreadsheet rule and immediately see which players are affected.



This does not mean AI has no role in football scouting. It becomes more useful when the problem is less structured. For example, a club could use AI to analyse large amounts of scouting reports, written player evaluations or other unstructured information and identify patterns for a scout to investigate. That is different from simply checking whether a number is above or below a threshold.



The main lesson from this week's experiment is therefore not that AI is bad at football scouting. It is that \*\*being able to use AI for a task does not mean AI is the right tool for it\*\*. In my specific screening experiment, the simplest solution is a spreadsheet or database filter. AI would add complexity without adding much value.



For the next stage of my beat, I would therefore look for a scouting problem where the information is more difficult to structure and verify. That is where AI could potentially provide more value than a basic rule-based tool.

