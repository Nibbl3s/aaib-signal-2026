"""Week 6 — cost model, recomputable from the saved API responses.

Run:  python3 students/tackbruneel/week-06/cost_model.py  > students/tackbruneel/week-06/cost-tables.md
Reads the usageMetadata in api/*.json and prints every table used in cost-model.md.
Change a price or an assumption below and re-run: nothing is typed in by hand.
"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
API = os.path.join(HERE, "api")

# --- Prices, $ per 1M tokens (input, output) --------------------------------------
# Measured model: AI Studio model card, read 26 Oct 2026 (same as course snapshot 7 Sep 2026)
MEASURED_PRICE = {"gemini-3.1-flash-lite": (0.25, 1.50), "gemini-3.5-flash-lite": (0.30, 2.50),
                  "gemini-flash-lite-latest": (0.30, 2.50)}
# Course tiers: AI Pricing Reference, snapshot 7 Sep 2026
TIERS = {"Budget": (0.20, 1.20), "Standard": (2.00, 12.00), "Premium": (5.00, 30.00)}
EUR = 0.92          # $1 = €0.92, course convention
DAYS = 30

# --- My Build (Week 2 measurement + Week 4 business case) -------------------------
INQUIRIES_PER_MONTH = 2.9   # 0.9 form+mail measured (13 in 15 months) + 2 chat/phone est.
ERROR_RATE = 0.50           # Run 1: 15/30 outputs fully correct (Claude Haiku 4.5, 1 Oct 2026)
GEAR_ERROR_RATE = 4 / 30    # dangerous failure: "gear on site" when I must bring my own
HUMAN_COST_PER_JOB = 2.50   # 7.5 min x €20/h: re-reading the inquiry myself
GEAR_FAILURE_COST = 300.0   # lost fee of a gig + reputation, if it reaches the night
GEAR_CHECK_COST = 20 / 60   # 1 min x €20/h to check the gear field myself

# --- Beat product: AI inquiry intake inside DJ booking software -------------------
REVENUE_PER_DJ_USD = 29.0   # Check Cherry Standard plan, checkcherry.com/pricing, read 26 Oct 2026
REGEN = 1 + ERROR_RATE      # who pays an error for the vendor: one more call (the DJ re-runs it)


def load(name):
    with open(os.path.join(API, name), encoding="utf-8") as f:
        return json.load(f)


def usage(run):
    u = run["response"]["usageMetadata"]
    out = u.get("candidatesTokenCount", 0) + u.get("thoughtsTokenCount", 0)  # thinking is billed as output
    return u["promptTokenCount"], out, u.get("thoughtsTokenCount", 0)


def cost(tok_in, tok_out, price):
    return tok_in / 1e6 * price[0] + tok_out / 1e6 * price[1]


def usd(x):
    return f"${x:,.7f}" if x < 0.001 else f"${x:,.4f}" if x < 1 else f"${x:,.2f}"


def eur(x):
    return f"€{x:,.4f}" if x < 1 else f"€{x:,.2f}"


def main():
    lab = load("lab-call.json")
    model = lab["model"]
    price = MEASURED_PRICE[model]
    builds = {t: load(f"build-{t}.json") for t in ("T03", "T09", "T12")
              if os.path.exists(os.path.join(API, f"build-{t}.json"))}

    print(f"## A. Lab call — {model}, {lab['requested_at']}\n")
    i, o, th = usage(lab)
    c = cost(i, o, price)
    print(f"| Input | Output (incl. {th} thinking) | Latency | Input cost | Output cost | Cost per call |")
    print("|---:|---:|---:|---:|---:|---:|")
    print(f"| {i} | {o} | {lab['latency_s']} s | {usd(i/1e6*price[0])} | {usd(o/1e6*price[1])} | **{usd(c)}** |\n")

    print(f"## B. My Build, prompt v1 — {model}\n")
    print("| Input | In tokens | Out tokens (thinking) | Latency | Cost per run |")
    print("|---|---:|---:|---:|---:|")
    rows = []
    for t, run in builds.items():
        i, o, th = usage(run)
        rows.append((i, o))
        print(f"| {t} | {i} | {o} ({th}) | {run['latency_s']} s | {usd(cost(i, o, price))} |")
    avg_in = sum(r[0] for r in rows) / len(rows)
    avg_out = sum(r[1] for r in rows) / len(rows)
    unit = cost(avg_in, avg_out, price)
    print(f"| **Average of {len(rows)}** | **{avg_in:.0f}** | **{avg_out:.0f}** | | **{usd(unit)}** |\n")

    print("### B2. Monthly cost of my Build at my volume\n")
    tok_month = INQUIRIES_PER_MONTH * unit * EUR
    err_month = INQUIRIES_PER_MONTH * ERROR_RATE * HUMAN_COST_PER_JOB
    gear_unchecked = INQUIRIES_PER_MONTH * GEAR_ERROR_RATE * GEAR_FAILURE_COST
    gear_checked = INQUIRIES_PER_MONTH * GEAR_CHECK_COST
    print("| Line | Formula | €/month |")
    print("|---|---|---:|")
    print(f"| Token cost | {INQUIRIES_PER_MONTH} runs × {usd(unit)} × 0.92 | {eur(tok_month)} |")
    print(f"| Ordinary errors (I redo the reading) | {INQUIRIES_PER_MONTH} × {ERROR_RATE:.0%} × €{HUMAN_COST_PER_JOB:.2f} | {eur(err_month)} |")
    print(f"| Gear error, unchecked | {INQUIRIES_PER_MONTH} × {GEAR_ERROR_RATE:.1%} × €{GEAR_FAILURE_COST:.0f} | {eur(gear_unchecked)} |")
    print(f"| Gear error, I check the field (1 min) | {INQUIRIES_PER_MONTH} × €{GEAR_CHECK_COST:.2f} | {eur(gear_checked)} |")
    print(f"\nError cost ÷ token cost: **{(err_month + gear_checked) / tok_month:,.0f}×** with the gear check, "
          f"**{(err_month + gear_unchecked) / tok_month:,.0f}×** without.\n")

    print("## C. Tier comparison on my measured tokens (course reference prices)\n")
    print("| Tier | $ in / out per 1M | Cost per run | ×Budget |")
    print("|---|---|---:|---:|")
    tier_unit = {name: cost(avg_in, avg_out, p) for name, p in TIERS.items()}
    for name, p in TIERS.items():
        print(f"| {name} | ${p[0]:.2f} / ${p[1]:.2f} | {usd(tier_unit[name])} | {tier_unit[name]/tier_unit['Budget']:.0f}× |")
    print(f"| Measured ({model}) | ${price[0]:.2f} / ${price[1]:.2f} | {usd(unit)} | {unit/tier_unit['Budget']:.1f}× |\n")

    print("### C2. The curve: my measured run, 10 → 100,000 calls/day\n")
    print(f"| Scale | Calls/day | Daily ({model}) | Monthly ({model}) | Annual ({model}) | Monthly Standard | Monthly Premium |")
    print("|---|---:|---:|---:|---:|---:|---:|")
    for label, calls in [("Prototype", 10), ("Beta", 100), ("Launch", 1000), ("Growth", 10000), ("Scale", 100000)]:
        d = calls * unit
        print(f"| {label} | {calls:,} | {usd(d)} | {usd(d*DAYS)} | {usd(d*DAYS*12)} | "
              f"{usd(calls*tier_unit['Standard']*DAYS)} | {usd(calls*tier_unit['Premium']*DAYS)} |")
    print()

    print("## D. Beat product — 1 call per DJ per day, scale projection (Standard tier)\n")
    std = tier_unit["Standard"]
    print("| Scale | DJs | Calls/day | Daily | Monthly (×30) | Annual (×12) |")
    print("|---|---:|---:|---:|---:|---:|")
    for label, users in [("Prototype", 10), ("Small", 100), ("Medium", 1000), ("Large", 10000)]:
        calls = users * 1 * REGEN
        d = calls * std
        print(f"| {label} | {users:,} | {calls:,.0f} | {usd(d)} | {usd(d*DAYS)} | {usd(d*DAYS*12)} |")
    print(f"\n(Calls/day include regeneration: × {REGEN} at the {ERROR_RATE:.0%} measured error rate.)\n")

    print("## E. Break point per DJ (revenue = Check Cherry Standard, $29/month)\n")
    rev = REVENUE_PER_DJ_USD
    print("| Tier | Cost/DJ/month at 1 call/day | Warning zone (AI = 10% of revenue) | Break point (AI = revenue) |")
    print("|---|---:|---:|---:|")
    for name, u in tier_unit.items():
        per_call = u * REGEN
        print(f"| {name} | {usd(per_call*DAYS)} | {0.1*rev/(DAYS*per_call):,.0f} calls/DJ/day | "
              f"{rev/(DAYS*per_call):,.0f} calls/DJ/day |")
    print()


if __name__ == "__main__":
    main()
