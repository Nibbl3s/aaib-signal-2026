# Build log — every run, every failure (Week 2)

## Week 2 — Transport-mode classification

### Method and execution details

- Date: 2026-10-04.
- AI service recorded by the tester: ChatGPT.
- Model: GPT-6 Astra.
- Reasoning effort: Medium.
- Ten inputs and expected answers were saved before testing.
- Test 01 was run twice individually using prompt v1, in separate chats.
- Tests 02–10 were run together in two separate batch chats using prompt v1b.
- Prompt v1b adapted the instructions to process numbered descriptions separately and return a numbered result for each.
- Expected answers were not included in the testing prompts.
- Run numbers below group attempts by test. Actual execution order was Test 01 twice, then the first batch of Tests 02–10, then the second batch.
- Actual responses are preserved below. Assessment was assisted by AI against the saved expected answers.
- A pass requires the expected label, accurate supporting evidence without invented facts, and the required Mode / Evidence / Reason fields.

### Failure categories

- F1 — Wrong answer
- F2 — Fabricated information
- F3 — Missed required information
- F4 — Incorrect output format
- F5 — Refused the task
- F6 — Inconsistent between repeated runs

An appropriate NOT ENOUGH INFORMATION or OUT OF SCOPE answer is not a refusal.

### Run 01 — Test 01, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1  
Execution: Individual chat

Actual response:

Mode: ROAD  
Evidence: "Partial-Truck Load (PTL) and Full-Truck Load (FTL)"  
Reason: The description explicitly identifies truck transport for freight shipments.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 02; no inconsistency observed.

### Run 02 — Test 01, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1  
Execution: Individual chat

Actual response:

Mode: ROAD  
Evidence: "Partial-Truck Load (PTL) and Full-Truck Load (FTL)"  
Reason: The description explicitly identifies truck transport for freight shipments.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 01; no inconsistency observed.

### Run 03 — Test 02, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 02:  
Mode: SEA  
Evidence: “ocean transport”  
Reason: The service explicitly provides ocean transport.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 04. Test number is the batch identifier.

### Run 04 — Test 02, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 02:  
Mode: SEA  
Evidence: “ocean transport”  
Reason: The service explicitly provides ocean transport.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 03; no inconsistency observed.

### Run 05 — Test 03, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 03:  
Mode: AIR  
Evidence: “Air Freight”  
Reason: The description explicitly identifies an air freight service.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 06; classification rests on explicit wording.

### Run 06 — Test 03, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 03:  
Mode: AIR  
Evidence: “Air Freight”  
Reason: The description explicitly identifies an air freight service.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 05; no inconsistency observed.

### Run 07 — Test 04, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 04:  
Mode: NOT ENOUGH INFORMATION  
Evidence: “ocean, road, and rail”  
Reason: Several available modes are listed without identifying one service or combining them in one shipment.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Correctly distinguishes a list of options from a combined journey. Identical to Run 08.

### Run 08 — Test 04, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 04:  
Mode: NOT ENOUGH INFORMATION  
Evidence: “ocean, road, and rail”  
Reason: Several available modes are listed without identifying one service or combining them in one shipment.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 07; no inconsistency observed.

### Run 09 — Test 05, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 05:  
Mode: MULTIMODAL  
Evidence: “Combine ocean and landside transport in one booking”  
Reason: The description explicitly combines ocean and land transport in one freight journey.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Matches the saved interpretation of combined ocean and landside transport; does not invent a specific land mode. Identical to Run 10.

### Run 10 — Test 05, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 05:  
Mode: MULTIMODAL  
Evidence: “Combine ocean and landside transport in one booking”  
Reason: The description explicitly combines ocean and land transport in one freight journey.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 09; no inconsistency observed.

### Run 11 — Test 06, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 06:  
Mode: NOT ENOUGH INFORMATION  
Evidence: No explicit transport mode stated.  
Reason: General freight shipping and logistics services do not identify a transport mode.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Not applicable; correct missing-information message
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Does not infer sea transport from “shipping.” Identical to Run 12.

### Run 12 — Test 06, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 06:  
Mode: NOT ENOUGH INFORMATION  
Evidence: No explicit transport mode stated.  
Reason: General freight shipping and logistics services do not identify a transport mode.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Not applicable; correct missing-information message
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 11; no inconsistency observed.

### Run 13 — Test 07, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 07:  
Mode: OUT OF SCOPE  
Evidence: “via rail”  
Reason: The description identifies rail as the only transport mode.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Recognises an explicitly stated unsupported mode rather than treating it as missing information. Identical to Run 14.

### Run 14 — Test 07, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 07:  
Mode: OUT OF SCOPE  
Evidence: “via rail”  
Reason: The description identifies rail as the only transport mode.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 13; no inconsistency observed.

### Run 15 — Test 08, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 08:  
Mode: ROAD  
Evidence: “Автоперевозки”  
Reason: The description explicitly identifies road freight transport.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Preserves the Russian source wording in its evidence. Identical to Run 16.

### Run 16 — Test 08, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 08:  
Mode: ROAD  
Evidence: “Автоперевозки”  
Reason: The description explicitly identifies road freight transport.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 15; no inconsistency observed.

### Run 17 — Test 09, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 09:  
Mode: MULTIMODAL  
Evidence: “мультимодальные схемы транспортировки с использованием нескольких видов транспорта”  
Reason: The description explicitly specifies multimodal transportation using several transport modes.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Matches the expected label and preserves the Russian evidence. Identical to Run 18.

### Run 18 — Test 09, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 09:  
Mode: MULTIMODAL  
Evidence: “мультимодальные схемы транспортировки с использованием нескольких видов транспорта”  
Reason: The description explicitly specifies multimodal transportation using several transport modes.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 17; no inconsistency observed.

### Run 19 — Test 10, first attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 1

Actual response:

Test 10:  
Mode: NOT ENOUGH INFORMATION  
Evidence: “Автомобильные, железнодорожные, морские, авиаперевозки”  
Reason: The description lists separate transport options without identifying one service or combining modes in one shipment.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Correctly distinguishes listed transport options from a combined journey. Identical to Run 20.

### Run 20 — Test 10, second attempt

Date: 2026-10-04  
AI service: ChatGPT  
Model: GPT-6 Astra  
Reasoning effort: Medium  
Prompt version: v1b  
Execution: Batch 2

Actual response:

Test 10:  
Mode: NOT ENOUGH INFORMATION  
Evidence: “Автомобильные, железнодорожные, морские, авиаперевозки”  
Reason: The description lists separate transport options without identifying one service or combining modes in one shipment.

Assessment:
- Correct expected label: Yes
- Accurate supporting quotation: Yes
- Required Mode / Evidence / Reason format: Yes
- Overall PASS or FAIL: PASS
- Failure category: None
- Notes: Identical to Run 19; no inconsistency observed.

## Results summary

| Test | Expected label | First attempt | Second attempt | Consistency |
|---|---|---|---|---|
| 01 | ROAD | PASS | PASS | Identical |
| 02 | SEA | PASS | PASS | Identical |
| 03 | AIR | PASS | PASS | Identical |
| 04 | NOT ENOUGH INFORMATION | PASS | PASS | Identical |
| 05 | MULTIMODAL | PASS | PASS | Identical |
| 06 | NOT ENOUGH INFORMATION | PASS | PASS | Identical |
| 07 | OUT OF SCOPE | PASS | PASS | Identical |
| 08 | ROAD | PASS | PASS | Identical |
| 09 | MULTIMODAL | PASS | PASS | Identical |
| 10 | NOT ENOUGH INFORMATION | PASS | PASS | Identical |

- First attempts: 10/10 passed.
- Second attempts: 10/10 passed.
- Overall observed success rate: 20 ÷ 20 × 100 = 100%.
- Individual v1 results: 2/2 passed, covering one distinct input.
- Batch v1b results: 18/18 passed, covering nine distinct inputs.
- Observed failures: 0.
- Inconsistent pairs: 0/10.

## Interpretation and limitations

The classifier matched the saved expected answers for these ten descriptions, including Russian text, missing information, unsupported rail transport, and lists of separate service options.

This result does not establish 100% accuracy on unseen freight descriptions. The inputs are short, selected public service descriptions, and many contain explicit transport terms. They do not represent the full difficulty of customer emails, incomplete shipment requests, conflicting information, or unusual freight terminology.

The combined result also covers two prompt versions and two execution methods. Tests 02–10 shared context within each batch, so their results should not be described as independent individual-chat tests. The repeated batches produced identical responses, but two repetitions provide limited evidence of reliability.

Further testing should use unseen, more ambiguous descriptions in individual chats and compare the classifier with a simple keyword or rules-based approach. These tests assess transport-mode classification only; they do not show that the model can calculate or approve freight prices.


## Physical deployment probe — proposed plan

Status: Planned, not yet built or tested.

| Planning item | Proposed approach |
|---|---|
| Machine | Laser cutter, subject to confirmation with fablab staff about availability, suitable materials, and required training. |
| Artifact | A small tabletop freight-intake stand with a printed mock interface showing the source description, predicted transport mode, quoted evidence, and a human confirmation step. Use it to observe whether a tester checks the evidence before accepting the classification, particularly when the result is NOT ENOUGH INFORMATION. |
| Fablab session | I missed the introductory session. A future supervised session has not yet been arranged. I will ask the teacher or fablab staff about a catch-up opportunity. |