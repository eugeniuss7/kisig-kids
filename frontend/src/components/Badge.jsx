import { cn } from '../lib/cn'

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full bg-teal-soft px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] text-teal-dark uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
