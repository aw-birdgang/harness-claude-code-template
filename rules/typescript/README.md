# TypeScript rules (harness deliverables)

This directory is where **harness engineering** places stack-specific guidance for TypeScript targets (e.g. NestJS, Next.js, React admin, React Native). These files are **not** a substitute for the target repo’s ESLint/tsconfig; they are the **single source of truth for AI and humans** about conventions when editing that stack.

## Suggested files (see `MONOREPO_STACK_HARNESS_GAP_ANALYSIS.txt` §5.2)

- `nestjs.md` — modules, DI, DTO/validation, thin controllers
- `nextjs.md` — Server vs Client Components, data fetching, `NEXT_PUBLIC_*` env
- `react-admin.md` — feature folders, state and API layers
- `react-native.md` — platform splits, lists/perf, native module boundaries

Each file can reference paths in the **target** repo (e.g. “eslint config: `packages/config/eslint`”) once your product layout is fixed.

For large upstream `rules/typescript` trees, cherry-pick only what you need.
