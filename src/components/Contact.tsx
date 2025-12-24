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
    <section id="contact" className="section bg-brand-gray relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            {/* Particle effect can be added here */}
        </div>
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 mb-12"
        >
          Have a project in mind? Let's collaborate!
        </motion.p>

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
            <input type="text" name="user_name" placeholder="Your Name" required className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-2 focus:ring-white/50 focus:outline-none transition" />
            <input type="email" name="user_email" placeholder="Your Email" required className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-2 focus:ring-white/50 focus:outline-none transition" />
          </div>
          <input type="text" name="subject" placeholder="Subject" required className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-2 focus:ring-white/50 focus:outline-none transition" />
          <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-2 focus:ring-white/50 focus:outline-none transition"></textarea>
          <button type="submit" disabled={status === 'sending'} className="w-full bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors disabled:bg-gray-500">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        {status === 'success' && <p className="mt-4 text-green-400">Message sent! Expect a reply from Aditya within 48 hours.</p>}
        {status === 'error' && <p className="mt-4 text-red-400">Failed to send message. Please try again.</p>}

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex justify-center items-center space-x-8"
        >
            <a href="mailto:ignite@adityajagdhane.in" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
                <span>ignite@adityajagdhane.in</span>
            </a>
            <a href="https://www.linkedin.com/in/aditya-jagdhane" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
