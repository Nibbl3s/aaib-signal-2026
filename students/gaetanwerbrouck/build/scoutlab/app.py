from __future__ import annotations

import numpy as np
import pandas as pd
import plotly.express as px
import streamlit as st

from scouting_core import add_market_value_overlay, prepare_players, similar_players

st.set_page_config(page_title="ScoutLab | Football recruitment", page_icon="⚽", layout="wide")

DATA_URL = "https://raw.githubusercontent.com/sahilwalawalkar/FootballScoutingAI/main/data/processed/premier_league_2023_24_scouting_final.csv"
DATA_SOURCE_LABEL = "FootballScoutingAI public processed dataset, Premier League 2023/24"
st.markdown("""<style>
.block-container {padding-top:1.7rem; padding-bottom:3rem}
.hero {padding:1.15rem 1.3rem; border:1px solid rgba(120,120,120,.28); border-radius:14px; margin-bottom:1.1rem}
.muted {opacity:.72; font-size:.9rem}
div[data-testid="stMetric"] {border:1px solid rgba(120,120,120,.2); padding:.75rem .9rem; border-radius:12px}
</style>""", unsafe_allow_html=True)


@st.cache_data(ttl=21600, show_spinner="Loading the public player dataset...")
def load_reference_dataset() -> pd.DataFrame:
    return pd.read_csv(DATA_URL)


def csv_to_frame(uploaded_file) -> pd.DataFrame:
    try:
        return pd.read_csv(uploaded_file)
    except UnicodeDecodeError:
        uploaded_file.seek(0)
        return pd.read_csv(uploaded_file, encoding="latin-1")


def safe_number(value: object, suffix: str = "") -> str:
    if pd.isna(value):
        return "Not available"
    return f"{float(value):,.1f}{suffix}"


def euro_millions(value: object) -> str:
    return "Not supplied" if pd.isna(value) else f"€{float(value):,.2f}m"


def show_player_table(frame: pd.DataFrame, show_value: bool = False) -> None:
    columns = ["Player", "Team", "Position_Group", "Age", "Minutes", "Performance_Percentile"]
    labels = {"Position_Group": "Position", "Performance_Percentile": "Performance percentile"}
    if show_value:
        columns += ["Market_Value_EURm", "Market_Value_Percentile", "Value_Gap"]
        labels.update({"Market_Value_EURm": "Market value (€m)", "Market_Value_Percentile": "Value percentile", "Value_Gap": "Performance minus value (pp)"})
    visible = frame[[c for c in columns if c in frame.columns]].copy().rename(columns=labels)
    for c in ["Performance percentile", "Value percentile", "Performance minus value (pp)", "Market value (€m)"]:
        if c in visible:
            visible[c] = visible[c].round(1 if c != "Market value (€m)" else 2)
    st.dataframe(visible, hide_index=True, use_container_width=True)


def profile_metrics(data: pd.DataFrame, player_name: str) -> pd.Series:
    return data.loc[data["Player"].eq(player_name)].iloc[0]


def player_percentile_features(row: pd.Series) -> pd.DataFrame:
    features = [c for c in row.index if c.startswith("Pct | ") and pd.notna(row[c])]
    return pd.DataFrame({"Metric": [c.replace("Pct | ", "") for c in features], "Percentile": [float(row[c]) for c in features]})


def build_value_template(players: pd.DataFrame) -> bytes:
    template = players[["Player"]].copy()
    template["Market Value (€m)"] = ""
    template["Value source"] = ""
    template["Value date (YYYY-MM-DD)"] = ""
    return template.to_csv(index=False).encode("utf-8")


st.markdown("""<div class="hero">
<h1 style="margin:0">⚽ ScoutLab</h1>
<p style="font-size:1.1rem;margin:.35rem 0 .25rem">Find the performance signals. Compare like with like. Build a shortlist.</p>
<p class="muted" style="margin:0">A student-built decision-support prototype for football recruitment. It does not choose signings or claim statistics reveal a player's full value.</p>
</div>""", unsafe_allow_html=True)

with st.sidebar:
    st.header("Data & filters")
    data_mode = st.radio("Player dataset", ["Premier League benchmark (2023/24)", "Upload my player CSV"])
    base_upload = None
    if data_mode == "Upload my player CSV":
        base_upload = st.file_uploader("Player dataset CSV", type=["csv"], key="player-data")
    value_upload = st.file_uploader(
        "Market-value CSV (optional)", type=["csv"], key="market-values",
        help="A separate file can contain a player-name column and market-value column."
    )
    units_label = st.selectbox(
        "Units for plain numeric market values",
        ["Auto from column header", "Already in € millions", "Full euros (€)"]
    )
    value_units = {"Auto from column header": "auto", "Already in € millions": "millions", "Full euros (€)": "euros"}[units_label]
    st.caption("Transfer values are never inferred from performance scores.")

if data_mode == "Upload my player CSV":
    if base_upload is None:
        st.info("Upload a player statistics CSV in the sidebar. The public benchmark is available by switching the dataset selector.")
        st.stop()
    try:
        raw_data = csv_to_frame(base_upload)
        source_note = f"User-uploaded file: {base_upload.name}"
    except Exception as exc:
        st.error(f"Could not read the player CSV: {exc}")
        st.stop()
else:
    try:
        raw_data = load_reference_dataset()
        source_note = DATA_SOURCE_LABEL
    except Exception as exc:
        st.error("The reference dataset could not be downloaded. Try again later or select 'Upload my player CSV'.")
        st.caption(f"Technical detail: {exc}")
        st.stop()

try:
    players = prepare_players(raw_data, value_units=value_units)
    if value_upload is not None:
        players = add_market_value_overlay(players, csv_to_frame(value_upload), units=value_units)
except Exception as exc:
    st.error(f"The data could not be prepared: {exc}")
    st.stop()

if players.empty:
    st.error("No player rows were found in this file.")
    st.stop()

players["Age"] = pd.to_numeric(players["Age"], errors="coerce")
players["Minutes"] = pd.to_numeric(players["Minutes"], errors="coerce")
all_teams = sorted(players["Team"].dropna().astype(str).unique().tolist())
all_positions = sorted(players["Position_Group"].dropna().astype(str).unique().tolist())

with st.sidebar:
    age_values = players["Age"].dropna()
    if not age_values.empty:
        age_min = max(15, int(np.floor(age_values.min())))
        age_max = min(50, int(np.ceil(age_values.max())))
        age_range = st.slider("Age", age_min, age_max, (age_min, age_max)) if age_min < age_max else (age_min, age_max)
    else:
        age_range = None
    minute_values = players["Minutes"].dropna()
    max_minutes = max(900, int(np.ceil(minute_values.max() / 100) * 100)) if not minute_values.empty else 900
    min_minutes = st.slider("Minimum league minutes", 0, max_minutes, min(900, max_minutes), step=100)
    selected_positions = st.multiselect("Position", all_positions, default=all_positions)
    team_choice = st.selectbox("Team", ["All teams"] + all_teams)
    st.divider()
    st.caption(f"Rows loaded: {len(players):,}")
    n_values = int(players["Market_Value_EURm"].notna().sum())
    st.caption(f"Players with a market value: {n_values:,}")

filtered = players.copy()
if age_range is not None:
    filtered = filtered[filtered["Age"].isna() | filtered["Age"].between(*age_range)]
filtered = filtered[filtered["Minutes"].fillna(0) >= min_minutes]
if selected_positions:
    filtered = filtered[filtered["Position_Group"].isin(selected_positions)]
else:
    filtered = filtered.iloc[0:0]
if team_choice != "All teams":
    filtered = filtered[filtered["Team"].eq(team_choice)]

value_ready = any(
    group["Market_Value_EURm"].notna().sum() >= 3
    for _, group in players.groupby("Position_Group")
)

tab_dashboard, tab_finder, tab_profile, tab_compare, tab_similar, tab_gems, tab_shortlist, tab_method = st.tabs(
    ["Command centre", "Player finder", "Player profile", "Compare", "Similar players", "Hidden gems", "Shortlist", "Method & data"]
)

with tab_dashboard:
    st.subheader("Recruitment overview")
    st.caption(f"Dataset: {source_note}. Sidebar filters apply to the overview and player finder.")
    m1, m2, m3, m4 = st.columns(4)
    m1.metric("Players in view", f"{len(filtered):,}")
    m2.metric("Position groups", filtered["Position_Group"].nunique())
    m3.metric("Median age", f"{filtered['Age'].median():.1f}" if filtered["Age"].notna().any() else "N/A")
    m4.metric("Mean performance percentile", f"{filtered['Performance_Percentile'].mean():.1f}" if filtered["Performance_Percentile"].notna().any() else "N/A")
    left, right = st.columns(2)
    with left:
        counts = filtered["Position_Group"].value_counts().rename_axis("Position").reset_index(name="Players")
        if not counts.empty:
            st.plotly_chart(px.bar(counts, x="Position", y="Players", title="Players by position group"), use_container_width=True)
    with right:
        plot = filtered.dropna(subset=["Age", "Performance_Percentile"])
        if not plot.empty:
            fig = px.scatter(plot, x="Age", y="Performance_Percentile", color="Position_Group", size="Minutes", hover_name="Player", hover_data=["Team", "Minutes"], title="Age versus position-relative performance")
            st.plotly_chart(fig, use_container_width=True)
        else:
            st.info("Age or performance metrics are missing, so the chart cannot be drawn.")
    st.markdown("#### Top performance profiles in the current filter")
    leaders = filtered.dropna(subset=["Performance_Percentile"]).sort_values("Performance_Percentile", ascending=False).head(10)
    if leaders.empty:
        st.warning("The file does not contain enough metrics to calculate a performance score.")
    else:
        show_player_table(leaders, show_value=value_ready)
    if not value_ready:
        st.info("Market values are absent from this dataset. Finder, profiles, comparison and similar-player search still work. Upload a valuation file to unlock Hidden Gems.")

with tab_finder:
    st.subheader("Player finder")
    st.caption("Filter the player pool, open a profile, and save promising candidates.")
    st.write(f"**{len(filtered):,} players** match the current sidebar filters.")
    if filtered.empty:
        st.warning("No players match these filters. Lower minimum minutes or widen the age/position filters.")
    else:
        ordering = filtered.sort_values("Performance_Percentile", ascending=False, na_position="last")
        show_player_table(ordering.head(100), show_value=value_ready)
        selected_player = st.selectbox("Open a player", ordering["Player"].drop_duplicates().tolist(), key="finder-player")
        row = profile_metrics(players, selected_player)
        c1, c2, c3, c4 = st.columns(4)
        c1.metric("Position", str(row["Position_Group"]))
        c2.metric("Age", safe_number(row["Age"]))
        c3.metric("Minutes", safe_number(row["Minutes"]))
        c4.metric("Performance percentile", safe_number(row["Performance_Percentile"]))
        if st.button("Add player to shortlist", key="finder-add"):
            current = st.session_state.get("scout_shortlist", [])
            if selected_player not in current:
                current.append(selected_player)
            st.session_state["scout_shortlist"] = current
            st.success(f"{selected_player} added to the shortlist.")

with tab_profile:
    st.subheader("Player profile")
    chosen = st.selectbox("Player", players["Player"].drop_duplicates().sort_values().tolist(), key="profile-player")
    row = profile_metrics(players, chosen)
    st.markdown(f"### {row['Player']}")
    st.caption(f"{row['Team']} · {row['Position_Group']} · {row['Country'] or 'Nationality not supplied'}")
    a, b, c, d = st.columns(4)
    a.metric("Age", safe_number(row["Age"]))
    b.metric("League minutes", safe_number(row["Minutes"]))
    c.metric("Position-relative score", safe_number(row["Performance_Percentile"]))
    d.metric("Estimated market value", euro_millions(row["Market_Value_EURm"]))
    if pd.notna(row["Market_Value_EURm"]):
        market_source = row.get("Market_Value_Source", "")
        market_date = row.get("Market_Value_Date", "")
        st.caption(f"Market-value provenance: {market_source if pd.notna(market_source) and str(market_source).strip() else 'source not supplied'} · {market_date if pd.notna(market_date) and str(market_date).strip() else 'date not supplied'}")
    if value_ready and pd.notna(row["Value_Gap"]):
        st.write(f"**Performance/value gap:** {row['Value_Gap']:+.1f} percentile points. This is a screening signal, not proof the player is mispriced.")
    features = player_percentile_features(row)
    if not features.empty:
        fig = px.bar(features.sort_values("Percentile"), x="Percentile", y="Metric", orientation="h", range_x=[0, 100], title="Metric percentiles within the position group")
        fig.update_layout(yaxis_title="")
        st.plotly_chart(fig, use_container_width=True)
    else:
        st.info("No underlying percentile features were available for this player's position.")
    st.markdown("#### Source statistics")
    ignored = {"Performance_Score", "Performance_Percentile", "Market_Value_EURm", "Market_Value_Percentile", "Value_Gap", "_join_key", "Similarity_Pct"}
    numeric_cols = [col for col in players.select_dtypes(include="number").columns if not col.startswith("Pct | ") and col not in ignored]
    useful = row[numeric_cols].dropna()
    if not useful.empty:
        st.dataframe(pd.DataFrame({"Source field": useful.index, "Value": useful.values}), hide_index=True, use_container_width=True)
    if st.button("Add this profile to shortlist", key="profile-add"):
        current = st.session_state.get("scout_shortlist", [])
        if chosen not in current:
            current.append(chosen)
        st.session_state["scout_shortlist"] = current
        st.success(f"{chosen} added to the shortlist.")

with tab_compare:
    st.subheader("Compare players")
    compare_pool = players["Player"].drop_duplicates().sort_values().tolist()
    if len(compare_pool) < 2:
        st.warning("At least two players are needed.")
    else:
        compare_names = st.multiselect("Select two or three players", compare_pool, default=compare_pool[:2], max_selections=3, key="compare-player-names")
        if len(compare_names) >= 2:
            comparison = players[players["Player"].isin(compare_names)].copy()
            show_player_table(comparison, show_value=value_ready)
            feature_cols = [c for c in players.columns if c.startswith("Pct | ")]
            if feature_cols:
                plot = comparison[["Player"] + feature_cols].melt(id_vars="Player", var_name="Metric", value_name="Percentile")
                plot["Metric"] = plot["Metric"].str.replace("Pct | ", "", regex=False)
                plot = plot.dropna(subset=["Percentile"])
                if not plot.empty:
                    fig = px.bar(plot, x="Metric", y="Percentile", color="Player", barmode="group", range_y=[0, 100], title="Position-relative metric percentiles")
                    fig.update_layout(xaxis_tickangle=-35)
                    st.plotly_chart(fig, use_container_width=True)
            if comparison["Position_Group"].nunique() > 1:
                st.warning("These players have different position groups. Their scores are benchmarked against different peers.")

with tab_similar:
    st.subheader("Similar-player search")
    st.caption("This suggests profiles to investigate, not transfer equivalents.")
    sim_player = st.selectbox("Reference player", players["Player"].sort_values().tolist(), key="similar-player")
    sim_min_minutes = st.number_input("Minimum minutes for alternatives", min_value=0, max_value=10000, value=int(min_minutes), step=100)
    if st.button("Find similar profiles", key="similar-run"):
        try:
            result = similar_players(players, sim_player, int(sim_min_minutes), 10)
        except Exception as exc:
            st.error(f"Similarity search failed: {exc}")
            result = pd.DataFrame()
        if result.empty:
            st.info("Not enough shared metric coverage among same-position peers to calculate a robust comparison.")
        else:
            st.dataframe(result.rename(columns={"Position_Group": "Position", "Performance_Percentile": "Performance percentile", "Similarity_Pct": "Profile similarity (%)"}).round(1), hide_index=True, use_container_width=True)

with tab_gems:
    st.subheader("Hidden gems: performance compared with estimated value")
    st.write("The signal is the difference between a player's position-relative performance percentile and market-value percentile. A positive gap means their statistical rank is higher than their price rank within this dataset.")
    if not value_ready:
        st.warning("Value comparison is unavailable because the reference data has performance statistics but no transfer-value field.")
        st.write("Upload a separate CSV in the sidebar with a player-name column and market-value column. Names are matched after removing case, accents and punctuation.")
        st.download_button("Download market-value template", data=build_value_template(players), file_name="scouting_market_value_template.csv", mime="text/csv")
        st.caption("Fill the Market Value (€m) column using a dated source. Empty values are ignored.")
    else:
        c1, c2 = st.columns(2)
        min_gap = c1.slider("Minimum performance/value gap (percentage points)", -20, 80, 15, step=5)
        max_value = c2.number_input("Maximum estimated value (€m)", min_value=0.0, max_value=1000.0, value=25.0, step=1.0)
        age_cap = st.slider("Maximum age for this shortlist", 16, 40, 25)
        max_minute = max(1000, int(players["Minutes"].fillna(0).max()))
        minimum_gem_minutes = st.slider("Minimum minutes for candidates", 0, max_minute, 900, step=100)
        gems = players.dropna(subset=["Market_Value_EURm", "Performance_Percentile", "Market_Value_Percentile", "Value_Gap"]).copy()
        gems = gems[gems["Value_Gap"].ge(min_gap) & gems["Market_Value_EURm"].le(max_value) & gems["Minutes"].fillna(0).ge(minimum_gem_minutes) & gems["Age"].le(age_cap)].sort_values("Value_Gap", ascending=False)
        if gems.empty:
            st.info("No players meet all criteria. Widen one or more filters.")
        else:
            show_player_table(gems.head(50), show_value=True)
            plot = players.dropna(subset=["Performance_Percentile", "Market_Value_Percentile", "Market_Value_EURm"])
            if not plot.empty:
                fig = px.scatter(plot, x="Market_Value_Percentile", y="Performance_Percentile", color="Position_Group", size="Minutes", hover_name="Player", hover_data={"Market_Value_EURm": ":.2f", "Value_Gap": ":.1f", "Team": True}, range_x=[0, 100], range_y=[0, 100], title="Performance percentile versus market-value percentile")
                fig.add_shape(type="line", x0=0, y0=0, x1=100, y1=100, line=dict(dash="dash"))
                st.plotly_chart(fig, use_container_width=True)
            if st.button("Add hidden-gem results to shortlist", key="gems-add"):
                current = st.session_state.get("scout_shortlist", [])
                current.extend([n for n in gems["Player"].head(50).tolist() if n not in current])
                st.session_state["scout_shortlist"] = current
                st.success(f"Shortlist updated. Current size: {len(current)}.")

with tab_shortlist:
    st.subheader("Shortlist")
    shortlist_names = st.session_state.get("scout_shortlist", [])
    available = players[players["Player"].isin(shortlist_names)].copy()
    if available.empty:
        st.info("Your shortlist is empty. Add players from Player finder, Player profile or Hidden gems.")
    else:
        show_player_table(available, show_value=value_ready)
        st.download_button("Export shortlist to CSV", data=available.to_csv(index=False).encode("utf-8"), file_name="football_scouting_shortlist.csv", mime="text/csv")
        remove_names = st.multiselect("Remove players", available["Player"].tolist(), key="remove-shortlist")
        if st.button("Remove selected players", key="remove-from-shortlist"):
            st.session_state["scout_shortlist"] = [n for n in shortlist_names if n not in remove_names]
            st.rerun()
        if st.button("Clear shortlist", key="clear-shortlist"):
            st.session_state["scout_shortlist"] = []
            st.rerun()

with tab_method:
    st.subheader("What the score means")
    st.markdown("""
**Performance score (0–100).** Available raw statistics are ranked against players in the same position group, converted to percentiles, and combined with explicit role-specific weights. Missing fields are excluded from the denominator instead of being silently treated as average. Profiles show the metric percentiles contributing to the score.

**Hidden-gem gap.** Performance percentile minus market-value percentile, calculated within position group. It is a shortlist signal only. Market estimates are not negotiated transfer fees, and one-season performance is not total player quality or expected future value.

**Similar-player search.** Uses same-position percentile features, median imputation for missing feature values, standardization, and cosine similarity. Similarity is not a probability that two players will perform the same or be interchangeable.

**Human checks required.** Verify the date and source of statistics and values. Follow up with video, tactical fit, league strength, age and development, minutes and sample size, contract length, wages, injuries/availability, adaptation, character assessments and transfer feasibility. This app does not use live injury information or predict future performance.
""")
    st.markdown("#### Data source")
    st.write(source_note)
    if data_mode != "Upload my player CSV":
        st.markdown(f"[Open the source repository](https://github.com/sahilwalawalkar/FootballScoutingAI) · [View the processed player dataset]({DATA_URL})")
        st.caption("The source repository README does not make a clear dataset licence visible. This prototype downloads the CSV at runtime instead of copying it into the course repository. Review upstream terms before redistribution or commercial use.")
    coverage = pd.DataFrame({
        "Field": ["Player name", "Position", "Age", "League minutes", "Market value"],
        "Rows populated": [int(players["Player"].notna().sum()), int(players["Position_Group"].ne("Unknown").sum()), int(players["Age"].notna().sum()), int(players["Minutes"].notna().sum()), int(players["Market_Value_EURm"].notna().sum())],
        "Rows in dataset": [len(players)] * 5,
    })
    coverage["Coverage (%)"] = (coverage["Rows populated"] / coverage["Rows in dataset"] * 100).round(1)
    st.dataframe(coverage, hide_index=True, use_container_width=True)
    st.download_button("Download player dataset with calculated scores", data=players.to_csv(index=False).encode("utf-8"), file_name="scoutlab_player_dataset.csv", mime="text/csv")
