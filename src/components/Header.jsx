import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/impact', label: 'Our Impact' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/media', label: 'Media' },
];

const mobileMenuVariants = {
  hidden: {
    x: '100%',
    transition: { type: 'tween', duration: 0.3, ease: 'easeIn' }
  },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.3, ease: 'easeOut' }
  }
};

const mobileNavContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const mobileNavLinkVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white/50'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Inspire Transformation Logo"
                className="h-12 transition-transform duration-300 hover:scale-110"
                
              />
            </Link>

            <nav className="hidden md:flex items-center">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `relative py-2 mx-4 font-medium text-gray-700 hover:text-red-800 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-red-800 after:transition-transform after:duration-300 after:origin-center ${
                      isActive ? 'text-red-800 after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-8">
                <Link
                  to="/donate"
                  className="bg-red-800 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-red-700 transition-all duration-300"
                >
                  Donate
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
                <Link
                  to="/start-journey"
                  className="border-2 border-red-800 text-red-800 font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-red-50 transition-all duration-300"
                >
                  Start Your Journey
                </Link>
              </motion.div>
            </nav>

            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-800 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <Link to="/" onClick={toggleMenu} className="flex items-center gap-2">
                        <img src="/logo.png" alt="Inspire Transformation Logo" className="h-10 w-10 rounded-full" />
                    </Link>
                    <button
                        aria-label="Close menu"
                        onClick={toggleMenu}
                        className="p-2 rounded-md text-gray-800 hover:bg-gray-100"
                    >
                        <X size={28} />
                    </button>
                </div>

                <motion.nav 
                    variants={mobileNavContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center flex-1 gap-y-8"
                >
                    {navLinks.map(({ to, label }) => (
                    <motion.div key={to} variants={mobileNavLinkVariants}>
                        <NavLink
                            to={to}
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                            `text-3xl font-medium transition-colors duration-300 ${
                                isActive ? 'text-red-800 font-bold' : 'text-gray-800 hover:text-red-700'
                            }`
                            }
                        >
                            {label}
                        </NavLink>
                    </motion.div>
                    ))}
                    <motion.div variants={mobileNavLinkVariants} className="mt-6">
                        <Link
                            to="/donate"
                            onClick={toggleMenu}
                            className="bg-red-800 text-white font-semibold px-10 py-4 rounded-lg shadow-lg text-xl hover:bg-red-700 transition-all duration-300"
                        >
                            Donate Now
                        </Link>
                    </motion.div>
                    <motion.div variants={mobileNavLinkVariants} className="mt-6">
                        <Link
                            to="/start-journey"
                            onClick={toggleMenu}
                            className="border-2 border-red-800 text-red-800 font-semibold px-10 py-4 rounded-lg shadow-lg text-xl hover:bg-red-50 transition-all duration-300"
                        >
                            Start Your Journey
                        </Link>
                    </motion.div>
                </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}