import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PigszarStudios() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white font-sans animate-pulse-slow">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-6 flex justify-between items-center shadow-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 sticky top-0 z-50 animate-glow"
      >
        <h1 className="text-3xl font-extrabold text-black drop-shadow-xl">Pigszar Studios</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-white transition-colors font-bold">About</a>
          <a href="#games" className="hover:text-white transition-colors font-bold">Games</a>
          <a href="#contact" className="hover:text-white transition-colors font-bold">Contact</a>
        </nav>
      </motion.header>

      <main className="px-6 py-20 backdrop-blur-sm">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-6xl font-black mb-4 text-white animate-textglow">✨Crafting Worlds, One Pixel at a Time✨</h2>
          <p className="text-xl text-yellow-200 max-w-3xl mx-auto italic animate-fade-in">
            Pigszar Studios is an interdimensional indie game forge—fuelled by dopamine, dreams, and deep space pixels.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full shadow-neon hover:bg-yellow-300 transition-all duration-300 animate-wiggle">
            GOON INTO OUR UNIVERSE
          </button>
        </motion.section>

        <motion.section
          id="games"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-purple-700 via-black to-indigo-800 rounded-3xl shadow-2xl p-6 border-4 border-yellow-300 animate-buzz hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-yellow-300 animate-glimmer">⚡ Game Title {i} ⚡</h3>
              <p className="text-white">A psychedelic descent into fun. Unleash chaos, collect stars, vibe eternally.</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-4xl mx-auto backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-yellow-300 mb-4 animate-zoom">Who TF Are We</h2>
          <p className="text-white text-xl animate-fade-in">
            A ragtag collective of sentient AI and cosmic artists, brewing the next big brainrot masterpieces right from our neon command bunker.
          </p>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center animate-pulse"
        >
          <h2 className="text-4xl font-bold text-yellow-300 mb-4">📡 Beam Us A Message</h2>
          <p className="text-white">
            Email us at <a href="mailto:contact@pigszar.com" className="text-yellow-200 hover:underline">contact@pigszar.com</a>
          </p>
        </motion.section>
      </main>

      <footer className="p-6 text-center text-yellow-500 text-sm mt-20 animate-glow">
        &copy; {new Date().getFullYear()} Pigszar Studios. Keep goonin'. All rights reserved.
      </footer>

      <style jsx>{`
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        .animate-wiggle {
          animation: wiggle 1.2s infinite;
        }
        .animate-buzz {
          animation: buzz 0.15s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 10s infinite;
        }
        .animate-textglow {
          animation: textglow 3s ease-in-out infinite;
        }
        .animate-glimmer {
          animation: glimmer 1.5s ease-in-out infinite alternate;
        }
        .animate-zoom {
          animation: zoom 1s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 2s ease forwards;
        }

        @keyframes glow {
          from { text-shadow: 0 0 10px #fef08a, 0 0 20px #facc15; }
          to { text-shadow: 0 0 20px #fef08a, 0 0 40px #facc15; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes buzz {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        @keyframes textglow {
          0% { text-shadow: 0 0 5px white; }
          50% { text-shadow: 0 0 20px #facc15; }
          100% { text-shadow: 0 0 5px white; }
        }
        @keyframes glimmer {
          from { opacity: 1; }
          to { opacity: 0.5; }
        }
        @keyframes zoom {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}