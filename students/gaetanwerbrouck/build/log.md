\# Week 2 — Build Log



\## Goal



Test whether an AI system can consistently classify football players against five explicit scouting criteria.



\## Prompt



The player must meet all five conditions:



1\. The player is 23 years old or younger.

2\. The player has played at least 1,000 league minutes.

3\. The player's goals + assists per 90 is at least 0.50.

4\. The player's estimated market value is below €10 million.

5\. The player is an outfield player.



\## Test methodology



I created a test set of 10 real player inputs with the expected classification written before running the AI.



I ran the complete test set twice using the same criteria. I compared each AI result against the expected answer and compared Run 1 with Run 2.



Failure categories:



\* F1 — Wrong

\* F2 — Fabricated

\* F3 — Missed

\* F4 — Format

\* F5 — Refused

\* F6 — Inconsistent



\## Results



| Player            | Expected               | Run 1                  | Run 2                  | Failure |

| ----------------- | ---------------------- | ---------------------- | ---------------------- | ------- |

| Christos Tzolis   | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Nicolò Tresoldi   | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Romeo Vermant     | Meets criteria         | Meets criteria         | Meets criteria         | None    |

| Joseph Opoku      | Meets criteria         | Meets criteria         | Meets criteria         | None    |

| Mihajlo Cvetković | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Max Dean          | Meets criteria         | Meets criteria         | Meets criteria         | None    |

| Pape Moussa Fall  | Meets criteria         | Meets criteria         | Meets criteria         | None    |

| Nilson Angulo     | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Hugo Vetlesen     | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |

| Raul Florucz      | Does not meet criteria | Does not meet criteria | Does not meet criteria | None    |



\## Failure analysis



There were no F1–F6 failures in the final classification results. The AI produced the same classification for all 10 players in both runs and matched the expected answers.



There was one minor internal counting error in Run 1: the explanation said that five players met the criteria but only named four players. The actual classification table correctly identified the four players who met all five criteria. This did not change any individual classification and did not occur as a difference between Run 1 and Run 2.



One useful observation from the test is that exact wording of thresholds matters. For example, Mihajlo Cvetković has an estimated market value of exactly €10 million. Because the rule says "below €10 million", he does not qualify.



\## Summary



The test suggests that the AI handled this bounded classification task reliably across the 10 test inputs and two runs. The task is relatively easy to verify because every decision can be checked against the underlying player data.



However, this does not mean that AI is automatically the best tool for the task. A spreadsheet or database filter could perform the same five-rule classification more simply and deterministically. AI becomes more interesting when the scouting process includes less structured information, such as scouting reports, written evaluations or other qualitative evidence.



\## Data sources



\* Performance statistics: FBref, Belgian Pro League 2025–26.

\* Estimated market values: Transfermarkt.

\* Accessed: September 2026.



\## FabLab probe plan



The FabLab introduction took place on Monday 28/09. We had a tour of the available equipment and examples of what could be made, including laser cutting and 3D printing.



| Machine                   | Artifact                                                                                                 | FabLab session                     |

| ------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------- |

| Laser cutter              | A physical visualisation of the player-screening criteria, such as a layered or labelled scouting filter | Monday 28/09 — FabLab introduction |

| 3D printer                | A small physical representation of a player profile or scouting data structure                           | Monday 28/09 — FabLab introduction |

| \[Fabrication] | A second physical/visual representation of the football scouting concept                                 | Monday 28/09 — FabLab introduction |



The purpose of these probes is to explore how the digital player-screening concept could be translated into a physical or visual artifact.



