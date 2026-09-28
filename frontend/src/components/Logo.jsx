import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { cn } from '../lib/cn'

export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn('size-12', className)}>
      <circle cx="24" cy="24" r="24" fill="var(--color-sun)" />
      <g fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="12.5" r="3.2" fill="var(--color-ink)" stroke="none" />
        <path d="M13 17.5 24 22l11-4.5M24 22v7m0 0-6.5 9M24 29l6.5 9" />
      </g>
    </svg>
  )
}

export default function Logo({ className }) {
  return (
    <Link to="/" className={cn('inline-flex items-center gap-3', className)} aria-label={`${site.name} — home`}>
      <LogoMark className="size-11 sm:size-13" />
      <span className="leading-none">
        <span className="block font-display text-2xl font-bold sm:text-3xl">{site.name}</span>
        <span className="mt-1 block text-sm font-semibold tracking-wide text-coral">{site.tagline}</span>
      </span>
    </Link>
  )
}
