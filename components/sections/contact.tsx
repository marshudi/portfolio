'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Youtube,
  Instagram,
  Copy,
  Check,
  Phone,
  Share2,
  ExternalLink,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from './section-heading'
import profile from '@/data/profile.json'

interface SocialLink {
  name: string
  icon: React.ComponentType<{ className?: string; size?: number }>
  href: string | undefined
  color: string
}

// =============================================================================
// DATA
// =============================================================================

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    href: profile.social.github,
    color: 'hover:bg-[#333]/10 dark:hover:bg-[#333]/30 hover:border-[#333]/50',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: profile.social.linkedin,
    color: 'hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: profile.social.twitter,
    color: 'hover:bg-[#1DA1F2]/10 dark:hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/50',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: profile.social.youtube,
    color: 'hover:bg-[#FF0000]/10 dark:hover:bg-[#FF0000]/20 hover:border-[#FF0000]/50',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: profile.social.instagram,
    color: 'hover:bg-[#E4405F]/10 dark:hover:bg-[#E4405F]/20 hover:border-[#E4405F]/50',
  },
]

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// =============================================================================
// PREMIUM CARD WRAPPER
// =============================================================================

interface PremiumCardProps {
  children: React.ReactNode
  icon: React.ComponentType<{ className?: string; size?: number }>
  title: string
  className?: string
  delay?: number
}

function PremiumCard({ children, icon: Icon, title, className = '', delay = 0 }: PremiumCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: prefersReducedMotion ? 0 : delay }}
    >
      <Card className={`relative overflow-hidden bg-card/50 dark:bg-[hsl(224,71%,6%)]/60 backdrop-blur-sm border-border/40 dark:border-[hsl(215,28%,16%)]/50 shadow-xl shadow-black/5 dark:shadow-black/20 ${className}`}>
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Header */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center border border-primary/20">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>

        <CardContent className="px-6 pb-6 pt-0">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}

// =============================================================================
// CONTACT INFO ROW
// =============================================================================

interface InfoRowProps {
  icon: React.ComponentType<{ className?: string; size?: number }>
  label: string
  value: string
  href?: string
  onCopy?: () => void
  copied?: boolean
  external?: boolean
}

function InfoRow({ icon: Icon, label, value, href, onCopy, copied, external }: InfoRowProps) {
  const content = (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-secondary/50 dark:bg-secondary/30 flex items-center justify-center border border-border/30 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-200">
          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground/70 uppercase tracking-wide font-medium">{label}</p>
          <p className="text-sm font-medium text-foreground mt-0.5 leading-relaxed">{value}</p>
        </div>
      </div>

      {onCopy && (
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onCopy()
          }}
          className="w-9 h-9 rounded-lg bg-secondary/50 dark:bg-secondary/30 flex items-center justify-center border border-border/30 opacity-0 group-hover:opacity-100 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      )}

      {external && (
        <div className="w-9 h-9 rounded-lg bg-secondary/50 dark:bg-secondary/30 flex items-center justify-center border border-border/30 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <ExternalLink size={16} className="text-muted-foreground" />
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="block p-4 -mx-4 rounded-xl hover:bg-secondary/30 dark:hover:bg-secondary/20 transition-all duration-200 cursor-pointer"
      >
        {content}
      </a>
    )
  }

  return <div className="p-4 -mx-4 rounded-xl">{content}</div>
}

// =============================================================================
// SOCIAL TILE
// =============================================================================

interface SocialTileProps {
  link: SocialLink
  index: number
}

function SocialTile({ link, index }: SocialTileProps) {
  const Icon = link.icon
  const prefersReducedMotion = useReducedMotion()

  if (!link.href) return null

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      className={`
        flex flex-col items-center gap-2.5 p-4
        rounded-xl border border-border/30 dark:border-[hsl(215,28%,18%)]/40
        bg-secondary/30 dark:bg-[hsl(215,28%,10%)]/40
        transition-all duration-200
        ${link.color}
        group cursor-pointer
      `}
    >
      <div className="w-10 h-10 rounded-lg bg-background/50 dark:bg-background/30 flex items-center justify-center border border-border/20 group-hover:border-current/30 transition-colors">
        <Icon size={20} className="text-muted-foreground group-hover:text-current transition-colors" />
      </div>
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {link.name}
      </span>
    </motion.a>
  )
}

// =============================================================================
// MAIN CONTACT COMPONENT
// =============================================================================

export function Contact() {
  const [emailCopied, setEmailCopied] = React.useState(false)

  const copyEmail = React.useCallback(() => {
    navigator.clipboard.writeText(profile.email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }, [])

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`

  return (
    <section id="contact" className="py-20 bg-secondary/20 dark:bg-transparent">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together? Feel free to reach out!"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Contact Information */}
          <PremiumCard icon={Phone} title="Contact Information">
            <div className="space-y-1">
              <InfoRow
                icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                onCopy={copyEmail}
                copied={emailCopied}
              />
              <InfoRow
                icon={MapPin}
                label="Location"
                value={profile.location}
                href={mapsUrl}
                external
              />
            </div>
          </PremiumCard>

          {/* Social Links */}
          <PremiumCard icon={Share2} title="Connect With Me" delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {socialLinks.map((link, index) => (
                <SocialTile key={link.name} link={link} index={index} />
              ))}
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </section>
  )
}
