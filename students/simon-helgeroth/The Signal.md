# The hidden costs of AI in recruiter screening

AI in recruitment is impossible to avoid these days, and it is common in all aspects of a recruiter's daily tasks. Say for example that you submit an application for your dream job. Would you prefer that an experienced recruiter reviewed it first or after an AI already graded it? Depending on the AI subscription used, could it possibly determine what kind of resume is considered the best? 

One common use of AI in recruitment is screening. Screening is the first glance at a candidate's resume and often contains some sort of assessment of previous experience and fit for the role. 

To compare the input token cost, I submitted my fairly short curriculum vitae on 123 words in both Swedish and English. The English resume contained 244 tokens while the Swedish one contained 305. Another important fact in this scenario is that resumes often are longer than 123 words and usually contain between 400-500 words. As I worked in Sweden it was also preferred and standard that the resume was written in Swedish. Therefore, an estimation is that a resume on 400 words in Swedish would contain around 900 tokens.  

If an office of recruiters handles 1000 applications a month, it would therefore look like this: 1000 (resumes) x 900 (tokens) = 900 000 tokens.  

Assuming the price is $2.00 per million input tokens: 0.9 x $2.00 = $1.80 per month.  

As previously stated, AI in recruitment can also grade and summarize resumes which in this case acts as the output tokens. In my experience the output often comes as the same language as the input, and therefore mostly occurs in Swedish. The summary is usually quite short and contains about 150 words, which can be estimated to have a token cost of 350 tokens.  

The calculation would then look like this: 1000 (resumes) x 350 (tokens) = 350 000 tokens.  

Assuming the price is $12.00 per million output tokens: 0.35 x $12.00 = $4.20 per month. 

The total token cost per month is $6.00, or €5.52 (6x0.92), which makes the yearly cost around €66.  

Prices: Ai Pricing Reference, snapshot 7 September 2026 (Standard tier: $2.00/1M input, $12.00/1M output). 

But token cost isn't the full picture. A SHRM survey found that 19% of organizations using AI as a tool in recruitment reported that it screened out qualified candidates. Applied to the 1000 applications a month mentioned above that would mean 190 potentially misjudged resumes.  

The actual cost of a human agent having to double-check resumes, arrange an extra interview, and extend an advertisement adds invisible costs of AI. A rough estimate of 3 extra hours of recruiter time at €30/hour per missed candidate could look like: 190 x 3 x €30 = €17,100 per month. This adds over 3000 times the estimated €5.52 token cost.  

The estimate of 3 extra hours, as well as the €30/hour per recruiter, is the weakest part in this case as I don’t have real data on actual time and prices.  

So basically the real understanding of AI in screening is not about the price for the tokens themselves, but rather if the trade-off is actually worth it. Say for example that it is the same kind of resumes that keeps getting rejected, and that the recruiter repeatedly must double-check the work. That cost does not show up on an invoice and may also lead to inefficiency instead. Further a pattern of missorted candidates raises risk of discrimination and adds to the questions regarding AI bias in recruitment. 

Next weeks topic and question: When does an AI's assessments stop being trustworthy?
