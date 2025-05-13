import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMedal,
  FaStar,
  FaUserFriends,
  FaRunning,
  FaAward,
} from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaMedal className="text-yellow-400" />,
      title: "Winner",
      detail: "BidTheCode Coding Competition, VIT-AP (1st/50, 2025)",
    },
    {
      icon: <FaUserFriends className="text-blue-400" />,
      title: "Captain, Eagles Sports Group",
      detail: "Led 250+ members in training, competitions, mentorship",
    },
    {
      icon: <FaUserFriends className="text-purple-400" />,
      title: "Math Group Leader",
      detail: "Peer mentoring, reviewed assignments, workshops",
    },
    {
      icon: <FaRunning className="text-pink-400" />,
      title: "State-Level Athlete",
      detail: "1500m, 800m, and 5km walk competitions",
    },
    {
      icon: <FaAward className="text-indigo-400" />,
      title: "Performer",
      detail: "Acted in skits and drama for Republic Day & Jubilee",
    },
    {
      icon: <FaMedal className="text-orange-400" />,
      title: "Finalist",
      detail: "VIT Mathematical Meet (4th/200, 2020)",
    },
  ];

  return (
    <section id="achievements" className="bg-[#040812] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-10"
        >
          <span className="text-[#00f7ff]">Achievements</span> & Activities
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-5 text-left hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-3">
                <div className="text-xl p-2 bg-white/10 rounded-full mr-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
