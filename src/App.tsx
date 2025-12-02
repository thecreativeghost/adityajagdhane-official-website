import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Music from './components/Music';
import Design from './components/Design';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

/** existing helpers (no change) */
function findScrollContainer(el: HTMLElement | null): HTMLElement | Element | null {
  if (!el) return document.scrollingElement || document.documentElement;
  let node: any = el;
  while (node) {
    const overflowY = window.getComputedStyle(node).overflowY;
    const isScrollable = overflowY && (overflowY === 'auto' || overflowY === 'scroll');
    if (isScrollable && node.scrollHeight > node.clientHeight) return node;
    node = node.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}

function normalizeTargetFromLocation(): string {
  try {
    if (window.location.hash && window.location.hash.startsWith('#:~:text=')) return '';
    const rawHash = (window.location.hash || '').replace('#', '').trim().toLowerCase();
    if (rawHash) return rawHash;
    let p = window.location.pathname || '/';
    p = p.replace(/^\/+|\/+$/g, '').toLowerCase();
    return p; // '' => home, 'about' => about etc
  } catch {
    return '';
  }
}

function waitForElementAndScroll(id: string, maxAttempts = 30, interval = 120) {
  return new Promise<void>((resolve) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return resolve();
    }
    let attempts = 0;
    const tryIt = () => {
      attempts++;
      const el = document.getElementById(id);
      if (el) {
        console.log(`[scroll] found '${id}' after ${attempts} attempt(s)`);
        const container = findScrollContainer(el);
        if (container && container !== document.documentElement && container !== document.body) {
          const top = (el as HTMLElement).offsetTop;
          (container as HTMLElement).scrollTo({ top, behavior: 'smooth' });
        } else {
          (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return resolve();
      }
      if (attempts >= maxAttempts) {
        console.warn(`[scroll] gave up waiting for '${id}'`);
        return resolve();
      }
      setTimeout(tryIt, interval);
    };
    tryIt();
  });
}

/** new: mapping for titles */
const sectionTitles: Record<string, string> = {
  '': 'Aditya Jagdhane',
  home: 'Aditya Jagdhane | Indian musician, singer-songwriter, composer and philosopher',
  music: 'Music | Discography | Aditya Jagdhane',
  design: 'Design | Artwork | Aditya Jagdhane',
  about: 'About | Biography | Aditya Jagdhane',
  contact: 'Contact | Get in Touch | Aditya Jagdhane',
};

export default function App() {
  useEffect(() => {
    const doInitial = async () => {
      const target = normalizeTargetFromLocation();
      console.log('[App] initial target =', target || '(home)');
      // set title for initial target
      document.title = sectionTitles[target] ?? 'Aditya Jagdhane';

      if (!target) {
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
        return;
      }
      await waitForElementAndScroll(target);
    };

    doInitial();

    const onPop = async () => {
      const t = normalizeTargetFromLocation();
      console.log('[App] popstate ->', t || '(home)');
      document.title = sectionTitles[t] ?? 'Aditya Jagdhane';
      if (!t) window.scrollTo({ top: 0, behavior: 'smooth' });
      else await waitForElementAndScroll(t);
    };

    window.addEventListener('popstate', onPop);

    // also update title when user scrolls and different section becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        // choose the first entry that's intersecting and with sufficient visibility
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible && visible.target && visible.target.id) {
          const id = visible.target.id.toLowerCase();
          if (sectionTitles[id]) {
            document.title = sectionTitles[id];
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.35, 0.6, 0.9], // tune as needed
      }
    );

    // observe sections by ids if they exist
    ['home', 'music', 'design', 'about', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('popstate', onPop);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sora">
      <Header />
      <main>
        {/* Ensure each section component renders an element with the matching id */}
        <Home />
        <Music />
        <Design />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
