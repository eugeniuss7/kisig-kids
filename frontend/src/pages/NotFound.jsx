import Button from '../components/Button'
import { StarShape } from '../components/Decorations'
import { site } from '../data/site'

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <title>{`Page not found — ${site.name}`}</title>
      <StarShape className="mx-auto" />
      <h1 className="mt-6 text-5xl font-semibold">Oops! This page wandered off.</h1>
      <p className="mt-4 text-lg text-ink-soft">The page you are looking for doesn’t exist.</p>
      <Button to="/" className="mt-8">
        Back to home
      </Button>
    </section>
  )
}
