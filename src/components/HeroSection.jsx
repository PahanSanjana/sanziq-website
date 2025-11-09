import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerVideo from '../assets/Header.mp4';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Video (like Contact page) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={headerVideo} type="video/mp4" />
        </video>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-purple-950/80 to-slate-950/80"></div>
      </div>

      {/* OCMS-inspired Background (kept subtle effects above video) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid pattern overlay for depth */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-center px-4 py-16 sm:py-24">
        <motion.div
          ref={ref}
          className="w-full max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] mb-4"
            variants={itemVariants}
          >
            Smart Web Solutions 
            <br className="hidden xs:block" /> with a <span className="text-purple-300">Creative Edge</span>
          </motion.h1>

          <motion.p 
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] max-w-2xl mx-auto"
            variants={itemVariants}
          >
            At SANZIQ, we craft fast, responsive, and modern websites using
            the latest technologies like React. Let's turn your vision into reality.
          </motion.p>

          <motion.div 
            className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4"
            variants={itemVariants}
          >
            <Link
              to="/contact"
              className="btn-primary py-3 px-6 sm:px-8 text-base font-medium shadow-lg group w-full xs:w-auto"
            >
              Let's Build Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/portfolio"
              className="btn-outline py-3 px-6 sm:px-8 text-base font-medium w-full xs:w-auto mt-2 xs:mt-0"
            >
              View Our Work
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12 sm:mt-16"
            variants={itemVariants}
          >
            <p className="text-gray-400 font-medium mb-3">Trusted Technologies</p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 opacity-80">
              {/* Tech logos */}
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                alt="React" 
                className="h-8 sm:h-10 w-auto drop-shadow-md"
              />
              {/* Tailwind CSS SVG Icon */}
              <svg viewBox="0 0 24 24" fill="none" className="h-8 sm:h-10 w-auto drop-shadow-md">
                <path
                  d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                  fill="#38bdf8"
                />
              </svg>
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                alt="Node.js" 
                className="h-8 sm:h-10 w-auto drop-shadow-md"
              />
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                alt="Next.js" 
                className="h-8 sm:h-10 w-auto drop-shadow-md"
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ boxShadow: ['0 0 0 rgba(255,255,255,0.2)', '0 0 10px rgba(255,255,255,0.4)', '0 0 0 rgba(255,255,255,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [4, 14, 4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 