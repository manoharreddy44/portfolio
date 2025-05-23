import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Add dark mode class permanently
    document.documentElement.classList.add('dark');
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white transition-colors duration-300 relative">
      {/* Network background overlay */}
      <div className="network-bg"></div>
      
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-[var(--dark-bg)] z-50"
          >
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 1.5, ease: "linear", repeat: Infinity },
                    scale: { duration: 1, repeat: Infinity }
                  }}
                  className="absolute inset-0 rounded-full border-t-4 border-[var(--main-color)]"
                ></motion.div>
                <motion.div 
                  animate={{ 
                    rotate: -360,
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                  className="absolute inset-2 rounded-full border-t-4 border-[var(--accent-color)]"
                ></motion.div>
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                  className="absolute inset-4 rounded-full border-t-4 border-[var(--main-color)]"
                ></motion.div>
              </div>
              <motion.h2 
                className="text-xl font-bold gradient-text"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading Portfolio
                <span className="loading-dots">...</span>
              </motion.h2>
              <motion.div
                className="w-48 h-1 bg-gray-800 rounded-full mt-4 mx-auto overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-[var(--main-color)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: loading ? 2 : 0 }}
        className="relative z-10"
      >
        <Navbar />
        <main className="space-y-2 px-1">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />

        {/* Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 rounded-full bg-[var(--main-color)]/20 border border-[var(--main-color)]/30 text-[var(--main-color)] hover:bg-[var(--main-color)]/30 transition-all duration-300 z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
