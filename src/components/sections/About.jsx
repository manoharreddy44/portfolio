import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaSchool } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const dotsContainerRef = useRef(null);
  
  // Floating dots background
  useEffect(() => {
    if (dotsContainerRef.current) {
      // Create floating dots
      const container = dotsContainerRef.current;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      // Clear previous dots
      container.innerHTML = '';
      
      // Create new dots
      for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        // Random position
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        
        // Random size (1-3px)
        const size = 1 + Math.random() * 2;
        
        // Random opacity
        const opacity = 0.2 + Math.random() * 0.4;
        
        // Random animation duration
        const duration = 15 + Math.random() * 30;
        
        // Random animation delay
        const delay = Math.random() * 10;
        
        // Apply styles
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.opacity = opacity;
        dot.style.animationDuration = `${duration}s`;
        dot.style.animationDelay = `${delay}s`;
        
        container.appendChild(dot);
      }
    }
  }, []);

  return (
    <section id="about" className="py-8 relative overflow-hidden">
      {/* Floating dots background */}
      <div ref={dotsContainerRef} className="dots-bg"></div>
      
      {/* Background glow effects */}
      <div className="hero-glow bottom-0 left-1/4 opacity-10"></div>
      <div className="hero-glow top-1/2 right-1/4 opacity-10"></div>
      
      <div className="container mx-auto px-2 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="text-[#00f7ff]">About</span> <span className="text-white">Me</span>
            </h2>
            
            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
              I am Karthik, a passionate Full-Stack Developer, AI/ML enthusiast, and UI/UX designer. I thrive on 
              building scalable web applications and exploring the latest technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Education Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0a141f] rounded-md overflow-hidden border border-gray-800"
            >
              <div className="flex flex-col items-center p-5">
                <div className="w-14 h-14 rounded-full bg-[rgba(0,247,255,0.1)] flex items-center justify-center mb-3">
                  <FaGraduationCap className="text-[#00f7ff] text-xl" />
                </div>
                
                <h3 className="font-bold text-lg text-white text-center">
                  Bachelor of CSE
                </h3>
                <h3 className="font-bold text-lg text-white text-center mb-1.5">
                  [AI/ML]
                </h3>
                
                <p className="text-center text-gray-400 mb-1.5 text-sm">
                  Gayatri Vidya Parishad College of Engineering
                </p>
                
                <p className="text-[#00f7ff] text-center text-sm">
                  9.4 CGPA | 2023 - 2026
                </p>
              </div>
            </motion.div>

            {/* Education Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0a141f] rounded-md overflow-hidden border border-gray-800"
            >
              <div className="flex flex-col items-center p-5">
                <div className="w-14 h-14 rounded-full bg-[rgba(0,247,255,0.1)] flex items-center justify-center mb-3">
                  <FaLaptopCode className="text-[#00f7ff] text-xl" />
                </div>
                
                <h3 className="font-bold text-lg text-white text-center">
                  Diploma in Computer
                </h3>
                <h3 className="font-bold text-lg text-white text-center mb-1.5">
                  Engineering
                </h3>
                
                <p className="text-center text-gray-400 mb-1.5 text-sm">
                  A.A.N.M AND V.V.R.S.R Polytechnic
                </p>
                
                <p className="text-[#00f7ff] text-center text-sm">
                  93.91% | 2020 - 2023
                </p>
              </div>
            </motion.div>

            {/* Education Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0a141f] rounded-md overflow-hidden border border-gray-800"
            >
              <div className="flex flex-col items-center p-5">
                <div className="w-14 h-14 rounded-full bg-[rgba(0,247,255,0.1)] flex items-center justify-center mb-3">
                  <FaSchool className="text-[#00f7ff] text-xl" />
                </div>
                
                <h3 className="font-bold text-lg text-white text-center">
                  Board of Secondary
                </h3>
                <h3 className="font-bold text-lg text-white text-center mb-1.5">
                  Education
                </h3>
                
                <p className="text-center text-gray-400 mb-1.5 text-sm">
                  Andhra Nalanda Municipal High School
                </p>
                
                <p className="text-[#00f7ff] text-center text-sm">
                  9.8 GPA | 2019 - 2020
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 