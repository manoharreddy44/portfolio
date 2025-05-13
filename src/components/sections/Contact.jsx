import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaCode } from 'react-icons/fa';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-green-500" />,
      title: 'Phone',
      content: '+91 9392533640', // Replace with your actual phone number
      link: 'tel:+919392533640', // Replace with your actual phone number
    },
    {
      icon: <FaEnvelope className="text-blue-500" />,
      title: 'Email',
      content: 'koppala.manoharreddy@gmail.com',
      link: 'mailto:koppala.manoharreddy@gmail.com',
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      title: 'LinkedIn',
      content: 'Connect with me',
      link: 'https://www.linkedin.com/in/manohar-reddyk/',
    },
    {
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
      title: 'GitHub',
      content: 'See my projects',
      link: 'https://github.com/manoharreddy44',
    },
    {
      icon: <FaCode className="text-cyan-500" />,
      title: 'Codolio',
      content: 'View my coding profile',
      link: 'https://codolio.com/profile/Manohar123',
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      title: 'Location',
      content: 'Hyderabad, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="hero-glow top-1/4 left-0 opacity-5"></div>
      <div className="hero-glow bottom-1/4 right-0 opacity-5"></div>

      <div className="container mx-auto px-2 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              Contact Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Available for freelance work and exciting opportunities
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="modern-card glass-effect p-4">
              <h3 className="text-lg font-bold gradient-text mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center hover-float"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-base p-2 glass-effect rounded-full mr-2 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-xs">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:gradient-text transition-colors text-xs"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 text-xs">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-3 glass-effect rounded-lg relative overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-2xl"></div>
                <div className="relative">
                  <h4 className="font-medium text-sm mb-2 gradient-text">Let's Connect</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 text-xs">
                    Open to freelance opportunities, collaborations, and interesting projects.
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href="https://www.linkedin.com/in/manohar-reddyk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 glass-effect rounded-full hover-float"
                    >
                      <FaLinkedin className="text-blue-600" size={16} />
                    </a>
                    <a
                      href="https://github.com/manoharreddy44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 glass-effect rounded-full hover-float"
                    >
                      <FaGithub className="text-gray-800 dark:text-white" size={16} />
                    </a>
                    <a
                      href="https://codolio.com/profile/Manohar123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 glass-effect rounded-full hover-float"
                    >
                      <FaCode className="text-cyan-500" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
