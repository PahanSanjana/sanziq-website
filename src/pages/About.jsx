// src/pages/About.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TeamCard from "../components/TeamCard";
import PahanImage from "../assets/Pahan.png";
import ArtiumpixImage from "../assets/Artiumpix.png";
import AboutImage from "../assets/About.png";
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Instagram, Facebook, Send, Loader2 } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Code, Award, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const About = () => {
  // Animation triggers
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Animation variants
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
  
  // Team members data
  const teamMembers = [
    {
      name: "Pahan Sanjana",
      role: "Founder & Lead Developer",
      image: PahanImage,
      bio: "A passionate web developer focused on crafting modern, high-performance applications using React and JavaScript.",
      links: {
        linkedin: "https://www.linkedin.com/in/pahan-sanjana-68899330b",
        github: "https://github.com/PahanSanjana"
      }
    },
    {
      name: "Artiumpix",
      role: "Official Photogray Partner",
      image: ArtiumpixImage,
      bio: "Official creative partner specializing in high-quality photography, visual storytelling, and brand-focused imagery.",
      links: {
        Instagram: "https://www.instagram.com/artiumpix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        Facebook: "https://www.facebook.com/artiumpix"
      }
    },
    
  ];
  
  // Company values
  const values = [
    {
      icon: <Code className="w-6 h-6 text-primary-500" />,
      title: "Technical Excellence",
      description: "We stay at the cutting edge of web technologies, ensuring our solutions are modern, efficient, and future-proof."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary-500" />,
      title: "Professional Integrity",
      description: "We believe in transparent communication, honest pricing, and delivering on our promises."
    },
    {
      icon: <Award className="w-6 h-6 text-primary-500" />,
      title: "Quality First",
      description: "We never compromise on quality, focusing on clean code, robust testing, and pixel-perfect designs."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-500" />,
      title: "Continuous Learning",
      description: "Our team constantly learns and evolves, bringing fresh ideas and innovative approaches to every project."
    }
  ];

  return (
    <div className="relative">
      {/* OCMS-inspired Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <SEO 
          title="About Us"
          description="Learn more about SANZIQ, our team of experts, our mission, and the values that drive our web development work."
        />
        
        {/* Hero Section */}
        <section className="section text-center">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                About <span className="text-purple-300">SANZIQ</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mt-4">
                We're a team of passionate developers, designers, and digital strategists 
                committed to creating exceptional web experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="section">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-300 mb-4">
                  At SANZIQ, our mission is to empower businesses and individuals with 
                  modern, high-performance websites that drive growth and deliver exceptional 
                  user experiences.
                </p>
                <p className="text-gray-300 mb-4">
                  We believe that great websites combine beautiful design with technical 
                  excellence. Our team is dedicated to creating web solutions that are not 
                  only visually stunning but also fast, secure, and accessible to all users.
                </p>
                <p className="text-gray-300">
                  Founded in 2025, we've helped businesses of all sizes transform their 
                  digital presence through thoughtful design and clean, modern code.
                </p>
              </motion.div>
        </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-soft"
            >
              <img 
                  src={AboutImage} 
                alt="SANZIQ team working together"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section ">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
            Our <span className="text-purple-300">Values</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mt-4 text-center">
            The principles that guide our work and relationships
          </p>
          
          <motion.div 
            ref={valuesRef}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
          >
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="section ">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
            Meet Our <span className="text-purple-300">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mt-4 text-center">
            The talented people behind our success
          </p>
          
          <motion.div 
            ref={teamRef}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                links={member.links}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description, variants }) => (
  <motion.div 
    className="flex gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl"
    variants={variants}
  >
    <div className="flex-shrink-0 mt-1">
      <div className="w-12 h-12 rounded-lg bg-primary-400/20 flex items-center justify-center">
        {icon}
      </div>
          </div>
          <div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
            </p>
          </div>
  </motion.div>
);

// Team Member Card Component
const TeamMemberCard = ({ name, role, image, bio, links, variants }) => (
  <motion.div 
    className="bg-white/10 backdrop-blur-sm overflow-hidden rounded-xl shadow-soft transition-all"
    variants={variants}
  >
    <img 
      src={image} 
      alt={name}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-1">
        {name}
      </h3>
      <p className="text-purple-300 font-medium mb-3">
        {role}
      </p>
      <p className="text-gray-300 mb-4">
        {bio}
      </p>
      
      <div className="flex gap-3">
        {links.linkedin && (
          <SocialLink 
            href={links.linkedin}
            label="LinkedIn"
            className="bg-[#0077B5]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialLink>
        )}
        
        {links.github && (
          <SocialLink 
            href={links.github}
            label="GitHub"
            className="bg-[#333]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </SocialLink>
        )}
        
        {(links.instagram || links.Instagram) && (
          <SocialLink 
            href={links.instagram || links.Instagram}
            label="Instagram"
            className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]"
          >
            <FaInstagram className="w-4 h-4" />
          </SocialLink>
        )}

        {(links.facebook || links.Facebook) && (
          <SocialLink 
            href={links.facebook || links.Facebook}
            label="Facebook"
            className="bg-[#1877F2]"
          >
            <FaFacebook className="w-4 h-4" />
          </SocialLink>
        )}

        {links.dribbble && (
          <SocialLink 
            href={links.dribbble}
            label="Dribbble"
            className="bg-[#ea4c89]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.175.15.35.22.525 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
            </svg>
          </SocialLink>
        )}
        </div>
    </div>
  </motion.div>
  );

// Social Link Component
const SocialLink = ({ href, children, label, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${className}`}
  >
    {children}
  </a>
);

export default About;
