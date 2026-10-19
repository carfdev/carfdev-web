# carfdev-web

Personal portfolio for carfdev, built with Astro, TypeScript, and Tailwind CSS. The site URL is configured as `https://carf.dev`.

Current version: `0.3.0`. <!-- x-release-please-version -->

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

## Social preview images

`pnpm build` generates a 1200 × 630 PNG for each page under `dist/og/`, using
`astro-og-canvas`. Open `/og/home.png` or `/og/projects/foodi.png` on the local
server to preview the cards. The shared layout adds absolute Open Graph image
URLs and Twitter large-image cards.

General-page titles and descriptions live in `src/data/page-metadata.ts`;
project cards use the project collection automatically. When adding a general
page, add its metadata there and pass it to the layout. Card appearance is
configured in `src/pages/og/[...route].ts`.

The generator uses local Geist Latin regular/medium TTF files from
[Fontsource](https://fontsource.org/fonts/geist), with the upstream SIL Open Font
License in `src/assets/fonts/OFL.txt`. Social image generation needs no font
downloads. After deployment, check a shared URL with the destination platform's
preview inspector; existing previews may need a cache refresh.

## Docker

Build and run the production site locally:

```sh
docker build -t carfdev-web:local .
docker run --rm -p 127.0.0.1:8080:8080 carfdev-web:local
```

Open `http://localhost:8080`. Nginx serves the static output as its unprivileged
`nginx` user on port 8080, including the custom 404 page. Node and pnpm are only
used in the build stage. Dependency installation uses pnpm 12.3.4 and the frozen
lockfile; the build needs network access for dependencies and Astro fonts.

The `.dockerignore` allowlist includes only production build inputs, excluding
local credentials, dependencies, build output and tests. Add new build-time
configuration files to that allowlist when needed. Base image tags track updates;
use image digests if you need immutable base images.

## Browser security policies

Astro's `security.csp` emits a CSP meta tag with automatic hashes for inline
styles and scripts. Resources are restricted to the same origin, including the
Cloudflare email protection script. Objects, base URL overrides and form submissions
are disabled. The portfolio uses contact links rather than forms.

Nginx adds a complementary CSP header containing `frame-ancestors 'none'`,
`script-src 'self'`, `object-src 'none'` and `base-uri 'none'`,
plus `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`
and a Permissions Policy disabling camera, microphone and geolocation. These
headers also apply to error responses. The HTTP policy explicitly restricts scripts
to the same origin, including Cloudflare's email decoder, without allowing inline
scripts or external analytics. Astro keeps its generated hashes unchanged. Keep
`style-src` and `default-src` out of this header so Astro's hashed inline font styles
remain valid. The site currently has no inline scripts; adding one later would
require authorizing its hash in both policies or moving it into a same-origin file.

CSP is enforced in production builds, not Astro dev mode. Astro preview verifies
the meta policy; use the Docker runtime to inspect the nginx headers. A scanner
that only inspects HTTP headers cannot evaluate the full meta policy. Report-only
testing requires an HTTP header; the generated meta policy is enforcing.

Cloudflare AI Labyrinth is disabled for this site. Enabling HTML transformations,
analytics or external resources requires rechecking CSP compatibility. The E2E
suite checks font/image loading and simulates an email decoder at Cloudflare's
same-origin script path; it does not reproduce Cloudflare's actual implementation.
After deployment, verify the real protected email links in a browser. COOP, CORP
and COEP are not enabled by this change.

With the Docker runtime running locally and Playwright Chromium installed, verify
its headers, routing and rejection of iframe embedding:

```sh
NGINX_TEST_URL=http://127.0.0.1:8080 node --test tests/nginx.test.mjs
```

## GitHub Actions and releases

Pull requests to `main` run CI: automation-file formatting, Astro diagnostics, unit coverage,
integration tests, a production build, legacy regressions, Chromium E2E and checks
against the production Docker image. The nginx checks verify headers, routing,
embedding protection, and CSP-compatible assets in a temporary localhost-only
container, which is stopped after the checks.
Pushes to `main` run the same reusable CI before release automation. Browser
failure evidence is retained for seven days. CI can also be run manually.

The official [Google release-please action](https://github.com/googleapis/release-please-action)
opens a release PR from Conventional Commits. Merge that PR to update
`package.json`, the release manifest, `CHANGELOG.md`, and the version shown at the
top of this README, then create a GitHub release and a `vX.Y.Z` tag. The README
version is synchronized through the package's `extra-files` configuration.
Nothing is published to npm. The manifest tracks the released version.
`feat:` and `fix:` drive version changes; ordinary `ci:`/`chore:` commits alone do
not request a new release.

In GitHub repository **Settings → Actions → General**, allow Actions to create
pull requests. Release automation uses `GITHUB_TOKEN` by default. Its generated
PRs do not trigger CI automatically: run CI manually on the release PR branch,
or configure the optional `RELEASE_PLEASE_TOKEN` secret with a fine-grained PAT
for this repository with Contents, Issues and Pull requests read/write access.
An organization may impose additional approval restrictions. Protect `main` with
required CI checks if merges must always be gated.

### Versioned Docker Hub images

Create the Docker Hub repository, then configure these GitHub Actions settings:

| Kind     | Name                 | Value                                                        |
| -------- | -------------------- | ------------------------------------------------------------ |
| Variable | `DOCKERHUB_USERNAME` | Docker Hub login username                                    |
| Variable | `DOCKERHUB_IMAGE`    | Full image name, such as `your-namespace/carfdev-web`        |
| Secret   | `DOCKERHUB_TOKEN`    | Docker Hub access token with write access to that repository |

When both variables exist, each new release calls the Docker workflow directly,
even with the default GitHub token. Missing variables skip image publication;
missing credentials fail publication without removing the GitHub release.
Buildx and QEMU build `linux/amd64` and `linux/arm64` into one image manifest.
GitHub tag `v1.2.3` produces Docker tag `1.2.3`, built from the released commit.
New automatic releases also update `latest` to the same multi-platform image.
Multi-platform builds may take several minutes.

If publishing fails or Docker Hub is configured later, manually run **Publish
Docker image** with the existing release tag, for example `v1.2.3`. It builds
that tag and verifies the package version before publishing; this can overwrite
the same Docker version tag. Manual publication preserves `latest` by default;
select **update_latest** only when publishing the newest release to update that
alias too. Re-running Release alone may not publish an image
for an already-created release. To inspect the combined manifest afterward:

```sh
docker buildx imagetools inspect your-namespace/carfdev-web:1.2.3
```

The workflows are prepared locally; repository settings, secrets, remote runs and
actual publication must be configured and verified in GitHub/Docker Hub.

### Production deployment with Dokploy

Recovery reference confirmed by the maintainer on 2026-10-19:

- Release: `0.2.2`.
- Image digest: `sha256:23375338c4e758659655f37b2c6fa4d8712fe0cdf7112ff5240442938cf3f9cb`.

Use the existing Docker Hub repository name with this digest when selecting the
recovery image in Dokploy. Update this record after verifying a newer deployment.

Production is updated manually in Dokploy from the Docker Hub image's `latest`
tag. CI must pass before release automation runs; a successful CI run alone does
not publish an image. Wait for a new release and its **Publish Docker image** job
to finish successfully before updating Dokploy.

1. Record the image reference from the currently working deployment: its release
   tag or digest, plus the deployment date. Keep that image available in Docker
   Hub so it can be deployed again. If only `latest` is recorded, identify the
   running image before updating; the registry's current `latest` may already
   point to a newer release.
2. In the existing Dokploy application, refresh/redeploy the configured `latest`
   image so Dokploy pulls it from Docker Hub. Keep the existing domain and
   container port **8080**. Check the deployment logs for a successful pull and
   deployment, and record the new release tag or digest.
3. Verify `https://carf.dev`: open the home, About, Contact, project list and a
   project detail page; check navigation, the protected email link and an unknown
   route's custom 404 page. Open `/og/home.png` and `/og/projects/foodi.png`, and
   confirm the new cards appear. Inspect a shared page with the destination
   platform's preview inspector if its preview is cached.

To recover from a failed update, replace the application's image reference in
Dokploy with the previously recorded release tag or digest and deploy it again.
For example, use `your-namespace/carfdev-web:1.2.3` or
`your-namespace/carfdev-web@sha256:<recorded-digest>` with actual values from the
working deployment. Repeat the checks above and record the recovery result.
Keep the restored reference selected until a fixed release is ready; redeploying
`latest` could bring back the failing version. Version tags can be overwritten
by manual publication, so a recorded digest identifies the exact image more
precisely.

See Dokploy's [Docker provider documentation](https://docs.dokploy.com/docs/core/providers)
for image configuration. Its separate
[rollback feature](https://docs.dokploy.com/docs/core/applications/rollbacks)
requires its own setup; this procedure uses an explicitly selected image and
does not depend on that feature being enabled.

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
