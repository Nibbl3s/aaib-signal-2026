# Week 7: Build on a model I own (record of the runs)

- Prompt: v1, see ../prompt.md. Inputs and expected answers: ../test-set.md (written before any run).
- Script: ../run_build.py (each of the 13 inputs run twice, runs A and B, system + user message, temperature unchanged).
- Cloud model: gemini-3.5-flash-lite through the Google AI Studio API. Raw outputs: results-cloud-gemini-3.5-flash-lite.json.
- Local model: llama3.2 (about 3B parameters) through Ollama on a MacBook Air. Raw outputs: results-local-llama3.2.json.
- Date of the runs: 2026-11-20 (date the output files were saved).
- Scoring: score.py, strict (every field and missing_info must match; code fences not counted as failures). Output: scores.txt.
- Result: cloud 3/13 (run A) and 4/13 (run B); local 0/13 and 0/13.

AI use: Claude helped me write the script and the scorer; I ran the models myself and the outputs are the raw files above.
