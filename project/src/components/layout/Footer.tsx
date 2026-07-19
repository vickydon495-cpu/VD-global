import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { FIRM, FOOTER_COLUMNS } from '../../../content/site';
import { Container } from '../ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-ink-50/60">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2.5" aria-label={`${FIRM.name} home`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white">
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M9 10.5 L16 22 L23 10.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-ink-900">
                {FIRM.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              {FIRM.description}
            </p>
            <div className="mt-5 space-y-2 text-sm text-ink-500">
              <a
                href={`mailto:${FIRM.email}`}
                className="link-underline inline-flex items-center gap-2 hover:text-teal-700"
              >
                <Mail className="h-4 w-4" />
                {FIRM.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {FIRM.location}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="link-underline text-sm text-ink-600 hover:text-teal-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <span className="text-sm text-ink-400">Privacy Policy</span>
                </li>
                <li>
                  <span className="text-sm text-ink-400">Terms of Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year} {FIRM.name}. All rights reserved.
          </p>
          <p className="text-ink-400">{FIRM.tagline} · Ethical PR &amp; Media Strategy</p>
        </div>
      </Container>
    </footer>
  );
}
