# Signal Post 7 – Build, Buy or Connect? The Architecture Behind AI in Fashion E-commerce

## The Hook

AI helps fashion retailers create product content faster and personalize customer experiences. But choosing the wrong architecture can make a company dependent on one technology provider. The important question is not only what AI can do, but also how easily a retailer can switch providers when prices or conditions change.

## The Use Case: Omoda

Omoda is a Dutch fashion and footwear retailer. A realistic AI use case is automatically generating product descriptions for its webshop.

Fashion retailers manage large catalogues with information about brands, materials, colours, sizes and product features. Writing every description manually takes time and makes consistent communication harder.

An AI-powered generator could turn structured product information into attractive descriptions using a Large Language Model (LLM). Employees would review the text before publication. This could improve efficiency while allowing the marketing team to focus on creative work.

## The Decision: Build, Buy or Connect?

For this use case, I recommend **Buy**: use an existing cloud-based LLM API instead of developing a proprietary model.

Applying the five-question framework:

1. **Is AI the competitive advantage?** Not necessarily. Omoda's competitive advantage is broader than its text-generation technology.
2. **Is this a commoditized problem?** Yes. Text generation is an established capability with several existing solutions.
3. **Are multiple AI capabilities needed?** Not for this use case. The main requirement is product description generation.
4. **Will requirements change significantly?** They may evolve, but that alone does not justify a custom architecture.
5. **Does the company have engineering capacity?** A managed API avoids the need to build and maintain its own AI infrastructure.

Buy offers faster implementation and avoids unnecessary development costs. However, Omoda should not become completely dependent on one provider.

## The Lock-In Scorecard

The proposed architecture receives these estimated scores:

- **Data Portability: 1/3.** Product information and generated descriptions can be stored in standard formats such as JSON or CSV.
- **API Stability: 2/3.** The application depends on the provider's API. Changes could require integration updates.
- **Pricing Control: 2/3.** Token price increases or changes to pricing tiers could raise operating costs.
- **Feature Dependency: 1/3.** Basic text generation is available from multiple providers, making alternatives possible.
- **Migration Cost: 1/3.** Switching requires integration changes and quality testing, but prompts and product data can largely be reused.

**Total: 7/15 – Moderate Lock-In Risk.**

The biggest risks are API stability and pricing control. A provider could change its API or increase prices even when the generated content remains reusable.

## The Migration Path

If prices increased significantly, Omoda could move to another LLM provider. The estimated migration effort is **40–80 engineering hours**, depending on integration complexity and testing. This is a planning estimate, not a measured cost.

A thin abstraction layer would separate the webshop application from the provider-specific API. Prompts, product data and generated descriptions should also be stored independently. The team should test an alternative model before a switch becomes urgent.

## The Insight

This example shows that AI adoption in fashion e-commerce is not only about choosing a powerful model. Retailers should buy standard AI capabilities when that is practical, while keeping control of their data and integrations. Flexibility is just as important as efficiency.