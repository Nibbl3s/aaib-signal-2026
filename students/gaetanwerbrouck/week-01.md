\---



week: 1

title: "What Does AI Actually Cost in Football Scouting?"

author: "Gaetan Werbrouck"

beat: "How Football Clubs Use Data to Find Undervalued Players"

skill: "Cost literacy"

date: 2026-09-23

\----------------



\## Hook



Football clubs increasingly use data to identify players who might be better than their reputation or transfer price suggests. AI could help scouts process thousands of player reports and statistics, but the interesting question is not whether AI is cheap. It is what the complete system actually costs.



\## The Numbers



Imagine a club wants an AI assistant to screen \*\*5,000 player profiles per month\*\* and identify potentially undervalued players for human scouts to investigate.



For each player, the system receives about \*\*2,000 input tokens\*\* containing statistics, recent performances, position, age, contract information and scouting notes. It produces about \*\*500 output tokens\*\* explaining why the player might be undervalued and what a scout should investigate.



That gives:



\* \*\*Input:\*\* 5,000 × 2,000 = \*\*10 million tokens/month\*\*

\* \*\*Output:\*\* 5,000 × 500 = \*\*2.5 million tokens/month\*\*



Using OpenAI's GPT-5.4 mini pricing of \*\*$0.75 per 1M input tokens\*\* and \*\*$4.50 per 1M output tokens\*\*:



\* Input: 10M ÷ 1M × $0.75 = \*\*$7.50\*\*

\* Output: 2.5M ÷ 1M × $4.50 = \*\*$11.25\*\*

\* Total AI token cost = \*\*$18.75/month\*\*

\* At $1 = €0.92, that is about \*\*€17.25/month\*\*



That number is surprisingly small. But token cost is not the whole business case.



Suppose 10% of the 5,000 profiles are flagged for human review. That means 500 profiles. If a scout spends 20 minutes checking each one at an estimated €40/hour, the human review costs about \*\*€6,667/month\*\*.



So the AI tokens are only around €17/month, while the human work created around the AI is thousands of euros.



\## The Insight



The surprising part is how little the actual tokens cost. I expected processing thousands of player profiles to produce a meaningful AI bill. Instead, the token cost is almost irrelevant compared with the cost of having people validate the recommendations.



This connects directly to the EuroShop cost model from the lab. The cheapest token price did not automatically produce the cheapest system. EuroShop's Budget tier had the lowest token cost, but its high error rate created €45,000 of human correction costs per month. The Premium tier had the highest token cost but the lowest total monthly cost because it produced fewer errors.



The lesson for football clubs is similar. A club should not ask only, "How much does the AI cost per token?" It should ask, "How much does the complete scouting workflow cost, and how much useful work does the AI actually remove or improve?"



Token awareness is therefore only the starting point. The real business question is what happens around the tokens.



\## The Question



What level of accuracy would an AI scouting system need before a club could trust it to replace part of the initial human screening process rather than simply adding another layer of work?



