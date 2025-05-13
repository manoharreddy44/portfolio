import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaDocker, FaAws, FaDatabase
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiJupyter, 
  SiGooglecolab, SiScikitlearn, SiTensorflow,
  SiKeras
} from 'react-icons/si';
import SkillIcon from '../ui/SkillIcon';

const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython className="text-blue-400 text-3xl" />, level: 90 },
        { name: 'Java', icon: <FaJava className="text-orange-500 text-3xl" />, level: 85 },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" />, level: 85 },
        { name: 'SQL', icon: <FaDatabase className="text-blue-500 text-3xl" />, level: 80 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400 text-3xl" />, level: 90 },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" />, level: 85 },
        { name: 'Express.js', icon: <SiExpress className="text-gray-200 text-3xl" />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" />, level: 85 },
      ],
    },
    {
      title: 'AI/ML Tools',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500 text-3xl" />, level: 80 },
        { name: 'Keras', icon: <SiKeras className="text-red-500 text-3xl" />, level: 80 },
        { name: 'Scikit-learn', icon: <SiScikitlearn className="text-blue-500 text-3xl" />, level: 85 },
        { name: 'Jupyter', icon: <SiJupyter className="text-orange-400 text-3xl" />, level: 90 },
        { name: 'Google Colab', icon: <SiGooglecolab className="text-yellow-400 text-3xl" />, level: 90 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600 text-3xl" />, level: 85 },
        { name: 'Docker', icon: <FaDocker className="text-blue-500 text-3xl" />, level: 80 },
        { name: 'AWS', icon: <FaAws className="text-orange-400 text-3xl" />, level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="hero-glow top-0 right-0 opacity-10"></div>
      <div className="hero-glow bottom-0 left-0 opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#00f7ff]">My</span> <span className="text-white">Skills</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="space-y-16">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <motion.h3
                  variants={fadeIn}
                  className="text-2xl font-bold text-[#00f7ff] mb-8"
                >
                  {category.title}
                </motion.h3>
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <SkillIcon
                      key={skillIndex}
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                    />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
