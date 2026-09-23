import { Link, useLocation } from 'react-router-dom'
import { useLang, localizedPath, stripLangFromPath, translatePath } from '../hooks/useLang'

/**
 * Editor-style language toggle. Keeps the rest of the URL when the user
 * switches languages, translating the route segment so /ca/obres <-> /en/works.
 * For links, use LangLink.
 */
export default function LanguageSwitcher({ variant = 'inline' }) {
  const { lang } = useLang()
  const { pathname } = useLocation()
  const rest = stripLangFromPath(pathname)
  const caTo = localizedPath('ca', translatePath(rest, 'ca'))
  const enTo = localizedPath('en', translatePath(rest, 'en'))

  if (variant === 'full') {
    return (
      <div className="inline-flex items-center gap-1 num-mono text-[11px]">
        <LangPill to={caTo} active={lang === 'ca'} label="Català" />
        <span className="text-[var(--ink-mute)] opacity-50 mx-1" aria-hidden>/</span>
        <LangPill to={enTo} active={lang === 'en'} label="English" />
      </div>
    )
  }

  // Compact — used in the mobile nav and footer
  return (
    <div className="inline-flex items-center gap-2 num-mono text-[11px]">
      <LangPill to={caTo} active={lang === 'ca'} label="CA" />
      <span className="text-[var(--ink-mute)] opacity-40">·</span>
      <LangPill to={enTo} active={lang === 'en'} label="EN" />
    </div>
  )
}

function LangPill({ to, active, label }) {
  return (
    <Link
      to={to}
      className={
        'uppercase tracking-[0.2em] px-2 py-1 transition-colors ' +
        (active
          ? 'text-[var(--accent)] underline underline-offset-4 decoration-[1.5px]'
          : 'text-[var(--ink-mute)] hover:text-[var(--ink)]')
      }
      aria-current={active ? 'true' : undefined}
    >
      {label}
    </Link>
  )
}
