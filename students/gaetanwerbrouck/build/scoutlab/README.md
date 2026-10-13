# ScoutLab: football scouting decision support

A Streamlit app developed for Gaetan Werbrouck's Advanced AI for Business Build:
**How Football Clubs Use Data to Find Undervalued Players**.

## What it does

- **Command centre:** dataset coverage, position distribution, and performance versus age.
- **Player finder:** filter a larger player pool by age, minutes, position, and team.
- **Player profile:** source statistics and position-relative metric percentiles.
- **Compare:** compare two or three players using common profile fields and percentiles.
- **Similar players:** find same-position profiles with standardized percentile features and cosine similarity.
- **Hidden gems:** when market values are supplied, rank players by the gap between position-relative performance percentile and market-value percentile.
- **Shortlist:** keep names in the current Streamlit session and export them to CSV.
- **Method and data:** explain how scores are calculated and show data coverage.

## Important data limitation

The default reference CSV contains 339 Premier League 2023/24 player rows and performance metrics, but it does **not** contain transfer-market values. Hidden Gems therefore asks for a market-value CSV instead of pretending that a performance score is a price. Use the downloadable template in the app or upload a separate CSV with a player-name column and a value column.

The market-value file should ideally include:
- **Player** (or Player Name / Name)
- **Market Value (€m)**, with values in millions, e.g. €12.5m
- **Value source** and **Value date (YYYY-MM-DD)** for evidence and freshness

For plain numeric values, use the unit selector in the sidebar. The app supports a full player-statistics CSV instead of the default source too. Useful column names include Player, Team, Pos or Position_Group, Age, Minutes, Goals per 90, Expected Goals per 90, Assists per 90, Expected Assists per 90, Tackles per 90, and Accurate Passes per 90. Columns it cannot map are not guessed.

## Run on Windows PowerShell

Requirements: Python 3.11 or later and an internet connection for first-time dependency installation and the default dataset.

From your local course repository:

    cd "C:\Users\gaeta\Documents\aaib-signal-2026\students\gaetanwerbrouck\build\scoutlab"
    python -m venv .venv
    .\.venv\Scripts\Activate.ps1
    python -m pip install --upgrade pip
    python -m pip install -r requirements.txt
    python -m streamlit run app.py

Streamlit normally opens http://localhost:8501.

If PowerShell blocks virtual-environment activation, run the app without activating it:

    .\.venv\Scripts\python.exe -m pip install -r requirements.txt
    .\.venv\Scripts\python.exe -m streamlit run app.py

## Data source and attribution

The default player-performance dataset is read at runtime from
[Sahil Walawalkar's FootballScoutingAI repository](https://github.com/sahilwalawalkar/FootballScoutingAI), specifically
[the processed Premier League 2023/24 scouting CSV](https://raw.githubusercontent.com/sahilwalawalkar/FootballScoutingAI/main/data/processed/premier_league_2023_24_scouting_final.csv).
The dataset itself is not copied into this course repository. Its upstream README does not clearly state a dataset licence; review source terms before redistributing it or using it commercially. If it becomes unavailable, upload a CSV from an appropriately licensed source.

This is an independently written course prototype inspired by the reference project's workflow and public description. It does not copy the reference application's code. It is not affiliated with the Premier League, Transfermarkt, or any football club.

## How to interpret results

- Performance is ranked **within a position group**, not against all footballers.
- The metric recipe differs by role. Available metrics become percentiles and are combined using documented role-specific weights.
- Missing metrics are omitted from that player's score denominator. Check the player profile and coverage before drawing conclusions.
- The hidden-gem gap is performance percentile minus market-value percentile within a position group. Positive gaps are leads to investigate, not proof of mispricing.
- Similarity means statistical profile resemblance in this dataset, not tactical interchangeability or a forecast.
- Values are estimates, not transfer fees. Dates, contract length, wages, age, injury/availability, league strength, team style, sample size, and transfer feasibility matter.
- Human scouting, video review, and tactical analysis remain necessary. The app does not make signing decisions or provide live injury data.

## Checks

Run unit tests from this folder:

    python -m pytest -q
