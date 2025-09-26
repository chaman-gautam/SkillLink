// VisionSection.js
import React, { useEffect, useRef } from "react";

const VisionSection = () => {
  const values = [
    {
      icon: "⚡",
      title: "Innovation",
      description:
        "Pushing boundaries with cutting-edge technology and forward-thinking solutions.",
      color: "cyan",
    },
    {
      icon: "🔗",
      title: "Connection",
      description:
        "Building meaningful relationships between talent and opportunity.",
      color: "pink",
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description:
        "Connecting professionals worldwide without geographical limitations.",
      color: "purple",
    },
    {
      icon: "🚀",
      title: "Growth",
      description:
        "Empowering continuous learning and professional development.",
      color: "orange",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="vision-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title neon-border-bottom">VISION & VALUES</h2>

        {/* Vision Statement */}
        <div className="vision-statement">
          <div className="vision-content">
            <h3 className="vision-title">Our Vision</h3>
            <p className="vision-text">
              To create a world where every individual can seamlessly connect
              with opportunities that match their skills and aspirations,
              transforming how talent meets opportunity in the digital era.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className={`value-card glow-${value.color}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div className="value-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
