// MissionSection.js
import React from "react";

const MissionSection = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <h2 className="section-title neon-border-bottom">OUR MISSION</h2>
        <div className="mission-content">
          <p className="mission-text neon-glow-text">
            At <span className="accent-text">SkillLink</span>, we're
            revolutionizing how professionals connect with opportunities. Our
            platform bridges the gap between talent and innovation, creating a
            seamless ecosystem where skills meet purpose.
          </p>
          <div className="mission-stats">
            <div className="stat-card">
              <div className="stat-number neon-cyan">50K+</div>
              <div className="stat-label">Professionals Connected</div>
            </div>
            <div className="stat-card">
              <div className="stat-number neon-pink">1.2M+</div>
              <div className="stat-label">Skills Matched</div>
            </div>
            <div className="stat-card">
              <div className="stat-number neon-purple">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
