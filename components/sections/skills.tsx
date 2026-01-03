'use client'

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  type ComponentType,
  type SVGProps,
  type RefObject,
} from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { SectionHeading } from './section-heading'
import skillsData from '@/data/skills.json'

// Lucide icons for categories and generic skills
import {
  Server,
  Layout,
  Code2,
  Database,
  Container,
  Plug2,
  Workflow,
  Mail,
  Bot,
  CircleDot,
} from 'lucide-react'

// Simple Icons for tech brand logos
import {
  SiFastapi,
  SiFlask,
  SiExpress,
  SiRust,
  SiReact,
  SiTypescript,
  SiFlutter,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiApacheairflow,
  SiPandas,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiSlack,
  SiWhatsapp,
  SiJirasoftware,
} from 'react-icons/si'

// =============================================================================
// TYPES
// =============================================================================

interface SkillCategory {
  category: string
  items: string[]
}

interface ConnectorPath {
  id: number
  d: string
  length: number
}

interface SkillTreeCardProps {
  category: string
  items: string[]
  index: number
}

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>

interface IconMapping {
  icon: IconComponent
  className?: string
}

// =============================================================================
// CONFIGURATION
// =============================================================================

const CONFIG = {
  // Vertical offset from pill edges (so lines don't cut into borders)
  HEADER_OFFSET: 4,
  SKILL_OFFSET: 4,
  // Curve control point factor (how much the curve bows out)
  CURVE_FACTOR: 0.5,
  // Minimum curve height
  MIN_CURVE_HEIGHT: 20,
  // Line styling
  LINE_WIDTH: 1.5,
  LINE_WIDTH_HOVER: 2.5,
  LINE_OPACITY: 0.2,
  LINE_OPACITY_HOVER: 0.6,
  // Animation
  DRAW_DURATION: 0.6,
  DRAW_STAGGER: 0.05,
}

// =============================================================================
// ICON MAPPINGS
// =============================================================================

const categoryIconMap: Record<string, IconMapping> = {
  'Backend': { icon: Server },
  'Frontend': { icon: Layout },
  'Languages': { icon: Code2 },
  'Data & ETL': { icon: Database },
  'DevOps & Infrastructure': { icon: Container },
  'Integrations': { icon: Plug2 },
}

const skillIconMap: Record<string, IconMapping> = {
  // Backend
  'FastAPI': { icon: SiFastapi },
  'Flask': { icon: SiFlask },
  'Express/Node.js': { icon: SiExpress },
  'Actix Web (Rust)': { icon: SiRust },
  // Frontend
  'React': { icon: SiReact },
  'TypeScript': { icon: SiTypescript },
  'React Router': { icon: SiReact },
  'Zustand': { icon: SiReact },
  'React Query': { icon: SiReact },
  'Flutter': { icon: SiFlutter },
  'TailwindCSS': { icon: SiTailwindcss },
  // Languages
  'Python': { icon: SiPython },
  'JavaScript': { icon: SiJavascript },
  'Rust': { icon: SiRust },
  'SQL': { icon: Database },
  // Data & ETL
  'Apache Airflow': { icon: SiApacheairflow },
  'Pandas': { icon: SiPandas },
  'PostgreSQL': { icon: SiPostgresql },
  'MongoDB': { icon: SiMongodb },
  'Redis': { icon: SiRedis },
  // DevOps & Infrastructure
  'Docker': { icon: SiDocker },
  'Kubernetes/OpenShift': { icon: SiKubernetes },
  'CI/CD': { icon: Workflow },
  'Nginx': { icon: SiNginx },
  'n8n': { icon: Workflow },
  // Integrations
  'Slack API': { icon: SiSlack },
  'WhatsApp Business API': { icon: SiWhatsapp },
  'Jira API': { icon: SiJirasoftware },
  'SFTP/SMTP': { icon: Mail },
  'Ollama LLM': { icon: Bot },
}

const fallbackIcon: IconMapping = { icon: CircleDot }

// =============================================================================
// ICON COMPONENTS
// =============================================================================

const CategoryIcon = memo(function CategoryIcon({
  category,
  isHovered,
}: {
  category: string
  isHovered: boolean
}) {
  const mapping = categoryIconMap[category] || fallbackIcon
  const Icon = mapping.icon

  return (
    <Icon
      size={18}
      className={`
        shrink-0
        transition-opacity duration-200
        ${isHovered ? 'opacity-90' : 'opacity-60'}
        ${mapping.className || ''}
      `}
      aria-hidden="true"
    />
  )
})

const SkillIcon = memo(function SkillIcon({
  skill,
  isHovered,
}: {
  skill: string
  isHovered: boolean
}) {
  const mapping = skillIconMap[skill] || fallbackIcon
  const Icon = mapping.icon

  return (
    <Icon
      size={14}
      className={`
        shrink-0
        transition-opacity duration-200
        ${isHovered ? 'opacity-90' : 'opacity-50'}
        ${mapping.className || ''}
      `}
      aria-hidden="true"
    />
  )
})

// =============================================================================
// DATA TRANSFORMATION
// =============================================================================

const skills: SkillCategory[] = skillsData.categories.map((cat) => ({
  category: cat.name,
  items: cat.skills.map((s) => s.name),
}))

// =============================================================================
// CUSTOM HOOK: Intersection Observer
// =============================================================================

function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(element)

    return () => observer.disconnect()
  }, [ref, options.threshold, options.rootMargin])

  return isIntersecting
}

// =============================================================================
// CUSTOM HOOK: Connectors
// =============================================================================

function useConnectors(
  cardRef: RefObject<HTMLDivElement | null>,
  headerRef: RefObject<HTMLElement | null>,
  itemRefs: RefObject<(HTMLElement | null)[]>,
  isInView: boolean
): ConnectorPath[] {
  const [paths, setPaths] = useState<ConnectorPath[]>([])

  const calculatePaths = useCallback(() => {
    const card = cardRef.current
    const header = headerRef.current
    const items = itemRefs.current

    if (!card || !header || !items.length) {
      setPaths([])
      return
    }

    const cardRect = card.getBoundingClientRect()

    // Get header bottom center in card-local coordinates
    const headerRect = header.getBoundingClientRect()
    const sx = headerRect.left - cardRect.left + headerRect.width / 2
    const sy = headerRect.top - cardRect.top + headerRect.height + CONFIG.HEADER_OFFSET

    const newPaths: ConnectorPath[] = []

    items.forEach((item, index) => {
      if (!item) return

      const itemRect = item.getBoundingClientRect()

      // Get skill top center in card-local coordinates
      const ex = itemRect.left - cardRect.left + itemRect.width / 2
      const ey = itemRect.top - cardRect.top - CONFIG.SKILL_OFFSET

      // Calculate vertical distance
      const dy = ey - sy

      // Calculate control points for smooth S-curve
      // The curve should bow outward then come back to the endpoint
      const curveHeight = Math.max(dy * CONFIG.CURVE_FACTOR, CONFIG.MIN_CURVE_HEIGHT)

      // Horizontal offset for the control points (creates fanning effect)
      const horizontalSpread = (ex - sx) * 0.3

      // Control point 1: below header, slightly toward the skill
      const cp1x = sx + horizontalSpread
      const cp1y = sy + curveHeight

      // Control point 2: above skill, coming from header direction
      const cp2x = ex - horizontalSpread * 0.5
      const cp2y = ey - curveHeight * 0.6

      // Create cubic bezier path
      const d = `M ${sx} ${sy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${ex} ${ey}`

      // Estimate path length for animation
      const length = Math.sqrt(Math.pow(ex - sx, 2) + Math.pow(ey - sy, 2)) * 1.4

      newPaths.push({ id: index, d, length })
    })

    setPaths(newPaths)
  }, [cardRef, headerRef, itemRefs])

  useEffect(() => {
    if (!isInView) return

    // Initial calculation with small delay for layout
    const initialTimer = setTimeout(() => {
      requestAnimationFrame(calculatePaths)
    }, 50)

    // Recalculate on resize
    const card = cardRef.current
    if (!card) return () => clearTimeout(initialTimer)

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(calculatePaths)
    })
    resizeObserver.observe(card)

    // Window resize handler
    const handleResize = () => {
      requestAnimationFrame(calculatePaths)
    }
    window.addEventListener('resize', handleResize)

    // Font load handler
    if (document.fonts) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(calculatePaths)
      })
    }

    return () => {
      clearTimeout(initialTimer)
      resizeObserver.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [isInView, calculatePaths])

  return paths
}

// =============================================================================
// SKILL TREE CARD COMPONENT
// =============================================================================

const SkillTreeCard = memo(function SkillTreeCard({
  category,
  items,
  index,
}: SkillTreeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const [focusedSkill, setFocusedSkill] = useState<number | null>(null)
  const [rootHovered, setRootHovered] = useState(false)
  const [rootFocused, setRootFocused] = useState(false)

  const prefersReducedMotion = useReducedMotion()
  const isInView = useIntersectionObserver(cardRef, {
    threshold: 0.2,
    rootMargin: '-50px',
  })

  // Get connector paths
  const connectorPaths = useConnectors(cardRef, headerRef, itemRefs, isInView)

  // Combined active states
  const isRootActive = rootHovered || rootFocused
  const activeSkillIndex = hoveredSkill ?? focusedSkill

  // Animation variants
  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: index * 0.1,
        },
      },
    }),
    [index]
  )

  const rootVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          delay: 0.15 + index * 0.1,
          ease: [0.34, 1.56, 0.64, 1],
        },
      },
    }),
    [index]
  )

  const baseDelay = 0.2 + index * 0.1

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="h-full"
    >
      <Card className="relative h-full overflow-hidden bg-card/40 dark:bg-[hsl(224,71%,6%)]/60 backdrop-blur-sm border-border/40 dark:border-[hsl(215,28%,16%)]/50 shadow-lg shadow-black/5 dark:shadow-black/20">
        {/* SVG Connector Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 5 }}
          aria-hidden="true"
        >
          <defs>
            {/* Glow filter for highlighted lines */}
            <filter
              id={`connector-glow-${index}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {connectorPaths.map((path) => {
            const isHighlighted = isRootActive || activeSkillIndex === path.id

            return (
              <motion.path
                key={path.id}
                d={path.d}
                fill="none"
                stroke={isHighlighted ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'}
                strokeWidth={isHighlighted ? CONFIG.LINE_WIDTH_HOVER : CONFIG.LINE_WIDTH}
                strokeLinecap="round"
                filter={isHighlighted ? `url(#connector-glow-${index})` : undefined}
                initial={
                  prefersReducedMotion
                    ? { opacity: CONFIG.LINE_OPACITY }
                    : {
                        pathLength: 0,
                        opacity: 0,
                      }
                }
                animate={
                  isInView
                    ? {
                        pathLength: prefersReducedMotion ? 1 : 1,
                        opacity: isHighlighted
                          ? CONFIG.LINE_OPACITY_HOVER
                          : CONFIG.LINE_OPACITY,
                      }
                    : {}
                }
                transition={{
                  pathLength: {
                    duration: CONFIG.DRAW_DURATION,
                    delay: baseDelay + path.id * CONFIG.DRAW_STAGGER,
                    ease: 'easeOut',
                  },
                  opacity: {
                    duration: 0.2,
                  },
                  strokeWidth: {
                    duration: 0.15,
                  },
                }}
              />
            )
          })}
        </svg>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header Node (Category Title) */}
          <div className="flex justify-center mb-12">
            <motion.button
              ref={headerRef}
              type="button"
              variants={rootVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              onMouseEnter={() => setRootHovered(true)}
              onMouseLeave={() => setRootHovered(false)}
              onFocus={() => setRootFocused(true)}
              onBlur={() => setRootFocused(false)}
              aria-label={`${category} skills category`}
              className={`
                inline-flex items-center gap-2.5
                px-5 py-2.5
                rounded-xl
                text-base font-semibold
                bg-primary/10 dark:bg-primary/15
                text-primary
                border border-primary/25 dark:border-primary/30
                transition-all duration-200 ease-out
                cursor-default select-none
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                ${
                  isRootActive
                    ? 'shadow-lg shadow-primary/25 dark:shadow-primary/35 scale-105 bg-primary/15 dark:bg-primary/20 border-primary/40'
                    : 'shadow-sm shadow-primary/10'
                }
              `}
            >
              <CategoryIcon category={category} isHovered={isRootActive} />
              <span>{category}</span>
            </motion.button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((skill, i) => {
              const isActive = activeSkillIndex === i

              return (
                <motion.button
                  key={skill}
                  type="button"
                  ref={(el) => {
                    itemRefs.current[i] = el
                  }}
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 0.35,
                            delay: baseDelay + 0.15 + i * 0.04,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          },
                        }
                      : {}
                  }
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onFocus={() => setFocusedSkill(i)}
                  onBlur={() => setFocusedSkill(null)}
                  aria-label={skill}
                  className={`
                    flex items-center justify-center gap-2
                    px-3 py-2.5
                    rounded-lg
                    text-xs sm:text-sm font-medium text-center
                    bg-secondary/50 dark:bg-[hsl(215,28%,10%)]/60
                    text-foreground/80 dark:text-foreground/70
                    border border-border/30 dark:border-[hsl(215,28%,18%)]/40
                    transition-all duration-200 ease-out
                    cursor-default select-none
                    whitespace-nowrap
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background
                    ${
                      isActive
                        ? 'bg-primary/10 dark:bg-primary/15 border-primary/40 dark:border-primary/50 text-primary scale-[1.03] shadow-md shadow-primary/20 dark:shadow-primary/30'
                        : ''
                    }
                  `}
                >
                  <SkillIcon skill={skill} isHovered={isActive} />
                  <span>{skill}</span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/50 dark:from-[hsl(224,71%,4%)]/30 to-transparent pointer-events-none z-0" />
      </Card>
    </motion.div>
  )
})

// =============================================================================
// MAIN SKILLS COMPONENT
// =============================================================================

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillTreeCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
