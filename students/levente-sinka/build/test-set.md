# Test Set v1

### Input 1 (Clear Negative, Food/Hygiene & Financial Escalation)
"We ate the seafood platter on Friday and both ended up in the emergency room with severe food poisoning. We demand a full refund for the bill or our lawyer will contact the local health inspector tomorrow."
- Expected Category: Food/Hygiene
- Expected Escalation: YES
- Expected Root Cause: Severe seafood food poisoning
- Expected Sentiment: Negative

### Input 2 (Clear Positive, Staff Praise)
"Our server, Marco, was exceptional. He recommended the local orange wine and made our anniversary dinner feel truly special. Will definitely come back next summer."
- Expected Category: Service/Staff
- Expected Escalation: NO
- Expected Root Cause: Exceptional server recommendation
- Expected Sentiment: Positive

### Input 3 (Boundary Case, Facility vs Food)
"The tasting menu was decent, but the air conditioning in the main dining room was completely broken in 32-degree heat. Sweating through an expensive meal completely ruined the experience."
- Expected Category: Facility/Maintenance
- Expected Escalation: NO
- Expected Root Cause: Broken dining room air conditioning
- Expected Sentiment: Negative

### Input 4 (Foreign Language Edge Case, Hungarian)
"A leves hideg volt, a pincér meg rám borította a szalvétát, de legalább a kávét nem számolták fel a végén."
- Expected Category: Service/Staff
- Expected Escalation: NO
- Expected Root Cause: Cold soup and clumsy waiter
- Expected Sentiment: Negative

### Input 5 (Extremely Short & Ambiguous)
"It was okay I guess. Nothing special."
- Expected Category: General/Experience
- Expected Escalation: NO
- Expected Root Cause: Unremarkable experience
- Expected Sentiment: Neutral

### Input 6 (Sarcasm / Irony Edge Case)
"Loved waiting 55 minutes for a cold burger while the floor staff chatted behind the bar. Truly a masterclass in hospitality."
- Expected Category: Service/Staff
- Expected Escalation: NO
- Expected Root Cause: Long wait and cold food
- Expected Sentiment: Negative

### Input 7 (Indirect Legal / Bank Dispute Threat)
"The front desk charged my credit card twice for the deposit. The manager refused to check the ledger during checkout. I am disputing this charge directly through Visa fraud protection."
- Expected Category: Service/Staff
- Expected Escalation: YES
- Expected Root Cause: Duplicate credit card charge
- Expected Sentiment: Negative

### Input 8 (Positive with Minor Flaw, Mixed Sentiment)
"The boutique room was stunning and the bed was heavenly! The only small drawback was the loud street traffic until 2 AM."
- Expected Category: Facility/Maintenance
- Expected Escalation: NO
- Expected Root Cause: Street traffic noise
- Expected Sentiment: Positive

### Input 9 (Spam / Non-actionable Noise)
"asdfghjk 12345 best place ever visited"
- Expected Category: General/Experience
- Expected Escalation: NO
- Expected Root Cause: Unspecified positive praise
- Expected Sentiment: Positive

### Input 10 (Physical Injury / Safety Hazard)
"A rotting wooden plank on the outdoor patio snapped under my foot and I badly twisted my ankle. Nobody on the team even brought ice."
- Expected Category: Facility/Maintenance
- Expected Escalation: YES
- Expected Root Cause: Broken patio plank injury
- Expected Sentiment: Negative
