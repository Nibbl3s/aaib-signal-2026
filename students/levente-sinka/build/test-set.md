# Test Set v1

### Input 1 (Clear Negative - Hygiene/Escalation)
"We stayed for two nights. The bathroom had black mold around the shower, and my partner woke up with insect bites. We demand a full refund for the second night or we are contacting our bank."
- Expected Category: Food/Hygiene
- Expected Escalation: YES
- Expected Root Cause: Mold and insect bites
- Expected Sentiment: Negative

### Input 2 (Positive - Service)
"Our server, Marco, was exceptional. He recommended the local orange wine and made our anniversary dinner feel truly special. Will definitely come back next summer."
- Expected Category: Service/Staff
- Expected Escalation: NO
- Expected Root Cause: Exceptional server recommendation
- Expected Sentiment: Positive

### Input 3 (Tricky / Mixed - Facility vs Food)
"The tasting menu was decent, but the air conditioning in the main dining room was completely broken in 32-degree heat. Sweating through an expensive meal completely ruined the anniversary."
- Expected Category: Facility/Maintenance
- Expected Escalation: NO
- Expected Root Cause: Broken air conditioning
- Expected Sentiment: Negative

### Input 4 (Hungarian Language Edge Case)
"A leves hideg volt, a pincér meg rám borította a szalvétát, de legalább a kávét nem számolták fel a végén."
- Expected Category: Service/Staff
- Expected Escalation: NO
- Expected Root Cause: Cold soup and clumsy waiter
- Expected Sentiment: Negative

### Input 5 (Ambiguous / No clear fault)
"It was okay I guess. Nothing special."
- Expected Category: General/Experience
- Expected Escalation: NO
- Expected Root Cause: Unremarkable experience
- Expected Sentiment: Neutral
