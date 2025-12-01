import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function scrollToId(targetId?: string) {
  if (!targetId) return;
  const el = document.getElementById(targetId);
  if (el) {
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
  }
}

function getTargetFromLocation() {
  // skip if Chrome text-fragment (#:~:text=...) is present
  if (window.location.hash.startsWith('#:~:text=')) return '';
  const path = window.location.pathname.replace('/', '').toLowerCase();
  const hash = window.location.hash.replace('#', '').toLowerCase();
  return hash || path; // e.g. 'about' or '' for home
}

function App() {
  useEffect(() => {
    // initial load
    const initialTarget = getTargetFromLocation();
    if (initialTarget) scrollToId(initialTarget);

    // handle back/forward navigation
    const onPop = () => {
      const t = getTargetFromLocation();
      // if no target, scroll to top
      if (!t) window.scrollTo({ top: 0, behavior: 'smooth' });
      else scrollToId(t);
    };

    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="font-sora">
      <Header />
      <main>
        <Home />
        <Music />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
