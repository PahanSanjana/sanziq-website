import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={`w-9 h-9 ${className}`}></div>;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-md text-dark-700 dark:text-light-200 bg-light-300 dark:bg-dark-600 hover:bg-light-400 dark:hover:bg-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <motion.div
          initial={{ opacity: theme === 'dark' ? 0 : 1, y: theme === 'dark' ? 10 : 0 }}
          animate={{ opacity: theme === 'dark' ? 0 : 1, y: theme === 'dark' ? 10 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 text-yellow-500"
        >
          <Sun className="w-5 h-5" />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          initial={{ opacity: theme === 'dark' ? 1 : 0, y: theme === 'dark' ? 0 : -10 }}
          animate={{ opacity: theme === 'dark' ? 1 : 0, y: theme === 'dark' ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 text-blue-300"
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      </div>
    </button>
  );
};

export default ThemeToggle;
