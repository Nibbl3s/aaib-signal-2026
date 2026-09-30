# Build Test Set: AI Homogenization Detector & Voice Restoration Tool

## Input 1: Raw Novel Excerpt (Expected: Natural)
- **Source:** Direct excerpt from my novel draft ("Chapter One · Victor").
- **Text:** Don’t let go…
Once again, my hand strained towards his. Shattered glass bit into my skin, and a sharp sting made my fingers claw.
I mouthed help, but no sound came out. My legs scrabbled against the cold wall as I tried to haul myself up.
P-please...don’t... I whispered.
But he only held on, suspended me between life and death.
In the blink of an eye, our hands fell apart- a single movement had determined my fate forever. I watched the figure shrink against the night sky as gravity pulled my body down—crack.
I gasped.
I clutched my chest, heart battering my ribs. I searched the cabin for him. Maybe he was still here, then the train whistle blasted, snapping me back. 
Train...Right... I sank into the scratchy cloth seat. It was just a dream.

- **Expected Answer:** 
  - Verdict: Natural
  - Flagged AI-isms: None
  - Structural Rhythm & Pacing: Grounded, authentic human pacing with uneven, emotionally driven sentence lengths.

## Input 2: Second Novel Excerpt / Father Scene (Expected: Natural)
- **Source:** Direct excerpt from my draft ("After class, I walked outside...").
- **Text:**  After class, I walked outside in the courtyard. The gate up ahead open wide, cars passing by and students pulling out their bicycle and drove off---- few of them.

I heard shouting and cheering from the football field- students were kicking the ball, passing it to one another. But Brendon stood tall among them, bragging, pushing others away with his strong shoulder like a bloody bull.

Those lads were wild after class, as if they were suppressed.

“Victor, honey.” Then a familiar voice called.

“Father?” He picked me up today?

I walked up to him, confused. “I thought you will be busy?”

“Oh, honey,” he chirped. “I left early just to see you” he landed his hands on my shoulders. “Was it hard? At your first week.” His eyes looked soft, but I just nodded as my eyes wandered elsewhere.

“Let’s go; your mother is making your favourite dish!” he guided me to our car.

I smiled, even though I didn't know what dish it was.

The whole way home, we spoke about what I had done at school, typical stuff; however the air in the air was much more breathable, and I think he seemed to like how I beat Grace.

He was generally happy for me, I guess.

The town seemed much livelier than what I last saw. Some were walking their dogs. They look so fluffy...

And there was a child pulling her mother's dress for a popsicle; whining and crying won’t help, heh. dumb girl.

“Honey? Would you like a popsicle?”

“Hm,” I look at him with raised brows. “Popsicle? Am I not too old for that?”

“Hahahaha, nothing it’s too old for my dearest.”

I let out a smile, feeling giddy in my chest. “Thank you! Father”

We got off the moto and got ourselves a red popsicle.

Strawberry tasted sweet and chilling, perfect for the early autumn breeze. But my father made a weird face.

“What’s wrong, Father?”

He turned with a goofy smile; icy eyes arched into crescents.

“Brain freeze.”
- **Expected Answer:** 
  - Verdict: Natural
  - Flagged AI-isms: None
  - Structural Rhythm & Pacing: Conversational, distinct character dialogue and idiosyncratic observations without sterile templates.

## Input 3: Speculative Fiction / Reddit Short Story (Expected: Natural)
- **Source:** Public forum fiction excerpt ("The City of Damockles") by Patient_Ad8850 from r/shortstories on reddit.com

- **Text:** The City of Damokles
I am going out for a walk with my dog, for a quick cigarette, trying not to look up. 

"The City of Damokles", as people know it, lives in constant dread. Those literal Swords hanging above us, visible on the cloudy sky. Like fangs from god.

There are three unwritten rules: don't look up, don't go under one, and don’t talk about them.

They are fixed to the sky as if nailed there, yet sometimes they seem to glide, moving silently. You would expect them to make some grand, heavy noise... but no. Although it is hard to be sure, nobody is stupid enough to stare for long.

The worst part? Most people act as if they are not there. Nobody talks about it. As the act of acknowledging them would bring Doom to you. Impending “Doom” and “Judgement” are how most people think of it.

I would like to believe this city is news worldwide, but I am quite sure nobody cares… maybe they did initially, but people get bored fast. And, let’s be honest: it is almost impossible to get people to talk out-loud about those things, or even consider taking a picture. 
How would anybody from outside Damokles know?

Everybody is terrified, but what can you do about it? Life goes on while we wait for our Judgment.
- **Expected Answer:** 
  - Verdict: Natural
  - Flagged AI-isms: None (or minor common words used natively).
  - Structural Rhythm & Pacing: Atmospheric narrative flow, driven by personal voice.
 
## Input 4: AI-Polished Version of Novel Excerpt (Expected: Homogenized)
- **Source:** A version of Input 1 run through an LLM with a generic "polish for clarity" prompt.
- **Text:** “Don’t let go…”
Once again, my hand strained toward his. Shattered glass bit deep into my skin, the sharp sting forcing my fingers to claw at empty air. I mouthed help, but the sound died in my throat. My legs scrabbled frantically against the freezing wall, desperately trying to haul my weight upward.
“P-please… don’t…” I whispered.
He held on, suspending me in the agonizing space between life and death. Then, in the blink of an eye, our grip failed. A single, slipping motion sealed my fate forever. I watched his silhouette shrink against the massive night sky as gravity claimed me, pulling my body down into the dark until—crack.
I gasped, bolting upright.
My hand flew to my chest, my heart battering violently against my ribs. I frantically scanned the dim cabin for him, half-expecting to see his face. Then a sharp train whistle blasted through the air, snapping me back to reality.
The train. Right. I collapsed back into the scratchy cloth seat, exhaling slowly. It was just a dream.
- **Expected Answer:** 
  - Verdict: Homogenized
  - Flagged AI-isms: [List added smoothing buzzwords like 'delve', 'tapestry', etc.]
  - Structural Rhythm & Pacing: Overly symmetrical, smoothed out, and lacking emotional friction.

## Input 5: Heavy Corporate/AI Text (Expected: Homogenized)
- **Source:** Strongly generated Google AI text.
- **Text:** The streetlamp outside the cafe flickered with a rhythmic hum, casting a warm amber glow over Maya as she waited out the sudden autumn downpour. She was thoroughly engrossed in a worn, vintage paperback, oblivious to the storm outside.
When the heavy glass door swung open, a gust of wind brought Julian inside. Dripping wet and breathless, he held a completely ruined, inside-out umbrella. He looked around the crowded cafe for an empty seat, but every table was taken—except for the small wooden chair directly across from Maya.
"Mind if I sit here?" Julian asked, gesturing to the empty chair. "Everywhere else is soaked or occupied."
Maya looked up from her book, her eyes dropping to his mangled umbrella. A small smile tugged at her lips. "Only if you promise not to shake like a wet dog," she teased, closing her book.
Julian laughed, a low, easy sound that instantly cut through the chill of the evening. "Deal. I’m Julian."
"Maya."
What began as a polite necessity quickly dissolved into an effortless conversation. They talked about everything and nothing—the terrible local weather, their favorite hidden spots in the city, and the books that shaped them. Julian ordered two hot chocolates, and by the time the mugs were empty, the rain had completely stopped.
The city outside was now quiet, the wet pavement reflecting the neon signs like a mirror. Julian stood up, suddenly hyper-aware that their accidental sanctuary was closing for the night.
"I know this is forward," Julian said, rubbing the back of his neck nervously. "But my umbrella is broken, and I have a feeling I’m going to need someone to share a dry path with from now on. Would you want to get coffee again tomorrow? Somewhere drier?"
Maya looked at him, her heart doing a soft, unfamiliar flip. She picked up her pen, opened the back cover of her paperback, and quickly scribbled her number. She tore the page out and handed it to him.
"Only if it rains again," Maya whispered, her eyes shining.
Julian smiled, tucking the paper safely into his jacket pocket. "Then I'll pray for a storm."
- **Expected Answer:** 
  - Verdict: Homogenized
  - Flagged AI-isms: "landscape", "delve", "multifaceted", "tapestry", "seamless", "groundbreaking"
  - Structural Rhythm & Pacing: Classic AI buzzword density and predictable rule-of-three flow.

## Input 6: Recursive Self-Correction Test (Expected: Natural / Voice-Preserved Restraint)
- **Source:** The editorial suggested revision generated by the tool in Part 2 of Input 1, fed back into the tool to test for over-editing or "AI-ism creep."
- **Text:** 
  > Don't let go… Once again, my hand strained towards his. Shattered glass bit into my skin, and a sharp sting made my fingers claw. I mouthed help, but no sound came out. My legs scrabbled against the cold wall as I tried to haul myself up.

"P-please... don't..." I whispered.

But he only held on, suspending me between life and death. In the blink of an eye, our hands fell apart—a single movement had determined my fate forever. I watched the figure shrink against the night sky as gravity pulled my body down—crack.

I gasped. I clutched my chest, heart battering my ribs. I searched the cabin for him. Maybe he was still here—then the train whistle blasted, snapping me back.

Train... Right...

I sank into the scratchy cloth seat. It was just a dream.
- **Expected Answer:** 
  - Verdict: Natural (with lightweight mechanical suggestions only)
  - Flagged AI-isms: None (Confirms tool resists over-editing, avoids synthetic buzzwords, and leaves human stutters and jagged rhythm intact).
  - Structural Rhythm & Pacing: Preserves irregular human breathlessness, abrupt dream-to-waking cuts, and deflated closure.

## Input 7: Recursive Self-Correction Test — Speculative Fiction (Expected: Natural / Restraint)
- **Source:** The editorial suggested revision generated by the tool for "The City of Damokles" (Input 3), fed back into the tool to verify that it does not over-edit or introduce synthetic prose.
- **Text:** 
  > The City of Damokles

I am going out for a walk with my dog, for a quick cigarette, trying not to look up.

"The City of Damokles," as people know it, lives in constant dread. Those literal Swords hang above us, visible in the cloudy sky. Like fangs from god.

There are three unwritten rules: don't look up, don't go under one, and don't talk about them.

They are fixed to the sky as if nailed there, yet sometimes they seem to glide, moving silently. You would expect them to make some grand, heavy noise... but no. It is hard to be sure, though; nobody is stupid enough to stare for long.

The worst part? Most people act as if they are not there. Nobody talks about it, as if acknowledging them would bring Doom to you. Impending "Doom" and "Judgment" are how most people think of it.

I would like to believe this city is news worldwide, but I am quite sure nobody cares… maybe they did initially, but people get bored fast. And, let's be honest: it is almost impossible to get people to talk out loud about those things, or even consider taking a picture.

How would anybody from outside Damokles know?

Everybody is terrified, but what can you do about it? Life goes on while we wait for our Judgment.
- **Expected Answer:** 
  - Verdict: Natural
  - Flagged AI-isms: None (Confirms the tool maintains editorial restraint, preserves the deadpan dark-comedy tone, and avoids injecting generic AI transitions or buzzwords).
  - Structural Rhythm & Pacing: Preserves the casual shrug ending, rule lists, and off-kilter similes ("like fangs from god").

 
