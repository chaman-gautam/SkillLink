// CHALLENGES PAGE
import React, { useState } from "react";

const Challenges = () => {
  const [difficulty, setDifficulty] = useState("all");

  const challenges = [
    {
      id: 1,
      title: "React Component Challenge",
      description: "Build a responsive React component with modern hooks",
      difficulty: "easy",
      duration: "2 hours",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "API Integration Task",
      description: "Create a full CRUD application with REST API",
      difficulty: "medium",
      duration: "4 hours",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Full Stack E-commerce",
      description: "Build a complete e-commerce platform",
      difficulty: "hard",
      duration: "1 week",
      tags: ["MERN", "Payment", "Auth"],
    },
  ];

  const getDifficultyColor = (level) => {
    switch (level) {
      case "easy":
        return "text-green-400";
      case "medium":
        return "text-yellow-400";
      case "hard":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const filteredChallenges =
    difficulty === "all"
      ? challenges
      : challenges.filter((challenge) => challenge.difficulty === difficulty);

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Coding Challenges
        </h1>
        <p className="text-lavender text-center mb-8">
          Test your skills and climb the leaderboard
        </p>

        {/* Filters */}
        <div className="glassmorphism p-6 rounded-2xl mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setDifficulty("all")}
              className={`px-4 py-2 rounded-lg ${
                difficulty === "all" ? "bg-cyan-500" : "bg-gray-700"
              }`}
            >
              All Levels
            </button>
            <button
              onClick={() => setDifficulty("easy")}
              className={`px-4 py-2 rounded-lg ${
                difficulty === "easy" ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              Easy
            </button>
            <button
              onClick={() => setDifficulty("medium")}
              className={`px-4 py-2 rounded-lg ${
                difficulty === "medium" ? "bg-yellow-500" : "bg-gray-700"
              }`}
            >
              Medium
            </button>
            <button
              onClick={() => setDifficulty("hard")}
              className={`px-4 py-2 rounded-lg ${
                difficulty === "hard" ? "bg-red-500" : "bg-gray-700"
              }`}
            >
              Hard
            </button>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="glassmorphism p-6 rounded-2xl glow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{challenge.title}</h3>
                <span
                  className={`px-2 py-1 rounded text-sm ${getDifficultyColor(
                    challenge.difficulty
                  )}`}
                >
                  {challenge.difficulty.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{challenge.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 px-2 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-lavender">
                  {challenge.duration}
                </span>
                <button className="bg-cyan-500 px-4 py-2 rounded-lg glow hover:scale-105 transition">
                  Start Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
