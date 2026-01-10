'use client'

import { motion } from 'framer-motion'
import {
  Server,
  Layout,
  Code2,
  Database,
  Container,
  Plug2,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import skillsData from '@/data/skills.json'

// Category icons
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Backend': Server,
  'Frontend': Layout,
  'Languages': Code2,
  'Data & ETL': Database,
  'DevOps & Infrastructure': Container,
  'Integrations': Plug2,
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

interface SkillCategoryProps {
  category: {
    name: string
    skills: { name: string; level: string; years: number }[]
  }
  index: number
}

function SkillCategory({ category, index }: SkillCategoryProps) {
  const Icon = categoryIcons[category.name] || Server

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
    >
      <div className="relative h-full p-6 rounded-2xl bg-card/50 dark:bg-[hsl(224,71%,6%)]/70 backdrop-blur-sm border border-border/40 dark:border-[hsl(215,28%,17%)]/60 shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300">
        {/* Top accent gradient */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-t-2xl" />

        {/* Category Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center border border-primary/20 shadow-sm z-10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground tracking-tight">
            {category.name}
          </h3>
        </div>

        {/* Skills with connector lines */}
        <div className="relative pl-5">
          {/* Vertical connector line */}
          <div className="absolute left-[1.375rem] top-0 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          {/* Skills */}
          <div className="space-y-2">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="relative flex items-center">
                {/* Horizontal connector */}
                <div className="absolute -left-5 w-5 h-px bg-primary/20" />
                {/* Dot */}
                <div className="absolute -left-[0.1875rem] w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                {/* Skill pill */}
                <span className="ml-3 inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary/60 dark:bg-[hsl(215,28%,12%)]/80 text-foreground/80 dark:text-foreground/70 border border-border/30 dark:border-[hsl(215,28%,20%)]/50 hover:bg-primary/15 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary hover:border-primary/40 dark:hover:border-primary/50 hover:shadow-sm hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-200 cursor-default">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {skillsData.categories.map((category, index) => (
            <SkillCategory
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
