# Test Set: Freight Forwarding Data Extraction

## Test Input 1
* **Raw Input:** 
  > "Hi team, please book a shipment of 1,200 kg of auto spare parts from Antwerp port to our warehouse in Vienna. Ready for pickup on Thursday."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Antwerp port
  * Destination: Vienna warehouse
  * Weight: 1,200 kg
  * Cargo Type: Auto spare parts

## Test Input 2
* **Raw Input:** 
  > "Need to move 450kg electronics from Rotterdam to Milan ASAP."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Rotterdam
  * Destination: Milan
  * Weight: 450 kg
  * Cargo Type: Electronics

## Test Input 3 (Multi-lingual / French)
* **Raw Input:** 
  > "Bonjour, merci d'organiser le transport de 3200 kg de textiles de Marseille vers Hambourg."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Marseille
  * Destination: Hamburg
  * Weight: 3,200 kg
  * Cargo Type: Textiles

## Test Input 4
* **Raw Input:** 
  > "Good morning, following our annual contract agreement, we have a new batch ready at the factory in Bilbao. It's medical diagnostics equipment packed in 4 crates, total gross weight 850 kilos, destined for the distribution center in Prague."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Bilbao factory
  * Destination: Prague distribution center
  * Weight: 850 kg
  * Cargo Type: Medical diagnostics equipment

## Test Input 5 (The Ambiguous One — Missing Weight)
* **Raw Input:** 
  > "Hi Drewes team, can you arrange a pallet of fresh pharmaceuticals from Frankfurt airport to Budapest? Let me know your next flight slot."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Frankfurt airport
  * Destination: Budapest
  * Weight: Not specified
  * Cargo Type: Fresh pharmaceuticals

## Test Input 6 (Structured / Form-like Text)
* **Raw Input:** 
  > "BOOKING REF: DE-PL-9921\nFROM: Warehouse Poznan\nTO: Logistics Hub Leipzig\nGOODS: Industrial steel valves\nQTY/WT: 12 pallets / 5,400kg"
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Warehouse Poznan
  * Destination: Logistics Hub Leipzig
  * Weight: 5,400 kg
  * Cargo Type: Industrial steel valves

## Test Input 7 (Mixed Units / Metric Tons)
* **Raw Input:** 
  > "Please quote and book a full load shipment. 24 metric tons of packaged paper rolls moving from Gothenburg mill to Lyon."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Gothenburg mill
  * Destination: Lyon
  * Weight: 24,000 kg (24 metric tons)
  * Cargo Type: Packaged paper rolls

## Test Input 8 (Conversational Reference)
* **Raw Input:** 
  > "Hey, remember that regular run we do? Same setup as last Tuesday, moving the chemical additives batch—about two tons—from the terminal in Rotterdam down to our plant in Antwerp."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Rotterdam terminal
  * Destination: Antwerp plant
  * Weight: 2,000 kg
  * Cargo Type: Chemical additives

## Test Input 9 (Multi-leg / Transit Confusion)
* **Raw Input:** 
  > "We picked up goods from our supplier in Valencia, but they need to be rerouted. Current location is our transit hub in Madrid, and final delivery is moving to Bucharest. Weight is 1,500 kg of ceramic tiles."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Madrid transit hub (Valencia supplier noted as origin point)
  * Destination: Bucharest
  * Weight: 1,500 kg
  * Cargo Type: Ceramic tiles

## Test Input 10 (The Incomplete / Fragmented One)
* **Raw Input:** 
  > "Hi, we need to move some containerized machine parts over to our partner site next week. Will send specifications later."
* **Expected Output (Recorded BEFORE running prompt):**
  * Origin: Not specified
  * Destination: Partner site
  * Weight: Not specified
  * Cargo Type: Machine parts
