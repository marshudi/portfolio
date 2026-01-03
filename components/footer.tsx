import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Youtube, Instagram } from 'lucide-react'
import profile from '@/data/profile.json'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
  email: Mail,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/50 dark:bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {Object.entries(profile.social).map(([key, value]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons]
              if (!Icon || !value) return null

              const href = key === 'email' ? `mailto:${value}` : value

              return (
                <Link
                  key={key}
                  href={href}
                  target={key !== 'email' ? '_blank' : undefined}
                  rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={key}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
