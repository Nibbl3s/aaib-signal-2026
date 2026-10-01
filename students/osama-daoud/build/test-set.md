# Test set — inputs + expected answers (Week 2)

Expected answers were written **before** running the tool.
Full article texts are kept offline; each input links to the source and quotes the key sentences.

**Rules used for the expected answers**
- Only what the article says counts. If something is not stated, the answer is "unknown" / "not mentioned".
- Time out: write a duration or return date exactly as given. If both are given, use the date.
- Several injured players: one answer per player.

| # | Source | Language | Why it is in the set |
|---|---|---|---|
| 1 | [HLN, 21 Sept 2026](https://www.hln.be/club-brugge/domper-voor-club-brugge-operatie-houdt-joel-ordonez-tot-eind-december-opzij~a2ea296a/) | Dutch | Other language; gives both a duration and a date |
| 2 | RotoWire, 22 Sept 2026 | English | Same news as #1 in English: does the tool give the same answer? |
| 3 | [Arsenal.com](https://www.arsenal.com/news/tzolis-scores-for-greece-as-odegaard-shines-a20O07e2juvT) | English | Very short; no injury stated: tempts the tool to invent |
| 4 | [ESPN](https://www.espn.com/soccer/story/_/id/50026253/kai-havertz-back-arsenal-treatment-injury-germany-duty) | English | Clear case, same player as #3 |
| 5 | [Liverpoolfc.com](https://www.liverpoolfc.com/news/cody-gakpo-withdraws-international-duty) | English | Body part given, injury type not; no return date |
| 6 | [BBC Sport, 27 Sept 2026](https://www.bbc.com/sport/football/articles/cm0qxknzpn8jo) | English | Three players in one article |
| 7 | Physio Scout (X post), 18 Sept 2026 | English | Short social post; duration given as a range |
| 8 | [Le Monde, 26 Sept 2026](https://www.lemonde.fr/sport/article/2026/09/26/kylian-mbappe-souffre-d-une-hyperextension-du-genou-gauche-apres-sa-blessure-lors-de-turquie-france_6783508_3242.html) | French | Other language; injury does not fit the categories; duration explicitly not given |
| 9 | [The Guardian, 28 Sept 2026](https://www.theguardian.com/football/2026/sep/28/mallorca-goalkeeper-ivan-cuellar-injured-structure-canteen) | English | Head injury; a second player (Eriksen) is mentioned in a link but is not part of this story |
| 10 | [Cycling Upto Date, 1 Oct 2026](https://cyclinguptodate.com/cycling/is-ion-izagirres-career-over-legendary-rider-suffers-training-crash-as-hell-be-unable-to-ride-planned-final-races) | English | Not football (cycling), while the prompt says "football players"; no time out given |

## Expected answers

| # | Player | Body part | Injury type | Expected time out | Key evidence in the article |
|---|---|---|---|---|---|
| 1 | Joel Ordóñez | foot | bone | until end of December | "breuk in de voet", "eind december terug op het veld verwacht" |
| 2 | Joel Ordóñez | foot | bone | until late December | "fractured foot", "not expected back until late December" |
| 3 | Kai Havertz | unknown | unknown | not mentioned | only "forced off in the first half after 30 minutes" |
| 4 | Kai Havertz | hamstring | muscle | not mentioned | "muscle sprain", "hamstring problem" |
| 5 | Cody Gakpo | ankle | unknown | not mentioned | "sustaining an ankle injury"; no type, no duration |
| 6 | Bruno Fernandes | unknown | unknown | not mentioned | "played with an injury" |
| 6 | Cody Gakpo | ankle | unknown | not mentioned | "It's his ankle, that's all I know" |
| 6 | Patrick Dorgu | hamstring | muscle | not mentioned | "suspected hamstring problem" |
| 7 | João Pedro | knee | ligament | 3–4 weeks | "stretching/sprains of the ACL and MCL", "around 3–4 weeks" |
| 8 | Kylian Mbappé | knee | unknown | not mentioned | "hyperextension de la capsule postérieure du genou gauche"; "ne précise pas la durée" |
| 9 | Iván Cuéllar | head | head | not mentioned | "serious head injury"; "under observation for the next 24 hours" is a hospital stay, not time out |
| 10 | Ion Izagirre | wrist | bone | not mentioned | "left wrist fracture"; only says he will miss his final races |

**Total: 10 inputs, 12 expected answers** (input 6 has three players).
