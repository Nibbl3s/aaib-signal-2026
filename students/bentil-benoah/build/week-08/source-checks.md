# Week 8 — source and assumption checks

Checked 27 November 2026. Financial assumptions are dated the same day. These are documentation checks, not supplier quotations or verification of the hypothetical companies' subscriptions.

| Source | Check and consequence |
|---|---|
| [Ollama Llama 3.2 model page](https://ollama.com/library/llama3.2) | Opened. English, German and French are officially supported; Dutch is not in the published eight-language list. Do not infer Dutch reliability or four-language production accuracy from the small experiment. |
| [Ollama API usage](https://docs.ollama.com/api/usage) | Opened. Documents prompt_eval_count as input tokens and eval_count as output tokens; streaming usage is in the final chunk. Server timing values are nanoseconds; runner wall times are separate client measurements. |
| [Odoo JSON-2 API documentation](https://www.odoo.com/documentation/master/developer/reference/external_api.html) | Official search extract states external API data access requires a Custom plan. A direct open of the 19.0 API page timed out. Confirm installed version, hosting, supported API and plan before implementation. The diagrams use HTTP/JSON generically; they do not assert that the existing installation offers REST endpoints. |
| [Odoo pricing](https://www.odoo.com/pricing) | Official pricing search result lists External API under Custom; retrieved display was USD and promotional/renewal figures differed. Direct page open timed out. No Belgian EUR licence price is adopted. The €0 incremental licence assumption is conditional on existing entitlement; obtain an account-specific quote if it fails. |
| [Salesforce supported editions and permissions](https://developer.salesforce.com/docs/platform/api-rest/guide/intro-rest-compatible-editions.html) | Opened. API access is enabled by default in listed Enterprise/Performance/Unlimited/Developer editions; Professional can require an add-on. An API-enabled user is also needed. Northwind's edition, API limits and entitlement are unknown. No zero-cost add-on entitlement is asserted. |
| [Salesforce Einstein request rate card, effective 24 October 2025](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/assets/pdf/Einstein_Request_Rate_Card_Effective-10.24.25-.pdf?bc=OTH) | Official search result explains that entitlement depends on the order form and some AI usage consumes credits. No per-user or per-query price is adopted. This supports evaluating included tools rather than asserting they are free or insufficient. |
| [European Commission AI Act overview](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) | Official source describes a risk-based framework and minimal/no-risk examples. Calling the proposed internal classifier minimal risk is a provisional design judgement, not a regulatory determination. Recheck the final intended purpose; the design excludes consequential decisions and customer-facing automation. |
| [Week 8 Journey Hub](https://advanced-ai-in-business.vercel.app/week/8) | Live access failed again. Checklist uses the previously saved Week 8 instruction summary, “Pasted text(7).txt”, read in full. Exact current rubric wording, workbook and Canvas field requirements are not verified. |

## Financial input provenance

All hardware, electricity, development, maintenance, training and labour amounts come from Bentil's supplied hypothetical drafts. No current hardware specification, energy tariff, measured power use, procurement quote, VAT treatment, actual server capacity or employee wage has been verified. Treat totals as planning estimates before additional VAT/financing treatment, not actual expenditure. Existing platform subscription costs are excluded as an incremental-project comparison; any upgrade or new access charge must be added to both the architecture cost mapping and budget.

Local inference has **€0 external per-token provider charge in this design**, rather than €0 total inference cost. Hardware, power, monitoring and maintenance remain cost-bearing. No cloud rate or exchange rate is needed for these local-model projections. Do not apply external cloud pricing to Ollama token counts as if it were a bill.

The prediction was grounded in observed Week 7 numeric-format failures, not attributed retrospectively to vendor advice. These later documentation checks did not inform the already timestamped prediction. Suggested APA reference for current technical discussion: Ollama. (n.d.). *Llama 3.2*. Retrieved November 27, 2026, from https://ollama.com/library/llama3.2

No procurement or production configuration has been performed.
