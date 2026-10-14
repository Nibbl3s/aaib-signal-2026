---
week: 10
title: "Evidence - My Build Classified Under the EU AI Act and the GDPR"
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Regulatory reasoning"
date: 2026-10-14
---

# My Build Under the AI Act and the GDPR

**The system:** my [Week 8 design](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-08/architecture.md). A Belgian importer uses Claude Sonnet 5.5 to read supplier invoices and pre-fill four fields plus a warning flag. A bought service matches supplier names against the EU sanctions list, rules route risky invoices to an analyst, and an analyst checks every invoice. The AI never clears a supplier on its own.

**Sources:** Regulation (EU) 2024/1689 (AI Act), Annex III as published on [artificialintelligenceact.eu](https://artificialintelligenceact.eu/annex/3/) (read 14 Oct 2026); dates as amended by the Digital Omnibus, Regulation (EU) 2026/1744 (published 24 July 2026), as summarised on the [Week 10 course page](https://advanced-ai-in-business.vercel.app/week/10); GDPR (Regulation (EU) 2016/679). To check against the Commission's own timeline before the capstone memo: these dates have moved once already.

## 1. EU AI Act: the decision tree, step by step

| Step | Question | Answer for my tool | Result |
|---|---|---|---|
| 0 | What is it, in the Act's language? | An AI system (Art. 3(1)) built on a general-purpose AI model (Claude Sonnet 5.5, provided by Anthropic). The importer builds it for its own use, so it is both the provider and the deployer of this small system (Art. 3(3) and 3(4)). Anthropic carries the general-purpose model duties, not the importer. | – |
| 1 | Prohibited (Art. 5)? | No. It assesses companies and invoices, not people's social behaviour, personality or emotions. No biometrics, no manipulation, no exploitation of vulnerable groups. | Go to step 2 |
| 2 | Annex III? | Checked point by point. **1 Biometrics:** no biometric data. **2 Critical infrastructure:** not a safety component of digital infrastructure, traffic, water, gas or electricity. **3 Education, 4 Employment:** no. **5 Essential services:** it does not assess any person's creditworthiness (5b) or insurance (5c). **6 Law enforcement** and **7 Migration and border control:** both apply only to systems used "by or on behalf of" law enforcement or competent public authorities. Sanctions screening sounds like enforcement, but the importer is a private company screening its own suppliers, not acting for customs or police. **8 Justice:** no. | Go to step 3 |
| 3 | Safety component of a regulated product (Annex I)? | No. It screens invoices; it is not part of any machine, vehicle, medical device or toy. | Go to step 4 |
| 4 | Does it interact with people, generate content or process personal data? | It does not talk to the public: only two trained analysts see its output. It does process some personal data (see Section 2). | **Minimal risk** |

**My tier: minimal risk.** The reasoning that matters is step 2. The tool's purpose (helping stop payments to sanctioned parties) is close to law enforcement, but Annex III points 6 and 7 are scoped to public authorities, and the importer is not one.

**Obligations that still apply:**
- **AI literacy (Art. 4):** the people operating the system need sufficient understanding of it. In force since 2 February 2025 per the course timeline; I still have to check whether the Omnibus changed it.
- **Transparency (Art. 50):** does not apply. There is no chatbot and no AI-generated content for the public, and the analysts know they are reading AI output.

**What would change the tier:**
- The Commission adds a trade or sanctions category to Annex III (it can amend Annex III by delegated act).
- The tool is offered as a service to customs authorities: point 7 could then apply.
- The tool is used to score natural persons, for example individual sole traders, in a way that decides their access to essential services.

## 2. GDPR, separately

| Question | Answer |
|---|---|
| Does it process personal data? | **Yes, sometimes.** Most suppliers are companies, which the GDPR does not protect (Recital 14). But invoices can name directors, owners or sole traders, and EU sanctions lists include natural persons. |
| Lawful basis | **Legitimate interest (Art. 6(1)(f))**, documented in a legitimate interest assessment: the importer must not make funds available to listed persons (for example Council Regulation (EU) No 269/2014, Art. 2), and screening is how it avoids that. Legal obligation (Art. 6(1)(c)) is arguable, but the sanctions regulations forbid the payment; they do not order this particular screening. Open question for a DPO. |
| Does it make or support a decision about a person? | It supports one: whether to pay a supplier. Where the supplier is a natural person, blocking a payment has a significant effect on them. |
| Article 22 in play? | **No, as long as the human check is real.** The decision is taken by an analyst (H1 or H2), not solely by the system. But a rubber-stamp check is not real human involvement (Article 29 Working Party guidelines on automated decision-making, endorsed by the EDPB). My Week 9 top risk, the rubber-stamp H1 (CW-1), is therefore also my GDPR risk: if H1 becomes a stamp, Article 22 applies. |
| Data subject rights | **Information (Art. 13/14):** suppliers' privacy notice should mention the screening. **Access:** the raw answers are logged per invoice, so they can be found. **Erasure:** no model is trained on the data, so there is nothing to "un-learn". Deletion follows a retention period I have not set yet (Week 9, DL-3). **Objection:** possible under legitimate interest, but sanctions compliance will usually override it. |
| Data protection impact assessment | Advisable (est.): automated matching of people against sanctions lists can have serious effects. To confirm with a DPO. |
| Where do my test inputs live, and are they anonymised? | In the public repo (`build/`). **Checked on 14 Oct 2026: no personal data.** All 35 inputs (12 own, 8 practitioner-pattern, 10 from Janis's set, 5 attacks) name companies only, such as sanctioned banks, Huawei, Alibaba, "Supplier 1–8" and a forwarding company, or contain no supplier at all. No names of people, addresses or contact details. |

## 3. Timeline and runway

| Date | What applies to this tool | Status |
|---|---|---|
| 2 Feb 2025 | Prohibitions (not triggered); AI literacy | In force |
| 2 Aug 2025 | General-purpose model duties, for Anthropic, not the importer | In force |
| 2 Aug 2026 | Authorities' full enforcement powers | In force |
| 2 Dec 2026 | End of the transparency grace period (Art. 50 does not apply to this tool) | No action |
| 2 Dec 2027 | Annex III high-risk duties: only if the tool were reclassified | Watch |
| GDPR | Applies now, fully | Act now |

**What the importer should do now:** run the AI literacy training, write the legitimate interest assessment, do the impact assessment, sign the processing agreement, update the suppliers' privacy notice, and review the classification once a year.

## 4. Compliance cost (year 1)

| Item | Formula | € |
|---|---|---:|
| AI literacy, beyond the Week 8 tool training | 2 analysts × 2 h × €45 | 180 |
| Legitimate interest assessment | 4 h × €45 + 2 h legal × €150 (est.) | 480 |
| Impact assessment | 8 h × €45 + 4 h legal × €150 (est.) | 960 |
| Privacy notice update | 2 h × €45 | 90 |
| Yearly classification review | 2 h × €45 | 90 |
| Processing agreement with the model provider | Already counted in the Week 9 mitigations (€690) | 0 |
| **Total** | | **1,800** |

Together with the Week 9 security work (€4,515), this exceeds my Week 8 contingency (€4,869) by €1,446, so **the year-1 system cost rises from €37,329 to €38,775 (est.)**. For scale: if the tool were high-risk, the course's worked example puts compliance at €95,000–€240,000, roughly 2.5 to 6 times my entire year-1 system cost. Getting step 2 right is worth more than any other line in this file.

---

*AI disclosure: I used Claude to read the Annex III text with me, structure the decision tree and check the arithmetic; the classification, the lawful-basis choice and the estimates marked (est.) are mine.*
