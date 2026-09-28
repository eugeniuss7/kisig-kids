import { CalendarDays, ClipboardCheck, Star } from 'lucide-react'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { Squiggle, StarShape } from '../components/Decorations'
import { contact, formLinks, site } from '../data/site'
import { cn } from '../lib/cn'
import { tones } from '../lib/tones'

const steps = [
  {
    id: 'enroll',
    tone: 'coral',
    icon: ClipboardCheck,
    eyebrow: 'Ready to join',
    title: 'Proceed with enrollment',
    text: "[What parents should prepare — e.g. child's details, program choice, requirements.]",
    cta: 'Fill out enrollment form',
    href: formLinks.enrollment,
  },
  {
    id: 'tour',
    tone: 'teal',
    icon: CalendarDays,
    eyebrow: 'Want to see us first',
    title: 'Schedule a tour or consultation',
    text: '[What happens on a tour — meet the teachers, see the classrooms, ask questions.]',
    cta: 'Fill out tour form',
    href: formLinks.tour,
  },
  {
    id: 'trial',
    tone: 'sun',
    icon: Star,
    eyebrow: 'Let your child try it',
    title: 'Book a trial class',
    text: '[How a trial class works — length, what to bring, whether a parent stays.]',
    cta: 'Fill out trial form',
    href: formLinks.trial,
  },
]

export default function Enrollment() {
  const { phone, email } = contact.footer

  return (
    <>
      <title>{`Enrollment — ${site.name}`}</title>

      <section className="relative container-page pt-14 text-center sm:pt-20">
        <StarShape className="absolute top-12 left-[6%] hidden size-20 md:block" />
        <Squiggle className="absolute top-24 right-[5%] hidden w-32 text-coral md:block" />
        <Badge>Enrollment</Badge>
        <h1 className="mt-5 text-5xl font-semibold sm:text-6xl lg:text-7xl">Start your Kisig journey!</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
          Pick the step that fits where you are. Each one takes just a short form, and our team
          will get back to you.
        </p>
      </section>

      <section aria-label="Enrollment steps" className="container-page mt-14">
        <ul className="grid gap-6 md:grid-cols-3">
          {steps.map(({ id, tone, icon: Icon, eyebrow, title, text, cta, href }) => (
            <li
              key={id}
              id={id}
              className="flex scroll-mt-6 flex-col card-outline bg-white p-7 shadow-[0_8px_0_var(--color-ink)] sm:p-8"
            >
              <span className={cn('grid size-14 place-items-center rounded-2xl', tones[tone].solid)}>
                <Icon className="size-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className={cn('mt-6 text-xs font-bold tracking-[0.14em] uppercase', tones[tone].text)}>
                {eyebrow}
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-semibold">{title}</h2>
              <p className="mt-4 mb-6 flex-1 text-ink-soft">{text}</p>
              <Button href={href} variant={tone} size="lg" className="w-full">
                {cta}
              </Button>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page mt-16">
        <div className="flex flex-col gap-6 card-outline bg-sun-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:px-14">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Have questions first?</h2>
            <p className="mt-1 text-lg text-ink-soft">
              Call or message us: {phone} · {email}
            </p>
          </div>
          <Button to="/#contact" className="self-start sm:self-auto">
            How to reach us
          </Button>
        </div>
      </section>
    </>
  )
}
