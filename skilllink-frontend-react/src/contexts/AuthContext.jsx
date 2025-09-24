import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem("skilllink_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock authentication logic
      let userData;
      if (email === "skilllink25@gmail.com" && password === "Skill@link") {
        userData = {
          id: 1,
          email,
          role: "admin",
          name: "Admin User",
          avatar: "👨‍💼",
        };
      } else if (role === "student") {
        userData = {
          id: 2,
          email,
          role: "student",
          name: "Student User",
          avatar: "🎓",
          skills: ["React", "JavaScript"],
          verificationStatus: "pending",
        };
      } else if (role === "recruiter") {
        userData = {
          id: 3,
          email,
          role: "recruiter",
          name: "Recruiter User",
          avatar: "💼",
          company: "TechCorp",
        };
      } else {
        throw new Error("Invalid credentials");
      }

      setUser(userData);
      localStorage.setItem("skilllink_user", JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("skilllink_user");
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("skilllink_user", JSON.stringify(updatedUser));
  };

  const value = {
    user,
    login,
    logout,
    updateUser,
    loading,
    error,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
