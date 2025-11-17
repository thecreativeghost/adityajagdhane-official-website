import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useScroll } from '../hooks/useScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggle } from './MenuToggle';

const navLinks = [
  { name: 'Home', to: 'home', type: 'scroll' },
  { name: 'Music', to: 'music', type: 'scroll' },
  { name: 'Design', to: 'https://www.behance.net/adityajagdhane_7', type: 'external' },
  { name: 'About', to: 'about', type: 'scroll' },
  { name: 'Contact', to: 'contact', type: 'scroll' },
];

const Header: React.FC = () => {
  const scrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="cursor-pointer z-50">
            <img src="https://i.postimg.cc/yd0j68Tg/logo-for-web.png" alt="AYT!DA Logo" className="h-8 w-auto" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.type === 'scroll') {
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="text-white"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.to}
                  target={link.type === 'external' ? '_blank' : undefined}
                  rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <MenuToggle toggle={toggleMenu} isOpen={isMenuOpen} />
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center justify-center space-y-8 text-center">
              {navLinks.map((link) => {
                if (link.type === 'scroll') {
                  return (
                    <Link
                      key={link.name}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                      className="text-3xl text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.to}
                    target={link.type === 'external' ? '_blank' : undefined}
                    rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                    onClick={closeMenu}
                    className="text-3xl text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
