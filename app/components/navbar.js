'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="bg-white shadow-lg fixed w-full z-10 top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">AradomL.</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 ${
                  activeSection === item.href ? 'text-blue-500 border-b-2 border-blue-500' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block py-2 px-4 text-sm hover:bg-gray-200 ${
                  activeSection === item.href ? 'bg-gray-200' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}