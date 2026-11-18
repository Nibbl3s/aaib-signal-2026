# Probe: ScoutLab's AI summary on two models (Week 7, Part 1)

Tests the new optional AI summary in ScoutLab on ten fixed players, twice, and scores every answer with the checker in `build\scoutlab\scout_summary.py`. Nothing you run here sends data anywhere except the model you choose.

Run everything from this folder, using ScoutLab's own Python (it already has pandas and scikit-learn):

```
cd "C:\Users\gaeta\Documents\aaib-signal-2026\students\gaetanwerbrouck\week-07\local-model"
$py = "..\..\build\scoutlab\.venv\Scripts\python.exe"
```

## Model B: a model on your laptop

```
winget install Ollama.Ollama        # skip if you already have it
ollama pull llama3.2:3b             # in a NEW PowerShell window after the install
& $py run_probe.py --model llama3.2:3b
```

Result: `probe-results-llama3.2-3b.md`.

## Model A: Claude

You do not need an API key. Use the claude.ai chat:

```
& $py run_probe.py --export-prompt prompt.txt
```

1. Open a **new** claude.ai chat (not this one) and paste the whole of `prompt.txt`. Copy Claude's answer into a file called `claude1.txt`.
2. Open **another new** chat, paste the prompt again, and save the answer as `claude2.txt`.
3. Score both:
   ```
   & $py run_probe.py --score-files claude1.txt claude2.txt --label Claude
   ```

Result: `probe-results-Claude.md`.

## Then

Copy from each results file into Part 1 of `..\lab-memo.md`: the success rate (out of 20), the "How it failed" counts, and the estimated cost. Write what the failures look like in your own words.

## Notes
- If the app cannot fetch the dataset (no internet), add `--csv path\to\file.csv`.
- Do not commit `prompt.txt`, `claude1.txt`, `claude2.txt` or the `probe-results-*.md` files unless you want them public. They contain stats from a dataset whose licence is unclear.
- If the local model is very slow, a smaller one is fine. Tell me which model you used.
