Stop Forcing AI to Do Basic Math: Why We Need Code, Not Chatbots, for Invoices

Right now, every company seems desperate to sprinkle generative AI over every boring office task. But trying to use an AI chatbot to match invoices and purchase orders is like using a blowtorch to light a scented candle: it's expensive, dangerous, and completely misses the point.

When you look at how accounts payable actually works, handing it over to a Large Language Model is an accident waiting to happen.
Running It Through the "No AI" Test

Invoice reconciliation isn't a creative writing project. It’s a basic fact check: Does what the vendor charged match what we agreed to pay, and did we actually receive the goods?

When you ask the hard questions before buying into the AI hype, the idea falls apart fast:

    Do we already know the right answer? Yes. Every number—SKUs, unit prices, taxes, and quantities—already exists on paper. The rules for approval are already written down in plain policy.

    Is being wrong worse than being slow? Absolutely. If a system pays the wrong amount, pays twice, or misses a fraudulent fee, that’s real money lost and an audit nightmare waiting to happen. If an invoice sits on a desk an extra couple of hours, nobody gets fired.

    Can you easily verify the AI's work? No. To make sure the AI didn't invent a number, an accountant has to pull up the original files and do the math manually anyway. That completely wipes out the time you were trying to save.

    Is there a simpler, safer tool? Yes: a basic spreadsheet formula, standard database query, or a tiny Python script.

The Real Risks: Guessing Instead of Calculating

Language models don’t actually do math; they guess what the next word or number should look like based on patterns. When you throw messy financial PDFs at an AI, you run straight into two major problems:

    It invents numbers (Hallucination / F2): If an invoice layout is weird or an item description doesn't line up neatly, an LLM won't stop and ask for help. It tries to be helpful by guessing—often quietly smoothing over price discrepancies or making up tax lines that fit the total.

    It gives different answers on different days (Inconsistency / F6): Run the exact same set of invoices through a prompt twice, and you might get two different outcomes depending on how the model feels like phrasing things. You cannot run an accounting audit on a tool that rolls dice behind the scenes.

The Boring Winner: Good Old Deterministic Rules

The right tool for this job has existed for years: standard OCR to read the text, paired with simple, non-AI logic:
IF invoice_total == po_total THEN approve.

A script doesn't hallucinate. It doesn't get confused by sentence structure. It runs in a fraction of a second, costs almost nothing, and leaves a crystal-clear paper trail for auditors.

AI is fantastic for drafting emails, summarizing rambling meeting notes, or brainstorming ideas. But when accuracy matters down to the exact cent, probability is a liability. For invoices, leave the AI out of it and stick to basic, reliable code.
