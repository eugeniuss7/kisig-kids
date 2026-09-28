import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/site'
import { cn } from '../lib/cn'
import Button from './Button'
import Logo from './Logo'

function navLinkClass({ isActive }) {
  return cn(
    'block rounded-full px-4 py-2 text-sm font-medium transition-colors',
    isActive ? 'bg-ink text-white' : 'hover:bg-ink/5',
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="container-page pt-6">
      <div className="flex justify-center pb-5">
        <Logo />
      </div>

      <nav aria-label="Main" className="border-y-2 border-ink py-2">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold md:hidden"
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            Menu
          </button>

          <ul className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className={navLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Button to="/enrollment#trial" variant="coral" size="sm">
            Book a trial class
          </Button>
        </div>

        {open && (
          <ul id="main-menu" className="mt-2 flex flex-col gap-1 border-t border-ink/15 pt-2 md:hidden">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className={navLinkClass} onClick={close}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
