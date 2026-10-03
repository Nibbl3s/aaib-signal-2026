# Test Set: Coordination Hub Request Classifier
Test set — inputs + expected answers (Week 2)
This document holds a list of 10 to 15 real text inputs alongside the ground-truth "correct" answers.
I will not write code or deploy an application. I will use a basic chat interface (Claude) to execute my prompt.

## Task Specification
* **Primary Task:** Classify incoming emails/messages to the Coordination Hub into
* **exactly one** of 5 predefined categories, and extract `Urgency_Level` (`Low`, `Medium`, `High`) and `Action_Required` (`true`/`false`).
* **Evaluation Standard:** Strictly bounded. Two independent reviewers looking at the input and these rules will reach 100% agreement on correctness.

---

## Allowed Categories & Definitions

### Categories (`category`)
1. `EXAM_SCHEDULE` — Exams, retakes, schedule clashes, medical absences during evaluations, room assignments.
2. `INTERNSHIP_LOGISTICS` — Internship agreements, company contracts, coordinator contacts, placement approvals.
3. `FACILITY_BOOKING` — Room reservations, workspace/Fablab access, AV equipment, campus facilities.
4. `ENROLLMENT_ADMIN` — Tuition fees, transcript requests, official certificates, credit waivers/exemptions.
5. `OTHER_MISC` — general external inquiries, general non-actionable feedback, unrelated inquiries, spam.

### Urgency Level (`urgency_level`)
* `Low` — General information requests, compliments, routine inquiries with no immediate deadline.
* `Medium` — Standard requests needing processing within a normal business timeframe (e.g., standard bookings, transcripts).
* `High` — Urgent, time-sensitive issues requiring immediate intervention (e.g., schedule conflicts on test day, medical absence during exams, pending start dates).

### Action Required (`action_required`)
* `true` — Requires staff follow-up, approval, or processing.
* `false` — Informational or transactional message requiring no administrative action.

---

## Ground Truth Test Cases

| ID | Raw Input Text | Expected Category | Expected Urgency | Expected Action |
| :--- | :--- | :--- | :--- | :--- |
| **INP-01** | *"Hi, I have two final exams scheduled at the exact same time on Thursday morning (Room K302 and K101). Who do I contact to move one?"* | `EXAM_SCHEDULE` | `High` | `true` |
| **INP-02** | *"Where can I download an official copy of my transcript for my master's application? I need the signed PDF version."* | `ENROLLMENT_ADMIN` | `Medium` | `true` |
| **INP-03** | *"Can we reserve room 2.04 at Campus Kantienberg for a student group project this coming Tuesday from 14:00 to 16:00?"* | `FACILITY_BOOKING` | `Medium` | `true` |
| **INP-04** | *"My internship host company in Brussels hasn't signed the tripartite agreement yet. Can I still start my placement next Monday?"* | `INTERNSHIP_LOGISTICS` | `High` | `true` |
| **INP-05** | *"Just wanted to say thank you for organizing the graduation fair last week! Everything ran smoothly."* | `OTHER_MISC` | `Low` | `false` |
| **INP-06** | *"I need to know if the Fablab is open for 3D printing setup tomorrow morning without a prior workshop registration."* | `FACILITY_BOOKING` | `Low` | `true` |
| **INP-07** | *"Is the deadline for paying the second installment of tuition fees fixed on November 1st, or can I request an extension?"* | `ENROLLMENT_ADMIN` | `Medium` | `true` |
| **INP-08** | *"Our company wants to post a junior marketing position on your internal job board. What is the submission link?"* | `OTHER_MISC` | `Low` | `true` |
| **INP-09** | *"I fell sick today and missed my oral defense for Global Challenges. Attached is my medical doctor's note. What is the retake procedure?"* | `EXAM_SCHEDULE` | `High` | `true` |
| **INP-10** | *"Who is the current stagecoördinator for the International Management track? I need to send my preliminary internship outline for review."* | `INTERNSHIP_LOGISTICS` | `Medium` | `true` |
| **INP-11** | *"Can I get exemption credits for PCD1 based on my previous work experience in project management?"* | `ENROLLMENT_ADMIN` | `Medium` | `true` |
| **INP-12** | *"Dear team, please find attached our new catering menu for corporate lunches on campus."* | `OTHER_MISC` | `Low` | `false` |

---

## Individual Input Details (for JSON evaluation)

```json
[
  {
    "id": "INP-01",
    "input": "Hi, I have two final exams scheduled at the exact same time on Thursday morning (Room K302 and K101). Who do I contact to move one?",
    "expected_output": {
      "category": "EXAM_SCHEDULE",
      "urgency_level": "High",
      "action_required": true
    }
  },
  {
    "id": "INP-02",
    "input": "Where can I download an official copy of my transcript for my master's application? I need the signed PDF version.",
    "expected_output": {
      "category": "ENROLLMENT_ADMIN",
      "urgency_level": "Medium",
      "action_required": true
    }
  },
  {
    "id": "INP-03",
    "input": "Can we reserve room 2.04 at Campus Kantienberg for a student group project this coming Tuesday from 14:00 to 16:00?",
    "expected_output": {
      "category": "FACILITY_BOOKING",
      "urgency_level": "Medium",
      "action_required": true
    }
  },
  {
    "id": "INP-04",
    "input": "My internship host company in Brussels hasn't signed the tripartite agreement yet. Can I still start my placement next Monday?",
    "expected_output": {
      "category": "INTERNSHIP_LOGISTICS",
      "urgency_level": "High",
      "action_required": true
    }
  },
  {
    "id": "INP-05",
    "input": "Just wanted to say thank you for organizing the graduation fair last week! Everything ran smoothly.",
    "expected_output": {
      "category": "OTHER_MISC",
      "urgency_level": "Low",
      "action_required": false
    }
  },
  {
    "id": "INP-06",
    "input": "I need to know if the Fablab is open for 3D printing setup tomorrow morning without a prior workshop registration.",
    "expected_output": {
      "category": "FACILITY_BOOKING",
      "urgency_level": "Low",
      "action_required": true
    }
  },
  {
    "id": "INP-07",
    "input": "Is the deadline for paying the second installment of tuition fees fixed on November 1st, or can I request an extension?",
    "expected_output": {
      "category": "ENROLLMENT_ADMIN",
      "urgency_level": "Medium",
      "action_required": true
    }
  },
  {
    "id": "INP-08",
    "input": "Our company wants to post a junior marketing position on your internal job board. What is the submission link?",
    "expected_output": {
      "category": "OTHER_MISC",
      "urgency_level": "Low",
      "action_required": true
    }
  },
  {
    "id": "INP-09",
    "input": "I fell sick today and missed my oral defense for Global Challenges. Attached is my medical doctor's note. What is the retake procedure?",
    "expected_output": {
      "category": "EXAM_SCHEDULE",
      "urgency_level": "High",
      "action_required": true
    }
  },
  {
    "id": "INP-10",
    "input": "Who is the current stagecoördinator for the International Management track? I need to send my preliminary internship outline for review.",
    "expected_output": {
      "category": "INTERNSHIP_LOGISTICS",
      "urgency_level": "Medium",
      "action_required": true
    }
  },
  {
    "id": "INP-11",
    "input": "Can I get exemption credits for PCD1 based on my previous work experience in project management?",
    "expected_output": {
      "category": "ENROLLMENT_ADMIN",
      "urgency_level": "Medium",
      "action_required": true
    }
  },
  {
    "id": "INP-12",
    "input": "Dear team, please find attached our new catering menu for corporate lunches on campus.",
    "expected_output": {
      "category": "OTHER_MISC",
      "urgency_level": "Low",
      "action_required": false
    }
  }
]
