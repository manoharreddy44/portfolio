import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaReact, FaNodeJs, FaDatabase,
  FaCss3Alt, FaGitAlt, FaFigma, FaServer, FaLaptopCode,
  FaRobot, FaCode, FaMicrochip, FaBrain
} from 'react-icons/fa';
import SkillIcon from '../ui/SkillIcon';

const TechStack = () => {
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

  const technologies = [
    { 
      name: 'ML', 
      icon: <FaBrain className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'AI'
    },
    { 
      name: 'AI', 
      icon: <FaRobot className="text-[#00f7ff] text-3xl" />,
      level: 80,
      category: 'AI'
    },
    { 
      name: 'Java', 
      icon: <FaJava className="text-[#00f7ff] text-3xl" />,
      level: 90,
      category: 'Languages'
    },
    { 
      name: 'Python', 
      icon: <FaPython className="text-[#00f7ff] text-3xl" />,
      level: 95,
      category: 'Languages'
    },
    { 
      name: 'Deep Learn', 
      icon: <FaMicrochip className="text-[#00f7ff] text-3xl" />,
      level: 75,
      category: 'AI'
    },
    { 
      name: 'React', 
      icon: <FaReact className="text-[#00f7ff] text-3xl" />,
      level: 90,
      category: 'Frontend'
    },
    { 
      name: 'TailwindCSS', 
      icon: <FaCss3Alt className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'Frontend'
    },
    { 
      name: 'MongoDB', 
      icon: <FaDatabase className="text-[#00f7ff] text-3xl" />,
      level: 80,
      category: 'Backend'
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'Backend'
    },
    { 
      name: 'Frontend', 
      icon: <FaCode className="text-[#00f7ff] text-3xl" />,
      level: 90,
      category: 'Frontend'
    },
    { 
      name: 'Git', 
      icon: <FaGitAlt className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'Tools'
    },
    { 
      name: 'Figma', 
      icon: <FaFigma className="text-[#00f7ff] text-3xl" />,
      level: 75,
      category: 'Tools'
    },
    { 
      name: 'Express', 
      icon: <FaServer className="text-[#00f7ff] text-3xl" />,
      level: 80,
      category: 'Backend'
    },
    { 
      name: 'Jupyter', 
      icon: <FaLaptopCode className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'Tools'
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="techstack" className="py-8 relative overflow-hidden bg-gradient-to-b from-[#060b13] to-[#0a141f]">
      {/* Floating dots background */}
      <div ref={dotsContainerRef} className="dots-bg"></div>
      
      {/* Background glow effects */}
      <div className="hero-glow bottom-0 left-1/4 opacity-10"></div>
      <div className="hero-glow top-1/2 right-1/4 opacity-10"></div>
      
      <div className="container mx-auto px-2 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#00f7ff]">Tech</span> <span className="text-white">Stack</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center"
          >
            {technologies.map((tech, index) => (
              <SkillIcon
                key={index}
                name={tech.name}
                icon={tech.icon}
                level={tech.level}
                category={tech.category}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 