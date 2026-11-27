# Local classifier — measured-token extrapolations

Measured Week 8 total: 20 inference calls; 2,606 input tokens and 68 output tokens. Means: **130.3 input and 3.4 output tokens/call**. These counts include the prompt as reported by Ollama; they are not a cloud bill. Average lengths from ten short synthetic enquiries cannot predict real ticket lengths or multilingual overhead reliably.

Assume 250 operating days/year and 250/12 days per average month. The following are arithmetic extrapolations, not executed workloads or measured deployment capacity. External local-inference token fees are €0 in each case; this excludes all hardware, power, maintenance and review costs.

| Calls/day | Calls/year | Input tokens/month | Output tokens/month | Input tokens/year | Output tokens/year | External token fee |
|---|---:|---:|---:|---:|---:|---:|
| 100 | 25,000 | 271,458.33 | 7,083.33 | 3,257,500 | 85,000 | €0 |
| 1,000 | 250,000 | 2,714,583.33 | 70,833.33 | 32,575,000 | 850,000 | €0 |
| 10,000 | 2,500,000 | 27,145,833.33 | 708,333.33 | 325,750,000 | 8,500,000 | €0 |

Monthly input/output counts scale linearly only under the constant average token assumption. Do not scale the 10.065-second full experiment wall time into a server-capacity promise: it includes cold-start and overhead effects. At assumed 19.5 seconds of review plus correction per query, 100/1,000/10,000 daily enquiries require approximately 0.54/5.42/54.17 staff hours/day. Zero token fees do not eliminate a staffing or capacity limit.

See [cost calculations](financial-checks.json), [source checks](source-checks.md) and [actual raw experiment](results.jsonl).
