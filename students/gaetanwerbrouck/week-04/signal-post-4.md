# Signal Post 4: What Is a Football Scouting Tool Actually Worth?

A scouting tool only creates value if it helps a club find and review promising players faster, without hiding important context or adding costs that outweigh the benefit. A positive demo is not a return-on-investment case.

## The candidate

My beat is how football clubs use data to find players whose performances deserve more attention than their reputation or estimated market value might suggest. For a realistic composite Belgian club, Flanders United FC, the candidate is ScoutLab, a player-discovery and comparison dashboard. It filters a player pool, displays position-relative profiles, compares candidates, finds similar statistical profiles and exports a shortlist. If dated market values are supplied, it can also compare performance rank with value rank.

This sits in recruitment and scouting. An analyst currently gathers statistics across pages and spreadsheets. Human scouts still check the data, watch video, assess tactical fit and decide who merits deeper work. ScoutLab does not make transfer decisions.

## The numbers

The public reference dataset has 339 player rows from the 2023/24 Premier League season. It is historical and has no market-value column, so it cannot prove that its players are undervalued. To estimate possible process value, I use a hypothetical workload rather than claim a result for a real club.

| Benefit category | Annual value | Formula and treatment |
|---|---:|---|
| Time saved | €16,000 (est.) | 200 profiles/month × 12 × 10 minutes saved/profile ÷ 60 × €40/hour |
| Revenue increase | €0 counted | Additional deals × revenue/deal cannot be estimated from available evidence, so no revenue uplift is claimed. |
| Cost reduction | €0 counted | Current expenses minus new expenses is not measured; no cash cost is known to disappear. |
| Risk mitigation | €0 counted | Probability × impact × reduction factor cannot be defended without data about avoided recruitment errors. |
| **Gross benefit** | **€16,000 (est.)** | Time-capacity value only, not guaranteed cash. |

The ten-minute saving is a hypothesis. It assumes manual discovery and comparison takes 15 minutes/profile, while ScoutLab-assisted review takes five minutes after data is prepared. Thus (15 - 5) minutes × 200 profiles/month × 12 ÷ 60 × €40/hour = €16,000/year. Both the volume and loaded hourly rate are estimates, not club measurements.

Estimated Year 1 costs are €800 for 20 hours of setup and validation (20 × €40), €1,920 for four hours/month of data checking and refresh (4 × 12 × €40), and €400 for ten hours of maintenance (10 × €40). The app makes no language-model API calls, so no LLM token cost is assumed. Hosting, performance-data rights and market-value data may cost extra and remain unpriced. The modelled total is €3,120, giving a provisional net of €16,000 - €3,120 = **€12,880** before those extra costs. Payback on the €800 setup estimate is about 0.7 months after launch if the assumed benefit and recurring costs hold.

## The pressure test

If the time benefit is 50% lower, gross value falls to €8,000 and modelled Year 1 net to €4,880 (€8,000 - €3,120). Extra data costs or no real reduction in handling time could remove the remaining margin. The biggest uncertainty is whether ScoutLab saves ten minutes on real tasks and improves the shortlist compared with the current process.

A pilot should time the same player profiles in the current workflow, a spreadsheet baseline and ScoutLab. Record time, source-data errors, useful candidates found and human review required. The market-value feature stays unavailable until dated, attributable values are supplied. A positive performance/value gap is a lead to investigate, not proof that the market price is wrong.

## The insight

My verdict is **pilot only, not a full investment**. A spreadsheet remains simpler for fixed thresholds, as my Week 2 test showed. ScoutLab has a broader workflow, especially comparison and similar-profile discovery, but I have not measured whether those features create extra value. I need the expected-answer tests, a timed comparison, permissioned data and real peer feedback before claiming proven ROI. Value quantification means rejecting the tool if evidence does not justify it.

## Data source

- [FootballScoutingAI reference project](https://github.com/sahilwalawalkar/FootballScoutingAI)
- [Processed Premier League 2023/24 CSV](https://raw.githubusercontent.com/sahilwalawalkar/FootballScoutingAI/main/data/processed/premier_league_2023_24_scouting_final.csv)

The upstream README does not clearly state the dataset licence, so permission must be checked before real deployment or redistribution.
