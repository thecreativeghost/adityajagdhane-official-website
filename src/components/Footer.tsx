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
    <footer
      className="
        relative py-8 text-center
        bg-gray-50 dark:bg-black
        text-gray-600 dark:text-gray-500
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-6">
        <p>
          Crafted by © {year} –{' '}
          <a
            href="https://www.google.com/search?kgmid=/g/11t5m84d_v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-300 hover:underline"
          >
            Aditya Jagdhane
          </a>{' '}
          | AYT!DA, All rights reserved.
        </p>
      </div>

      {/* Scroll to top */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed bottom-8 right-8 z-50 p-3 rounded-full backdrop-blur-sm
            bg-black text-white hover:bg-gray-800
            dark:bg-white/10 dark:text-white dark:hover:bg-white/20
            transition-all duration-300
          "
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
