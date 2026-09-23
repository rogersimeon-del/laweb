import { useMemo, useState } from 'react'
import { useLang } from '../hooks/useLang'
import { t as T } from '../i18n/strings'
import LangLink from '../components/LangLink'
import { WORKS, COLLABORATIONS } from '../data/portfolio'
import { Filter, ArrowRight } from 'lucide-react'

/**
 * Premiered works catalogue. Editorial-table layout (NOT a card grid).
 * Filters: by year range, genre, cast size, availability. Highlight on hover.
 */
export default function Works() {
  const { lang } = useLang()
  const dict = T[lang]
  const [sort, setSort] = useState('recent')
  const [filters, setFilters] = useState({
    yearFrom: '',
    yearTo: '',
    genre: '',
    cast: '',
    avail: '',
  })

  const list = useMemo(() => {
    let l = WORKS.slice()
    if (filters.yearFrom) l = l.filter((w) => w.year >= Number(filters.yearFrom))
    if (filters.yearTo) l = l.filter((w) => w.year <= Number(filters.yearTo))
    if (filters.genre) l = l.filter((w) => w.genre === filters.genre)
    if (filters.cast) {
      l = l.filter((w) => {
        const c = w.characters
        if (filters.cast === 'solo') return c === 1
        if (filters.cast === 'small') return c >= 2 && c <= 4
        if (filters.cast === 'medium') return c >= 5 && c <= 9
        if (filters.cast === 'large') return c >= 10
        return true
      })
    }
    if (filters.avail) l = l.filter((w) => (filters.avail === 'available' ? w.available : !w.available))
    if (sort === 'recent') l.sort((a, b) => b.year - a.year || a.title.en.localeCompare(b.title.en))
    if (sort === 'older') l.sort((a, b) => a.year - b.year || a.title.en.localeCompare(b.title.en))
    if (sort === 'titleAsc') l.sort((a, b) => a.title[lang].localeCompare(b.title[lang]))
    if (sort === 'titleDesc') l.sort((a, b) => b.title[lang].localeCompare(a.title[lang]))
    return l
  }, [sort, filters, lang])

  const reset = () =>
    setFilters({ yearFrom: '', yearTo: '', genre: '', cast: '', avail: '' })

  return (
    <>
      {/* Header */}
      <section className="bg-paper-grain py-16 lg:py-24 border-b border-[var(--ink)]/15">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
          <div className="tag mb-8">{dict.works.title}</div>
          <h1
            className="font-display text-[56px] sm:text-[84px] lg:text-[120px] leading-[0.95] tracking-[-0.02em] text-[var(--ink)] max-w-[15ch]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {dict.works.title}
            <span className="block italic text-[var(--accent)] text-[26px] lg:text-[34px] mt-3 tracking-normal" style={{ fontFamily: 'var(--font-display)' }}>
              {lang === 'ca'
                ? 'Catàleg complet de peces estrenades, en ordre cronològic.'
                : 'Complete catalogue of premiered pieces, chronological.'}
            </span>
          </h1>
          <p className="mt-8 text-[var(--ink-soft)] text-lg max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
            {dict.works.subtitle}
          </p>
        </div>
      </section>

      {/* Filters + table */}
      <section className="py-16 lg:py-24 bg-[var(--paper)]">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
          {/* Filter rail */}
          <aside className="lg:sticky lg:top-28 self-start">
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              reset={reset}
              sort={sort}
              setSort={setSort}
              dict={dict}
            />
          </aside>

          {/* Table-style list */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="num-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-mute)]">
                {list.length} / {WORKS.length} · {dict.works.count}
              </div>
              <ArrowHint />
            </div>

            {list.length === 0 ? (
              <EmptyState dict={dict} onReset={reset} />
            ) : (
              <ol className="divide-y divide-[var(--ink)]/15 border-t border-b border-[var(--ink)]/20">
                {list.map((w, i) => (
                  <li key={w.slug} className="group py-10 lg:py-12">
                    <LangLink to={`/obres/${w.slug}`} className="grid grid-cols-1 md:grid-cols-[60px_1.2fr_1fr_90px] gap-6 lg:gap-10 items-baseline">
                      <span className="num-mono text-xl text-[var(--accent)] tabular-nums leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <span
                            className="font-display text-[28px] lg:text-[40px] leading-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {w.title[lang]}
                          </span>
                          <span className="num-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-mute)]">
                            {dict.genres[w.genre]}
                          </span>
                        </div>
                        <p
                          className="text-[var(--ink-soft)] mt-3 max-w-[55ch] leading-relaxed text-base lg:text-lg"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {w.synopsis[lang]}
                        </p>
                      </div>
                      <div className="num-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-mute)] space-y-1">
                        <div className="text-[var(--ink-soft)]">{w.premiere.venue[lang]}</div>
                        <div>{w.premiere.director[lang]}</div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {w.text?.available ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-[var(--accent)] text-[var(--accent)]">
                              <span className="size-1.5 bg-[var(--accent)] rounded-full" />
                              {dict.ui.available.split(' ')[0]}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-[var(--ink-mute)] text-[var(--ink-mute)]">
                              — {dict.ui.unavailable.split(' ').slice(0, 2).join(' ')}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="num-mono text-2xl text-[var(--ink)] tabular-nums whitespace-nowrap">
                        {w.year}
                        <ArrowRight size={16} className="inline-block ml-2 text-[var(--accent)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    </LangLink>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </section>

      {COLLABORATIONS.length > 0 && (
        <section className="py-16 lg:py-24 bg-paper-warm border-t border-[var(--ink)]/15">
          <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
            <div className="tag mb-6">{dict.works.collaborationsTitle}</div>
            <h2
              className="font-display text-[34px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] text-[var(--ink)] max-w-[24ch]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {dict.works.collaborationsTitle}
              <span className="block italic text-[var(--ink-mute)] text-[20px] lg:text-[24px] mt-2">
                {dict.works.collaborationsSubtitle}
              </span>
            </h2>

            <ul className="mt-10 border-t border-[var(--ink)]/20 divide-y divide-[var(--ink)]/15">
              {COLLABORATIONS.map((c) => (
                <li
                  key={c.slug}
                  className="grid grid-cols-[60px_1fr] lg:grid-cols-[80px_240px_1fr_auto] gap-4 lg:gap-10 py-8 items-baseline"
                >
                  <span
                    className="font-display text-xl lg:text-2xl text-[var(--accent)] tabular-nums"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {c.year}
                  </span>
                  <span
                    className="hidden lg:inline tag text-[var(--ink-mute)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {c.role[lang]}
                  </span>
                  <span
                    className="font-display text-xl lg:text-2xl text-[var(--ink)] leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {c.title[lang]}
                  </span>
                  <span
                    className="text-[var(--ink-soft)] text-sm lg:text-base italic lg:max-w-[42ch]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {c.description[lang]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}

function FilterPanel({ filters, setFilters, reset, sort, setSort, dict }) {
  const genres = Object.entries(dict.genres).map(([k, v]) => ({ value: k, label: v }))
  const castOptions = [
    { value: 'solo', label: dict.filters.solo },
    { value: 'small', label: dict.filters.small },
    { value: 'medium', label: dict.filters.medium },
    { value: 'large', label: dict.filters.large },
  ]
  const sortOptions = [
    { value: 'recent', label: dict.sortOptions.recent },
    { value: 'older', label: dict.sortOptions.older },
    { value: 'titleAsc', label: dict.sortOptions.titleAsc },
    { value: 'titleDesc', label: dict.sortOptions.titleDesc },
  ]

  return (
    <div className="space-y-10">
      <div>
        <h4 className="tag flex items-center gap-2 text-[var(--ink)] mb-5" style={{ color: 'var(--ink)' }}>
          <Filter size={12} />
          {dict.filters.title}
        </h4>

        <div className="space-y-5">
          <Row label={dict.filters.year}>
            <div className="grid grid-cols-2 gap-2">
              <InputNum
                placeholder={dict.filters.yearFrom}
                value={filters.yearFrom}
                onChange={(v) => setFilters((f) => ({ ...f, yearFrom: v }))}
              />
              <InputNum
                placeholder={dict.filters.yearTo}
                value={filters.yearTo}
                onChange={(v) => setFilters((f) => ({ ...f, yearTo: v }))}
              />
            </div>
          </Row>

          <Row label={dict.filters.genre}>
            <PillGroup
              value={filters.genre}
              onChange={(v) => setFilters((f) => ({ ...f, genre: v }))}
              options={[{ value: '', label: dict.filters.any }, ...genres]}
            />
          </Row>

          <Row label={dict.filters.cast}>
            <PillGroup
              value={filters.cast}
              onChange={(v) => setFilters((f) => ({ ...f, cast: v }))}
              options={[{ value: '', label: dict.filters.any }, ...castOptions]}
            />
          </Row>

          <Row label={dict.filters.availability}>
            <PillGroup
              value={filters.avail}
              onChange={(v) => setFilters((f) => ({ ...f, avail: v }))}
              options={[
                { value: '', label: dict.filters.any },
                { value: 'available', label: dict.filters.available },
                { value: 'unavailable', label: dict.filters.unavailable },
              ]}
            />
          </Row>

          <button
            type="button"
            onClick={reset}
            className="text-[var(--accent)] hover:text-[var(--ink)] text-xs num-mono uppercase tracking-[0.18em]"
          >
            · {dict.ui.reset}
          </button>
        </div>
      </div>

      <div className="border-t border-[var(--ink)]/15 pt-10">
        <h4 className="tag mb-5 text-[var(--ink)]" style={{ color: 'var(--ink)' }}>{dict.works.sortTitle}</h4>
        <PillGroup
          value={sort}
          onChange={setSort}
          options={sortOptions}
          vertical
        />
      </div>
    </div>
  )
}

function Row({ label, children }) {
  return (
    <div>
      <div className="tag mb-2 text-[var(--ink-mute)]">{label}</div>
      {children}
    </div>
  )
}

function InputNum({ value, onChange, placeholder }) {
  return (
    <input
      type="number"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border border-[var(--ink)]/25 hover:border-[var(--ink)]/60 focus:border-[var(--accent)] outline-none px-3 py-2 num-mono text-sm"
    />
  )
}

function PillGroup({ value, onChange, options, vertical }) {
  return (
    <div className={'flex gap-2 flex-wrap' + (vertical ? ' flex-col gap-1' : '')}>
      {options.map((o) => {
        const active = (value || '') === o.value
        return (
          <button
            type="button"
            key={o.value || 'any'}
            onClick={() => onChange(o.value)}
            className={
              'text-xs num-mono uppercase tracking-[0.12em] px-3 py-1.5 border transition-colors ' +
              (active
                ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5'
                : 'border-[var(--ink)]/20 text-[var(--ink-soft)] hover:border-[var(--ink)] hover:text-[var(--ink)]')
            }
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

function ArrowHint() {
  return (
    <div className="hidden lg:flex items-center gap-2 tag">
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="num-mono">→</span>
      ))}
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="num-mono text-[var(--ink-mute)]">·</span>
      ))}
    </div>
  )
}

function EmptyState({ dict, onReset }) {
  return (
    <div className="border border-[var(--ink)]/20 p-10 lg:p-16 text-center bg-paper-warm">
      <h3 className="font-display text-2xl text-[var(--ink)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
        {dict.works.emptyTitle}
      </h3>
      <p className="text-[var(--ink-soft)] max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
        {dict.works.emptyText}
      </p>
      <button
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--ink)] text-sm num-mono uppercase tracking-[0.18em]"
      >
        · {dict.ui.reset}
      </button>
    </div>
  )
}
