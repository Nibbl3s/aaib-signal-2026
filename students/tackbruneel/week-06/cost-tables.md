## A. Lab call — gemini-3.1-flash-lite, 2026-10-26T20:03:13+01:00

| Input | Output (incl. 0 thinking) | Latency | Input cost | Output cost | Cost per call |
|---:|---:|---:|---:|---:|---:|
| 23 | 25 | 19.84 s | $0.0000058 | $0.0000375 | **$0.0000433** |

## B. My Build, prompt v1 — gemini-3.1-flash-lite

| Input | In tokens | Out tokens (thinking) | Latency | Cost per run |
|---|---:|---:|---:|---:|
| T03 | 644 | 151 (0) | 0.96 s | $0.0003875 |
| T09 | 949 | 157 (0) | 13.04 s | $0.0004727 |
| **Average of 2** | **796** | **154** | | **$0.0004301** |

### B2. Monthly cost of my Build at my volume

| Line | Formula | €/month |
|---|---|---:|
| Token cost | 2.9 runs × $0.0004301 × 0.92 | €0.0011 |
| Ordinary errors (I redo the reading) | 2.9 × 50% × €2.50 | €3.62 |
| Gear error, unchecked | 2.9 × 13.3% × €300 | €116.00 |
| Gear error, I check the field (1 min) | 2.9 × €0.33 | €0.9667 |

Error cost ÷ token cost: **4,001×** with the gear check, **104,242×** without.

## C. Tier comparison on my measured tokens (course reference prices)

| Tier | $ in / out per 1M | Cost per run | ×Budget |
|---|---|---:|---:|
| Budget | $0.20 / $1.20 | $0.0003441 | 1× |
| Standard | $2.00 / $12.00 | $0.0034 | 10× |
| Premium | $5.00 / $30.00 | $0.0086 | 25× |
| Measured (gemini-3.1-flash-lite) | $0.25 / $1.50 | $0.0004301 | 1.2× |

### C2. The curve: my measured run, 10 → 100,000 calls/day

| Scale | Calls/day | Daily (gemini-3.1-flash-lite) | Monthly (gemini-3.1-flash-lite) | Annual (gemini-3.1-flash-lite) | Monthly Standard | Monthly Premium |
|---|---:|---:|---:|---:|---:|---:|
| Prototype | 10 | $0.0043 | $0.1290 | $1.55 | $1.03 | $2.58 |
| Beta | 100 | $0.0430 | $1.29 | $15.48 | $10.32 | $25.81 |
| Launch | 1,000 | $0.4301 | $12.90 | $154.84 | $103.23 | $258.07 |
| Growth | 10,000 | $4.30 | $129.04 | $1,548.45 | $1,032.30 | $2,580.75 |
| Scale | 100,000 | $43.01 | $1,290.38 | $15,484.50 | $10,323.00 | $25,807.50 |

## D. Beat product — 1 call per DJ per day, scale projection (Standard tier)

| Scale | DJs | Calls/day | Daily | Monthly (×30) | Annual (×12) |
|---|---:|---:|---:|---:|---:|
| Prototype | 10 | 15 | $0.0516 | $1.55 | $18.58 |
| Small | 100 | 150 | $0.5161 | $15.48 | $185.81 |
| Medium | 1,000 | 1,500 | $5.16 | $154.84 | $1,858.14 |
| Large | 10,000 | 15,000 | $51.62 | $1,548.45 | $18,581.40 |

(Calls/day include regeneration: × 1.5 at the 50% measured error rate.)

## E. Break point per DJ (revenue = Check Cherry Standard, $29/month)

| Tier | Cost/DJ/month at 1 call/day | Warning zone (AI = 10% of revenue) | Break point (AI = revenue) |
|---|---:|---:|---:|
| Budget | $0.0155 | 187 calls/DJ/day | 1,873 calls/DJ/day |
| Standard | $0.1548 | 19 calls/DJ/day | 187 calls/DJ/day |
| Premium | $0.3871 | 7 calls/DJ/day | 75 calls/DJ/day |

