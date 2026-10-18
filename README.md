# carfdev-web

Personal portfolio for carfdev, built with Astro, TypeScript, and Tailwind CSS. The site URL is configured as `https://carf.dev`.

## Local development

Use Node.js **22.12.0 or newer** and **pnpm 12.3.4**, as declared in `package.json`.

```sh
pnpm install
pnpm astro dev --background
```

The default development port is **4321**. Manage the background server with:

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Commands

Run commands from the repository root.

| Command             | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `pnpm dev`          | Start a foreground development server with `--host` |
| `pnpm build`        | Build the production site                           |
| `pnpm preview`      | Preview the build with `--host`                     |
| `pnpm astro check`  | Run Astro diagnostics                               |
| `pnpm format`       | Format the project with Prettier                    |
| `pnpm format:check` | Check formatting without changing files             |

`--host` exposes the server beyond localhost. Use `pnpm astro dev --background` for background development without that flag.

Run isolated unit tests without building the site:

```sh
pnpm test
pnpm test:watch
pnpm test:coverage
```

To run one file, use `pnpm test tests/unit/header.test.ts`.
Vitest uses Astro's Vite integration with an isolated config: tests do not load fonts,
Tailwind, project Markdown or the production integrations. Coverage reports cover the
TypeScript helpers and endpoint; they do not represent rendered Astro component coverage.

Each test names one behavior. Use fresh synthetic fixtures; assert destinations,
HTTP directives and semantic attributes instead of portfolio text or full HTML snapshots.
Mock `astro:content` and child components at module boundaries; reset configurable mocks
before each case. Render only the component under test with Astro's Container API.
Do not add tests for static copy or Tailwind class inventories. Header's active-state
class is an exception because it is the observable route-selection indicator.

Run integration contracts separately:

```sh
pnpm test:integration
```

This command builds a fresh disposable copy of the real project under the system temporary
folder, then removes it on success or failure. It never reads an existing `dist` build.
Installed dependencies are reused; no additional packages are installed. Astro's font
provider may need network access and starts an internal server during the build.

The integration suite checks collection-to-card composition, generated detail routes,
next-project sequencing, backend/frontend sections, emitted preview images and Layout/SEO
contracts. The component case mocks only the collection boundary; the production-build
cases use real content, helpers, components and integrations. A test-only endpoint in the
temporary copy exposes validated collection data as the oracle; it is never added to the
portfolio's routes. Assertions derive expected text from that collection rather than
hardcoding editorial copy. These checks complement the unit tests instead of repeating
sorter edge cases, Header matching, ActionLink props or isolated fallback behavior.

Integration coverage describes these cross-module contracts; `pnpm test:coverage` still
reports the configured unit TypeScript coverage, not coverage of built Astro templates.

Run real-browser checks with Playwright:

```sh
pnpm exec playwright install chromium
pnpm test:e2e
```

The suite runs Chromium at 320px and 1440px. Each test gets a fresh browser context.
Playwright builds a disposable project and serves it only at `127.0.0.1:4174`; an
existing server is rejected, and the temporary build is removed when the server stops.
The server builds from that temporary directory and keeps its caches there, so the
checkout and the system temporary folder can be on different filesystems (including
Dev Containers). On Linux, `TMPDIR=/dev/shm pnpm test:e2e` exercises this boundary
when `/dev/shm` is a separate writable mount with enough free space.
Browser download and the font provider need network access on a cold setup.
On a supported Linux distribution, install missing browser system libraries with
`pnpm exec playwright install --with-deps chromium` if Playwright reports them missing.

E2E owns keyboard skip navigation, visible keyboard focus, responsive overflow,
browser Back/Forward and computed reduced-motion behavior. It does not repeat
collection ordering, generated route graphs, SEO, link props or component fallbacks.
Selectors use landmarks and functional attributes, not editorial copy. Tests use
retrying assertions without fixed sleeps or automatic test retries.

To run one scenario, use `pnpm test:e2e --grep "reduced motion"`; use
`--project=desktop` to select one viewport. Failure screenshots and traces are written
to the ignored `test-results/` folder. View a trace with
`pnpm exec playwright show-trace test-results/<case>/trace.zip`.
This suite targets local production output, not the behavior of a deployed host or
compatibility across every browser engine.

The legacy page regressions are separate and intentionally sensitive to editorial changes:

```sh
pnpm build
pnpm test:regression
```

They compare published text, ordered links and headings against the pre-refactor baseline.
Update those snapshots only for intentional content changes; they are not unit tests.

Astro diagnostics and the production build are separate checks; they are not a test suite.

## Project structure

```text
src/
├── assets/                Images processed by Astro
├── components/
│   ├── about/             About page sections
│   ├── contact/           Contact page sections
│   ├── home/              Home page sections
│   ├── icones/            Shared icons
│   ├── project-detail/    Project detail sections
│   └── projects/          Project list and cards
├── content/projects/      Project entries in Markdown
├── content.config.ts      Content loader and validation schema
├── layouts/Layout.astro   Shared document, metadata, header and footer
├── pages/                 File-based routes
└── styles/global.css      Tailwind, design tokens and shared utilities
public/                    Static assets and security contact files
astro.config.mjs           Site URL, fonts, Tailwind and sitemap
```

## Pages and content

The site includes `/`, `/about`, `/contact`, `/projects`, project detail pages, a custom 404 page, and `/robots.txt`.

Project entries live in `src/content/projects/` and are validated by `src/content.config.ts`. The collection currently contains Invoice API, CarfDev Gateway, Foodi, and Hexagonal API Template.

- The project list and detail routes use the collection, sorted by `order`.
- Backend entries provide an architecture diagram; frontend entries provide an image preview.
- `src/lib/projects.ts` provides the shared collection ordering. Project identity comes from the collection; Home and About select IDs while keeping their own editorial order and technology lists. Unknown selected IDs fail the build.
- `src/data/site.ts` owns identity and contact facts. Keep contextual sentences in their sections; derive shared names, locations and destinations from this module.
- Contact details are links, not a submission form.

## Styling and configuration

Tailwind is integrated through its Vite plugin. Shared colors, typography, and utilities are defined in `src/styles/global.css`; components also use Tailwind classes directly. Use `content-container` for the shared maximum width, horizontal centering and responsive padding. Keep grids, vertical spacing, backgrounds and semantic elements in each section. Geist and IBM Plex Mono are configured in `astro.config.mjs`.

TypeScript uses Astro's strict configuration and the `@/*` alias for `src/*`. Prettier is configured with Astro and Tailwind plugins.

See the [Astro documentation](https://docs.astro.build) for framework guidance.

## License

Source code and technical documentation are licensed under the [MIT License](LICENSE), copyright (c) 2026 carfdev.

Portfolio copy, project descriptions, images, logos, and personal branding are excluded. Rights to those materials are reserved by their respective copyright holders. Third-party materials retain their own licenses. See `LICENSE` for the full scope and terms.

## Shared presentation

`src/components/shared/ActionLink.astro` provides an anchor with shared focus styling and a decorative arrow. Choose `appearance` (`link`, `button`, `plain`), `arrow` (`right`, `up-right`) and `distance` (`small`, `normal`); pass section typography, spacing and colors through `class`. Its named `icon` slot supports an existing SVG; `arrowClass` preserves section-specific arrow layout. `target`, `rel` and accessible labels remain explicit anchor attributes: arrow direction never changes navigation behavior. Arrow motion only runs when the user permits motion.

Page introductions and numbered rows remain page-specific: their typography, heading levels and secondary layouts differ. Share their container and link pieces rather than introducing a component dominated by layout exceptions.
