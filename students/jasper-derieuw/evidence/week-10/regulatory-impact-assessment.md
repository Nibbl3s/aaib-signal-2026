---
week: 10
title: "Evidence - Regulatory Impact Assessment: AI-Assisted Sanctions Screening (6 ECTS)"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Regulatory reasoning"
date: 2026-11-16
---

# Regulatory Impact Assessment: AI-Assisted Sanctions Screening at an Antwerp Importer

**For:** CFO, Antwerp importer (capstone scenario) · **By:** Jasper Derieuw · **Date:** 16 November 2026 · **Decision:** start the 3-month pilot, yes or no

## 1. Summary

The system is **minimal risk under the EU AI Act**: not prohibited, outside Annex III because its law-enforcement and border points cover public authorities only, and not part of a regulated product. The Act itself asks little of it: measures to support AI literacy, softened in July 2026. The real obligations come from three other laws: the GDPR (invoices name directors and owners), the sanctions regulations (the reason the system exists) and customs law (the importer stays liable for every declaration). **Recommendation: start the pilot, but document the system as if it could be high-risk and have external counsel confirm the class before go-live.** That is what a large compliance team does in practice (Section 6), and it costs €3,120–€3,720 in year 1 (est.) instead of the €1,800 I first estimated.

## 2. The system and who is responsible

- **What it does:** Claude Sonnet 5.5 reads each supplier invoice and proposes five fields (supplier, origin, HS code, value, a warning flag). A bought service matches names against the EU consolidated sanctions list, rules route each invoice, and an analyst decides. Since the practitioner review of 16 November the AI output is labelled a proposal and cannot become declaration data without human approval ([Week 8 review](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/practitioner-review.md)).
- **Roles:** an AI system (Art. 3(1)) built on a general-purpose AI model. The importer deploys it (Art. 3(4)) and, because it builds it for its own use, is also the provider of this small system (Art. 3(3)). Anthropic carries the general-purpose model duties (Chapter V).
- **Size:** about 150 employees; an SME if its turnover is at most €50 million (est.; to confirm with the CFO).

## 3. AI Act classification, step by step

| Step | Test | Finding |
|---|---|---|
| 1 | Prohibited practice (Art. 5), including the two added by Regulation (EU) 2026/1744 from 2 Dec 2026 | No. No social scoring, manipulation, biometrics or emotion recognition; the new points (ba) and (bb) concern sexual deepfakes |
| 2 | Annex III | No. Points 1–4 and 8 do not fit. Point 5(b) covers the creditworthiness of natural persons, not suppliers. Points 6 (law enforcement) and 7 (migration and border control) apply to systems used "by or on behalf of" law-enforcement or competent public authorities; the importer is a private company screening its own suppliers |
| 2b | Fallback: Art. 6(3) | Even if Annex III applied, a system that performs a preparatory task and does not profile natural persons is not high-risk, provided the assessment is documented. Pre-filling fields for an analyst is a preparatory task |
| 3 | Safety component of an Annex I product | No |
| 4 | Transparency (Art. 50) | No chatbot and no generated content for the public; the analysts know they read AI output |

**Result: minimal risk.** The obligation that remains is Art. 4: providers and deployers "shall take measures to support the development of AI literacy" of their staff, without having to guarantee any level (as amended by Regulation (EU) 2026/1744).

## 4. The obligations that do apply, from other laws

| Law | What it requires here | Owner |
|---|---|---|
| **GDPR** (Regulation (EU) 2016/679) | A lawful basis: legitimate interest, Art. 6(1)(f), with a documented assessment (legal obligation, Art. 6(1)(c), is arguable; open for the DPO). Information to suppliers (Art. 13/14). A processing agreement with the model provider (Art. 28). An impact assessment (Art. 35, advisable). A retention period for the logs. **Art. 22 stays out of play only if the human check is real**; a rubber-stamp check would make the system the decision-maker | CFO + DPO |
| **Sanctions** (e.g. Council Regulation (EU) No 269/2014, Art. 2) | No funds or economic resources may be made available to listed persons. The law forbids the payment; it does not prescribe how to screen. The duty and the liability stay with the importer, whatever the AI says | Compliance |
| **Customs** (Union Customs Code, Regulation (EU) No 952/2013, Art. 15(2)) | The person lodging a declaration is responsible for its accuracy. "'The AI suggested it' is not a defence" (customs specialist, 16 Nov) | Customs lead |
| **Export control** (Regulation (EU) 2021/821) | Licences for dual-use items on export, brokering and transit; relevant when components are resold abroad. Hence the product-risk flag in the revised design | Compliance |

## 5. Timeline (Official Journal text, checked 16 Nov 2026)

| Date | What applies | For this system |
|---|---|---|
| 2 Feb 2025 | Prohibitions; AI literacy (softened from 27 Jul 2026) | Literacy measures now |
| 2 Aug 2025 | General-purpose model duties | Anthropic's, not the importer's |
| 2 Aug 2026 | General date of application | In force |
| 2 Dec 2026 | Two new prohibitions; end of the Art. 50(2) marking grace period | Not affected |
| **2 Dec 2027** | Annex III high-risk duties | Only if reclassified. A conformity assessment takes 3–6 months (course Week 10), so a reclassification would have to be known by mid-2027 |
| GDPR, sanctions, customs | Apply now | Before the first invoice |

Source for the amended dates: [Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng), Art. 1 points (5) and (40), amending Art. 4 and Art. 113 of Regulation (EU) 2024/1689.

## 6. How it is actually done: whom I asked

| Who | How | When | What came back |
|---|---|---|---|
| Voka, Chamber of Commerce Antwerp-Waasland | Email, Dutch, three questions: who classifies, on what basis, what happens when unclear | Sent 14 Oct 2026; reminder 16 Nov 2026 | **No reply after 33 days** |
| A trade-compliance specialist at a large international company | The same three questions; reply by email, English | 16 Nov 2026 | Classification "done jointly by Legal/Compliance and IT/Data Governance, with input from the business owner of the tool", with external counsel "before go-live" for anything touching customs, sanctions, export control or personal data; based on "an internal AI intake and risk-assessment checklist"; when unclear, "we pause deployment or restrict it to an internal pilot … we design and document it as if it were high-risk until the classification is confirmed." On my tool: "more likely to be a support tool than an autonomous decision-maker. But the classification should still be formally assessed" |

**The Act as written and the Act as practised.** As written, the Act lets the company classify its own system, and a minimal-risk system carries almost no duties under it: since July 2026 not even a guaranteed level of AI literacy. As practised in a large company, classification is a joint decision of Legal/Compliance and IT, checked by outside counsel when customs or sanctions are involved, and doubt pushes a system up, not down: it is documented as if it were high-risk until someone with authority confirms it is not. The practised Act is stricter than the written one. The gap is widest for the company in my scenario: a 150-person importer with no legal department, no data-governance team and no counsel on retainer. The Omnibus says Member States and the Commission should support exactly such firms (Art. 4(2)), and a chamber of commerce is where an SME would ask first; the one I asked did not answer in 33 days. That silence is the finding: for an SME, classification falls on whoever builds the tool.

## 7. What it costs

| Item | Formula | € (year 1) |
|---|---|---:|
| AI literacy measures | 2 analysts × 2 h × €45 | 180 |
| Legitimate interest assessment | 4 h × €45 + 2 h × €150 (est.) | 480 |
| Impact assessment (Art. 35) | 8 h × €45 + 4 h × €150 (est.) | 960 |
| Privacy notice update | 2 h × €45 | 90 |
| Yearly classification review | 2 h × €45 | 90 |
| **New: classification file "as if high-risk"** (purpose, risks, oversight, logging, vendor terms; mostly assembled from Weeks 7–9) | 16 h × €45 (est.) | 720 |
| **New: external counsel confirms the class before go-live** | 4–8 h × €150 (est.) | 600–1,200 |
| Processing agreement | in the Week 9 security budget | 0 |
| **Total** | | **3,120–3,720** |

This raises the year-1 system cost from €39,207 to **€40,527–€41,127 (est.)**. If the system were ever high-risk, the course's worked example puts compliance at €95,000–€240,000: more than the €81,000 the whole manual process costs a year, and the end of the business case.

## 8. What would change the classification, and how to watch it

1. The Commission adds a trade or sanctions category to Annex III (delegated act, Art. 7).
2. The tool is offered to customs or another authority, or used on their behalf: points 6 or 7 could apply.
3. It is used to assess natural persons, for example sole traders, which is profiling and closes the Art. 6(3) route.
4. The AI clears invoices without a person: no longer a preparatory task.

**Control:** the classification file is reviewed once a year and whenever the purpose, the users or the routing change; any of the four triggers stops the system until counsel has reassessed it.

---

*AI disclosure: I asked both organisations and quote the replies as received; I used Claude to read the Official Journal text with me, structure this assessment and check the arithmetic. The classification, the recommendation and the estimates marked (est.) are mine.*
