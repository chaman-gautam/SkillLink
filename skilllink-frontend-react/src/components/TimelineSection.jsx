// TimelineSection.js
import React, { useEffect, useRef } from "react";

const TimelineSection = () => {
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "SkillLink was born from a vision to revolutionize professional networking",
      icon: "🚀",
    },
    {
      year: "2021",
      title: "Launch",
      description: "Successfully launched our MVP with 10,000+ early adopters",
      icon: "🎯",
    },
    {
      year: "2022",
      title: "Growth",
      description: "Expanded to 50+ countries with 100K+ active users",
      icon: "📈",
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Introduced AI-powered matching and skill assessment",
      icon: "🤖",
    },
    {
      year: "2024",
      title: "Future",
      description:
        "Launching blockchain verification and metaverse integration",
      icon: "🔮",
    },
  ];

  const timelineRef = useRef(null);

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

    const timelineItems =
      timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="timeline-section" ref={timelineRef}>
      <div className="container">
        <h2 className="section-title">OUR JOURNEY</h2>
        <div className="timeline">
          <div className="timeline-line"></div>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-icon">{milestone.icon}</div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
