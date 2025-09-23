import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    document.body.style.overflow = !isMobileNavActive ? "hidden" : "auto";
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
    document.body.style.overflow = "auto";
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      closeMobileNav();
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`} id="header">
        <div className="container">
          <nav>
            <div className="logo">SkillLink</div>
            <div className="nav-links">
              <a href="#features" onClick={handleNavClick}>
                Features
              </a>
              <a href="#testimonials" onClick={handleNavClick}>
                Testimonials
              </a>
              <a href="#about" onClick={handleNavClick}>
                About
              </a>
              <a href="contact.html">Contact</a>
              <a href="logup_final.html" className="register-btn">
                Register
              </a>
            </div>
            <button className="hamburger" onClick={toggleMobileNav}>
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </div>
      </header>

      <div className={`mobile-nav ${isMobileNavActive ? "active" : ""}`}>
        <button className="close-btn" onClick={closeMobileNav}>
          <i className="fas fa-times"></i>
        </button>
        <a href="#features" onClick={handleNavClick}>
          Features
        </a>
        <a href="#testimonials" onClick={handleNavClick}>
          Testimonials
        </a>
        <a href="#about" onClick={handleNavClick}>
          About
        </a>
        <a href="#contact" onClick={handleNavClick}>
          Contact
        </a>
        <a href="logup_final.html" className="register-btn">
          Register
        </a>
      </div>

      <div
        className={`overlay ${isMobileNavActive ? "active" : ""}`}
        onClick={closeMobileNav}
      ></div>
    </>
  );
};

export default Header;
