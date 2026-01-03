
# Portfolio Site — Requirements (AI/ML + DevOps vibe)

## 1) Overview

Create a modern, animated personal site featuring a **Career Timeline**, using **shadcn/ui** for components and **svgl.app** for inline SVG icons. The look should feel “AI/ML + DevOps”: dark-first theme, subtle particles, glowing gradients, clean typography, and smooth micro-interactions.

---

## 2) Tech Stack

* **Framework:** Remix (or Next.js) with SSR for SEO + fast routing.
* **Styles:** TailwindCSS + **shadcn/ui** (accessible, themeable components).
* **Icons:** **svgl.app** (inline SVG, `fill="currentColor"`).
* **Animation:** Framer Motion (UI/scroll reveals), optional Lenis (smooth scroll), optional Rive/Lottie (vector loops), optional React Three Fiber (light 3D).
* **Charts (optional):** Recharts (theme-matched).

---

## 3) Visual Identity (Theme & Colors)

Dark-first palette with indigo/cyan accents for the “futuristic” feel.

### CSS Variables (HSL tokens)

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --muted: 240 5% 96%;
  --muted-foreground: 240 5% 46%;
  --border: 240 5% 84%;

  --primary: 238 84% 67%;             /* indigo-500 */
  --primary-foreground: 0 0% 100%;
  --secondary: 187 92% 67%;           /* cyan-400 */
  --secondary-foreground: 240 10% 5%;

  --success: 142 71% 45%;             /* green-500 */
  --warning: 38 92% 50%;              /* amber-500 */
  --error: 351 95% 71%;               /* rose-500 */
}

.dark {
  --background: 240 10% 4%;
  --foreground: 0 0% 98%;
  --card: 240 5% 10%;
  --card-foreground: 0 0% 98%;
  --muted: 240 5% 12%;
  --muted-foreground: 240 5% 65%;
  --border: 240 5% 26%;
}
```

### Tailwind bridge (excerpt)

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
      },
    },
  },
};
```

### Color usage map

* **CTAs, links, active timeline node:** `primary`
* **Chips/badges, hover accents, charts:** `secondary`
* **Cards & surfaces:** `card`, with subtle borders `border` and `backdrop-blur`
* **Past timeline nodes:** `muted`
* **Current role badge:** gradient `from-indigo-500 via-sky-400 to-cyan-400`
* **Status tags:** success/warning/error

---

## 4) Motion & Effects

* **Framer Motion** reveals on headings, sections, and cards (ease: `[0.22,1,0.36,1]`, 0.1–0.2s stagger).
* **Hero visuals:** animated gradient blob + subtle grid/particles (CSS), optional Rive/Lottie loop (AI brain/network).
* **Micro-interactions:** button hover scale/shadow, chip toggles, accordion expand with spring.
* **Respect accessibility:** reduce motion if `prefers-reduced-motion`.

---

## 5) Information Architecture / Pages

* **Home / About:** punchy intro, hero CTA, quick value props.
* **Career Timeline (Core):** filterable/searchable; printable; export to PDF.
* **Projects / Case Studies:** cards with tech tags, outcomes, links.
* **Contact:** validated form + social links.
* **Resume Download:** styled print CSS.

---

## 6) Career Timeline — Functional Spec

**Purpose:** Narrate roles, promotions, skills, and impact over time.

**Data model (example):**

```json
[
  {
    "title": "Application Engineer",
    "company": "Vodafone Oman",
    "start": "2025-08",
    "end": "Present",
    "location": "Muscat, Oman",
    "icon": "briefcase",          // svgl.app icon key (or inline SVG)
    "highlights": [
      "Automated data pipelines with FastAPI",
      "Integrated Jira analytics dashboards"
    ],
    "skills": ["FastAPI", "Python", "Jira API", "Docker"]
  }
]
```

**Layout behavior:**

* **Mobile (`<md`):** vertical timeline, single column cards.
* **Tablet (`md–lg`):** vertical timeline + side detail panel on select.
* **Desktop (`lg+`):** stepped or horizontal timeline with sticky filter rail.

**Interactivity:**

* Expand/collapse details; keyboard accessible.
* Filters: role, tech, year; chips (shadcn `Badge`, `Toggle`, or `Command`).
* URL params for shareable filtered views.

**Visual treatment:**

* Line: hairline `border` with subtle glow near active node.
* Nodes: past = `muted`; current = gradient ring + soft glow; future (optional) = dashed.
* Icons: from **svgl.app** inline (`fill="currentColor"`).
  *Example pattern:*

  ```html
  <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5 text-primary">
    <path d="..." />
  </svg>
  ```

---

## 7) Responsiveness & Layout

* **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
* **Breakpoints:** `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`.
* **Grid:** 1-col mobile → 2-col at `md` (timeline + panel) → 3-col at `xl` (nav/aside, timeline, details).
* **Spacing:** 4/8 pt rhythm (`space-y-6`, `gap-6/8`); generous whitespace.
* **Sticky elements:** section nav on large screens; “Back to top” on mobile.

---

## 8) Accessibility

* Keyboard navigable; visible focus states on all interactive elements.
* Proper roles/labels (`aria-expanded`, `aria-controls` on accordion).
* Color contrast ≥ WCAG AA; never rely on color alone.
* Motion reduced with `prefers-reduced-motion`.

---

## 9) Performance & Quality

* Lazy-load below-the-fold sections, Rive/Lottie, and any R3F scene.
* Code-split routes/feature sections; prefetch internal links on hover.
* Modern image formats (AVIF/WebP); `loading="lazy"`.
* Minify/inline critical SVG; reuse via `<symbol>` when repeating.
* **Targets (Lighthouse):** Performance ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 90 (mobile & desktop).

---

## 10) SEO & Social

* Semantic HTML; unique titles/descriptions per page.
* Open Graph/Twitter meta; social cover image matching gradient theme.
* Sitemap + robots; clean URL structure with filters in query params.

---

## 11) Components (shadcn/ui)

* **Base:** Button, Card, Badge, Tabs, Accordion, Dialog, DropdownMenu, HoverCard, Command, Toast, Skeleton.
* **Timeline:** custom component using Card + inline SVG icons; animated connectors.
* **Filters:** Command palette or chips row; clear-all action.
* **Modals:** quick project previews; keyboard + focus trap.

---

## 12) Acceptance Criteria

* Dark & light themes complete; icons auto-theme via `currentColor`.
* Timeline adapts layout at `md` and `lg` as specified; active node highlighted.
* Filters update URL; deep links restore state.
* All animations feel smooth; respect `prefers-reduced-motion`.
* Pages pass Lighthouse target scores; print stylesheet yields tidy 1–2 page resume.
* No external icon fonts; all icons from **svgl.app** inline SVG.
* Keyboard-only navigation works for all interactive elements.

