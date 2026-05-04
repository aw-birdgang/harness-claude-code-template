# harness-claude-code-template

Condensed [everything-claude-code](https://github.com/affaan-m/everything-claude-code)–style layout for a **small**, **Node-only** harness: `agents/`, `skills/`, `commands/`, `rules/`, `hooks/`, `manifests/`, `scripts/`, `tests/`.

Full rationale and shrink axes: **`EVERYTHING-CLCODE_NODE_CONDENSE_STRATEGY.txt`** (see also workspace root `EVERYTHING-CLCODE_NODE_CONDENSE_STRATEGY.txt`).

## Quick start

```bash
npm test
npm run plan
```

## Profiles

- **`minimal`** (default): rules + agents + commands — no hook runtime module in the plan.
- **`core`**: includes `hooks-runtime` when you are ready to wire `scripts/hooks/`.

## License

MIT
