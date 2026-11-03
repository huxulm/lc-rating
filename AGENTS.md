# Repository Guidelines

## Project Structure & Module Organization
- `apps/web/` is the main Next.js 16 app (App Router) with UI in `components/`, shared hooks in `hooks/`, and utilities in `utils/`.
- `apps/web/public/` contains static data used at runtime (for example `problemset/` and `studyplan/`).
- `packages/` holds shared configs and UI primitives (`eslint-config/`, `tailwind-config/`, `typescript-config/`, `ui/`).
- `apps/web/scripts/studyplan/` contains the TypeScript tooling that fetches 0x3F study plan posts from leetcode.cn (GraphQL) and generates `public/studyplan/*.json`.
- `apps/v0/` is a legacy app; avoid editing unless a change is explicitly scoped to it.

## Build, Test, and Development Commands
Run from repo root unless noted.
- `pnpm install` installs workspace dependencies.
- `pnpm dev` starts all dev tasks via Turbo; the web app runs at `http://localhost:3001`.
- `pnpm build` builds all packages/apps with Turbo.
- `pnpm lint` runs ESLint in the workspace.
- `pnpm check-types` runs Next type generation and `tsc --noEmit`.
- `pnpm format` formats `*.ts`, `*.tsx`, and `*.md` with Prettier.
- Study plan data: `pnpm --filter web studyplan:update` (add plan keys to limit, `--dry-run` to skip writing). Runs weekly in CI via `.github/workflows/studyplan_updater.yml`.

## Coding Style & Naming Conventions
- Use TypeScript, React, and Tailwind CSS conventions already in the codebase.
- Indentation and formatting are handled by Prettier (run `pnpm format`).
- Components use PascalCase (for example `ContestTable.tsx`); hooks use `useX` naming (for example `useProgress`).
- Keep files colocated by feature under `apps/web/components/` or `apps/web/hooks/`.

## Testing Guidelines
- There is no general test suite; rely on `pnpm lint` and `pnpm check-types` for CI safety.
- Unit tests: `pnpm --filter web test` (Node test runner via `tsx --test`): study plan parser (`apps/web/scripts/studyplan/*.test.ts`) and problemset filters (`apps/web/components/ProblemSet/Search/*.test.ts`).
- If you add automated tests, document how to run them in this file.

## Commit & Pull Request Guidelines
- Commit messages are short and often use prefixes like `fix:`; keep them descriptive (for example `fix: correct rating filter`).
- Data updates may use `Update solutions` or `auto-commit` style messages; keep those consistent.
- PRs should include: a clear summary, linked issues (if any), and screenshots/GIFs for UI changes.
- Call out data regeneration steps (for example `pnpm --filter web studyplan:update`) when relevant.

## Security & Configuration Tips
- Configuration lives in repo files and `.env*` is respected by Turbo; do not commit secrets.
- Keep local storage and sync settings changes isolated to `apps/web/hooks/` and `apps/web/components/common/`.
