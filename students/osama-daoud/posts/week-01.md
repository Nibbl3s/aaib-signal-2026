---
week: 1
title: "An AI Coach Costs €6 a Month. One Mistake Costs €60,000."
author: "Osama Daoud"
beat: "AI in Sports Performance – Scouting, Player Tracking and Injury Prevention"
skill: "Cost literacy"
date: 2026-09-27
---
Every professional football club loses players to injuries, and every injury costs time, points and money. Imagine an AI coach that gives each player personal feedback after every session and helps prevent those injuries. I calculated what that would cost a club like Club Brugge, and the price of the AI was not the number that surprised me.

## The Numbers

The AI coach uses GPS vests and other trackers to follow each player's condition, muscle load and overall health. After every training or match, it sends the player a short personal report: what to focus on, where to train harder or take it easier, and how he has improved since the last session.

I based my estimate on a club like Club Brugge:

- 30 first-team players
- 6 sessions per week (5 trainings + 1 match), about 4 weeks per month
- 30 × 6 × 4 = 720 feedback reports per month

Each report needs the player's data as input (distance, sprints, heart rate, recent trend, injury history), which I estimate at about 3,000 tokens. The report itself is around 300 tokens (about 225 words).

- Input: 720 × 3,000 = 2,160,000 tokens → 2.16 × $2.00 = $4.32
- Output: 720 × 300 = 216,000 tokens → 0.216 × $12.00 = $2.59
- Token cost: $6.91 per month → €6.36 at $1 = €0.92, or about €76 per year

Prices: standard commercial tier ($2.00 per 1M input, $12.00 per 1M output), course AI Pricing Reference, snapshot 7 September 2026.

But token cost isn't total cost. If the AI tells a tired player he is fine and should push harder, he can get injured. I assumed a first-team player earns about €15,000 per week and a typical muscle injury keeps him out for 4 weeks: €15,000 × 4 = €60,000 in salary for a player who can't play. That is my weakest number: the real cost is probably higher, because of missed matches, lost points and a replacement player.

€60,000 ÷ €76 = about 789 years of AI tokens for one single injury.

## The Insight

What surprised me most was the 789 years. The AI coach costs about €76 per year in tokens, almost nothing for a professional club. But one mistake, one tired player who trains hard because the AI said he was fine, costs the club as much as running the AI for 789 years.

That changes the whole question. A club shouldn't ask "how cheap is the AI?" but "how often is it wrong?" It's the same lesson as the EuroShop case: the token price is the smallest part of the bill, and the cost of mistakes is the biggest.

It works the other way too: if the AI prevents just one injury, it has paid for itself hundreds of times over. So the AI is clearly worth using, but not on its own.

That's why my lesson for any club is: always keep a human check. A physio or coach should look at the AI's advice before a player follows it, especially when it says "push harder." The AI is cheap; a wrong decision is not.

## The Question

How many correct predictions would an AI coach need before clubs can trust it, and could it then be used by clubs all over the world, from Club Brugge to a small amateur team?

*AI disclosure: I used Claude to guide me step by step through the calculations, check my math, and help structure and polish the wording. The use case, the numbers I chose and the conclusions are my own.*
