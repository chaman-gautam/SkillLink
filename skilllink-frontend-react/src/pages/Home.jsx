import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Links } from "react-router-dom";
// Icons (using Lucide equivalents)
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const SkillPassportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <path d="M8 12h8" />
    <path d="M8 8h8" />
    <path d="M8 16h4" />
  </svg>
);

const AIMentorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

const OpportunitiesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// Sub-components

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              animate={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Connect Skills
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              To Opportunities
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Your digital passport to verified skills, AI-powered career
            guidance, and global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Explore Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
        <Icon className="text-white w-7 h-7" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: SkillPassportIcon,
      title: "Skill Passport",
      description:
        "Digitally verify, store, and showcase your skills with blockchain-backed credentials that employers trust.",
      delay: 0.1,
    },
    {
      icon: AIMentorIcon,
      title: "AI Career Mentor",
      description:
        "Get personalized career guidance, skill recommendations, and learning paths powered by artificial intelligence.",
      delay: 0.2,
    },
    {
      icon: OpportunitiesIcon,
      title: "Opportunities Hub",
      description:
        "Access curated job opportunities, internships, and projects matched to your skill profile and career goals.",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How SkillLink Works For You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between your skills and real-world opportunities
            through innovative technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <CounterSection />
      </div>
    </section>
  );
};

const Counter = ({ end, suffix, label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const CounterSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
    >
      <Counter end={50000} suffix="+" label="Students Connected" />
      <Counter end={250000} suffix="+" label="Skills Verified" />
      <Counter end={10000} suffix="+" label="Jobs Matched" />
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, avatar, rating, quote, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        x: 0,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
        isActive ? "border-blue-500" : "border-gray-100"
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {avatar}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-gray-600 text-sm">{role}</div>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      avatar: "SJ",
      rating: 5,
      quote:
        "SkillLink helped me transition from retail to tech in just 6 months. The AI mentor identified exactly which skills I needed.",
    },
    {
      name: "Michael Chen",
      role: "Data Analyst",
      avatar: "MC",
      rating: 5,
      quote:
        "The skill verification gave me credibility when applying for remote jobs. I landed my dream role at an international company.",
    },
    {
      name: "Emma Rodriguez",
      role: "UX Designer",
      avatar: "ER",
      rating: 5,
      quote:
        "As a self-taught designer, SkillLink provided the validation I needed. The opportunities hub connected me with amazing clients.",
    },
    {
      name: "David Kim",
      role: "Project Manager",
      avatar: "DK",
      rating: 4,
      quote:
        "The career guidance was spot-on. I upgraded my skills and got promoted within 3 months of using SkillLink.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of learners and professionals who have transformed
            their careers with SkillLink.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    {...testimonial}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join SkillLink today and take the first step towards connecting your
            skills with life-changing opportunities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Join Now - It's For You
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">SkillLink</h3>
//             <p className="text-gray-400">
//               Connecting skills to opportunities through innovative technology
//               and verified credentials.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-gray-400">
//               {["Home", "About", "Opportunities", "Blog", "Contact"].map(
//                 (item) => (
//                   <li key={item}>
//                     <a href="#" className="hover:text-white transition-colors">
//                       {item}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Resources</h4>
//             <ul className="space-y-2 text-gray-400">
//               {[
//                 "Help Center",
//                 "Career Guide",
//                 "Skill Assessment",
//                 "Privacy Policy",
//                 "Terms of Service",
//               ].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="hover:text-white transition-colors">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Contact Us</h4>
//             <address className="text-gray-400 not-italic">
//               <p>123 Innovation Drive</p>
//               <p>Tech City, TC 12345</p>
//               <p className="mt-2">info@skilllink.com</p>
//               <p>+1 (555) 123-4567</p>
//             </address>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>
//             &copy; {new Date().getFullYear()} SkillLink. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// Custom hook for checking if element is in viewport
const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
