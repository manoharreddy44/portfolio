import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "HireVista",
      description: "ML-powered recruitment analysis platform.",
      technologies: ["React", "Tailwind", "Machine Learning"],
      imageUrl: "/hirevista.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting app.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/weather-app.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Abiruchulu Food Delivery",
      description: "Full-stack food ordering platform.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/food-delivery.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Brain Tumor Detection",
      description: "AI-based tumor detection model.",
      technologies: ["Python", "Flask", "Deep Learning"],
      imageUrl: "/brain-tumor.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
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

        {/* Carousel with exactly 3 cards */}
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {getVisibleProjects().map((project, i) => {
            const isCenter = project.position === 'center';
            return (
              <motion.div
                key={i}
                animate={{
                  scale: isCenter ? 1 : 0.92,
                  opacity: isCenter ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
                className="w-[300px] md:w-[360px] lg:w-[380px] bg-[#060d1a]/80 border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <FaExternalLinkAlt className="text-gray-400" size={14} />
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <TechBadge key={i} name={tech} />
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm border border-[#00f7ff]/30 text-[#00f7ff] bg-[#00f7ff]/10 hover:bg-[#00f7ff]/20 transition"
                      >
                        <FaExternalLinkAlt size={12} /> Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm bg-gray-800 text-white hover:bg-gray-700 transition"
                      >
                        <FaGithub size={12} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => navigate('left')}
            className="p-3 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-800/10 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => navigate('right')}
            className="p-3 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-800/10 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
