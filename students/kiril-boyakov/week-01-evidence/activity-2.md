cat > students/kiril-boyakov/week-01-evidence/activity-2.md <<'EOF'

-p students/kiril-boyakov/week-01-evidence

mkdir -p students/kiril-boyakov/week-01-evidence

cat > students/kiril-boyakov/week-01-evidence/activity-2.md <<'EOF'
# Activity 2: Token Discovery Lab

Author: Kiril Boyakov
Languages: English and Russian
Tokenizer: o200k_base at https://tiktokenizer.vercel.app/
Pricing assumption: $0.03 per 1,000 input tokens, as specified in the exercise.

## Method

I measured the customer support email, legal contract clause, and invoice supplied in the assignment in English and Russian. These are classroom documents, not actual freight company records.

Cost = tokens / 1,000 × $0.03.
Difference = Russian cost − English cost.
Percentage increase = (Russian tokens − English tokens) / English tokens × 100.

## Results

| Document | English tokens | English cost | Translation language | Russian tokens | Russian cost | Cost difference | Increase |
|---|---:|---:|---|---:|---:|---:|---:|
| 1: Customer support email | 149 | $0.00447 | Russian | 173 | $0.00519 | $0.00072 | 16.11% |
| 4: Contract, both versions ALL CAPS | 136 | $0.00408 | Russian | 461 | $0.01383 | $0.00975 | 238.97% |
| 5: Invoice | 147 | $0.00441 | Russian | 195 | $0.00585 | $0.00144 | 32.65% |

## Calculations

### Document 1: Email

English: 149 / 1,000 × $0.03 = $0.00447.
Russian: 173 / 1,000 × $0.03 = $0.00519.
Difference: $0.00519 − $0.00447 = $0.00072.
Increase: (173 − 149) / 149 × 100 = 16.11%.

### Document 4: Contract

English: 136 / 1,000 × $0.03 = $0.00408.
Russian, ALL CAPS: 461 / 1,000 × $0.03 = $0.01383.
Difference: $0.01383 − $0.00408 = $0.00975.
Increase: (461 − 136) / 136 × 100 = 238.97%.

### Document 5: Invoice

English: 147 / 1,000 × $0.03 = $0.00441.
Russian: 195 / 1,000 × $0.03 = $0.00585.
Difference: $0.00585 − $0.00441 = $0.00144.
Increase: (195 − 147) / 147 × 100 = 32.65%.

## Question 1: Which document increased most?

The ALL-CAPS contract increased most: from 136 to 461 tokens, an increase of 325 tokens or 238.97%.

There is an important formatting effect. Before converting the Russian body to capitals, it used 188 tokens. With the same wording in capitals it used 461. The mixed-case result was 38.24% above the English ALL-CAPS result, although that comparison does not match capitalization.

The invoice translation also changed capitalization and number formatting. These measurements describe the exact versions tested; they do not isolate language alone or establish a universal Russian-language premium.

## Question 2: Annual difference at 1,000 documents

The Russian ALL-CAPS contract was the most expensive document tested.

English: 1,000 × $0.00408 = $4.08/year.
Russian: 1,000 × $0.01383 = $13.83/year.
Difference: $13.83 − $4.08 = $9.75/year.

These figures include input tokens only, at the exercise's assumed price.

## Question 3: Should customers be forced to use English?

English was cheaper in these tests, but I would still support customers who find Russian more convenient. Requiring English could discourage customers or make their requests less clear. The potential value of accessible service should be weighed against the additional processing cost.

An existing multilingual model may already support Russian without additional training. However, its accuracy with customer requests and freight terminology would need testing. Delegating work to AI still requires enough attention to check its responses.

## Check your understanding

### Why did Russian cost more in these tests?

The tokenizer represented these Russian translations using more tokens. Tokens are text fragments, not whole words, and different languages and capitalization patterns are split differently. Translation length and formatting also affect the count. These results do not prove that every Russian document costs more on every model.

### What premium would I pay?

For these exact samples: 16.11% for the email, 238.97% for the ALL-CAPS contract, and 32.65% for the invoice. I would not apply one of these percentages to an entire business without testing representative documents.

### When is that premium worth paying?

It is worth considering when customers communicate more clearly in Russian, when language choice improves access to the service, or when avoiding misunderstandings is worth more than the extra token bill. Actual service quality and total costs need testing.

## Sources and assistance

Assignment: https://advanced-ai-in-business.vercel.app/week/1
Tokenizer: https://tiktokenizer.vercel.app/

I performed the tokenizer measurements. ChatGPT helped calculate costs and percentages, interpret limitations, and organize these answers from my measurements and views.
