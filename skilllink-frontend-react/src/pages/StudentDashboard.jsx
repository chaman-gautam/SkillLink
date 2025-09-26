// StudentDashboard.jsx
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Link } from "react-router-dom";
Chart.register(...registerables);

const StudentDashboard = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const pieChartInstance = useRef(null);

  useEffect(() => {
    // Animated counters
    const animateCounter = (elementId, targetValue, duration) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const startValue = 0;
      const increment = Math.ceil(targetValue / (duration / 20));
      let currentValue = startValue;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          clearInterval(timer);
          currentValue = targetValue;
        }
        element.textContent = currentValue;
      }, 20);
    };

    animateCounter("courses-count", 5, 1000);
    animateCounter("assignments-due", 3, 1000);
    animateCounter("upcoming-exams", 2, 1000);

    // Create bar chart
    if (barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      barChartInstance.current = new Chart(barChartRef.current, {
        type: "bar",
        data: {
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
        },
        options: {
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
        },
      });
    }

    // Create pie chart
    if (pieChartRef.current) {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }

      pieChartInstance.current = new Chart(pieChartRef.current, {
        type: "pie",
        data: {
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
        },
        options: {
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
        },
      });
    }

    return () => {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0a192f] to-[#152a4e] text-white overflow-x-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[rgba(10,25,47,0.9)] p-5 border-r border-[rgba(0,255,252,0.2)] shadow-[0_0_15px_rgba(0,255,252,0.1)]">
        <div className="flex items-center mb-8 p-3 rounded-lg bg-[rgba(0,255,252,0.1)] shadow-[0_0_10px_rgba(0,255,252,0.7)]">
          <i className="fas fa-graduation-cap text-2xl text-[#00fffc] mr-3"></i>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-[#00fffc] to-[#d4bfff] bg-clip-text text-transparent">
            <a href="home.html" className="no-underline text-white">
              SkillLink
            </a>
          </h1>
        </div>
        <div className="text-xs uppercase text-[#d4bfff] my-5 pl-3 tracking-wider">
          Main Menu
        </div>
        <div className="flex items-center p-3 my-2 rounded-lg bg-[rgba(0,255,252,0.15)] shadow-[0_0_10px_rgba(0,255,252,0.7)] text-white cursor-pointer">
          <i className="fas fa-home text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
          <span>Dashboard</span>
        </div>
        <Link to="/skillpassport" className="no-underline">
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-book text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Skill Passport</span>
          </div>
        </Link>
        <a href="challanges.html" className="no-underline">
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-tasks text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Assignments</span>
          </div>
        </a>
        <a href="calendar.html" className="no-underline">
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-calendar-alt text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Schedule</span>
          </div>
        </a>
        <div className="text-xs uppercase text-[#d4bfff] my-5 pl-3 tracking-wider">
          Resources
        </div>
        <a href="library.html" className="no-underline">
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-book-open text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Library</span>
          </div>
        </a>
        <a href="skill_network.html" className="no-underline">
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-chart-line text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Skill Network</span>
          </div>
        </a>
        <a href="portfolio.html" className="no-underline">
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-briefcase text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Portfolio</span>
          </div>
        </a>
        <Link to={"/resumebuilder"}>
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-tasks text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Build Your Resume</span>
          </div>
        </Link>
        <Link to={"/settings"} className="no-underline">
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-cog text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Settings</span>
          </div>
        </Link>

        <a href="landing2.html" className="no-underline">
          <div className="flex items-center p-3 my-2 rounded-lg text-[#ccd6f6] hover:bg-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] hover:text-white cursor-pointer transition-all duration-300">
            <i className="fas fa-sign-out-alt text-lg text-[#00fffc] mr-3 w-6 text-center"></i>
            <span>Sign Out</span>
          </div>
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center bg-[rgba(20,40,70,0.8)] p-3 rounded-full w-96 shadow-lg border border-[rgba(0,255,252,0.2)]">
            <i className="fas fa-search text-[#00fffc] mr-3"></i>
            <input
              type="text"
              placeholder="Search courses, assignments, resources..."
              className="bg-transparent border-none outline-none text-white text-base w-full p-1"
            />
          </div>

          <a href="profile2.html" className="no-underline text-white">
            <div className="flex items-center">
              <div className="text-right mr-4">
                <div className="font-semibold text-base">Tech Alchemists</div>
                <div className="text-xs text-[#d4bfff]">Computer Science</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00fffc] to-[#d4bfff] flex items-center justify-center font-bold text-lg shadow-[0_0_10px_rgba(0,255,252,0.7)]">
                TA
              </div>
            </div>
          </a>
        </div>

        <h2 className="text-2xl mb-5 pl-3 border-l-4 border-[#00fffc] text-shadow-[0_0_10px_rgba(0,255,252,0.7)]">
          Student Dashboard
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-5 flex flex-col shadow-lg border border-[rgba(0,255,252,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,255,252,0.1)] text-[#00fffc] flex items-center justify-center text-xl mb-4">
              <i className="fas fa-book"></i>
            </div>
            <div
              id="courses-count"
              className="text-3xl font-bold bg-gradient-to-r from-[#00fffc] to-[#d4bfff] bg-clip-text text-transparent"
            >
              0
            </div>
            <div className="text-[#ccd6f6] text-sm">Active Courses</div>
          </div>

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-5 flex flex-col shadow-lg border border-[rgba(0,255,252,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,255,252,0.1)] text-[#00fffc] flex items-center justify-center text-xl mb-4">
              <i className="fas fa-tasks"></i>
            </div>
            <div
              id="assignments-due"
              className="text-3xl font-bold bg-gradient-to-r from-[#00fffc] to-[#d4bfff] bg-clip-text text-transparent"
            >
              0
            </div>
            <div className="text-[#ccd6f6] text-sm">Assignments Due</div>
          </div>

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-5 flex flex-col shadow-lg border border-[rgba(0,255,252,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,255,252,0.1)] text-[#00fffc] flex items-center justify-center text-xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <div
              id="upcoming-exams"
              className="text-3xl font-bold bg-gradient-to-r from-[#00fffc] to-[#d4bfff] bg-clip-text text-transparent"
            >
              0
            </div>
            <div className="text-[#ccd6f6] text-sm">Upcoming Exams</div>
          </div>

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-5 flex flex-col shadow-lg border border-[rgba(0,255,252,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,255,252,0.1)] text-[#00fffc] flex items-center justify-center text-xl mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#00fffc] to-[#d4bfff] bg-clip-text text-transparent">
              88%
            </div>
            <div className="text-[#ccd6f6] text-sm">Average Grade</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          <div className="col-span-2 bg-[rgba(20,40,70,0.8)] rounded-xl p-5 shadow-lg border border-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="text-lg mb-4 flex items-center text-[#d4bfff]">
              <i className="fas fa-chart-bar text-[#00fffc] mr-3"></i>
              Grade Distribution
            </div>
            <div className="h-64">
              <canvas ref={barChartRef}></canvas>
            </div>
          </div>

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-5 shadow-lg border border-[rgba(0,255,252,0.1)] hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="text-lg mb-4 flex items-center text-[#d4bfff]">
              <i className="fas fa-chart-pie text-[#00fffc] mr-3"></i>
              Course Breakdown
            </div>
            <div className="h-64">
              <canvas ref={pieChartRef}></canvas>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <h2 className="text-2xl mb-5 pl-3 border-l-4 border-[#00fffc] text-shadow-[0_0_10px_rgba(0,255,252,0.7)]">
          My Courses
        </h2>

        <div className="grid grid-cols-3 gap-5 mb-8">
          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-5 shadow-lg border border-[rgba(212,191,255,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00fffc] to-[#d4bfff] flex items-center justify-center font-bold text-xl mr-4">
                CS
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold mb-1">
                  Data Structures
                </div>
                <div className="text-sm text-[#d4bfff]">Dr. Emily Chen</div>
              </div>
            </div>
            <div className="my-4">
              <div className="h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00fffc] to-[#d4bfff]"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-[#ccd6f6] mt-1">
                <span>Progress</span>
                <span>75%</span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#00fffc] to-[#d4bfff] text-[#0a192f] border-none hover:opacity-90 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
                Continue
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-transparent text-[#d4bfff] border border-[#d4bfff] hover:opacity-90 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
                Resources
              </button>
            </div>
          </div>

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-5 shadow-lg border border-[rgba(212,191,255,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00fffc] to-[#d4bfff] flex items-center justify-center font-bold text-xl mr-4">
                MA
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold mb-1">Calculus II</div>
                <div className="text-sm text-[#d4bfff]">Prof. Robert Smith</div>
              </div>
            </div>
            <div className="my-4">
              <div className="h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00fffc] to-[#d4bfff]"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-[#ccd6f6] mt-1">
                <span>Progress</span>
                <span>60%</span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#00fffc] to-[#d4bfff] text-[#0a192f] border-none hover:opacity-90 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
                Continue
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-transparent text-[#d4bfff] border border-[#d4bfff] hover:opacity-90 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
                Resources
              </button>
            </div>
          </div>

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-5 shadow-lg border border-[rgba(212,191,255,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00fffc] to-[#d4bfff] flex items-center justify-center font-bold text-xl mr-4">
                WD
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold mb-1">
                  Web Development
                </div>
                <div className="text-sm text-[#d4bfff]">Dr. Sarah Williams</div>
              </div>
            </div>
            <div className="my-4">
              <div className="h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00fffc] to-[#d4bfff]"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-[#ccd6f6] mt-1">
                <span>Progress</span>
                <span>85%</span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#00fffc] to-[#d4bfff] text-[#0a192f] border-none hover:opacity-90 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
                Continue
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-transparent text-[#d4bfff] border border-[#d4bfff] hover:opacity-90 hover:shadow-[0_0_10px_rgba(0,255,252,0.7)] transition-all duration-300">
                Resources
              </button>
            </div>
          </div>
        </div>

        {/* Assignments Section */}
        <h2 className="text-2xl mb-5 pl-3 border-l-4 border-[#00fffc] text-shadow-[0_0_10px_rgba(0,255,252,0.7)]">
          Upcoming Assignments
        </h2>

        <div className="space-y-4">
          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-4 flex items-center shadow-lg border border-[rgba(212,191,255,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,191,255,0.1)] text-[#d4bfff] flex items-center justify-center text-xl mr-4">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold mb-1">
                Data Structures Project - Binary Trees
              </div>
              <div className="text-xs text-[#ccd6f6]">
                Due: Oct 15, 2023 | CS201
              </div>
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(220,53,69,0.2)] text-[#dc3545]">
              Urgent
            </div>
          </div>

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-4 flex items-center shadow-lg border border-[rgba(212,191,255,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,191,255,0.1)] text-[#d4bfff] flex items-center justify-center text-xl mr-4">
              <i className="fas fa-calculator"></i>
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold mb-1">
                Calculus Problem Set #5
              </div>
              <div className="text-xs text-[#ccd6f6]">
                Due: Oct 18, 2023 | MATH202
              </div>
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(255,193,7,0.2)] text-[#ffc107]">
              Pending
            </div>
          </div>

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-4 flex items-center shadow-lg border border-[rgba(212,191,255,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,191,255,0.1)] text-[#d4bfff] flex items-center justify-center text-xl mr-4">
              <i className="fas fa-file-code"></i>
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold mb-1">
                Web Dev - React Portfolio
              </div>
              <div className="text-xs text-[#ccd6f6]">
                Due: Oct 22, 2023 | WEB301
              </div>
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(255,193,7,0.2)] text-[#ffc107]">
              Pending
            </div>
          </div>
          {/* /* Other Tab Content */}

          <div className="bg-[rgba(20,40,70,0.8)] rounded-xl p-4 flex items-center shadow-lg border border-[rgba(212,191,255,0.1)] hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(212,191,255,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,191,255,0.1)] text-[#d4bfff] flex items-center justify-center text-xl mr-4">
              <i className="fas fa-database"></i>
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold mb-1">
                Database Design Assignment
              </div>
              <div className="text-xs text-[#ccd6f6]">
                Due: Oct 25, 2023 | DB401
              </div>
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(40,167,69,0.2)] text-[#28a745]">
              Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

//  activeTab !== "Dashboard" && (
//    <motion.div
//      initial={{ opacity: 0 }}
//      animate={{ opacity: 1 }}
//      className="text-center py-20"
//    >
//      <div className="text-6xl mb-4">🚧</div>
//      <h2 className="text-2xl font-bold text-cyan-300 mb-2">{activeTab} Page</h2>
//      <p className="text-gray-400">This section is under construction</p>
//    </motion.div>
//  );
