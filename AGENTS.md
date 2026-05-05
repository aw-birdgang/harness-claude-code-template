# Agents (project)

This repo uses a **condensed** Claude Code layout described in **`HARNESS_NODE_CONDENSE_STRATEGY.txt`**. Work here is **harness engineering**: shaping rules, skills, agents, and manifests so a **separate** target codebase can be developed with consistent AI assistance.

## Where things live

- Subagent definitions: `agents/*.md`
- Primary workflow docs: `skills/*/SKILL.md`
- Slash commands: `commands/*.md`

## Planning

Spawn **planner** when scope spans multiple harness paths (`agents/`, `skills/`, `rules/`, `manifests/`). The planner should stay aligned with `HARNESS_NODE_CONDENSE_STRATEGY.txt` and the harness backlog in **`MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt`** (§5–§6).

## Blueprint

**`MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt`** — target-stack assumptions vs current harness coverage, and prioritized harness deliverables (not product repo scaffolding).
