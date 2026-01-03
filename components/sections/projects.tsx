'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Building2,
  Lock,
  Globe,
  Github,
  ExternalLink,
  Search,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'
import projectsData from '@/data/projects.json'

// ============================================
// DESIGN TOKENS
// ============================================
const TOKENS = {
  // Card
  cardPadding: 'p-6',
  cardRadius: 'rounded-xl',
  cardBorder: 'border border-border/50',
  cardBg: 'bg-card',
  cardShadow: 'shadow-sm',
  cardHoverShadow: 'hover:shadow-lg hover:shadow-primary/5',
  cardHoverBorder: 'hover:border-primary/30',
  cardTransition: 'transition-all duration-300',

  // Icon
  iconSize: 'w-8 h-8',
  iconRadius: 'rounded-lg',
  iconBg: 'bg-muted/50',

  // Typography
  titleSize: 'text-base font-semibold',
  titleColor: 'text-foreground',
  descSize: 'text-sm',
  descColor: 'text-muted-foreground',

  // Chips
  chipHeight: 'h-6',
  chipPadding: 'px-2.5',
  chipRadius: 'rounded-md',
  chipFont: 'text-xs font-medium',
  chipGap: 'gap-1.5',

  // Badge positioning
  badgePosition: 'absolute top-4 right-4',

  // Spacing
  headerGap: 'gap-3',
  sectionGap: 'space-y-4',
  chipSectionGap: 'gap-2',
}

// ============================================
// TYPES
// ============================================
type Visibility = 'all' | 'internal' | 'private' | 'public'

const visibilityConfig = {
  internal: {
    icon: Building2,
    label: 'Internal',
    className: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  },
  private: {
    icon: Lock,
    label: 'Private',
    className: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
  },
  public: {
    icon: Globe,
    label: 'Public',
    className: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
}

// ============================================
// ANIMATION VARIANTS
// ============================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ============================================
// BADGE COMPONENT
// ============================================
function VisibilityBadge({ visibility }: { visibility: string }) {
  const key = (visibility in visibilityConfig ? visibility : 'public') as keyof typeof visibilityConfig
  const config = visibilityConfig[key]
  const Icon = config.icon

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'px-2.5 py-1',
        'text-xs font-medium',
        'rounded-full border',
        config.className
      )}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  )
}

// ============================================
// CHIP COMPONENT
// ============================================
function Chip({
  children,
  variant = 'category',
}: {
  children: React.ReactNode
  variant?: 'category' | 'tech' | 'more'
}) {
  const variantClasses = {
    category: 'bg-primary/10 text-primary border-primary/20',
    tech: 'bg-muted text-muted-foreground border-border',
    more: 'bg-muted/50 text-muted-foreground border-border/50',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        TOKENS.chipHeight,
        TOKENS.chipPadding,
        TOKENS.chipRadius,
        TOKENS.chipFont,
        'border',
        variantClasses[variant]
      )}
    >
      {children}
    </span>
  )
}

// ============================================
// PROJECT CARD COMPONENT
// ============================================
function ProjectCard({
  project,
}: {
  project: (typeof projectsData.projects)[0]
}) {
  const displayDescription =
    project.redactDetails && project.safeSummary
      ? project.safeSummary
      : project.description

  const hasLinks = project.links && Object.keys(project.links).length > 0
  const maxTechDisplay = 4

  return (
    <article
      className={cn(
        // Structure
        'relative flex flex-col',
        'min-h-[320px]',
        TOKENS.cardPadding,
        TOKENS.cardRadius,
        TOKENS.cardBorder,
        TOKENS.cardBg,
        TOKENS.cardShadow,
        // Hover
        TOKENS.cardHoverShadow,
        TOKENS.cardHoverBorder,
        TOKENS.cardTransition,
        // Focus
        'focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/30'
      )}
    >
      {/* Badge - Absolute positioned */}
      <div className={TOKENS.badgePosition}>
        <VisibilityBadge visibility={project.visibility} />
      </div>

      {/* Header: Icon + Title */}
      <div className={cn('flex items-start', TOKENS.headerGap, 'pr-24 mb-4')}>
        {/* Org Logo */}
        {project.orgLogo ? (
          <div
            className={cn(
              TOKENS.iconSize,
              TOKENS.iconRadius,
              TOKENS.iconBg,
              'flex-shrink-0 flex items-center justify-center overflow-hidden border border-border/30'
            )}
          >
            <Image
              src={project.orgLogo}
              alt={project.orgName || ''}
              width={32}
              height={32}
              className="object-contain p-1"
            />
          </div>
        ) : (
          <div
            className={cn(
              TOKENS.iconSize,
              TOKENS.iconRadius,
              TOKENS.iconBg,
              'flex-shrink-0 flex items-center justify-center border border-border/30'
            )}
          >
            <Globe className="h-4 w-4 text-muted-foreground" />
          </div>
        )}

        {/* Title - 2 line clamp */}
        <h3
          className={cn(
            TOKENS.titleSize,
            TOKENS.titleColor,
            'leading-snug',
            'line-clamp-2'
          )}
        >
          {project.title}
        </h3>
      </div>

      {/* Description - 3 line clamp */}
      <p
        className={cn(
          TOKENS.descSize,
          TOKENS.descColor,
          'leading-relaxed',
          'line-clamp-3',
          'mb-4'
        )}
      >
        {displayDescription}
      </p>

      {/* Tags Section - Category chips */}
      <div className={cn('flex flex-wrap', TOKENS.chipGap, 'mb-3')}>
        {project.tags.map((tag, idx) => (
          <Chip key={idx} variant="category">
            {tag}
          </Chip>
        ))}
      </div>

      {/* Tech Stack Section */}
      <div className={cn('flex flex-wrap', TOKENS.chipGap, 'mb-4')}>
        {project.techStack.slice(0, maxTechDisplay).map((tech, idx) => (
          <Chip key={idx} variant="tech">
            {tech}
          </Chip>
        ))}
        {project.techStack.length > maxTechDisplay && (
          <Chip variant="more">
            +{project.techStack.length - maxTechDisplay} more
          </Chip>
        )}
      </div>

      {/* Spacer to push links to bottom */}
      <div className="flex-1" />

      {/* Links */}
      {hasLinks && (
        <div className="flex gap-2 pt-4 border-t border-border/50">
          {project.links?.github && (
            <Button
              size="sm"
              variant="ghost"
              className="h-8 px-3 text-xs"
              asChild
            >
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5 mr-1.5" />
                Code
              </a>
            </Button>
          )}
          {(project.links?.demo || project.links?.website) && (
            <Button
              size="sm"
              variant="ghost"
              className="h-8 px-3 text-xs"
              asChild
            >
              <a
                href={project.links.demo || project.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                {project.links.website ? 'Website' : 'Demo'}
              </a>
            </Button>
          )}
        </div>
      )}
    </article>
  )
}

// ============================================
// MAIN PROJECTS SECTION
// ============================================
export function Projects() {
  const [filter, setFilter] = React.useState<Visibility>('all')
  const [search, setSearch] = React.useState('')

  const filteredProjects = projectsData.projects.filter((project) => {
    const matchesFilter = filter === 'all' || project.visibility === filter
    const matchesSearch =
      search === '' ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      ) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase())
      )
    return matchesFilter && matchesSearch
  })

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/30 dark:bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Projects"
          subtitle="A selection of my work across enterprise, entrepreneurial, and academic projects"
        />

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects by name, tag, or technology..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-11"
            />
          </div>

          {/* Visibility Tabs */}
          <Tabs
            value={filter}
            onValueChange={(v) => setFilter(v as Visibility)}
          >
            <TabsList className="grid w-full grid-cols-4 h-11">
              <TabsTrigger value="all" className="text-sm">All</TabsTrigger>
              <TabsTrigger value="internal" className="text-sm">Internal</TabsTrigger>
              <TabsTrigger value="private" className="text-sm">Private</TabsTrigger>
              <TabsTrigger value="public" className="text-sm">Public</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <motion.div
          key={filter + search}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
