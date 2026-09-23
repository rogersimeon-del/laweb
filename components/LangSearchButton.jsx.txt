import { Search } from 'lucide-react'
import { useGlobalSearch } from '../hooks/useGlobalSearch'
import { useLang } from '../hooks/useLang'
import { t as T } from '../i18n/strings'

/**
 * Round button invoking the global search overlay.
 */
export default function LangSearchButton() {
  const { setOpen } = useGlobalSearch()
  const { lang } = useLang()
  const dict = T[lang]

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="hidden lg:inline-flex items-center gap-2 num-mono text-[11px] text-[var(--ink-mute)] hover:text-[var(--accent)] px-2 h-9 border border-[var(--ink)]/15 hover:border-[var(--accent)]/60 transition-colors"
      aria-label={dict.nav.search}
    >
      <Search size={14} />
      <span className="uppercase tracking-[0.18em]">{dict.nav.search}</span>
      <span className="ml-1 px-1.5 py-0.5 border border-current opacity-60" aria-hidden>/</span>
    </button>
  )
}
