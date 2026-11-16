# From Proofreader to Decision Maker: Scaling Job Ad Quality

In high-volume staffing, checking job ads before publishing is a slow manual chore. Publishing hundreds of job postings every month creates a risk of vague wording, missing deadlines, and confusing requirements that turn good applicants away. Showing the financial ROI of an automated ad reviewer shows how staffing companies can publish faster without letting quality slip.

An LLM-based ad auditor can be built straight into the publishing system. Instead of writing ads from scratch, the AI works as a quick filter. Before any ads go live, the AI scans them against a checklist covering for example application deadlines, work location, and required skills etc. It flags any unclear wording for the recruiter or publishing coordinator to quickly fix before hitting publish. This sits at the end of the process, right before ads go live on job boards.

Academic Work Sweden publishes 334 job ads per month, which equals 4,008 ads per year. Looking at this across four benefit areas gives a clear financial case. For direct time savings, a recruiter costs €44 per hour fully loaded. Reading and cross-checking an ad manually takes about 10 minutes, which equals 668 hours or €29,392 per year.

With AI pre-screening, the recruiter only spends about 2 minutes reviewing flagged items. Saving 8 minutes per ad across 4,008 ads equals 534.4 hours saved per year. Multiplying 534.4 hours by €44 per hour gives €23,514 per year in direct time savings.

Faster review could get job ads live sooner, which might fill roles a little earlier. I do not have data on how much sooner ads are filled, so I set this to €0 in this case. This is because the effect is hard to prove.

For risk mitigation, fixing vague requirements like several years of experience might stop unqualified applications and keep good candidates interested. I do not have data on how many ads have this problem, so the value is also set at €0. For capacity expansion, recruiters could handle more ads without extra staff, but this is already counted in the direct time savings. It would only add value if ad volume grows and the review would otherwise require a new hire, so I set this at €0 as well. This brings total gross benefits to €23,514 per year.

Calculating the AI cost using the course standard rate of $2.00 for input and $12.00 for output per million tokens, with an exchange rate of $1.00 to €0.92, shows very low running costs. Using 2,500 input tokens and 500 output tokens per ad audit, the yearly input is 10.02 million tokens ($20.04) and yearly output is 2.004 million tokens ($24.05). Converting this combined $44.09 to euros gives an API running cost of €41 per year. Adding a one-time build cost of €8,000 for system setup and prompt testing, plus €2,500 per year for prompt maintenance, brings total Year 1 costs to €10,541, and ongoing costs to €2,541 per year.

Subtracting the Year 1 cost of €10,541 from the gross benefit of €23,514 leaves a Year 1 net benefit of €12,973. Dividing the initial €8,000 build cost by the monthly savings of €1,959.50 gives a payback period of 4.1 months.

To pressure-test these numbers, imagine the estimates are 50% off. Time saved drops to 4 minutes per ad, and the build cost jumps by 50% to €12,000. Under this stress test, annual savings drop to €11,757 and Year 1 costs rise to €14,541. This creates a small first-year loss of -€2,784. However, the payback period becomes 12.2 months, meaning the project breaks even at 12 months and generates pure profit in Year 2.

The main takeaway is that API token costs for simple text checks are tiny (€41 per year for over 4,000 ads). The real investment is in setting up the system and keeping the guidelines updated. The true value comes from turning recruiters from manual proofreaders into quick decision-makers, saving over 500 hours a year while ensuring every job ad is clear and compliant.
