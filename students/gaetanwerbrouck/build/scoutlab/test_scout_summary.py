import pandas as pd

import scout_summary as ss
from scouting_core import prepare_players


def make_players():
    rows = []
    for i in range(8):
        rows.append({
            "Player": f"Forward {chr(65 + i)}", "Team": "T", "Pos": "FW", "Age": 22 + i % 3, "Minutes": 1500 + i * 10,
            "Goals per 90": 0.1 * i, "Expected Goals per 90": 0.2 + 0.05 * (7 - i), "Shots per 90": 1 + i * 0.3,
            "Expected Assists per 90": 0.05 * ((i * 3) % 8), "Successful Dribbles per 90": 0.5 + 0.1 * ((i * 5) % 8),
            "Chances Created per 90": 1 + 0.1 * ((i * 2) % 8),
        })
    return prepare_players(pd.DataFrame(rows))


def good_answer(f, extra=""):
    s, w = f.strongest(), f.weakest()
    return (f"STRENGTH: {s[0]}\nWEAKNESS: {w[0]}\n"
            f"SUMMARY: {f.name} rates highest on {s[0]} at {ss._fmt(s[1])} per 90, percentile {s[2]:.0f}. "
            f"With {ss._fmt(f.minutes)} minutes the sample is modest.{extra}")


def test_facts_and_extremes():
    p = make_players()
    f = ss.build_facts(p, "Forward D")
    assert f.position == "Forward" and len(f.metrics) >= 5
    assert f.strongest()[2] >= f.weakest()[2]


def test_good_answer_passes_all_checks():
    p = make_players()
    f = ss.build_facts(p, "Forward D")
    assert all(ss.check_answer(good_answer(f), f).values())


def test_checker_catches_invented_number_and_unsupported_claim():
    p = make_players()
    f = ss.build_facts(p, "Forward D")
    r = ss.check_answer(good_answer(f, " He scored 47 goals."), f)
    assert not r["no_invented_numbers"]
    r = ss.check_answer(good_answer(f, " He has a long injury history."), f)
    assert not r["no_unsupported_claims"]


def test_checker_catches_wrong_metric():
    p = make_players()
    f = ss.build_facts(p, "Forward D")
    wrong = good_answer(f).replace("STRENGTH: " + f.strongest()[0], "STRENGTH: " + f.weakest()[0])
    assert not ss.check_answer(wrong, f)["strength_correct"]
    assert "feel" not in ss.FORBIDDEN.pattern  # "fee" must not match inside "feel"
    assert not ss.FORBIDDEN.search("he can feel the game")
