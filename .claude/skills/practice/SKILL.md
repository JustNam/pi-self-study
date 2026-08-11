---
name: practice
description: Give the student their next exercise. Run after /setup.
---

1. Read `.claude/progress.json`, cross-check against `curriculum.md` to find the next incomplete item.
2. Create/update a page under `src/app/<section>/<item>/page.js` with:
   - a comment block explaining the intent of the exercise
   - a comment instruction for what to fill in
   - blank/empty code snippet (TODO markers) - never the solution
3. Tell the student to run `npm run dev` and open the page themselves - do not run it or read its output yourself.
