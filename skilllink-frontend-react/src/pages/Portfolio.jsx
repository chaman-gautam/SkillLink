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
export default TestimonialsSection;
