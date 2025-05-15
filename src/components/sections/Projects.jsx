import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (imageUrl) => {
    setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
  };

  const projects = [
    {
      title: "Interview Prep Application",
      description: "AI-powered interview preparation tool offering real-time practice across technical, HR, and GD rounds.",
      technologies: ["React", "Tailwind", "MERN", "OpenAI API", "JWT"],
      imageUrl: "/images/interview.jpg.jpg",
      liveUrl: "https://interviewprep-app.onrender.com",
      githubUrl: "https://github.com/manoharreddy44/InterviewPrep-app",
    },
    {
      title: "Real-Time Chat Application",
      description: "A responsive chat app supporting real-time messaging and user presence via WebSockets.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Tailwind", "Zustand"],
      imageUrl: "/images/chatt.jpg.jpg",
      liveUrl: "https://mern-chat-app-ri0a.onrender.com/login",
      githubUrl: "https://github.com/manoharreddy44/mern-chat-app",
    },
    {
      title: "Weather App",
      description: "A responsive weather app that displays real-time updates for any city including temperature, wind speed, humidity, and weather icons that adapt to current conditions.",
      technologies: ["React.js", "Tailwind CSS", "OpenWeatherMap API"],
      imageUrl: "/images/weather.jpg.jpg",
      liveUrl: "https://weather-app-jet-six-64.vercel.app/",
      githubUrl: "https://github.com/manoharreddy44/weather_app",
    },
    {
      title: "MERN-Estate",
      description: "A full-featured real estate marketplace application with secure login, listings, and user management.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Firebase", "Google OAuth"],
      imageUrl: "/images/mernEstate.jpg.jpg",
      liveUrl: "https://mern-estate-xooi.onrender.com/",
      githubUrl: "https://github.com/manoharreddy44/mern-estate",
    },
    {
      title: "Authentication System",
      description: "A secure authentication system with sign-in, sign-up, and protected routes.",
      technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
      imageUrl: "/images/auth.jpg.jpg",
      liveUrl: "https://auth-adsa.onrender.com/",
      githubUrl: "https://github.com/manoharreddy44/Auth",
    },
    {
      title: "Twitter Sentiment & Market Analysis",
      description: "Real-time sentiment analysis of tweets linked to stock market performance using ML.",
      technologies: ["Python", "TextBlob", "SQLite", "yFinance", "Matplotlib"],
      imageUrl: "/images/sentimental.jpg.jpg",
      liveUrl: null,
      githubUrl: "https://github.com/manoharreddy44/sentimental_analysis",
    },
    {
      title: "Auto ML Model Evaluator",
      description: "Advanced ML model evaluation system that automatically assesses 7 core algorithms across regression and classification tasks, achieving 95%+ accuracy on 1000+ samples with 80% reduced evaluation time.",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Google Colab"],
      imageUrl: "/images/loan.jpg.jpg",
      liveUrl: null,
      githubUrl: "https://colab.research.google.com/drive/19CdB-xgyo8noTXQyKvbu-s13gZmDQA7g?usp=sharing",
    },
    {
      title: "Expense Management App",
      description: "A full-stack expense management app with real-time tracking, secure authentication, and task automation via cron jobs.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "GraphQL", "Apollo Client"],
      imageUrl: "/images/expense.jpg.jpg",
      liveUrl: "https://graphql-course-y0ou.onrender.com/",
      githubUrl: "https://github.com/manoharreddy44/Graphql-course",
    }
  ];

  const dotsContainerRef = useRef(null);
  useEffect(() => {
    const container = dotsContainerRef.current;
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement('div');
      dot.className = 'absolute rounded-full bg-white opacity-10 animate-pulse';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.width = dot.style.height = `${1 + Math.random() * 2}px`;
      container.appendChild(dot);
    }
  }, []);

  const navigate = (dir) => {
    setActiveIndex((prev) =>
      dir === 'left'
        ? (prev === 0 ? projects.length - 1 : prev - 1)
        : (prev + 1) % projects.length
    );
  };

  const getVisibleProjects = () => {
    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    const nextIndex = (activeIndex + 1) % projects.length;
    return [
      { ...projects[prevIndex], position: 'left' },
      { ...projects[activeIndex], position: 'center' },
      { ...projects[nextIndex], position: 'right' },
    ];
  };

  const TechBadge = ({ name }) => {
    const techColors = {
      "React": "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/30",
      "Tailwind": "bg-[#38B2AC]/10 text-[#38B2AC] border-[#38B2AC]/30",
      "Machine Learning": "bg-[#FF6B6B]/10 text-[#FF6B6B] border-[#FF6B6B]/30",
      "HTML": "bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/30",
      "CSS": "bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/30",
      "JavaScript": "bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/30",
      "Node.js": "bg-[#339933]/10 text-[#339933] border-[#339933]/30",
      "MongoDB": "bg-[#47A248]/10 text-[#47A248] border-[#47A248]/30",
      "Python": "bg-[#3776AB]/10 text-[#3776AB] border-[#3776AB]/30",
      "Flask": "bg-[#000000]/10 text-gray-300 border-gray-600/30",
    };
    return (
      <span className={`px-3 py-1 text-xs border rounded-full ${techColors[name] || "bg-[#00f7ff]/10 text-[#00f7ff] border-[#00f7ff]/30"}`}>
        {name}
      </span>
    );
  };

  return (
    <section id="projects" className="relative bg-[#040812] py-8 px-4 overflow-hidden">
      <div ref={dotsContainerRef} className="absolute inset-0 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-[#00f7ff]">My</span> <span className="text-white">Projects</span>
        </motion.h2>
        
        <div className="text-center mb-8">
          <p className="text-gray-400">
            <span className="text-[#00f7ff]">{activeIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{projects.length}</span>
          </p>
        </div>

        {/* Project navigation dots */}
        <div className="flex justify-center gap-2 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-[#00f7ff] w-6' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel with exactly 3 cards */}
        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          {getVisibleProjects().map((project, i) => {
            const isCenter = project.position === 'center';
            return (
              <motion.div
                key={i}
                animate={{
                  scale: isCenter ? 1 : [0.92, 0.92],
                  opacity: isCenter ? 1 : [0.6, 0.6],
                }}
                transition={{ duration: 0.4 }}
                className="w-[280px] sm:w-[300px] md:w-[360px] lg:w-[380px] bg-[#060d1a]/80 border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    {!loadedImages[project.imageUrl] && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                    )}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter brightness-90 hover:brightness-100 ${
                        loadedImages[project.imageUrl] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(project.imageUrl)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  </div>
                  <div className="p-3 sm:p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2 group">
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#00f7ff] transition-colors">{project.title}</h3>
                      <FaExternalLinkAlt className="text-gray-400 group-hover:text-[#00f7ff] transition-colors" size={12} />
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <TechBadge key={i} name={tech} />
                      ))}
                    </div>
                    <div className="flex gap-2 sm:gap-3 mt-auto">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm border border-[#00f7ff]/30 text-[#00f7ff] bg-[#00f7ff]/10 hover:bg-[#00f7ff]/20 transition"
                        >
                          <FaExternalLinkAlt size={10} /> Live
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm border border-gray-600 text-gray-500 bg-gray-800/50 cursor-not-allowed opacity-50"
                        >
                          <FaExternalLinkAlt size={10} /> Live
                        </span>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm bg-gray-800 text-white hover:bg-gray-700 transition"
                      >
                        <FaGithub size={10} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('left')}
            className="p-2 sm:p-3 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-800/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <FaArrowLeft size={14} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('right')}
            className="p-2 sm:p-3 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-800/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <FaArrowRight size={14} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
