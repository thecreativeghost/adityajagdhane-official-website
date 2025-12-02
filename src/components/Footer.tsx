import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const scrolled = useScroll(200);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  return (
    <footer className="bg-black py-8 text-center text-gray-500 relative">
      <div className="container mx-auto px-6">
        <p>
          Crafted by © {year} – <a
  href="https://www.google.com/search?kgmid=/g/11t5m84d_v"
  target="_blank"
  rel="noopener noreferrer"
>
  Aditya Jagdhane
</a> | AYT!DA, All rights reserved.
        </p>
      </div>

      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
