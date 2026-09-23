import { createContext, useState, useContext } from 'react'

const Ctx = createContext(null)

export function GlobalSearchProvider({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <Ctx.Provider value={{ open, setOpen }}>
      {children}
    </Ctx.Provider>
  )
}

export function useGlobalSearch() {
  const context = useContext(Ctx)
  if (!context) {
    throw new Error('useGlobalSearch ha de ser utilitzat dins d un GlobalSearchProvider')
  }
  return context
}
