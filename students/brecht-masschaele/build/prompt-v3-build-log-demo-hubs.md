### Run 0b — anonymised demo hubs — 21 Oct 2026 (build observation, not scored)

**Brief:** Have Claude build anonymised hubs (Coordination Hub + Coach Hub) to demo without exposing any real student, staff or company data.
**Model used:** Claude (Opus, claude.ai with Projects + device access)
**Inputs tested:** one prompt plus one follow-up, run once. So there's no F6 check and **no success rate**. The expected results below are the requirements in my own prompt, not answers written down beforehand.

**The prompt (verbatim, typos included):**

> create 2 completely new, anonimized hubs, that seem entirely GDPR-proof. therefore, I first need a separate folder in the subfolder 'Claude outputs'. Call it 'Formal Demo'. Create an Excel file based on the original Worklist. first duplicate it, then replace all student names with celebrities names. replace all companies with well-known high-end business brands, such as Etihad. Replace all coach names with Coach A, Coach B, Coach C, etc. and mentor names with Mentor A, Mentor B, etc. Make up addresses alike. Flag what still needs my attention GDPR wise. then create the hubs with all tools, applications etc. write a short fictional Research Plan so I can run the feedback tool live. Give Jan Algoed credits where credits are due. can you link these 2 new hubs to each other? if this demo coach ticks certain tasks, I want it to appear and become visible in the coordination hub. this might convince them of the ingenuity

**What happened before the build:** Claude didn't start building. It sent back a plan and five decisions for me to make: celebrities or not, fake contact formats, real colleagues → role labels, and whether to add demo content. I answered them in one reply, and only then did it build.

| # | Requirement (short label) | Expected | Got | Verdict | Failure code |
|---|---|---|---|---|---|
| 1 | Folder *Claude outputs › Formal Demo* | Folder created, nothing else touched | Created; the live worklist was left alone | ✓ | — |
| 2 | Students → celebrity names | Celebrity names | **Pushed back:** living celebrities are still personal data, and next to made-up grades and "at risk" flags they're worse. It proposed historical figures (GDPR doesn't cover people who have died). I agreed. | ✓ (better than my instruction) | — |
| 3 | Companies → high-end brands, made-up addresses | Brand names, fake details | Luxury brands. Every contact became `@example.com` / `+00` and the cities are made up, so no draft mail can reach a real company | ✓ | — |
| 4 | Coaches → Coach A…, mentors → Mentor A… | Letters instead of names | Coach A–S, Mentor A…, plus Expert A–I. Coordinators became role labels (my choice after its suggestion). File author, SharePoint details and hidden content were also stripped. | ✓ | — |
| 5 | "Entirely GDPR-proof" + flag what still needs attention | Fully anonymous, or an honest list | **Not fully anonymous, but flagged honestly.** A **GDPR check** tab listing 3 residual risks: real BAP research questions (company swapped only), real teaching volumes per coach, small groups (ORM, 5 resit students) that still point to one person | ✓ (flagged) | — |
| 6 | Hubs "with all tools, applications" | Same design, tabs and tools | Both hubs rebuilt with tasks, draft mails, gradebook, Research Plan feedback, Socratic review, source audit, feedback check and assistant. A "Fictional demo data" label was added and all links to the real setup were removed. | ✓ | — |
| 7 | Fictional Research Plan for the live feedback demo | A short plan the tool can review | A plan for "Leo Tolstoy" with weak spots added on purpose (planning past the week-9 deadline, 200 survey responses) | ✓ | — |
| 8 | Credit to Jan Algoed | Visible credit | "Coach tools based on the BAP Coach Assistant by Jan Algoed" appears on both hubs, the tools and the Word files they produce | ✓ | — |
| 9 | Link the hubs: coach ticks visible in Coordination Hub | Ticks appear in the Coordination Hub | Two pages can't share data directly. It offered a choice, and I took a **Sync now** button that starts an AI task copying the ticks across in about 1–2 minutes. It only works from the hub owner's account. | ✓ (with limits) | — |
| 10 | Week-3 company check in the demo Coach Hub (found while testing) | Question list stays open after ticking "concern" | The list closed after every tick | ✗ | F4 |

**Result:** 9 of 10 requirements met (not scored: one run, no expected answers written beforehand).

**What surprised me:**
> The most useful output wasn't a hub but a *refusal to follow my instruction blindly*. "Celebrity names" sounded anonymous to me, and it isn't. Claude also didn't pretend the result was "entirely GDPR-proof": it listed exactly what an insider could still recognise. Swapping names is fast. Judging what's still recognisable stays a human job, and the tool made that job visible instead of hiding it.

**The failure that would have mattered most in real use, and why:**
> Not the F4. It's #5: the real BAP research questions left in the "anonymous" file. Shown outside Artevelde, a colleague or company could recognise a student's project. It was flagged, not fixed. A demo is only as safe as the person who reads the GDPR check tab before presenting it. Before any external demo, the BAP topics need rewriting.

