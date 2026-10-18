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

There is currently no test script in `package.json`.

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
- Home page featured projects are maintained separately in `src/components/home/Code.astro`.
- Contact details are links, not a submission form.

## Styling and configuration

Tailwind is integrated through its Vite plugin. Shared colors, typography, and utilities are defined in `src/styles/global.css`; components also use Tailwind classes directly. Geist and IBM Plex Mono are configured in `astro.config.mjs`.

TypeScript uses Astro's strict configuration and the `@/*` alias for `src/*`. Prettier is configured with Astro and Tailwind plugins.

See the [Astro documentation](https://docs.astro.build) for framework guidance.

## License

Source code and technical documentation are licensed under the [MIT License](LICENSE), copyright (c) 2026 carfdev.

Portfolio copy, project descriptions, images, logos, and personal branding are excluded. Rights to those materials are reserved by their respective copyright holders. Third-party materials retain their own licenses. See `LICENSE` for the full scope and terms.
