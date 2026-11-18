# The Model Is Swappable. The Dataset Is Not.

I expected the AI model to be the lock-in risk in my scouting tool. It turned out to be the easiest part to replace. The part I could not easily replace was a data file I do not control.

## The use case

ScoutLab is my football recruitment app. It ranks players within their position and finds similar profiles, using plain statistics. This week I added one optional AI feature: a model writes a short scouting note from a player's numbers, and an automatic check compares the note with the table. The imagined user is Flanders United FC, the composite Belgian club from my capstone, with three scouts and about 200 profiles a month.

## The decision

I walked the five questions. Is the capability our competitive advantage? The scoring logic is: which stats count, and how they are weighted, is the club's scouting view. That points to Build. The summary note is a commodity, and the data feed is bought. So I build the core, and connect the rest through one function that talks to any OpenAI-compatible endpoint. Moving between a cloud model and a local one should be a two-field change. I tested the local side.

## The lock-in scorecard

I scored the stack, reading Anthropic's Commercial Terms and deprecation page for the Claude option.

- **Data portability: 1.** My exports are plain CSV. Anthropic's terms say the customer owns inputs and outputs, but say nothing about export or return of data at termination.
- **API stability: 2.** My default dataset comes from one third-party GitHub URL with no versioning or notice promise. Claude is better: at least 60 days' notice before a model retires, though that sits in the docs, not the contract.
- **Pricing control: 1.** Free open-source libraries. Claude's list price can change 30 days after posting, but a probe costs about a cent.
- **Feature dependency: 0.** One swappable function, plain-text prompts.
- **Migration cost: 1.** About an hour to change model, 10 to 20 hours to change data source.

Total: **5/15, moderate risk.** The highest-risk dimension is API stability, and it is the dataset URL, not any AI vendor. If the owner moves the file, my app's default data disappears, and nobody has to warn me. "Not documented" is a finding.

## The migration path

If Claude's price tripled tomorrow, I would change the model and endpoint and rerun my ten-player probe twice. The performance cost is what I measured: 19 of 20 notes passed on Claude, versus 4 of 20 on a small local model. That gap is the real switching cost, not the price.

## The insight

In football analytics the model is the cheap, replaceable part. The licensed data and the club's own scouting archive are what hold you. Ask providers for export terms before you ask for accuracy.
