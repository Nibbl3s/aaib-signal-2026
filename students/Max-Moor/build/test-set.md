# Test set — Quote intake extraction

**Rule:** expected answers are written here BEFORE any run. Do not edit an expected answer after seeing an output. If one was wrong, add a dated correction note under it instead.

**Source status:** all 13 inputs are **R = real** customer requests received by a 3D printing service, anonymised (names, first names and one company name replaced by placeholders; the text is otherwise untouched, including spelling errors).

**Scoring conventions**
- A field is correct if it matches the expected value in meaning.
- `missing_info` is correct if it contains exactly the expected items (order ignored).
- An input passes only if every field and `missing_info` are correct.
- Fields marked * in the out_of_scope column are decisions to confirm before running.

## Inputs

### Input 1 (R) — English, huge object, asks price + transport + timing

> Hello,
>
> I am interested in having a full-scale, 1:1 model of a car produced using 3D printing and delivered to Brussels. Is this something you would be able to do?
> Could you please provide an estimated cost for both the 3D printing and transportation to Brussels? I would appreciate also an indicative time for the delivery as soon as we make the order.
>
> Thank you in advance,
> [nom]

*(The original of input 1 is already in English.)*

### Input 2 (R) — Long, technical, several items, alternative materials, files attached

> Bonjour,
>
> Je souhaite faire imprimer quatre bacs de poubelle (cuisine) en PETG, ou en PP si vous le proposez en grand format, chacun en une seule pièce, debout :
> - 1 × bac_orange.stl : 228 × 168 × 484 mm hors tout, 1,05 dm³ de matière (≈ 1,3 kg en PETG)
> - 1 × bac_bleu.stl : 228 × 348 × 554 mm, 1,84 dm³ (≈ 2,3 kg)
> - 2 × bac_blanc_jaune_P60.stl : 228 × 258 × 524 mm, 1,44 dm³ (≈ 1,8 kg chacun)
> Parois de 3 mm et fond de 4 mm, à imprimer pleins (périmètres uniquement, sans remplissage), buse 0,6 ou 0,8 mm, couches 0,3 à 0,4 mm, légère sur-extrusion : les bacs doivent être étanches à l'eau. Supports uniquement sous les deux pattes de suspension (porte-à-faux de 6 mm en haut des faces avant et arrière) ; rien d'autre n'en demande. Couleur : une par bac si possible (orange, bleu, blanc, jaune), sinon indifférent.
> Les fichiers STL et 3MF (unités mm) et une fiche d'impression d'une page sont joints. Pouvez-vous m'indiquer prix, délai, les couleurs (idealement les memes que les bacs bruxelles, soit orange, blanc, jaune et blue (sauf si ceci a un impact important sur le prix, dans ce cas la couleur la moins chère) et matière proposée ?
>
> Merci d'avance,

**English translation** (the model was run on the original text):

> Hello,
>
> I would like to have four kitchen bins (waste bins) printed in PETG, or in PP if you offer it in large format, each in a single piece, standing upright:
> - 1 × bac_orange.stl: 228 × 168 × 484 mm overall, 1.05 dm³ of material (≈ 1.3 kg in PETG)
> - 1 × bac_bleu.stl: 228 × 348 × 554 mm, 1.84 dm³ (≈ 2.3 kg)
> - 2 × bac_blanc_jaune_P60.stl: 228 × 258 × 524 mm, 1.44 dm³ (≈ 1.8 kg each)
> Walls of 3 mm and a base of 4 mm, to be printed solid (perimeters only, no infill), 0.6 or 0.8 mm nozzle, 0.3 to 0.4 mm layers, slight over-extrusion: the bins must be watertight. Supports only under the two hanging tabs (6 mm overhang at the top of the front and back faces); nothing else needs them. Colour: one per bin if possible (orange, blue, white, yellow), otherwise any.
> The STL and 3MF files (units in mm) and a one-page print sheet are attached. Could you tell me the price, lead time, the colours (ideally the same as the Brussels bins, i.e. orange, white, yellow and blue, unless this has a significant impact on the price, in which case the cheapest colour) and the material you offer?
>
> Thank you in advance,

### Input 3 (R) — Beginner, vague material, STL files attached

> J'ai un tout petit projet d'impression d'une boîte avec charnière qui vient s'attacher sur une caméra vidéo. Je joins 4 fichiers STL à imprimer, qui composent 2 boîtes avec des différences de tolérance minimes. Je souhaite un matériau résistant.
> Je n'ai jamais créé de fichier pour impression 3D auparavant, n'hésitez pas à me dire si ça ne va pas.

**English translation** (the model was run on the original text):

> I have a very small project: printing a box with a hinge that attaches to a video camera. I am attaching 4 STL files to print, which make up 2 boxes with minimal tolerance differences. I would like a strong material.
> I have never created a file for 3D printing before, so please do not hesitate to tell me if something is wrong.

### Input 4 (R) — Two different items, colour printing, no file mentioned

> Bonjour, je voudrais faire imprimer 4 plaquettes blanches de 0.5 mm d’épaisseur – 3 cm de haut et 4,5 cm de large avec uniquement le pictogramme du logo en couleurs et 1 pièce de 0.5 mm d’épaisseur – 2.5 cm de haut et 12.2 cm de large avec le logo [entreprise] en couleur.

**English translation** (the model was run on the original text):

> Hello, I would like to have 4 white plaques printed, 0.5 mm thick – 3 cm high and 4.5 cm wide, with only the pictogram of the logo in colour, and 1 piece 0.5 mm thick – 2.5 cm high and 12.2 cm wide, with the [company] logo in colour.

### Input 5 (R) — Service request (3D modelling + hand painting), only a reference image

> Bonjour,
> Je souhaite faire réaliser une statue personnalisée de Saint Calogero d'une hauteur totale de 30 cm (socle et niche compris), sur la base du visuel ci-joint.
> Voici les spécifications de mon projet :
> Fichier 3D : À créer d'après l'image fournie (besoin d'un service de modélisation/sculpture 3D).
> Impression : En résine haute définition (SLA / DLP) pour garantir un niveau de détail très fin (visage, drapés, gravures).
> Finition / Peinture : Rendu peint à la main ou effet métallisé argenté pour la niche/habit, carnation foncée pour le visage/mains, et couleurs vives (rouge, jaune, vert, bleu) pour les rubans.
> Pourriez-vous me faire une estimation du coût et du délai pour la partie modélisation 3D, l'impression résine et la finition ?
> Merci d'avance pour votre retour,
> [prénom]

**English translation** (the model was run on the original text):

> Hello,
> I would like to have a custom statue of Saint Calogero made, 30 cm in total height (base and niche included), based on the attached image.
> Here are the specifications of my project:
> 3D file: To be created from the image provided (I need a 3D modelling/sculpting service).
> Printing: In high-definition resin (SLA / DLP) to guarantee a very fine level of detail (face, drapery, engravings).
> Finish / Painting: Hand-painted or silver metallic effect for the niche/habit, dark skin tone for the face/hands, and bright colours (red, yellow, green, blue) for the ribbons.
> Could you give me an estimate of the cost and lead time for the 3D modelling, the resin printing and the finishing?
> Thank you in advance for your reply,
> [first name]

### Input 6 (R) — Capability question, large object, no quantity or material

> Bonjour,
> Faites- vous des gabarits grand volume, plus précisément, un fut avec un diamètre de +/- 61cm à l’intérieur et une hauteur de 50 cm ?
> Merci d’avance.
> [nom]

**English translation** (the model was run on the original text):

> Hello,
> Do you make large-volume jigs (gabarits), specifically a drum with an inside diameter of about 61 cm and a height of 50 cm?
> Thank you in advance.
> [name]

### Input 7 (R) — Replacement of an existing object, material suggested by an AI, no file

> Bonjour,
> Je souhaite remplacer à l’identique un globe / abat jour en plastique orange et lisse opaque sphérique d’environ 25cm de diamètre. L’IA me suggère que le meilleur matériau pour le reproduire serait ASA/ABS. Pourriez vous me faire un devis TTC avec frais de port svp? J’habite Bruxelles.
> D’avance je vous remercie.
> Bien cordialement ,
>
> [nom]

**English translation** (the model was run on the original text):

> Hello,
> I would like to replace like for like a spherical, smooth, opaque orange plastic globe / lampshade, about 25 cm in diameter. The AI suggests to me that the best material to reproduce it would be ASA/ABS. Could you please give me a quote including VAT and shipping costs? I live in Brussels.
> Thank you in advance.
> Kind regards,
>
> [name]

### Input 8 (R) — Mirrored parts (2 right + 2 left = 4), STL attached, asks shipping time

> Bonjour,
> Je vous contacte afin de connaitre vos tarifs et vos délais d'envoi pour ce fichier STL.
> Il s'agit de collecteurs d'eau pour les toits ouvrants d'un véhicule. J'aurais donc besoin d'un matériau résistant aux fortes températures sous carrosserie (idéalement de l'ABS).
>
> Pourriez-vous me chiffrer la réalisation de :
>
> -2 exemplaires droits (fichier joint)
>
> -2 exemplaires gauches (symétrie miroir du fichier)
> Soit 4 pièces au total.
>
> Pourriez-vous m'indiquer le devis global ainsi que le délai d'expédition en Belgique?
>
> D'avance merci.
>
> Bien à vous,

**English translation** (the model was run on the original text):

> Hello,
> I am contacting you to find out your prices and shipping times for this STL file.
> These are water collectors for the sunroofs of a vehicle. I would therefore need a material that withstands high temperatures under the bodywork (ideally ABS).
>
> Could you quote the production of:
>
> - 2 right-hand copies (file attached)
>
> - 2 left-hand copies (mirror symmetry of the file)
> That is 4 parts in total.
>
> Could you give me the overall quote and the shipping time to Belgium?
>
> Thank you in advance.
>
> Best regards,

### Input 9 (R) — Contradictory grid size (60 per side vs 360 tiles in total), material open

> Bonjour,
> Je souhaiterai imprimer 6 exemplaires d’une grille pour mosaïques (plastique ou autre matière. Une grille carrée de 60 carreaux carrés sur (L et l), soit 360 carreaux au total, taille carreaux 8mm, espace entre carreaux 1mm.
>
> Si possible, pourriez-vous me faire parvenir un devis?
> Merci d’avance
> [nom]

**English translation** (the model was run on the original text):

> Hello,
> I would like to print 6 copies of a mosaic grid (plastic or other material). A square grid of 60 square tiles by (length and width), i.e. 360 tiles in total, tile size 8 mm, spacing between tiles 1 mm.
>
> If possible, could you send me a quote?
> Thank you in advance
> [name]

### Input 10 (R) — Parts referenced by code, quantities to add up (35+12+3), no file mentioned

> Bonjour,
> j'aimerais connaitre le prix pour 50 petites impressions
> PLA standard, 20% de remplissage, qualité standard, couleur indifférente, aucune finition ni post processing, impression à plat sans support.
>
> Dans le devis avec mes coordonnées pro :
>
> - 35 x Helia5011
> - 12 x Helia 5012
> - 3 x Helia 5013
>
> Merci de me dire votre meilleur prix et aussi le délai.
>
> Bien à vous,
> [nom]

**English translation** (the model was run on the original text):

> Hello,
> I would like to know the price for 50 small prints
> Standard PLA, 20% infill, standard quality, any colour, no finishing or post-processing, printed flat without supports.
>
> In the quote with my business details:
>
> - 35 x Helia5011
> - 12 x Helia 5012
> - 3 x Helia 5013
>
> Please tell me your best price and also the lead time.
>
> Best regards,
> [name]

### Input 11 (R) — Very short, no quantity, no file

> Pièce de remplacement pour karsher k4, en PETG , remplissage max possible

**English translation** (the model was run on the original text):

> Replacement part for a Karsher K4, in PETG, maximum possible infill

### Input 12 (R) — Asks questions rather than ordering, tight tolerance, asks which file format

> Bonjour,
>
> Je souhaiterais faire imprimer un logo mural en PETG noir, d’environ 450 × 355 × 35 mm, idéalement en une seule pièce.
>
> Il comporte aussi plusieurs petits cadres amovibles avec environ 0,20 mm de jeu.
>
> Pouvez-vous me confirmer :
>
> * si l’impression est possible en une pièce ;
> * si vous imprimez en PETG noir ;
> * le prix avec livraison en Belgique ;
> * le format de fichier à vous envoyer.

**English translation** (the model was run on the original text):

> Hello,
>
> I would like to have a wall logo printed in black PETG, about 450 × 355 × 35 mm, ideally in a single piece.
>
> It also has several small removable frames with about 0.20 mm of clearance.
>
> Could you confirm:
>
> * whether printing in one piece is possible;
> * whether you print in black PETG;
> * the price including delivery in Belgium;
> * the file format to send you.

### Input 13 (R) — Very long design brief, CAD service, component sizes that are not the box size

> Projet : Conception et impression 3D d'un boîtier pour capteur environnemental intelligent (prototypage rapide + service fichier 3D)
>
> Nous souhaitons développer un boîtier imprimé en 3D destiné à protéger un système électronique de surveillance environnementale. Ce boîtier sera utilisé pour des essais de terrain, notamment en milieu aquatique (océan) et pourra être fixé sur une planche de surf, un paddle, un kayak ou tout autre support compatible avec les accessoires GoPro.
>
> Le boîtier devra être compact, robuste, résistant aux projections d'eau et adapté à une utilisation en extérieur.
> Composants à intégrer
>
> Le boîtier devra accueillir les composants suivants :
>
> ESP32-CAM (OV2640)
> Carte microcontrôleur avec caméra intégrée. (dimension : 67.6mm *28.3mm)
> Capteur inertiel BNO055 (9 axes)
> Mesure de l'accélération, de l'orientation et des mouvements.
> Batterie-mini power bank (dimension : 100.4mm * 28.7 mm)
> 5 V
> 5000 mAh
> Micro USB
> Tous les composants devront être solidement fixés à l'intérieur du boîtier afin d'éviter tout mouvement pendant l'utilisation.
>
> Exigences de conception
>
> Le boîtier devra comporter :
> un logement dédié pour chaque composant ;
> des supports de fixation (colonnettes ou clips) pour maintenir l'ESP32-CAM et le BNO055 ;
> un compartiment adapté à la batterie LiPo avec système de maintien (bride ou sangle) ;
> une fenêtre transparente en polycarbonate (ou un logement prévu pour son installation) devant la caméra afin de protéger l'objectif contre l'eau et les rayures ;
> un couvercle démontable fixé par vis.
>
> Nous ne souhaitons pas prévoir d'ouverture pour le port USB ni de trou d'accès au bouton RESET, car le boîtier restera fermé pendant son utilisation.
>
> Le boîtier devra intégrer directement une fixation compatible GoPro (3 branches) sur sa face inférieure, afin d'être compatible avec les accessoires standards du marché.
>
> Matériau recommandé
>
> Nous souhaiterions recevoir une proposition utilisant un matériau adapté à une utilisation extérieure, par exemple :
> PETG (préféré),
> ou tout autre matériau offrant une bonne résistance aux UV, à l'humidité et aux chocs.
>
> Dimensions approximatives
>
> Les dimensions pourront être adaptées en fonction des composants。
>
> Objet de la demande
>
> Nous souhaiterions obtenir un devis comprenant :
>
> la conception CAO (3D) du boîtier ;
> la préparation des fichiers STL pour l'impression ;
> l'impression 3D du prototype ;
> le coût estimatif ainsi que le délai de réalisation.
>
> Nous restons disponibles pour fournir les dimensions précises des composants ainsi que toute information complémentaire nécessaire à la conception.

**English translation** (the model was run on the original text):

> Project: Design and 3D printing of an enclosure for a smart environmental sensor (rapid prototyping + 3D file service)
>
> We would like to develop a 3D-printed enclosure to protect an electronic environmental monitoring system. This enclosure will be used for field tests, in particular in an aquatic environment (ocean), and can be attached to a surfboard, paddle board, kayak or any other support compatible with GoPro accessories.
>
> The enclosure must be compact, robust, resistant to water splashes and suited to outdoor use.
> Components to integrate
>
> The enclosure must house the following components:
>
> ESP32-CAM (OV2640)
> Microcontroller board with integrated camera. (dimensions: 67.6mm * 28.3mm)
> BNO055 inertial sensor (9 axes)
> Measures acceleration, orientation and movement.
> Battery – mini power bank (dimensions: 100.4mm * 28.7 mm)
> 5 V
> 5000 mAh
> Micro USB
> All components must be firmly fixed inside the enclosure to prevent any movement during use.
>
> Design requirements
>
> The enclosure must include:
> a dedicated housing for each component;
> mounting supports (posts or clips) to hold the ESP32-CAM and the BNO055;
> a compartment suited to the LiPo battery with a holding system (clamp or strap);
> a transparent polycarbonate window (or a housing prepared for installing one) in front of the camera to protect the lens from water and scratches;
> a removable lid fixed with screws.
>
> We do not wish to include an opening for the USB port or an access hole for the RESET button, as the enclosure will remain closed during use.
>
> The enclosure must directly integrate a GoPro-compatible mount (3 prongs) on its underside, so as to be compatible with standard accessories on the market.
>
> Recommended material
>
> We would like to receive a proposal using a material suited to outdoor use, for example:
> PETG (preferred),
> or any other material offering good resistance to UV, humidity and impacts.
>
> Approximate dimensions
>
> The dimensions can be adapted according to the components.
>
> Purpose of the request
>
> We would like to obtain a quote including:
>
> the CAD (3D) design of the enclosure;
> the preparation of the STL files for printing;
> the 3D printing of the prototype;
> the estimated cost and lead time.
>
> We remain available to provide the precise dimensions of the components as well as any additional information needed for the design.

## Expected answers (written before running)

| # | process_requested | material | quantity | largest_dimension_mm | deadline | missing_info | out_of_scope | Note |
|---|---|---|---|---|---|---|---|---|
| 1 | null | null | 1 | null | null | [material, dimensions, file] | false* | *confirm: can O&D print a full-size car? |
| 2 | null | "PETG" (PP only if offered in large format) | 4 | 554 | null | [] | false | FDM is implied by nozzle/layer terms but not named; colours are not in the schema |
| 3 | null | null | 2 (two boxes, four STL files) | null | null | [material] | false | "résistant" is not a material; 3D files attached, so dimensions are not missing |
| 4 | null | null | 5 (4 + 1) | 122 | null | [material, file] | false | "blanches" is a colour, not a material |
| 5 | "resin" | "résine haute définition" | 1 | 300 | null | [file] | false* | *confirm: does O&D offer 3D modelling and hand painting? A reference image is not a 3D file |
| 6 | null | null | null | 610 | null | [material, quantity, file] | false | A capability question, not an order; 610 is the inside diameter (the height is 500) |
| 7 | null | "ASA/ABS" | 1 | 250 | null | [file] | false | Material comes from an AI suggestion but is what the customer wrote; no 3D file |
| 8 | null | "ABS" | 4 (2 right + 2 mirrored left) | null | null | [] | false | Delivery time is not a deadline; STL attached |
| 9 | null | null | 6 | null (contradictory) | null | [material, dimensions, file] | false | 60 per side would be 3,600 tiles, not 360: contradiction, so null and flagged |
| 10 | null | "PLA" (standard) | 50 (35 + 12 + 3) | null | null | [dimensions, file] | false | Part codes suggest files exist, but the message does not say they are attached |
| 11 | null | "PETG" | null | null | null | [quantity, dimensions, file] | false | Singular "pièce" is ambiguous, so quantity stays null |
| 12 | null | "PETG noir" | 1 | 450 | null | [file] | false | The customer asks which format to send, so no file yet |
| 13 | null | "PETG" | 1 | null | null | [dimensions, file] | false* | *confirm: does O&D offer CAD design? 100.4 mm is the battery, not the box |

## Predictions (written before running)

I expect these failures before running: #9 (the model will pick a grid size instead of flagging the contradiction: F1 or F2), #13 (it may report 100.4 mm, the battery, as the box size: F1), #1, #3, #6 and #11 (it may guess a quantity or a dimension instead of leaving null: F2), #4, #8 and #10 (it may not add the quantities correctly: F1), #5 and #13 (it may mark them out of scope or answer the customer instead of returning JSON: F4 or F5), and some inconsistency between the two runs on the long inputs #2 and #13 (F6).

## Corrections log (dated; never overwrite an expected answer)

**2026-10-05, input 3, quantity.** Expected value corrected from 2 to 4. The customer asks for two boxes made of four printed pieces, and the prompt asks for the total number of pieces, so 4 is the right answer. I first wrote 2 (boxes). This correction was made AFTER seeing the outputs, so it is flagged here and the original row is kept in the table above.

**2026-10-05, input 5, out_of_scope (confirmation, no change).** O&D offers 3D modelling and subcontracts painting, so the expected value (false) stands. Same for input 13: CAD design is offered, so false stands.

AI use: Claude helped me draft and structure this file; the inputs, the runs and the figures are mine.
