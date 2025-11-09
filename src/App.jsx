import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ThemeProvider from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Create a client for data fetching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <Router>
            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="skip-to-content">
              Skip to content
            </a>
            
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main id="main-content" className="min-h-screen pt-16">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>

            {/* Footer */}
            <Footer />
            
            {/* Toast container for notifications */}
            <ToastContainer 
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

// 404 Page
const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-[70vh] px-4 text-center">
    <h1 className="text-6xl font-bold text-purple-400">404</h1>
    <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>
    <p className="mt-2 text-gray-300">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      className="mt-6 btn-primary"
    >
      Back to Home
    </a>
  </div>
);

export default App;
