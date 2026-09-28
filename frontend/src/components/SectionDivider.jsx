import { cn } from '../lib/cn'

/** Centered heading flanked by horizontal rules. */
export default function SectionDivider({ as: Heading = 'h2', className, children }) {
  return (
    <div className={cn('flex items-center gap-4 sm:gap-6', className)}>
      <span aria-hidden="true" className="h-0.5 flex-1 bg-ink" />
      <Heading className="text-center text-2xl font-semibold sm:text-4xl">{children}</Heading>
      <span aria-hidden="true" className="h-0.5 flex-1 bg-ink" />
    </div>
  )
}
