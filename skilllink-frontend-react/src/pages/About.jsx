// ABOUT PAGE
import React, { useEffect } from "react";
import About_Footer from "../components/About_Footer";
import TeamSection from "../components/TeamSection";
import TimelineSection from "../components/TimelineSection";
import VisionSection from "../components/VisionSection";
import MissionSection from "../components/MissionSection";
import "../About.css";

const About = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    const handleSmoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup function to remove event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="glassmorphism p-8 rounded-2xl">
          {/* Navigation */}
          {/* <nav className="cyberpunk-nav">
            <div className="nav-logo">
              <span className="neon-text">SkillLink</span>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#mission">Mission</a>
              </li>
              <li>
                <a href="#vision">Vision</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#timeline">Journey</a>
              </li>
            </ul>
          </nav> */}

          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="neon-title">
                <span className="flicker-fast">ABOUT</span>
                <span className="flicker-slow">SKILLLINK</span>
              </h1>
              <p className="hero-subtitle">
                Connecting talent with opportunity in the digital age
              </p>
            </div>
          </section>

          {/* Mission Statement */}
          <MissionSection />

          {/* Vision & Values */}
          <VisionSection />

          {/* Team Members */}
          <TeamSection />

          {/* Timeline */}
          <TimelineSection />

          {/* Footer */}
          {/* <About_Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
