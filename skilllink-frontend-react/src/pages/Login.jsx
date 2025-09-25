// // LOGIN PAGE
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     role: "student",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Admin credentials check
//     if (
//       formData.email === "skilllink25@gmail.com" &&
//       formData.password === "Skill@link"
//     ) {
//       navigate("/admin-dashboard");
//       return;
//     }

//     // Role-based redirection
//     switch (formData.role) {
//       case "student":
//         navigate("/student-dashboard");
//         break;
//       case "recruiter":
//         navigate("/recruiter-dashboard");
//         break;
//       case "admin":
//         navigate("/admin-dashboard");
//         break;
//       default:
//         navigate("/student-dashboard");
//     }
//   };

//   const isFormValid = formData.email && formData.password;

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="glassmorphism p-8 rounded-2xl w-full max-w-md glow">
//         <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Role Selection */}
//           <div>
//             <label className="block text-sm font-medium mb-2">I am a:</label>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
//             >
//               <option value="student">Student</option>
//               <option value="recruiter">Recruiter</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={!isFormValid}
//             className={`w-full py-3 rounded-lg font-semibold ${
//               isFormValid
//                 ? "bg-cyan-500 glow cursor-pointer" + {}
//                 : "bg-gray-600 cursor-not-allowed"
//             }`}
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-6">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-cyan-300 hover:underline">
//             Sign up
//           </a>
//         </p>

//         {/* Admin Credentials Hint */}
//         <div className="mt-4 p-3 bg-gray-800 rounded-lg text-sm">
//           <p className="font-semibold">Admin Demo:</p>
//           <p>Email: skilllink25@gmail.com</p>
//           <p>Password: Skill@link</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// LOGIN PAGE
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    role: "student",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Admin credentials check
      if (
        formData.email === "skilllink25@gmail.com" &&
        formData.password === "Skill@link"
      ) {
        login(formData.email, formData.password, "admin");
        navigate("/admin-dashboard");
        return;
      }

      // Regular user authentication
      if (formData.email && formData.password) {
        login(formData.email, formData.password, formData.role);

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
      } else {
        setError("Please fill in all fields");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glassmorphism p-8 rounded-2xl w-full max-w-md glow">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">I am a:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
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
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
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
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
              required
            />
          </div>

          {/* Submit Button - FIXED SYNTAX */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              isFormValid && !loading
                ? "bg-cyan-500 hover:bg-cyan-600 glow cursor-pointer"
                : "bg-gray-600 cursor-not-allowed opacity-50"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-cyan-300 hover:underline">
            Sign up
          </Link>
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
