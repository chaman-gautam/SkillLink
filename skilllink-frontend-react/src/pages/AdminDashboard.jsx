// ADMIN DASHBOARD
import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("reports");

  const stats = {
    activeUsers: 1247,
    pendingDocs: 23,
    reportsSubmitted: 8,
    activeChallenges: 15,
  };

  const tabs = [
    { id: "reports", label: "Reports", icon: "fas fa-flag" },
    { id: "challenges", label: "Challenge Management", icon: "fas fa-trophy" },
    {
      id: "opportunities",
      label: "Opportunity Management",
      icon: "fas fa-briefcase",
    },
    {
      id: "documents",
      label: "Document Verification",
      icon: "fas fa-file-shield",
    },
    { id: "users", label: "User Control", icon: "fas fa-users" },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-lavender mb-8">Platform management and analytics</p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glassmorphism p-6 rounded-2xl glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Active Users</p>
                <p className="text-3xl font-bold text-cyan-300">
                  {stats.activeUsers}
                </p>
              </div>
              <i className="fas fa-users text-2xl text-lavender"></i>
            </div>
          </div>

          <div className="glassmorphism p-6 rounded-2xl glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Pending Docs</p>
                <p className="text-3xl font-bold text-yellow-300">
                  {stats.pendingDocs}
                </p>
              </div>
              <i className="fas fa-file-alt text-2xl text-lavender"></i>
            </div>
          </div>

          <div className="glassmorphism p-6 rounded-2xl glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Reports</p>
                <p className="text-3xl font-bold text-red-300">
                  {stats.reportsSubmitted}
                </p>
              </div>
              <i className="fas fa-flag text-2xl text-lavender"></i>
            </div>
          </div>

          <div className="glassmorphism p-6 rounded-2xl glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Active Challenges</p>
                <p className="text-3xl font-bold text-green-300">
                  {stats.activeChallenges}
                </p>
              </div>
              <i className="fas fa-trophy text-2xl text-lavender"></i>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="glassmorphism rounded-2xl overflow-hidden">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 transition ${
                  activeTab === tab.id ? "bg-cyan-500" : "hover:bg-gray-700"
                }`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "reports" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Reports Management
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-semibold">Fraudulent Job Post</p>
                      <p className="text-sm text-gray-400">
                        Reported by user123
                      </p>
                    </div>
                    <div className="space-x-2">
                      <button className="bg-green-500 px-3 py-1 rounded">
                        Resolve
                      </button>
                      <button className="bg-red-500 px-3 py-1 rounded">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">User Management</h3>
                <p>User control panel content...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
