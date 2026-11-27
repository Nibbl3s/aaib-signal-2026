# Skills Passport: Daniel Stefirta

Beat: AI in Game Production · Track: 4 ECTS

Thirteen skills. Three checkpoints: end of Weeks 4, 8 and 12.
Rating: 🟢 Confident / 🟡 Getting there / 🔴 Need practice, plus **one sentence of evidence**
(something you did, not how you feel).

## Checkpoint 1, end of Week 4

**What can my tool do now?** Classify production-task lines by layer and AI exposure, quote supporting evidence, and retain results with classified failures.

**What can’t it do reliably?** Make dependable exposure judgements or establish savings in a real studio’s workflow; review and correction times remain unmeasured.

**Which number proves it?** It matched my answer key on 7/15 unique inputs, 46.7%, across 30 calls, while a constant baseline beat its exposure accuracy, 66.7% versus 60.0%.

| # | Skill | Rating | Evidence |
|---|-------|--------|----------|
| 1 | Cost literacy | 🟢 | Priced the five production layers of Death Stranding in € with the formula printed under every number, and ran the EuroShop tier comparison that showed Premium (€9,156/month) beats Budget (€45,276/month) once the €5 error cost is counted. |
| 2 | Capability skepticism | 🟡 | Built a 15-input test set from Kojima Productions job postings with the answers written before the first run, measured my own classifier at 46.7% (7/15 inputs, 30 calls), and found that a no-AI constant beats it on exposure (66.7% vs 60.0%) and that my two-pass protocol could not detect F6 at temperature 0. |
| 3 | Vendor claim detection | 🟡 | Tagged 24 NexusAI claims with reasons and identified five avoidances, applied the FOMO framework to reach a walk-away verdict, and deconstructed Inworld’s game-production pitch to recommend a bounded pilot while separating documented features from untested promises. |
| 4 | Value quantification | 🟡 | Calculated an illustrative Classifier business case with formulas for all four benefit categories, deducted API, setup, maintenance and incremental failure costs, and found a first-year loss of €834.11 and a break-even success rate of 67.5%, while distinguishing assumptions from Kojima’s operating data and freed capacity from cash savings. |

### Week 4 ratings, revisited at Week 8

The table above preserves what I put down in Week 4. Here is how I rate those same four skills now.

| Skill | Week 4 → Week 8 | Reason |
|---|---|---|
| Cost literacy | 🟢 → 🟢 | I can separate a published token price, a gateway-reported charge and the cost someone actually pays. |
| Capability skepticism | 🟡 → 🟢 | I can freeze a test, predict before running it, compare under the same settings and explain why a gain on the old rows is not enough. |
| Vendor claim detection | 🟡 → 🟡 | I can separate marketing from a checkable feature, but I still need practice validating contract terms and product behavior independently. |
| Value quantification | 🟡 → 🟡 | I can price a scenario, but a projected saving means little without a manual baseline and evidence that staff time can be put to use. |

## Checkpoint 2, end of Week 8

**What can my tool do now?** Classify a single game-production task by layer and AI exposure, return evidence from the input, and log two-pass comparisons with failures and usage.

**What can’t it do yet?** Reliably turn sparse task text into staffing or automation decisions, or establish that the prompt revision improves a real production workflow.

**Which number proves it?** On 20 frozen cases run twice per prompt at temperature 0.3, v1 and v2 both scored **22/40 (55%)** on both labels together, and both tied the constant assisted baseline on exposure at **26/40 (65%)**.

**Compared with Week 4:** I had 14/30 joint matches at temperature 0; this time the comparison is v2 against fresh v1 at the same settings, and the old-case gain (16/30 to 18/30) was canceled by the loss on the new cases (6/10 to 4/10), so I kept v1 live.

| # | Skill | Rating | Evidence |
|---|---|---|---|
| 1 | Cost literacy | 🟢 | I used the actual Classifier token counts to separate the US$0.073544 published-rate equivalent for all 80 calls from the gateway’s US$0 charge and the unverified upstream Bedrock bill. |
| 2 | Capability skepticism | 🟢 | I froze the expanded test set and predictions before the AI-assisted rerun, then kept v1 when v2 tied overall and produced four parser-invalid replies instead of two. |
| 3 | Vendor claim detection | 🟡 | After separating Inworld’s documented features from its promotional claims in Week 3, I applied the same test to Northwind by making Copilot prove it can handle the shared mailbox, staff sign-off and audit trail rather than taking those capabilities for granted. |
| 4 | Value quantification | 🟡 | For Northwind, I proposed measuring time to correct assignment against manual triage and counting missed urgent exceptions separately so a lower cost per email cannot stand in for better outcomes. |
| 5 | Market mechanism thinking | 🟡 | In my AI-assisted Room 8 Studio audit, I scored recommendation visibility 12/18 and separated getting onto a buyer’s shortlist from supplier quality or winning a contract. |
| 6 | Cost projection | 🟡 | My Northwind scale model takes monthly operations from about €1,166 at 70 emails per day to €2,694 at 210, with review and rework driving the increase while modeled token spend stays below €5 per month. |
| 7 | Lock-in detection | 🟡 | With AI-prepared tooling, I tested the unchanged Classifier prompt on my ThinkPad and got 0/30 parser-accepted matches from `llama3.2:1b`, which showed that switching where the prompt runs does not preserve usable outputs. |
| 8 | Design defense (integration and architecture) | 🟡 | In my written Northwind defense, I limited the pilot to one mailbox, required staff to check the original before routing, and specified manual Outlook and TMS triage during an outage. |

### Reflection

In Week 1 I looked at what a model could produce and what the tokens would cost. Now I start with who acts on the output, who checks it and what happens when it is wrong or unavailable. The point that clicked for me was that a correct quote and valid formatting can still lead to the wrong decision, so validation and sign-off are different jobs.

Evidence: [Build Checkpoint 2](https://github.com/Nibbl3s/aaib-signal-2026/commit/f08997d25496f8b656f754e85e6bfaaf85ad3d61) and [Signal 8](https://github.com/Nibbl3s/aaib-signal-2026/blob/ab0e895953efea3f5d6295ccea6b65f555580610/students/daniel-stefirta/posts/week-08.md).

*AI assistance: organized evidence and drafted the wording; the ratings and the decision to keep v1 were agreed by me. The Northwind defense was written preparation, not an in-class board defense.*

**Later skill, not rated at this checkpoint:** #9 Attack surface thinking.

## Checkpoint 3, end of Week 12

| # | Skill | Rating | Evidence |
|---|-------|--------|----------|
| 10 | Regulatory reasoning | - | |
| 11 | Cross-domain transfer | - | |
| 12 | Synthesis | - | |
| 13 | Defence | - | |

