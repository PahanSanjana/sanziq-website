import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <motion.span 
          className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-primary-500 dark:border-primary-400 opacity-75"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.span 
          className="absolute top-0 left-0 w-full h-full rounded-full border-l-4 border-secondary-500 dark:border-secondary-400 opacity-75"
          animate={{ rotate: -180 }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <span className="sr-only">Loading...</span>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 