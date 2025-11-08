import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section id="home" className="section relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400"
          >
            This is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold my-2 text-white"
          >
            Aditya Jagdhane
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-md md:text-lg text-gray-300"
          >
            Musician · Designer · Programmer
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative group">
            <img
              src="https://i.postimg.cc/7Z5QNzvX/Picsart-25-11-02-21-10-58-878.png"
              alt="Aditya Jagdhane"
              className="max-w-sm md:max-w-md lg:max-w-lg mx-auto z-10 relative"
            />
            <div className="absolute inset-0 bg-black" style={{ maskImage: 'linear-gradient(to top, black 0%, transparent 50%)' }}></div>
            <div className="absolute -inset-2 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
