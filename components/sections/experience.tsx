'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Briefcase, TrendingUp, Calendar } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { calculateDuration, formatDate } from '@/lib/utils'
import experienceData from '@/data/experience.json'

// ============================================
// CONFIGURATION - Adjust these values
// ============================================
const CONFIG = {
  // Layout
  TIMELINE_COL_WIDTH: 40, // pixels - width of timeline column

  // Colors
  ACCENT_COLOR: '#E60000',
  ACCENT_COLOR_LIGHT: '#FF4D4D',

  // Line
  LINE_WIDTH: 2, // pixels

  // Dots
  ACTIVE_DOT_SIZE: 12,
  INACTIVE_DOT_SIZE: 10,
  DOT_BORDER: 2,

  // Glow animation
  STREAK_COUNT: 3,
  STREAK_HEIGHT: 24,
  STREAK_BLUR: 6,
  STREAK_OPACITY: 0.6,
  STREAK_DURATION: 2.5,
  STREAK_STAGGER: 0.8,
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const roleVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.2 },
  },
}

const bulletVariants = {
  hidden: { opacity: 0, x: -5 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.05 },
  }),
}

// ============================================
// Badge Component
// ============================================
function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'default' | 'promotion' | 'type'
}) {
  const baseClasses =
    'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-colors'

  const variantClasses = {
    default: 'bg-muted text-muted-foreground border border-border',
    promotion:
      'bg-[#E60000]/10 text-[#E60000] dark:bg-[#E60000]/20 dark:text-[#FF4D4D] border border-[#E60000]/20',
    type: 'bg-primary/10 text-primary border border-primary/20',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}

// ============================================
// Timeline Dot Component
// ============================================
function TimelineDot({
  isActive,
  isHighlighted,
  reduceMotion,
  topOffset,
}: {
  isActive: boolean
  isHighlighted: boolean
  reduceMotion: boolean
  topOffset: number
}) {
  const size = isActive ? CONFIG.ACTIVE_DOT_SIZE : CONFIG.INACTIVE_DOT_SIZE

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-20"
      style={{ top: topOffset - size / 2 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Ring */}
        <motion.div
          animate={reduceMotion ? {} : { scale: isHighlighted ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className="rounded-full bg-background"
          style={{
            width: size,
            height: size,
            border: `${CONFIG.DOT_BORDER}px solid ${
              isActive
                ? isHighlighted
                  ? CONFIG.ACCENT_COLOR_LIGHT
                  : CONFIG.ACCENT_COLOR
                : isHighlighted
                  ? 'hsl(var(--muted-foreground) / 0.5)'
                  : 'hsl(var(--muted-foreground) / 0.35)'
            }`,
          }}
        >
          {/* Inner fill for active */}
          {isActive && (
            <div
              className="absolute inset-[3px] rounded-full"
              style={{ backgroundColor: CONFIG.ACCENT_COLOR }}
            />
          )}
        </motion.div>

        {/* Subtle glow for active dot */}
        {isActive && (
          <motion.div
            animate={
              reduceMotion
                ? { opacity: 0.25 }
                : { opacity: [0.15, 0.3, 0.15] }
            }
            transition={{
              duration: 2,
              repeat: reduceMotion ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size + 8,
              height: size + 8,
              boxShadow: `0 0 8px 2px ${CONFIG.ACCENT_COLOR}40`,
            }}
          />
        )}
      </div>
    </div>
  )
}

// ============================================
// Glow Streak Component
// ============================================
function GlowStreak({
  startY,
  endY,
  delay,
}: {
  startY: number
  endY: number
  delay: number
}) {
  return (
    <motion.div
      initial={{ y: startY, opacity: 0 }}
      animate={{
        y: [startY, endY],
        opacity: [0, CONFIG.STREAK_OPACITY, CONFIG.STREAK_OPACITY, 0],
      }}
      transition={{
        duration: CONFIG.STREAK_DURATION,
        repeat: Infinity,
        delay,
        ease: 'linear',
        times: [0, 0.1, 0.9, 1],
      }}
      className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none z-10"
      style={{
        width: CONFIG.LINE_WIDTH + 2,
        height: CONFIG.STREAK_HEIGHT,
        background: `linear-gradient(to top, transparent, ${CONFIG.ACCENT_COLOR}80, ${CONFIG.ACCENT_COLOR}, ${CONFIG.ACCENT_COLOR}80, transparent)`,
        filter: `blur(${CONFIG.STREAK_BLUR}px)`,
      }}
    />
  )
}

// ============================================
// Experience Item Component
// ============================================
interface ExperienceItemProps {
  role: (typeof experienceData.companies)[0]['roles'][0]
  isLast: boolean
  reduceMotion: boolean
  onTitleMeasured: (offset: number) => void
  dotOffset: number
}

function ExperienceItem({
  role,
  isLast,
  reduceMotion,
  onTitleMeasured,
  dotOffset,
}: ExperienceItemProps) {
  const itemRef = React.useRef<HTMLDivElement>(null)
  const titleRowRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)

  const duration = calculateDuration(role.startDate, role.endDate)
  const isCurrentRole = !role.endDate
  const isHighlighted = isHovered || isFocused

  // Measure title row position
  React.useEffect(() => {
    const measure = () => {
      if (!itemRef.current || !titleRowRef.current) return

      const itemRect = itemRef.current.getBoundingClientRect()
      const titleRect = titleRowRef.current.getBoundingClientRect()

      // Calculate title row center relative to item top
      const titleCenter = titleRect.top - itemRect.top + titleRect.height / 2
      onTitleMeasured(titleCenter)
    }

    measure()

    // ResizeObserver for dynamic content changes
    const observer = new ResizeObserver(measure)
    if (itemRef.current) observer.observe(itemRef.current)

    // Also measure on font load
    document.fonts?.ready.then(measure)

    return () => observer.disconnect()
  }, [onTitleMeasured])

  return (
    <motion.div
      ref={itemRef}
      variants={roleVariants}
      className={`relative grid ${!isLast ? 'pb-8' : ''}`}
      style={{ gridTemplateColumns: `${CONFIG.TIMELINE_COL_WIDTH}px 1fr` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline column */}
      <div className="relative">
        <TimelineDot
          isActive={isCurrentRole}
          isHighlighted={isHighlighted}
          reduceMotion={reduceMotion}
          topOffset={dotOffset}
        />
      </div>

      {/* Content column */}
      <div
        className={`
          min-w-0 space-y-3
          rounded-lg transition-colors duration-200
          ${isHighlighted ? 'bg-muted/30' : ''}
          px-2 -my-1 py-1
        `}
        tabIndex={0}
        role="article"
        aria-label={`${role.title} role`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {/* Title row - ref attached here for dot alignment */}
        <div ref={titleRowRef} className="flex flex-wrap items-center gap-2">
          <h4 className="text-base font-semibold text-foreground leading-tight">
            {role.title}
          </h4>
          <motion.div variants={badgeVariants}>
            <Badge variant="type">{role.employmentType}</Badge>
          </motion.div>
        </div>

        {/* Team */}
        {'team' in role && role.team && (
          <p className="text-sm text-muted-foreground">{role.team}</p>
        )}

        {/* Date range */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 shrink-0" />
          <span>
            {formatDate(role.startDate)} —{' '}
            {role.endDate ? formatDate(role.endDate) : 'Present'}
          </span>
          <span className="text-border">·</span>
          <span className="font-medium">{duration}</span>
        </div>

        {/* Achievements */}
        {role.achievements.length > 0 && (
          <motion.div variants={badgeVariants} className="flex flex-wrap gap-2">
            {role.achievements.map((achievement, achIndex) => (
              <Badge key={achIndex} variant="promotion">
                <TrendingUp className="h-3 w-3" />
                {achievement.title}
              </Badge>
            ))}
          </motion.div>
        )}

        {/* Bullet points */}
        <ul className="space-y-2" role="list">
          {role.description.map((item, descIndex) => (
            <motion.li
              key={descIndex}
              custom={descIndex}
              variants={bulletVariants}
              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
            >
              <span
                className="mt-[7px] h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0"
                aria-hidden="true"
              />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// ============================================
// Roles Container with Timeline
// ============================================
function RolesContainer({
  roles,
  reduceMotion,
}: {
  roles: (typeof experienceData.companies)[0]['roles']
  reduceMotion: boolean
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [dotOffsets, setDotOffsets] = React.useState<number[]>(() =>
    roles.map(() => 16) // Default offset
  )
  const [glowRange, setGlowRange] = React.useState<{
    startY: number
    endY: number
  } | null>(null)

  const activeIndex = roles.findIndex((role) => !role.endDate)
  const nearestInactiveIndex = activeIndex + 1

  // Update glow range when dot offsets change
  React.useEffect(() => {
    if (
      activeIndex === -1 ||
      nearestInactiveIndex >= roles.length ||
      !containerRef.current
    ) {
      setGlowRange(null)
      return
    }

    // Calculate cumulative Y positions based on dot offsets and item heights
    const items = containerRef.current.querySelectorAll('[data-role-item]')
    if (items.length < nearestInactiveIndex + 1) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const activeItem = items[activeIndex] as HTMLElement
    const inactiveItem = items[nearestInactiveIndex] as HTMLElement

    const activeY =
      activeItem.getBoundingClientRect().top -
      containerRect.top +
      dotOffsets[activeIndex]
    const inactiveY =
      inactiveItem.getBoundingClientRect().top -
      containerRect.top +
      dotOffsets[nearestInactiveIndex]

    setGlowRange({
      startY: inactiveY - CONFIG.STREAK_HEIGHT / 2,
      endY: activeY - CONFIG.STREAK_HEIGHT / 2,
    })
  }, [dotOffsets, activeIndex, nearestInactiveIndex, roles.length])

  const handleTitleMeasured = React.useCallback(
    (index: number, offset: number) => {
      setDotOffsets((prev) => {
        if (prev[index] === offset) return prev
        const next = [...prev]
        next[index] = offset
        return next
      })
    },
    []
  )

  return (
    <div ref={containerRef} className="relative">
      {/* Timeline column overlay for line and glow */}
      <div
        className="absolute top-0 bottom-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: CONFIG.TIMELINE_COL_WIDTH }}
      >
        {/* Base gray line - centered */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-0"
          style={{
            width: CONFIG.LINE_WIDTH,
            backgroundColor: 'hsl(var(--muted-foreground) / 0.2)',
          }}
        />

        {/* Red tint overlay for active segment */}
        {glowRange && (
          <div
            className="absolute left-1/2 -translate-x-1/2 z-0"
            style={{
              width: CONFIG.LINE_WIDTH,
              top: glowRange.endY + CONFIG.STREAK_HEIGHT / 2,
              height: Math.max(0, glowRange.startY - glowRange.endY),
              background: `linear-gradient(to bottom, ${CONFIG.ACCENT_COLOR}40, ${CONFIG.ACCENT_COLOR}15)`,
            }}
          />
        )}

        {/* Glow streaks */}
        {!reduceMotion && glowRange && (
          <>
            {Array.from({ length: CONFIG.STREAK_COUNT }).map((_, i) => (
              <GlowStreak
                key={i}
                startY={glowRange.startY}
                endY={glowRange.endY}
                delay={i * CONFIG.STREAK_STAGGER}
              />
            ))}
          </>
        )}
      </div>

      {/* Role items */}
      <motion.div variants={containerVariants} className="space-y-0">
        {roles.map((role, index) => (
          <div key={index} data-role-item>
            <ExperienceItem
              role={role}
              isLast={index === roles.length - 1}
              reduceMotion={reduceMotion}
              dotOffset={dotOffsets[index]}
              onTitleMeasured={(offset) => handleTitleMeasured(index, offset)}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ============================================
// Main Experience Section
// ============================================
export function Experience() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and career highlights"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          {experienceData.companies.map((company, companyIndex) => {
            const firstRole = company.roles[company.roles.length - 1]
            const lastRole = company.roles[0]
            const totalDuration = calculateDuration(
              firstRole.startDate,
              lastRole.endDate
            )

            return (
              <motion.article
                key={companyIndex}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -4, transition: { duration: 0.2 } }
                }
                className="
                  relative
                  bg-card rounded-xl
                  border border-border
                  shadow-sm hover:shadow-lg hover:shadow-primary/5
                  transition-shadow duration-300
                  overflow-hidden
                "
              >
                {/* Company header */}
                <header className="p-6 pb-4 border-b border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-muted/50 border border-border flex items-center justify-center shrink-0 overflow-hidden">
                      {company.companyLogo ? (
                        <Image
                          src={company.companyLogo}
                          alt={`${company.companyName} logo`}
                          width={56}
                          height={56}
                          className="object-contain p-2"
                        />
                      ) : (
                        <Briefcase className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground tracking-tight">
                        {company.companyName}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {company.location}
                        </span>
                        <span className="text-border hidden sm:inline">·</span>
                        <span className="font-medium">{totalDuration}</span>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Roles timeline */}
                <div className="p-6 pt-5">
                  <RolesContainer
                    roles={company.roles}
                    reduceMotion={shouldReduceMotion ?? false}
                  />
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
