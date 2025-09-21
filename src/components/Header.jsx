import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/impact', label: 'Our Impact' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/media', label: 'Media' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Inspire Transformation Logo"
                className="h-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `py-2 transition-colors duration-300 hover:text-brand-800 ${
                      isActive ? 'font-bold text-brand-800' : 'font-medium text-brand-950'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/start-journey"
                className="bg-brand-800 text-white font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-brand-900 transition-all duration-300"
              >
                Start Your Journey
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
                className="p-2 rounded-md text-brand-900 hover:bg-brand-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-b from-white to-brand-100 transform md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-y-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-2xl ${
                    isActive ? 'text-brand-800 font-bold' : 'text-brand-950 font-medium hover:text-brand-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/start-journey"
              onClick={toggleMenu}
              className="mt-4 bg-brand-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg text-lg hover:bg-brand-900 transition-all duration-300"
            >
              Start Your Journey
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}