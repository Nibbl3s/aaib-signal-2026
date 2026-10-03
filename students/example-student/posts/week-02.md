# Signal Week 2: Designing for Checkability in the Coordination Hub

When setting up an automated triage assistant for an administrative Coordination Hub, the primary impulse is often open-ended: 
*"Build a tool that answers student questions."* 

However, testing an open-ended assistant quickly highlights the fundamental issue with subjective outputs. 
If an AI writes a "helpful" or "polite" response to a student with an exam conflict, evaluating its quality becomes a matter of individual taste. 
You cannot measure taste, and you cannot reliably audit it across hundreds of incoming inquiries.
To build a tool that can be rigorously measured over twelve weeks, the problem must be constrained to a **bounded classification and extraction task**.

### The Bounded Job

Instead of generating freeform advice, our tool performs a structured triage operation on incoming messages:
1. **Categorization**: Route the message into exactly one of 5 distinct categories (`EXAM_SCHEDULE`, `INTERNSHIP_LOGISTICS`, `FACILITY_BOOKING`, `ENROLLMENT_ADMIN`, or `OTHER_MISC`).
2. **Metadata Extraction**: Assess `Urgency_Level` (`Low`/`Medium`/`High`) and determine `Action_Required` (`true`/`false`).

Because these outputs are strictly bounded, two human administrators reviewing the same raw input and the same JSON output will reach identical conclusions about whether the AI was correct.

### Why Failure Taxonomy Matters

A 90% accuracy rate is meaningless without understanding the nature of the remaining 10%. 
In administrative workflows, different errors carry drastically different operational costs:
* An **F4 (Format error)**—such as wrapping a JSON object in conversational prose—is cheap to fix programmatically.
* An **F1 (Wrong classification)**—misrouting a facility booking to enrollment—causes a minor delay.
* An **F2 (Fabricated detail)** or **F6 (Inconsistent performance)** is dangerous.
* If the model invents a fake policy regarding exam retakes or behaves unpredictably on identical student inquiries,
* it breaks institutional trust and introduces real risk.

By logging every failure against this taxonomy from Week 2 onward, 
we build an evidence base focused on identifying critical operational hazards rather than chasing artificial perfection.
