import pandas as pd

from scouting_core import (
    add_market_value_overlay,
    parse_market_value,
    player_key,
    position_group,
    prepare_players,
    similar_players,
)


def test_name_normalization_and_position_mapping():
    assert player_key("Nicolò Tresoldi") == player_key("Nicolo Tresoldi")
    assert position_group("FW,MF") == "Forward"
    assert position_group("CB") == "Defender"
    assert position_group("GK") == "Goalkeeper"


def test_market_value_parser():
    assert parse_market_value("€9.5m", "auto", "Market Value (€m)") == 9.5
    assert parse_market_value(9.5, "millions", "Market Value (€m)") == 9.5
    assert parse_market_value(9_500_000, "euros", "Market Value (€)") == 9.5
    assert pd.isna(parse_market_value("n/a", "auto", "Market Value (€m)"))


def make_players():
    return pd.DataFrame({
        "Player": ["A Forward", "B Forward", "C Forward", "D Forward", "E Forward"],
        "Team": ["One", "Two", "Three", "Four", "Five"],
        "Pos": ["FW", "FW", "FW", "FW", "FW"],
        "Age": [20, 22, 21, 24, 19],
        "Minutes": [1500, 1200, 2000, 900, 1800],
        "Goals per 90": [0.55, 0.20, 0.40, 0.15, 0.62],
        "Expected Goals per 90": [0.45, 0.25, 0.35, 0.18, 0.52],
        "Assists per 90": [0.20, 0.10, 0.18, 0.09, 0.21],
        "Chances Created per 90": [1.2, 0.8, 1.1, 0.7, 1.4],
        "Successful Dribbles per 90": [1.1, 0.6, 0.8, 0.5, 1.3],
    })


def test_score_and_value_overlay():
    players = prepare_players(make_players())
    assert players["Performance_Score"].notna().all()
    assert players["Performance_Percentile"].between(0, 100).all()
    overlay = pd.DataFrame({
        "Player": ["A Forward", "B Forward", "C Forward", "D Forward", "E Forward"],
        "Market Value (€m)": [4, 15, 8, 5, 6],
    })
    valued = add_market_value_overlay(players, overlay, "auto")
    assert valued["Market_Value_EURm"].notna().all()
    assert valued["Value_Gap"].notna().all()
    assert valued.loc[valued["Player"].eq("A Forward"), "Market_Value_EURm"].iloc[0] == 4


def test_similar_player_search_returns_other_players():
    players = prepare_players(make_players())
    result = similar_players(players, "A Forward", min_minutes=0, limit=3)
    assert len(result) == 3
    assert "A Forward" not in result["Player"].tolist()
    assert result["Similarity_Pct"].notna().all()
