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
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Inspire Transformation Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="hidden sm:block font-bold text-xl text-stone-800">
                Inspire Transformation
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `py-2 text-stone-700 transition-colors duration-300 hover:text-red-800 ${
                      isActive ? 'font-bold text-red-800' : 'font-medium'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/donate"
                className="bg-red-800 text-white font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-red-700 transition-all duration-300"
              >
                Donate Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
                className="p-2 rounded-md text-stone-600 hover:bg-stone-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transform md:hidden ${
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
                    isActive ? 'text-red-800 font-bold' : 'text-stone-700 font-medium'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/donate"
              onClick={toggleMenu}
              className="mt-4 bg-red-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg text-lg"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}