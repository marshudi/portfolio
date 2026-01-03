import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  let months = (end.getFullYear() - start.getFullYear()) * 12
  months -= start.getMonth()
  months += end.getMonth()

  if (months < 0) months = 0

  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years === 0) {
    return remainingMonths === 1 ? '1 mo' : `${remainingMonths} mos`
  }

  if (remainingMonths === 0) {
    return years === 1 ? '1 yr' : `${years} yrs`
  }

  const yearStr = years === 1 ? '1 yr' : `${years} yrs`
  const monthStr = remainingMonths === 1 ? '1 mo' : `${remainingMonths} mos`

  return `${yearStr} ${monthStr}`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
