# Build log — every run, every failure (Week 2)

## Version 1 Test

Model used: ChatGPT GPT-5.6 Sol
Date: 2026-10-02

Failure types:
- F1 = Wrong
- F2 = Fabricated
- F3 = Missed
- F4 = Format
- F5 = Refused
- F6 = Inconsistent

| # | Expected | Run 1 | Run 2 | Result / Failure |
|---|---|---|---|---|
| 1 | Order Status | Order Status | Order Status | Correct |
| 2 | Invoice/Payment | Invoice/Payment | Invoice/Payment | Correct |
| 3 | Return/Refund | Return/Refund | Return/Refund | Correct |
| 4 | Product Issue | Product Issue | Product Issue | Correct |
| 5 | Other | Other | Other | Correct |
| 6 | Order Status | Order Status | Order Status | Correct |
| 7 | Invoice/Payment | Invoice/Payment | Invoice/Payment | Correct |
| 8 | Return/Refund | Return/Refund | Return/Refund | Correct |
| 9 | Product Issue | Product Issue | Product Issue | Correct |
| 10 | Other | Other | Other | Correct |

## Probe plan

| Probe | What I want to test | Why |
|---|---|---|
| Multilingual input | Test more Dutch enquiries | ERP systems in Belgium may receive different languages |
| Ambiguous input | Give an enquiry that could fit two categories | Check how the classifier handles uncertainty |
| Missing information | Give an enquiry without enough context | Check whether it guesses or chooses Other |

## Result

The first version scored 10/10 in both runs. I did not find any failures in this test set. However, most of my test inputs were quite clear, so the test may be too easy. My next step is to test more difficult and ambiguous enquiries to see where the tool starts making mistakes.