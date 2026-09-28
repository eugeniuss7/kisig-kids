import { twMerge } from 'tailwind-merge'

/** Join class names, letting later Tailwind utilities override earlier ones. */
export function cn(...classes) {
  return twMerge(classes.filter(Boolean).join(' '))
}
