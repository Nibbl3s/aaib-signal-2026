"""What-if (NOT the official score): how many Llama outputs would pass if code, not the model, did the two
mechanical jobs: (1) map the event label onto the allowed list, (2) build missing_for_quote from the unknown fields,
(3) pad times to HH:MM. Same expected answers. Shows how much of the gap is format vs judgment."""
import json, re, pathlib, importlib.util, sys
sys.argv = ["score.py", "llama3.2"]
HERE = pathlib.Path(__file__).parent
MAP = {"verjaardag":"birthday","verjaardagsfeest":"birthday","personeelsfeest":"company_event","zakelijk event":"company_event",
       "huwelijk":"wedding","bruiloft":"wedding","huwelijksfeest":"wedding","trouw":"wedding","fuif":"party_fuif",
       "proclamatie":"other","afscheidsfeestje/proclamatie":"other"}
ALL7 = ["event_date","start_time","end_time","venue","guest_count","dj_gear","sound_and_light"]
src = (HERE/"score.py").read_text().split("res = {}")[0]; ns = {"__file__": str(HERE/"score.py")}; exec(src, ns)
exp, SAME, parse = ns["exp"], ns["SAME"], ns["parse"]
ok = 0; fails = {}
for run in "AB":
    for tid in exp:
        g = parse(json.loads((HERE/"runs/llama3.2"/f"{tid}-{run}.json").read_text())["message"]["content"])
        if g is None: fails[f"{tid}-{run}"] = "unparseable"; continue
        g["event_type"] = MAP.get(str(g["event_type"]).lower(), g["event_type"])
        for t in ("start_time","end_time"):
            if re.fullmatch(r"\d:\d\d", str(g[t])): g[t] = "0" + g[t]
        g["missing_for_quote"] = [] if not g["is_booking_inquiry"] else sorted(f for f in ALL7 if g[f] == "unknown")
        bad = [f for f in exp[tid] if not (sorted(g[f]) if f=="missing_for_quote" else g[f]) == exp[tid][f] and str(g[f]) not in SAME.get((tid,f), set())]
        if bad: fails[f"{tid}-{run}"] = bad
        else: ok += 1
print(f"what-if with code doing the mechanical jobs: {ok}/30")
for k, v in fails.items(): print(k, v)
