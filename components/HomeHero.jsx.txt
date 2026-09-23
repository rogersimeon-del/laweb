import LangLink from './LangLink'
import { useLang } from '../hooks/useLang'
import { t as T } from '../i18n/strings'
import { WORKS, AWARDS, NEWS } from '../data/portfolio'
import { ArrowRight, ArrowDown } from 'lucide-react'

/**
 * The hero on /. Editor-style:
 *   - Two-column header: tiny meta column on the left, oversized broken headline.
 *   - Sits on a paper-grain background.
 *   - Asymmetric composition — not the centered "h1 + subtitle + 2 buttons" cliche.
 */
export default function HomeHero() {
  const { lang } = useLang()
  const dict = T[lang]

  // Featured items: latest premiere / latest award / featured downloadable text
  const latestWork = WORKS.reduce((a, b) => (b.year > a.year ? b : a), WORKS[0])
  const latestAward = AWARDS[0]
  const featuredDownload = WORKS.find((w) => w.year >= 2022 && w.year <= 2023 && w.text?.available)

  return (
    <section className="relative bg-paper-grain overflow-hidden">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10 pt-16 lg:pt-24 pb-24 lg:pb-32">
        {/* Top meta strip */}
        <div className="flex items-center justify-between mb-16 lg:mb-24">
          <div className="tag">{dict.home.eyebrow}</div>
          <div className="hidden md:flex items-center gap-2 num-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-mute)]">
            <span>{lang === 'ca' ? 'Edició' : 'Edition'}</span>
            <span className="text-[var(--ink)]">{new Date().getFullYear()}</span>
            <span aria-hidden>·</span>
            <span>{lang === 'ca' ? 'Volum' : 'Volume'} 14</span>
          </div>
        </div>

        <div className="grid gap-0 items-start">
          {/* Big headline now spans the full width */}
          <div>
            <p className="text-[var(--ink-mute)] max-w-2xl text-lg lg:text-xl leading-relaxed mb-10 dropcap" style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>
                {dict.home.heroLead}
              </p>

            <h1 className="font-display text-[64px] sm:text-[88px] lg:text-[120px] leading-[0.92] tracking-[-0.02em] mb-12 lg:mb-16 text-[var(--ink)]">
              <span className="block">{dict.home.headline1}</span>
              <span className="block italic text-[var(--accent)]" style={{ fontFamily: 'var(--font-display)' }}>
                “{dict.home.heroQuote}”
              </span>
            </h1>

            {/* CTAs — written out literally, not a generic buttons pair */}
            <div className="flex flex-wrap gap-5 items-center">
              <LangLink
                to="/obres"
                className="group inline-flex items-center gap-3 bg-[var(--ink)] text-[var(--paper)] px-7 py-4 hover:bg-[var(--accent)] transition-colors"
              >
                <span className="font-display text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                  {dict.home.ctaWorks}
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </LangLink>
              <LangLink
                to="/descarregar"
                className="group inline-flex items-center gap-3 border border-[var(--ink)] px-7 py-4 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <span className="font-display text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                  {dict.home.ctaDownloads}
                </span>
              </LangLink>
              <LangLink
                to="/contacte"
                className="group inline-flex items-center gap-3 text-[var(--accent)] hover:text-[var(--ink)] transition-colors"
              >
                <span className="font-display text-lg italic" style={{ fontFamily: 'var(--font-display)' }}>
                  {dict.home.ctaContact}
                </span>
                <ArrowDown size={16} className="rotate-[-45deg]" />
              </LangLink>
            </div>
          </div>
        </div>

        {/* Featured trio — three editorial cards, NOT three identical feature cards */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 border-t border-[var(--ink)]/20">
          <FeaturedCard
            label={dict.featured.latestPremiere}
            primary={
              <LangLink to={`/obres/${latestWork.slug}`} className="font-display text-3xl lg:text-4xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                {latestWork.title[lang]}
              </LangLink>
            }
            meta={`${latestWork.year} · ${T[lang].genres[latestWork.genre]}`}
            meta2={`${dict.works.premiere}: ${latestWork.premiere.venue[lang]}`}
            mode="tall"
          />
          <FeaturedCard
            label={dict.featured.latestAward}
            primary={
              <span className="font-display text-3xl lg:text-4xl text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                {latestAward.name[lang]}
              </span>
            }
            meta={`${latestAward.year} · ${latestAward.body[lang]}`}
            meta2={latestAward.work ? `${latestWork.title[lang]} →` : null}
          />
          <FeaturedCard
            label={dict.featured.featuredDownload}
            primary={
              <span className="font-display text-3xl lg:text-4xl text-[var(--ink)] italic" style={{ fontFamily: 'var(--font-display)' }}>
                {featuredDownload ? featuredDownload.title[lang] : dict.ui.placeholder}
              </span>
            }
            meta={featuredDownload ? `${dict.downloads.langs}: ${(featuredDownload.text?.langs || []).join(', ').toUpperCase()}` : ''}
            meta2={featuredDownload ? `${dict.downloads.format} · ${featuredDownload.text?.size}` : null}
            mode="bottom"
          />
        </div>
      </div>
      {/* Bottom margin divider drawn with editorial corners */}
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
        <div className="divider-playbill" aria-hidden>
          <span className="num-mono text-[10px] uppercase tracking-[0.22em]">·</span>
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ label, primary, meta, meta2, mode }) {
  return (
    <div className={
      'py-10 lg:py-14 px-0 lg:px-10 ' +
      (mode === 'tall'
        ? 'lg:border-r border-[var(--ink)]/15'
        : mode === 'bottom'
          ? ''
          : 'lg:border-r border-[var(--ink)]/15')
    }>
      <div className="tag mb-6">{label}</div>
      <div className="mb-6">{primary}</div>
      <div className="num-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-mute)] space-y-1">
        {meta && <div>{meta}</div>}
        {meta2 && <div className="text-[var(--ink-soft)]">{meta2}</div>}
      </div>
    </div>
  )
}
