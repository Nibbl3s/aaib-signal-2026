# Week 7 — Janis Krainis submission index

## Prepared in this folder

- Signal Post 7: ../posts/week-07.md
- Lab memo: lab-memo.md
- Recorded Pitch 1 script: recorded-pitch-1.md
- Cloud/local model comparison memo: ../build/week-07-comparison.md
- Local Ollama benchmark runner: ../build/benchmark_local.py

## One remaining measured task

The cloud baseline in the Build log is recorded: Run 1 = 8/10, Run 2 = 9/10, combined = 17/20 outputs (85%), with 8/10 cases passing both runs.

The local comparison is deliberately not fabricated. Run this on the Mac:

~~~bash
ollama pull qwen2.5:3b
python3 students/janis-krainis/build/benchmark_local.py --model qwen2.5:3b
~~~

The script writes:
- students/janis-krainis/build/local-benchmark-results.md
- students/janis-krainis/build/local-benchmark-results.json

Copy the actual local run rates, failures, latency and token counts into the comparison memo before submitting. The local API charge is €0; electricity and hardware are excluded. Use synthetic data only.

## Before Canvas submission

1. Check that Signal Post 7 appears on the shared Signal site.
2. Complete the local benchmark and replace every “pending” field in the comparison memo.
3. Record the model ID, version, endpoint and account tier for the original cloud run if you can recover them.
4. Record Pitch 1 as a three-minute video; this file is the speaking script, not the video.
5. Submit the lab memo, completed comparison and Signal post to Canvas by the deadline shown in the Week 7 Journey Hub.

The 6 ECTS vendor-email extension is not included because this profile is 4 ECTS.
