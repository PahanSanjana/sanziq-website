import {
  FaReact,
  FaPaintBrush,
  FaMobileAlt,
  FaDatabase,
  FaTools,
  FaLock,
  FaRocket,
  FaTabletAlt,
  FaUserCog,
} from "react-icons/fa";
import SEO from "../components/SEO";
import handVideo from "../assets/Hand video.mp4";

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services"
        description="Explore our web development, business systems, and technical support services at SANZIQ."
      />
      
      <div className="relative min-h-screen">
        {/* OCMS-inspired Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-white font-sans">
          {/* Section Title */}
          <section className="text-center py-10 sm:py-16 px-4">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              What We <span className="text-purple-300">Offer</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
              Smart solutions built to grow your business.
            </p>
          </section>

          {/* Services Grid */}
          <section className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4 pb-10 sm:pb-16">
            {[
              {
                icon: <FaReact className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Website Development",
                desc: "Custom responsive sites, optimized for performance and SEO.",
              },
              {
                icon: <FaDatabase className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Business Systems",
                desc: "POS, inventory tracking, and dashboards to simplify operations.",
              },
              {
                icon: <FaPaintBrush className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Store Solutions",
                desc: "Order systems, reservations, and contactless payment tools.",
              },
              {
                icon: <FaTools className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Technical Support",
                desc: "Ongoing updates, security, and custom feature support.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/20 transition"
              >
                <div className="text-primary-400 text-2xl sm:text-3xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{service.desc}</p>
              </div>
            ))}
          </section>

          {/* Technology Stack */}
          <section className="py-10 sm:py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12 text-white">
                Our <span className="text-purple-300">Technology Stack</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                      alt="React" 
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 sm:w-12 sm:h-12">
                      <path
                        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                        fill="#38bdf8"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-300">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                      alt="Node.js" 
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                      alt="Next.js" 
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300">Next.js</span>
                </div>
              </div>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="max-w-6xl mx-auto px-4 py-10 sm:py-16">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12 text-white">
              Why Work With <span className="text-purple-300">Us</span>
            </h3>
            <div className="grid xs:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg shrink-0">
                  <FaLock className="text-primary-400 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">Secure by design</h4>
                  <p className="text-sm sm:text-base text-gray-300">Security built into every line of code from day one.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg shrink-0">
                  <FaTabletAlt className="text-primary-400 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">Mobile-optimized</h4>
                  <p className="text-sm sm:text-base text-gray-300">Responsive design that works on all devices and screens.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg shrink-0">
                  <FaRocket className="text-primary-400 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">Fast & scalable</h4>
                  <p className="text-sm sm:text-base text-gray-300">Solutions built to grow with your business needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg shrink-0">
                  <FaUserCog className="text-primary-400 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">Tailored to you</h4>
                  <p className="text-sm sm:text-base text-gray-300">Custom features designed for your specific needs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-10 sm:py-16 px-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-6 sm:mb-10 text-white">
              Frequently Asked <span className="text-purple-300">Questions</span>
            </h3>
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {[
                {
                  question: "What is your project process like?",
                  answer:
                    "Our process typically involves discovery, planning, design, development, testing, and launch phases. We start with understanding your business needs, create a detailed plan, then execute with continuous feedback and testing to ensure quality.",
                },
                {
                  question: "How long do projects typically take?",
                  answer:
                    "Timelines depend on scope, but small projects take 2-4 weeks while larger systems may take 6-12 weeks.",
                },
                {
                  question: "What technologies do you use?",
                  answer:
                    "We use modern stacks like React, Next.js, Node.js, Tailwind, Firebase, PostgreSQL, and other scalable, secure tools.",
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer:
                    "Yes! We offer maintenance, updates, feature expansion, and support packages tailored to your needs.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl transition-all duration-300 group cursor-pointer hover:bg-white/20"
                >
                  <div className="text-base sm:text-lg font-semibold text-white group-hover:text-purple-300">
                    {faq.question}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300 mt-2">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-10 sm:py-16 px-4">
            <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl">
              {/* Background video on the left, blended */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
                <div className="absolute inset-0 flex">
                  {/* Left side video area */}
                  <div className="relative w-1/2 min-w-[260px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    >
                      <source src={handVideo} type="video/mp4" />
                    </video>
                    {/* Right fade to blend video into background */}
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-slate-950/90"></div>
                  </div>
                  {/* Right side gradient fill */}
                  <div className="flex-1 bg-gradient-to-br from-slate-950/90 via-purple-950/80 to-slate-950/90"></div>
                </div>
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div className="absolute inset-0" style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                  }}></div>
                </div>
              </div>

              {/* CTA content */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-10">
                <div className="md:col-start-2 text-center md:text-left flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Ready to build something amazing?
                  </h2>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-xl">
                    Let's discuss your project and explore how we can help transform
                    your business with tailored technology solutions.
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 btn-primary w-full xs:w-auto"
                  >
                    Start Your Project
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
