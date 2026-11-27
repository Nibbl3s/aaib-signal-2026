#!/usr/bin/env python3
"""Run the 13-input test set twice (run A, run B) on one model, same prompt v1.
Works with any OpenAI-compatible chat endpoint (Ollama, LM Studio, Google's compat endpoint).
Standard library only. Usage:

  Local (Ollama):  python3 run_build.py --model MODEL_NAME --label local
  Cloud (Google):  python3 run_build.py --model gemini-3.5-flash-lite --label cloud \
                     --base-url https://generativelanguage.googleapis.com/v1beta/openai --key YOUR_KEY

Writes results-<label>.json (raw outputs, token counts, seconds) next to the script.
Customer messages are the anonymised ones from your test set.
"""
import argparse, json, time, urllib.request, urllib.error

PROMPT = "You are an intake assistant for O&D Impression 3D, a digital manufacturing\ncompany offering FDM, resin, SLS, CNC and laser cutting.\n\nRead the customer message and extract the fields below.\nReply with a single JSON object and nothing else.\n\nFields:\n- process_requested: one of \"FDM\", \"resin\", \"SLS\", \"CNC\", \"laser\",\n  or null if the customer did not name a process\n- material: as written by the customer, or null\n- quantity: total number of pieces as an integer, or null\n- largest_dimension_mm: largest overall dimension of the finished part\n  in millimetres (convert cm and inches), or null\n- deadline: a date the customer needs the parts by, as written, or null.\n  A question about delivery time is not a deadline.\n- missing_info: list drawn from [\"material\", \"quantity\", \"dimensions\", \"file\"]\n- out_of_scope: true if the request is not something the company offers,\n  otherwise false\n\nRules:\n1. Never guess. If a value is not stated, use null.\n2. Add \"material\" to missing_info if material is null, and \"quantity\" if\n   quantity is null.\n3. Add \"file\" to missing_info unless the message says a 3D file, technical\n   drawing or model is attached or provided. A reference photo or a logo\n   image is not a 3D file.\n4. Add \"dimensions\" to missing_info only if largest_dimension_mm is null AND\n   no 3D file is attached.\n5. If the customer gives contradictory values for a field, use null and\n   add the field to missing_info.\n6. process_requested and deadline are optional: never list them in\n   missing_info.\n7. Never give a price, a price range or a recommendation.\n8. Messages may be in French, Dutch, German or English.\n   Keep the JSON keys in English."

INPUTS = {
 "1": "Hello,\n\nI am interested in having a full-scale, 1:1 model of a car produced using 3D printing and delivered to Brussels. Is this something you would be able to do?\nCould you please provide an estimated cost for both the 3D printing and transportation to Brussels? I would appreciate also an indicative time for the delivery as soon as we make the order.\n\nThank you in advance,\n[nom]",
 "2": "Bonjour,\n\nJe souhaite faire imprimer quatre bacs de poubelle (cuisine) en PETG, ou en PP si vous le proposez en grand format, chacun en une seule pièce, debout :\n- 1 × bac_orange.stl : 228 × 168 × 484 mm hors tout, 1,05 dm³ de matière (≈ 1,3 kg en PETG)\n- 1 × bac_bleu.stl : 228 × 348 × 554 mm, 1,84 dm³ (≈ 2,3 kg)\n- 2 × bac_blanc_jaune_P60.stl : 228 × 258 × 524 mm, 1,44 dm³ (≈ 1,8 kg chacun)\nParois de 3 mm et fond de 4 mm, à imprimer pleins (périmètres uniquement, sans remplissage), buse 0,6 ou 0,8 mm, couches 0,3 à 0,4 mm, légère sur-extrusion : les bacs doivent être étanches à l'eau. Supports uniquement sous les deux pattes de suspension (porte-à-faux de 6 mm en haut des faces avant et arrière) ; rien d'autre n'en demande. Couleur : une par bac si possible (orange, bleu, blanc, jaune), sinon indifférent.\nLes fichiers STL et 3MF (unités mm) et une fiche d'impression d'une page sont joints. Pouvez-vous m'indiquer prix, délai, les couleurs (idealement les memes que les bacs bruxelles, soit orange, blanc, jaune et blue (sauf si ceci a un impact important sur le prix, dans ce cas la couleur la moins chère) et matière proposée ?\n\nMerci d'avance,",
 "3": "J'ai un tout petit projet d'impression d'une boîte avec charnière qui vient s'attacher sur une caméra vidéo. Je joins 4 fichiers STL à imprimer, qui composent 2 boîtes avec des différences de tolérance minimes. Je souhaite un matériau résistant.\nJe n'ai jamais créé de fichier pour impression 3D auparavant, n'hésitez pas à me dire si ça ne va pas.",
 "4": "Bonjour, je voudrais faire imprimer 4 plaquettes blanches de 0.5 mm d’épaisseur – 3 cm de haut et 4,5 cm de large avec uniquement le pictogramme du logo en couleurs et 1 pièce de 0.5 mm d’épaisseur – 2.5 cm de haut et 12.2 cm de large avec le logo [entreprise] en couleur.",
 "5": "Bonjour,\nJe souhaite faire réaliser une statue personnalisée de Saint Calogero d'une hauteur totale de 30 cm (socle et niche compris), sur la base du visuel ci-joint.\nVoici les spécifications de mon projet :\nFichier 3D : À créer d'après l'image fournie (besoin d'un service de modélisation/sculpture 3D).\nImpression : En résine haute définition (SLA / DLP) pour garantir un niveau de détail très fin (visage, drapés, gravures).\nFinition / Peinture : Rendu peint à la main ou effet métallisé argenté pour la niche/habit, carnation foncée pour le visage/mains, et couleurs vives (rouge, jaune, vert, bleu) pour les rubans.\nPourriez-vous me faire une estimation du coût et du délai pour la partie modélisation 3D, l'impression résine et la finition ?\nMerci d'avance pour votre retour,\n[prénom]",
 "6": "Bonjour,\nFaites- vous des gabarits grand volume, plus précisément, un fut avec un diamètre de +/- 61cm à l’intérieur et une hauteur de 50 cm ?\nMerci d’avance.\n[nom]",
 "7": "Bonjour,\nJe souhaite remplacer à l’identique un globe / abat jour en plastique orange et lisse opaque sphérique d’environ 25cm de diamètre. L’IA me suggère que le meilleur matériau pour le reproduire serait ASA/ABS. Pourriez vous me faire un devis TTC avec frais de port svp? J’habite Bruxelles.\nD’avance je vous remercie.\nBien cordialement ,\n\n[nom]",
 "8": "Bonjour,\nJe vous contacte afin de connaitre vos tarifs et vos délais d'envoi pour ce fichier STL.\nIl s'agit de collecteurs d'eau pour les toits ouvrants d'un véhicule. J'aurais donc besoin d'un matériau résistant aux fortes températures sous carrosserie (idéalement de l'ABS).\n\nPourriez-vous me chiffrer la réalisation de :\n\n-2 exemplaires droits (fichier joint)\n\n-2 exemplaires gauches (symétrie miroir du fichier)\nSoit 4 pièces au total.\n\nPourriez-vous m'indiquer le devis global ainsi que le délai d'expédition en Belgique?\n\nD'avance merci.\n\nBien à vous,",
 "9": "Bonjour,\nJe souhaiterai imprimer 6 exemplaires d’une grille pour mosaïques (plastique ou autre matière. Une grille carrée de 60 carreaux carrés sur (L et l), soit 360 carreaux au total, taille carreaux 8mm, espace entre carreaux 1mm.\n\nSi possible, pourriez-vous me faire parvenir un devis?\nMerci d’avance\n[nom]",
 "10": "Bonjour,\nj'aimerais connaitre le prix pour 50 petites impressions\nPLA standard, 20% de remplissage, qualité standard, couleur indifférente, aucune finition ni post processing, impression à plat sans support.\n\nDans le devis avec mes coordonnées pro :\n\n- 35 x Helia5011\n- 12 x Helia 5012\n- 3 x Helia 5013\n\nMerci de me dire votre meilleur prix et aussi le délai.\n\nBien à vous,\n[nom]",
 "11": "Pièce de remplacement pour karsher k4, en PETG , remplissage max possible",
 "12": "Bonjour,\n\nJe souhaiterais faire imprimer un logo mural en PETG noir, d’environ 450 × 355 × 35 mm, idéalement en une seule pièce.\n\nIl comporte aussi plusieurs petits cadres amovibles avec environ 0,20 mm de jeu.\n\nPouvez-vous me confirmer :\n\n* si l’impression est possible en une pièce ;\n* si vous imprimez en PETG noir ;\n* le prix avec livraison en Belgique ;\n* le format de fichier à vous envoyer.",
 "13": "Projet : Conception et impression 3D d'un boîtier pour capteur environnemental intelligent (prototypage rapide + service fichier 3D)\n\nNous souhaitons développer un boîtier imprimé en 3D destiné à protéger un système électronique de surveillance environnementale. Ce boîtier sera utilisé pour des essais de terrain, notamment en milieu aquatique (océan) et pourra être fixé sur une planche de surf, un paddle, un kayak ou tout autre support compatible avec les accessoires GoPro.\n\nLe boîtier devra être compact, robuste, résistant aux projections d'eau et adapté à une utilisation en extérieur.\nComposants à intégrer\n\nLe boîtier devra accueillir les composants suivants :\n\nESP32-CAM (OV2640)\nCarte microcontrôleur avec caméra intégrée. (dimension : 67.6mm *28.3mm)\nCapteur inertiel BNO055 (9 axes)\nMesure de l'accélération, de l'orientation et des mouvements.\nBatterie-mini power bank (dimension : 100.4mm * 28.7 mm)\n5 V\n5000 mAh\nMicro USB\nTous les composants devront être solidement fixés à l'intérieur du boîtier afin d'éviter tout mouvement pendant l'utilisation.\n\nExigences de conception\n\nLe boîtier devra comporter :\nun logement dédié pour chaque composant ;\ndes supports de fixation (colonnettes ou clips) pour maintenir l'ESP32-CAM et le BNO055 ;\nun compartiment adapté à la batterie LiPo avec système de maintien (bride ou sangle) ;\nune fenêtre transparente en polycarbonate (ou un logement prévu pour son installation) devant la caméra afin de protéger l'objectif contre l'eau et les rayures ;\nun couvercle démontable fixé par vis.\n\nNous ne souhaitons pas prévoir d'ouverture pour le port USB ni de trou d'accès au bouton RESET, car le boîtier restera fermé pendant son utilisation.\n\nLe boîtier devra intégrer directement une fixation compatible GoPro (3 branches) sur sa face inférieure, afin d'être compatible avec les accessoires standards du marché.\n\nMatériau recommandé\n\nNous souhaiterions recevoir une proposition utilisant un matériau adapté à une utilisation extérieure, par exemple :\nPETG (préféré),\nou tout autre matériau offrant une bonne résistance aux UV, à l'humidité et aux chocs.\n\nDimensions approximatives\n\nLes dimensions pourront être adaptées en fonction des composants。\n\nObjet de la demande\n\nNous souhaiterions obtenir un devis comprenant :\n\nla conception CAO (3D) du boîtier ;\nla préparation des fichiers STL pour l'impression ;\nl'impression 3D du prototype ;\nle coût estimatif ainsi que le délai de réalisation.\n\nNous restons disponibles pour fournir les dimensions précises des composants ainsi que toute information complémentaire nécessaire à la conception."
}

ap = argparse.ArgumentParser()
ap.add_argument("--model", required=True)
ap.add_argument("--label", default="run")
ap.add_argument("--base-url", default="http://localhost:11434/v1")
ap.add_argument("--key", default="none")
ap.add_argument("--only", type=int, help="run only this input number (quick test)")
a = ap.parse_args()

def call(msg):
    body = {"model": a.model, "messages": [
        {"role": "system", "content": PROMPT},
        {"role": "user", "content": msg}]}
    req = urllib.request.Request(a.base_url.rstrip("/") + "/chat/completions",
        data=json.dumps(body).encode(), method="POST",
        headers={"Content-Type": "application/json", "Authorization": "Bearer " + a.key})
    t = time.time()
    try:
        with urllib.request.urlopen(req, timeout=900) as r:
            j = json.load(r)
        out = j["choices"][0]["message"]["content"]
        u = j.get("usage", {})
        return {"output": out, "prompt_tokens": u.get("prompt_tokens"),
                "completion_tokens": u.get("completion_tokens"),
                "seconds": round(time.time() - t, 1), "model_returned": j.get("model")}
    except urllib.error.HTTPError as e:
        return {"output": None, "error": "HTTP %s: %s" % (e.code, e.read().decode()[:300])}
    except Exception as e:
        return {"output": None, "error": str(e)}

results = []
nums = [a.only] if a.only else sorted(int(k) for k in INPUTS)
for n in nums:
    for run in ("A", "B"):
        r = call(INPUTS[str(n)])
        r.update({"input": n, "run": run})
        results.append(r)
        print("input %2d run %s  %5ss  %s" % (n, run, r.get("seconds", "-"),
              (r["output"] or r.get("error", ""))[:90].replace("\n", " ")))
        json.dump({"model": a.model, "label": a.label, "results": results},
                  open("results-%s.json" % a.label, "w"), ensure_ascii=False, indent=1)
print("\nDone. Send me the file results-%s.json" % a.label)
