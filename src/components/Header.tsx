import React from 'react';
import { Link } from 'react-scroll';
import { useScroll } from '../hooks/useScroll';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home', type: 'scroll' },
  { name: 'Music', to: 'music', type: 'scroll' },
  { name: 'Design', to: 'https://www.behance.net/adityajagdhane_7', type: 'external' },
  { name: 'About', to: 'about', type: 'scroll' },
  { name: 'Contact', to: 'contact', type: 'scroll' },
];

const Header: React.FC = () => {
  const scrolled = useScroll(50);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img src="https://i.postimg.cc/yd0j68Tg/logo-for-web.png" alt="AYT!DA Logo" className="h-8 w-auto" />
        </Link>
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            );
          })}
        </nav>
        {/* Mobile menu can be added here if needed */}
      </div>
    </motion.header>
  );
};

export default Header;
