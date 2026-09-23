import { useLang } from '../hooks/useLang'
import { t as T } from '../i18n/strings'
import { WORKS, AWARDS, NEWS, author } from '../data/portfolio'
import LangLink from './LangLink'
import { ArrowRight, Calendar, Award as AwardIcon, ArrowUpRight } from 'lucide-react'

/**
 * Sections below the hero on the home page:
 *   - "Open letter" — a long-form intro paragraph (NOT a features grid)
 *   - Recent premieres — 3 most recent works with year + venue
 *   - Latest 3 awards
 *   - Latest 3 news pieces
 */
export default function HomeSections() {
  const { lang } = useLang()
  const dict = T[lang]

  const recent = [...WORKS].sort((a, b) => b.year - a.year).slice(0, 3)
  const recentAwards = AWARDS.slice(0, 3)
  const recentNews = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3)

  return (
    <>
      {/* Open letter */}
      <section className="bg-paper-warm py-24 lg:py-32">
        <div className="mx-auto max-w-[1080px] px-6 lg:px-10">
          <div className="tag mb-10">{dict.home.prelude}</div>
          <blockquote
            className="font-display text-[24px] sm:text-[30px] lg:text-[38px] leading-[1.3] tracking-[-0.01em] text-[var(--ink)] max-w-[42ch]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <em>{lang === 'ca'
              ? '“Roger Simeon és un autor a descobrir. És un autor al marge de les modes i un autor autodidacta. Per això m’interessa el seu teatre. Segurament és un teatre allunyat de l’acció, però molt pròxim als atzarosos fluxos mentals que ens omplen el cap a diari, a les petites i curioses idees que ens provoquen preguntes, a les reflexions oportunes i a les filosofades de personatges que viuen en una quotidianitat suspesa per l’esperança de l’arribada d’uns temps millors.”'
              : '“Roger Simeon is an author worth discovering. He works outside the prevailing fashions and is self-taught — and that is what makes his theatre interesting to me. It is a theatre far from action, but very close to the chance mental flows that fill our heads every day, to the small and curious ideas that provoke questions, to the timely reflections and the philosophising of characters living in a daily life suspended by the hope that better times will come.”'}</em>
            <span className="block mt-10 not-italic text-[var(--ink-mute)] text-base num-mono uppercase tracking-[0.18em]">
              <span className="text-[var(--ink)]">— Jordi Casanovas</span>
              <span className="ml-2 text-[var(--ink-mute)]">{lang === 'ca' ? 'dramaturg i director' : 'playwright and director'}</span>
            </span>
          </blockquote>
        </div>
      </section>

      {/* Recent premieres */}
      <section className="py-24 lg:py-32 bg-[var(--paper)]">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <h2
              className="font-display text-[44px] lg:text-[60px] tracking-[-0.02em] text-[var(--ink)] leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {dict.works.title}
              <span className="block text-[var(--ink-mute)] italic text-[22px] lg:text-[26px] mt-2">{lang === 'ca' ? 'Les tres últimes estrenes' : 'The three latest premieres'}</span>
            </h2>
            <LangLink
              to="/obres"
              className="group hidden md:inline-flex items-center gap-3 text-[var(--accent)] hover:text-[var(--ink)] text-sm num-mono uppercase tracking-[0.18em]"
            >
              {dict.ui.viewAll}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </LangLink>
          </div>

          <ul className="divide-y divide-[var(--ink)]/15 border-t border-b border-[var(--ink)]/20">
            {recent.map((w, i) => (
              <li key={w.slug} className="py-10 lg:py-14 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[80px_1.4fr_1fr_auto] items-baseline gap-6 lg:gap-12">
                <span className="num-mono text-2xl text-[var(--accent)] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <LangLink
                    to={`/obres/${w.slug}`}
                    className="font-display text-[30px] lg:text-[40px] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {w.title[lang]}
                  </LangLink>
                  <p
                    className="text-[var(--ink-soft)] mt-3 max-w-xl leading-relaxed text-base lg:text-lg"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {w.synopsis[lang]}
                  </p>
                </div>
                <div className="hidden lg:block num-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-mute)] space-y-1">
                  <div>{w.premiere.venue[lang]}</div>
                  <div className="text-[var(--ink-soft)]">{w.premiere.director[lang]}</div>
                </div>
                <div className="num-mono text-[13px] text-[var(--ink)] tabular-nums whitespace-nowrap">
                  {w.year}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-end md:hidden">
            <LangLink
              to="/obres"
              className="inline-flex items-center gap-2 text-[var(--accent)] text-sm num-mono uppercase tracking-[0.18em]"
            >
              {dict.ui.viewAll}
              <ArrowRight size={16} />
            </LangLink>
          </div>
        </div>
      </section>

      {/* Awards band (text over paper-warm with print-style vertical date) */}
      <section className="bg-paper-warm py-24 lg:py-32">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <div className="tag mb-6">{dict.awards.title}</div>
            <h2
              className="font-display text-[44px] lg:text-[60px] tracking-[-0.02em] leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {lang === 'ca' ? 'Premis i reconeixements.' : 'Awards and recognition.'}
            </h2>
            <p
              className="text-[var(--ink-soft)] mt-6 text-lg leading-relaxed max-w-md"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {dict.awards.subtitle}
            </p>
            <LangLink
              to="/premis"
              className="mt-8 inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--ink)] text-sm num-mono uppercase tracking-[0.18em]"
            >
              {dict.ui.viewAll}
              <ArrowUpRight size={16} />
            </LangLink>
          </div>

          <div className="space-y-10">
            {recentAwards.map((a) => (
              <div key={a.year + a.name.en} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-[var(--ink)]/15 pb-8">
                <span
                  className="font-display text-[64px] lg:text-[88px] text-[var(--accent)] tabular-nums leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {a.year}
                </span>
                <div>
                  <div className="font-display text-2xl lg:text-3xl text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {a.name[lang]}
                  </div>
                  <div className="text-[var(--ink-mute)] text-sm mt-1 num-mono uppercase tracking-[0.15em]">
                    {a.body[lang]}
                  </div>
                </div>
                <AwardIcon size={18} className="text-[var(--ink-mute)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News — chronological list */}
      <section className="py-24 lg:py-32 bg-[var(--paper)]">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <h2
              className="font-display text-[44px] lg:text-[60px] tracking-[-0.02em] leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {dict.news.title}
            </h2>
            <LangLink
              to="/noticies"
              className="hidden md:inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--ink)] text-sm num-mono uppercase tracking-[0.18em]"
            >
              {dict.ui.viewAll}
              <ArrowRight size={16} />
            </LangLink>
          </div>

          <ul className="space-y-6">
            {recentNews.map((n) => (
              <li key={n.date} className="grid grid-cols-[110px_1fr_auto] gap-6 lg:gap-10 items-baseline border-b border-[var(--ink)]/15 pb-6">
                <div className="num-mono text-[12px] text-[var(--ink-mute)] tabular-nums flex items-center gap-2">
                  <Calendar size={12} />
                  {n.date}
                </div>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {n.title[lang]}
                  </h3>
                  <p className="text-[var(--ink-soft)] mt-2 max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>{n.body[lang]}</p>
                </div>
                <ArrowRight size={16} className="text-[var(--ink-mute)] opacity-50" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
