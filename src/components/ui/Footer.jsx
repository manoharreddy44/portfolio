import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/your-linkedin'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/your-github'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-5 h-5" />,
      url: 'mailto:your.email@example.com'
    },
    {
      name: 'Portfolio',
      icon: <BiCodeAlt className="w-5 h-5" />,
      url: '#projects'
    }
  ];

  return (
    <footer className="py-8 relative z-10 border-t border-[var(--main-color)]/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center cursor-pointer hover-float"
            >
              <span className="text-[var(--main-color)] text-xl font-bold">K</span>
              <span className="text-white text-xl font-normal">folio</span>
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6 mb-4 md:mb-0 order-3 md:order-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-white hover:text-[var(--main-color)] transition-colors hover-float"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right order-2 md:order-3">
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 