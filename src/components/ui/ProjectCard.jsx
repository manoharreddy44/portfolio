import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectCard = ({ 
  title, 
  description, 
  longDescription,
  technologies, 
  imageUrl = '/project-placeholder.jpg',
  liveUrl, 
  githubUrl,
  direction = 'left',  // 'left' or 'right' for alternating layout
  customHeight = false, // Flag for taller cards in the carousel
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 30px rgba(0, 247, 255, 0.2)",
      border: "1px solid rgba(0, 247, 255, 0.5)",
      transition: {
        duration: 0.3,
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.2 }}
        className={`bg-[#0a141f] rounded-md overflow-hidden border border-gray-800 cursor-pointer ${
          customHeight ? 'h-[480px] flex flex-col' : ''
        }`}
        onClick={openModal}
      >
        <div className={`relative ${customHeight ? 'h-64' : 'h-48'} overflow-hidden`}>
          {imageUrl && (
            <motion.img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover project-image"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,14,23,0.9)] to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap gap-1">
              {technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="bg-[rgba(0,247,255,0.1)] px-2 py-1 rounded text-xs text-[#00f7ff] border border-[rgba(0,247,255,0.3)]">
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="bg-[rgba(0,247,255,0.1)] px-2 py-1 rounded text-xs text-[#00f7ff] border border-[rgba(0,247,255,0.3)]">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className={`p-5 ${customHeight ? 'flex-grow flex flex-col' : ''}`}>
          <p className={`text-gray-400 text-sm ${customHeight ? 'mb-6 flex-grow' : 'line-clamp-3 mb-4'}`}>
            {description}
          </p>
          
          <div className={`flex justify-between items-center ${customHeight ? 'mt-auto' : ''}`}>
            <div>
              <motion.a
                className="text-sm text-[#00f7ff] hover:underline focus:outline-none inline-flex items-center"
                whileHover={{ x: 3 }}
                onClick={(e) => {
                  e.stopPropagation();
                  openModal();
                }}
              >
                Live
                <FaExternalLinkAlt className="ml-1" size={10} />
              </motion.a>
            </div>
            <div>
              <motion.a
                className="text-sm text-white hover:underline focus:outline-none inline-flex items-center"
                whileHover={{ x: 3 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubUrl, '_blank');
                }}
              >
                Code
                <FaGithub className="ml-1" size={10} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          ></motion.div>
          
          <motion.div 
            className="z-10 w-full max-w-3xl max-h-[90vh] overflow-auto glass-effect rounded-lg relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-[var(--darker-bg)] border-b border-[var(--main-color)]/20">
              <h3 className="text-xl font-bold neon-text">{title}</h3>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-[rgba(0,247,255,0.1)] text-gray-400 hover:text-[var(--main-color)] transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="p-6">
              {imageUrl && (
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img src={imageUrl} alt={title} className="w-full object-cover" />
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Description</h4>
                <p className="text-gray-300">
                  {longDescription || description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-effect px-4 py-2 rounded-md border border-[var(--main-color)]/50 text-[var(--main-color)] hover:bg-[rgba(0,247,255,0.1)] transition-colors"
                  >
                    <FaGithub className="inline mr-2" /> GitHub
                  </a>
                )}
                
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-effect px-4 py-2 rounded-md gradient-bg text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="inline mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard; 