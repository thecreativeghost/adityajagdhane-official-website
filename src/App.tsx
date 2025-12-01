import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

/** Find the nearest scrollable ancestor for an element, or fallback to document.scrollingElement */
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

/** Wait for element, then scroll the appropriate container to that element */
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
          // scroll inside container
          const top = (el as HTMLElement).offsetTop;
          (container as HTMLElement).scrollTo({ top, behavior: 'smooth' });
        } else {
          // scroll window
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

export default function App() {
  useEffect(() => {
    const doInitial = async () => {
      const target = normalizeTargetFromLocation();
      console.log('[App] initial target =', target || '(home)');
      if (!target) {
        // small delay so layout settles
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
        return;
      }
      await waitForElementAndScroll(target);
    };

    doInitial();

    const onPop = async () => {
      const t = normalizeTargetFromLocation();
      console.log('[App] popstate ->', t || '(home)');
      if (!t) window.scrollTo({ top: 0, behavior: 'smooth' });
      else await waitForElementAndScroll(t);
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
