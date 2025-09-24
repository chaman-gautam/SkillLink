import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="glassmorphism mt-16 p-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SkillLink</h3>
            <p className="text-gray-300">
              Connecting talent with opportunities through AI-powered career
              growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block hover:text-cyan-300">
                About
              </Link>
              <Link to="/opportunities" className="block hover:text-cyan-300">
                Opportunities
              </Link>
              <Link to="/challenges" className="block hover:text-cyan-300">
                Challenges
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block hover:text-cyan-300">
                Contact
              </Link>
              <Link to="/faq" className="block hover:text-cyan-300">
                FAQ
              </Link>
              <Link to="/privacy" className="block hover:text-cyan-300">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-cyan-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-xl hover:text-cyan-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl hover:text-cyan-300">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 SkillLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
