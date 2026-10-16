---
week: 4
title: "My AI Tool Is 96% Accurate. It's Worth About €760 a Year."
author: "Osama Daoud"
beat: "AI in Sports Performance – Scouting, Player Tracking and Injury Prevention"
skill: "Value quantification"
date: 2026-10-16
---
For two weeks I was proud of a number: my AI tool got 23 out of 24 answers right. Then this week a simple question took that pride apart: what is it actually worth to a club? Accuracy is not value. A tool can be almost perfect and still be worth very little.

## The candidate

My tool reads a news article about an injured player and fills in a short player card: player, body part, injury type and expected time out. It writes "unknown" or "not mentioned" when the article does not say. I tested it on 10 real articles in English, Dutch and French, running each one twice: 95.8% correct.

The user would be a data analyst at a club like Club Brugge who keeps track of injuries at rival clubs. In a club's value chain this is a support activity: it helps the scouting and match preparation teams, but it does not win matches by itself.

## The numbers

I chose three leagues: the Belgian Pro League (16 clubs), La Liga (20) and the Premier League (20). That is 56 clubs. If each club produces about 3 injury articles a month, the analyst handles around 150 articles a month (estimate).

My first guess was that reading an article takes about 5 minutes. Then I counted the words in my 10 test articles: on average just 179. At 238 words per minute, the average adult reading speed for non-fiction (Brysbaert, 2019), that is about 45 seconds.

**Time per article**
- Without the tool: 45 seconds of reading + about 1 minute to write down the four fields = 1.75 minutes
- With the tool: about 30 seconds to paste and wait, 15 seconds to read the card, and skimming the article to check it = 1.12 minutes
- Saved: about 0.63 minutes, or 40 seconds, per article

**Value**
- 0.63 minutes × 150 articles = 94.5 minutes = 1.58 hours a month
- At €48 an hour (loaded cost of a data analyst in Belgium): €75.60 a month, or €907 a year
- At my measured success rate: €907 × 95.8% ≈ €869 a year

**Costs**
- Tokens: about €4 a year. Just like in my first post, the token cost is almost nothing.
- Fixing mistakes: 4.2% of 150 is about 6 wrong answers a month. Re-reading the article and fixing the card takes about 1.75 minutes each, or about €101 a year.

**Result:** €869 − €101 − €4 = about €760 a year, with immediate payback, because the analyst can use the prompt in an AI chat tool the club already has.

Revenue increase, cost reduction and risk reduction: €0. I did not claim them, because my tool does not create any of them. If anything, it adds a risk when its answers are not checked.

## The pressure test

My original guess of 5 minutes per article gave a net benefit of about €3,150 a year. Counting the actual words cut that by three quarters. That is the pressure test: one honest number changed the whole case.

What if my new estimates are still 50% too optimistic? Then the net benefit drops to about €330 a year. Still positive, because using the prompt costs almost nothing, but small.

Should a club build this as a proper system? A custom AI tool costs roughly €10,000 to €30,000 to build, plus 20–30% of that every year in maintenance. Take €15,000: the maintenance alone, about €3,750 a year, is about five times the whole benefit. It would never pay back. Even at 100% accuracy, the tool would only save about €900 a year.

## The insight

The real reason the value is so small surprised me. Because my tool once invented an injury ("ligament" for Mbappé), the analyst has to check every card against the article. So the human still does the reading, and the AI only saves the writing. The checking that makes the tool safe is exactly what makes it worth so little.

That is the lesson for my beat: accuracy and value are different questions, and an AI you have to double-check saves much less than an AI you can trust. My tool is worth using, with a human check, but not worth building. The next step is to count a real month of injury news, so my last big estimate becomes a measured number too.

*AI disclosure: I used Claude to guide me through the calculations, count the words in my test articles, and structure and polish the wording of this post. The tool, the test results, the estimates and the conclusion are my own.*
