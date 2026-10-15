# Week 4: Value Quantification — Lab Results & Evidence

**Author:** Andreea Simion  
**Beat:** The Psychology of AI Adoption in the Workplace[cite: 1]  
**Skill:** Value quantification[cite: 2]  
**Date:** 2026-10-15[cite: 3]  

---

## Exercise: Map TechCorp's Value Chain

A value chain divides a company's activities into two categories: **Primary activities** (which directly create the product or service) and **Support activities** (which enable the primary activities to happen)[cite: 2, 6]. 

Below is the completed mapping for TechCorp, evaluating AI potential, providing one-sentence reasoning for each "Yes", and identifying the top value-creation opportunities[cite: 2, 6].

### 1. Value Chain Mapping Table

| Activity Type | Department / Process | AI Potential? | Reasoning for "Yes" |
| :--- | :--- | :--- | :--- |
| **Primary** | Product Development (Engineering, QA, Docs)[cite: 2, 6] | Yes[cite: 2, 6] | AI can assist developers by reviewing pull requests, generating test cases, and drafting technical documentation[cite: 2, 6]. |
| **Primary** | Marketing & Sales (Lead qualification, proposals, CRM)[cite: 2, 6] | Yes[cite: 2, 6] | AI can automate lead scoring, draft personalized sales proposals from CRM data, and scale content generation[cite: 2, 6]. |
| **Primary** | Service Delivery (Cloud platform execution)[cite: 2, 6] | No[cite: 2, 6] | Core cloud infrastructure requires deterministic reliability and uptime rather than generative AI capabilities[cite: 2, 6]. |
| **Primary** | Customer Support (Ticket triage, knowledge base)[cite: 2, 6] | Yes[cite: 2, 6] | AI excels at text classification to triage repetitive tier-1 tickets and suggest knowledge base articles for agents[cite: 2, 6]. |
| **Primary** | Customer Success (Onboarding, churn prevention)[cite: 2, 6] | Yes[cite: 2, 6] | AI can analyze multi-system customer usage data to surface early churn risk signals for customer success managers[cite: 2, 6]. |
| **Support** | IT & Security (Access provisioning, helpdesk)[cite: 2, 6] | Yes[cite: 2, 6] | AI can handle high-volume routine helpdesk queries (like password resets) and assist in filtering security alert noise[cite: 2, 6]. |
| **Support** | Finance (Invoicing, expenses, AP)[cite: 2, 6] | Yes[cite: 2, 6] | AI-driven OCR and data extraction can automate manual invoice entry into SAP and flag expense anomalies[cite: 2, 6]. |
| **Support** | HR (Resume screening, onboarding, policy Q&A)[cite: 2, 6] | Yes[cite: 2, 6] | AI can rapidly scan high volumes of incoming resumes against job descriptions and answer repetitive policy questions[cite: 2, 6]. |
| **Support** | Legal & Compliance (Contract review, GDPR)[cite: 2, 6] | Yes[cite: 2, 6] | AI can function as an initial redliner to highlight standard contract deviations before human legal counsel reviews them[cite: 2, 6]. |
| **Support** | Data & Analytics (Reports, dashboards, SQL)[cite: 2, 6] | Yes[cite: 2, 6] | AI can accelerate reporting workflows by generating SQL queries and drafting recurring dashboard summaries[cite: 2, 6]. |
| **Support** | Operations (Vendor management, reporting)[cite: 2, 6] | Yes[cite: 2, 6] | AI can track contract renewal dates across spreadsheets and help compile multi-system internal reports[cite: 2, 6]. |

### 2. Top 3 Activities Where AI Creates the Most Value
Based on volume, repetition, and cost impact, the three strongest AI opportunities at TechCorp are[cite: 2, 6]:
* **Customer Support (Ticket Triage & Response Drafting):** Support agents handle 4,200 tickets per month with a 14-hour average response time, and 30% of queries are repetitive "how-to" questions[cite: 2, 6]. Automating classification and drafting frees up significant agent hours[cite: 2, 6].
* **Finance (Invoice Processing & AP Data Entry):** The accounts payable team processes 600 invoices monthly manually at 15 minutes per invoice, suffering a 12% error rate[cite: 2, 6]. Automating data extraction directly eliminates heavy administrative labor and costly manual errors[cite: 2, 6].
* **Marketing & Sales (Proposal Generation & Lead Workflow):** Sales reps spend 6 hours per week on administrative work rather than selling, and proposal turnaround takes 3 days, causing prospects to churn[cite: 2, 6]. Accelerating proposals directly impacts top-line revenue[cite: 2, 6].

---

## Check Your Understanding

* **What's the difference between a primary activity and a support activity in a value chain?** Primary activities are the core operational steps that directly create, deliver, and service the product or service that the customer pays for (such as product development, sales, and customer support)[cite: 2, 6]. Support activities, on the other hand, are the background organizational functions that enable those primary activities to happen smoothly (such as IT, finance, HR, and legal compliance)[cite: 2, 6].
* **Why did you mark some activities as "No" for AI potential? What was your reasoning?** Activities like core cloud service delivery were marked as "No" because they require deterministic reliability, strict uptime, and absolute system stability rather than probabilistic generative AI capabilities[cite: 2, 6]. Similarly, high-level executive strategic planning and product roadmap decisions require human empathy, relationship-building, and market intuition, making them fundamentally incompatible with automated AI decision-making[cite: 2, 6].
* **Which of Week 2's lessons (capability skepticism) influenced your assessment?** Capability skepticism influenced the assessment by establishing that AI should be kept away from high-stakes or non-error-tolerant tasks (like autonomous hiring decisions or independent legal risk determination)[cite: 2, 6]. Specifically, Week 2's lessons dictate that where the cost of being wrong is catastrophic or where human judgment and auditability are legally and ethically required (such as HR screening or legal contract review), AI must function strictly as a supportive assistant rather than an independent decision-maker[cite: 2, 6].

---

## Exercise: Apply the 5-Criterion Framework to TechCorp

This exercise filters the strongest AI candidates from the value chain map through the five criteria: **Repetitive**, **Pattern-based**, **Error-tolerant**, **Cost-justifiable**, and **Verifiable**[cite: 2, 6]. 

### 5-Criterion Candidate Filter Table

| Process | Repetitive? | Pattern-based? | Error-tolerant? | Cost-justifiable? | Verifiable? | Verdict |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Support ticket sorting[cite: 2, 6] | Yes (daily)[cite: 2, 6] | Yes (text classification)[cite: 2, 6] | Yes (agent reviews)[cite: 2, 6] | Yes (4,200 tickets/month)[cite: 2, 6] | Yes (resolution time, CSAT)[cite: 2, 6] | Strong[cite: 2, 6] |
| Invoice processing[cite: 2, 6] | Yes (600/month)[cite: 2, 6] | Yes (data extraction)[cite: 2, 6] | Yes (AP reviews)[cite: 2, 6] | Yes (15 min × 600 = 150 hrs/month)[cite: 2, 6] | Yes (error rate, processing time)[cite: 2, 6] | Strong[cite: 2, 6] |
| Resume screening[cite: 2, 6] | Yes (300/month)[cite: 2, 6] | Yes (text matching)[cite: 2, 6] | Partially (bias risk)[cite: 2, 6] | Yes (15 hrs/month)[cite: 2, 6] | Partially (hire quality is subjective)[cite: 2, 6] | Risky — guardrails needed[cite: 2, 6] |
| Marketing content[cite: 2, 6] | Yes (weekly)[cite: 2, 6] | Yes (format generation)[cite: 2, 6] | Yes (editor reviews)[cite: 2, 6] | Medium (time saved is real but output is 4 posts/month)[cite: 2, 6] | Yes (engagement metrics)[cite: 2, 6] | Strong[cite: 2, 6] |
| Code review[cite: 2, 6] | Yes (120 PRs/week)[cite: 2, 6] | Partially (pattern but context-specific)[cite: 2, 6] | Yes (developer reviews)[cite: 2, 6] | High (120 × 3 hrs = 360 hrs/week across team)[cite: 2, 6] | Partially (bug catch rate)[cite: 2, 6] | Risky — needs human review[cite: 2, 6] |
| Contract review[cite: 2, 6] | Yes (25/quarter)[cite: 2, 6] | Yes (text analysis)[cite: 2, 6] | Yes (lawyer reviews)[cite: 2, 6] | Medium (25 × 4 hrs = 100 hrs/quarter)[cite: 2, 6] | Yes (flagged clauses vs. actual risks)[cite: 2, 6] | Risky — lawyer decides[cite: 2, 6] |
| Churn detection[cite: 2, 6] | Yes (continuous)[cite: 2, 6] | Yes (data patterns)[cite: 2, 6] | Partially (false positive annoy CSMs)[cite: 2, 6] | High (8% churn × €43,200/customer)[cite: 2, 6] | Yes (churn rate, save rate)[cite: 2, 6] | Risky — needs CSM judgment[cite: 2, 6] |
| Report generation[cite: 2, 6] | Yes (50/month)[cite: 2, 6] | Yes (SQL + data patterns)[cite: 2, 6] | Yes (analyst reviews)[cite: 2, 6] | Yes (50 × 2 hrs = 100 hrs/month)[cite: 2, 6] | Yes (accuracy vs. manual)[cite: 2, 6] | Strong[cite: 2, 6] |

---

## Activity 1: The Clinic — Self-Diagnostic & Build Diagnosis

### Step 1: Self-Diagnosis
Looking across the six diagnostic patterns, my Build most critically aligns with:
* **Pattern 6: Accuracy $\neq$ value** (*"My tool works. I still can't say what it's worth to anyone."*)[cite: 2, 6]
* **Pattern 1: No formula** (*"I know it saves time sorting employee feedback, but I can't turn that into a defensible number."*)[cite: 2, 6]

*Context from my GitHub Build:* My HR AI Sentiment Classifier achieved a 70% pass rate across 10 test inputs, with specific failure tags identified (F1 wrong, F2 fabricated, F6 inconsistent)[cite: 1, 2, 6]. While I know the accuracy metrics, I needed to convert these test results and error rates into a rigorous financial business case[cite: 2, 6].

### Step 2 & 3: The Clinic Fix (Quantifying My Build)
1. **Current Baseline (Manual HR State):**
   * **Volume:** An enterprise HR department receives roughly 300 unstructured employee feedback comments per month[cite: 2, 6].
   * **Current Cost:** An HR recruiter manually reads and categorizes each comment (5 minutes per comment × 300 = 1,500 minutes = 25 hours/month)[cite: 2, 6].
   * **Loaded Hourly Rate:** €44/hour for an HR recruiter (Belgian market rate)[cite: 2, 6].
   * **Total Current Manual Cost:** 25 hours × €44 = €1,100/month (€13,200/year)[cite: 2, 6].
2. **The AI Benefit (Time Saved):**
   * **With AI:** The tool classifies comments instantly, and HR personnel only spot-check or review edge cases (reducing sorting time to 1 minute per comment)[cite: 2, 6].
   * **New Time:** 300 comments × 1 min = 300 minutes = 5 hours/month[cite: 2, 6].
   * **Time Saved:** 25 − 5 = 20 hours/month saved (240 hours/year)[cite: 2, 6].
   * **Annual Value (Time Saved):** 240 hours × €44/hr = €10,560/year[cite: 2, 6].
3. **Factoring in Measured Error Costs (Week 2 & 4 Link):**
   * In my test logs, the tool has a 30% failure/error rate (90 misclassified comments per month)[cite: 1, 2, 6].
   * An HR manager spends 3 minutes correcting each misclassification (90 × 3 min = 270 minutes = 4.5 hours/month)[cite: 2, 6].
   * **Correction Cost:** 4.5 hours × €44/hr = €198/month (€2,376/year)[cite: 2, 6].
4. **Subtracting AI Costs (Week 1 Cost Literacy):**
   * **Token Cost:** Negligible for 300 text prompts per month (under €5/year)[cite: 1, 2, 6].
   * **Implementation/Setup:** Estimated at a one-time cost of €500 for initial prompt tuning[cite: 2, 6].
5. **Net Benefit Summary:**
   * **Gross Benefit (Time Saved):** €10,560/year[cite: 2, 6]
   * **Less Error Correction Cost:** −€2,376/year[cite: 1, 2, 6]
   * **Less AI Cost (Year 1):** −€505/year[cite: 2, 6]
   * **Net Benefit (Year 1):** **€7,729/year**[cite: 2, 6]

---

## Activity 2: Cross-Pollination — Summary & Collective Patterns

* **Format & Purpose:** One representative per diagnostic cluster shares their group's pattern and fix in 90 seconds[cite: 2, 6]. This allows students to gather fixes for all six clinic bottlenecks[cite: 2, 6].
* **Key Value-Side Patterns Collected:**
  1. *The "Time Saved" Trap:* Never assume gross hours saved equal cut headcounts; frame time savings as *capacity unlocked* for higher-value work[cite: 2, 6].
  2. *The Hidden Cost of Error Correction:* Every error rate carries a downstream labor cost that must be subtracted from the business case[cite: 1, 2, 6].
  3. *Token Costs vs. Overhead Reality:* Token bills are noise; real expenses are setup, ongoing maintenance (20–30% of setup), and human oversight labor[cite: 2, 6].

---

## Activity 3: Quantify Your Own Build — In-Depth Business Case

### Consolidated Benefit Quantification Table

| Benefit Category | Current State | With AI | Annual Value (€) |
| :--- | :--- | :--- | :--- |
| **Time saved**[cite: 2, 6] | 25 hrs/month at €44/hr[cite: 2, 6] | 5 hrs/month[cite: 2, 6] | €10,560 / year[cite: 2, 6] |
| **Revenue increase**[cite: 2, 6] | —[cite: 2, 6] | —[cite: 2, 6] | €0[cite: 2, 6] |
| **Cost reduction**[cite: 2, 6] | €0 / year[cite: 2, 6] | €0 / year[cite: 2, 6] | €0[cite: 2, 6] |
| **Risk mitigation**[cite: 2, 6] | 5% × €10,000 × 30%[cite: 2, 6] | Early HR alert buffer[cite: 2, 6] | €150 / year[cite: 2, 6] |
| **GROSS BENEFIT**[cite: 2, 6] | | | **€10,710 / year**[cite: 2, 6] |
| **Less: AI Cost (Year 1)**[cite: 2, 6] | Tokens (€5) + Setup (€500) + Maint (€100) + Error Correction (€2,376)[cite: 1, 2, 6] | | **−€2,981 / year**[cite: 1, 2, 6] |
| **NET BENEFIT (Year 1)**[cite: 2, 6] | Gross Benefit minus Year 1 Costs[cite: 2, 6] | | **€7,729 / year**[cite: 2, 6] |
| **Payback Period**[cite: 2, 6] | One-time setup (€500) ÷ Monthly Net Benefit (€644.08)[cite: 2, 6] | | **0.8 months**[cite: 2, 6] |

---

## Capstone Checkpoint 1: Scenario Lock

1. **The company:** TechCorp Belgium (a mid-sized B2B SaaS company headquartered in Ghent with 500 employees)[cite: 2, 6].
2. **The decision:** Should TechCorp implement an automated AI sentiment classifier to monitor employee feedback channels across Slack and Teams, or rely exclusively on quarterly manual HR pulse surveys?[cite: 2, 6]
3. **The reader:** Chief Human Resources Officer (CHRO)[cite: 2, 6].
4. **Why it matters:** If they get this wrong and deploy an intrusive monitoring tool, it will trigger severe change fatigue, data privacy distrust, and an increase in employee turnover costing the company upwards of €50,000 in recruitment and lost productivity[cite: 2, 6].
5. **What I still need to find out:** The exact volume of weekly unstructured feedback across multi-language channels (FR/NL/EN) and the true tolerance threshold of employees regarding automated sentiment tracking[cite: 2, 6].
