// LANDING PAGE
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: "fas fa-briefcase",
      title: "Opportunities",
      description: "Find jobs, internships, and scholarships",
    },
    {
      icon: "fas fa-robot",
      title: "AI Mentor",
      description: "Get personalized career guidance",
    },
    {
      icon: "fas fa-trophy",
      title: "Challenges",
      description: "Test your skills with coding challenges",
    },
    {
      icon: "fas fa-file-shield",
      title: "Document Verification",
      description: "Secure document validation system",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
          SkillLink – Connect. Grow. Succeed.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-lavender">
          Bridging the gap between talent and opportunity with AI-powered career
          growth
        </p>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-cyan-500 px-8 py-3 rounded-full text-lg font-semibold glow"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="glassmorphism px-8 py-3 rounded-full text-lg font-semibold glow"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose SkillLink?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-2xl text-center glow"
              >
                <i
                  className={`${feature.icon} text-4xl text-cyan-300 mb-4`}
                ></i>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-lavender">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
