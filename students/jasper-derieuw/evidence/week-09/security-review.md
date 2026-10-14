---
week: 9
title: "Evidence - Security Review of My Week 8 Importer Design"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Attack surface thinking"
date: 2026-10-14
---

# Security Review: My Own Week 8 Design

The design under review is my [Week 8 architecture](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/architecture.md): an Antwerp importer screening 1,500 supplier invoices a month. Claude Sonnet 5.5 pre-fills the fields, a bought screening service matches names against the EU list, rules decide the route, and analysts check every invoice (H1: 2 minutes, H2: 6 minutes). Where I have evidence from attacking my own Build, I use it ([Build log, Attack](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/build/log-v1.md)).

## 1. Four-threat audit

**Prompt injection.** No one types into this system: there is no chat box. User input reaches the AI only as invoice text, and the supplier writes that text. The prompt holds rules and a public reference list, no secrets. The worst thing injection could do is make the model say "clear" for a sanctioned supplier. In my attacks that worked on llama3.2 (1 of 2 runs) and failed on Sonnet 5.5 (0 of 4 injection runs).

**Data leakage.** Every call sends invoice text to Anthropic: supplier names, prices, and sometimes names of people (directors, beneficial owners). Under the Commercial Terms Anthropic does not train on it (Week 7). Supplier names also go to the screening vendor, whose terms describe no export process (Week 7). There are no user sessions to bleed between: each call is one invoice. The most sensitive data is supplier pricing plus personal names.

**Shadow AI.** The 2 analysts can open a free chatbot in another tab. The pressure comes during month-end backlogs and outages, when every invoice falls back to the 6-minute manual check (about 150 hours a month). The scenario company has no AI usage policy, and nothing would tell it.

**Confidently-wrong outputs.** The AI pre-fills fields that an analyst confirms in 2 minutes at H1, about 1,050 rows a month. In my runs a wrong answer looked as tidy as a right one (Run 3), and on a transshipped invoice Sonnet 5.5 stated "Japan" as the origin where the documents conflict (Run 4, input D). The importer, not the AI provider, is liable for the customs declaration and the sanctions check; Anthropic does not warrant outputs as accurate (Commercial Terms L.2).

## 2. Attack-surface map

```
INTERFACE    Teams / SharePoint list, H1 (2 min) and H2 (6 min)
             [CW-1] H1: about 1,050 AI "clear" rows a month confirmed in 2 minutes
             [SA-1] analysts paste invoices into a free chatbot when the queue backs up
                ▲
INTEGRATION  Script every 15 min → screening service → routing rules
             [PI-2] near-match + fuzzy-match miss + AI "clear" → only an H1 check
             [PI-3] a model switch (Week 7 exit plan) can reopen injection
                ▲
AI MODEL     Claude Sonnet 5.5 (L), prompt v2
             [DL-1] invoice text, including names of people, sent to the API
             [CW-2] a confident origin on a transshipped invoice
                ▲
DATA         Outlook mailbox · ERP export · EU sanctions list
             [PI-1] the supplier writes the invoice text the prompt reads
             [CW-3] non-invoices in the mailbox (attack 5)
SCREENING    Bought service (L)
             [DL-2] every supplier name sent to a second vendor
GOVERNANCE   SharePoint log of raw answers
             [DL-3] personal data in the log, no retention period set yet
```

10 markers across all four threat types.

## 3. Priority table

Likelihood and impact are rated 1–5 for the design as it stands, with its existing checks. Rule: 16+ High, 8–15 Medium, below 8 Low.

| Surface | Threat | L | I | L × I | Priority | Why these ratings |
|---|---|:-:|:-:|:-:|---|---|
| CW-1 Rubber-stamp H1 | CW | 4 | 4 | 16 | High | 1,050 checks a month at 2 minutes: skimming is near-certain. It is the last line behind PI-2 and CW-2 |
| DL-1 Personal data to the API | DL | 5 | 3 | 15 | Medium | Happens on every call; no training on the data, but no processing agreement exists yet |
| SA-1 Free chatbot during backlog | SA | 4 | 3 | 12 | Medium | Free tools are one tab away; free tiers may use the data for training (course AI Pricing Reference) |
| CW-2 Confident wrong origin | CW | 3 | 4 | 12 | Medium | Seen on 1 of 3 transshipped inputs, both runs (Run 4); a wrong origin can avoid duties on Chinese goods |
| PI-2 Injection on a near-match | PI | 2 | 5 | 10 | Medium | Needs a fuzzy-match miss *and* a model that obeys; Sonnet resisted (attack 3). Impact: a sanctioned party paid, €50,000–€500,000 (Week 4) |
| PI-3 Model switch reopens injection | PI | 2 | 5 | 10 | Medium | The exit plan switches models in 1–2 weeks; llama3.2 obeyed the same invoice that Sonnet refused |
| DL-2 Names to the screening vendor | DL | 5 | 2 | 10 | Medium | Every call, but company names are mostly public |
| PI-1 Injection with an exact listed name | PI | 3 | 2 | 6 | Low | The screening service matches the name without reading the notes → H2. Cost: one 6-minute check |
| DL-3 Log without retention | DL | 3 | 2 | 6 | Low | Inside the company's own tenant |
| CW-3 Non-invoices | CW | 4 | 1 | 4 | Low | Sonnet answered "cannot be determined" 2/2; at worst one wasted review |

## 4. If I could fix only three

1. **CW-1, the rubber-stamp H1 (16).** It is first because every other surface ends there: if H1 is a real check, PI-2 and CW-2 are caught; if it is a skim, they pass. Fix: each H1 row shows the invoice line every field was copied from, and any invoice that names two or more countries goes to H2 (that also catches CW-2). The monthly re-check of 30 cleared invoices is already costed (Week 8).
2. **PI-2, injection on a near-match (10).** I rank it above two higher scores on purpose: it is the only surface whose damage cannot be undone (a payment to a sanctioned party, possibly a criminal referral), and its fix is the cheapest. Fix: the script takes the strictest of screening match, AI flag and routing rules, and any answer that is not exactly one JSON object goes to H2: about 2 developer hours, €126. It also closes PI-3 for any future model.
3. **DL-1, personal data to the API (15).** Certain to happen, but its fix is a contract, not code: a data processing agreement with transfer safeguards before go-live. It is third because a missing contract is a fine risk I can close before the first invoice, while 1 and 2 are live on day one. The legal detail is Week 10.

**Not in my top three:** SA-1 (12) needs an AI usage policy and a fallback queue that stays fast, not a system change. CW-2 (12) is mostly closed by fix 1.

## 5. Worst case and most likely case

**Worst case:** a sanctioned bank sends an invoice under a slightly changed name with a note telling the system it is cleared. The fuzzy match misses, the model obeys, the analyst skims H1, and the importer pays. Result: a fine of €50,000–€500,000 and a possible criminal referral (Week 4). This needs three failures at once.

**Most likely case:** at month-end the queue backs up and an analyst pastes a batch of invoices into a free chatbot to go faster. Supplier prices and directors' names leave the company with no agreement. Nobody finds out until something else goes wrong.

---

*AI disclosure: I used Claude to structure the four audits and the map; the ratings and the ranking are mine, based on my own attack runs and my Week 4, 7 and 8 evidence.*
