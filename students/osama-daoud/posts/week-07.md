---
week: 7
title: "Club Brugge Owns Its Data. It Would Still Be Locked In to Zone7"
author: "Osama Daoud"
beat: "AI in Sports Performance – Scouting, Player Tracking and Injury Prevention"
skill: "Lock-in detection"
date: 2026-11-18
---
In football, a performance department often runs five or six data tools: GPS vests, a wellness app, a medical record, and now an AI that predicts injuries. Each one is easy to add and hard to remove, because the staff build their daily routine around it. Before Club Brugge signs with an injury-prediction vendor, it should know what leaving would cost.

## The use case

My capstone question is whether Club Brugge should pilot Zone7 for its first team. Zone7, part of svexa since 2024, reads a club's training load, GPS, wellness and injury history and gives each player a daily injury-risk score. The medical staff then adjust training for the players flagged as high risk. Zone7 sells this as a service in three tiers: an audit report, an app and an "elite service". The club does not get the model; it gets the scores.

## The decision

**1. Is injury forecasting Club Brugge's competitive advantage?** Keeping players fit matters, but the edge is in the coaches and physios who act on the data, not in the model. Building a model would also need data scientists and years of injury data from many clubs. → No.

**2. Is it a problem with good off-the-shelf solutions?** Yes. ChatGPT named five or six vendors in my Week 5 test (Zone7, Kitman Labs, Catapult, VALITICA). → **Buy.**

Buy is right, but with one piece of Connect: the raw data should stay in a store the club controls, not only inside Zone7.

## The lock-in scorecard

Evidence: svexa's terms of service (effective 1 September 2019, page updated January 2023).

| Dimension | Score | Evidence |
|---|---|---|
| Data portability | 2 | "Customer will own all Customer Data", but export "may be limited or unavailable depending on the type of Services plan", and after the contract ends there is "no obligation to maintain or provide any Customer Data". The risk-score history could be lost. |
| API stability | 2 | No published change or deprecation policy, only "reasonable notice" for contract changes. The product has already changed owner and website once (2024). |
| Pricing control | 1 | No public price. But renewals stay at "the same" price "as it was during the immediately prior term". |
| Feature dependency | 2 | The model is proprietary and no other vendor produces the same score. After a season, the staff's daily routine runs on Zone7 alerts. |
| Migration cost | 1 | A pilot is easy to stop. Replacing it after one season means a new vendor, new integrations and months before new scores can be trusted. |
| **Total** | **8/15** | **Moderate** |

The highest risk is data portability, and it is not the data people expect. The club's GPS data stays with the GPS supplier. What can disappear is the **history**: which players were flagged, when, and whether they actually got injured. That record is the only way to judge whether Zone7 works.

## The migration path

If Zone7 tripled its price, the club could switch to Kitman Labs or VALITICA. The setup is perhaps a month of work for the sports scientists and the data analyst. The real cost is performance: Zone7 publishes no false-alarm rate, so the club could not say whether the new tool is better or worse. Without its own record, it would start from zero.

## The insight

In my beat, the lock-in is not the vendor's logo or the club's raw data. It is the evidence. My own Build taught me the same thing. This week I ran my 10-article test set on a free model on my own laptop (llama3.2): 50% correct, against 96% for the cloud model. Without that test set, I would have had no idea. A club needs the same thing: its own log of alerts and injuries. So in the next 90 days, Club Brugge should:

- put a monthly CSV export of all risk scores in the contract;
- keep raw data in its own storage;
- record every alert and every injury itself, so any vendor can be compared on the same season.

*Sources: [svexa terms of service](https://svexa.com/terms-of-service-and-acceptable-use/); my Week 5 GEO audit and ChatGPT test. AI disclosure: I used Claude to read the terms and structure the post. The local-model test, the scores, the use case and the conclusion are my own.*
