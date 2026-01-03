'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from './section-heading'
import certificationsData from '@/data/certifications.json'
import { formatDate } from '@/lib/utils'

const typeIcons: Record<string, typeof Award> = {
  certification: Award,
  degree: GraduationCap,
  course: Award,
}

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

export function Certifications() {
  if (certificationsData.certifications.length === 0) {
    return null
  }

  return (
    <section id="certifications" className="py-20 bg-secondary/30 dark:bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic achievements and professional certifications"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {certificationsData.certifications.map((cert, index) => {
            const Icon = typeIcons[cert.type] || typeIcons.certification
            const credentialUrl = (cert as { credentialUrl?: string }).credentialUrl

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {formatDate(cert.date)}
                          </Badge>
                          {cert.type && (
                            <Badge variant="outline" className="text-xs capitalize">
                              {cert.type}
                            </Badge>
                          )}
                        </div>
                        {credentialUrl && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="mt-3 -ml-2"
                            asChild
                          >
                            <a
                              href={credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View Credential
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
