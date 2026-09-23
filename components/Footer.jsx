import LangLink from './LangLink'
import LanguageSwitcher from './LanguageSwitcher'
import { useLang } from '../hooks/useLang'
import { t as T } from '../i18n/strings'
import { author } from '../data/portfolio'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const { lang } = useLang()
  const dict = T[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="mt-32 border-t border-[var(--ink)]/15 bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10 py-20 lg:py-28">
        {/* Big editorial lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
          <div>
            <p
              className="font-display text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {dict.brand}
            </p>
            <p
              className="text-[var(--paper)]/70 max-w-md text-lg"
              style={{ fontFamily: 'var(--font-body)', fontStyle: lang === 'en' ? 'normal' : 'italic' }}
            >
              {dict.footer.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <LangLink
                to="/contacte"
                className="px-5 py-3 border border-[var(--paper)]/40 hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors text-sm tracking-wider num-mono uppercase"
              >
                {dict.nav.contact}
              </LangLink>
              <a
                href={`mailto:${author.email}`}
                className="px-5 py-3 bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--accent)] hover:text-[var(--paper)] transition-colors text-sm tracking-wider num-mono uppercase"
              >
                {author.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <FooterCol title={lang === 'ca' ? 'Lloc' : 'Site'}>
              <FooterLink to="/about">{dict.nav.about}</FooterLink>
              <FooterLink to="/obres">{dict.nav.works}</FooterLink>
              <FooterLink to="/projectes">{dict.nav.projects}</FooterLink>
              <FooterLink to="/premis">{dict.nav.awards}</FooterLink>
            </FooterCol>
            <FooterCol title={lang === 'ca' ? 'Recursos' : 'Resources'}>
              <FooterLink to="/descarregar">{dict.nav.downloads}</FooterLink>
              <FooterLink to="/noticies">{dict.nav.news}</FooterLink>
              <FooterLink to="/privacitat">{dict.footer.privacy}</FooterLink>
              <FooterLink to="/avis-legal">{dict.footer.legal}</FooterLink>
            </FooterCol>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 border-t border-[var(--paper)]/20 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between text-[var(--paper)]/60 text-xs num-mono uppercase tracking-[0.18em]">
          <div>
            © {year} {dict.brand} · {dict.footer.rights}
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[var(--paper)]/40">{lang === 'ca' ? 'Llengua' : 'Language'}</span>
            <LanguageSwitcher variant="full" />
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-10 inline-flex items-center gap-2 text-[var(--paper)]/60 hover:text-[var(--accent)] text-xs num-mono uppercase tracking-[0.18em]"
        >
          {dict.footer.backToTop}
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="tag mb-4" style={{ color: 'var(--paper)' }}>{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }) {
  return (
    <li>
      <LangLink
        to={to}
        className="text-[var(--paper)]/80 hover:text-[var(--accent)] transition-colors"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {children}
      </LangLink>
    </li>
  )
}
