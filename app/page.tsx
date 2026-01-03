'use client'

import { motion } from 'framer-motion'
import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Certifications,
  Contact,
} from '@/components/sections'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </motion.div>
  )
}
