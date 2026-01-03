'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from './section-heading'
import profile from '@/data/profile.json'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  const paragraphs = profile.longBio.split('\n\n')

  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card border-primary/10 dark:border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Key Strengths</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {profile.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
