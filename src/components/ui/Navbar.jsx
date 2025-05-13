import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: 'Tech Stack', to: 'techstack' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-md glass-effect py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl font-bold cursor-pointer hover-float flex items-center"
            >
              <span className="text-[var(--main-color)]">K</span>
              <span className="text-white">folio</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="px-1 py-2 text-base font-medium cursor-pointer hover-float transition-colors text-white hover:text-[var(--main-color)]"
                  activeClass="text-[var(--main-color)]"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-[var(--dark-bg)] transition-colors hover-float"
                aria-label="Toggle dark mode"
              >
                {darkMode ? 
                  <FaSun className="text-yellow-400 text-lg" /> : 
                  <FaMoon className="text-[var(--main-color)] text-lg" />
                }
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-[var(--dark-bg)] transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-[var(--main-color)]" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 flex flex-col items-center justify-center relative">
                <span
                  className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-1' : 'mb-1'
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'mb-1'
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect mt-2 mx-4 rounded-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:text-[var(--main-color)] transition-colors text-white"
              activeClass="text-[var(--main-color)]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 