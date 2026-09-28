import { House, School, Star, Sun } from 'lucide-react'
import Button from '../components/Button'
import { Squiggle, StarShape } from '../components/Decorations'
import { academicTutorial, playschoolGroups, skillsFocused } from '../data/programs'
import { site } from '../data/site'
import { cn } from '../lib/cn'
import { tones } from '../lib/tones'

const groupIcons = {
  sun: <Sun className="size-9" strokeWidth={2} aria-hidden="true" />,
  star: <Star className="size-9 fill-sun text-white" strokeWidth={2} aria-hidden="true" />,
  squiggle: <Squiggle className="h-5 w-10 [&_path]:stroke-[7]" />,
}

const programLinks = [
  { href: '#playschool', label: 'Playschool Readiness', className: 'bg-sun-soft' },
  { href: '#academic', label: 'Academic Tutorial', className: 'bg-teal-soft' },
  { href: '#skills', label: 'Skills-Focused', className: 'bg-coral-soft' },
]

export default function Programs() {
  return (
    <>
      <title>{`Programs — ${site.name}`}</title>

      <section className="relative container-page pt-12 sm:pt-16">
        <StarShape className="absolute top-10 right-6 hidden sm:block" />
        <h1 className="text-5xl font-semibold sm:text-6xl">Programs</h1>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">
          [One-line overview — e.g. programs for every stage, from first classroom days to
          school-ready skills.]
        </p>
        <nav aria-label="Programs" className="mt-6 flex flex-wrap gap-3">
          {programLinks.map(({ href, label, className }) => (
            <a
              key={href}
              href={href}
              className={cn(
                'rounded-full border-2 border-ink px-4 py-1.5 text-sm font-semibold transition hover:-translate-y-0.5',
                className,
              )}
            >
              {label}
            </a>
          ))}
        </nav>
      </section>

      <section id="playschool" aria-labelledby="playschool-heading" className="container-page mt-16">
        <ProgramHeading id="playschool-heading" number={1} className="bg-sun text-ink">
          Playschool Readiness
        </ProgramHeading>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {playschoolGroups.map((group) => (
            <GroupCard key={group.name} group={group} />
          ))}
        </ul>
      </section>

      <ProgramPanel
        id="academic"
        number={2}
        title="Academic Tutorial"
        panelClassName="bg-teal-soft"
        badgeClassName="bg-teal text-white"
        iconClassName="text-teal"
        options={academicTutorial}
      />

      <ProgramPanel
        id="skills"
        number={3}
        title="Skills-Focused"
        panelClassName="bg-coral-soft"
        badgeClassName="bg-coral text-white"
        iconClassName="text-coral"
        options={skillsFocused}
      />

      <section className="container-page mt-12">
        <div className="flex flex-col gap-6 rounded-(--radius-card) bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="text-3xl font-semibold">Not sure which program fits?</h2>
            <p className="mt-2 text-white/80">
              Book a tour or consultation and we will help you choose.
            </p>
          </div>
          <Button to="/enrollment#tour" variant="sun" className="self-start sm:self-auto">
            Schedule a consultation
          </Button>
        </div>
      </section>
    </>
  )
}

function ProgramHeading({ id, number, className, children }) {
  return (
    <h2 id={id} className="flex items-center gap-3 text-3xl font-semibold sm:text-4xl">
      <span
        aria-hidden="true"
        className={cn('grid size-9 place-items-center rounded-lg text-lg font-bold', className)}
      >
        {number}
      </span>
      {children}
    </h2>
  )
}

function GroupCard({ group }) {
  const tone = tones[group.tone]

  return (
    <li className="flex flex-col overflow-hidden card-outline bg-white">
      <div className={cn('flex items-start justify-between p-6', tone.solid)}>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase opacity-80">Batang</p>
          <h3 className="mt-1 text-3xl font-bold">{group.name}</h3>
        </div>
        {groupIcons[group.icon]}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <dl className="grid grid-cols-2 gap-3">
          <Stat label="Age" value={group.age} className={tone.soft} labelClassName={tone.text} />
          <Stat
            label="Teacher : Student"
            value={group.ratio}
            className={tone.soft}
            labelClassName={tone.text}
          />
        </dl>
        <h4 className="mt-5 font-sans font-bold">Approach</h4>
        <p className="mt-1 flex-1 text-sm text-ink-soft">{group.approach}</p>
        <Button to="/enrollment#trial" size="sm" className="mt-5 self-start">
          Book a trial class
        </Button>
      </div>
    </li>
  )
}

function Stat({ label, value, className, labelClassName }) {
  return (
    <div className={cn('rounded-xl p-3', className)}>
      <dt className={cn('text-[0.65rem] leading-tight font-bold tracking-widest uppercase', labelClassName)}>
        {label}
      </dt>
      <dd className="mt-1 font-display text-lg font-semibold">{value}</dd>
    </div>
  )
}

function ProgramPanel({ id, number, title, panelClassName, badgeClassName, iconClassName, options }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="container-page mt-12">
      <div className={cn('rounded-(--radius-card) p-6 sm:p-10', panelClassName)}>
        <ProgramHeading id={`${id}-heading`} number={number} className={badgeClassName}>
          {title}
        </ProgramHeading>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {options.map((option) => (
            <OptionCard key={option.title} option={option} iconClassName={iconClassName} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function OptionCard({ option, iconClassName }) {
  const Icon = option.setting === 'home' ? House : School

  return (
    <li className="rounded-3xl border-2 border-ink bg-white p-6 sm:p-7">
      <h3 className="flex items-center gap-3 text-2xl font-semibold">
        <Icon className={cn('size-6', iconClassName)} aria-hidden="true" />
        {option.title}
      </h3>
      <p className="mt-4 text-sm text-ink-soft">{option.description}</p>
      <dl className="mt-5 grid grid-cols-[7rem_1fr] gap-y-2 text-sm">
        {option.details.map(([term, value]) => (
          <div key={term} className="contents">
            <dt className="font-bold">{term}</dt>
            <dd className="text-ink-soft">{value}</dd>
          </div>
        ))}
      </dl>
    </li>
  )
}
