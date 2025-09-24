// RECRUITER DASHBOARD
import React, { useState } from "react";

const RecruiterDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const applicants = [
    {
      id: 1,
      name: "John Doe",
      position: "Frontend Developer",
      status: "New",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Backend Developer",
      status: "Reviewed",
      date: "2024-01-14",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 glassmorphism min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-8">Recruiter Portal</h2>
        <nav className="space-y-2">
          {[
            "overview",
            "post-opportunity",
            "verify-documents",
            "manage-challenges",
            "reports",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left p-3 rounded-lg transition ${
                activeTab === tab ? "bg-cyan-500" : "hover:bg-gray-700"
              }`}
            >
              {tab
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Recruiter Dashboard</h1>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glassmorphism p-6 rounded-2xl glow">
            <h3 className="text-xl font-semibold mb-2">Total Applicants</h3>
            <p className="text-3xl text-cyan-300">47</p>
          </div>
          <div className="glassmorphism p-6 rounded-2xl glow">
            <h3 className="text-xl font-semibold mb-2">Active Posts</h3>
            <p className="text-3xl text-lavender">12</p>
          </div>
          <div className="glassmorphism p-6 rounded-2xl glow">
            <h3 className="text-xl font-semibold mb-2">
              Pending Verifications
            </h3>
            <p className="text-3xl text-yellow-300">8</p>
          </div>
        </div>

        {/* Recent Applicants */}
        <div className="glassmorphism p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Recent Applicants</h3>
          <div className="space-y-3">
            {applicants.map((applicant) => (
              <div
                key={applicant.id}
                className="flex justify-between items-center p-3 bg-gray-800 rounded-lg"
              >
                <div>
                  <p className="font-semibold">{applicant.name}</p>
                  <p className="text-sm text-gray-400">{applicant.position}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      applicant.status === "New"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {applicant.status}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">{applicant.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
