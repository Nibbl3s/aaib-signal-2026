# Signal Post 2: Stress-Testing an LLM Triage Engine Against Live Operational Feedback

## 1. System Context & Operational Objective
Building automated intake pipelines for hospitality operations sounds deceptively simple: take an unstructured guest review, extract sentiment, assign a department tag, and flag urgent tickets for management. In practice, offloading operational triage to an unconstrained LLM creates silent failure points. 

Prompt v1 was designed to enforce a rigid JSON schema, classifying incoming customer feedback across four operational categories (`Food/Hygiene`, `Service/Staff`, `Facility/Maintenance`, `General/Experience`) while identifying root causes and setting a binary `escalation_flag`. To evaluate reliability before deployment, the prompt was benchmarked across two distinct environments: a controlled 10-case internal test set and an 8-case practitioner dataset scraped from Google Maps.

## 2. Methodology: Synthetic Control vs. Live Noise
Testing focused on both semantic accuracy (Ground Truth alignment) and non-deterministic drift (running identical inputs twice across fresh execution contexts):

* **Internal Test Suite (10 inputs x 2 runs):** Structured boundary cases testing edge behaviors, including bilingual phrases, sarcasm, legal threats, and mixed sentiment.
* **Practitioner Dataset (8 inputs x 2 runs):** Anonymized, live customer reviews from *Clouds in my coffee* (a local specialty café in Ghent, Belgium). Sourced directly from public Google Maps records to capture unfiltered customer syntax, multi-clause complaints, and organic linguistic noise (English, Dutch, and Hungarian).

## 3. Failure Mode Breakdown: The Anatomy of F1 and F6

Across 36 total prompt runs, two dominant failure modes surfaced:

### F1: The Boundary Masking Error (Mixed Sentiment Bias)
In both testing tiers, the model struggled when positive atmospheric remarks coexisted with specific operational flaws. 
* **The Incident:** When parsing a review stating that the garden and cheesecakes were delicious but multiple menu choices were unavailable, the model defaulted to `General/Experience` with a `Positive` sentiment.
* **Root Mechanism:** The LLM exhibited a classic semantic "halo effect." The positive emotional valence of words like "cozy" and "delicious" statistically overpowered the operational defect ("menu choices not available"). In an operational setting, this error is critical: kitchen inventory bottlenecks remain invisible to management because the ticket was swallowed by general praise.

### F6: Non-Deterministic Category Drift
Without an explicit priority ladder, the model fluctuated between equally valid operational tags across identical runs.
* **The Incident:** An enthusiastic review praising both floor staff attention and food quality was tagged as `General/Experience` on Run 1, but drifted to `Service/Staff` on Run 2.
* **Root Mechanism:** Natural temperature jitter caused the model's attention heads to shift weight between competing clauses. Because prompt v1 did not specify a tie-breaking rule for multifaceted praise, the system produced unpredictable telemetry for the manager dashboard.

## 4. The Practitioner Gap: Why Synthetic Tests Lie
Comparing test environments demonstrated why internal developer tests consistently inflate performance metrics:

* **Internal Test Suite Pass Rate:** 80% (8/10 clean passes across both runs)
* **Practitioner Dataset Pass Rate:** 75% (6/8 clean passes across both runs)

While a 5% drop appears modest on paper, the qualitative gap was substantial. Developer-authored test sets unconsciously isolate single variables (e.g., a sentence exclusively about a cold steak or a broken air conditioner). In contrast, real guests at *Clouds in my coffee* filed reviews combining slow table turns, missing condiments, beverage serving temperatures, and unexpected surcharges into single run-on paragraphs. 

The model handled raw multilingual translations cleanly (normalizing Dutch pricing complaints and Hungarian culinary terms into standardized English root causes). However, it stumbled whenever a guest presented multiple distinct grievances without establishing a primary complaint.

## 5. Architectural Takeaways for Prompt v2
Treating prompt design as software engineering requires resolving these edge cases structurally rather than hoping for better probabilistic outputs:

1. **Deterministic Tie-Breaking Ladder:** Prompt v2 must introduce an explicit hierarchy rule. When multiple departments are implicated in a single review, priority must follow operational severity: `Food/Hygiene (Safety)` > `Facility/Maintenance` > `Service/Staff` > `General/Experience`.
2. **Decoupled Sentiment and Root Cause:** Category assignment must be decoupled from general emotional tone. A review can carry an overall `Positive` sentiment while still generating a discrete operational ticket for inventory shortages.
3. **Multi-Tag Extraction:** Moving from a single categorical string to an array of identified operational tags will prevent complex feedback from being artificially compressed into a single department bucket.
