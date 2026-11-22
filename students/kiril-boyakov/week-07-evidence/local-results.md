# Llama 3.2 3B results

[Actual responses and timing records](local-responses.jsonl).

**2/20 strict passes (10%)**, **8/20 correct labels (40%)**. Two repeated rounds on ten distinct inputs. Test 01 changed its mode across rounds (F6). Wording changes alone did not count as inconsistency. The exact evidence and no-inference requirements account for six cases with the right label that still failed.

| Test | Round | Result | Assessment |
|---|---:|---|---|
| 01 | 1 | F1, F3 | Treats two truckload options as two modes and leaves Evidence blank. |
| 02 | 1 | PASS | Correct SEA label and exact source phrase. |
| 03 | 1 | F1 | Overlooks the explicit Air Freight service. |
| 04 | 1 | F1, F2 | Treats the list of options as a combined journey and invents pairings. |
| 05 | 1 | F2 | Adds a road/truck inference that the expected answer expressly excludes. |
| 06 | 1 | F3 | Correct abstention, but the required evidence message is blank. |
| 07 | 1 | F1 | Calls one rail mode multimodal. |
| 08 | 1 | F1, F2 | Infers sea from geography and invents an abbreviation explanation. |
| 09 | 1 | F4 | Correct mode, but changes the capitalization of the Russian source quotation. |
| 10 | 1 | F1, F3 | Conflates options with a journey and gives no exact evidence. |
| 01 | 2 | F1 | Overlooks explicit truck transport. |
| 02 | 2 | PASS | Correct SEA label and exact longer source phrase. |
| 03 | 2 | F1 | Quotes Air Freight in the reason but still abstains. |
| 04 | 2 | F1, F2 | Treats all three options as one journey. |
| 05 | 2 | F4 | The offered evidence is not verbatim: changed capitalization and inserted ellipses. |
| 06 | 2 | F4 | Correct abstention, but the required evidence sentence lacks its final period. |
| 07 | 2 | F1, F2 | Invents a second mode and contradicts the explicit rail evidence. |
| 08 | 2 | F1 | Recognizes the road word but draws the wrong sea conclusion. |
| 09 | 2 | F4 | Correct mode, but again lowercases the beginning of the source quotation. |
| 10 | 2 | F1, F2 | Claims a single journey that the text does not state. |

Median first text 0.284 s; observed range 0.182–2.954 s. First call 2.954 s. These are end-to-end observations on this Mac, including prompt processing, and are affected by runtime caching.

Both Ollama attempts returned model-load HTTP 500 errors caused by Metal context initialization. They are retained as deployment evidence. The completed comparison used the same downloaded Llama 3.2 3B GGUF file with llama.cpp on CPU, 4,096 context tokens and a 256-token output cap. The input cases are well within that context. No external inference provider was called.

## Responses by case

### Test 01, round 1

Expected:

```text
Mode: ROAD
Evidence: "Partial-Truck Load (PTL) and Full-Truck Load (FTL)"
Reason: The description explicitly identifies truck transport.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: 
Reason: The description combines "Partial-Truck Load (PTL)" and "Full-Truck Load (FTL)" services, indicating that the shipment's journey involves at least two transport modes.
```

### Test 02, round 1

Expected:

```text
Mode: SEA
Evidence: "ocean transport"
Reason: The description explicitly identifies ocean transport.
```

Actual:

```text
Mode: SEA
Evidence: "ocean transport"
Reason: The description explicitly identifies transporting goods by ship or ocean freight.
```

### Test 03, round 1

Expected:

```text
Mode: AIR
Evidence: "Air Freight"
Reason: The description explicitly identifies an air-freight service.
```

Actual:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: No explicit transport mode stated.
Reason: The description does not explicitly identify the mode of transport.
```

### Test 04, round 1

Expected:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: "ocean, road, and rail"
Reason: The text lists available transport options but does not identify one service or explicitly combine them in a single shipment's journey.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: all modes of transportation are available on Maersk Spot — ocean, road, and rail.
Reason: The description explicitly combines at least two transport modes (ocean and road, as well as ocean and rail) in one shipment's journey.
```

### Test 05, round 1

Expected:

```text
Mode: MULTIMODAL
Evidence: "Combine ocean and landside transport"
Reason: The description explicitly combines ocean and land transport for a freight journey.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: "Combine ocean and landside transport"
Reason: The description explicitly mentions combining two transport modes, ocean and landside (implied to be road or truck), in one booking.
```

### Test 06, round 1

Expected:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: No explicit transport mode stated.
Reason: The description mentions freight shipping but does not specify road, air, sea or a combination of modes.
```

Actual:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: 
Reason: The description does not explicitly mention any transport mode, such as road, air, sea, or multimodal, and only provides general information about the company's services.
```

### Test 07, round 1

Expected:

```text
Mode: OUT OF SCOPE
Evidence: "via rail"
Reason: The description explicitly identifies rail alone, which is outside the supported ROAD, AIR and SEA categories.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: via rail
Reason: The description explicitly combines at least two transport modes (rail) in one shipment's journey.
```

### Test 08, round 1

Expected:

```text
Mode: ROAD
Evidence: "Автоперевозки"
Reason: The Russian word explicitly identifies transportation by road.
```

Actual:

```text
Mode: SEA
Evidence: "Автоперевозки между странами Европы и СНГ"
Reason: The description mentions "между странами", which is an abbreviation for "между странами и СНГ", meaning between countries, and specifically mentions "Европа" (Europe), implying transport by sea.
```

### Test 09, round 1

Expected:

```text
Mode: MULTIMODAL
Evidence: "мультимодальные схемы транспортировки с использованием нескольких видов транспорта"
Reason: The description explicitly states that transport arrangements combine several modes.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: при необходимости сотрудники AsstrA составляют мультимодальные схемы транспортировки с использованием нескольких видов транспорта.
Reason: The description explicitly states that the company AsstrA creates multimodal transportation schemes using multiple modes of transport.
```

### Test 10, round 1

Expected:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: "Автомобильные, железнодорожные, морские, авиаперевозки"
Reason: The text lists several transport services without identifying a single mode or explicitly combining modes in one shipment's journey.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: Various modes
Reason: The description explicitly mentions transporting goods by different modes (automobильные, железнодорожные, морские, авиаперевозки) without limiting it to a single mode.
```

### Test 01, round 2

Expected:

```text
Mode: ROAD
Evidence: "Partial-Truck Load (PTL) and Full-Truck Load (FTL)"
Reason: The description explicitly identifies truck transport.
```

Actual:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: No explicit transport mode stated.
Reason: The description does not mention any transport modes, such as road, air, sea, or rail.
```

### Test 02, round 2

Expected:

```text
Mode: SEA
Evidence: "ocean transport"
Reason: The description explicitly identifies ocean transport.
```

Actual:

```text
Mode: SEA
Evidence: "comprehensive suite of services and solutions for ocean transport"
Reason: The description explicitly mentions "ocean transport", which indicates that the service primarily transports goods by ship or sea freight.
```

### Test 03, round 2

Expected:

```text
Mode: AIR
Evidence: "Air Freight"
Reason: The description explicitly identifies an air-freight service.
```

Actual:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: No explicit transport mode stated.
Reason: The description does not provide any information on the transport mode used, only the service name "Air Freight".
```

### Test 04, round 2

Expected:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: "ocean, road, and rail"
Reason: The text lists available transport options but does not identify one service or explicitly combine them in a single shipment's journey.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: All modes of transportation are available on Maersk Spot — ocean, road, and rail.
Reason: The description explicitly combines at least two transport modes (ocean, road, and rail) in one shipment's journey.
```

### Test 05, round 2

Expected:

```text
Mode: MULTIMODAL
Evidence: "Combine ocean and landside transport"
Reason: The description explicitly combines ocean and land transport for a freight journey.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: "...combine ocean and landside transport..."
Reason: The description combines two transport modes, ocean and landside, in one booking.
```

### Test 06, round 2

Expected:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: No explicit transport mode stated.
Reason: The description mentions freight shipping but does not specify road, air, sea or a combination of modes.
```

Actual:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: No explicit transport mode stated
Reason: The description does not mention any specific transport mode, such as road, air, sea, or rail.
```

### Test 07, round 2

Expected:

```text
Mode: OUT OF SCOPE
Evidence: "via rail"
Reason: The description explicitly identifies rail alone, which is outside the supported ROAD, AIR and SEA categories.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: No explicit transport mode stated.
Reason: The description explicitly combines rail with another mode, but does not specify that other mode, so it can be classified as multimodal.
```

### Test 08, round 2

Expected:

```text
Mode: ROAD
Evidence: "Автоперевозки"
Reason: The Russian word explicitly identifies transportation by road.
```

Actual:

```text
Mode: SEA
Evidence: "Автоперевозки между странами Европы и СНГ"
Reason: The description states "Автоперевозки" which means "autocarriage" or "shipments", implying transportation by sea.
```

### Test 09, round 2

Expected:

```text
Mode: MULTIMODAL
Evidence: "мультимодальные схемы транспортировки с использованием нескольких видов транспорта"
Reason: The description explicitly states that transport arrangements combine several modes.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: "при необходимости сотрудники AsstrA составляют мультимодальные схемы транспортировки"
Reason: The description states that employees of AsstrA create multimodal transport schemes using several types of transport.
```

### Test 10, round 2

Expected:

```text
Mode: NOT ENOUGH INFORMATION
Evidence: "Автомобильные, железнодорожные, морские, авиаперевозки"
Reason: The text lists several transport services without identifying a single mode or explicitly combining modes in one shipment's journey.
```

Actual:

```text
Mode: MULTIMODAL
Evidence: автомобильные, железнодорожные, морские, авиаперевозки
Reason: The description explicitly lists four different transport modes (road, rail, sea, and air) within a single shipment's journey.
```
