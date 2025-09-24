// // import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// // import "./App.css";
// // import StudentDashboard from "./components/studentDashboard/studentDashboard";
// // import Header from "./components/header/Header";
// // function App() {
// //   const [count, setCount] = useState(0);

// //   return (
// //     <>
// //       {/* <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p> */}
// //       <StudentDashboard />

// //       {/* <Header /> */}
// //     </>
// //   );
// // }

// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Import all pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import StudentDashboard from "./pages/StudentDashboard";
// import RecruiterDashboard from "./pages/RecruiterDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
// import OpportunityHub from "./pages/OpportunityHub";
// import Challenges from "./pages/Challenges";
// import DocumentVerification from "./pages/DocumentVerification";
// import AIMentor from "./pages/AIMentor";
// import StudentProfile from "./pages/StudentProfile";
// import RecruiterProfile from "./pages/RecruiterProfile";
// import Reports from "./pages/Reports";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import FAQ from "./pages/FAQ";
// import Terms from "./pages/Terms";
// import Privacy from "./pages/Privacy";
// import Notifications from "./pages/Notifications";
// import Settings from "./pages/Settings";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen gradient-bg">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/student-dashboard" element={<StudentDashboard />} />
//           <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/opportunities" element={<OpportunityHub />} />
//           <Route path="/challenges" element={<Challenges />} />
//           <Route path="/documents" element={<DocumentVerification />} />
//           <Route path="/ai-mentor" element={<AIMentor />} />
//           <Route path="/student-profile" element={<StudentProfile />} />
//           <Route path="/recruiter-profile" element={<RecruiterProfile />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/privacy" element={<Privacy />} />
//           <Route path="/notifications" element={<Notifications />} />
//           <Route path="/settings" element={<Settings />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
// import { AppProvider } from "./contexts/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages for better performance
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const StudentDashboard = React.lazy(() => import("./pages/StudentDashboard"));
const RecruiterDashboard = React.lazy(() =>
  import("./pages/RecruiterDashboard")
);
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"));
const OpportunityHub = React.lazy(() => import("./pages/OpportunityHub"));
const Challenges = React.lazy(() => import("./pages/Challenges"));
const DocumentVerification = React.lazy(() =>
  import("./pages/DocumentVerification")
);
const AIMentor = React.lazy(() => import("./pages/AIMentor"));
// const StudentProfile = React.lazy(() => import("./pages/StudentProfile"));
// const RecruiterProfile = React.lazy(() => import("./pages/RecruiterProfile"));
// const Reports = React.lazy(() => import("./pages/Reports"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
// const Terms = React.lazy(() => import("./pages/Terms"));
// const Privacy = React.lazy(() => import("./pages/Privacy"));
// const Notifications = React.lazy(() => import("./pages/Notifications"));
// const Settings = React.lazy(() => import("./pages/Settings"));

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner size="lg" text="Checking authentication..." />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

// Suspense wrapper for lazy loading
const SuspenseWrapper = ({ children }) => (
  <React.Suspense
    fallback={<LoadingSpinner size="lg" text="Loading page..." />}
  >
    {children}
  </React.Suspense>
);

function AppContent() {
  const { theme } = useApp();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Router>
        <Navbar />
        <main className="min-h-screen">
          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={
                  <SuspenseWrapper>
                    <Home />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/login"
                element={
                  <SuspenseWrapper>
                    <Login />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/signup"
                element={
                  <SuspenseWrapper>
                    <Signup />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <SuspenseWrapper>
                    <About />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <SuspenseWrapper>
                    <Contact />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/faq"
                element={
                  <SuspenseWrapper>
                    <FAQ />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/terms"
                element={
                  <SuspenseWrapper>
                    <Terms />
                  </SuspenseWrapper>
                }
              />
              {/* <Route
                path="/privacy"
                element={
                  <SuspenseWrapper>
                    <Privacy />
                  </SuspenseWrapper>
                }
              /> */}

              {/* Protected Routes */}
              <Route
                path="/student-dashboard"
                element={
                  <ProtectedRoute requiredRole="student">
                    <SuspenseWrapper>
                      <StudentDashboard />
                    </SuspenseWrapper>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/recruiter-dashboard"
                element={
                  <ProtectedRoute requiredRole="recruiter">
                    <SuspenseWrapper>
                      <RecruiterDashboard />
                    </SuspenseWrapper>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <SuspenseWrapper>
                      <AdminDashboard />
                    </SuspenseWrapper>
                  </ProtectedRoute>
                }
              />

              {/* Add other protected routes similarly */}
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppProvider>
          <AppContent />
        </AppProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
