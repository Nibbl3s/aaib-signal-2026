"""Transparent, position-relative scouting calculations.

This module deliberately contains no transfer-price guesses. Value-gap analysis is
only available when a market-value column is supplied by the user or source data.
"""
from __future__ import annotations

import re
import unicodedata
from typing import Iterable

import numpy as np
import pandas as pd
from sklearn.impute import SimpleImputer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import StandardScaler


POSITION_WEIGHTS = {
    "Defender": [
        ("Tackles per 90", 0.20, True),
        ("Tackle Success Rate (%)", 0.10, True),
        ("Interceptions per 90", 0.20, True),
        ("Clearances per 90", 0.15, True),
        ("Blocks per 90", 0.10, True),
        ("Accurate Passes per 90", 0.15, True),
        ("Pass Success (%)", 0.10, True),
    ],
    "Midfielder": [
        ("Accurate Passes per 90", 0.10, True),
        ("Pass Success (%)", 0.10, True),
        ("Chances Created per 90", 0.15, True),
        ("Expected Assists per 90", 0.15, True),
        ("Tackles per 90", 0.15, True),
        ("Interceptions per 90", 0.10, True),
        ("Successful Dribbles per 90", 0.10, True),
        ("Goals per 90", 0.10, True),
        ("Possessions Won Midfield per 90", 0.05, True),
    ],
    "Forward": [
        ("Goals per 90", 0.25, True),
        ("Expected Goals per 90", 0.20, True),
        ("Assists per 90", 0.15, True),
        ("Expected Assists per 90", 0.10, True),
        ("Shots per 90", 0.10, True),
        ("Successful Dribbles per 90", 0.10, True),
        ("Chances Created per 90", 0.10, True),
    ],
    "Goalkeeper": [
        ("Saves per 90", 0.30, True),
        ("Save Percentage", 0.25, True),
        ("Goals Conceded per 90", 0.30, False),
        ("FotMob Rating", 0.15, True),
    ],
}

NAME_COLUMNS = ["Player", "Player Name", "Name", "player_name", "player"]
POSITION_COLUMNS = ["Position_Group", "Position Group", "Position", "Pos", "position"]
TEAM_COLUMNS = ["Team", "Club", "Squad", "team"]
AGE_COLUMNS = ["Age", "age"]
MINUTE_COLUMNS = ["Minutes", "Playing Time", "minutes", "Min"]
VALUE_COLUMNS = [
    "Market Value (€m)", "Market Value (EUR m)", "market_value_eur_m",
    "market_value_m", "Market Value (Millions)", "Market Value (€)",
    "Market Value (EUR)", "market_value", "Market Value", "Transfer Value",
    "Estimated Market Value",
]


def _token(value: object) -> str:
    text = unicodedata.normalize("NFKD", str(value)).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", " ", text.casefold()).strip()


def find_column(frame: pd.DataFrame, candidates: Iterable[str]) -> str | None:
    """Find a column without depending on case, accents, underscores, or punctuation."""
    by_token = {_token(col): col for col in frame.columns}
    for candidate in candidates:
        found = by_token.get(_token(candidate))
        if found is not None:
            return found
    return None


def player_key(value: object) -> str:
    return _token(value)


def position_group(value: object) -> str:
    text = str(value).strip().casefold()
    if text in {"nan", "none", ""}:
        return "Unknown"
    if "goalkeeper" in text or text in {"gk", "keeper", "goalie"}:
        return "Goalkeeper"
    if "defender" in text or "defence" in text or text.startswith(("df", "cb", "lb", "rb", "wb")):
        return "Defender"
    if "midfield" in text or text.startswith(("mf", "cm", "dm", "am")):
        return "Midfielder"
    if "forward" in text or "striker" in text or "attacker" in text or text.startswith(("fw", "st", "lw", "rw")):
        return "Forward"
    # Some source position fields contain a list such as "FW,MF".
    if re.search(r"\b(fw|st|lw|rw)\b", text):
        return "Forward"
    if re.search(r"\b(df|cb|lb|rb|wb)\b", text):
        return "Defender"
    if re.search(r"\b(mf|cm|dm|am)\b", text):
        return "Midfielder"
    return "Unknown"


def _numeric(series: pd.Series) -> pd.Series:
    cleaned = series.astype(str).str.replace(",", "", regex=False).str.replace("%", "", regex=False)
    return pd.to_numeric(cleaned, errors="coerce")


def _value_unit_from_header(header: str) -> str:
    token = _token(header)
    if re.search(r"\b(m|mn|million|millions)\b", token) or "eur m" in token:
        return "millions"
    if "eur" in token or "euro" in token or "€" in header or "gbp" in token or "£" in header:
        return "euros"
    return "millions"


def parse_market_value(value: object, units: str = "auto", header: str = "") -> float:
    """Convert a price to euro millions. Strings carrying an explicit m/million suffix are honored."""
    if pd.isna(value):
        return np.nan
    text = str(value).strip().casefold().replace(",", "")
    if not text or text in {"nan", "n/a", "na", "-", "unknown"}:
        return np.nan
    match = re.search(r"[-+]?\d*\.?\d+", text)
    if not match:
        return np.nan
    amount = float(match.group())
    explicit_millions = bool(re.search(r"(?:m|mn|million|millions)\s*$", text))
    explicit_thousands = bool(re.search(r"(?:k|thousand)\s*$", text))
    explicit_billions = bool(re.search(r"(?:b|billion)\s*$", text))
    if explicit_billions:
        return amount * 1000
    if explicit_millions:
        return amount
    if explicit_thousands:
        return amount / 1000
    mode = units
    if mode == "auto":
        mode = _value_unit_from_header(header)
    return amount / 1_000_000 if mode == "euros" else amount


def _get_metric_column(frame: pd.DataFrame, metric: str) -> str | None:
    aliases = {
        "Save Percentage": ["Save Percentage", "Saves (%)", "Save Rate (%)"],
    }
    return find_column(frame, [metric, *aliases.get(metric, [])])


def _recalculate_scores(frame: pd.DataFrame) -> pd.DataFrame:
    out = frame.copy()
    score_cols: list[str] = []
    for group_name, weighted_metrics in POSITION_WEIGHTS.items():
        mask = out["Position_Group"].eq(group_name)
        if not mask.any():
            continue
        per_row_num = pd.Series(0.0, index=out.index[mask])
        per_row_den = pd.Series(0.0, index=out.index[mask])
        for metric, weight, higher_is_better in weighted_metrics:
            col = _get_metric_column(out, metric)
            if col is None:
                continue
            values = _numeric(out.loc[mask, col])
            ranks = values.rank(pct=True, ascending=higher_is_better) * 100
            pct_col = f"Pct | {metric}"
            if pct_col not in out:
                out[pct_col] = np.nan
            out.loc[mask, pct_col] = ranks
            score_cols.append(pct_col)
            valid = ranks.notna()
            per_row_num.loc[valid.index[valid]] += ranks[valid] * weight
            per_row_den.loc[valid.index[valid]] += weight
        available = per_row_den.gt(0)
        out.loc[per_row_den.index, "Performance_Score"] = np.nan
        out.loc[per_row_den.index[available], "Performance_Score"] = (
            per_row_num[available] / per_row_den[available]
        )

    # If a source contains only a precomputed score for a position, use it transparently as a fallback.
    source_score = find_column(out, ["Scouting_Score", "Scouting Score", "Scout Score"])
    for group_name in out["Position_Group"].dropna().unique():
        mask = out["Position_Group"].eq(group_name)
        missing = mask & out["Performance_Score"].isna()
        if missing.any() and source_score:
            values = _numeric(out.loc[missing, source_score])
            out.loc[missing, "Performance_Score"] = values

    out["Performance_Percentile"] = np.nan
    for _, indices in out.groupby("Position_Group", dropna=False).groups.items():
        scores = _numeric(out.loc[indices, "Performance_Score"])
        if scores.notna().sum() >= 3:
            out.loc[indices, "Performance_Percentile"] = scores.rank(pct=True) * 100

    out["Market_Value_EURm"] = pd.to_numeric(out.get("Market_Value_EURm", np.nan), errors="coerce")
    out["Market_Value_Percentile"] = np.nan
    for _, indices in out.groupby("Position_Group", dropna=False).groups.items():
        values = _numeric(out.loc[indices, "Market_Value_EURm"])
        if values.notna().sum() >= 3:
            out.loc[indices, "Market_Value_Percentile"] = values.rank(pct=True) * 100
    out["Value_Gap"] = out["Performance_Percentile"] - out["Market_Value_Percentile"]
    out.attrs["score_components"] = sorted(set(score_cols))
    return out


def prepare_players(source: pd.DataFrame, value_units: str = "auto") -> pd.DataFrame:
    """Standardize the most common player-data columns and calculate position-relative scores."""
    if source.empty:
        raise ValueError("The CSV contains no player rows.")
    name_col = find_column(source, NAME_COLUMNS)
    if not name_col:
        raise ValueError("Could not find a player-name column. Expected Player, Player Name, or Name.")
    out = source.copy()
    out["Player"] = out[name_col].astype(str).str.strip()
    out = out[out["Player"].ne("") & out["Player"].str.casefold().ne("nan")].copy()
    if out["Player"].duplicated().any():
        # Keep records distinct only when a user actually has duplicated names. The UI warns about name matching.
        out = out.drop_duplicates(subset=["Player"], keep="first")

    team_col = find_column(out, TEAM_COLUMNS)
    out["Team"] = out[team_col].fillna("Unknown").astype(str) if team_col else "Unknown"
    position_col = find_column(out, POSITION_COLUMNS)
    out["Position_Group"] = out[position_col].map(position_group) if position_col else "Unknown"
    age_col = find_column(out, AGE_COLUMNS)
    minute_col = find_column(out, MINUTE_COLUMNS)
    out["Age"] = _numeric(out[age_col]) if age_col else np.nan
    out["Minutes"] = _numeric(out[minute_col]) if minute_col else np.nan
    country_col = find_column(out, ["Country", "Nation", "Nationality"])
    out["Country"] = out[country_col].fillna("") if country_col else ""

    value_col = find_column(out, VALUE_COLUMNS)
    if value_col:
        out["Market_Value_EURm"] = out[value_col].apply(
            lambda v: parse_market_value(v, value_units, value_col)
        )
    else:
        out["Market_Value_EURm"] = np.nan

    out["_join_key"] = out["Player"].map(player_key)
    out["Performance_Score"] = np.nan
    return _recalculate_scores(out)


def add_market_value_overlay(players: pd.DataFrame, overlay: pd.DataFrame, units: str = "auto") -> pd.DataFrame:
    """Join a separate player-to-market-value CSV using normalized player names."""
    player_col = find_column(overlay, NAME_COLUMNS)
    value_col = find_column(overlay, VALUE_COLUMNS)
    if not player_col or not value_col:
        raise ValueError(
            "The value file needs a player-name column (Player/Name) and a market-value column "
            "(for example Market Value (€m))."
        )
    lookup = overlay[[player_col, value_col]].copy()
    lookup["_join_key"] = lookup[player_col].map(player_key)
    lookup["Market_Value_EURm"] = lookup.apply(
        lambda row: parse_market_value(row[value_col], units, value_col), axis=1
    )
    lookup = lookup.dropna(subset=["_join_key", "Market_Value_EURm"])
    lookup = lookup.groupby("_join_key")["Market_Value_EURm"].median()
    out = players.copy()
    overlay_values = out["_join_key"].map(lookup)
    out["Market_Value_EURm"] = overlay_values.combine_first(out["Market_Value_EURm"])
    return _recalculate_scores(out)


def similar_players(players: pd.DataFrame, player_name: str, min_minutes: int = 900, limit: int = 10) -> pd.DataFrame:
    """Find same-position peers by cosine similarity across observed percentile features."""
    target_rows = players.index[players["Player"].eq(player_name)].tolist()
    if not target_rows:
        return pd.DataFrame()
    target_idx = target_rows[0]
    role = players.loc[target_idx, "Position_Group"]
    peers = players[
        players["Position_Group"].eq(role)
        & (players["Minutes"].fillna(0) >= min_minutes)
    ].copy()
    feature_cols = [c for c in peers.columns if c.startswith("Pct | ")]
    feature_cols = [
        c for c in feature_cols
        if peers[c].notna().sum() >= 3 and peers[c].notna().mean() >= 0.25
    ]
    if len(peers) < 3 or len(feature_cols) < 2 or target_idx not in peers.index:
        return pd.DataFrame()
    target_features = peers.loc[target_idx, feature_cols]
    if target_features.notna().mean() < 0.5:
        return pd.DataFrame()
    matrix = peers[feature_cols].apply(pd.to_numeric, errors="coerce")
    matrix = SimpleImputer(strategy="median").fit_transform(matrix)
    matrix = StandardScaler().fit_transform(matrix)
    similarities = cosine_similarity(matrix)
    row_num = peers.index.get_loc(target_idx)
    result = peers.copy()
    result["Similarity_Pct"] = np.clip(similarities[row_num], 0, 1) * 100
    result = result[result["Player"].ne(player_name)].sort_values("Similarity_Pct", ascending=False)
    result = result.head(limit)
    return result[
        ["Player", "Team", "Position_Group", "Age", "Minutes", "Performance_Percentile", "Similarity_Pct"]
    ].reset_index(drop=True)
