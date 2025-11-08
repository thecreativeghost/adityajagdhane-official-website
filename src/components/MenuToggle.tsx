import React from 'react';
import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => (
  <button onClick={toggle} className="focus:outline-none bg-transparent border-none cursor-pointer">
    <svg width="20" height="20" viewBox="0 0 20 20">
      <Path
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { d: "M 3 6 L 17 6" },
          open: { d: "M 4 16 L 16 4" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <Path
        d="M 3 10 L 17 10"
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { d: "M 3 14 L 12 14" },
          open: { d: "M 4 4 L 16 16" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </svg>
  </button>
);
