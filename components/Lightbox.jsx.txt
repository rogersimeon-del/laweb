import { useEffect, useState } from 'react'

export default function Lightbox({ images, initialIndex = 0, open, onClose }) {
  const [idx, setIdx] = useState(initialIndex)

  useEffect(() => {
    setIdx(initialIndex)
  }, [initialIndex, open])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, images.length])

  if (!open) return null

  const current = images[idx]
  return (
    <div
      className="fixed inset-0 z-50 lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="absolute inset-0 grid place-items-center p-6 lg:p-12" onClick={(e) => e.stopPropagation()}>
        <figure className="relative max-w-[1100px] w-full">
          <img
            src={current.src}
            alt={current.alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <figcaption className="mt-4 num-mono text-[11px] uppercase tracking-[0.18em] text-[var(--paper)]/70 flex items-center justify-between">
            <span>{current.caption}</span>
            <span>{idx + 1} / {images.length}</span>
          </figcaption>
          <button
            onClick={onClose}
            aria-label="close"
            className="absolute -top-2 -right-2 lg:-top-6 lg:-right-6 size-10 border border-[var(--paper)]/40 text-[var(--paper)] grid place-items-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            ✕
          </button>
          <button
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            aria-label="previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 size-12 border border-[var(--paper)]/40 text-[var(--paper)] hidden md:grid place-items-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            aria-label="next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 size-12 border border-[var(--paper)]/40 text-[var(--paper)] hidden md:grid place-items-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            →
          </button>
        </figure>
      </div>
    </div>
  )
}
