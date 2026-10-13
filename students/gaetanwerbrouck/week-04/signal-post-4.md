# Signal Post 4: What Is a Football Scouting Tool Actually Worth?

Football clubs can collect more player statistics than ever, but a bigger spreadsheet does not automatically create better recruitment decisions. A scouting tool only creates value if it helps a club find and review promising players faster, without hiding important context or adding costs that outweigh the benefit.

## The candidate

My beat is how football clubs use data to find players whose performances deserve more attention than their reputation or estimated market value might suggest. For a realistic composite Belgian club, Flanders United FC, the candidate is ScoutLab, a player-discovery and comparison dashboard. It filters a player pool, shows position-relative performance profiles, compares candidates, finds similar statistical profiles, and exports a shortlist. Where dated market-value data is supplied, it can also compare performance rank with value rank.

This sits in the recruitment value chain. The intended user is a scouting analyst who currently gathers statistics across pages and spreadsheets. A human scout still checks data, watches video, evaluates tactical fit and decides whether a player merits deeper work. ScoutLab does not make transfer decisions.

## The numbers

The public reference dataset has 339 player rows from the 2023/24 Premier League season. It is useful for testing the workflow, but it is historical and does not contain market values. I therefore cannot claim the default data has already discovered undervalued players. I use a hypothetical monthly workload to estimate possible process value, not as a measured fact about a real club.

| Benefit category | Annual value | Formula and treatment |
|---|---:|---|
| Time saved | €16,000 (est.) | 200 profiles/month × 12 × 10 minutes saved/profile ÷ 60 × €40/hour. Both profile volume and time saved must be measured in a pilot. |
| Revenue increase | €0 counted | No evidence that a shortlist directly creates additional transfer revenue. |
| Cost reduction | €0 counted | No actual expense is proven to disappear, so freed-up time is not described as a cash saving. |
| Risk mitigation | €0 counted | There is no defensible probability and impact estimate for a missed player or a bad signing. |
| **Gross benefit** | **€16,000 (est.)** | Time-capacity value only, not guaranteed cash. |

The 10-minute saving is a hypothesis: manual discovery and comparison would take 15 minutes per profile, while ScoutLab-assisted review would take 5 minutes after the relevant data is prepared. The calculation is (15 - 5) minutes × 200 profiles/month × 12 ÷ 60 × €40/hour = €16,000 a year. The €40 loaded hourly rate and 200-profile volume are scenario assumptions, not measurements from a club.

Estimated Year 1 costs are €800 for 20 hours of setup and validation (20 × €40), €1,920 for four hours/month checking and refreshing data (4 × 12 × €40), and €400 for ten hours of maintenance (10 × €40). The app itself does not call a language model API, so no LLM token cost is assumed. Hosting, a licensed performance feed and market-value data may cost extra and have not been priced. Total currently modelled cost is €3,120, giving a provisional net value of €16,000 - €3,120 = **€12,880** before those unpriced costs. Payback on the €800 setup estimate is about 0.7 months after launch if the assumed benefit arrives and recurring costs remain as modelled.

## The pressure test

If the time benefit is 50% lower, gross value drops to €8,000 and the modelled Year 1 net is €4,880 (€8,000 - €3,120). That still looks positive on paper, but a paid data feed, higher preparation time or no actual reduction in manual work could remove the remaining margin. The biggest uncertainty is not the calculation. It is whether ScoutLab really saves ten minutes on real scouting tasks and improves the shortlist compared with the current process.

The pilot should compare the same player profiles through the current workflow, a spreadsheet baseline and ScoutLab. Record time, data errors, useful candidates found, and the human review required. The market-value feature must stay disabled until values from an attributable source and date are supplied. A positive performance/value gap is a lead to investigate, not proof that the market price is wrong.

## The insight

My current verdict is **pilot only, not a full investment**. A spreadsheet remains the simpler tool for fixed thresholds, as my Week 2 test showed. ScoutLab has a broader workflow, especially comparison and similar-profile discovery, but I have not yet measured whether those features create enough extra value. I need the expected-answer tests, a timed comparison with the current process, reliable and permissioned data, and real peer feedback before claiming a proven ROI. Value quantification means being willing to reject the tool if the evidence does not justify it.

## Data source

- [FootballScoutingAI reference project](https://github.com/sahilwalawalkar/FootballScoutingAI)
- [Processed Premier League 2023/24 CSV](https://raw.githubusercontent.com/sahilwalawalkar/FootballScoutingAI/main/data/processed/premier_league_2023_24_scouting_final.csv)

The upstream README does not clearly state the dataset licence, so permission must be checked before any real deployment or redistribution.
