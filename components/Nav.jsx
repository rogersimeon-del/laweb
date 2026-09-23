import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../hooks/useLang'
import { t as T } from '../i18n/strings'
import LangLink from './LangLink'
import LanguageSwitcher from './LanguageSwitcher'
import LangSearchButton from './LangSearchButton'
import { X } from 'lucide-react'

/**
 * Persistent top bar.
 *  - Brand on the left (link to home).
 *  - Primary nav in the middle (desktop) / drawer (mobile).
 *  - Language toggle + Search button on the right.
 *  - Hamburger menu drawn as a stack of three lines (visual timestamp).
 */
export default function Nav() {
  const { lang } = useLang()
  const dict = T[lang]
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { to: '/about', label: dict.nav.about },
    { to: lang === 'ca' ? '/obres' : '/works', label: dict.nav.works },
    { to: lang === 'ca' ? '/projectes' : '/projects', label: dict.nav.projects },
    { to: lang === 'ca' ? '/publicacions' : '/publications', label: dict.nav.publications },
    { to: lang === 'ca' ? '/premis' : '/awards', label: dict.nav.awards },
    { to: lang === 'ca' ? '/descarregar' : '/downloads', label: dict.nav.downloads },
    { to: lang === 'ca' ? '/noticies' : '/news', label: dict.nav.news },
    { to: lang === 'ca' ? '/contacte' : '/contact', label: dict.nav.contact },
  ]

  return (
    <header className="border-b border-[var(--ink)]/15 bg-[var(--paper)]/85 backdrop-blur-sm sticky top-0 z-40">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--accent)] focus:text-[var(--paper)] focus:px-3 focus:py-2"
      >
        {dict.nav.skipToContent}
      </a>

      <div className="mx-auto max-w-[1380px] px-6 lg:px-10 h-16 lg:h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Brand */}
        <LangLink to="/" className="flex items-baseline gap-3 group">
          <span
            className="font-display text-[20px] lg:text-[24px] tracking-[-0.01em] text-[var(--ink)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {dict.brand}
          </span>
          <span
            className="tag hidden md:inline-block border-l border-[var(--ink)]/20 pl-3"
            aria-hidden
          >
            {dict.brandRole}
          </span>
        </LangLink>

        {/* Center nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="primary">
          {links.map((l) => (
            <LangLink
              key={l.to}
              to={l.to}
              className="text-[13.5px] tracking-wide text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {l.label}
            </LangLink>
          ))}
        </nav>

        {/* Right tools */}
        <div className="flex items-center justify-end gap-3">
          <LanguageSwitcher variant="full" />
          <LangSearchButton />
          <button
            type="button"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center text-[var(--ink)] hover:text-[var(--accent)]"
            aria-label={open ? dict.ui.close : dict.nav.home}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <MenuGlyph />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-[var(--ink)]/10 bg-[var(--paper)]">
          <nav className="px-6 py-6 grid gap-4" aria-label="mobile">
            {links.map((l) => (
              <LangLink
                key={l.to}
                to={l.to}
                className="font-display text-2xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                {l.label}
              </LangLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function MenuGlyph() {
  /**
   * Playbill-style hamburger: three lines of decreasing width.
   * Visually identifies as a menu opening without falling into
   * the same icon-hamburger default every AI site reuses.
   */
  return (
    <span className="flex flex-col gap-[5px] w-[22px]" aria-hidden>
      <span className="h-[1.5px] w-full bg-current" />
      <span className="h-[1.5px] w-[70%] bg-current ml-auto" />
      <span className="h-[1.5px] w-[40%] bg-current ml-auto" />
    </span>
  )
}
