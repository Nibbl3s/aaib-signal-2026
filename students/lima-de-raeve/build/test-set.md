# Test Set — SoloShop Customer Enquiry Classifier

**Date:** 8 October 2026  
**Prompt version:** v1  
**Test platform:** Google AI Studio (Gemini)  
**Purpose:** Evaluate whether AI can accurately classify real-world customer enquiries for a one-person online business.

## Methodology

The test set consists of ten publicly sourced customer messages and questions. Some come from businesses other than SoloShop and are used as realistic examples of incoming enquiries.

Each message is classified into one of three categories:

- **AUTOMATE:** Routine enquiries that can be handled through standard customer-service processes.
- **HUMAN INTERVENTION:** Situations requiring escalation according to SoloShop's policies.
- **INSUFFICIENT INFORMATION:** Messages where the request cannot be identified clearly enough.

Expected answers are recorded below separately from the model's results. Each input is tested twice using the same prompt.

**Source note:** Add the original URL for each message before submission. Remove personal details, including names, usernames and contact information.

---

## Input 1 — Missing delivery and guest checkout

**Customer message:**

> My item hasn't arrived but I can't find a way to report this. I couldn't remember my password to my ebay account so purchased as a guest. The item hasn't arrived. EBay doesn't recognise my order in my account so i can't escalate to the buyer. Any help appreciated.

**Expected:** AUTOMATE

**Reasoning:** The main problem is a missing order and difficulty accessing tracking or support. The customer could initially receive automated instructions for guest orders. Human intervention may become necessary if the automated process cannot resolve the issue.


## Input 2 — Missing tracking and dispute with seller

**Customer message:**

> I recently ordered an item and it got to be about 5 days past the estimated arrival date. I checked the order details and there was no tracking number or link to track like most items have. It was reported as shipped, but no tracking info was visible to me.
>
> It's the holidays, things get delayed, no big deal. I'd still like the item and it's not so much money that I'm going to get freaked out over it. I clicked the 'Item hasn't arrived yet' link, said I wanted the item (not a refund yet) and asked for a tracking number.
>
> Now the seller claims that because I filed a complaint, he has no access to the tracking number or his funds on eBay. He says eBay has blocked his access. This makes zero sense because according to the eBay articles on 'items not arrived', seller is supposed to either give me a tracking number or give me refund. How could he do either if that's true? But is it? eBay doesn't always make perfect sense from the outside.

**Expected:** HUMAN INTERVENTION

**Reasoning:** The enquiry has developed beyond a standard tracking request into an unresolved dispute involving the seller and access to funds.


## Input 3 — Undelivered international order and rejected refund

**Customer message:**

> I am from Europe and I ordered some PVC glue from the US in value of 120USD, on the 20th of November 2024 and then got an information on the 2nd of December that the order was shipped to the international hub.
>
> If I track the order, the status is still shown as "Shipped to our international hub" and doesn't seem to be "Arrived at our international hub"
>
> The order never arrived so I asked for a refund on the 10th of February but e-bay declined the refund and said that they received information from the seller that the order was delivered or will be delivered shortly.
>
> I didn't agree with that, so on the 12th of February I appealed but they refused again, saying the they do not change the outcome.
>
> So what are my options here? Can anyone help me with suggestions?

**Expected:** HUMAN INTERVENTION

**Reasoning:** The customer is disputing a rejected refund and has already exhausted standard support procedures.


## Input 4 — Inactive link (Dutch)

**Customer message:**

> Wat kan ik doen als de link niet actief is?

**Expected:** AUTOMATE

**Reasoning:** A basic technical-support question that could initially receive standard troubleshooting instructions.


## Input 5 — Premium shipping (Dutch)

**Customer message:**

> Wat houdt premium verzending in?

**Expected:** AUTOMATE

**Reasoning:** A straightforward request for information about a shipping option.


## Input 6 — Clothing size and fit (Dutch)

**Customer message:**

> Hoe vind ik de juiste maat of pasvorm?

**Expected:** AUTOMATE

**Reasoning:** A routine product question that could be answered using a size guide.


## Input 7 — Security breach complaint (Spanish)

**Customer message:**

> No estoy de acuerdo ustedes deben responder no tuve ninguna responsabilidad en qué hayan vulnerando su seguridad confié mi dinero en sus servicios, yo adjunte la denuncia encuentro bastante poco profesional que ni siquiera hayan revisado el documento que adjunte, necesito contactarme con alguien que me de una solución

**Expected:** HUMAN INTERVENTION

**Reasoning:** The customer reports a security incident, references a formal complaint and explicitly requests contact with someone who can resolve the situation.


## Input 8 — Instructions about survey responses (Spanish)

**Customer message:**

> Donde dice "tu perfil", respondan a todas las preguntas positivamente. Por ejemplo, respondan que tienen trabajo, que tienen una carrera terminada, que están bien económicamente, etc. Eso porque son más encuestas para las personas que tienen dinero ya que eso busca la app.

**Original expected:** HUMAN INTERVENTION

**Original reasoning:** The message does not fit routine customer-service categories and may require human review.

**Boundary issue:** This is not a clear customer-service request. The existing prompt does not explicitly define how to classify unrelated messages or instructions about another service. INSUFFICIENT INFORMATION is also defensible under the current rules.


## Input 9 — Content creator collaboration request

**Customer message (anonymised):**

> Hi Team,
>
> My name is [Name], and I'm interested in collaborating with Solo as a content creator, I'd love the opportunity to create fashion and lifestyle content featuring Solo products.
>
> Instagram: [Removed]
>
> TikTok: [Removed]
>
> Contact: [Removed]
>
> I'd love to hear about any current collaboration opportunities.
>
> Best,
>
> [Name]

**Original expected:** INSUFFICIENT INFORMATION

**Original reasoning:** The request falls outside the standard customer-service tasks covered by the classifier.

**Boundary issue:** The request itself is clear, so the information is not actually insufficient. The current prompt lacks a specific category for business partnerships. Human review may be more appropriate operationally.


## Input 10 — Review sweepstakes

**Customer message:**

> How are the review sweepstakes winners notified?

**Expected:** AUTOMATE

**Reasoning:** A straightforward informational question that could be answered using the company's official sweepstakes rules.


---

## Test set limitations

- Some inputs originate from businesses other than SoloShop.
- Several messages concern processes that SoloShop's fictional policy does not explicitly address.
- Some examples are public forum posts rather than direct customer-service emails.
- Inputs #8 and #9 expose ambiguities in the classification categories.
- Expected labels should remain visible in their original form so that subsequent prompt improvements can be evaluated transparently.
