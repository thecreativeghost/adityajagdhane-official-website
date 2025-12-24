import React from 'react';
import { motion } from 'framer-motion';

const Music: React.FC = () => {
  return (
    <section
      id="music"
      className="
        section
        bg-gray-50 dark:bg-brand-gray
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          My Music
        </motion.h2>

        {/* Storytelling Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed mb-10"
        >
          Every melody starts as a thought, a memory, or a moment I couldn’t let go of.  
          Hit play and follow the journey, from my mind, straight to your ears.
        </motion.p>

        {/* Spotify Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/4h9hF2bDVS8HY1weu9IYg5?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player for Aditya Jagdhane"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Music;
