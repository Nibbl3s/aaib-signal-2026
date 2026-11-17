# Test Set 2: Comp Screen (new inputs for Claude Sonnet 5.5)

Purpose: measure the Build on 10 inputs that were NOT used to write or tune the prompt or the earlier test set (Test Set 1, 12 cases). Each input has 6 candidates, so one run is 60 verdicts. Run every input twice, each run in a NEW chat.

## How to run

1. Read the key rules and every Expected table below. Change any answer you disagree with. **Do this before Run 1.**
2. Fill in the confirmation line, with date and time.
3. For each input: open a new chat (not in the project, model Claude Sonnet 5.5, default settings), copy ONLY the grey block under "Prompt", send it, paste the answer under "Output".
4. Send me the file or the 20 answers. I score them against the Expected tables and fill in the classification.

**Key confirmed by Tim on: ____ (date, time), before Run 1.** (Expected values drafted by Claude; they count as yours only once you have read and confirmed them. A change made after Run 1 must be marked "changed afterwards".)

## Key rules (these decide the Expected column)

- **Comparable:** same business model, customers and end market; revenue within about 0.3x to 3x of the target; EBITDA margin within about 8 points; growth within about 8 points.
- **Not comparable:** a different business model or end market, or revenue more than about 3x away, or a margin gap of more than 15 points.
- **Rule P (private companies):** a candidate described as private or family-owned has no trading multiple, so it is **Not comparable** for a trading-multiples valuation, even if the business is identical. (This settles the Carl Zeiss SMT question from Test Set 1: consistent with this rule it would be Not comparable.)
- **Unclear:** the description does not give the information needed to decide (no figures, or the business mix is not stated).
- All companies without the word "private" are listed.
- The prompt itself says nothing about private companies. A private company called Comparable is therefore an F1 on the prompt, which is a finding about the Build, not about the key.

## Failure codes (from your course table; check the definitions in failure-taxonomy.md)

F1 Wrong | F2 Fabricated | F3 Missed | F4 Format | F5 Refused | F6 Inconsistent (different answers in two runs)

Prompt used for all inputs (same as Test Set 1):

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)
```

---

## Input 1: Cybersecurity software

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Northgate Security. Listed endpoint-security software sold by subscription to mid-size companies. Revenue €180M, EBITDA margin 22%, growth 18% a year.

CANDIDATES:
1. Argus Consulting: Listed IT-security consultancy billing project fees. Revenue €120M, margin 11%, growth 6%.
2. Safeharbor Systems: Listed cloud-security subscription software for companies with 200 to 2,000 staff. Revenue €150M, margin 24%, growth 20%.
3. Guardline Services: Listed security-guard and alarm-monitoring services. Revenue €900M, margin 9%, growth 3%.
4. Shieldworks: Cybersecurity software company. No financial figures given.
5. Ironvault: Listed network-security software sold by subscription to mid-size firms. Revenue €240M, margin 19%, growth 15%.
6. Cyberlock: Listed endpoint-security subscription software for mid-size companies. Revenue €210M, margin 20%, growth 16%.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Argus Consulting | Not comparable | project fees, not subscription software |
| 2 | Safeharbor Systems | Comparable | same model; close on all figures |
| 3 | Guardline Services | Not comparable | services model, 5x revenue, margin 13 points lower |
| 4 | Shieldworks | Unclear | no figures to compare |
| 5 | Ironvault | Comparable | same model; close on all figures |
| 6 | Cyberlock | Comparable | same model and customers; size, margin and growth close |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 2: Car-parts distribution

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Autoline Parts. Listed distributor of replacement car parts to independent garages in Western Europe. Revenue €520M, EBITDA margin 8%, growth 4% a year.

CANDIDATES:
1. Garagepro Supply: Listed distributor of replacement car parts to independent garages in Benelux and France. Revenue €480M, margin 8%, growth 3%.
2. Motorway Aftermarket: Listed wholesaler of aftermarket car parts to garages across Europe. Revenue €650M, margin 7%, growth 5%.
3. Iberparts: Listed distributor of replacement car parts to garages in Spain and Portugal. Revenue €390M, margin 8%, growth 4%.
4. Brakeforge: Listed manufacturer of brake systems sold to car makers. Revenue €2.1bn, margin 16%, growth 2%.
5. Partsmart Wholesale: Listed car-parts distributor. Revenue and margin not given, no customer information.
6. Wheeldeal Online: Private online retailer of car parts to consumers. Revenue €60M, margin 2%, growth 25%.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Garagepro Supply | Comparable | same model and customers |
| 2 | Motorway Aftermarket | Comparable | same model; close on all figures |
| 3 | Iberparts | Comparable | same model; other region |
| 4 | Brakeforge | Not comparable | manufacturer, different customers, 4x revenue, double margin |
| 5 | Partsmart Wholesale | Unclear | business fits, figures missing |
| 6 | Wheeldeal Online | Not comparable | private (no trading multiple), consumer model, much smaller |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 3: Dental clinics

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Smilecare Clinics. Listed chain of private dental clinics in Belgium and the Netherlands. Revenue €140M, EBITDA margin 18%, growth 9% a year.

CANDIDATES:
1. Orthoplus Clinics: Listed chain of orthodontic and dental clinics in Northern Europe. Revenue €155M, margin 16%, growth 11%.
2. Brightside Smiles: Operator of dental clinics. Revenue about €60M; margin and growth not given.
3. Dentaltech Supplies: Listed maker of dental implants and equipment sold to clinics. Revenue €400M, margin 25%, growth 6%.
4. Hospitalia: Listed operator of general hospitals. Revenue €2.4bn, margin 12%, growth 3%.
5. Dentalis Group: Listed chain of dental clinics in Germany and Austria. Revenue €170M, margin 17%, growth 8%.
6. Mundo Dental: Listed operator of dental clinics in Spain and Portugal. Revenue €120M, margin 19%, growth 10%.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Orthoplus Clinics | Comparable | same model; close on all figures |
| 2 | Brightside Smiles | Unclear | model fits, margin and growth missing |
| 3 | Dentaltech Supplies | Not comparable | manufacturer selling to clinics; 3x revenue |
| 4 | Hospitalia | Not comparable | hospitals, 17x revenue |
| 5 | Dentalis Group | Comparable | same model; close on all figures |
| 6 | Mundo Dental | Comparable | same model; close on all figures |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 4: Online travel

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Vacanza Online. Listed online travel agency selling holiday packages to consumers in Europe. Revenue €300M, EBITDA margin 12%, growth 12% a year.

CANDIDATES:
1. Cruiseline Holdings: Listed cruise operator that owns its ships. Revenue €1.8bn, margin 28%, growth 7%.
2. Beachbook: Listed online travel agency selling flights and hotels to consumers in Europe. Revenue €260M, margin 13%, growth 14%.
3. Roamer: Listed online platform selling city breaks and package holidays to consumers in Europe. Revenue €320M, margin 10%, growth 13%.
4. Tripnest: Online travel marketplace. No financial figures given.
5. Highstreet Travel: Listed chain of 400 physical travel shops. Revenue €500M, margin 3%, growth -2%.
6. Sunlink Travel: Listed online seller of holiday packages to European consumers. Revenue €350M, margin 11%, growth 10%.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Cruiseline Holdings | Not comparable | asset-owning operator, 6x revenue |
| 2 | Beachbook | Comparable | same model; close on all figures |
| 3 | Roamer | Comparable | same model; close on all figures |
| 4 | Tripnest | Unclear | no figures to compare |
| 5 | Highstreet Travel | Not comparable | physical shops, shrinking, low margin |
| 6 | Sunlink Travel | Comparable | same model; close on all figures |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 5: Elevator maintenance

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Liftcare Service. Listed provider of elevator maintenance contracts to building owners in Europe. Revenue €250M, EBITDA margin 16%, growth 5% a year.

CANDIDATES:
1. Elevia Maintenance: Listed elevator-maintenance provider with multi-year contracts in Southern Europe. Revenue €220M, margin 17%, growth 4%.
2. Hammerstone Lifts: Private family-owned elevator-maintenance firm. Revenue €240M, margin 16%, growth 5%.
3. Liftmakers Intl: Listed manufacturer of new elevators sold to builders. Revenue €3.5bn, margin 11%, growth 4%.
4. Nordlift Service: Listed maintenance and repair of lifts and escalators under annual contracts in Northern Europe. Revenue €300M, margin 15%, growth 6%.
5. Vertico Services: Listed lift-servicing provider with recurring contracts in Germany. Revenue €200M, margin 16%, growth 5%.
6. Escala Install: Listed lift installer. Business mix and figures not given.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Elevia Maintenance | Comparable | same model; close on all figures |
| 2 | Hammerstone Lifts | Not comparable | private: no trading multiple (rule P) |
| 3 | Liftmakers Intl | Not comparable | manufacturing, 14x revenue |
| 4 | Nordlift Service | Comparable | same model; close on all figures |
| 5 | Vertico Services | Comparable | same model; close on all figures |
| 6 | Escala Install | Unclear | installation vs maintenance not stated, no figures |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 6: Mobile towers

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Towerline Infrastructure. Listed owner of mobile phone masts leased to network operators on long contracts in Western Europe. Revenue €400M, EBITDA margin 55%, growth 6% a year.

CANDIDATES:
1. Signalhold: Listed tower company leasing sites to mobile operators in the Nordics. Revenue €450M, margin 54%, growth 7%.
2. Mastco: Listed owner of mobile masts leased to operators on 10-year contracts in Southern Europe. Revenue €350M, margin 57%, growth 5%.
3. Cableworks: Listed installer of fibre cable for network operators on project contracts. Revenue €600M, margin 9%, growth 8%.
4. Telcoline: Listed mobile network operator selling phone plans to consumers. Revenue €4.2bn, margin 36%, growth 1%.
5. Antenna Partners: Tower and rooftop site owner. No financial figures given.
6. Skyframe Towers: Listed owner of telecom towers leased to operators on long contracts in Central Europe. Revenue €380M, margin 56%, growth 6%.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Signalhold | Comparable | same model; close on all figures |
| 2 | Mastco | Comparable | same model; close on all figures |
| 3 | Cableworks | Not comparable | project contracting, margin 46 points lower |
| 4 | Telcoline | Not comparable | operator, tenant not landlord; 10x revenue |
| 5 | Antenna Partners | Unclear | no figures to compare |
| 6 | Skyframe Towers | Comparable | same model; close on all figures |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 7: Furniture retail

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Homehaus Living. Listed furniture retailer with 120 stores in Germany, Austria and Switzerland. Revenue €700M, EBITDA margin 10%, growth 3% a year.

CANDIDATES:
1. Woodcraft Factory: Listed manufacturer of furniture sold to retailers, six plants. Revenue €900M, margin 13%, growth 2%.
2. Wohnidee: Listed retailer of home furnishings with 95 stores in Germany and Switzerland. Revenue €620M, margin 11%, growth 4%.
3. Hausbau Baumarkt: Listed DIY and building-materials chain. Revenue €5.4bn, margin 8%, growth 3%.
4. Möbelwelt: Listed furniture retailer with 140 stores in Germany and Austria. Revenue €780M, margin 9%, growth 2%.
5. Casa Forma: Listed furniture retailer with 110 stores in France and Belgium. Revenue €680M, margin 10%, growth 3%.
6. Livingnest: Furniture retailer. No financial figures given.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Woodcraft Factory | Not comparable | manufacturer selling to retailers |
| 2 | Wohnidee | Comparable | same model; close on all figures |
| 3 | Hausbau Baumarkt | Not comparable | different products, 8x revenue |
| 4 | Möbelwelt | Comparable | same model; close on all figures |
| 5 | Casa Forma | Comparable | same model; other region |
| 6 | Livingnest | Unclear | no figures to compare |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 8: Waste management

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Cleanloop Waste. Listed collector and recycler of household and business waste in Benelux. Revenue €600M, EBITDA margin 20%, growth 5% a year.

CANDIDATES:
1. Wasteline Group: Listed collector and recycler of household and commercial waste in Germany. Revenue €550M, margin 21%, growth 4%.
2. Binrent: Private family-owned waste-container rental firm in Belgium. Revenue €50M, margin 18%, growth 4%.
3. Greenfuture Energy: Listed waste-to-energy plant operator. Revenue and margin not given.
4. Ecoserve: Listed waste collection and treatment company in France. Revenue €700M, margin 19%, growth 6%.
5. Metalscrap Trading: Listed trader of scrap metal on commodity markets. Revenue €1.1bn, margin 4%, growth follows metal prices.
6. Recyclo: Listed collector and recycler of business waste in the Nordics. Revenue €480M, margin 22%, growth 5%.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Wasteline Group | Comparable | same model; close on all figures |
| 2 | Binrent | Not comparable | private (rule P), 12x smaller |
| 3 | Greenfuture Energy | Unclear | plants vs collection not decidable, no figures |
| 4 | Ecoserve | Comparable | same model; close on all figures |
| 5 | Metalscrap Trading | Not comparable | trading model, margin 16 points lower |
| 6 | Recyclo | Comparable | same model; close on all figures |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 9: Contract research (CRO)

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Medlab Research. Listed contract research organisation running clinical trials for drug makers. Revenue €500M, EBITDA margin 19%, growth 9% a year.

CANDIDATES:
1. Statcore Analytics: Clinical-data analytics for trials. No financial figures given.
2. Biogenix Pharma: Listed drug developer selling its own prescription drugs. Revenue €900M, margin 35%, growth 12%.
3. Clinova: Listed CRO providing clinical-trial services for drug developers in Europe and the US. Revenue €430M, margin 20%, growth 10%.
4. Labsupply Co: Listed maker of laboratory consumables sold to research labs. Revenue €1.3bn, margin 24%, growth 6%.
5. Pharmaserv Research: Listed outsourced clinical-development provider for drug makers. Revenue €540M, margin 17%, growth 9%.
6. Trialis: Listed CRO running clinical trials for pharma and biotech companies. Revenue €620M, margin 18%, growth 8%.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Statcore Analytics | Unclear | no figures to compare |
| 2 | Biogenix Pharma | Not comparable | sells drugs, not services; margin double |
| 3 | Clinova | Comparable | same model; close on all figures |
| 4 | Labsupply Co | Not comparable | products, 2.6x revenue |
| 5 | Pharmaserv Research | Comparable | same model; close on all figures |
| 6 | Trialis | Comparable | same model; close on all figures |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## Input 10: Defence electronics

### Prompt (copy this block)

```
You are a valuation analyst screening peer companies for a trading-multiples valuation.

Task: for the TARGET below, classify each CANDIDATE as Comparable, Not comparable or Unclear.
Judge by: business model, products and customers, end markets and geography, size and growth profile, margin structure.
Use only the information given. Do not invent facts. If the information is not enough to decide, answer Unclear.

Output exactly one line per candidate in this format and nothing else:
Candidate name | Verdict | one-sentence reason (max 20 words)

TARGET: Aerotronix Defence. Listed maker of electronic systems for military aircraft, sold to governments and aircraft makers. Revenue €800M, EBITDA margin 17%, growth 6% a year.

CANDIDATES:
1. Combatsys: Listed maker of electronic-warfare systems for military aircraft. Revenue €600M, margin 19%, growth 8%.
2. Radarwerk: Listed maker of radar and sensor systems for military aircraft and ships. Revenue €950M, margin 16%, growth 7%.
3. Orbitec: Aerospace electronics maker. No financial figures given.
4. Defensa Steel: Listed maker of steel armour plates sold to vehicle builders. Revenue €400M, margin 11%, growth 2%.
5. Skyline Airlines: Listed passenger airline. Revenue €3.2bn, margin 12%, growth 4%.
6. Avionor: Listed maker of cockpit electronics for military aircraft, sold to governments and aircraft makers. Revenue €700M, margin 18%, growth 5%.
```

### Expected (drafted by Claude, to be confirmed by Tim before Run 1)

| # | Candidate | Expected | Why |
|---|---|---|---|
| 1 | Combatsys | Comparable | same model; close on all figures |
| 2 | Radarwerk | Comparable | same model; close on all figures |
| 3 | Orbitec | Unclear | no figures to compare |
| 4 | Defensa Steel | Not comparable | materials, different customers |
| 5 | Skyline Airlines | Not comparable | airline, 4x revenue |
| 6 | Avionor | Comparable | same model; close on all figures |

### Run 1
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

### Run 2
Output: [paste the 6 lines]
Verdicts right: [ ] of 6
Classification: [F1 to F6 per wrong verdict, or correct]

---

## F6 flags

[after both runs: inputs where Run 1 and Run 2 gave different verdicts]
