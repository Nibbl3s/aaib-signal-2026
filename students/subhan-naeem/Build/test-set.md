AI Market-Entry Risk Detector — Test Set

## Purpose

This test set evaluates whether the AI Market-Entry Risk Detector consistently classifies international market-entry information into the correct risk category.

The test set contains 15 standard cases and 3 challenge cases. Each case includes an input and an expected category.

## 1. Standard Test Cases

| ID  | Input                                                                                                                     | Expected Category     |
| --- | ------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| T01 | The government has introduced new restrictions on foreign companies operating in the country's telecommunications sector. | Legal/Regulatory Risk |
| T02 | The country's currency has lost 25% of its value against the euro over the past year.                                     | Economic Risk         |
| T03 | The country has experienced frequent political protests following a disputed election.                                    | Political Risk        |
| T04 | The country's main commercial port frequently experiences delays, causing significant supply-chain disruptions.           | Operational Risk      |
| T05 | The country's consumer market is growing rapidly, with no specific risk indicated in the information provided.            | No Major Risk         |
| T06 | Inflation has reached 15%, significantly increasing the cost of goods and services.                                       | Economic Risk         |
| T07 | A new law requires foreign companies to obtain a special licence before opening stores.                                   | Legal/Regulatory Risk |
| T08 | A shortage of skilled workers makes it difficult for companies in the sector to recruit qualified employees.              | Operational Risk      |
| T09 | The government has announced that it may impose sanctions on companies from certain foreign countries.                    | Political Risk        |
| T10 | The country's road and electricity infrastructure is unreliable outside major cities.                                     | Operational Risk      |
| T11 | The government is considering increasing corporate taxes for foreign-owned companies next year.                           | Legal/Regulatory Risk |
| T12 | The economy entered a recession, and consumer spending has fallen significantly.                                          | Economic Risk         |
| T13 | A change in government has created uncertainty about whether existing foreign-investment policies will continue.          | Political Risk        |
| T14 | The country has a large, growing customer base for the company's product, and no significant risk is mentioned.           | No Major Risk         |
| T15 | The country's data-protection rules prohibit companies from transferring certain customer data outside the country.       | Legal/Regulatory Risk |

## 2. Challenge Test Cases

These cases test how the detector handles overlapping risks, incomplete information, and competing risk signals.

| ID  | Input                                                                                                                                                                            | Expected Category     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| C01 | The government announces that companies in the energy sector will face a 20% increase in taxes next year, while the country's currency has also fallen sharply against the euro. | Legal/Regulatory Risk |
| C02 | The government has announced new regulations for foreign companies, but the announcement does not explain what the regulations will require or when they will take effect.       | Legal/Regulatory Risk |
| C03 | The country is experiencing a shortage of imported components, while the government is considering new import restrictions that could make those components more expensive.      | Operational Risk      |

## 3. Testing Procedure

- Each of the 15 standard cases was run twice.
- Each of the 3 challenge cases was run twice.
- The expected category was compared with the AI's output for each run.
- The AI was expected to select exactly one of the five categories defined in Prompt v1.

## 4. Recorded Results

| Test Group      | Number of Cases | Runs per Case | Total Runs | Recorded Correct Classifications |
| --------------- | --------------- | ------------- | ---------- | -------------------------------- |
| Standard cases  | 15              | 2             | 30         | 30/30                            |
| Challenge cases | 3               | 2             | 6          | 6/6                              |
| **Total**       | **18**          | **2**         | **36**     | **36/36**                        |

**Recorded result:** All 18 cases were classified correctly in both runs. No failures were recorded under the F1–F6 failure categories.

## 5. Key Observation

Although the detector classified all test cases correctly according to the expected categories, the challenge cases exposed a limitation of single-category classification. A situation can involve multiple risks, but the tool returns only one category. For example, C01 contains both a tax-related legal/regulatory risk and a currency-related economic risk. The expected primary category was Legal/Regulatory Risk.

These results demonstrate consistency on this test set, not guaranteed accuracy on all real-world market-entry information.
