import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, FooterFull, FooterMinimal } from './components/Layout';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Styles = lazy(() => import('./pages/Styles'));
const Gallery = lazy(() => import('./pages/Gallery'));
const BehindTheScenes = lazy(() => import('./pages/BehindTheScenes'));
const Festivais = lazy(() => import('./pages/Festivais'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Depoimentos = lazy(() => import('./pages/Depoimentos'));
const RedesSociais = lazy(() => import('./pages/RedesSociais'));

// --- Scroll To Top On Route Change ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Conditional Footer Selector ---
const AppFooter = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      {isHome && <FooterFull />}
      <FooterMinimal />
    </>
  );
};

const RouteFallback = () => (
  <div className="min-h-[calc(100vh-var(--header-height))] bg-[#FAF9F6]" aria-hidden="true" />
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF9F6] font-sans selection:bg-[#005F73]/20 selection:text-zinc-900 overflow-x-hidden">
        <Navbar />
        <main>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/estilos" element={<Styles />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="/bastidores" element={<BehindTheScenes />} />
              <Route path="/festivais" element={<Festivais />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/orcamento" element={<Contact />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos" element={<TermsOfUse />} />
              <Route path="/termos-de-uso" element={<TermsOfUse />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/duvidas-frequentes" element={<FAQ />} />
              <Route path="/depoimentos" element={<Depoimentos />} />
              <Route path="/redes-sociais" element={<RedesSociais />} />
            </Routes>
          </Suspense>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}
