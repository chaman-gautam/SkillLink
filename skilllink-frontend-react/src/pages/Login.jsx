// LOGIN PAGE
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    role: "student",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin credentials check
    if (
      formData.email === "skilllink25@gmail.com" &&
      formData.password === "Skill@link"
    ) {
      navigate("/admin-dashboard");
      return;
    }

    // Role-based redirection
    switch (formData.role) {
      case "student":
        navigate("/student-dashboard");
        break;
      case "recruiter":
        navigate("/recruiter-dashboard");
        break;
      case "admin":
        navigate("/admin-dashboard");
        break;
      default:
        navigate("/student-dashboard");
    }
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glassmorphism p-8 rounded-2xl w-full max-w-md glow">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">I am a:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
            >
              <option value="student">Student</option>
              <option value="recruiter">Recruiter</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              required
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg font-semibold ${
              isFormValid
                ? "bg-cyan-500 glow cursor-pointer"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-cyan-300 hover:underline">
            Sign up
          </a>
        </p>

        {/* Admin Credentials Hint */}
        <div className="mt-4 p-3 bg-gray-800 rounded-lg text-sm">
          <p className="font-semibold">Admin Demo:</p>
          <p>Email: skilllink25@gmail.com</p>
          <p>Password: Skill@link</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
