// components/PortfolioCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PortfolioCard = ({ 
  title, 
  description, 
  image, 
  link, 
  githubLink, 
  tags = [],
  isFeatured = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const openLink = () => {
    if (link) {
      window.open(link, '_blank', 'noopener');
    }
  };

  return (
    <motion.div 
      className={`card group overflow-hidden flex flex-col h-full ${
        isFeatured ? 'md:col-span-2' : ''
      } ${link ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={openLink}
      role={link ? 'link' : undefined}
      tabIndex={link ? 0 : undefined}
      onKeyDown={(e) => {
        if (!link) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLink();
        }
      }}
    >
      {/* Image container with consistent aspect ratio */}
      <div className="relative overflow-hidden aspect-video">
        <LazyLoadImage
          src={image}
          alt={`${title} project screenshot`}
          effect="blur"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          wrapperClassName="w-full h-full"
        />
        
        {/* Overlay with links */}
        <motion.div 
          className="absolute inset-0 bg-dark-900/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visit live site for ${title}`}
              className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
              className="p-3 bg-dark-700 text-white rounded-full hover:bg-dark-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100 mb-2">
          {title}
        </h3>
        
        <p className="text-dark-600 dark:text-light-300 mb-4 flex-grow">
          {description}
        </p>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium rounded bg-light-200 text-dark-700 dark:bg-dark-600 dark:text-light-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
  