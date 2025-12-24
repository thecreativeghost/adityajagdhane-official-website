import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');
    emailjs
      .sendForm('service_ncyekts', 'template_2pny8w2', form.current, 'clE-xD2WwCIBgRSDz')
      .then(
        () => {
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 6000);
        },
        (error) => {
          setStatus('error');
          console.log('FAILED...', error.text);
          setTimeout(() => setStatus('idle'), 5000);
        },
      );
  };

  return (
    <section
      id="contact"
      className="
        section relative overflow-hidden
        bg-gray-50 dark:bg-brand-gray
        transition-colors duration-300
      "
    >
      <div className="absolute inset-0 z-0 opacity-10" />

      <div className="container mx-auto px-6 text-center z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 dark:text-gray-400 mb-12"
        >
          Have a project in mind? Let&apos;s collaborate!
        </motion.p>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="
                w-full rounded-md p-3 transition
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-white
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30
                focus:outline-none
              "
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="
                w-full rounded-md p-3 transition
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-white
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30
                focus:outline-none
              "
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="
              w-full rounded-md p-3 transition
              bg-white dark:bg-gray-800
              text-gray-900 dark:text-white
              border border-gray-300 dark:border-gray-700
              focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30
              focus:outline-none
            "
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="
              w-full rounded-md p-3 transition
              bg-white dark:bg-gray-800
              text-gray-900 dark:text-white
              border border-gray-300 dark:border-gray-700
              focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30
              focus:outline-none
            "
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="
              w-full font-bold py-3 px-6 rounded-md transition-colors
              bg-black text-white hover:bg-gray-800
              dark:bg-white dark:text-black dark:hover:bg-gray-200
              disabled:bg-gray-400
            "
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        {/* Status Messages */}
        {status === 'success' && (
          <p className="mt-4 text-green-600 dark:text-green-400">
            Message sent! Expect a reply from Aditya within 48 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 dark:text-red-400">
            Failed to send message. Please try again.
          </p>
        )}

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center items-center space-x-8"
        >
          <a
            href="mailto:ignite@adityajagdhane.in"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Mail size={20} />
            <span>ignite@adityajagdhane.in</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-jagdhane"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
