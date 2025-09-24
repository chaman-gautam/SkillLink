// OPPORTUNITY HUB
import React, { useState } from "react";

const OpportunityHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const opportunities = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      type: "job",
      location: "Remote",
      description: "Looking for experienced React developers",
    },
    {
      id: 2,
      title: "Summer Internship",
      company: "StartUp Inc",
      type: "internship",
      location: "New York",
      description: "3-month paid internship for students",
    },
  ];

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || opp.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Opportunity Hub</h1>

        {/* Search and Filters */}
        <div className="glassmorphism p-6 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
            >
              <option value="all">All Types</option>
              <option value="job">Jobs</option>
              <option value="internship">Internships</option>
              <option value="hackathon">Hackathons</option>
              <option value="scholarship">Scholarships</option>
            </select>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opp) => (
            <div key={opp.id} className="glassmorphism p-6 rounded-2xl glow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{opp.title}</h3>
                  <p className="text-lavender">{opp.company}</p>
                </div>
                <span className="bg-cyan-500 text-black px-2 py-1 rounded text-sm">
                  {opp.type}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{opp.description}</p>

              <div className="flex justify-between items-center">
                <span className="text-sm">{opp.location}</span>
                <button className="bg-cyan-500 px-4 py-2 rounded-lg glow">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunityHub;
