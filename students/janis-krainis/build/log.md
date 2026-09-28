# Build Log v1: Initial Run & Failure Classification

## Test Run Summary
* **Total Inputs Tested:** 10[cite: 3]
* **Runs Per Input:** 2 (checked for consistency)[cite: 1]

---

## Run Results & Comparison

### Input 1: Antwerp to Vienna
* **Expected:** Antwerp port | Vienna warehouse | 1,200 kg | Auto spare parts[cite: 3]
* **Run 1 & 2 Output:** Match expected[cite: 3]
* **Status:** Pass

### Input 2: Rotterdam to Milan
* **Expected:** Rotterdam | Milan | 450 kg | Electronics[cite: 3]
* **Run 1 & 2 Output:** Match expected[cite: 3]
* **Status:** Pass

### Input 3: Marseille to Hamburg (French)
* **Expected:** Marseille | Hamburg | 3,200 kg | Textiles[cite: 3]
* **Run 1 & 2 Output:** Match expected[cite: 3]
* **Status:** Pass

### Input 4: Bilbao to Prague
* **Expected:** Bilbao factory | Prague distribution center | 850 kg | Medical diagnostics equipment[cite: 3]
* **Run 1 & 2 Output:** Match expected[cite: 3]
* **Status:** Pass

### Input 5: Frankfurt to Budapest (Missing Weight)
* **Expected:** Frankfurt airport | Budapest | Not specified | Fresh pharmaceuticals[cite: 3]
* **Run 1 & 2 Output:** Origin: Frankfurt airport, Destination: Budapest, Weight: Not specified, Cargo Type: Fresh pharmaceuticals[cite: 3]
* **Status:** Pass (Correctly avoided F2 fabrication on missing weight)

### Input 6: Poznan to Leipzig (Structured Form)
* **Expected:** Warehouse Poznan | Logistics Hub Leipzig | 5,400 kg | Industrial steel valves[cite: 3]
* **Run 1 & 2 Output:** Match expected[cite: 3]
* **Status:** Pass

### Input 7: Gothenburg to Lyon (Metric Tons)
* **Expected:** Gothenburg mill | Lyon | 24,000 kg (24 metric tons) | Packaged paper rolls[cite: 3]
* **Run 1 & 2 Output:** Successfully normalized 24 metric tons into 24,000 kg[cite: 3].
* **Status:** Pass

### Input 8: Rotterdam to Antwerp (Conversational)
* **Expected:** Rotterdam terminal | Antwerp plant | 2,000 kg | Chemical additives[cite: 3]
* **Run 1 Output:** Weight extracted as "about two tons" instead of numerical equivalent.
* **Run 2 Output:** Weight extracted as "2,000 kg".
* **Status:** **F6 (Inconsistent)** / **F4 (Format)** — Prompt handled conversational phrasing differently across dual runs.

### Input 9: Valencia/Madrid to Bucharest (Multi-leg)
* **Expected:** Madrid transit hub (Valencia supplier noted) | Bucharest | 1,500 kg | Ceramic tiles[cite: 3]
* **Run 1 & 2 Output:** Origin captured as Madrid transit hub, missing the initial Valencia supplier reference context.
* **Status:** **F3 (Missed)** — Omitted secondary contextual leg detail.

### Input 10: Incomplete Fragment
* **Expected:** Not specified | Partner site | Not specified | Machine parts[cite: 3]
* **Run 1 & 2 Output:** Match expected[cite: 3]
* **Status:** Pass
