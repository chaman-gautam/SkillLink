// Mock API service with realistic delays and error handling
const API_BASE_URL = "https://api.skilllink.com/v1";

const simulateNetworkDelay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000 + 500));

const handleResponse = async (response) => {
  await simulateNetworkDelay();

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "API request failed");
  }

  return response.json();
};

// Mock API functions
export const api = {
  // Authentication
  login: async (credentials) => {
    await simulateNetworkDelay();

    // Mock authentication logic
    if (
      credentials.email === "skilllink25@gmail.com" &&
      credentials.password === "Skill@link"
    ) {
      return {
        user: {
          id: 1,
          email: credentials.email,
          role: "admin",
          name: "Admin User",
        },
        token: "mock-jwt-token",
      };
    }

    throw new Error("Invalid credentials");
  },

  // Opportunities
  getOpportunities: async (filters = {}) => {
    await simulateNetworkDelay();

    const opportunities = [
      {
        id: 1,
        title: "Senior React Developer",
        company: "TechCorp",
        type: "job",
        location: "Remote",
        salary: "$90,000 - $120,000",
        description:
          "We are looking for an experienced React developer to join our team...",
        requirements: ["5+ years React experience", "TypeScript", "Node.js"],
        postedDate: "2024-01-15",
        deadline: "2024-02-15",
        applicants: 47,
      },
      {
        id: 2,
        title: "Frontend Internship",
        company: "StartUp Inc",
        type: "internship",
        location: "New York, NY",
        salary: "$25/hr",
        description: "Summer internship for frontend development students...",
        requirements: ["React knowledge", "CSS", "Git"],
        postedDate: "2024-01-10",
        deadline: "2024-01-30",
        applicants: 23,
      },
    ];

    // Apply filters
    let filtered = opportunities;
    if (filters.type && filters.type !== "all") {
      filtered = filtered.filter((opp) => opp.type === filters.type);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (opp) =>
          opp.title.toLowerCase().includes(searchLower) ||
          opp.company.toLowerCase().includes(searchLower)
      );
    }

    return { opportunities: filtered, total: filtered.length };
  },

  // Challenges
  getChallenges: async () => {
    await simulateNetworkDelay();

    return [
      {
        id: 1,
        title: "React Component Challenge",
        difficulty: "easy",
        duration: "2 hours",
        description: "Build a responsive React component with modern hooks",
        tags: ["React", "JavaScript", "Frontend"],
        participants: 124,
        completionRate: 85,
      },
      {
        id: 2,
        title: "Full Stack E-commerce",
        difficulty: "hard",
        duration: "1 week",
        description:
          "Build a complete e-commerce platform with payment integration",
        tags: ["MERN", "Payment", "Auth"],
        participants: 67,
        completionRate: 45,
      },
    ];
  },

  // User management
  updateProfile: async (userId, updates) => {
    await simulateNetworkDelay();
    return { success: true, user: updates };
  },

  // Document upload
  uploadDocument: async (file, userId) => {
    await simulateNetworkDelay();

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      throw new Error("File size too large. Maximum size is 10MB.");
    }

    return {
      id: Date.now(),
      name: file.name,
      type: file.type,
      size: file.size,
      status: "pending",
      uploadedAt: new Date().toISOString(),
    };
  },
};

// Error boundary component
export const withErrorHandling =
  (fn) =>
  async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };
