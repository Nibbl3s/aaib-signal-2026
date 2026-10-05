Test set — inputs + expected answers (Week 2)
Job: classify a customer email to a Belgian non-life insurer into NEW_CLAIM · CLAIM_FOLLOWUP · POLICY_CHANGE · CANCELLATION · COMPLAINT · UNCLEAR, plus language (NL · FR · EN · MIXED). See prompt.md v1.

Rule I follow: the expected answer is written in this file and committed BEFORE the first run. I do not change an expected answer after seeing the output — if I think my expected answer was wrong, I note it in log.md instead.
Where the inputs come from
All inputs are real public texts, anonymised (names, policy/claim numbers, plates, addresses, phone numbers replaced by [NAME], [POLICY], [PLATE], …). Where a public text is a review or forum post and not an email, I keep the customer's own words and only add a greeting/sign-off. Those are marked adapted.

Sources I used (fill in the exact link per input in the table):

Ombudsman van de Verzekeringen — annual report case summaries (ombudsman-insurance.be)
Public Trustpilot / Google reviews of Belgian insurers (e.g. AG, Ethias, KBC Verzekeringen, AXA Belgium, Baloise, P&V)
Forum posts: Test Aankoop / Test Achats community, Reddit r/belgium, Dutch/Belgian insurance forums
My own experience with an insurer (written down from memory, marked own)

Invented inputs: (none / number — the course allows them only as a disclosed fallback, and they count as upper-bound performance)
Awkward-case checklist (tick when covered)
at least 2 in French
at least 1 mixed language or English
a very short one (one line, e.g. "Waar blijft mijn geld???")
one where the right answer is UNCLEAR
an angry status question (FOLLOWUP vs COMPLAINT boundary)
a real complaint that mentions the Ombudsman
one with two requests in one email (e.g. new claim + cancellation)
a "am I covered for…?" question (POLICY_CHANGE vs NEW_CLAIM boundary)
a long, rambling one where the request is at the end
Inputs and expected answers
#
Source (link)
Real / adapted / own
Input (anonymised)
Expected CATEGORY
Expected LANGUAGE
Why (one line)
Awkward case?
1
https://nl-be.trustpilot.com/users/5ade36474de5666d344fb28e
Real
Zeer teleurstellende ervaring met AG…
Zeer teleurstellende ervaring met AG Insurance.
Een eenvoudig schadegeval heeft bijna 1 jaar aangesleept door trage communicatie, tegenstrijdige informatie en foutieve beloftes. Ik moest zelf constant bellen en mailen om fouten recht te zetten.

Er werden duidelijke beloftes gemaakt (o.a. over bonus-malus en aansprakelijkheid) die later ontkend werden. Een laattijdige en foutieve expertise werd gebruikt om mij richting een 50/50-regeling te duwen, terwijl mijn eigen bewijsmateriaal (dashcambeelden) niet ernstig werd bekeken.

Pas na maanden aandringen werd de schade uiteindelijk 100% vergoed, maar zonder enige vorm van tegemoetkoming voor de stress, tijd en mentale impact. AG erkent zelf dat er fouten zijn gemaakt, maar neemt hier geen verantwoordelijkheid voor.

Ik zou AG Insurance op basis van deze ervaring absoluut niet aanraden.

Dit dossier heeft mij maanden stress bezorgd en toont hoe moeilijk het is om als klant je recht te halen zonder alles zelf op te volgen.


complaint
NL
Customer is complaining about the length of the help.


2
https://nl-be.trustpilot.com/reviews/68de5fef08dac6cd3428aacd 
Real
Al mijn polissen van brand auto…
Al mijn polissen van brand auto familiale etc bij baloise. Steeds met betalen van brandpolis liep het mis volgens hun kon er niets worden afgeboekt wegens te weinig provisie echter kon dit niet aangezien er altijd voldoende provisie was. Na contact met verzekeringsagent dit laten overschrijven . Gaat ineens de jaarpremie voor een groot bedrag van de rekening ( op zich geen probleem). Krijgen ik ineens een aangetekende zending dat er een wijziging is in de polis en zou er een grote som worden terugbetaald. Wat er uiteindelijk werd gewijzigd wisten we nog altijd niet! Er was geen duidelijke vermelding op de brief wat er dan juist is aangepast! Krijgen we vorige week een brief incasso betreft brandpolis niet betaald met een extra kost van 12,50. Verzekeringsagent reageerde nooit op de vragen dus zelf hun gecontacteerd met de vraag wat er juist loos is en waar de wijziging etc over gaat. Een zeer onbeschofte boerin die me doodleuk zegt de premie van uw brand is opgezegd wegens wanbetaling!!!!! Ik zeg dat kan niet want je hebt paar weken geleden de jaarpremie afgeschreven van de rekening, en zei ik nog erbij u moet dit niet schriftelijk per aangetekende zending laten weten? U vindt dat allemaal maar normaal? Ga geen discussie voeren zei ze u neemt maar contact op met uw verzekeringsagent. Ik zei dus ik ga stappen ondernemen en een klacht indienen bij de ombudsdienst. U doet maar zei ze, ik zeg u stort de som die ik tegoed maar terug en tot op heden niets meer vernomen na mails etc. Nu ga ik verder en desnoods juridische stappen ondernemen met fsma, Assuralia en de ombudsdienst. Kosten mogen ze ook verwachten doen ze bij de klanten ook onterecht. Nooit maar dan ook nooit zal ik klant zijn van baloise want ze zijn onbekwaam!!!
COMPLAINT
NL
Customer explicitly announces a complaint with the ombudsdienst about a policy wrongly cancelled for non-payment and unanswered questions.
Real complaint that mentions the Ombudsman + long, rambling one where the request (refund, complaint) is at the end.
3
https://fr-be.trustpilot.com/reviews/6ac36bc65b9ab86fb63462bd 
Real
UN HONTE!
UNE HONTE! 3/4HEURE AU TELEPHONE SANS REPONSE.
COMPLAINT
FR
Pure dissatisfaction about 45 minutes on hold, with no claim or policy request.
Very short one (one line), in French and in all caps.
4
https://fr-be.trustpilot.com/reviews/698e0aab7df13e10230c60ff 
Real
Assurance travail axa me dit payer
Assurance travail axa me dit que c'est a moi a payé les frais hôpital pour me les rembourser après ? Pourtant j ai un numéro de dossier? Gros problème de suivis…
CLAIM_FOLLOWUP
FR
Customer already has a claim file number and asks why the hospital costs of a work accident are not being paid.
Angry status question (FOLLOWUP vs COMPLAINT boundary), in French.
5
https://www.trustpilot.com/reviews/67628f7ffd4df3d1d81bca41 
Real
Hands off Ethias - total lack of response
I had an accident with my bike that is insured with Ethias. I submitted the bill for the repair on 20 September 2024 indicating the dossier number [CLAIM]. But until 18 December 2024, I did not receive a reimbursement and, despite several reminders, not even any reply. Hands off Ethias if you want an insurance that gives any response to your queries.
CLAIM_FOLLOWUP
EN
Existing claim with a dossier number; the customer is chasing a reimbursement that has not arrived after three months.
In English; angry tone but the core is the status of an open claim (FOLLOWUP vs COMPLAINT boundary).
6
https://www.trustpilot.com/reviews/6a0e1595dfede7cf5590d209 
Real
-10 Star
-10 Star, run away or you will regret it This insurance is jock, there system is crazy, you ask them to cancel, nothing happened, you call them for anything they say yes ill send you documents, nothing happened, résiliation ? Nothing happened, they don't even exist or what, but the bills the only thing happening even there quality team are sleeping.
CANCELLATION
MIXED
Customer asked to cancel ("résiliation") and nothing happened, while the bills keep coming.
Mixed language (English with the French word "résiliation"); CANCELLATION vs COMPLAINT boundary.
7
https://nl-be.trustpilot.com/reviews/6a645678c131d86a1df8a5bf 
Real
Afgelopen 20jaar 3 schadegevallen gehad…
Afgelopen 20jaar 3 schadegevallen gehad en geen enkele werd uitbetaald. Nu proberen we op te zeggen en ook hier doen ze bijzonder moeilijk en weigeren. Blijf hier weg.
CANCELLATION
NL
The concrete action is trying to cancel the policy; the three unpaid claims are background.
Two topics in one (unpaid claims + cancellation).
8
https://nl-be.trustpilot.com/reviews/672b899ea2ab0e7aa56a030f 
Real
Kies voor een andere verzekeraar.
Kies voor een andere verzekeraar. Ik heb deze verzekeraar gekozen omdat het een gemakkelijke optie leek, maar het is vrijwel onmogelijk om te communiceren met hen. Sinds de start van mijn contract heb ik 3x per mail contact opgenomen (aanvraag EU schadeformulier, wijziging bankrekeningnummer en adreswijziging), maar nooit respons. Telefonisch is er dikwijls een storing waardoor ze onbereikbaar zijn met als gevolg dat er gewoonweg nul communicatie mogelijk is. De enige keer dat effectief werd opgenomen heb ik een poging ondernomen om mijn bankrekening en adres te wijzigen, maar dit bleek achteraf totaal niet te zijn doorgevoerd.
POLICY_CHANGE
NL
The requests that matter are a change of bank account and of address on the contract, which were never processed.
Several requests in one (EU claim form + bank account change + address change); POLICY_CHANGE vs COMPLAINT boundary.
9
https://nl-be.trustpilot.com/reviews/69bec298042ac102c8698e4a 
Real
Baloise sucks !
Baloise sucks ! brandverzekering dekt glasbreuk, ruit dubbel glas laten herstellen door erkende firma, komen van [CITY] met twee personen ( zelf woonachtig te [CITY]) factuur opgestuurd, van 480 € mits een franshise van 300 € sowieso kwijt zij vinden dit een te dure factuur en willen nog geeneens 180 € uitbetalen ? nu is het aan u.
CLAIM_FOLLOWUP
MIXED
Glass-breakage claim already submitted with the invoice; the customer disputes the amount the insurer wants to pay.
Mixed language (English "Baloise sucks!" + Dutch body); FOLLOWUP vs COMPLAINT boundary.
10
https://www.trustpilot.com/reviews/6a3c46903ea977ce2d87a6c3 
Real
I had a very bad experience with…
I had a very bad experience with Ethias. I had theft insurance for my electric Ninebot vehicle. It was stolen over the weekend, and I only noticed it during the week because I didn't leave the house at all during the weekend. When I reported it, Ethias refused to pay, claiming that I didn't notify them within 24 hours. It's impossible to report a theft you haven't even discovered yet. This is a customer‑unfriendly and unfair approach. I do not recommend them.
COMPLAINT
EN
The theft claim was already refused; the customer complains that the 24-hour reporting rule is unfair.
NEW_CLAIM vs COMPLAINT boundary: describes reporting a theft, but that claim was already handled and refused.
11
https://www.trustpilot.com/reviews/68e236bcf0bea4bd46f374f8 
Real
The most useless insurance
The most useless insurance
UNCLEAR
EN
No request, no claim, no policy and no concrete grievance: impossible to tell what the customer wants.
Right answer is UNCLEAR; also a very short one.
12
https://nl-be.trustpilot.com/reviews/66fac7cd4f55ea11eae829f8 
Real
Meer dan een jaar geleden aan claim…
Meer dan een jaar geleden aan claim gevraagd. Ze doen gewoon niets. Reageren wel met allerlei vragen in slecht Nederlands en dt-fouten. Ik heb een klacht ingediend via Test-Aankoop. Zij reageren hierop door te zeggen dat ze niets doen als er een klacht via derden is. Onprofessionele verzekeraar. Reageert niet, doen niets behalve telkens opnieuw dezelfde vragen stellen. Zeker deze "verzekeraar" mijden. Ik betaal telkens op tijd maar zij doen niets. Schande.
COMPLAINT
NL
Customer already filed a formal complaint via Test-Aankoop about a claim that has not moved in over a year.
Angry status question (FOLLOWUP vs COMPLAINT boundary); mentions a third-party complaint channel (Test-Aankoop, not the Ombudsman).

