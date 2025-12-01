import React from 'react';
import { motion } from 'framer-motion';

const Design: React.FC = () => {
  return (
    <section id="design" className="section bg-brand-gray">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Design
        </motion.h2>

        {/* Story / Passion Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-4"
        >
          Design isn’t work for me… it’s a whole feeling. <br />
          Some people create things, but we designers give them that <em>extra sparkle</em>. <br />
          One line, one color, one tiny adjustment — and the whole piece just comes alive. <br />
          If you wanna see how ideas turn into visuals… come along to my Behance.
        </motion.p>

        {/* Behance Button (image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-sm mx-auto"
        >
          <a
            href="https://www.behance.net/adityajagdhane_7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my Behance profile (opens in new tab)"
          >
            <img
              src="https://www.adityajagdhane.in/behance_button.png"
              alt="View my Behance gallery"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Design;
