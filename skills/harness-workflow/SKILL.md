---
name: harness-workflow
description: How to extend this condensed harness and run harness engineering (skills-first, manifests as source of truth)
---

# Harness workflow (condensed)

## When to use

- Adding or trimming agents, skills, rules, or commands in this template.
- Deciding what belongs in `manifests/` vs importing from an external harness catalog.
- **Harness engineering**: preparing this repo so a future **target** project (separate repo or workspace) gets consistent rules, skills, and agent behavior—see **`MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt`**.

## How it works

1. **Canonical content** lives in `skills/`, `agents/`, `rules/`, `commands/` — not duplicated under `.agents/` unless you add a build step (see `HARNESS_NODE_CONDENSE_STRATEGY.txt`).
2. **Install intent** is expressed in `manifests/install-*.json`; `npm run plan` prints the resolved module list (read-only stub; no file copy).
3. **Hooks** start empty in `hooks/hooks.json`; enable a stricter profile only when `scripts/hooks/` is ready (`core` profile in manifests).
4. **Backlog**: use **`MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt`** §5–§6 for prioritized harness deliverables (architecture skills, stack-specific `rules/`, agent roles, manifest profiles, optional JSON Schema for manifests, MCP docs). Pair with **`HARNESS_NODE_CONDENSE_STRATEGY.txt`** for shrink phases and validation scope.

## Examples

- Add a new skill: `skills/<id>/SKILL.md` with YAML frontmatter; if it is part of the default story, mention it in `README.md` and consider a `manifests` module when you add a profile.
- Add stack conventions: add files under `rules/` (e.g. `rules/typescript/nestjs.md`) per the blueprint doc—actual ESLint/tsconfig live in the **target** repo; rules here describe what agents and humans should follow.

## Do not assume

This template does not create `apps/` or product packages. Product layout and tooling are decided in the target project; this harness only encodes **how AI-assisted work should behave** when applied there.
