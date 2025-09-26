// TeamSection.js
import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "👨‍💼",
      description: "Visionary leader with 10+ years in tech innovation",
      color: "cyan",
    },
    {
      name: "Maya Rodriguez",
      role: "CTO",
      image: "👩‍💻",
      description: "AI and machine learning expert",
      color: "pink",
    },
    {
      name: "James Kim",
      role: "Head of Product",
      image: "👨‍🎨",
      description: "Product strategy and user experience specialist",
      color: "purple",
    },
    {
      name: "Sarah Johnson",
      role: "Growth Lead",
      image: "👩‍💼",
      description: "Marketing and community building expert",
      color: "orange",
    },
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title neon-border-bottom">MEET THE TEAM</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-card glow-${member.color}`}>
              <div className="member-image">{member.image}</div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
              <div className="neon-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
