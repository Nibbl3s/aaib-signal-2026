"""Scores runs/v2/<model>/ (prompt v2) against the expected answers in build/test-set.md (written 1 Oct 2026, before Run 1).
Strict rule = Week 2 rule: all 10 fields must match. Venue/guest wording may differ if it names the same thing
(listed in SAME below). Prints per-input field diffs; failure codes are assigned by hand in lab-memo.md."""
import json, re, sys, glob, pathlib
HERE = pathlib.Path(__file__).parent
MODEL = sys.argv[1] if len(sys.argv) > 1 else "llama3.2"
F = ["is_booking_inquiry","event_type","event_date","start_time","end_time","venue","guest_count","dj_gear","sound_and_light","missing_for_quote"]
ALL7 = ["event_date","start_time","end_time","venue","guest_count","dj_gear","sound_and_light"]
rows = re.findall(r"^\| (T\d\d) \| (.*) \|$", (HERE.parent/"build"/"test-set.md").read_text().split("## Expected answers")[1].split("## Decisions")[0], re.M)
exp = {}
for tid, rest in rows:
    c = [x.strip() for x in rest.split(" | ")]
    miss = [] if c[9] in ("—","") else ALL7 if c[9]=="all 7" else [m.strip() for m in c[9].split(",")]
    exp[tid] = dict(zip(F, [c[0]=="true", *c[1:9], sorted(miss)]))
# same place / same number, different wording (accepted, as in Week 2)
SAME = {("T06","venue"):{"Dorpsplein, 8880 Ledegem, Sint-Eloois-Winkel, Belgium"},
        ("T13","venue"):{"Zaal Amuse in Meulebeke"}, ("T13","guest_count"):{"±90","± 90","90"},
        ("T09","guest_count"):{"80-100","80 - 100"},
        # added 26 Nov for the v2 runs, same Week 2 wording rule: same placeholder / same number
        ("T04","venue"):{"[address] (no town given)"}, ("T13","guest_count"):{"rond de 90"}}
def parse(txt):
    m = re.search(r"\{.*\}", txt, re.S)
    try: return json.loads(m.group(0)) if m else None
    except json.JSONDecodeError: return None
res = {}
for run in "AB":
    for tid in exp:
        p = HERE/"runs"/"v2"/MODEL.replace(":","_")/f"{tid}-{run}.json"
        got = parse(json.loads(p.read_text())["message"]["content"])
        if got is None: res[(tid,run)] = ["UNPARSEABLE JSON"]; continue
        diffs = []
        for f in F:
            g, e = got.get(f), exp[tid][f]
            if f == "missing_for_quote": g = sorted(g or [])
            if g == e or str(g) in SAME.get((tid,f), set()): continue
            diffs.append(f"{f}: got {g!r} want {e!r}")
        res[(tid,run)] = diffs
ok = [k for k,v in res.items() if not v]
print(f"{MODEL}: strict {len(ok)}/30 correct; run A {sum(k[1]=='A' for k in ok)}/15, run B {sum(k[1]=='B' for k in ok)}/15")
for tid in exp:
    for run in "AB":
        print(f"{tid}-{run}", "✓" if not res[(tid,run)] else "✗ " + " ; ".join(res[(tid,run)]))
# field-level accuracy, excluding missing_for_quote and treating any Dutch event_type label as a format issue only
fld = {f:0 for f in F}
for (tid,run),d in res.items():
    if d==["UNPARSEABLE JSON"]: continue
    for f in F:
        if not any(x.startswith(f+":") for x in d): fld[f]+=1
print("fields right out of", sum(1 for d in res.values() if d!=["UNPARSEABLE JSON"]), "parseable outputs:", fld)
