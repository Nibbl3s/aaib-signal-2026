---
week: 10
title: "My Sanctions Tool Is Legal Under the AI Act. That Was the Easy Part."
author: "Jasper Derieuw"
beat: "EU and China Trade Compliance in the AI Era"
skill: "Regulatory reasoning"
date: 2026-11-16
verdict: "Minimal risk on paper; document it as if it were high-risk"
stamp: "AI ACT: MINIMAL RISK · GDPR: APPLIES NOW"
kpis: "Minimal | AI Act risk class of my Build ; €3,120–€3,720 | compliance cost, year 1 (est.) ; €95k–€240k | the cost if it were high-risk"
takeaways: "Read who an Annex III point applies to, not only what it covers ; In sanctions screening the obligations that bite come from sanctions, customs and data protection law ; In practice, doubt pushes a system up a risk class, not down"
---

# My Sanctions Tool Is Legal Under the AI Act. That Was the Easy Part.

Sanctions screening sounds like law enforcement, and law enforcement is high-risk under the EU AI Act. If my tool landed in that box, compliance would cost more than the manual process it replaces. So I walked the decision tree for it, step by step.

## The use case

An Antwerp importer of Chinese electronic components screens about 1,500 suppliers a month against the EU sanctions list. My Build uses Claude Sonnet 5.5 to read each invoice and propose five fields: supplier, origin, HS code, value and a warning flag. Rules route the risky invoices, and an analyst decides every one. Screening vendors sell this kind of tool to importers today; mine costs €0.002 a check.

## The classification

**Step 1, prohibited practices (Art. 5):** no social scoring, manipulation, biometrics or emotion recognition. The two prohibitions the Digital Omnibus adds from 2 December 2026 concern sexual deepfakes. Out.

**Step 2, Annex III:** this is where my tool nearly lands. Point 6 (law enforcement) and point 7 (migration and border control) sound like customs work, but both cover systems used "by or on behalf of" public authorities. An importer screening its own suppliers is neither. Point 5(b), creditworthiness, covers natural persons, not suppliers. Point 2 needs a safety component of critical infrastructure, such as traffic, water or energy; an invoice reader is not one. Out. Even if I were wrong, Article 6(3) excludes a system that only performs a preparatory task and does not profile people, and pre-filling fields for an analyst is a preparatory task.

**Step 3, Annex I:** not a safety component of any product. Out.

**Step 4, transparency (Art. 50):** no chatbot, no content for the public.

**Result: minimal risk.** The one AI Act duty left is AI literacy (Art. 4), which Regulation (EU) 2026/1744 softened in July to "take measures to support" it. The step that decided everything was reading who an Annex III point applies to, not only what it covers.

## The GDPR overlap

The GDPR ignores risk tiers. Invoices name directors and sole traders, and sanctions lists include people. My lawful basis is legitimate interest (Art. 6(1)(f)): the sanctions regulations forbid paying a listed person but do not prescribe how to screen. Suppliers must be told in a privacy notice (Art. 13/14), and an impact assessment is advisable (Art. 35). Article 22 stays out only while the human check is real. A customs specialist told me my two-minute "confirm clear" may take five to ten minutes. If analysts skim instead, the system becomes the decision-maker, and Article 22 applies. My top security risk from Week 9 is also my GDPR risk.

## Timeline and cost

GDPR, sanctions and customs law apply now; Annex III duties start on 2 December 2027, a date that already moved once from August 2026, and only matter if the tool is reclassified. I first costed compliance at €1,800. Then I asked how it is actually done. Voka has not answered in 33 days. A trade-compliance specialist at a large company answered the same day: when it is unclear, "we design and document it as if it were high-risk until the classification is confirmed", with external counsel before go-live. Doing that for my importer costs €3,120–€3,720 in year 1 (est.). Being high-risk would cost €95,000–€240,000.

## The insight

In my beat, the AI Act is the easy part. The tool is minimal risk on paper, and the obligations that bite come from sanctions, customs and data protection law, which hold the importer liable whatever the model says. The gap is in practice: large companies classify with lawyers, while a 150-person importer classifies with whoever builds the tool.

---

*AI disclosure: the classification, the recommendation and the estimates marked (est.) are mine; I asked both organisations myself and quote the reply as received. I used Claude to read the Official Journal text with me, structure this post and check the figures.*

Full workings: [my Build classified](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-10/my-build-classified.md) · [regulatory impact assessment](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-10/regulatory-impact-assessment.md) · [GDPR overlap](https://github.com/Nibbl3s/aaib-signal-2026/blob/main/students/jasper-derieuw/evidence/week-10/gdpr-overlap-scenario-1.md)
