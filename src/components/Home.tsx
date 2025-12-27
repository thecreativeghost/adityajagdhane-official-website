import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        min-h-screen
        flex items-center
        bg-gray-50 dark:bg-black
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
          >
            This is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold my-2 text-gray-900 dark:text-white"
          >
            Aditya Jagdhane
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-md md:text-lg text-gray-700 dark:text-gray-300"
          >
            Musician · Designer · Programmer
          </motion.p>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative flex justify-center items-center mt-10 md:mt-0"
        >
          <div className="relative group w-full flex justify-center">
            <video
              src="https://www.adityajagdhane.in/images/profile/profile-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="
                w-full
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                h-auto
                rounded-lg
                z-10
                relative
              "
            />

            {/* FADE OVERLAY */}
            <div
              className="absolute inset-0 bg-gray-50 dark:bg-black pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to top, black 0%, transparent 50%)',
              }}
            />

            {/* SOFT GLOW */}
            <div
              className="
                absolute -inset-3
                bg-black/10 dark:bg-white/10
                rounded-full
                blur-3xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
