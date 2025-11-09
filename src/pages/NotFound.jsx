import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for doesn't exist or has been moved."
      />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="text-center max-w-lg">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-purple-400 text-9xl font-heading font-bold">
              404
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              Page Not Found
            </h2>
            
            <p className="text-gray-300 mb-8">
              The page you're looking for doesn't exist or has been moved.
              Perhaps you mistyped the URL or the page has been relocated.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link 
                to="/"
                className="btn-primary py-2 px-4 inline-flex items-center justify-center"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="btn-outline py-2 px-4 inline-flex items-center justify-center"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-gray-400 text-sm">
              If you believe this is an error, please
              <Link to="/contact" className="text-purple-400 hover:underline ml-1">
                contact us
              </Link>.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 