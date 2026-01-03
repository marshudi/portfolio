Here is a copy paste prompt you can give to an AI developer tool (or follow yourself) to build exactly the portfolio you described, plus my recommendation for the best React framework for production and Docker.

## Prompt to build my portfolio website

Build a modern, highly professional personal portfolio website using React with **shadcn/ui only** for UI components and Tailwind tokens. The site must be fully responsive for mobile, tablet, and desktop, and must support **Light and Dark themes** with a polished “space + blue” identity.

### 1) Tech constraints

* Use shadcn/ui components as the primary UI kit. No other UI libraries.
* Use Tailwind CSS with CSS variables (HSL tokens) for theming.
* Use Framer Motion for animations.
* Data must be driven from local JSON files, no hardcoded content in components.
* Components must be reusable and cleanly separated.
* Must be accessible: keyboard navigation, focus states, aria labels, contrast.
* Must be production ready and Docker ready.

### 2) Design and theme requirements

* Two themes:

  * Light mode: dark blue “space” vibe (deep navy background, subtle stars/noise optional, elegant gradients)
  * Dark mode: lighter blue vibe (still dark overall but with brighter blues and soft glowing accents)
* Keep it minimal, clean, premium, and corporate.
* Use a top nav with smooth scroll to sections (or routes if multi page).
* Include a logo, my picture, and a strong hero introduction.
* Add subtle background effects using CSS only (noise, gradient glow, star dots), but keep performance good.

### 3) Pages and sections

Single page is fine, but architecture should allow adding routes easily.
Sections:

1. Hero (logo, photo, headline, short bio, CTA buttons)
2. About (longer bio and highlights)
3. Experience (LinkedIn style grouped timeline with promotions)
4. Projects (internal, private, public)
5. Achievements and Certifications
6. Skills (categorized, with icons where suitable)
7. Contact (email, LinkedIn, GitHub, etc)
8. Footer

### 4) Data model must come from JSON

Create a `data/` folder with JSON files. All UI content loads from these files. Structure example:

* `profile.json`

  * name, title, location, shortBio, longBio
  * avatar image path, logo path
  * social links (LinkedIn, GitHub, email)
  * keywords array for SEO

* `experience.json`

  * companies: each company has:

    * companyName, companyLogo, location, employmentType
    * roles array: each role has:

      * title, startDate, endDate or “Present”
      * duration auto calculated in UI (like “11 mos”, “2 yrs 10 mos”)
      * description bullets
      * achievements array with optional `link` (URL) and `type` (promotion, award, milestone)
    * totalDuration calculated and shown
  * Must render LinkedIn like: a single company card, inside it multiple roles stacked vertically with a left timeline line and animated nodes.

* `projects.json`

  * projects array with fields:

    * title, description, tags, techStack, links
    * projectVisibility: one of `internal`, `private`, `public`
    * orgName and orgLogo optional for company projects
    * For `internal`: show company logo and a badge “Internal” and avoid sensitive details in UI
    * For `private`: show a lock icon badge “Private” and no external link unless provided
    * For `public`: show links (GitHub, Demo, Case Study)
  * UI must filter and search by visibility, tag, and tech

* `certifications.json`

  * name, issuer, date, credentialUrl optional, badge image optional

* `skills.json`

  * categories array: categoryName, skills list (name, level optional)

### 5) Components to build

* `ThemeProvider` with persisted theme toggle
* `Navbar` with active section highlight on scroll
* `HeroSection`
* `SectionHeading` reusable
* `ExperienceTimeline`

  * CompanyCard
  * RoleItem
  * Animated timeline line and nodes
  * Duration calculation utility
  * AchievementLink chip that opens a detail modal or external link
* `ProjectsGrid`

  * ProjectCard
  * VisibilityBadge (Internal, Private, Public)
  * FilterBar (search input, visibility tabs, tag filters)
* `CertificationsList`
* `SkillsMatrix`
* `ContactCard`
* `SEO` utilities for metadata and structured data

### 6) Animations and interactions

Use Framer Motion with a consistent animation style:

* Page load: soft fade + slight upward motion
* Section reveal on scroll: stagger children
* Timeline: line draws as it enters viewport, nodes pop in
* Hover: cards lift slightly, subtle glow ring using Tailwind classes
* Respect reduced motion preference

### 7) Experience timeline behavior like LinkedIn

* Group roles under the same company
* Show company duration total at the company level
* Each role shows:

  * title, dates, location, type
  * duration in months and years like LinkedIn
* Each role can have “achievement links” which open:

  * a modal showing achievement details, or
  * an external link if provided
* Add a smooth animated vertical line on the left with dots per role.

### 8) Security and privacy rules for internal work

* For internal projects, show only safe high level descriptions.
* Add a field in JSON `redactDetails: true` and `safeSummary` for internal items.
* UI must automatically show `safeSummary` when redactDetails is true.

### 9) SEO and metadata requirements

Add strong SEO and social metadata:

* Dynamic `<title>` and `<meta name="description">` from profile.json
* Open Graph tags: og:title, og:description, og:image, og:type, og:url
* Twitter card tags
* Canonical URL
* Robots and sitemap support
* Add JSON LD structured data:

  * `Person` with name, jobTitle, image, sameAs links, worksFor where relevant
  * `WebSite` with search action optional
  * `BreadcrumbList` if multiple pages
* Add keyword metadata using profile keywords
* Ensure performance: image optimization, lazy loading, minimal JS.

### 10) Styling rules

* Use shadcn Card, Badge, Button, Tabs, Dialog, Avatar, Separator, Tooltip, Command, Sheet where relevant.
* Use consistent spacing and typography scale.
* No clutter. Lots of whitespace. Strong hierarchy.
* Make it feel like a premium product landing page.

### 11) Docker and production requirements

* Must run in Docker with multi stage build.
* Provide Dockerfile and docker compose.
* Production build must be small and fast.
* Provide a README with setup and how to edit JSON data.

Deliverables:

* Complete project structure
* JSON schema examples
* All components implemented
* Theme tokens with light and dark
* Timeline and projects filtering working
* SEO metadata and JSON LD implemented
* Dockerfile and docker compose
* Responsive design tested for mobile, tablet, desktop

Important:

* Use only shadcn/ui for UI components.
* Use reusable components and keep everything driven from JSON.
* Ensure internal projects do not expose sensitive details.

## Best React framework for this with production and Docker

Use **Next.js (App Router)**.

Why it fits your requirements:

* Excellent SEO and metadata support (including built in metadata APIs and Open Graph).
* Easy production builds and Docker deployment.
* Great performance features: image optimization, static generation, and hybrid rendering.
* Works perfectly with shadcn/ui.

Docker tip for Next.js: use output “standalone” so the runtime image is smaller.

If you prefer Remix because you already work with it, Remix is also solid for Docker, but for a portfolio with heavy SEO and metadata needs, Next.js is usually the smoothest path.

If you want, I can also generate:

1. A clean JSON schema for each file
2. A full folder structure
3. Theme tokens (HSL variables) for your blue space palette
4. The full Next.js starter code using shadcn and Framer Motion
