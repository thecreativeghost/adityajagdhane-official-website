import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaApple,
  FaImdb,
  FaTwitter,
  FaLink,
  FaMusic,
  FaGlobe,
} from 'react-icons/fa';
import { BsMusicNote } from 'react-icons/bs';
import { FaClapperboard } from 'react-icons/fa6';

const socialLinks = [
  { icon: FaSpotify, label: 'Spotify', href: 'https://open.spotify.com/artist/4h9hF2bDVS8HY1weu9IYg5' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@AdityaJagdhaneMusic' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/adityajagdhanemusic' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-jagdhane' },
  { icon: FaApple, label: 'Apple Music', href: 'https://music.apple.com/ca/artist/aditya-jagdhane/1631817096' },
  { icon: BsMusicNote, label: 'JioSaavn', href: 'https://www.jiosaavn.com/artist/aditya-jagdhane-songs/4Q,9LuO5,fs_' },
  { icon: FaImdb, label: 'IMDb', href: 'https://www.imdb.com/name/nm16380921/' },
  { icon: FaClapperboard, label: 'TMDb', href: 'https://www.themoviedb.org/person/5892274' },
  { icon: FaTwitter, label: 'X', href: 'https://x.com/AdityaJagdhane7' },
  { icon: FaLink, label: 'Linktree', href: 'https://lnk.bio/adityajagdhane7' },
  { icon: FaMusic, label: 'MusicBrainz', href: 'https://musicbrainz.org/artist/2b41c60a-13c6-482d-945c-f704fb893e32' },
  { icon: FaGlobe, label: 'Knowledge Panel', href: 'https://www.google.com/search?kgmid=/g/11t5m84d_v' },
];

const fadeOnly = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const About: React.FC = () => {
  const pageUrl = 'https://www.adityajagdhane.in/about/';
  const pageTitle = 'About — Aditya Jagdhane';
  const pageDescription =
    'About Aditya Jagdhane — biography, career, creative pursuits, and official links.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <section className="section bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">

          {/* Heading */}
          <motion.h2
            {...fadeOnly}
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            About Aditya
          </motion.h2>

          {/* Bio */}
          <motion.p
            {...fadeOnly}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Aditya Jagdhane is an Indian musician, singer-songwriter, and composer.
            He is also a graphic designer, programmer, and a philosopher deeply
            interested in psychology and human behavior.
            <span className="block mt-3 text-sm text-gray-500 dark:text-gray-400">
              Source:{' '}
              <a
                href="https://imdb.com/name/nm16380921/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black dark:hover:text-white"
              >
                IMDb
              </a>{' '}
              |{' '}
              <a
                href="https://www.themoviedb.org/person/5892274"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black dark:hover:text-white"
              >
                TMDb
              </a>
            </span>
          </motion.p>

          {/* Connect */}
          <motion.h3
            {...fadeOnly}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mt-20 mb-10 text-gray-900 dark:text-white"
          >
            Connect With Me
          </motion.h3>

          {/* Social Icons — MOBILE FIXED */}
          <motion.div
            {...fadeOnly}
            transition={{ delay: 0.6 }}
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
              gap-5
              max-w-4xl
              mx-auto
              justify-items-center
              mb-24
            "
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="
                    flex items-center justify-center
                    w-20 h-20
                    rounded-xl
                    bg-gray-100 dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700
                    text-gray-700 dark:text-gray-300
                    hover:bg-black hover:text-white
                    dark:hover:bg-white dark:hover:text-black
                    transition-all duration-300
                  "
                >
                  <Icon size={26} />
                </a>
              );
            })}
          </motion.div>

          {/* Organizations */}
          <motion.div {...fadeOnly} transition={{ delay: 0.8 }}>
            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Organizations
            </h3>

            <div className="space-y-6">
              <div>
                <a
                  href="https://indiepulserecords.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xl hover:underline"
                >
                  IndiePulse Records
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  <em>(Music studio & indie record label)</em>
                </p>
              </div>

              <div>
                <a
                  href="https://neurospherepublications.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xl hover:underline"
                >
                  NeuroSphere Publications
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  <em>(Book publishing company)</em>
                </p>
              </div>

              <div>
                <a
                  href="https://aytida.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xl hover:underline"
                >
                  AYT!DA
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  <em>(Visual designing agency)</em>
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              <em>Founded by Aditya Jagdhane</em>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
