# Week 7 — Second-model comparison memo

**Student:** Janis Krainis  
**Status:** Cloud side documented; local side pending an actual Ollama run.

## 1. The same test, same prompt, same discipline

The assignment requires the existing test set to be run on a local open-weights model twice. My existing cloud log contains ten synthetic freight emails and two recorded outputs per email.

| Metric | Cloud Build (from existing log) | Local open-weights model |
|---|---:|---:|
| Model | Exact model ID not recorded. Week 6 mentions one initial Gemini Flash call; its projection later uses a separate course pricing reference. | Qwen2.5 3B via Ollama (proposed; run pending) |
| Run 1 success | 8/10 (80%) | Pending |
| Run 2 success | 9/10 (90%) | Pending |
| Combined output-level success | 17/20 (85%) | Pending / 20 |
| Stable cases (passed both runs) | 8/10 (80%) | Pending / 10 |
| Cost per run | Not recoverable exactly from Build log; Week 6 has a separately modelled unit cost, not an observed bill for these 20 outputs. | €0 model API charge (course template); electricity and hardware excluded |
| Failures | Input 8: weight formatting inconsistent. Input 9: Valencia supplier context omitted in both runs. | Pending raw outputs |

**Do not mix the metrics:** 17/20 is the pass rate across outputs; 8/10 means only eight test cases passed both repetitions. Week 6's 18% error assumption is a separate operational projection, not the result of this 10-input test set.

## 2. Local model choice

Candidate: Qwen2.5 3B using Ollama. The official Ollama library page lists a 1.9 GB Q4_K_M build and provides the local command/API example. It supports multilingual text and structured output. **Licence note:** the 3B model tag shows the Qwen Research License, not Apache 2.0; this is a coursework experiment, not a commercial deployment recommendation.

Ollama's local API base is localhost:11434. The runner in this folder calls the local /api/chat endpoint. Keep the endpoint on localhost; do not substitute an Ollama cloud model.

## 3. Exact method

1. Install Ollama on the Mac.
2. Run: ollama pull qwen2.5:3b
3. From the repository root run: python3 students/janis-krainis/build/benchmark_local.py --model qwen2.5:3b
4. Inspect local-benchmark-results.md and local-benchmark-results.json; retain all raw outputs.
5. Enter the actual run rates, token counts and latency in this memo and note how the errors differ from inputs 8 and 9.

The script reuses the existing Prompt v2 wording, all ten test-set inputs and their expected outputs. It uses two recorded seeds, runs every input twice, checks exact field values and numeric kilogram values, and records latency and Ollama token counts.

## 4. How the failures differ — pending

The cloud-side failure profile is known:
- **Input 8 / format inconsistency:** one run returned “about two tons”; the other returned “2,000 kg”. The second matches the required normalized format.
- **Input 9 / contextual omission:** both runs returned the Madrid transit hub without retaining the Valencia supplier note.

The local model comparison must report whether it repeats either error, refuses a field, fabricates a missing weight, or introduces different category/location mistakes. Do not infer the answer before reading the output JSON.

## 5. Where the data went

**Cloud:** the API request went to a hosted provider. The current Build log does not record the exact endpoint/model for every run, so the provider's processing region, account tier and retention terms cannot be assigned to all twenty outputs. The ten-email test set is synthetic; do not test real shipment or customer emails until the actual provider terms and company approval have been checked.

**Local (when run as scripted):** prompts are sent to the local Ollama server at localhost:11434, and inference happens on the Mac itself. The model weights are downloaded from the Ollama library on the first pull. Keep the server bound to localhost and do not select a cloud-tagged model; under those conditions the message content is processed on the device rather than sent to a hosted inference API.

## 6. Honest conclusion

The cloud prototype currently scores 85% over twenty outputs, with only 80% of test cases passing both repetitions. The local result is not measured yet, so I cannot honestly claim that it is better, worse or equal. The comparison becomes meaningful only after the same ten examples have been run twice locally and the full outputs have been inspected.
