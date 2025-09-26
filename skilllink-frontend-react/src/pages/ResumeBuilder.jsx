// StudentDash.jsx
import React, { useState, useEffect } from "react";

const ResumeBuilder = () => {
  // State for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    school: "",
    degree: "",
    eduYears: "",
    company: "",
    role: "",
    workDuration: "",
    workDesc: "",
    projectTitle: "",
    projectLink: "",
    projectDesc: "",
  });

  const [skills, setSkills] = useState([]);
  const [progress, setProgress] = useState(0);
  const [collapsedSections, setCollapsedSections] = useState({});

  // Load saved data from localStorage on component mount
  useEffect(() => {
    loadSavedData();
  }, []);

  // Update progress whenever formData or skills change
  useEffect(() => {
    updateProgress();
  }, [formData, skills]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    saveToLocalStorage(id, value);
  };

  const addSkill = () => {
    const skillInput = document.getElementById("skillInput");
    const skill = skillInput.value.trim();

    if (skill) {
      const newSkills = [...skills, skill];
      setSkills(newSkills);
      skillInput.value = "";
      saveSkillsToLocalStorage(newSkills);
    }
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
    saveSkillsToLocalStorage(newSkills);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addSkill();
    }
  };

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  const saveSkillsToLocalStorage = (skillsArray) => {
    localStorage.setItem("skills", JSON.stringify(skillsArray));
  };

  const loadSavedData = () => {
    // Load form data
    const keys = Object.keys(formData);
    keys.forEach((key) => {
      const savedValue = localStorage.getItem(key);
      if (savedValue) {
        setFormData((prev) => ({
          ...prev,
          [key]: savedValue,
        }));
      }
    });

    // Load skills
    const savedSkills = localStorage.getItem("skills");
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills));
    }
  };

  const updateProgress = () => {
    let filledCount = 0;
    const inputs = Object.values(formData);

    // Count filled inputs
    inputs.forEach((value) => {
      if (value.trim() !== "") {
        filledCount++;
      }
    });

    // Count skills
    filledCount += skills.length;

    // Calculate percentage
    const totalCount = Object.keys(formData).length + 5; // Approximate total fields
    const percentage = Math.min(
      100,
      Math.round((filledCount / totalCount) * 100)
    );
    setProgress(percentage);
  };

  const handleDownload = () => {
    alert(
      "PDF download functionality would be implemented here. In a real application, this would generate and download a PDF version of the resume."
    );
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all data?")) {
      localStorage.clear();
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        school: "",
        degree: "",
        eduYears: "",
        company: "",
        role: "",
        workDuration: "",
        workDesc: "",
        projectTitle: "",
        projectLink: "",
        projectDesc: "",
      });
      setSkills([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e] text-[#f8f9fa]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 md:p-8 bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] bg-clip-text text-transparent">
          SkillLink
        </div>
        <div className="hidden md:flex gap-6">
          <a
            href="home.html"
            className="hover:text-[#8b5cf6] transition-colors"
          >
            Home
          </a>
          <a
            href="library.html"
            className="hover:text-[#8b5cf6] transition-colors"
          >
            Library
          </a>
          <a
            href="calendar.html"
            className="hover:text-[#8b5cf6] transition-colors"
          >
            Calendar
          </a>
          <a
            href="about.html"
            className="hover:text-[#8b5cf6] transition-colors"
          >
            About
          </a>
          <a
            href="help&support.html"
            className="hover:text-[#8b5cf6] transition-colors"
          >
            Support
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <a href="Notifications.html">
            <i className="fas fa-bell text-xl hover:text-[#8b5cf6] transition-colors"></i>
          </a>
          <a href="profile2.html">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] cursor-pointer"></div>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 md:px-8 bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, rgba(91,63,211,0.2), transparent 60%)"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] bg-clip-text text-transparent">
          SkillLink Resume Builder
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#d1d5db]">
          Create a professional resume in minutes. Impress employers with a
          tailored resume that highlights your skills and experience.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
        {/* Left Panel - Form */}
        <div className="flex-1">
          <div className="text-center mb-6 text-[#d1d5db]">
            Resume Completion: <span className="font-medium">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Personal Information Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
            <div
              className="flex justify-between items-center mb-6 cursor-pointer"
              onClick={() => toggleSection("personal")}
            >
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <i
                className={`fas fa-chevron-down transition-transform ${
                  collapsedSections.personal ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            <div
              className={`space-y-4 ${
                collapsedSections.personal ? "hidden" : "block"
              }`}
            >
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="+1 (234) 567-8901"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="linkedin.com/in/johndoe"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  GitHub
                </label>
                <input
                  type="url"
                  id="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="github.com/johndoe"
                />
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
            <div
              className="flex justify-between items-center mb-6 cursor-pointer"
              onClick={() => toggleSection("education")}
            >
              <h3 className="text-xl font-semibold">Education</h3>
              <i
                className={`fas fa-chevron-down transition-transform ${
                  collapsedSections.education ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            <div
              className={`space-y-4 ${
                collapsedSections.education ? "hidden" : "block"
              }`}
            >
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  School/University
                </label>
                <input
                  type="text"
                  id="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="University of Technology"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Degree
                </label>
                <input
                  type="text"
                  id="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="Bachelor of Science in Computer Science"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Years
                </label>
                <input
                  type="text"
                  id="eduYears"
                  value={formData.eduYears}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="2018 - 2022"
                />
              </div>
              <button className="bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all">
                <i className="fas fa-plus"></i> Add More Education
              </button>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
            <div
              className="flex justify-between items-center mb-6 cursor-pointer"
              onClick={() => toggleSection("experience")}
            >
              <h3 className="text-xl font-semibold">Work Experience</h3>
              <i
                className={`fas fa-chevron-down transition-transform ${
                  collapsedSections.experience ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            <div
              className={`space-y-4 ${
                collapsedSections.experience ? "hidden" : "block"
              }`}
            >
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="Tech Solutions Inc."
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="Frontend Developer"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Duration
                </label>
                <input
                  type="text"
                  id="workDuration"
                  value={formData.workDuration}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="Jan 2022 - Present"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Description
                </label>
                <textarea
                  id="workDesc"
                  value={formData.workDesc}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white min-h-[100px]"
                  placeholder="Developed responsive web applications using React and Node.js..."
                ></textarea>
              </div>
              <button className="bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all">
                <i className="fas fa-plus"></i> Add More Experience
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
            <div
              className="flex justify-between items-center mb-6 cursor-pointer"
              onClick={() => toggleSection("skills")}
            >
              <h3 className="text-xl font-semibold">Skills</h3>
              <i
                className={`fas fa-chevron-down transition-transform ${
                  collapsedSections.skills ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            <div
              className={`space-y-4 ${
                collapsedSections.skills ? "hidden" : "block"
              }`}
            >
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Add Skills
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="skillInput"
                    onKeyPress={handleKeyPress}
                    className="flex-1 p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                    placeholder="e.g., JavaScript, React, UI/UX Design"
                  />
                  <button
                    onClick={addSkill}
                    className="bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] text-white px-4 py-2 rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {skill}
                    <i
                      className="fas fa-times text-sm cursor-pointer"
                      onClick={() => removeSkill(index)}
                    ></i>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
            <div
              className="flex justify-between items-center mb-6 cursor-pointer"
              onClick={() => toggleSection("projects")}
            >
              <h3 className="text-xl font-semibold">Projects</h3>
              <i
                className={`fas fa-chevron-down transition-transform ${
                  collapsedSections.projects ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            <div
              className={`space-y-4 ${
                collapsedSections.projects ? "hidden" : "block"
              }`}
            >
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Project Title
                </label>
                <input
                  type="text"
                  id="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="E-Commerce Website"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Project Link
                </label>
                <input
                  type="url"
                  id="projectLink"
                  value={formData.projectLink}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white"
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-[#e5e7eb]">
                  Description
                </label>
                <textarea
                  id="projectDesc"
                  value={formData.projectDesc}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-white/10 bg-black/30 text-white min-h-[100px]"
                  placeholder="Developed a full-stack e-commerce platform with payment integration..."
                ></textarea>
              </div>
              <button className="bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all">
                <i className="fas fa-plus"></i> Add More Projects
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleDownload}
              className="flex-1 bg-gradient-to-r from-[#0066ff] via-[#5d3fd3] to-[#8b5cf6] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Download PDF
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="flex-1 lg:sticky lg:top-24 h-fit">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-2xl">
            <div className="text-center mb-8 pb-6 border-b border-white/10">
              <h2 className="text-2xl font-bold mb-2 text-white">
                {formData.fullName || "John Doe"}
              </h2>
              <p className="text-[#8b5cf6]">Frontend Developer</p>
              <div className="flex justify-center gap-6 flex-wrap mt-4 text-sm">
                <span>{formData.email || "john.doe@example.com"}</span>
                <span>{formData.phone || "+1 (234) 567-8901"}</span>
                <span>{formData.linkedin || "linkedin.com/in/johndoe"}</span>
                <span>{formData.github || "github.com/johndoe"}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-[#8b5cf6] border-b border-white/10 pb-2">
                Education
              </h3>
              <div>
                <h4 className="text-lg font-medium mb-1">
                  {formData.school || "University of Technology"}
                </h4>
                <div className="flex justify-between text-[#d1d5db] text-sm mb-1">
                  <span>
                    {formData.degree ||
                      "Bachelor of Science in Computer Science"}
                  </span>
                  <span>{formData.eduYears || "2018 - 2022"}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-[#8b5cf6] border-b border-white/10 pb-2">
                Experience
              </h3>
              <div>
                <h4 className="text-lg font-medium mb-1">
                  {formData.role || "Frontend Developer"}
                </h4>
                <div className="flex justify-between text-[#d1d5db] text-sm mb-1">
                  <span>{formData.company || "Tech Solutions Inc."}</span>
                  <span>{formData.workDuration || "Jan 2022 - Present"}</span>
                </div>
                <p>
                  {formData.workDesc ||
                    "Developed responsive web applications using React and Node.js..."}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-[#8b5cf6] border-b border-white/10 pb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#8b5cf6]/20 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
                {skills.length === 0 && (
                  <span className="text-[#d1d5db]">No skills added yet</span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-[#8b5cf6] border-b border-white/10 pb-2">
                Projects
              </h3>
              <div>
                <h4 className="text-lg font-medium mb-1">
                  {formData.projectTitle || "E-Commerce Website"}
                </h4>
                <p className="text-sm mb-1">
                  {formData.projectLink || "https://example.com"}
                </p>
                <p>
                  {formData.projectDesc ||
                    "Developed a full-stack e-commerce platform with payment integration..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-[#16213e] to-[#1a1a2e] py-12 px-4 md:px-8 mt-16 text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="privacy_policy.html"
            className="hover:text-[#8b5cf6] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="terms&conditions.html"
            className="hover:text-[#8b5cf6] transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="help&support.html"
            className="hover:text-[#8b5cf6] transition-colors"
          >
            Help Center
          </a>
        </div>
        <p className="text-[#9ca3af] text-sm">
          © 2025 SkillLink. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ResumeBuilder;
