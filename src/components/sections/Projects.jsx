import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      title: "HireVista",
      description: "Recruitment analysis platform with ML-powered candidate screening and evaluation",
      technologies: ["React", "Tailwind", "Machine Learning"],
      imageUrl: "/hirevista.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive UI",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/weather-app.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Abiruchulu Food Delivery",
      description: "A full-stack food delivery platform with real-time order tracking and payment integration",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/food-delivery.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Brain Tumor Detection",
      description: "AI-powered brain tumor detection system using deep learning models",
      technologies: ["React", "Python", "Flask"],
      imageUrl: "/brain-tumor.jpg",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  // Navigate to previous or next project
  const navigate = (direction) => {
    if (direction === 'left') {
      setActiveIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
    } else {
      setActiveIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    }
  };

  const dotsContainerRef = useRef(null);
  useEffect(() => {
    const container = dotsContainerRef.current;
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 25; i++) {
      const dot = document.createElement('div');
      dot.className = 'absolute rounded-full bg-white opacity-20 animate-pulse';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.width = dot.style.height = `${1 + Math.random() * 2}px`;
      container.appendChild(dot);
    }
  }, []);

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
      "Flask": "bg-[#000000]/10 text-gray-300 border-gray-600/30"
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs border ${techColors[name] || "bg-[#00f7ff]/10 text-[#00f7ff] border-[#00f7ff]/30"}`}>
        {name}
      </span>
    );
  };

  // Determine which projects to display
  const getVisibleProjects = () => {
    const result = [];
    
    // Add the previous project (or the last one if at the beginning)
    const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    result.push({ ...projects[prevIndex], position: 'left' });
    
    // Add the current project
    result.push({ ...projects[activeIndex], position: 'center' });
    
    // Add the next project (or the first one if at the end)
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    result.push({ ...projects[nextIndex], position: 'right' });
    
    return result;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="relative bg-[#040812] py-8 px-1 overflow-hidden">
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

        {/* Carousel of 3 visible projects */}
        <div className="relative">
          <div className="flex justify-center items-center min-h-[320px]">
            {visibleProjects.map((project, index) => {
              const isCenter = project.position === 'center';
              const isSide = project.position === 'left' || project.position === 'right';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.6,
                    scale: isCenter ? 1 : 0.85,
                    x: project.position === 'left' ? -180 : project.position === 'right' ? 180 : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute w-[250px] bg-[#060d1a]/70 rounded-lg border border-[#1e3a5f] overflow-hidden shadow-md hover:shadow-cyan-500/20 transition-all ${
                    isCenter ? 'z-10' : 'z-0'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent opacity-90"></div>
                    </div>
                    <div className="p-2 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base font-bold text-white">{project.title}</h3>
                        <FaExternalLinkAlt className="text-gray-400" size={12} />
                      </div>
                      <p className="text-xs text-gray-400 mb-2 flex-grow line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <TechBadge key={i} name={tech} />
                        ))}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 py-0.5 px-2 bg-[#00f7ff]/10 text-[#00f7ff] border border-[#00f7ff]/30 rounded-full text-xs hover:bg-[#00f7ff]/20 transition"
                        >
                          <FaExternalLinkAlt size={8} /> Live
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 py-0.5 px-2 bg-gray-800/60 text-white rounded-full text-xs hover:bg-gray-700 transition"
                        >
                          <FaGithub size={8} /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => navigate('left')}
              className="p-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-800/10 transition"
              aria-label="Previous Project"
            >
              <FaArrowLeft size={12} />
            </button>
            <button
              onClick={() => navigate('right')}
              className="p-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-800/10 transition"
              aria-label="Next Project"
            >
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
