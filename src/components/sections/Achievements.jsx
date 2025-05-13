import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy className="text-yellow-500" />,
      title: "Coding Excellence",
      items: [
        "Secured Top 10% ranking on LeetCode with 250+ problems solved",
        "Achieved 5-star status on HackerRank in Problem Solving",
        "Qualified for final rounds in multiple national coding competitions"
      ]
    },
    {
      icon: <FaMedal className="text-blue-500" />,
      title: "Education & Leadership",
      items: [
        "Graduated with Honors (8.6 CGPA) in Computer Science and Engineering",
        "Led a team of 5 developers for the college technical fest project",
        "Student coordinator for college technical symposium"
      ]
    },
    {
      icon: <FaAward className="text-green-500" />,
      title: "Recognition & Hackathons",
      items: [
        "Selected among top 10 projects in university innovation fair",
        "Winner of 24-hour institutional hackathon",
        "Published technical paper in international journal"
      ]
    },
    {
      icon: <FaCertificate className="text-purple-500" />,
      title: "Certifications & Skills",
      items: [
        "Completed advanced certifications in Full Stack Development and ML",
        "Trained 50+ juniors in programming fundamentals",
        "Regular contributor to open-source projects"
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="achievements" className="py-8 md:py-12 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="hero-glow top-1/3 right-0 opacity-5"></div>
      <div className="hero-glow bottom-1/3 left-0 opacity-5"></div>
      
      <div className="container mx-auto px-2 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={item} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Achievements & Activities
            </h2>
            <div className="section-divider"></div>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base">
              Recognitions, competitions, and extracurricular activities
            </p>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={item}
                className="modern-card glass-effect p-4 hover-float"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 p-2.5 glass-effect rounded-full">{achievement.icon}</div>
                  <h3 className="text-lg font-bold gradient-text">
                    {achievement.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 