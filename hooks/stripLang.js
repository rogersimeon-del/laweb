// Return path without the leading /ca or /en.
export function stripLangFromPath(pathname) {
  if (!pathname) return '/'
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/'
  if (pathname === '/en') return '/'
  if (pathname.startsWith('/ca/')) return pathname.slice(3) || '/'
  if (pathname === '/ca') return '/'
  return pathname || '/'
}
