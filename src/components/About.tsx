import React from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaYoutube, FaInstagram, FaLinkedin, FaApple, FaImdb, FaTwitter, FaLink, FaMusic, FaGlobe } from 'react-icons/fa';
import { SiWikidata } from 'react-icons/si';
import { BsMusicNote } from 'react-icons/bs';
import { BsDisc } from 'react-icons/bs';

const socialLinks = [
  { icon: FaSpotify, label: 'Spotify', href: 'https://open.spotify.com/artist/4h9hF2bDVS8HY1weu9IYg5' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@AdityaJagdhaneMusic' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/adityajagdhanemusic' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-jagdhane' },
  { icon: FaApple, label: 'Apple Music', href: 'https://music.apple.com/ca/artist/aditya-jagdhane/1631817096' },
  { icon: BsMusicNote, label: 'JioSaavn', href: 'https://www.jiosaavn.com/artist/aditya-jagdhane-songs/4Q,9LuO5,fs_' },
  { icon: FaImdb, label: 'IMDb', href: 'https://www.imdb.com/name/nm16380921/' },
  { icon: FaTwitter, label: 'X (Twitter)', href: 'https://x.com/AdityaJagdhane7' },
  { icon: BsDisc, label: 'Discogs', href: 'https://www.discogs.com/artist/16796998-Aditya-Jagdhane' },
  { icon: FaLink, label: 'Linktree', href: 'https://lnk.bio/adityajagdhane7' },
  { icon: FaMusic, label: 'MusicBrainz', href: 'https://musicbrainz.org/artist/2b41c60a-13c6-482d-945c-f704fb893e32' },
  { icon: FaGlobe, label: 'Knowledge Panel', href: 'https://www.google.com/search?kgmid=/g/11t5m84d_v' },
];


const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          About Aditya
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 leading-relaxed"
        >
          Aditya Jagdhane is an Indian musician, singer-songwriter, and composer. His unique style blends heartfelt lyrics with soulful melodies. Aditya is also a graphic designer and programmer, and a philosopher deeply interested in psychology. He often reflects human behavior, emotions, and introspective thoughts through his artistic expression. His multidisciplinary approach allows him to express his artistic and philosophical vision across diverse platforms.
          <br />
          <span className="text-gray-400 text-sm mt-2 block">Source: <a href="https://imdb.com/name/nm16380921/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">IMDb</a></span>
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mt-20 mb-8"
        >
          Connect With Me
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-20"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
              className="group relative flex items-center justify-center p-4 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <link.icon className="text-3xl" />
              <span className="absolute bottom-full mb-2 w-auto p-2 text-xs text-white bg-black rounded-md scale-0 group-hover:scale-100 transition-transform origin-bottom">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Organizations</h3>
          <div className="space-y-6">
            <div>
              <a href="https://indiepulserecords.co.in" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:text-white transition-colors">
                IndiePulse Records
              </a>
              <p className="text-gray-400"><em>(Music studio & indie record label)</em></p>
            </div>
            <div>
              <a href="https://aytida.co.in" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:text-white transition-colors">
                AYT!DA
              </a>
              <p className="text-gray-400"><em>(Visual designing agency)</em></p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-8"><em>Founded by Aditya Jagdhane</em></p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
