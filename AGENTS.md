# AGENTS.md

Threadhive frontend — a small React 19 + Vite learning project (Great Learning session). Plain JavaScript (no TypeScript), plain CSS, no router, no state library.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run lint` — ESLint (config in [eslint.config.js](eslint.config.js))
- `npm run test` — run Vitest suite once (jsdom + React Testing Library)

## Project layout

- [src/App.jsx](src/App.jsx) — root component; page switching is done with a `currentPage` `useState`, **not** a router. To add a new page, extend the conditional render in `App` and a button in `Header`.
- [src/components/](src/components/) — reusable UI. One folder per component: `Name/Name.jsx` + `Name/Name.css`.
- [src/pages/](src/pages/) — page-level components, same folder convention. Pages share [src/pages/Auth/Auth.css](src/pages/Auth/Auth.css) when in the same feature area.
- [tests/](tests/) — **all** tests live here at the top level, mirroring the source path inside the test file's imports. Setup file: [tests/setup.js](tests/setup.js).
- [resources/prompts.md](resources/prompts.md) — instructor prompts driving the session; useful for understanding upcoming tasks but not part of the app.

## Conventions

- **Styling**: plain CSS files imported at the top of each component (`import "./Foo.css"`). Despite what older prompts may say, this project does **not** use CSS Modules.
- **Forms**: controlled components with one `useState` per field. Submit handlers `console.log` values and `alert('Success')` — keep this pattern unless asked otherwise (tests assert on `console.log`).
- **Props**: callbacks are passed down (e.g. `onNavigate`, `onResetPassword`). No context or global store.
- **Imports**: relative paths, `.jsx` extension omitted for components when importing.
- **JS only**: do not introduce TypeScript, even though `@types/react` is installed (used only for editor IntelliSense via [jsconfig.json](jsconfig.json)).

## Testing

- Runner: Vitest with `globals: true`, `environment: 'jsdom'` (see [vite.config.js](vite.config.js)).
- Library: `@testing-library/react` + `@testing-library/user-event`; matchers from `@testing-library/jest-dom` are loaded via [tests/setup.js](tests/setup.js).
- Pattern: one `describe` per component, `userEvent` for interaction, `vi.spyOn(console, 'log')` to assert submit behavior. See [tests/auth.test.jsx](tests/auth.test.jsx) for the canonical example.
- New tests go in `tests/` (do **not** co-locate with components).

## Pitfalls

- React 19 — do not add `React.StrictMode` workarounds or legacy lifecycle patterns; check [src/main.jsx](src/main.jsx) for the actual root setup.
- The Windows dev environment uses bash via Git Bash; prefer forward-slash paths in scripts.
- Use function components, not class components.
- Avoid using deprecated React APIs; stick to hooks and modern patterns.
