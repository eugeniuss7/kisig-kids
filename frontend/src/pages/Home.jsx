import { Clock, Mail, Map as MapIcon, MapPin, Phone } from 'lucide-react'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { DashedCircle, DotTrio, Squiggle, StarShape } from '../components/Decorations'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { contact, site } from '../data/site'
import { tones } from '../lib/tones'

const pedagogy = [
  { title: 'Move', tone: 'coral', text: '[How movement and play shape learning]' },
  { title: 'Learn', tone: 'teal', text: '[Your teaching approach in one line]' },
  { title: 'Thrive', tone: 'sun', text: '[The growth parents can expect]' },
]

const history = [
  { year: '[Year]', event: '[Kisig Kids LC opens its doors]' },
  { year: '[Year]', event: '[Milestone — e.g. a new program or campus]' },
  { year: '[Year]', event: '[Milestone]' },
]

const contactCards = [
  { title: 'Visit us', icon: MapPin, color: 'text-coral', lines: contact.address },
  { title: 'Call or text', icon: Phone, color: 'text-teal', lines: contact.phone },
  { title: 'Email & socials', icon: Mail, color: 'text-sun-dark', lines: contact.online },
  { title: 'Office hours', icon: Clock, color: 'text-ink', lines: contact.hours },
]

export default function Home() {
  return (
    <>
      <title>{`${site.name} — ${site.tagline}`}</title>
      <Hero />
      <MissionAndHistory />
      <Contact />
    </>
  )
}

function Hero() {
  return (
    <section className="relative container-page grid items-center gap-12 pt-12 lg:grid-cols-2 lg:pt-16">
      <Squiggle className="absolute top-8 left-0 hidden text-sun lg:block xl:-left-6" />

      <div>
        <Badge>About Kisig</Badge>
        <h1 className="mt-5 text-5xl leading-[1.05] font-semibold sm:text-6xl">
          Where little ones <span className="text-coral">move</span>,{' '}
          <span className="text-teal">learn</span> and <span className="text-sun-deep">thrive</span>.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-ink-soft">
          [Short introduction to Kisig Kids LC — who you are, where you are, and the children and
          families you serve.]
        </p>

        <div className="mt-8 rounded-3xl border-2 border-ink bg-white p-5">
          <h2 className="font-sans text-lg font-bold">Our pedagogy</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {pedagogy.map(({ title, tone, text }) => (
              <li key={title} className={`rounded-2xl p-3 ${tones[tone].soft}`}>
                <p className={`font-bold ${tones[tone].text}`}>{title}</p>
                <p className="mt-1 text-sm text-ink-soft">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button to="/programs">Explore programs</Button>
          <Button to="/enrollment#tour" variant="outline">
            Schedule a visit
          </Button>
        </div>
      </div>

      <div className="relative mx-auto aspect-[1/1.05] w-full max-w-lg">
        <PhotoPlaceholder
          label="KK students"
          className="absolute top-[4%] left-0 h-[68%] w-[64%] -rotate-3 bg-sky-soft"
          textClassName="text-ink"
        />
        <PhotoPlaceholder
          label="class activity"
          className="absolute top-[19%] right-0 h-[42%] w-[41%] rotate-4 bg-coral-soft"
          textClassName="text-coral-dark"
        />
        <PhotoPlaceholder
          label="outdoor play"
          className="absolute top-[64%] left-[25%] h-[30%] w-[48%] rotate-2 bg-teal-soft"
          textClassName="text-teal-dark"
        />
        <StarShape className="absolute -top-2 right-0 size-16" />
        <DashedCircle className="absolute right-[4%] bottom-[8%]" />
      </div>
    </section>
  )
}

function MissionAndHistory() {
  return (
    <section className="container-page mt-20 grid gap-6 lg:grid-cols-2">
      <div className="rounded-(--radius-card) bg-teal p-8 text-white sm:p-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">Mission &amp; Vision</h2>
        <div className="mt-8 space-y-6">
          <Statement label="Our mission">
            [Mission statement — what Kisig Kids does every day for each child.]
          </Statement>
          <Statement label="Our vision">
            [Vision statement — the future you are building toward with families.]
          </Statement>
        </div>
      </div>

      <div className="card-outline bg-sun-soft p-8 sm:p-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">History of KK</h2>
        <p className="mt-6 text-ink-soft">[How Kisig Kids began — the story behind the name.]</p>
        <ol className="mt-6 space-y-4">
          {history.map(({ year, event }, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="shrink-0 rounded-lg bg-ink px-3 py-1 font-display font-semibold text-white">
                {year}
              </span>
              <span className="text-ink-soft">{event}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Statement({ label, children }) {
  return (
    <div className="rounded-2xl bg-white/12 p-5">
      <p className="text-xs font-bold tracking-[0.14em] text-sun-soft uppercase">{label}</p>
      <p className="mt-2 text-lg text-white/90">{children}</p>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="container-page mt-24">
      <div className="flex items-center justify-between gap-4">
        <h2 id="contact-heading" className="text-3xl font-semibold sm:text-4xl">
          How to reach Kisig Kids
        </h2>
        <DotTrio className="hidden sm:flex" />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <ul className="grid gap-4 sm:grid-cols-2">
          {contactCards.map(({ title, icon: Icon, color, lines }) => (
            <li key={title} className="rounded-2xl border-2 border-ink bg-white p-5">
              <Icon className={`size-5 ${color}`} aria-hidden="true" />
              <h3 className="mt-3 font-sans font-bold">{title}</h3>
              {lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-ink-soft">
                  {line}
                </p>
              ))}
            </li>
          ))}
        </ul>

        <div className="card-outline min-h-72 overflow-hidden bg-sky-soft">
          {contact.mapEmbedUrl ? (
            <iframe
              title={`Map to ${site.name}`}
              src={contact.mapEmbedUrl}
              className="size-full min-h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex size-full min-h-72 flex-col items-center justify-center gap-2 text-ink">
              <MapIcon className="size-8" strokeWidth={1.75} aria-hidden="true" />
              <p className="text-sm font-semibold">Map embed</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
