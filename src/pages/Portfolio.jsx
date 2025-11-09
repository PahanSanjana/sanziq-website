import { motion } from "framer-motion";
import projectData from "../data/projectData";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="relative min-h-screen">
      {/* OCMS-inspired Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white"
            >
              Our <span className="text-purple-300">Portfolio</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-300"
            >
              Explore some of our most recent work, crafted with care and precision.
            </motion.p>
          </div>
        </section>

        <section className="py-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
