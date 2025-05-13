import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaGitAlt, FaDatabase, FaDocker, FaFigma, FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiExpress, SiTailwindcss, 
  SiGraphql, SiNextdotjs, SiFlask, SiRedux, SiPostgresql, SiFirebase 
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
      title: 'Languages',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: 90, category: 'frontend' },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: 85, category: 'frontend' },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" />, level: 90, category: 'frontend' },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-3xl" />, level: 80, category: 'frontend' },
        { name: 'Python', icon: <FaPython className="text-blue-500 text-3xl" />, level: 85, category: 'backend' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-blue-400 text-3xl" />, level: 90, category: 'frontend' },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white text-3xl" />, level: 85, category: 'frontend' },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" />, level: 85, category: 'backend' },
        { name: 'Express.js', icon: <SiExpress className="text-white text-3xl" />, level: 85, category: 'backend' },
        { name: 'Redux', icon: <SiRedux className="text-purple-600 text-3xl" />, level: 80, category: 'frontend' },
        { name: 'Flask', icon: <SiFlask className="text-white text-3xl" />, level: 75, category: 'backend' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500 text-3xl" />, level: 90, category: 'frontend' },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-600 text-3xl" />, level: 70, category: 'backend' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600 text-3xl" />, level: 85, category: 'tool' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" />, level: 85, category: 'database' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600 text-3xl" />, level: 80, category: 'database' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 text-3xl" />, level: 80, category: 'database' },
        { name: 'Docker', icon: <FaDocker className="text-blue-500 text-3xl" />, level: 70, category: 'tool' },
        { name: 'AWS', icon: <FaAws className="text-orange-400 text-3xl" />, level: 70, category: 'cloud' },
        { name: 'UI/UX', icon: <FaFigma className="text-purple-500 text-3xl" />, level: 75, category: 'design' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow effects */}
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
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Skills & Expertise
            </h2>
            <div className="section-divider"></div>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
              Here are the technologies I've been working with recently
            </p>
          </motion.div>

          <div className="space-y-16">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <motion.h3
                  variants={fadeIn}
                  className="text-2xl font-bold neon-text mb-8"
                >
                  {category.title}
                </motion.h3>
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <SkillIcon
                      key={skillIndex}
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                      category={skill.category}
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