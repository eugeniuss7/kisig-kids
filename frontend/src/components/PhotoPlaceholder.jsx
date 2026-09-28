import { Camera } from 'lucide-react'
import { cn } from '../lib/cn'

/** Stand-in frame for a photo. Pass `src` once real images are available. */
export default function PhotoPlaceholder({ label, src, className, textClassName }) {
  return (
    <figure className={cn('card-outline overflow-hidden', className)}>
      {src ? (
        <img src={src} alt={label} className="size-full object-cover" />
      ) : (
        <div className={cn('flex size-full flex-col items-center justify-center gap-2 p-4 text-center', textClassName)}>
          <Camera className="size-7" strokeWidth={1.75} aria-hidden="true" />
          <figcaption className="text-sm font-semibold">Photo: {label}</figcaption>
        </div>
      )}
    </figure>
  )
}
