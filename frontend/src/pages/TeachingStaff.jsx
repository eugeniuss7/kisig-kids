import { User } from 'lucide-react'
import { Dot, Squiggle } from '../components/Decorations'
import SectionDivider from '../components/SectionDivider'
import { site } from '../data/site'
import { directorate, faculty } from '../data/staff'
import { cn } from '../lib/cn'
import { tones, toneCycle } from '../lib/tones'

export default function TeachingStaff() {
  return (
    <>
      <title>{`Teaching Staff — ${site.name}`}</title>

      <section className="relative container-page pt-14 text-center sm:pt-20">
        <Squiggle className="absolute top-20 left-8 hidden text-teal md:block" />
        <Dot className="absolute top-18 right-12 hidden md:block" />
        <h1 className="text-5xl font-semibold sm:text-6xl">Teaching Staff</h1>
        <p className="mt-4 text-lg text-ink-soft">
          [One line about your team — the people who guide your child every day.]
        </p>
      </section>

      <section className="container-page mt-14">
        <SectionDivider>Academic Directorate</SectionDivider>
        <ul className="mt-10 grid gap-10 sm:grid-cols-3">
          {directorate.map((person, i) => {
            const tone = tones[toneCycle[i % toneCycle.length]]
            return (
              <li key={i} className="text-center">
                <Avatar
                  person={person}
                  className={cn('mx-auto size-44 rounded-full border-2 border-ink lg:size-52', tone.soft)}
                  iconClassName={cn('size-12', tone.text)}
                />
                <h3 className="mt-4 text-xl font-semibold">{person.name}</h3>
                <p className="text-sm font-bold text-coral">{person.position}</p>
                <p className="mt-1 text-sm text-ink-soft">{person.bio}</p>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="container-page mt-16">
        <div className="rounded-(--radius-card) bg-sky-soft px-5 py-10 sm:px-10">
          <SectionDivider>Instructional &amp; Teaching Faculty</SectionDivider>
          <ul className="mt-10 flex flex-wrap justify-center gap-6">
            {faculty.map((person, i) => (
              <li
                key={i}
                className="w-full rounded-3xl border-2 border-ink bg-white p-4 sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <Avatar
                  person={person}
                  className={cn('aspect-[8/7] w-full rounded-2xl', tones[toneCycle[i % toneCycle.length]].soft)}
                  iconClassName="size-10 text-ink"
                />
                <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
                <p className="text-xs font-bold text-coral">{person.role}</p>
                <p className="mt-1 text-sm text-ink-soft">{person.specialization}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

function Avatar({ person, className, iconClassName }) {
  return (
    <div className={cn('grid place-items-center overflow-hidden', className)}>
      {person.photo ? (
        <img src={person.photo} alt={person.name} className="size-full object-cover" />
      ) : (
        <User className={iconClassName} strokeWidth={1.75} aria-hidden="true" />
      )}
    </div>
  )
}
