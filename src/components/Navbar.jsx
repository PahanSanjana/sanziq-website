import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-2 sm:py-3' 
            : 'py-3 sm:py-4'
        }`}
        aria-label="Main navigation"
      >
        {/* Background with gradient matching home page */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 transition-all duration-300 ${
            scrolled 
              ? 'bg-gradient-to-br from-slate-950/95 via-purple-950/95 to-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
              : 'bg-gradient-to-br from-slate-950/80 via-purple-950/80 to-slate-950/80 backdrop-blur-sm'
          }`}></div>
          
          {/* Subtle animated glow on scroll */}
          {scrolled && (
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-auto">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={closeMenu}
              className="flex-shrink-0 relative z-10"
              aria-label="SANZIQ Home"
            >
              <img src={logo} alt="SANZIQ Logo" className="h-12 sm:h-16 w-auto drop-shadow-lg transition-all duration-300" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLinks desktop={true} isActive={isActive} />

              <Link
                to="/contact"
                className="btn-primary"
                aria-label="Get a quote for your project"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950 p-2 rounded-md touch-manipulation"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              id="mobile-menu"
              className="md:hidden fixed inset-0 top-[3.5rem] bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 z-40 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'calc(100vh - 3.5rem)' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Subtle background effects */}
              <div className="absolute inset-0 opacity-30">
                <motion.div
                  className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              <div className="relative z-10 px-4 pt-6 pb-20 h-full overflow-y-auto overscroll-contain">
                <NavLinks mobile={true} isActive={isActive} />
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="btn-primary w-full justify-center mt-8 py-3 text-base"
                  aria-label="Get a quote for your project"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile, desktop, isActive }) => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  if (desktop) {
    return links.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={`relative font-medium transition-colors ${
          isActive(link.path) 
            ? 'text-purple-300' 
            : 'text-white/90 hover:text-purple-300'
        }`}
        aria-current={isActive(link.path) ? 'page' : undefined}
      >
        {link.label}
        {isActive(link.path) && (
          <motion.span
            layoutId="activeNav"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    ));
  }

  if (mobile) {
    return links.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={`block py-4 text-lg font-medium border-b border-white/10 ${
          isActive(link.path)
            ? 'text-purple-300'
            : 'text-white/90 hover:text-purple-300'
        } transition-colors`}
        aria-current={isActive(link.path) ? 'page' : undefined}
      >
        {link.label}
      </Link>
    ));
  }

  return null;
};

export default Navbar;
