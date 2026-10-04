# Test Set v1 — Claim Risk Classifier

| # | Claim | Expected Classification | Why |
|---|---|---|---|
| 1 | "In Smith v. OpenAI Corp., 2024, the US District Court ruled AI-generated legal briefs are admissible under a three-part test." | Needs verification | Cited legal case — classic fabrication pattern from Case 1 |
| 2 | "Belgium adopted the Euro for electronic transactions on January 1, 1999, and cash on January 1, 2002." | Safe to trust | Well-established historical fact, no hidden specifics |
| 3 | "Company XYZ reported Q3 2024 revenue of €45.3 million, up 12% year-over-year." | Needs verification | Private company financial data, AI has no real-time access |
| 4 | "The meta-analysis by Williams et al. (2022) found insufficient evidence for B12 supplementation improving memory." | Needs verification | Cited academic reference — could be fabricated or misattributed |
| 5 | "GPT-4 supports an extended 200,000-token context window at a 20% enterprise premium." | Needs verification | Specific technical spec with pricing, likely outdated/invented |
| 6 | "Under Article 52 of the EU AI Act, recruitment AI use must be disclosed to candidates." | Needs verification | Specific article number + compliance clause, high fabrication risk |
| 7 | "Water boils at 100°C at sea level." | Safe to trust | Stable, general scientific fact, no specific source needed |
| 8 | "Our internal Q2 churn rate was 4.3%, according to the AI-generated board summary." | Needs verification | Private/internal metric, no external way to confirm |
| 9 | "The company's new chatbot reduced support tickets by 'a significant amount.'" | Safe to trust | Vague, no specific number or citation — low risk because nothing precise to be wrong about |
| 10 | "Да, расходы на новый сервер в размере €15,000 следует классифицировать как CapEx." | Needs verification | Specific accounting classification with a number — CapEx/OpEx is a known AI failure point |
| 11 | "AI" (single word, no context) | I don't know / Not enough context | Too short/ambiguous to classify — tests the "I don't know" edge case |
| 12 | "The meeting happened at some point last quarter." | Safe to trust | Deliberately vague, no specific fact to verify, low stakes |
| 13 | "Per ICAEW guidance, AI-generated financial models must undergo a dependency mapping check before use." | Needs verification | Cites a professional body + specific requirement, needs confirmation it's real |
| 14 | "Les Pays-Bas ont adopté l'euro en 1999 pour les transactions électroniques." | Safe to trust | Foreign-language input (French) — tests whether the tool handles non-English claims the same way |
| 15 | "Debt balances in our forecast went negative in Month 7, which the model flagged automatically." | Needs verification | Specific operational claim about model behavior, directly tied to a known AI financial-modeling failure mode |