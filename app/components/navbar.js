'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '/#' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('/#');
  const [expanded, setExpanded] = useState(false);

  const toggleCollapse = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.replace(/^\/+|#+/g, '');
        return id ? document.getElementById(id) : document.body; // Use document.body for Home
      });
      const scrollPosition = window.scrollY;

      const current = sections.findIndex((section, index) => {
        if (!section) return false;
        if (index === 0) { // Home section
          return scrollPosition < (sections[1]?.offsetTop || Infinity) - 100;
        }
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        return scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100;
      });

      if (current !== -1) {
        setActiveSection(navItems[current].href);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10 top-0 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 dark:text-gray-100 text-lg">AradomL.</span>
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-4 px-2 text-gray-500 dark:text-gray-300 font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 ${
                  activeSection === item.href ? 'text-blue-500 dark:text-blue-400 border-b-2 border-blue-500' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Add ThemeToggle button to desktop navigation */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon
                  icon={expanded ? faTimes : faBars}
                  className="w-6 h-6 text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${expanded ? 'block' : 'hidden'} bg-white dark:bg-gray-800 transition-colors duration-300`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block py-2 px-4 text-sm text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ${
                  activeSection === item.href ? 'bg-gray-200 dark:bg-gray-700' : ''
                }`}
                onClick={() => setExpanded(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
          {/* Add ThemeToggle button to mobile navigation */}
          <li className="py-2 px-4">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
