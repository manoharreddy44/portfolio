import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'techstack' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/manohar-reddyk/',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/manoharreddy44',
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={20} />,
      url: 'mailto:koppala.manoharreddy@gmail.com',
    },
    {
      name: 'Codolio',
      icon: <BiCodeAlt size={20} />,
      url: 'https://codolio.com/profile/Manohar123',
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#040812]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <motion.div
        className="h-1 bg-[var(--main-color)] origin-left fixed top-0 left-0 right-0"
        style={{ scaleX }}
      />
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-black/50 py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xl sm:text-2xl font-bold cursor-pointer flex items-center"
              >
                <span className="text-[#00f7ff] text-2xl sm:text-3xl">P</span>
                <span className="text-white text-lg sm:text-xl">folio</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center flex-1 px-8 lg:px-16">
              <div className="flex space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:text-[#00f7ff] transition-colors cursor-pointer text-sm font-medium"
                    activeClass="text-[#00f7ff]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00f7ff] transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#00f7ff] transition-colors p-1"
                aria-label="Toggle menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-3 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-3 py-2 text-sm font-medium text-white hover:text-[#00f7ff] transition-colors"
                activeClass="text-[#00f7ff]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 px-3 py-2 border-t border-white/10 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00f7ff] transition-colors"
                  aria-label={link.name}
                >
                  {React.cloneElement(link.icon, { className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar; 