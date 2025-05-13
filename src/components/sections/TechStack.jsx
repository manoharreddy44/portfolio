import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaAws, FaDocker, FaBrain
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiJupyter,
  SiGooglecolab, SiTensorflow, SiKeras,
  SiScikitlearn
} from 'react-icons/si';
import SkillIcon from '../ui/SkillIcon';

const TechStack = () => {
  const dotsContainerRef = useRef(null);
  
  // Floating dots background
  useEffect(() => {
    if (dotsContainerRef.current) {
      const container = dotsContainerRef.current;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        const size = 1 + Math.random() * 2;
        const opacity = 0.2 + Math.random() * 0.4;
        const duration = 15 + Math.random() * 30;
        const delay = Math.random() * 10;
        
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
      name: 'Python', 
      icon: <FaPython className="text-[#00f7ff] text-3xl" />,
      level: 90,
      category: 'Languages'
    },
    { 
      name: 'Java', 
      icon: <FaJava className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'Languages'
    },
    { 
      name: 'React', 
      icon: <FaReact className="text-[#00f7ff] text-3xl" />,
      level: 90,
      category: 'Frontend'
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'Backend'
    },
    { 
      name: 'Express', 
      icon: <SiExpress className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'Backend'
    },
    { 
      name: 'MongoDB', 
      icon: <SiMongodb className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'Backend'
    },
    { 
      name: 'SQL', 
      icon: <FaDatabase className="text-[#00f7ff] text-3xl" />,
      level: 80,
      category: 'Backend'
    },
    { 
      name: 'TensorFlow', 
      icon: <SiTensorflow className="text-[#00f7ff] text-3xl" />,
      level: 80,
      category: 'AI/ML'
    },
    { 
      name: 'Keras', 
      icon: <SiKeras className="text-[#00f7ff] text-3xl" />,
      level: 80,
      category: 'AI/ML'
    },
    { 
      name: 'Scikit-learn', 
      icon: <SiScikitlearn className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'AI/ML'
    },
    { 
      name: 'Git', 
      icon: <FaGitAlt className="text-[#00f7ff] text-3xl" />,
      level: 85,
      category: 'DevOps'
    },
    { 
      name: 'Docker', 
      icon: <FaDocker className="text-[#00f7ff] text-3xl" />,
      level: 80,
      category: 'DevOps'
    },
    { 
      name: 'AWS', 
      icon: <FaAws className="text-[#00f7ff] text-3xl" />,
      level: 80,
      category: 'DevOps'
    },
    { 
      name: 'Jupyter', 
      icon: <SiJupyter className="text-[#00f7ff] text-3xl" />,
      level: 90,
      category: 'Tools'
    },
    { 
      name: 'Colab', 
      icon: <SiGooglecolab className="text-[#00f7ff] text-3xl" />,
      level: 90,
      category: 'Tools'
    }
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
      <div ref={dotsContainerRef} className="dots-bg"></div>
      
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
            <p className="text-gray-300 max-w-2xl mx-auto">
              Core technologies I specialize in
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center"
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