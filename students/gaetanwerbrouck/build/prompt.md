1\. The player is 23 years old or younger.

2\. The player has played at least 1,000 league minutes.

3\. The player's goals + assists per 90 is at least 0.50.

4\. The player's estimated market value is below €10 million.

5\. The player is an outfield player.



---

# Week 4 — current Build note (ScoutLab V2)

The five-rule prompt above is the historical V1 prompt from Week 2. It is not the prompt or scoring logic for the current application.

ScoutLab V2 is a Streamlit data-analysis workflow documented in the ScoutLab README. It uses explicit position-specific percentile weights and same-position cosine similarity; it does not call an LLM API. Current evaluation inputs and expected answers are in the ScoutLab evaluation-plan file. Do not report the old V1 20/20 result as a V2 result.
