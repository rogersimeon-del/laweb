import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import ScrollToTop from './components/ScrollToTop';

import { LangProvider } from './hooks/useLang';
import { GlobalSearchProvider } from './hooks/useGlobalSearch';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import WorkDetail from './pages/WorkDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';
import Awards from './pages/Awards';
import Downloads from './pages/Downloads';
import News from './pages/News';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';

/**
 * Two parallel routes trees under /ca and /en. Both wrap the same `<Layout />`
 * so the navigation, footer and language switcher share infrastructure.
 * The auth provider is kept for platform compatibility; the portfolio itself
 * is public, so we render it directly once public settings / auth have loaded.
 */
function PortfolioApp() {
  const { isLoadingAuth, isLoadingPublicSettings } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[var(--paper)]">
        <div className="w-8 h-8 border-4 border-[var(--ink)]/20 border-t-[var(--accent)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <LangProvider>
      <GlobalSearchProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/ca" replace />} />

          {/* Catalan */}
          <Route path="/ca/*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="obres" element={<Works />} />
            <Route path="obres/:slug" element={<WorkDetail />} />
            <Route path="projectes" element={<Projects />} />
            <Route path="projectes/:slug" element={<ProjectDetail />} />
            <Route path="publicacions" element={<Publications />} />
            <Route path="premis" element={<Awards />} />
            <Route path="descarregar" element={<Downloads />} />
            <Route path="noticies" element={<News />} />
            <Route path="contacte" element={<Contact />} />
            <Route path="privacitat" element={<Privacy />} />
            <Route path="avis-legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* English */}
          <Route path="/en/*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
            <Route path="works/:slug" element={<WorkDetail />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="publications" element={<Publications />} />
            <Route path="awards" element={<Awards />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<Navigate to="/ca" replace />} />
        </Routes>
      </GlobalSearchProvider>
    </LangProvider>
  );
}

function NotFound() {
  return (
    <section className="bg-paper-grain py-32">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-10">
        <p className="tag mb-8">404</p>
        <h1 className="font-display text-[88px] leading-[0.95] tracking-[-0.02em] text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
          Pàgina no trobada.
        </h1>
        <p className="mt-6 text-[var(--ink-soft)] text-lg max-w-xl" style={{ fontFamily: 'var(--font-body)' }}>
          La ruta que busques no existeix — o encara no l\u2019hem publicada.
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <PortfolioApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
