import { z } from 'zod'

export const socialSchema = z.object({
  github: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  twitter: z.string().url().optional(),
  instagram: z.string().url().optional(),
  youtube: z.string().url().optional(),
  email: z.string().email(),
})

export const profileSchema = z.object({
  name: z.string(),
  title: z.string(),
  titles: z.array(z.string()),
  location: z.string(),
  email: z.string().email(),
  shortBio: z.string(),
  longBio: z.string(),
  avatar: z.string(),
  logo: z.string(),
  resume: z.string().optional(),
  social: socialSchema,
  keywords: z.array(z.string()),
  highlights: z.array(z.string()),
})

export const achievementSchema = z.object({
  title: z.string(),
  type: z.enum(['promotion', 'award', 'milestone']),
  link: z.string().url().optional(),
})

export const roleSchema = z.object({
  title: z.string(),
  startDate: z.string(),
  endDate: z.string().nullable(),
  employmentType: z.string(),
  description: z.array(z.string()),
  achievements: z.array(achievementSchema),
})

export const companySchema = z.object({
  companyName: z.string(),
  companyLogo: z.string(),
  location: z.string(),
  roles: z.array(roleSchema),
})

export const experienceSchema = z.object({
  companies: z.array(companySchema),
})

export const projectLinksSchema = z.object({
  github: z.string().url().optional(),
  demo: z.string().url().optional(),
  website: z.string().url().optional(),
  caseStudy: z.string().url().optional(),
})

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  safeSummary: z.string().optional(),
  tags: z.array(z.string()),
  techStack: z.array(z.string()),
  visibility: z.enum(['internal', 'private', 'public']),
  redactDetails: z.boolean().optional(),
  orgName: z.string().optional(),
  orgLogo: z.string().optional(),
  links: projectLinksSchema.optional(),
})

export const projectsSchema = z.object({
  projects: z.array(projectSchema),
})

export const skillSchema = z.object({
  name: z.string(),
  level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
  years: z.number().optional(),
})

export const skillCategorySchema = z.object({
  name: z.string(),
  skills: z.array(skillSchema),
})

export const skillsSchema = z.object({
  categories: z.array(skillCategorySchema),
})

export const certificationSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  date: z.string(),
  credentialUrl: z.string().url().optional(),
  badge: z.string().optional(),
  type: z.enum(['certification', 'degree', 'course']).optional(),
})

export const certificationsSchema = z.object({
  certifications: z.array(certificationSchema),
})

// Type exports
export type Profile = z.infer<typeof profileSchema>
export type Experience = z.infer<typeof experienceSchema>
export type Company = z.infer<typeof companySchema>
export type Role = z.infer<typeof roleSchema>
export type Project = z.infer<typeof projectSchema>
export type Projects = z.infer<typeof projectsSchema>
export type Skill = z.infer<typeof skillSchema>
export type SkillCategory = z.infer<typeof skillCategorySchema>
export type Skills = z.infer<typeof skillsSchema>
export type Certification = z.infer<typeof certificationSchema>
export type Certifications = z.infer<typeof certificationsSchema>
