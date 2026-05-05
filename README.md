# harness-claude-code-template

A **small**, **Node-only** Claude Code harness layout: `agents/`, `skills/`, `commands/`, `rules/`, `hooks/`, `manifests/`, `scripts/`, `tests/`.

This repository is a **harness skeleton**: it does not ship NestJS, Next.js, React admin, or React Native apps. Use it to maintain the AI workflow layer (agents, skills, rules, install intent) that you will apply when building a **separate** project.

## Harness engineering blueprint

**`MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt`** is the living draft for evolving this harness toward a target stack (e.g. pnpm monorepo, Nest/Next/React/RN, feature-based + Clean Architecture, stack conventions). It lists **harness-side** gaps and deliverables—not instructions to generate product code inside this repo.

Shrink rationale and phases: **`HARNESS_NODE_CONDENSE_STRATEGY.txt`**.

## Quick start

```bash
npm test
npm run plan
```

## Profiles

- **`minimal`** (default): rules + agents + commands — no hook runtime module in the plan.
- **`core`**: includes `hooks-runtime` when you are ready to wire `scripts/hooks/`.

## Related entrypoints

| File | Role |
|------|------|
| `CLAUDE.md` | Workspace summary for Claude Code |
| `AGENTS.md` | Agent/skill/command layout + planner |
| `skills/harness-workflow/SKILL.md` | How to extend this harness |
| `MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt` | Backlog and target-stack alignment |

## License

MIT
