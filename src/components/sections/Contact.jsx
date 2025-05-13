import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // For EmailJS integration (you need to set up an EmailJS account and get your service_id, template_id, and user_id)
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_USER_ID' // Replace with your user ID
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          setSubmitStatus({
            success: true,
            message: 'Your message has been sent successfully!',
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus({
            success: false,
            message: 'Oops! Something went wrong. Please try again later.',
          });
          console.error('Email sending failed:', error);
        }
      );
  };

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
      icon: <FaEnvelope className="text-blue-500" />,
      title: 'Email',
      content: 'koppala.manoharreddy@gmail.com',
      link: 'mailto:koppala.manoharreddy@gmail.com',
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      title: 'LinkedIn',
      content: 'Connect with me',
      link: 'https://www.linkedin.com/in/your-linkedin',
    },
    {
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
      title: 'GitHub',
      content: 'See my projects',
      link: 'https://github.com/your-github',
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      title: 'Location',
      content: 'Hyderabad, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-8 md:py-12 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="hero-glow top-1/4 left-0 opacity-5"></div>
      <div className="hero-glow bottom-1/4 right-0 opacity-5"></div>
      
      <div className="container mx-auto px-2 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <div className="section-divider"></div>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeIn}>
              <div className="modern-card glass-effect p-5 h-full">
                <h3 className="text-xl font-bold gradient-text mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center hover-float"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-lg p-2.5 glass-effect rounded-full mr-3 flex items-center justify-center">{info.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-0.5 text-sm">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:gradient-text transition-colors text-sm"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 p-4 glass-effect rounded-xl relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-2xl"></div>
                  <div className="relative">
                    <h4 className="font-medium text-base mb-3 gradient-text">Let's Connect</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                      Open to freelance opportunities, collaborations, and interesting projects.
                    </p>
                    <div className="flex space-x-3">
                      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="p-1.5 glass-effect rounded-full hover-float">
                        <FaLinkedin className="text-blue-600" size={16} />
                      </a>
                      <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="p-1.5 glass-effect rounded-full hover-float">
                        <FaGithub className="text-gray-800 dark:text-white" size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="modern-card glass-effect p-5">
                <h3 className="text-xl font-bold gradient-text mb-5">
                  Send A Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full custom-input px-3 py-2 rounded-lg focus:outline-none dark:text-white text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full custom-input px-3 py-2 rounded-lg focus:outline-none dark:text-white text-sm"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full custom-input px-3 py-2 rounded-lg focus:outline-none dark:text-white text-sm"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full custom-input px-3 py-2 rounded-lg focus:outline-none dark:text-white resize-none text-sm"
                    ></textarea>
                  </div>
                  {submitStatus && (
                    <div
                      className={`p-3 mb-4 rounded-lg text-sm ${
                        submitStatus.success
                          ? 'glass-effect text-green-600 dark:text-green-400'
                          : 'glass-effect text-red-600 dark:text-red-400'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full gradient-bg text-white font-medium py-2 px-4 text-sm rounded-lg btn-effect ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 