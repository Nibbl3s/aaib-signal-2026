# ScoutLab: football scouting decision support

**Current course stage: Week 4 — Value Quantification.**

ScoutLab is the current version of the football-scouting Build for the beat **How Football Clubs Use Data to Find Undervalued Players**. It is a data-driven screening and comparison tool, not an autonomous scout and not a general-purpose chatbot.

## What it does

- **Command centre:** shows data coverage, position distribution and performance against age.
- **Player finder:** filters players by age, minutes, position and club.
- **Player profile:** shows raw source statistics and position-relative metric percentiles.
- **Compare:** compares two or three players.
- **Similar players:** finds statistically similar profiles in the same position group using cosine similarity over standardized percentile features.
- **Hidden gems:** when values are supplied, compares a player's performance percentile with their market-value percentile.
- **Shortlist:** saves candidates for the current app session and exports the shortlist to CSV.
- **Method & data:** shows coverage, the score recipe and limitations.

## Data boundary you must understand

The default benchmark is the public FootballScoutingAI processed Premier League 2023/24 dataset. It has **339 player rows**, but it contains no market-value column. It is a historical performance benchmark, not a current 2026 transfer-market database. ScoutLab will not invent values: the Hidden Gems comparison remains unavailable until you upload a separate valuation CSV.

The valuation CSV should ideally have:
- Player (or Player Name / Name)
- Market Value (€m) (such as €12.5m)
- Value source
- Value date (YYYY-MM-DD)

Use only an attributable source and record its date. Make sure the player season and valuation date make sense together. Name matching is approximate, and must be checked, particularly for duplicate, loaned or transferred players.

## Run on Windows PowerShell

Requirements: Python 3.11 or later. An internet connection is needed to install dependencies and load the default CSV.

From your local course repository:

    cd "C:\Users\gaeta\Documents\aaib-signal-2026\students\gaetanwerbrouck\build\scoutlab"
    python -m venv .venv
    .\.venv\Scripts\Activate.ps1
    python -m pip install --upgrade pip
    python -m pip install -r requirements.txt
    python -m pytest -q
    python -m streamlit run app.py

Streamlit normally opens http://localhost:8501.

If PowerShell blocks virtual-environment activation:

    .\.venv\Scripts\python.exe -m pip install -r requirements.txt
    .\.venv\Scripts\python.exe -m pytest -q
    .\.venv\Scripts\python.exe -m streamlit run app.py

## Data source and attribution

The default performance dataset is loaded at runtime from [Sahil Walawalkar's FootballScoutingAI repository](https://github.com/sahilwalawalkar/FootballScoutingAI), specifically [the processed Premier League 2023/24 scouting CSV](https://raw.githubusercontent.com/sahilwalawalkar/FootballScoutingAI/main/data/processed/premier_league_2023_24_scouting_final.csv). The CSV itself is not copied into this course repository. The upstream project README does not clearly state a dataset licence, so review its terms before redistribution or commercial use; use a data source with clear permissions for any real deployment.

This is an independently written course prototype inspired by the reference project's workflow and the request to build a broader football-data scouting process. It does not copy the reference application's code. It is not affiliated with the Premier League, Transfermarkt or any club.

## How to interpret results

- Performance is ranked within a position group, not against every footballer.
- Available metrics become percentiles and are combined with documented role-specific weights. Missing metrics are excluded from the score denominator.
- Performance percentile minus market-value percentile is a screening signal, not proof that a player is underpriced.
- Similarity is statistical resemblance in this dataset, not tactical interchangeability or a probability of equal future performance.
- Per-90 rates can hide low-sample effects. Check minutes and coverage before comparing players.
- The app does not evaluate videos, tactics, attitude, contract terms, wages, injury status, work-permit constraints, league adaptation or negotiating power.
- A scout must verify inputs, review video and make the recruitment decision.
- No measured time saving, scouting accuracy or positive ROI should be claimed until a documented evaluation compares ScoutLab with the existing process and a simpler spreadsheet/database baseline.

## Checks

Run unit tests from this folder:

    python -m pytest -q

Current status: the user has reported that the interface and tabs are accessible and usable. The unit-test result and the new expected-answer evaluation set still need to be run and recorded; UI access alone does not prove scouting quality or ROI.
