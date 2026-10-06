# Signal #2: The best AI decision I made this week was a COUNTIFS

**Beat:** coordinating internships and individual Bachelor Projects (BAP) for ~76 Business & Management students.

This week I kept building our AI-powered Coordination Hub: role-based views, personalised to do lists, creating Outlook drafts, an "Ask the hub" chat. Yet the most useful fix of the week contained zero AI.

## The problem

Our worklist has a "Numbers" tab: students per programme, abroad vs. Belgium, per coach. Those numbers drive coach allocation and workload. This week the tab was off by one. The cause: two students sat on the wrong tabs of the worklist, and a static total didn't notice, but Claude did.

The tempting move: "The hub has a chat, just ask Claude how many IBM students are abroad." So I ran it through the framework.

## The five questions

1. **Do I know the answer already?** Not the number, but I know the rule exactly: count rows where programme = X and destination = Y. When the logic is fully known, you don't need a model to reason about it. You need something to execute it.
2. **Is the cost of being wrong higher than the cost of being slow?** Not really. A wrong count means a coach with one student too many, or a student with no coach at all. That's not a disaster, they will contact us. 
3. **Is the information stable or changing?** Quite stable, although slightly changing daily, as the administrator changes coaches, adds mentors and coaches add topics. This is the borderline one: changing data sounds like an argument *for* AI ("just ask again!"). It actually argues for a self-updating formula. An AI answer is a snapshot I'd have to re-request and re-check every time; a formula recalculates on every edit.
4. **Can I verify the AI's answer?** Only by counting the rows myself. If verifying means redoing the work, the AI step adds cost and no trust.
5. **What's the simplest tool?** `COUNTIFS`. We rebuilt the Numbers tab with self-updating formulas in a clearer table. Two tables actually. Transparent, auditable by any colleague, zero tokens. Less brain pain.

## A second signal, same lesson

I wanted personalised emails to land as drafts in Outlook. First attempt: let AI drive Outlook via computer use. But I don't trust the tool enough to do that. The simpler solution: the hub generates a zip of .eml files that I open in Outlook myself. Same result, no AI hands in my mailbox, and I stay the sender. 

## Where AI *does* earn its place

This isn't "AI bad, Excel good". Drafting 76 personalised emails in the right language, with each coach's own signature and `[MISSING]` flags where data is absent: that's where AI shines. High volume, easy to verify by reading, and a human checks every draft before it goes out. Counting isn't that kind of job.

My new rule of thumb: **AI for language and judgment, formulas for facts.**

## A personal note

Honestly? I got addicted to this course during my business trip to India 😄 The exercises are hard, and I always feel some resistance at first because I don't immediately see how to tackle them. But struggling through them is exactly where the value is: I can feel it changing how I think about tools, not just how I use them. 
My Coordination Hub isn't perfect yet, but I am already proud of what it looks like today.
My GitHub folder isn't perfect yet, but I'm finally understanding what to do and how. 
More coming soon 🙂

