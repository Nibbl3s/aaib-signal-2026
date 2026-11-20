# Recorded Pitch 1 — 3-minute script

**Direction:** Controlled pilot of freight-email extraction with a replaceable model and human approval.

### 0:00–0:15 — Recommendation

I recommend that freight-forwarding operations test AI email extraction in a limited, human-in-the-loop pilot, rather than automate bookings or shipment decisions immediately. The model should be replaceable; the workflow and validation rules should stay under the company's control.

### 0:15–1:10 — What I am recommending and why

My project focuses on a bottleneck in European freight forwarding: transport requests arrive through emails and staff repeatedly identify key details before moving work into operational systems. My prototype extracts four fields—origin, destination, weight and cargo type—from a message.

I would buy the basic model capability through an API rather than build a model from scratch. This is a commodity extraction task, not the core competitive advantage of a forwarding company. But I would not buy an entire proprietary workflow and let the provider own the business rules. I would keep a standard output schema, deterministic validation, audit records and an exception queue outside the model provider. Missing or ambiguous information should be sent to a person, not guessed.

### 1:10–2:05 — The number that turns the recommendation

The current prototype passed 17 of 20 recorded outputs, or 85%, across ten synthetic test messages run twice. Only eight of the ten test cases passed in both runs. The most useful failures were not random: one conversational weight was represented inconsistently, and one multi-leg shipment lost the original supplier context.

That 85% is the one number I would use to explain why I am recommending a pilot rather than deployment. It comes from my Build log, not a vendor benchmark. I have low confidence that it predicts real operational accuracy because the sample contains only ten synthetic emails and does not represent the full range of customer formats, attachments or operational edge cases. I would set a higher critical-field acceptance threshold before any live rollout; that threshold must be agreed with the operational team and tested on a representative, anonymised sample.

### 2:05–2:45 — What I still need to find out

First, I need to rerun the same ten cases twice on a local open-weights model and compare not just the pass rate but how the failures differ. Second, my current cloud log does not record the exact model ID and endpoint for every run, so I need to identify the provider, account tier and applicable terms before making a reliable statement about data retention, price changes or switching cost. Third, I need to test the extraction on representative freight emails with human-reviewed expected answers.

### 2:45–3:00 — Close

My recommendation is a controlled pilot, not autonomous booking. The success condition is not a clever prompt; it is accurate fields, predictable failure handling and an exit path that lets the company replace the model without rebuilding the forwarding workflow.
