import React from "react";
import { Mail, Phone, MapPin, Github, Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative overflow-hidden pt-10 sm:pt-16 pb-6 sm:pb-8">
      {/* Background matching home page */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient - deep purple to navy */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
        
        {/* Subtle animated glowing orbs */}
        <div className="absolute inset-0 opacity-25">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
        
        {/* Grid pattern overlay for depth */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with company info */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-12">
          {/* Company Overview */}
          <div className="xs:col-span-2 lg:col-span-1">
            <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              SANZIQ
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
              Smart web development solutions with a creative edge. We build modern, 
              fast, and accessible websites using the latest technologies.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              <SocialLink 
                href="https://www.linkedin.com/company/sanziq-software-solution/" 
                icon={<Linkedin />}
                label="LinkedIn"
                hoverColor="hover:text-blue-400"
              />
              <SocialLink 
                href="https://github.com/PahanSanjana" 
                icon={<Github />}
                label="GitHub"
                hoverColor="hover:text-white"
              />
              <SocialLink 
                href="https://www.instagram.com/sanziq_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                icon={<Instagram />}
                label="Instagram"
                hoverColor="hover:text-pink-400"
              />
              <SocialLink 
                href="https://www.facebook.com/share/14NnC3qSpDS/" 
                icon={<Facebook />}
                label="Facebook"
                hoverColor="hover:text-blue-400"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Navigation
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/portfolio" text="Portfolio" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Services
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <FooterLink href="/services#web-development" text="Web Development" />
              <FooterLink href="/services#ui-design" text="UI/UX Design" />
              <FooterLink href="/services#ecommerce" text="E-Commerce Solutions" />
              <FooterLink href="/services#seo" text="SEO Optimization" />
              <FooterLink href="/services#maintenance" text="Website Maintenance" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">sanziqsoftwaresolutions@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm sm:text-base text-gray-300">
                  <p>+94 75 326 7455</p>
                  <p>+94 76 001 5717</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Kaluthara, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6 sm:mb-8"></div>

        {/* Bottom section with copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} SANZIQ. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-3 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors mt-1 md:mt-0">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors mt-1 md:mt-0">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors mt-1 md:mt-0">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 p-2 sm:p-3 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950 z-10 backdrop-blur-sm border border-white/20"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          whileHover={{ y: -4, scale: 1.1 }}
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      )}
    </footer>
  );
};

const SocialLink = ({ href, icon, label, hoverColor }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 transition-all hover:bg-white/20 hover:border-white/30 hover:text-white ${hoverColor} touch-manipulation`}
  >
    {React.cloneElement(icon, { size: 16, className: 'sm:h-[18px] sm:w-[18px]' })}
  </a>
);

const FooterLink = ({ href, text }) => (
  <li>
    <Link
      to={href}
      className="text-sm sm:text-base text-gray-300 hover:text-purple-300 transition-colors inline-block py-1"
    >
      {text}
    </Link>
  </li>
);

export default Footer;
