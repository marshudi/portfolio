# Mohammed Al-Marshudi - Portfolio

A modern, highly professional personal portfolio website built with Next.js, shadcn/ui, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui for consistent, accessible components
- **Animations**: Framer Motion for smooth, performant animations
- **Theming**: Light/Dark theme with CSS variables (HSL tokens)
- **Data-Driven**: All content loaded from JSON files
- **SEO Optimized**: Metadata, Open Graph, Twitter Cards, JSON-LD structured data
- **Responsive**: Mobile-first design, works on all devices
- **Docker Ready**: Multi-stage Dockerfile for production deployment

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Editing Content

All content is stored in JSON files under the `data/` directory:

| File | Description |
|------|-------------|
| `profile.json` | Personal info, bio, social links |
| `experience.json` | Work experience, companies, roles |
| `projects.json` | Projects with visibility controls |
| `skills.json` | Skill categories and proficiency levels |
| `certifications.json` | Education and certifications |

### Privacy Controls

For internal/private projects, use these fields:
- `visibility`: `"internal"`, `"private"`, or `"public"`
- `redactDetails`: `true` to show only safe summary
- `safeSummary`: Public-safe description

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & theme tokens
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── navbar.tsx         # Navigation
│   ├── footer.tsx         # Footer
│   └── theme-provider.tsx # Theme context
├── data/                  # JSON content files
├── lib/
│   ├── utils.ts           # Utility functions
│   └── schema.ts          # Zod validation schemas
├── public/
│   └── images/            # Static images
├── Dockerfile             # Production Docker image
└── docker-compose.yml     # Docker Compose config
```

## Adding Images

Place your images in `public/images/`:
- `avatar.jpg` - Your profile photo
- `logo.svg` - Your personal logo
- `vodafone.svg` - Company logos
- `og-image.png` - Social sharing image (1200x630)

## Theme Customization

Edit theme colors in `app/globals.css`. The theme uses HSL color variables:

- Light mode: Dark blue "space" theme
- Dark mode: Brighter blue glow theme

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix primitives)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## License

MIT
