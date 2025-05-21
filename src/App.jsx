import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PigszarStudios() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-6 flex justify-between items-center shadow-xl bg-yellow-500 sticky top-0 z-50"
      >
        <h1 className="text-2xl font-bold text-black">Pigszar Studios</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#games" className="hover:text-black transition-colors">Games</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </nav>
      </motion.header>

      <main className="px-6 py-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-white">Crafting Worlds, One Pixel at a Time</h2>
          <p className="text-lg text-yellow-300 max-w-2xl mx-auto">
            Pigszar Studios is an indie game development company focused on immersive storytelling, innovative gameplay, and unique art styles.
          </p>
          <button className="mt-6 px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-xl transition">
            Explore Our Games
          </button>
        </motion.section>

        <motion.section
          id="games"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="bg-zinc-900 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Game Title {i}</h3>
              <p className="text-white">Short description of the game with exciting features and aesthetic.</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-yellow-300 mb-4">Who We Are</h2>
          <p className="text-white text-lg">
            Based in a creative space full of imagination and code, Pigszar Studios is built by passionate developers and artists who love telling stories through games.
          </p>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-yellow-300 mb-4">Get In Touch</h2>
          <p className="text-white">
            Email us at <a href="mailto:contact@pigszar.com" className="text-yellow-300 hover:underline">contact@pigszar.com</a>
          </p>
        </motion.section>
      </main>

      <footer className="p-6 text-center text-yellow-600 text-sm mt-20">
        &copy; {new Date().getFullYear()} Pigszar Studios. All rights reserved.
      </footer>
    </div>
  );
}
