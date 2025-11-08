import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // skip if Chrome text-fragment (#:~:text=...) is present
    if (window.location.hash.startsWith('#:~:text=')) return;

    const path = window.location.pathname.replace('/', '').toLowerCase();
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const targetId = hash || path;

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
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
