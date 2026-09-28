import { Link } from 'react-router-dom'
import { contact, navLinks, site } from '../data/site'

export default function Footer() {
  const { address, phone, email } = contact.footer

  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3 md:items-start">
        <div>
          <p className="font-display text-2xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm font-semibold text-sun">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold md:justify-center">
            {navLinks.slice(1).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-sun">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-1 text-sm text-white/80 not-italic md:text-right">
          <p>{address}</p>
          <p>
            {phone} · {email}
          </p>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </address>
      </div>
    </footer>
  )
}
