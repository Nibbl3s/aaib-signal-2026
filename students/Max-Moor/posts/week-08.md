---
week: 8
title: "A €1,788 Design for a Tool That Reads 12 Emails a Month. Would the Board Approve It?"
author: "Max"
beat: "How can AI automation transform the workflow of a digital manufacturing company?"
skill: "Design defense"
date: 2026-11-27
---

Most small manufacturers that "add AI" start with the model. I started with the model too, in Week 2, and spent six weeks learning that the model is the cheapest box in the drawing. Here is the whole drawing, with every box costed.

## The Company
O&D Impression 3D is a two-partner digital manufacturing shop in Welkenraedt, Belgium (FDM, resin, SLS, CNC, laser cutting). Its website form brings in about 12 quote requests a month, in French, Dutch, German and English, as free text. The partners bill their own time at €46 an hour. The budget for this project is €1,800 in the first year and about 20 hours of build time, with one developer: me. A person must still read every request before a quote leaves.

## The Architecture
**Data.** Wix form submissions (12 a month) and a Google Sheet holding the price formula. The price stays in the sheet: the AI never prices anything. 3D files stay in Wix.

**Integration.** A Wix automation sends each submission by webhook, in real time, to a 60-line Google Apps Script. The script removes name, email and phone, calls the API, checks that the answer is valid JSON, and logs the call. Build: 20 hours, €920. Maintenance: €230 a year.

**AI model.** gemini-3.5-flash-lite, with the version pinned (never the `-latest` alias, which changed the model under me in Week 6). My own call measured 554 tokens in and 79 out: $0.00036 a call at $0.30 and $2.50 per million tokens, or €0.05 a year at 144 requests.

**Interface.** One row per request in a Google Sheet: the five extracted fields, what is missing, and the original message beside them. Cost: €0. A person checks every row (1 minute) and fixes failures (2 minutes).

**Governance.** No personal data leaves the shop. Every call is logged. A monthly audit of 10 rows. A stop rule: if failures pass 75%, the tool is switched off, because that is the measured break point. Training for two people: €184.

**Fallback.** If the API fails or the JSON is invalid, the row appears empty with the raw message, and the work continues as it does today.

Year 1 total: €0.05 + €920 + €184 + €230 + €110 checking + €110 fixing = €1,555, plus 15% contingency (€233) = **€1,788**.

## The Defense
*Why not something built in?* The honest alternative is a better form: dropdowns for material and quantity. It costs €0, it cannot invent a value, and I have not yet shown it loses. What it cannot read is the customer who writes three lines in Dutch and attaches no file.

*What does it cost at 3x?* 36 requests a month. Tokens: €0.14 a year. Total: €2,296, because the cost grows with checking, not with tokens. Cost per correctly handled request falls from €24.80 to €10.60.

*What if the vendor changes the price or the model?* The 3.5 model costs 42% more per call than the one it replaced, which is €0.02 a year. A shutdown costs about one hour: change URL, key and model name, then re-run my 13-input test. The scorecard says 6 out of 15.

*Where is it weak?* In accuracy. Strictly scored, my prompt got 3 and 4 of 13 inputs fully right on two runs. That is a 73% failure rate, and the tool stops paying at 75%. The design is sound; the Build is not ready.

## The Question
The number I am least sure of is the 2 minutes to fix a failed row, because I have never timed it. If real fixes take over 3 minutes, should O&D build this at all, or just fix the form?

*AI use: Claude helped draft and structure this post; the data and the tests are mine, and I checked the figures.*
