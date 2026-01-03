import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground border-border',
        internal: 'border-orange-600/30 bg-orange-500/10 text-orange-600 dark:border-orange-500/30 dark:bg-orange-500/20 dark:text-orange-400',
        private: 'border-amber-600/30 bg-amber-500/10 text-amber-600 dark:border-yellow-500/30 dark:bg-yellow-500/20 dark:text-yellow-400',
        public: 'border-emerald-600/30 bg-emerald-500/10 text-emerald-600 dark:border-green-500/30 dark:bg-green-500/20 dark:text-green-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
