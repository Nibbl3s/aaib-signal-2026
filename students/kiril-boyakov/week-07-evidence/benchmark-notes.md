# Week 7 — Controlled comparison

## Results and limits

| Available evidence | Outcome | API cost |
|---|---|---|
| Week 2 recorded cloud baseline, GPT-6 Astra Medium | 20/20 recorded passes on the ten repeated cases. No model failures were recorded. The procedure mixed individual and batch prompts. | Unmeasured for those runs. |
| Week 6 Gemini 3.5 Flash-Lite API, Test 01 only | One correct ROAD classification with an exact quote. | $0.0002106 at the listed rates for 352 input and 42 output tokens. |
| Week 7 local Llama 3.2 3B | 2/20 strict passes, 8/20 correct labels. | €0 external API fee. |
| Week 7 Gemini retry | No classification responses. HTTP 403 and 401 access errors. | No usage object returned. |

The historical cloud log recorded no output failures. Local Llama confused separate services with a combined journey and misread explicit modes. On the one directly comparable input, Gemini returned ROAD, while Llama returned MULTIMODAL and then NOT ENOUGH INFORMATION. This supports keeping a human fallback. The 90 percentage point gap between the recorded Week 2 and Week 7 strict scores is descriptive only because the providers and request procedures differed.

## Procedure

Use the ten Week 2 inputs and their prewritten answers. Send each input twice as a fresh single-turn request to each model. Keep prompt v1 and the input text identical across models. The benchmark sends no reference answers. Score the mode, supporting evidence and reason together. A valid alternative exact quotation can pass when it supports the expected label. Note the original language, ambiguity and category boundaries when assessing misses.

Keep JSON responses with input ID and repetition, elapsed time and timestamp. The local stream records time to first text and the runner's reported usage. Count model failures separately from errors that prevented a response. For inconsistency, compare the two decisions and whether they meet the criteria, rather than judging harmless wording differences as failures. Use the course F1–F6 taxonomy.

| Measure | Gemini cloud | Llama locally |
|---|---|---|
| Model | Request targets Gemini 3.5 Flash-Lite. Confirm returned version in each successful response. | Llama 3.2 3B text model downloaded with Ollama and served through llama.cpp on CPU. |
| Successful classifications | Pending. Fresh attempts returned HTTP 403 or 401 without model answers. | 2/20 strict passes (10%); 8/20 correct labels (40%). |
| Cost | Calculate from actual run usage and current paid rates. Week 6 single example was $0.0002106 at its stated rates. | €0 external API fee. Track electricity, hardware and staff time separately. |
| Failure profile | Pending fresh model responses. The rejected requests establish an access issue. | Lists of services treated as combined journeys, errors on explicit road and air, and incorrect or missing evidence. Test 01 changed labels between rounds. |
| Data path | Public benchmark descriptions are sent to Google's Gemini API on successful calls. | The successful requests targeted a llama.cpp server at 127.0.0.1 with model weights and output logs on the Mac. |

The historical Week 2 result was 20 passing responses out of 20 records across ten repeated inputs. It combined a different model and both single-case and batch prompts. It is context for the Build, separate from the matched experiment. The recorded cloud benchmark had no failures on that earlier setup. Its per-run API cost was not measured. The $0.0002106 figure is the separate Week 6 Gemini call using the same first case, with 352 input and 42 output tokens. No matched cloud-versus-local performance delta or average cloud cost can be inferred from these figures.

Sources: [Local Model Lab](https://advanced-ai-in-business.vercel.app/resources/week-07-local-model-lab.md), [Failure taxonomy](https://advanced-ai-in-business.vercel.app/resources/failure-taxonomy.md), [Ollama chat API](https://docs.ollama.com/api/chat).

[Detailed local scores and responses](local-results.md). The local benchmark encountered Metal initialization errors and recovered on CPU.
