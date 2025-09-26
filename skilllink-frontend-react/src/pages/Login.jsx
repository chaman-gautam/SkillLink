import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../SkillLinkAuth.css";

const SkillLinkAuth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userRole, setUserRole] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tabLineRef = useRef(null);
  const navigate = useNavigate();

  // Handle tab switch animation
  useEffect(() => {
    if (tabLineRef.current) {
      const activeTabElement = document.querySelector(".tab.active");
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        tabLineRef.current.style.left = `${offsetLeft}px`;
        tabLineRef.current.style.width = `${offsetWidth}px`;
      }
    }
  }, [activeTab]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = (isLogin = false) => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  // Redirect to dashboard based on role
  const redirectToDashboard = (role) => {
    // Store user data in localStorage
    const userData = {
      email: formData.email,
      role: role,
      name: formData.name || formData.email.split("@")[0],
      isAuthenticated: true,
      loginTime: new Date().toISOString(),
    };

    localStorage.setItem("skilllink-user", JSON.stringify(userData));

    // Redirect based on role
    switch (role) {
      case "admin":
        navigate("/dashboard/admin");
        break;
      case "recruiter":
        navigate("/dashboard/recruiter");
        break;
      case "student":
      default:
        navigate("/dashboard/student");
        break;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formErrors = validateForm(activeTab === "login");

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Check for admin credentials (hidden from UI)
      if (
        activeTab === "login" &&
        formData.email === "skilllink2025" &&
        formData.password === "aman@05ag"
      ) {
        alert("Admin login successful! Redirecting to admin dashboard...");
        redirectToDashboard("admin");
      } else {
        alert(
          `${
            activeTab === "login" ? "Login" : "Signup"
          } successful as ${userRole}!`
        );
        // Redirect based on selected role
        redirectToDashboard(userRole);
      }

      if (rememberMe) {
        // Store login state securely
        localStorage.setItem("skilllink-remember", "true");
      }

      setIsSubmitting(false);
    }, 1000);
  };

  // Social login handlers
  const handleSocialLogin = (provider) => {
    alert(`Logging in with ${provider}...`);
    // For demo purposes, redirect to student dashboard
    redirectToDashboard("student");
  };

  return (
    <div className="skilllink-auth-container">
      <div className="cyberpunk-bg">
        <div className="neon-grid"></div>
        <div className="glowing-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <div className="auth-card">
        <div className="card-header">
          <h1 className="logo">
            Skill<span>Link</span>
          </h1>
          <p className="tagline">Connect • Grow • Succeed</p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
            <div ref={tabLineRef} className="tab-line"></div>
          </div>
        </div>

        <div className="role-selector">
          <label>I am a:</label>
          <div className="role-buttons">
            <button
              type="button"
              className={`role-btn ${userRole === "student" ? "active" : ""}`}
              onClick={() => setUserRole("student")}
            >
              <i className="fas fa-user-graduate"></i> Student
            </button>
            <button
              type="button"
              className={`role-btn ${userRole === "recruiter" ? "active" : ""}`}
              onClick={() => setUserRole("recruiter")}
            >
              <i className="fas fa-briefcase"></i> Recruiter
            </button>
            {activeTab === "login" && (
              <button
                type="button"
                className={`role-btn ${userRole === "admin" ? "active" : ""}`}
                onClick={() => setUserRole("admin")}
              >
                <i className="fas fa-shield-alt"></i> Admin
              </button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {activeTab === "signup" && (
            <div className="form-group">
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? "error" : ""}
                  placeholder="Full Name"
                />
                <i className="fas fa-user input-icon"></i>
              </div>
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
          )}

          <div className="form-group">
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "error" : ""}
                placeholder="Email Address"
              />
              <i className="fas fa-envelope input-icon"></i>
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? "error" : ""}
                placeholder="Password"
              />
              <i className="fas fa-lock input-icon"></i>
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </button>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          {activeTab === "signup" && (
            <div className="form-group">
              <div className="input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={errors.confirmPassword ? "error" : ""}
                  placeholder="Confirm Password"
                />
                <i className="fas fa-lock input-icon"></i>
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <i
                    className={`fas ${
                      showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          )}

          {activeTab === "login" && (
            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className={`submit-btn ${isSubmitting ? "loading" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Processing...
              </>
            ) : activeTab === "login" ? (
              "Login to SkillLink"
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-buttons">
            <button
              type="button"
              className="social-btn google"
              onClick={() => handleSocialLogin("Google")}
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              type="button"
              className="social-btn linkedin"
              onClick={() => handleSocialLogin("LinkedIn")}
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button
              type="button"
              className="social-btn github"
              onClick={() => handleSocialLogin("GitHub")}
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillLinkAuth;
