import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useScroll } from '../hooks/useScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', to: 'home', type: 'scroll' },
  { name: 'Music', to: 'music', type: 'scroll' },
  { name: 'Design', to: 'design', type: 'scroll' },
  { name: 'About', to: 'about', type: 'scroll' },
  { name: 'Contact', to: 'contact', type: 'scroll' },
];

const Header: React.FC = () => {
  const scrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // update browser URL without reload (SPA-safe)
  const updateUrlForTarget = (target: string) => {
    try {
      const path = !target || target === 'home' ? '/' : `/${encodeURIComponent(target)}`;
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
    } catch (err) {
      console.warn('pushState failed', err);
    }
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-black/80 backdrop-blur shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <a
            href="/"
            className="cursor-pointer z-50"
            onClick={() => updateUrlForTarget('home')}
            aria-label="Go to home"
          >
            <img
              src="https://i.postimg.cc/yd0j68Tg/logo-for-web.png"
              alt="AYT!DA Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex items-center space-x-8 text-gray-400"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="text-white"
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
                onClick={() => updateUrlForTarget(link.to)}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}

            {/* 🌙 THEME TOGGLE (DESKTOP) */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* MOBILE BUTTONS */}
          <motion.div
            className="md:hidden z-50 flex items-center gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <ThemeToggle />
            <MenuToggle toggle={toggleMenu} isOpen={isMenuOpen} />
          </motion.div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center md:hidden"
          >
            {/* THEME TOGGLE (MOBILE OVERLAY) */}
            <div className="absolute top-6 right-6">
              <ThemeToggle />
            </div>

            <nav className="flex flex-col items-center justify-center space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => {
                    closeMenu();
                    updateUrlForTarget(link.to);
                  }}
                  className="text-3xl text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
