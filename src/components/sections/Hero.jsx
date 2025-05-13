import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { Link } from 'react-scroll';

// Array of roles for typewriter effect
const roles = ["Developer", "Designer", "Problem Solver", "Creator"];

const Hero = () => {
  const dotsContainerRef = useRef(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const type = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Faster when deleting
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(150);
        }
      } else {
        // Typing text
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        
        if (displayText.length === currentRole.length) {
          // Pause at the end of the word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    };
    
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentRoleIndex, isDeleting, typingSpeed]);

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
      for (let i = 0; i < 50; i++) {
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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/your-linkedin',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/your-github',
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6" />,
      url: 'mailto:your-email@example.com',
    },
    {
      name: 'Portfolio',
      icon: <BiCodeAlt className="w-6 h-6" />,
      url: '#projects',
    },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-1 py-10">
      {/* Floating dots background */}
      <div ref={dotsContainerRef} className="dots-bg"></div>
      
      {/* Background glow effects */}
      <div className="hero-glow top-1/4 left-1/4 opacity-20"></div>
      <div className="hero-glow bottom-1/4 right-1/4 opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-2 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-10">
          {/* Profile Image - Left side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Circle border */}
              <div className="absolute inset-0 rounded-full border-4 border-[var(--main-color)]/30 animate-pulse"></div>
              
              {/* Rotating circle */}
              <motion.div
                className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[var(--main-color)]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              
              {/* Profile image */}
              <div className="absolute inset-3 rounded-full overflow-hidden profile-image flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/50 to-[var(--gradient-end)]/50 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">Profile Photo</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content - Right side */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="md:w-3/5 text-center md:text-left"
          >
            <motion.h2 
              variants={item}
              className="text-3xl md:text-4xl font-bold mb-1"
            >
              Hi, I'm <span className="neon-text">Manohar</span>
            </motion.h2>
            
            <motion.div 
              variants={item}
              className="h-12 flex items-center mb-4"
            >
              <h3 className="text-xl md:text-2xl font-medium">
                <span className="mr-2">I'm a</span>
                <span className="neon-text relative">
                  {displayText}
                  <span className="border-r-2 border-[var(--main-color)] ml-1 animate-blink"></span>
                </span>
              </h3>
            </motion.div>
            
            <motion.p
              variants={item}
              className="text-gray-300 mb-6 text-sm md:text-base"
            >
              Crafting digital experiences with clean code and modern design. 
              Building responsive and intuitive web applications.
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-4"
            >
              <motion.div animate={floatingAnimation} className="inline-block">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="gradient-bg text-white font-medium py-2 px-4 text-sm rounded-full btn-effect relative overflow-hidden inline-flex items-center"
                >
                  View Projects
                  <BiCodeAlt className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div animate={floatingAnimation} className="inline-block" style={{ animationDelay: "0.5s" }}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="border-2 border-[var(--main-color)] text-white font-medium py-2 px-4 text-sm rounded-full btn-effect relative overflow-hidden inline-flex items-center hover:bg-[var(--main-color)]/10 transition-colors"
                >
                  Contact Me
                  <FaEnvelope className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div variants={item} className="flex justify-center md:justify-start space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--main-color)] transition-colors hover-float"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="text-[var(--main-color)] hover:text-white transition-colors cursor-pointer"
          >
            <FaArrowDown />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 