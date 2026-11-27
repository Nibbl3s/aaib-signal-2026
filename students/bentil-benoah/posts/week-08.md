---
week: 8
title: "Can a small local AI model handle customer enquiries in Odoo?"
author: "Bentil Benoah Boakye"
beat: "AI in ERP and Business Process Automation"
skill: "Design defense"
date: 2026-11-27
---

# Can a small local AI model handle customer enquiries in Odoo?

## The Hook

Before taking this course, I was mainly interested in what AI could automate within an ERP system like Odoo. After testing my own classifier over the past few weeks, I realised that getting an AI model to work is only one part of the problem. The bigger challenge is integrating it into a business without creating more problems than it solves.

## The Company

For this week's design, I created a hypothetical Belgian SME called BelSupply BV. It is a wholesale and e-commerce company based in Ghent with 45 employees. The company already uses Odoo and receives around 100 customer enquiries per working day in Dutch, French, English and German.

Employees currently categorise these enquiries manually before forwarding them to the right department. My proposal is to use AI to assist with this repetitive task. The company has a first-year budget of €15,000 and three months to implement the solution. I deliberately limited the scope to classification rather than automating the entire customer service process.

## The Architecture

**Data Layer:** Customer enquiries enter Odoo Helpdesk through email. Middleware passes only necessary text to the model; customer records remain in Odoo.

**AI Model Layer:** I chose Llama 3.2 3B running locally through Ollama. In Week 7, my classifier achieved 20% exact category matches. Removing the numbered list and prohibiting numbers and explanations improved results to 80% and 90% on the same ten enquiries, tested twice. Overall, this is 17/20 correct, a 65 percentage-point improvement. This small, reused set cannot establish production reliability. Ollama's model page does not list Dutch among the officially supported languages.

**Integration Layer:** Python middleware connects Odoo and Ollama, validates the five accepted labels and handles timeouts. Odoo's external API requires a suitable plan; my budget assumes access already exists. If the classifier fails, employees use the manual queue.

**Interface Layer:** Employees remain inside Odoo and approve or correct every suggestion before routing. This matters because the double-payment enquiry was incorrectly classified as Order Status in both Week 8 runs. Format validation would accept those wrong answers.

**Governance Layer:** Record model versions, errors and employee corrections. Restrict access, minimise personal data and define retention periods. I provisionally treat this internal classification task as minimal risk under the EU AI Act, subject to checking the final deployment. It cannot send replies or make financial decisions.

## The Defense

Why not use Odoo's built-in automation? Rules could handle straightforward keywords, but customers describe problems differently. I would compare rules and available built-in AI against this model before investing; I have not established that existing tools are insufficient.

My hypothetical first-year estimate is €11,157.88, including hardware, development, electricity, maintenance, training, review, correction and 15% contingency. That leaves €3,842.12 using the rounded total. At 100 enquiries daily, the monthly first-year cost allocation is €929.82; at 300, €1,708.47. These include allocated upfront spending, not monthly cash outflows. Constant launch volume gives approximately 12% first-year ROI against assumed manual categorisation costs, representing staff capacity rather than guaranteed cash savings.

Local inference avoids external token charges. My experiment recorded 2,606 input and 68 output tokens, but electricity and hardware costs are assumptions. Middleware helps replace models, although every replacement needs testing. Odoo's API and ticket structure remain dependencies.

I would keep the pilot supervised until real handling-time measurements support the savings estimate. A correctly formatted label alone is not enough to justify automatic routing.

The historical cloud test achieved 100%, compared with 85% locally. Different conditions prevent a general conclusion about which is better.

## The Question

Would this system save enough time to justify its cost, or would simple rules perform similarly? Before recommending implementation, I would measure real handling times and test both approaches on a larger multilingual dataset.

**AI disclosure:** I used ChatGPT to help structure the architecture, estimate costs and draft this post. Codex helped prepare and analyse the experiment, which I executed locally through Ollama, and checked calculations and sources. The company and finances are hypothetical; test results are measured. The Odoo integration has not been implemented.

Evidence: [architecture](../build/week-08/belsupply-architecture.md) · [cost model](../build/week-08/belsupply-costs.md) · [experiment](../build/week-08/checkpoint-summary.md) · [source checks, 27 November 2026](../build/week-08/source-checks.md).
