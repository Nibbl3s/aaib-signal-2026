# Test set — inputs + expected answers (Week 2)

**Source:** all 15 inputs are real messages I received for my DJ business between July 2025 and October 2026 — 10 answers to my Google booking form and 5 e-mails. None are invented. I left out my own test entries and joke entries from friends.
**Anonymised:** client names, e-mail addresses and phone numbers removed; private home addresses replaced by `[address]` + town. Venue/business addresses kept.
**Expected answers were written before Run 1.** Plain copying of values was done with AI help; every judgment call (listed under *Decisions* at the bottom) is mine.

Field order in expected answers: `is_booking_inquiry · event_type · event_date · start_time · end_time · venue · guest_count · dj_gear · sound_and_light · missing_for_quote`

---

## Inputs

### T01 — form — sweet 16
```
Naam van het evenement: Sweet 16 [naam]
Datum: 27-9-2025 | Begintijd: 21:00 | Eindtijd: 2:00
Adres / Locatie: Beurtkaai 1, 8800 Roeselare
Soort evenement: Verjaardag | Verwachte opkomst: 0 - 100
Is er een DJ-controller aanwezig op locatie?: Nee, de DJ (Thorax) dient deze zelf te voorzien
Factuur noodzakelijk?: Nee
Opmerkingen: Locatie is nog niet 100% zeker. Gaan nog een ander zaaltje gaan bezichtigen, ook in Roeselare. Zal dit zeker nog optijd laten weten moest het adres veranderen.
Wil je licht & geluid huren via Thorax?: (leeg)
```

### T02 — form — staff farewell party
```
Bedrijfsnaam / Organisatie: Sint-Jozefskliniek dienst orthopedie
Naam van het evenement: Afscheidsfeestje van de assistenten
Datum: 29-8-2025 | Begintijd: 22:00 | Eindtijd: 2:00
Adres / Locatie: [address], 8870 Izegem
Soort evenement: Personeelsfeest | Verwachte opkomst: 0 - 100
Is er een DJ-controller aanwezig op locatie?: Nee, de DJ (Thorax) dient deze zelf te voorzien
Factuur noodzakelijk?: Ja
Opmerkingen: Ook graag lichtinstallatie zelf te voorzien
Wil je licht & geluid huren via Thorax?: (leeg)
```

### T03 — form — 50th birthday
```
Naam van het evenement: 50ste verjaardag
Datum: 18-10-2025 | Begintijd: 19:00 | Eindtijd: 2:30
Adres / Locatie: La Cuisette, Kerkstraat 2, 8570 Anzegem
Soort evenement: Verjaardag | Verwachte opkomst: 0 - 100
Is er een DJ-controller aanwezig op locatie?: Nee, de DJ (Thorax) dient deze zelf te voorzien
Factuur noodzakelijk?: Nee
Wil je licht & geluid huren via Thorax?: Ja
```

### T04 — form — birthdays + graduation, vague answers
```
Bedrijfsnaam / Organisatie: /
Naam van het evenement: Verjaardagen en afstuderen
Datum: 13-9-2025 | Begintijd: 22:00 | Eindtijd: 1:00
Adres / Locatie: [address] (no town given)
Soort evenement: Verjaardag | Verwachte opkomst: 0 - 100
Is er een DJ-controller aanwezig op locatie?: Nee, de DJ (Thorax) dient deze zelf te voorzien
Zo ja, welke gear staat er klaar?: Geen idee
Factuur noodzakelijk?: Nee
Opmerkingen: Lichtbrug met USB voorzien. Geen idee, maar ik veronderstel dat jij weet hoe dat werkt
Wil je licht & geluid huren via Thorax?: Weet ik nog niet
```

### T05 — form — youth movement party, start 0:00
```
Bedrijfsnaam / Organisatie: Chiromeisjes Lendelede
Naam van het evenement: Laspidy
Datum: 18-4-2026 | Begintijd: 0:00 | Eindtijd: 2:00
Adres / Locatie: Stationsstraat 5b, Lendelede 8860
Soort evenement: Fuif | Verwachte opkomst: 100 - 300
Is er een DJ-controller aanwezig op locatie?: Nee, de DJ (Thorax) dient deze zelf te voorzien
Factuur noodzakelijk?: Ja
Wil je licht & geluid huren via Thorax?: Nee
```

### T06 — form — large party, gear on site but not listed
```
Bedrijfsnaam / Organisatie: KSA Sint-Elooi (insta: @partyinstinct)
Naam van het evenement: Party Instinct
Datum: 7-3-2026 | Begintijd: 22:30 | Eindtijd: 0:00
Adres / Locatie: Dorpsplein, 8880 Ledegem, Sint-Eloois-Winkel, Belgium
Soort evenement: Fuif | Verwachte opkomst: 300 - 1000
Is er een DJ-controller aanwezig op locatie?: Ja
Zo ja, welke gear staat er klaar?: (leeg)
Factuur noodzakelijk?: Nee
Opmerkingen: Contract opmaken
Wil je licht & geluid huren via Thorax?: Nee
```

### T07 — form — wedding, town only
```
Naam van het evenement: Huwelijk
Datum: 20-6-2026 | Begintijd: 19:00 | Eindtijd: 3:00
Adres / Locatie: Moen
Soort evenement: Bruiloft | Verwachte opkomst: 100 - 300
Is er een DJ-controller aanwezig op locatie?: Nee, de DJ (Thorax) dient deze zelf te voorzien
Factuur noodzakelijk?: Nee
Opmerkingen: We hebben je naam doorgekregen van [naam] en hadden graag eens een offerte gekregen. Alvast bedankt!
Wil je licht & geluid huren via Thorax?: Ja
```

### T08 — form — shop reopening, background music
```
Bedrijfsnaam / Organisatie: Delhaize Izegem
Naam van het evenement: Heropening winkel
Datum: 18-3-2026 | Begintijd: 18:00 | Eindtijd: 22:00
Adres / Locatie: Kortrijksestraat 272, 8870 Izegem
Soort evenement: Zakelijk event | Verwachte opkomst: 100 - 300
Is er een DJ-controller aanwezig op locatie?: Nee, de DJ (Thorax) dient deze zelf te voorzien
Factuur noodzakelijk?: Ja
Opmerkingen: Beste, op woensdagavond 18 maart is er een receptie voor de heropening van onze winkel. We zijn op zoek naar iemand die wat muziek kan draaien die avond, voornamelijk op de achtergrond, maar om alles wat op te leuken. Is dit iets waarvoor we bij jou terecht kunnen? Alvast bedankt voor de info.
Wil je licht & geluid huren via Thorax?: Weet ik nog niet
```

### T09 — form — graduation party, form contradicts remarks
```
Bedrijfsnaam / Organisatie: presidium OLV Vlaanderen Kortrijk
Naam van het evenement: Proclamatie 2026
Datum: 25-6-2026 | Begintijd: 23:00 | Eindtijd: 3:00
Adres / Locatie: Graaf Boudewijn IX-Laan 2, 8500 Kortrijk
Soort evenement: Afscheidsfeestje / Proclamatie | Verwachte opkomst: 0 - 100
Is er een DJ-controller aanwezig op locatie?: Ja
Zo ja, welke gear staat er klaar?: Zie opmerkingen
Factuur noodzakelijk?: Nee
Opmerkingen: Hallo Thor, Bedankt voor je berichtje. Hier nog enkele zaken die zouden moeten besproken worden. Er is nog een probleempje ivm de draaitafel. Momenteel staat daar één, maar dit is enkel een mixer, dus zonder 2 draaischijven zoals bv een CDJ3000. Die mixer is ook niet van pioneer, dus ik heb een alternatief gevonden. Ik weet wel nog niet 100 procent zeker welke draaitafel dit is, en of ik die sowieso mag gebruiken. Ik zou dus sowieso nog sturen naar jou wanneer ik meer info weet, maar is het dus evt mogelijk om een draaitafel als 'back-up' bij jou te voorzien? In dat geval: hoeveel zou je ervoor vragen en welk model is dit? En ook algemener: wat zijn je tarieven? Wij zouden 160 euro kunnen bieden voor het draaien. Kunnen we daarnaast ook nog de optie hebben, om op het moment zelf nog een uur bij te boeken (t.e.m. 4u dus)? Dit zou afhangen van het volk in de zaal en de huidige sfeer. We mikken trouwens op zo'n 80-100 man. Merci alvast! Groetjes [naam]
Wil je licht & geluid huren via Thorax?: Nee
```

### T10 — form — wedding, times are estimates
```
Naam van het evenement: Huwelijksfeest [naam]&[naam]
Datum: 16-10-2027 | Begintijd: 21:00 | Eindtijd: 3:00
Adres / Locatie: [address], Izegem 8870
Soort evenement: Bruiloft | Verwachte opkomst: 100 - 300
Is er een DJ-controller aanwezig op locatie?: Nee, de DJ (Thorax) dient deze zelf te voorzien
Factuur noodzakelijk?: Nee
Opmerkingen: Dj controller vraag ik nog na. Ik ben niet zeker ofdat dat voorhanden is. De start-en stoptijd zijn inschattingen. Ik tracht enige weken/maanden op voorhand de specifiekere planning nog door te zenden.
Wil je licht & geluid huren via Thorax?: Ja
```

### T11 — e-mail — youth movement Kick-Off, first contact
```
Subject: Dj Kick-Off
Beste
Ik ben [naam] van Ksa meisjes Izegem en dit jaar gaat Kick-Off terug door op 3 oktober 2026 en daarvoor zijn we nog op zoek naar een Dj! Moest je dan nog vrij zijn, horen we graag iets over je prijs!
Met vriendelijke groeten
[naam]
Ksa Meisjes Izegem
```

### T12 — e-mail — wedding, very short first contact
```
Subject: Trouw
Het Thor,
Ik zou volgend jaar trouwen met [naam] en ik vroeg mij af of jij ook draaide op een trouwfeest.
Zo ja, wat zou de prijs hiervan zijn ongeveer?
Met vriendelijke groeten,
[naam]
```

### T13 — e-mail — wedding, reply with details
```
Subject: Re: Trouw
Hey Thor,
Datum: 3/09/2027
Locatie: Zaal Amuse in Meulebeke
Van +/- 22u/23u tot 3u
Licht en muziek installatie is aanwezig normaal gezien op locatie.
Er worden rond de 90 gasten verwacht.
Met vriendelijke groeten
[naam]
```

### T14 — e-mail — client reply, confused about who brings what
```
Subject: Re: DJ - Verjaardagsfeest 18 Jaar
Dag Thor,
Wil je Vision sound contacteren?
Het is mij niet duidelijk wie wat nodig heeft of meebrengt zoals een control panel enz.
Ik heb [naam] een foto bezorgd van de opstelling van de vorige sweet 18 (van je vader?),
mvg,
[naam]
```

### T15 — e-mail — not a client: municipal shift-planning notification
```
Subject: Er zijn nieuwe beschikbaarheidsaanvragen van Gemeentebestuur Ingelmunster
Dag Thor
Er werden nieuwe shifts toegevoegd aan de planning en we willen weten of jij hiervoor beschikbaar bent. We kijken uit naar jouw bevestiging.
Opgelet: hiermee vragen we enkel jouw beschikbaarheid op. Je bent dus nog niet ingepland. Je zal later verwittigd worden als je effectief op de planning staat.
Bekijk hier of via onze bookU app jouw uitnodigingen.
Gemeentebestuur Ingelmunster
```

---

## Awkward cases covered

- [x] Ambiguous — a human would have to ask a follow-up (T04, T09, T14)
- [ ] Another language — none of my real inquiries are in another language; I did not invent one
- [x] Very short input (T12)
- [x] Very long input (T09)
- [x] Correct answer is "I don't know" for most fields (T12, T14)
- [x] Near the boundary between two categories (T09 form vs remarks, T15 is a "booking" but not a client)
- [x] Typo / written badly (T04, T10 "ofdat", T12 "Het Thor")

---

## Expected answers (written 2026-10-01, before Run 1)

**Scoring rule:** an input counts as correct only if **all 10 fields** match. Wording of `venue` may differ slightly as long as it names the same place. Order inside `missing_for_quote` does not matter.

| # | inquiry | event_type | date | start | end | venue | guests | dj_gear | sound_and_light | missing_for_quote |
|---|---|---|---|---|---|---|---|---|---|---|
| T01 | true | birthday | 2025-09-27 | 21:00 | 02:00 | Beurtkaai 1, 8800 Roeselare | 0 - 100 | dj_brings | unknown | sound_and_light |
| T02 | true | company_event | 2025-08-29 | 22:00 | 02:00 | [address], 8870 Izegem | 0 - 100 | dj_brings | rent_from_dj | — |
| T03 | true | birthday | 2025-10-18 | 19:00 | 02:30 | La Cuisette, Kerkstraat 2, 8570 Anzegem | 0 - 100 | dj_brings | rent_from_dj | — |
| T04 | true | birthday | 2025-09-13 | 22:00 | 01:00 | [address] | 0 - 100 | dj_brings | unknown | sound_and_light |
| T05 | true | party_fuif | 2026-04-18 | 00:00 | 02:00 | Stationsstraat 5b, Lendelede 8860 | 100 - 300 | dj_brings | not_needed | — |
| T06 | true | party_fuif | 2026-03-07 | 22:30 | 00:00 | Dorpsplein, 8880 Ledegem, Sint-Eloois-Winkel | 300 - 1000 | unknown | not_needed | dj_gear |
| T07 | true | wedding | 2026-06-20 | 19:00 | 03:00 | Moen | 100 - 300 | dj_brings | rent_from_dj | — |
| T08 | true | company_event | 2026-03-18 | 18:00 | 22:00 | Kortrijksestraat 272, 8870 Izegem | 100 - 300 | dj_brings | unknown | sound_and_light |
| T09 | true | other | 2026-06-25 | 23:00 | 03:00 | Graaf Boudewijn IX-Laan 2, 8500 Kortrijk | 80-100 | dj_brings | not_needed | — |
| T10 | true | wedding | 2027-10-16 | 21:00 | 03:00 | [address], Izegem 8870 | 100 - 300 | dj_brings | rent_from_dj | — |
| T11 | true | party_fuif | 2026-10-03 | unknown | unknown | unknown | unknown | unknown | unknown | start_time, end_time, venue, guest_count, dj_gear, sound_and_light |
| T12 | true | wedding | unknown | unknown | unknown | unknown | unknown | unknown | unknown | all 7 |
| T13 | true | wedding | 2027-09-03 | 22:00 | 03:00 | Zaal Amuse, Meulebeke | ~90 | unknown | not_needed | dj_gear |
| T14 | true | birthday | unknown | unknown | unknown | unknown | unknown | unknown | unknown | all 7 |
| T15 | false | unknown | unknown | unknown | unknown | unknown | unknown | unknown | unknown | — |

## Decisions (my judgment calls, made before running)

| Input | Question | My answer | Why |
|---|---|---|---|
| T01 | Address given, but remark says location "not 100% sure" | Keep the address | It's the best info I have; I'd quote on it and adjust later |
| T02 | Light & sound field empty, remark "also please bring a light installation" | rent_from_dj | The remark is a clear request |
| T04 | Controller "DJ brings", gear "no idea" | dj_brings | The form answer is explicit; "no idea" refers to what's there, not who brings |
| T04 | "Birthdays and graduation" | birthday | Form type is "Verjaardag" |
| T05 | Start time 0:00 | 00:00 is real | Youth-movement parties often have the DJ slot from midnight |
| T06 | Controller "Ja" but no gear listed | unknown | I can't plan without knowing what's there |
| T09 | Form says gear on site, remark says only a mixer and asks me for back-up | dj_brings | The remark is newer and more precise than the tick box |
| T09 | Guests "0 - 100" (form) vs "80-100" (remark) | 80-100 | The remark is more precise |
| T10 | Times are "estimates" | Keep 21:00 / 03:00 | An estimate is enough for a first quote |
| T10 | "DJ brings" but "I'm still checking the controller" | dj_brings | Until they confirm, I plan to bring my own |
| T11 | Youth movement Kick-Off | party_fuif | It's a fuif-type party |
| T13 | "22u/23u tot 3u" | 22:00 | Quote on the earliest possible start |
| T13 | Installation "normally present" at the venue | not_needed | The venue is a party hall; I'd trust it |
| T14 | Reply from a client confused about who brings what | Booking inquiry = true | It's part of an active booking conversation |

**The failure that would matter most:** a fabricated date or time (F2). A wrong date in a quote means a double booking or a quote for the wrong night — the client trusts what I send back.

**Note:** several of my expected answers (T01, T10, T13) go *against* the prompt's own rule "if the client says it's uncertain, write unknown". I noticed this only after deciding. I'm keeping both as they are for Run 1 — it is exactly the kind of mismatch the test should expose.
