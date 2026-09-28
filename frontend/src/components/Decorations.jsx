// Playful, purely decorative shapes. All are hidden from assistive tech.
import { cn } from '../lib/cn'

export function Squiggle({ className }) {
  return (
    <svg viewBox="0 -4 100 32" fill="none" aria-hidden="true" className={cn('h-7 w-24', className)}>
      <path
        d="M4 16c8-12 16-12 23 0s15 12 23 0 16-12 23 0 15 12 23 0"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function StarShape({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('size-16 text-sun', className)}>
      <path
        fill="currentColor"
        d="m12 1.5 3.1 7.3 7.9.6-6 5.2 1.8 7.7L12 18.2l-6.8 4.1L7 14.6 1 9.4l7.9-.6z"
      />
    </svg>
  )
}

export function DashedCircle({ className }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={cn('size-14 text-teal', className)}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" strokeDasharray="5 6" strokeLinecap="round" />
    </svg>
  )
}

export function Dot({ className }) {
  return <span aria-hidden="true" className={cn('block size-12 rounded-full bg-sun', className)} />
}

export function DotTrio({ className }) {
  return (
    <div aria-hidden="true" className={cn('flex gap-4', className)}>
      <span className="size-6 rounded-full bg-coral" />
      <span className="size-6 rounded-full bg-sun" />
      <span className="size-6 rounded-full bg-teal" />
    </div>
  )
}
