---
name: setup
description: Install deps and scaffold the practice environment. Run once at the start.
---

1. Run `npx create-next-app@latest practice-app --js --no-tailwind --eslint --app --src-dir --import-alias "@/*"` if `practice-app/` doesn't exist.
2. In `practice-app/`, run `npm install` if `node_modules/` is missing.
3. Create `.claude/salt` if missing (random string, e.g. `openssl rand -hex 16`).
4. Create `.claude/progress.json` if missing: `{"completed": [], "hash": ""}` then recompute hash (see `progress` skill for hash formula, uses `.claude/salt`).
5. Confirm curriculum.md and CLAUDE.md are present.
