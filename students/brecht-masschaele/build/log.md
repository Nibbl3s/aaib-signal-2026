# Build log — every run, every failure (Week 2)

## Execution Protocol & Failure Logging

### Overview
This section tracks the execution of our bounded prompt against a standardized test set. The objective is not to demonstrate perfect performance, but to systematically capture, classify, and diagnose model failures over time.

### Evaluation Method
1. **Execution**: Pass each input from `test-set.md` through the prompt defined in `prompt.md`.
2. **Verification**: Compare the generated output against the predetermined ground-truth label.
3. **Classification**: If an output deviates from the expected ground truth, classify the error using the Failure Taxonomy below.

---

### Failure Taxonomy

Every failure is logged and categorized according to the following error classes:

| Code | Type | Description | Operational Risk |
| :--- | :--- | :--- | :--- |
| **F1** | **Wrong** | Confidently gave the incorrect answer or classification. | High — direct misrouting or error. |
| **F2** | **Fabricated** | Invented a detail, rule, or parameter not present in the input. | **Critical** — hard to detect, causes false assumptions. |
| **F3** | **Missed** | Failed to extract or identify a required field present in the input. | Medium — leads to incomplete records or dropped follow-ups. |
| **F4** | **Format** | Correct content, but invalid structure (e.g., non-valid JSON, bad key). | Low/Medium — easy to catch programmatically, breaks pipelines. |
| **F5** | **Refused** | Refused to answer, unnecessary hedging, or boilerplate non-response. | Medium — creates operational bottlenecks in automated workflows. |
| **F6** | **Inconsistent** | Produced differing outputs when evaluated on identical inputs. | **Critical** — non-deterministic behavior invalidates reliable downstream use. |

> **Note on Critical Failures:** Particular attention is paid to **F2 (Fabricated)** and **F6 (Inconsistent)**, as these represent unstructured hazards that cannot easily be hedged with deterministic fallback logic. All raw failure outputs are preserved in the run history to maintain a clear audit trail.

---

### Run History & Results Log

| Run ID | Input ID | Expected Output | Actual Output | Status (PASS/FAIL) | Failure Code | Notes / Diagnosis |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `R01-01` | `INP-01` | `EXAM_SCHEDULE` | `EXAM_SCHEDULE` | **PASS** | — | Correct category. |
| `R01-02` | `INP-02` | `INTERNSHIP_LOGISTICS` | `GENERAL_INFO` | **FAIL** | **F1** | Confused internship requirements with general info. |
| `R01-03` | `INP-03` | `FACILITY_BOOKING` | `FACILITY_BOOKING` | **FAIL** | **F4** | Output valid content, but wrapped response in prose instead of strict JSON. |

*(Add subsequent test runs to this table as testing progresses)*
