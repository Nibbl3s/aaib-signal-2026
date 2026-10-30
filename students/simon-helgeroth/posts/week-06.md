# What AI-Powered Job Ad Auditing Actually Costs an HR Agency at Scale

Recruitment agencies are deploying AI to audit draft job advertisements for clarity before publication. It promises to save recruiters time and looks incredibly cheap on paper. However, I modeled the true costs, and the hidden cost of fixing AI mistakes quickly changed what you think you’re saving.

Recruiters at recruitment agencies such as Academic Work use the AI to audit draft job ads against different criteria to detect vagueness before publication. Each evaluation requires the AI to process prompt system instructions against the target job ad text. The token input was 687 and the model then generates structured audit feedback and vagueness flags. This led to 247 output tokens on average. Let’s say one recruiter evaluates 15 job ads per day, which gives approximately 334 ad evaluations per month. This is deliberately unrealistic: 334 is roughly what Academic Work publishes across the whole agency in a month, so no single recruiter would audit that many. I use it as a stress test on purpose.

Using Google AI Studio’s gemini-3.8-flash standard paid tier, the input price is $0.75 per 1,000,000 tokens and the output price is $3.75 per 1,000,000 tokens. That gives a unit cost of $0.0014415 per call.

| Scale | Users | Calls/user/day | Total calls/day | Unit cost | Daily cost | Monthly cost |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Prototype | 10 | 1 | 10 | $0.0014415 | $0.0144 | $0.43 |
| Small | 100 | 5 | 500 | $0.0014415 | $0.7208 | $21.62 |
| Medium | 1,000 | 10 | 10,000 | $0.0014415 | $14.4150 | $432.45 |
| Large | 10,000 | 15 | 150,000 | $0.0014415 | $216.2250 | $6,486.75 |

For one recruiter at 334 audits per month, the pure API cost is around $0.48 per month, which is entirely negligible. This is where most cost models stop.

Now add the error cost for that same recruiter. The measured error rate is 70%. For 334 job ad audits per month, that means 233.8 errors. If the recruiter (with a loaded cost of €44/hr) spends 10 minutes to review and fix an error, the remediation cost is €7.33 per mistake. This results in €1,715 per month in remediation costs. At an assumed rate of about €0.90 per $1, the token cost is roughly €0.43, so the error cost is about 4,000 times higher than the token cost.

The unit economics do not break due to API volume. The binding variable is the human remediation cost. At a 70% error rate, €1,715 is lost per month fixing AI mistakes. This represents 41% of a recruiter’s entire monthly base cost and destroys the business case. However, this break point rests on a crucial workflow assumption. If the recruiter simply clicks “Regenerate” when an error occurs, instead of spending 10 minutes manually correcting the draft, the cost per error drops dramatically from €7.33 in human labor to roughly €0.0013 in API tokens.

What surprised me most is that the true cost of an AI tool is almost entirely dictated by the workflow design, not the LLM’s pricing tier. Because pure API costs are negligible compared to employee labor value, builders in HR tech must optimize the user experience for fast error recovery. If the interface forces a human to manually fix a bad output, the tool will destroy its own margins.

If workflow design dictates the unit economics, how do we build AI interfaces that encourage recruiters to immediately regenerate bad responses, instead of sinking their expensive time into fixing them?
