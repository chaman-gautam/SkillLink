// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="glassmorphism p-4 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold neon-text">
//           SkillLink
//         </Link>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white">
//             <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-cyan-300 transition">
//             Home
//           </Link>
//           <Link to="/about" className="hover:text-cyan-300 transition">
//             About
//           </Link>
//           <Link to="/opportunities" className="hover:text-cyan-300 transition">
//             Opportunities
//           </Link>
//           <Link to="/challenges" className="hover:text-cyan-300 transition">
//             Challenges
//           </Link>
//           <Link to="/login" className="glassmorphism px-4 py-2 rounded-lg glow">
//             Login
//           </Link>
//           <Link to="/signup" className="bg-cyan-500 px-4 py-2 rounded-lg glow">
//             Sign Up
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 glassmorphism rounded-lg p-4">
//           <div className="flex flex-col space-y-4">
//             <Link to="/" className="hover:text-cyan-300">
//               Home
//             </Link>
//             <Link to="/about" className="hover:text-cyan-300">
//               About
//             </Link>
//             <Link to="/opportunities" className="hover:text-cyan-300">
//               Opportunities
//             </Link>
//             <Link to="/challenges" className="hover:text-cyan-300">
//               Challenges
//             </Link>
//             <Link
//               to="/login"
//               className="glassmorphism px-4 py-2 rounded-lg text-center"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="bg-cyan-500 px-4 py-2 rounded-lg text-center"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import portfolio from "../pages/Portfolio";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useApp } from "../contexts/AppContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { mobileMenuOpen, setMobileMenuOpen, notifications } = useApp();
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path
      ? "text-cyan-300 border-b-2 border-cyan-300"
      : "text-gray-300 hover:text-cyan-300";
  };

  const unreadNotifications = notifications.filter((n) => !n.read).length;

  return (
    <>
      <nav className="bg-black sticky top-0 z-50 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className=" pl-5 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SkillLink
                </span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                SkillLink
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={` hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${isActiveLink(
                  "/"
                )}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={` font-medium hover:text-blue-600 px-3 py-2 text-sm transition-colors ${isActiveLink(
                  "/about"
                )}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={` hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors  ${isActiveLink(
                  "/contact"
                )}`}
              >
                Contact
              </Link>

              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/notifications" className="relative">
                    <i className="fas fa-bell text-xl"></i>
                    {unreadNotifications > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {unreadNotifications}
                      </span>
                    )}
                  </Link>
                  <div className="relative group">
                    <button className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {user.avatar}
                        </span>
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 glassmorphism rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <Link
                        to={`/${user.role}-dashboard`}
                        className="block px-4 py-3 hover:bg-white/10 rounded-t-lg"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to={`/${user.role}-profile`}
                        className="block px-4 py-3 hover:bg-white/10"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-3 hover:bg-white/10"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-3 hover:bg-red-500/20 text-red-300 rounded-b-lg"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-4">
                  <Link
                    to={"/login"}
                    className="text-yellow-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Login
                  </Link>

                  <Link
                    to={"/signup"}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg transition-shadow hover:text-black"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glassmorphism"
            >
              <i
                className={`fas ${
                  mobileMenuOpen ? "fa-times" : "fa-bars"
                } text-xl`}
              ></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div className="absolute right-0 top-0 h-full w-80 glassmorphism-heavy slide-in-right">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Menu</h3>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <nav className="space-y-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {user.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-400 capitalize">
                        {user.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/${user.role}-dashboard`}
                    className="block p-3 rounded-lg hover:bg-white/10"
                  >
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                  </Link>

                  <Link
                    to="/notifications"
                    className="block p-3 rounded-lg hover:bg-white/10"
                  >
                    <i className="fas fa-bell mr-3"></i>
                    Notifications
                    {unreadNotifications > 0 && (
                      <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs inline-flex items-center justify-center">
                        {unreadNotifications}
                      </span>
                    )}
                  </Link>
                </>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="block w-full p-3 text-center rounded-lg glassmorphism"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full p-3 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              <div className="border-t border-white/20 pt-4">
                <Link to="/" className="block p-3 rounded-lg hover:bg-white/10">
                  Home
                </Link>
                <Link
                  to="/opportunities"
                  className="block p-3 rounded-lg hover:bg-white/10"
                >
                  Opportunities
                </Link>
                <Link
                  to="/challenges"
                  className="block p-3 rounded-lg hover:bg-white/10"
                >
                  Challenges
                </Link>
                <Link
                  to="/about"
                  className="block p-3 rounded-lg hover:bg-white/10"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block p-3 rounded-lg hover:bg-white/10"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
