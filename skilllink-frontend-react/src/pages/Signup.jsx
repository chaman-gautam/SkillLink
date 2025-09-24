// SIGNUP PAGE
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    otp: "",
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
    if (step === 1) {
      setStep(2); // Show OTP verification
    } else {
      // Redirect based on role
      navigate(
        formData.role === "student"
          ? "/student-dashboard"
          : "/recruiter-dashboard"
      );
    }
  };

  const isStep1Valid =
    formData.name &&
    formData.username &&
    formData.email &&
    formData.password &&
    formData.confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glassmorphism p-8 rounded-2xl w-full max-w-md glow">
        <h2 className="text-3xl font-bold text-center mb-6">Join SkillLink</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 ? (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
              >
                <option value="student">Student</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </>
          ) : (
            <div className="text-center">
              <p className="mb-4">Enter OTP sent to {formData.email}</p>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-center text-2xl"
                maxLength="6"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={step === 1 && !isStep1Valid}
            className={`w-full py-3 rounded-lg font-semibold ${
              (step === 1 ? isStep1Valid : true)
                ? "bg-cyan-500 glow cursor-pointer"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            {step === 1 ? "Send OTP" : "Verify & Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
