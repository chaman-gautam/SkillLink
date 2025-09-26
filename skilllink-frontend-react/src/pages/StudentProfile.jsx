import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Mock data
  const profileData = {
    name: "Alex Johnson",
    headline: "Senior Frontend Developer | React Specialist",
    location: "San Francisco, CA",
    bio: "Passionate about creating accessible and performant web applications. 5+ years of experience in React ecosystem.",
    stats: {
      badges: 12,
      challenges: 24,
      projects: 18,
    },
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "CSS/SCSS", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "UI/UX Design", level: 60 },
    ],
    projects: [
      {
        id: 1,
        title: "E-commerce Dashboard",
        description: "Analytics dashboard for e-commerce performance metrics",
        tags: ["React", "Chart.js", "API"],
        status: "Completed",
      },
      {
        id: 2,
        title: "Learning Platform",
        description: "Interactive coding tutorial platform",
        tags: ["Vue", "Firebase", "Education"],
        status: "In Progress",
      },
    ],
    documents: [
      {
        name: "Resume.pdf",
        type: "Resume",
        status: "Approved",
        uploadDate: "2023-10-15",
      },
      {
        name: "Portfolio.pdf",
        type: "Portfolio",
        status: "Pending",
        uploadDate: "2023-11-20",
      },
      {
        name: "Certification.docx",
        type: "Certification",
        status: "Rejected",
        uploadDate: "2023-09-05",
      },
    ],
    badges: [
      {
        id: 1,
        name: "React Master",
        description: "Completed all React challenges",
        icon: "⚛️",
      },
      {
        id: 2,
        name: "TypeScript Pro",
        description: "Mastered advanced TypeScript",
        icon: "📘",
      },
      {
        id: 3,
        name: "Accessibility Champion",
        description: "Built fully accessible apps",
        icon: "♿",
      },
      {
        id: 4,
        name: "Performance Guru",
        description: "Optimized app performance",
        icon: "⚡",
      },
    ],
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "documents", label: "Documents" },
    { id: "badges", label: "Badges" },
  ];

  return (
    <div className="profile-container">
      {/* Header Section */}
      <ProfileHeader
        profileData={profileData}
        onEditClick={() => setIsEditModalOpen(true)}
      />

      {/* Tabs Navigation */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div className="tab-content">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <OverviewTab profileData={profileData} key="overview" />
          )}
          {activeTab === "skills" && (
            <SkillsTab skills={profileData.skills} key="skills" />
          )}
          {activeTab === "projects" && (
            <ProjectsTab projects={profileData.projects} key="projects" />
          )}
          {activeTab === "documents" && (
            <DocumentsTab documents={profileData.documents} key="documents" />
          )}
          {activeTab === "badges" && (
            <BadgesTab badges={profileData.badges} key="badges" />
          )}
        </AnimatePresence>
      </div>

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <EditProfileModal
            onClose={() => setIsEditModalOpen(false)}
            profileData={profileData}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Profile Header Component
const ProfileHeader = ({ profileData, onEditClick }) => {
  return (
    <div className="profile-header">
      {/* Cover Banner */}
      <div className="cover-banner">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80"
          alt="Cover"
          className="cover-image"
        />
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <div className="avatar-section">
          <div className="avatar-container">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="avatar"
            />
            <button
              className="edit-avatar-btn"
              onClick={onEditClick}
              aria-label="Edit profile"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="profile-details">
          <h1 className="profile-name">{profileData.name}</h1>
          <p className="profile-headline">{profileData.headline}</p>
          <p className="profile-location">{profileData.location}</p>
        </div>
      </div>
    </div>
  );
};

// Tabs Component
const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <nav className="tabs-nav" role="tablist">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-tab`}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onTabChange(tab.id);
              }
            }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                className="tab-indicator"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Overview Tab Component
const OverviewTab = ({ profileData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="overview-tab"
      role="tabpanel"
      id="overview-tab"
    >
      <div className="overview-grid">
        <div className="bio-section">
          <h2>About</h2>
          <p>{profileData.bio}</p>
        </div>

        <div className="stats-section">
          <h2>Key Stats</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">{profileData.stats.badges}</span>
              <span className="stat-label">Badges</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {profileData.stats.challenges}
              </span>
              <span className="stat-label">Challenges</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{profileData.stats.projects}</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Skills Tab Component
const SkillsTab = ({ skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="skills-tab"
      role="tabpanel"
      id="skills-tab"
    >
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// Skill Card Component
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="skill-card"
      whileHover={{ scale: 1.02 }}
    >
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

// Projects Tab Component
const ProjectsTab = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="projects-tab"
      role="tabpanel"
      id="projects-tab"
    >
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="project-card"
      whileHover={{ y: -5 }}
    >
      <div className="project-image">
        <img
          src={`https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80&${index}`}
          alt={project.title}
        />
        <span
          className={`project-status ${project.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {project.status}
        </span>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Documents Tab Component
const DocumentsTab = ({ documents }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="documents-tab"
      role="tabpanel"
      id="documents-tab"
    >
      <div className="documents-list">
        {documents.map((doc, index) => (
          <DocumentItem key={doc.name} document={doc} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// Document Item Component
const DocumentItem = ({ document, index }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "#10b981";
      case "pending":
        return "#f59e0b";
      case "rejected":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="document-item"
    >
      <div className="document-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>
      <div className="document-info">
        <h4>{document.name}</h4>
        <p>
          {document.type} • Uploaded {document.uploadDate}
        </p>
      </div>
      <div className="document-status">
        <span
          className="status-badge"
          style={{ backgroundColor: getStatusColor(document.status) }}
        >
          {document.status}
        </span>
      </div>
    </motion.div>
  );
};

// Badges Tab Component
const BadgesTab = ({ badges }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="badges-tab"
      role="tabpanel"
      id="badges-tab"
    >
      <div className="badges-grid">
        {badges.map((badge, index) => (
          <BadgeCard key={badge.id} badge={badge} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// Badge Card Component
const BadgeCard = ({ badge, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="badge-card"
      whileHover={{ scale: 1.05, rotate: 2 }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <div className="badge-icon">{badge.icon}</div>
      <h4>{badge.name}</h4>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="badge-tooltip"
        >
          {badge.description}
        </motion.div>
      )}
    </motion.div>
  );
};

// Edit Profile Modal Component
const EditProfileModal = ({ onClose, profileData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="edit-profile-title"
        aria-modal="true"
      >
        <div className="modal-header">
          <h2 id="edit-profile-title">Edit Profile</h2>
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <form className="edit-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                defaultValue={profileData.name}
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="headline">Headline</label>
              <input
                type="text"
                id="headline"
                defaultValue={profileData.headline}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" rows="4" defaultValue={profileData.bio} />
            </div>

            <div className="form-actions">
              <button type="button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

// CSS Styles
const styles = `
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

/* Header Styles */
.profile-header {
  position: relative;
}

.cover-banner {
  height: 200px;
  overflow: hidden;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  padding: 0 32px 32px;
  margin-top: -75px;
}

.avatar-section {
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
}

.avatar-container {
  position: relative;
  display: inline-block;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
}

.edit-avatar-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.edit-avatar-btn:hover {
  background: #2563eb;
}

.profile-details {
  margin-top: 16px;
}

.profile-name {
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #1f2937;
}

.profile-headline {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0 0 4px 0;
}

.profile-location {
  color: #9ca3af;
  margin: 0;
}

/* Tabs Styles */
.tabs-nav {
  border-bottom: 1px solid #e5e7eb;
}

.tabs-container {
  display: flex;
  padding: 0 32px;
}

.tab-button {
  position: relative;
  padding: 16px 24px;
  background: none;
  border: none;
  font-size: 1rem;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.2s;
}

.tab-button:hover,
.tab-button:focus {
  color: #3b82f6;
  outline: none;
}

.tab-button.active {
  color: #3b82f6;
  font-weight: 600;
}

.tab-indicator {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: #3b82f6;
  border-radius: 3px 3px 0 0;
}

/* Tab Content */
.tab-content {
  padding: 32px;
}

/* Overview Tab */
.overview-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
}

.bio-section h2,
.stats-section h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #1f2937;
}

.stats-grid {
  display: grid;
  gap: 16px;
}

.stat-card {
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
}

.stat-label {
  color: #6b7280;
}

/* Skills Tab */
.skills-grid {
  display: grid;
  gap: 16px;
}

.skill-card {
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.skill-name {
  font-weight: 600;
  color: #1f2937;
}

.skill-level {
  color: #6b7280;
}

.progress-bar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #3b82f6;
  border-radius: 4px;
}

/* Projects Tab */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;
}

.project-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-status {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
}

.project-status.completed {
  background: #10b981;
}

.project-status.in-progress {
  background: #f59e0b;
}

.project-content {
  padding: 16px;
}

.project-content h3 {
  margin: 0 0 8px 0;
  color: #1f2937;
}

.project-content p {
  color: #6b7280;
  margin-bottom: 12px;
  font-size: 0.875rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 8px;
  background: #eff6ff;
  color: #3b82f6;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Documents Tab */
.documents-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.document-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
  gap: 16px;
}

.document-icon {
  color: #6b7280;
}

.document-info h4 {
  margin: 0 0 4px 0;
  color: #1f2937;
}

.document-info p {
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
}

.document-status {
  margin-left: auto;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Badges Tab */
.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
}

.badge-card {
  position: relative;
  padding: 24px;
  background: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.badge-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.badge-card h4 {
  margin: 0;
  color: #1f2937;
}

.badge-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 8px 12px;
  background: #1f2937;
  color: white;
  border-radius: 6px;
  font-size: 0.875rem;
  white-space: nowrap;
  z-index: 10;
}

.badge-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #1f2937;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h2 {
  margin: 0;
  color: #1f2937;
}

.close-button {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
}

.close-button:hover {
  background: #f3f4f6;
  color: #374151;
}

.modal-body {
  padding: 24px;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #374151;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
}

.form-actions button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.form-actions button[type="button"] {
  background: #f3f4f6;
  color: #374151;
}

.form-actions button[type="button"]:hover {
  background: #e5e7eb;
}

.form-actions button[type="submit"] {
  background: #3b82f6;
  color: white;
}

.form-actions button[type="submit"]:hover {
  background: #2563eb;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-info {
    padding: 0 20px 20px;
    margin-top: -60px;
  }
  
  .avatar {
    width: 120px;
    height: 120px;
  }
  
  .profile-name {
    font-size: 1.5rem;
  }
  
  .tabs-container {
    padding: 0 20px;
    overflow-x: auto;
  }
  
  .tab-button {
    padding: 12px 16px;
    white-space: nowrap;
  }
  
  .tab-content {
    padding: 20px;
  }
  
  .overview-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .badges-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .modal-content {
    margin: 20px;
  }
}

@media (max-width: 480px) {
  .badges-grid {
    grid-template-columns: 1fr;
  }
  
  .document-item {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  
  .document-status {
    margin-left: 0;
    margin-top: 8px;
  }
  
  .form-actions {
    flex-direction: column;
  }
}
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Profile;
