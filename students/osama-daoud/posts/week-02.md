---
week: 2
title: "I Built an AI That Reads Injury News. It Scored 96%. I Still Wouldn't Use It First."
author: "Osama Daoud"
beat: "AI in Sports Performance – Scouting, Player Tracking and Injury Prevention"
skill: "Capability skepticism"
date: 2026-10-01
---
I thought that if I gave an AI the same instructions and the same article twice, I would get the same answer twice. It's a computer, after all. Most of the time that was true. But not always, and the one time it changed was exactly the time it mattered.

## What I built

My tool reads a real news article about an injured athlete and fills in a simple player card: name, body part, injury type (muscle, ligament, bone, head or unknown) and expected time out. I tested it on 10 real articles from HLN, the BBC, ESPN, Le Monde and others, in English, Dutch and French, with 12 injured players in total. Before running anything, I read every article myself and wrote down the correct answers. Then I ran every article twice in ChatGPT, each time in a new chat.

I also added traps on purpose: a one-sentence article that never says what the injury is, an article that mentions a second player who is not injured, and an article about a cyclist even though my prompt says "football players".

## The result

23 out of 24 answers were correct: 95.8%. The tool passed every trap. It wrote "unknown" instead of inventing an injury, it ignored the extra player and it did not refuse the cyclist.

The one failure was Kylian Mbappé. The French article describes a "hyperextension of the knee capsule", which does not fit any of my categories. The first time, the AI correctly answered "unknown". The second time, with exactly the same input, it answered "ligament", a word that appears nowhere in the article, even though my prompt says "Do not guess". The same input gave a different answer, and that answer was invented.

## Is AI the right tool here?

I ran my tool through the five-question framework, and the honest answer is: not as the first tool.

The information already exists. Injury news is published by journalists and listed on sites like Transfermarkt, which already shows every injured player in a clear table. It also changes quickly: Joel Ordóñez went from "a few weeks out" to surgery to "out until the end of December", so any answer is only as fresh as the article behind it. And for the decisions that really matter, like buying a player, a mistake is far more expensive than being slow. That is why clubs do their own medical test, as Crystal Palace did before dropping its move for Ordóñez.

So the simplest tool wins. For quick injury news, I would follow a trusted journalist like Fabrizio Romano and check Transfermarkt. AI is useful one step later, as an assistant: when I find a real article about a player I'm interested in, especially in another language, it can pull out the key facts fast. But a human picks the article, and a human checks the answer.

## The insight

A 96% score sounds like a tool you can trust. But the one mistake did not happen on an easy case. It happened on the hardest, most unclear injury, which is exactly where a club would need the right answer most. Testing each article twice is what caught it. If I had run everything once, I would have reported 100% and believed it.

## The question

If an AI can give two different answers to the same question, how many times should a club test it before trusting it with a decision worth millions?

*AI disclosure: I used Claude to help me plan my test set, compare the AI's answers with my expected answers, and structure and polish the wording of this post. The tool, the articles I chose, the expected answers and the conclusions are my own.*
