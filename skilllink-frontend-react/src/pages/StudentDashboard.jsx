// STUDENT DASHBOARD
import React, { useState } from "react";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = {
    appliedJobs: 12,
    opportunities: 45,
    verificationStatus: "Pending",
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 glassmorphism min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-8">Student Portal</h2>
        <nav className="space-y-2">
          {[
            "dashboard",
            "profile",
            "opportunities",
            "ai-mentor",
            "challenges",
            "documents",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left p-3 rounded-lg transition ${
                activeTab === tab ? "bg-cyan-500" : "hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glassmorphism p-6 rounded-2xl glow">
            <h3 className="text-xl font-semibold mb-2">Applied Jobs</h3>
            <p className="text-3xl text-cyan-300">{stats.appliedJobs}</p>
          </div>
          <div className="glassmorphism p-6 rounded-2xl glow">
            <h3 className="text-xl font-semibold mb-2">
              Available Opportunities
            </h3>
            <p className="text-3xl text-lavender">{stats.opportunities}</p>
          </div>
          <div className="glassmorphism p-6 rounded-2xl glow">
            <h3 className="text-xl font-semibold mb-2">Verification Status</h3>
            <p className="text-3xl text-yellow-300">
              {stats.verificationStatus}
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glassmorphism p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
              <span>Applied for Frontend Developer at TechCorp</span>
              <span className="text-sm text-gray-400">2 days ago</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
              <span>Completed React Challenge</span>
              <span className="text-sm text-gray-400">1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
