import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import SearchOverlay from './SearchOverlay'
import { useGlobalSearch } from '../hooks/useGlobalSearch'

/**
 * App shell. Loads the persistent nav + footer and the global search overlay.
 * Resets scroll on every navigation.
 */
export default function Layout({ children }) {
  const { pathname } = useLocation()
  const { setOpen } = useGlobalSearch()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => {
      // Pressing / opens search — unless already typing in an input.
      const tag = (e.target?.tagName || '').toLowerCase()
      if (e.key === '/' && tag !== 'input' && tag !== 'textarea') {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  return (
    <>
      <Nav />
      <main id="main" className="page-enter" key={pathname}>
        {children || <Outlet />}
      </main>
      <Footer />
      <SearchOverlay />
    </>
  )
}
