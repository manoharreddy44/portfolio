import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaSchool, FaCode } from 'react-icons/fa';

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

  const timeline = [
    {
      year: "2022-2026",
      title: "B.Tech in Computer Science",
      subtitle: "VIT-AP University",
      icon: <FaGraduationCap />,
      details: "CGPA: 9.24",
      color: "cyan"
    },
    {
      year: "2024",
      title: "Full Stack Development",
      subtitle: "Self-Learning & Projects",
      icon: <FaCode />,
      details: "Built multiple web applications using MERN stack",
      color: "blue"
    },
    {
      year: "2023",
      title: "Machine Learning",
      subtitle: "Coursework & Projects",
      icon: <FaLaptopCode />,
      details: "Implemented various ML algorithms and models",
      color: "purple"
    }
  ];

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
              I am Manohar, a passionate Full-Stack Developer, AI/ML enthusiast, and problem solver. I thrive on 
              building efficient, scalable applications and exploring the frontier of technology with curiosity and commitment.
            </p>
          </motion.div>

          {/* Timeline Section */}
          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[var(--main-color)]/50 to-transparent"></div>
            
            {/* Timeline items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-[#0a141f] p-4 rounded-lg border border-gray-800 hover:border-[var(--main-color)]/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-${item.color}-400`}>{item.icon}</span>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{item.subtitle}</p>
                    <p className="text-[var(--main-color)] text-xs">{item.details}</p>
                  </div>
                </div>

                {/* Year bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a141f] border-4 border-[var(--main-color)]/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-[var(--main-color)]">
                    {item.year.split('-')[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

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
                  B.Tech in Computer
                </h3>
                <h3 className="font-bold text-lg text-white text-center mb-1.5">
                  Science and Engineering
                </h3>
                
                <p className="text-center text-gray-400 mb-1.5 text-sm">
                  VIT-AP University, Amaravati
                </p>
                
                <p className="text-[#00f7ff] text-center text-sm">
                  9.24 CGPA | 2022 - 2026
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
                  Board of Intermediate
                </h3>
                <h3 className="font-bold text-lg text-white text-center mb-1.5">
                  Education (MPC)
                </h3>
                
                <p className="text-center text-gray-400 mb-1.5 text-sm">
                  Sri Chaitanya Junior College, Vijayawada
                </p>
                
                <p className="text-[#00f7ff] text-center text-sm">
                  9.79 GPA | 2020 - 2022
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
                  Indian School Certificate
                </h3>
                <h3 className="font-bold text-lg text-white text-center mb-1.5">
                  Examinations
                </h3>
                
                <p className="text-center text-gray-400 mb-1.5 text-sm">
                  Emmaus Swiss High School, Palamaner
                </p>
                
                <p className="text-[#00f7ff] text-center text-sm">
                  9.2 CGPA | 2019 - 2020
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