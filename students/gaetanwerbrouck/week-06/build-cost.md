# Week 6 — The Build: Cost It For Real (ScoutLab)

**My Build:** ScoutLab, a Streamlit player-discovery and comparison tool (`build/scoutlab/`).
**Prices:** Google `gemini-3.1-flash-lite`, $0.25 / 1M input, $1.50 / 1M output (AI Pricing Reference, snapshot 7 September 2026). $1 = €0.92.

## Starting point: ScoutLab today costs €0 in tokens

ScoutLab doesn't call a language model. Its scores are explicit percentile weights, and similar players are found with cosine similarity, all computed locally in Python. So **ScoutLab's current token cost is €0 at any scale.** Its running costs are data refresh and checking (€1,920/year in my Week 4 memo), not API calls.

That means the real cost question for my Build is **what it would cost to add the one feature that does need an LLM**: an AI-written scouting report on top of a ScoutLab profile. That's the use case I modelled at scale in `beat-cost-model.md`. Here I cost it with my own prompt and one of my own ScoutLab test inputs.

---

## My own call with my own prompt

Same Hoppscotch setup as my first call (`POST …/models/gemini-3.1-flash-lite:generateContent`). The test input is **case 1 from `build/scoutlab/evaluation-plan.md`**: Erling Haaland, with the source facts I checked against the ScoutLab reference CSV in Week 4.

```json
{
  "contents": [{
    "parts": [{
      "text": "You are a football recruitment analyst. Using ONLY the data below, write a short scouting report with four headings: Strengths, Weaknesses, Data gaps, Recommendation (watch live: yes/no and why). Do not add any statistic, club or fact that is not in the data.\n\nPlayer: Erling Haaland | Club: Manchester City | Position group: Forward | Age: 23 | League minutes: 2,556 | Goals per 90: 0.95 | Expected goals per 90: 1.03 | Season: Premier League 2023/24 | Market value: not available in this dataset"
    }]
  }]
}
```

A correct answer uses only those numbers, and flags under Data gaps that there's no market value. Saying he is "undervalued" or inventing a transfer fee would count as an **F2 fabrication**.

**Usage object from my response**:

```json
"usageMetadata": {
  "promptTokenCount": 137,
  "candidatesTokenCount": 229,
  "totalTokenCount": 366,
  "promptTokensDetails": [{ "modality": "TEXT", "tokenCount": 137 }],
  "serviceTier": "standard"
},
"modelVersion": "gemini-3.1-flash-lite",
"responseId": "Ttrgar2JN6KvkdUPqszu4AY"
```

| From my own call | Value |
|---|---:|
| Input tokens per run | **137** (measured) |
| Output tokens per run | **229** (measured) |
| Cost per run at Flash-Lite | (137 ÷ 1M × $0.25) + (229 ÷ 1M × $1.50) = $0.00003425 + $0.0003435 = **$0.000378** |
| Realistic monthly volume | **200 profiles/month**, the same club scenario as my Week 4 memo (a recruitment analyst reviewing a few hundred candidates per window). It's an assumption, not a real club figure. |
| Monthly token cost | 200 × $0.000378 = **$0.076 ≈ €0.07** |

Output is **91%** of the cost of this call. The report has 1.7× more tokens than the prompt, and each output token costs 6× more.

### Did the report pass? (checked against the input data)

| Check | Result |
|---|---|
| Used only the supplied numbers (0.95 goals/90, 1.03 xG/90) | ✓ No invented statistics, clubs or transfer fees |
| Flagged the missing market value under Data gaps | ✓ "no information regarding … market value" |
| Didn't call him "undervalued" | ✓ |
| Weakness supported by the data | ✓ 0.95 goals vs 1.03 xG per 90, so slightly under expected goals |
| Claims the data can't support | ⚠️ "Elite **positioning**" is an interpretation of xG, not something in the data. It's a minor overreach, not a fabricated number. |

**Verdict: pass, no F2 fabrication**, with one overclaim worth fixing in the prompt ("describe only what the numbers show"). This is 1 report on 1 player, so it shows the pattern but doesn't establish an error rate.

## The half that actually decides it: errors

| | Value |
|---|---|
| My measured error rate | **0 failures in 15 ScoutLab test cases** (Week 4, `build/scoutlab/evaluation-plan.md`, one run, student-reported). This measures the deterministic part of ScoutLab (profiles, comparison, similar players, value upload, export), **not** the AI report, which isn't built yet. |
| Honest upper bound | 0 in 15 doesn't prove 0%. By the rule of three (3 ÷ n), the true rate could be up to **~20%** at 95% confidence. For a generated report I'd expect it to be closer to that bound than to zero, because text generation can invent facts and a percentile calculation can't. |
| Who fixes an error here? | The scout/analyst, by checking the report against the ScoutLab profile and FBref/Transfermarkt before the player goes on the shortlist. |
| Cost per error | 10 min × €40/h = **€6.67** (same €40/h rate as my Week 4 memo) |
| Monthly error cost | Measured: 0 × €6.67 = **€0**. Upper bound: 200 × 20% = 40 errors × €6.67 = **€267/month** |
| Error cost ÷ token cost | Measured: 0×. Upper bound: €267 ÷ €0.07 ≈ **3,800×** |

## What this says about my Build

- **Adding AI reports to ScoutLab costs almost nothing in tokens**: about 7 cents a month at 200 profiles, ~€7 a month even at 100× that volume.
- **The cost that matters is verification.** One invented statistic that gets a player onto a shortlist costs more than years of tokens. My weakest number is the error rate: 15 cases, one run, and none of them tested generated text.
- **Design decision:** ScoutLab keeps the numbers deterministic (scores, similarity, value gap) and would use the LLM only to *write up* figures it's given, with an instruction not to add any facts. That limits what can go wrong to F2 fabrication, which is checkable against the profile on screen.

**Next step:** add an AI-report case to the ScoutLab evaluation plan, with expected answers written first. Run it on several players (including Alisson Becker, whose missing attacking stats must not be invented), run each twice for an F6 consistency check, so the AI report gets an error rate of its own instead of borrowing ScoutLab's 15-case result.
