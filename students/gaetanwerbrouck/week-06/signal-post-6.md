# What an AI Scouting Report Really Costs, and Why the Transfer Window Is the Break Point

Football clubs are adding AI to recruitment to process more players than their scouts can. Per report the API bill looks negligible, about one cent. I modelled what it costs at scale, and the danger turned out not to be the number of clubs using the tool but what happens to each scout in January.

## The use case

A scouting-software company adds an AI report writer to a player-discovery tool like my ScoutLab Build. A scout selects a candidate; the AI reads his position-relative stat profile, a dated market value and the scout's match notes, then writes a one-page report: strengths, weaknesses, data gaps, and whether the gap between performance and price justifies a live viewing. I assume 15 reports per scout per day in a normal week and 60 during the transfer window, sold as a €39/month add-on per seat. Those three numbers are my assumptions, not market data.

## The numbers

Each report uses about 1,800 input tokens (instructions, stat profile, scout notes) and 700 output tokens. These are estimates. My measured anchor is a real ScoutLab test: a report on Haaland from seven stats used 137 input and 229 output tokens. A production report also carries the scout's notes, a rubric and a fuller profile, so it will be several times bigger. I chose the Standard tier, `gpt-5.6-terra`, at $2.00 per million input and $12.00 per million output tokens (AI Pricing Reference, snapshot 7 September 2026), because a report that invents one statistic destroys the scout's trust in all of them.

One report costs $0.0036 input + $0.0084 output = **$0.012**. Output is 70% of that, so shorter reports save more than shorter prompts.

| Users | Reports/day | Monthly cost | Annual cost |
|---:|---:|---:|---:|
| 100 | 1,500 | $540 (€497) | $6,480 (€5,962) |
| 1,000 | 15,000 | $5,400 (€4,968) | $64,800 (€59,616) |
| 10,000 | 150,000 | $54,000 (€49,680) | $648,000 (€596,160) |

At 10,000 users that's €596,160 a year, which sounds alarming until you compare it with revenue: €39 × 10,000 × 12 = €4.68 million. Token cost is 12.7% of revenue at every scale, because cost and revenue both grow per seat.

The model choice moves the number far more than the user count does. The same report costs $0.0012 on Budget and $0.030 on Premium, a 25× spread for the same prompt. And the unit cost won't stay flat: clubs will add injury history and contract data to the prompt and ask for longer reports. If unit cost rises 50% over a year, the 1,000-user bill goes from $64,800 to $97,200.

Then there's the cost nobody puts on the invoice. A wrong report costs the club about ten minutes of a scout re-checking FBref and Transfermarkt: €6.67 at €40/hour. Even at a modest 5% error rate (an assumption), each scout spends roughly €150 a month correcting reports, nearly four times the €39 seat price. The vendor doesn't pay that. The club does, and it pays by cancelling.

## The break point

The break point is the number of reports per scout per day at which serving that scout costs more than they pay. Including regenerated reports (+15% on Standard, +5% on Premium), Standard costs €5.71 per scout per month at 15 reports a day. That's 14.6% of the seat price, already past the 10% warning line. At 60 reports a day in the window it costs €22.85, still a €16.15 margin. Standard only breaks at about 102 reports a day.

Premium is different. At 60 reports a day it costs €52.16 against €39 of revenue: **−€13.16 per scout**. It breaks at about 45 reports a day. So the scenario that kills this product is very specific: a flat seat price, "let's upgrade to the better model", and a busy January.

The assumption that makes it work is tiered routing: the Budget model writes first-pass reports and Standard writes only the reports for players who make the shortlist. With an 80/20 split, the cost per report drops 72% and the break point moves out to about 330 reports a day. The assumption that makes it fail is that prices stay where they are. This is a reading from 26 October 2026, and it needs re-running whenever prices change.

## The insight

What surprised me most was my own Build. ScoutLab calculates its scores locally, so it costs €0 in tokens. My real test report on Haaland cost $0.000378, so AI reports would cost about 7 cents a month at 200 profiles. The report invented no numbers, but it called him "elite" at positioning, which nothing in the data shows. ScoutLab passed all 15 of its test cases, but 15 trials can't rule out a true error rate of up to 20%. At that rate, checking reports would cost about €267 a month, roughly 3,800 times the token bill. The token price is the smallest number in my whole model.

For a builder in football recruitment: don't model the user count, model the scout. Their workload is seasonal, and it peaks exactly when a bad report is most expensive. Price for the transfer window, not for October.

## The question

If transfer-window demand is what breaks the economics, should scouting AI be priced per report instead of per seat, and would clubs accept a bill that rises exactly when they're busiest?

**Sources:** AI Pricing Reference (course), snapshot 7 September 2026; my Gemini API call (Google AI Studio, Flash-Lite, October 2026); my ScoutLab evaluation (`build/scoutlab/evaluation-plan.md`); FBref and Transfermarkt as the verification sources scouts check against. Full calculations: `api-call-lab.md`, `beat-cost-model.md`, `build-cost.md`.
