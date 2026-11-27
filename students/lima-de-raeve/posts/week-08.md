# Week 8 — Designing an AI Architecture for a One-Person Business

## From a working prototype to a defensible business solution

An AI tool that performs well during testing is not necessarily ready for business implementation. This week, I explored how an entrepreneur can design an AI architecture that balances reliability, financial value, integration and operational risks. For a one-person business, the challenge is not simply finding the most capable AI model, but creating a system that remains manageable without a dedicated IT department.

## The company: SoloShop

SoloShop is a hypothetical Belgian online clothing retailer operated by a single entrepreneur. The founder is responsible for inventory, marketing, sales, order management and customer service. As the business grows, responding to customer enquiries becomes increasingly time-consuming, potentially limiting opportunities for further expansion.

My proposed solution is an AI-powered customer service classifier that categorises incoming messages into three groups: Automate, Human Intervention and Insufficient Information. The objective is to reduce repetitive administrative work while ensuring that important complaints, financial disputes and exceptional requests receive personal attention. This allows the entrepreneur to dedicate more time to business development without immediately hiring additional employees.

## The proposed five-layer architecture

**Data layer:** The system receives customer messages from the company's email platform. In a future implementation, it would also access relevant order information, product availability and company policies through authorised integrations with the e-commerce platform. Only information necessary to process each enquiry should be accessible to the AI.

**AI layer:** I propose using a cloud-based Gemini model rather than operating a local model. Previous experiments with a small local Llama model demonstrated limitations in classification reliability. During this week's experiment, I revised my Gemini classifier to prioritise identifiable complaints and financial claims, even when additional information is missing.

**Integration layer:** An automation platform could connect incoming customer emails to the classifier through an API. The classification would determine whether the message is suitable for a standard response, requires clarification or needs the entrepreneur's attention. If the AI becomes unavailable, messages remain accessible through the original email platform and can be processed manually.

**Interface layer:** Rather than introducing an entirely separate working environment, the system should integrate with the entrepreneur's existing email workflow. During the initial pilot, the founder would review classifications and proposed responses before allowing autonomous communication.

**Governance layer:** The system should record classification results, errors, token consumption and processing times. Customer information should be protected through restricted access, appropriate retention policies and GDPR-compliant processing arrangements. Particular attention should be given to complaints incorrectly classified as suitable for automation.

## Defending the design

Before investing in a customised AI solution, SoloShop should investigate whether its existing e-commerce and customer service platforms already offer sufficient AI functionality. A built-in solution could reduce implementation complexity and maintenance requirements. However, a separate classifier offers greater control over classification rules, provider selection and testing.

My revised classifier achieved 100% agreement with expected classifications across ten challenging messages, compared with 80% before the revision. Both previously identified errors were corrected. However, these results come from a small dataset that was reused after the revision and do not guarantee equivalent performance with real customers.

The improvement also came with a higher estimated inference cost. Based on individual token measurements and previously established pricing assumptions, the cost increased from approximately $0.10 to $0.57 per 1,000 classifications. Although this represents a significant relative increase, the absolute difference remains small compared with the potential consequences of mishandling customer complaints.

If the provider increases its prices or discontinues the model, SoloShop should investigate alternative providers before deciding whether to migrate. Maintaining standardised classification categories and separating business rules from provider-specific functionality would reduce dependency. If message volumes triple, inference costs should increase approximately proportionally, assuming similar token consumption and unchanged pricing.

## My remaining question

The assumption I am least certain about is whether the classifier will maintain sufficient reliability when exposed to unpredictable real customer messages. I would therefore introduce a supervised pilot lasting two to three months, continuously evaluating classification accuracy, time savings and missed complaint escalations before deciding whether greater automation is justified.

This week's main lesson is that AI can help a one-person business grow, but its value depends on designing a reliable business process around the technology rather than simply implementing the technology itself.
