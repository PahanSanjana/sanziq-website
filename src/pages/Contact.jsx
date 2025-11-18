import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Instagram, Facebook, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactVideo from "../assets/Contact page.mp4";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form validation with react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onBlur"
  });

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key
      );
      
      // Show success message
      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: "bottom-right",
        autoClose: 5000,
      });
      
      // Reset form
      reset();
      setSubmitted(true);
      // Refresh after short delay
      setTimeout(() => {
      //  window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Show error message
      toast.error("Failed to send message. Please try again or contact us directly.", {
        position: "bottom-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <div className="relative">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={contactVideo} type="video/mp4" />
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-purple-950/80 to-slate-950/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <SEO
          title="Contact Us"
          description="Get in touch with SANZIQ for your web development needs. We're here to help you build your dream website with modern technologies."
        />
        
        <section className="section">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">Get In Touch</h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mt-4">
                Have a project in mind? Want to discuss your web development needs? We're here to help.
              </p>
            </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-8 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-4 sm:mb-6">
                  Send us a message
                </h2>
                
                {submitted && (
                  <div className="mb-4 sm:mb-6 rounded-lg bg-green-500/20 text-green-200 border border-green-400/30 px-4 py-3">
                    Message sent successfully. Refreshing...
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name field */}
                    <div>
                      <label 
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`form-input w-full ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                        placeholder="Enter your full name"
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters"
                          }
                        })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label 
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`form-input w-full ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                        placeholder="Enter your email address"
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Phone field */}
                    <div>
                      <label 
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`form-input w-full ${errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                        placeholder="Enter your phone number"
                        {...register("phone", {
                          pattern: {
                            value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                            message: "Invalid phone number format"
                          }
                        })}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Company field */}
                    <div>
                      <label 
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="form-input w-full"
                        placeholder="Your Company Name"
                        {...register("company")}
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label 
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className={`form-input w-full ${errors.subject ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                      placeholder="Project Inquiry"
                      aria-required="true"
                      aria-invalid={errors.subject ? "true" : "false"}
                      {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                          value: 5,
                          message: "Subject must be at least 5 characters"
                        }
                      })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label 
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className={`form-input w-full ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                      placeholder="Tell us about your project, requirements, or questions..."
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters"
                        }
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto mt-4 py-3 px-8 text-base flex items-center justify-center"
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 lg:space-y-8"
            >
              <motion.div variants={itemVariants} className="card p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <ContactInfo
                    icon={<Mail className="w-5 h-5 text-primary-500" />}
                    title="Email Us"
                    content={
                      <a href="mailto:sanziqsoftwaresolutions@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        sanziqsoftwaresolutions@gmail.com
                      </a>
                    }
                  />

                  <ContactInfo
                    icon={<Phone className="w-5 h-5 text-primary-500" />}
                    title="Call Us"
                    content={
                      <div>
                        <a href="tel:+94753267455" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block">
                          +94 75 326 7455
                        </a>
                        <a href="tel:+94760015717" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          +94 76 001 5717
                        </a>
                      </div>
                    }
                  />

                  <ContactInfo
                    icon={<MapPin className="w-5 h-5 text-primary-500" />}
                    title="Location"
                    content="Kaluthara, Sri Lanka"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="card p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <SocialLink 
                    href="https://github.com/PahanSanjana"
                    icon={<Github className="w-4 h-4 sm:w-5 sm:h-5" />}
                    label="GitHub"
                  />
                  <SocialLink 
                    href="https://www.linkedin.com/company/sanziq-software-solution/"
                    icon={<Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />}
                    label="LinkedIn"
                  />
                  <SocialLink 
                    href="https://www.instagram.com/sanziq_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    icon={<Instagram className="w-4 h-4 sm:w-5 sm:h-5" />}
                    label="Instagram"
                  />
                  <SocialLink 
                    href="https://www.facebook.com/share/14NnC3qSpDS/"
                    icon={<Facebook className="w-4 h-4 sm:w-5 sm:h-5" />}
                    label="Facebook"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="card p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-4">
                  Business Hours
                </h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 ">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-semibold text-white mb-8 text-center">
            Find Us
          </h2>
          
          <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
            <iframe
              title="SANZIQ Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585787397!2d79.9173081!3d6.5818186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24518408h39af%3A0x5a981e1dbfc9k63!2sKalutara%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1685186745123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing our office location in Kaluthara, Sri Lanka"
            ></iframe>
          </div>
        </div>
      </section>
      
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

// Contact Info Item Component
const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-start space-x-3">
    <div className="bg-white/20 p-2 rounded-lg">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-white">{title}</h3>
      <div className="mt-1 text-gray-300">{content}</div>
    </div>
  </div>
);

// Social Link Component
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
  >
    {icon}
  </a>
);

export default Contact;
