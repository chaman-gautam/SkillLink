// StudentDashboard.jsx
import React, { useEffect, useRef, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StudentDashboard = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [assignmentsDue, setAssignmentsDue] = useState(0);
  const [upcomingExams, setUpcomingExams] = useState(0);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Chart data
  const barChartData = {
    labels: [
      "Data Structures",
      "Calculus",
      "Web Dev",
      "Database",
      "Algorithms",
    ],
    datasets: [
      {
        label: "Grade %",
        data: [92, 85, 88, 79, 94],
        backgroundColor: "rgba(0, 255, 252, 0.5)",
        borderColor: "rgba(0, 255, 252, 1)",
        borderWidth: 1,
        borderRadius: 5,
        hoverBackgroundColor: "rgba(212, 191, 255, 0.5)",
      },
    ],
  };

  const pieChartData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: [
          "rgba(0, 255, 252, 0.7)",
          "rgba(212, 191, 255, 0.7)",
          "rgba(255, 99, 132, 0.7)",
        ],
        borderColor: [
          "rgba(0, 255, 252, 1)",
          "rgba(212, 191, 255, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 15,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#ccd6f6",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#ccd6f6",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ccd6f6",
        },
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ccd6f6",
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  // Courses data
  const courses = [
    {
      id: 1,
      icon: "CS",
      name: "Data Structures",
      instructor: "Dr. Emily Chen",
      progress: 75,
    },
    {
      id: 2,
      icon: "MA",
      name: "Calculus II",
      instructor: "Prof. Robert Smith",
      progress: 60,
    },
    {
      id: 3,
      icon: "WD",
      name: "Web Development",
      instructor: "Dr. Sarah Williams",
      progress: 85,
    },
  ];

  // Assignments data
  const assignments = [
    {
      id: 1,
      icon: "fas fa-laptop-code",
      title: "Data Structures Project - Binary Trees",
      details: "Due: Oct 15, 2023 | CS201",
      status: "urgent",
    },
    {
      id: 2,
      icon: "fas fa-calculator",
      title: "Calculus Problem Set #5",
      details: "Due: Oct 18, 2023 | MATH202",
      status: "pending",
    },
    {
      id: 3,
      icon: "fas fa-file-code",
      title: "Web Dev - React Portfolio",
      details: "Due: Oct 22, 2023 | WEB301",
      status: "pending",
    },
    {
      id: 4,
      icon: "fas fa-database",
      title: "Database Design Assignment",
      details: "Due: Oct 25, 2023 | DB401",
      status: "completed",
    },
  ];

  // Menu items
  const menuItems = [
    { id: "dashboard", icon: "fas fa-home", label: "Dashboard" },
    {
      id: "skill-passport",
      icon: "fas fa-book",
      label: "Skill Passport",
      link: "skill_passport2.html",
    },
    {
      id: "assignments",
      icon: "fas fa-tasks",
      label: "Assignments",
      link: "challanges.html",
    },
    {
      id: "schedule",
      icon: "fas fa-calendar-alt",
      label: "Schedule",
      link: "calendar.html",
    },
    {
      id: "library",
      icon: "fas fa-book-open",
      label: "Library",
      link: "library.html",
    },
    {
      id: "skill-network",
      icon: "fas fa-chart-line",
      label: "Skill network",
      link: "skill_network.html",
    },
    {
      id: "portfolio",
      icon: "fas fa-briefcase",
      label: "Portfolio",
      link: "portfolio.html",
    },
    {
      id: "resume",
      icon: "fas fa-tasks",
      label: "Build Your Resume",
      link: "resume_builder.html",
    },
    {
      id: "settings",
      icon: "fas fa-cog",
      label: "Settings",
      link: "settings.html",
    },
    {
      id: "signout",
      icon: "fas fa-sign-out",
      label: "Sign out",
      link: "landing2.html",
    },
  ];

  // Animate counters on component mount
  useEffect(() => {
    const animateCounter = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 10);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 10);
    };

    animateCounter(setCoursesCount, 5, 1000);
    animateCounter(setAssignmentsDue, 3, 1000);
    animateCounter(setUpcomingExams, 2, 1000);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0a192f] to-[#152a4e] text-white overflow-x-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#0a192f] bg-opacity-90 p-5 border-r border-cyan-400 border-opacity-20 shadow-lg shadow-cyan-400/10">
        <div className="flex items-center mb-8 p-3 rounded-lg bg-cyan-400 bg-opacity-10 shadow-lg shadow-cyan-400/70">
          <i className="fas fa-graduation-cap text-cyan-400 text-xl mr-3"></i>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
            <a href="home.html" className="no-underline text-white">
              SkillLink
            </a>
          </h1>
        </div>

        <div className="text-xs uppercase text-purple-300 mt-5 mb-3 pl-3 tracking-wide">
          Main Menu
        </div>

        {menuItems.slice(0, 4).map((item) => (
          <a
            key={item.id}
            href={item.link || "#"}
            className={`flex items-center p-3 my-2 rounded-lg transition-all duration-300 no-underline ${
              activeMenu === item.id
                ? "bg-cyan-400 bg-opacity-15 shadow-lg shadow-cyan-400/70 text-white"
                : "text-[#ccd6f6] hover:bg-cyan-400 hover:bg-opacity-10 hover:shadow-lg hover:shadow-cyan-400/70 hover:text-white"
            }`}
            onClick={() => !item.link && setActiveMenu(item.id)}
          >
            <i
              className={`${item.icon} text-cyan-400 text-lg mr-3 w-6 text-center`}
            ></i>
            <span>{item.label}</span>
          </a>
        ))}

        <div className="text-xs uppercase text-purple-300 mt-5 mb-3 pl-3 tracking-wide">
          Resources
        </div>

        {menuItems.slice(4).map((item) => (
          <a
            key={item.id}
            href={item.link || "#"}
            className={`flex items-center p-3 my-2 rounded-lg transition-all duration-300 no-underline ${
              activeMenu === item.id
                ? "bg-cyan-400 bg-opacity-15 shadow-lg shadow-cyan-400/70 text-white"
                : "text-[#ccd6f6] hover:bg-cyan-400 hover:bg-opacity-10 hover:shadow-lg hover:shadow-cyan-400/70 hover:text-white"
            }`}
            onClick={() => !item.link && setActiveMenu(item.id)}
          >
            <i
              className={`${item.icon} text-cyan-400 text-lg mr-3 w-6 text-center`}
            ></i>
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center bg-[#142846] bg-opacity-80 px-5 py-3 rounded-full w-96 shadow-lg border border-cyan-400 border-opacity-20">
            <i className="fas fa-search text-cyan-400 mr-3"></i>
            <input
              type="text"
              placeholder="Search courses, assignments, resources..."
              className="bg-transparent border-none outline-none text-white w-full"
            />
          </div>

          <a href="profile2.html" className="no-underline text-white">
            <div className="flex items-center">
              <div className="text-right mr-4">
                <div className="font-semibold">Tech Alchemists</div>
                <div className="text-xs text-purple-300">Computer Science</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-300 flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-400/70">
                TA
              </div>
            </div>
          </a>
        </div>

        {/* Dashboard Title */}
        <h2 className="text-2xl mb-5 pl-3 border-l-4 border-cyan-400 text-shadow shadow-cyan-400/70">
          Student Dashboard
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          <div className="bg-[#142846] bg-opacity-80 rounded-xl p-5 flex flex-col shadow-lg border border-cyan-400 border-opacity-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/70">
            <div className="w-12 h-12 rounded-full bg-cyan-400 bg-opacity-10 flex items-center justify-center text-cyan-400 text-xl mb-4">
              <i className="fas fa-book"></i>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
              {coursesCount}
            </div>
            <div className="text-sm text-[#ccd6f6]">Active Courses</div>
          </div>

          <div className="bg-[#142846] bg-opacity-80 rounded-xl p-5 flex flex-col shadow-lg border border-cyan-400 border-opacity-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/70">
            <div className="w-12 h-12 rounded-full bg-cyan-400 bg-opacity-10 flex items-center justify-center text-cyan-400 text-xl mb-4">
              <i className="fas fa-tasks"></i>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
              {assignmentsDue}
            </div>
            <div className="text-sm text-[#ccd6f6]">Assignments Due</div>
          </div>

          <div className="bg-[#142846] bg-opacity-80 rounded-xl p-5 flex flex-col shadow-lg border border-cyan-400 border-opacity-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/70">
            <div className="w-12 h-12 rounded-full bg-cyan-400 bg-opacity-10 flex items-center justify-center text-cyan-400 text-xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
              {upcomingExams}
            </div>
            <div className="text-sm text-[#ccd6f6]">Upcoming Exams</div>
          </div>

          <div className="bg-[#142846] bg-opacity-80 rounded-xl p-5 flex flex-col shadow-lg border border-cyan-400 border-opacity-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/70">
            <div className="w-12 h-12 rounded-full bg-cyan-400 bg-opacity-10 flex items-center justify-center text-cyan-400 text-xl mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
              88%
            </div>
            <div className="text-sm text-[#ccd6f6]">Average Grade</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          <div className="col-span-2 bg-[#142846] bg-opacity-80 rounded-xl p-5 shadow-lg border border-cyan-400 border-opacity-10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-300/70">
            <div className="text-lg mb-4 flex items-center text-purple-300">
              <i className="fas fa-chart-bar text-cyan-400 mr-2"></i>
              Grade Distribution
            </div>
            <div className="h-64">
              <Bar data={barChartData} options={chartOptions} />
            </div>
          </div>

          <div className="bg-[#142846] bg-opacity-80 rounded-xl p-5 shadow-lg border border-cyan-400 border-opacity-10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-300/70">
            <div className="text-lg mb-4 flex items-center text-purple-300">
              <i className="fas fa-chart-pie text-cyan-400 mr-2"></i>
              Course Breakdown
            </div>
            <div className="h-64">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <h2 className="text-2xl mb-5 pl-3 border-l-4 border-cyan-400 text-shadow shadow-cyan-400/70">
          My Courses
        </h2>

        <div className="grid grid-cols-3 gap-5 mb-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#142846] bg-opacity-80 rounded-xl p-5 shadow-lg border border-purple-300 border-opacity-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-300/70"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-300 flex items-center justify-center font-bold text-lg mr-4">
                  {course.icon}
                </div>
                <div>
                  <div className="text-lg font-semibold">{course.name}</div>
                  <div className="text-sm text-purple-300">
                    {course.instructor}
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-[#ccd6f6] mt-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-300 text-[#0a192f] font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-cyan-400/70">
                  Continue
                </button>
                <button className="px-4 py-2 rounded-full bg-transparent text-purple-300 border border-purple-300 font-medium transition-all duration-300 hover:bg-purple-300 hover:bg-opacity-10 hover:shadow-lg hover:shadow-purple-300/70">
                  Resources
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Assignments Section */}
        <h2 className="text-2xl mb-5 pl-3 border-l-4 border-cyan-400 text-shadow shadow-cyan-400/70">
          Upcoming Assignments
        </h2>

        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-[#142846] bg-opacity-80 rounded-xl p-4 flex items-center shadow-lg border border-purple-300 border-opacity-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-300/70"
            >
              <div className="w-12 h-12 rounded-full bg-purple-300 bg-opacity-10 flex items-center justify-center text-purple-300 text-xl mr-4">
                <i className={assignment.icon}></i>
              </div>

              <div className="flex-1">
                <div className="font-semibold">{assignment.title}</div>
                <div className="text-sm text-[#ccd6f6]">
                  {assignment.details}
                </div>
              </div>

              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  assignment.status === "urgent"
                    ? "bg-red-500 bg-opacity-20 text-red-500"
                    : assignment.status === "completed"
                    ? "bg-green-500 bg-opacity-20 text-green-500"
                    : "bg-yellow-500 bg-opacity-20 text-yellow-500"
                }`}
              >
                {assignment.status === "urgent"
                  ? "Urgent"
                  : assignment.status === "completed"
                  ? "Completed"
                  : "Pending"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
