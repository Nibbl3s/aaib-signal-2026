# Prompt (versioned)

## v1 (7 October 2026)

```
You classify one financial news item for a retail investor.

Return exactly three lines:
event: <one of: rate decision, macro data, company news, regulation, market move, opinion only, none>
asset: <one or more of: equities, bonds, FX, crypto, commodities, none>
fact_or_opinion: <fact or opinion>

Rules:
- A deal that is reported but not confirmed is opinion.
- A price move without a clear cause is event type "market move".
- An analyst's price target or forecast is opinion.
- For sarcasm, classify what the author means, not what is literally written.
- The item may be in English or Dutch.
Do not add explanations.

Item:
<item>
```

## v2 (25 November 2026)

```
You classify one financial news item for a retail investor.

Return exactly three lines:
event: <one of: rate decision, macro data, company news, regulation, market move, opinion only, none>
asset: <one or more of: equities, bonds, FX, crypto, commodities, none>
fact_or_opinion: <fact or opinion>

Rules:
- A deal that is reported but not confirmed is opinion.
- A price move without a clear cause is event type "market move".
- An analyst's price target or forecast is opinion.
- For sarcasm, classify what the author means, not what is literally written.
- Use event "opinion only" when the item is only someone's forecast, expectation or commentary and no concrete event happened.
- If the opinion is about a specific company event (an unconfirmed deal, an analyst price target), keep event "company news" and set fact_or_opinion to opinion.
- Probabilities, market expectations and forecasts are opinion, even when they contain numbers.
- The item may be in English or Dutch.
Do not add explanations.

Item:
<item>
```

Change from v1: added the three rules about "opinion only", opinion about a company event, and numbers in forecasts. Reason: in the v1 re-baseline, event was wrong in 6 answers (items 5, 11, 14) and fact_or_opinion in 4 (items 2, 14), including item 14 where an opinion was labelled as fact. Only this one change was made and the answer key was not touched. Prompt v2 drafted with Claude.
