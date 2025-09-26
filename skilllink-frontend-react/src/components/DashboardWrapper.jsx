// components/DashboardWrapper.js
import React from "react";
import { useParams, Navigate } from "react-router-dom";
// import StudentDashboard from "./dashboards/StudentDashboard";
// import RecruiterDashboard from "./dashboards/RecruiterDashboard";
// import AdminDashboard from "./dashboards/AdminDashboard";

import StudentDashboard from "../pages/StudentDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import AdminDashboard from "../pages/AdminDashboard";
// import "./../styles/Dashboard.css";
import "../components/DashboardWrapper.css";

const DashboardWrapper = () => {
  const { role } = useParams();
  const user = JSON.parse(localStorage.getItem("skilllink-user"));

  // Redirect to login if not authenticated
  if (!user || !user.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Redirect to correct dashboard if role doesn't match URL
  if (user.role !== role) {
    return <Navigate to={`/dashboard/${user.role}`} replace />;
  }

  const renderDashboard = () => {
    switch (role) {
      case "student":
        return <StudentDashboard user={user} />;
      case "recruiter":
        return <RecruiterDashboard user={user} />;
      case "admin":
        return <AdminDashboard user={user} />;
      default:
        return <Navigate to="/" replace />;
    }
  };

  return <div className="dashboard-container">{renderDashboard()}</div>;
};

export default DashboardWrapper;
