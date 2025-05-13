import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ 
  name, 
  icon, 
  level = 0, // 0-100
  category 
}) => {
  // Calculate the border width based on the skill level
  const borderWidth = Math.max(1, Math.min(2, Math.floor(level / 30)));
  
  // Color based on skill level
  const getHueFromLevel = (level) => {
    // From cyan to blue as level increases
    return `hsl(${180 + (level * 0.4)}, 100%, 60%)`;
  };
  
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.6 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  // Format the name to be displayed
  const displayName = name.length > 10 ? `${name.substring(0, 8)}...` : name;

  return (
    <motion.div
      className="relative"
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "50px" }}
    >
      <div className="flex flex-col items-center">
        <div 
          className="w-[70px] h-[70px] flex items-center justify-center bg-[#060d1a]/70 rounded-lg border border-[#1e3a5f] overflow-hidden"
          style={{
            boxShadow: level > 70 ? '0 0 8px rgba(0, 247, 255, 0.2)' : 'none'
          }}
        >
          {icon}
        </div>
        <p className="text-gray-300 text-center text-xs mt-1 w-full">
          {displayName}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillIcon; 