Got it. Here is an upgraded prompt that includes your Vodafone experience content, organized cleanly, and designed so the site can render everything from JSON while keeping internal work safe.

## Updated prompt (include this at the top of your build request)

Build a modern, highly professional portfolio website for:

**Mohammed Al-Marshudi**
Application Engineer, Operations (TechOps) | Full Stack Engineer | Data Automation Engineer

The website must communicate that I build and operate internal telecom platforms at Vodafone Oman with a focus on reliability, automation, observability, and scalable architecture. Most work is internal and cannot be publicly shared, so the site must support “safe summaries” and privacy controls for internal projects.

Use this content as the baseline data to populate the Experience and About sections (but do not hardcode it inside components. Put it into JSON files and render from there).

### Vodafone Oman role summary (must be included in site content)

**Role:** Application Engineer, Operations (TechOps)
**Profile:** Application Engineer in TechOps at Vodafone Oman, building and operating internal platforms across backend APIs, web and mobile frontends, and production ETL pipelines. Strong focus on reliability, automation, observability, and scalable architecture. Most work is on internal systems and cannot be publicly shared, but key outcomes and tech stack are summarized below.

### Responsibilities (render as bullets)

* Design, build, and maintain internal APIs and services for telecom operations and business platforms
* Develop modern web dashboards and internal tools for operational visibility and workflows
* Build production ETL pipelines and automated reporting (SFTP ingestion, transformations, bulk loads, email delivery)
* Implement authentication, RBAC permissions, audit logging, request tracing, and operational safeguards
* Deploy and support services on Docker and Kubernetes/OpenShift environments
* Integrate external systems (Slack, WhatsApp Business API, SMTP, SFTP, Jira APIs, telecom gateways)
* Improve operational readiness with alerts, failure handling, and runbook style reporting

### Selected internal projects (high level, safe summaries)

1. Internal CRM and Operations Platform (multi client)

* Built a modular FastAPI backend with multiple routers covering authentication, customer profile, segmentation, and operational tools
* Implemented JWT authentication, RBAC permissions, middleware logging, and request tracking
* Delivered multiple client experiences (React web and Flutter Web App) backed by the same API
* Deployed and supported in Kubernetes with production readiness practices
  Stack: FastAPI, Python, PostgreSQL, Docker, Kubernetes/OpenShift, React, TypeScript, Flutter, TailwindCSS

2. Apache Airflow production data pipelines (ETL and reporting)

* Built and operated multiple production DAGs handling large daily datasets and business critical reporting
* Implemented batch processing, safe datatype conversions, duplicate handling, and bulk loading using PostgreSQL COPY patterns
* Automated SFTP retrieval, Excel to CSV conversion, ZIP packaging, and email delivery via Office 365 SMTP
* Added Slack notifications using Block Kit, with clear failure context and stage level error identification
  Stack: Apache Airflow, Python, Pandas, psycopg2, Paramiko, openpyxl, PostgreSQL, Slack API, OpenShift

3. AI chatbot platform (internal automation)

* Integrated local LLM inference with Ollama for privacy conscious deployments
* Built session management for multi turn conversations and structured data extraction from natural language
* Implemented modular orchestration and validation layers to support future expansion
  Stack: FastAPI, Python, Ollama, Docker Compose, JavaScript

4. Telecom operations bulk tools

* Built internal Python tools for customer lookups and bulk account operations using CSV and Excel inputs
* Implemented validation, smart skipping of processed entries, rate limiting, and reporting exports
* Reduced manual effort and improved consistency for repeated operational tasks
  Stack: Python, Pandas, Requests, SQL, internal telecom APIs

### Frameworks and technologies (render as grouped chips)

Backend: FastAPI, Actix web, Express/Node.js
Frontend: React (hooks), React Router, Zustand, React Query, Flutter
Data: Apache Airflow, Pandas, PostgreSQL (COPY, bulk operations), SQL
Infra/DevOps: Docker, Kubernetes/OpenShift, CI/CD, Nginx
Integrations: Slack (Block Kit), WhatsApp Business Cloud API, SMTP Office 365, SFTP (Paramiko), Jira APIs, Ollama LLM API

Important privacy rule:

* Internal projects must never expose sensitive details. Support fields like `redactDetails: true`, `safeSummary`, and optional `internalNotes` that are never rendered.

---

## Full build prompt (use this as the main instruction)

Build a modern, highly professional personal portfolio website using React with **Next.js App Router** and **shadcn/ui only** for UI components. The site must be fully responsive and include Light and Dark themes, fully animated, and entirely data driven from JSON so I can update content easily.

### Core requirements

* Framework: Next.js (App Router), TypeScript
* UI: shadcn/ui components only, Tailwind CSS with CSS variables (HSL tokens)
* Animations: Framer Motion (consistent style and reduced motion support)
* Data: local JSON files in a `data/` folder, validated with Zod
* Architecture: reusable components, clear folder structure, no hardcoded content
* Performance: fast loads, lazy images, minimal JS, smooth animations
* Accessibility: keyboard friendly, correct semantics, good contrast

### Theming and visual style

* Two themes:

  * Light mode: dark blue “space” theme (deep navy backgrounds, subtle gradients, premium look)
  * Dark mode: brighter blue glow theme (cooler blues, soft illumination, still elegant)
* Keep the design clean, corporate, premium. No clutter.
* Use subtle background effects using CSS only (noise, gradient glow, star dots) and keep it performant.

### Sections to implement

1. Hero: logo, my photo, headline, short bio, CTA buttons (Contact, Download CV)
2. About: longer bio, key strengths, responsibilities
3. Experience: LinkedIn style timeline grouped by company with promotions and duration calculations
4. Projects: internal vs private vs public, with filtering and icons/badges
5. Achievements and Certifications: list and cards
6. Skills: categories and chips
7. Contact: email and social links, simple form optional
8. Footer: compact, professional

### Experience timeline like LinkedIn

* Group roles under one company card (Vodafone Oman)
* Show company duration total
* Each role shows title, dates, location, type and an auto computed duration like “11 mos” or “2 yrs 10 mos”
* If multiple roles exist within the same company, show them stacked under one company with a left vertical timeline line
* Timeline animations:

  * Line draws when section enters viewport
  * Role nodes pop in with stagger
  * Hover shows subtle highlight
* Each role can have optional “achievement links”:

  * if internal: open a modal with safe text only
  * if public: external link allowed

### Projects section rules

Projects must support three visibility types:

* internal: show company logo + “Internal” badge, show only safe summary, no sensitive details
* private: show lock icon + “Private” badge, optionally no links
* public: show links to GitHub, demo, case study
  Add a FilterBar:
* search input
* tabs for visibility (All, Internal, Private, Public)
* tag filter dropdown
  Add project cards with consistent layout and hover micro interactions.

### JSON driven content (must implement)

Create JSON files and render from them:

* profile.json
* experience.json
* projects.json
* certifications.json
* skills.json

Also implement a `content.schema.ts` file with Zod schemas, so invalid JSON fails in dev with clear errors.

### SEO and metadata (must be included)

* Use Next.js metadata API to generate:

  * title template, description
  * Open Graph tags, Twitter cards
  * canonical URL
* Add JSON LD structured data:

  * Person (name, jobTitle, image, sameAs, worksFor)
  * WebSite
* Add sitemap and robots
* Ensure pages are searchable and rich previews look professional.

### Docker and production

* Provide a multi stage Dockerfile:

  * build stage: install and build
  * runtime stage: minimal Node image
* Enable Next.js output standalone
* Provide docker compose example
* Add README with:

  * how to run locally
  * how to edit JSON data
  * how to build and run Docker

### Deliverables

* Complete codebase with clean structure
* Fully working responsive UI
* Theme toggle with persistence
* Animated LinkedIn style Experience timeline
* Projects filtering and badges
* SEO metadata + JSON LD
* Dockerfile + docker compose

Use my Vodafone content above as the initial JSON data seed and render it in the About, Experience, and Projects sections while respecting internal privacy constraints.


