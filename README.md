# Carfdev Portfolio Website

A modern, high-performance portfolio website built with Astro, React, and Tailwind CSS. This multilingual site showcases web development services with a focus on performance, accessibility, and user experience.

## 🚀 Features

- **Multi-language Support**: Available in English, Spanish, and Swedish
- **Modern Tech Stack**: Built with Astro, React, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Performance Optimized**: Fast loading times with Astro's static site generation
- **Type-Safe**: Full TypeScript support throughout the project
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Dark Mode**: Built-in theme switching with system preference detection
- **Internationalization**: Complete i18n setup with URL-based language routing
- **Contact Form**: Functional contact form with validation using React Hook Form and Zod
- **Portfolio Projects**: Dynamic project pages with detailed case studies
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.15.1
- **UI Library**: [React](https://react.dev/) v19.2.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.14
- **Animations**: [Motion](https://motion.dev/) v12.23.24
- **Forms**: [React Hook Form](https://react-hook-form.com/) v7.65.0
- **Validation**: [Zod](https://zod.dev/) v3.25.76
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Linting**: ESLint & Prettier

## 📁 Project Structure

```
carfdev-web/
├── public/
│   └── flags/          # Country flag SVGs for language selector
├── src/
│   ├── assets/
│   │   └── images/     # Project images and assets
│   ├── components/
│   │   ├── pages/      # Page-specific components
│   │   │   ├── index/  # Homepage sections
│   │   │   └── project/ # Project detail sections
│   │   └── ui/         # Reusable UI components (shadcn-inspired)
│   ├── i18n/           # Internationalization utilities and translations
│   ├── layouts/        # Layout components
│   ├── lib/            # Utility functions and API setup
│   ├── pages/          # Astro pages (file-based routing)
│   ├── styles/         # Global styles and CSS
│   └── types/          # TypeScript type definitions
├── astro.config.mjs    # Astro configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/carfdev/carfdev-web.git
cd carfdev-web
```

2. Install dependencies:

```bash
pnpm install
```

3. Create environment file:

```bash
cp .env.template .env
```

4. Configure your environment variables in `.env`:

```env
API_URL=http://localhost:3000/v1
```

### Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

### Build

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

### Linting & Formatting

Run ESLint:

```bash
pnpm lint
```

Format code with Prettier:

```bash
pnpm format
```

## 🌐 Internationalization

The site supports three languages:

- **English (en)**: Default language
- **Spanish (es)**: `/es/*`
- **Swedish (sv)**: `/sv/*`

### Adding a New Language

1. Add translations to `src/i18n/index-ui.ts` and `src/i18n/project-ui.ts`
2. Update `astro.config.mjs` locales array
3. Create corresponding page routes in `src/pages/[lang]/`

## 📝 Adding Content

### Portfolio Projects

1. Add project translations to `src/i18n/project-ui.ts`
2. Add project images to `src/assets/images/`
3. Update portfolio items in `src/i18n/index-ui.ts`
4. Create project page routes in each language folder

### Tech Stack Items

Update the `techStack.items` array in `src/i18n/index-ui.ts` with:

- `name`: Technology name
- `description`: Brief description
- `icon`: Tabler icon name
- `link`: Official website URL

## 🎨 UI Components

This project uses a custom component library inspired by [shadcn/ui](https://ui.shadcn.com/), built with:

- Radix UI primitives for accessibility
- Tailwind CSS for styling
- Class Variance Authority for variant management

Key components include:

- `Button`: Multiple variants and sizes
- `Card`: Flexible card component
- `Form`: Form controls with validation
- `Navigation`: Responsive navbar with mobile menu
- `Toaster`: Toast notifications

## 🔧 Configuration

### Fonts

The site uses two custom fonts loaded via Astro's font optimization:

- **Switzer**: Main body font
- **Plein**: Headings font

Configure in `astro.config.mjs` under `experimental.fonts`.

### Theme

Dark mode is handled via CSS custom properties defined in `src/styles/global.css`. The theme toggle persists user preference in localStorage.

## 📦 Deployment

The project is configured for static site generation. Build and deploy to any static hosting platform:

1. Build the project: `pnpm build`
2. Deploy the `dist/` folder to your hosting provider

Recommended platforms:

- Cloudflare Pages
- Vercel
- Netlify
- AWS S3 + CloudFront

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Carfdev**

- Website: [carf.dev](https://carf.dev)
- GitHub: [@carfdev](https://github.com/carfdev)
- LinkedIn: [carfdev](https://linkedin.com/in/carfdev)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio sites
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/) and [Tabler Icons](https://tabler.io/icons)

---

Built with ❤️ in Stockholm, Sweden
