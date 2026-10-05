# Week 3 — Vendor claim detection

**Thor Tack** · Beat: AI Cost Decisions for a One-Person DJ & Events Business

Tags: **F** = Fact (specific, checkable) · **A** = Aspiration (future promise or hedged best case) · **V** = Avoidance (sounds like evidence, but dodges the question that would let me check it)

---

## Part 1 — NexusAI proposal: the 16 claims

| # | Claim | Section | My tag | Reasoning | Course reveal |
|---|---|---|---|---|---|
| 1 | "over 200 European companies" | Exec summary | **V** | A count without one name. I can't phone a single one of them, so it can't be checked. It answers "who uses this?" without letting me verify it. | A |
| 2 | "average cost reductions of 25-30% within the first year" | Exec summary | **V** | Stated as a past result ("have helped… achieve"), not a promise, so not quite an aspiration. But "average" of what baseline, over which clients? An average hides the clients who got 0%. Same pattern as the course example "customers typically see reduced costs". | A |
| 3 | "up to 94% accuracy" (forecasting) | Capabilities | **A** | "Up to" = best case, not typical. Also: 94% of what — units, SKUs, weeks? | A |
| 4 | "proprietary machine learning models" | Capabilities | **V** | A category word replacing a name. Tells me nothing about the method. GhentBakery's "AI" turned out to be a moving average. | V |
| 5 | "continuously learns and adapts" | Capabilities | **A** | Describes a desirable behaviour with no retraining schedule, no owner, no way to see it happen. | A |
| 6 | "reducing fuel costs by up to 22%" | Capabilities | **A** | "Up to" again, and it depends on how bad the routes were before. A fleet that's already well planned gets nowhere near 22%. | A |
| 7 | "improving on-time delivery by 35%" | Capabilities | **A** | No "up to", so it reads like a fact. But the table shows it's client self-reported, and +35% from 90% on-time is impossible, so it must be from a bad baseline. | A |
| 8 | "Clients report 40% reduction in picking time within 3 months" | Capabilities | **A** | Self-reported by clients, and 3 months is suspiciously fast for a warehouse re-layout. | A |
| 9 | "accessible through our natural language interface… in plain Dutch, French, or English" | Capabilities | **F** | Checkable in a 10-minute demo: either it answers in Dutch or it doesn't. *But* true ≠ useful. A chatbot on top can hide a simple rules engine underneath. | F |
| 10 | "Forecast accuracy: Up to 94% — Internal benchmarking" | Results table | **V** | The vendor tested its own model on data it chose. The "Based On" column looks like transparency but actually admits there's no independent check. | V |
| 11 | "Client self-reporting" (fuel, on-time, picking) | Results table | **V** | The weakest form of evidence, presented in a table to look like data. Three of five "proven results" rest on it. | V |
| 12 | "trained on 10+ years of European supply chain data" | Tech stack | **V** | Whose data? Which sectors? Was any of it like a Ghent logistics company? Volume without scope. | A/V |
| 13 | "powered by leading LLM technology" | Tech stack | **V** | Deliberately unnamed. The model decides quality, cost per query and where the data goes. Hiding it hides the running cost. | V |
| 14 | "SOC 2 Type II, ISO 27001" | Tech stack | **F** | Real certifications; I can ask for the certificates and the audit date. But they prove security processes, not that the AI is accurate. | F |
| 15 | "money-back guarantee if you don't see measurable improvement in first 90 days" | Next steps | **A** | "Measurable improvement" is undefined, so 0.5% counts. And the guarantee covers the pilot, not the €85,000 implementation or my staff's time. | A |
| 16 | "only 2 pilot slots remaining for Q2 2026" | Next steps | **V** | Artificial scarcity. It pushes me to decide before asking questions. It's the FOMO trigger. | V |

**My count:** 2 Facts · 5 Aspirations · 9 Avoidances. **Course count:** 2 · 9 · 5.

**Where I differ and why:** I tag a past result with no way to check it (claims 1, 2, 12) as Avoidance, following the course's own rule that "customers typically see…" is avoidance, not aspiration. Either way the decision doesn't change: only 2 of 16 claims can be checked before signing, and neither of those two is about whether the AI works.

### The five avoidances that matter most (what the proposal doesn't say)

| # | What's missing | Question I'd ask NexusAI | Why it matters |
|---|---|---|---|
| 1 | **Error rate on *our* data** | "Run the forecast on our last 12 months, blind. What's the error per product per week?" | 94% on their data predicts nothing for us (GhentBakery: 92% on paper, +3% in reality). |
| 2 | **Which LLM, and who pays for the calls** | "Which model powers the chat, and are API costs in the €12,000/month or billed on top?" | Running cost and data flow both depend on it. |
| 3 | **Named references** | "Give me 3 clients I can call, similar size, in Belgium or the Netherlands." | Turns claim 1 from avoidance into fact, or exposes it. |
| 4 | **Exit terms and data ownership** | "If we stop after year 1, what do we get back, in what format, at what cost?" | €252k in year 1 is the entry price; switching cost is the real lock-in. |
| 5 | **Total cost beyond the licence** | "What internal staff time does implementation take, and what does data clean-up cost?" | The proposal lists €252k but no internal hours. The course rule of thumb is that the licence is 30–50% of total cost. |

---

## Part 2 — Case reflection: GhentBakery vs FlandersTextiles

| Dimension | GhentBakery (bought too much) | FlandersTextiles (missed a real opportunity) |
|---|---|---|
| What they evaluated | The vendor pitch only | The vendor pitch only |
| Used a FOMO framework? | No | No |
| Checked the AI fits this task and data? | No: "AI forecasting" turned out to be a moving average | No: never checked that defect detection is a mature use of computer vision |
| Calculated total cost? | No: €48k/year for +3% on an 89%-accurate process | No: never put the €340k/year current loss next to the €116k first-year cost |
| Root cause | Trusted the vendor, no verification | Dismissed the vendor, no specificity |
| Missing question | Q1: what specific problem, measured how? | Q2: what does doing nothing cost us? (€340k/year) |

**What I take from it for my own beat:** the two failures are the same mistake, deciding without numbers. Skepticism isn't saying no; it's asking for the one number that decides it. For a one-person DJ business, the GhentBakery risk is much bigger than the FlandersTextiles one. My volume is small, so most AI subscriptions would automate a problem that's worth a few hours a month. But if a tool fixed something I lose real money on, like missed inquiries, then refusing it out of principle would be the FlandersTextiles mistake.

---

## Part 3 — Real vendor in my beat: InstantDM (Instagram DM automation for DJs)

**Vendor:** InstantDM — "The #1 Instagram DM Automation platform for creators, coaches, and businesses". It has a dedicated page for DJs and event performers and a new "Instagram AI Agent" that says it is powered by Claude.
**Price:** $9.99/month (Legend Pro) or $24.99/month (Trendsetter), 7-day free trial.
**Sources:** instantdm.com/instagram-dm-automation/djs-event-performers and instantdm.com/instagram-ai-agent (read 5 October 2026).

### Claims tagged

| # | Claim (verbatim) | Tag | Reasoning |
|---|---|---|---|
| 1 | Wedding DJ: "Missed 60% of booking inquiries… Bookings per month: 18 (vs 7 before)… Monthly revenue: $21,600 (vs $8,400 before)" | **V** | No name, no handle, no period, no method. And the numbers are suspiciously neat: 7 bookings ÷ 40% answered = 17.5 ≈ 18. That's what you get if you *assume* every unanswered DM would have converted at the same rate, not what you'd measure. |
| 2 | "Average gig rate: $1,200" | **V** | Makes the revenue jump look big. My own rates are €60–80/hour, so a 4-hour gig is €240–320. The same "11 extra bookings" would be worth a quarter of that to me. |
| 3 | "24/7 Booking Agent — Capture every booking inquiry instantly." | **A** | A capability promise. "Capture" ≠ "book". It replies, but whether the reply wins the gig is the real question. |
| 4 | "Before: 2–5% convert → After: 12–18% convert" (AI agent page) | **V** | Converts from what to what — DM to booking, DM to link click? No sample, no source. |
| 5 | "Before: 2–6 hours → After: under 30s" response time | **F** | Checkable in the free trial with a second account: send a DM, time the reply. Likely true, because an auto-reply is instant by design. |
| 6 | "Meet Claude with Instagram" | **F** | The model family is named, which is better than NexusAI's "leading LLM technology". The version isn't, and neither is who pays for the tokens. |
| 7 | "it gracefully lets the user know and can either escalate to you directly…" | **A** | "Can" — describes what it's designed to do. My Week 2 Build shows the risk is the opposite: a confident answer where it should have said "I don't know" (said decks were on site when they weren't). |
| 8 | "Trusted by 30,000+ creators & brands" | **V** | Count without names; says nothing about DJs or Belgium. |
| 9 | "100% Official API", "Meta Business Partner" | **F** | Checkable in Meta's partner directory. Relevant: an unofficial bot can get your Instagram account banned. |

**Count:** 3 Facts · 2 Aspirations · 4 Avoidances. The facts are about *speed and plumbing*. Every claim about *bookings and money* is an avoidance.

### FOMO test — the 5 questions

| # | Question | Answer for my business | → |
|---|---|---|---|
| 1 | What specific problem does it solve? | "Missed or slow replies to booking DMs." Do I actually have that problem? My real inquiries come through my booking form and e-mail (10 serious form answers in 15 months + mail). I don't log Instagram inquiries at all, so I have no idea how many I miss. **I can't name the current metric**, which is the red flag. | Don't buy yet |
| 2 | What happens if I do nothing for 6 months? | Probably nothing measurable: my replies to inquiries already go out within a day (same evening for the Kick-Off, next morning for the wedding). The only risk is the one their case study assumes, that DMs go unanswered for days. | Wait |
| 3 | Can I verify the claims myself? | Partly. The 7-day free trial lets me test speed and the Dutch-language replies on my own account. The booking/revenue claims can't be verified. | Pilot only, not buy |
| 4 | Total cost? | $9.99–24.99/month (€110–280/year) plus setting up flows (I estimate 3–4 hours), plus checking that the AI doesn't quote prices or dates I didn't approve. That's the same error-cost risk I priced at about €150 per wrong quote in Week 1. | Licence is the small part |
| 5 | Simpler 80% solution? | Yes: Instagram's own free auto-reply with a link to my booking form. That gives the instant response *and* sends people to the form, which collects date, times, venue and gear in fixed fields. That's exactly what my Build showed AI is worst at pulling out of free text. | Buy simpler |

### Verdict: **walk away (for now)**, with a one-week free check first

InstantDM isn't fake. The speed and the official API are real, and for a DJ who actually gets dozens of booking DMs a week it could be worth $10 a month. But every claim about bookings and revenue rests on an anonymous, too-neat case study built on a $1,200 average gig, and I can't name the problem it would solve for me. The cheaper and safer move is Instagram's free auto-reply pointing to my form. I'd only revisit InstantDM if I log my Instagram inquiries for two months and find I'm actually missing some.

---

*AI use: Claude drafted the tagging, reasoning and verdicts in this document, based on the course materials, InstantDM's own pages and my booking data. I reviewed them and agree with them.*
