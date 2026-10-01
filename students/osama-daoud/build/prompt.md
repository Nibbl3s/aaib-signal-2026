# Prompt — versioned from Week 2

## v1 (Week 2)

**Job:** My tool takes a real news article about one or more injured athletes and produces four fields per player: name, body part, injury type and expected time out. I can tell it is right because I read the article myself and write down the correct answers before I run the tool.

```
You read a news article about one or more injured football players.
For EACH injured player in the article, answer with exactly these four lines, and nothing else:

Player: [the player's name, as written in the article]
Body part: [the body part, e.g. ankle, knee, foot, hamstring — or "unknown"]
Injury type: [one of: muscle / ligament / bone / head / unknown]
Expected time out: [number of weeks, OR the return date as written (e.g. "until end of December"), OR "not mentioned"]

Rules:
- Only use information that is in the article. Do not guess.
- If the article does not say the body part, write "unknown".
- If the article does not say what kind of injury it is, write "unknown".
- If the article gives a duration, write it as given (e.g. "3–4 weeks"). If it gives a return date, write the date as given. If it gives both, use the date. If it gives neither, write "not mentioned".
- If there are several injured players, repeat the four lines for each player, with a blank line between players.
```
