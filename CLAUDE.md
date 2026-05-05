# CLAUDE.md

## Project

**harness-claude-code-template** — condensed Claude Code harness (Node-only scripts, single canonical `skills/` tree). This repo holds **harness assets** (agents, skills, commands, rules, manifests, hooks, validation scripts), not product application code.

## Harness engineering (how to use this repo)

For **blueprint / backlog** when evolving the harness for a future stack (e.g. pnpm monorepo, NestJS, Next.js, React admin, React Native, feature-sliced + Clean Architecture conventions), read **`MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt`**. It defines harness-side deliverables (rules, skills, agents, manifests, optional schemas/hooks/MCP), not a recipe to scaffold `apps/` inside this repository.

Shrink axes and phased roadmap: **`HARNESS_NODE_CONDENSE_STRATEGY.txt`**.

## Commands

- `npm test` — validate skeleton (manifests + required dirs)
- `npm run plan` — print JSON install plan for profile `minimal` (override: `node scripts/install-plan-stub.js core`)
- `node scripts/ecc.js help`

## Conventions

- Extend the harness via `skills/harness-workflow/SKILL.md` and the backlog in `MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt` §6.
- Keep canonical content in `skills/`, `agents/`, `rules/`, `commands/` per the strategy doc.
