// layouts/DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
// import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
