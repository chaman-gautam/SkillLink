// Footer.js
import React from "react";

const About_Footer = () => {
  return (
    <footer className="cyberpunk-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="neon-text">SkillLink</span>
          <p className="footer-tagline">Connecting the future of work</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">API</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024 SkillLink. All rights reserved. Made with 💙 in the
          digital realm.
        </p>
      </div>

      <div className="footer-glow"></div>
    </footer>
  );
};

export default About_Footer;
