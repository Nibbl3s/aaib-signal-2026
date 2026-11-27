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

  ### Real Public Café Reviews (Added for Checkpoint 2, 2026-11-27)

Input 11 (Real Review, Mixed Positive & Stockout)
"The place is nice with the cozy garden and the coffe was good and delicious the cheesecakes but many of the choices on the menu were not available."
- Expected Category: Food/Hygiene
- Expected Escalation: NO
- Expected Root Cause: Unavailable menu items
- Expected Sentiment: Neutral

Input 12 (Real Review, Pure Positive Praise)
"It has been by far our fav place to have breakfast during our days in Ghent. Attention exquisite, food so creative and tasty, and coffee so good either. If we go back to Ghent, for sure, we'll be back in here! From the [Guests from Valencia]."
- Expected Category: General/Experience
- Expected Escalation: NO
- Expected Root Cause: Overall great breakfast experience
- Expected Sentiment: Positive

Input 13 (Real Review, Food Quality Complaint)
"Ordered a smoked salmon avocado sandwich. The bread was so stale we each struggled to cut through the crust with our knives. I resent having to pay for stale bread. Would not go again. Options seemed unappetising and not very filling. Very few options with umami flavours."
- Expected Category: Food/Hygiene
- Expected Escalation: NO
- Expected Root Cause: Stale bread and unappetising menu
- Expected Sentiment: Negative

Input 14 (Real Review, Multi-Issue Service & Billing Frustration)
"I went here to have breakfast and celebrate our anniversary with a good start of the day which turned into a disaster. The service is extremely slow... brought orange juice and fresh mint tea at the same time... no jam, no butter... eggs were watery... charged 1 eur extra for mint tea. What a shame! Never again! A totally rip off!"
- Expected Category: Service/Staff
- Expected Escalation: NO
- Expected Root Cause: Extremely slow service and order mistakes
- Expected Sentiment: Negative

Input 15 (Real Review, Dutch, Portion & Price Complaint)
"We bestelden een broodje zalm (13,5 eur) en een stuk quiche.(13,5 eur) Afbakbroodje met zalm en sla vonden we best wel heel prijzig voor what het was. Zelfde voor het klein stukje quiche dat je krijgt voor 13 eur. Jammer anders wel een mooie en sfeervolle zaak."
- Expected Category: Food/Hygiene
- Expected Escalation: NO
- Expected Root Cause: Overpriced small food portions
- Expected Sentiment: Negative

Input 16 (Real Review, Hungarian, Coffee & Kitchen Execution)
"Szép hely, de a kávé kicsit égett ízű, és egy lágytojás láthatóan kihívást jelent. Háromszor kértem, és háromszor kemény tojás volt. A pirítós viszont finom volt."
- Expected Category: Food/Hygiene
- Expected Escalation: NO
- Expected Root Cause: Burnt coffee and overcooked eggs
- Expected Sentiment: Negative

Input 17 (Real Review, Positive with Acoustic/Facility Defect)
"Nice place, good food, super friendly staff. If you are sensitive to sounds, I wouldn't go and sit in the back part, the acoustics are not great there. Front part is better that way :-)"
- Expected Category: Facility/Maintenance
- Expected Escalation: NO
- Expected Root Cause: Poor acoustics in back seating area
- Expected Sentiment: Positive

Input 18 (Real Review, Slow Service with Nice Atmosphere)
"The service was pretty slow as I think to wait half an hour for the latte is a bit slow. The atmosphere is really nice though. I guess the boss just have to hire one more person for the rush hours in the café."
- Expected Category: Service/Staff
- Expected Escalation: NO
- Expected Root Cause: Slow service during rush hour
- Expected Sentiment: Negative
