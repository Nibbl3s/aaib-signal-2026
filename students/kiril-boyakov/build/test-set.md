# Test set — inputs + expected answers (Week 2)
# Test set — Build v1

Author: Kiril Boyakov
Task: Classify transport mode from freight-service descriptions.

Expected answers are recorded before running the classifier. Only the input text is given to the classifier, together with prompt v1.

## Test 01 — Explicit truck service

Source: https://www.dhl.com/nl-en/home/freight/european-road-freight.html
Source section: DHL Road Freight Direct
Language: English
Type: Straightforward example

### Input

Our door-to-door Partial-Truck Load (PTL) and Full-Truck Load (FTL) service for point-to-point movement of freight shipments across Europe and within Germany.

### Expected answer

Mode: ROAD
Evidence: "Partial-Truck Load (PTL) and Full-Truck Load (FTL)"
Reason: The description explicitly identifies truck transport.

### Pass criteria

The output must use ROAD, quote relevant wording exactly, and follow the three-field format without adding unsupported information.

### Test status

Not run yet.






## Test 02 — Explicit ocean service

Source: https://www.maersk.com/support/faqs/various-ocean-transport-services-offered-by-maersk
Language: English
Type: Straightforward example

### Input

Maersk provides a comprehensive suite of services and solutions for ocean transport.

### Expected answer

Mode: SEA
Evidence: "ocean transport"
Reason: The description explicitly identifies ocean transport.

### Pass criteria

The output must use SEA, quote relevant wording exactly, and follow the three-field format without adding unsupported information.

### Test status

Not run yet.





## Test 03 — Explicit air service

Source: https://www.maersk.com/prices-and-quotes
Language: English
Type: Straightforward example

### Input

Maersk Air Freight is a fast, reliable, and ideal service for supply chain challenges.

### Expected answer

Mode: AIR
Evidence: "Air Freight"
Reason: The description explicitly identifies an air-freight service.

### Pass criteria

The output must use AIR, quote relevant wording exactly, and follow the three-field format. Speed alone is not evidence of air transport; the explicit phrase "Air Freight" is.

### Test status

Not run yet.






## Test 04 — Multiple options, no single journey

Source: https://www.maersk.com/news/articles/2024/03/05/maersk-spot-faqs
Language: English
Type: Ambiguous service selection

### Input

All modes of transportation are available on Maersk Spot — ocean, road, and rail.

### Expected answer

Mode: NOT ENOUGH INFORMATION
Evidence: "ocean, road, and rail"
Reason: The text lists available transport options but does not identify one service or explicitly combine them in a single shipment's journey.

### Pass criteria

The output must use NOT ENOUGH INFORMATION and follow the three-field format with accurate evidence. MULTIMODAL fails because the text does not establish that the modes are combined in one journey.

### Test status

Not run yet.






## Test 05 — Combined ocean and land transport

Source: https://www.maersk.com/transportation-services/maersk-spot
Language: English
Type: Multimodal service

### Input

Combine ocean and landside transport in one booking to reduce handovers and streamline your freight journey.

### Expected answer

Mode: MULTIMODAL
Evidence: "Combine ocean and landside transport"
Reason: The description explicitly combines ocean and land transport for a freight journey.

### Pass criteria

The output must use MULTIMODAL, quote supporting wording exactly, and follow the three-field format. It must not invent the specific land mode, such as truck or rail, because the description does not specify it.

### Test status

Not run yet.






## Test 06 — No explicit transport mode

Source: https://delivers.maersk.com/services/
Language: English
Type: Missing information

### Input

We provide highly tailored worldwide freight shipping and logistics services to meet your most demanding speed, reliability and cost requirements.

### Expected answer

Mode: NOT ENOUGH INFORMATION
Evidence: No explicit transport mode stated.
Reason: The description mentions freight shipping but does not specify road, air, sea or a combination of modes.

### Pass criteria

The output must use NOT ENOUGH INFORMATION and follow the three-field format. It must not assume that "shipping" means sea transport or that speed means air transport.

### Test status

Not run yet.





## Test 07 — Rail-only service

Source: https://www.dhl.com/de-en/home/freight.html
Language: English
Type: Explicit mode outside the supported categories

### Input

Reliable and environmentally friendly freight transportation via rail throughout Europe.

### Expected answer

Mode: OUT OF SCOPE
Evidence: "via rail"
Reason: The description explicitly identifies rail alone, which is outside the supported ROAD, AIR and SEA categories.

### Pass criteria

The output must use OUT OF SCOPE, quote supporting wording exactly, and follow the three-field format. NOT ENOUGH INFORMATION fails because the mode is explicitly stated. MULTIMODAL fails because only one mode is mentioned.

### Test status

Not run yet.




## Test 08 — Short Russian road-service description

Source: https://asstra.ru/vid-transporta/avtomobilnyj-transport/
Language: Russian
Type: Non-English, short input
Source context: A service-list item reproduced without translation.

### Input

Автоперевозки между странами Европы и СНГ

### Expected answer

Mode: ROAD
Evidence: "Автоперевозки"
Reason: The Russian word explicitly identifies transportation by road.

### Pass criteria

The output must use ROAD, preserve the Russian evidence exactly, and follow the three-field format. It must not replace the evidence quotation with an English translation.

### Test status

Not run yet.




## Test 09 — Russian multimodal description

Source: https://asstra.ru/vid-transporta/avtomobilnyj-transport/
Language: Russian
Type: Explicit combination of transport modes

### Input

При необходимости сотрудники AsstrA составляют мультимодальные схемы транспортировки с использованием нескольких видов транспорта.

### Expected answer

Mode: MULTIMODAL
Evidence: "мультимодальные схемы транспортировки с использованием нескольких видов транспорта"
Reason: The description explicitly states that transport arrangements combine several modes.

### Pass criteria

The output must use MULTIMODAL, quote the Russian evidence accurately, and follow the three-field format. It must not invent which specific modes are combined.

### Test status

Not run yet.

## Test 10 — Russian list of separate transport options

Source: https://asstra.ru/otrasli/proizvodstvo-transporta/
Language: Russian
Type: Multiple available modes without a specified journey

### Input

Автомобильные, железнодорожные, морские, авиаперевозки различных грузов, в том числе сборных, негабаритных и тяжеловесных.

### Expected answer

Mode: NOT ENOUGH INFORMATION
Evidence: "Автомобильные, железнодорожные, морские, авиаперевозки"
Reason: The text lists several transport services without identifying a single mode or explicitly combining modes in one shipment's journey.

### Pass criteria

The output must use NOT ENOUGH INFORMATION, quote the Russian evidence accurately, and follow the three-field format. MULTIMODAL fails because listing available services does not establish a combined journey.

### Test status

Not run yet.