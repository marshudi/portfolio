'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profile from '@/data/profile.json'

// Tweak this to adjust the crop position (X% Y%)
// "50% 15%" = horizontally centered, showing upper portion (head + shoulders)
const AVATAR_POSITION = '50% 15%'

export function Hero() {
  const [titleIndex, setTitleIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profile.titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-stars" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/*
              Responsive sizes:
              - Mobile: 96px (w-24 h-24)
              - Tablet (md): 112px (w-28 h-28)
              - Desktop (lg): 128px (w-32 h-32)
            */}
            <div
              className="
                relative overflow-hidden rounded-full
                w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                ring-4 ring-primary/20
                shadow-lg shadow-primary/10
                glow-blue
              "
            >
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                className="object-cover"
                style={{ objectPosition: AVATAR_POSITION }}
                priority
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {profile.name}
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-8"
          >
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl md:text-2xl text-primary font-medium"
            >
              {profile.titles[titleIndex]}
            </motion.p>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground"
          >
            {profile.location}
          </motion.p>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            {profile.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8"
          >
            <Link
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
