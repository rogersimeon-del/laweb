import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { stripLangFromPath } from './stripLang'

export { stripLangFromPath }

const LangContext = createContext(null)
const STORAGE_KEY = 'pd:lang'

function langFromPath(pathname) {
  if (!pathname) return null
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
  if (pathname === '/ca' || pathname.startsWith('/ca/')) return 'ca'
  return null
}

export function LangProvider({ children }) {
  const { pathname } = useLocation()
  const urlLang = langFromPath(pathname)

  const [lang, setLangState] = useState(() => {
    if (urlLang) return urlLang
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'ca' || stored === 'en') return stored
    } catch {}
    return 'ca'
  })

  // Keep the active language in sync with the URL prefix so the switcher
  // (which navigates to /ca or /en) actually changes the rendered content.
  useEffect(() => {
    if (urlLang && urlLang !== lang) setLangState(urlLang)
  }, [urlLang, lang])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {}
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang: (next) => {
        if (next === 'ca' || next === 'en') setLangState(next)
      },
      toggleLang: () => setLangState((prev) => (prev === 'ca' ? 'en' : 'ca')),
      other: lang === 'ca' ? 'en' : 'ca',
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

export const LANG_PREFIX = { ca: '/ca', en: '/en' }

// Route segments differ per language (e.g. /ca/obres ↔ /en/works).
// The language switcher must translate the first segment when flipping,
// otherwise the URL keeps the other language's slug and 404s.
const CA_TO_EN = {
  obres: 'works',
  projectes: 'projects',
  publicacions: 'publications',
  premis: 'awards',
  descarregar: 'downloads',
  noticies: 'news',
  contacte: 'contact',
  privacitat: 'privacy',
  'avis-legal': 'legal',
  about: 'about',
}
const EN_TO_CA = Object.fromEntries(Object.entries(CA_TO_EN).map(([k, v]) => [v, k]))

export function translatePath(rest, toLang) {
  if (!rest || rest === '/') return rest
  const parts = rest.replace(/^\//, '').split('/')
  const head = parts[0]
  const tail = parts.slice(1).join('/')
  const map = toLang === 'ca' ? EN_TO_CA : CA_TO_EN
  const newHead = map[head] || head
  return tail ? `/${newHead}/${tail}` : `/${newHead}`
}

export function localizedPath(lang, path) {
  if (!path) return LANG_PREFIX[lang]
  let normalized = path.startsWith('/') ? path : `/${path}`
  // strip any existing /ca or /en prefix so switching languages stays on the same page
  normalized = normalized.replace(/^\/(ca|en)(?=\/|$)/, '')
  if (normalized === '' || normalized === '/') return LANG_PREFIX[lang]
  return `${LANG_PREFIX[lang]}${normalized}`
}

export function readLangFromPath(pathname) {
  if (!pathname) return { lang: 'ca', path: '/' }
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return { lang: 'en', path: pathname.replace(/^\/en/, '') || '/' }
  }
  if (pathname.startsWith('/ca/') || pathname === '/ca') {
    return { lang: 'ca', path: pathname.replace(/^\/ca/, '') || '/' }
  }
  return { lang: 'ca', path: pathname || '/' }
}
