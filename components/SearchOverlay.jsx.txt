import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, ArrowRight } from 'lucide-react'
import { useGlobalSearch } from '../hooks/useGlobalSearch'
import { useLang, localizedPath } from '../hooks/useLang'
import { t as T } from '../i18n/strings'
import { WORKS, PROJECTS, NEWS, PUBLICATIONS } from '../data/portfolio'

/**
 * Full-screen overlay that searches across WORKS / PROJECTS / NEWS.
 *   esc — close
 *   /   — open (handled in Layout)
 */
export default function SearchOverlay() {
  const { open, setOpen } = useGlobalSearch()
  const { lang } = useLang()
  const dict = T[lang]
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return
    setQuery('')
    setTimeout(() => inputRef.current?.focus(), 50)
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const matches = []
    WORKS.forEach((w) => {
      const haystack = (
        w.title.ca + ' ' + w.title.en + ' ' + (w.synopsis.ca || '') + ' ' + (w.synopsis.en || '')
      ).toLowerCase()
      if (haystack.includes(q)) {
        matches.push({
          kind: 'work',
          title: w.title[lang],
          meta: w.year + ' — ' + T[lang].genres[w.genre],
          to: `/obres/${w.slug}`,
        })
      }
    })
    PROJECTS.forEach((p) => {
      const haystack = (p.title.ca + ' ' + p.title.en + ' ' + (p.synopsis[lang] || '')).toLowerCase()
      if (haystack.includes(q)) {
        matches.push({
          kind: 'project',
          title: p.title[lang],
          meta: p.window[lang],
          to: `/projectes/${p.slug}`,
        })
      }
    })
    NEWS.forEach((n) => {
      const haystack = (n.title.ca + ' ' + n.title.en + ' ' + n.body[lang]).toLowerCase()
      if (haystack.includes(q)) {
        matches.push({
          kind: 'news',
          title: n.title[lang],
          meta: n.date,
          to: `/noticies#${n.date}`,
        })
      }
    })
    PUBLICATIONS.forEach((p) => {
      const haystack = (p.title.ca + ' ' + p.title.en + ' ' + p.publisher.ca + ' ' + p.publisher.en).toLowerCase()
      if (haystack.includes(q)) {
        matches.push({
          kind: 'publication',
          title: p.title[lang],
          meta: p.year + ' — ' + (T[lang].publications.categories[p.type] || p.type),
          to: `/publicacions#${encodeURIComponent(p.title[lang])}`,
        })
      }
    })
    return matches.slice(0, 12)
  }, [query, lang])

  const go = (to) => {
    setOpen(false)
    navigate(localizedPath(lang, to))
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lightbox-backdrop" role="dialog" aria-modal="true" aria-label={dict.search.title}>
      <div className="mx-auto max-w-3xl px-6 pt-20">
        <div className="flex items-center justify-between mb-6 text-[var(--paper)]">
          <span className="tag text-[var(--paper)]/70">{dict.search.title}</span>
          <button onClick={() => setOpen(false)} aria-label={dict.search.closeSearch} className="p-2 hover:opacity-80">
            <X size={20} />
          </button>
        </div>

        <div className="relative border-b border-[var(--paper)]/30 pb-3">
          <Search size={22} className="absolute left-0 top-2 text-[var(--paper)]/60" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.search.placeholder}
            className="w-full bg-transparent text-[28px] md:text-[40px] text-[var(--paper)] font-display placeholder:text-[var(--paper)]/30 outline-none pl-10"
            style={{ fontFamily: 'var(--font-display)' }}
          />
          <span className="hidden md:block absolute right-0 top-6 num-mono text-[11px] text-[var(--paper)]/40">
            esc
          </span>
        </div>

        {!query.trim() && (
          <p className="mt-6 text-[var(--paper)]/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            {dict.search.hint}
          </p>
        )}

        {results.length > 0 && (
          <ul className="mt-8 divide-y divide-[var(--paper)]/10 text-[var(--paper)] max-h-[55vh] overflow-y-auto">
            {results.map((r, i) => (
              <li key={i}>
                <button
                  onClick={() => go(r.to)}
                  className="group w-full flex items-center justify-between gap-4 py-4 text-left"
                >
                  <div>
                    <span
                      className="block font-display text-xl md:text-2xl"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {r.title}
                    </span>
                    <span className="tag text-[var(--paper)]/60 mt-1 block">{r.meta} · {r.kind}</span>
                  </div>
                  <ArrowRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {query.trim() && results.length === 0 && (
          <p className="mt-10 text-[var(--paper)]/70 text-base" style={{ fontFamily: 'var(--font-body)' }}>
            {dict.search.noResults} <em>&ldquo;{query}&rdquo;</em>
          </p>
        )}
      </div>
    </div>
  )
}
