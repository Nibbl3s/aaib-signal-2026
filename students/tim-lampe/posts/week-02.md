# The part of my build where AI is the wrong tool

My beat is AI in financial due diligence. My build is a prompt that reads two annual reports from the same company and flags inconsistencies between the years. I ran it twice on each of ten report pairs, then ran the "no AI" framework against it. The honest result is that for most of what the prompt does, AI is the wrong tool.

## What the tests showed

Two of ten inputs were correct. Six gave different answers in two runs of the same prompt on the same documents. On Siemens, one run produced 3 flags and the other 11, and only 2 of 12 distinct flags appeared in both. On Munich Re it was 8 flags against 2.

## Applying the framework

**1. Do I know the answer already?**
For part of the job, yes. Checking that a subtotal adds up, or that last year's comparative column matches last year's report, is arithmetic, and I know the method. What I can't know in advance is whether a big change is explained somewhere in 400 pages.

**2. Is the cost of being wrong higher than the cost of being slow?**
Yes. In a transaction, a missed inconsistency flows into a valuation. A false flag costs review time, but a missed flag is invisible. A slower, certain answer wins here, so this question already says: not AI alone.

**3. Is the information stable or changing rapidly?**
Stable. Annual reports are historical.

**4. Can I verify the AI's answer?**
For a footing error, yes: recompute it. For an "unexplained swing", the model is claiming that it found no explanation. That is a claim about absence, and the runs themselves said their search covered only the sections they checked. To verify it, I would have to read the original pages, which is the work I wanted to automate.

**5. What's the simplest tool that solves this?**
A spreadsheet formula catches a mistake in a second, every time, the same way. A script that compares each line of the prior-year column with last year's statement does the same job for restated figures. Neither needs a model, and neither gives a different answer on the second run.

## My finding

The arithmetic and matching half of my build should be a script, and AI is the wrong tool there. What remains for AI is narrow: reading the text and judging whether a change is explained, with a human checking every such call. I picked a job where the easy part never needed AI, and the hard part is exactly where AI is least reliable.

---

*AI disclosure: I used Claude Sonnet 5.5 (Anthropic) to run and compare the test prompts, to draft and format this post and the outreach emails, and to format my log; the test design, the results and the conclusions are mine.*
