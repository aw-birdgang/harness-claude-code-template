---
name: harness-workflow
description: How to extend this condensed harness (skills-first, manifests as source of truth)
---

# Harness workflow (condensed)

## When to use

- Adding or trimming agents, skills, or rules in this template.
- Deciding what belongs in `manifests/` vs copy-paste from everything-claude-code.

## How it works

1. **Canonical content** lives in `skills/`, `agents/`, `rules/`, `commands/` — not duplicated under `.agents/` unless you add a build step (see strategy doc).
2. **Install intent** is expressed in `manifests/install-*.json`; `npm run plan` prints the resolved module list (read-only stub).
3. **Hooks** start empty in `hooks/hooks.json`; enable a stricter profile only when `scripts/hooks/` is ready.

## Examples

- Add a new skill: `skills/<id>/SKILL.md` with YAML frontmatter, then document it in the root README if it is part of the default story.
