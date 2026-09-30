\# Week 2 Test Set



\## Classification rules



A player meets the criteria only if \*\*all five conditions are true\*\*:



1\. Age <= 23

2\. League minutes >= 1,000

3\. Goals + assists/90 >= 0.50

4\. Estimated market value < €10 million

5\. Outfield player



\## Test cases



| #  | Player            | Age | Position | League minutes | Goals + assists/90 | Market value | Expected classification |

| -- | ----------------- | --: | -------- | -------------: | -----------------: | -----------: | ----------------------- |

| 1  | Christos Tzolis   |  23 | MF, FW   |          3,068 |               1.17 |       €40.0m | Does not meet criteria  |

| 2  | Nicolò Tresoldi   |  20 | FW       |          2,488 |               0.87 |       €25.0m | Does not meet criteria  |

| 3  | Romeo Vermant     |  21 | FW, MF   |          1,328 |               0.68 |        €9.0m | Meets criteria          |

| 4  | Joseph Opoku      |  19 | MF, FW   |          2,443 |               0.63 |        €4.5m | Meets criteria          |

| 5  | Mihajlo Cvetković |  18 | FW, MF   |          1,622 |               0.61 |       €10.0m | Does not meet criteria  |

| 6  | Max Dean          |  21 | FW, MF   |          1,180 |               0.61 |        €2.5m | Meets criteria          |

| 7  | Pape Moussa Fall  |  21 | FW       |          1,774 |               0.61 |        €3.5m | Meets criteria          |

| 8  | Nilson Angulo     |  22 | FW, MF   |          1,894 |               0.52 |       €17.0m | Does not meet criteria  |

| 9  | Hugo Vetlesen     |  25 | MF, FW   |          1,289 |               0.77 |        €5.0m | Does not meet criteria  |

| 10 | Raul Florucz      |  24 | FW, MF   |          1,207 |               0.75 |        €4.0m | Does not meet criteria  |



\## Expected-answer notes



The expected classifications were determined from the five rules before testing the AI.



\* \*\*Christos Tzolis:\*\* Does not meet criteria because his market value (€40.0m) is not below €10m.

\* \*\*Nicolò Tresoldi:\*\* Does not meet criteria because his market value (€25.0m) is not below €10m.

\* \*\*Romeo Vermant:\*\* Meets all five criteria.

\* \*\*Joseph Opoku:\*\* Meets all five criteria.

\* \*\*Mihajlo Cvetković:\*\* Does not meet criteria because his market value is exactly €10.0m; the rule requires \*\*below\*\* €10m.

\* \*\*Max Dean:\*\* Meets all five criteria.

\* \*\*Pape Moussa Fall:\*\* Meets all five criteria.

\* \*\*Nilson Angulo:\*\* Does not meet criteria because his market value (€17.0m) is not below €10m.

\* \*\*Hugo Vetlesen:\*\* Does not meet criteria because he is 25 years old, exceeding the age limit of 23.

\* \*\*Raul Florucz:\*\* Does not meet criteria because he is 24 years old, exceeding the age limit of 23.



\## Data sources



\* \*\*Performance statistics:\*\* FBref, Belgian Pro League 2025–26.

\* \*\*Estimated market values:\*\* Transfermarkt.

\* \*\*Accessed:\*\* September 2026.

