import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smile, Zap, ShieldCheck, Smartphone, Target } from 'lucide-react';

import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';

// Feature animation settings
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
    transition: { duration: 0.5 }
  },
};

const Home = () => {
  // Animation triggers for scroll-based animations
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <SEO 
        title="Modern Web Development" 
        description="SANZIQ delivers smart web solutions with a creative edge. We build fast, responsive, and modern websites using the latest technologies like React."
      />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        {/* Background matching hero section */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient - deep purple to navy */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
          
          {/* Subtle animated glowing orbs */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
          
          {/* Grid pattern overlay for depth */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="text-purple-300">SANZIQ</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our approach focuses on quality, reliability, and delivering exceptional results
          </motion.p>

          <motion.div  Features Section
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
          >
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-purple-400" />}
              title="Secure by Design"
              description="Security built into every line of code from day one, not added as an afterthought."
              variants={itemVariants}
            />
            <FeatureCard 
              icon={<Smartphone className="w-6 h-6 text-purple-400" />}
              title="Mobile-First Approach"
              description="Responsive design that works seamlessly across all devices and screen sizes."
              variants={itemVariants}
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-purple-400" />}
              title="Performance Optimized"
              description="Lightning-fast websites that provide exceptional user experience and better SEO rankings."
              variants={itemVariants}
            />
            <FeatureCard 
              icon={<Code className="w-6 h-6 text-purple-400" />}
              title="Clean Code"
              description="Well-structured, maintainable code that follows best practices and industry standards."
              variants={itemVariants}
            />
            <FeatureCard 
              icon={<Target className="w-6 h-6 text-purple-400" />}
              title="Business Focused"
              description="Custom solutions designed specifically to meet your business goals and drive results."
              variants={itemVariants}
            />
            <FeatureCard 
              icon={<Smile className="w-6 h-6 text-purple-400" />}
              title="User-Centric Design"
              description="Intuitive interfaces that prioritize user experience and accessibility for all."
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        {/* Background matching hero section */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient - deep purple to navy */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
          
          {/* Animated glowing orbs */}
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="absolute top-0 left-1/3 w-80 h-80 bg-purple-600 rounded-full blur-3xl"
              animate={{
                x: [0, 80, 0],
                y: [0, 40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-600 rounded-full blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
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
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to transform your digital presence?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's create something amazing together. Contact us today to discuss your project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="btn-primary py-3 px-6 sm:px-8 text-base sm:text-lg font-medium shadow-lg inline-flex items-center group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, variants }) => (
  <motion.div 
    className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center group"
    variants={variants}
  >
    {/* Subtle glow effect on hover */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 blur-xl"></div>
    
    <div className="mb-4 p-3 bg-white/10 rounded-lg border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{title}</h3>
    <p className="text-gray-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{description}</p>
  </motion.div>
);

export default Home;
