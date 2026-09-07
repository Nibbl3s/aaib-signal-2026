# AAIB Signal — Fall 2026

This repository is the public portfolio of **Advanced AI for Business** (Arteveldehogeschool,
International Business Management). Every student publishes twelve weekly posts here — twelve
dated pieces of public reasoning about AI in a business beat you own.

A recruiter can read this. Make it worth reading.

---

## The one rule that matters

**You work inside `students/your-name/` and nowhere else.**

Forty people share this repository. Everything else follows from that. Never create, edit or
delete anything outside your own folder — not even to "fix" something that looks wrong.

- Folder name: **lowercase, hyphens, no spaces** → `students/lena-devos/`, not `students/Lena Devos/`
- Your folder is created by **copying the example**: copy `students/example-student/` → rename to your name

## Repository structure

```
students/
├── example-student/          ← copy this, then rename
│   ├── profile.md            ← who you are, what your beat is
│   ├── passport.md           ← your Skills Passport (Weeks 4, 8, 12)
│   ├── posts/
│   │   └── week-01.md        ← one worked example post
│   └── build/                ← your Build arrives here in Week 2
│       ├── prompt.md
│       ├── test-set.md
│       └── log.md
└── your-name/                ← yours. Only yours.
```

## Post format

Every post starts with a frontmatter block — the site uses it to build your author page and
order your archive:

```markdown
---
week: 1
title: "Inventory AI Costs More Than You Think"
author: "Your Name"
beat: "AI in European Retail Logistics"
skill: "Cost literacy"
date: 2026-09-25
---

Your post starts here. Plain Markdown.
```

- Filename: `week-NN.md`, **zero-padded** — `week-01.md`, not `week-1.md`. The archive sorts on it.
- `date:` is the date you published (YYYY-MM-DD).

## The weekly workflow

1. `git pull` — always pull before you start (see Conflicts below)
2. Write your post at `students/your-name/posts/week-NN.md`
3. `git add students/your-name/`
4. `git commit -m "week 1: cost literacy on [your beat]"`
5. `git push`
6. Refresh the live site until your post appears — that moment is the assignment

## Conflicts: pull before push, and what to do when it explodes

Forty people push to the same repository. If someone pushed while you were writing, your push
is rejected. The fix is always the same three commands:

```
git pull --no-rebase     # or: git pull --no-rebase origin main
# resolve: keep YOUR files; if git marks conflict markers (<<<<<<<) in YOUR files, keep your version
git add students/your-name/
git commit               # accepts the merge
git push
```

**Never** use `git push --force`. It erases other people's work and it is the one mistake in
this course that is not recoverable for them.

## Grading, briefly

The Signal is 15% of your course grade. Three of the twelve posts are marked in depth
(Weeks 4, 8 and 11) — the rest are checked for published / on beat / applies the skill.
Full detail: the [assessment overview](https://advanced-ai-in-business.vercel.app/resources/assessment-overview.md).

## Skills Passport

`passport.md` lives in your folder. At the end of Weeks 4, 8 and 12 you rate yourself on the
skills and commit it **separately** from your post — in Week 12 you will read three versions
of yourself. Git history does not let you rewrite your own past.
