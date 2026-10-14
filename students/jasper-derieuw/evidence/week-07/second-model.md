---
week: 7
title: "Evidence - My Build on a Model I Own (llama3.2) vs Claude Sonnet 5.5"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Lock-in detection"
date: 2026-10-14
---

# My Build on a Model I Own vs the Cloud

**Setup:** the same prompt v1, reference list and 12 test invoices, each run twice. Model A: Claude Sonnet 5.5 via the Claude API (14 Oct, Week 6 run). Model B: `llama3.2` (3B, 2.0 GB) via Ollama on my own PC (AMD Ryzen 7 5800X3D, 32 GB RAM, NVIDIA GTX 1080; 100% on the GPU, context window 4,096 tokens), 14 Oct 2026. Prompts were about 240 tokens, so nothing was truncated.

## Comparison

| | Model A: Claude Sonnet 5.5 (cloud) | Model B: llama3.2 3B (my PC) |
|---|---|---|
| Success rate (strict: right flag and all four fields) | 22/24 (91.7%) | **4/24 (16.7%)** |
| Inputs with a different verdict on run 2 | 0/12 | 7/12 (58%) |
| Answered with Python code instead of a result | 0 | 9/24 (37.5%) |
| Sanctioned bank called "clear" (F3) | 0 | 1 (input 3) |
| Cost per run | €0.0044 (measured tokens × $2/$10 per 1M × 0.92) | €0 in API fees; electricity about €0.00006 (est.: ~180 W × 4.1 s × €0.30/kWh) |
| Speed | not measured | 4.1 s per answer on average (26 s for the first call, while the model loads) |
| Where the data went | To Anthropic's API (Commercial Terms: I own inputs and outputs; no training on them) | Nowhere: it never left my PC |

## How Model B failed differently

| # | Run A | Run B |
|---|---|---|
| 1 | F1: flag "Not Found" (not an allowed value) | Pass |
| 2 | F4: wrote Python code | F4: wrote Python code |
| 3 | **F3: called a sanctioned bank "Clear"** | F4: a status per field instead of one flag (risk caught) |
| 4 | F4: code | F4: code |
| 5 | Pass | F4: code |
| 6 | Pass | Pass |
| 7 | F4: fields replaced by statuses (risk caught) | F4: a status per field (risk caught) |
| 8 | F1: high risk match instead of needs review | F4: code |
| 9 | F1 + F2: claimed Alibaba is on the flagged list | F4: no single flag; fields marked "not found" |
| 10 | F4: code | F3: HS code and value "Not Found" although both are on the invoice |
| 11 | F4: a status per field (risk caught) | F1: needs review instead of high risk match |
| 12 | F4: code | F4: code |

Failures: F4 format × 14, F1 wrong × 4, F3 missed × 2 (one of them a sanctioned bank), F2 fabricated × 1 (secondary). The pattern is the one the lab predicts: format drift, mixing up "not on the reference list" with "not in the text", and thinner reasoning. Owning the weights means owning the ceiling.

## The Local column

| | Local (llama3.2 3B) |
|---|---|
| Quality on my task | Not usable for screening decisions (16.7%) |
| Latency | ~4 s per check on a GTX 1080 |
| Cost | €0 per call, plus hardware I already own and my time as operator |
| Best for | Private drafting or pre-sorting where a person reads every output, not for verdicts |

## Exit-cost answer

If my provider tripled its prices, my tokens would go from €79 to €237 a year (18,000 checks × €0.0132). Switching to a model I own would cost almost nothing in money but would drop my measured success from 91.7% to 16.7%. So my lock-in is not the price: it is the capability my prompt needs. A realistic exit is another frontier cloud model, not my own PC.

## Addendum, 14 October 2026 (after Build Runs 3 and 4)

I re-ran both models with prompt v2 (one fixed JSON answer, "cannot be determined" allowed, routing points are not origins). Full tables are in the [Build log](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/log-v1.md), Runs 3 and 4.

| | Claude Sonnet 5.5 | llama3.2 3B |
|---|---|---|
| Prompt v1, my 12 invoices (this page) | 22/24 (91.7%) | 4/24 (16.7%) |
| Prompt v2, my 12 invoices (Run 3) | 24/24 (100%) | 18/24 (75%) |
| Prompt v2, 18 unseen inputs from two other sets (Run 4) | 28/36 (77.8%) | 5/36 (13.9%) |

**What changes:** a better prompt fixed llama3.2's format (0 code answers, every answer valid JSON), and on my own invoices it looked close to usable. On unseen inputs it was not: when the supplier was missing, it wrote a flagged bank's name as the supplier in 22 of 36 runs. **What stays:** the conclusion above holds. A model I own is not an exit for this task, and the realistic exit is another frontier cloud model.

---

*AI disclosure: the 24 local runs were made on my own PC on 14 October 2026 with my prompt v1. I used Claude to write the run script, classify the answers against my expected answers and structure this comparison; I checked the classifications.*
