import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // skip custom scroll if Chrome's text fragment (#:~:text=...) is present
    const hasTextFragment = window.location.hash.startsWith('#:~:text=');
    if (hasTextFragment) return;

    // handle paths like /about or /contact
    const path = window.location.pathname.replace('/', '');
    if (path) {
      const el = document.getElementById(path.toLowerCase());
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }

    // handle hash like #about
    const hash = window.location.hash.replace('#', '');
    if (hash && !hasTextFragment) {
      const el = document.getElementById(hash.toLowerCase());
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
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
