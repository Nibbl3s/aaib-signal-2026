# Test set

8 ads are in Swedish, and 2 ads is in English (to test the system's ability to handle unexpected languages). Each case has the original text and the expected answer (written before running the tool).

---

## 1. Play area host
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31537137 (retrieved 2026-09-30)
**Test Focus:** I chose this ad as it is a part time job and I think the AI might struggle with not knowing the percetage. 

**Expected:** Flag vague employment percentage.

<details>
<summary>Input (original, Swedish)</summary>

LEKLANDSVÄRDAR JÖNKÖPING
Leo's AB
Restaurangbiträde
Kommun: Jönköping
Kort arbetsbeskrivning
Omfattning: Deltid
Varaktighet: Tills vidare
Anställningsform: Tillsvidare- eller tidsbegränsad anställning
Sök jobbet
Sista ansökningsdag: 11 okt. (om 10 dagar)
Om jobbet
Är du vår nya superhjälte som ser till att både små och stora får en oförglömlig upplevelse? Precis som namnet antyder tar du hand om våra gäster genom snabb och bra service med ett leende på läpparna. Som kalasvärd ser du till att våra kalas håller världsklass. Det här är med andra ord det perfekta extrajobbet - som så småningom kan leda till avancemang mot tjänster med utökat ansvar. Du arbetar som extraanställd, oftast helger och lovdagar.

Kvalifikationer
Arbetserfarenheter är inte ett krav utan vi söker dig med rätt attityd och som är en positiv person som tycker om att jobba i högt tempo. Du ska vara flexibel, stresstålig, strukturerad och självgående i ditt arbete. Eftersom jobbet tidvis är fysiskt krävande ser vi gärna att du delar vår syn på en sund livsstil och håller dig i form och tar ansvar för din hälsa. Tillsammans med dina kollegor ska du arbeta för att erbjuda den bästa servicen. Sist men inte minst älskar du kontakten med gäster och strävar alltid efter att överträffa gästens förväntningar!

Utöver ovan sätter vi alltid Leo's värdeord i fokus när vi söker nya medarbetare:
Lojalitet: Vi visar lojalitet mot företaget och kollegor genom att agera enligt våra budord.
Engagemang: Vi bryr oss om hur det går för företaget och vill själva bidra till Leo's framgång.
Omtanke: Vi bryr oss om och finns alltid tillhands för våra gäster och varandra.
Samarbete: Vi arbetar tillsammans mot företagets mål. Leo's framgång är resultatet av allas insatser.

Övrigt 
Du arbetar som extraanställd, oftast helger och lovdagar. Tjänsten tillsätts efter överenskommelse. Vi är anslutna till kollektivavtal.

Intervjuer sker löpande - så sök tjänsten redan idag!
Läs mer
Övrig information
Lön
Lönetyp: Fast månads- vecko- eller timlön
Var ligger arbetsplatsen?
Leo's AB
Solåsvägen 4
55303 Jönköping
Jönköpings Kommun
Arbetsgivare
Leo's AB
https://www.leoslekland.se
Sök jobbet
Sista ansökningsdag: 11 okt. (om 10 dagar)
</details>

---

## 2. Restaurantchef
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31497262 (retrieved 2026-09-30)
**Test Focus:** startdate is next year, i wonder if it will assume or hallucinate

**Expected:** 18th march (2027)

<details>
<summary>Input (original, Swedish)</summary>

Restaurangchef Jönköping
Holy Greens AB
Restaurangchef
Kommun: Jönköping
Kort arbetsbeskrivning
Omfattning: Heltid
Varaktighet: Tills vidare
Anställningsform: Tillsvidare- eller tidsbegränsad anställning
Sök jobbet
Sista ansökningsdag: 18 mars (om 168 dagar)
Ange referens: teamtailor-8405273-2205251 i din ansökan
Om jobbet
Är du en naturlig ledare som vill ta chansen att växa och utvecklas i branschen? Häng med på vår resa mot en mer hållbar och hälsosam värld! 

Vi erbjuder:

Programmet ”Växa och Gro” som ger dig möjlighet att utvecklas inom företaget.

 En arbetsplats som arbetar för en mer hållbar och hälsosam värld.

Kollektivavtal och friskvård.

Arbete främst dagtid.

 Ansök idag. Vi ser fram emot att träffa dig!  

ÖVRIG INFORMATION

Anställningsgrad: Heltid med tillträde okt 2026

Plats: Jönköping 

Lön: Fast lön. Vi är anslutna till Visita och följer kollektivavtal

Förmåner: Friskvårdsbidrag, förmånlig personallunch, sociala aktiviteter och trevligaste kollegorna.

 

Vi håller intervjuer löpande och tjänsten kan komma att bli tillsatt innan sista ansökningsdatum. 

Läs mer
Kvalifikationer
Språk
Krav
Svenska
Övrig information
Lön
Lönetyp: Fast månads- vecko- eller timlön
Var ligger arbetsplatsen?
Holy Greens
Lantmätargränd 10
55321 Jönköping
Jönköpings Kommun
Arbetsgivare
Holy Greens AB
https://jobb.holygreens.se
Kontakt
Jenny Landén
jenny.landen@holygreens.se
Sök jobbet
Sista ansökningsdag: 18 mars (om 168 dagar)
Ange referens: teamtailor-8405273-2205251 i din ansökan


</details>

---

## 3. Truckdriver
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31497262 (retrieved 2026-09-30)
**Test Focus:** The ad is badly structured so I want to test the MUST-HAVE VS. NICE-TO-HAVE.

**Expected:** Whether the must-have vs nice-to-have is clear. 

<details>
<summary>Input (original, English)</summary>

CE-Chaufförer Jönköping
WeStaff Sweden AB
Distributionsförare
Kommun: Jönköping
Kort arbetsbeskrivning
Omfattning: Heltid
Varaktighet: 6 månader eller längre
Anställningsform: Tillsvidare- eller tidsbegränsad anställning
Sök jobbet
Sista ansökningsdag: 31 dec. (om 91 dagar)
Ange referens: teamtailor-8303958-2173820 i din ansökan
Om jobbet
WeStaff Sweden söker nu CE-Chaufförer till Sveriges största åkeri med terminal & verksamhet i Jönköping.

Det är ett jobb för dig som vill bygga kompetens, jobba i ett seriöst team och vara en del i verksamheten där varje moment räknas.

Konsultuppdrag med rekryteringsmöjlighet till kundföretaget

Heltid dagtid 07:00-16:00 måndag till fredag

Start: Omgående enligt överenskommelse

Kollektivavtal

Vad du får i det här jobbet

Grundlig upplärning och bra moderna bilar som redskap

Arbete i ett större chaufförsteam med erfarenhet och hög kompetens

En arbetsmiljö där säkerhet, kvalitet och respekt speglar arbetsdagarna

Möjlighet att utvecklas och växa i rollen över tid

Om jobbet

Rollen som chaufför är ett socialt jobb där du under en dag möter både kunder och dina kollegor. Du kör både inne i stan och på landet. Din dag börjar oftast ganska tidigt med att du sorterar paket och planerar din runda för dagen tillsammans med din transportledare. Som chaufför arbetar du dagtid och är ledig på helgerna. 

Arbetsuppgifter

CE (lastbilar med släp)

Lasta gods med truck

Ge god service till kunder

Hantera samtliga sändningar digitalt genom användning av handdator

Vem vi söker

Det här passar dig som är trygg i din yrkesroll och tar ansvar för ditt arbete.

Krav:

CE-körkort

Giltigt YKB

Digitalt färdskrivarkort

Truckkort (A)

ADR 1.3 (meriterande)

Behärskar svenska i tal och skrift

Har du lokalkännedom i området ser vi det som meriterande. 

Som person ser vi gärna att du är serviceinriktad och självgående. Du är samarbetsvillig och trivs med att arbeta i ett högt tempo. Vi ser även att du är serviceinriktad och värderar goda kundrelationer högt. 

Ansökan - enkelt och snabbt!

Låter det som något för dig? Skicka in din ansökan redan idag! Urval sker löpande och tjänsten kan komma att tillsättas innan sista ansökningsdag. Ansökan sker via vårt system, observera att vi tyvärr inte kan ta emot ansökningar via e-post.

Om WeStaff Sweden

WeStaff Sweden är ett auktoriserat rekryterings- och bemanningsföretag med uppdrag över hela Sverige. Vi arbetar nära både kunder och kandidater för att skapa långsiktiga och hållbara matchningar. Hos oss får du en trygg anställning med kollektivavtal, försäkringar och goda utvecklingsmöjligheter. Läs mer på www.westaff.se 

Läs mindre
Övrig information
Lön
Lönetyp: Fast månads- vecko- eller timlön
Var ligger arbetsplatsen?
WeStaff Sweden
Hotellplan
55320 Jönköping
Jönköpings Kommun
Arbetsgivare
WeStaff Sweden AB
https://www.westaff.se
Sök jobbet
Sista ansökningsdag: 31 dec. (om 91 dagar)
Ange referens: teamtailor-8303958-2173820 i din ansökan

</details>

---

## 4. English teacher
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31424189 (retrieved 2026-09-30)
**Test Focus:** [Explain why this ad is included] This ad is in English. Testing if the tool correctly processes an input language other than Swedish while maintaining the expected output structure.

**Expected:** To handle the information correct. 

<details>
<summary>Input (original, Swedish)</summary>

Business English Tutor, Norrköping
Upgrades Education Sweden AB
Studiecirkelledare
Kommun: Norrköping
Kort arbetsbeskrivning
Omfattning: Deltid
Anställningsform: Behovsanställning
Sök jobbet
Sista ansökningsdag: 15 okt. (om 14 dagar)
Ange referens: Business English, Norrköping i din ansökan
Ansök via mail:work@upgrades.se
Om jobbet
Work part-time with engaging and varied assignments within language teaching and join our fantastic team of English language tutors.

Upgrades is currently looking for a motivating and structured tutor with full professional proficiency in the English language. 

You have at least 3 years documented experience in teaching English for adults. 

You are independent and can adapt the content of your teaching to the participant's level, purpose and learning technique. It is an advantage if you have training or further experience in pedagogy or language teaching.

About the assignment:

As a language coach at Upgrades you plan and tailor the teaching to the customer’s needs and preferences. The work is assignment-based and the nature of the assignments varies depending on the level, number of participants, requests for day, time and place. Each session is 90 minutes. We are looking for coaches who can teach on-site in Norrköping.

﻿Required:

full professional proficiency in English
knowledge of English used within business context
a minimun of 3 years experience of teaching English for adults, ideally with a corporate focus
experience of teaching online
The hourly pay is individual and based on qualifications and experience. Please note that we are recruiting on a regular basis and that the position might be filled before the closing date of the application.

Läs mer
Kvalifikationer
Utbildning
Meriterande
Eftergymnasial utbildning två år eller längre
Språk
Krav
Engelska
Meriterande
Svenska
Övrig information
Lön
Lönetyp: Fast månads- vecko- eller timlön
Var ligger arbetsplatsen?
Norrköping
Norrköping Kommun i Östergötlands län
Arbetsgivare
Upgrades Education Sweden AB
http://www.upgrades.se
Kontakt
Upgrades Rekrytering
work@upgrades.se
Sök jobbet
Sista ansökningsdag: 15 okt. (om 14 dagar)
Ange referens: Business English, Norrköping i din ansökan
Ansök via mail:work@upgrades.se

</details>

---

## 5. Caretaker
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31538938 (retrieved 2026-09-30)
**Test Focus:** It is a long and partly unstructured ad. 

**Expected:** Answer according to prompt and with corecct information.

<details>
<summary>Input (original, Swedish)</summary>

Undersköterska till Breared i Varberg
Vardaga AB
Undersköterska, hemtjänst och äldreboende
Kommun: Varberg
Kort arbetsbeskrivning
Omfattning: Deltid
Varaktighet: 6 månader eller längre
Anställningsform: Tillsvidare- eller tidsbegränsad anställning
Sök jobbet
Sista ansökningsdag: 15 okt. (om 14 dagar)
Ange referens: teamtailor-8481873-2223312 i din ansökan
Om jobbet
Nu söker vi på Breared i Varberg en undersköterska för dag, kväll och helg tjänstgöring, 75-80% tillsvidare tjänst. Vi erbjuder utbildning och flera förmåner.

Det här får du hos oss:

 Utbildning som gör ditt arbete enklare, till exempel vårdhygien, bemötande vid demenssjukdom och ergonomi.

 Förmånsportal med rabatter och erbjudanden. Till exempel kan du köpa biobiljetter och resor med kollektivtrafik till bra pris.

 En coachande och stöttande chef som jobbar tillsammans med dig i vardagen.

 Tydliga arbetssätt och rutiner som förenklar ditt jobb.

 Karriär- och utvecklingsmöjligheter. Till exempel kan du bli gruppchef med personalansvar eller få ett specifikt ämnesansvar som demensansvarig eller hygienombud.

Om Breared

Vi är ett Äldreboendet ligger i Breared, ett lugnt bostadsområde i Varbergs utkant, nära Apelviken. Vardaga driver Breared på entreprenad sedan 2008 för Varbergs kommun med 92 platser, med inriktning mot demens och somatik. Vår avtal med Varbergs kommun sträcker sig till 30/9-2032. Följ oss på instagram @vardagavarberg

 Vi är ett demenscertifierat boende, vilket betyder att alla vi som arbetar här är utbildade i demens och bemötande via Vardagas Demensakademi.

 Vi tillämpar behovsbaserat önskeschema. Det innebär att du som medarbetare har möjlighet att påverka din egen arbetstid, utifrån behov och önskemål. Vi lägger schema för 10 veckor i taget.

 Du har en gruppchef som större delen av sin tid arbetar nära dig i verksamheten. Att bli gruppchef kan även vara en karriärmöjlighet för dig som undersköterska.

Som undersköterska är du oerhört viktig!

Din uppgift är att ge livskvalitet. Med hjälp av dig kan våra boende behålla sitt levnadssätt och sina vanor. Du ser varje person och tolkar vad de behöver. Samtidigt lär du dig mycket om omvårdnad, åldrande och hur man bemöter människor.

”Det handlar framför allt om möten med människor, att kunna anpassa och läsa vad människor behöver. Du får kollegor och lär dig mycket om samarbete! Det händer ofta mycket roliga saker, aktiviteter och utflykter. Det är ett jobb med mycket skratt.” Jirapinya Muangsiri

Du står närmast den boende och har därmed en nyckelroll i teamet med sjuksköterska, arbetsterapeut och fysioterapeut. Du medverkar också vid vårdplanering och skriver social dokumentation.

Med hjärtat på rätta stället

Hos oss får du arbeta i en stark kultur där vi drivs av vår vision: Vi gör världen lite bättre, en människa i taget. Det är oerhört viktigt att du delar vår vision och våra fyra värderingar:

Respekt: Hos oss har alla rätt till ett värdigt liv med såväl fysiskt, psykiskt som socialt välbefinnande.

Ansvar: Hos oss har vi medarbetare som vågar och vill och chefer som lyssnar och leder.

Enkelhet: Hos oss är det enkelt att påverka och att vara medarbetare eller kund.

Kunskap: Hos oss reflekterar vi, lär av varandra och tar tillvara allas kompetens

Tillsammans jobbar vi kontinuerligt med att säkra att värdegrunden genomsyrar vårt bemötande, både till varandra och alla som bor hos oss.

”Här finns bra och tydliga värderingar och mål som har guidat mig hela vägen för att kunna utföra mitt arbete på bästa sätt.” Raquel Castaneda

Din erfarenhet och kunskap

Vi ser gärna att du är utbildad undersköterska och har arbetat några år inom äldreomsorgen. God datorvana samt erfarenhet av dokumentation är också meriterande. Goda kunskaper i det svenska språket i tal och skrift är ett krav, men i övrigt är inte ditt CV det viktigaste. Om du delar våra värderingar och har rätt egenskaper, ger vi dig stöd och möjlighet att växa.

Vi tror att du:

- lockas av ett varierat arbete och tycker om att möta människor i olika situationer.

- är en kreativ person som vågar tänka själv och ta ansvar.

- trivs med att jobba i team och stötta dina kollegor.

Övrigt

Lön: Vi tillämpar individuell lönesättning  Tillträdesdatum: efter överenskommelsen Sista ansökningsdag: 11/10-2026 Registerkontroll: Utdrag ur belastningsregister skall uppvisas vid en eventuell anställning. Som en del av vårt arbetsmiljöarbete kan slumpmässiga drogtester förekomma. Har du frågor? Kontakta gärna: gordana.rajkovic@vardaga.se , hanna.kerold@vardaga.se eller lena.johnsson@vardaga,se Observera att det inte går att ansöka via E-post. Om du vill veta mer om hur det är att jobba på Vardaga så läs gärna mer och träffa några av våra medarbetare här.

Facklig kontakt: Kommunal, kommunal.se

Ansökan

Välkommen att ansöka via knappen ”Skicka ansökan” nedan. Vänta inte med att ansöka då vi gör urval löpande.

Om du blir kallad till en intervju behöver du kunna styrka att du har rätt att arbeta i Sverige, genom att uppvisa att du har medborgarskap inom EU/EES eller ett giltigt arbetstillstånd.

Inbjudan till chattintervju med Hubert AI

Som ett led i vårt arbete mot en rättvis och kompetensbaserad rekryteringsprocess har vi i denna process valt att samarbete med Hubert.ai

Efter ansökan kommer du att bjudas in till in en chatt-baserad intervju med vår virtuella rekryteringsassistent Hubert.

Genomför den gärna så fort du har möjlighet. Intervjun tar cirka 15 min att slutföra.

Kolla gärna denna artikel innan intervjun för tips och tricks: https://www.hubert.ai/insights/tips-och-rad-infor-din-forsta-hubert-intervju  Mer information om hur vi kommer behandla dina personuppgifter och dina rättigheter som registrerad hittar du här.

På Vardagas drygt 100 boenden runt om i Sverige erbjuder vi en äldreomsorg där varje dag är lika viktig. Hos oss möter du expertis och trygghet på varje äldreboende, korttidsboende, i hemtjänst och dagverksamhet. Vi ska vara kvalitetsledande i allt vi gör och vår vision är att göra världen lite bättre, en människa i taget. Våra medarbetare arbetar med varje individs livskvalitet och trygghet i fokus. Vardaga ingår i företagsgruppen Ambea. www.vardaga.se

Läs mindre
Övrig information
Lön
Lönetyp: Fast månads- vecko- eller timlön
Var ligger arbetsplatsen?
Vardaga
Kalkstensgatan 16
43238 Varberg
Varbergs Kommun
Arbetsgivare
Vardaga AB
https://vardaga.teamtailor.com
Sök jobbet
Sista ansökningsdag: 15 okt. (om 14 dagar)
Ange referens: teamtailor-8481873-2223312 i din ansökan

</details>

---

## 6. Administrative officier
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31538907 (retrieved 2026-09-30)
**Test Focus:** Well structured ad, just to try different positions. 

**Expected:** Answer according to prompt with correct information. 

<details>
<summary>Input (original, Swedish)</summary>

Handläggare till Kulturdepartementet
Regeringskansliet
Handläggare, offentlig förvaltning/​Utredare, offentlig förvaltning
Kommun: Stockholm
Kort arbetsbeskrivning
Omfattning: Heltid
Varaktighet: Tills vidare
Anställningsform: Tillsvidare- eller tidsbegränsad anställning
Sök jobbet
Sista ansökningsdag: 21 okt. (om 20 dagar)
Om jobbet
Sekretariatet för ledningsstöd, styrning och internationella frågor, Kulturdepartementet

Vi söker nu en medarbetare som vill arbeta med samordning och administrativa uppgifter. Om du trivs i en roll med många kontaktytor och varierande arbetsuppgifter kan du vara den vi söker.

Din arbetsdag. Sveriges morgondag.

Sekretariatet för ledningsstöd, styrning och internationella frågor (LSI) ansvarar bland annat för övergripande samordning och utveckling av departementets verksamhet. I sekretariatets uppgifter ingår bland annat ansvar för departementets verksamhetsplanering, interna ekonomi och uppföljning, budgetarbete och myndighetsstyrning samt internationella frågor. Enheten svarar även för administrativt stöd åt statsråd, statssekreterare, expeditions- och rättschef samt Rättssekretariatet.

Som handläggare på LSI med inriktning mot administrativ samordning och utveckling kommer du att arbeta nära expeditions- och rättschefen. Arbetsuppgifterna är varierande och innehåller stöd, samordning och utveckling inom flera olika områden, t.ex. utformning av enhetliga rutiner, informations- och dokumenthantering, och effektivisering av processer. Arbetet bygger på ett nära samarbete och många kontakter med övriga enheter inom departementet och med andra delar av Regeringskansliet.

Du kommer främst att arbeta med att samordna och ge stöd i centrala processer, arbeta med departementsövergripande utvecklingsarbete och administrativt stöd. Digitalisering och IT ingår som en del i såväl utvecklingsarbetet som det administrativa arbetet. Du kommer att vara ett nav för att samordna och planera beredningar i RK-portalen med statsråd, statssekreterare och expeditions- och rättschef samt bidra till administrativ kvalitet i ärendehanteringen inför och efter regeringssammanträden. I det administrativa stödet kan även ingå t.ex. expediering av beslut, hantera beställningar och mötesbokningar. Du ingår i nätverket av departementets assistenter och bidrar till att utveckla det administrativa stödet på departementet.

I arbetsuppgifterna ingår att vid behov arbeta med andra frågor inom enheten eller vid departementets andra enheter.

Läs mer om vår verksamhet på www.regeringen.se

Din bakgrund

Vi söker dig som har akademisk examen inom exempelvis samhällsvetenskap eller annat område som arbetsgivaren bedömer som relevant. Du har erfarenhet av administrativa och samordnande arbetsuppgifter inom offentlig sektor samt erfarenhet av att utveckla rutiner och arbetssätt och bidra till verksamhetens kvalitetsarbete. Rollen kräver mycket god datorvana med mycket goda kunskaper i Officepaketet. Vidare har du goda kunskaper i svenska och engelska, både i tal och skrift.

Vi ser det som meriterande om du har erfarenhet av administrativt eller samordnande arbete i Regeringskansliet eller annan statlig myndighet. Det är även meriterande om du har erfarenhet av arbete i digitala administrativa system, exempelvis för beredning och ärendehantering.

Dina egenskaper

Regeringskansliets medarbetarkriterier är helhet, utveckling, resultat.

Alla som arbetar i Regeringskansliet behöver ha helhetssyn och samarbeta för verksamhetens bästa. Du förväntas bidra med ditt perspektiv och din kompetens samt vara öppen för andras. Du kommer med idéer och nya angreppssätt för att förbättra och utveckla verksamheten och din egen kompetens. Du är inriktad på resultat i ditt agerande och anpassar dig när behov och inriktning ändras.

Du är kvalitetsmedveten och arbetar ansvarsfullt och noggrant, med förståelse för verksamhetens mål och krav. Du har god samarbetsförmåga, är lyhörd och kommunikativ och bidrar till konstruktiva lösningar när det behövs. Vidare arbetar du strukturerat och har lätt för att planera, organisera och prioritera. Du är också självgående, tar ansvar för dina uppgifter och driver ditt arbete framåt på ett självständigt och professionellt sätt.

Övrigt

Anställningen är tillsvidare. Befattningen är placerad i säkerhetsklass och en säkerhetsprövning med registerkontroll kommer att genomföras innan beslut om anställning fattas

Är du intresserad?

Vill du veta mer om jobbet och vad vi erbjuder, kontakta Åsa Finnström som är administrativ chef. Du är också välkommen att kontakta HR-handläggare Carl Garellick. Fackliga kontaktpersoner är Karl Bratt Rosén för Saco och Karina Åbom-Engberg för ST. Du når samtliga via Regeringskansliets växel, 08-405 10 00. Vi tar gärna emot samtal från dig som är intresserad av jobbet men vi tackar nej till dig som säljer annonser och rekryteringstjänster.

Välkommen att registrera din ansökan i vårt rekryteringsverktyg senast den 21 oktober 2026.

Regeringskansliets uppdrag är att stödja regeringen i dess arbete med att styra Sverige och förverkliga sin politik. Här arbetar 4 800 personer, varav 600 utomlands. Regeringskansliet välkomnar sökande med olika bakgrund och erfarenheter. Vi ser jämställdhet och mångfald som en styrka och tillgång och vi arbetar aktivt för att vara en arbetsplats fri från diskriminering. Kulturdepartementet ansvarar för frågor som rör kultur, demokrati, medier, de nationella minoriteterna och det samiska folkets språk och kultur.

Läs mindre
Övrig information
Lön
Lönetyp: Fast och rörlig lön
Var ligger arbetsplatsen?
Regeringskansliet
Stockholm Kommun i Stockholms län
Arbetsgivare
Regeringskansliet
https://www.regeringen.se/
Sök jobbet
Sista ansökningsdag: 21 okt. (om 20 dagar)


</details>

---

## 7. Senior accountant
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31538870 (retrieved 2026-09-30)
**Test Focus:** It is an english ad and the workplace location is not decieded. 

**Expected:** Hallucination on workplace location.

<details>
<summary>Input (original, Swedish)</summary>

Senior Accountant Central Europe
Hykmann Global Business Solutions AB
Account manager/​AM
Obestämd ort
Kort arbetsbeskrivning
Omfattning: Heltid
Varaktighet: 6 månader – upp till 12 månader
Anställningsform: Tidsbegränsad anställning
Sök jobbet
Sista ansökningsdag: 30 okt. (om 29 dagar)
Ansök via mail:vinay@hykmann.com
Om jobbet
** Sweden Visa/valid work authorization is mandatory and no visa sponsorship is available for this role

** Ability to join immediately/on a short notice is preferable

Assignment description and main responsibilities

Manage and oversee - together with Group Accounting and SSC team - all accounting operations, including billing, accounts receivable/payable, general ledger, and inventory accounting.
Lead Shared service team (SSC) with the SSC Team leads, review and oversee all activities related to the month-end, half-year and year-end close processes, ensuring accuracy, timeliness in coordination with internal teams (group accounting, tax.).
Secure implementation of accounting policies, procedures, and internal controls in liaison with HQ Finance teams and Group Accounting. 
Safeguard company assets and ensure SOX compliance. SoX controls performed by SSC team. 
Prepare and present financial statements with SSC, EY, Auditors.
Review reconciliations, prepare reports, and analyses to senior leadership. (SSC team performing the monthly reconciliations)
Ensure compliance with accounting standards, tax regulations, and all relevant legal requirements in liaison with HQ Group Accounting, Tax and Technical Accounting.
Manage partnerships with external auditors, tax/regulatory authorities.
Drive process improvements requests and leverage technology to increase efficiency and accuracy.
Provide leadership and oversight across a shared service accounting function, ensuring alignment with company standards, service level agreements, and seamless integration with internal operation
﻿

Collaborate with: 

Group Accounting, Tax, Internal Control & SSC team* to ensure monthly closing, compliance with Local legal/Group policies and Statutory filing on time.
Cross functional teams across the PSUs and Regions Governance and Control – secure execution and improvement of internal controls set by our global internal control team. 
Liaise with external and internal auditors and ensure compliance with Sarbanes-Oxley controls. 
﻿

*SSC responsible for performing R2R, AP/AR, Cash & Bank activities 

﻿

Deliveries 

The Senior Accounting Manager for Central Europe will play an important role in managing the core accounting and financial report functions and operational efficiencies in the region. You will lead our accounting and financial report operations through strategic guidance, deep understanding of accounting principles and regulatory compliance. You will play a pivotal role in shaping our financial future, ensuring compliance, and supporting our mission to deliver exceptional value to our customers and stakeholders. This role will be a key member of our finance community, ensuring consistent alignment across our business units and seamless integration of accounting operations in Central Europe, which today consists of a group of legal entities located in Austria, Germany and Switzerland. This role reports to the Regional CFO.

﻿

Competence requirements

Bachelor’s degree in accounting, finance, or related field required.
Master’s Degree in a related field, MBA and/or CPA Certification preferred.
5-10 years of progressive accounting experience, with at least 5 years in a leadership role.
Proven experience managing and collaborating across shared service accounting teams, ensuring high-quality performance and effective partnership.
Experience in the automotive industry or a related sector is strongly preferred.
Deep knowledge of GAAP/IFRS, financial reporting, and compliance requirements for the markets within the region. 
Proven abilities working for a U.S. listed company environment with strong understanding of Sarbanes-Oxley Act and other regulatory requirements.
Demonstrated ability to lead and develop high-performing teams.
Proficient in accounting software and ERP systems; experience with dealership management systems a plus.
Skilled at identifying process gaps and driving optimization initiatives across various functions.
Thrives in a fast-paced environment with a passion for innovation and teamwork.
﻿

Other requirements

Fluent in English. German, Italian and French a plus. 
Ability to navigate complexity in matrixed organizations
Strong prioritization abilities both in your own scope, your team, and deliverables to best support business objectives
﻿



Läs mindre
Kvalifikationer
Arbetslivserfarenhet
Krav
Account manager/AM -  
5 års erfarenhet eller mer
Utbildning
Meriterande
Forskarutbildning
Öppen för alla

Arbetsgivaren är villig att göra anpassningar av rollen eller arbetsplatsen för dig som till exempel har särskilda behov, en funktionsnedsättning eller till dig som är ny i Sverige.




Övrig information
Lön
Lönetyp: Fast månads- vecko- eller timlön
Var ligger arbetsplatsen?
Gothenburg (SE)
Arbetsplatsens ort är obestämd.
Arbetsgivare
Hykmann Global Business Solutions AB
Sök jobbet
Sista ansökningsdag: 30 okt. (om 29 dagar)
Ansök via mail:vinay@hykmann.com

</details>

---

## 8. Recruiter
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31538865 (retrieved 2026-09-30)
**Test Focus:** The phrasing on the particular startdate is not common in Sweden.

**Expected:** That the start date is as soon as possible but an agreement. 

<details>
<summary>Input (original, Swedish)</summary>

Rekryteringskoordinator till Försvarsmakten i Göteborg
Försvarsmakten
Rekryterare/​Rekryteringskonsult
Kommun: Göteborg
Kort arbetsbeskrivning
Omfattning: Heltid
Varaktighet: 6 månader eller längre
Anställningsform: Tillsvidare- eller tidsbegränsad anställning
Sök jobbet
Sista ansökningsdag: 14 okt. (om 13 dagar)
Om jobbet
Är du en fena på rekrytering inom statlig myndighet? HR avdelningen på Älvsborgs Amfibieregemente (Amf4) i Göteborg söker nu en rekryteringskoordinator för en tidsbegränsad anställning på ett år.

Om avdelningen

G1 är regementets HR-avdelning som består av 9 engagerade och kompetenta kollegor, civila som militära. Vi arbetar med att stödja regementet med HR- och personalfrågor, både operativa, strategiska som visionära med ett tydligt signum att det ska vara "lätt att göra rätt". Du som rekryteringskoordinator rapporterar till HR chefen.

Om rollen

Som rekryteringkoordinator ansvarar du för hela rekryteringsprocessen genom att du planerar och driver rekryteringarna framåt som stöd åt verksamheten. Du säkerställer att vi levererar en professionell och kvalitativ rekryteringsprocess samt en utmärkt kandidatupplevelse. Du stödjer och vägleder chefer för att möta deras anställningsbehov och fungerar som en betrodd rådgivare. Notera att vi inom Försvarsmakten arbetar med kompetensbaserad rekrytering och inte med search eller headhunting. Rollen innebär även koordinering av Amf 4 introduktionsutbildning för nya medarbetare, som äger rum två gånger per år.

Huvudsakliga arbetsuppgifter

Stödja regementets chefer med rekrytering exempelvis genom att ta fram kravspecifikationer, göra urval, genomföra intervjuer, referenstagning och skriva anställningsbevis
Verka som administrativt stöd inom HR
Koordinera och administrera Amf 4 introduktionsutbildning
Personliga egenskaper

För att lyckas i rollen är du en självgående person som har förmåga att ta initiativ och skapa struktur i ditt eget arbete. Du trivs i en koordinerande roll, att skapa goda relationer och samarbeta med andra där du gärna delar med dig av dina kunskaper och erfarenheter. Du är noggrann, flexibel och lösningsorienterad i ditt arbete.

Stor vikt kommer att läggas vid personlig lämplighet.

Krav

Akademisk examen på högskole-/universitetsnivå inom personal/HR alternativt motsvarande utbildning/erfarenhet som arbetsgivaren bedömer likvärdig
Aktuell och relevant arbetslivserfarenhet av att arbeta självständigt med rekrytering inom statlig myndighet
Mycket god administrativ förmåga och vana att arbeta i Officepaketet
Mycket god förmåga att kommunicera på svenska, både muntligt och skriftligt
Meriterande

Tidigare aktuell och relevant arbetslivserfarenhet av HR-administration
Tidigare aktuell och relevant arbetslivserfarenhet av att anordna/koordinera utbildningar
Vi erbjuder dig

Verksamheten erbjuder stor variation och komplexitet. Våra anställda har ett flertal olika förmåner, bland annat tre timmars träningstid i veckan på arbetstid, träningskläder, en bra balans mellan arbete och fritid med flexibel arbetstid och stor frihet genom ansvar.

För att myndighetens uppdrag ska vara framgångsrikt förutsätts att alla medarbetare uppträder enligt den värdegrund som finns. Försvarsmaktens värdegrund slår vakt om alla människors lika värde, rättvisa och jämlikhet och främjar demokrati och mänskliga rättigheter (läs mer på http://www.forsvarsmakten.se)

Övrigt

Anställningsform: 100% tidsbegränsad anställning på ett år.

Arbetsort: Göteborg, Västra Frölunda

Tillträdesdatum: Snarast enligt överenskommelse

För upplysningar om befattningen eller rekryteringsprocessen kontakta:

Izabelle Lagnered HR-chef Amf 4 mailto:izabelle.lagnered@mil.se

Fackliga företrädare

mailto:Seko-forsvar-goteborg@mil.se

mailto:of-amf@officersforbundet.se

mailto:forsvarsforbundet-goteborg@mil.se

mailto:saco-gbg@mil.se

Varmt välkommen med din ansökan med tillhörande CV samt personligt brev där du motiverar varför just du passar som rekryteringskoordinator hos oss på Amf 4, senast 2026-10-14

Ansökningar till denna befattning kommer endast tas emot via Försvarsmaktens webbplats. På Älvsborgs amfibieregemente, i centrala Göteborg, verkar vi där land möter hav och utgör en viktig länk mellan armé- och sjöstridskrafterna. Som återetablerat regemente med garnisonsansvar växer vi och är behov av fler kompetenta officerare, soldater och civila medarbetare som fortsätter utveckla förbandet till dess viktiga uppgift: Försvara Sveriges många kustnära skärgårdsområden samt skydda våra leder in till Skandinaviens största hamn i syfte att värna Sveriges strategiska import. I Försvarsmakten finns en stark värdegrund som bygger på öppenhet, resultat och ansvar. Professionell utveckling och personlig hälsa värdesätts och uppmuntras. Det finns goda förutsättningar för intern karriärrörlighet, friskvård och bra balans mellan arbete och privatliv. En anställning hos oss innebär placering i säkerhetsklass. Vanligtvis krävs svenskt medborgarskap. Säkerhetsprövning med registerkontroll kommer att genomföras före anställning enligt 3 kap i säkerhetsskyddslagen. Med anställning följer en skyldighet att krigsplaceras. I anställningen ingår även en skyldighet att tjänstgöra utomlands. Innebörden av detta varierar beroende på typ av befattning. Till ansökan om anställning ska CV och personligt brev bifogas. Om du går vidare i anställningsprocessen ska alltid vidimerade kopior av betyg och intyg uppvisas. Samtal från externa rekryteringsföretag och säljare undanbedes.

Läs mer
Övrig information
Lön
Lönetyp: Fast månads- vecko- eller timlön
Var ligger arbetsplatsen?
Försvarsmakten
Göteborg Kommun i Västra Götalands län
Arbetsgivare
Försvarsmakten
https://www.forsvarsmakten.se/
Sök jobbet
Sista ansökningsdag: 14 okt. (om 13 dagar)

</details>

---

## 9. Salesperson
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31538671 (retrieved 2026-09-30)
**Test Focus:** Different locations in the ad

**Expected:** Both locations. 

<details>
<summary>Input (original, Swedish)</summary>

Utesäljare till KAGON AB
Linda Thomassen AB
Företagssäljare
Kommun: Falun, Örebro
Kort arbetsbeskrivning
Omfattning: Heltid
Varaktighet: Tills vidare
Anställningsform: Tillsvidareanställning (inkl. eventuell provanställning)
Sök jobbet
Sista ansökningsdag: 15 nov. (om 45 dagar)
Ansök via mail:lindathomassen.ab@outlook.com
Om jobbet
UTESÄLJARE TILL KAGON AB

Vill du arbeta i en roll där du får stor frihet, eget ansvar och möjligheten att verkligen göra skillnad för dina kunder? Hos KAGON AB blir du en viktig partner till företag inom träförädling, produktion och teknik, där du hjälper kunderna att utveckla sin verksamhet genom smarta lösningar, teknisk kompetens och personlig service.

Om rollen

Som utesäljare på KAGON får du en självständig och affärsdriven roll med stort eget ansvar. Du utvecklar befintliga kundrelationer, skapar nya affärsmöjligheter och blir en viktig rådgivare för kunder inom sågverk, hyvlerier och andra producerande verksamheter. Genom kundbesök, behovsanalys, rådgivning, offertarbete och uppföljning bidrar du till lösningar som gör verklig skillnad i kundernas produktion. 

Du arbetar nära kunderna, bygger förtroende över tid och blir en viktig partner i deras utveckling. Genom att förstå kundernas behov, identifiera affärspotential och presentera rätt lösningar driver du affärer från första kontakt till avslut och vidare till långsiktigt samarbete. 

Huvudsakliga arbetsuppgifter

·       Bearbeta nya och befintliga kunder genom dagliga besök i ditt distrikt.  

·       Du bygger långsiktiga relationer både i produktion och bland beslutsfattare. 

·       Förstå kundernas produktionsmiljöer, behov och tekniska förutsättningar inom framförallt träindustri.

·       Du driver hela säljprocessen självständigt från start till mål genom att ta fram lösningsförslag, offerter och uppföljningar i nära dialog med kunden.

·       Samarbeta internt med kollegor inom försäljning, lager, verkstad och teknik för att säkerställa rätt lösning och leverans.

·       Du utför visst montage och praktisk support på plats hos kunderna i samband med leverans eller service.

·       Du håller dig uppdaterad gällande marknad, konkurrenter och kundbehov för att bidra till fortsatt affärsutveckling.

Vi söker dig som

·       Har erfarenhet från produktion, träförädling, sågverk, hyvleri, teknisk handel eller liknande verksamhet.

·       Har god teknisk förståelse och kan sätta dig in i kunders processer och behov.

·       Är trygg i mötet med kunder och trivs med att bygga långsiktiga relationer.

·       Har ett strukturerat och affärsmässigt arbetssätt med förmåga att driva affärer framåt.

·       Har goda kunskaper i engelska i både tal och skrift.

·       Har B-körkort och möjlighet att resa i tjänsten.

·       Meriterande: Erfarenhet av försäljning, gärna B2B eller teknisk försäljning.

Vi erbjuder

·       En fri, självständig och utvecklande roll där du får arbeta nära både kunder och kollegor.

·       Möjlighet att bli en nyckelperson i ett välrenommerat företag med stark förankring i Falun och lång erfarenhet från trä- och industribranschen.

·       Ett brett produkt- och lösningsutbud som ger dig goda möjligheter att skapa värde för kunderna.

·       Korta beslutsvägar, kunniga kollegor och en vardag där service, kvalitet och långsiktiga relationer står i centrum.

·       En möjlighet att påverka, utvecklas och vara med på KAGONs fortsatta resa framåt.

Din ansökan

Vi samarbetar med Linda Thomassen AB i denna rekrytering varpå vi önskar alla ansökningar via email direkt till adressen lindathomassen.ab@outlook.com. Skicka in din ansökan med CV och ett personligt brev. Urval och intervjuer sker löpande, så vänta inte med att höra av dig. 



Skicka din ansökan senast 15 november 2026.



Vid frågor om tjänsten vänligen kontakta VD Stefan Lind, tlf 070 – 392 7804.



Placeringsort: Falun eller Örebro med omnejd



Om KAGON                                      

KAGON har sin bas i Falun och har sedan 1972 levererat produkter, lösningar och kompetens till träindustrin och övrig industri. Företaget arbetar bland annat med timmerbevattning, skärande verktyg, bandsågar, pneumatik, hydraulik, transmission, slangar, kullager, reservdelar, emballage och teknikprodukter. Med personlig service, teknisk kompetens, lagerbutik och slangverkstad i Falun hjälper KAGON kunder att hitta rätt lösning för sin verksamhet. Läs gärna mera på www.kagon.se











Läs mer
Kvalifikationer
Arbetslivserfarenhet
Krav
Företagssäljare -  
erfarenhet efterfrågas
Språk
Krav
Engelska
Körkort
Krav
B
Övrig information
Lön
Lönetyp: Fast och rörlig lön
Var ligger arbetsplatsen?
KAGON AB
Samuelsdalsvägen 4
79161 Falun
Faluns Kommun
LOAB
Örebro Kommun i Örebro län
Arbetsgivare
Linda Thomassen AB
http://www.kagon.se
Sök jobbet
Sista ansökningsdag: 15 nov. (om 45 dagar)

</details>

---

## 10. Teacher
**Source:** https://arbetsformedlingen.se/platsbanken/annonser/31533894 (retrieved 2026-09-30)
**Test Focus:** Regular Ad. 

**Expected:** Answer according to prompt with correct information.

<details>
<summary>Input (original, Swedish)</summary>

Lärare i högstadiet
Kristna Skolan Oasen Ideella Fören
Ämneslärare, 7–9
Kommun: Sundsvall
Kort arbetsbeskrivning
Omfattning: Heltid
Varaktighet: 12 månader – upp till 2 år
Anställningsform: Tidsbegränsad anställning
Sök jobbet
Sista ansökningsdag: 29 okt. (om 28 dagar)
Ange referens: Lärare i 7-9 i din ansökan
Ansök via mail:shannon.lehnberg@kristnaskolanoasen.se
Om jobbet
Lärare i matematik, NO och teknik för årskurs 7–9

Kristna Skolan Oasen söker en engagerad och behörig lärare

Kristna Skolan Oasen är en fristående skola med kristen värdegrund. Vi har cirka 120 elever från förskoleklass till årskurs 9 samt fritidsverksamhet. Trots vår storlek präglas skolan av stor mångfald, nära gemenskap och ett åldersblandat arbetssätt. Hos oss är målet att varje elev ska känna sig trygg, respekterad och ges möjlighet att utvecklas utifrån sina förutsättningar.

Läs gärna mer om vår verksamhet på kristnaskolanoasen.se.

Om tjänsten

Vi söker nu en erfaren och legitimerad lärare som vill vara mentor på högstadiet och undervisa i matematik, NO-ämnen och teknik för elever i årskurs 7–9.

Du kommer att ingå i ett engagerat arbetslag där samarbete, gemensamt ansvar och nära kollegialt stöd är en naturlig del av vardagen.

Tjänstens omfattning: 100 %

Vi söker dig som

Är behörig lärare med erfarenhet av undervisning på högstadiet.
Har ett flexibelt arbetssätt och ser möjligheter i förändring och utveckling.
Är en god lagspelare som värdesätter samarbete och relationer.
Har förmåga att inspirera, motivera och skapa engagemang hos elever.
Är en tydlig och trygg ledare i klassrummet.
Kan skapa struktur, arbetsro och en positiv lärmiljö.
Visar lyhördhet, omtanke och respekt i mötet med elever, vårdnadshavare och kollegor.
Har gott omdöme och hög integritet samt vill vara en positiv vuxen förebild.
Delar och kan stå bakom skolans kristna profil och värdegrund.
Vi erbjuder

På Kristna Skolan Oasen får du möjlighet att arbeta i en mindre skola där relationer står i centrum och där varje medarbetare gör verklig skillnad. Vi värdesätter engagemang, gemenskap och viljan att tillsammans utveckla både elever och verksamhet.

Ansökan

Har vi väckt din nyfikenhet? Är du en engagerad lärare som vill vara med och utveckla vår skola?

Välkommen att skicka ditt personliga brev och CV till:

shannon.lehnberg@kristnaskolanoasen.se

Urval sker löpande, så vänta inte med din ansökan.

Läs mindre
Kvalifikationer
Arbetslivserfarenhet
Meriterande
Ämneslärare, 7–9 -  
1-2 års erfarenhet
Utbildning
Krav
Eftergymnasial utbildning två år eller längre inom Pedagogik och lärarutbildning
Kompetenser
Krav
Lärarlegitimation
Lärarexamen
Övrig information
Lön
Lönetyp: Fast månads- vecko- eller timlön
Var ligger arbetsplatsen?
Kristna skolan Oasen
Baldersvägen 72
85640 SUNDSVALL
Sundsvalls Kommun
Arbetsgivare
Kristna Skolan Oasen Ideella Fören
http://www.kristnaskolanoasen.se
Kontakt
Shannon Lehnberg
Rektor
shannon.lehnberg@kristnaskolanoasen.se
0736252929
Sök jobbet
Sista ansökningsdag: 29 okt. (om 28 dagar)
Ange referens: Lärare i 7-9 i din ansökan
Ansök via mail:shannon.lehnberg@kristnaskolanoasen.se

</details>
