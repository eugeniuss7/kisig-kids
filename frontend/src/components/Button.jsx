import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

const variants = {
  ink: 'bg-ink text-white hover:bg-ink/90',
  outline: 'border-2 border-ink bg-transparent text-ink hover:bg-white',
  coral: 'bg-coral text-white shadow-[0_3px_0_var(--color-coral-dark)] hover:brightness-110',
  teal: 'bg-teal text-white hover:bg-teal-dark',
  sun: 'bg-sun text-ink hover:brightness-105',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-base',
  lg: 'px-6 py-4 text-lg',
}

/**
 * Pill-shaped call to action. Renders a router <Link> for internal paths
 * (`to`) and a plain <a> for external URLs (`href`).
 */
export default function Button({ to, href, variant = 'ink', size = 'md', className, children, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition active:translate-y-px',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  const isExternal = href?.startsWith('http')
  return (
    <a
      href={href}
      className={classes}
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      {...props}
    >
      {children}
    </a>
  )
}
