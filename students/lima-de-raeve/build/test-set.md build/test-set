# Test Set v1 — SoloShop

Source: Fictional customer emails written for controlled testing.
Expected answers were defined before model testing.

## Test 1 — Tracking request

Input:
Hello, I placed an order three days ago, but I haven't received a tracking number. Could you tell me how to track my package?

Expected: AUTOMATE

Reason: Routine tracking enquiry.

## Test 2 — Repeated damaged deliveries

Input:
This is the third time my package has arrived damaged. I don't want another replacement. I expect additional compensation for all the inconvenience.

Expected: HUMAN INTERVENTION

Reason: Damaged item, repeated complaint and compensation.

## Test 3 — Very vague message

Input:
Hi, it doesn't work. Please help.

Expected: INSUFFICIENT INFORMATION

Reason: The request is unclear; 'it' is not identified as a product.

## Test 4 — Spanish enquiry

Input:
Hola, quisiera saber si hacen envíos a Argentina y cuánto tiempo tarda la entrega.

Expected: AUTOMATE

Reason: Identifiable routine shipping question.

## Test 5 — Size exchange

Input:
I received the wrong size. Could you explain how I can exchange it? I still have the receipt.

Expected: AUTOMATE

Reason: Routine exchange instructions, no exception requested.

## Test 6 — Return policy

Input:
I received my shirt last week but changed my mind. It's unused. Can I return it?

Expected: AUTOMATE

Reason: Standard return enquiry within 30 days.

## Test 7 — Damaged zipper

Input:
The zipper on my new jacket broke the first time I wore it. What are you going to do about this?

Expected: HUMAN INTERVENTION

Reason: Defective product.

## Test 8 — Exception request

Input:
I bought these shoes 45 days ago. I know your return window is 30 days, but could you make an exception?

Expected: HUMAN INTERVENTION

Reason: Explicit request for a policy exception.

## Test 9 — Short question

Input:
Do you sell belts?

Expected: AUTOMATE

Reason: Clear routine product enquiry, despite being short.

## Test 10 — Legal threat

Input:
I still haven't received my order. If this isn't resolved, I will contact my lawyer.

Expected: HUMAN INTERVENTION

Reason: Legal threat takes priority over delivery enquiry.

## Test 11 — Dutch with typo

Input:
Hoi, ik wil mijn broek retuneren. Hij is nog nieuw en ik heb hem gisteren gekregen. Hoe moet dat?

Expected: AUTOMATE

Reason: Routine return instructions, even with typo and Dutch language.

## Test 12 — Unclear request

Input:
About my order from last month... you know what I mean.

Expected: INSUFFICIENT INFORMATION

Reason: No identifiable request or problem.

## Test 13 — Mixed request

Input:
Can you tell me where my parcel is? Also, I was charged twice for the same order.

Expected: HUMAN INTERVENTION

Reason: Payment dispute takes priority over routine tracking.

## Test 14 — Long message

Input:
Hi SoloShop team, I ordered two shirts and a scarf last week. I received an email confirming my purchase and another saying that my order was shipped. I checked the tracking page twice, but I can't see an estimated arrival date. I have a birthday party next weekend and would like to know whether my package is likely to arrive before then. I'm not asking for a refund or compensation. I just want to know where I can find the delivery estimate. Thanks for your help!

Expected: AUTOMATE

Reason: Long but still a routine tracking and delivery-estimate enquiry.

## Test 15 — Boundary: defective or vague?

Input:
My jacket arrived yesterday and the sleeve has a hole in it. Can you tell me how to return it?

Expected: HUMAN INTERVENTION

Reason: Damaged product overrides routine return question.
